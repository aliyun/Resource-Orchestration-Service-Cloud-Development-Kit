'''
## Aliyun ROS CONFIG Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as CONFIG from '@alicloud/ros-cdk-config';
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


class CompliancePack(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-config.CompliancePack",
):
    '''A ROS resource type:  ``ALIYUN::Config::CompliancePack``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "CompliancePackProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::Config::CompliancePack``.

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
    @jsii.member(jsii_name="attrAccountId")
    def attr_account_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute AccountId: Aliyun User Id.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAccountId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCompliancePackId")
    def attr_compliance_pack_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute CompliancePackId: Compliance Package ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCompliancePackId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCompliancePackName")
    def attr_compliance_pack_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute CompliancePackName: Compliance Package Name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCompliancePackName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCompliancePackTemplateId")
    def attr_compliance_pack_template_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute CompliancePackTemplateId: Compliance Package Template Id.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCompliancePackTemplateId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> ros_cdk_core.IResolvable:
        '''Attribute Description: Description.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRiskLevel")
    def attr_risk_level(self) -> ros_cdk_core.IResolvable:
        '''Attribute RiskLevel: Ris Level.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRiskLevel"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-config.CompliancePackProps",
    jsii_struct_bases=[],
    name_mapping={
        "compliance_pack_name": "compliancePackName",
        "description": "description",
        "risk_level": "riskLevel",
        "compliance_pack_template_id": "compliancePackTemplateId",
        "config_rules": "configRules",
    },
)
class CompliancePackProps:
    def __init__(
        self,
        *,
        compliance_pack_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        risk_level: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        compliance_pack_template_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        config_rules: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosCompliancePack.ConfigRulesProperty"]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::Config::CompliancePack``.

        :param compliance_pack_name: Property compliancePackName: Compliance Package Name.
        :param description: Property description: Description.
        :param risk_level: Property riskLevel: Ris Level.
        :param compliance_pack_template_id: Property compliancePackTemplateId: Compliance Package Template Id.
        :param config_rules: Property configRules: Config Rule List.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "compliance_pack_name": compliance_pack_name,
            "description": description,
            "risk_level": risk_level,
        }
        if compliance_pack_template_id is not None:
            self._values["compliance_pack_template_id"] = compliance_pack_template_id
        if config_rules is not None:
            self._values["config_rules"] = config_rules

    @builtins.property
    def compliance_pack_name(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property compliancePackName: Compliance Package Name.'''
        result = self._values.get("compliance_pack_name")
        assert result is not None, "Required property 'compliance_pack_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property description: Description.'''
        result = self._values.get("description")
        assert result is not None, "Required property 'description' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def risk_level(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property riskLevel: Ris Level.'''
        result = self._values.get("risk_level")
        assert result is not None, "Required property 'risk_level' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def compliance_pack_template_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property compliancePackTemplateId: Compliance Package Template Id.'''
        result = self._values.get("compliance_pack_template_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def config_rules(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCompliancePack.ConfigRulesProperty"]]]]:
        '''Property configRules: Config Rule List.'''
        result = self._values.get("config_rules")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCompliancePack.ConfigRulesProperty"]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "CompliancePackProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class DeliveryChannel(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-config.DeliveryChannel",
):
    '''A ROS resource type:  ``ALIYUN::Config::DeliveryChannel``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "DeliveryChannelProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::Config::DeliveryChannel``.

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
    @jsii.member(jsii_name="attrDeliveryChannelId")
    def attr_delivery_channel_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute DeliveryChannelId: The ID of the delivery method.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDeliveryChannelId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-config.DeliveryChannelProps",
    jsii_struct_bases=[],
    name_mapping={
        "delivery_channel_assume_role_arn": "deliveryChannelAssumeRoleArn",
        "delivery_channel_target_arn": "deliveryChannelTargetArn",
        "delivery_channel_type": "deliveryChannelType",
        "delivery_channel_condition": "deliveryChannelCondition",
        "delivery_channel_name": "deliveryChannelName",
        "description": "description",
    },
)
class DeliveryChannelProps:
    def __init__(
        self,
        *,
        delivery_channel_assume_role_arn: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        delivery_channel_target_arn: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        delivery_channel_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        delivery_channel_condition: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        delivery_channel_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::Config::DeliveryChannel``.

        :param delivery_channel_assume_role_arn: Property deliveryChannelAssumeRoleArn: The Alibaba Cloud Resource Name (ARN) of the role to be assumed by the delivery method. This parameter is required when you create a delivery method. Note If the delivery method assumes the service linked role for Cloud Config, you can specify the ARN in the format of the provided example and replace the account ID with the ID of your Alibaba Cloud account.
        :param delivery_channel_target_arn: Property deliveryChannelTargetArn: The ARN of the delivery destination. This parameter is required when you create a delivery method. The value must be in one of the following formats: acs:oss:{RegionId}:{Aliuid}:{bucketName} if your delivery destination is an Object Storage Service (OSS) bucket. acs:mns:{RegionId}:{Aliuid}:/topics/{topicName} if your delivery destination is a Message Service (MNS) topic. acs:log:{RegionId}:{Aliuid}:project/{projectName}/logstore/{logstoreName} if your delivery destination is a Log Service Logstore.
        :param delivery_channel_type: Property deliveryChannelType: The type of the delivery method. This parameter is required when you create a delivery method. Valid values: OSS MNS SLS
        :param delivery_channel_condition: Property deliveryChannelCondition: The rule attached to the delivery method. This parameter is applicable only to delivery methods of the MNS type. This parameter allows you to specify the lowest risk level for the events to subscribe to and the resource types for which you want to subscribe to events. To specify the lowest risk level for the events to subscribe to, use the following format:{"filterType":"RuleRiskLevel","value":"1","multiple":false}. The value field indicates the lowest risk level and can be set to 1, 2, or 3, which indicates the high risk level, the medium risk level, and the low risk level, respectively. To specify the resource types for which you want to subscribe to events, use the following format:{"filterType":"ResourceType","values":["ACS::ACK::Cluster","ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage"],"multiple":true}. The values field indicates the resource types. Its value is a JSON array. Example: [{"filterType":"ResourceType","values":["ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage","ACS::CDN::Domain","ACS::CEN::CenBandwidthPackage","ACS::CEN::CenInstance","ACS::CEN::Flowlog","ACS::DdosCoo::Instance"],"multiple":true}]
        :param delivery_channel_name: Property deliveryChannelName: The name of the delivery method.
        :param description: Property description: The description of the delivery method.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "delivery_channel_assume_role_arn": delivery_channel_assume_role_arn,
            "delivery_channel_target_arn": delivery_channel_target_arn,
            "delivery_channel_type": delivery_channel_type,
        }
        if delivery_channel_condition is not None:
            self._values["delivery_channel_condition"] = delivery_channel_condition
        if delivery_channel_name is not None:
            self._values["delivery_channel_name"] = delivery_channel_name
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def delivery_channel_assume_role_arn(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property deliveryChannelAssumeRoleArn: The Alibaba Cloud Resource Name (ARN) of the role to be assumed by the delivery method.

        This parameter is required when you create a delivery method.
        Note If the delivery method assumes the service linked role for Cloud Config, you can specify
        the ARN in the format of the provided example and replace the account ID with the
        ID of your Alibaba Cloud account.
        '''
        result = self._values.get("delivery_channel_assume_role_arn")
        assert result is not None, "Required property 'delivery_channel_assume_role_arn' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def delivery_channel_target_arn(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property deliveryChannelTargetArn: The ARN of the delivery destination.

        This parameter is required when you create a
        delivery method. The value must be in one of the following formats:
        acs:oss:{RegionId}:{Aliuid}:{bucketName} if your delivery destination is an Object Storage Service (OSS) bucket.
        acs:mns:{RegionId}:{Aliuid}:/topics/{topicName} if your delivery destination is a Message Service (MNS) topic.
        acs:log:{RegionId}:{Aliuid}:project/{projectName}/logstore/{logstoreName} if your delivery destination is a Log Service Logstore.
        '''
        result = self._values.get("delivery_channel_target_arn")
        assert result is not None, "Required property 'delivery_channel_target_arn' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def delivery_channel_type(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property deliveryChannelType: The type of the delivery method.

        This parameter is required when you create a delivery
        method. Valid values:
        OSS
        MNS
        SLS
        '''
        result = self._values.get("delivery_channel_type")
        assert result is not None, "Required property 'delivery_channel_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def delivery_channel_condition(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property deliveryChannelCondition: The rule attached to the delivery method.

        This parameter is applicable only to delivery
        methods of the MNS type.
        This parameter allows you to specify the lowest risk level for the events to subscribe
        to and the resource types for which you want to subscribe to events.
        To specify the lowest risk level for the events to subscribe to, use the following
        format:{"filterType":"RuleRiskLevel","value":"1","multiple":false}.
        The value field indicates the lowest risk level and can be set to 1, 2, or 3, which
        indicates the high risk level, the medium risk level, and the low risk level, respectively.
        To specify the resource types for which you want to subscribe to events, use the following
        format:{"filterType":"ResourceType","values":["ACS::ACK::Cluster","ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage"],"multiple":true}.
        The values field indicates the resource types. Its value is a JSON array.
        Example: [{"filterType":"ResourceType","values":["ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage","ACS::CDN::Domain","ACS::CEN::CenBandwidthPackage","ACS::CEN::CenInstance","ACS::CEN::Flowlog","ACS::DdosCoo::Instance"],"multiple":true}]
        '''
        result = self._values.get("delivery_channel_condition")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def delivery_channel_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property deliveryChannelName: The name of the delivery method.'''
        result = self._values.get("delivery_channel_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: The description of the delivery method.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DeliveryChannelProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCompliancePack(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-config.RosCompliancePack",
):
    '''A ROS template type:  ``ALIYUN::Config::CompliancePack``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosCompliancePackProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::Config::CompliancePack``.

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
    @jsii.member(jsii_name="attrAccountId")
    def attr_account_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AccountId: Aliyun User Id
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAccountId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCompliancePackId")
    def attr_compliance_pack_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: CompliancePackId: Compliance Package ID
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCompliancePackId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCompliancePackName")
    def attr_compliance_pack_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: CompliancePackName: Compliance Package Name
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCompliancePackName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCompliancePackTemplateId")
    def attr_compliance_pack_template_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: CompliancePackTemplateId: Compliance Package Template Id
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCompliancePackTemplateId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Description: Description
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRiskLevel")
    def attr_risk_level(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: RiskLevel: Ris Level
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRiskLevel"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="compliancePackName")
    def compliance_pack_name(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: compliancePackName: Compliance Package Name
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "compliancePackName"))

    @compliance_pack_name.setter
    def compliance_pack_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "compliancePackName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: description: Description
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="riskLevel")
    def risk_level(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: riskLevel: Ris Level
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "riskLevel"))

    @risk_level.setter
    def risk_level(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "riskLevel", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="compliancePackTemplateId")
    def compliance_pack_template_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: compliancePackTemplateId: Compliance Package Template Id
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "compliancePackTemplateId"))

    @compliance_pack_template_id.setter
    def compliance_pack_template_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "compliancePackTemplateId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="configRules")
    def config_rules(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCompliancePack.ConfigRulesProperty"]]]]:
        '''
        :Property: configRules: Config Rule List
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCompliancePack.ConfigRulesProperty"]]]], jsii.get(self, "configRules"))

    @config_rules.setter
    def config_rules(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCompliancePack.ConfigRulesProperty"]]]],
    ) -> None:
        jsii.set(self, "configRules", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-config.RosCompliancePack.ConfigRuleParametersProperty",
        jsii_struct_bases=[],
        name_mapping={
            "parameter_name": "parameterName",
            "parameter_value": "parameterValue",
            "required": "required",
        },
    )
    class ConfigRuleParametersProperty:
        def __init__(
            self,
            *,
            parameter_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            parameter_value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            required: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param parameter_name: 
            :param parameter_value: 
            :param required: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if parameter_name is not None:
                self._values["parameter_name"] = parameter_name
            if parameter_value is not None:
                self._values["parameter_value"] = parameter_value
            if required is not None:
                self._values["required"] = required

        @builtins.property
        def parameter_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: parameterName: Parameter Name
            '''
            result = self._values.get("parameter_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def parameter_value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: parameterValue: Parameter Value
            '''
            result = self._values.get("parameter_value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def required(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: required: Required
            '''
            result = self._values.get("required")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ConfigRuleParametersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-config.RosCompliancePack.ConfigRulesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "config_rule_id": "configRuleId",
            "config_rule_name": "configRuleName",
            "config_rule_parameters": "configRuleParameters",
            "managed_rule_identifier": "managedRuleIdentifier",
        },
    )
    class ConfigRulesProperty:
        def __init__(
            self,
            *,
            config_rule_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            config_rule_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            config_rule_parameters: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosCompliancePack.ConfigRuleParametersProperty"]]]] = None,
            managed_rule_identifier: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param config_rule_id: 
            :param config_rule_name: 
            :param config_rule_parameters: 
            :param managed_rule_identifier: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if config_rule_id is not None:
                self._values["config_rule_id"] = config_rule_id
            if config_rule_name is not None:
                self._values["config_rule_name"] = config_rule_name
            if config_rule_parameters is not None:
                self._values["config_rule_parameters"] = config_rule_parameters
            if managed_rule_identifier is not None:
                self._values["managed_rule_identifier"] = managed_rule_identifier

        @builtins.property
        def config_rule_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: configRuleId: Config Rule Id
            '''
            result = self._values.get("config_rule_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def config_rule_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: configRuleName: Config Rule Name
            '''
            result = self._values.get("config_rule_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def config_rule_parameters(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCompliancePack.ConfigRuleParametersProperty"]]]]:
            '''
            :Property: configRuleParameters: Config Rule Parameter List
            '''
            result = self._values.get("config_rule_parameters")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCompliancePack.ConfigRuleParametersProperty"]]]], result)

        @builtins.property
        def managed_rule_identifier(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: managedRuleIdentifier: Managed Rule Identifier
            '''
            result = self._values.get("managed_rule_identifier")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ConfigRulesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-config.RosCompliancePackProps",
    jsii_struct_bases=[],
    name_mapping={
        "compliance_pack_name": "compliancePackName",
        "description": "description",
        "risk_level": "riskLevel",
        "compliance_pack_template_id": "compliancePackTemplateId",
        "config_rules": "configRules",
    },
)
class RosCompliancePackProps:
    def __init__(
        self,
        *,
        compliance_pack_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        risk_level: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        compliance_pack_template_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        config_rules: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosCompliancePack.ConfigRulesProperty]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::Config::CompliancePack``.

        :param compliance_pack_name: 
        :param description: 
        :param risk_level: 
        :param compliance_pack_template_id: 
        :param config_rules: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "compliance_pack_name": compliance_pack_name,
            "description": description,
            "risk_level": risk_level,
        }
        if compliance_pack_template_id is not None:
            self._values["compliance_pack_template_id"] = compliance_pack_template_id
        if config_rules is not None:
            self._values["config_rules"] = config_rules

    @builtins.property
    def compliance_pack_name(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: compliancePackName: Compliance Package Name
        '''
        result = self._values.get("compliance_pack_name")
        assert result is not None, "Required property 'compliance_pack_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: description: Description
        '''
        result = self._values.get("description")
        assert result is not None, "Required property 'description' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def risk_level(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: riskLevel: Ris Level
        '''
        result = self._values.get("risk_level")
        assert result is not None, "Required property 'risk_level' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def compliance_pack_template_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: compliancePackTemplateId: Compliance Package Template Id
        '''
        result = self._values.get("compliance_pack_template_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def config_rules(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosCompliancePack.ConfigRulesProperty]]]]:
        '''
        :Property: configRules: Config Rule List
        '''
        result = self._values.get("config_rules")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosCompliancePack.ConfigRulesProperty]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosCompliancePackProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDeliveryChannel(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-config.RosDeliveryChannel",
):
    '''A ROS template type:  ``ALIYUN::Config::DeliveryChannel``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDeliveryChannelProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::Config::DeliveryChannel``.

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
    @jsii.member(jsii_name="attrDeliveryChannelId")
    def attr_delivery_channel_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DeliveryChannelId: The ID of the delivery method.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDeliveryChannelId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="deliveryChannelAssumeRoleArn")
    def delivery_channel_assume_role_arn(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        deliveryChannelAssumeRoleArn: The Alibaba Cloud Resource Name (ARN) of the role to be assumed by the delivery method.
        This parameter is required when you create a delivery method.
        Note If the delivery method assumes the service linked role for Cloud Config, you can specify
        the ARN in the format of the provided example and replace the account ID with the
        ID of your Alibaba Cloud account.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "deliveryChannelAssumeRoleArn"))

    @delivery_channel_assume_role_arn.setter
    def delivery_channel_assume_role_arn(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "deliveryChannelAssumeRoleArn", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="deliveryChannelTargetArn")
    def delivery_channel_target_arn(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        deliveryChannelTargetArn: The ARN of the delivery destination. This parameter is required when you create a
        delivery method. The value must be in one of the following formats:
        acs:oss:{RegionId}:{Aliuid}:{bucketName} if your delivery destination is an Object Storage Service (OSS) bucket.
        acs:mns:{RegionId}:{Aliuid}:/topics/{topicName} if your delivery destination is a Message Service (MNS) topic.
        acs:log:{RegionId}:{Aliuid}:project/{projectName}/logstore/{logstoreName} if your delivery destination is a Log Service Logstore.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "deliveryChannelTargetArn"))

    @delivery_channel_target_arn.setter
    def delivery_channel_target_arn(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "deliveryChannelTargetArn", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="deliveryChannelType")
    def delivery_channel_type(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        deliveryChannelType: The type of the delivery method. This parameter is required when you create a delivery
        method. Valid values:
        OSS
        MNS
        SLS
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "deliveryChannelType"))

    @delivery_channel_type.setter
    def delivery_channel_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "deliveryChannelType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="deliveryChannelCondition")
    def delivery_channel_condition(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        deliveryChannelCondition: The rule attached to the delivery method. This parameter is applicable only to delivery
        methods of the MNS type.
        This parameter allows you to specify the lowest risk level for the events to subscribe
        to and the resource types for which you want to subscribe to events.
        To specify the lowest risk level for the events to subscribe to, use the following
        format:{"filterType":"RuleRiskLevel","value":"1","multiple":false}.
        The value field indicates the lowest risk level and can be set to 1, 2, or 3, which
        indicates the high risk level, the medium risk level, and the low risk level, respectively.
        To specify the resource types for which you want to subscribe to events, use the following
        format:{"filterType":"ResourceType","values":["ACS::ACK::Cluster","ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage"],"multiple":true}.
        The values field indicates the resource types. Its value is a JSON array.
        Example: [{"filterType":"ResourceType","values":["ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage","ACS::CDN::Domain","ACS::CEN::CenBandwidthPackage","ACS::CEN::CenInstance","ACS::CEN::Flowlog","ACS::DdosCoo::Instance"],"multiple":true}]
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "deliveryChannelCondition"))

    @delivery_channel_condition.setter
    def delivery_channel_condition(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "deliveryChannelCondition", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="deliveryChannelName")
    def delivery_channel_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: deliveryChannelName: The name of the delivery method.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "deliveryChannelName"))

    @delivery_channel_name.setter
    def delivery_channel_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "deliveryChannelName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: The description of the delivery method.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-config.RosDeliveryChannelProps",
    jsii_struct_bases=[],
    name_mapping={
        "delivery_channel_assume_role_arn": "deliveryChannelAssumeRoleArn",
        "delivery_channel_target_arn": "deliveryChannelTargetArn",
        "delivery_channel_type": "deliveryChannelType",
        "delivery_channel_condition": "deliveryChannelCondition",
        "delivery_channel_name": "deliveryChannelName",
        "description": "description",
    },
)
class RosDeliveryChannelProps:
    def __init__(
        self,
        *,
        delivery_channel_assume_role_arn: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        delivery_channel_target_arn: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        delivery_channel_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        delivery_channel_condition: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        delivery_channel_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::Config::DeliveryChannel``.

        :param delivery_channel_assume_role_arn: 
        :param delivery_channel_target_arn: 
        :param delivery_channel_type: 
        :param delivery_channel_condition: 
        :param delivery_channel_name: 
        :param description: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "delivery_channel_assume_role_arn": delivery_channel_assume_role_arn,
            "delivery_channel_target_arn": delivery_channel_target_arn,
            "delivery_channel_type": delivery_channel_type,
        }
        if delivery_channel_condition is not None:
            self._values["delivery_channel_condition"] = delivery_channel_condition
        if delivery_channel_name is not None:
            self._values["delivery_channel_name"] = delivery_channel_name
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def delivery_channel_assume_role_arn(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        deliveryChannelAssumeRoleArn: The Alibaba Cloud Resource Name (ARN) of the role to be assumed by the delivery method.
        This parameter is required when you create a delivery method.
        Note If the delivery method assumes the service linked role for Cloud Config, you can specify
        the ARN in the format of the provided example and replace the account ID with the
        ID of your Alibaba Cloud account.
        '''
        result = self._values.get("delivery_channel_assume_role_arn")
        assert result is not None, "Required property 'delivery_channel_assume_role_arn' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def delivery_channel_target_arn(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        deliveryChannelTargetArn: The ARN of the delivery destination. This parameter is required when you create a
        delivery method. The value must be in one of the following formats:
        acs:oss:{RegionId}:{Aliuid}:{bucketName} if your delivery destination is an Object Storage Service (OSS) bucket.
        acs:mns:{RegionId}:{Aliuid}:/topics/{topicName} if your delivery destination is a Message Service (MNS) topic.
        acs:log:{RegionId}:{Aliuid}:project/{projectName}/logstore/{logstoreName} if your delivery destination is a Log Service Logstore.
        '''
        result = self._values.get("delivery_channel_target_arn")
        assert result is not None, "Required property 'delivery_channel_target_arn' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def delivery_channel_type(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        deliveryChannelType: The type of the delivery method. This parameter is required when you create a delivery
        method. Valid values:
        OSS
        MNS
        SLS
        '''
        result = self._values.get("delivery_channel_type")
        assert result is not None, "Required property 'delivery_channel_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def delivery_channel_condition(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        deliveryChannelCondition: The rule attached to the delivery method. This parameter is applicable only to delivery
        methods of the MNS type.
        This parameter allows you to specify the lowest risk level for the events to subscribe
        to and the resource types for which you want to subscribe to events.
        To specify the lowest risk level for the events to subscribe to, use the following
        format:{"filterType":"RuleRiskLevel","value":"1","multiple":false}.
        The value field indicates the lowest risk level and can be set to 1, 2, or 3, which
        indicates the high risk level, the medium risk level, and the low risk level, respectively.
        To specify the resource types for which you want to subscribe to events, use the following
        format:{"filterType":"ResourceType","values":["ACS::ACK::Cluster","ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage"],"multiple":true}.
        The values field indicates the resource types. Its value is a JSON array.
        Example: [{"filterType":"ResourceType","values":["ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage","ACS::CDN::Domain","ACS::CEN::CenBandwidthPackage","ACS::CEN::CenInstance","ACS::CEN::Flowlog","ACS::DdosCoo::Instance"],"multiple":true}]
        '''
        result = self._values.get("delivery_channel_condition")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def delivery_channel_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: deliveryChannelName: The name of the delivery method.
        '''
        result = self._values.get("delivery_channel_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: The description of the delivery method.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDeliveryChannelProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosRule(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-config.RosRule",
):
    '''A ROS template type:  ``ALIYUN::Config::Rule``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosRuleProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::Config::Rule``.

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
    @jsii.member(jsii_name="attrConfigRuleArn")
    def attr_config_rule_arn(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ConfigRuleArn: config rule arn
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrConfigRuleArn"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrConfigRuleId")
    def attr_config_rule_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ConfigRuleId: The ID of the rule
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrConfigRuleId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrConfigRuleTriggerTypes")
    def attr_config_rule_trigger_types(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ConfigRuleTriggerTypes: The trigger type of the rule. Valid values:  ConfigurationItemChangeNotification: The rule is triggered upon configuration changes. ScheduledNotification: The rule is triggered as scheduled.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrConfigRuleTriggerTypes"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Description: The description of the rule
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrEventSource")
    def attr_event_source(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: EventSource: The event source of the rule.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEventSource"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrExcludeResourceIdsScope")
    def attr_exclude_resource_ids_scope(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ExcludeResourceIdsScope: The rule monitors excluded resource IDs, multiple of which are separated by commas, only applies to rules created based on managed rules, , custom rule this field is empty
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrExcludeResourceIdsScope"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInputParameters")
    def attr_input_parameters(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InputParameters: The settings of the input parameters for the rule
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInputParameters"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrMaximumExecutionFrequency")
    def attr_maximum_execution_frequency(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: MaximumExecutionFrequency: The frequency of the compliance evaluations. Valid values:  One_Hour Three_Hours Six_Hours Twelve_Hours TwentyFour_Hours
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMaximumExecutionFrequency"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRegionIdsScope")
    def attr_region_ids_scope(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: RegionIdsScope: The rule monitors region IDs, separated by commas, only applies to rules created based on managed rules
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRegionIdsScope"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResourceGroupIdsScope")
    def attr_resource_group_ids_scope(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ResourceGroupIdsScope: The rule monitors resource group IDs, separated by commas, only applies to rules created based on managed rules
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceGroupIdsScope"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResourceTypesScope")
    def attr_resource_types_scope(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ResourceTypesScope: The types of the resources to be evaluated against the rule
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceTypesScope"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRiskLevel")
    def attr_risk_level(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: RiskLevel: The risk level of the resources that are not compliant with the rule. Valid values:  1: critical 2: warning 3: info
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRiskLevel"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRuleName")
    def attr_rule_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: RuleName: The name of the rule.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRuleName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSourceIdentifier")
    def attr_source_identifier(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: SourceIdentifier: The identifier of the rule.  For a managed rule, the value is the name of the managed rule. For a custom rule, the value is the ARN of the custom rule
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSourceIdentifier"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSourceOwner")
    def attr_source_owner(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: SourceOwner: Specifies whether you or Alibaba Cloud owns and manages the rule. Valid values:  CUSTOM_FC: The rule is a custom rule and you own the rule. ALIYUN: The rule is a managed rule and Alibaba Cloud owns the rule
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSourceOwner"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTagKeyScope")
    def attr_tag_key_scope(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TagKeyScope: The rule monitors the tag key, only applies to rules created based on managed rules
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTagKeyScope"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTagValueScope")
    def attr_tag_value_scope(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TagValueScope: The rule monitors the tag value, only applies to rules created based on managed rules
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTagValueScope"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="configRuleTriggerTypes")
    def config_rule_trigger_types(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: configRuleTriggerTypes: The trigger type of the rule. Valid values:  ConfigurationItemChangeNotification: The rule is triggered upon configuration changes. ScheduledNotification: The rule is triggered as scheduled.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "configRuleTriggerTypes"))

    @config_rule_trigger_types.setter
    def config_rule_trigger_types(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "configRuleTriggerTypes", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="resourceTypesScope")
    def resource_types_scope(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]:
        '''
        :Property: resourceTypesScope: The types of the resources to be evaluated against the rule
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]], jsii.get(self, "resourceTypesScope"))

    @resource_types_scope.setter
    def resource_types_scope(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
    ) -> None:
        jsii.set(self, "resourceTypesScope", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="riskLevel")
    def risk_level(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: riskLevel: The risk level of the resources that are not compliant with the rule. Valid values:  1: critical 2: warning 3: info
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "riskLevel"))

    @risk_level.setter
    def risk_level(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "riskLevel", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="ruleName")
    def rule_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: ruleName: The name of the rule.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "ruleName"))

    @rule_name.setter
    def rule_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "ruleName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="sourceIdentifier")
    def source_identifier(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: sourceIdentifier: The identifier of the rule.  For a managed rule, the value is the name of the managed rule. For a custom rule, the value is the ARN of the custom rule
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "sourceIdentifier"))

    @source_identifier.setter
    def source_identifier(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "sourceIdentifier", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="sourceOwner")
    def source_owner(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: sourceOwner: Specifies whether you or Alibaba Cloud owns and manages the rule. Valid values:  CUSTOM_FC: The rule is a custom rule and you own the rule. ALIYUN: The rule is a managed rule and Alibaba Cloud owns the rule
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "sourceOwner"))

    @source_owner.setter
    def source_owner(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "sourceOwner", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: The description of the rule
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="excludeResourceIdsScope")
    def exclude_resource_ids_scope(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: excludeResourceIdsScope: The rule monitors excluded resource IDs, multiple of which are separated by commas, only applies to rules created based on managed rules, , custom rule this field is empty
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "excludeResourceIdsScope"))

    @exclude_resource_ids_scope.setter
    def exclude_resource_ids_scope(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "excludeResourceIdsScope", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="inputParameters")
    def input_parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: inputParameters: The settings of the input parameters for the rule
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "inputParameters"))

    @input_parameters.setter
    def input_parameters(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        jsii.set(self, "inputParameters", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="maximumExecutionFrequency")
    def maximum_execution_frequency(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: maximumExecutionFrequency: The frequency of the compliance evaluations. Valid values:  One_Hour Three_Hours Six_Hours Twelve_Hours TwentyFour_Hours
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "maximumExecutionFrequency"))

    @maximum_execution_frequency.setter
    def maximum_execution_frequency(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "maximumExecutionFrequency", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="regionIdsScope")
    def region_ids_scope(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: regionIdsScope: The rule monitors region IDs, separated by commas, only applies to rules created based on managed rules
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "regionIdsScope"))

    @region_ids_scope.setter
    def region_ids_scope(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "regionIdsScope", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="resourceGroupIdsScope")
    def resource_group_ids_scope(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupIdsScope: The rule monitors resource group IDs, separated by commas, only applies to rules created based on managed rules
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "resourceGroupIdsScope"))

    @resource_group_ids_scope.setter
    def resource_group_ids_scope(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "resourceGroupIdsScope", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="tagKeyLogicScope")
    def tag_key_logic_scope(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: tagKeyLogicScope:
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "tagKeyLogicScope"))

    @tag_key_logic_scope.setter
    def tag_key_logic_scope(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "tagKeyLogicScope", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="tagKeyScope")
    def tag_key_scope(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: tagKeyScope: The rule monitors the tag key, only applies to rules created based on managed rules
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "tagKeyScope"))

    @tag_key_scope.setter
    def tag_key_scope(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "tagKeyScope", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="tagValueScope")
    def tag_value_scope(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: tagValueScope: The rule monitors the tag value, only applies to rules created based on managed rules
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "tagValueScope"))

    @tag_value_scope.setter
    def tag_value_scope(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "tagValueScope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-config.RosRuleProps",
    jsii_struct_bases=[],
    name_mapping={
        "config_rule_trigger_types": "configRuleTriggerTypes",
        "resource_types_scope": "resourceTypesScope",
        "risk_level": "riskLevel",
        "rule_name": "ruleName",
        "source_identifier": "sourceIdentifier",
        "source_owner": "sourceOwner",
        "description": "description",
        "exclude_resource_ids_scope": "excludeResourceIdsScope",
        "input_parameters": "inputParameters",
        "maximum_execution_frequency": "maximumExecutionFrequency",
        "region_ids_scope": "regionIdsScope",
        "resource_group_ids_scope": "resourceGroupIdsScope",
        "tag_key_logic_scope": "tagKeyLogicScope",
        "tag_key_scope": "tagKeyScope",
        "tag_value_scope": "tagValueScope",
    },
)
class RosRuleProps:
    def __init__(
        self,
        *,
        config_rule_trigger_types: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        resource_types_scope: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
        risk_level: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        rule_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        source_identifier: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        source_owner: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        exclude_resource_ids_scope: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        input_parameters: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        maximum_execution_frequency: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        region_ids_scope: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource_group_ids_scope: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tag_key_logic_scope: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tag_key_scope: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tag_value_scope: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::Config::Rule``.

        :param config_rule_trigger_types: 
        :param resource_types_scope: 
        :param risk_level: 
        :param rule_name: 
        :param source_identifier: 
        :param source_owner: 
        :param description: 
        :param exclude_resource_ids_scope: 
        :param input_parameters: 
        :param maximum_execution_frequency: 
        :param region_ids_scope: 
        :param resource_group_ids_scope: 
        :param tag_key_logic_scope: 
        :param tag_key_scope: 
        :param tag_value_scope: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "config_rule_trigger_types": config_rule_trigger_types,
            "resource_types_scope": resource_types_scope,
            "risk_level": risk_level,
            "rule_name": rule_name,
            "source_identifier": source_identifier,
            "source_owner": source_owner,
        }
        if description is not None:
            self._values["description"] = description
        if exclude_resource_ids_scope is not None:
            self._values["exclude_resource_ids_scope"] = exclude_resource_ids_scope
        if input_parameters is not None:
            self._values["input_parameters"] = input_parameters
        if maximum_execution_frequency is not None:
            self._values["maximum_execution_frequency"] = maximum_execution_frequency
        if region_ids_scope is not None:
            self._values["region_ids_scope"] = region_ids_scope
        if resource_group_ids_scope is not None:
            self._values["resource_group_ids_scope"] = resource_group_ids_scope
        if tag_key_logic_scope is not None:
            self._values["tag_key_logic_scope"] = tag_key_logic_scope
        if tag_key_scope is not None:
            self._values["tag_key_scope"] = tag_key_scope
        if tag_value_scope is not None:
            self._values["tag_value_scope"] = tag_value_scope

    @builtins.property
    def config_rule_trigger_types(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: configRuleTriggerTypes: The trigger type of the rule. Valid values:  ConfigurationItemChangeNotification: The rule is triggered upon configuration changes. ScheduledNotification: The rule is triggered as scheduled.
        '''
        result = self._values.get("config_rule_trigger_types")
        assert result is not None, "Required property 'config_rule_trigger_types' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def resource_types_scope(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]:
        '''
        :Property: resourceTypesScope: The types of the resources to be evaluated against the rule
        '''
        result = self._values.get("resource_types_scope")
        assert result is not None, "Required property 'resource_types_scope' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]], result)

    @builtins.property
    def risk_level(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: riskLevel: The risk level of the resources that are not compliant with the rule. Valid values:  1: critical 2: warning 3: info
        '''
        result = self._values.get("risk_level")
        assert result is not None, "Required property 'risk_level' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def rule_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: ruleName: The name of the rule.
        '''
        result = self._values.get("rule_name")
        assert result is not None, "Required property 'rule_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def source_identifier(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: sourceIdentifier: The identifier of the rule.  For a managed rule, the value is the name of the managed rule. For a custom rule, the value is the ARN of the custom rule
        '''
        result = self._values.get("source_identifier")
        assert result is not None, "Required property 'source_identifier' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def source_owner(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: sourceOwner: Specifies whether you or Alibaba Cloud owns and manages the rule. Valid values:  CUSTOM_FC: The rule is a custom rule and you own the rule. ALIYUN: The rule is a managed rule and Alibaba Cloud owns the rule
        '''
        result = self._values.get("source_owner")
        assert result is not None, "Required property 'source_owner' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: The description of the rule
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def exclude_resource_ids_scope(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: excludeResourceIdsScope: The rule monitors excluded resource IDs, multiple of which are separated by commas, only applies to rules created based on managed rules, , custom rule this field is empty
        '''
        result = self._values.get("exclude_resource_ids_scope")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def input_parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: inputParameters: The settings of the input parameters for the rule
        '''
        result = self._values.get("input_parameters")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def maximum_execution_frequency(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: maximumExecutionFrequency: The frequency of the compliance evaluations. Valid values:  One_Hour Three_Hours Six_Hours Twelve_Hours TwentyFour_Hours
        '''
        result = self._values.get("maximum_execution_frequency")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def region_ids_scope(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: regionIdsScope: The rule monitors region IDs, separated by commas, only applies to rules created based on managed rules
        '''
        result = self._values.get("region_ids_scope")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_group_ids_scope(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupIdsScope: The rule monitors resource group IDs, separated by commas, only applies to rules created based on managed rules
        '''
        result = self._values.get("resource_group_ids_scope")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tag_key_logic_scope(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: tagKeyLogicScope:
        '''
        result = self._values.get("tag_key_logic_scope")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tag_key_scope(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: tagKeyScope: The rule monitors the tag key, only applies to rules created based on managed rules
        '''
        result = self._values.get("tag_key_scope")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tag_value_scope(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: tagValueScope: The rule monitors the tag value, only applies to rules created based on managed rules
        '''
        result = self._values.get("tag_value_scope")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Rule(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-config.Rule",
):
    '''A ROS resource type:  ``ALIYUN::Config::Rule``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RuleProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::Config::Rule``.

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
    @jsii.member(jsii_name="attrConfigRuleArn")
    def attr_config_rule_arn(self) -> ros_cdk_core.IResolvable:
        '''Attribute ConfigRuleArn: config rule arn.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrConfigRuleArn"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrConfigRuleId")
    def attr_config_rule_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ConfigRuleId: The ID of the rule.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrConfigRuleId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrConfigRuleTriggerTypes")
    def attr_config_rule_trigger_types(self) -> ros_cdk_core.IResolvable:
        '''Attribute ConfigRuleTriggerTypes: The trigger type of the rule.

        Valid values:  ConfigurationItemChangeNotification: The rule is triggered upon configuration changes. ScheduledNotification: The rule is triggered as scheduled.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrConfigRuleTriggerTypes"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> ros_cdk_core.IResolvable:
        '''Attribute Description: The description of the rule.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrEventSource")
    def attr_event_source(self) -> ros_cdk_core.IResolvable:
        '''Attribute EventSource: The event source of the rule.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEventSource"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrExcludeResourceIdsScope")
    def attr_exclude_resource_ids_scope(self) -> ros_cdk_core.IResolvable:
        '''Attribute ExcludeResourceIdsScope: The rule monitors excluded resource IDs, multiple of which are separated by commas, only applies to rules created based on managed rules, , custom rule this field is empty.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrExcludeResourceIdsScope"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInputParameters")
    def attr_input_parameters(self) -> ros_cdk_core.IResolvable:
        '''Attribute InputParameters: The settings of the input parameters for the rule.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInputParameters"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrMaximumExecutionFrequency")
    def attr_maximum_execution_frequency(self) -> ros_cdk_core.IResolvable:
        '''Attribute MaximumExecutionFrequency: The frequency of the compliance evaluations.

        Valid values:  One_Hour Three_Hours Six_Hours Twelve_Hours TwentyFour_Hours
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMaximumExecutionFrequency"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRegionIdsScope")
    def attr_region_ids_scope(self) -> ros_cdk_core.IResolvable:
        '''Attribute RegionIdsScope: The rule monitors region IDs, separated by commas, only applies to rules created based on managed rules.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRegionIdsScope"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResourceGroupIdsScope")
    def attr_resource_group_ids_scope(self) -> ros_cdk_core.IResolvable:
        '''Attribute ResourceGroupIdsScope: The rule monitors resource group IDs, separated by commas, only applies to rules created based on managed rules.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceGroupIdsScope"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResourceTypesScope")
    def attr_resource_types_scope(self) -> ros_cdk_core.IResolvable:
        '''Attribute ResourceTypesScope: The types of the resources to be evaluated against the rule.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceTypesScope"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRiskLevel")
    def attr_risk_level(self) -> ros_cdk_core.IResolvable:
        '''Attribute RiskLevel: The risk level of the resources that are not compliant with the rule.

        Valid values:  1: critical 2: warning 3: info
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRiskLevel"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRuleName")
    def attr_rule_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute RuleName: The name of the rule.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRuleName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSourceIdentifier")
    def attr_source_identifier(self) -> ros_cdk_core.IResolvable:
        '''Attribute SourceIdentifier: The identifier of the rule.

        For a managed rule, the value is the name of the managed rule. For a custom rule, the value is the ARN of the custom rule
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSourceIdentifier"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSourceOwner")
    def attr_source_owner(self) -> ros_cdk_core.IResolvable:
        '''Attribute SourceOwner: Specifies whether you or Alibaba Cloud owns and manages the rule.

        Valid values:  CUSTOM_FC: The rule is a custom rule and you own the rule. ALIYUN: The rule is a managed rule and Alibaba Cloud owns the rule
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSourceOwner"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTagKeyScope")
    def attr_tag_key_scope(self) -> ros_cdk_core.IResolvable:
        '''Attribute TagKeyScope: The rule monitors the tag key, only applies to rules created based on managed rules.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTagKeyScope"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTagValueScope")
    def attr_tag_value_scope(self) -> ros_cdk_core.IResolvable:
        '''Attribute TagValueScope: The rule monitors the tag value, only applies to rules created based on managed rules.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTagValueScope"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-config.RuleProps",
    jsii_struct_bases=[],
    name_mapping={
        "config_rule_trigger_types": "configRuleTriggerTypes",
        "resource_types_scope": "resourceTypesScope",
        "risk_level": "riskLevel",
        "rule_name": "ruleName",
        "source_identifier": "sourceIdentifier",
        "source_owner": "sourceOwner",
        "description": "description",
        "exclude_resource_ids_scope": "excludeResourceIdsScope",
        "input_parameters": "inputParameters",
        "maximum_execution_frequency": "maximumExecutionFrequency",
        "region_ids_scope": "regionIdsScope",
        "resource_group_ids_scope": "resourceGroupIdsScope",
        "tag_key_logic_scope": "tagKeyLogicScope",
        "tag_key_scope": "tagKeyScope",
        "tag_value_scope": "tagValueScope",
    },
)
class RuleProps:
    def __init__(
        self,
        *,
        config_rule_trigger_types: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        resource_types_scope: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
        risk_level: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        rule_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        source_identifier: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        source_owner: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        exclude_resource_ids_scope: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        input_parameters: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        maximum_execution_frequency: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        region_ids_scope: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource_group_ids_scope: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tag_key_logic_scope: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tag_key_scope: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tag_value_scope: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::Config::Rule``.

        :param config_rule_trigger_types: Property configRuleTriggerTypes: The trigger type of the rule. Valid values: ConfigurationItemChangeNotification: The rule is triggered upon configuration changes. ScheduledNotification: The rule is triggered as scheduled.
        :param resource_types_scope: Property resourceTypesScope: The types of the resources to be evaluated against the rule.
        :param risk_level: Property riskLevel: The risk level of the resources that are not compliant with the rule. Valid values: 1: critical 2: warning 3: info
        :param rule_name: Property ruleName: The name of the rule.
        :param source_identifier: Property sourceIdentifier: The identifier of the rule. For a managed rule, the value is the name of the managed rule. For a custom rule, the value is the ARN of the custom rule
        :param source_owner: Property sourceOwner: Specifies whether you or Alibaba Cloud owns and manages the rule. Valid values: CUSTOM_FC: The rule is a custom rule and you own the rule. ALIYUN: The rule is a managed rule and Alibaba Cloud owns the rule
        :param description: Property description: The description of the rule.
        :param exclude_resource_ids_scope: Property excludeResourceIdsScope: The rule monitors excluded resource IDs, multiple of which are separated by commas, only applies to rules created based on managed rules, , custom rule this field is empty.
        :param input_parameters: Property inputParameters: The settings of the input parameters for the rule.
        :param maximum_execution_frequency: Property maximumExecutionFrequency: The frequency of the compliance evaluations. Valid values: One_Hour Three_Hours Six_Hours Twelve_Hours TwentyFour_Hours
        :param region_ids_scope: Property regionIdsScope: The rule monitors region IDs, separated by commas, only applies to rules created based on managed rules.
        :param resource_group_ids_scope: Property resourceGroupIdsScope: The rule monitors resource group IDs, separated by commas, only applies to rules created based on managed rules.
        :param tag_key_logic_scope: Property tagKeyLogicScope:.
        :param tag_key_scope: Property tagKeyScope: The rule monitors the tag key, only applies to rules created based on managed rules.
        :param tag_value_scope: Property tagValueScope: The rule monitors the tag value, only applies to rules created based on managed rules.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "config_rule_trigger_types": config_rule_trigger_types,
            "resource_types_scope": resource_types_scope,
            "risk_level": risk_level,
            "rule_name": rule_name,
            "source_identifier": source_identifier,
            "source_owner": source_owner,
        }
        if description is not None:
            self._values["description"] = description
        if exclude_resource_ids_scope is not None:
            self._values["exclude_resource_ids_scope"] = exclude_resource_ids_scope
        if input_parameters is not None:
            self._values["input_parameters"] = input_parameters
        if maximum_execution_frequency is not None:
            self._values["maximum_execution_frequency"] = maximum_execution_frequency
        if region_ids_scope is not None:
            self._values["region_ids_scope"] = region_ids_scope
        if resource_group_ids_scope is not None:
            self._values["resource_group_ids_scope"] = resource_group_ids_scope
        if tag_key_logic_scope is not None:
            self._values["tag_key_logic_scope"] = tag_key_logic_scope
        if tag_key_scope is not None:
            self._values["tag_key_scope"] = tag_key_scope
        if tag_value_scope is not None:
            self._values["tag_value_scope"] = tag_value_scope

    @builtins.property
    def config_rule_trigger_types(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property configRuleTriggerTypes: The trigger type of the rule.

        Valid values:  ConfigurationItemChangeNotification: The rule is triggered upon configuration changes. ScheduledNotification: The rule is triggered as scheduled.
        '''
        result = self._values.get("config_rule_trigger_types")
        assert result is not None, "Required property 'config_rule_trigger_types' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def resource_types_scope(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]:
        '''Property resourceTypesScope: The types of the resources to be evaluated against the rule.'''
        result = self._values.get("resource_types_scope")
        assert result is not None, "Required property 'resource_types_scope' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]], result)

    @builtins.property
    def risk_level(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property riskLevel: The risk level of the resources that are not compliant with the rule.

        Valid values:  1: critical 2: warning 3: info
        '''
        result = self._values.get("risk_level")
        assert result is not None, "Required property 'risk_level' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def rule_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property ruleName: The name of the rule.'''
        result = self._values.get("rule_name")
        assert result is not None, "Required property 'rule_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def source_identifier(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property sourceIdentifier: The identifier of the rule.

        For a managed rule, the value is the name of the managed rule. For a custom rule, the value is the ARN of the custom rule
        '''
        result = self._values.get("source_identifier")
        assert result is not None, "Required property 'source_identifier' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def source_owner(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property sourceOwner: Specifies whether you or Alibaba Cloud owns and manages the rule.

        Valid values:  CUSTOM_FC: The rule is a custom rule and you own the rule. ALIYUN: The rule is a managed rule and Alibaba Cloud owns the rule
        '''
        result = self._values.get("source_owner")
        assert result is not None, "Required property 'source_owner' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: The description of the rule.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def exclude_resource_ids_scope(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property excludeResourceIdsScope: The rule monitors excluded resource IDs, multiple of which are separated by commas, only applies to rules created based on managed rules, , custom rule this field is empty.'''
        result = self._values.get("exclude_resource_ids_scope")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def input_parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property inputParameters: The settings of the input parameters for the rule.'''
        result = self._values.get("input_parameters")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def maximum_execution_frequency(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property maximumExecutionFrequency: The frequency of the compliance evaluations.

        Valid values:  One_Hour Three_Hours Six_Hours Twelve_Hours TwentyFour_Hours
        '''
        result = self._values.get("maximum_execution_frequency")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def region_ids_scope(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property regionIdsScope: The rule monitors region IDs, separated by commas, only applies to rules created based on managed rules.'''
        result = self._values.get("region_ids_scope")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_group_ids_scope(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property resourceGroupIdsScope: The rule monitors resource group IDs, separated by commas, only applies to rules created based on managed rules.'''
        result = self._values.get("resource_group_ids_scope")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tag_key_logic_scope(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property tagKeyLogicScope:.'''
        result = self._values.get("tag_key_logic_scope")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tag_key_scope(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property tagKeyScope: The rule monitors the tag key, only applies to rules created based on managed rules.'''
        result = self._values.get("tag_key_scope")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tag_value_scope(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property tagValueScope: The rule monitors the tag value, only applies to rules created based on managed rules.'''
        result = self._values.get("tag_value_scope")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "CompliancePack",
    "CompliancePackProps",
    "DeliveryChannel",
    "DeliveryChannelProps",
    "RosCompliancePack",
    "RosCompliancePackProps",
    "RosDeliveryChannel",
    "RosDeliveryChannelProps",
    "RosRule",
    "RosRuleProps",
    "Rule",
    "RuleProps",
]

publication.publish()
