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

from typeguard import check_type

from ._jsii import *

import ros_cdk_core as _ros_cdk_core_7adfd82f


class CompliancePack(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-config.CompliancePack",
):
    '''A ROS resource type:  ``ALIYUN::Config::CompliancePack``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["CompliancePackProps", typing.Dict[builtins.str, typing.Any]],
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8d298c2e48924e913d5237356989f41b8191517a9239ed7cbb6ab58c1accf50c)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAccountId")
    def attr_account_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AccountId: Aliyun User Id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccountId"))

    @builtins.property
    @jsii.member(jsii_name="attrCompliancePackId")
    def attr_compliance_pack_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CompliancePackId: Compliance Package ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCompliancePackId"))

    @builtins.property
    @jsii.member(jsii_name="attrCompliancePackName")
    def attr_compliance_pack_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CompliancePackName: Compliance Package Name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCompliancePackName"))

    @builtins.property
    @jsii.member(jsii_name="attrCompliancePackTemplateId")
    def attr_compliance_pack_template_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CompliancePackTemplateId: Compliance Package Template Id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCompliancePackTemplateId"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Description: Description.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrRiskLevel")
    def attr_risk_level(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RiskLevel: Ris Level.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRiskLevel"))


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
        compliance_pack_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        risk_level: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        compliance_pack_template_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        config_rules: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosCompliancePack.ConfigRulesProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::Config::CompliancePack``.

        :param compliance_pack_name: Property compliancePackName: Compliance Package Name.
        :param description: Property description: Description.
        :param risk_level: Property riskLevel: Ris Level.
        :param compliance_pack_template_id: Property compliancePackTemplateId: Compliance Package Template Id.
        :param config_rules: Property configRules: Config Rule List.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b940619f7554181f4198251de38e73271a2b4d9c344d9cbe0b42294d3899d2c6)
            check_type(argname="argument compliance_pack_name", value=compliance_pack_name, expected_type=type_hints["compliance_pack_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument risk_level", value=risk_level, expected_type=type_hints["risk_level"])
            check_type(argname="argument compliance_pack_template_id", value=compliance_pack_template_id, expected_type=type_hints["compliance_pack_template_id"])
            check_type(argname="argument config_rules", value=config_rules, expected_type=type_hints["config_rules"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property compliancePackName: Compliance Package Name.'''
        result = self._values.get("compliance_pack_name")
        assert result is not None, "Required property 'compliance_pack_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property description: Description.'''
        result = self._values.get("description")
        assert result is not None, "Required property 'description' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def risk_level(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property riskLevel: Ris Level.'''
        result = self._values.get("risk_level")
        assert result is not None, "Required property 'risk_level' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def compliance_pack_template_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property compliancePackTemplateId: Compliance Package Template Id.'''
        result = self._values.get("compliance_pack_template_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def config_rules(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCompliancePack.ConfigRulesProperty"]]]]:
        '''Property configRules: Config Rule List.'''
        result = self._values.get("config_rules")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCompliancePack.ConfigRulesProperty"]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "CompliancePackProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class DeliveryChannel(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-config.DeliveryChannel",
):
    '''A ROS resource type:  ``ALIYUN::Config::DeliveryChannel``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DeliveryChannelProps", typing.Dict[builtins.str, typing.Any]],
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5eae41e4e5bea0e0ecaab1a7014db49c75d0d374093b82476b2ecdb279c1ccd1)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDeliveryChannelId")
    def attr_delivery_channel_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DeliveryChannelId: The ID of the delivery method.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDeliveryChannelId"))


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
        delivery_channel_assume_role_arn: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        delivery_channel_target_arn: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        delivery_channel_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        delivery_channel_condition: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        delivery_channel_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::Config::DeliveryChannel``.

        :param delivery_channel_assume_role_arn: Property deliveryChannelAssumeRoleArn: The Alibaba Cloud Resource Name (ARN) of the role to be assumed by the delivery method. This parameter is required when you create a delivery method. Note If the delivery method assumes the service linked role for Cloud Config, you can specify the ARN in the format of the provided example and replace the account ID with the ID of your Alibaba Cloud account.
        :param delivery_channel_target_arn: Property deliveryChannelTargetArn: The ARN of the delivery destination. This parameter is required when you create a delivery method. The value must be in one of the following formats: acs:oss:{RegionId}:{Aliuid}:{bucketName} if your delivery destination is an Object Storage Service (OSS) bucket. acs:mns:{RegionId}:{Aliuid}:/topics/{topicName} if your delivery destination is a Message Service (MNS) topic. acs:log:{RegionId}:{Aliuid}:project/{projectName}/logstore/{logstoreName} if your delivery destination is a Log Service Logstore.
        :param delivery_channel_type: Property deliveryChannelType: The type of the delivery method. This parameter is required when you create a delivery method. Valid values: OSS MNS SLS
        :param delivery_channel_condition: Property deliveryChannelCondition: The rule attached to the delivery method. This parameter is applicable only to delivery methods of the MNS type. This parameter allows you to specify the lowest risk level for the events to subscribe to and the resource types for which you want to subscribe to events. To specify the lowest risk level for the events to subscribe to, use the following format:{"filterType":"RuleRiskLevel","value":"1","multiple":false}. The value field indicates the lowest risk level and can be set to 1, 2, or 3, which indicates the high risk level, the medium risk level, and the low risk level, respectively. To specify the resource types for which you want to subscribe to events, use the following format:{"filterType":"ResourceType","values":["ACS::ACK::Cluster","ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage"],"multiple":true}. The values field indicates the resource types. Its value is a JSON array. Example: [{"filterType":"ResourceType","values":["ACS::ActionTrail::Trail","ACS::CBWP::CommonBandwidthPackage","ACS::CDN::Domain","ACS::CEN::CenBandwidthPackage","ACS::CEN::CenInstance","ACS::CEN::Flowlog","ACS::DdosCoo::Instance"],"multiple":true}]
        :param delivery_channel_name: Property deliveryChannelName: The name of the delivery method.
        :param description: Property description: The description of the delivery method.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1a51e6f71f25931bfc953540068244f086a3844bbdb6c84c877d7bcf58da399c)
            check_type(argname="argument delivery_channel_assume_role_arn", value=delivery_channel_assume_role_arn, expected_type=type_hints["delivery_channel_assume_role_arn"])
            check_type(argname="argument delivery_channel_target_arn", value=delivery_channel_target_arn, expected_type=type_hints["delivery_channel_target_arn"])
            check_type(argname="argument delivery_channel_type", value=delivery_channel_type, expected_type=type_hints["delivery_channel_type"])
            check_type(argname="argument delivery_channel_condition", value=delivery_channel_condition, expected_type=type_hints["delivery_channel_condition"])
            check_type(argname="argument delivery_channel_name", value=delivery_channel_name, expected_type=type_hints["delivery_channel_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property deliveryChannelAssumeRoleArn: The Alibaba Cloud Resource Name (ARN) of the role to be assumed by the delivery method.

        This parameter is required when you create a delivery method.
        Note If the delivery method assumes the service linked role for Cloud Config, you can specify
        the ARN in the format of the provided example and replace the account ID with the
        ID of your Alibaba Cloud account.
        '''
        result = self._values.get("delivery_channel_assume_role_arn")
        assert result is not None, "Required property 'delivery_channel_assume_role_arn' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def delivery_channel_target_arn(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property deliveryChannelTargetArn: The ARN of the delivery destination.

        This parameter is required when you create a
        delivery method. The value must be in one of the following formats:
        acs:oss:{RegionId}:{Aliuid}:{bucketName} if your delivery destination is an Object Storage Service (OSS) bucket.
        acs:mns:{RegionId}:{Aliuid}:/topics/{topicName} if your delivery destination is a Message Service (MNS) topic.
        acs:log:{RegionId}:{Aliuid}:project/{projectName}/logstore/{logstoreName} if your delivery destination is a Log Service Logstore.
        '''
        result = self._values.get("delivery_channel_target_arn")
        assert result is not None, "Required property 'delivery_channel_target_arn' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def delivery_channel_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property deliveryChannelType: The type of the delivery method.

        This parameter is required when you create a delivery
        method. Valid values:
        OSS
        MNS
        SLS
        '''
        result = self._values.get("delivery_channel_type")
        assert result is not None, "Required property 'delivery_channel_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def delivery_channel_condition(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def delivery_channel_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property deliveryChannelName: The name of the delivery method.'''
        result = self._values.get("delivery_channel_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the delivery method.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DeliveryChannelProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCompliancePack(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-config.RosCompliancePack",
):
    '''A ROS template type:  ``ALIYUN::Config::CompliancePack``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosCompliancePackProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::Config::CompliancePack``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__82174021b18e4fa77aa7496a14adf6cc9ffa8e452fd84df19ead650868c718f3)
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
            type_hints = typing.get_type_hints(_typecheckingstub__d61c0deac862e00bd7a1d3af2a7001cc42a7ec691e7801c1d1a59f8ef1ba4b77)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAccountId")
    def attr_account_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AccountId: Aliyun User Id
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccountId"))

    @builtins.property
    @jsii.member(jsii_name="attrCompliancePackId")
    def attr_compliance_pack_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CompliancePackId: Compliance Package ID
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCompliancePackId"))

    @builtins.property
    @jsii.member(jsii_name="attrCompliancePackName")
    def attr_compliance_pack_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CompliancePackName: Compliance Package Name
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCompliancePackName"))

    @builtins.property
    @jsii.member(jsii_name="attrCompliancePackTemplateId")
    def attr_compliance_pack_template_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CompliancePackTemplateId: Compliance Package Template Id
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCompliancePackTemplateId"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Description: Description
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrRiskLevel")
    def attr_risk_level(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RiskLevel: Ris Level
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRiskLevel"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="compliancePackName")
    def compliance_pack_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: compliancePackName: Compliance Package Name
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "compliancePackName"))

    @compliance_pack_name.setter
    def compliance_pack_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5d47ce277aae720f2d6c0d5377bde8ab5a05b55a45dd6d6aa94ee0a3c38e1cb1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "compliancePackName", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: description: Description
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b4ff37882e9592a0b27faf9d9a552c1200612e4a913ea53059fc17eb06fb17d7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4ab42adc30f90c629ae7bdcd173e44ecdee089103e4494209bd3bebb4c093674)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="riskLevel")
    def risk_level(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: riskLevel: Ris Level
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "riskLevel"))

    @risk_level.setter
    def risk_level(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dc1f2460d9e3dd3815e6824d5298b49f84aa05728bd3359e5a05ceeec1e48b02)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "riskLevel", value)

    @builtins.property
    @jsii.member(jsii_name="compliancePackTemplateId")
    def compliance_pack_template_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: compliancePackTemplateId: Compliance Package Template Id
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "compliancePackTemplateId"))

    @compliance_pack_template_id.setter
    def compliance_pack_template_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__96c91c9f862b29e559d8f3e0379a34911d00c042d3897437bec5c1cc684d7e56)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "compliancePackTemplateId", value)

    @builtins.property
    @jsii.member(jsii_name="configRules")
    def config_rules(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCompliancePack.ConfigRulesProperty"]]]]:
        '''
        :Property: configRules: Config Rule List
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCompliancePack.ConfigRulesProperty"]]]], jsii.get(self, "configRules"))

    @config_rules.setter
    def config_rules(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCompliancePack.ConfigRulesProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__78bd1cb44fce9ba7d01d155ce2d60c88b98a83f68a4fcb6c60aafec140a07030)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
            parameter_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            parameter_value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            required: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param parameter_name: 
            :param parameter_value: 
            :param required: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__3e84ee948f5c31f1c79577bb1cd50eb87d6d078f66f152fa9180a755834c88c4)
                check_type(argname="argument parameter_name", value=parameter_name, expected_type=type_hints["parameter_name"])
                check_type(argname="argument parameter_value", value=parameter_value, expected_type=type_hints["parameter_value"])
                check_type(argname="argument required", value=required, expected_type=type_hints["required"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if parameter_name is not None:
                self._values["parameter_name"] = parameter_name
            if parameter_value is not None:
                self._values["parameter_value"] = parameter_value
            if required is not None:
                self._values["required"] = required

        @builtins.property
        def parameter_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: parameterName: Parameter Name
            '''
            result = self._values.get("parameter_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def parameter_value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: parameterValue: Parameter Value
            '''
            result = self._values.get("parameter_value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def required(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: required: Required
            '''
            result = self._values.get("required")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
            config_rule_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            config_rule_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            config_rule_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosCompliancePack.ConfigRuleParametersProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            managed_rule_identifier: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param config_rule_id: 
            :param config_rule_name: 
            :param config_rule_parameters: 
            :param managed_rule_identifier: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__f8246b4cfefe129e1cbd38d3ff2fbdc3f907253da0215b9c91e07b1b2d42b455)
                check_type(argname="argument config_rule_id", value=config_rule_id, expected_type=type_hints["config_rule_id"])
                check_type(argname="argument config_rule_name", value=config_rule_name, expected_type=type_hints["config_rule_name"])
                check_type(argname="argument config_rule_parameters", value=config_rule_parameters, expected_type=type_hints["config_rule_parameters"])
                check_type(argname="argument managed_rule_identifier", value=managed_rule_identifier, expected_type=type_hints["managed_rule_identifier"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
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
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: configRuleId: Config Rule Id
            '''
            result = self._values.get("config_rule_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def config_rule_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: configRuleName: Config Rule Name
            '''
            result = self._values.get("config_rule_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def config_rule_parameters(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCompliancePack.ConfigRuleParametersProperty"]]]]:
            '''
            :Property: configRuleParameters: Config Rule Parameter List
            '''
            result = self._values.get("config_rule_parameters")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCompliancePack.ConfigRuleParametersProperty"]]]], result)

        @builtins.property
        def managed_rule_identifier(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: managedRuleIdentifier: Managed Rule Identifier
            '''
            result = self._values.get("managed_rule_identifier")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
        compliance_pack_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        risk_level: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        compliance_pack_template_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        config_rules: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCompliancePack.ConfigRulesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::Config::CompliancePack``.

        :param compliance_pack_name: 
        :param description: 
        :param risk_level: 
        :param compliance_pack_template_id: 
        :param config_rules: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d83885691529c380a661bd7233489b510591fee1f41c1d3376ecd67ffac3f0c6)
            check_type(argname="argument compliance_pack_name", value=compliance_pack_name, expected_type=type_hints["compliance_pack_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument risk_level", value=risk_level, expected_type=type_hints["risk_level"])
            check_type(argname="argument compliance_pack_template_id", value=compliance_pack_template_id, expected_type=type_hints["compliance_pack_template_id"])
            check_type(argname="argument config_rules", value=config_rules, expected_type=type_hints["config_rules"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: compliancePackName: Compliance Package Name
        '''
        result = self._values.get("compliance_pack_name")
        assert result is not None, "Required property 'compliance_pack_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: description: Description
        '''
        result = self._values.get("description")
        assert result is not None, "Required property 'description' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def risk_level(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: riskLevel: Ris Level
        '''
        result = self._values.get("risk_level")
        assert result is not None, "Required property 'risk_level' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def compliance_pack_template_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: compliancePackTemplateId: Compliance Package Template Id
        '''
        result = self._values.get("compliance_pack_template_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def config_rules(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCompliancePack.ConfigRulesProperty]]]]:
        '''
        :Property: configRules: Config Rule List
        '''
        result = self._values.get("config_rules")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCompliancePack.ConfigRulesProperty]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosCompliancePackProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDeliveryChannel(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-config.RosDeliveryChannel",
):
    '''A ROS template type:  ``ALIYUN::Config::DeliveryChannel``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDeliveryChannelProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::Config::DeliveryChannel``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__243fdcfdcdab9d92015c74b1e1bc0e80c79e09b59601dc31e26229bd3559a386)
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
            type_hints = typing.get_type_hints(_typecheckingstub__b65d25efc1b79d340025825d2a2a78b9bcca84b7b60594d6057d80415384c770)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDeliveryChannelId")
    def attr_delivery_channel_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DeliveryChannelId: The ID of the delivery method.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDeliveryChannelId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="deliveryChannelAssumeRoleArn")
    def delivery_channel_assume_role_arn(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        deliveryChannelAssumeRoleArn: The Alibaba Cloud Resource Name (ARN) of the role to be assumed by the delivery method.
        This parameter is required when you create a delivery method.
        Note If the delivery method assumes the service linked role for Cloud Config, you can specify
        the ARN in the format of the provided example and replace the account ID with the
        ID of your Alibaba Cloud account.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "deliveryChannelAssumeRoleArn"))

    @delivery_channel_assume_role_arn.setter
    def delivery_channel_assume_role_arn(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ee4ad364b703cffaacac1c82abaa5fbafe4c7a22da4a6e624a6cace97e9c3c69)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deliveryChannelAssumeRoleArn", value)

    @builtins.property
    @jsii.member(jsii_name="deliveryChannelTargetArn")
    def delivery_channel_target_arn(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        deliveryChannelTargetArn: The ARN of the delivery destination. This parameter is required when you create a
        delivery method. The value must be in one of the following formats:
        acs:oss:{RegionId}:{Aliuid}:{bucketName} if your delivery destination is an Object Storage Service (OSS) bucket.
        acs:mns:{RegionId}:{Aliuid}:/topics/{topicName} if your delivery destination is a Message Service (MNS) topic.
        acs:log:{RegionId}:{Aliuid}:project/{projectName}/logstore/{logstoreName} if your delivery destination is a Log Service Logstore.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "deliveryChannelTargetArn"))

    @delivery_channel_target_arn.setter
    def delivery_channel_target_arn(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fa9c7cd4841643c72e240a5e756e4e901a63437b994ba5bf40af5ec60f45efe5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deliveryChannelTargetArn", value)

    @builtins.property
    @jsii.member(jsii_name="deliveryChannelType")
    def delivery_channel_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        deliveryChannelType: The type of the delivery method. This parameter is required when you create a delivery
        method. Valid values:
        OSS
        MNS
        SLS
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "deliveryChannelType"))

    @delivery_channel_type.setter
    def delivery_channel_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6bb87c4b3f867dd00998e99c7d9e03be37c39a23fec54f0bedc8186d525fffa2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deliveryChannelType", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2aa0f405c0a7cd43a469a8d541867b947a1621bfef66fe9358bcd43823ac9aad)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="deliveryChannelCondition")
    def delivery_channel_condition(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "deliveryChannelCondition"))

    @delivery_channel_condition.setter
    def delivery_channel_condition(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7c502e906149f5997b3703a1c9cb885308f29392c29e5d04445d3f4bc3657ff2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deliveryChannelCondition", value)

    @builtins.property
    @jsii.member(jsii_name="deliveryChannelName")
    def delivery_channel_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deliveryChannelName: The name of the delivery method.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "deliveryChannelName"))

    @delivery_channel_name.setter
    def delivery_channel_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__37f64b6f6b27291233e5af39121e01da7b703fb910dc8e668f75484670ae4198)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deliveryChannelName", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the delivery method.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e56527b5c68df98b0e8ac759d272df07ddd8c491150d7d3269307053f55b65b0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
        delivery_channel_assume_role_arn: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        delivery_channel_target_arn: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        delivery_channel_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        delivery_channel_condition: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        delivery_channel_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::Config::DeliveryChannel``.

        :param delivery_channel_assume_role_arn: 
        :param delivery_channel_target_arn: 
        :param delivery_channel_type: 
        :param delivery_channel_condition: 
        :param delivery_channel_name: 
        :param description: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__061dcc92fad0df30b754bb7c85d2da1a43028d75826a353d138c1696c4e0dbab)
            check_type(argname="argument delivery_channel_assume_role_arn", value=delivery_channel_assume_role_arn, expected_type=type_hints["delivery_channel_assume_role_arn"])
            check_type(argname="argument delivery_channel_target_arn", value=delivery_channel_target_arn, expected_type=type_hints["delivery_channel_target_arn"])
            check_type(argname="argument delivery_channel_type", value=delivery_channel_type, expected_type=type_hints["delivery_channel_type"])
            check_type(argname="argument delivery_channel_condition", value=delivery_channel_condition, expected_type=type_hints["delivery_channel_condition"])
            check_type(argname="argument delivery_channel_name", value=delivery_channel_name, expected_type=type_hints["delivery_channel_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
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
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def delivery_channel_target_arn(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
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
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def delivery_channel_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
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
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def delivery_channel_condition(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def delivery_channel_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deliveryChannelName: The name of the delivery method.
        '''
        result = self._values.get("delivery_channel_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the delivery method.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDeliveryChannelProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosRule(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-config.RosRule",
):
    '''A ROS template type:  ``ALIYUN::Config::Rule``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosRuleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::Config::Rule``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5aa6aed40e69bb740c01878c6fc87e0c91714cc296f0743ca485aef30b08b1f1)
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
            type_hints = typing.get_type_hints(_typecheckingstub__1f808e3c85707e0beb65285fb3034387cfc8ab11c23d9b72d26a1cb0c74c3201)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrConfigRuleArn")
    def attr_config_rule_arn(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ConfigRuleArn: config rule arn
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConfigRuleArn"))

    @builtins.property
    @jsii.member(jsii_name="attrConfigRuleId")
    def attr_config_rule_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ConfigRuleId: The ID of the rule
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConfigRuleId"))

    @builtins.property
    @jsii.member(jsii_name="attrConfigRuleTriggerTypes")
    def attr_config_rule_trigger_types(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ConfigRuleTriggerTypes: The trigger type of the rule. Valid values:  ConfigurationItemChangeNotification: The rule is triggered upon configuration changes. ScheduledNotification: The rule is triggered as scheduled.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConfigRuleTriggerTypes"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Description: The description of the rule
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrEventSource")
    def attr_event_source(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EventSource: The event source of the rule.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEventSource"))

    @builtins.property
    @jsii.member(jsii_name="attrExcludeResourceIdsScope")
    def attr_exclude_resource_ids_scope(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ExcludeResourceIdsScope: The rule monitors excluded resource IDs, multiple of which are separated by commas, only applies to rules created based on managed rules, , custom rule this field is empty
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExcludeResourceIdsScope"))

    @builtins.property
    @jsii.member(jsii_name="attrInputParameters")
    def attr_input_parameters(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InputParameters: The settings of the input parameters for the rule
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInputParameters"))

    @builtins.property
    @jsii.member(jsii_name="attrMaximumExecutionFrequency")
    def attr_maximum_execution_frequency(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MaximumExecutionFrequency: The frequency of the compliance evaluations. Valid values:  One_Hour Three_Hours Six_Hours Twelve_Hours TwentyFour_Hours
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMaximumExecutionFrequency"))

    @builtins.property
    @jsii.member(jsii_name="attrRegionIdsScope")
    def attr_region_ids_scope(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RegionIdsScope: The rule monitors region IDs, separated by commas, only applies to rules created based on managed rules
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRegionIdsScope"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupIdsScope")
    def attr_resource_group_ids_scope(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceGroupIdsScope: The rule monitors resource group IDs, separated by commas, only applies to rules created based on managed rules
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupIdsScope"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceTypesScope")
    def attr_resource_types_scope(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceTypesScope: The types of the resources to be evaluated against the rule
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceTypesScope"))

    @builtins.property
    @jsii.member(jsii_name="attrRiskLevel")
    def attr_risk_level(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RiskLevel: The risk level of the resources that are not compliant with the rule. Valid values:  1: critical 2: warning 3: info
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRiskLevel"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleName")
    def attr_rule_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RuleName: The name of the rule.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRuleName"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceIdentifier")
    def attr_source_identifier(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SourceIdentifier: The identifier of the rule.  For a managed rule, the value is the name of the managed rule. For a custom rule, the value is the ARN of the custom rule
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSourceIdentifier"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceOwner")
    def attr_source_owner(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SourceOwner: Specifies whether you or Alibaba Cloud owns and manages the rule. Valid values:  CUSTOM_FC: The rule is a custom rule and you own the rule. ALIYUN: The rule is a managed rule and Alibaba Cloud owns the rule
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSourceOwner"))

    @builtins.property
    @jsii.member(jsii_name="attrTagKeyScope")
    def attr_tag_key_scope(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TagKeyScope: The rule monitors the tag key, only applies to rules created based on managed rules
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTagKeyScope"))

    @builtins.property
    @jsii.member(jsii_name="attrTagValueScope")
    def attr_tag_value_scope(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TagValueScope: The rule monitors the tag value, only applies to rules created based on managed rules
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTagValueScope"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="configRuleTriggerTypes")
    def config_rule_trigger_types(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: configRuleTriggerTypes: The trigger type of the rule. Valid values:  ConfigurationItemChangeNotification: The rule is triggered upon configuration changes. ScheduledNotification: The rule is triggered as scheduled.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "configRuleTriggerTypes"))

    @config_rule_trigger_types.setter
    def config_rule_trigger_types(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c9dc5a298bc5c03a834a0bd05946f04048b1898c5ebf3ab4489836424e0de286)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "configRuleTriggerTypes", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a43133f555675d72d28fca1a0653e073c699065df6a152071f2e894d619f89d9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="resourceTypesScope")
    def resource_types_scope(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: resourceTypesScope: The types of the resources to be evaluated against the rule
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], jsii.get(self, "resourceTypesScope"))

    @resource_types_scope.setter
    def resource_types_scope(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__23687ceb57ce6be77dac51d66c7fa03c5c7d3eedfa4f88c97b333a0338fe1e92)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceTypesScope", value)

    @builtins.property
    @jsii.member(jsii_name="riskLevel")
    def risk_level(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: riskLevel: The risk level of the resources that are not compliant with the rule. Valid values:  1: critical 2: warning 3: info
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "riskLevel"))

    @risk_level.setter
    def risk_level(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2a0cd91b50538139256fa3d719405282d43f3e486f8721383e4fcf4edd423c96)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "riskLevel", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__313a72c06bb1fc8b5f77d046720daac5bef6fe98d02d2a2aa2e9b9571f270ed1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ruleName", value)

    @builtins.property
    @jsii.member(jsii_name="sourceIdentifier")
    def source_identifier(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: sourceIdentifier: The identifier of the rule.  For a managed rule, the value is the name of the managed rule. For a custom rule, the value is the ARN of the custom rule
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "sourceIdentifier"))

    @source_identifier.setter
    def source_identifier(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__16a7588c6b1f9d40118ae453a00ce2197523ad74ff05190913bb833906dd1893)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceIdentifier", value)

    @builtins.property
    @jsii.member(jsii_name="sourceOwner")
    def source_owner(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: sourceOwner: Specifies whether you or Alibaba Cloud owns and manages the rule. Valid values:  CUSTOM_FC: The rule is a custom rule and you own the rule. ALIYUN: The rule is a managed rule and Alibaba Cloud owns the rule
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "sourceOwner"))

    @source_owner.setter
    def source_owner(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6a5fad6eb26b8af695f7554ae3c63cf6a4ba62e5ef29b71169e96a8613c87ce4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceOwner", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the rule
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__04238f10a7a52c83695b5f6f551a7b94c7dbf396d5cd7358d4f2b8c7c8ad993a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="excludeResourceIdsScope")
    def exclude_resource_ids_scope(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: excludeResourceIdsScope: The rule monitors excluded resource IDs, multiple of which are separated by commas, only applies to rules created based on managed rules, , custom rule this field is empty
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "excludeResourceIdsScope"))

    @exclude_resource_ids_scope.setter
    def exclude_resource_ids_scope(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__61c51f0fbd66f964c5ea186d68e60b4219a812073c195bfa7a3c78f15629d0a5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "excludeResourceIdsScope", value)

    @builtins.property
    @jsii.member(jsii_name="inputParameters")
    def input_parameters(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: inputParameters: The settings of the input parameters for the rule
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "inputParameters"))

    @input_parameters.setter
    def input_parameters(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__69c282f7900cef8cc2abd6c1a5d9624b8596e4bbba3ecba7a16cc32808c6bd8a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "inputParameters", value)

    @builtins.property
    @jsii.member(jsii_name="maximumExecutionFrequency")
    def maximum_execution_frequency(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: maximumExecutionFrequency: The frequency of the compliance evaluations. Valid values:  One_Hour Three_Hours Six_Hours Twelve_Hours TwentyFour_Hours
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "maximumExecutionFrequency"))

    @maximum_execution_frequency.setter
    def maximum_execution_frequency(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b91e47144c3d77dcc0c36a5649635ac251f178132e2a01b33f093eaaf3e21620)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "maximumExecutionFrequency", value)

    @builtins.property
    @jsii.member(jsii_name="regionIdsScope")
    def region_ids_scope(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: regionIdsScope: The rule monitors region IDs, separated by commas, only applies to rules created based on managed rules
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "regionIdsScope"))

    @region_ids_scope.setter
    def region_ids_scope(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bbfa6da1fd30eaeaa43055d958fdb4f05a09fd391c39df2ad883b9476b9f8e6b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "regionIdsScope", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupIdsScope")
    def resource_group_ids_scope(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupIdsScope: The rule monitors resource group IDs, separated by commas, only applies to rules created based on managed rules
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupIdsScope"))

    @resource_group_ids_scope.setter
    def resource_group_ids_scope(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cfb26f901db68dd7492e5a38e9e6b361604cbb87dcf70b544a5464dfae91799a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupIdsScope", value)

    @builtins.property
    @jsii.member(jsii_name="tagKeyLogicScope")
    def tag_key_logic_scope(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: tagKeyLogicScope:
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "tagKeyLogicScope"))

    @tag_key_logic_scope.setter
    def tag_key_logic_scope(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6e7af18c74505acca8c1d9a8cd4a024f2f983921ada9be4641037dbec31c224d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tagKeyLogicScope", value)

    @builtins.property
    @jsii.member(jsii_name="tagKeyScope")
    def tag_key_scope(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: tagKeyScope: The rule monitors the tag key, only applies to rules created based on managed rules
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "tagKeyScope"))

    @tag_key_scope.setter
    def tag_key_scope(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dc41d98ae7e27aacbd16082667bd560d4e8a6b045ccd8895da8c6dc0887e5f4c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tagKeyScope", value)

    @builtins.property
    @jsii.member(jsii_name="tagValueScope")
    def tag_value_scope(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: tagValueScope: The rule monitors the tag value, only applies to rules created based on managed rules
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "tagValueScope"))

    @tag_value_scope.setter
    def tag_value_scope(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7839dc01492241ef74030fdc821b6d5ebf2f082d476fff54a9a22fca78e1cd4f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
        config_rule_trigger_types: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        resource_types_scope: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        risk_level: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_identifier: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_owner: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        exclude_resource_ids_scope: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        input_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        maximum_execution_frequency: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        region_ids_scope: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_ids_scope: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tag_key_logic_scope: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tag_key_scope: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tag_value_scope: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__36fc4914a0c9b08e90c89d3e586f6a7972e1e5163ee5888684debe595528ee32)
            check_type(argname="argument config_rule_trigger_types", value=config_rule_trigger_types, expected_type=type_hints["config_rule_trigger_types"])
            check_type(argname="argument resource_types_scope", value=resource_types_scope, expected_type=type_hints["resource_types_scope"])
            check_type(argname="argument risk_level", value=risk_level, expected_type=type_hints["risk_level"])
            check_type(argname="argument rule_name", value=rule_name, expected_type=type_hints["rule_name"])
            check_type(argname="argument source_identifier", value=source_identifier, expected_type=type_hints["source_identifier"])
            check_type(argname="argument source_owner", value=source_owner, expected_type=type_hints["source_owner"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument exclude_resource_ids_scope", value=exclude_resource_ids_scope, expected_type=type_hints["exclude_resource_ids_scope"])
            check_type(argname="argument input_parameters", value=input_parameters, expected_type=type_hints["input_parameters"])
            check_type(argname="argument maximum_execution_frequency", value=maximum_execution_frequency, expected_type=type_hints["maximum_execution_frequency"])
            check_type(argname="argument region_ids_scope", value=region_ids_scope, expected_type=type_hints["region_ids_scope"])
            check_type(argname="argument resource_group_ids_scope", value=resource_group_ids_scope, expected_type=type_hints["resource_group_ids_scope"])
            check_type(argname="argument tag_key_logic_scope", value=tag_key_logic_scope, expected_type=type_hints["tag_key_logic_scope"])
            check_type(argname="argument tag_key_scope", value=tag_key_scope, expected_type=type_hints["tag_key_scope"])
            check_type(argname="argument tag_value_scope", value=tag_value_scope, expected_type=type_hints["tag_value_scope"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: configRuleTriggerTypes: The trigger type of the rule. Valid values:  ConfigurationItemChangeNotification: The rule is triggered upon configuration changes. ScheduledNotification: The rule is triggered as scheduled.
        '''
        result = self._values.get("config_rule_trigger_types")
        assert result is not None, "Required property 'config_rule_trigger_types' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def resource_types_scope(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: resourceTypesScope: The types of the resources to be evaluated against the rule
        '''
        result = self._values.get("resource_types_scope")
        assert result is not None, "Required property 'resource_types_scope' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def risk_level(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: riskLevel: The risk level of the resources that are not compliant with the rule. Valid values:  1: critical 2: warning 3: info
        '''
        result = self._values.get("risk_level")
        assert result is not None, "Required property 'risk_level' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

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
    def source_identifier(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: sourceIdentifier: The identifier of the rule.  For a managed rule, the value is the name of the managed rule. For a custom rule, the value is the ARN of the custom rule
        '''
        result = self._values.get("source_identifier")
        assert result is not None, "Required property 'source_identifier' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_owner(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: sourceOwner: Specifies whether you or Alibaba Cloud owns and manages the rule. Valid values:  CUSTOM_FC: The rule is a custom rule and you own the rule. ALIYUN: The rule is a managed rule and Alibaba Cloud owns the rule
        '''
        result = self._values.get("source_owner")
        assert result is not None, "Required property 'source_owner' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the rule
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def exclude_resource_ids_scope(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: excludeResourceIdsScope: The rule monitors excluded resource IDs, multiple of which are separated by commas, only applies to rules created based on managed rules, , custom rule this field is empty
        '''
        result = self._values.get("exclude_resource_ids_scope")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def input_parameters(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: inputParameters: The settings of the input parameters for the rule
        '''
        result = self._values.get("input_parameters")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def maximum_execution_frequency(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: maximumExecutionFrequency: The frequency of the compliance evaluations. Valid values:  One_Hour Three_Hours Six_Hours Twelve_Hours TwentyFour_Hours
        '''
        result = self._values.get("maximum_execution_frequency")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def region_ids_scope(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: regionIdsScope: The rule monitors region IDs, separated by commas, only applies to rules created based on managed rules
        '''
        result = self._values.get("region_ids_scope")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_ids_scope(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupIdsScope: The rule monitors resource group IDs, separated by commas, only applies to rules created based on managed rules
        '''
        result = self._values.get("resource_group_ids_scope")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tag_key_logic_scope(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: tagKeyLogicScope:
        '''
        result = self._values.get("tag_key_logic_scope")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tag_key_scope(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: tagKeyScope: The rule monitors the tag key, only applies to rules created based on managed rules
        '''
        result = self._values.get("tag_key_scope")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tag_value_scope(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: tagValueScope: The rule monitors the tag value, only applies to rules created based on managed rules
        '''
        result = self._values.get("tag_value_scope")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Rule(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-config.Rule",
):
    '''A ROS resource type:  ``ALIYUN::Config::Rule``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RuleProps", typing.Dict[builtins.str, typing.Any]],
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c3b39d4d560cc178a8284b5faae6e30f5d1589cb16645158bc1cd835ac0f6404)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrConfigRuleArn")
    def attr_config_rule_arn(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ConfigRuleArn: config rule arn.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConfigRuleArn"))

    @builtins.property
    @jsii.member(jsii_name="attrConfigRuleId")
    def attr_config_rule_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ConfigRuleId: The ID of the rule.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConfigRuleId"))

    @builtins.property
    @jsii.member(jsii_name="attrConfigRuleTriggerTypes")
    def attr_config_rule_trigger_types(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ConfigRuleTriggerTypes: The trigger type of the rule.

        Valid values:  ConfigurationItemChangeNotification: The rule is triggered upon configuration changes. ScheduledNotification: The rule is triggered as scheduled.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConfigRuleTriggerTypes"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Description: The description of the rule.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrEventSource")
    def attr_event_source(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute EventSource: The event source of the rule.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEventSource"))

    @builtins.property
    @jsii.member(jsii_name="attrExcludeResourceIdsScope")
    def attr_exclude_resource_ids_scope(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ExcludeResourceIdsScope: The rule monitors excluded resource IDs, multiple of which are separated by commas, only applies to rules created based on managed rules, , custom rule this field is empty.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExcludeResourceIdsScope"))

    @builtins.property
    @jsii.member(jsii_name="attrInputParameters")
    def attr_input_parameters(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InputParameters: The settings of the input parameters for the rule.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInputParameters"))

    @builtins.property
    @jsii.member(jsii_name="attrMaximumExecutionFrequency")
    def attr_maximum_execution_frequency(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute MaximumExecutionFrequency: The frequency of the compliance evaluations.

        Valid values:  One_Hour Three_Hours Six_Hours Twelve_Hours TwentyFour_Hours
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMaximumExecutionFrequency"))

    @builtins.property
    @jsii.member(jsii_name="attrRegionIdsScope")
    def attr_region_ids_scope(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RegionIdsScope: The rule monitors region IDs, separated by commas, only applies to rules created based on managed rules.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRegionIdsScope"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupIdsScope")
    def attr_resource_group_ids_scope(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ResourceGroupIdsScope: The rule monitors resource group IDs, separated by commas, only applies to rules created based on managed rules.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupIdsScope"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceTypesScope")
    def attr_resource_types_scope(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ResourceTypesScope: The types of the resources to be evaluated against the rule.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceTypesScope"))

    @builtins.property
    @jsii.member(jsii_name="attrRiskLevel")
    def attr_risk_level(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RiskLevel: The risk level of the resources that are not compliant with the rule.

        Valid values:  1: critical 2: warning 3: info
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRiskLevel"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleName")
    def attr_rule_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RuleName: The name of the rule.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRuleName"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceIdentifier")
    def attr_source_identifier(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SourceIdentifier: The identifier of the rule.

        For a managed rule, the value is the name of the managed rule. For a custom rule, the value is the ARN of the custom rule
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSourceIdentifier"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceOwner")
    def attr_source_owner(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SourceOwner: Specifies whether you or Alibaba Cloud owns and manages the rule.

        Valid values:  CUSTOM_FC: The rule is a custom rule and you own the rule. ALIYUN: The rule is a managed rule and Alibaba Cloud owns the rule
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSourceOwner"))

    @builtins.property
    @jsii.member(jsii_name="attrTagKeyScope")
    def attr_tag_key_scope(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TagKeyScope: The rule monitors the tag key, only applies to rules created based on managed rules.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTagKeyScope"))

    @builtins.property
    @jsii.member(jsii_name="attrTagValueScope")
    def attr_tag_value_scope(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TagValueScope: The rule monitors the tag value, only applies to rules created based on managed rules.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTagValueScope"))


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
        config_rule_trigger_types: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        resource_types_scope: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        risk_level: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_identifier: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_owner: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        exclude_resource_ids_scope: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        input_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        maximum_execution_frequency: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        region_ids_scope: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_ids_scope: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tag_key_logic_scope: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tag_key_scope: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tag_value_scope: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0526bf0a9f7d578c5ad468f626242f9925b64de0804ff58e4ce390a61bbb576d)
            check_type(argname="argument config_rule_trigger_types", value=config_rule_trigger_types, expected_type=type_hints["config_rule_trigger_types"])
            check_type(argname="argument resource_types_scope", value=resource_types_scope, expected_type=type_hints["resource_types_scope"])
            check_type(argname="argument risk_level", value=risk_level, expected_type=type_hints["risk_level"])
            check_type(argname="argument rule_name", value=rule_name, expected_type=type_hints["rule_name"])
            check_type(argname="argument source_identifier", value=source_identifier, expected_type=type_hints["source_identifier"])
            check_type(argname="argument source_owner", value=source_owner, expected_type=type_hints["source_owner"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument exclude_resource_ids_scope", value=exclude_resource_ids_scope, expected_type=type_hints["exclude_resource_ids_scope"])
            check_type(argname="argument input_parameters", value=input_parameters, expected_type=type_hints["input_parameters"])
            check_type(argname="argument maximum_execution_frequency", value=maximum_execution_frequency, expected_type=type_hints["maximum_execution_frequency"])
            check_type(argname="argument region_ids_scope", value=region_ids_scope, expected_type=type_hints["region_ids_scope"])
            check_type(argname="argument resource_group_ids_scope", value=resource_group_ids_scope, expected_type=type_hints["resource_group_ids_scope"])
            check_type(argname="argument tag_key_logic_scope", value=tag_key_logic_scope, expected_type=type_hints["tag_key_logic_scope"])
            check_type(argname="argument tag_key_scope", value=tag_key_scope, expected_type=type_hints["tag_key_scope"])
            check_type(argname="argument tag_value_scope", value=tag_value_scope, expected_type=type_hints["tag_value_scope"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property configRuleTriggerTypes: The trigger type of the rule.

        Valid values:  ConfigurationItemChangeNotification: The rule is triggered upon configuration changes. ScheduledNotification: The rule is triggered as scheduled.
        '''
        result = self._values.get("config_rule_trigger_types")
        assert result is not None, "Required property 'config_rule_trigger_types' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def resource_types_scope(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''Property resourceTypesScope: The types of the resources to be evaluated against the rule.'''
        result = self._values.get("resource_types_scope")
        assert result is not None, "Required property 'resource_types_scope' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def risk_level(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property riskLevel: The risk level of the resources that are not compliant with the rule.

        Valid values:  1: critical 2: warning 3: info
        '''
        result = self._values.get("risk_level")
        assert result is not None, "Required property 'risk_level' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property ruleName: The name of the rule.'''
        result = self._values.get("rule_name")
        assert result is not None, "Required property 'rule_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_identifier(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property sourceIdentifier: The identifier of the rule.

        For a managed rule, the value is the name of the managed rule. For a custom rule, the value is the ARN of the custom rule
        '''
        result = self._values.get("source_identifier")
        assert result is not None, "Required property 'source_identifier' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_owner(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property sourceOwner: Specifies whether you or Alibaba Cloud owns and manages the rule.

        Valid values:  CUSTOM_FC: The rule is a custom rule and you own the rule. ALIYUN: The rule is a managed rule and Alibaba Cloud owns the rule
        '''
        result = self._values.get("source_owner")
        assert result is not None, "Required property 'source_owner' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the rule.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def exclude_resource_ids_scope(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property excludeResourceIdsScope: The rule monitors excluded resource IDs, multiple of which are separated by commas, only applies to rules created based on managed rules, , custom rule this field is empty.'''
        result = self._values.get("exclude_resource_ids_scope")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def input_parameters(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property inputParameters: The settings of the input parameters for the rule.'''
        result = self._values.get("input_parameters")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def maximum_execution_frequency(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property maximumExecutionFrequency: The frequency of the compliance evaluations.

        Valid values:  One_Hour Three_Hours Six_Hours Twelve_Hours TwentyFour_Hours
        '''
        result = self._values.get("maximum_execution_frequency")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def region_ids_scope(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property regionIdsScope: The rule monitors region IDs, separated by commas, only applies to rules created based on managed rules.'''
        result = self._values.get("region_ids_scope")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_ids_scope(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupIdsScope: The rule monitors resource group IDs, separated by commas, only applies to rules created based on managed rules.'''
        result = self._values.get("resource_group_ids_scope")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tag_key_logic_scope(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property tagKeyLogicScope:.'''
        result = self._values.get("tag_key_logic_scope")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tag_key_scope(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property tagKeyScope: The rule monitors the tag key, only applies to rules created based on managed rules.'''
        result = self._values.get("tag_key_scope")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tag_value_scope(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property tagValueScope: The rule monitors the tag value, only applies to rules created based on managed rules.'''
        result = self._values.get("tag_value_scope")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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

def _typecheckingstub__8d298c2e48924e913d5237356989f41b8191517a9239ed7cbb6ab58c1accf50c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[CompliancePackProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b940619f7554181f4198251de38e73271a2b4d9c344d9cbe0b42294d3899d2c6(
    *,
    compliance_pack_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    risk_level: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    compliance_pack_template_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    config_rules: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCompliancePack.ConfigRulesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5eae41e4e5bea0e0ecaab1a7014db49c75d0d374093b82476b2ecdb279c1ccd1(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DeliveryChannelProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1a51e6f71f25931bfc953540068244f086a3844bbdb6c84c877d7bcf58da399c(
    *,
    delivery_channel_assume_role_arn: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    delivery_channel_target_arn: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    delivery_channel_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    delivery_channel_condition: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    delivery_channel_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__82174021b18e4fa77aa7496a14adf6cc9ffa8e452fd84df19ead650868c718f3(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosCompliancePackProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d61c0deac862e00bd7a1d3af2a7001cc42a7ec691e7801c1d1a59f8ef1ba4b77(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5d47ce277aae720f2d6c0d5377bde8ab5a05b55a45dd6d6aa94ee0a3c38e1cb1(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b4ff37882e9592a0b27faf9d9a552c1200612e4a913ea53059fc17eb06fb17d7(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4ab42adc30f90c629ae7bdcd173e44ecdee089103e4494209bd3bebb4c093674(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dc1f2460d9e3dd3815e6824d5298b49f84aa05728bd3359e5a05ceeec1e48b02(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__96c91c9f862b29e559d8f3e0379a34911d00c042d3897437bec5c1cc684d7e56(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__78bd1cb44fce9ba7d01d155ce2d60c88b98a83f68a4fcb6c60aafec140a07030(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCompliancePack.ConfigRulesProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3e84ee948f5c31f1c79577bb1cd50eb87d6d078f66f152fa9180a755834c88c4(
    *,
    parameter_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    parameter_value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    required: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f8246b4cfefe129e1cbd38d3ff2fbdc3f907253da0215b9c91e07b1b2d42b455(
    *,
    config_rule_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    config_rule_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    config_rule_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCompliancePack.ConfigRuleParametersProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    managed_rule_identifier: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d83885691529c380a661bd7233489b510591fee1f41c1d3376ecd67ffac3f0c6(
    *,
    compliance_pack_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    risk_level: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    compliance_pack_template_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    config_rules: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCompliancePack.ConfigRulesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__243fdcfdcdab9d92015c74b1e1bc0e80c79e09b59601dc31e26229bd3559a386(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDeliveryChannelProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b65d25efc1b79d340025825d2a2a78b9bcca84b7b60594d6057d80415384c770(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ee4ad364b703cffaacac1c82abaa5fbafe4c7a22da4a6e624a6cace97e9c3c69(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fa9c7cd4841643c72e240a5e756e4e901a63437b994ba5bf40af5ec60f45efe5(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6bb87c4b3f867dd00998e99c7d9e03be37c39a23fec54f0bedc8186d525fffa2(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2aa0f405c0a7cd43a469a8d541867b947a1621bfef66fe9358bcd43823ac9aad(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7c502e906149f5997b3703a1c9cb885308f29392c29e5d04445d3f4bc3657ff2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__37f64b6f6b27291233e5af39121e01da7b703fb910dc8e668f75484670ae4198(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e56527b5c68df98b0e8ac759d272df07ddd8c491150d7d3269307053f55b65b0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__061dcc92fad0df30b754bb7c85d2da1a43028d75826a353d138c1696c4e0dbab(
    *,
    delivery_channel_assume_role_arn: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    delivery_channel_target_arn: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    delivery_channel_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    delivery_channel_condition: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    delivery_channel_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5aa6aed40e69bb740c01878c6fc87e0c91714cc296f0743ca485aef30b08b1f1(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosRuleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1f808e3c85707e0beb65285fb3034387cfc8ab11c23d9b72d26a1cb0c74c3201(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c9dc5a298bc5c03a834a0bd05946f04048b1898c5ebf3ab4489836424e0de286(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a43133f555675d72d28fca1a0653e073c699065df6a152071f2e894d619f89d9(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__23687ceb57ce6be77dac51d66c7fa03c5c7d3eedfa4f88c97b333a0338fe1e92(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2a0cd91b50538139256fa3d719405282d43f3e486f8721383e4fcf4edd423c96(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__313a72c06bb1fc8b5f77d046720daac5bef6fe98d02d2a2aa2e9b9571f270ed1(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__16a7588c6b1f9d40118ae453a00ce2197523ad74ff05190913bb833906dd1893(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6a5fad6eb26b8af695f7554ae3c63cf6a4ba62e5ef29b71169e96a8613c87ce4(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__04238f10a7a52c83695b5f6f551a7b94c7dbf396d5cd7358d4f2b8c7c8ad993a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__61c51f0fbd66f964c5ea186d68e60b4219a812073c195bfa7a3c78f15629d0a5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__69c282f7900cef8cc2abd6c1a5d9624b8596e4bbba3ecba7a16cc32808c6bd8a(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b91e47144c3d77dcc0c36a5649635ac251f178132e2a01b33f093eaaf3e21620(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bbfa6da1fd30eaeaa43055d958fdb4f05a09fd391c39df2ad883b9476b9f8e6b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cfb26f901db68dd7492e5a38e9e6b361604cbb87dcf70b544a5464dfae91799a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6e7af18c74505acca8c1d9a8cd4a024f2f983921ada9be4641037dbec31c224d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dc41d98ae7e27aacbd16082667bd560d4e8a6b045ccd8895da8c6dc0887e5f4c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7839dc01492241ef74030fdc821b6d5ebf2f082d476fff54a9a22fca78e1cd4f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__36fc4914a0c9b08e90c89d3e586f6a7972e1e5163ee5888684debe595528ee32(
    *,
    config_rule_trigger_types: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    resource_types_scope: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    risk_level: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_identifier: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_owner: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    exclude_resource_ids_scope: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    input_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    maximum_execution_frequency: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    region_ids_scope: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_ids_scope: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tag_key_logic_scope: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tag_key_scope: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tag_value_scope: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c3b39d4d560cc178a8284b5faae6e30f5d1589cb16645158bc1cd835ac0f6404(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RuleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0526bf0a9f7d578c5ad468f626242f9925b64de0804ff58e4ce390a61bbb576d(
    *,
    config_rule_trigger_types: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    resource_types_scope: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    risk_level: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_identifier: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_owner: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    exclude_resource_ids_scope: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    input_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    maximum_execution_frequency: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    region_ids_scope: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_ids_scope: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tag_key_logic_scope: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tag_key_scope: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tag_value_scope: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
