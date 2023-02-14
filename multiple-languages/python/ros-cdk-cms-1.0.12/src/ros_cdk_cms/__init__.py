'''
## Aliyun ROS CMS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as CMS from '@alicloud/ros-cdk-cms';
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


class Contact(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.Contact",
):
    '''A ROS resource type:  ``ALIYUN::CMS::Contact``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ContactProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CMS::Contact``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__30a4934076a8d857ae1a28bc330b64811e65ecb00f0e8c995c8a4a8dc8992e30)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrContactName")
    def attr_contact_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ContactName: The name of the alarm contact.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrContactName"))


class ContactGroup(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.ContactGroup",
):
    '''A ROS resource type:  ``ALIYUN::CMS::ContactGroup``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ContactGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CMS::ContactGroup``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c7221b6247fcb398f492cdc289801bdbd5c16fcaa97831549fb8e2871193e6e1)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrContactGroupName")
    def attr_contact_group_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ContactGroupName: The name of the alert contact group.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrContactGroupName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cms.ContactGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "contact_group_name": "contactGroupName",
        "contact_names": "contactNames",
        "describe": "describe",
    },
)
class ContactGroupProps:
    def __init__(
        self,
        *,
        contact_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        contact_names: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        describe: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::CMS::ContactGroup``.

        :param contact_group_name: Property contactGroupName: The name of the alert contact group.
        :param contact_names: Property contactNames: The name of the alert contact.
        :param describe: Property describe: The description of the alert contact group.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e37b2562be96f2671b9bf87860634dab624436cb7a7d320a450e91048f38075c)
            check_type(argname="argument contact_group_name", value=contact_group_name, expected_type=type_hints["contact_group_name"])
            check_type(argname="argument contact_names", value=contact_names, expected_type=type_hints["contact_names"])
            check_type(argname="argument describe", value=describe, expected_type=type_hints["describe"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "contact_group_name": contact_group_name,
            "contact_names": contact_names,
            "describe": describe,
        }

    @builtins.property
    def contact_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property contactGroupName: The name of the alert contact group.'''
        result = self._values.get("contact_group_name")
        assert result is not None, "Required property 'contact_group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def contact_names(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''Property contactNames: The name of the alert contact.'''
        result = self._values.get("contact_names")
        assert result is not None, "Required property 'contact_names' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def describe(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property describe: The description of the alert contact group.'''
        result = self._values.get("describe")
        assert result is not None, "Required property 'describe' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ContactGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cms.ContactProps",
    jsii_struct_bases=[],
    name_mapping={
        "channels": "channels",
        "contact_name": "contactName",
        "describe": "describe",
    },
)
class ContactProps:
    def __init__(
        self,
        *,
        channels: typing.Union[typing.Union["RosContact.ChannelsProperty", typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable],
        contact_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        describe: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::CMS::Contact``.

        :param channels: Property channels: undefined.
        :param contact_name: Property contactName: The name of the alarm contact.
        :param describe: Property describe: The description of the alert contact.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f2947461d3d600f9ce18ee8da7b44d5a4b2354885c4d3124f8239573c943fe29)
            check_type(argname="argument channels", value=channels, expected_type=type_hints["channels"])
            check_type(argname="argument contact_name", value=contact_name, expected_type=type_hints["contact_name"])
            check_type(argname="argument describe", value=describe, expected_type=type_hints["describe"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "channels": channels,
            "contact_name": contact_name,
            "describe": describe,
        }

    @builtins.property
    def channels(
        self,
    ) -> typing.Union["RosContact.ChannelsProperty", _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property channels: undefined.'''
        result = self._values.get("channels")
        assert result is not None, "Required property 'channels' is missing"
        return typing.cast(typing.Union["RosContact.ChannelsProperty", _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def contact_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property contactName: The name of the alarm contact.'''
        result = self._values.get("contact_name")
        assert result is not None, "Required property 'contact_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def describe(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property describe: The description of the alert contact.'''
        result = self._values.get("describe")
        assert result is not None, "Required property 'describe' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ContactProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class DynamicTagGroup(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.DynamicTagGroup",
):
    '''A ROS resource type:  ``ALIYUN::CMS::DynamicTagGroup``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DynamicTagGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CMS::DynamicTagGroup``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6e8ebac5e5acab1bdd317094b16a7c2503b42f02f2f9ef547d9dd326914cbab3)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDynamicTagRuleId")
    def attr_dynamic_tag_rule_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DynamicTagRuleId: Dynamic tag rule ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDynamicTagRuleId"))

    @builtins.property
    @jsii.member(jsii_name="attrTagKey")
    def attr_tag_key(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TagKey: Tag key.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTagKey"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cms.DynamicTagGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "contact_group_list": "contactGroupList",
        "tag_key": "tagKey",
        "enable_install_agent": "enableInstallAgent",
        "enable_subscribe_event": "enableSubscribeEvent",
        "match_express": "matchExpress",
        "match_express_filter_relation": "matchExpressFilterRelation",
        "template_id_list": "templateIdList",
    },
)
class DynamicTagGroupProps:
    def __init__(
        self,
        *,
        contact_group_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        tag_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        enable_install_agent: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_subscribe_event: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        match_express: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosDynamicTagGroup.MatchExpressProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        match_express_filter_relation: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        template_id_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CMS::DynamicTagGroup``.

        :param contact_group_list: Property contactGroupList: Alarm contacts.
        :param tag_key: Property tagKey: Tag key.
        :param enable_install_agent: Property enableInstallAgent: Whether to enable initial installation monitoring plug, not installed by default. Values are: true: enable installation Note If ECS generated instances group does not monitor plug-in installed will attempt to automatically install. false: disable installation
        :param enable_subscribe_event: Property enableSubscribeEvent: Whether the event subscription is enabled. Values are :true: enable event subscription false: disable event subscription
        :param match_express: Property matchExpress: Matching list. Only supports one currently.
        :param match_express_filter_relation: Property matchExpressFilterRelation: The relationship between the conditional expressions. Values are: and: the relationship between or: the relationship or the Description currently supports only one combination of conditions, the follow-up Ali cloud will support a variety of combinations of conditions.
        :param template_id_list: Property templateIdList: Alarm template ID list. When the automatically generated application group synchronizes tags, it will generate alarm rules according to the specified alarm template.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b88a5c89e25fac9298be523c7879699f966da7c704a8cd69a28a67c8a1d812fb)
            check_type(argname="argument contact_group_list", value=contact_group_list, expected_type=type_hints["contact_group_list"])
            check_type(argname="argument tag_key", value=tag_key, expected_type=type_hints["tag_key"])
            check_type(argname="argument enable_install_agent", value=enable_install_agent, expected_type=type_hints["enable_install_agent"])
            check_type(argname="argument enable_subscribe_event", value=enable_subscribe_event, expected_type=type_hints["enable_subscribe_event"])
            check_type(argname="argument match_express", value=match_express, expected_type=type_hints["match_express"])
            check_type(argname="argument match_express_filter_relation", value=match_express_filter_relation, expected_type=type_hints["match_express_filter_relation"])
            check_type(argname="argument template_id_list", value=template_id_list, expected_type=type_hints["template_id_list"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "contact_group_list": contact_group_list,
            "tag_key": tag_key,
        }
        if enable_install_agent is not None:
            self._values["enable_install_agent"] = enable_install_agent
        if enable_subscribe_event is not None:
            self._values["enable_subscribe_event"] = enable_subscribe_event
        if match_express is not None:
            self._values["match_express"] = match_express
        if match_express_filter_relation is not None:
            self._values["match_express_filter_relation"] = match_express_filter_relation
        if template_id_list is not None:
            self._values["template_id_list"] = template_id_list

    @builtins.property
    def contact_group_list(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''Property contactGroupList: Alarm contacts.'''
        result = self._values.get("contact_group_list")
        assert result is not None, "Required property 'contact_group_list' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def tag_key(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property tagKey: Tag key.'''
        result = self._values.get("tag_key")
        assert result is not None, "Required property 'tag_key' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def enable_install_agent(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enableInstallAgent: Whether to enable initial installation monitoring plug, not installed by default.

        Values are:
        true: enable installation
        Note If ECS generated instances group does not monitor plug-in installed will attempt to automatically install.
        false: disable installation
        '''
        result = self._values.get("enable_install_agent")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_subscribe_event(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enableSubscribeEvent: Whether the event subscription is enabled.

        Values are
        :true: enable event subscription
        false: disable event subscription
        '''
        result = self._values.get("enable_subscribe_event")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def match_express(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDynamicTagGroup.MatchExpressProperty"]]]]:
        '''Property matchExpress: Matching list.

        Only supports one currently.
        '''
        result = self._values.get("match_express")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDynamicTagGroup.MatchExpressProperty"]]]], result)

    @builtins.property
    def match_express_filter_relation(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property matchExpressFilterRelation: The relationship between the conditional expressions.

        Values are:
        and: the relationship between
        or: the relationship or the
        Description currently supports only one combination of conditions, the follow-up Ali cloud will support a variety of combinations of conditions.
        '''
        result = self._values.get("match_express_filter_relation")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def template_id_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property templateIdList: Alarm template ID list.

        When the automatically generated application group synchronizes tags, it will generate alarm rules according to the specified alarm template.
        '''
        result = self._values.get("template_id_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DynamicTagGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class EventRule(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.EventRule",
):
    '''A ROS resource type:  ``ALIYUN::CMS::EventRule``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["EventRuleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CMS::EventRule``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8ebeddbcd0d7fac1b09d031391136866474360ee602541eca89cafcdbb3cb58a)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrData")
    def attr_data(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Data: Number of rows affected.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrData"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cms.EventRuleProps",
    jsii_struct_bases=[],
    name_mapping={
        "event_pattern": "eventPattern",
        "rule_name": "ruleName",
        "description": "description",
        "event_type": "eventType",
        "group_id": "groupId",
        "state": "state",
    },
)
class EventRuleProps:
    def __init__(
        self,
        *,
        event_pattern: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosEventRule.EventPatternProperty", typing.Dict[builtins.str, typing.Any]]]]],
        rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        event_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        state: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CMS::EventRule``.

        :param event_pattern: Property eventPattern: Event pattern configuration.A maximum of 20 event patterns.
        :param rule_name: Property ruleName: The name of the alarm rule.
        :param description: Property description: The description of the alert rule.
        :param event_type: Property eventType: The type of the event alert. Valid values: SYSTEM CUSTOM
        :param group_id: Property groupId: The ID of the application group.
        :param state: Property state: The status of the alert rule. Valid values: ENABLED DISABLED
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f6116f9ebd0f2ec555a6920a6f36f7f312523363aa52e9c2bc35f4d5a47f41a3)
            check_type(argname="argument event_pattern", value=event_pattern, expected_type=type_hints["event_pattern"])
            check_type(argname="argument rule_name", value=rule_name, expected_type=type_hints["rule_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument event_type", value=event_type, expected_type=type_hints["event_type"])
            check_type(argname="argument group_id", value=group_id, expected_type=type_hints["group_id"])
            check_type(argname="argument state", value=state, expected_type=type_hints["state"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "event_pattern": event_pattern,
            "rule_name": rule_name,
        }
        if description is not None:
            self._values["description"] = description
        if event_type is not None:
            self._values["event_type"] = event_type
        if group_id is not None:
            self._values["group_id"] = group_id
        if state is not None:
            self._values["state"] = state

    @builtins.property
    def event_pattern(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEventRule.EventPatternProperty"]]]:
        '''Property eventPattern: Event pattern configuration.A maximum of 20 event patterns.'''
        result = self._values.get("event_pattern")
        assert result is not None, "Required property 'event_pattern' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEventRule.EventPatternProperty"]]], result)

    @builtins.property
    def rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property ruleName: The name of the alarm rule.'''
        result = self._values.get("rule_name")
        assert result is not None, "Required property 'rule_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the alert rule.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def event_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property eventType: The type of the event alert.

        Valid values:
        SYSTEM
        CUSTOM
        '''
        result = self._values.get("event_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property groupId: The ID of the application group.'''
        result = self._values.get("group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def state(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property state: The status of the alert rule.

        Valid values:
        ENABLED
        DISABLED
        '''
        result = self._values.get("state")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "EventRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class EventRuleTargets(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.EventRuleTargets",
):
    '''A ROS resource type:  ``ALIYUN::CMS::EventRuleTargets``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["EventRuleTargetsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CMS::EventRuleTargets``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a7974dcc898405bc59d7f640bd9bf70b43e416b7dcbb9cf54028eed119a9f7ab)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cms.EventRuleTargetsProps",
    jsii_struct_bases=[],
    name_mapping={
        "rule_name": "ruleName",
        "contact_parameters": "contactParameters",
        "fc_parameters": "fcParameters",
        "mns_parameters": "mnsParameters",
        "sls_parameters": "slsParameters",
        "webhook_parameters": "webhookParameters",
    },
)
class EventRuleTargetsProps:
    def __init__(
        self,
        *,
        rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        contact_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosEventRuleTargets.ContactParametersProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        fc_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosEventRuleTargets.FcParametersProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        mns_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosEventRuleTargets.MnsParametersProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        sls_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosEventRuleTargets.SlsParametersProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        webhook_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosEventRuleTargets.WebhookParametersProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CMS::EventRuleTargets``.

        :param rule_name: Property ruleName: The name of the alert rule.
        :param contact_parameters: Property contactParameters: CONTACT configuration.A maximum of 5 parameters.
        :param fc_parameters: Property fcParameters: FC configuration.A maximum of 5 parameters.
        :param mns_parameters: Property mnsParameters: MNS configuration.A maximum of 5 parameters.
        :param sls_parameters: Property slsParameters: SLS configuration.A maximum of 5 parameters.
        :param webhook_parameters: Property webhookParameters: WEBHOOK configuration.A maximum of 5 parameters.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c84cde2a1536057feaebdbe75ce2b10b79a4cd41618ea419d84f7f19a0d24df1)
            check_type(argname="argument rule_name", value=rule_name, expected_type=type_hints["rule_name"])
            check_type(argname="argument contact_parameters", value=contact_parameters, expected_type=type_hints["contact_parameters"])
            check_type(argname="argument fc_parameters", value=fc_parameters, expected_type=type_hints["fc_parameters"])
            check_type(argname="argument mns_parameters", value=mns_parameters, expected_type=type_hints["mns_parameters"])
            check_type(argname="argument sls_parameters", value=sls_parameters, expected_type=type_hints["sls_parameters"])
            check_type(argname="argument webhook_parameters", value=webhook_parameters, expected_type=type_hints["webhook_parameters"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "rule_name": rule_name,
        }
        if contact_parameters is not None:
            self._values["contact_parameters"] = contact_parameters
        if fc_parameters is not None:
            self._values["fc_parameters"] = fc_parameters
        if mns_parameters is not None:
            self._values["mns_parameters"] = mns_parameters
        if sls_parameters is not None:
            self._values["sls_parameters"] = sls_parameters
        if webhook_parameters is not None:
            self._values["webhook_parameters"] = webhook_parameters

    @builtins.property
    def rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property ruleName: The name of the alert rule.'''
        result = self._values.get("rule_name")
        assert result is not None, "Required property 'rule_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def contact_parameters(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEventRuleTargets.ContactParametersProperty"]]]]:
        '''Property contactParameters: CONTACT configuration.A maximum of 5 parameters.'''
        result = self._values.get("contact_parameters")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEventRuleTargets.ContactParametersProperty"]]]], result)

    @builtins.property
    def fc_parameters(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEventRuleTargets.FcParametersProperty"]]]]:
        '''Property fcParameters: FC configuration.A maximum of 5 parameters.'''
        result = self._values.get("fc_parameters")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEventRuleTargets.FcParametersProperty"]]]], result)

    @builtins.property
    def mns_parameters(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEventRuleTargets.MnsParametersProperty"]]]]:
        '''Property mnsParameters: MNS configuration.A maximum of 5 parameters.'''
        result = self._values.get("mns_parameters")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEventRuleTargets.MnsParametersProperty"]]]], result)

    @builtins.property
    def sls_parameters(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEventRuleTargets.SlsParametersProperty"]]]]:
        '''Property slsParameters: SLS configuration.A maximum of 5 parameters.'''
        result = self._values.get("sls_parameters")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEventRuleTargets.SlsParametersProperty"]]]], result)

    @builtins.property
    def webhook_parameters(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEventRuleTargets.WebhookParametersProperty"]]]]:
        '''Property webhookParameters: WEBHOOK configuration.A maximum of 5 parameters.'''
        result = self._values.get("webhook_parameters")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEventRuleTargets.WebhookParametersProperty"]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "EventRuleTargetsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class GroupMetricRule(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.GroupMetricRule",
):
    '''A ROS resource type:  ``ALIYUN::CMS::GroupMetricRule``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["GroupMetricRuleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CMS::GroupMetricRule``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__699e8dbeacaecb889a0d4224e6ec511f9e80618934c8b28cfccd7809ea3bd6b1)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrRuleId")
    def attr_rule_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RuleId: Rule ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRuleId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cms.GroupMetricRuleProps",
    jsii_struct_bases=[],
    name_mapping={
        "category": "category",
        "escalations": "escalations",
        "group_id": "groupId",
        "metric_name": "metricName",
        "namespace": "namespace",
        "rule_id": "ruleId",
        "rule_name": "ruleName",
        "dimensions": "dimensions",
        "effective_interval": "effectiveInterval",
        "email_subject": "emailSubject",
        "interval": "interval",
        "no_effective_interval": "noEffectiveInterval",
        "period": "period",
        "silence_time": "silenceTime",
        "webhook": "webhook",
    },
)
class GroupMetricRuleProps:
    def __init__(
        self,
        *,
        category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        escalations: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosGroupMetricRule.EscalationsProperty", typing.Dict[builtins.str, typing.Any]]],
        group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        metric_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        namespace: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        rule_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        dimensions: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        effective_interval: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        email_subject: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        no_effective_interval: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        silence_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        webhook: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CMS::GroupMetricRule``.

        :param category: Property category: The abbreviation of the service name. Valid values: ECS (including Alibaba Cloud and non-Alibaba Cloud hosts) RDS (ApsaraDB for RDS) ADS (AnalyticDB) SLB (Server Load Balancer) VPC (Virtual Private Cloud) APIGATEWAY (API Gateway) CDN CS (Container Service for Swarm) DCDN (Dynamic Route for CDN) DDoS (distributed denial of service) EIP (Elastic IP) ELASTICSEARCH (Elasticsearch) EMR (E-MapReduce) ESS (Auto Scaling) HBASE (ApsaraDB for HBase) IOT_EDGE (IoT Edge) K8S_POD (k8s pod) KVSTORE_SHARDING (ApsaraDB for Redis cluster version) KVSTORE_SPLITRW (ApsaraDB for Redis read/write splitting version) KVSTORE_STANDARD (ApsaraDB for Redis standard version) MEMCACHE (ApsaraDB for Memcache) MNS (Message Service) MONGODB (ApsaraDB for MongoDB replica set instances) MONGODB_CLUSTER (ApsaraDB for MongoDB cluster version) MONGODB_SHARDING (ApsaraDB for MongoDB sharded clusters) MQ_TOPIC (Message Service topic) OCS (original version of ApsaraDB for Memcache) OPENSEARCH (Open Search) OSS (Object Storage Service) POLARDB (ApsaraDB for POLARDB) PETADATA (HybridDB for MySQL) SCDN (Secure Content Delivery Network) SHAREBANDWIDTHPACKAGES (shared bandwidth package) SLS (Log Service) VPN (VPN Gateway)
        :param escalations: Property escalations: undefined.
        :param group_id: Property groupId: The ID of application group.
        :param metric_name: Property metricName: The name of the metric. For more information, call DescribeMetricMetaList or see Preset metrics reference.
        :param namespace: Property namespace: The data namespace of the service. For more information, call DescribeMetricMetaList or see Preset metrics reference.
        :param rule_id: Property ruleId: The ID of the alert rule. The IDs of alert rules are generated by callers to ensure uniqueness.
        :param rule_name: Property ruleName: The name of the alert rule.
        :param dimensions: Property dimensions: The expended resource dimensions.
        :param effective_interval: Property effectiveInterval: The period when the alert rule is effective.
        :param email_subject: Property emailSubject: The subject of the alert notification email.
        :param interval: Property interval: The detection period of alerts.
        :param no_effective_interval: Property noEffectiveInterval: The period when the alert rule is ineffective.
        :param period: Property period: The aggregation period. Unite: second.
        :param silence_time: Property silenceTime: The duration of the mute period during which new alerts are not sent even if the trigger conditions are met. Unit: second. Default value: 86400. Minimum value: 60.
        :param webhook: Property webhook: The URL of the callback triggered when an alert occurs.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1fee68db7193f4747b083b5f57b906c5a11ff708e8cbaf055f6143341512074a)
            check_type(argname="argument category", value=category, expected_type=type_hints["category"])
            check_type(argname="argument escalations", value=escalations, expected_type=type_hints["escalations"])
            check_type(argname="argument group_id", value=group_id, expected_type=type_hints["group_id"])
            check_type(argname="argument metric_name", value=metric_name, expected_type=type_hints["metric_name"])
            check_type(argname="argument namespace", value=namespace, expected_type=type_hints["namespace"])
            check_type(argname="argument rule_id", value=rule_id, expected_type=type_hints["rule_id"])
            check_type(argname="argument rule_name", value=rule_name, expected_type=type_hints["rule_name"])
            check_type(argname="argument dimensions", value=dimensions, expected_type=type_hints["dimensions"])
            check_type(argname="argument effective_interval", value=effective_interval, expected_type=type_hints["effective_interval"])
            check_type(argname="argument email_subject", value=email_subject, expected_type=type_hints["email_subject"])
            check_type(argname="argument interval", value=interval, expected_type=type_hints["interval"])
            check_type(argname="argument no_effective_interval", value=no_effective_interval, expected_type=type_hints["no_effective_interval"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument silence_time", value=silence_time, expected_type=type_hints["silence_time"])
            check_type(argname="argument webhook", value=webhook, expected_type=type_hints["webhook"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "category": category,
            "escalations": escalations,
            "group_id": group_id,
            "metric_name": metric_name,
            "namespace": namespace,
            "rule_id": rule_id,
            "rule_name": rule_name,
        }
        if dimensions is not None:
            self._values["dimensions"] = dimensions
        if effective_interval is not None:
            self._values["effective_interval"] = effective_interval
        if email_subject is not None:
            self._values["email_subject"] = email_subject
        if interval is not None:
            self._values["interval"] = interval
        if no_effective_interval is not None:
            self._values["no_effective_interval"] = no_effective_interval
        if period is not None:
            self._values["period"] = period
        if silence_time is not None:
            self._values["silence_time"] = silence_time
        if webhook is not None:
            self._values["webhook"] = webhook

    @builtins.property
    def category(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property category: The abbreviation of the service name.

        Valid values:
        ECS (including Alibaba Cloud and non-Alibaba Cloud hosts)
        RDS (ApsaraDB for RDS)
        ADS (AnalyticDB)
        SLB (Server Load Balancer)
        VPC (Virtual Private Cloud)
        APIGATEWAY (API Gateway)
        CDN
        CS (Container Service for Swarm)
        DCDN (Dynamic Route for CDN)
        DDoS (distributed denial of service)
        EIP (Elastic IP)
        ELASTICSEARCH (Elasticsearch)
        EMR (E-MapReduce)
        ESS (Auto Scaling)
        HBASE (ApsaraDB for HBase)
        IOT_EDGE (IoT Edge)
        K8S_POD (k8s pod)
        KVSTORE_SHARDING (ApsaraDB for Redis cluster version)
        KVSTORE_SPLITRW (ApsaraDB for Redis read/write splitting version)
        KVSTORE_STANDARD (ApsaraDB for Redis standard version)
        MEMCACHE (ApsaraDB for Memcache)
        MNS (Message Service)
        MONGODB (ApsaraDB for MongoDB replica set instances)
        MONGODB_CLUSTER (ApsaraDB for MongoDB cluster version)
        MONGODB_SHARDING (ApsaraDB for MongoDB sharded clusters)
        MQ_TOPIC (Message Service topic)
        OCS (original version of ApsaraDB for Memcache)
        OPENSEARCH (Open Search)
        OSS (Object Storage Service)
        POLARDB (ApsaraDB for POLARDB)
        PETADATA (HybridDB for MySQL)
        SCDN (Secure Content Delivery Network)
        SHAREBANDWIDTHPACKAGES (shared bandwidth package)
        SLS (Log Service)
        VPN (VPN Gateway)
        '''
        result = self._values.get("category")
        assert result is not None, "Required property 'category' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def escalations(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGroupMetricRule.EscalationsProperty"]:
        '''Property escalations: undefined.'''
        result = self._values.get("escalations")
        assert result is not None, "Required property 'escalations' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGroupMetricRule.EscalationsProperty"], result)

    @builtins.property
    def group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property groupId: The ID of application group.'''
        result = self._values.get("group_id")
        assert result is not None, "Required property 'group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def metric_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property metricName: The name of the metric.

        For more information, call DescribeMetricMetaList or see Preset metrics reference.
        '''
        result = self._values.get("metric_name")
        assert result is not None, "Required property 'metric_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property namespace: The data namespace of the service.

        For more information, call DescribeMetricMetaList
        or see Preset metrics reference.
        '''
        result = self._values.get("namespace")
        assert result is not None, "Required property 'namespace' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def rule_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property ruleId: The ID of the alert rule.

        The IDs of alert rules are generated by callers to ensure
        uniqueness.
        '''
        result = self._values.get("rule_id")
        assert result is not None, "Required property 'rule_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property ruleName: The name of the alert rule.'''
        result = self._values.get("rule_name")
        assert result is not None, "Required property 'rule_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def dimensions(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dimensions: The expended resource dimensions.'''
        result = self._values.get("dimensions")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def effective_interval(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property effectiveInterval: The period when the alert rule is effective.'''
        result = self._values.get("effective_interval")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def email_subject(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property emailSubject: The subject of the alert notification email.'''
        result = self._values.get("email_subject")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def interval(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property interval: The detection period of alerts.'''
        result = self._values.get("interval")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def no_effective_interval(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property noEffectiveInterval: The period when the alert rule is ineffective.'''
        result = self._values.get("no_effective_interval")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period: The aggregation period.

        Unite: second.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def silence_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property silenceTime: The duration of the mute period during which new alerts are not sent even if the trigger conditions are met.

        Unit: second. Default value: 86400. Minimum value: 60.
        '''
        result = self._values.get("silence_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def webhook(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property webhook: The URL of the callback triggered when an alert occurs.'''
        result = self._values.get("webhook")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "GroupMetricRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class MetricRuleTargets(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.MetricRuleTargets",
):
    '''A ROS resource type:  ``ALIYUN::CMS::MetricRuleTargets``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["MetricRuleTargetsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CMS::MetricRuleTargets``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9ea835460cbfe229e9191c6a34ade8dd7f1b014af02062c9322e530b1364dfdb)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrArns")
    def attr_arns(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Arns: The ARN list of targets.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrArns"))

    @builtins.property
    @jsii.member(jsii_name="attrIds")
    def attr_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Ids: The ID list of targets.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIds"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cms.MetricRuleTargetsProps",
    jsii_struct_bases=[],
    name_mapping={"rule_id": "ruleId", "targets": "targets"},
)
class MetricRuleTargetsProps:
    def __init__(
        self,
        *,
        rule_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        targets: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosMetricRuleTargets.TargetsProperty", typing.Dict[builtins.str, typing.Any]]]]],
    ) -> None:
        '''Properties for defining a ``ALIYUN::CMS::MetricRuleTargets``.

        :param rule_id: Property ruleId: The ID of the alert rule.
        :param targets: Property targets: undefined.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__18c389933f99639caec463dd4ea9f9aee85d57f06ab2fe8606710fa4a25bda30)
            check_type(argname="argument rule_id", value=rule_id, expected_type=type_hints["rule_id"])
            check_type(argname="argument targets", value=targets, expected_type=type_hints["targets"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "rule_id": rule_id,
            "targets": targets,
        }

    @builtins.property
    def rule_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property ruleId: The ID of the alert rule.'''
        result = self._values.get("rule_id")
        assert result is not None, "Required property 'rule_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def targets(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMetricRuleTargets.TargetsProperty"]]]:
        '''Property targets: undefined.'''
        result = self._values.get("targets")
        assert result is not None, "Required property 'targets' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMetricRuleTargets.TargetsProperty"]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "MetricRuleTargetsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class MetricRuleTemplate(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.MetricRuleTemplate",
):
    '''A ROS resource type:  ``ALIYUN::CMS::MetricRuleTemplate``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["MetricRuleTemplateProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CMS::MetricRuleTemplate``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6c7a71074b2045dbee9a141afdd4b3fe46e125543729da05b33d7bfa151c16fb)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrId")
    def attr_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Id: Alarm template ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cms.MetricRuleTemplateProps",
    jsii_struct_bases=[],
    name_mapping={
        "name": "name",
        "alert_templates": "alertTemplates",
        "description": "description",
        "rest_version": "restVersion",
        "template_id": "templateId",
    },
)
class MetricRuleTemplateProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        alert_templates: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosMetricRuleTemplate.AlertTemplatesProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rest_version: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        template_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CMS::MetricRuleTemplate``.

        :param name: Property name: The name of the alert template.
        :param alert_templates: Property alertTemplates: Valid values of N: 0 to 200.
        :param description: Property description: The description of the alert template.
        :param rest_version: Property restVersion: The version of the alert template. Call DescribeMetricRuleTemplateList or DescribeMetricRuleTemplateAttribute to obtain information about the alert templates. The combination of version and ID uniquely identifies an alert template.
        :param template_id: Property templateId: The ID of the alert template.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d7c46c05c37209a6037b062fd078eaae18d39d735529fbee3c6c7b0e9d70a7ed)
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument alert_templates", value=alert_templates, expected_type=type_hints["alert_templates"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument rest_version", value=rest_version, expected_type=type_hints["rest_version"])
            check_type(argname="argument template_id", value=template_id, expected_type=type_hints["template_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "name": name,
        }
        if alert_templates is not None:
            self._values["alert_templates"] = alert_templates
        if description is not None:
            self._values["description"] = description
        if rest_version is not None:
            self._values["rest_version"] = rest_version
        if template_id is not None:
            self._values["template_id"] = template_id

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property name: The name of the alert template.'''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def alert_templates(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMetricRuleTemplate.AlertTemplatesProperty"]]]]:
        '''Property alertTemplates: Valid values of N: 0 to 200.'''
        result = self._values.get("alert_templates")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMetricRuleTemplate.AlertTemplatesProperty"]]]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the alert template.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rest_version(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property restVersion: The version of the alert template.

        Call DescribeMetricRuleTemplateList or DescribeMetricRuleTemplateAttribute
        to obtain information about the alert templates. The combination of version and ID
        uniquely identifies an alert template.
        '''
        result = self._values.get("rest_version")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def template_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property templateId: The ID of the alert template.'''
        result = self._values.get("template_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "MetricRuleTemplateProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class MonitorGroup(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.MonitorGroup",
):
    '''A ROS resource type:  ``ALIYUN::CMS::MonitorGroup``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["MonitorGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CMS::MonitorGroup``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__509136a1dcfe9e2ede9899528b0521576b3303528fc05687098c6f7e90af2c13)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute GroupId: Application group ID generated after the group is created.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGroupId"))


class MonitorGroupInstances(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.MonitorGroupInstances",
):
    '''A ROS resource type:  ``ALIYUN::CMS::MonitorGroupInstances``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["MonitorGroupInstancesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CMS::MonitorGroupInstances``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__19c671425283b9e0396e407dad215c6b43b3b47b20e58ec0603d33ba3edf7f38)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute GroupId: The ID of the application group.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGroupId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cms.MonitorGroupInstancesProps",
    jsii_struct_bases=[],
    name_mapping={"group_id": "groupId", "instances": "instances"},
)
class MonitorGroupInstancesProps:
    def __init__(
        self,
        *,
        group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instances: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosMonitorGroupInstances.InstancesProperty", typing.Dict[builtins.str, typing.Any]]]]],
    ) -> None:
        '''Properties for defining a ``ALIYUN::CMS::MonitorGroupInstances``.

        :param group_id: Property groupId: The ID of the application group.
        :param instances: Property instances:.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d8c6abe8788410b967cc59fd9350689be537836799a3ae6094cc82f4799217d9)
            check_type(argname="argument group_id", value=group_id, expected_type=type_hints["group_id"])
            check_type(argname="argument instances", value=instances, expected_type=type_hints["instances"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "group_id": group_id,
            "instances": instances,
        }

    @builtins.property
    def group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property groupId: The ID of the application group.'''
        result = self._values.get("group_id")
        assert result is not None, "Required property 'group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instances(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMonitorGroupInstances.InstancesProperty"]]]:
        '''Property instances:.'''
        result = self._values.get("instances")
        assert result is not None, "Required property 'instances' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMonitorGroupInstances.InstancesProperty"]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "MonitorGroupInstancesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cms.MonitorGroupProps",
    jsii_struct_bases=[],
    name_mapping={"group_name": "groupName", "contact_groups": "contactGroups"},
)
class MonitorGroupProps:
    def __init__(
        self,
        *,
        group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        contact_groups: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CMS::MonitorGroup``.

        :param group_name: Property groupName: The name of the application group.
        :param contact_groups: Property contactGroups: The alert contact group. Alert notifications for the application group are sent to the specified alert contact group.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2cdc1a8caf41a522a4f655ff3049fe20b55e188b01544baad09b65fc371df838)
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument contact_groups", value=contact_groups, expected_type=type_hints["contact_groups"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "group_name": group_name,
        }
        if contact_groups is not None:
            self._values["contact_groups"] = contact_groups

    @builtins.property
    def group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property groupName: The name of the application group.'''
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def contact_groups(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property contactGroups: The alert contact group.

        Alert notifications for the application group are sent to
        the specified alert contact group.
        '''
        result = self._values.get("contact_groups")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "MonitorGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class MonitoringAgentProcess(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.MonitoringAgentProcess",
):
    '''A ROS resource type:  ``ALIYUN::CMS::MonitoringAgentProcess``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["MonitoringAgentProcessProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CMS::MonitoringAgentProcess``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__753c69b679df3f60bfec08e0b03ad523784a85d95ff779bf2af394d3c129d0b5)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrId")
    def attr_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Id: The process ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cms.MonitoringAgentProcessProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "process_name": "processName",
        "process_user": "processUser",
    },
)
class MonitoringAgentProcessProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        process_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        process_user: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CMS::MonitoringAgentProcess``.

        :param instance_id: Property instanceId: The ID of the instance.
        :param process_name: Property processName: The name of the process.
        :param process_user: Property processUser: The user who launched the process.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7c124757c549fd3075dfbbf41661c89383784bf8261c9f2162b318123fe30893)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument process_name", value=process_name, expected_type=type_hints["process_name"])
            check_type(argname="argument process_user", value=process_user, expected_type=type_hints["process_user"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
        }
        if process_name is not None:
            self._values["process_name"] = process_name
        if process_user is not None:
            self._values["process_user"] = process_user

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: The ID of the instance.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def process_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property processName: The name of the process.'''
        result = self._values.get("process_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def process_user(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property processUser: The user who launched the process.'''
        result = self._values.get("process_user")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "MonitoringAgentProcessProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ResourceMetricRule(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.ResourceMetricRule",
):
    '''A ROS resource type:  ``ALIYUN::CMS::ResourceMetricRule``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ResourceMetricRuleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CMS::ResourceMetricRule``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6911394e1645c825d8b4f9d800f1ed43ace23c4327c116a861ea4ca5941c407f)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrRuleId")
    def attr_rule_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RuleId: The ID of the alert rule.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRuleId"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleName")
    def attr_rule_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RuleName: The name of the alert rule.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRuleName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cms.ResourceMetricRuleProps",
    jsii_struct_bases=[],
    name_mapping={
        "contact_groups": "contactGroups",
        "escalations": "escalations",
        "metric_name": "metricName",
        "namespace": "namespace",
        "resources": "resources",
        "composite_expression": "compositeExpression",
        "deletion_force": "deletionForce",
        "effective_interval": "effectiveInterval",
        "email_subject": "emailSubject",
        "interval": "interval",
        "labels": "labels",
        "no_data_policy": "noDataPolicy",
        "no_effective_interval": "noEffectiveInterval",
        "period": "period",
        "prometheus": "prometheus",
        "rule_id": "ruleId",
        "rule_name": "ruleName",
        "silence_time": "silenceTime",
        "webhook": "webhook",
    },
)
class ResourceMetricRuleProps:
    def __init__(
        self,
        *,
        contact_groups: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        escalations: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosResourceMetricRule.EscalationsProperty", typing.Dict[builtins.str, typing.Any]]],
        metric_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        namespace: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        resources: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Mapping[builtins.str, typing.Any]]],
        composite_expression: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosResourceMetricRule.CompositeExpressionProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        effective_interval: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        email_subject: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        labels: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosResourceMetricRule.LabelsProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        no_data_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        no_effective_interval: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        prometheus: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosResourceMetricRule.PrometheusProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        rule_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rule_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        silence_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        webhook: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CMS::ResourceMetricRule``.

        :param contact_groups: Property contactGroups: The alert contact group. The alert notifications are sent to the contacts that belong to the alert contact group. Note: An alert contact group can contain one or more alert contacts. For information about how to create alert contacts and alert contact groups, see PutContact and PutContactGroup.
        :param escalations: Property escalations: You must select at least one of the Critical, Warn, and Info alert levels.
        :param metric_name: Property metricName: The name of the metric. For information about how to query the name of a metric, see Appendix 1: Metrics. Note: If you create a Prometheus alert rule for Hybrid Cloud Monitoring, you must set this parameter to the name of the namespace. For information about how to obtain the name of a namespace, see DescribeHybridMonitorNamespaceList.
        :param namespace: Property namespace: The namespace of the cloud service. For information about how to query the namespace of a cloud service, Appendix 1: Metrics. Note: If you create a Prometheus alert rule for Hybrid Cloud Monitoring, you must set this parameter to acs_prometheus.
        :param resources: Property resources: The information about the resource. Examples: [{"instanceId":"i-uf6j91r34rnwawoo****"}] and [{"userId":"100931896542****"}]. For information about the supported dimensions that are used to query resources, see Appendix 1: Metrics.
        :param composite_expression: Property compositeExpression: The trigger conditions for multiple metrics. Note: The trigger conditions for a single metric and multiple metrics are mutually exclusive. You cannot specify trigger conditions for a single metric and multiple metrics at the same time.
        :param deletion_force: Property deletionForce: Whether to delete rule even if it is not created by ROS. Default is false
        :param effective_interval: Property effectiveInterval: The time period during which the alert rule is effective.
        :param email_subject: Property emailSubject: The subject of the alert notification email.
        :param interval: Property interval: The interval at which the alert is triggered. Unit: seconds. Note: For information about how to query the statistical period of a metric, see Appendix 1: Metrics.
        :param labels: Property labels:.
        :param no_data_policy: Property noDataPolicy: The processing method of alerts when no monitoring data is found. Valid values: - KEEP_LAST_STATE (default value): No operation is performed. - INSUFFICIENT_DATA: An alert whose content is "Insufficient data" is triggered. - OK: The status is considered normal.
        :param no_effective_interval: Property noEffectiveInterval: The time period during which the alert rule is ineffective.
        :param period: Property period: The statistical period of the metric. Unit: seconds. The default value is the interval at which the monitoring data of the metric is collected. Note: For information about how to query the statistical period of a metric, see Appendix 1: Metrics.
        :param prometheus: Property prometheus: The Prometheus alert rule. Note: This parameter is required only when you create a Prometheus alert rule for Hybrid Cloud Monitoring.
        :param rule_id: Property ruleId: The ID of the alert rule. If not specified, ROS will generate one. You can specify a new ID or the ID of an existing alert rule. For information about how to query the ID of an alert rule, see DescribeMetricRuleList. Note: If you specify a new ID, a threshold-triggered alert rule is created.
        :param rule_name: Property ruleName: The name of the alert rule. If not specified and the rule is created by ROS, default to RuleId. You can specify a new name or the name of an existing alert rule. For information about how to query the name of an alert rule, see DescribeMetricRuleList. Note: If you specify a new name, a threshold-triggered alert rule is created.
        :param silence_time: Property silenceTime: The mute period during which new alerts are not sent even if the trigger conditions are met. Unit: seconds. Default value: 86400. Note: If an alert is not cleared within the mute period, a new alert notification is sent when the mute period ends.
        :param webhook: Property webhook: The callback URL to which a POST request is sent when an alert is triggered based on the alert rule.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f8dd39af81fc37da6f8d92a3d38b3c4eefb5ed5bb8b424488d4f5d1dc5dd0734)
            check_type(argname="argument contact_groups", value=contact_groups, expected_type=type_hints["contact_groups"])
            check_type(argname="argument escalations", value=escalations, expected_type=type_hints["escalations"])
            check_type(argname="argument metric_name", value=metric_name, expected_type=type_hints["metric_name"])
            check_type(argname="argument namespace", value=namespace, expected_type=type_hints["namespace"])
            check_type(argname="argument resources", value=resources, expected_type=type_hints["resources"])
            check_type(argname="argument composite_expression", value=composite_expression, expected_type=type_hints["composite_expression"])
            check_type(argname="argument deletion_force", value=deletion_force, expected_type=type_hints["deletion_force"])
            check_type(argname="argument effective_interval", value=effective_interval, expected_type=type_hints["effective_interval"])
            check_type(argname="argument email_subject", value=email_subject, expected_type=type_hints["email_subject"])
            check_type(argname="argument interval", value=interval, expected_type=type_hints["interval"])
            check_type(argname="argument labels", value=labels, expected_type=type_hints["labels"])
            check_type(argname="argument no_data_policy", value=no_data_policy, expected_type=type_hints["no_data_policy"])
            check_type(argname="argument no_effective_interval", value=no_effective_interval, expected_type=type_hints["no_effective_interval"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument prometheus", value=prometheus, expected_type=type_hints["prometheus"])
            check_type(argname="argument rule_id", value=rule_id, expected_type=type_hints["rule_id"])
            check_type(argname="argument rule_name", value=rule_name, expected_type=type_hints["rule_name"])
            check_type(argname="argument silence_time", value=silence_time, expected_type=type_hints["silence_time"])
            check_type(argname="argument webhook", value=webhook, expected_type=type_hints["webhook"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "contact_groups": contact_groups,
            "escalations": escalations,
            "metric_name": metric_name,
            "namespace": namespace,
            "resources": resources,
        }
        if composite_expression is not None:
            self._values["composite_expression"] = composite_expression
        if deletion_force is not None:
            self._values["deletion_force"] = deletion_force
        if effective_interval is not None:
            self._values["effective_interval"] = effective_interval
        if email_subject is not None:
            self._values["email_subject"] = email_subject
        if interval is not None:
            self._values["interval"] = interval
        if labels is not None:
            self._values["labels"] = labels
        if no_data_policy is not None:
            self._values["no_data_policy"] = no_data_policy
        if no_effective_interval is not None:
            self._values["no_effective_interval"] = no_effective_interval
        if period is not None:
            self._values["period"] = period
        if prometheus is not None:
            self._values["prometheus"] = prometheus
        if rule_id is not None:
            self._values["rule_id"] = rule_id
        if rule_name is not None:
            self._values["rule_name"] = rule_name
        if silence_time is not None:
            self._values["silence_time"] = silence_time
        if webhook is not None:
            self._values["webhook"] = webhook

    @builtins.property
    def contact_groups(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''Property contactGroups: The alert contact group.

        The alert notifications are sent to the contacts that belong to the alert contact group.
        Note: An alert contact group can contain one or more alert contacts. For information about how to create alert contacts and alert contact groups, see PutContact and PutContactGroup.
        '''
        result = self._values.get("contact_groups")
        assert result is not None, "Required property 'contact_groups' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def escalations(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosResourceMetricRule.EscalationsProperty"]:
        '''Property escalations: You must select at least one of the Critical, Warn, and Info alert levels.'''
        result = self._values.get("escalations")
        assert result is not None, "Required property 'escalations' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosResourceMetricRule.EscalationsProperty"], result)

    @builtins.property
    def metric_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property metricName: The name of the metric.

        For information about how to query the name of a metric, see Appendix 1: Metrics.
        Note: If you create a Prometheus alert rule for Hybrid Cloud Monitoring, you must set this parameter to the name of the namespace. For information about how to obtain the name of a namespace, see DescribeHybridMonitorNamespaceList.
        '''
        result = self._values.get("metric_name")
        assert result is not None, "Required property 'metric_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property namespace: The namespace of the cloud service.

        For information about how to query the namespace of a cloud service, Appendix 1: Metrics.
        Note: If you create a Prometheus alert rule for Hybrid Cloud Monitoring, you must set this parameter to acs_prometheus.
        '''
        result = self._values.get("namespace")
        assert result is not None, "Required property 'namespace' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def resources(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]]:
        '''Property resources: The information about the resource.

        Examples: [{"instanceId":"i-uf6j91r34rnwawoo****"}] and [{"userId":"100931896542****"}].
        For information about the supported dimensions that are used to query resources, see Appendix 1: Metrics.
        '''
        result = self._values.get("resources")
        assert result is not None, "Required property 'resources' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def composite_expression(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosResourceMetricRule.CompositeExpressionProperty"]]:
        '''Property compositeExpression: The trigger conditions for multiple metrics.

        Note: The trigger conditions for a single metric and multiple metrics are mutually exclusive. You cannot specify trigger conditions for a single metric and multiple metrics at the same time.
        '''
        result = self._values.get("composite_expression")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosResourceMetricRule.CompositeExpressionProperty"]], result)

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property deletionForce: Whether to delete rule even if it is not created by ROS.

        Default is false
        '''
        result = self._values.get("deletion_force")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def effective_interval(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property effectiveInterval: The time period during which the alert rule is effective.'''
        result = self._values.get("effective_interval")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def email_subject(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property emailSubject: The subject of the alert notification email.'''
        result = self._values.get("email_subject")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def interval(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property interval: The interval at which the alert is triggered.

        Unit: seconds.
        Note: For information about how to query the statistical period of a metric, see Appendix 1: Metrics.
        '''
        result = self._values.get("interval")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def labels(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosResourceMetricRule.LabelsProperty"]]]]:
        '''Property labels:.'''
        result = self._values.get("labels")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosResourceMetricRule.LabelsProperty"]]]], result)

    @builtins.property
    def no_data_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property noDataPolicy: The processing method of alerts when no monitoring data is found.

        Valid values:

        - KEEP_LAST_STATE (default value): No operation is performed.
        - INSUFFICIENT_DATA: An alert whose content is "Insufficient data" is triggered.
        - OK: The status is considered normal.
        '''
        result = self._values.get("no_data_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def no_effective_interval(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property noEffectiveInterval: The time period during which the alert rule is ineffective.'''
        result = self._values.get("no_effective_interval")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period: The statistical period of the metric.

        Unit: seconds. The default value is the interval at which the monitoring data of the metric is collected.
        Note: For information about how to query the statistical period of a metric, see Appendix 1: Metrics.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def prometheus(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosResourceMetricRule.PrometheusProperty"]]:
        '''Property prometheus: The Prometheus alert rule.

        Note: This parameter is required only when you create a Prometheus alert rule for Hybrid Cloud Monitoring.
        '''
        result = self._values.get("prometheus")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosResourceMetricRule.PrometheusProperty"]], result)

    @builtins.property
    def rule_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ruleId: The ID of the alert rule.

        If not specified, ROS will generate one.
        You can specify a new ID or the ID of an existing alert rule. For information about how to query the ID of an alert rule, see DescribeMetricRuleList.
        Note: If you specify a new ID, a threshold-triggered alert rule is created.
        '''
        result = self._values.get("rule_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rule_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ruleName: The name of the alert rule.

        If not specified and the rule is created by ROS, default to RuleId.
        You can specify a new name or the name of an existing alert rule. For information about how to query the name of an alert rule, see DescribeMetricRuleList.
        Note: If you specify a new name, a threshold-triggered alert rule is created.
        '''
        result = self._values.get("rule_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def silence_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property silenceTime: The mute period during which new alerts are not sent even if the trigger conditions are met.

        Unit: seconds. Default value: 86400.
        Note: If an alert is not cleared within the mute period, a new alert notification is sent when the mute period ends.
        '''
        result = self._values.get("silence_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def webhook(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property webhook: The callback URL to which a POST request is sent when an alert is triggered based on the alert rule.'''
        result = self._values.get("webhook")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ResourceMetricRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosContact(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.RosContact",
):
    '''A ROS template type:  ``ALIYUN::CMS::Contact``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosContactProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CMS::Contact``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7a68638825364b7bf83fcd6e46212881d26f679a907e85918d24711169b97792)
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
            type_hints = typing.get_type_hints(_typecheckingstub__6f041b81dc3256cf913b9028a74f24ad80378a04b6d393709cf992b70adb5124)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrContactName")
    def attr_contact_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ContactName: The name of the alarm contact.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrContactName"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="channels")
    def channels(
        self,
    ) -> typing.Union["RosContact.ChannelsProperty", _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: channels: undefined
        '''
        return typing.cast(typing.Union["RosContact.ChannelsProperty", _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "channels"))

    @channels.setter
    def channels(
        self,
        value: typing.Union["RosContact.ChannelsProperty", _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bc6e7867787e3e8896e00b1505c4109f26e8b71bd77ea4c6e44dd17419620d79)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "channels", value)

    @builtins.property
    @jsii.member(jsii_name="contactName")
    def contact_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: contactName: The name of the alarm contact.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "contactName"))

    @contact_name.setter
    def contact_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4bf889e66020d26c40ef6f4ac29e0e7967da4c30086474e7f603fdf844dca464)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "contactName", value)

    @builtins.property
    @jsii.member(jsii_name="describe")
    def describe(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: describe: The description of the alert contact.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "describe"))

    @describe.setter
    def describe(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__95a0951c836fb5c23424027d8a1594e91f26550052c5a098461446f0eb709cc6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "describe", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__97b1140513cb058e7977ab28a599da3d7765bc76cd012396531d6fe80f666485)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cms.RosContact.ChannelsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "ali_im": "aliIm",
            "ding_web_hook": "dingWebHook",
            "mail": "mail",
            "sms": "sms",
        },
    )
    class ChannelsProperty:
        def __init__(
            self,
            *,
            ali_im: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            ding_web_hook: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            mail: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            sms: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param ali_im: 
            :param ding_web_hook: 
            :param mail: 
            :param sms: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__18a29e9e98415094d1f20c8c42d8d6218b0a8327178d0d421005811c21f77318)
                check_type(argname="argument ali_im", value=ali_im, expected_type=type_hints["ali_im"])
                check_type(argname="argument ding_web_hook", value=ding_web_hook, expected_type=type_hints["ding_web_hook"])
                check_type(argname="argument mail", value=mail, expected_type=type_hints["mail"])
                check_type(argname="argument sms", value=sms, expected_type=type_hints["sms"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if ali_im is not None:
                self._values["ali_im"] = ali_im
            if ding_web_hook is not None:
                self._values["ding_web_hook"] = ding_web_hook
            if mail is not None:
                self._values["mail"] = mail
            if sms is not None:
                self._values["sms"] = sms

        @builtins.property
        def ali_im(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: aliIm: The TradeManager ID.
            '''
            result = self._values.get("ali_im")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def ding_web_hook(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: dingWebHook: The DingTalk Chatbot address.
            '''
            result = self._values.get("ding_web_hook")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def mail(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: mail: The email address of the contact.
            '''
            result = self._values.get("mail")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def sms(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: sms: The mobile phone number of the contact.
            '''
            result = self._values.get("sms")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ChannelsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


class RosContactGroup(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.RosContactGroup",
):
    '''A ROS template type:  ``ALIYUN::CMS::ContactGroup``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosContactGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CMS::ContactGroup``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__edaf1faaac791b29c1b5185782e42eece98f19b46c8367a7162bb91a3379c484)
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
            type_hints = typing.get_type_hints(_typecheckingstub__3ed5b2d53238aee0fe714354210a904725a45ff7a19ba07eda1585222e949e9e)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrContactGroupName")
    def attr_contact_group_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ContactGroupName: The name of the alert contact group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrContactGroupName"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="contactGroupName")
    def contact_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: contactGroupName: The name of the alert contact group.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "contactGroupName"))

    @contact_group_name.setter
    def contact_group_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2e0be72998f966b0cab64fdf38010b40dda1d88816072e60d4d131b9b443a4da)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "contactGroupName", value)

    @builtins.property
    @jsii.member(jsii_name="contactNames")
    def contact_names(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: contactNames: The name of the alert contact.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], jsii.get(self, "contactNames"))

    @contact_names.setter
    def contact_names(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__70241cc4a296fda6c1b694c607e11b94000e703ebc5e0ced965dac1ead040a20)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "contactNames", value)

    @builtins.property
    @jsii.member(jsii_name="describe")
    def describe(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: describe: The description of the alert contact group.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "describe"))

    @describe.setter
    def describe(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ba834b0ae81eb70bc0f95e8e6e054fc74a474cace54ec73948190546c04dd19e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "describe", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f9afd10ee05e7233725ee334bd076fd6b0951377a60d10468fd7096f31eb8f19)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cms.RosContactGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "contact_group_name": "contactGroupName",
        "contact_names": "contactNames",
        "describe": "describe",
    },
)
class RosContactGroupProps:
    def __init__(
        self,
        *,
        contact_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        contact_names: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        describe: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::CMS::ContactGroup``.

        :param contact_group_name: 
        :param contact_names: 
        :param describe: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__74f95933962db2af08b4bfd06b0209381acc43832f6bedfb49a800ad25db5328)
            check_type(argname="argument contact_group_name", value=contact_group_name, expected_type=type_hints["contact_group_name"])
            check_type(argname="argument contact_names", value=contact_names, expected_type=type_hints["contact_names"])
            check_type(argname="argument describe", value=describe, expected_type=type_hints["describe"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "contact_group_name": contact_group_name,
            "contact_names": contact_names,
            "describe": describe,
        }

    @builtins.property
    def contact_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: contactGroupName: The name of the alert contact group.
        '''
        result = self._values.get("contact_group_name")
        assert result is not None, "Required property 'contact_group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def contact_names(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: contactNames: The name of the alert contact.
        '''
        result = self._values.get("contact_names")
        assert result is not None, "Required property 'contact_names' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def describe(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: describe: The description of the alert contact group.
        '''
        result = self._values.get("describe")
        assert result is not None, "Required property 'describe' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosContactGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cms.RosContactProps",
    jsii_struct_bases=[],
    name_mapping={
        "channels": "channels",
        "contact_name": "contactName",
        "describe": "describe",
    },
)
class RosContactProps:
    def __init__(
        self,
        *,
        channels: typing.Union[typing.Union[RosContact.ChannelsProperty, typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable],
        contact_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        describe: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::CMS::Contact``.

        :param channels: 
        :param contact_name: 
        :param describe: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cc8a3382ecfd9f591071bb685d87c08e9633264c291a79e8963f7616311cdb20)
            check_type(argname="argument channels", value=channels, expected_type=type_hints["channels"])
            check_type(argname="argument contact_name", value=contact_name, expected_type=type_hints["contact_name"])
            check_type(argname="argument describe", value=describe, expected_type=type_hints["describe"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "channels": channels,
            "contact_name": contact_name,
            "describe": describe,
        }

    @builtins.property
    def channels(
        self,
    ) -> typing.Union[RosContact.ChannelsProperty, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: channels: undefined
        '''
        result = self._values.get("channels")
        assert result is not None, "Required property 'channels' is missing"
        return typing.cast(typing.Union[RosContact.ChannelsProperty, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def contact_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: contactName: The name of the alarm contact.
        '''
        result = self._values.get("contact_name")
        assert result is not None, "Required property 'contact_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def describe(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: describe: The description of the alert contact.
        '''
        result = self._values.get("describe")
        assert result is not None, "Required property 'describe' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosContactProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDynamicTagGroup(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.RosDynamicTagGroup",
):
    '''A ROS template type:  ``ALIYUN::CMS::DynamicTagGroup``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDynamicTagGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CMS::DynamicTagGroup``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__527f59f56fa5afbe1e83ea19c27ce18e92ce5a0be0a943b98f6ebd4510380629)
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
            type_hints = typing.get_type_hints(_typecheckingstub__ee0b533e8f7bf9866a962c6656a2695c65f722f12caeebaa1c49481a8f56701a)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDynamicTagRuleId")
    def attr_dynamic_tag_rule_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DynamicTagRuleId: Dynamic tag rule ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDynamicTagRuleId"))

    @builtins.property
    @jsii.member(jsii_name="attrTagKey")
    def attr_tag_key(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TagKey: Tag key.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTagKey"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="contactGroupList")
    def contact_group_list(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: contactGroupList: Alarm contacts.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], jsii.get(self, "contactGroupList"))

    @contact_group_list.setter
    def contact_group_list(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__195e83b78786715e7808535d7947da0bfb7a764341668ab9dc3b08b9a136170c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "contactGroupList", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3a0ea73726a847554ea3ab2e681f27b282cc258668b8c5d3a5a0512365ba7ea4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="tagKey")
    def tag_key(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: tagKey: Tag key.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "tagKey"))

    @tag_key.setter
    def tag_key(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3fdb47638a5bf0a0d0621e299233b6fe273a4b532512208add22d9afa9216102)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tagKey", value)

    @builtins.property
    @jsii.member(jsii_name="enableInstallAgent")
    def enable_install_agent(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableInstallAgent: Whether to enable initial installation monitoring plug, not installed by default. Values are:
        true: enable installation
        Note If ECS generated instances group does not monitor plug-in installed will attempt to automatically install.
        false: disable installation
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enableInstallAgent"))

    @enable_install_agent.setter
    def enable_install_agent(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__922af1380bca7bd8e08fbe2cdccb4ad544a8f61a36fa177a9bbf9ea619918269)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableInstallAgent", value)

    @builtins.property
    @jsii.member(jsii_name="enableSubscribeEvent")
    def enable_subscribe_event(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableSubscribeEvent: Whether the event subscription is enabled. Values are
        :true: enable event subscription
        false: disable event subscription
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enableSubscribeEvent"))

    @enable_subscribe_event.setter
    def enable_subscribe_event(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__931f1e65ef5e4207813420dcdfefa57401de4b9ac6c04269d6022f94f6dd636e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableSubscribeEvent", value)

    @builtins.property
    @jsii.member(jsii_name="matchExpress")
    def match_express(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDynamicTagGroup.MatchExpressProperty"]]]]:
        '''
        :Property: matchExpress: Matching list. Only supports one currently.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDynamicTagGroup.MatchExpressProperty"]]]], jsii.get(self, "matchExpress"))

    @match_express.setter
    def match_express(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDynamicTagGroup.MatchExpressProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c22e049ed4bc4a22dfe098602bc882462a15e12572cd22e0941fa167c7180db2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "matchExpress", value)

    @builtins.property
    @jsii.member(jsii_name="matchExpressFilterRelation")
    def match_express_filter_relation(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        matchExpressFilterRelation: The relationship between the conditional expressions. Values are:
        and: the relationship between
        or: the relationship or the
        Description currently supports only one combination of conditions, the follow-up Ali cloud will support a variety of combinations of conditions.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "matchExpressFilterRelation"))

    @match_express_filter_relation.setter
    def match_express_filter_relation(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1fa896c28b9d9fa5a38b49c7cb2e2d74b7b2ae42faac2dd4583ea6cfdcc2a850)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "matchExpressFilterRelation", value)

    @builtins.property
    @jsii.member(jsii_name="templateIdList")
    def template_id_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        templateIdList: Alarm template ID list.
        When the automatically generated application group synchronizes tags, it will generate alarm rules according to the specified alarm template.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "templateIdList"))

    @template_id_list.setter
    def template_id_list(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__860a4b561df6a1a87e454f978ae589e3dccc1e9a0b0c34b87db73028109d657b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "templateIdList", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cms.RosDynamicTagGroup.MatchExpressProperty",
        jsii_struct_bases=[],
        name_mapping={
            "tag_value": "tagValue",
            "tag_value_match_function": "tagValueMatchFunction",
        },
    )
    class MatchExpressProperty:
        def __init__(
            self,
            *,
            tag_value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            tag_value_match_function: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param tag_value: 
            :param tag_value_match_function: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__b48c7836b8953d8038eff5618ee83fad0eb63648ae3cbc4dcc06bc04d1b30991)
                check_type(argname="argument tag_value", value=tag_value, expected_type=type_hints["tag_value"])
                check_type(argname="argument tag_value_match_function", value=tag_value_match_function, expected_type=type_hints["tag_value_match_function"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "tag_value": tag_value,
                "tag_value_match_function": tag_value_match_function,
            }

        @builtins.property
        def tag_value(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: tagValue: Tag value, used with TagValueMatchFunction.
            '''
            result = self._values.get("tag_value")
            assert result is not None, "Required property 'tag_value' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def tag_value_match_function(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            tagValueMatchFunction: Matching labeled keys. Values are:
            contains: contains
            startWith: Prefix
            endWith: suffix
            notContains: not included
            equals: equals
            all: All
            '''
            result = self._values.get("tag_value_match_function")
            assert result is not None, "Required property 'tag_value_match_function' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "MatchExpressProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cms.RosDynamicTagGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "contact_group_list": "contactGroupList",
        "tag_key": "tagKey",
        "enable_install_agent": "enableInstallAgent",
        "enable_subscribe_event": "enableSubscribeEvent",
        "match_express": "matchExpress",
        "match_express_filter_relation": "matchExpressFilterRelation",
        "template_id_list": "templateIdList",
    },
)
class RosDynamicTagGroupProps:
    def __init__(
        self,
        *,
        contact_group_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        tag_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        enable_install_agent: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_subscribe_event: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        match_express: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDynamicTagGroup.MatchExpressProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        match_express_filter_relation: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        template_id_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CMS::DynamicTagGroup``.

        :param contact_group_list: 
        :param tag_key: 
        :param enable_install_agent: 
        :param enable_subscribe_event: 
        :param match_express: 
        :param match_express_filter_relation: 
        :param template_id_list: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__86a2d67efb5062efbbe2fd4c782304edbfede2154cb9d348b97fd5b35991bd96)
            check_type(argname="argument contact_group_list", value=contact_group_list, expected_type=type_hints["contact_group_list"])
            check_type(argname="argument tag_key", value=tag_key, expected_type=type_hints["tag_key"])
            check_type(argname="argument enable_install_agent", value=enable_install_agent, expected_type=type_hints["enable_install_agent"])
            check_type(argname="argument enable_subscribe_event", value=enable_subscribe_event, expected_type=type_hints["enable_subscribe_event"])
            check_type(argname="argument match_express", value=match_express, expected_type=type_hints["match_express"])
            check_type(argname="argument match_express_filter_relation", value=match_express_filter_relation, expected_type=type_hints["match_express_filter_relation"])
            check_type(argname="argument template_id_list", value=template_id_list, expected_type=type_hints["template_id_list"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "contact_group_list": contact_group_list,
            "tag_key": tag_key,
        }
        if enable_install_agent is not None:
            self._values["enable_install_agent"] = enable_install_agent
        if enable_subscribe_event is not None:
            self._values["enable_subscribe_event"] = enable_subscribe_event
        if match_express is not None:
            self._values["match_express"] = match_express
        if match_express_filter_relation is not None:
            self._values["match_express_filter_relation"] = match_express_filter_relation
        if template_id_list is not None:
            self._values["template_id_list"] = template_id_list

    @builtins.property
    def contact_group_list(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: contactGroupList: Alarm contacts.
        '''
        result = self._values.get("contact_group_list")
        assert result is not None, "Required property 'contact_group_list' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def tag_key(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: tagKey: Tag key.
        '''
        result = self._values.get("tag_key")
        assert result is not None, "Required property 'tag_key' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def enable_install_agent(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableInstallAgent: Whether to enable initial installation monitoring plug, not installed by default. Values are:
        true: enable installation
        Note If ECS generated instances group does not monitor plug-in installed will attempt to automatically install.
        false: disable installation
        '''
        result = self._values.get("enable_install_agent")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_subscribe_event(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableSubscribeEvent: Whether the event subscription is enabled. Values are
        :true: enable event subscription
        false: disable event subscription
        '''
        result = self._values.get("enable_subscribe_event")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def match_express(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDynamicTagGroup.MatchExpressProperty]]]]:
        '''
        :Property: matchExpress: Matching list. Only supports one currently.
        '''
        result = self._values.get("match_express")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDynamicTagGroup.MatchExpressProperty]]]], result)

    @builtins.property
    def match_express_filter_relation(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        matchExpressFilterRelation: The relationship between the conditional expressions. Values are:
        and: the relationship between
        or: the relationship or the
        Description currently supports only one combination of conditions, the follow-up Ali cloud will support a variety of combinations of conditions.
        '''
        result = self._values.get("match_express_filter_relation")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def template_id_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        templateIdList: Alarm template ID list.
        When the automatically generated application group synchronizes tags, it will generate alarm rules according to the specified alarm template.
        '''
        result = self._values.get("template_id_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDynamicTagGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosEventRule(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.RosEventRule",
):
    '''A ROS template type:  ``ALIYUN::CMS::EventRule``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosEventRuleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CMS::EventRule``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__698f72c19cb10070aa399fda7d729d648bbf553593b79a7e37ed0026f4cb33ad)
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
            type_hints = typing.get_type_hints(_typecheckingstub__421f42c2e0da2199500beb7d6bb5f150e05dec4ecaebf7f1a9686974a6f22911)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrData")
    def attr_data(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Data: Number of rows affected.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrData"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__df93accf784456c62c1c1636c8a4d7ae10f27e0fca32fa221efd0374fbff15f1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="eventPattern")
    def event_pattern(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEventRule.EventPatternProperty"]]]:
        '''
        :Property: eventPattern: Event pattern configuration.A maximum of 20 event patterns.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEventRule.EventPatternProperty"]]], jsii.get(self, "eventPattern"))

    @event_pattern.setter
    def event_pattern(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEventRule.EventPatternProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b4b4a94c544e56e6d5aafb91b2e9b3d6b7d27b54ad61c1b25aa7a0a9b7c56b63)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "eventPattern", value)

    @builtins.property
    @jsii.member(jsii_name="ruleName")
    def rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ruleName: The name of the alarm rule.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "ruleName"))

    @rule_name.setter
    def rule_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9bcff1e487dc2ed58102cbb44d627f9502233627bfbe5fd5a841d384474b09a9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ruleName", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the alert rule.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__efcb2cb922a91806228cb3603c3e87f4ce41c76507cfd3d31f7d252e23cdd999)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="eventType")
    def event_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        eventType: The type of the event alert. Valid values:
        SYSTEM
        CUSTOM
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "eventType"))

    @event_type.setter
    def event_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2966e034fb3bcd775b18b395a75d17733f76af37b72b86f0f75489c649b2cfc5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "eventType", value)

    @builtins.property
    @jsii.member(jsii_name="groupId")
    def group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groupId: The ID of the application group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "groupId"))

    @group_id.setter
    def group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dd5b5c73f2368a3764fc23271dcc9da97012ffddef716cb08e0d064c06b5f1e8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupId", value)

    @builtins.property
    @jsii.member(jsii_name="state")
    def state(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        state: The status of the alert rule. Valid values:
        ENABLED
        DISABLED
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "state"))

    @state.setter
    def state(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f2a675f00baa49f3d72147e4c5ca52ef110d9323e8dcedcfc28c847c65f5a5e9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "state", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cms.RosEventRule.EventPatternProperty",
        jsii_struct_bases=[],
        name_mapping={
            "event_type_list": "eventTypeList",
            "level_list": "levelList",
            "name_list": "nameList",
            "product": "product",
            "status_list": "statusList",
        },
    )
    class EventPatternProperty:
        def __init__(
            self,
            *,
            event_type_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
            level_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
            name_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
            product: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            status_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param event_type_list: 
            :param level_list: 
            :param name_list: 
            :param product: 
            :param status_list: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__bb19a33ae8f59f1d0c018f34a93948a1b526ec0d58afc8a184a8455d29eee6e8)
                check_type(argname="argument event_type_list", value=event_type_list, expected_type=type_hints["event_type_list"])
                check_type(argname="argument level_list", value=level_list, expected_type=type_hints["level_list"])
                check_type(argname="argument name_list", value=name_list, expected_type=type_hints["name_list"])
                check_type(argname="argument product", value=product, expected_type=type_hints["product"])
                check_type(argname="argument status_list", value=status_list, expected_type=type_hints["status_list"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if event_type_list is not None:
                self._values["event_type_list"] = event_type_list
            if level_list is not None:
                self._values["level_list"] = level_list
            if name_list is not None:
                self._values["name_list"] = name_list
            if product is not None:
                self._values["product"] = product
            if status_list is not None:
                self._values["status_list"] = status_list

        @builtins.property
        def event_type_list(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: eventTypeList: The type of the event. A value of * indicates any type. Please refer to the configuration of CMS.
            '''
            result = self._values.get("event_type_list")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def level_list(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            levelList: The severity of the event alert. Valid values: CRITICAL, WARN, INFO, and * (all severity
            levels).
            '''
            result = self._values.get("level_list")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def name_list(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: nameList: The name of the event. Please refer to the configuration of CMS.
            '''
            result = self._values.get("name_list")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def product(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: product: The name of the service. Please refer to the configuration of CMS.
            '''
            result = self._values.get("product")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def status_list(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: statusList: The status of the event. Please refer to the configuration of CMS.
            '''
            result = self._values.get("status_list")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "EventPatternProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cms.RosEventRuleProps",
    jsii_struct_bases=[],
    name_mapping={
        "event_pattern": "eventPattern",
        "rule_name": "ruleName",
        "description": "description",
        "event_type": "eventType",
        "group_id": "groupId",
        "state": "state",
    },
)
class RosEventRuleProps:
    def __init__(
        self,
        *,
        event_pattern: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosEventRule.EventPatternProperty, typing.Dict[builtins.str, typing.Any]]]]],
        rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        event_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        state: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CMS::EventRule``.

        :param event_pattern: 
        :param rule_name: 
        :param description: 
        :param event_type: 
        :param group_id: 
        :param state: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4cd752d1aecc182315872a656a02e21d5bb1a410c895a788bf1ce7a7810e9808)
            check_type(argname="argument event_pattern", value=event_pattern, expected_type=type_hints["event_pattern"])
            check_type(argname="argument rule_name", value=rule_name, expected_type=type_hints["rule_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument event_type", value=event_type, expected_type=type_hints["event_type"])
            check_type(argname="argument group_id", value=group_id, expected_type=type_hints["group_id"])
            check_type(argname="argument state", value=state, expected_type=type_hints["state"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "event_pattern": event_pattern,
            "rule_name": rule_name,
        }
        if description is not None:
            self._values["description"] = description
        if event_type is not None:
            self._values["event_type"] = event_type
        if group_id is not None:
            self._values["group_id"] = group_id
        if state is not None:
            self._values["state"] = state

    @builtins.property
    def event_pattern(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosEventRule.EventPatternProperty]]]:
        '''
        :Property: eventPattern: Event pattern configuration.A maximum of 20 event patterns.
        '''
        result = self._values.get("event_pattern")
        assert result is not None, "Required property 'event_pattern' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosEventRule.EventPatternProperty]]], result)

    @builtins.property
    def rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ruleName: The name of the alarm rule.
        '''
        result = self._values.get("rule_name")
        assert result is not None, "Required property 'rule_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the alert rule.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def event_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        eventType: The type of the event alert. Valid values:
        SYSTEM
        CUSTOM
        '''
        result = self._values.get("event_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groupId: The ID of the application group.
        '''
        result = self._values.get("group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def state(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        state: The status of the alert rule. Valid values:
        ENABLED
        DISABLED
        '''
        result = self._values.get("state")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosEventRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosEventRuleTargets(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.RosEventRuleTargets",
):
    '''A ROS template type:  ``ALIYUN::CMS::EventRuleTargets``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosEventRuleTargetsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CMS::EventRuleTargets``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4a4eec819304f7c972198f5377dec780fa6e357f13646074ee46f2c1667df922)
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
            type_hints = typing.get_type_hints(_typecheckingstub__7f1070e6f21dc4281550a5cde4ebaff5a3ec65f01573cb9d65410833c5219d1a)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        '''A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.'''
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0acce749038d54a4342cddf3e6686cd88faf5663c45dff3ebd8a7af9a6aa52e0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="ruleName")
    def rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ruleName: The name of the alert rule.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "ruleName"))

    @rule_name.setter
    def rule_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0202de2442d22ce60b2968152da4c011e1b2ec3754c9efe94e574929716c9ffb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ruleName", value)

    @builtins.property
    @jsii.member(jsii_name="contactParameters")
    def contact_parameters(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEventRuleTargets.ContactParametersProperty"]]]]:
        '''
        :Property: contactParameters: CONTACT configuration.A maximum of 5 parameters
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEventRuleTargets.ContactParametersProperty"]]]], jsii.get(self, "contactParameters"))

    @contact_parameters.setter
    def contact_parameters(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEventRuleTargets.ContactParametersProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__728852b410c2038ee88f3ab92bbd4e365b4325db870ed18ac30fb07443fc9060)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "contactParameters", value)

    @builtins.property
    @jsii.member(jsii_name="fcParameters")
    def fc_parameters(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEventRuleTargets.FcParametersProperty"]]]]:
        '''
        :Property: fcParameters: FC configuration.A maximum of 5 parameters.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEventRuleTargets.FcParametersProperty"]]]], jsii.get(self, "fcParameters"))

    @fc_parameters.setter
    def fc_parameters(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEventRuleTargets.FcParametersProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0a455ef6e9505a50f37db294c8cf381f2270ee47ce239960f4970bddc21e8e62)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "fcParameters", value)

    @builtins.property
    @jsii.member(jsii_name="mnsParameters")
    def mns_parameters(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEventRuleTargets.MnsParametersProperty"]]]]:
        '''
        :Property: mnsParameters: MNS configuration.A maximum of 5 parameters
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEventRuleTargets.MnsParametersProperty"]]]], jsii.get(self, "mnsParameters"))

    @mns_parameters.setter
    def mns_parameters(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEventRuleTargets.MnsParametersProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eb8574fe58454da1c7d3d051cd1c2a5aff1ab6e299c4f0737fd8e59df38cf92e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "mnsParameters", value)

    @builtins.property
    @jsii.member(jsii_name="slsParameters")
    def sls_parameters(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEventRuleTargets.SlsParametersProperty"]]]]:
        '''
        :Property: slsParameters: SLS configuration.A maximum of 5 parameters.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEventRuleTargets.SlsParametersProperty"]]]], jsii.get(self, "slsParameters"))

    @sls_parameters.setter
    def sls_parameters(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEventRuleTargets.SlsParametersProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0bd8dad526362373ef0cc01eb35ccb6465e43a872f8b427c5abdccfe718bc600)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "slsParameters", value)

    @builtins.property
    @jsii.member(jsii_name="webhookParameters")
    def webhook_parameters(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEventRuleTargets.WebhookParametersProperty"]]]]:
        '''
        :Property: webhookParameters: WEBHOOK configuration.A maximum of 5 parameters.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEventRuleTargets.WebhookParametersProperty"]]]], jsii.get(self, "webhookParameters"))

    @webhook_parameters.setter
    def webhook_parameters(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEventRuleTargets.WebhookParametersProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__87929c018078f586f2032f3067c02f13b622b33af4ffccec285e7b3451273ed0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "webhookParameters", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cms.RosEventRuleTargets.ContactParametersProperty",
        jsii_struct_bases=[],
        name_mapping={
            "contact_group_name": "contactGroupName",
            "id": "id",
            "level": "level",
        },
    )
    class ContactParametersProperty:
        def __init__(
            self,
            *,
            contact_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param contact_group_name: 
            :param id: 
            :param level: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__460f11b71ffc107cdf4ea75a8f9bec49a5cdcefe98d00cef095ce647327abc6a)
                check_type(argname="argument contact_group_name", value=contact_group_name, expected_type=type_hints["contact_group_name"])
                check_type(argname="argument id", value=id, expected_type=type_hints["id"])
                check_type(argname="argument level", value=level, expected_type=type_hints["level"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if contact_group_name is not None:
                self._values["contact_group_name"] = contact_group_name
            if id is not None:
                self._values["id"] = id
            if level is not None:
                self._values["level"] = level

        @builtins.property
        def contact_group_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: contactGroupName: The name of the alert contact group.
            '''
            result = self._values.get("contact_group_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: id: The unique ID of the alert contact group notification.
            '''
            result = self._values.get("id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def level(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: level: The method of alert notification. Valid values: 2, 3, and 4.2: DingTalk Chatbot and email.3: DingTalk Chatbot and email.4: DingTalk Chatbot and email.
            '''
            result = self._values.get("level")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ContactParametersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cms.RosEventRuleTargets.FcParametersProperty",
        jsii_struct_bases=[],
        name_mapping={
            "function_name": "functionName",
            "id": "id",
            "region": "region",
            "service_name": "serviceName",
        },
    )
    class FcParametersProperty:
        def __init__(
            self,
            *,
            function_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            service_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param function_name: 
            :param id: 
            :param region: 
            :param service_name: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__80360ae21b636c7edc901dd454c4a0f8f6fde31f76c13ead29834135ebd41a75)
                check_type(argname="argument function_name", value=function_name, expected_type=type_hints["function_name"])
                check_type(argname="argument id", value=id, expected_type=type_hints["id"])
                check_type(argname="argument region", value=region, expected_type=type_hints["region"])
                check_type(argname="argument service_name", value=service_name, expected_type=type_hints["service_name"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if function_name is not None:
                self._values["function_name"] = function_name
            if id is not None:
                self._values["id"] = id
            if region is not None:
                self._values["region"] = region
            if service_name is not None:
                self._values["service_name"] = service_name

        @builtins.property
        def function_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: functionName: The name of the function.
            '''
            result = self._values.get("function_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: id: The unique ID of the Function Compute notification.
            '''
            result = self._values.get("id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def region(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: region: The region where Function Compute is deployed.
            '''
            result = self._values.get("region")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def service_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: serviceName: The name of the Function Compute service.
            '''
            result = self._values.get("service_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "FcParametersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cms.RosEventRuleTargets.MnsParametersProperty",
        jsii_struct_bases=[],
        name_mapping={"id": "id", "queue": "queue", "region": "region"},
    )
    class MnsParametersProperty:
        def __init__(
            self,
            *,
            id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            queue: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param id: 
            :param queue: 
            :param region: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__c1fc04c5179915975601f5de7287079026571f8a1edd0f76277eddbe9d12c524)
                check_type(argname="argument id", value=id, expected_type=type_hints["id"])
                check_type(argname="argument queue", value=queue, expected_type=type_hints["queue"])
                check_type(argname="argument region", value=region, expected_type=type_hints["region"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if id is not None:
                self._values["id"] = id
            if queue is not None:
                self._values["queue"] = queue
            if region is not None:
                self._values["region"] = region

        @builtins.property
        def id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: id: The unique ID of the Message Service (MNS) notification.
            '''
            result = self._values.get("id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def queue(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: queue: The name of the MNS queue.
            '''
            result = self._values.get("queue")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def region(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: region: The region where MNS is deployed.
            '''
            result = self._values.get("region")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "MnsParametersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cms.RosEventRuleTargets.SlsParametersProperty",
        jsii_struct_bases=[],
        name_mapping={
            "id": "id",
            "log_store": "logStore",
            "project": "project",
            "region": "region",
        },
    )
    class SlsParametersProperty:
        def __init__(
            self,
            *,
            id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            log_store: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            project: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param id: 
            :param log_store: 
            :param project: 
            :param region: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__dc493da9d45835c3d1a2a5e6631694c59acf5b55fe525c11839a06d13d9b321d)
                check_type(argname="argument id", value=id, expected_type=type_hints["id"])
                check_type(argname="argument log_store", value=log_store, expected_type=type_hints["log_store"])
                check_type(argname="argument project", value=project, expected_type=type_hints["project"])
                check_type(argname="argument region", value=region, expected_type=type_hints["region"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if id is not None:
                self._values["id"] = id
            if log_store is not None:
                self._values["log_store"] = log_store
            if project is not None:
                self._values["project"] = project
            if region is not None:
                self._values["region"] = region

        @builtins.property
        def id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: id: The unique ID of the Log Service notification.
            '''
            result = self._values.get("id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def log_store(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: logStore: The logstore corresponding to Log Service.
            '''
            result = self._values.get("log_store")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def project(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: project: The project corresponding to Log Service.
            '''
            result = self._values.get("project")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def region(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: region: The region where Log Service is deployed.
            '''
            result = self._values.get("region")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SlsParametersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cms.RosEventRuleTargets.WebhookParametersProperty",
        jsii_struct_bases=[],
        name_mapping={
            "id": "id",
            "method": "method",
            "protocol": "protocol",
            "url": "url",
        },
    )
    class WebhookParametersProperty:
        def __init__(
            self,
            *,
            id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            method: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param id: 
            :param method: 
            :param protocol: 
            :param url: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__483eabadc96e1aab116ee3f605a3458e4e3db7196e6cb4212decc6d2902eff13)
                check_type(argname="argument id", value=id, expected_type=type_hints["id"])
                check_type(argname="argument method", value=method, expected_type=type_hints["method"])
                check_type(argname="argument protocol", value=protocol, expected_type=type_hints["protocol"])
                check_type(argname="argument url", value=url, expected_type=type_hints["url"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if id is not None:
                self._values["id"] = id
            if method is not None:
                self._values["method"] = method
            if protocol is not None:
                self._values["protocol"] = protocol
            if url is not None:
                self._values["url"] = url

        @builtins.property
        def id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: id: The unique ID of the HTTP callback notification.
            '''
            result = self._values.get("id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def method(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: method: The request method of the HTTP callback. Valid values: GET and POST.
            '''
            result = self._values.get("method")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def protocol(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: protocol: The name of the protocol.
            '''
            result = self._values.get("protocol")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def url(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: url: The callback URL.
            '''
            result = self._values.get("url")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "WebhookParametersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cms.RosEventRuleTargetsProps",
    jsii_struct_bases=[],
    name_mapping={
        "rule_name": "ruleName",
        "contact_parameters": "contactParameters",
        "fc_parameters": "fcParameters",
        "mns_parameters": "mnsParameters",
        "sls_parameters": "slsParameters",
        "webhook_parameters": "webhookParameters",
    },
)
class RosEventRuleTargetsProps:
    def __init__(
        self,
        *,
        rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        contact_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosEventRuleTargets.ContactParametersProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        fc_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosEventRuleTargets.FcParametersProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        mns_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosEventRuleTargets.MnsParametersProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        sls_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosEventRuleTargets.SlsParametersProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        webhook_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosEventRuleTargets.WebhookParametersProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CMS::EventRuleTargets``.

        :param rule_name: 
        :param contact_parameters: 
        :param fc_parameters: 
        :param mns_parameters: 
        :param sls_parameters: 
        :param webhook_parameters: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5c8153c145fb285669efa0c4d12ad36f28851af1f963554ea1b03453c79b647f)
            check_type(argname="argument rule_name", value=rule_name, expected_type=type_hints["rule_name"])
            check_type(argname="argument contact_parameters", value=contact_parameters, expected_type=type_hints["contact_parameters"])
            check_type(argname="argument fc_parameters", value=fc_parameters, expected_type=type_hints["fc_parameters"])
            check_type(argname="argument mns_parameters", value=mns_parameters, expected_type=type_hints["mns_parameters"])
            check_type(argname="argument sls_parameters", value=sls_parameters, expected_type=type_hints["sls_parameters"])
            check_type(argname="argument webhook_parameters", value=webhook_parameters, expected_type=type_hints["webhook_parameters"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "rule_name": rule_name,
        }
        if contact_parameters is not None:
            self._values["contact_parameters"] = contact_parameters
        if fc_parameters is not None:
            self._values["fc_parameters"] = fc_parameters
        if mns_parameters is not None:
            self._values["mns_parameters"] = mns_parameters
        if sls_parameters is not None:
            self._values["sls_parameters"] = sls_parameters
        if webhook_parameters is not None:
            self._values["webhook_parameters"] = webhook_parameters

    @builtins.property
    def rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ruleName: The name of the alert rule.
        '''
        result = self._values.get("rule_name")
        assert result is not None, "Required property 'rule_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def contact_parameters(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosEventRuleTargets.ContactParametersProperty]]]]:
        '''
        :Property: contactParameters: CONTACT configuration.A maximum of 5 parameters
        '''
        result = self._values.get("contact_parameters")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosEventRuleTargets.ContactParametersProperty]]]], result)

    @builtins.property
    def fc_parameters(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosEventRuleTargets.FcParametersProperty]]]]:
        '''
        :Property: fcParameters: FC configuration.A maximum of 5 parameters.
        '''
        result = self._values.get("fc_parameters")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosEventRuleTargets.FcParametersProperty]]]], result)

    @builtins.property
    def mns_parameters(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosEventRuleTargets.MnsParametersProperty]]]]:
        '''
        :Property: mnsParameters: MNS configuration.A maximum of 5 parameters
        '''
        result = self._values.get("mns_parameters")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosEventRuleTargets.MnsParametersProperty]]]], result)

    @builtins.property
    def sls_parameters(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosEventRuleTargets.SlsParametersProperty]]]]:
        '''
        :Property: slsParameters: SLS configuration.A maximum of 5 parameters.
        '''
        result = self._values.get("sls_parameters")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosEventRuleTargets.SlsParametersProperty]]]], result)

    @builtins.property
    def webhook_parameters(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosEventRuleTargets.WebhookParametersProperty]]]]:
        '''
        :Property: webhookParameters: WEBHOOK configuration.A maximum of 5 parameters.
        '''
        result = self._values.get("webhook_parameters")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosEventRuleTargets.WebhookParametersProperty]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosEventRuleTargetsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosGroupMetricRule(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.RosGroupMetricRule",
):
    '''A ROS template type:  ``ALIYUN::CMS::GroupMetricRule``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosGroupMetricRuleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CMS::GroupMetricRule``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2f26e0b2fc40efaff7b635ff23024e48eba4e20e4376ce26334ff3f37ff9e5d1)
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
            type_hints = typing.get_type_hints(_typecheckingstub__ffa2bf044da8b169250c59c534e178df5f9ce05a23884283fc1e76254d79a0a2)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleId")
    def attr_rule_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RuleId: Rule ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRuleId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="category")
    def category(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        category: The abbreviation of the service name. Valid values:
        ECS (including Alibaba Cloud and non-Alibaba Cloud hosts)
        RDS (ApsaraDB for RDS)
        ADS (AnalyticDB)
        SLB (Server Load Balancer)
        VPC (Virtual Private Cloud)
        APIGATEWAY (API Gateway)
        CDN
        CS (Container Service for Swarm)
        DCDN (Dynamic Route for CDN)
        DDoS (distributed denial of service)
        EIP (Elastic IP)
        ELASTICSEARCH (Elasticsearch)
        EMR (E-MapReduce)
        ESS (Auto Scaling)
        HBASE (ApsaraDB for HBase)
        IOT_EDGE (IoT Edge)
        K8S_POD (k8s pod)
        KVSTORE_SHARDING (ApsaraDB for Redis cluster version)
        KVSTORE_SPLITRW (ApsaraDB for Redis read/write splitting version)
        KVSTORE_STANDARD (ApsaraDB for Redis standard version)
        MEMCACHE (ApsaraDB for Memcache)
        MNS (Message Service)
        MONGODB (ApsaraDB for MongoDB replica set instances)
        MONGODB_CLUSTER (ApsaraDB for MongoDB cluster version)
        MONGODB_SHARDING (ApsaraDB for MongoDB sharded clusters)
        MQ_TOPIC (Message Service topic)
        OCS (original version of ApsaraDB for Memcache)
        OPENSEARCH (Open Search)
        OSS (Object Storage Service)
        POLARDB (ApsaraDB for POLARDB)
        PETADATA (HybridDB for MySQL)
        SCDN (Secure Content Delivery Network)
        SHAREBANDWIDTHPACKAGES (shared bandwidth package)
        SLS (Log Service)
        VPN (VPN Gateway)
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "category"))

    @category.setter
    def category(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__867436030bbde72840a7cdf041916294d49450ac304811e9ec0c49a9ceb5b880)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "category", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__af81da0641b89f43ae19ebca7eb887160a8c4ed9862da0280b2e9fd707efb217)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="escalations")
    def escalations(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGroupMetricRule.EscalationsProperty"]:
        '''
        :Property: escalations: undefined
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGroupMetricRule.EscalationsProperty"], jsii.get(self, "escalations"))

    @escalations.setter
    def escalations(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGroupMetricRule.EscalationsProperty"],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__64af1a99a7b2182798776b9ca17e3129d123e6d9b21618ea057c552a524d8421)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "escalations", value)

    @builtins.property
    @jsii.member(jsii_name="groupId")
    def group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: groupId: The ID of application group.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "groupId"))

    @group_id.setter
    def group_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__413a0ca4e47328452b7f0ef942d7635e9d3f05e7fd1dc1badbaba375d494fb1e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupId", value)

    @builtins.property
    @jsii.member(jsii_name="metricName")
    def metric_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: metricName: The name of the metric. For more information, call DescribeMetricMetaList or see Preset metrics reference.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "metricName"))

    @metric_name.setter
    def metric_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__44d463d97d7de7fa925112a90be7a1c392b8b36f40aada45e323c57f66ac4953)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "metricName", value)

    @builtins.property
    @jsii.member(jsii_name="namespace")
    def namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        namespace: The data namespace of the service. For more information, call DescribeMetricMetaList
        or see Preset metrics reference.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "namespace"))

    @namespace.setter
    def namespace(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3728223c3d4e42ac2d9eccc09596239c3301b7979525b68c7f36d61673afdb9d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "namespace", value)

    @builtins.property
    @jsii.member(jsii_name="ruleId")
    def rule_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        ruleId: The ID of the alert rule. The IDs of alert rules are generated by callers to ensure
        uniqueness.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "ruleId"))

    @rule_id.setter
    def rule_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4935eb400bc7743c4cf1b0bea1d93149f53db95e3637842666f09082a56e127f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ruleId", value)

    @builtins.property
    @jsii.member(jsii_name="ruleName")
    def rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ruleName: The name of the alert rule.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "ruleName"))

    @rule_name.setter
    def rule_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__22bbb6201084b6384d74251d909bbb19bcbe375ae41755fff148ac2d9dcc5366)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ruleName", value)

    @builtins.property
    @jsii.member(jsii_name="dimensions")
    def dimensions(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dimensions: The expended resource dimensions.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dimensions"))

    @dimensions.setter
    def dimensions(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ec837144438957ec1e8290f8eaec708ae064d8308d4a00f4e6800d2ddeb754dd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dimensions", value)

    @builtins.property
    @jsii.member(jsii_name="effectiveInterval")
    def effective_interval(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: effectiveInterval: The period when the alert rule is effective.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "effectiveInterval"))

    @effective_interval.setter
    def effective_interval(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d0442db09851aa8b4c7510771b9a1905a785602dd8f83a3f0b3f35f2737723d0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "effectiveInterval", value)

    @builtins.property
    @jsii.member(jsii_name="emailSubject")
    def email_subject(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: emailSubject: The subject of the alert notification email.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "emailSubject"))

    @email_subject.setter
    def email_subject(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__788e46fa8dbbcaf9c30b7a53701680391931712fe2db5ca8460b352e47d64bcc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "emailSubject", value)

    @builtins.property
    @jsii.member(jsii_name="interval")
    def interval(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: interval: The detection period of alerts.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "interval"))

    @interval.setter
    def interval(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__038bd050d876c6dbab8a154496c3c6edfa8eac3c582275cca18adc1c22b297e8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "interval", value)

    @builtins.property
    @jsii.member(jsii_name="noEffectiveInterval")
    def no_effective_interval(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: noEffectiveInterval: The period when the alert rule is ineffective.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "noEffectiveInterval"))

    @no_effective_interval.setter
    def no_effective_interval(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1034c5b1813ad747df3aa08a130df9ffc823918a834911adcec60847b54e744c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "noEffectiveInterval", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: period: The aggregation period. Unite: second.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__54f0a62cc185c120218ca317af75a8ed672e68259d3d0229211b901cda2387cc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="silenceTime")
    def silence_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        silenceTime: The duration of the mute period during which new alerts are not sent even if the trigger
        conditions are met. Unit: second. Default value: 86400. Minimum value: 60.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "silenceTime"))

    @silence_time.setter
    def silence_time(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__acbb4d246b2d060ceb14bef2aec4b1abc7f6eb6bfac17fd6a63084b7c04969ca)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "silenceTime", value)

    @builtins.property
    @jsii.member(jsii_name="webhook")
    def webhook(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: webhook: The URL of the callback triggered when an alert occurs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "webhook"))

    @webhook.setter
    def webhook(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a6e0182d8bf8c1ce2efd7c7b93ba7a65f1c2c744ea1b5e2be33c587d2ccfb34c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "webhook", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cms.RosGroupMetricRule.CriticalProperty",
        jsii_struct_bases=[],
        name_mapping={
            "comparison_operator": "comparisonOperator",
            "statistics": "statistics",
            "threshold": "threshold",
            "times": "times",
        },
    )
    class CriticalProperty:
        def __init__(
            self,
            *,
            comparison_operator: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            statistics: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            threshold: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            times: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param comparison_operator: 
            :param statistics: 
            :param threshold: 
            :param times: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__7f34a98f76128468eb659c5dbe69638aec476e691033ef78980d60ed83a2ea9b)
                check_type(argname="argument comparison_operator", value=comparison_operator, expected_type=type_hints["comparison_operator"])
                check_type(argname="argument statistics", value=statistics, expected_type=type_hints["statistics"])
                check_type(argname="argument threshold", value=threshold, expected_type=type_hints["threshold"])
                check_type(argname="argument times", value=times, expected_type=type_hints["times"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "comparison_operator": comparison_operator,
                "statistics": statistics,
                "threshold": threshold,
                "times": times,
            }

        @builtins.property
        def comparison_operator(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            comparisonOperator: The comparison operator of the threshold for critical-level alerts. Valid values:
            GreaterThanOrEqualToThreshold
            GreaterThanThreshold
            LessThanOrEqualToThreshold
            LessThanThreshold
            NotEqualToThreshold
            GreaterThanYesterday
            LessThanYesterday
            GreaterThanLastWeek
            LessThanLastWeek
            GreaterThanLastPeriod
            LessThanLastPeriod
            '''
            result = self._values.get("comparison_operator")
            assert result is not None, "Required property 'comparison_operator' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def statistics(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            statistics: The statistical method for critical-level alerts. The statistical method varies with
            metric.
            '''
            result = self._values.get("statistics")
            assert result is not None, "Required property 'statistics' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def threshold(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: threshold: The threshold for critical-level alerts.
            '''
            result = self._values.get("threshold")
            assert result is not None, "Required property 'threshold' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def times(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            times: The consecutive number of times for which the metric value exceeds the threshold for
            critical-level alerts before an alert is triggered.
            '''
            result = self._values.get("times")
            assert result is not None, "Required property 'times' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "CriticalProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cms.RosGroupMetricRule.EscalationsProperty",
        jsii_struct_bases=[],
        name_mapping={"critical": "critical", "info": "info", "warn": "warn"},
    )
    class EscalationsProperty:
        def __init__(
            self,
            *,
            critical: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosGroupMetricRule.CriticalProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosGroupMetricRule.InfoProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            warn: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosGroupMetricRule.WarnProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        ) -> None:
            '''
            :param critical: 
            :param info: 
            :param warn: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__c5b3dfcc1858657022fd03544d2f172d13fecd43e3ffb3eb3ec4d6f570da2da7)
                check_type(argname="argument critical", value=critical, expected_type=type_hints["critical"])
                check_type(argname="argument info", value=info, expected_type=type_hints["info"])
                check_type(argname="argument warn", value=warn, expected_type=type_hints["warn"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if critical is not None:
                self._values["critical"] = critical
            if info is not None:
                self._values["info"] = info
            if warn is not None:
                self._values["warn"] = warn

        @builtins.property
        def critical(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGroupMetricRule.CriticalProperty"]]:
            '''
            :Property: critical: undefined
            '''
            result = self._values.get("critical")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGroupMetricRule.CriticalProperty"]], result)

        @builtins.property
        def info(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGroupMetricRule.InfoProperty"]]:
            '''
            :Property: info: undefined
            '''
            result = self._values.get("info")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGroupMetricRule.InfoProperty"]], result)

        @builtins.property
        def warn(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGroupMetricRule.WarnProperty"]]:
            '''
            :Property: warn: undefined
            '''
            result = self._values.get("warn")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGroupMetricRule.WarnProperty"]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "EscalationsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cms.RosGroupMetricRule.InfoProperty",
        jsii_struct_bases=[],
        name_mapping={
            "comparison_operator": "comparisonOperator",
            "statistics": "statistics",
            "threshold": "threshold",
            "times": "times",
        },
    )
    class InfoProperty:
        def __init__(
            self,
            *,
            comparison_operator: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            statistics: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            threshold: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            times: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param comparison_operator: 
            :param statistics: 
            :param threshold: 
            :param times: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__206fbf8100eb1d151f939e79849509d891c355bbfd58320d3cf4176d67009bb5)
                check_type(argname="argument comparison_operator", value=comparison_operator, expected_type=type_hints["comparison_operator"])
                check_type(argname="argument statistics", value=statistics, expected_type=type_hints["statistics"])
                check_type(argname="argument threshold", value=threshold, expected_type=type_hints["threshold"])
                check_type(argname="argument times", value=times, expected_type=type_hints["times"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "comparison_operator": comparison_operator,
                "statistics": statistics,
                "threshold": threshold,
                "times": times,
            }

        @builtins.property
        def comparison_operator(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            comparisonOperator: The comparison operator of the threshold for info-level alerts. Valid values:
            GreaterThanOrEqualToThreshold
            GreaterThanThreshold
            LessThanOrEqualToThreshold
            LessThanThreshold
            NotEqualToThreshold
            GreaterThanYesterday
            LessThanYesterday
            GreaterThanLastWeek
            LessThanLastWeek
            GreaterThanLastPeriod
            LessThanLastPeriod
            '''
            result = self._values.get("comparison_operator")
            assert result is not None, "Required property 'comparison_operator' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def statistics(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: statistics: The statistical method for info-level alerts.
            '''
            result = self._values.get("statistics")
            assert result is not None, "Required property 'statistics' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def threshold(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: threshold: The threshold for info-level alerts.
            '''
            result = self._values.get("threshold")
            assert result is not None, "Required property 'threshold' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def times(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            times: The consecutive number of times for which the metric value exceeds the threshold for
            info-level alerts before an alert is triggered.
            '''
            result = self._values.get("times")
            assert result is not None, "Required property 'times' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "InfoProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cms.RosGroupMetricRule.WarnProperty",
        jsii_struct_bases=[],
        name_mapping={
            "comparison_operator": "comparisonOperator",
            "statistics": "statistics",
            "threshold": "threshold",
            "times": "times",
        },
    )
    class WarnProperty:
        def __init__(
            self,
            *,
            comparison_operator: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            statistics: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            threshold: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            times: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param comparison_operator: 
            :param statistics: 
            :param threshold: 
            :param times: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__5fd053e72ee1b0bd958ec3e1aad5b3186d2c8e097c433b4f049a5fe1cf43f2eb)
                check_type(argname="argument comparison_operator", value=comparison_operator, expected_type=type_hints["comparison_operator"])
                check_type(argname="argument statistics", value=statistics, expected_type=type_hints["statistics"])
                check_type(argname="argument threshold", value=threshold, expected_type=type_hints["threshold"])
                check_type(argname="argument times", value=times, expected_type=type_hints["times"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "comparison_operator": comparison_operator,
                "statistics": statistics,
                "threshold": threshold,
                "times": times,
            }

        @builtins.property
        def comparison_operator(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            comparisonOperator: The comparison operator of the threshold for warn-level alerts. Valid values:
            GreaterThanOrEqualToThreshold
            GreaterThanThreshold
            LessThanOrEqualToThreshold
            LessThanThreshold
            NotEqualToThreshold
            GreaterThanYesterday
            LessThanYesterday
            GreaterThanLastWeek
            LessThanLastWeek
            GreaterThanLastPeriod
            LessThanLastPeriod
            '''
            result = self._values.get("comparison_operator")
            assert result is not None, "Required property 'comparison_operator' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def statistics(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: statistics: The statistical method for warn-level alerts.
            '''
            result = self._values.get("statistics")
            assert result is not None, "Required property 'statistics' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def threshold(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: threshold: The threshold for warn-level alerts.
            '''
            result = self._values.get("threshold")
            assert result is not None, "Required property 'threshold' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def times(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            times: The consecutive number of times for which the metric value exceeds the threshold for
            warn-level alerts before an alert is triggered.
            '''
            result = self._values.get("times")
            assert result is not None, "Required property 'times' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "WarnProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cms.RosGroupMetricRuleProps",
    jsii_struct_bases=[],
    name_mapping={
        "category": "category",
        "escalations": "escalations",
        "group_id": "groupId",
        "metric_name": "metricName",
        "namespace": "namespace",
        "rule_id": "ruleId",
        "rule_name": "ruleName",
        "dimensions": "dimensions",
        "effective_interval": "effectiveInterval",
        "email_subject": "emailSubject",
        "interval": "interval",
        "no_effective_interval": "noEffectiveInterval",
        "period": "period",
        "silence_time": "silenceTime",
        "webhook": "webhook",
    },
)
class RosGroupMetricRuleProps:
    def __init__(
        self,
        *,
        category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        escalations: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGroupMetricRule.EscalationsProperty, typing.Dict[builtins.str, typing.Any]]],
        group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        metric_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        namespace: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        rule_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        dimensions: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        effective_interval: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        email_subject: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        no_effective_interval: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        silence_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        webhook: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CMS::GroupMetricRule``.

        :param category: 
        :param escalations: 
        :param group_id: 
        :param metric_name: 
        :param namespace: 
        :param rule_id: 
        :param rule_name: 
        :param dimensions: 
        :param effective_interval: 
        :param email_subject: 
        :param interval: 
        :param no_effective_interval: 
        :param period: 
        :param silence_time: 
        :param webhook: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f87f5df1f22860766e1976e9170a05fc604e08584e08509040109ae031fca7f6)
            check_type(argname="argument category", value=category, expected_type=type_hints["category"])
            check_type(argname="argument escalations", value=escalations, expected_type=type_hints["escalations"])
            check_type(argname="argument group_id", value=group_id, expected_type=type_hints["group_id"])
            check_type(argname="argument metric_name", value=metric_name, expected_type=type_hints["metric_name"])
            check_type(argname="argument namespace", value=namespace, expected_type=type_hints["namespace"])
            check_type(argname="argument rule_id", value=rule_id, expected_type=type_hints["rule_id"])
            check_type(argname="argument rule_name", value=rule_name, expected_type=type_hints["rule_name"])
            check_type(argname="argument dimensions", value=dimensions, expected_type=type_hints["dimensions"])
            check_type(argname="argument effective_interval", value=effective_interval, expected_type=type_hints["effective_interval"])
            check_type(argname="argument email_subject", value=email_subject, expected_type=type_hints["email_subject"])
            check_type(argname="argument interval", value=interval, expected_type=type_hints["interval"])
            check_type(argname="argument no_effective_interval", value=no_effective_interval, expected_type=type_hints["no_effective_interval"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument silence_time", value=silence_time, expected_type=type_hints["silence_time"])
            check_type(argname="argument webhook", value=webhook, expected_type=type_hints["webhook"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "category": category,
            "escalations": escalations,
            "group_id": group_id,
            "metric_name": metric_name,
            "namespace": namespace,
            "rule_id": rule_id,
            "rule_name": rule_name,
        }
        if dimensions is not None:
            self._values["dimensions"] = dimensions
        if effective_interval is not None:
            self._values["effective_interval"] = effective_interval
        if email_subject is not None:
            self._values["email_subject"] = email_subject
        if interval is not None:
            self._values["interval"] = interval
        if no_effective_interval is not None:
            self._values["no_effective_interval"] = no_effective_interval
        if period is not None:
            self._values["period"] = period
        if silence_time is not None:
            self._values["silence_time"] = silence_time
        if webhook is not None:
            self._values["webhook"] = webhook

    @builtins.property
    def category(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        category: The abbreviation of the service name. Valid values:
        ECS (including Alibaba Cloud and non-Alibaba Cloud hosts)
        RDS (ApsaraDB for RDS)
        ADS (AnalyticDB)
        SLB (Server Load Balancer)
        VPC (Virtual Private Cloud)
        APIGATEWAY (API Gateway)
        CDN
        CS (Container Service for Swarm)
        DCDN (Dynamic Route for CDN)
        DDoS (distributed denial of service)
        EIP (Elastic IP)
        ELASTICSEARCH (Elasticsearch)
        EMR (E-MapReduce)
        ESS (Auto Scaling)
        HBASE (ApsaraDB for HBase)
        IOT_EDGE (IoT Edge)
        K8S_POD (k8s pod)
        KVSTORE_SHARDING (ApsaraDB for Redis cluster version)
        KVSTORE_SPLITRW (ApsaraDB for Redis read/write splitting version)
        KVSTORE_STANDARD (ApsaraDB for Redis standard version)
        MEMCACHE (ApsaraDB for Memcache)
        MNS (Message Service)
        MONGODB (ApsaraDB for MongoDB replica set instances)
        MONGODB_CLUSTER (ApsaraDB for MongoDB cluster version)
        MONGODB_SHARDING (ApsaraDB for MongoDB sharded clusters)
        MQ_TOPIC (Message Service topic)
        OCS (original version of ApsaraDB for Memcache)
        OPENSEARCH (Open Search)
        OSS (Object Storage Service)
        POLARDB (ApsaraDB for POLARDB)
        PETADATA (HybridDB for MySQL)
        SCDN (Secure Content Delivery Network)
        SHAREBANDWIDTHPACKAGES (shared bandwidth package)
        SLS (Log Service)
        VPN (VPN Gateway)
        '''
        result = self._values.get("category")
        assert result is not None, "Required property 'category' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def escalations(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosGroupMetricRule.EscalationsProperty]:
        '''
        :Property: escalations: undefined
        '''
        result = self._values.get("escalations")
        assert result is not None, "Required property 'escalations' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosGroupMetricRule.EscalationsProperty], result)

    @builtins.property
    def group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: groupId: The ID of application group.
        '''
        result = self._values.get("group_id")
        assert result is not None, "Required property 'group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def metric_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: metricName: The name of the metric. For more information, call DescribeMetricMetaList or see Preset metrics reference.
        '''
        result = self._values.get("metric_name")
        assert result is not None, "Required property 'metric_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        namespace: The data namespace of the service. For more information, call DescribeMetricMetaList
        or see Preset metrics reference.
        '''
        result = self._values.get("namespace")
        assert result is not None, "Required property 'namespace' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def rule_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        ruleId: The ID of the alert rule. The IDs of alert rules are generated by callers to ensure
        uniqueness.
        '''
        result = self._values.get("rule_id")
        assert result is not None, "Required property 'rule_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ruleName: The name of the alert rule.
        '''
        result = self._values.get("rule_name")
        assert result is not None, "Required property 'rule_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def dimensions(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dimensions: The expended resource dimensions.
        '''
        result = self._values.get("dimensions")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def effective_interval(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: effectiveInterval: The period when the alert rule is effective.
        '''
        result = self._values.get("effective_interval")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def email_subject(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: emailSubject: The subject of the alert notification email.
        '''
        result = self._values.get("email_subject")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def interval(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: interval: The detection period of alerts.
        '''
        result = self._values.get("interval")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def no_effective_interval(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: noEffectiveInterval: The period when the alert rule is ineffective.
        '''
        result = self._values.get("no_effective_interval")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: period: The aggregation period. Unite: second.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def silence_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        silenceTime: The duration of the mute period during which new alerts are not sent even if the trigger
        conditions are met. Unit: second. Default value: 86400. Minimum value: 60.
        '''
        result = self._values.get("silence_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def webhook(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: webhook: The URL of the callback triggered when an alert occurs.
        '''
        result = self._values.get("webhook")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosGroupMetricRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosMetricRuleTargets(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.RosMetricRuleTargets",
):
    '''A ROS template type:  ``ALIYUN::CMS::MetricRuleTargets``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosMetricRuleTargetsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CMS::MetricRuleTargets``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__77f22ffe783575ece512de2ec22dd25ec298acb110dceed4d7887b1170baf4f4)
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
            type_hints = typing.get_type_hints(_typecheckingstub__cb15696aa27b8abb021ef59f5959d37c7a08f5c0a6c6390b5528953c5d8d435b)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrArns")
    def attr_arns(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Arns: The ARN list of targets
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrArns"))

    @builtins.property
    @jsii.member(jsii_name="attrIds")
    def attr_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Ids: The ID list of targets
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIds"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__4c2665e8b641c422eb96297b4ce14405f9545173128d809e2943ab85fd9a3b71)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="ruleId")
    def rule_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ruleId: The ID of the alert rule.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "ruleId"))

    @rule_id.setter
    def rule_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4248eb69d202992727a650668717b2314da1d394424319b69f64d75fe5a4b791)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ruleId", value)

    @builtins.property
    @jsii.member(jsii_name="targets")
    def targets(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMetricRuleTargets.TargetsProperty"]]]:
        '''
        :Property: targets: undefined
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMetricRuleTargets.TargetsProperty"]]], jsii.get(self, "targets"))

    @targets.setter
    def targets(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMetricRuleTargets.TargetsProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5440761056799d72bb3a70fa5f196ebcabbb0aece7e7e11f69949d1218514135)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "targets", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cms.RosMetricRuleTargets.TargetsProperty",
        jsii_struct_bases=[],
        name_mapping={"arn": "arn", "id": "id", "level": "level"},
    )
    class TargetsProperty:
        def __init__(
            self,
            *,
            arn: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param arn: 
            :param id: 
            :param level: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__1a4b9bdc5f70724e84300a10c521a229790bdb6be4fb254971fcfc6e4266a06c)
                check_type(argname="argument arn", value=arn, expected_type=type_hints["arn"])
                check_type(argname="argument id", value=id, expected_type=type_hints["id"])
                check_type(argname="argument level", value=level, expected_type=type_hints["level"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "arn": arn,
                "id": id,
            }
            if level is not None:
                self._values["level"] = level

        @builtins.property
        def arn(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            arn: The resource description in the format of acs:{Service name abbreviation}:{regionId}:{userId}:/{Message resource type}/{Resource
            name}/message. Example: acs:mns:cn-hangzhou:111:/queues/test/message.
            {Service name abbreviation}: the abbreviation of the service name. Set this value
            to mns.
            {regionId}: the region ID of the message queue or topic.
            {userId}: the account ID of the user.
            {Message resource type}: the type of the message resource. Valid values: queues and
            topics.
            {Resource name}: the name of a queue if the resource type is queues, or the name of
            a topic if the type is topics.
            '''
            result = self._values.get("arn")
            assert result is not None, "Required property 'arn' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: id: The ID of the message resource. The ID must be unique in the alert rule.
            '''
            result = self._values.get("id")
            assert result is not None, "Required property 'id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def level(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            level: The alert level, which is a JSON array. For example: ["INFO", "WARN", "CRITICAL"]. Valid values:
            INFO
            WARN
            CRITICAL
            '''
            result = self._values.get("level")
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
    jsii_type="@alicloud/ros-cdk-cms.RosMetricRuleTargetsProps",
    jsii_struct_bases=[],
    name_mapping={"rule_id": "ruleId", "targets": "targets"},
)
class RosMetricRuleTargetsProps:
    def __init__(
        self,
        *,
        rule_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        targets: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMetricRuleTargets.TargetsProperty, typing.Dict[builtins.str, typing.Any]]]]],
    ) -> None:
        '''Properties for defining a ``ALIYUN::CMS::MetricRuleTargets``.

        :param rule_id: 
        :param targets: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e292d95feae5193e4e7b40cf36fc0359268679937e65de809b27b583f7242ae4)
            check_type(argname="argument rule_id", value=rule_id, expected_type=type_hints["rule_id"])
            check_type(argname="argument targets", value=targets, expected_type=type_hints["targets"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "rule_id": rule_id,
            "targets": targets,
        }

    @builtins.property
    def rule_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ruleId: The ID of the alert rule.
        '''
        result = self._values.get("rule_id")
        assert result is not None, "Required property 'rule_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def targets(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosMetricRuleTargets.TargetsProperty]]]:
        '''
        :Property: targets: undefined
        '''
        result = self._values.get("targets")
        assert result is not None, "Required property 'targets' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosMetricRuleTargets.TargetsProperty]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosMetricRuleTargetsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosMetricRuleTemplate(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.RosMetricRuleTemplate",
):
    '''A ROS template type:  ``ALIYUN::CMS::MetricRuleTemplate``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosMetricRuleTemplateProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CMS::MetricRuleTemplate``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2e432b7ae65eb83bb511bd7a4445376f358c144a8813aa6e3be4bcb083906ac0)
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
            type_hints = typing.get_type_hints(_typecheckingstub__65683a3acea3fcfda96641f3e94f73c1151c591580fdc2a14552048ab60e74ea)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrId")
    def attr_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Id: Alarm template ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__66f2057c47f0f22e362108c72803f51a050ecef7534620e4582a9b96d32fbd43)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name of the alert template.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a2d0a0160fd2b92d328d386cd47a9d0d9d8e3cb9cc38a6dcf859e5788b6919c1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="alertTemplates")
    def alert_templates(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMetricRuleTemplate.AlertTemplatesProperty"]]]]:
        '''
        :Property: alertTemplates: Valid values of N: 0 to 200.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMetricRuleTemplate.AlertTemplatesProperty"]]]], jsii.get(self, "alertTemplates"))

    @alert_templates.setter
    def alert_templates(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMetricRuleTemplate.AlertTemplatesProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8b105d17c8088b881ab44d645174476aa41082697c1b1df1b02bbac50f62996a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "alertTemplates", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the alert template.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__41504f792d9b130a233f97ddb94cd1acea9311c84fb2445c4d2526dd27b35768)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="restVersion")
    def rest_version(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        restVersion: The version of the alert template. Call DescribeMetricRuleTemplateList or DescribeMetricRuleTemplateAttribute
        to obtain information about the alert templates. The combination of version and ID
        uniquely identifies an alert template.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "restVersion"))

    @rest_version.setter
    def rest_version(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4d09594bf3ac8258ae69124c150d9a9c8f7050e0642174269e5c360d165298e2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "restVersion", value)

    @builtins.property
    @jsii.member(jsii_name="templateId")
    def template_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: templateId: The ID of the alert template.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "templateId"))

    @template_id.setter
    def template_id(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ac264f05356bb10aca6443172dff0e16d2088ee240a203216c973b4880b1e12e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "templateId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cms.RosMetricRuleTemplate.AlertTemplatesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "category": "category",
            "metric_name": "metricName",
            "namespace": "namespace",
            "rule_name": "ruleName",
            "escalations": "escalations",
            "period": "period",
            "selector": "selector",
            "webhook": "webhook",
        },
    )
    class AlertTemplatesProperty:
        def __init__(
            self,
            *,
            category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            metric_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            namespace: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            escalations: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosMetricRuleTemplate.EscalationsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            selector: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            webhook: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param category: 
            :param metric_name: 
            :param namespace: 
            :param rule_name: 
            :param escalations: 
            :param period: 
            :param selector: 
            :param webhook: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__06a3fbb7248d046e3ebae8e88a17281ff348bb14dde9ef08ac3af522a8fd638a)
                check_type(argname="argument category", value=category, expected_type=type_hints["category"])
                check_type(argname="argument metric_name", value=metric_name, expected_type=type_hints["metric_name"])
                check_type(argname="argument namespace", value=namespace, expected_type=type_hints["namespace"])
                check_type(argname="argument rule_name", value=rule_name, expected_type=type_hints["rule_name"])
                check_type(argname="argument escalations", value=escalations, expected_type=type_hints["escalations"])
                check_type(argname="argument period", value=period, expected_type=type_hints["period"])
                check_type(argname="argument selector", value=selector, expected_type=type_hints["selector"])
                check_type(argname="argument webhook", value=webhook, expected_type=type_hints["webhook"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "category": category,
                "metric_name": metric_name,
                "namespace": namespace,
                "rule_name": rule_name,
            }
            if escalations is not None:
                self._values["escalations"] = escalations
            if period is not None:
                self._values["period"] = period
            if selector is not None:
                self._values["selector"] = selector
            if webhook is not None:
                self._values["webhook"] = webhook

        @builtins.property
        def category(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            category: The abbreviation of the service name.Value including but not limited to:
            ecs: Elastic Compute Service (ECS) instances provided by Alibaba Cloud and hosts not
            provided by Alibaba Cloud
            rds: ApsaraDB for RDS
            ads: AnalyticDB
            slb: Server Load Balancer (SLB)
            vpc: Virtual Private Cloud (VPC)
            apigateway: API Gateway
            cdn: CDN: Alibaba Cloud Content Delivery Network (CDN)
            cs: Container Service for Swarm
            dcdn: Dynamic Route for CDN
            ddos: Anti-DDoS Pro
            eip: Elastic IP Address (EIP)
            elasticsearch: Elasticsearch
            emr: E-MapReduce
            ess: Auto Scaling
            hbase: ApsaraDB for Hbase
            iot_edge: IoT Edge
            k8s_pod: pods in Container Service for Kubernetes
            kvstore_sharding: ApsaraDB for Redis of the cluster architecture
            kvstore_splitrw: ApsaraDB for Redis of the read/write splitting architecture
            kvstore_standard: ApsaraDB for Redis of the standard architecture
            memcache: ApsaraDB for Memcache
            mns: Message Service (MNS)
            mongodb: ApsaraDB for MongoDB of the replica set architecture
            mongodb_cluster: ApsaraDB for MongoDB of the cluster architecture
            mongodb_sharding: ApsaraDB for MongoDB of the sharded cluster architecture
            mq_topic: MNS topics
            ocs: ApsaraDB for Memcache of earlier versions
            opensearch: Open Search
            oss: Object Storage Service (OSS)
            polardb: PolarDB
            petadata: HybridDB for MySQL
            scdn: Secure Content Delivery Network (SCDN)
            sharebandwidthpackages: EIP Bandwidth Plan
            sls: Log Service
            vpn: VPN Gateway
            '''
            result = self._values.get("category")
            assert result is not None, "Required property 'category' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def metric_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            metricName: The name of the metric.
            Note For more information, see DescribeMetricMetaList or Appendix 1: Metrics.
            '''
            result = self._values.get("metric_name")
            assert result is not None, "Required property 'metric_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def namespace(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            namespace: The namespace of the service.
            Note For more information, see DescribeMetricMetaList or Appendix 1: Metrics.
            '''
            result = self._values.get("namespace")
            assert result is not None, "Required property 'namespace' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def rule_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: ruleName: The name of the alert rule.
            '''
            result = self._values.get("rule_name")
            assert result is not None, "Required property 'rule_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def escalations(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMetricRuleTemplate.EscalationsProperty"]]:
            '''
            :Property: escalations: undefined
            '''
            result = self._values.get("escalations")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMetricRuleTemplate.EscalationsProperty"]], result)

        @builtins.property
        def period(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            period: The aggregation period of the monitoring data. Unit: seconds.
            The default value is the lowest frequency at which the metric is polled. Typically,
            you do not need to specify the aggregation period.
            '''
            result = self._values.get("period")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def selector(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: selector: The dimension of the alert. It is an extended field.
            '''
            result = self._values.get("selector")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def webhook(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            webhook: The callback URL to which a POST request is sent when an alert is triggered based
            on the alert rule.
            '''
            result = self._values.get("webhook")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "AlertTemplatesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cms.RosMetricRuleTemplate.CriticalProperty",
        jsii_struct_bases=[],
        name_mapping={
            "comparison_operator": "comparisonOperator",
            "statistics": "statistics",
            "threshold": "threshold",
            "times": "times",
        },
    )
    class CriticalProperty:
        def __init__(
            self,
            *,
            comparison_operator: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            statistics: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            threshold: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            times: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param comparison_operator: 
            :param statistics: 
            :param threshold: 
            :param times: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__844c273d1a2a9c3bab15dfaa64449af947faac6569b7918ca5c1dbad2ebacff1)
                check_type(argname="argument comparison_operator", value=comparison_operator, expected_type=type_hints["comparison_operator"])
                check_type(argname="argument statistics", value=statistics, expected_type=type_hints["statistics"])
                check_type(argname="argument threshold", value=threshold, expected_type=type_hints["threshold"])
                check_type(argname="argument times", value=times, expected_type=type_hints["times"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "comparison_operator": comparison_operator,
                "statistics": statistics,
                "threshold": threshold,
                "times": times,
            }

        @builtins.property
        def comparison_operator(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            comparisonOperator: The comparison operator of the threshold for alerts. Valid values:
            GreaterThanOrEqualToThreshold: greater than or equal to the threshold
            GreaterThanThreshold: greater than the threshold
            LessThanOrEqualToThreshold: less than or equal to the threshold
            LessThanThreshold: less than the threshold
            NotEqualToThreshold: not equal to the threshold
            GreaterThanYesterday: greater than the metric value at the same time yesterday
            LessThanYesterday: less than the metric value at the same time yesterday
            GreaterThanLastWeek: greater than the metric value at the same time last week
            LessThanLastWeek: less than the metric value at the same time last week
            GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
            LessThanLastPeriod: less than the metric value in the last monitoring cycle
            '''
            result = self._values.get("comparison_operator")
            assert result is not None, "Required property 'comparison_operator' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def statistics(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: statistics: The statistical method for alerts.
            '''
            result = self._values.get("statistics")
            assert result is not None, "Required property 'statistics' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def threshold(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: threshold: The threshold for alerts.
            '''
            result = self._values.get("threshold")
            assert result is not None, "Required property 'threshold' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def times(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: times: The consecutive number of times for which the metric value is measured before a alert is triggered.
            '''
            result = self._values.get("times")
            assert result is not None, "Required property 'times' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "CriticalProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cms.RosMetricRuleTemplate.EscalationsProperty",
        jsii_struct_bases=[],
        name_mapping={"critical": "critical", "info": "info", "warn": "warn"},
    )
    class EscalationsProperty:
        def __init__(
            self,
            *,
            critical: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosMetricRuleTemplate.CriticalProperty", typing.Dict[builtins.str, typing.Any]]],
            info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosMetricRuleTemplate.InfoProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            warn: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosMetricRuleTemplate.WarnProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        ) -> None:
            '''
            :param critical: 
            :param info: 
            :param warn: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__bc6175b9a738f7b1f6513fd4c9fab8814d907e07d9d4278d861fabb740c5dd7c)
                check_type(argname="argument critical", value=critical, expected_type=type_hints["critical"])
                check_type(argname="argument info", value=info, expected_type=type_hints["info"])
                check_type(argname="argument warn", value=warn, expected_type=type_hints["warn"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "critical": critical,
            }
            if info is not None:
                self._values["info"] = info
            if warn is not None:
                self._values["warn"] = warn

        @builtins.property
        def critical(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMetricRuleTemplate.CriticalProperty"]:
            '''
            :Property: critical: undefined
            '''
            result = self._values.get("critical")
            assert result is not None, "Required property 'critical' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMetricRuleTemplate.CriticalProperty"], result)

        @builtins.property
        def info(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMetricRuleTemplate.InfoProperty"]]:
            '''
            :Property: info: undefined
            '''
            result = self._values.get("info")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMetricRuleTemplate.InfoProperty"]], result)

        @builtins.property
        def warn(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMetricRuleTemplate.WarnProperty"]]:
            '''
            :Property: warn: undefined
            '''
            result = self._values.get("warn")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMetricRuleTemplate.WarnProperty"]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "EscalationsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cms.RosMetricRuleTemplate.InfoProperty",
        jsii_struct_bases=[],
        name_mapping={
            "comparison_operator": "comparisonOperator",
            "statistics": "statistics",
            "threshold": "threshold",
            "times": "times",
        },
    )
    class InfoProperty:
        def __init__(
            self,
            *,
            comparison_operator: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            statistics: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            threshold: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            times: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param comparison_operator: 
            :param statistics: 
            :param threshold: 
            :param times: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__5253663f7297ab752dc2f55211410f2441efb88e041dca37fe73f0d7c69520ba)
                check_type(argname="argument comparison_operator", value=comparison_operator, expected_type=type_hints["comparison_operator"])
                check_type(argname="argument statistics", value=statistics, expected_type=type_hints["statistics"])
                check_type(argname="argument threshold", value=threshold, expected_type=type_hints["threshold"])
                check_type(argname="argument times", value=times, expected_type=type_hints["times"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "comparison_operator": comparison_operator,
                "statistics": statistics,
                "threshold": threshold,
                "times": times,
            }

        @builtins.property
        def comparison_operator(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            comparisonOperator: The comparison operator of the threshold for alerts. Valid values:
            GreaterThanOrEqualToThreshold: greater than or equal to the threshold
            GreaterThanThreshold: greater than the threshold
            LessThanOrEqualToThreshold: less than or equal to the threshold
            LessThanThreshold: less than the threshold
            NotEqualToThreshold: not equal to the threshold
            GreaterThanYesterday: greater than the metric value at the same time yesterday
            LessThanYesterday: less than the metric value at the same time yesterday
            GreaterThanLastWeek: greater than the metric value at the same time last week
            LessThanLastWeek: less than the metric value at the same time last week
            GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
            LessThanLastPeriod: less than the metric value in the last monitoring cycle
            '''
            result = self._values.get("comparison_operator")
            assert result is not None, "Required property 'comparison_operator' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def statistics(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: statistics: The statistical method for alerts.
            '''
            result = self._values.get("statistics")
            assert result is not None, "Required property 'statistics' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def threshold(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: threshold: The threshold for alerts.
            '''
            result = self._values.get("threshold")
            assert result is not None, "Required property 'threshold' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def times(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: times: The consecutive number of times for which the metric value is measured before a alert is triggered.
            '''
            result = self._values.get("times")
            assert result is not None, "Required property 'times' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "InfoProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cms.RosMetricRuleTemplate.WarnProperty",
        jsii_struct_bases=[],
        name_mapping={
            "comparison_operator": "comparisonOperator",
            "statistics": "statistics",
            "threshold": "threshold",
            "times": "times",
        },
    )
    class WarnProperty:
        def __init__(
            self,
            *,
            comparison_operator: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            statistics: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            threshold: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            times: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param comparison_operator: 
            :param statistics: 
            :param threshold: 
            :param times: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__81e6f3de907e333d90f0893eee02f5421d92701bfe2d654fff13001285cdab78)
                check_type(argname="argument comparison_operator", value=comparison_operator, expected_type=type_hints["comparison_operator"])
                check_type(argname="argument statistics", value=statistics, expected_type=type_hints["statistics"])
                check_type(argname="argument threshold", value=threshold, expected_type=type_hints["threshold"])
                check_type(argname="argument times", value=times, expected_type=type_hints["times"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "comparison_operator": comparison_operator,
                "statistics": statistics,
                "threshold": threshold,
                "times": times,
            }

        @builtins.property
        def comparison_operator(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            comparisonOperator: The comparison operator of the threshold for alerts. Valid values:
            GreaterThanOrEqualToThreshold: greater than or equal to the threshold
            GreaterThanThreshold: greater than the threshold
            LessThanOrEqualToThreshold: less than or equal to the threshold
            LessThanThreshold: less than the threshold
            NotEqualToThreshold: not equal to the threshold
            GreaterThanYesterday: greater than the metric value at the same time yesterday
            LessThanYesterday: less than the metric value at the same time yesterday
            GreaterThanLastWeek: greater than the metric value at the same time last week
            LessThanLastWeek: less than the metric value at the same time last week
            GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
            LessThanLastPeriod: less than the metric value in the last monitoring cycle
            '''
            result = self._values.get("comparison_operator")
            assert result is not None, "Required property 'comparison_operator' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def statistics(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: statistics: The statistical method for alerts.
            '''
            result = self._values.get("statistics")
            assert result is not None, "Required property 'statistics' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def threshold(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: threshold: The threshold for alerts.
            '''
            result = self._values.get("threshold")
            assert result is not None, "Required property 'threshold' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def times(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: times: The consecutive number of times for which the metric value is measured before a alert is triggered.
            '''
            result = self._values.get("times")
            assert result is not None, "Required property 'times' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "WarnProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cms.RosMetricRuleTemplateProps",
    jsii_struct_bases=[],
    name_mapping={
        "name": "name",
        "alert_templates": "alertTemplates",
        "description": "description",
        "rest_version": "restVersion",
        "template_id": "templateId",
    },
)
class RosMetricRuleTemplateProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        alert_templates: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMetricRuleTemplate.AlertTemplatesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rest_version: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        template_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CMS::MetricRuleTemplate``.

        :param name: 
        :param alert_templates: 
        :param description: 
        :param rest_version: 
        :param template_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ff17c8e2eb1d7e20256d883b8b8b1cf6e80e8b593a13085b65e55e5b5853f041)
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument alert_templates", value=alert_templates, expected_type=type_hints["alert_templates"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument rest_version", value=rest_version, expected_type=type_hints["rest_version"])
            check_type(argname="argument template_id", value=template_id, expected_type=type_hints["template_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "name": name,
        }
        if alert_templates is not None:
            self._values["alert_templates"] = alert_templates
        if description is not None:
            self._values["description"] = description
        if rest_version is not None:
            self._values["rest_version"] = rest_version
        if template_id is not None:
            self._values["template_id"] = template_id

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name of the alert template.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def alert_templates(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosMetricRuleTemplate.AlertTemplatesProperty]]]]:
        '''
        :Property: alertTemplates: Valid values of N: 0 to 200.
        '''
        result = self._values.get("alert_templates")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosMetricRuleTemplate.AlertTemplatesProperty]]]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the alert template.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rest_version(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        restVersion: The version of the alert template. Call DescribeMetricRuleTemplateList or DescribeMetricRuleTemplateAttribute
        to obtain information about the alert templates. The combination of version and ID
        uniquely identifies an alert template.
        '''
        result = self._values.get("rest_version")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def template_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: templateId: The ID of the alert template.
        '''
        result = self._values.get("template_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosMetricRuleTemplateProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosMonitorGroup(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.RosMonitorGroup",
):
    '''A ROS template type:  ``ALIYUN::CMS::MonitorGroup``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosMonitorGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CMS::MonitorGroup``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__48c4755ac4887351991dee635748a3507c7576a49bcd21cf1196243e82b576f3)
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
            type_hints = typing.get_type_hints(_typecheckingstub__d361e18412840af10e857e008d019fef32f7a29f78e0d8dd86ad8eda6316afee)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GroupId: Application group ID generated after the group is created.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGroupId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__c8a99b7242e41b9e6f7d47b825e58fa9dd80b6c3593ca62f81931e81eb07ec69)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="groupName")
    def group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: groupName: The name of the application group.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "groupName"))

    @group_name.setter
    def group_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1b12aed9e79df5d29b4c90343a5650552200395e4887611f882aeee0f63f0544)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupName", value)

    @builtins.property
    @jsii.member(jsii_name="contactGroups")
    def contact_groups(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        contactGroups: The alert contact group. Alert notifications for the application group are sent to
        the specified alert contact group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "contactGroups"))

    @contact_groups.setter
    def contact_groups(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ed03fd8370ab208046c69cb1d5c0a33367826b3cd6c208380e441d76eea4afb5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "contactGroups", value)


class RosMonitorGroupInstances(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.RosMonitorGroupInstances",
):
    '''A ROS template type:  ``ALIYUN::CMS::MonitorGroupInstances``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosMonitorGroupInstancesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CMS::MonitorGroupInstances``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bf6f0e9bf717217cb1a33ba02549b1d4fab2d428681efbd508b071a95cc10004)
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
            type_hints = typing.get_type_hints(_typecheckingstub__4569649060d8e8924c21a5cf0f92727b58edf84105b785fe0839e219c1aa3dd2)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GroupId: The ID of the application group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGroupId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__883b310ea9998ece43e80f2466d8b96eb4c67f5497ed4e89c5e14cdb95634083)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="groupId")
    def group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: groupId: The ID of the application group.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "groupId"))

    @group_id.setter
    def group_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__75509a6bfb561a1f5c90594d678c82d2d6f8fb699ced52e2dc366f251b857871)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupId", value)

    @builtins.property
    @jsii.member(jsii_name="instances")
    def instances(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMonitorGroupInstances.InstancesProperty"]]]:
        '''
        :Property: instances:
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMonitorGroupInstances.InstancesProperty"]]], jsii.get(self, "instances"))

    @instances.setter
    def instances(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMonitorGroupInstances.InstancesProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3f8aab789da974889690f431c9f0558960c4adddea594eea5088116b0d9cd74c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instances", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cms.RosMonitorGroupInstances.InstancesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "category": "category",
            "instance_id": "instanceId",
            "instance_name": "instanceName",
            "region_id": "regionId",
        },
    )
    class InstancesProperty:
        def __init__(
            self,
            *,
            category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            instance_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param category: 
            :param instance_id: 
            :param instance_name: 
            :param region_id: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__7be347ad7b1d77cdf1cf1348a1f28a8e50c15b11e7d1f9ba648ab899a5f7a4a0)
                check_type(argname="argument category", value=category, expected_type=type_hints["category"])
                check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
                check_type(argname="argument instance_name", value=instance_name, expected_type=type_hints["instance_name"])
                check_type(argname="argument region_id", value=region_id, expected_type=type_hints["region_id"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "category": category,
                "instance_id": instance_id,
                "instance_name": instance_name,
                "region_id": region_id,
            }

        @builtins.property
        def category(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            category: The abbreviation of the service name. Valid values:
            ECS (including Alibaba Cloud and non-Alibaba Cloud hosts)
            RDS (ApsaraDB for RDS)
            ADS (AnalyticDB)
            SLB (Server Load Balancer)
            VPC (Virtual Private Cloud)
            APIGATEWAY (API Gateway)
            CDN
            CS (Container Service for Swarm)
            DCDN (Dynamic Route for CDN )
            DDoS (distributed denial of service)
            EIP (Elastic IP)
            ELASTICSEARCH (Elasticsearch)
            EMR (E-MapReduce)
            ESS (Auto Scaling)
            HBASE (ApsaraDB for HBase)
            IOT_EDGE (IoT Edge)
            K8S_POD (k8s pod )
            KVSTORE_SHARDING (ApsaraDB for Redis cluster version)
            KVSTORE_SPLITRW (ApsaraDB for Redis read/write splitting version)
            KVSTORE_STANDARD (ApsaraDB for Redis standard version)
            MEMCACHE (ApsaraDB for Memcache)
            MNS (Message Service)
            MONGODB (ApsaraDB for MongoDB replica set instances)
            MONGODB_CLUSTER (ApsaraDB for MongoDB cluster version)
            MONGODB_SHARDING (ApsaraDB for MongoDB sharded clusters)
            MQ_TOPIC (Message Service topic)
            OCS (old version ApsaraDB for Memcache)
            OPENSEARCH (Open Search)
            OSS (Object Storage Service)
            POLARDB (ApsaraDB for POLARDB)
            PETADATA (HybridDB for MySQL)
            SCDN (Secure Content Delivery Network)
            SHAREBANDWIDTHPACKAGES (shared bandwidth package)
            SLS (Log Service)
            VPN (VPN Gateway )
            '''
            result = self._values.get("category")
            assert result is not None, "Required property 'category' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def instance_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: instanceId: The ID of the resource instance.
            '''
            result = self._values.get("instance_id")
            assert result is not None, "Required property 'instance_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def instance_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: instanceName: The name of the instance.
            '''
            result = self._values.get("instance_name")
            assert result is not None, "Required property 'instance_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def region_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: regionId: The ID of the region where the instance is deployed, such as cn-hangzhou.
            '''
            result = self._values.get("region_id")
            assert result is not None, "Required property 'region_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "InstancesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cms.RosMonitorGroupInstancesProps",
    jsii_struct_bases=[],
    name_mapping={"group_id": "groupId", "instances": "instances"},
)
class RosMonitorGroupInstancesProps:
    def __init__(
        self,
        *,
        group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instances: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMonitorGroupInstances.InstancesProperty, typing.Dict[builtins.str, typing.Any]]]]],
    ) -> None:
        '''Properties for defining a ``ALIYUN::CMS::MonitorGroupInstances``.

        :param group_id: 
        :param instances: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3a0e900df56f3bb167d860a77cbb11e72e2b7faeafcb050835225bcfe2d6aec6)
            check_type(argname="argument group_id", value=group_id, expected_type=type_hints["group_id"])
            check_type(argname="argument instances", value=instances, expected_type=type_hints["instances"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "group_id": group_id,
            "instances": instances,
        }

    @builtins.property
    def group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: groupId: The ID of the application group.
        '''
        result = self._values.get("group_id")
        assert result is not None, "Required property 'group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instances(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosMonitorGroupInstances.InstancesProperty]]]:
        '''
        :Property: instances:
        '''
        result = self._values.get("instances")
        assert result is not None, "Required property 'instances' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosMonitorGroupInstances.InstancesProperty]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosMonitorGroupInstancesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cms.RosMonitorGroupProps",
    jsii_struct_bases=[],
    name_mapping={"group_name": "groupName", "contact_groups": "contactGroups"},
)
class RosMonitorGroupProps:
    def __init__(
        self,
        *,
        group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        contact_groups: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CMS::MonitorGroup``.

        :param group_name: 
        :param contact_groups: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0a25f3a94abd19d1babc06fc5bba82175ce5fa0859f9a58843b03322b50ba770)
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument contact_groups", value=contact_groups, expected_type=type_hints["contact_groups"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "group_name": group_name,
        }
        if contact_groups is not None:
            self._values["contact_groups"] = contact_groups

    @builtins.property
    def group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: groupName: The name of the application group.
        '''
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def contact_groups(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        contactGroups: The alert contact group. Alert notifications for the application group are sent to
        the specified alert contact group.
        '''
        result = self._values.get("contact_groups")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosMonitorGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosMonitoringAgentProcess(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.RosMonitoringAgentProcess",
):
    '''A ROS template type:  ``ALIYUN::CMS::MonitoringAgentProcess``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosMonitoringAgentProcessProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CMS::MonitoringAgentProcess``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f16b81e89100cbd738e3a1b9bd58cd35c7f4d22fbfe5b51dff291d75bce51ff2)
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
            type_hints = typing.get_type_hints(_typecheckingstub__5f2acf0461e6be76ea24b36e0b6ce67bc26ace27135745b8db07c884bacff0b4)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrId")
    def attr_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Id: The process ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__344800a26a4b4877818950a17495a345cabd03650b2539943ef9d845901fd9cb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__98be916b52bb0d9fe65e55e98ff1c5cac2e801a67cfbfed6704187be95de742c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="processName")
    def process_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: processName: The name of the process.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "processName"))

    @process_name.setter
    def process_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__29cf6486ae1a06d97aafb050794126e7b51c571dea3c73ab39bcd7ce58a407dc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "processName", value)

    @builtins.property
    @jsii.member(jsii_name="processUser")
    def process_user(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: processUser: The user who launched the process.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "processUser"))

    @process_user.setter
    def process_user(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6c12e9c055e2849dd55fc14fb73a94f9c80113a10e3eaff756381618be499eb9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "processUser", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cms.RosMonitoringAgentProcessProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "process_name": "processName",
        "process_user": "processUser",
    },
)
class RosMonitoringAgentProcessProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        process_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        process_user: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CMS::MonitoringAgentProcess``.

        :param instance_id: 
        :param process_name: 
        :param process_user: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3a8cdef9d9275fb69b91b8aab95808b617a188d94a2f99db4b0ddb114e3dfc54)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument process_name", value=process_name, expected_type=type_hints["process_name"])
            check_type(argname="argument process_user", value=process_user, expected_type=type_hints["process_user"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
        }
        if process_name is not None:
            self._values["process_name"] = process_name
        if process_user is not None:
            self._values["process_user"] = process_user

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the instance.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def process_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: processName: The name of the process.
        '''
        result = self._values.get("process_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def process_user(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: processUser: The user who launched the process.
        '''
        result = self._values.get("process_user")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosMonitoringAgentProcessProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosResourceMetricRule(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.RosResourceMetricRule",
):
    '''A ROS template type:  ``ALIYUN::CMS::ResourceMetricRule``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosResourceMetricRuleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CMS::ResourceMetricRule``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fcf1159419ad34b58501cd41d2a30712bbd092c80e68c89e93958da45f12d62b)
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
            type_hints = typing.get_type_hints(_typecheckingstub__5a63ed4bbafad636ab1ebf8e832b513db1a3d452c12969bb642632013fe28d2b)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleId")
    def attr_rule_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RuleId: The ID of the alert rule.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRuleId"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleName")
    def attr_rule_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RuleName: The name of the alert rule.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRuleName"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="contactGroups")
    def contact_groups(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property:

        contactGroups: The alert contact group.
        The alert notifications are sent to the contacts that belong to the alert contact group.
        Note: An alert contact group can contain one or more alert contacts. For information about how to create alert contacts and alert contact groups, see PutContact and PutContactGroup.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], jsii.get(self, "contactGroups"))

    @contact_groups.setter
    def contact_groups(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aaf81da1e7384130cc2acf999bea729dc47a9b3647827044cfd27e9945a132a2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "contactGroups", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e743b55f77879a5453628d8fb04cef149c847593762bcd6a1b5bf8bbf2abd726)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="escalations")
    def escalations(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosResourceMetricRule.EscalationsProperty"]:
        '''
        :Property: escalations: You must select at least one of the Critical, Warn, and Info alert levels.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosResourceMetricRule.EscalationsProperty"], jsii.get(self, "escalations"))

    @escalations.setter
    def escalations(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosResourceMetricRule.EscalationsProperty"],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6cade6dc00fc72a4e720af64222838144049431d31c610bf5b6a54e3eb9307d1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "escalations", value)

    @builtins.property
    @jsii.member(jsii_name="metricName")
    def metric_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        metricName: The name of the metric.
        For information about how to query the name of a metric, see Appendix 1: Metrics.
        Note: If you create a Prometheus alert rule for Hybrid Cloud Monitoring, you must set this parameter to the name of the namespace. For information about how to obtain the name of a namespace, see DescribeHybridMonitorNamespaceList.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "metricName"))

    @metric_name.setter
    def metric_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2c96b8b8210b803368b0d9610daab922532102390088fc736608eeac2780aa49)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "metricName", value)

    @builtins.property
    @jsii.member(jsii_name="namespace")
    def namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        namespace: The namespace of the cloud service.
        For information about how to query the namespace of a cloud service, Appendix 1: Metrics.
        Note: If you create a Prometheus alert rule for Hybrid Cloud Monitoring, you must set this parameter to acs_prometheus.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "namespace"))

    @namespace.setter
    def namespace(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c613982ae5fb9a7c70347fb14a144af7307dd8c22ec6c66d10cb7f808212623a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "namespace", value)

    @builtins.property
    @jsii.member(jsii_name="resources")
    def resources(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property:

        resources: The information about the resource.
        Examples: [{"instanceId":"i-uf6j91r34rnwawoo****"}] and [{"userId":"100931896542****"}].
        For information about the supported dimensions that are used to query resources, see Appendix 1: Metrics.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "resources"))

    @resources.setter
    def resources(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e13abb9584339fed13b60963d71af06259b92168d918fa7c19ff5a341667ba44)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resources", value)

    @builtins.property
    @jsii.member(jsii_name="compositeExpression")
    def composite_expression(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosResourceMetricRule.CompositeExpressionProperty"]]:
        '''
        :Property:

        compositeExpression: The trigger conditions for multiple metrics.
        Note: The trigger conditions for a single metric and multiple metrics are mutually exclusive. You cannot specify trigger conditions for a single metric and multiple metrics at the same time.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosResourceMetricRule.CompositeExpressionProperty"]], jsii.get(self, "compositeExpression"))

    @composite_expression.setter
    def composite_expression(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosResourceMetricRule.CompositeExpressionProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__90a8ddb3b68a0f867075f46c341bbe8d1d908706d192a06a9ff774bae8904076)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "compositeExpression", value)

    @builtins.property
    @jsii.member(jsii_name="deletionForce")
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deletionForce: Whether to delete rule even if it is not created by ROS. Default is false
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "deletionForce"))

    @deletion_force.setter
    def deletion_force(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__63f69def8cd00e103d8b9ada4d5ee2c29840dd2aff5e78e06ce14fed41539b9e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deletionForce", value)

    @builtins.property
    @jsii.member(jsii_name="effectiveInterval")
    def effective_interval(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: effectiveInterval: The time period during which the alert rule is effective.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "effectiveInterval"))

    @effective_interval.setter
    def effective_interval(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b6111f1a3a8d84d1065afcfea23a57eae148538782d50e1d160dc73cf5e35a49)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "effectiveInterval", value)

    @builtins.property
    @jsii.member(jsii_name="emailSubject")
    def email_subject(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: emailSubject: The subject of the alert notification email.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "emailSubject"))

    @email_subject.setter
    def email_subject(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d43751cebd6f29566fc2be8e61a19eeb12ffbfcc6fea7bdc05b5b0237b41ddc8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "emailSubject", value)

    @builtins.property
    @jsii.member(jsii_name="interval")
    def interval(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        interval: The interval at which the alert is triggered. Unit: seconds.
        Note: For information about how to query the statistical period of a metric, see Appendix 1: Metrics.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "interval"))

    @interval.setter
    def interval(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__398fd8af6c29b38340f0a267031a800e2bac35c445e590ec54ffc73f19915dd6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "interval", value)

    @builtins.property
    @jsii.member(jsii_name="labels")
    def labels(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosResourceMetricRule.LabelsProperty"]]]]:
        '''
        :Property: labels:
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosResourceMetricRule.LabelsProperty"]]]], jsii.get(self, "labels"))

    @labels.setter
    def labels(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosResourceMetricRule.LabelsProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6bfee8f18008c42ccac9d18d3e74141507bc9ebe52c03ef0580a7f0f4d126417)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "labels", value)

    @builtins.property
    @jsii.member(jsii_name="noDataPolicy")
    def no_data_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        noDataPolicy: The processing method of alerts when no monitoring data is found. Valid values:

        - KEEP_LAST_STATE (default value): No operation is performed.
        - INSUFFICIENT_DATA: An alert whose content is "Insufficient data" is triggered.
        - OK: The status is considered normal.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "noDataPolicy"))

    @no_data_policy.setter
    def no_data_policy(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b995325bbaae0cb4bd6f93a5bcfd78b1e0d98dbe422e5da33c7e3952e81d0658)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "noDataPolicy", value)

    @builtins.property
    @jsii.member(jsii_name="noEffectiveInterval")
    def no_effective_interval(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: noEffectiveInterval: The time period during which the alert rule is ineffective.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "noEffectiveInterval"))

    @no_effective_interval.setter
    def no_effective_interval(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__726de5b11e2c99d0414d2ec9fc68f2c4b7815af9c5ef435a8745d2a153f7e245)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "noEffectiveInterval", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The statistical period of the metric. Unit: seconds. The default value is the interval at which the monitoring data of the metric is collected.
        Note: For information about how to query the statistical period of a metric, see Appendix 1: Metrics.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c31cf7cd6b565e9275f91099086ea011e853a70cfd11a070155fd467435735c5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="prometheus")
    def prometheus(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosResourceMetricRule.PrometheusProperty"]]:
        '''
        :Property:

        prometheus: The Prometheus alert rule.
        Note: This parameter is required only when you create a Prometheus alert rule for Hybrid Cloud Monitoring.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosResourceMetricRule.PrometheusProperty"]], jsii.get(self, "prometheus"))

    @prometheus.setter
    def prometheus(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosResourceMetricRule.PrometheusProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__152d5f1def9169f96f02bc2eb7c85e82c3b942b6c250c89ab3d92d6eec57e213)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "prometheus", value)

    @builtins.property
    @jsii.member(jsii_name="ruleId")
    def rule_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ruleId: The ID of the alert rule. If not specified, ROS will generate one.
        You can specify a new ID or the ID of an existing alert rule. For information about how to query the ID of an alert rule, see DescribeMetricRuleList.
        Note: If you specify a new ID, a threshold-triggered alert rule is created.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ruleId"))

    @rule_id.setter
    def rule_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1493c12596d4199c148a7f47507fd0ae69cfd678d649fcb1ebee7f0380a9990c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ruleId", value)

    @builtins.property
    @jsii.member(jsii_name="ruleName")
    def rule_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ruleName: The name of the alert rule. If not specified and the rule is created by ROS, default to RuleId.
        You can specify a new name or the name of an existing alert rule. For information about how to query the name of an alert rule, see DescribeMetricRuleList.
        Note: If you specify a new name, a threshold-triggered alert rule is created.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ruleName"))

    @rule_name.setter
    def rule_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d7fe9dc6276ebdf5a11e84d9c1f554d0bc392616c2de44c59e215d6b462a0576)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ruleName", value)

    @builtins.property
    @jsii.member(jsii_name="silenceTime")
    def silence_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        silenceTime: The mute period during which new alerts are not sent even if the trigger conditions are met. Unit: seconds. Default value: 86400.
        Note: If an alert is not cleared within the mute period, a new alert notification is sent when the mute period ends.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "silenceTime"))

    @silence_time.setter
    def silence_time(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4810666f39db61b0c9135eaa4e22dba53cf19352f229605ea078bf319fb6e3e8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "silenceTime", value)

    @builtins.property
    @jsii.member(jsii_name="webhook")
    def webhook(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: webhook: The callback URL to which a POST request is sent when an alert is triggered based on the alert rule.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "webhook"))

    @webhook.setter
    def webhook(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__34b37a49405f1a72b2fa9f54034f8a85f2ae791acfdd9c49726f1a97a10c7451)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "webhook", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cms.RosResourceMetricRule.AnnotationsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class AnnotationsProperty:
        def __init__(
            self,
            *,
            key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__850a03942752dfadd19786d61e52f7cf9ea417d32bb9070320023cf631890bf7)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if key is not None:
                self._values["key"] = key
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: key: The key of the annotation.
            '''
            result = self._values.get("key")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: The value of the annotation.
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "AnnotationsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cms.RosResourceMetricRule.CompositeExpressionProperty",
        jsii_struct_bases=[],
        name_mapping={
            "level": "level",
            "times": "times",
            "expression_list": "expressionList",
            "expression_list_join": "expressionListJoin",
            "expression_raw": "expressionRaw",
        },
    )
    class CompositeExpressionProperty:
        def __init__(
            self,
            *,
            level: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            times: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            expression_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosResourceMetricRule.ExpressionListProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            expression_list_join: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            expression_raw: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param level: 
            :param times: 
            :param expression_list: 
            :param expression_list_join: 
            :param expression_raw: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__aca5f1fb0cf2ff11d1b8a9c12fc926c5e10e6c4a9b8f63f6882126004cd085b0)
                check_type(argname="argument level", value=level, expected_type=type_hints["level"])
                check_type(argname="argument times", value=times, expected_type=type_hints["times"])
                check_type(argname="argument expression_list", value=expression_list, expected_type=type_hints["expression_list"])
                check_type(argname="argument expression_list_join", value=expression_list_join, expected_type=type_hints["expression_list_join"])
                check_type(argname="argument expression_raw", value=expression_raw, expected_type=type_hints["expression_raw"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "level": level,
                "times": times,
            }
            if expression_list is not None:
                self._values["expression_list"] = expression_list
            if expression_list_join is not None:
                self._values["expression_list_join"] = expression_list_join
            if expression_raw is not None:
                self._values["expression_raw"] = expression_raw

        @builtins.property
        def level(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            level: The level of the alert. Valid values:

            - Critical
            - Warn
            - Info
            '''
            result = self._values.get("level")
            assert result is not None, "Required property 'level' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def times(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: times: The number of consecutive triggers. If the number of times that the metric values meet the trigger conditions reaches the value of this parameter, CloudMonitor sends alert notifications.
            '''
            result = self._values.get("times")
            assert result is not None, "Required property 'times' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def expression_list(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosResourceMetricRule.ExpressionListProperty"]]]]:
            '''
            :Property: expressionList: The trigger conditions that are created in standard mode.
            '''
            result = self._values.get("expression_list")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosResourceMetricRule.ExpressionListProperty"]]]], result)

        @builtins.property
        def expression_list_join(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            expressionListJoin: The relationship between the trigger conditions for multiple metrics. Valid values:

            - &&: An alert is triggered only if all metrics meet the trigger conditions. An alert is triggered only if the results of all expressions specified in the ExpressionList parameter are true.
            - ||: If one of the metrics meets the trigger conditions, an alert is triggered.
            '''
            result = self._values.get("expression_list_join")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def expression_raw(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            expressionRaw: The trigger conditions that are created by using expressions. You can use expressions to create trigger conditions in the following scenarios:

            - Set an alert blacklist for specific resources. For example, if you specify $instanceId != 'i-io8kfvcpp7x5****' && $Average > 50, no alert is generated even when the average metric value of the i-io8kfvcpp7x5**** instance exceeds 50.
            - Set a special alert threshold for a specified instance in the rule. For example, if you specify $Average > ($instanceId == 'i-io8kfvcpp7x5****'? 80: 50), an alert is triggered when the average metric value of the i-io8kfvcpp7x5**** instance exceeds 80 or the average metric value of other instances exceeds 50.
            - Limits the number of instances whose metric values exceed the threshold. For example, if you specify count($Average > 20) > 3, an alert is triggered only when the number of instances whose average metric value exceeds 20 exceeds three.
            '''
            result = self._values.get("expression_raw")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "CompositeExpressionProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cms.RosResourceMetricRule.CriticalProperty",
        jsii_struct_bases=[],
        name_mapping={
            "comparison_operator": "comparisonOperator",
            "statistics": "statistics",
            "threshold": "threshold",
            "times": "times",
        },
    )
    class CriticalProperty:
        def __init__(
            self,
            *,
            comparison_operator: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            statistics: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            threshold: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            times: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param comparison_operator: 
            :param statistics: 
            :param threshold: 
            :param times: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__2ae608f58c15d6c3fe2546ef1892dbf8970dcce7fb93f3c842065ced1024d34b)
                check_type(argname="argument comparison_operator", value=comparison_operator, expected_type=type_hints["comparison_operator"])
                check_type(argname="argument statistics", value=statistics, expected_type=type_hints["statistics"])
                check_type(argname="argument threshold", value=threshold, expected_type=type_hints["threshold"])
                check_type(argname="argument times", value=times, expected_type=type_hints["times"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "comparison_operator": comparison_operator,
                "statistics": statistics,
                "threshold": threshold,
                "times": times,
            }

        @builtins.property
        def comparison_operator(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            comparisonOperator: The operator that is used to compare the metric value with the threshold. Valid values:

            - GreaterThanOrEqualToThreshold: greater than or equal to the threshold
            - GreaterThanThreshold: greater than the threshold
            - LessThanOrEqualToThreshold: less than or equal to the threshold
            - LessThanThreshold: less than the threshold
            - NotEqualToThreshold: not equal to the threshold
            - GreaterThanYesterday: greater than the metric value at the same time yesterday
            - LessThanYesterday: less than the metric value at the same time yesterday
            - GreaterThanLastWeek: greater than the metric value at the same time last week
            - LessThanLastWeek: less than the metric value at the same time last week
            - GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
            - LessThanLastPeriod: less than the metric value in the last monitoring cycle
            '''
            result = self._values.get("comparison_operator")
            assert result is not None, "Required property 'comparison_operator' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def statistics(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            statistics: The statistical methods for Critical-level alerts. Valid values:

            - Maximum: the maximum value
            - Minimum: the minimum value
            - Average: the average value
            - Availability: the availability rate
            '''
            result = self._values.get("statistics")
            assert result is not None, "Required property 'statistics' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def threshold(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: threshold: The threshold for Critical-level alerts.
            '''
            result = self._values.get("threshold")
            assert result is not None, "Required property 'threshold' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def times(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: times: The consecutive number of times for which the metric value meets the trigger condition before a Critical-level alert is triggered.
            '''
            result = self._values.get("times")
            assert result is not None, "Required property 'times' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "CriticalProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cms.RosResourceMetricRule.EscalationsProperty",
        jsii_struct_bases=[],
        name_mapping={"critical": "critical", "info": "info", "warn": "warn"},
    )
    class EscalationsProperty:
        def __init__(
            self,
            *,
            critical: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosResourceMetricRule.CriticalProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosResourceMetricRule.InfoProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            warn: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosResourceMetricRule.WarnProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        ) -> None:
            '''
            :param critical: 
            :param info: 
            :param warn: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__8510271783adbf34e74b1c4d33ac425d38bdebed9bb6aabc9b9b74061475cad9)
                check_type(argname="argument critical", value=critical, expected_type=type_hints["critical"])
                check_type(argname="argument info", value=info, expected_type=type_hints["info"])
                check_type(argname="argument warn", value=warn, expected_type=type_hints["warn"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if critical is not None:
                self._values["critical"] = critical
            if info is not None:
                self._values["info"] = info
            if warn is not None:
                self._values["warn"] = warn

        @builtins.property
        def critical(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosResourceMetricRule.CriticalProperty"]]:
            '''
            :Property: critical: You must specify the Statistics, ComparisonOperator, Threshold, and Times parameters for the selected alert level.
            '''
            result = self._values.get("critical")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosResourceMetricRule.CriticalProperty"]], result)

        @builtins.property
        def info(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosResourceMetricRule.InfoProperty"]]:
            '''
            :Property: info: You must specify the Statistics, ComparisonOperator, Threshold, and Times parameters for the selected alert level.
            '''
            result = self._values.get("info")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosResourceMetricRule.InfoProperty"]], result)

        @builtins.property
        def warn(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosResourceMetricRule.WarnProperty"]]:
            '''
            :Property: warn: You must specify the Statistics, ComparisonOperator, Threshold, and Times parameters for the selected alert level.
            '''
            result = self._values.get("warn")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosResourceMetricRule.WarnProperty"]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "EscalationsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cms.RosResourceMetricRule.ExpressionListProperty",
        jsii_struct_bases=[],
        name_mapping={
            "comparison_operator": "comparisonOperator",
            "metric_name": "metricName",
            "period": "period",
            "statistics": "statistics",
            "threshold": "threshold",
        },
    )
    class ExpressionListProperty:
        def __init__(
            self,
            *,
            comparison_operator: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            metric_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            period: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            statistics: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            threshold: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param comparison_operator: 
            :param metric_name: 
            :param period: 
            :param statistics: 
            :param threshold: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__2b0e7ca3d0a95e9b0dd9f0914a70eb28e11f6ecac2490e9067971c904ed501cb)
                check_type(argname="argument comparison_operator", value=comparison_operator, expected_type=type_hints["comparison_operator"])
                check_type(argname="argument metric_name", value=metric_name, expected_type=type_hints["metric_name"])
                check_type(argname="argument period", value=period, expected_type=type_hints["period"])
                check_type(argname="argument statistics", value=statistics, expected_type=type_hints["statistics"])
                check_type(argname="argument threshold", value=threshold, expected_type=type_hints["threshold"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "comparison_operator": comparison_operator,
                "metric_name": metric_name,
                "period": period,
                "statistics": statistics,
                "threshold": threshold,
            }

        @builtins.property
        def comparison_operator(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            comparisonOperator: The operator that is used to compare the metric value with the threshold. Valid values:

            - GreaterThanOrEqualToThreshold: greater than or equal to the threshold
            - GreaterThanThreshold: greater than the threshold
            - LessThanOrEqualToThreshold: less than or equal to the threshold
            - LessThanThreshold: less than the threshold
            - NotEqualToThreshold: not equal to the threshold
            - GreaterThanYesterday: greater than the metric value at the same time yesterday
            - LessThanYesterday: less than the metric value at the same time yesterday
            - GreaterThanLastWeek: greater than the metric value at the same time last week
            - LessThanLastWeek: less than the metric value at the same time last week
            - GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
            - LessThanLastPeriod: less than the metric value in the last monitoring cycle
            '''
            result = self._values.get("comparison_operator")
            assert result is not None, "Required property 'comparison_operator' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def metric_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: metricName: The metric that is used to monitor the cloud service.
            '''
            result = self._values.get("metric_name")
            assert result is not None, "Required property 'metric_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def period(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            period: The aggregation period of the metric.
            Unit: seconds.
            '''
            result = self._values.get("period")
            assert result is not None, "Required property 'period' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def statistics(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            statistics: The statistical method of the metric. Valid values:
            $Maximum: the maximum value
            $Minimum: the minimum value
            $Average: the average value
            $Availability: the availability rate (usually used for site monitoring)
            Note: $ is the prefix of the metric. For information about the Alibaba Cloud services that are supported by CloudMonitor, see Appendix 1: Metrics.
            '''
            result = self._values.get("statistics")
            assert result is not None, "Required property 'statistics' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def threshold(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: threshold: The alert threshold.
            '''
            result = self._values.get("threshold")
            assert result is not None, "Required property 'threshold' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ExpressionListProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cms.RosResourceMetricRule.InfoProperty",
        jsii_struct_bases=[],
        name_mapping={
            "comparison_operator": "comparisonOperator",
            "statistics": "statistics",
            "threshold": "threshold",
            "times": "times",
        },
    )
    class InfoProperty:
        def __init__(
            self,
            *,
            comparison_operator: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            statistics: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            threshold: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            times: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param comparison_operator: 
            :param statistics: 
            :param threshold: 
            :param times: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__04b2f923029e3c470aa1c4040fc5388b549f2ae8c240458dc4b3feacb0b9ee80)
                check_type(argname="argument comparison_operator", value=comparison_operator, expected_type=type_hints["comparison_operator"])
                check_type(argname="argument statistics", value=statistics, expected_type=type_hints["statistics"])
                check_type(argname="argument threshold", value=threshold, expected_type=type_hints["threshold"])
                check_type(argname="argument times", value=times, expected_type=type_hints["times"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "comparison_operator": comparison_operator,
                "statistics": statistics,
                "threshold": threshold,
                "times": times,
            }

        @builtins.property
        def comparison_operator(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            comparisonOperator: The operator that is used to compare the metric value with the threshold. Valid values:

            - GreaterThanOrEqualToThreshold: greater than or equal to the threshold
            - GreaterThanThreshold: greater than the threshold
            - LessThanOrEqualToThreshold: less than or equal to the threshold
            - LessThanThreshold: less than the threshold
            - NotEqualToThreshold: not equal to the threshold
            - GreaterThanYesterday: greater than the metric value at the same time yesterday
            - LessThanYesterday: less than the metric value at the same time yesterday
            - GreaterThanLastWeek: greater than the metric value at the same time last week
            - LessThanLastWeek: less than the metric value at the same time last week
            - GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
            - LessThanLastPeriod: less than the metric value in the last monitoring cycle
            '''
            result = self._values.get("comparison_operator")
            assert result is not None, "Required property 'comparison_operator' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def statistics(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            statistics: The statistical methods for Info-level alerts. Valid values:

            - Maximum: the maximum value
            - Minimum: the minimum value
            - Average: the average value
            - Availability: the availability rate
            '''
            result = self._values.get("statistics")
            assert result is not None, "Required property 'statistics' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def threshold(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: threshold: The threshold for Info-level alerts.
            '''
            result = self._values.get("threshold")
            assert result is not None, "Required property 'threshold' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def times(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: times: The consecutive number of times for which the metric value meets the trigger condition before an Info-level alert is triggered.
            '''
            result = self._values.get("times")
            assert result is not None, "Required property 'times' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "InfoProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cms.RosResourceMetricRule.LabelsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class LabelsProperty:
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
                type_hints = typing.get_type_hints(_typecheckingstub__08507856ba6cbd5a401a49e7bad4ce8232cb49a4877b8d133a8a2253fc1eda7f)
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
            :Property: key: The key of the tag.
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            value: The value of the tag.
            Note: You can use a template parameter to specify a tag value. CloudMonitor replaces the value of the template parameter with an actual tag value.
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "LabelsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cms.RosResourceMetricRule.PrometheusProperty",
        jsii_struct_bases=[],
        name_mapping={
            "level": "level",
            "prom_ql": "promQl",
            "times": "times",
            "annotations": "annotations",
        },
    )
    class PrometheusProperty:
        def __init__(
            self,
            *,
            level: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            prom_ql: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            times: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            annotations: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosResourceMetricRule.AnnotationsProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        ) -> None:
            '''
            :param level: 
            :param prom_ql: 
            :param times: 
            :param annotations: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__7d19b8639486159a1d9a6d308ee76c7d0bc5d1e4dc60a909325533ee31eb75b8)
                check_type(argname="argument level", value=level, expected_type=type_hints["level"])
                check_type(argname="argument prom_ql", value=prom_ql, expected_type=type_hints["prom_ql"])
                check_type(argname="argument times", value=times, expected_type=type_hints["times"])
                check_type(argname="argument annotations", value=annotations, expected_type=type_hints["annotations"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "level": level,
                "prom_ql": prom_ql,
                "times": times,
            }
            if annotations is not None:
                self._values["annotations"] = annotations

        @builtins.property
        def level(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            level: The level of the alert. Valid values:

            - Critical
            - Warn
            - Info
            '''
            result = self._values.get("level")
            assert result is not None, "Required property 'level' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def prom_ql(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            promQl: The PromQL query statement.
            Note: The data obtained by using the PromQL query statement is the monitoring data. You must include the alert threshold in this statement.
            '''
            result = self._values.get("prom_ql")
            assert result is not None, "Required property 'prom_ql' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def times(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: times: The number of consecutive triggers. If the number of times that the metric values meet the trigger conditions reaches the value of this parameter, CloudMonitor sends alert notifications.
            '''
            result = self._values.get("times")
            assert result is not None, "Required property 'times' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def annotations(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosResourceMetricRule.AnnotationsProperty"]]]]:
            '''
            :Property:

            annotations: The annotations of the Prometheus alert rule. When a Prometheus alert is triggered, the system renders the annotated keys and values to help you understand the metrics and alert rule.
            Note: This parameter is equivalent to the annotations parameter of open source Prometheus.
            '''
            result = self._values.get("annotations")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosResourceMetricRule.AnnotationsProperty"]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PrometheusProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cms.RosResourceMetricRule.WarnProperty",
        jsii_struct_bases=[],
        name_mapping={
            "comparison_operator": "comparisonOperator",
            "statistics": "statistics",
            "threshold": "threshold",
            "times": "times",
        },
    )
    class WarnProperty:
        def __init__(
            self,
            *,
            comparison_operator: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            statistics: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            threshold: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            times: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param comparison_operator: 
            :param statistics: 
            :param threshold: 
            :param times: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__7dd3eb23cf7f290feb4e5c368dc4a97d5bbfb0f1b60e02f0168e95a1256d476f)
                check_type(argname="argument comparison_operator", value=comparison_operator, expected_type=type_hints["comparison_operator"])
                check_type(argname="argument statistics", value=statistics, expected_type=type_hints["statistics"])
                check_type(argname="argument threshold", value=threshold, expected_type=type_hints["threshold"])
                check_type(argname="argument times", value=times, expected_type=type_hints["times"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "comparison_operator": comparison_operator,
                "statistics": statistics,
                "threshold": threshold,
                "times": times,
            }

        @builtins.property
        def comparison_operator(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            comparisonOperator: The operator that is used to compare the metric value with the threshold. Valid values:

            - GreaterThanOrEqualToThreshold: greater than or equal to the threshold
            - GreaterThanThreshold: greater than the threshold
            - LessThanOrEqualToThreshold: less than or equal to the threshold
            - LessThanThreshold: less than the threshold
            - NotEqualToThreshold: not equal to the threshold
            - GreaterThanYesterday: greater than the metric value at the same time yesterday
            - LessThanYesterday: less than the metric value at the same time yesterday
            - GreaterThanLastWeek: greater than the metric value at the same time last week
            - LessThanLastWeek: less than the metric value at the same time last week
            - GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
            - LessThanLastPeriod: less than the metric value in the last monitoring cycle
            '''
            result = self._values.get("comparison_operator")
            assert result is not None, "Required property 'comparison_operator' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def statistics(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            statistics: The statistical methods for Warn-level alerts. Valid values:

            - Maximum: the maximum value
            - Minimum: the minimum value
            - Average: the average value
            - Availability: the availability rate
            '''
            result = self._values.get("statistics")
            assert result is not None, "Required property 'statistics' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def threshold(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: threshold: The threshold for Warn-level alerts.
            '''
            result = self._values.get("threshold")
            assert result is not None, "Required property 'threshold' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def times(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: times: The consecutive number of times for which the metric value meets the trigger condition before a Warn-level alert is triggered.
            '''
            result = self._values.get("times")
            assert result is not None, "Required property 'times' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "WarnProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cms.RosResourceMetricRuleProps",
    jsii_struct_bases=[],
    name_mapping={
        "contact_groups": "contactGroups",
        "escalations": "escalations",
        "metric_name": "metricName",
        "namespace": "namespace",
        "resources": "resources",
        "composite_expression": "compositeExpression",
        "deletion_force": "deletionForce",
        "effective_interval": "effectiveInterval",
        "email_subject": "emailSubject",
        "interval": "interval",
        "labels": "labels",
        "no_data_policy": "noDataPolicy",
        "no_effective_interval": "noEffectiveInterval",
        "period": "period",
        "prometheus": "prometheus",
        "rule_id": "ruleId",
        "rule_name": "ruleName",
        "silence_time": "silenceTime",
        "webhook": "webhook",
    },
)
class RosResourceMetricRuleProps:
    def __init__(
        self,
        *,
        contact_groups: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        escalations: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosResourceMetricRule.EscalationsProperty, typing.Dict[builtins.str, typing.Any]]],
        metric_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        namespace: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        resources: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Mapping[builtins.str, typing.Any]]],
        composite_expression: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosResourceMetricRule.CompositeExpressionProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        effective_interval: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        email_subject: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        labels: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosResourceMetricRule.LabelsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        no_data_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        no_effective_interval: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        prometheus: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosResourceMetricRule.PrometheusProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        rule_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rule_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        silence_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        webhook: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CMS::ResourceMetricRule``.

        :param contact_groups: 
        :param escalations: 
        :param metric_name: 
        :param namespace: 
        :param resources: 
        :param composite_expression: 
        :param deletion_force: 
        :param effective_interval: 
        :param email_subject: 
        :param interval: 
        :param labels: 
        :param no_data_policy: 
        :param no_effective_interval: 
        :param period: 
        :param prometheus: 
        :param rule_id: 
        :param rule_name: 
        :param silence_time: 
        :param webhook: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f8663e29414f718058f1fd7701cf400a02fc50b83702e2f2e1b13e43f6b93f37)
            check_type(argname="argument contact_groups", value=contact_groups, expected_type=type_hints["contact_groups"])
            check_type(argname="argument escalations", value=escalations, expected_type=type_hints["escalations"])
            check_type(argname="argument metric_name", value=metric_name, expected_type=type_hints["metric_name"])
            check_type(argname="argument namespace", value=namespace, expected_type=type_hints["namespace"])
            check_type(argname="argument resources", value=resources, expected_type=type_hints["resources"])
            check_type(argname="argument composite_expression", value=composite_expression, expected_type=type_hints["composite_expression"])
            check_type(argname="argument deletion_force", value=deletion_force, expected_type=type_hints["deletion_force"])
            check_type(argname="argument effective_interval", value=effective_interval, expected_type=type_hints["effective_interval"])
            check_type(argname="argument email_subject", value=email_subject, expected_type=type_hints["email_subject"])
            check_type(argname="argument interval", value=interval, expected_type=type_hints["interval"])
            check_type(argname="argument labels", value=labels, expected_type=type_hints["labels"])
            check_type(argname="argument no_data_policy", value=no_data_policy, expected_type=type_hints["no_data_policy"])
            check_type(argname="argument no_effective_interval", value=no_effective_interval, expected_type=type_hints["no_effective_interval"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument prometheus", value=prometheus, expected_type=type_hints["prometheus"])
            check_type(argname="argument rule_id", value=rule_id, expected_type=type_hints["rule_id"])
            check_type(argname="argument rule_name", value=rule_name, expected_type=type_hints["rule_name"])
            check_type(argname="argument silence_time", value=silence_time, expected_type=type_hints["silence_time"])
            check_type(argname="argument webhook", value=webhook, expected_type=type_hints["webhook"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "contact_groups": contact_groups,
            "escalations": escalations,
            "metric_name": metric_name,
            "namespace": namespace,
            "resources": resources,
        }
        if composite_expression is not None:
            self._values["composite_expression"] = composite_expression
        if deletion_force is not None:
            self._values["deletion_force"] = deletion_force
        if effective_interval is not None:
            self._values["effective_interval"] = effective_interval
        if email_subject is not None:
            self._values["email_subject"] = email_subject
        if interval is not None:
            self._values["interval"] = interval
        if labels is not None:
            self._values["labels"] = labels
        if no_data_policy is not None:
            self._values["no_data_policy"] = no_data_policy
        if no_effective_interval is not None:
            self._values["no_effective_interval"] = no_effective_interval
        if period is not None:
            self._values["period"] = period
        if prometheus is not None:
            self._values["prometheus"] = prometheus
        if rule_id is not None:
            self._values["rule_id"] = rule_id
        if rule_name is not None:
            self._values["rule_name"] = rule_name
        if silence_time is not None:
            self._values["silence_time"] = silence_time
        if webhook is not None:
            self._values["webhook"] = webhook

    @builtins.property
    def contact_groups(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property:

        contactGroups: The alert contact group.
        The alert notifications are sent to the contacts that belong to the alert contact group.
        Note: An alert contact group can contain one or more alert contacts. For information about how to create alert contacts and alert contact groups, see PutContact and PutContactGroup.
        '''
        result = self._values.get("contact_groups")
        assert result is not None, "Required property 'contact_groups' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def escalations(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosResourceMetricRule.EscalationsProperty]:
        '''
        :Property: escalations: You must select at least one of the Critical, Warn, and Info alert levels.
        '''
        result = self._values.get("escalations")
        assert result is not None, "Required property 'escalations' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosResourceMetricRule.EscalationsProperty], result)

    @builtins.property
    def metric_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        metricName: The name of the metric.
        For information about how to query the name of a metric, see Appendix 1: Metrics.
        Note: If you create a Prometheus alert rule for Hybrid Cloud Monitoring, you must set this parameter to the name of the namespace. For information about how to obtain the name of a namespace, see DescribeHybridMonitorNamespaceList.
        '''
        result = self._values.get("metric_name")
        assert result is not None, "Required property 'metric_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        namespace: The namespace of the cloud service.
        For information about how to query the namespace of a cloud service, Appendix 1: Metrics.
        Note: If you create a Prometheus alert rule for Hybrid Cloud Monitoring, you must set this parameter to acs_prometheus.
        '''
        result = self._values.get("namespace")
        assert result is not None, "Required property 'namespace' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def resources(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property:

        resources: The information about the resource.
        Examples: [{"instanceId":"i-uf6j91r34rnwawoo****"}] and [{"userId":"100931896542****"}].
        For information about the supported dimensions that are used to query resources, see Appendix 1: Metrics.
        '''
        result = self._values.get("resources")
        assert result is not None, "Required property 'resources' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def composite_expression(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosResourceMetricRule.CompositeExpressionProperty]]:
        '''
        :Property:

        compositeExpression: The trigger conditions for multiple metrics.
        Note: The trigger conditions for a single metric and multiple metrics are mutually exclusive. You cannot specify trigger conditions for a single metric and multiple metrics at the same time.
        '''
        result = self._values.get("composite_expression")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosResourceMetricRule.CompositeExpressionProperty]], result)

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deletionForce: Whether to delete rule even if it is not created by ROS. Default is false
        '''
        result = self._values.get("deletion_force")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def effective_interval(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: effectiveInterval: The time period during which the alert rule is effective.
        '''
        result = self._values.get("effective_interval")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def email_subject(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: emailSubject: The subject of the alert notification email.
        '''
        result = self._values.get("email_subject")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def interval(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        interval: The interval at which the alert is triggered. Unit: seconds.
        Note: For information about how to query the statistical period of a metric, see Appendix 1: Metrics.
        '''
        result = self._values.get("interval")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def labels(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosResourceMetricRule.LabelsProperty]]]]:
        '''
        :Property: labels:
        '''
        result = self._values.get("labels")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosResourceMetricRule.LabelsProperty]]]], result)

    @builtins.property
    def no_data_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        noDataPolicy: The processing method of alerts when no monitoring data is found. Valid values:

        - KEEP_LAST_STATE (default value): No operation is performed.
        - INSUFFICIENT_DATA: An alert whose content is "Insufficient data" is triggered.
        - OK: The status is considered normal.
        '''
        result = self._values.get("no_data_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def no_effective_interval(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: noEffectiveInterval: The time period during which the alert rule is ineffective.
        '''
        result = self._values.get("no_effective_interval")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The statistical period of the metric. Unit: seconds. The default value is the interval at which the monitoring data of the metric is collected.
        Note: For information about how to query the statistical period of a metric, see Appendix 1: Metrics.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def prometheus(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosResourceMetricRule.PrometheusProperty]]:
        '''
        :Property:

        prometheus: The Prometheus alert rule.
        Note: This parameter is required only when you create a Prometheus alert rule for Hybrid Cloud Monitoring.
        '''
        result = self._values.get("prometheus")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosResourceMetricRule.PrometheusProperty]], result)

    @builtins.property
    def rule_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ruleId: The ID of the alert rule. If not specified, ROS will generate one.
        You can specify a new ID or the ID of an existing alert rule. For information about how to query the ID of an alert rule, see DescribeMetricRuleList.
        Note: If you specify a new ID, a threshold-triggered alert rule is created.
        '''
        result = self._values.get("rule_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rule_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ruleName: The name of the alert rule. If not specified and the rule is created by ROS, default to RuleId.
        You can specify a new name or the name of an existing alert rule. For information about how to query the name of an alert rule, see DescribeMetricRuleList.
        Note: If you specify a new name, a threshold-triggered alert rule is created.
        '''
        result = self._values.get("rule_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def silence_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        silenceTime: The mute period during which new alerts are not sent even if the trigger conditions are met. Unit: seconds. Default value: 86400.
        Note: If an alert is not cleared within the mute period, a new alert notification is sent when the mute period ends.
        '''
        result = self._values.get("silence_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def webhook(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: webhook: The callback URL to which a POST request is sent when an alert is triggered based on the alert rule.
        '''
        result = self._values.get("webhook")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosResourceMetricRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSiteMonitor(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.RosSiteMonitor",
):
    '''A ROS template type:  ``ALIYUN::CMS::SiteMonitor``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosSiteMonitorProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CMS::SiteMonitor``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b94d7e43bbe0c9f67a06b4209ace491c3f73f9f3d454ac2755f9c8e86f882914)
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
            type_hints = typing.get_type_hints(_typecheckingstub__8ed5ccbf30d0d8a210f12c69cd6eef52f6545fe0c485ca1413d0252d4a9eec15)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TaskId: The ID of the site monitoring task.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTaskId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="address")
    def address(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: address: The URL or IP address monitored by the monitoring task.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "address"))

    @address.setter
    def address(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1493f880697b12c1f50257fa9f292e160556e76e2c7d00f157d3f945e5378e89)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "address", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a36ce269f78a7c998679d0f3d8550f80b6ba17094cdad90c3e3f1149f4952bef)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="taskName")
    def task_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        taskName: The name of the site monitoring task. The name must be 4 to 100 characters in length.
        It can contain letters, digits, and underscores (_).
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "taskName"))

    @task_name.setter
    def task_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__228c563119a0d599486df949d378085999783d01f0229b655d699427615a43b3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "taskName", value)

    @builtins.property
    @jsii.member(jsii_name="taskType")
    def task_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        taskType: The protocol used by the site monitoring task. Valid values: HTTP, HTTPS, PING, TCP,
        UDP, DNS, SMTP, POP3, and FTP.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "taskType"))

    @task_type.setter
    def task_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3b4b9741f2b32ee3a64eb3ebe22f5ac2b3c0e6febc1153900c3e70562ca1274f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "taskType", value)

    @builtins.property
    @jsii.member(jsii_name="alertIds")
    def alert_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: alertIds:
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "alertIds"))

    @alert_ids.setter
    def alert_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6f6c256c16640669531575c299a45b7067f3fd7233ce599eb5e4d148d4826684)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "alertIds", value)

    @builtins.property
    @jsii.member(jsii_name="interval")
    def interval(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        interval: The interval at which detection requests are sent. Valid values: 1, 5, and 15. Unit:
        minutes. Default value: 1.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "interval"))

    @interval.setter
    def interval(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ac5e93731567541c319946495b89786c71b036ad4e425a1f92399a237c27eb00)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "interval", value)

    @builtins.property
    @jsii.member(jsii_name="ispCities")
    def isp_cities(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSiteMonitor.IspCitiesProperty"]]]]:
        '''
        :Property:

        ispCities: The information about detection points, which is specified in a JSON array. Example:
        [{"city":"546","isp":"465"},{"city":"572","isp":"465"},{"city":"738","isp":"465"}]. The three city codes represent Beijing, Hangzhou, and Qingdao.
        Note You can call the DescribeSiteMonitorISPCityList API operation to query the detection
        points that can be used to create site monitoring tasks. For more information, see
        DescribeSiteMonitorISPCityList . If this parameter is not specified, the system randomly selects three detection
        points for site monitoring.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSiteMonitor.IspCitiesProperty"]]]], jsii.get(self, "ispCities"))

    @isp_cities.setter
    def isp_cities(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSiteMonitor.IspCitiesProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6942873b769c4f8769231e22d194acd5ae13d00fb4cbb0c74c592100152ab51b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ispCities", value)

    @builtins.property
    @jsii.member(jsii_name="optionsJson")
    def options_json(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        optionsJson: The extended options of the protocol that is used by the site monitoring task. The
        options vary based on the protocol.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "optionsJson"))

    @options_json.setter
    def options_json(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e67c83233d73289b5b4b3c7a04c1e2d8cf76949f3faeb133c5110fb8ab1103db)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "optionsJson", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cms.RosSiteMonitor.IspCitiesProperty",
        jsii_struct_bases=[],
        name_mapping={"city": "city", "isp": "isp"},
    )
    class IspCitiesProperty:
        def __init__(
            self,
            *,
            city: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            isp: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param city: 
            :param isp: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__eb667de378435b9f26def69d4fcd47184e62ee1b9ee7be1aec8df6e0576a7e74)
                check_type(argname="argument city", value=city, expected_type=type_hints["city"])
                check_type(argname="argument isp", value=isp, expected_type=type_hints["isp"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "city": city,
                "isp": isp,
            }

        @builtins.property
        def city(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: city:
            '''
            result = self._values.get("city")
            assert result is not None, "Required property 'city' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def isp(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: isp:
            '''
            result = self._values.get("isp")
            assert result is not None, "Required property 'isp' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "IspCitiesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cms.RosSiteMonitorProps",
    jsii_struct_bases=[],
    name_mapping={
        "address": "address",
        "task_name": "taskName",
        "task_type": "taskType",
        "alert_ids": "alertIds",
        "interval": "interval",
        "isp_cities": "ispCities",
        "options_json": "optionsJson",
    },
)
class RosSiteMonitorProps:
    def __init__(
        self,
        *,
        address: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        task_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        task_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        alert_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        isp_cities: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSiteMonitor.IspCitiesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        options_json: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CMS::SiteMonitor``.

        :param address: 
        :param task_name: 
        :param task_type: 
        :param alert_ids: 
        :param interval: 
        :param isp_cities: 
        :param options_json: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f8dfb1718a661ee212f87a9a80032b7c86457428c4982878fefa041cd1f460d0)
            check_type(argname="argument address", value=address, expected_type=type_hints["address"])
            check_type(argname="argument task_name", value=task_name, expected_type=type_hints["task_name"])
            check_type(argname="argument task_type", value=task_type, expected_type=type_hints["task_type"])
            check_type(argname="argument alert_ids", value=alert_ids, expected_type=type_hints["alert_ids"])
            check_type(argname="argument interval", value=interval, expected_type=type_hints["interval"])
            check_type(argname="argument isp_cities", value=isp_cities, expected_type=type_hints["isp_cities"])
            check_type(argname="argument options_json", value=options_json, expected_type=type_hints["options_json"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "address": address,
            "task_name": task_name,
            "task_type": task_type,
        }
        if alert_ids is not None:
            self._values["alert_ids"] = alert_ids
        if interval is not None:
            self._values["interval"] = interval
        if isp_cities is not None:
            self._values["isp_cities"] = isp_cities
        if options_json is not None:
            self._values["options_json"] = options_json

    @builtins.property
    def address(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: address: The URL or IP address monitored by the monitoring task.
        '''
        result = self._values.get("address")
        assert result is not None, "Required property 'address' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def task_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        taskName: The name of the site monitoring task. The name must be 4 to 100 characters in length.
        It can contain letters, digits, and underscores (_).
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

        taskType: The protocol used by the site monitoring task. Valid values: HTTP, HTTPS, PING, TCP,
        UDP, DNS, SMTP, POP3, and FTP.
        '''
        result = self._values.get("task_type")
        assert result is not None, "Required property 'task_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def alert_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: alertIds:
        '''
        result = self._values.get("alert_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def interval(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        interval: The interval at which detection requests are sent. Valid values: 1, 5, and 15. Unit:
        minutes. Default value: 1.
        '''
        result = self._values.get("interval")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def isp_cities(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSiteMonitor.IspCitiesProperty]]]]:
        '''
        :Property:

        ispCities: The information about detection points, which is specified in a JSON array. Example:
        [{"city":"546","isp":"465"},{"city":"572","isp":"465"},{"city":"738","isp":"465"}]. The three city codes represent Beijing, Hangzhou, and Qingdao.
        Note You can call the DescribeSiteMonitorISPCityList API operation to query the detection
        points that can be used to create site monitoring tasks. For more information, see
        DescribeSiteMonitorISPCityList . If this parameter is not specified, the system randomly selects three detection
        points for site monitoring.
        '''
        result = self._values.get("isp_cities")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSiteMonitor.IspCitiesProperty]]]], result)

    @builtins.property
    def options_json(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        optionsJson: The extended options of the protocol that is used by the site monitoring task. The
        options vary based on the protocol.
        '''
        result = self._values.get("options_json")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSiteMonitorProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class SiteMonitor(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.SiteMonitor",
):
    '''A ROS resource type:  ``ALIYUN::CMS::SiteMonitor``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["SiteMonitorProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CMS::SiteMonitor``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__abd0472d98fe22b9b8383dae1c81324c2fa35e6fd86910b6bb73311096c5cbeb)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TaskId: The ID of the site monitoring task.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTaskId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cms.SiteMonitorProps",
    jsii_struct_bases=[],
    name_mapping={
        "address": "address",
        "task_name": "taskName",
        "task_type": "taskType",
        "alert_ids": "alertIds",
        "interval": "interval",
        "isp_cities": "ispCities",
        "options_json": "optionsJson",
    },
)
class SiteMonitorProps:
    def __init__(
        self,
        *,
        address: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        task_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        task_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        alert_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        isp_cities: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSiteMonitor.IspCitiesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        options_json: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CMS::SiteMonitor``.

        :param address: Property address: The URL or IP address monitored by the monitoring task.
        :param task_name: Property taskName: The name of the site monitoring task. The name must be 4 to 100 characters in length. It can contain letters, digits, and underscores (_).
        :param task_type: Property taskType: The protocol used by the site monitoring task. Valid values: HTTP, HTTPS, PING, TCP, UDP, DNS, SMTP, POP3, and FTP.
        :param alert_ids: Property alertIds:.
        :param interval: Property interval: The interval at which detection requests are sent. Valid values: 1, 5, and 15. Unit: minutes. Default value: 1.
        :param isp_cities: Property ispCities: The information about detection points, which is specified in a JSON array. Example: [{"city":"546","isp":"465"},{"city":"572","isp":"465"},{"city":"738","isp":"465"}]. The three city codes represent Beijing, Hangzhou, and Qingdao. Note You can call the DescribeSiteMonitorISPCityList API operation to query the detection points that can be used to create site monitoring tasks. For more information, see DescribeSiteMonitorISPCityList . If this parameter is not specified, the system randomly selects three detection points for site monitoring.
        :param options_json: Property optionsJson: The extended options of the protocol that is used by the site monitoring task. The options vary based on the protocol.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__678164065e1621f8b5c68d988030637cd6098922aaa00ec2bde7f328ded53c1a)
            check_type(argname="argument address", value=address, expected_type=type_hints["address"])
            check_type(argname="argument task_name", value=task_name, expected_type=type_hints["task_name"])
            check_type(argname="argument task_type", value=task_type, expected_type=type_hints["task_type"])
            check_type(argname="argument alert_ids", value=alert_ids, expected_type=type_hints["alert_ids"])
            check_type(argname="argument interval", value=interval, expected_type=type_hints["interval"])
            check_type(argname="argument isp_cities", value=isp_cities, expected_type=type_hints["isp_cities"])
            check_type(argname="argument options_json", value=options_json, expected_type=type_hints["options_json"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "address": address,
            "task_name": task_name,
            "task_type": task_type,
        }
        if alert_ids is not None:
            self._values["alert_ids"] = alert_ids
        if interval is not None:
            self._values["interval"] = interval
        if isp_cities is not None:
            self._values["isp_cities"] = isp_cities
        if options_json is not None:
            self._values["options_json"] = options_json

    @builtins.property
    def address(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property address: The URL or IP address monitored by the monitoring task.'''
        result = self._values.get("address")
        assert result is not None, "Required property 'address' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def task_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property taskName: The name of the site monitoring task.

        The name must be 4 to 100 characters in length.
        It can contain letters, digits, and underscores (_).
        '''
        result = self._values.get("task_name")
        assert result is not None, "Required property 'task_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def task_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property taskType: The protocol used by the site monitoring task.

        Valid values: HTTP, HTTPS, PING, TCP,
        UDP, DNS, SMTP, POP3, and FTP.
        '''
        result = self._values.get("task_type")
        assert result is not None, "Required property 'task_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def alert_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property alertIds:.'''
        result = self._values.get("alert_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def interval(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property interval: The interval at which detection requests are sent.

        Valid values: 1, 5, and 15. Unit:
        minutes. Default value: 1.
        '''
        result = self._values.get("interval")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def isp_cities(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSiteMonitor.IspCitiesProperty]]]]:
        '''Property ispCities: The information about detection points, which is specified in a JSON array.

        Example:
        [{"city":"546","isp":"465"},{"city":"572","isp":"465"},{"city":"738","isp":"465"}]. The three city codes represent Beijing, Hangzhou, and Qingdao.
        Note You can call the DescribeSiteMonitorISPCityList API operation to query the detection
        points that can be used to create site monitoring tasks. For more information, see
        DescribeSiteMonitorISPCityList . If this parameter is not specified, the system randomly selects three detection
        points for site monitoring.
        '''
        result = self._values.get("isp_cities")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSiteMonitor.IspCitiesProperty]]]], result)

    @builtins.property
    def options_json(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property optionsJson: The extended options of the protocol that is used by the site monitoring task.

        The
        options vary based on the protocol.
        '''
        result = self._values.get("options_json")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SiteMonitorProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Contact",
    "ContactGroup",
    "ContactGroupProps",
    "ContactProps",
    "DynamicTagGroup",
    "DynamicTagGroupProps",
    "EventRule",
    "EventRuleProps",
    "EventRuleTargets",
    "EventRuleTargetsProps",
    "GroupMetricRule",
    "GroupMetricRuleProps",
    "MetricRuleTargets",
    "MetricRuleTargetsProps",
    "MetricRuleTemplate",
    "MetricRuleTemplateProps",
    "MonitorGroup",
    "MonitorGroupInstances",
    "MonitorGroupInstancesProps",
    "MonitorGroupProps",
    "MonitoringAgentProcess",
    "MonitoringAgentProcessProps",
    "ResourceMetricRule",
    "ResourceMetricRuleProps",
    "RosContact",
    "RosContactGroup",
    "RosContactGroupProps",
    "RosContactProps",
    "RosDynamicTagGroup",
    "RosDynamicTagGroupProps",
    "RosEventRule",
    "RosEventRuleProps",
    "RosEventRuleTargets",
    "RosEventRuleTargetsProps",
    "RosGroupMetricRule",
    "RosGroupMetricRuleProps",
    "RosMetricRuleTargets",
    "RosMetricRuleTargetsProps",
    "RosMetricRuleTemplate",
    "RosMetricRuleTemplateProps",
    "RosMonitorGroup",
    "RosMonitorGroupInstances",
    "RosMonitorGroupInstancesProps",
    "RosMonitorGroupProps",
    "RosMonitoringAgentProcess",
    "RosMonitoringAgentProcessProps",
    "RosResourceMetricRule",
    "RosResourceMetricRuleProps",
    "RosSiteMonitor",
    "RosSiteMonitorProps",
    "SiteMonitor",
    "SiteMonitorProps",
]

publication.publish()

def _typecheckingstub__30a4934076a8d857ae1a28bc330b64811e65ecb00f0e8c995c8a4a8dc8992e30(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ContactProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c7221b6247fcb398f492cdc289801bdbd5c16fcaa97831549fb8e2871193e6e1(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ContactGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e37b2562be96f2671b9bf87860634dab624436cb7a7d320a450e91048f38075c(
    *,
    contact_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    contact_names: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    describe: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f2947461d3d600f9ce18ee8da7b44d5a4b2354885c4d3124f8239573c943fe29(
    *,
    channels: typing.Union[typing.Union[RosContact.ChannelsProperty, typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable],
    contact_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    describe: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6e8ebac5e5acab1bdd317094b16a7c2503b42f02f2f9ef547d9dd326914cbab3(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DynamicTagGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b88a5c89e25fac9298be523c7879699f966da7c704a8cd69a28a67c8a1d812fb(
    *,
    contact_group_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    tag_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    enable_install_agent: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_subscribe_event: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    match_express: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDynamicTagGroup.MatchExpressProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    match_express_filter_relation: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    template_id_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8ebeddbcd0d7fac1b09d031391136866474360ee602541eca89cafcdbb3cb58a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[EventRuleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f6116f9ebd0f2ec555a6920a6f36f7f312523363aa52e9c2bc35f4d5a47f41a3(
    *,
    event_pattern: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosEventRule.EventPatternProperty, typing.Dict[builtins.str, typing.Any]]]]],
    rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    event_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    state: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a7974dcc898405bc59d7f640bd9bf70b43e416b7dcbb9cf54028eed119a9f7ab(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[EventRuleTargetsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c84cde2a1536057feaebdbe75ce2b10b79a4cd41618ea419d84f7f19a0d24df1(
    *,
    rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    contact_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosEventRuleTargets.ContactParametersProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    fc_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosEventRuleTargets.FcParametersProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    mns_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosEventRuleTargets.MnsParametersProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    sls_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosEventRuleTargets.SlsParametersProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    webhook_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosEventRuleTargets.WebhookParametersProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__699e8dbeacaecb889a0d4224e6ec511f9e80618934c8b28cfccd7809ea3bd6b1(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[GroupMetricRuleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1fee68db7193f4747b083b5f57b906c5a11ff708e8cbaf055f6143341512074a(
    *,
    category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    escalations: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGroupMetricRule.EscalationsProperty, typing.Dict[builtins.str, typing.Any]]],
    group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    metric_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    namespace: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    rule_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    dimensions: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    effective_interval: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    email_subject: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    no_effective_interval: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    silence_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    webhook: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9ea835460cbfe229e9191c6a34ade8dd7f1b014af02062c9322e530b1364dfdb(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[MetricRuleTargetsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__18c389933f99639caec463dd4ea9f9aee85d57f06ab2fe8606710fa4a25bda30(
    *,
    rule_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    targets: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMetricRuleTargets.TargetsProperty, typing.Dict[builtins.str, typing.Any]]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6c7a71074b2045dbee9a141afdd4b3fe46e125543729da05b33d7bfa151c16fb(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[MetricRuleTemplateProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d7c46c05c37209a6037b062fd078eaae18d39d735529fbee3c6c7b0e9d70a7ed(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    alert_templates: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMetricRuleTemplate.AlertTemplatesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rest_version: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    template_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__509136a1dcfe9e2ede9899528b0521576b3303528fc05687098c6f7e90af2c13(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[MonitorGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__19c671425283b9e0396e407dad215c6b43b3b47b20e58ec0603d33ba3edf7f38(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[MonitorGroupInstancesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d8c6abe8788410b967cc59fd9350689be537836799a3ae6094cc82f4799217d9(
    *,
    group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instances: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMonitorGroupInstances.InstancesProperty, typing.Dict[builtins.str, typing.Any]]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2cdc1a8caf41a522a4f655ff3049fe20b55e188b01544baad09b65fc371df838(
    *,
    group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    contact_groups: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__753c69b679df3f60bfec08e0b03ad523784a85d95ff779bf2af394d3c129d0b5(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[MonitoringAgentProcessProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7c124757c549fd3075dfbbf41661c89383784bf8261c9f2162b318123fe30893(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    process_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    process_user: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6911394e1645c825d8b4f9d800f1ed43ace23c4327c116a861ea4ca5941c407f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ResourceMetricRuleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f8dd39af81fc37da6f8d92a3d38b3c4eefb5ed5bb8b424488d4f5d1dc5dd0734(
    *,
    contact_groups: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    escalations: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosResourceMetricRule.EscalationsProperty, typing.Dict[builtins.str, typing.Any]]],
    metric_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    namespace: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    resources: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Mapping[builtins.str, typing.Any]]],
    composite_expression: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosResourceMetricRule.CompositeExpressionProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    effective_interval: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    email_subject: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    labels: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosResourceMetricRule.LabelsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    no_data_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    no_effective_interval: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    prometheus: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosResourceMetricRule.PrometheusProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    rule_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rule_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    silence_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    webhook: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7a68638825364b7bf83fcd6e46212881d26f679a907e85918d24711169b97792(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosContactProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6f041b81dc3256cf913b9028a74f24ad80378a04b6d393709cf992b70adb5124(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bc6e7867787e3e8896e00b1505c4109f26e8b71bd77ea4c6e44dd17419620d79(
    value: typing.Union[RosContact.ChannelsProperty, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4bf889e66020d26c40ef6f4ac29e0e7967da4c30086474e7f603fdf844dca464(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__95a0951c836fb5c23424027d8a1594e91f26550052c5a098461446f0eb709cc6(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__97b1140513cb058e7977ab28a599da3d7765bc76cd012396531d6fe80f666485(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__18a29e9e98415094d1f20c8c42d8d6218b0a8327178d0d421005811c21f77318(
    *,
    ali_im: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ding_web_hook: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mail: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sms: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__edaf1faaac791b29c1b5185782e42eece98f19b46c8367a7162bb91a3379c484(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosContactGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3ed5b2d53238aee0fe714354210a904725a45ff7a19ba07eda1585222e949e9e(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2e0be72998f966b0cab64fdf38010b40dda1d88816072e60d4d131b9b443a4da(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__70241cc4a296fda6c1b694c607e11b94000e703ebc5e0ced965dac1ead040a20(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ba834b0ae81eb70bc0f95e8e6e054fc74a474cace54ec73948190546c04dd19e(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f9afd10ee05e7233725ee334bd076fd6b0951377a60d10468fd7096f31eb8f19(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__74f95933962db2af08b4bfd06b0209381acc43832f6bedfb49a800ad25db5328(
    *,
    contact_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    contact_names: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    describe: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cc8a3382ecfd9f591071bb685d87c08e9633264c291a79e8963f7616311cdb20(
    *,
    channels: typing.Union[typing.Union[RosContact.ChannelsProperty, typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable],
    contact_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    describe: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__527f59f56fa5afbe1e83ea19c27ce18e92ce5a0be0a943b98f6ebd4510380629(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDynamicTagGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ee0b533e8f7bf9866a962c6656a2695c65f722f12caeebaa1c49481a8f56701a(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__195e83b78786715e7808535d7947da0bfb7a764341668ab9dc3b08b9a136170c(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3a0ea73726a847554ea3ab2e681f27b282cc258668b8c5d3a5a0512365ba7ea4(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3fdb47638a5bf0a0d0621e299233b6fe273a4b532512208add22d9afa9216102(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__922af1380bca7bd8e08fbe2cdccb4ad544a8f61a36fa177a9bbf9ea619918269(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__931f1e65ef5e4207813420dcdfefa57401de4b9ac6c04269d6022f94f6dd636e(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c22e049ed4bc4a22dfe098602bc882462a15e12572cd22e0941fa167c7180db2(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDynamicTagGroup.MatchExpressProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1fa896c28b9d9fa5a38b49c7cb2e2d74b7b2ae42faac2dd4583ea6cfdcc2a850(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__860a4b561df6a1a87e454f978ae589e3dccc1e9a0b0c34b87db73028109d657b(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b48c7836b8953d8038eff5618ee83fad0eb63648ae3cbc4dcc06bc04d1b30991(
    *,
    tag_value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    tag_value_match_function: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__86a2d67efb5062efbbe2fd4c782304edbfede2154cb9d348b97fd5b35991bd96(
    *,
    contact_group_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    tag_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    enable_install_agent: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_subscribe_event: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    match_express: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDynamicTagGroup.MatchExpressProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    match_express_filter_relation: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    template_id_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__698f72c19cb10070aa399fda7d729d648bbf553593b79a7e37ed0026f4cb33ad(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosEventRuleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__421f42c2e0da2199500beb7d6bb5f150e05dec4ecaebf7f1a9686974a6f22911(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__df93accf784456c62c1c1636c8a4d7ae10f27e0fca32fa221efd0374fbff15f1(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b4b4a94c544e56e6d5aafb91b2e9b3d6b7d27b54ad61c1b25aa7a0a9b7c56b63(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosEventRule.EventPatternProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9bcff1e487dc2ed58102cbb44d627f9502233627bfbe5fd5a841d384474b09a9(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__efcb2cb922a91806228cb3603c3e87f4ce41c76507cfd3d31f7d252e23cdd999(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2966e034fb3bcd775b18b395a75d17733f76af37b72b86f0f75489c649b2cfc5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dd5b5c73f2368a3764fc23271dcc9da97012ffddef716cb08e0d064c06b5f1e8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f2a675f00baa49f3d72147e4c5ca52ef110d9323e8dcedcfc28c847c65f5a5e9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bb19a33ae8f59f1d0c018f34a93948a1b526ec0d58afc8a184a8455d29eee6e8(
    *,
    event_type_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    level_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    product: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    status_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4cd752d1aecc182315872a656a02e21d5bb1a410c895a788bf1ce7a7810e9808(
    *,
    event_pattern: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosEventRule.EventPatternProperty, typing.Dict[builtins.str, typing.Any]]]]],
    rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    event_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    state: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4a4eec819304f7c972198f5377dec780fa6e357f13646074ee46f2c1667df922(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosEventRuleTargetsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7f1070e6f21dc4281550a5cde4ebaff5a3ec65f01573cb9d65410833c5219d1a(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0acce749038d54a4342cddf3e6686cd88faf5663c45dff3ebd8a7af9a6aa52e0(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0202de2442d22ce60b2968152da4c011e1b2ec3754c9efe94e574929716c9ffb(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__728852b410c2038ee88f3ab92bbd4e365b4325db870ed18ac30fb07443fc9060(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosEventRuleTargets.ContactParametersProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0a455ef6e9505a50f37db294c8cf381f2270ee47ce239960f4970bddc21e8e62(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosEventRuleTargets.FcParametersProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eb8574fe58454da1c7d3d051cd1c2a5aff1ab6e299c4f0737fd8e59df38cf92e(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosEventRuleTargets.MnsParametersProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0bd8dad526362373ef0cc01eb35ccb6465e43a872f8b427c5abdccfe718bc600(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosEventRuleTargets.SlsParametersProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__87929c018078f586f2032f3067c02f13b622b33af4ffccec285e7b3451273ed0(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosEventRuleTargets.WebhookParametersProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__460f11b71ffc107cdf4ea75a8f9bec49a5cdcefe98d00cef095ce647327abc6a(
    *,
    contact_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__80360ae21b636c7edc901dd454c4a0f8f6fde31f76c13ead29834135ebd41a75(
    *,
    function_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    service_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c1fc04c5179915975601f5de7287079026571f8a1edd0f76277eddbe9d12c524(
    *,
    id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    queue: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dc493da9d45835c3d1a2a5e6631694c59acf5b55fe525c11839a06d13d9b321d(
    *,
    id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_store: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    project: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__483eabadc96e1aab116ee3f605a3458e4e3db7196e6cb4212decc6d2902eff13(
    *,
    id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    method: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5c8153c145fb285669efa0c4d12ad36f28851af1f963554ea1b03453c79b647f(
    *,
    rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    contact_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosEventRuleTargets.ContactParametersProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    fc_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosEventRuleTargets.FcParametersProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    mns_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosEventRuleTargets.MnsParametersProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    sls_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosEventRuleTargets.SlsParametersProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    webhook_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosEventRuleTargets.WebhookParametersProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2f26e0b2fc40efaff7b635ff23024e48eba4e20e4376ce26334ff3f37ff9e5d1(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosGroupMetricRuleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ffa2bf044da8b169250c59c534e178df5f9ce05a23884283fc1e76254d79a0a2(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__867436030bbde72840a7cdf041916294d49450ac304811e9ec0c49a9ceb5b880(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__af81da0641b89f43ae19ebca7eb887160a8c4ed9862da0280b2e9fd707efb217(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__64af1a99a7b2182798776b9ca17e3129d123e6d9b21618ea057c552a524d8421(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosGroupMetricRule.EscalationsProperty],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__413a0ca4e47328452b7f0ef942d7635e9d3f05e7fd1dc1badbaba375d494fb1e(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__44d463d97d7de7fa925112a90be7a1c392b8b36f40aada45e323c57f66ac4953(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3728223c3d4e42ac2d9eccc09596239c3301b7979525b68c7f36d61673afdb9d(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4935eb400bc7743c4cf1b0bea1d93149f53db95e3637842666f09082a56e127f(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__22bbb6201084b6384d74251d909bbb19bcbe375ae41755fff148ac2d9dcc5366(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ec837144438957ec1e8290f8eaec708ae064d8308d4a00f4e6800d2ddeb754dd(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d0442db09851aa8b4c7510771b9a1905a785602dd8f83a3f0b3f35f2737723d0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__788e46fa8dbbcaf9c30b7a53701680391931712fe2db5ca8460b352e47d64bcc(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__038bd050d876c6dbab8a154496c3c6edfa8eac3c582275cca18adc1c22b297e8(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1034c5b1813ad747df3aa08a130df9ffc823918a834911adcec60847b54e744c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__54f0a62cc185c120218ca317af75a8ed672e68259d3d0229211b901cda2387cc(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__acbb4d246b2d060ceb14bef2aec4b1abc7f6eb6bfac17fd6a63084b7c04969ca(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a6e0182d8bf8c1ce2efd7c7b93ba7a65f1c2c744ea1b5e2be33c587d2ccfb34c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7f34a98f76128468eb659c5dbe69638aec476e691033ef78980d60ed83a2ea9b(
    *,
    comparison_operator: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    statistics: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    threshold: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    times: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c5b3dfcc1858657022fd03544d2f172d13fecd43e3ffb3eb3ec4d6f570da2da7(
    *,
    critical: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGroupMetricRule.CriticalProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGroupMetricRule.InfoProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    warn: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGroupMetricRule.WarnProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__206fbf8100eb1d151f939e79849509d891c355bbfd58320d3cf4176d67009bb5(
    *,
    comparison_operator: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    statistics: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    threshold: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    times: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5fd053e72ee1b0bd958ec3e1aad5b3186d2c8e097c433b4f049a5fe1cf43f2eb(
    *,
    comparison_operator: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    statistics: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    threshold: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    times: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f87f5df1f22860766e1976e9170a05fc604e08584e08509040109ae031fca7f6(
    *,
    category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    escalations: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGroupMetricRule.EscalationsProperty, typing.Dict[builtins.str, typing.Any]]],
    group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    metric_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    namespace: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    rule_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    dimensions: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    effective_interval: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    email_subject: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    no_effective_interval: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    silence_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    webhook: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__77f22ffe783575ece512de2ec22dd25ec298acb110dceed4d7887b1170baf4f4(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosMetricRuleTargetsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cb15696aa27b8abb021ef59f5959d37c7a08f5c0a6c6390b5528953c5d8d435b(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4c2665e8b641c422eb96297b4ce14405f9545173128d809e2943ab85fd9a3b71(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4248eb69d202992727a650668717b2314da1d394424319b69f64d75fe5a4b791(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5440761056799d72bb3a70fa5f196ebcabbb0aece7e7e11f69949d1218514135(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosMetricRuleTargets.TargetsProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1a4b9bdc5f70724e84300a10c521a229790bdb6be4fb254971fcfc6e4266a06c(
    *,
    arn: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e292d95feae5193e4e7b40cf36fc0359268679937e65de809b27b583f7242ae4(
    *,
    rule_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    targets: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMetricRuleTargets.TargetsProperty, typing.Dict[builtins.str, typing.Any]]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2e432b7ae65eb83bb511bd7a4445376f358c144a8813aa6e3be4bcb083906ac0(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosMetricRuleTemplateProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__65683a3acea3fcfda96641f3e94f73c1151c591580fdc2a14552048ab60e74ea(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__66f2057c47f0f22e362108c72803f51a050ecef7534620e4582a9b96d32fbd43(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a2d0a0160fd2b92d328d386cd47a9d0d9d8e3cb9cc38a6dcf859e5788b6919c1(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8b105d17c8088b881ab44d645174476aa41082697c1b1df1b02bbac50f62996a(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosMetricRuleTemplate.AlertTemplatesProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__41504f792d9b130a233f97ddb94cd1acea9311c84fb2445c4d2526dd27b35768(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4d09594bf3ac8258ae69124c150d9a9c8f7050e0642174269e5c360d165298e2(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ac264f05356bb10aca6443172dff0e16d2088ee240a203216c973b4880b1e12e(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__06a3fbb7248d046e3ebae8e88a17281ff348bb14dde9ef08ac3af522a8fd638a(
    *,
    category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    metric_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    namespace: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    escalations: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMetricRuleTemplate.EscalationsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    selector: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    webhook: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__844c273d1a2a9c3bab15dfaa64449af947faac6569b7918ca5c1dbad2ebacff1(
    *,
    comparison_operator: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    statistics: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    threshold: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    times: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bc6175b9a738f7b1f6513fd4c9fab8814d907e07d9d4278d861fabb740c5dd7c(
    *,
    critical: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMetricRuleTemplate.CriticalProperty, typing.Dict[builtins.str, typing.Any]]],
    info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMetricRuleTemplate.InfoProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    warn: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMetricRuleTemplate.WarnProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5253663f7297ab752dc2f55211410f2441efb88e041dca37fe73f0d7c69520ba(
    *,
    comparison_operator: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    statistics: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    threshold: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    times: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__81e6f3de907e333d90f0893eee02f5421d92701bfe2d654fff13001285cdab78(
    *,
    comparison_operator: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    statistics: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    threshold: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    times: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ff17c8e2eb1d7e20256d883b8b8b1cf6e80e8b593a13085b65e55e5b5853f041(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    alert_templates: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMetricRuleTemplate.AlertTemplatesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rest_version: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    template_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__48c4755ac4887351991dee635748a3507c7576a49bcd21cf1196243e82b576f3(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosMonitorGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d361e18412840af10e857e008d019fef32f7a29f78e0d8dd86ad8eda6316afee(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c8a99b7242e41b9e6f7d47b825e58fa9dd80b6c3593ca62f81931e81eb07ec69(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1b12aed9e79df5d29b4c90343a5650552200395e4887611f882aeee0f63f0544(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ed03fd8370ab208046c69cb1d5c0a33367826b3cd6c208380e441d76eea4afb5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bf6f0e9bf717217cb1a33ba02549b1d4fab2d428681efbd508b071a95cc10004(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosMonitorGroupInstancesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4569649060d8e8924c21a5cf0f92727b58edf84105b785fe0839e219c1aa3dd2(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__883b310ea9998ece43e80f2466d8b96eb4c67f5497ed4e89c5e14cdb95634083(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__75509a6bfb561a1f5c90594d678c82d2d6f8fb699ced52e2dc366f251b857871(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3f8aab789da974889690f431c9f0558960c4adddea594eea5088116b0d9cd74c(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosMonitorGroupInstances.InstancesProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7be347ad7b1d77cdf1cf1348a1f28a8e50c15b11e7d1f9ba648ab899a5f7a4a0(
    *,
    category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3a0e900df56f3bb167d860a77cbb11e72e2b7faeafcb050835225bcfe2d6aec6(
    *,
    group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instances: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMonitorGroupInstances.InstancesProperty, typing.Dict[builtins.str, typing.Any]]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0a25f3a94abd19d1babc06fc5bba82175ce5fa0859f9a58843b03322b50ba770(
    *,
    group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    contact_groups: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f16b81e89100cbd738e3a1b9bd58cd35c7f4d22fbfe5b51dff291d75bce51ff2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosMonitoringAgentProcessProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5f2acf0461e6be76ea24b36e0b6ce67bc26ace27135745b8db07c884bacff0b4(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__344800a26a4b4877818950a17495a345cabd03650b2539943ef9d845901fd9cb(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__98be916b52bb0d9fe65e55e98ff1c5cac2e801a67cfbfed6704187be95de742c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__29cf6486ae1a06d97aafb050794126e7b51c571dea3c73ab39bcd7ce58a407dc(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6c12e9c055e2849dd55fc14fb73a94f9c80113a10e3eaff756381618be499eb9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3a8cdef9d9275fb69b91b8aab95808b617a188d94a2f99db4b0ddb114e3dfc54(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    process_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    process_user: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fcf1159419ad34b58501cd41d2a30712bbd092c80e68c89e93958da45f12d62b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosResourceMetricRuleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5a63ed4bbafad636ab1ebf8e832b513db1a3d452c12969bb642632013fe28d2b(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aaf81da1e7384130cc2acf999bea729dc47a9b3647827044cfd27e9945a132a2(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e743b55f77879a5453628d8fb04cef149c847593762bcd6a1b5bf8bbf2abd726(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6cade6dc00fc72a4e720af64222838144049431d31c610bf5b6a54e3eb9307d1(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosResourceMetricRule.EscalationsProperty],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2c96b8b8210b803368b0d9610daab922532102390088fc736608eeac2780aa49(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c613982ae5fb9a7c70347fb14a144af7307dd8c22ec6c66d10cb7f808212623a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e13abb9584339fed13b60963d71af06259b92168d918fa7c19ff5a341667ba44(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__90a8ddb3b68a0f867075f46c341bbe8d1d908706d192a06a9ff774bae8904076(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosResourceMetricRule.CompositeExpressionProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__63f69def8cd00e103d8b9ada4d5ee2c29840dd2aff5e78e06ce14fed41539b9e(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b6111f1a3a8d84d1065afcfea23a57eae148538782d50e1d160dc73cf5e35a49(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d43751cebd6f29566fc2be8e61a19eeb12ffbfcc6fea7bdc05b5b0237b41ddc8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__398fd8af6c29b38340f0a267031a800e2bac35c445e590ec54ffc73f19915dd6(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6bfee8f18008c42ccac9d18d3e74141507bc9ebe52c03ef0580a7f0f4d126417(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosResourceMetricRule.LabelsProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b995325bbaae0cb4bd6f93a5bcfd78b1e0d98dbe422e5da33c7e3952e81d0658(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__726de5b11e2c99d0414d2ec9fc68f2c4b7815af9c5ef435a8745d2a153f7e245(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c31cf7cd6b565e9275f91099086ea011e853a70cfd11a070155fd467435735c5(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__152d5f1def9169f96f02bc2eb7c85e82c3b942b6c250c89ab3d92d6eec57e213(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosResourceMetricRule.PrometheusProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1493c12596d4199c148a7f47507fd0ae69cfd678d649fcb1ebee7f0380a9990c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d7fe9dc6276ebdf5a11e84d9c1f554d0bc392616c2de44c59e215d6b462a0576(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4810666f39db61b0c9135eaa4e22dba53cf19352f229605ea078bf319fb6e3e8(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__34b37a49405f1a72b2fa9f54034f8a85f2ae791acfdd9c49726f1a97a10c7451(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__850a03942752dfadd19786d61e52f7cf9ea417d32bb9070320023cf631890bf7(
    *,
    key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aca5f1fb0cf2ff11d1b8a9c12fc926c5e10e6c4a9b8f63f6882126004cd085b0(
    *,
    level: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    times: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    expression_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosResourceMetricRule.ExpressionListProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    expression_list_join: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    expression_raw: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2ae608f58c15d6c3fe2546ef1892dbf8970dcce7fb93f3c842065ced1024d34b(
    *,
    comparison_operator: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    statistics: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    threshold: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    times: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8510271783adbf34e74b1c4d33ac425d38bdebed9bb6aabc9b9b74061475cad9(
    *,
    critical: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosResourceMetricRule.CriticalProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosResourceMetricRule.InfoProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    warn: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosResourceMetricRule.WarnProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2b0e7ca3d0a95e9b0dd9f0914a70eb28e11f6ecac2490e9067971c904ed501cb(
    *,
    comparison_operator: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    metric_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    period: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    statistics: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    threshold: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__04b2f923029e3c470aa1c4040fc5388b549f2ae8c240458dc4b3feacb0b9ee80(
    *,
    comparison_operator: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    statistics: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    threshold: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    times: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__08507856ba6cbd5a401a49e7bad4ce8232cb49a4877b8d133a8a2253fc1eda7f(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7d19b8639486159a1d9a6d308ee76c7d0bc5d1e4dc60a909325533ee31eb75b8(
    *,
    level: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    prom_ql: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    times: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    annotations: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosResourceMetricRule.AnnotationsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7dd3eb23cf7f290feb4e5c368dc4a97d5bbfb0f1b60e02f0168e95a1256d476f(
    *,
    comparison_operator: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    statistics: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    threshold: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    times: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f8663e29414f718058f1fd7701cf400a02fc50b83702e2f2e1b13e43f6b93f37(
    *,
    contact_groups: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    escalations: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosResourceMetricRule.EscalationsProperty, typing.Dict[builtins.str, typing.Any]]],
    metric_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    namespace: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    resources: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Mapping[builtins.str, typing.Any]]],
    composite_expression: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosResourceMetricRule.CompositeExpressionProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    effective_interval: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    email_subject: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    labels: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosResourceMetricRule.LabelsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    no_data_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    no_effective_interval: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    prometheus: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosResourceMetricRule.PrometheusProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    rule_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rule_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    silence_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    webhook: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b94d7e43bbe0c9f67a06b4209ace491c3f73f9f3d454ac2755f9c8e86f882914(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosSiteMonitorProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8ed5ccbf30d0d8a210f12c69cd6eef52f6545fe0c485ca1413d0252d4a9eec15(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1493f880697b12c1f50257fa9f292e160556e76e2c7d00f157d3f945e5378e89(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a36ce269f78a7c998679d0f3d8550f80b6ba17094cdad90c3e3f1149f4952bef(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__228c563119a0d599486df949d378085999783d01f0229b655d699427615a43b3(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3b4b9741f2b32ee3a64eb3ebe22f5ac2b3c0e6febc1153900c3e70562ca1274f(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6f6c256c16640669531575c299a45b7067f3fd7233ce599eb5e4d148d4826684(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ac5e93731567541c319946495b89786c71b036ad4e425a1f92399a237c27eb00(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6942873b769c4f8769231e22d194acd5ae13d00fb4cbb0c74c592100152ab51b(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSiteMonitor.IspCitiesProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e67c83233d73289b5b4b3c7a04c1e2d8cf76949f3faeb133c5110fb8ab1103db(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eb667de378435b9f26def69d4fcd47184e62ee1b9ee7be1aec8df6e0576a7e74(
    *,
    city: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    isp: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f8dfb1718a661ee212f87a9a80032b7c86457428c4982878fefa041cd1f460d0(
    *,
    address: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    task_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    task_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    alert_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    isp_cities: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSiteMonitor.IspCitiesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    options_json: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__abd0472d98fe22b9b8383dae1c81324c2fa35e6fd86910b6bb73311096c5cbeb(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[SiteMonitorProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__678164065e1621f8b5c68d988030637cd6098922aaa00ec2bde7f328ded53c1a(
    *,
    address: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    task_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    task_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    alert_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    isp_cities: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSiteMonitor.IspCitiesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    options_json: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
