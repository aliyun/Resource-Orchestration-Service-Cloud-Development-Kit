"""
## Aliyun ROS CMS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_cms as CMS
```
"""
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


class Contact(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.Contact",
):
    """A ROS resource type:  ``ALIYUN::CMS::Contact``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ContactProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::CMS::Contact``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Contact, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrContactName")
    def attr_contact_name(self) -> typing.Any:
        """
        :Attribute: ContactName: The name of the alarm contact.
        """
        return jsii.get(self, "attrContactName")


class ContactGroup(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.ContactGroup",
):
    """A ROS resource type:  ``ALIYUN::CMS::ContactGroup``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ContactGroupProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::CMS::ContactGroup``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(ContactGroup, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrContactGroupName")
    def attr_contact_group_name(self) -> typing.Any:
        """
        :Attribute: ContactGroupName: The name of the alert contact group.
        """
        return jsii.get(self, "attrContactGroupName")


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
        contact_group_name: builtins.str,
        contact_names: typing.List[builtins.str],
        describe: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::CMS::ContactGroup``.

        :param contact_group_name: 
        :param contact_names: 
        :param describe: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "contact_group_name": contact_group_name,
            "contact_names": contact_names,
            "describe": describe,
        }

    @builtins.property
    def contact_group_name(self) -> builtins.str:
        """
        :Property: contactGroupName: The name of the alert contact group.
        """
        result = self._values.get("contact_group_name")
        assert result is not None, "Required property 'contact_group_name' is missing"
        return result

    @builtins.property
    def contact_names(self) -> typing.List[builtins.str]:
        """
        :Property: contactNames: The name of the alert contact.
        """
        result = self._values.get("contact_names")
        assert result is not None, "Required property 'contact_names' is missing"
        return result

    @builtins.property
    def describe(self) -> builtins.str:
        """
        :Property: describe: The description of the alert contact group.
        """
        result = self._values.get("describe")
        assert result is not None, "Required property 'describe' is missing"
        return result

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
        channels: typing.Union["RosContact.ChannelsProperty", ros_cdk_core.IResolvable],
        contact_name: builtins.str,
        describe: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::CMS::Contact``.

        :param channels: 
        :param contact_name: 
        :param describe: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "channels": channels,
            "contact_name": contact_name,
            "describe": describe,
        }

    @builtins.property
    def channels(
        self,
    ) -> typing.Union["RosContact.ChannelsProperty", ros_cdk_core.IResolvable]:
        """
        :Property: channels: undefined
        """
        result = self._values.get("channels")
        assert result is not None, "Required property 'channels' is missing"
        return result

    @builtins.property
    def contact_name(self) -> builtins.str:
        """
        :Property: contactName: The name of the alarm contact.
        """
        result = self._values.get("contact_name")
        assert result is not None, "Required property 'contact_name' is missing"
        return result

    @builtins.property
    def describe(self) -> builtins.str:
        """
        :Property: describe: The description of the alert contact.
        """
        result = self._values.get("describe")
        assert result is not None, "Required property 'describe' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ContactProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class DynamicTagGroup(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.DynamicTagGroup",
):
    """A ROS resource type:  ``ALIYUN::CMS::DynamicTagGroup``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "DynamicTagGroupProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::CMS::DynamicTagGroup``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(DynamicTagGroup, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDynamicTagRuleId")
    def attr_dynamic_tag_rule_id(self) -> typing.Any:
        """
        :Attribute: DynamicTagRuleId: Dynamic tag rule ID.
        """
        return jsii.get(self, "attrDynamicTagRuleId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrTagKey")
    def attr_tag_key(self) -> typing.Any:
        """
        :Attribute: TagKey: Tag key.
        """
        return jsii.get(self, "attrTagKey")


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
        contact_group_list: typing.List[builtins.str],
        tag_key: builtins.str,
        enable_install_agent: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        enable_subscribe_event: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        match_express: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDynamicTagGroup.MatchExpressProperty"]]]] = None,
        match_express_filter_relation: typing.Optional[builtins.str] = None,
        template_id_list: typing.Optional[typing.List[builtins.str]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::CMS::DynamicTagGroup``.

        :param contact_group_list: 
        :param tag_key: 
        :param enable_install_agent: 
        :param enable_subscribe_event: 
        :param match_express: 
        :param match_express_filter_relation: 
        :param template_id_list: 
        """
        self._values: typing.Dict[str, typing.Any] = {
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
    def contact_group_list(self) -> typing.List[builtins.str]:
        """
        :Property: contactGroupList: Alarm contacts.
        """
        result = self._values.get("contact_group_list")
        assert result is not None, "Required property 'contact_group_list' is missing"
        return result

    @builtins.property
    def tag_key(self) -> builtins.str:
        """
        :Property: tagKey: Tag key.
        """
        result = self._values.get("tag_key")
        assert result is not None, "Required property 'tag_key' is missing"
        return result

    @builtins.property
    def enable_install_agent(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        enableInstallAgent: Whether to enable initial installation monitoring plug, not installed by default. Values are:
        true: enable installation
        Note If ECS generated instances group does not monitor plug-in installed will attempt to automatically install.
        false: disable installation
        """
        result = self._values.get("enable_install_agent")
        return result

    @builtins.property
    def enable_subscribe_event(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        enableSubscribeEvent: Whether the event subscription is enabled. Values are
        :true: enable event subscription
        false: disable event subscription
        """
        result = self._values.get("enable_subscribe_event")
        return result

    @builtins.property
    def match_express(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDynamicTagGroup.MatchExpressProperty"]]]]:
        """
        :Property: matchExpress: Matching list. Only supports one currently.
        """
        result = self._values.get("match_express")
        return result

    @builtins.property
    def match_express_filter_relation(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        matchExpressFilterRelation: The relationship between the conditional expressions. Values are:
        and: the relationship between
        or: the relationship or the
        Description currently supports only one combination of conditions, the follow-up Ali cloud will support a variety of combinations of conditions.
        """
        result = self._values.get("match_express_filter_relation")
        return result

    @builtins.property
    def template_id_list(self) -> typing.Optional[typing.List[builtins.str]]:
        """
        :Property:

        templateIdList: Alarm template ID list.
        When the automatically generated application group synchronizes tags, it will generate alarm rules according to the specified alarm template.
        """
        result = self._values.get("template_id_list")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DynamicTagGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class EventRule(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.EventRule",
):
    """A ROS resource type:  ``ALIYUN::CMS::EventRule``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "EventRuleProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::CMS::EventRule``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(EventRule, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrData")
    def attr_data(self) -> typing.Any:
        """
        :Attribute: Data: Number of rows affected.
        """
        return jsii.get(self, "attrData")


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
        event_pattern: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosEventRule.EventPatternProperty"]]],
        rule_name: builtins.str,
        description: typing.Optional[builtins.str] = None,
        event_type: typing.Optional[builtins.str] = None,
        group_id: typing.Optional[builtins.str] = None,
        state: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::CMS::EventRule``.

        :param event_pattern: 
        :param rule_name: 
        :param description: 
        :param event_type: 
        :param group_id: 
        :param state: 
        """
        self._values: typing.Dict[str, typing.Any] = {
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
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosEventRule.EventPatternProperty"]]]:
        """
        :Property: eventPattern: Event pattern configuration.A maximum of 20 event patterns.
        """
        result = self._values.get("event_pattern")
        assert result is not None, "Required property 'event_pattern' is missing"
        return result

    @builtins.property
    def rule_name(self) -> builtins.str:
        """
        :Property: ruleName: The name of the alarm rule.
        """
        result = self._values.get("rule_name")
        assert result is not None, "Required property 'rule_name' is missing"
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: The description of the alert rule.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def event_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        eventType: The type of the event alert. Valid values:
        SYSTEM
        CUSTOM
        """
        result = self._values.get("event_type")
        return result

    @builtins.property
    def group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: groupId: The ID of the application group.
        """
        result = self._values.get("group_id")
        return result

    @builtins.property
    def state(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        state: The status of the alert rule. Valid values:
        ENABLED
        DISABLED
        """
        result = self._values.get("state")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "EventRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class EventRuleTargets(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.EventRuleTargets",
):
    """A ROS resource type:  ``ALIYUN::CMS::EventRuleTargets``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "EventRuleTargetsProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::CMS::EventRuleTargets``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(EventRuleTargets, self, [scope, id, props, enable_resource_property_constraint])


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
        rule_name: builtins.str,
        contact_parameters: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosEventRuleTargets.ContactParametersProperty"]]]] = None,
        fc_parameters: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosEventRuleTargets.FcParametersProperty"]]]] = None,
        mns_parameters: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosEventRuleTargets.MnsParametersProperty"]]]] = None,
        sls_parameters: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosEventRuleTargets.SlsParametersProperty"]]]] = None,
        webhook_parameters: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosEventRuleTargets.WebhookParametersProperty"]]]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::CMS::EventRuleTargets``.

        :param rule_name: 
        :param contact_parameters: 
        :param fc_parameters: 
        :param mns_parameters: 
        :param sls_parameters: 
        :param webhook_parameters: 
        """
        self._values: typing.Dict[str, typing.Any] = {
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
    def rule_name(self) -> builtins.str:
        """
        :Property: ruleName: The name of the alert rule.
        """
        result = self._values.get("rule_name")
        assert result is not None, "Required property 'rule_name' is missing"
        return result

    @builtins.property
    def contact_parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosEventRuleTargets.ContactParametersProperty"]]]]:
        """
        :Property: contactParameters: CONTACT configuration.A maximum of 5 parameters
        """
        result = self._values.get("contact_parameters")
        return result

    @builtins.property
    def fc_parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosEventRuleTargets.FcParametersProperty"]]]]:
        """
        :Property: fcParameters: FC configuration.A maximum of 5 parameters.
        """
        result = self._values.get("fc_parameters")
        return result

    @builtins.property
    def mns_parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosEventRuleTargets.MnsParametersProperty"]]]]:
        """
        :Property: mnsParameters: MNS configuration.A maximum of 5 parameters
        """
        result = self._values.get("mns_parameters")
        return result

    @builtins.property
    def sls_parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosEventRuleTargets.SlsParametersProperty"]]]]:
        """
        :Property: slsParameters: SLS configuration.A maximum of 5 parameters.
        """
        result = self._values.get("sls_parameters")
        return result

    @builtins.property
    def webhook_parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosEventRuleTargets.WebhookParametersProperty"]]]]:
        """
        :Property: webhookParameters: WEBHOOK configuration.A maximum of 5 parameters.
        """
        result = self._values.get("webhook_parameters")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "EventRuleTargetsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class GroupMetricRule(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.GroupMetricRule",
):
    """A ROS resource type:  ``ALIYUN::CMS::GroupMetricRule``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "GroupMetricRuleProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::CMS::GroupMetricRule``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(GroupMetricRule, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrRuleId")
    def attr_rule_id(self) -> typing.Any:
        """
        :Attribute: RuleId: Rule ID.
        """
        return jsii.get(self, "attrRuleId")


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
        category: builtins.str,
        escalations: typing.Union[ros_cdk_core.IResolvable, "RosGroupMetricRule.EscalationsProperty"],
        group_id: builtins.str,
        metric_name: builtins.str,
        namespace: builtins.str,
        rule_id: builtins.str,
        rule_name: builtins.str,
        dimensions: typing.Optional[builtins.str] = None,
        effective_interval: typing.Optional[builtins.str] = None,
        email_subject: typing.Optional[builtins.str] = None,
        interval: typing.Optional[jsii.Number] = None,
        no_effective_interval: typing.Optional[builtins.str] = None,
        period: typing.Optional[jsii.Number] = None,
        silence_time: typing.Optional[jsii.Number] = None,
        webhook: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::CMS::GroupMetricRule``.

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
        """
        self._values: typing.Dict[str, typing.Any] = {
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
    def category(self) -> builtins.str:
        """
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
        """
        result = self._values.get("category")
        assert result is not None, "Required property 'category' is missing"
        return result

    @builtins.property
    def escalations(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, "RosGroupMetricRule.EscalationsProperty"]:
        """
        :Property: escalations: undefined
        """
        result = self._values.get("escalations")
        assert result is not None, "Required property 'escalations' is missing"
        return result

    @builtins.property
    def group_id(self) -> builtins.str:
        """
        :Property: groupId: The ID of application group.
        """
        result = self._values.get("group_id")
        assert result is not None, "Required property 'group_id' is missing"
        return result

    @builtins.property
    def metric_name(self) -> builtins.str:
        """
        :Property: metricName: The name of the metric. For more information, call DescribeMetricMetaList or see Preset metrics reference.
        """
        result = self._values.get("metric_name")
        assert result is not None, "Required property 'metric_name' is missing"
        return result

    @builtins.property
    def namespace(self) -> builtins.str:
        """
        :Property:

        namespace: The data namespace of the service. For more information, call DescribeMetricMetaList
        or see Preset metrics reference.
        """
        result = self._values.get("namespace")
        assert result is not None, "Required property 'namespace' is missing"
        return result

    @builtins.property
    def rule_id(self) -> builtins.str:
        """
        :Property:

        ruleId: The ID of the alert rule. The IDs of alert rules are generated by callers to ensure
        uniqueness.
        """
        result = self._values.get("rule_id")
        assert result is not None, "Required property 'rule_id' is missing"
        return result

    @builtins.property
    def rule_name(self) -> builtins.str:
        """
        :Property: ruleName: The name of the alert rule.
        """
        result = self._values.get("rule_name")
        assert result is not None, "Required property 'rule_name' is missing"
        return result

    @builtins.property
    def dimensions(self) -> typing.Optional[builtins.str]:
        """
        :Property: dimensions: The expended resource dimensions.
        """
        result = self._values.get("dimensions")
        return result

    @builtins.property
    def effective_interval(self) -> typing.Optional[builtins.str]:
        """
        :Property: effectiveInterval: The period when the alert rule is effective.
        """
        result = self._values.get("effective_interval")
        return result

    @builtins.property
    def email_subject(self) -> typing.Optional[builtins.str]:
        """
        :Property: emailSubject: The subject of the alert notification email.
        """
        result = self._values.get("email_subject")
        return result

    @builtins.property
    def interval(self) -> typing.Optional[jsii.Number]:
        """
        :Property: interval: The detection period of alerts.
        """
        result = self._values.get("interval")
        return result

    @builtins.property
    def no_effective_interval(self) -> typing.Optional[builtins.str]:
        """
        :Property: noEffectiveInterval: The period when the alert rule is ineffective.
        """
        result = self._values.get("no_effective_interval")
        return result

    @builtins.property
    def period(self) -> typing.Optional[jsii.Number]:
        """
        :Property: period: The aggregation period. Unite: second.
        """
        result = self._values.get("period")
        return result

    @builtins.property
    def silence_time(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        silenceTime: The duration of the mute period during which new alerts are not sent even if the trigger
        conditions are met. Unit: second. Default value: 86400. Minimum value: 60.
        """
        result = self._values.get("silence_time")
        return result

    @builtins.property
    def webhook(self) -> typing.Optional[builtins.str]:
        """
        :Property: webhook: The URL of the callback triggered when an alert occurs.
        """
        result = self._values.get("webhook")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "GroupMetricRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class MetricRuleTargets(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.MetricRuleTargets",
):
    """A ROS resource type:  ``ALIYUN::CMS::MetricRuleTargets``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "MetricRuleTargetsProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::CMS::MetricRuleTargets``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(MetricRuleTargets, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrArns")
    def attr_arns(self) -> typing.Any:
        """
        :Attribute: Arns: The ARN list of targets
        """
        return jsii.get(self, "attrArns")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrIds")
    def attr_ids(self) -> typing.Any:
        """
        :Attribute: Ids: The ID list of targets
        """
        return jsii.get(self, "attrIds")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cms.MetricRuleTargetsProps",
    jsii_struct_bases=[],
    name_mapping={"rule_id": "ruleId", "targets": "targets"},
)
class MetricRuleTargetsProps:
    def __init__(
        self,
        *,
        rule_id: builtins.str,
        targets: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosMetricRuleTargets.TargetsProperty"]]],
    ) -> None:
        """Properties for defining a ``ALIYUN::CMS::MetricRuleTargets``.

        :param rule_id: 
        :param targets: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "rule_id": rule_id,
            "targets": targets,
        }

    @builtins.property
    def rule_id(self) -> builtins.str:
        """
        :Property: ruleId: The ID of the alert rule.
        """
        result = self._values.get("rule_id")
        assert result is not None, "Required property 'rule_id' is missing"
        return result

    @builtins.property
    def targets(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosMetricRuleTargets.TargetsProperty"]]]:
        """
        :Property: targets: undefined
        """
        result = self._values.get("targets")
        assert result is not None, "Required property 'targets' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "MetricRuleTargetsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class MetricRuleTemplate(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.MetricRuleTemplate",
):
    """A ROS resource type:  ``ALIYUN::CMS::MetricRuleTemplate``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "MetricRuleTemplateProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::CMS::MetricRuleTemplate``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(MetricRuleTemplate, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrId")
    def attr_id(self) -> typing.Any:
        """
        :Attribute: Id: Alarm template ID.
        """
        return jsii.get(self, "attrId")


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
        name: builtins.str,
        alert_templates: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosMetricRuleTemplate.AlertTemplatesProperty"]]]] = None,
        description: typing.Optional[builtins.str] = None,
        rest_version: typing.Optional[jsii.Number] = None,
        template_id: typing.Optional[jsii.Number] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::CMS::MetricRuleTemplate``.

        :param name: 
        :param alert_templates: 
        :param description: 
        :param rest_version: 
        :param template_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
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
    def name(self) -> builtins.str:
        """
        :Property: name: The name of the alert template.
        """
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return result

    @builtins.property
    def alert_templates(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosMetricRuleTemplate.AlertTemplatesProperty"]]]]:
        """
        :Property: alertTemplates: Valid values of N: 0 to 200.
        """
        result = self._values.get("alert_templates")
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: The description of the alert template.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def rest_version(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        restVersion: The version of the alert template. Call DescribeMetricRuleTemplateList or DescribeMetricRuleTemplateAttribute
        to obtain information about the alert templates. The combination of version and ID
        uniquely identifies an alert template.
        """
        result = self._values.get("rest_version")
        return result

    @builtins.property
    def template_id(self) -> typing.Optional[jsii.Number]:
        """
        :Property: templateId: The ID of the alert template.
        """
        result = self._values.get("template_id")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "MetricRuleTemplateProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class MonitorGroup(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.MonitorGroup",
):
    """A ROS resource type:  ``ALIYUN::CMS::MonitorGroup``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "MonitorGroupProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::CMS::MonitorGroup``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(MonitorGroup, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(self) -> typing.Any:
        """
        :Attribute: GroupId: Application group ID generated after the group is created.
        """
        return jsii.get(self, "attrGroupId")


class MonitorGroupInstances(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.MonitorGroupInstances",
):
    """A ROS resource type:  ``ALIYUN::CMS::MonitorGroupInstances``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "MonitorGroupInstancesProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::CMS::MonitorGroupInstances``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(MonitorGroupInstances, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(self) -> typing.Any:
        """
        :Attribute: GroupId: The ID of the application group.
        """
        return jsii.get(self, "attrGroupId")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cms.MonitorGroupInstancesProps",
    jsii_struct_bases=[],
    name_mapping={"group_id": "groupId", "instances": "instances"},
)
class MonitorGroupInstancesProps:
    def __init__(
        self,
        *,
        group_id: jsii.Number,
        instances: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosMonitorGroupInstances.InstancesProperty"]]],
    ) -> None:
        """Properties for defining a ``ALIYUN::CMS::MonitorGroupInstances``.

        :param group_id: 
        :param instances: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "group_id": group_id,
            "instances": instances,
        }

    @builtins.property
    def group_id(self) -> jsii.Number:
        """
        :Property: groupId: The ID of the application group.
        """
        result = self._values.get("group_id")
        assert result is not None, "Required property 'group_id' is missing"
        return result

    @builtins.property
    def instances(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosMonitorGroupInstances.InstancesProperty"]]]:
        """
        :Property: instances:
        """
        result = self._values.get("instances")
        assert result is not None, "Required property 'instances' is missing"
        return result

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
        group_name: builtins.str,
        contact_groups: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::CMS::MonitorGroup``.

        :param group_name: 
        :param contact_groups: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "group_name": group_name,
        }
        if contact_groups is not None:
            self._values["contact_groups"] = contact_groups

    @builtins.property
    def group_name(self) -> builtins.str:
        """
        :Property: groupName: The name of the application group.
        """
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return result

    @builtins.property
    def contact_groups(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        contactGroups: The alert contact group. Alert notifications for the application group are sent to
        the specified alert contact group.
        """
        result = self._values.get("contact_groups")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "MonitorGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class MonitoringAgentProcess(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.MonitoringAgentProcess",
):
    """A ROS resource type:  ``ALIYUN::CMS::MonitoringAgentProcess``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "MonitoringAgentProcessProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::CMS::MonitoringAgentProcess``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(MonitoringAgentProcess, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrId")
    def attr_id(self) -> typing.Any:
        """
        :Attribute: Id: The process ID.
        """
        return jsii.get(self, "attrId")


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
        instance_id: builtins.str,
        process_name: typing.Optional[builtins.str] = None,
        process_user: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::CMS::MonitoringAgentProcess``.

        :param instance_id: 
        :param process_name: 
        :param process_user: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "instance_id": instance_id,
        }
        if process_name is not None:
            self._values["process_name"] = process_name
        if process_user is not None:
            self._values["process_user"] = process_user

    @builtins.property
    def instance_id(self) -> builtins.str:
        """
        :Property: instanceId: The ID of the instance.
        """
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return result

    @builtins.property
    def process_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: processName: The name of the process.
        """
        result = self._values.get("process_name")
        return result

    @builtins.property
    def process_user(self) -> typing.Optional[builtins.str]:
        """
        :Property: processUser: The user who launched the process.
        """
        result = self._values.get("process_user")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "MonitoringAgentProcessProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosContact(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.RosContact",
):
    """A ROS template type:  ``ALIYUN::CMS::Contact``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosContactProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::CMS::Contact``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosContact, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrContactName")
    def attr_contact_name(self) -> typing.Any:
        """
        :Attribute: ContactName: The name of the alarm contact.
        """
        return jsii.get(self, "attrContactName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="channels")
    def channels(
        self,
    ) -> typing.Union["RosContact.ChannelsProperty", ros_cdk_core.IResolvable]:
        """
        :Property: channels: undefined
        """
        return jsii.get(self, "channels")

    @channels.setter # type: ignore
    def channels(
        self,
        value: typing.Union["RosContact.ChannelsProperty", ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "channels", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="contactName")
    def contact_name(self) -> builtins.str:
        """
        :Property: contactName: The name of the alarm contact.
        """
        return jsii.get(self, "contactName")

    @contact_name.setter # type: ignore
    def contact_name(self, value: builtins.str) -> None:
        jsii.set(self, "contactName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="describe")
    def describe(self) -> builtins.str:
        """
        :Property: describe: The description of the alert contact.
        """
        return jsii.get(self, "describe")

    @describe.setter # type: ignore
    def describe(self, value: builtins.str) -> None:
        jsii.set(self, "describe", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
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
            ali_im: typing.Optional[builtins.str] = None,
            ding_web_hook: typing.Optional[builtins.str] = None,
            mail: typing.Optional[builtins.str] = None,
            sms: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param ali_im: 
            :param ding_web_hook: 
            :param mail: 
            :param sms: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if ali_im is not None:
                self._values["ali_im"] = ali_im
            if ding_web_hook is not None:
                self._values["ding_web_hook"] = ding_web_hook
            if mail is not None:
                self._values["mail"] = mail
            if sms is not None:
                self._values["sms"] = sms

        @builtins.property
        def ali_im(self) -> typing.Optional[builtins.str]:
            """
            :Property: aliIm: The TradeManager ID.
            """
            result = self._values.get("ali_im")
            return result

        @builtins.property
        def ding_web_hook(self) -> typing.Optional[builtins.str]:
            """
            :Property: dingWebHook: The DingTalk Chatbot address.
            """
            result = self._values.get("ding_web_hook")
            return result

        @builtins.property
        def mail(self) -> typing.Optional[builtins.str]:
            """
            :Property: mail: The email address of the contact.
            """
            result = self._values.get("mail")
            return result

        @builtins.property
        def sms(self) -> typing.Optional[builtins.str]:
            """
            :Property: sms: The mobile phone number of the contact.
            """
            result = self._values.get("sms")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ChannelsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


class RosContactGroup(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.RosContactGroup",
):
    """A ROS template type:  ``ALIYUN::CMS::ContactGroup``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosContactGroupProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::CMS::ContactGroup``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosContactGroup, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrContactGroupName")
    def attr_contact_group_name(self) -> typing.Any:
        """
        :Attribute: ContactGroupName: The name of the alert contact group.
        """
        return jsii.get(self, "attrContactGroupName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="contactGroupName")
    def contact_group_name(self) -> builtins.str:
        """
        :Property: contactGroupName: The name of the alert contact group.
        """
        return jsii.get(self, "contactGroupName")

    @contact_group_name.setter # type: ignore
    def contact_group_name(self, value: builtins.str) -> None:
        jsii.set(self, "contactGroupName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="contactNames")
    def contact_names(self) -> typing.List[builtins.str]:
        """
        :Property: contactNames: The name of the alert contact.
        """
        return jsii.get(self, "contactNames")

    @contact_names.setter # type: ignore
    def contact_names(self, value: typing.List[builtins.str]) -> None:
        jsii.set(self, "contactNames", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="describe")
    def describe(self) -> builtins.str:
        """
        :Property: describe: The description of the alert contact group.
        """
        return jsii.get(self, "describe")

    @describe.setter # type: ignore
    def describe(self, value: builtins.str) -> None:
        jsii.set(self, "describe", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
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
        contact_group_name: builtins.str,
        contact_names: typing.List[builtins.str],
        describe: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::CMS::ContactGroup``.

        :param contact_group_name: 
        :param contact_names: 
        :param describe: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "contact_group_name": contact_group_name,
            "contact_names": contact_names,
            "describe": describe,
        }

    @builtins.property
    def contact_group_name(self) -> builtins.str:
        """
        :Property: contactGroupName: The name of the alert contact group.
        """
        result = self._values.get("contact_group_name")
        assert result is not None, "Required property 'contact_group_name' is missing"
        return result

    @builtins.property
    def contact_names(self) -> typing.List[builtins.str]:
        """
        :Property: contactNames: The name of the alert contact.
        """
        result = self._values.get("contact_names")
        assert result is not None, "Required property 'contact_names' is missing"
        return result

    @builtins.property
    def describe(self) -> builtins.str:
        """
        :Property: describe: The description of the alert contact group.
        """
        result = self._values.get("describe")
        assert result is not None, "Required property 'describe' is missing"
        return result

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
        channels: typing.Union[RosContact.ChannelsProperty, ros_cdk_core.IResolvable],
        contact_name: builtins.str,
        describe: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::CMS::Contact``.

        :param channels: 
        :param contact_name: 
        :param describe: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "channels": channels,
            "contact_name": contact_name,
            "describe": describe,
        }

    @builtins.property
    def channels(
        self,
    ) -> typing.Union[RosContact.ChannelsProperty, ros_cdk_core.IResolvable]:
        """
        :Property: channels: undefined
        """
        result = self._values.get("channels")
        assert result is not None, "Required property 'channels' is missing"
        return result

    @builtins.property
    def contact_name(self) -> builtins.str:
        """
        :Property: contactName: The name of the alarm contact.
        """
        result = self._values.get("contact_name")
        assert result is not None, "Required property 'contact_name' is missing"
        return result

    @builtins.property
    def describe(self) -> builtins.str:
        """
        :Property: describe: The description of the alert contact.
        """
        result = self._values.get("describe")
        assert result is not None, "Required property 'describe' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosContactProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDynamicTagGroup(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.RosDynamicTagGroup",
):
    """A ROS template type:  ``ALIYUN::CMS::DynamicTagGroup``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDynamicTagGroupProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::CMS::DynamicTagGroup``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosDynamicTagGroup, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDynamicTagRuleId")
    def attr_dynamic_tag_rule_id(self) -> typing.Any:
        """
        :Attribute: DynamicTagRuleId: Dynamic tag rule ID.
        """
        return jsii.get(self, "attrDynamicTagRuleId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrTagKey")
    def attr_tag_key(self) -> typing.Any:
        """
        :Attribute: TagKey: Tag key.
        """
        return jsii.get(self, "attrTagKey")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="contactGroupList")
    def contact_group_list(self) -> typing.List[builtins.str]:
        """
        :Property: contactGroupList: Alarm contacts.
        """
        return jsii.get(self, "contactGroupList")

    @contact_group_list.setter # type: ignore
    def contact_group_list(self, value: typing.List[builtins.str]) -> None:
        jsii.set(self, "contactGroupList", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="tagKey")
    def tag_key(self) -> builtins.str:
        """
        :Property: tagKey: Tag key.
        """
        return jsii.get(self, "tagKey")

    @tag_key.setter # type: ignore
    def tag_key(self, value: builtins.str) -> None:
        jsii.set(self, "tagKey", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableInstallAgent")
    def enable_install_agent(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        enableInstallAgent: Whether to enable initial installation monitoring plug, not installed by default. Values are:
        true: enable installation
        Note If ECS generated instances group does not monitor plug-in installed will attempt to automatically install.
        false: disable installation
        """
        return jsii.get(self, "enableInstallAgent")

    @enable_install_agent.setter # type: ignore
    def enable_install_agent(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "enableInstallAgent", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableSubscribeEvent")
    def enable_subscribe_event(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        enableSubscribeEvent: Whether the event subscription is enabled. Values are
        :true: enable event subscription
        false: disable event subscription
        """
        return jsii.get(self, "enableSubscribeEvent")

    @enable_subscribe_event.setter # type: ignore
    def enable_subscribe_event(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "enableSubscribeEvent", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="matchExpress")
    def match_express(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDynamicTagGroup.MatchExpressProperty"]]]]:
        """
        :Property: matchExpress: Matching list. Only supports one currently.
        """
        return jsii.get(self, "matchExpress")

    @match_express.setter # type: ignore
    def match_express(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDynamicTagGroup.MatchExpressProperty"]]]],
    ) -> None:
        jsii.set(self, "matchExpress", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="matchExpressFilterRelation")
    def match_express_filter_relation(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        matchExpressFilterRelation: The relationship between the conditional expressions. Values are:
        and: the relationship between
        or: the relationship or the
        Description currently supports only one combination of conditions, the follow-up Ali cloud will support a variety of combinations of conditions.
        """
        return jsii.get(self, "matchExpressFilterRelation")

    @match_express_filter_relation.setter # type: ignore
    def match_express_filter_relation(
        self,
        value: typing.Optional[builtins.str],
    ) -> None:
        jsii.set(self, "matchExpressFilterRelation", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="templateIdList")
    def template_id_list(self) -> typing.Optional[typing.List[builtins.str]]:
        """
        :Property:

        templateIdList: Alarm template ID list.
        When the automatically generated application group synchronizes tags, it will generate alarm rules according to the specified alarm template.
        """
        return jsii.get(self, "templateIdList")

    @template_id_list.setter # type: ignore
    def template_id_list(
        self,
        value: typing.Optional[typing.List[builtins.str]],
    ) -> None:
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
            tag_value: builtins.str,
            tag_value_match_function: builtins.str,
        ) -> None:
            """
            :param tag_value: 
            :param tag_value_match_function: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "tag_value": tag_value,
                "tag_value_match_function": tag_value_match_function,
            }

        @builtins.property
        def tag_value(self) -> builtins.str:
            """
            :Property: tagValue: Tag value, used with TagValueMatchFunction.
            """
            result = self._values.get("tag_value")
            assert result is not None, "Required property 'tag_value' is missing"
            return result

        @builtins.property
        def tag_value_match_function(self) -> builtins.str:
            """
            :Property:

            tagValueMatchFunction: Matching labeled keys. Values are:
            contains: contains
            startWith: Prefix
            endWith: suffix
            notContains: not included
            equals: equals
            all: All
            """
            result = self._values.get("tag_value_match_function")
            assert result is not None, "Required property 'tag_value_match_function' is missing"
            return result

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
        contact_group_list: typing.List[builtins.str],
        tag_key: builtins.str,
        enable_install_agent: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        enable_subscribe_event: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        match_express: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosDynamicTagGroup.MatchExpressProperty]]]] = None,
        match_express_filter_relation: typing.Optional[builtins.str] = None,
        template_id_list: typing.Optional[typing.List[builtins.str]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::CMS::DynamicTagGroup``.

        :param contact_group_list: 
        :param tag_key: 
        :param enable_install_agent: 
        :param enable_subscribe_event: 
        :param match_express: 
        :param match_express_filter_relation: 
        :param template_id_list: 
        """
        self._values: typing.Dict[str, typing.Any] = {
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
    def contact_group_list(self) -> typing.List[builtins.str]:
        """
        :Property: contactGroupList: Alarm contacts.
        """
        result = self._values.get("contact_group_list")
        assert result is not None, "Required property 'contact_group_list' is missing"
        return result

    @builtins.property
    def tag_key(self) -> builtins.str:
        """
        :Property: tagKey: Tag key.
        """
        result = self._values.get("tag_key")
        assert result is not None, "Required property 'tag_key' is missing"
        return result

    @builtins.property
    def enable_install_agent(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        enableInstallAgent: Whether to enable initial installation monitoring plug, not installed by default. Values are:
        true: enable installation
        Note If ECS generated instances group does not monitor plug-in installed will attempt to automatically install.
        false: disable installation
        """
        result = self._values.get("enable_install_agent")
        return result

    @builtins.property
    def enable_subscribe_event(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        enableSubscribeEvent: Whether the event subscription is enabled. Values are
        :true: enable event subscription
        false: disable event subscription
        """
        result = self._values.get("enable_subscribe_event")
        return result

    @builtins.property
    def match_express(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosDynamicTagGroup.MatchExpressProperty]]]]:
        """
        :Property: matchExpress: Matching list. Only supports one currently.
        """
        result = self._values.get("match_express")
        return result

    @builtins.property
    def match_express_filter_relation(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        matchExpressFilterRelation: The relationship between the conditional expressions. Values are:
        and: the relationship between
        or: the relationship or the
        Description currently supports only one combination of conditions, the follow-up Ali cloud will support a variety of combinations of conditions.
        """
        result = self._values.get("match_express_filter_relation")
        return result

    @builtins.property
    def template_id_list(self) -> typing.Optional[typing.List[builtins.str]]:
        """
        :Property:

        templateIdList: Alarm template ID list.
        When the automatically generated application group synchronizes tags, it will generate alarm rules according to the specified alarm template.
        """
        result = self._values.get("template_id_list")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDynamicTagGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosEventRule(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.RosEventRule",
):
    """A ROS template type:  ``ALIYUN::CMS::EventRule``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosEventRuleProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::CMS::EventRule``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosEventRule, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrData")
    def attr_data(self) -> typing.Any:
        """
        :Attribute: Data: Number of rows affected.
        """
        return jsii.get(self, "attrData")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="eventPattern")
    def event_pattern(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosEventRule.EventPatternProperty"]]]:
        """
        :Property: eventPattern: Event pattern configuration.A maximum of 20 event patterns.
        """
        return jsii.get(self, "eventPattern")

    @event_pattern.setter # type: ignore
    def event_pattern(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosEventRule.EventPatternProperty"]]],
    ) -> None:
        jsii.set(self, "eventPattern", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="ruleName")
    def rule_name(self) -> builtins.str:
        """
        :Property: ruleName: The name of the alarm rule.
        """
        return jsii.get(self, "ruleName")

    @rule_name.setter # type: ignore
    def rule_name(self, value: builtins.str) -> None:
        jsii.set(self, "ruleName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: The description of the alert rule.
        """
        return jsii.get(self, "description")

    @description.setter # type: ignore
    def description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="eventType")
    def event_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        eventType: The type of the event alert. Valid values:
        SYSTEM
        CUSTOM
        """
        return jsii.get(self, "eventType")

    @event_type.setter # type: ignore
    def event_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "eventType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="groupId")
    def group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: groupId: The ID of the application group.
        """
        return jsii.get(self, "groupId")

    @group_id.setter # type: ignore
    def group_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "groupId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="state")
    def state(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        state: The status of the alert rule. Valid values:
        ENABLED
        DISABLED
        """
        return jsii.get(self, "state")

    @state.setter # type: ignore
    def state(self, value: typing.Optional[builtins.str]) -> None:
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
            event_type_list: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
            level_list: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
            name_list: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
            product: typing.Optional[builtins.str] = None,
            status_list: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
        ) -> None:
            """
            :param event_type_list: 
            :param level_list: 
            :param name_list: 
            :param product: 
            :param status_list: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
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
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            """
            :Property: eventTypeList: The type of the event. A value of * indicates any type. Please refer to the configuration of CMS.
            """
            result = self._values.get("event_type_list")
            return result

        @builtins.property
        def level_list(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            """
            :Property:

            levelList: The severity of the event alert. Valid values: CRITICAL, WARN, INFO, and * (all severity
            levels).
            """
            result = self._values.get("level_list")
            return result

        @builtins.property
        def name_list(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            """
            :Property: nameList: The name of the event. Please refer to the configuration of CMS.
            """
            result = self._values.get("name_list")
            return result

        @builtins.property
        def product(self) -> typing.Optional[builtins.str]:
            """
            :Property: product: The name of the service. Please refer to the configuration of CMS.
            """
            result = self._values.get("product")
            return result

        @builtins.property
        def status_list(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            """
            :Property: statusList: The status of the event. Please refer to the configuration of CMS.
            """
            result = self._values.get("status_list")
            return result

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
        event_pattern: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosEventRule.EventPatternProperty]]],
        rule_name: builtins.str,
        description: typing.Optional[builtins.str] = None,
        event_type: typing.Optional[builtins.str] = None,
        group_id: typing.Optional[builtins.str] = None,
        state: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::CMS::EventRule``.

        :param event_pattern: 
        :param rule_name: 
        :param description: 
        :param event_type: 
        :param group_id: 
        :param state: 
        """
        self._values: typing.Dict[str, typing.Any] = {
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
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosEventRule.EventPatternProperty]]]:
        """
        :Property: eventPattern: Event pattern configuration.A maximum of 20 event patterns.
        """
        result = self._values.get("event_pattern")
        assert result is not None, "Required property 'event_pattern' is missing"
        return result

    @builtins.property
    def rule_name(self) -> builtins.str:
        """
        :Property: ruleName: The name of the alarm rule.
        """
        result = self._values.get("rule_name")
        assert result is not None, "Required property 'rule_name' is missing"
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: The description of the alert rule.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def event_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        eventType: The type of the event alert. Valid values:
        SYSTEM
        CUSTOM
        """
        result = self._values.get("event_type")
        return result

    @builtins.property
    def group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: groupId: The ID of the application group.
        """
        result = self._values.get("group_id")
        return result

    @builtins.property
    def state(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        state: The status of the alert rule. Valid values:
        ENABLED
        DISABLED
        """
        result = self._values.get("state")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosEventRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosEventRuleTargets(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.RosEventRuleTargets",
):
    """A ROS template type:  ``ALIYUN::CMS::EventRuleTargets``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosEventRuleTargetsProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::CMS::EventRuleTargets``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosEventRuleTargets, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        """A factory method that creates a new instance of this class from an object
containing the properties of this ROS resource."""
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="ruleName")
    def rule_name(self) -> builtins.str:
        """
        :Property: ruleName: The name of the alert rule.
        """
        return jsii.get(self, "ruleName")

    @rule_name.setter # type: ignore
    def rule_name(self, value: builtins.str) -> None:
        jsii.set(self, "ruleName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="contactParameters")
    def contact_parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosEventRuleTargets.ContactParametersProperty"]]]]:
        """
        :Property: contactParameters: CONTACT configuration.A maximum of 5 parameters
        """
        return jsii.get(self, "contactParameters")

    @contact_parameters.setter # type: ignore
    def contact_parameters(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosEventRuleTargets.ContactParametersProperty"]]]],
    ) -> None:
        jsii.set(self, "contactParameters", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="fcParameters")
    def fc_parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosEventRuleTargets.FcParametersProperty"]]]]:
        """
        :Property: fcParameters: FC configuration.A maximum of 5 parameters.
        """
        return jsii.get(self, "fcParameters")

    @fc_parameters.setter # type: ignore
    def fc_parameters(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosEventRuleTargets.FcParametersProperty"]]]],
    ) -> None:
        jsii.set(self, "fcParameters", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="mnsParameters")
    def mns_parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosEventRuleTargets.MnsParametersProperty"]]]]:
        """
        :Property: mnsParameters: MNS configuration.A maximum of 5 parameters
        """
        return jsii.get(self, "mnsParameters")

    @mns_parameters.setter # type: ignore
    def mns_parameters(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosEventRuleTargets.MnsParametersProperty"]]]],
    ) -> None:
        jsii.set(self, "mnsParameters", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="slsParameters")
    def sls_parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosEventRuleTargets.SlsParametersProperty"]]]]:
        """
        :Property: slsParameters: SLS configuration.A maximum of 5 parameters.
        """
        return jsii.get(self, "slsParameters")

    @sls_parameters.setter # type: ignore
    def sls_parameters(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosEventRuleTargets.SlsParametersProperty"]]]],
    ) -> None:
        jsii.set(self, "slsParameters", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="webhookParameters")
    def webhook_parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosEventRuleTargets.WebhookParametersProperty"]]]]:
        """
        :Property: webhookParameters: WEBHOOK configuration.A maximum of 5 parameters.
        """
        return jsii.get(self, "webhookParameters")

    @webhook_parameters.setter # type: ignore
    def webhook_parameters(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosEventRuleTargets.WebhookParametersProperty"]]]],
    ) -> None:
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
            contact_group_name: typing.Optional[builtins.str] = None,
            id: typing.Optional[builtins.str] = None,
            level: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param contact_group_name: 
            :param id: 
            :param level: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if contact_group_name is not None:
                self._values["contact_group_name"] = contact_group_name
            if id is not None:
                self._values["id"] = id
            if level is not None:
                self._values["level"] = level

        @builtins.property
        def contact_group_name(self) -> typing.Optional[builtins.str]:
            """
            :Property: contactGroupName: The name of the alert contact group.
            """
            result = self._values.get("contact_group_name")
            return result

        @builtins.property
        def id(self) -> typing.Optional[builtins.str]:
            """
            :Property: id: The unique ID of the alert contact group notification.
            """
            result = self._values.get("id")
            return result

        @builtins.property
        def level(self) -> typing.Optional[builtins.str]:
            """
            :Property: level: The method of alert notification. Valid values: 2, 3, and 4.2: DingTalk Chatbot and email.3: DingTalk Chatbot and email.4: DingTalk Chatbot and email.
            """
            result = self._values.get("level")
            return result

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
            function_name: typing.Optional[builtins.str] = None,
            id: typing.Optional[builtins.str] = None,
            region: typing.Optional[builtins.str] = None,
            service_name: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param function_name: 
            :param id: 
            :param region: 
            :param service_name: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if function_name is not None:
                self._values["function_name"] = function_name
            if id is not None:
                self._values["id"] = id
            if region is not None:
                self._values["region"] = region
            if service_name is not None:
                self._values["service_name"] = service_name

        @builtins.property
        def function_name(self) -> typing.Optional[builtins.str]:
            """
            :Property: functionName: The name of the function.
            """
            result = self._values.get("function_name")
            return result

        @builtins.property
        def id(self) -> typing.Optional[builtins.str]:
            """
            :Property: id: The unique ID of the Function Compute notification.
            """
            result = self._values.get("id")
            return result

        @builtins.property
        def region(self) -> typing.Optional[builtins.str]:
            """
            :Property: region: The region where Function Compute is deployed.
            """
            result = self._values.get("region")
            return result

        @builtins.property
        def service_name(self) -> typing.Optional[builtins.str]:
            """
            :Property: serviceName: The name of the Function Compute service.
            """
            result = self._values.get("service_name")
            return result

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
            id: typing.Optional[builtins.str] = None,
            queue: typing.Optional[builtins.str] = None,
            region: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param id: 
            :param queue: 
            :param region: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if id is not None:
                self._values["id"] = id
            if queue is not None:
                self._values["queue"] = queue
            if region is not None:
                self._values["region"] = region

        @builtins.property
        def id(self) -> typing.Optional[builtins.str]:
            """
            :Property: id: The unique ID of the Message Service (MNS) notification.
            """
            result = self._values.get("id")
            return result

        @builtins.property
        def queue(self) -> typing.Optional[builtins.str]:
            """
            :Property: queue: The name of the MNS queue.
            """
            result = self._values.get("queue")
            return result

        @builtins.property
        def region(self) -> typing.Optional[builtins.str]:
            """
            :Property: region: The region where MNS is deployed.
            """
            result = self._values.get("region")
            return result

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
            id: typing.Optional[builtins.str] = None,
            log_store: typing.Optional[builtins.str] = None,
            project: typing.Optional[builtins.str] = None,
            region: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param id: 
            :param log_store: 
            :param project: 
            :param region: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if id is not None:
                self._values["id"] = id
            if log_store is not None:
                self._values["log_store"] = log_store
            if project is not None:
                self._values["project"] = project
            if region is not None:
                self._values["region"] = region

        @builtins.property
        def id(self) -> typing.Optional[builtins.str]:
            """
            :Property: id: The unique ID of the Log Service notification.
            """
            result = self._values.get("id")
            return result

        @builtins.property
        def log_store(self) -> typing.Optional[builtins.str]:
            """
            :Property: logStore: The logstore corresponding to Log Service.
            """
            result = self._values.get("log_store")
            return result

        @builtins.property
        def project(self) -> typing.Optional[builtins.str]:
            """
            :Property: project: The project corresponding to Log Service.
            """
            result = self._values.get("project")
            return result

        @builtins.property
        def region(self) -> typing.Optional[builtins.str]:
            """
            :Property: region: The region where Log Service is deployed.
            """
            result = self._values.get("region")
            return result

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
            id: typing.Optional[builtins.str] = None,
            method: typing.Optional[builtins.str] = None,
            protocol: typing.Optional[builtins.str] = None,
            url: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param id: 
            :param method: 
            :param protocol: 
            :param url: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if id is not None:
                self._values["id"] = id
            if method is not None:
                self._values["method"] = method
            if protocol is not None:
                self._values["protocol"] = protocol
            if url is not None:
                self._values["url"] = url

        @builtins.property
        def id(self) -> typing.Optional[builtins.str]:
            """
            :Property: id: The unique ID of the HTTP callback notification.
            """
            result = self._values.get("id")
            return result

        @builtins.property
        def method(self) -> typing.Optional[builtins.str]:
            """
            :Property: method: The request method of the HTTP callback. Valid values: GET and POST.
            """
            result = self._values.get("method")
            return result

        @builtins.property
        def protocol(self) -> typing.Optional[builtins.str]:
            """
            :Property: protocol: The name of the protocol.
            """
            result = self._values.get("protocol")
            return result

        @builtins.property
        def url(self) -> typing.Optional[builtins.str]:
            """
            :Property: url: The callback URL.
            """
            result = self._values.get("url")
            return result

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
        rule_name: builtins.str,
        contact_parameters: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosEventRuleTargets.ContactParametersProperty]]]] = None,
        fc_parameters: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosEventRuleTargets.FcParametersProperty]]]] = None,
        mns_parameters: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosEventRuleTargets.MnsParametersProperty]]]] = None,
        sls_parameters: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosEventRuleTargets.SlsParametersProperty]]]] = None,
        webhook_parameters: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosEventRuleTargets.WebhookParametersProperty]]]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::CMS::EventRuleTargets``.

        :param rule_name: 
        :param contact_parameters: 
        :param fc_parameters: 
        :param mns_parameters: 
        :param sls_parameters: 
        :param webhook_parameters: 
        """
        self._values: typing.Dict[str, typing.Any] = {
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
    def rule_name(self) -> builtins.str:
        """
        :Property: ruleName: The name of the alert rule.
        """
        result = self._values.get("rule_name")
        assert result is not None, "Required property 'rule_name' is missing"
        return result

    @builtins.property
    def contact_parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosEventRuleTargets.ContactParametersProperty]]]]:
        """
        :Property: contactParameters: CONTACT configuration.A maximum of 5 parameters
        """
        result = self._values.get("contact_parameters")
        return result

    @builtins.property
    def fc_parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosEventRuleTargets.FcParametersProperty]]]]:
        """
        :Property: fcParameters: FC configuration.A maximum of 5 parameters.
        """
        result = self._values.get("fc_parameters")
        return result

    @builtins.property
    def mns_parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosEventRuleTargets.MnsParametersProperty]]]]:
        """
        :Property: mnsParameters: MNS configuration.A maximum of 5 parameters
        """
        result = self._values.get("mns_parameters")
        return result

    @builtins.property
    def sls_parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosEventRuleTargets.SlsParametersProperty]]]]:
        """
        :Property: slsParameters: SLS configuration.A maximum of 5 parameters.
        """
        result = self._values.get("sls_parameters")
        return result

    @builtins.property
    def webhook_parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosEventRuleTargets.WebhookParametersProperty]]]]:
        """
        :Property: webhookParameters: WEBHOOK configuration.A maximum of 5 parameters.
        """
        result = self._values.get("webhook_parameters")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosEventRuleTargetsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosGroupMetricRule(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.RosGroupMetricRule",
):
    """A ROS template type:  ``ALIYUN::CMS::GroupMetricRule``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosGroupMetricRuleProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::CMS::GroupMetricRule``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosGroupMetricRule, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrRuleId")
    def attr_rule_id(self) -> typing.Any:
        """
        :Attribute: RuleId: Rule ID.
        """
        return jsii.get(self, "attrRuleId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="category")
    def category(self) -> builtins.str:
        """
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
        """
        return jsii.get(self, "category")

    @category.setter # type: ignore
    def category(self, value: builtins.str) -> None:
        jsii.set(self, "category", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="escalations")
    def escalations(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, "RosGroupMetricRule.EscalationsProperty"]:
        """
        :Property: escalations: undefined
        """
        return jsii.get(self, "escalations")

    @escalations.setter # type: ignore
    def escalations(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, "RosGroupMetricRule.EscalationsProperty"],
    ) -> None:
        jsii.set(self, "escalations", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="groupId")
    def group_id(self) -> builtins.str:
        """
        :Property: groupId: The ID of application group.
        """
        return jsii.get(self, "groupId")

    @group_id.setter # type: ignore
    def group_id(self, value: builtins.str) -> None:
        jsii.set(self, "groupId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="metricName")
    def metric_name(self) -> builtins.str:
        """
        :Property: metricName: The name of the metric. For more information, call DescribeMetricMetaList or see Preset metrics reference.
        """
        return jsii.get(self, "metricName")

    @metric_name.setter # type: ignore
    def metric_name(self, value: builtins.str) -> None:
        jsii.set(self, "metricName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="namespace")
    def namespace(self) -> builtins.str:
        """
        :Property:

        namespace: The data namespace of the service. For more information, call DescribeMetricMetaList
        or see Preset metrics reference.
        """
        return jsii.get(self, "namespace")

    @namespace.setter # type: ignore
    def namespace(self, value: builtins.str) -> None:
        jsii.set(self, "namespace", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="ruleId")
    def rule_id(self) -> builtins.str:
        """
        :Property:

        ruleId: The ID of the alert rule. The IDs of alert rules are generated by callers to ensure
        uniqueness.
        """
        return jsii.get(self, "ruleId")

    @rule_id.setter # type: ignore
    def rule_id(self, value: builtins.str) -> None:
        jsii.set(self, "ruleId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="ruleName")
    def rule_name(self) -> builtins.str:
        """
        :Property: ruleName: The name of the alert rule.
        """
        return jsii.get(self, "ruleName")

    @rule_name.setter # type: ignore
    def rule_name(self, value: builtins.str) -> None:
        jsii.set(self, "ruleName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dimensions")
    def dimensions(self) -> typing.Optional[builtins.str]:
        """
        :Property: dimensions: The expended resource dimensions.
        """
        return jsii.get(self, "dimensions")

    @dimensions.setter # type: ignore
    def dimensions(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "dimensions", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="effectiveInterval")
    def effective_interval(self) -> typing.Optional[builtins.str]:
        """
        :Property: effectiveInterval: The period when the alert rule is effective.
        """
        return jsii.get(self, "effectiveInterval")

    @effective_interval.setter # type: ignore
    def effective_interval(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "effectiveInterval", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="emailSubject")
    def email_subject(self) -> typing.Optional[builtins.str]:
        """
        :Property: emailSubject: The subject of the alert notification email.
        """
        return jsii.get(self, "emailSubject")

    @email_subject.setter # type: ignore
    def email_subject(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "emailSubject", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="interval")
    def interval(self) -> typing.Optional[jsii.Number]:
        """
        :Property: interval: The detection period of alerts.
        """
        return jsii.get(self, "interval")

    @interval.setter # type: ignore
    def interval(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "interval", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="noEffectiveInterval")
    def no_effective_interval(self) -> typing.Optional[builtins.str]:
        """
        :Property: noEffectiveInterval: The period when the alert rule is ineffective.
        """
        return jsii.get(self, "noEffectiveInterval")

    @no_effective_interval.setter # type: ignore
    def no_effective_interval(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "noEffectiveInterval", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="period")
    def period(self) -> typing.Optional[jsii.Number]:
        """
        :Property: period: The aggregation period. Unite: second.
        """
        return jsii.get(self, "period")

    @period.setter # type: ignore
    def period(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "period", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="silenceTime")
    def silence_time(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        silenceTime: The duration of the mute period during which new alerts are not sent even if the trigger
        conditions are met. Unit: second. Default value: 86400. Minimum value: 60.
        """
        return jsii.get(self, "silenceTime")

    @silence_time.setter # type: ignore
    def silence_time(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "silenceTime", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="webhook")
    def webhook(self) -> typing.Optional[builtins.str]:
        """
        :Property: webhook: The URL of the callback triggered when an alert occurs.
        """
        return jsii.get(self, "webhook")

    @webhook.setter # type: ignore
    def webhook(self, value: typing.Optional[builtins.str]) -> None:
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
            comparison_operator: builtins.str,
            statistics: builtins.str,
            threshold: jsii.Number,
            times: jsii.Number,
        ) -> None:
            """
            :param comparison_operator: 
            :param statistics: 
            :param threshold: 
            :param times: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "comparison_operator": comparison_operator,
                "statistics": statistics,
                "threshold": threshold,
                "times": times,
            }

        @builtins.property
        def comparison_operator(self) -> builtins.str:
            """
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
            """
            result = self._values.get("comparison_operator")
            assert result is not None, "Required property 'comparison_operator' is missing"
            return result

        @builtins.property
        def statistics(self) -> builtins.str:
            """
            :Property:

            statistics: The statistical method for critical-level alerts. The statistical method varies with
            metric.
            """
            result = self._values.get("statistics")
            assert result is not None, "Required property 'statistics' is missing"
            return result

        @builtins.property
        def threshold(self) -> jsii.Number:
            """
            :Property: threshold: The threshold for critical-level alerts.
            """
            result = self._values.get("threshold")
            assert result is not None, "Required property 'threshold' is missing"
            return result

        @builtins.property
        def times(self) -> jsii.Number:
            """
            :Property:

            times: The consecutive number of times for which the metric value exceeds the threshold for
            critical-level alerts before an alert is triggered.
            """
            result = self._values.get("times")
            assert result is not None, "Required property 'times' is missing"
            return result

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
            critical: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosGroupMetricRule.CriticalProperty"]] = None,
            info: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosGroupMetricRule.InfoProperty"]] = None,
            warn: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosGroupMetricRule.WarnProperty"]] = None,
        ) -> None:
            """
            :param critical: 
            :param info: 
            :param warn: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if critical is not None:
                self._values["critical"] = critical
            if info is not None:
                self._values["info"] = info
            if warn is not None:
                self._values["warn"] = warn

        @builtins.property
        def critical(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosGroupMetricRule.CriticalProperty"]]:
            """
            :Property: critical: undefined
            """
            result = self._values.get("critical")
            return result

        @builtins.property
        def info(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosGroupMetricRule.InfoProperty"]]:
            """
            :Property: info: undefined
            """
            result = self._values.get("info")
            return result

        @builtins.property
        def warn(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosGroupMetricRule.WarnProperty"]]:
            """
            :Property: warn: undefined
            """
            result = self._values.get("warn")
            return result

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
            comparison_operator: builtins.str,
            statistics: builtins.str,
            threshold: jsii.Number,
            times: jsii.Number,
        ) -> None:
            """
            :param comparison_operator: 
            :param statistics: 
            :param threshold: 
            :param times: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "comparison_operator": comparison_operator,
                "statistics": statistics,
                "threshold": threshold,
                "times": times,
            }

        @builtins.property
        def comparison_operator(self) -> builtins.str:
            """
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
            """
            result = self._values.get("comparison_operator")
            assert result is not None, "Required property 'comparison_operator' is missing"
            return result

        @builtins.property
        def statistics(self) -> builtins.str:
            """
            :Property: statistics: The statistical method for info-level alerts.
            """
            result = self._values.get("statistics")
            assert result is not None, "Required property 'statistics' is missing"
            return result

        @builtins.property
        def threshold(self) -> jsii.Number:
            """
            :Property: threshold: The threshold for info-level alerts.
            """
            result = self._values.get("threshold")
            assert result is not None, "Required property 'threshold' is missing"
            return result

        @builtins.property
        def times(self) -> jsii.Number:
            """
            :Property:

            times: The consecutive number of times for which the metric value exceeds the threshold for
            info-level alerts before an alert is triggered.
            """
            result = self._values.get("times")
            assert result is not None, "Required property 'times' is missing"
            return result

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
            comparison_operator: builtins.str,
            statistics: builtins.str,
            threshold: jsii.Number,
            times: jsii.Number,
        ) -> None:
            """
            :param comparison_operator: 
            :param statistics: 
            :param threshold: 
            :param times: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "comparison_operator": comparison_operator,
                "statistics": statistics,
                "threshold": threshold,
                "times": times,
            }

        @builtins.property
        def comparison_operator(self) -> builtins.str:
            """
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
            """
            result = self._values.get("comparison_operator")
            assert result is not None, "Required property 'comparison_operator' is missing"
            return result

        @builtins.property
        def statistics(self) -> builtins.str:
            """
            :Property: statistics: The statistical method for warn-level alerts.
            """
            result = self._values.get("statistics")
            assert result is not None, "Required property 'statistics' is missing"
            return result

        @builtins.property
        def threshold(self) -> jsii.Number:
            """
            :Property: threshold: The threshold for warn-level alerts.
            """
            result = self._values.get("threshold")
            assert result is not None, "Required property 'threshold' is missing"
            return result

        @builtins.property
        def times(self) -> jsii.Number:
            """
            :Property:

            times: The consecutive number of times for which the metric value exceeds the threshold for
            warn-level alerts before an alert is triggered.
            """
            result = self._values.get("times")
            assert result is not None, "Required property 'times' is missing"
            return result

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
        category: builtins.str,
        escalations: typing.Union[ros_cdk_core.IResolvable, RosGroupMetricRule.EscalationsProperty],
        group_id: builtins.str,
        metric_name: builtins.str,
        namespace: builtins.str,
        rule_id: builtins.str,
        rule_name: builtins.str,
        dimensions: typing.Optional[builtins.str] = None,
        effective_interval: typing.Optional[builtins.str] = None,
        email_subject: typing.Optional[builtins.str] = None,
        interval: typing.Optional[jsii.Number] = None,
        no_effective_interval: typing.Optional[builtins.str] = None,
        period: typing.Optional[jsii.Number] = None,
        silence_time: typing.Optional[jsii.Number] = None,
        webhook: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::CMS::GroupMetricRule``.

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
        """
        self._values: typing.Dict[str, typing.Any] = {
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
    def category(self) -> builtins.str:
        """
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
        """
        result = self._values.get("category")
        assert result is not None, "Required property 'category' is missing"
        return result

    @builtins.property
    def escalations(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, RosGroupMetricRule.EscalationsProperty]:
        """
        :Property: escalations: undefined
        """
        result = self._values.get("escalations")
        assert result is not None, "Required property 'escalations' is missing"
        return result

    @builtins.property
    def group_id(self) -> builtins.str:
        """
        :Property: groupId: The ID of application group.
        """
        result = self._values.get("group_id")
        assert result is not None, "Required property 'group_id' is missing"
        return result

    @builtins.property
    def metric_name(self) -> builtins.str:
        """
        :Property: metricName: The name of the metric. For more information, call DescribeMetricMetaList or see Preset metrics reference.
        """
        result = self._values.get("metric_name")
        assert result is not None, "Required property 'metric_name' is missing"
        return result

    @builtins.property
    def namespace(self) -> builtins.str:
        """
        :Property:

        namespace: The data namespace of the service. For more information, call DescribeMetricMetaList
        or see Preset metrics reference.
        """
        result = self._values.get("namespace")
        assert result is not None, "Required property 'namespace' is missing"
        return result

    @builtins.property
    def rule_id(self) -> builtins.str:
        """
        :Property:

        ruleId: The ID of the alert rule. The IDs of alert rules are generated by callers to ensure
        uniqueness.
        """
        result = self._values.get("rule_id")
        assert result is not None, "Required property 'rule_id' is missing"
        return result

    @builtins.property
    def rule_name(self) -> builtins.str:
        """
        :Property: ruleName: The name of the alert rule.
        """
        result = self._values.get("rule_name")
        assert result is not None, "Required property 'rule_name' is missing"
        return result

    @builtins.property
    def dimensions(self) -> typing.Optional[builtins.str]:
        """
        :Property: dimensions: The expended resource dimensions.
        """
        result = self._values.get("dimensions")
        return result

    @builtins.property
    def effective_interval(self) -> typing.Optional[builtins.str]:
        """
        :Property: effectiveInterval: The period when the alert rule is effective.
        """
        result = self._values.get("effective_interval")
        return result

    @builtins.property
    def email_subject(self) -> typing.Optional[builtins.str]:
        """
        :Property: emailSubject: The subject of the alert notification email.
        """
        result = self._values.get("email_subject")
        return result

    @builtins.property
    def interval(self) -> typing.Optional[jsii.Number]:
        """
        :Property: interval: The detection period of alerts.
        """
        result = self._values.get("interval")
        return result

    @builtins.property
    def no_effective_interval(self) -> typing.Optional[builtins.str]:
        """
        :Property: noEffectiveInterval: The period when the alert rule is ineffective.
        """
        result = self._values.get("no_effective_interval")
        return result

    @builtins.property
    def period(self) -> typing.Optional[jsii.Number]:
        """
        :Property: period: The aggregation period. Unite: second.
        """
        result = self._values.get("period")
        return result

    @builtins.property
    def silence_time(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        silenceTime: The duration of the mute period during which new alerts are not sent even if the trigger
        conditions are met. Unit: second. Default value: 86400. Minimum value: 60.
        """
        result = self._values.get("silence_time")
        return result

    @builtins.property
    def webhook(self) -> typing.Optional[builtins.str]:
        """
        :Property: webhook: The URL of the callback triggered when an alert occurs.
        """
        result = self._values.get("webhook")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosGroupMetricRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosMetricRuleTargets(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.RosMetricRuleTargets",
):
    """A ROS template type:  ``ALIYUN::CMS::MetricRuleTargets``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosMetricRuleTargetsProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::CMS::MetricRuleTargets``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosMetricRuleTargets, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrArns")
    def attr_arns(self) -> typing.Any:
        """
        :Attribute: Arns: The ARN list of targets
        """
        return jsii.get(self, "attrArns")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrIds")
    def attr_ids(self) -> typing.Any:
        """
        :Attribute: Ids: The ID list of targets
        """
        return jsii.get(self, "attrIds")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="ruleId")
    def rule_id(self) -> builtins.str:
        """
        :Property: ruleId: The ID of the alert rule.
        """
        return jsii.get(self, "ruleId")

    @rule_id.setter # type: ignore
    def rule_id(self, value: builtins.str) -> None:
        jsii.set(self, "ruleId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="targets")
    def targets(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosMetricRuleTargets.TargetsProperty"]]]:
        """
        :Property: targets: undefined
        """
        return jsii.get(self, "targets")

    @targets.setter # type: ignore
    def targets(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosMetricRuleTargets.TargetsProperty"]]],
    ) -> None:
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
            arn: builtins.str,
            id: builtins.str,
            level: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param arn: 
            :param id: 
            :param level: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "arn": arn,
                "id": id,
            }
            if level is not None:
                self._values["level"] = level

        @builtins.property
        def arn(self) -> builtins.str:
            """
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
            """
            result = self._values.get("arn")
            assert result is not None, "Required property 'arn' is missing"
            return result

        @builtins.property
        def id(self) -> builtins.str:
            """
            :Property: id: The ID of the message resource. The ID must be unique in the alert rule.
            """
            result = self._values.get("id")
            assert result is not None, "Required property 'id' is missing"
            return result

        @builtins.property
        def level(self) -> typing.Optional[builtins.str]:
            """
            :Property:

            level: The alert level, which is a JSON array. For example: ["INFO", "WARN", "CRITICAL"]. Valid values:
            INFO
            WARN
            CRITICAL
            """
            result = self._values.get("level")
            return result

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
        rule_id: builtins.str,
        targets: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosMetricRuleTargets.TargetsProperty]]],
    ) -> None:
        """Properties for defining a ``ALIYUN::CMS::MetricRuleTargets``.

        :param rule_id: 
        :param targets: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "rule_id": rule_id,
            "targets": targets,
        }

    @builtins.property
    def rule_id(self) -> builtins.str:
        """
        :Property: ruleId: The ID of the alert rule.
        """
        result = self._values.get("rule_id")
        assert result is not None, "Required property 'rule_id' is missing"
        return result

    @builtins.property
    def targets(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosMetricRuleTargets.TargetsProperty]]]:
        """
        :Property: targets: undefined
        """
        result = self._values.get("targets")
        assert result is not None, "Required property 'targets' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosMetricRuleTargetsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosMetricRuleTemplate(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.RosMetricRuleTemplate",
):
    """A ROS template type:  ``ALIYUN::CMS::MetricRuleTemplate``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosMetricRuleTemplateProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::CMS::MetricRuleTemplate``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosMetricRuleTemplate, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrId")
    def attr_id(self) -> typing.Any:
        """
        :Attribute: Id: Alarm template ID.
        """
        return jsii.get(self, "attrId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="name")
    def name(self) -> builtins.str:
        """
        :Property: name: The name of the alert template.
        """
        return jsii.get(self, "name")

    @name.setter # type: ignore
    def name(self, value: builtins.str) -> None:
        jsii.set(self, "name", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="alertTemplates")
    def alert_templates(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosMetricRuleTemplate.AlertTemplatesProperty"]]]]:
        """
        :Property: alertTemplates: Valid values of N: 0 to 200.
        """
        return jsii.get(self, "alertTemplates")

    @alert_templates.setter # type: ignore
    def alert_templates(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosMetricRuleTemplate.AlertTemplatesProperty"]]]],
    ) -> None:
        jsii.set(self, "alertTemplates", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: The description of the alert template.
        """
        return jsii.get(self, "description")

    @description.setter # type: ignore
    def description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="restVersion")
    def rest_version(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        restVersion: The version of the alert template. Call DescribeMetricRuleTemplateList or DescribeMetricRuleTemplateAttribute
        to obtain information about the alert templates. The combination of version and ID
        uniquely identifies an alert template.
        """
        return jsii.get(self, "restVersion")

    @rest_version.setter # type: ignore
    def rest_version(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "restVersion", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="templateId")
    def template_id(self) -> typing.Optional[jsii.Number]:
        """
        :Property: templateId: The ID of the alert template.
        """
        return jsii.get(self, "templateId")

    @template_id.setter # type: ignore
    def template_id(self, value: typing.Optional[jsii.Number]) -> None:
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
            category: builtins.str,
            metric_name: builtins.str,
            namespace: builtins.str,
            rule_name: builtins.str,
            escalations: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosMetricRuleTemplate.EscalationsProperty"]] = None,
            period: typing.Optional[jsii.Number] = None,
            selector: typing.Optional[builtins.str] = None,
            webhook: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param category: 
            :param metric_name: 
            :param namespace: 
            :param rule_name: 
            :param escalations: 
            :param period: 
            :param selector: 
            :param webhook: 
            """
            self._values: typing.Dict[str, typing.Any] = {
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
        def category(self) -> builtins.str:
            """
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
            """
            result = self._values.get("category")
            assert result is not None, "Required property 'category' is missing"
            return result

        @builtins.property
        def metric_name(self) -> builtins.str:
            """
            :Property:

            metricName: The name of the metric.
            Note For more information, see DescribeMetricMetaList or Appendix 1: Metrics.
            """
            result = self._values.get("metric_name")
            assert result is not None, "Required property 'metric_name' is missing"
            return result

        @builtins.property
        def namespace(self) -> builtins.str:
            """
            :Property:

            namespace: The namespace of the service.
            Note For more information, see DescribeMetricMetaList or Appendix 1: Metrics.
            """
            result = self._values.get("namespace")
            assert result is not None, "Required property 'namespace' is missing"
            return result

        @builtins.property
        def rule_name(self) -> builtins.str:
            """
            :Property: ruleName: The name of the alert rule.
            """
            result = self._values.get("rule_name")
            assert result is not None, "Required property 'rule_name' is missing"
            return result

        @builtins.property
        def escalations(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosMetricRuleTemplate.EscalationsProperty"]]:
            """
            :Property: escalations: undefined
            """
            result = self._values.get("escalations")
            return result

        @builtins.property
        def period(self) -> typing.Optional[jsii.Number]:
            """
            :Property:

            period: The aggregation period of the monitoring data. Unit: seconds.
            The default value is the lowest frequency at which the metric is polled. Typically,
            you do not need to specify the aggregation period.
            """
            result = self._values.get("period")
            return result

        @builtins.property
        def selector(self) -> typing.Optional[builtins.str]:
            """
            :Property: selector: The dimension of the alert. It is an extended field.
            """
            result = self._values.get("selector")
            return result

        @builtins.property
        def webhook(self) -> typing.Optional[builtins.str]:
            """
            :Property:

            webhook: The callback URL to which a POST request is sent when an alert is triggered based
            on the alert rule.
            """
            result = self._values.get("webhook")
            return result

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
            comparison_operator: builtins.str,
            statistics: builtins.str,
            threshold: builtins.str,
            times: jsii.Number,
        ) -> None:
            """
            :param comparison_operator: 
            :param statistics: 
            :param threshold: 
            :param times: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "comparison_operator": comparison_operator,
                "statistics": statistics,
                "threshold": threshold,
                "times": times,
            }

        @builtins.property
        def comparison_operator(self) -> builtins.str:
            """
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
            """
            result = self._values.get("comparison_operator")
            assert result is not None, "Required property 'comparison_operator' is missing"
            return result

        @builtins.property
        def statistics(self) -> builtins.str:
            """
            :Property: statistics: The statistical method for alerts.
            """
            result = self._values.get("statistics")
            assert result is not None, "Required property 'statistics' is missing"
            return result

        @builtins.property
        def threshold(self) -> builtins.str:
            """
            :Property: threshold: The threshold for alerts.
            """
            result = self._values.get("threshold")
            assert result is not None, "Required property 'threshold' is missing"
            return result

        @builtins.property
        def times(self) -> jsii.Number:
            """
            :Property: times: The consecutive number of times for which the metric value is measured before a alert is triggered.
            """
            result = self._values.get("times")
            assert result is not None, "Required property 'times' is missing"
            return result

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
            critical: typing.Union[ros_cdk_core.IResolvable, "RosMetricRuleTemplate.CriticalProperty"],
            info: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosMetricRuleTemplate.InfoProperty"]] = None,
            warn: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosMetricRuleTemplate.WarnProperty"]] = None,
        ) -> None:
            """
            :param critical: 
            :param info: 
            :param warn: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "critical": critical,
            }
            if info is not None:
                self._values["info"] = info
            if warn is not None:
                self._values["warn"] = warn

        @builtins.property
        def critical(
            self,
        ) -> typing.Union[ros_cdk_core.IResolvable, "RosMetricRuleTemplate.CriticalProperty"]:
            """
            :Property: critical: undefined
            """
            result = self._values.get("critical")
            assert result is not None, "Required property 'critical' is missing"
            return result

        @builtins.property
        def info(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosMetricRuleTemplate.InfoProperty"]]:
            """
            :Property: info: undefined
            """
            result = self._values.get("info")
            return result

        @builtins.property
        def warn(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosMetricRuleTemplate.WarnProperty"]]:
            """
            :Property: warn: undefined
            """
            result = self._values.get("warn")
            return result

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
            comparison_operator: builtins.str,
            statistics: builtins.str,
            threshold: builtins.str,
            times: jsii.Number,
        ) -> None:
            """
            :param comparison_operator: 
            :param statistics: 
            :param threshold: 
            :param times: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "comparison_operator": comparison_operator,
                "statistics": statistics,
                "threshold": threshold,
                "times": times,
            }

        @builtins.property
        def comparison_operator(self) -> builtins.str:
            """
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
            """
            result = self._values.get("comparison_operator")
            assert result is not None, "Required property 'comparison_operator' is missing"
            return result

        @builtins.property
        def statistics(self) -> builtins.str:
            """
            :Property: statistics: The statistical method for alerts.
            """
            result = self._values.get("statistics")
            assert result is not None, "Required property 'statistics' is missing"
            return result

        @builtins.property
        def threshold(self) -> builtins.str:
            """
            :Property: threshold: The threshold for alerts.
            """
            result = self._values.get("threshold")
            assert result is not None, "Required property 'threshold' is missing"
            return result

        @builtins.property
        def times(self) -> jsii.Number:
            """
            :Property: times: The consecutive number of times for which the metric value is measured before a alert is triggered.
            """
            result = self._values.get("times")
            assert result is not None, "Required property 'times' is missing"
            return result

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
            comparison_operator: builtins.str,
            statistics: builtins.str,
            threshold: builtins.str,
            times: jsii.Number,
        ) -> None:
            """
            :param comparison_operator: 
            :param statistics: 
            :param threshold: 
            :param times: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "comparison_operator": comparison_operator,
                "statistics": statistics,
                "threshold": threshold,
                "times": times,
            }

        @builtins.property
        def comparison_operator(self) -> builtins.str:
            """
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
            """
            result = self._values.get("comparison_operator")
            assert result is not None, "Required property 'comparison_operator' is missing"
            return result

        @builtins.property
        def statistics(self) -> builtins.str:
            """
            :Property: statistics: The statistical method for alerts.
            """
            result = self._values.get("statistics")
            assert result is not None, "Required property 'statistics' is missing"
            return result

        @builtins.property
        def threshold(self) -> builtins.str:
            """
            :Property: threshold: The threshold for alerts.
            """
            result = self._values.get("threshold")
            assert result is not None, "Required property 'threshold' is missing"
            return result

        @builtins.property
        def times(self) -> jsii.Number:
            """
            :Property: times: The consecutive number of times for which the metric value is measured before a alert is triggered.
            """
            result = self._values.get("times")
            assert result is not None, "Required property 'times' is missing"
            return result

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
        name: builtins.str,
        alert_templates: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosMetricRuleTemplate.AlertTemplatesProperty]]]] = None,
        description: typing.Optional[builtins.str] = None,
        rest_version: typing.Optional[jsii.Number] = None,
        template_id: typing.Optional[jsii.Number] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::CMS::MetricRuleTemplate``.

        :param name: 
        :param alert_templates: 
        :param description: 
        :param rest_version: 
        :param template_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
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
    def name(self) -> builtins.str:
        """
        :Property: name: The name of the alert template.
        """
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return result

    @builtins.property
    def alert_templates(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosMetricRuleTemplate.AlertTemplatesProperty]]]]:
        """
        :Property: alertTemplates: Valid values of N: 0 to 200.
        """
        result = self._values.get("alert_templates")
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: The description of the alert template.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def rest_version(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        restVersion: The version of the alert template. Call DescribeMetricRuleTemplateList or DescribeMetricRuleTemplateAttribute
        to obtain information about the alert templates. The combination of version and ID
        uniquely identifies an alert template.
        """
        result = self._values.get("rest_version")
        return result

    @builtins.property
    def template_id(self) -> typing.Optional[jsii.Number]:
        """
        :Property: templateId: The ID of the alert template.
        """
        result = self._values.get("template_id")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosMetricRuleTemplateProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosMonitorGroup(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.RosMonitorGroup",
):
    """A ROS template type:  ``ALIYUN::CMS::MonitorGroup``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosMonitorGroupProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::CMS::MonitorGroup``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosMonitorGroup, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(self) -> typing.Any:
        """
        :Attribute: GroupId: Application group ID generated after the group is created.
        """
        return jsii.get(self, "attrGroupId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="groupName")
    def group_name(self) -> builtins.str:
        """
        :Property: groupName: The name of the application group.
        """
        return jsii.get(self, "groupName")

    @group_name.setter # type: ignore
    def group_name(self, value: builtins.str) -> None:
        jsii.set(self, "groupName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="contactGroups")
    def contact_groups(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        contactGroups: The alert contact group. Alert notifications for the application group are sent to
        the specified alert contact group.
        """
        return jsii.get(self, "contactGroups")

    @contact_groups.setter # type: ignore
    def contact_groups(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "contactGroups", value)


class RosMonitorGroupInstances(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.RosMonitorGroupInstances",
):
    """A ROS template type:  ``ALIYUN::CMS::MonitorGroupInstances``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosMonitorGroupInstancesProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::CMS::MonitorGroupInstances``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosMonitorGroupInstances, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(self) -> typing.Any:
        """
        :Attribute: GroupId: The ID of the application group.
        """
        return jsii.get(self, "attrGroupId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="groupId")
    def group_id(self) -> jsii.Number:
        """
        :Property: groupId: The ID of the application group.
        """
        return jsii.get(self, "groupId")

    @group_id.setter # type: ignore
    def group_id(self, value: jsii.Number) -> None:
        jsii.set(self, "groupId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instances")
    def instances(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosMonitorGroupInstances.InstancesProperty"]]]:
        """
        :Property: instances:
        """
        return jsii.get(self, "instances")

    @instances.setter # type: ignore
    def instances(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosMonitorGroupInstances.InstancesProperty"]]],
    ) -> None:
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
            category: builtins.str,
            instance_id: builtins.str,
            instance_name: builtins.str,
            region_id: builtins.str,
        ) -> None:
            """
            :param category: 
            :param instance_id: 
            :param instance_name: 
            :param region_id: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "category": category,
                "instance_id": instance_id,
                "instance_name": instance_name,
                "region_id": region_id,
            }

        @builtins.property
        def category(self) -> builtins.str:
            """
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
            """
            result = self._values.get("category")
            assert result is not None, "Required property 'category' is missing"
            return result

        @builtins.property
        def instance_id(self) -> builtins.str:
            """
            :Property: instanceId: The ID of the resource instance.
            """
            result = self._values.get("instance_id")
            assert result is not None, "Required property 'instance_id' is missing"
            return result

        @builtins.property
        def instance_name(self) -> builtins.str:
            """
            :Property: instanceName: The name of the instance.
            """
            result = self._values.get("instance_name")
            assert result is not None, "Required property 'instance_name' is missing"
            return result

        @builtins.property
        def region_id(self) -> builtins.str:
            """
            :Property: regionId: The ID of the region where the instance is deployed, such as cn-hangzhou.
            """
            result = self._values.get("region_id")
            assert result is not None, "Required property 'region_id' is missing"
            return result

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
        group_id: jsii.Number,
        instances: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosMonitorGroupInstances.InstancesProperty]]],
    ) -> None:
        """Properties for defining a ``ALIYUN::CMS::MonitorGroupInstances``.

        :param group_id: 
        :param instances: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "group_id": group_id,
            "instances": instances,
        }

    @builtins.property
    def group_id(self) -> jsii.Number:
        """
        :Property: groupId: The ID of the application group.
        """
        result = self._values.get("group_id")
        assert result is not None, "Required property 'group_id' is missing"
        return result

    @builtins.property
    def instances(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosMonitorGroupInstances.InstancesProperty]]]:
        """
        :Property: instances:
        """
        result = self._values.get("instances")
        assert result is not None, "Required property 'instances' is missing"
        return result

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
        group_name: builtins.str,
        contact_groups: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::CMS::MonitorGroup``.

        :param group_name: 
        :param contact_groups: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "group_name": group_name,
        }
        if contact_groups is not None:
            self._values["contact_groups"] = contact_groups

    @builtins.property
    def group_name(self) -> builtins.str:
        """
        :Property: groupName: The name of the application group.
        """
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return result

    @builtins.property
    def contact_groups(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        contactGroups: The alert contact group. Alert notifications for the application group are sent to
        the specified alert contact group.
        """
        result = self._values.get("contact_groups")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosMonitorGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosMonitoringAgentProcess(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.RosMonitoringAgentProcess",
):
    """A ROS template type:  ``ALIYUN::CMS::MonitoringAgentProcess``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosMonitoringAgentProcessProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::CMS::MonitoringAgentProcess``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosMonitoringAgentProcess, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrId")
    def attr_id(self) -> typing.Any:
        """
        :Attribute: Id: The process ID.
        """
        return jsii.get(self, "attrId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instanceId")
    def instance_id(self) -> builtins.str:
        """
        :Property: instanceId: The ID of the instance.
        """
        return jsii.get(self, "instanceId")

    @instance_id.setter # type: ignore
    def instance_id(self, value: builtins.str) -> None:
        jsii.set(self, "instanceId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="processName")
    def process_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: processName: The name of the process.
        """
        return jsii.get(self, "processName")

    @process_name.setter # type: ignore
    def process_name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "processName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="processUser")
    def process_user(self) -> typing.Optional[builtins.str]:
        """
        :Property: processUser: The user who launched the process.
        """
        return jsii.get(self, "processUser")

    @process_user.setter # type: ignore
    def process_user(self, value: typing.Optional[builtins.str]) -> None:
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
        instance_id: builtins.str,
        process_name: typing.Optional[builtins.str] = None,
        process_user: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::CMS::MonitoringAgentProcess``.

        :param instance_id: 
        :param process_name: 
        :param process_user: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "instance_id": instance_id,
        }
        if process_name is not None:
            self._values["process_name"] = process_name
        if process_user is not None:
            self._values["process_user"] = process_user

    @builtins.property
    def instance_id(self) -> builtins.str:
        """
        :Property: instanceId: The ID of the instance.
        """
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return result

    @builtins.property
    def process_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: processName: The name of the process.
        """
        result = self._values.get("process_name")
        return result

    @builtins.property
    def process_user(self) -> typing.Optional[builtins.str]:
        """
        :Property: processUser: The user who launched the process.
        """
        result = self._values.get("process_user")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosMonitoringAgentProcessProps(%s)" % ", ".join(
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
]

publication.publish()
