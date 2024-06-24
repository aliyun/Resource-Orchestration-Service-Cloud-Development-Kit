'''
## Aliyun ROS SAG Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as SAG from '@alicloud/ros-cdk-sag';
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


class ACLAssociation(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sag.ACLAssociation",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::SAG::ACLAssociation``, which is used to associate an access control list (ACL) with a Smart Access Gateway (SAG) instance.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosACLAssociation``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-aclassociation
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ACLAssociationProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__af3a4f35659cb8f72c4d49f6eceb1114a893bae3498b7fabcc48802c43db04eb)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__67dd3c1d8ccd5eecc9661cf02d244f96c15cb2aed41b7937ede10911d13889a5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b1067fbf9e89d23f15e2b3733acc7a88ac65f3cef0e84a98d2a62bcda821519c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "ACLAssociationProps":
        return typing.cast("ACLAssociationProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "ACLAssociationProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a208c82e0f7c6058ff0b4ca36392bbfb06871391d45aa4ca5c236c93543296f9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6ef314e677a14dd1a532b38c8248d58e591eb3f345459b1ec97dad7dbd4d4940)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sag.ACLAssociationProps",
    jsii_struct_bases=[],
    name_mapping={"acl_id": "aclId", "smart_ag_id": "smartAgId"},
)
class ACLAssociationProps:
    def __init__(
        self,
        *,
        acl_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        smart_ag_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ACLAssociation``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-aclassociation

        :param acl_id: Property aclId: Access control ID.
        :param smart_ag_id: Property smartAgId: An intelligent gateway instance that needs to bind access control.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f87d799eab9ec9d4ce1a77609ca0908c3a330f7c248c347ed92b639865bb7d4f)
            check_type(argname="argument acl_id", value=acl_id, expected_type=type_hints["acl_id"])
            check_type(argname="argument smart_ag_id", value=smart_ag_id, expected_type=type_hints["smart_ag_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "acl_id": acl_id,
            "smart_ag_id": smart_ag_id,
        }

    @builtins.property
    def acl_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property aclId: Access control ID.'''
        result = self._values.get("acl_id")
        assert result is not None, "Required property 'acl_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def smart_ag_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property smartAgId: An intelligent gateway instance that needs to bind access control.'''
        result = self._values.get("smart_ag_id")
        assert result is not None, "Required property 'smart_ag_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ACLAssociationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sag.ACLProps",
    jsii_struct_bases=[],
    name_mapping={"name": "name"},
)
class ACLProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ACL``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-acl

        :param name: Property name: Access control name. The length is 2-128 characters. It must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:// or https://.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f530ae186f1eeac977ffc4bb94a619ec606ba2c139ad54c8e85e8dd0915f80e7)
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "name": name,
        }

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property name: Access control name.

        The length is 2-128 characters. It must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:// or https://.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ACLProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ACLRule(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sag.ACLRule",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::SAG::ACLRule``, which is used to add an access control list (ACL) rule.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosACLRule``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-aclrule
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ACLRuleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__54062f89f597c4a9944587d9c4808663b66e54f136489889b9f24897fc99bb0e)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAcrId")
    def attr_acr_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AcrId: Access control rule ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAcrId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__182fb3efcf822fa669f62fd015a74e0b90ae73ff70956b04cede22fbedd9633b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a85707086465cadcbc20c5acdd3263e0b2132eecb995a0aa0a9aad62eef9bc47)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "ACLRuleProps":
        return typing.cast("ACLRuleProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "ACLRuleProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5429a5ca95996dcb10293f5de1c126554abcd86c5ee4146f609b9b107673f3c8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e9a79c119690fb910f6b55a8c628692198048a56f33e861bc64be0eeda3e996b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sag.ACLRuleProps",
    jsii_struct_bases=[],
    name_mapping={
        "acl_id": "aclId",
        "dest_cidr": "destCidr",
        "dest_port_range": "destPortRange",
        "direction": "direction",
        "ip_protocol": "ipProtocol",
        "policy": "policy",
        "source_cidr": "sourceCidr",
        "source_port_range": "sourcePortRange",
        "description": "description",
        "dpi_group_ids": "dpiGroupIds",
        "dpi_signature_ids": "dpiSignatureIds",
        "name": "name",
        "priority": "priority",
        "type": "type",
    },
)
class ACLRuleProps:
    def __init__(
        self,
        *,
        acl_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        dest_cidr: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        dest_port_range: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        direction: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ip_protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        policy: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_cidr: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_port_range: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dpi_group_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        dpi_signature_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        priority: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ACLRule``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-aclrule

        :param acl_id: Property aclId: Access control ID.
        :param dest_cidr: Property destCidr: Destination address, CIDR format and IP address range in IPv4 format.
        :param dest_port_range: Property destPortRange: Destination port range, 80/80.
        :param direction: Property direction: Regular direction. Value: in|out
        :param ip_protocol: Property ipProtocol: Protocol, not case sensitive.
        :param policy: Property policy: Access: accept|drop.
        :param source_cidr: Property sourceCidr: Source address, CIDR format and IP address range in IPv4 format.
        :param source_port_range: Property sourcePortRange: Source port range, 80/80.
        :param description: Property description: Rule description information, ranging from 1 to 512 characters.
        :param dpi_group_ids: Property dpiGroupIds: The ID of the application group. You can enter at most 100 application group IDs at a time. You can call the ListDpiGroups operation to query application group IDs and information about the applications.
        :param dpi_signature_ids: Property dpiSignatureIds: The ID of the application. You can enter at most 100 application IDs at a time. You can call the ListDpiSignatures operation to query application IDs and information about the applications.
        :param name: Property name: The name of the ACL rule. The name must be 2 to 100 characters in length, and can contain digits, underscores (_), and hyphens (-). It must start with a letter.
        :param priority: Property priority: Priority, ranging from 1 to 100. Default: 1
        :param type: Property type: The type of the ACL rule: Valid values: LAN: The ACL rule controls traffic of private IP addresses. This is the default value. WAN: The ACL rule controls traffic of public IP addresses.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9c175a8a99b2a7239f888c77275d6302699ad2d5a2886ed082f0e4ca5cac7885)
            check_type(argname="argument acl_id", value=acl_id, expected_type=type_hints["acl_id"])
            check_type(argname="argument dest_cidr", value=dest_cidr, expected_type=type_hints["dest_cidr"])
            check_type(argname="argument dest_port_range", value=dest_port_range, expected_type=type_hints["dest_port_range"])
            check_type(argname="argument direction", value=direction, expected_type=type_hints["direction"])
            check_type(argname="argument ip_protocol", value=ip_protocol, expected_type=type_hints["ip_protocol"])
            check_type(argname="argument policy", value=policy, expected_type=type_hints["policy"])
            check_type(argname="argument source_cidr", value=source_cidr, expected_type=type_hints["source_cidr"])
            check_type(argname="argument source_port_range", value=source_port_range, expected_type=type_hints["source_port_range"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument dpi_group_ids", value=dpi_group_ids, expected_type=type_hints["dpi_group_ids"])
            check_type(argname="argument dpi_signature_ids", value=dpi_signature_ids, expected_type=type_hints["dpi_signature_ids"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument priority", value=priority, expected_type=type_hints["priority"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "acl_id": acl_id,
            "dest_cidr": dest_cidr,
            "dest_port_range": dest_port_range,
            "direction": direction,
            "ip_protocol": ip_protocol,
            "policy": policy,
            "source_cidr": source_cidr,
            "source_port_range": source_port_range,
        }
        if description is not None:
            self._values["description"] = description
        if dpi_group_ids is not None:
            self._values["dpi_group_ids"] = dpi_group_ids
        if dpi_signature_ids is not None:
            self._values["dpi_signature_ids"] = dpi_signature_ids
        if name is not None:
            self._values["name"] = name
        if priority is not None:
            self._values["priority"] = priority
        if type is not None:
            self._values["type"] = type

    @builtins.property
    def acl_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property aclId: Access control ID.'''
        result = self._values.get("acl_id")
        assert result is not None, "Required property 'acl_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def dest_cidr(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property destCidr: Destination address, CIDR format and IP address range in IPv4 format.'''
        result = self._values.get("dest_cidr")
        assert result is not None, "Required property 'dest_cidr' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def dest_port_range(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property destPortRange: Destination port range, 80/80.'''
        result = self._values.get("dest_port_range")
        assert result is not None, "Required property 'dest_port_range' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def direction(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property direction: Regular direction.

        Value: in|out
        '''
        result = self._values.get("direction")
        assert result is not None, "Required property 'direction' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ip_protocol(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property ipProtocol: Protocol, not case sensitive.'''
        result = self._values.get("ip_protocol")
        assert result is not None, "Required property 'ip_protocol' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def policy(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property policy: Access: accept|drop.'''
        result = self._values.get("policy")
        assert result is not None, "Required property 'policy' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_cidr(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property sourceCidr: Source address, CIDR format and IP address range in IPv4 format.'''
        result = self._values.get("source_cidr")
        assert result is not None, "Required property 'source_cidr' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_port_range(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property sourcePortRange: Source port range, 80/80.'''
        result = self._values.get("source_port_range")
        assert result is not None, "Required property 'source_port_range' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: Rule description information, ranging from 1 to 512 characters.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dpi_group_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property dpiGroupIds: The ID of the application group.

        You can enter at most 100 application group IDs at a time.
        You can call the ListDpiGroups operation to query application group IDs and information about the applications.
        '''
        result = self._values.get("dpi_group_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def dpi_signature_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property dpiSignatureIds: The ID of the application.

        You can enter at most 100 application IDs at a time.
        You can call the ListDpiSignatures operation to query application IDs and information about the applications.
        '''
        result = self._values.get("dpi_signature_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property name: The name of the ACL rule.

        The name must be 2 to 100 characters in length, and can contain digits, underscores
        (_), and hyphens (-). It must start with a letter.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def priority(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property priority: Priority, ranging from 1 to 100.

        Default: 1
        '''
        result = self._values.get("priority")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property type: The type of the ACL rule: Valid values: LAN: The ACL rule controls traffic of private IP addresses.

        This is the default value.
        WAN: The ACL rule controls traffic of public IP addresses.
        '''
        result = self._values.get("type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ACLRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Acl(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sag.Acl",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::SAG::ACL``, which is used to create an access control list (ACL).

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosACL``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-acl
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[ACLProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__52d84226253579f6ce20e6f3bfc00322c3736193ca09b348e4f88834f7339f1d)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAclId")
    def attr_acl_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AclId: Access control set ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAclId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2e3e42ca099ef400f752a6fea7b68c9276e61a5495c687eb12342421e9d750a6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c371f9a5999b49aebde6b8ddafea0a8b6200f2f2e9d65a3ca0b09d6b3326cfef)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> ACLProps:
        return typing.cast(ACLProps, jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: ACLProps) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e18ade3db4892ea4af2d15852f9c903d779be80e8c6d4d4f1531b71ac866e082)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3f3eeace91f5b77b1ad4e2b6e1e0e933338d704475e21a0e1b624fa0477703bf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


class App(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sag.App",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::SAG::App``, which is used to create a Smart Access Gateway (SAG) app instance.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosApp``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-app
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["AppProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4d36297bfc1cb38d8901f5a4d69311f0d71812589fc5f22db32fd154ce50837a)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute OrderId: The ID of the order that you placed to subscribe to the SAG APP instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="attrSmartAgId")
    def attr_smart_ag_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SmartAGId: The ID of the SAG APP instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSmartAgId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__180eb00a39a74c959bb472addf5bc500119bcf9e769cf508207b10f0a6231e8b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6ba60e9cbd9179d1f9b6578a68ad419a1aa01b768c05d07132cc4ba1a297c534)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "AppProps":
        return typing.cast("AppProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "AppProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9eb9a96cbb6d9c51e566c8577babd21c872814074d636fbb0931e1e0a7ff885c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9b47e0d7c4e74af06d73ad9210627f9b328cf21d87d5ccb6e6d59442368c33f1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sag.AppProps",
    jsii_struct_bases=[],
    name_mapping={
        "auto_pay": "autoPay",
        "data_plan": "dataPlan",
        "period": "period",
        "user_count": "userCount",
        "charge_type": "chargeType",
    },
)
class AppProps:
    def __init__(
        self,
        *,
        auto_pay: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
        data_plan: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        period: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        user_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``App``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-app

        :param auto_pay: Property autoPay: Specifies whether to automatically pay the bills of SAG APP instances. Default value: false. Valid values: true: automatically pays the bills of SAG APP instances. false: does not automatically pay the bills of SAG APP instances. If you set the parameter to false, after you call this operation, go to Billing Management of the SAG console to complete the payment, the instance can be created.
        :param data_plan: Property dataPlan: The quota of the traffic plan that the system allows each client account to use for free each month. Unit: GB. Set the value to 5. Note The system allows each client account to use 5 GB traffic plan for free.
        :param period: Property period: The subscription period of the SAG APP instance. Unit: months. Valid values: 1~9, 12, 24, and 36.
        :param user_count: Property userCount: The quota of client accounts for the SAG APP instance. Note The quota must be a positive multiple of 5, for example, 5, 10, and 15.
        :param charge_type: Property chargeType: The billing method of the SAG APP instance. Set the value to PREPAY. This value indicates that the SAG APP instance is a subscription resource.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a26b9e8958c16e0d74c69c3acdf1840e15c0aab3502f17ef2afc02b5b2e232aa)
            check_type(argname="argument auto_pay", value=auto_pay, expected_type=type_hints["auto_pay"])
            check_type(argname="argument data_plan", value=data_plan, expected_type=type_hints["data_plan"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument user_count", value=user_count, expected_type=type_hints["user_count"])
            check_type(argname="argument charge_type", value=charge_type, expected_type=type_hints["charge_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "auto_pay": auto_pay,
            "data_plan": data_plan,
            "period": period,
            "user_count": user_count,
        }
        if charge_type is not None:
            self._values["charge_type"] = charge_type

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property autoPay: Specifies whether to automatically pay the bills of SAG APP instances.

        Default value:
        false. Valid values:
        true: automatically pays the bills of SAG APP instances.
        false: does not automatically pay the bills of SAG APP instances.
        If you set the parameter to false, after you call this operation, go to Billing Management
        of the SAG console to complete the payment, the instance can be created.
        '''
        result = self._values.get("auto_pay")
        assert result is not None, "Required property 'auto_pay' is missing"
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def data_plan(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dataPlan: The quota of the traffic plan that the system allows each client account to use for free each month.

        Unit: GB. Set the value to 5.
        Note The system allows each client account to use 5 GB traffic plan for free.
        '''
        result = self._values.get("data_plan")
        assert result is not None, "Required property 'data_plan' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def period(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property period: The subscription period of the SAG APP instance.

        Unit: months.
        Valid values: 1~9, 12, 24, and 36.
        '''
        result = self._values.get("period")
        assert result is not None, "Required property 'period' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def user_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property userCount: The quota of client accounts for the SAG APP instance.

        Note The quota must be a positive multiple of 5, for example, 5, 10, and 15.
        '''
        result = self._values.get("user_count")
        assert result is not None, "Required property 'user_count' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property chargeType: The billing method of the SAG APP instance.

        Set the value to PREPAY.
        This value indicates that the SAG APP instance is a subscription resource.
        '''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AppProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class AppUser(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sag.AppUser",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::SAG::AppUser``, which is used to create a client account for a Smart Access Gateway (SAG) app instance.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosAppUser``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-appuser
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["AppUserProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ba3be7b77cd4e2ad3723aa66d40449ab5812ca4dbf61e2e5eb09bee49407568b)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrSmartAgId")
    def attr_smart_ag_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SmartAGId: The ID of the SAG APP instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSmartAgId"))

    @builtins.property
    @jsii.member(jsii_name="attrUserName")
    def attr_user_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute UserName: <heat.engine.properties.Schema object at 0x7f054fbe3d10>.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUserName"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__92161a91780bb7b9f29360ff4ef1f46465a988a4c7d05e8eafaf0b4602e04f9a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e17a005322b195750b71ca45feffbf3bbbaf4c99704f5a297d863234bc0f90fa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "AppUserProps":
        return typing.cast("AppUserProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "AppUserProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b3d9695a8ccc9824d162ba39139ecc36bc88141697161814bcaed748de8a8ae5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__93deaa0f1e49f91d3486d1511e6a00044c5cc7479de267291be41ab58e8c0fab)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sag.AppUserProps",
    jsii_struct_bases=[],
    name_mapping={
        "bandwidth": "bandwidth",
        "smart_ag_id": "smartAgId",
        "user_mail": "userMail",
        "client_ip": "clientIp",
        "disable": "disable",
        "password": "password",
        "user_name": "userName",
    },
)
class AppUserProps:
    def __init__(
        self,
        *,
        bandwidth: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        smart_ag_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        user_mail: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        client_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        disable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        user_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``AppUser``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-appuser

        :param bandwidth: Property bandwidth: The bandwidth. Unit: Kbit/s. Maximum bandwidth: 2,000 Kbit/s.
        :param smart_ag_id: Property smartAgId: The ID of the SAG APP instance.
        :param user_mail: Property userMail: The email address of the user. The username and password are sent to the specified email address.
        :param client_ip: Property clientIp: After this feature is enabled, you must specify the IP address of SAG APP. In this case, SAG APP connects to Alibaba Cloud through the specified IP address. Note The IP address must fall into the CIDR block of the private network. After this feature is disabled, an IP address within the CIDR block of the private network is assigned to SAG APP. Each connection to Alibaba Cloud uses a different IP address.
        :param disable: Property disable: Disable user or not.
        :param password: Property password: The password used to log on to SAG APP. For a client account, if you specify the username, you must also specify the password.
        :param user_name: Property userName: The username of the client account. Usernames of client accounts added to the same SAG APP instance must be unique. For a client account, if you specify the username, you must also specify the password.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bdc8394557a3ca9be58b4e7b188a4f94cd2b5f3d89420bcab416a2944378b362)
            check_type(argname="argument bandwidth", value=bandwidth, expected_type=type_hints["bandwidth"])
            check_type(argname="argument smart_ag_id", value=smart_ag_id, expected_type=type_hints["smart_ag_id"])
            check_type(argname="argument user_mail", value=user_mail, expected_type=type_hints["user_mail"])
            check_type(argname="argument client_ip", value=client_ip, expected_type=type_hints["client_ip"])
            check_type(argname="argument disable", value=disable, expected_type=type_hints["disable"])
            check_type(argname="argument password", value=password, expected_type=type_hints["password"])
            check_type(argname="argument user_name", value=user_name, expected_type=type_hints["user_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "bandwidth": bandwidth,
            "smart_ag_id": smart_ag_id,
            "user_mail": user_mail,
        }
        if client_ip is not None:
            self._values["client_ip"] = client_ip
        if disable is not None:
            self._values["disable"] = disable
        if password is not None:
            self._values["password"] = password
        if user_name is not None:
            self._values["user_name"] = user_name

    @builtins.property
    def bandwidth(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property bandwidth: The bandwidth.

        Unit: Kbit/s. Maximum bandwidth: 2,000 Kbit/s.
        '''
        result = self._values.get("bandwidth")
        assert result is not None, "Required property 'bandwidth' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def smart_ag_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property smartAgId: The ID of the SAG APP instance.'''
        result = self._values.get("smart_ag_id")
        assert result is not None, "Required property 'smart_ag_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def user_mail(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property userMail: The email address of the user.

        The username and password are sent to the specified
        email address.
        '''
        result = self._values.get("user_mail")
        assert result is not None, "Required property 'user_mail' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def client_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property clientIp: After this feature is enabled, you must specify the IP address of SAG APP.

        In this
        case, SAG APP connects to Alibaba Cloud through the specified IP address.
        Note The IP address must fall into the CIDR block of the private network.
        After this feature is disabled, an IP address within the CIDR block of the private
        network is assigned to SAG APP. Each connection to Alibaba Cloud uses a different
        IP address.
        '''
        result = self._values.get("client_ip")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def disable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property disable: Disable user or not.'''
        result = self._values.get("disable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property password: The password used to log on to SAG APP.

        For a client account, if you specify the username, you must also specify the password.
        '''
        result = self._values.get("password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def user_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property userName: The username of the client account.

        Usernames of client accounts added to the same
        SAG APP instance must be unique.
        For a client account, if you specify the username, you must also specify the password.
        '''
        result = self._values.get("user_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AppUserProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class CloudConnectNetwork(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sag.CloudConnectNetwork",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::SAG::CloudConnectNetwork``, which is used to create a Cloud Connect Network (CCN) instance.

    CNN is a device access matrix composed of Alibaba Cloud distributed Smart Access Gateways (SAGs). You can add multiple SAGs to a CCN instance and then attach the CCN instance to a Cloud Enterprise Network (CEN) instance. In this way, you can connect your local branches to Alibaba Cloud.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosCloudConnectNetwork``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-cloudconnectnetwork
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["CloudConnectNetworkProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4efb85fba06871d3bece12071358121c5161815dabee515c3e5105c83f82da02)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCcnId")
    def attr_ccn_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CcnId: The ID of the CCN instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCcnId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1443bf6602961a6410aa945b76774cde7a4cee7fdff1d13bcd30ecaf6c354b98)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4aea792e5440d62340b8718ce1db1500560d4f1fbcf3394a48be222842f876d0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "CloudConnectNetworkProps":
        return typing.cast("CloudConnectNetworkProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "CloudConnectNetworkProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2e1288538f8f7b42aaa429d4b82b8812acbe6da140d382edd22d5638062d0d49)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__13e448053fcb08cddf7973ed6ac320f4ad6bc3070069d84e111acc99e3bb428a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sag.CloudConnectNetworkProps",
    jsii_struct_bases=[],
    name_mapping={
        "description": "description",
        "is_default": "isDefault",
        "name": "name",
        "tags": "tags",
    },
)
class CloudConnectNetworkProps:
    def __init__(
        self,
        *,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        is_default: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosCloudConnectNetwork.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``CloudConnectNetwork``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-cloudconnectnetwork

        :param description: Property description: The description of the CCN instance. The description can contain 2 to 256 characters. The description cannot start with http:// or https://.
        :param is_default: Property isDefault: Whether is created by system.
        :param name: Property name: The name of the CCN instance. The name can contain 2 to 128 characters including a-z, A-Z, 0-9, chinese, underlines, and hyphens. The name must start with an English letter, but cannot start with http:// or https://.
        :param tags: Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b6dbe9a74e1c99bc2e4df2e87cae836af9efdafb28645b1eb33087f6a6c085a5)
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument is_default", value=is_default, expected_type=type_hints["is_default"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if description is not None:
            self._values["description"] = description
        if is_default is not None:
            self._values["is_default"] = is_default
        if name is not None:
            self._values["name"] = name
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the CCN instance.

        The description can contain 2 to 256 characters. The description cannot start with http:// or https://.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def is_default(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property isDefault: Whether is created by system.'''
        result = self._values.get("is_default")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property name: The name of the CCN instance.

        The name can contain 2 to 128 characters including a-z, A-Z, 0-9, chinese, underlines, and hyphens. The name must start with an English letter, but cannot start with http:// or https://.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(
        self,
    ) -> typing.Optional[typing.List["RosCloudConnectNetwork.TagsProperty"]]:
        '''Property tags: Tags to attach to instance.

        Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosCloudConnectNetwork.TagsProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "CloudConnectNetworkProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class GrantCcnToCen(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sag.GrantCcnToCen",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::SAG::GrantCcnToCen``, which is used to grant permissions on a Cloud Connect Network (CCN) instance to a Cloud Enterprise Network (CEN) instance.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosGrantCcnToCen``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-grantccntocen
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["GrantCcnToCenProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c4d121ac09976f46e349e33ceccb658e4f5859b17edb91752b4fb151bec3fd7c)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCcnInstanceId")
    def attr_ccn_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CcnInstanceId: The ID of the CCN instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCcnInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrCenInstanceId")
    def attr_cen_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CenInstanceId: The ID of the CEN instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCenInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__144f7f0e1c5a9cfa063588883a305d1a7eab390c500e50f1d700b1ee13e6d7ef)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c8ffdf7863c7b00dddb91b2e766f448e4ad5318dc7f75d1338df638635a84794)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "GrantCcnToCenProps":
        return typing.cast("GrantCcnToCenProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "GrantCcnToCenProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__43649f9c135e22f9523b8056ead6e2e06084f64465a7115be46c0195641841f7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__602585255ad215262f39223920c4abd7b0908b4b040db0b2918c0f0f79c2c8c1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sag.GrantCcnToCenProps",
    jsii_struct_bases=[],
    name_mapping={
        "ccn_instance_id": "ccnInstanceId",
        "cen_instance_id": "cenInstanceId",
        "cen_uid": "cenUid",
    },
)
class GrantCcnToCenProps:
    def __init__(
        self,
        *,
        ccn_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cen_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cen_uid: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``GrantCcnToCen``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-grantccntocen

        :param ccn_instance_id: Property ccnInstanceId: The ID of the CCN instance.
        :param cen_instance_id: Property cenInstanceId: The ID of the CEN instance.
        :param cen_uid: Property cenUid: The ID of the account to which the CEN instance belongs.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5d1dd868d299afbcd166e95681187416beaf0655c29199386d1a9c6b26e73506)
            check_type(argname="argument ccn_instance_id", value=ccn_instance_id, expected_type=type_hints["ccn_instance_id"])
            check_type(argname="argument cen_instance_id", value=cen_instance_id, expected_type=type_hints["cen_instance_id"])
            check_type(argname="argument cen_uid", value=cen_uid, expected_type=type_hints["cen_uid"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "ccn_instance_id": ccn_instance_id,
            "cen_instance_id": cen_instance_id,
            "cen_uid": cen_uid,
        }

    @builtins.property
    def ccn_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property ccnInstanceId: The ID of the CCN instance.'''
        result = self._values.get("ccn_instance_id")
        assert result is not None, "Required property 'ccn_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cen_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property cenInstanceId: The ID of the CEN instance.'''
        result = self._values.get("cen_instance_id")
        assert result is not None, "Required property 'cen_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cen_uid(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property cenUid: The ID of the account to which the CEN instance belongs.'''
        result = self._values.get("cen_uid")
        assert result is not None, "Required property 'cen_uid' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "GrantCcnToCenProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Qos(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sag.Qos",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::SAG::Qos``ALIYUN::SAG::QoS is used to create a quality of service (QoS) policy for a Smart Access Gateway (SAG) instance.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosQos``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qos
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["QosProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bcd23ced0343fcf0d130be858d262a964a9cc9c1d10354478a22c36d4cd0e24d)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrQosId")
    def attr_qos_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute QosId: The ID of the QoS policy.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrQosId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__001f9fe7124f799e949a6594b3e68e0cfe20b4c5c05c260e0027021c83650e4f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__33723ee42aff9d078c9086dce380f5868d052e8fed9665aad0e3f7d569aa1f60)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "QosProps":
        return typing.cast("QosProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "QosProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__40ec91528d44670b81768205b4712912b868494945078fd58b177a42dd15c64c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__589c8ae55256d7e73fc755994d2ecf11c648c847c03a7bf305a93bd95185f6e1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


class QosAssociation(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sag.QosAssociation",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::SAG::QosAssociation``, which is used to associate a quality of service (QoS) policy with a Smart Access Gateway (SAG) instance.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosQosAssociation``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qosassociation
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["QosAssociationProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1f8b430590a50f82fedf069ea1ef64c713f58ba24a469d3f6554bc80e28d8d21)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrQosId")
    def attr_qos_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute QosId: The ID of the QoS policy.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrQosId"))

    @builtins.property
    @jsii.member(jsii_name="attrSmartAgId")
    def attr_smart_ag_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SmartAGId: The ID of the SAG instance to which the QoS policy is to be applied.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSmartAgId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3094c2bfa112ad025f9fc1d186786f87c3901095dd0ff535acf98a87e0ce15c3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5e05fc924f6e8c083a7dea19d267615f2b0f0a536e8811246401ab101fae387a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "QosAssociationProps":
        return typing.cast("QosAssociationProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "QosAssociationProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ac0325b8262682f3a60ef4f5f86ea9a2404762ac14d776df2556c83ec556f934)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c4ce80eec5ce6ffc0392234ec7331a7b0a3017b93278ce718d6470230f106697)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sag.QosAssociationProps",
    jsii_struct_bases=[],
    name_mapping={"qos_id": "qosId", "smart_ag_id": "smartAgId"},
)
class QosAssociationProps:
    def __init__(
        self,
        *,
        qos_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        smart_ag_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``QosAssociation``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qosassociation

        :param qos_id: Property qosId: The instance ID of the QoS policy.
        :param smart_ag_id: Property smartAgId: The ID of the SAG instance to which the QoS policy is to be applied.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7ab091b0d57c40ac5ecce01658c561423f1ace0898f4dc67dd0371b7bdefa88e)
            check_type(argname="argument qos_id", value=qos_id, expected_type=type_hints["qos_id"])
            check_type(argname="argument smart_ag_id", value=smart_ag_id, expected_type=type_hints["smart_ag_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "qos_id": qos_id,
            "smart_ag_id": smart_ag_id,
        }

    @builtins.property
    def qos_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property qosId: The instance ID of the QoS policy.'''
        result = self._values.get("qos_id")
        assert result is not None, "Required property 'qos_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def smart_ag_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property smartAgId: The ID of the SAG instance to which the QoS policy is to be applied.'''
        result = self._values.get("smart_ag_id")
        assert result is not None, "Required property 'smart_ag_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "QosAssociationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class QosCar(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sag.QosCar",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::SAG::QosCar``, which is used to create a traffic throttling rule for a quality of service (QoS) policy.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosQosCar``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qoscar
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["QosCarProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e3cd41be5cb5219fef45a7a0527ba2bd0ce9b9c5c5918230a54a844cc7d7b168)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrQosCarId")
    def attr_qos_car_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute QosCarId: The ID of the traffic throttling policy.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrQosCarId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3c88f370619e48f279b4425f338419fe4db12c797d2fc3d94d6ed71e5ea203eb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f0ce9969dd967600c883233da8bfc7e5e4423320283bcbe483934add30934406)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "QosCarProps":
        return typing.cast("QosCarProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "QosCarProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__94e5aa002504ccfb6cbe3ab3e3289948727ec26f23e4a2a82eb7b08b1d377d9e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d08c9e916ccc8baa4b63fe6edd23e3a83c82cd6d07e9dda0786c5b538b2580ae)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sag.QosCarProps",
    jsii_struct_bases=[],
    name_mapping={
        "limit_type": "limitType",
        "priority": "priority",
        "qos_id": "qosId",
        "description": "description",
        "max_bandwidth_abs": "maxBandwidthAbs",
        "max_bandwidth_percent": "maxBandwidthPercent",
        "min_bandwidth_abs": "minBandwidthAbs",
        "min_bandwidth_percent": "minBandwidthPercent",
        "name": "name",
        "percent_source_type": "percentSourceType",
    },
)
class QosCarProps:
    def __init__(
        self,
        *,
        limit_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        priority: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        qos_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        max_bandwidth_abs: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        max_bandwidth_percent: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        min_bandwidth_abs: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        min_bandwidth_percent: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        percent_source_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``QosCar``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qoscar

        :param limit_type: Property limitType: The type of the traffic throttling policy. Valid values: Absolute: throttles traffic by a specific bandwidth range. Percent: throttles traffic by a specific range of bandwidth percentage.
        :param priority: Property priority: The priority of the traffic throttling policy. A smaller value represents a higher priority. If policies are assigned the same priority, the one applied the earliest prevails. Valid values: 1 to 7.
        :param qos_id: Property qosId: The ID of the QoS policy.
        :param description: Property description: The description of the traffic throttling policy.
        :param max_bandwidth_abs: Property maxBandwidthAbs: The maximum bandwidth. This parameter is required when LimitType is set to Absolute.
        :param max_bandwidth_percent: Property maxBandwidthPercent: The maximum percentage that is based on the maximum upstream bandwidth of the SAG instance. This parameter is required when LimitType is set to Percent.
        :param min_bandwidth_abs: Property minBandwidthAbs: The minimum bandwidth. This parameter is required when LimitType is set to Absolute.
        :param min_bandwidth_percent: Property minBandwidthPercent: The minimum percentage that is based on the maximum upstream bandwidth of the SAG instance. This parameter is required when LimitType is set to Percent.
        :param name: Property name: The name of the traffic throttling policy. The name must be 2 to 128 characters in length, and can contain Chinese characters, letters, digits, periods (.), underscores (_), and hyphens (-).
        :param percent_source_type: Property percentSourceType: If the policy throttles traffic based on a specified bandwidth percentage, the following options are available: CcnBandwidth: Cloud Enterprise Network (CCN) bandwidth. InternetUpBandwidth: Internet upstream bandwidth.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9136fbdde9a5f9ee466ff9b47ea34c3e0b941e1247006ecb6928a569da067455)
            check_type(argname="argument limit_type", value=limit_type, expected_type=type_hints["limit_type"])
            check_type(argname="argument priority", value=priority, expected_type=type_hints["priority"])
            check_type(argname="argument qos_id", value=qos_id, expected_type=type_hints["qos_id"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument max_bandwidth_abs", value=max_bandwidth_abs, expected_type=type_hints["max_bandwidth_abs"])
            check_type(argname="argument max_bandwidth_percent", value=max_bandwidth_percent, expected_type=type_hints["max_bandwidth_percent"])
            check_type(argname="argument min_bandwidth_abs", value=min_bandwidth_abs, expected_type=type_hints["min_bandwidth_abs"])
            check_type(argname="argument min_bandwidth_percent", value=min_bandwidth_percent, expected_type=type_hints["min_bandwidth_percent"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument percent_source_type", value=percent_source_type, expected_type=type_hints["percent_source_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "limit_type": limit_type,
            "priority": priority,
            "qos_id": qos_id,
        }
        if description is not None:
            self._values["description"] = description
        if max_bandwidth_abs is not None:
            self._values["max_bandwidth_abs"] = max_bandwidth_abs
        if max_bandwidth_percent is not None:
            self._values["max_bandwidth_percent"] = max_bandwidth_percent
        if min_bandwidth_abs is not None:
            self._values["min_bandwidth_abs"] = min_bandwidth_abs
        if min_bandwidth_percent is not None:
            self._values["min_bandwidth_percent"] = min_bandwidth_percent
        if name is not None:
            self._values["name"] = name
        if percent_source_type is not None:
            self._values["percent_source_type"] = percent_source_type

    @builtins.property
    def limit_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property limitType: The type of the traffic throttling policy.

        Valid values:
        Absolute: throttles traffic by a specific bandwidth range.
        Percent: throttles traffic by a specific range of bandwidth percentage.
        '''
        result = self._values.get("limit_type")
        assert result is not None, "Required property 'limit_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def priority(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property priority: The priority of the traffic throttling policy.

        A smaller value represents a higher
        priority. If policies are assigned the same priority, the one applied the earliest
        prevails. Valid values: 1 to 7.
        '''
        result = self._values.get("priority")
        assert result is not None, "Required property 'priority' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def qos_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property qosId: The ID of the QoS policy.'''
        result = self._values.get("qos_id")
        assert result is not None, "Required property 'qos_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the traffic throttling policy.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def max_bandwidth_abs(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property maxBandwidthAbs: The maximum bandwidth.

        This parameter is required when LimitType is set to Absolute.
        '''
        result = self._values.get("max_bandwidth_abs")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def max_bandwidth_percent(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property maxBandwidthPercent: The maximum percentage that is based on the maximum upstream bandwidth of the SAG instance.

        This parameter is required when LimitType is set to Percent.
        '''
        result = self._values.get("max_bandwidth_percent")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def min_bandwidth_abs(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property minBandwidthAbs: The minimum bandwidth.

        This parameter is required when LimitType is set to Absolute.
        '''
        result = self._values.get("min_bandwidth_abs")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def min_bandwidth_percent(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property minBandwidthPercent: The minimum percentage that is based on the maximum upstream bandwidth of the SAG instance.

        This parameter is required when LimitType is set to Percent.
        '''
        result = self._values.get("min_bandwidth_percent")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property name: The name of the traffic throttling policy.

        The name must be 2 to 128 characters in
        length, and can contain Chinese characters, letters, digits, periods (.), underscores
        (_), and hyphens (-).
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def percent_source_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property percentSourceType: If the policy throttles traffic based on a specified bandwidth percentage, the following options are available: CcnBandwidth: Cloud Enterprise Network (CCN) bandwidth.

        InternetUpBandwidth: Internet upstream bandwidth.
        '''
        result = self._values.get("percent_source_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "QosCarProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class QosPolicy(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sag.QosPolicy",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::SAG::QosPolicy``, which is used to create a traffic classification rule for a quality of service (QoS) policy.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosQosPolicy``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qospolicy
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["QosPolicyProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a23030af66f73deaf39adcdfa070a457367fa0223bb5b479c60b57a4c3a3df87)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrQosPolicyId")
    def attr_qos_policy_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute QosPolicyId: The ID of the traffic classification rule.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrQosPolicyId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2f3820bfc51e99ba2296f0a4d51fbb3fa18102bfb045edd827a2496ef097e03f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__95a98525966e6f7c92dae7bfce62d517d109bf3de43ffb30337ec45f39f3bea2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "QosPolicyProps":
        return typing.cast("QosPolicyProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "QosPolicyProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a2355ceb4f33f9df3066708baa3ff1bcf36d700a798543e3edaef09664accbdd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7b1ba0e71277b2549f951b036e15ad7cafdba205029f7b58010817e4af04c7c9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sag.QosPolicyProps",
    jsii_struct_bases=[],
    name_mapping={
        "dest_cidr": "destCidr",
        "dest_port_range": "destPortRange",
        "ip_protocol": "ipProtocol",
        "priority": "priority",
        "qos_id": "qosId",
        "source_cidr": "sourceCidr",
        "source_port_range": "sourcePortRange",
        "description": "description",
        "dpi_group_ids": "dpiGroupIds",
        "dpi_signature_ids": "dpiSignatureIds",
        "end_time": "endTime",
        "name": "name",
        "start_time": "startTime",
    },
)
class QosPolicyProps:
    def __init__(
        self,
        *,
        dest_cidr: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        dest_port_range: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ip_protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        priority: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        qos_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_cidr: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_port_range: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dpi_group_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        dpi_signature_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        end_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        start_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``QosPolicy``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qospolicy

        :param dest_cidr: Property destCidr: The range of the destination IP addresses. Specify the value of this parameter in CIDR notation. Example: 192.168.10.0/24.
        :param dest_port_range: Property destPortRange: The range of destination ports. Valid values: 1 to 65535 and -1. Set this parameter in one of the following formats: 1/200: a port range from 1 to 200 80/80: port 80 -1/-1: all ports
        :param ip_protocol: Property ipProtocol: The type of the protocol that applies to the traffic classification rule. The supported protocols provided in this topic are for reference only. The actual protocols in the console shall prevail.
        :param priority: Property priority: The priority of the traffic throttling policy to which the traffic classification rule belongs.
        :param qos_id: Property qosId: The ID of the QoS policy.
        :param source_cidr: Property sourceCidr: The range of the source IP addresses. Specify the value of this parameter in CIDR notation. Example: 192.168.1.0/24.
        :param source_port_range: Property sourcePortRange: The range of source ports. Valid values: 1 to 65535 and -1. Set this parameter in one of the following formats: 1/200: a port range from 1 to 200 80/80: port 80 -1/-1: all ports
        :param description: Property description: The description of the traffic classification rule. The description must be 1 to 512 characters in length and can contain letters, digits, underscores (_), and hyphens (-). It must start with a letter.
        :param dpi_group_ids: Property dpiGroupIds: The ID of the application group. You can enter at most 100 application group IDs at a time. You can call the ListDpiGroups operation to query application group IDs and information about the applications.
        :param dpi_signature_ids: Property dpiSignatureIds: The ID of the application. You can enter at most 100 application IDs at a time. You can call the ListDpiSignatures operation to query application IDs and information about the applications.
        :param end_time: Property endTime: The time when the traffic classification rule becomes invalid. Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss+0800 format. The time must be in UTC+8.
        :param name: Property name: The name of the traffic classification rule. The name must be 2 to 100 characters in length, and can contain digits, underscores (_), and hyphens (-). It must start with a letter.
        :param start_time: Property startTime: The time when the traffic classification rule takes effect. Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss+0800 format. The time must be in UTC+8.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f09cb49edd875084f9b97b045c0e49651c92784e149c897d0d472550af7d4867)
            check_type(argname="argument dest_cidr", value=dest_cidr, expected_type=type_hints["dest_cidr"])
            check_type(argname="argument dest_port_range", value=dest_port_range, expected_type=type_hints["dest_port_range"])
            check_type(argname="argument ip_protocol", value=ip_protocol, expected_type=type_hints["ip_protocol"])
            check_type(argname="argument priority", value=priority, expected_type=type_hints["priority"])
            check_type(argname="argument qos_id", value=qos_id, expected_type=type_hints["qos_id"])
            check_type(argname="argument source_cidr", value=source_cidr, expected_type=type_hints["source_cidr"])
            check_type(argname="argument source_port_range", value=source_port_range, expected_type=type_hints["source_port_range"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument dpi_group_ids", value=dpi_group_ids, expected_type=type_hints["dpi_group_ids"])
            check_type(argname="argument dpi_signature_ids", value=dpi_signature_ids, expected_type=type_hints["dpi_signature_ids"])
            check_type(argname="argument end_time", value=end_time, expected_type=type_hints["end_time"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument start_time", value=start_time, expected_type=type_hints["start_time"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "dest_cidr": dest_cidr,
            "dest_port_range": dest_port_range,
            "ip_protocol": ip_protocol,
            "priority": priority,
            "qos_id": qos_id,
            "source_cidr": source_cidr,
            "source_port_range": source_port_range,
        }
        if description is not None:
            self._values["description"] = description
        if dpi_group_ids is not None:
            self._values["dpi_group_ids"] = dpi_group_ids
        if dpi_signature_ids is not None:
            self._values["dpi_signature_ids"] = dpi_signature_ids
        if end_time is not None:
            self._values["end_time"] = end_time
        if name is not None:
            self._values["name"] = name
        if start_time is not None:
            self._values["start_time"] = start_time

    @builtins.property
    def dest_cidr(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property destCidr: The range of the destination IP addresses.

        Specify the value of this parameter in CIDR notation. Example: 192.168.10.0/24.
        '''
        result = self._values.get("dest_cidr")
        assert result is not None, "Required property 'dest_cidr' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def dest_port_range(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property destPortRange: The range of destination ports.

        Valid values: 1 to 65535 and -1.
        Set this parameter in one of the following formats:
        1/200: a port range from 1 to 200
        80/80: port 80
        -1/-1: all ports
        '''
        result = self._values.get("dest_port_range")
        assert result is not None, "Required property 'dest_port_range' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ip_protocol(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property ipProtocol: The type of the protocol that applies to the traffic classification rule.

        The supported protocols provided in this topic are for reference only. The actual
        protocols in the console shall prevail.
        '''
        result = self._values.get("ip_protocol")
        assert result is not None, "Required property 'ip_protocol' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def priority(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property priority: The priority of the traffic throttling policy to which the traffic classification rule belongs.'''
        result = self._values.get("priority")
        assert result is not None, "Required property 'priority' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def qos_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property qosId: The ID of the QoS policy.'''
        result = self._values.get("qos_id")
        assert result is not None, "Required property 'qos_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_cidr(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property sourceCidr: The range of the source IP addresses.

        Specify the value of this parameter in CIDR notation. Example: 192.168.1.0/24.
        '''
        result = self._values.get("source_cidr")
        assert result is not None, "Required property 'source_cidr' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_port_range(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property sourcePortRange: The range of source ports.

        Valid values: 1 to 65535 and -1.
        Set this parameter in one of the following formats:
        1/200: a port range from 1 to 200
        80/80: port 80
        -1/-1: all ports
        '''
        result = self._values.get("source_port_range")
        assert result is not None, "Required property 'source_port_range' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the traffic classification rule.

        The description must be 1 to 512 characters in length and can contain letters, digits,
        underscores (_), and hyphens (-). It must start with a letter.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dpi_group_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property dpiGroupIds: The ID of the application group.

        You can enter at most 100 application group IDs at a time.
        You can call the ListDpiGroups operation to query application group IDs and information about the applications.
        '''
        result = self._values.get("dpi_group_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def dpi_signature_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property dpiSignatureIds: The ID of the application.

        You can enter at most 100 application IDs at a time.
        You can call the ListDpiSignatures operation to query application IDs and information about the applications.
        '''
        result = self._values.get("dpi_signature_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def end_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property endTime: The time when the traffic classification rule becomes invalid.

        Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss+0800 format.
        The time must be in UTC+8.
        '''
        result = self._values.get("end_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property name: The name of the traffic classification rule.

        The name must be 2 to 100 characters in length, and can contain digits, underscores
        (_), and hyphens (-). It must start with a letter.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def start_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property startTime: The time when the traffic classification rule takes effect.

        Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss+0800 format.
        The time must be in UTC+8.
        '''
        result = self._values.get("start_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "QosPolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sag.QosProps",
    jsii_struct_bases=[],
    name_mapping={"qos_name": "qosName", "qos_description": "qosDescription"},
)
class QosProps:
    def __init__(
        self,
        *,
        qos_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        qos_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Qos``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qos

        :param qos_name: Property qosName: The name of the QoS policy. The name must be 2 to 100 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
        :param qos_description: Property qosDescription: The description of the QoS policy. The description must be 1 to 512 characters in length and can contain letters, digits, underscores (_), and hyphens (-). It must start with a letter.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__77c5d89f6b0f8e41aa51c18c58c533361298de0692888398d70a3312fff33450)
            check_type(argname="argument qos_name", value=qos_name, expected_type=type_hints["qos_name"])
            check_type(argname="argument qos_description", value=qos_description, expected_type=type_hints["qos_description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "qos_name": qos_name,
        }
        if qos_description is not None:
            self._values["qos_description"] = qos_description

    @builtins.property
    def qos_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property qosName: The name of the QoS policy.

        The name must be 2 to 100 characters in length and can contain letters, digits, periods
        (.), underscores (_), and hyphens (-). It must start with a letter.
        '''
        result = self._values.get("qos_name")
        assert result is not None, "Required property 'qos_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def qos_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property qosDescription: The description of the QoS policy.

        The description must be 1 to 512 characters in length and can contain letters, digits,
        underscores (_), and hyphens (-). It must start with a letter.
        '''
        result = self._values.get("qos_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "QosProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosACL(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sag.RosACL",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::SAG::ACL``, which is used to create an access control list (ACL).

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ACL`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-acl
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosACLProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a5ca64b1a5b3da93f9473bc79c3c578b15f0cb3628feab411e311090acd3e856)
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
            type_hints = typing.get_type_hints(_typecheckingstub__aa84334c99a4d817fb53427a20bd0b094528635c79f5e5c853ef227a28422710)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAclId")
    def attr_acl_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AclId: Access control set ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAclId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__1c14f7d62fe018776a4b2e33b0af6b78b366c90fdd7dfdf54b84cf015ea33c34)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        name: Access control name.
        The length is 2-128 characters. It must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:// or https://.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1d2fc2a9f4121673a1d24eb0d7bb932fd4bd19efd45c59c24661bbae4969f605)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)


class RosACLAssociation(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sag.RosACLAssociation",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::SAG::ACLAssociation``, which is used to associate an access control list (ACL) with a Smart Access Gateway (SAG) instance.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ACLAssociation`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-aclassociation
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosACLAssociationProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__472d80dc9a3a3f9f60cc74090444978ee8acabd66d69c7f3f99aeba745f3cb97)
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
            type_hints = typing.get_type_hints(_typecheckingstub__97e5b7612b258f67b5f151c9b53750bc4ce9b3b3dc9003d16abcca5bda31d38d)
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
    @jsii.member(jsii_name="aclId")
    def acl_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: aclId: Access control ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "aclId"))

    @acl_id.setter
    def acl_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__820651be1de852bf746bf8647dbd18fb3efc5b9509255db844dac58ff77425a5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "aclId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bf583f9d3023fb0e68d4a83bd17d16f4fff625b6883e099a29b9e93345bdbf01)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="smartAgId")
    def smart_ag_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: smartAgId: An intelligent gateway instance that needs to bind access control.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "smartAgId"))

    @smart_ag_id.setter
    def smart_ag_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__025f8f40e64629f5aa7957fce2bbbada93d6b0b1fe4808ac486fddb7b8591a9f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "smartAgId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sag.RosACLAssociationProps",
    jsii_struct_bases=[],
    name_mapping={"acl_id": "aclId", "smart_ag_id": "smartAgId"},
)
class RosACLAssociationProps:
    def __init__(
        self,
        *,
        acl_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        smart_ag_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosACLAssociation``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-aclassociation

        :param acl_id: 
        :param smart_ag_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__22dfba950be0403bc49884959f61e236e96b5ec8114ccbe91dbc74b16496419c)
            check_type(argname="argument acl_id", value=acl_id, expected_type=type_hints["acl_id"])
            check_type(argname="argument smart_ag_id", value=smart_ag_id, expected_type=type_hints["smart_ag_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "acl_id": acl_id,
            "smart_ag_id": smart_ag_id,
        }

    @builtins.property
    def acl_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: aclId: Access control ID.
        '''
        result = self._values.get("acl_id")
        assert result is not None, "Required property 'acl_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def smart_ag_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: smartAgId: An intelligent gateway instance that needs to bind access control.
        '''
        result = self._values.get("smart_ag_id")
        assert result is not None, "Required property 'smart_ag_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosACLAssociationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sag.RosACLProps",
    jsii_struct_bases=[],
    name_mapping={"name": "name"},
)
class RosACLProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosACL``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-acl

        :param name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__61637a4972963012a8db50af162f74bba0a53052a827d43945cd4e28df7c062f)
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "name": name,
        }

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        name: Access control name.
        The length is 2-128 characters. It must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:// or https://.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosACLProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosACLRule(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sag.RosACLRule",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::SAG::ACLRule``, which is used to add an access control list (ACL) rule.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ACLRule`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-aclrule
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosACLRuleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__463833014d9ce1b40e358264e6ac4917924ec591507737124836dc89181f169e)
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
            type_hints = typing.get_type_hints(_typecheckingstub__4140b8109ae0fcf5b93e4c7b07c254d663af0f11ba674faa4469b3e5d9d1f12a)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAcrId")
    def attr_acr_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AcrId: Access control rule ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAcrId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="aclId")
    def acl_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: aclId: Access control ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "aclId"))

    @acl_id.setter
    def acl_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f13821a989028ca7827cd0623432be34007086fffc25f6ee118e23aeb0eaf622)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "aclId", value)

    @builtins.property
    @jsii.member(jsii_name="destCidr")
    def dest_cidr(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: destCidr: Destination address, CIDR format and IP address range in IPv4 format.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "destCidr"))

    @dest_cidr.setter
    def dest_cidr(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cd0975762e2042107b3ce012f3fc5ee15bbd9459bc481c15c6c2ef6be1af897d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "destCidr", value)

    @builtins.property
    @jsii.member(jsii_name="destPortRange")
    def dest_port_range(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: destPortRange: Destination port range, 80/80.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "destPortRange"))

    @dest_port_range.setter
    def dest_port_range(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b97cd3edf237c5f7688f08b6c05fa946195609c8dff0237ca84b4d47dc04bc76)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "destPortRange", value)

    @builtins.property
    @jsii.member(jsii_name="direction")
    def direction(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        direction: Regular direction.
        Value: in|out
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "direction"))

    @direction.setter
    def direction(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4ecabfa8cc3f9a25b5eab14f8a545f68dc71aa4447c76cbd21af2b8b9ff6fa5c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "direction", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ce4e4bbb516497785b51e5b4e3c320a877779541ff323d7ec7e82007e18530f8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="ipProtocol")
    def ip_protocol(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ipProtocol: Protocol, not case sensitive.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "ipProtocol"))

    @ip_protocol.setter
    def ip_protocol(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__20cf1a0e7ecb16363868f7b5e0beede0c6bb5730e6475d8761582ab86f5d983f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ipProtocol", value)

    @builtins.property
    @jsii.member(jsii_name="policy")
    def policy(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: policy: Access: accept|drop
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "policy"))

    @policy.setter
    def policy(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4921d5f72755e046e3e86920bc1d5ddfd1fe1cf3c3b06427fab22dfd20b54fbd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "policy", value)

    @builtins.property
    @jsii.member(jsii_name="sourceCidr")
    def source_cidr(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: sourceCidr: Source address, CIDR format and IP address range in IPv4 format.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "sourceCidr"))

    @source_cidr.setter
    def source_cidr(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e49e3b6a99178fb2828aa7e671d5815fc0c2b3a6a01b9990155001cd74729b58)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceCidr", value)

    @builtins.property
    @jsii.member(jsii_name="sourcePortRange")
    def source_port_range(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: sourcePortRange: Source port range, 80/80.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "sourcePortRange"))

    @source_port_range.setter
    def source_port_range(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e4bba322a742d82112bed64780f65197e118da87ec4e13a1ea45a52011866cb3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourcePortRange", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Rule description information, ranging from 1 to 512 characters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3bbd6d2bd213661b870322e3013cdad42bad4e527b67f796bd7f87a39a6cfb7d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="dpiGroupIds")
    def dpi_group_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        dpiGroupIds: The ID of the application group.
        You can enter at most 100 application group IDs at a time.
        You can call the ListDpiGroups operation to query application group IDs and information about the applications.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "dpiGroupIds"))

    @dpi_group_ids.setter
    def dpi_group_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__941760bc9b9b601bd7141aeba2c0b62b91320a8094ef16349c949c62e6556888)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dpiGroupIds", value)

    @builtins.property
    @jsii.member(jsii_name="dpiSignatureIds")
    def dpi_signature_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        dpiSignatureIds: The ID of the application.
        You can enter at most 100 application IDs at a time.
        You can call the ListDpiSignatures operation to query application IDs and information about the applications.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "dpiSignatureIds"))

    @dpi_signature_ids.setter
    def dpi_signature_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__97f47ec49b30e7edec05b65999f7ca10e5114c01d868b3bffbf18b4781345ec3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dpiSignatureIds", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        name: The name of the ACL rule.
        The name must be 2 to 100 characters in length, and can contain digits, underscores
        (_), and hyphens (-). It must start with a letter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__80a8348cd59f689124faaeeb295918ba0e9f3ad881b2cc64ae1331fd18a18535)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="priority")
    def priority(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        priority: Priority, ranging from 1 to 100.
        Default: 1
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "priority"))

    @priority.setter
    def priority(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5b0b368cce63f9977ea6941131d39482050a1702aca6e036e3a8c1e78bbedbb2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "priority", value)

    @builtins.property
    @jsii.member(jsii_name="type")
    def type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        type: The type of the ACL rule: Valid values:
        LAN: The ACL rule controls traffic of private IP addresses. This is the default value.
        WAN: The ACL rule controls traffic of public IP addresses.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "type"))

    @type.setter
    def type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cb3687713e4e47cdb16dc6badf9d1ce199688e3188c7cc1b5f31a3490f769555)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "type", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sag.RosACLRuleProps",
    jsii_struct_bases=[],
    name_mapping={
        "acl_id": "aclId",
        "dest_cidr": "destCidr",
        "dest_port_range": "destPortRange",
        "direction": "direction",
        "ip_protocol": "ipProtocol",
        "policy": "policy",
        "source_cidr": "sourceCidr",
        "source_port_range": "sourcePortRange",
        "description": "description",
        "dpi_group_ids": "dpiGroupIds",
        "dpi_signature_ids": "dpiSignatureIds",
        "name": "name",
        "priority": "priority",
        "type": "type",
    },
)
class RosACLRuleProps:
    def __init__(
        self,
        *,
        acl_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        dest_cidr: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        dest_port_range: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        direction: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ip_protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        policy: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_cidr: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_port_range: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dpi_group_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        dpi_signature_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        priority: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosACLRule``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-aclrule

        :param acl_id: 
        :param dest_cidr: 
        :param dest_port_range: 
        :param direction: 
        :param ip_protocol: 
        :param policy: 
        :param source_cidr: 
        :param source_port_range: 
        :param description: 
        :param dpi_group_ids: 
        :param dpi_signature_ids: 
        :param name: 
        :param priority: 
        :param type: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ba001b4ee22321e656d067ff82c6d8a021bbaaa3720dee9203e4bd795d6c7c07)
            check_type(argname="argument acl_id", value=acl_id, expected_type=type_hints["acl_id"])
            check_type(argname="argument dest_cidr", value=dest_cidr, expected_type=type_hints["dest_cidr"])
            check_type(argname="argument dest_port_range", value=dest_port_range, expected_type=type_hints["dest_port_range"])
            check_type(argname="argument direction", value=direction, expected_type=type_hints["direction"])
            check_type(argname="argument ip_protocol", value=ip_protocol, expected_type=type_hints["ip_protocol"])
            check_type(argname="argument policy", value=policy, expected_type=type_hints["policy"])
            check_type(argname="argument source_cidr", value=source_cidr, expected_type=type_hints["source_cidr"])
            check_type(argname="argument source_port_range", value=source_port_range, expected_type=type_hints["source_port_range"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument dpi_group_ids", value=dpi_group_ids, expected_type=type_hints["dpi_group_ids"])
            check_type(argname="argument dpi_signature_ids", value=dpi_signature_ids, expected_type=type_hints["dpi_signature_ids"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument priority", value=priority, expected_type=type_hints["priority"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "acl_id": acl_id,
            "dest_cidr": dest_cidr,
            "dest_port_range": dest_port_range,
            "direction": direction,
            "ip_protocol": ip_protocol,
            "policy": policy,
            "source_cidr": source_cidr,
            "source_port_range": source_port_range,
        }
        if description is not None:
            self._values["description"] = description
        if dpi_group_ids is not None:
            self._values["dpi_group_ids"] = dpi_group_ids
        if dpi_signature_ids is not None:
            self._values["dpi_signature_ids"] = dpi_signature_ids
        if name is not None:
            self._values["name"] = name
        if priority is not None:
            self._values["priority"] = priority
        if type is not None:
            self._values["type"] = type

    @builtins.property
    def acl_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: aclId: Access control ID.
        '''
        result = self._values.get("acl_id")
        assert result is not None, "Required property 'acl_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def dest_cidr(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: destCidr: Destination address, CIDR format and IP address range in IPv4 format.
        '''
        result = self._values.get("dest_cidr")
        assert result is not None, "Required property 'dest_cidr' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def dest_port_range(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: destPortRange: Destination port range, 80/80.
        '''
        result = self._values.get("dest_port_range")
        assert result is not None, "Required property 'dest_port_range' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def direction(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        direction: Regular direction.
        Value: in|out
        '''
        result = self._values.get("direction")
        assert result is not None, "Required property 'direction' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ip_protocol(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ipProtocol: Protocol, not case sensitive.
        '''
        result = self._values.get("ip_protocol")
        assert result is not None, "Required property 'ip_protocol' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def policy(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: policy: Access: accept|drop
        '''
        result = self._values.get("policy")
        assert result is not None, "Required property 'policy' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_cidr(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: sourceCidr: Source address, CIDR format and IP address range in IPv4 format.
        '''
        result = self._values.get("source_cidr")
        assert result is not None, "Required property 'source_cidr' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_port_range(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: sourcePortRange: Source port range, 80/80.
        '''
        result = self._values.get("source_port_range")
        assert result is not None, "Required property 'source_port_range' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Rule description information, ranging from 1 to 512 characters.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dpi_group_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        dpiGroupIds: The ID of the application group.
        You can enter at most 100 application group IDs at a time.
        You can call the ListDpiGroups operation to query application group IDs and information about the applications.
        '''
        result = self._values.get("dpi_group_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def dpi_signature_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        dpiSignatureIds: The ID of the application.
        You can enter at most 100 application IDs at a time.
        You can call the ListDpiSignatures operation to query application IDs and information about the applications.
        '''
        result = self._values.get("dpi_signature_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        name: The name of the ACL rule.
        The name must be 2 to 100 characters in length, and can contain digits, underscores
        (_), and hyphens (-). It must start with a letter.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def priority(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        priority: Priority, ranging from 1 to 100.
        Default: 1
        '''
        result = self._values.get("priority")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        type: The type of the ACL rule: Valid values:
        LAN: The ACL rule controls traffic of private IP addresses. This is the default value.
        WAN: The ACL rule controls traffic of public IP addresses.
        '''
        result = self._values.get("type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosACLRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosApp(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sag.RosApp",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::SAG::App``, which is used to create a Smart Access Gateway (SAG) app instance.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``App`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-app
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAppProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__57e857af38ce55eb7f88d2db576174d93e7257e49e030f06871f20a34b5c62db)
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
            type_hints = typing.get_type_hints(_typecheckingstub__d54fc5c99175d6d4141b514bd62a7fafd0f8d31d47b08a75b85d4c01a4832d32)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: OrderId: The ID of the order that you placed to subscribe to the SAG APP instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="attrSmartAgId")
    def attr_smart_ag_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SmartAGId: The ID of the SAG APP instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSmartAgId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="autoPay")
    def auto_pay(
        self,
    ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        autoPay: Specifies whether to automatically pay the bills of SAG APP instances. Default value:
        false. Valid values:
        true: automatically pays the bills of SAG APP instances.
        false: does not automatically pay the bills of SAG APP instances.
        If you set the parameter to false, after you call this operation, go to Billing Management
        of the SAG console to complete the payment, the instance can be created.
        '''
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "autoPay"))

    @auto_pay.setter
    def auto_pay(
        self,
        value: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1807b6ce77f301549bc5381a78cdafa08d864d36d6542834f74ae709eb05d4f4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoPay", value)

    @builtins.property
    @jsii.member(jsii_name="dataPlan")
    def data_plan(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        dataPlan: The quota of the traffic plan that the system allows each client account to use for
        free each month. Unit: GB. Set the value to 5.
        Note The system allows each client account to use 5 GB traffic plan for free.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dataPlan"))

    @data_plan.setter
    def data_plan(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__53c4913a5ef38daafb5cd58a95527c4fe3fc2f40c91c13cece006b94a0c4dfae)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dataPlan", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__57f5ac1d0a5530b664a5f46cef6841cbf291dfdf17619894c1926a4c9e8c94f2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        period: The subscription period of the SAG APP instance. Unit: months.
        Valid values: 1~9, 12, 24, and 36.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a7319a35e37399eb567272cf289737aa05ff7b4f7a0143525b4be277c56f9c54)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="userCount")
    def user_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        userCount: The quota of client accounts for the SAG APP instance.
        Note The quota must be a positive multiple of 5, for example, 5, 10, and 15.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "userCount"))

    @user_count.setter
    def user_count(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3ad589434876bfdd9c90890b9880389bf4177fca660afb611f0920155986921e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "userCount", value)

    @builtins.property
    @jsii.member(jsii_name="chargeType")
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        chargeType: The billing method of the SAG APP instance. Set the value to PREPAY.
        This value indicates that the SAG APP instance is a subscription resource.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "chargeType"))

    @charge_type.setter
    def charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8e24d232680e7f96e04c1499a2aeba5c166b2461cffb94b2193c0187d9958b72)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "chargeType", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sag.RosAppProps",
    jsii_struct_bases=[],
    name_mapping={
        "auto_pay": "autoPay",
        "data_plan": "dataPlan",
        "period": "period",
        "user_count": "userCount",
        "charge_type": "chargeType",
    },
)
class RosAppProps:
    def __init__(
        self,
        *,
        auto_pay: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
        data_plan: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        period: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        user_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosApp``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-app

        :param auto_pay: 
        :param data_plan: 
        :param period: 
        :param user_count: 
        :param charge_type: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1f4e3a6259b416788d7c18ab5985156ff69533547f0fd0d836e521311fce516f)
            check_type(argname="argument auto_pay", value=auto_pay, expected_type=type_hints["auto_pay"])
            check_type(argname="argument data_plan", value=data_plan, expected_type=type_hints["data_plan"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument user_count", value=user_count, expected_type=type_hints["user_count"])
            check_type(argname="argument charge_type", value=charge_type, expected_type=type_hints["charge_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "auto_pay": auto_pay,
            "data_plan": data_plan,
            "period": period,
            "user_count": user_count,
        }
        if charge_type is not None:
            self._values["charge_type"] = charge_type

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        autoPay: Specifies whether to automatically pay the bills of SAG APP instances. Default value:
        false. Valid values:
        true: automatically pays the bills of SAG APP instances.
        false: does not automatically pay the bills of SAG APP instances.
        If you set the parameter to false, after you call this operation, go to Billing Management
        of the SAG console to complete the payment, the instance can be created.
        '''
        result = self._values.get("auto_pay")
        assert result is not None, "Required property 'auto_pay' is missing"
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def data_plan(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        dataPlan: The quota of the traffic plan that the system allows each client account to use for
        free each month. Unit: GB. Set the value to 5.
        Note The system allows each client account to use 5 GB traffic plan for free.
        '''
        result = self._values.get("data_plan")
        assert result is not None, "Required property 'data_plan' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def period(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        period: The subscription period of the SAG APP instance. Unit: months.
        Valid values: 1~9, 12, 24, and 36.
        '''
        result = self._values.get("period")
        assert result is not None, "Required property 'period' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def user_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        userCount: The quota of client accounts for the SAG APP instance.
        Note The quota must be a positive multiple of 5, for example, 5, 10, and 15.
        '''
        result = self._values.get("user_count")
        assert result is not None, "Required property 'user_count' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        chargeType: The billing method of the SAG APP instance. Set the value to PREPAY.
        This value indicates that the SAG APP instance is a subscription resource.
        '''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAppProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAppUser(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sag.RosAppUser",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::SAG::AppUser``, which is used to create a client account for a Smart Access Gateway (SAG) app instance.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``AppUser`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-appuser
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAppUserProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3fc5726a736ec3c63a44f01925b000455406999da7c82fd7d43397ef62f38fbc)
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
            type_hints = typing.get_type_hints(_typecheckingstub__7957b621dbf9be350346334e5d0ab99c37180a3692ae05461b7d63b82ddf4699)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrSmartAgId")
    def attr_smart_ag_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SmartAGId: The ID of the SAG APP instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSmartAgId"))

    @builtins.property
    @jsii.member(jsii_name="attrUserName")
    def attr_user_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UserName: <heat.engine.properties.Schema object at 0x7f054fbe3d10>
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUserName"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="bandwidth")
    def bandwidth(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: bandwidth: The bandwidth. Unit: Kbit/s. Maximum bandwidth: 2,000 Kbit/s.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "bandwidth"))

    @bandwidth.setter
    def bandwidth(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8d3d4807886a69a743dd13a3e40c42e42431f3909fa56db36fd87aad851d077c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bandwidth", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4d026a6e219e8d597d6f460fdf2daf1829d894fd4578aa827cdc63e317894e69)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="smartAgId")
    def smart_ag_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: smartAgId: The ID of the SAG APP instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "smartAgId"))

    @smart_ag_id.setter
    def smart_ag_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__51b5468f1fa8119b486da9e5750ba1024cf294a0b838e8030bd4278375897a83)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "smartAgId", value)

    @builtins.property
    @jsii.member(jsii_name="userMail")
    def user_mail(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        userMail: The email address of the user. The username and password are sent to the specified
        email address.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "userMail"))

    @user_mail.setter
    def user_mail(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__10c5f6931b1ad91061474c45e58eed392410f73c32080b69a1cb2c5feb334d7d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "userMail", value)

    @builtins.property
    @jsii.member(jsii_name="clientIp")
    def client_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        clientIp: After this feature is enabled, you must specify the IP address of SAG APP. In this
        case, SAG APP connects to Alibaba Cloud through the specified IP address.
        Note The IP address must fall into the CIDR block of the private network.
        After this feature is disabled, an IP address within the CIDR block of the private
        network is assigned to SAG APP. Each connection to Alibaba Cloud uses a different
        IP address.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "clientIp"))

    @client_ip.setter
    def client_ip(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8db508e0ada882798b9d42984fe04ff4c2ad8d04cf56f6036bafabee0894abf0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clientIp", value)

    @builtins.property
    @jsii.member(jsii_name="disable")
    def disable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: disable: Disable user or not.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "disable"))

    @disable.setter
    def disable(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a71f434cc341a0e664f33a36f5198526aeb6df00309567dd98fa160fe5b583d8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "disable", value)

    @builtins.property
    @jsii.member(jsii_name="password")
    def password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        password: The password used to log on to SAG APP.
        For a client account, if you specify the username, you must also specify the password.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "password"))

    @password.setter
    def password(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1e913d6ebe8766fed1e8d9b9de7372be805267bb2d1984452ee0bb5c57e6119b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "password", value)

    @builtins.property
    @jsii.member(jsii_name="userName")
    def user_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        userName: The username of the client account. Usernames of client accounts added to the same
        SAG APP instance must be unique.
        For a client account, if you specify the username, you must also specify the password.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "userName"))

    @user_name.setter
    def user_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a5c09aca7f4d91d52ee0d5b64d09d7465798ce18ef35227abc7adb208c89e21e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "userName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sag.RosAppUserProps",
    jsii_struct_bases=[],
    name_mapping={
        "bandwidth": "bandwidth",
        "smart_ag_id": "smartAgId",
        "user_mail": "userMail",
        "client_ip": "clientIp",
        "disable": "disable",
        "password": "password",
        "user_name": "userName",
    },
)
class RosAppUserProps:
    def __init__(
        self,
        *,
        bandwidth: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        smart_ag_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        user_mail: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        client_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        disable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        user_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosAppUser``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-appuser

        :param bandwidth: 
        :param smart_ag_id: 
        :param user_mail: 
        :param client_ip: 
        :param disable: 
        :param password: 
        :param user_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2a3d9fd5ec614068bdf7dabc9e5abf610f87d760ce9b19ad3cebc5840e1e8424)
            check_type(argname="argument bandwidth", value=bandwidth, expected_type=type_hints["bandwidth"])
            check_type(argname="argument smart_ag_id", value=smart_ag_id, expected_type=type_hints["smart_ag_id"])
            check_type(argname="argument user_mail", value=user_mail, expected_type=type_hints["user_mail"])
            check_type(argname="argument client_ip", value=client_ip, expected_type=type_hints["client_ip"])
            check_type(argname="argument disable", value=disable, expected_type=type_hints["disable"])
            check_type(argname="argument password", value=password, expected_type=type_hints["password"])
            check_type(argname="argument user_name", value=user_name, expected_type=type_hints["user_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "bandwidth": bandwidth,
            "smart_ag_id": smart_ag_id,
            "user_mail": user_mail,
        }
        if client_ip is not None:
            self._values["client_ip"] = client_ip
        if disable is not None:
            self._values["disable"] = disable
        if password is not None:
            self._values["password"] = password
        if user_name is not None:
            self._values["user_name"] = user_name

    @builtins.property
    def bandwidth(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: bandwidth: The bandwidth. Unit: Kbit/s. Maximum bandwidth: 2,000 Kbit/s.
        '''
        result = self._values.get("bandwidth")
        assert result is not None, "Required property 'bandwidth' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def smart_ag_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: smartAgId: The ID of the SAG APP instance.
        '''
        result = self._values.get("smart_ag_id")
        assert result is not None, "Required property 'smart_ag_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def user_mail(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        userMail: The email address of the user. The username and password are sent to the specified
        email address.
        '''
        result = self._values.get("user_mail")
        assert result is not None, "Required property 'user_mail' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def client_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        clientIp: After this feature is enabled, you must specify the IP address of SAG APP. In this
        case, SAG APP connects to Alibaba Cloud through the specified IP address.
        Note The IP address must fall into the CIDR block of the private network.
        After this feature is disabled, an IP address within the CIDR block of the private
        network is assigned to SAG APP. Each connection to Alibaba Cloud uses a different
        IP address.
        '''
        result = self._values.get("client_ip")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def disable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: disable: Disable user or not.
        '''
        result = self._values.get("disable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        password: The password used to log on to SAG APP.
        For a client account, if you specify the username, you must also specify the password.
        '''
        result = self._values.get("password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def user_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        userName: The username of the client account. Usernames of client accounts added to the same
        SAG APP instance must be unique.
        For a client account, if you specify the username, you must also specify the password.
        '''
        result = self._values.get("user_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAppUserProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCloudConnectNetwork(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sag.RosCloudConnectNetwork",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::SAG::CloudConnectNetwork``, which is used to create a Cloud Connect Network (CCN) instance.

    CNN is a device access matrix composed of Alibaba Cloud distributed Smart Access Gateways (SAGs). You can add multiple SAGs to a CCN instance and then attach the CCN instance to a Cloud Enterprise Network (CEN) instance. In this way, you can connect your local branches to Alibaba Cloud.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``CloudConnectNetwork`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-cloudconnectnetwork
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosCloudConnectNetworkProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__657c3ad0165cb449e6426b9c484a399aeb85ee11a4f711e755bcab173a3d4c56)
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
            type_hints = typing.get_type_hints(_typecheckingstub__2fd8a7cfa27b226f714ed36b0959397ba5737833d4aa1b92bad5fc5fc0f1e6af)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCcnId")
    def attr_ccn_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CcnId: The ID of the CCN instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCcnId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__8129f2359a8f1dd2cc6846ad9a04edf04d0934506d16298e4ccaff8ea2f7079a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        description: The description of the CCN instance.
        The description can contain 2 to 256 characters. The description cannot start with http:// or https://.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__96cacdf2f3d4caae0971c3bf60f41353201671a22e7c02053abed35f9efe0ef1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="isDefault")
    def is_default(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: isDefault: Whether is created by system
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "isDefault"))

    @is_default.setter
    def is_default(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bdf58af61a3241b1aa64e38ddb0d5d743a3d318298d4a17fbeb275d0df108e5f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "isDefault", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        name: The name of the CCN instance.
        The name can contain 2 to 128 characters including a-z, A-Z, 0-9, chinese, underlines, and hyphens. The name must start with an English letter, but cannot start with http:// or https://.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5cbbdc1d9b146a4514a0251be4ab33d678eae636858e8eb71b876e97cbc84af6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(
        self,
    ) -> typing.Optional[typing.List["RosCloudConnectNetwork.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosCloudConnectNetwork.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosCloudConnectNetwork.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__420e9a718e01d5e83c2c5df5fa02827c981724447fc3fb5725babcce5a5d6c86)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sag.RosCloudConnectNetwork.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__66aa42a5616a30f5767fbcd7724950045f40bec6ef9c3171ae18cbc5695cfa45)
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
    jsii_type="@alicloud/ros-cdk-sag.RosCloudConnectNetworkProps",
    jsii_struct_bases=[],
    name_mapping={
        "description": "description",
        "is_default": "isDefault",
        "name": "name",
        "tags": "tags",
    },
)
class RosCloudConnectNetworkProps:
    def __init__(
        self,
        *,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        is_default: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosCloudConnectNetwork.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosCloudConnectNetwork``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-cloudconnectnetwork

        :param description: 
        :param is_default: 
        :param name: 
        :param tags: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fe14762c207ea3df76c7789655e7c13eb38d4150abc47a3128970859ff0df17e)
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument is_default", value=is_default, expected_type=type_hints["is_default"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if description is not None:
            self._values["description"] = description
        if is_default is not None:
            self._values["is_default"] = is_default
        if name is not None:
            self._values["name"] = name
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        description: The description of the CCN instance.
        The description can contain 2 to 256 characters. The description cannot start with http:// or https://.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def is_default(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: isDefault: Whether is created by system
        '''
        result = self._values.get("is_default")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        name: The name of the CCN instance.
        The name can contain 2 to 128 characters including a-z, A-Z, 0-9, chinese, underlines, and hyphens. The name must start with an English letter, but cannot start with http:// or https://.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosCloudConnectNetwork.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosCloudConnectNetwork.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosCloudConnectNetworkProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosGrantCcnToCen(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sag.RosGrantCcnToCen",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::SAG::GrantCcnToCen``, which is used to grant permissions on a Cloud Connect Network (CCN) instance to a Cloud Enterprise Network (CEN) instance.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``GrantCcnToCen`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-grantccntocen
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosGrantCcnToCenProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f56c29b0e7c84fcfb2b0c0fa2175501a79774046156eb49423f0e9c70350bbe4)
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
            type_hints = typing.get_type_hints(_typecheckingstub__f2f32efb958c252ffb00ab2fde18577a87281ee83af45187e80e5569901f34c8)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCcnInstanceId")
    def attr_ccn_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CcnInstanceId: The ID of the CCN instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCcnInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrCenInstanceId")
    def attr_cen_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CenInstanceId: The ID of the CEN instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCenInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="ccnInstanceId")
    def ccn_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ccnInstanceId: The ID of the CCN instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "ccnInstanceId"))

    @ccn_instance_id.setter
    def ccn_instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__46d77c84b5b8b766c0059438621af5e8c38db0c722a91231df8d011cf50f06c7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ccnInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="cenInstanceId")
    def cen_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: cenInstanceId: The ID of the CEN instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "cenInstanceId"))

    @cen_instance_id.setter
    def cen_instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c2e56342338b83bd06389f091ade772f27cf49cd5ef041fe58fb8be7080fd37c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cenInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="cenUid")
    def cen_uid(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: cenUid: The ID of the account to which the CEN instance belongs.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "cenUid"))

    @cen_uid.setter
    def cen_uid(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d6c40d8ecb5a24197af147e3e82f99aa4c36b0ab5bb0135461d27fa2199b0697)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cenUid", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0835a30221d2f3fcdb412a92d7fa107cee195e476a3246091f87aed6b26f0423)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sag.RosGrantCcnToCenProps",
    jsii_struct_bases=[],
    name_mapping={
        "ccn_instance_id": "ccnInstanceId",
        "cen_instance_id": "cenInstanceId",
        "cen_uid": "cenUid",
    },
)
class RosGrantCcnToCenProps:
    def __init__(
        self,
        *,
        ccn_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cen_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cen_uid: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosGrantCcnToCen``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-grantccntocen

        :param ccn_instance_id: 
        :param cen_instance_id: 
        :param cen_uid: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9eabdf4292a26b08dd7140f6141daf425ea2f6df0d7aeecbe7f25db7cdea62cc)
            check_type(argname="argument ccn_instance_id", value=ccn_instance_id, expected_type=type_hints["ccn_instance_id"])
            check_type(argname="argument cen_instance_id", value=cen_instance_id, expected_type=type_hints["cen_instance_id"])
            check_type(argname="argument cen_uid", value=cen_uid, expected_type=type_hints["cen_uid"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "ccn_instance_id": ccn_instance_id,
            "cen_instance_id": cen_instance_id,
            "cen_uid": cen_uid,
        }

    @builtins.property
    def ccn_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ccnInstanceId: The ID of the CCN instance.
        '''
        result = self._values.get("ccn_instance_id")
        assert result is not None, "Required property 'ccn_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cen_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: cenInstanceId: The ID of the CEN instance.
        '''
        result = self._values.get("cen_instance_id")
        assert result is not None, "Required property 'cen_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cen_uid(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: cenUid: The ID of the account to which the CEN instance belongs.
        '''
        result = self._values.get("cen_uid")
        assert result is not None, "Required property 'cen_uid' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosGrantCcnToCenProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosQos(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sag.RosQos",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::SAG::Qos``ALIYUN::SAG::QoS is used to create a quality of service (QoS) policy for a Smart Access Gateway (SAG) instance.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Qos`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qos
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosQosProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f5575e70d36ba18d93e33876028f790565ea5ff7cf41ca5f5c9b4e559c0f8c87)
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
            type_hints = typing.get_type_hints(_typecheckingstub__f263b283cd1ffce3e56ce1de00175da18340be1fd9a099eb4e42e2183534a6ef)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrQosId")
    def attr_qos_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: QosId: The ID of the QoS policy.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrQosId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__3a80f00203539a6ad7eb6db8cddfae268d8154b2b37d3d77d19f22555a21a2c2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="qosName")
    def qos_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        qosName: The name of the QoS policy.
        The name must be 2 to 100 characters in length and can contain letters, digits, periods
        (.), underscores (_), and hyphens (-). It must start with a letter.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "qosName"))

    @qos_name.setter
    def qos_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c9b3400ce643e7b6281a81bf57301aef0ba97fc176b1f1b2be62f069fe7ee94d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "qosName", value)

    @builtins.property
    @jsii.member(jsii_name="qosDescription")
    def qos_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        qosDescription: The description of the QoS policy.
        The description must be 1 to 512 characters in length and can contain letters, digits,
        underscores (_), and hyphens (-). It must start with a letter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "qosDescription"))

    @qos_description.setter
    def qos_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b2b66204219674415df33cf0e0f4c73fa48dade7994a51aa91b754b5cd32e0c8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "qosDescription", value)


class RosQosAssociation(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sag.RosQosAssociation",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::SAG::QosAssociation``, which is used to associate a quality of service (QoS) policy with a Smart Access Gateway (SAG) instance.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``QosAssociation`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qosassociation
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosQosAssociationProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__34fd0a95af493492cce301c6028e1d88f6657d5743c4eb68ff4c27aff0f56901)
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
            type_hints = typing.get_type_hints(_typecheckingstub__91f89b5bf9cc233b40f9f45c99f3777bb9a33c43e38c624e7d34e1e3e079d994)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrQosId")
    def attr_qos_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: QosId: The ID of the QoS policy.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrQosId"))

    @builtins.property
    @jsii.member(jsii_name="attrSmartAgId")
    def attr_smart_ag_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SmartAGId: The ID of the SAG instance to which the QoS policy is to be applied.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSmartAgId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__6dec216b5b716127d315174e96a962a5e73058cb4c9b1c274e8332d78b599547)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="qosId")
    def qos_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: qosId: The instance ID of the QoS policy.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "qosId"))

    @qos_id.setter
    def qos_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e6f756b8b5082e3013bc98665c21636d467362fe792c86f02503b562d3137223)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "qosId", value)

    @builtins.property
    @jsii.member(jsii_name="smartAgId")
    def smart_ag_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: smartAgId: The ID of the SAG instance to which the QoS policy is to be applied.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "smartAgId"))

    @smart_ag_id.setter
    def smart_ag_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f294aea1aa2bbc3fac75920e9e434676e4b12c85549d161fc25de2b7e004d182)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "smartAgId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sag.RosQosAssociationProps",
    jsii_struct_bases=[],
    name_mapping={"qos_id": "qosId", "smart_ag_id": "smartAgId"},
)
class RosQosAssociationProps:
    def __init__(
        self,
        *,
        qos_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        smart_ag_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosQosAssociation``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qosassociation

        :param qos_id: 
        :param smart_ag_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c29035e0a6dbeb5c4deb1ed6299bd0b55b11d8668dcd98717e1181b59447d929)
            check_type(argname="argument qos_id", value=qos_id, expected_type=type_hints["qos_id"])
            check_type(argname="argument smart_ag_id", value=smart_ag_id, expected_type=type_hints["smart_ag_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "qos_id": qos_id,
            "smart_ag_id": smart_ag_id,
        }

    @builtins.property
    def qos_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: qosId: The instance ID of the QoS policy.
        '''
        result = self._values.get("qos_id")
        assert result is not None, "Required property 'qos_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def smart_ag_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: smartAgId: The ID of the SAG instance to which the QoS policy is to be applied.
        '''
        result = self._values.get("smart_ag_id")
        assert result is not None, "Required property 'smart_ag_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosQosAssociationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosQosCar(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sag.RosQosCar",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::SAG::QosCar``, which is used to create a traffic throttling rule for a quality of service (QoS) policy.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``QosCar`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qoscar
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosQosCarProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__64718b91930c5bd95e5fabff06a087ae994251f4a9fa76d20929998fb144421d)
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
            type_hints = typing.get_type_hints(_typecheckingstub__1b23577a67ab12c74128be948942d9bcbef9b97e0caeddee40edc2325cdbf679)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrQosCarId")
    def attr_qos_car_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: QosCarId: The ID of the traffic throttling policy.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrQosCarId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__d5768f39b645041e0779c18b9999fe78842c4c0b5e4d450e3b76a7213ebdfc04)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="limitType")
    def limit_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        limitType: The type of the traffic throttling policy. Valid values:
        Absolute: throttles traffic by a specific bandwidth range.
        Percent: throttles traffic by a specific range of bandwidth percentage.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "limitType"))

    @limit_type.setter
    def limit_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__925e8178a6266ee6375e4cebdf2513157505d1e18c5621e23e128763c7739fd5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "limitType", value)

    @builtins.property
    @jsii.member(jsii_name="priority")
    def priority(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        priority: The priority of the traffic throttling policy. A smaller value represents a higher
        priority. If policies are assigned the same priority, the one applied the earliest
        prevails. Valid values: 1 to 7.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "priority"))

    @priority.setter
    def priority(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5cb879c460f4e3ac67b4db1b8905c13821ad950f5e8c8e07e1f3a73e612e99dd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "priority", value)

    @builtins.property
    @jsii.member(jsii_name="qosId")
    def qos_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: qosId: The ID of the QoS policy.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "qosId"))

    @qos_id.setter
    def qos_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__185e15e1d33850d4ee1e92f9a0d2b138d9ad449adcc47c1f9e29572f4a64bf80)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "qosId", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the traffic throttling policy.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dbd84e0c31974a935d0836e03bd5f16668dd814371377529dd0574c1bdba3d19)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="maxBandwidthAbs")
    def max_bandwidth_abs(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: maxBandwidthAbs: The maximum bandwidth. This parameter is required when LimitType is set to Absolute.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "maxBandwidthAbs"))

    @max_bandwidth_abs.setter
    def max_bandwidth_abs(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4cb3f283ddae9d44d2d99727b224809c963cb830685ccc22c430d4acd545d244)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "maxBandwidthAbs", value)

    @builtins.property
    @jsii.member(jsii_name="maxBandwidthPercent")
    def max_bandwidth_percent(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        maxBandwidthPercent: The maximum percentage that is based on the maximum upstream bandwidth of the SAG
        instance.
        This parameter is required when LimitType is set to Percent.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "maxBandwidthPercent"))

    @max_bandwidth_percent.setter
    def max_bandwidth_percent(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__70c735f437204730ee1bd1ebfa56911f1bbd7906ccc96b0dd054645153b674da)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "maxBandwidthPercent", value)

    @builtins.property
    @jsii.member(jsii_name="minBandwidthAbs")
    def min_bandwidth_abs(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: minBandwidthAbs: The minimum bandwidth. This parameter is required when LimitType is set to Absolute.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "minBandwidthAbs"))

    @min_bandwidth_abs.setter
    def min_bandwidth_abs(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e36f2ef80fbdd17d44e22ab92f08c24bddabaeb4768df98bd918e865ea7169cc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "minBandwidthAbs", value)

    @builtins.property
    @jsii.member(jsii_name="minBandwidthPercent")
    def min_bandwidth_percent(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        minBandwidthPercent: The minimum percentage that is based on the maximum upstream bandwidth of the SAG
        instance.
        This parameter is required when LimitType is set to Percent.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "minBandwidthPercent"))

    @min_bandwidth_percent.setter
    def min_bandwidth_percent(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3fe4ec199c61b308f2304540e64a8b444c40014fcd35b056e3e72f471d27336b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "minBandwidthPercent", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        name: The name of the traffic throttling policy. The name must be 2 to 128 characters in
        length, and can contain Chinese characters, letters, digits, periods (.), underscores
        (_), and hyphens (-).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cdd8921c3717ea4ee1c0f037bb330fe75950c58d3ffb01a052fafae6576bc933)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="percentSourceType")
    def percent_source_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        percentSourceType: If the policy throttles traffic based on a specified bandwidth percentage, the following
        options are available:
        CcnBandwidth: Cloud Enterprise Network (CCN) bandwidth.
        InternetUpBandwidth: Internet upstream bandwidth.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "percentSourceType"))

    @percent_source_type.setter
    def percent_source_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e360f1d526cf508f58124cf6fbbd882b4b15aaf050c52111a2c1f0676b23a229)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "percentSourceType", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sag.RosQosCarProps",
    jsii_struct_bases=[],
    name_mapping={
        "limit_type": "limitType",
        "priority": "priority",
        "qos_id": "qosId",
        "description": "description",
        "max_bandwidth_abs": "maxBandwidthAbs",
        "max_bandwidth_percent": "maxBandwidthPercent",
        "min_bandwidth_abs": "minBandwidthAbs",
        "min_bandwidth_percent": "minBandwidthPercent",
        "name": "name",
        "percent_source_type": "percentSourceType",
    },
)
class RosQosCarProps:
    def __init__(
        self,
        *,
        limit_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        priority: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        qos_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        max_bandwidth_abs: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        max_bandwidth_percent: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        min_bandwidth_abs: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        min_bandwidth_percent: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        percent_source_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosQosCar``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qoscar

        :param limit_type: 
        :param priority: 
        :param qos_id: 
        :param description: 
        :param max_bandwidth_abs: 
        :param max_bandwidth_percent: 
        :param min_bandwidth_abs: 
        :param min_bandwidth_percent: 
        :param name: 
        :param percent_source_type: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__de2f68a0375a1737bc70b117f797a83d0cc5e16bad6510530eb8b13a1d3ecab7)
            check_type(argname="argument limit_type", value=limit_type, expected_type=type_hints["limit_type"])
            check_type(argname="argument priority", value=priority, expected_type=type_hints["priority"])
            check_type(argname="argument qos_id", value=qos_id, expected_type=type_hints["qos_id"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument max_bandwidth_abs", value=max_bandwidth_abs, expected_type=type_hints["max_bandwidth_abs"])
            check_type(argname="argument max_bandwidth_percent", value=max_bandwidth_percent, expected_type=type_hints["max_bandwidth_percent"])
            check_type(argname="argument min_bandwidth_abs", value=min_bandwidth_abs, expected_type=type_hints["min_bandwidth_abs"])
            check_type(argname="argument min_bandwidth_percent", value=min_bandwidth_percent, expected_type=type_hints["min_bandwidth_percent"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument percent_source_type", value=percent_source_type, expected_type=type_hints["percent_source_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "limit_type": limit_type,
            "priority": priority,
            "qos_id": qos_id,
        }
        if description is not None:
            self._values["description"] = description
        if max_bandwidth_abs is not None:
            self._values["max_bandwidth_abs"] = max_bandwidth_abs
        if max_bandwidth_percent is not None:
            self._values["max_bandwidth_percent"] = max_bandwidth_percent
        if min_bandwidth_abs is not None:
            self._values["min_bandwidth_abs"] = min_bandwidth_abs
        if min_bandwidth_percent is not None:
            self._values["min_bandwidth_percent"] = min_bandwidth_percent
        if name is not None:
            self._values["name"] = name
        if percent_source_type is not None:
            self._values["percent_source_type"] = percent_source_type

    @builtins.property
    def limit_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        limitType: The type of the traffic throttling policy. Valid values:
        Absolute: throttles traffic by a specific bandwidth range.
        Percent: throttles traffic by a specific range of bandwidth percentage.
        '''
        result = self._values.get("limit_type")
        assert result is not None, "Required property 'limit_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def priority(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        priority: The priority of the traffic throttling policy. A smaller value represents a higher
        priority. If policies are assigned the same priority, the one applied the earliest
        prevails. Valid values: 1 to 7.
        '''
        result = self._values.get("priority")
        assert result is not None, "Required property 'priority' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def qos_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: qosId: The ID of the QoS policy.
        '''
        result = self._values.get("qos_id")
        assert result is not None, "Required property 'qos_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the traffic throttling policy.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def max_bandwidth_abs(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: maxBandwidthAbs: The maximum bandwidth. This parameter is required when LimitType is set to Absolute.
        '''
        result = self._values.get("max_bandwidth_abs")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def max_bandwidth_percent(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        maxBandwidthPercent: The maximum percentage that is based on the maximum upstream bandwidth of the SAG
        instance.
        This parameter is required when LimitType is set to Percent.
        '''
        result = self._values.get("max_bandwidth_percent")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def min_bandwidth_abs(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: minBandwidthAbs: The minimum bandwidth. This parameter is required when LimitType is set to Absolute.
        '''
        result = self._values.get("min_bandwidth_abs")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def min_bandwidth_percent(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        minBandwidthPercent: The minimum percentage that is based on the maximum upstream bandwidth of the SAG
        instance.
        This parameter is required when LimitType is set to Percent.
        '''
        result = self._values.get("min_bandwidth_percent")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        name: The name of the traffic throttling policy. The name must be 2 to 128 characters in
        length, and can contain Chinese characters, letters, digits, periods (.), underscores
        (_), and hyphens (-).
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def percent_source_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        percentSourceType: If the policy throttles traffic based on a specified bandwidth percentage, the following
        options are available:
        CcnBandwidth: Cloud Enterprise Network (CCN) bandwidth.
        InternetUpBandwidth: Internet upstream bandwidth.
        '''
        result = self._values.get("percent_source_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosQosCarProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosQosPolicy(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sag.RosQosPolicy",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::SAG::QosPolicy``, which is used to create a traffic classification rule for a quality of service (QoS) policy.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``QosPolicy`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qospolicy
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosQosPolicyProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__661bccf5d12136e6ac7cb70c3e00e59b380b17df92e3c337d5c85ba78d44a478)
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
            type_hints = typing.get_type_hints(_typecheckingstub__e14197007fcc75859b6f091895599de49820ff0338b1ee738fc9e7b61f140023)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrQosPolicyId")
    def attr_qos_policy_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: QosPolicyId: The ID of the traffic classification rule.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrQosPolicyId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="destCidr")
    def dest_cidr(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        destCidr: The range of the destination IP addresses.
        Specify the value of this parameter in CIDR notation. Example: 192.168.10.0/24.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "destCidr"))

    @dest_cidr.setter
    def dest_cidr(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3cd3da22484f581ae7c49c8a0ac5187c4200ef3456622f47bf9a4d710be29965)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "destCidr", value)

    @builtins.property
    @jsii.member(jsii_name="destPortRange")
    def dest_port_range(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        destPortRange: The range of destination ports.
        Valid values: 1 to 65535 and -1.
        Set this parameter in one of the following formats:
        1/200: a port range from 1 to 200
        80/80: port 80
        -1/-1: all ports
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "destPortRange"))

    @dest_port_range.setter
    def dest_port_range(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__706119f9a03add9911796423001a78685a675dffe143d28c4f38a15f717fdc40)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "destPortRange", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__467d3726137b3338f302beceec5422db5ecaaad5d769fe40aac05b34b26128e8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="ipProtocol")
    def ip_protocol(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        ipProtocol: The type of the protocol that applies to the traffic classification rule.
        The supported protocols provided in this topic are for reference only. The actual
        protocols in the console shall prevail.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "ipProtocol"))

    @ip_protocol.setter
    def ip_protocol(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eac6fc842c1a430b1f7c1e77a334fd978c67269df33f1401a93ee553033cd1fb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ipProtocol", value)

    @builtins.property
    @jsii.member(jsii_name="priority")
    def priority(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        priority: The priority of the traffic throttling policy to which the traffic classification
        rule belongs.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "priority"))

    @priority.setter
    def priority(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__533938359737110bb30b5a5f39d16222dd3e4fef626bb1aa862ac676d2d78a03)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "priority", value)

    @builtins.property
    @jsii.member(jsii_name="qosId")
    def qos_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: qosId: The ID of the QoS policy.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "qosId"))

    @qos_id.setter
    def qos_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8c2776eaa54608a95e3cf0907b9b371295e5e75f640b69309f14ba17abf088ea)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "qosId", value)

    @builtins.property
    @jsii.member(jsii_name="sourceCidr")
    def source_cidr(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        sourceCidr: The range of the source IP addresses.
        Specify the value of this parameter in CIDR notation. Example: 192.168.1.0/24.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "sourceCidr"))

    @source_cidr.setter
    def source_cidr(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aee37ae6544f9d39bcf0f245b2c948a6e4b35e4b9ce8b7d5607bc066b93b8706)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceCidr", value)

    @builtins.property
    @jsii.member(jsii_name="sourcePortRange")
    def source_port_range(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        sourcePortRange: The range of source ports.
        Valid values: 1 to 65535 and -1.
        Set this parameter in one of the following formats:
        1/200: a port range from 1 to 200
        80/80: port 80
        -1/-1: all ports
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "sourcePortRange"))

    @source_port_range.setter
    def source_port_range(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bd7f374b94e59a69b387e4a879729738354e291b8f9a908694f152eed01e4a01)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourcePortRange", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        description: The description of the traffic classification rule.
        The description must be 1 to 512 characters in length and can contain letters, digits,
        underscores (_), and hyphens (-). It must start with a letter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__201950de0445d6d3c1f6b2db08bd6789eaaab015c9504147b8d0abf0e5d9d271)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="dpiGroupIds")
    def dpi_group_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        dpiGroupIds: The ID of the application group.
        You can enter at most 100 application group IDs at a time.
        You can call the ListDpiGroups operation to query application group IDs and information about the applications.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "dpiGroupIds"))

    @dpi_group_ids.setter
    def dpi_group_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9858a70b2fabf44c2b4d3af5fa1835835f64445d55e2cdc187558801549aed31)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dpiGroupIds", value)

    @builtins.property
    @jsii.member(jsii_name="dpiSignatureIds")
    def dpi_signature_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        dpiSignatureIds: The ID of the application.
        You can enter at most 100 application IDs at a time.
        You can call the ListDpiSignatures operation to query application IDs and information about the applications.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "dpiSignatureIds"))

    @dpi_signature_ids.setter
    def dpi_signature_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f82be9376c8feeb7b23bad1644420e4e0b26ed80142d125274e421d505dc090a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dpiSignatureIds", value)

    @builtins.property
    @jsii.member(jsii_name="endTime")
    def end_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        endTime: The time when the traffic classification rule becomes invalid.
        Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss+0800 format.
        The time must be in UTC+8.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "endTime"))

    @end_time.setter
    def end_time(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9e8401b09ef5433944f5eac3ab03ec3f4ebd37536f99a608126dcdcecbee06c2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "endTime", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        name: The name of the traffic classification rule.
        The name must be 2 to 100 characters in length, and can contain digits, underscores
        (_), and hyphens (-). It must start with a letter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9d64770e2824144f24a9c4cd369dd9ba525c660a5ddefc1b34dc2846b25d8f38)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="startTime")
    def start_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        startTime: The time when the traffic classification rule takes effect.
        Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss+0800 format.
        The time must be in UTC+8.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "startTime"))

    @start_time.setter
    def start_time(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4e4d251ebdc9a1677f0bc32fec71978756c50a803bbfab08880dbfbcdf377d04)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "startTime", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sag.RosQosPolicyProps",
    jsii_struct_bases=[],
    name_mapping={
        "dest_cidr": "destCidr",
        "dest_port_range": "destPortRange",
        "ip_protocol": "ipProtocol",
        "priority": "priority",
        "qos_id": "qosId",
        "source_cidr": "sourceCidr",
        "source_port_range": "sourcePortRange",
        "description": "description",
        "dpi_group_ids": "dpiGroupIds",
        "dpi_signature_ids": "dpiSignatureIds",
        "end_time": "endTime",
        "name": "name",
        "start_time": "startTime",
    },
)
class RosQosPolicyProps:
    def __init__(
        self,
        *,
        dest_cidr: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        dest_port_range: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ip_protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        priority: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        qos_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_cidr: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_port_range: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dpi_group_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        dpi_signature_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        end_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        start_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosQosPolicy``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qospolicy

        :param dest_cidr: 
        :param dest_port_range: 
        :param ip_protocol: 
        :param priority: 
        :param qos_id: 
        :param source_cidr: 
        :param source_port_range: 
        :param description: 
        :param dpi_group_ids: 
        :param dpi_signature_ids: 
        :param end_time: 
        :param name: 
        :param start_time: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__81d207d88623295776bb1f7dec88aa28e66062ac96d396ebf0784e7b61773b1c)
            check_type(argname="argument dest_cidr", value=dest_cidr, expected_type=type_hints["dest_cidr"])
            check_type(argname="argument dest_port_range", value=dest_port_range, expected_type=type_hints["dest_port_range"])
            check_type(argname="argument ip_protocol", value=ip_protocol, expected_type=type_hints["ip_protocol"])
            check_type(argname="argument priority", value=priority, expected_type=type_hints["priority"])
            check_type(argname="argument qos_id", value=qos_id, expected_type=type_hints["qos_id"])
            check_type(argname="argument source_cidr", value=source_cidr, expected_type=type_hints["source_cidr"])
            check_type(argname="argument source_port_range", value=source_port_range, expected_type=type_hints["source_port_range"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument dpi_group_ids", value=dpi_group_ids, expected_type=type_hints["dpi_group_ids"])
            check_type(argname="argument dpi_signature_ids", value=dpi_signature_ids, expected_type=type_hints["dpi_signature_ids"])
            check_type(argname="argument end_time", value=end_time, expected_type=type_hints["end_time"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument start_time", value=start_time, expected_type=type_hints["start_time"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "dest_cidr": dest_cidr,
            "dest_port_range": dest_port_range,
            "ip_protocol": ip_protocol,
            "priority": priority,
            "qos_id": qos_id,
            "source_cidr": source_cidr,
            "source_port_range": source_port_range,
        }
        if description is not None:
            self._values["description"] = description
        if dpi_group_ids is not None:
            self._values["dpi_group_ids"] = dpi_group_ids
        if dpi_signature_ids is not None:
            self._values["dpi_signature_ids"] = dpi_signature_ids
        if end_time is not None:
            self._values["end_time"] = end_time
        if name is not None:
            self._values["name"] = name
        if start_time is not None:
            self._values["start_time"] = start_time

    @builtins.property
    def dest_cidr(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        destCidr: The range of the destination IP addresses.
        Specify the value of this parameter in CIDR notation. Example: 192.168.10.0/24.
        '''
        result = self._values.get("dest_cidr")
        assert result is not None, "Required property 'dest_cidr' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def dest_port_range(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        destPortRange: The range of destination ports.
        Valid values: 1 to 65535 and -1.
        Set this parameter in one of the following formats:
        1/200: a port range from 1 to 200
        80/80: port 80
        -1/-1: all ports
        '''
        result = self._values.get("dest_port_range")
        assert result is not None, "Required property 'dest_port_range' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ip_protocol(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        ipProtocol: The type of the protocol that applies to the traffic classification rule.
        The supported protocols provided in this topic are for reference only. The actual
        protocols in the console shall prevail.
        '''
        result = self._values.get("ip_protocol")
        assert result is not None, "Required property 'ip_protocol' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def priority(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        priority: The priority of the traffic throttling policy to which the traffic classification
        rule belongs.
        '''
        result = self._values.get("priority")
        assert result is not None, "Required property 'priority' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def qos_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: qosId: The ID of the QoS policy.
        '''
        result = self._values.get("qos_id")
        assert result is not None, "Required property 'qos_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_cidr(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        sourceCidr: The range of the source IP addresses.
        Specify the value of this parameter in CIDR notation. Example: 192.168.1.0/24.
        '''
        result = self._values.get("source_cidr")
        assert result is not None, "Required property 'source_cidr' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_port_range(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        sourcePortRange: The range of source ports.
        Valid values: 1 to 65535 and -1.
        Set this parameter in one of the following formats:
        1/200: a port range from 1 to 200
        80/80: port 80
        -1/-1: all ports
        '''
        result = self._values.get("source_port_range")
        assert result is not None, "Required property 'source_port_range' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        description: The description of the traffic classification rule.
        The description must be 1 to 512 characters in length and can contain letters, digits,
        underscores (_), and hyphens (-). It must start with a letter.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dpi_group_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        dpiGroupIds: The ID of the application group.
        You can enter at most 100 application group IDs at a time.
        You can call the ListDpiGroups operation to query application group IDs and information about the applications.
        '''
        result = self._values.get("dpi_group_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def dpi_signature_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        dpiSignatureIds: The ID of the application.
        You can enter at most 100 application IDs at a time.
        You can call the ListDpiSignatures operation to query application IDs and information about the applications.
        '''
        result = self._values.get("dpi_signature_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def end_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        endTime: The time when the traffic classification rule becomes invalid.
        Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss+0800 format.
        The time must be in UTC+8.
        '''
        result = self._values.get("end_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        name: The name of the traffic classification rule.
        The name must be 2 to 100 characters in length, and can contain digits, underscores
        (_), and hyphens (-). It must start with a letter.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def start_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        startTime: The time when the traffic classification rule takes effect.
        Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss+0800 format.
        The time must be in UTC+8.
        '''
        result = self._values.get("start_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosQosPolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sag.RosQosProps",
    jsii_struct_bases=[],
    name_mapping={"qos_name": "qosName", "qos_description": "qosDescription"},
)
class RosQosProps:
    def __init__(
        self,
        *,
        qos_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        qos_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosQos``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qos

        :param qos_name: 
        :param qos_description: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a3744f8e03cf5a999200af1901aa330fdf9f540e7a3e36e78bbdf60d59324454)
            check_type(argname="argument qos_name", value=qos_name, expected_type=type_hints["qos_name"])
            check_type(argname="argument qos_description", value=qos_description, expected_type=type_hints["qos_description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "qos_name": qos_name,
        }
        if qos_description is not None:
            self._values["qos_description"] = qos_description

    @builtins.property
    def qos_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        qosName: The name of the QoS policy.
        The name must be 2 to 100 characters in length and can contain letters, digits, periods
        (.), underscores (_), and hyphens (-). It must start with a letter.
        '''
        result = self._values.get("qos_name")
        assert result is not None, "Required property 'qos_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def qos_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        qosDescription: The description of the QoS policy.
        The description must be 1 to 512 characters in length and can contain letters, digits,
        underscores (_), and hyphens (-). It must start with a letter.
        '''
        result = self._values.get("qos_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosQosProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSerialNumberBinding(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sag.RosSerialNumberBinding",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::SAG::SerialNumberBinding``, which is used to associate a Smart Access Gateway (SAG) device with an SAG instance.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``SerialNumberBinding`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-serialnumberbinding
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosSerialNumberBindingProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5f9acef511ea584ad813e5490b609bd8aada0afd750d92427c07878997631f1f)
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
            type_hints = typing.get_type_hints(_typecheckingstub__2ed80969a1f0ec138d294770456e25665978681c5383f57984e4d5c23f0bc1da)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrSmartAgId")
    def attr_smart_ag_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SmartAGId: The ID of the SAG instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSmartAgId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__b74519aa4540878a9343d109013dbeed3b2f6e1061111457773ad0e5d7e21700)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="serialNumber")
    def serial_number(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: serialNumber: The serial number (SN) of the SAG device.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "serialNumber"))

    @serial_number.setter
    def serial_number(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0c0272bff4877f60d01eee03864fc4c371e5323e4ab2125fe946bae5a1d5b83b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serialNumber", value)

    @builtins.property
    @jsii.member(jsii_name="smartAgId")
    def smart_ag_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: smartAgId: The ID of the SAG instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "smartAgId"))

    @smart_ag_id.setter
    def smart_ag_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__317c5fe9491ff4d1ca568557ba1ea3e89a1d745d3b36342d1fd1c9ffc2192b87)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "smartAgId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sag.RosSerialNumberBindingProps",
    jsii_struct_bases=[],
    name_mapping={"serial_number": "serialNumber", "smart_ag_id": "smartAgId"},
)
class RosSerialNumberBindingProps:
    def __init__(
        self,
        *,
        serial_number: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        smart_ag_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosSerialNumberBinding``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-serialnumberbinding

        :param serial_number: 
        :param smart_ag_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__08d6a3f2bc12c6611010eb7827cbb79bf72a447456e070e067ee9b3fe7ddf3f7)
            check_type(argname="argument serial_number", value=serial_number, expected_type=type_hints["serial_number"])
            check_type(argname="argument smart_ag_id", value=smart_ag_id, expected_type=type_hints["smart_ag_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "serial_number": serial_number,
            "smart_ag_id": smart_ag_id,
        }

    @builtins.property
    def serial_number(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: serialNumber: The serial number (SN) of the SAG device.
        '''
        result = self._values.get("serial_number")
        assert result is not None, "Required property 'serial_number' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def smart_ag_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: smartAgId: The ID of the SAG instance.
        '''
        result = self._values.get("smart_ag_id")
        assert result is not None, "Required property 'smart_ag_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSerialNumberBindingProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSmartAccessGateway(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sag.RosSmartAccessGateway",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::SAG::SmartAccessGateway``, which is used to create a Smart Access Gateway (SAG) instance.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``SmartAccessGateway`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-smartaccessgateway
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosSmartAccessGatewayProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1180670dc5d5d51c1ab3511df1f180950b4363271da05874346ef7e64681c481)
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
            type_hints = typing.get_type_hints(_typecheckingstub__39e09888788633ae74520e99d6ee3ed7a778201a3750c66c37863e2ccae8830e)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: OrderId: The ID of the order.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="attrSmartAgId")
    def attr_smart_ag_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SmartAGId: The ID of the SAG instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSmartAgId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="buyerMessage")
    def buyer_message(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: buyerMessage: The remarks left by the buyer.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "buyerMessage"))

    @buyer_message.setter
    def buyer_message(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6bddd2af34480980cc43019c6904d99d8a0716dcba7c383380f20c7b640ae34b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "buyerMessage", value)

    @builtins.property
    @jsii.member(jsii_name="chargeType")
    def charge_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        chargeType: The billing method of the SAG instance.
        Set the value to PREPAY, which specifies the subscription billing method.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "chargeType"))

    @charge_type.setter
    def charge_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__10a0806eec516bb053d58696e8c28b367659dc1a34173215f4664aa5c4761baf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "chargeType", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c7ce59b8e88bc8d85f148e55e0dcbc4324a1e44121c420bfe3769cf074ab0274)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="hardWareSpec")
    def hard_ware_spec(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        hardWareSpec: The type of the SAG instance. Valid values:
        sag-100wm
        sag-1000
        sag-vcpe
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "hardWareSpec"))

    @hard_ware_spec.setter
    def hard_ware_spec(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__48ff554fa3c369d17b775014bc8dc9defed9b57b01e4a9d01ed3d12f3a2cbc0d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "hardWareSpec", value)

    @builtins.property
    @jsii.member(jsii_name="haType")
    def ha_type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        haType: The deployment mode. Valid values:
        no_backup: You buy only one SAG device to connect private networks to Alibaba Cloud.
        cold_backup: You buy two SAG devices in active-standby mode. One SAG device serves as an active
        device and the other serves as a standby device. Only the active device is connected
        to Alibaba Cloud. If the active device is not working as expected, you must manually
        perform a switchover.
        warm_backup: You buy two SAG devices in active-active mode. Both SAG devices are connected to
        Alibaba Cloud. If an active device is not working as expected, a failover is automatically
        performed.
        Note If you want to create an SAG vCPE instance, set the value to warm_backup.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "haType"))

    @ha_type.setter
    def ha_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4673ca98acd7c7c90f2c34bbd8ee58899d5ba3e6ed0dd54d13ce56c4273ea60d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "haType", value)

    @builtins.property
    @jsii.member(jsii_name="maxBandWidth")
    def max_band_width(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        maxBandWidth: The bandwidth of the SAG instance.
        If you want to create an SAG CPE instance and the model is sag-100wm, valid values of this parameter are 2 to 50. Unit: Mbit/s.
        If you want to create an SAG CPE instance and the model is sag-1000, valid values of this parameter are 10 to 500. Unit: Mbit/s.
        If you want to create an SAG vCPE instance, valid values of this parameter are 10 to 1000. Unit: Mbit/s.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "maxBandWidth"))

    @max_band_width.setter
    def max_band_width(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b8028a0c5c14372ace0ffbc59af4919c3f13050b8ee96ab95d11670b591a8964)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "maxBandWidth", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        period: The subscription period of the SAG instance. Unit: months.
        Valid values: 1 to 9, 12, 24, and 36.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e293e57b36567444ed5fadfb6ddad8a7a119704b60e7d2c18f45fbc1ea63b140)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="receiverAddress")
    def receiver_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: receiverAddress: The detailed address of the recipient.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "receiverAddress"))

    @receiver_address.setter
    def receiver_address(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f98f41a518b0109efabd5016bcb71098c3ff5194033981107ac432bd78cc433f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "receiverAddress", value)

    @builtins.property
    @jsii.member(jsii_name="receiverCity")
    def receiver_city(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: receiverCity: The city of the recipient address.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "receiverCity"))

    @receiver_city.setter
    def receiver_city(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__adf790fc5b50fca98b56cd90a80b3230f3157e24f014e758badacd092085c93b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "receiverCity", value)

    @builtins.property
    @jsii.member(jsii_name="receiverCountry")
    def receiver_country(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: receiverCountry: The country of the recipient address.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "receiverCountry"))

    @receiver_country.setter
    def receiver_country(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3a980302be6cfc89c598ea40915e0da27643c1568b054d9e5852ac17799818ea)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "receiverCountry", value)

    @builtins.property
    @jsii.member(jsii_name="receiverDistrict")
    def receiver_district(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: receiverDistrict: The district of the recipient address.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "receiverDistrict"))

    @receiver_district.setter
    def receiver_district(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__80cd533e088740e9d1b8e898e1affae189a50ed01f6104e0a8c47c7955ed4cc7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "receiverDistrict", value)

    @builtins.property
    @jsii.member(jsii_name="receiverEmail")
    def receiver_email(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: receiverEmail: The email address of the recipient.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "receiverEmail"))

    @receiver_email.setter
    def receiver_email(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__57a945cff983816d9e4acb58a58c1899b3f8ef01bd2f7a68bdc66bdc1a637933)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "receiverEmail", value)

    @builtins.property
    @jsii.member(jsii_name="receiverMobile")
    def receiver_mobile(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: receiverMobile: The mobile phone number of the recipient.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "receiverMobile"))

    @receiver_mobile.setter
    def receiver_mobile(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__10a369d653cd1614ba8bd14f257b81c4e27bf82fc01a7a41df49ceb4a7fb693e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "receiverMobile", value)

    @builtins.property
    @jsii.member(jsii_name="receiverName")
    def receiver_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: receiverName: The name of the recipient.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "receiverName"))

    @receiver_name.setter
    def receiver_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__adda83ec5372d8f6d91f70226202d1cd5683a8f577f07c9ce011db9cebb8613d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "receiverName", value)

    @builtins.property
    @jsii.member(jsii_name="receiverState")
    def receiver_state(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: receiverState: The province of the recipient address.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "receiverState"))

    @receiver_state.setter
    def receiver_state(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a09cff5cac924b9a57cebd132f09a8d6765dad746eee8c891d3b713fdc094929)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "receiverState", value)

    @builtins.property
    @jsii.member(jsii_name="receiverTown")
    def receiver_town(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: receiverTown: The town of the recipient address.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "receiverTown"))

    @receiver_town.setter
    def receiver_town(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e0bd3aee7ce9e193eaebaca2aa0af43d9975f7cee5011e3b320387a9468ca74c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "receiverTown", value)

    @builtins.property
    @jsii.member(jsii_name="receiverZip")
    def receiver_zip(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: receiverZip: The postcode of the recipient address.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "receiverZip"))

    @receiver_zip.setter
    def receiver_zip(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__901a16e49b89a1fc6a2ecbd181cf6387e515c9bb5cb83e8278f00b3d103a442e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "receiverZip", value)

    @builtins.property
    @jsii.member(jsii_name="activate")
    def activate(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: activate: Activate SAG or not. Default is False
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "activate"))

    @activate.setter
    def activate(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ed817f4f12c340bd095b687635d3c5b8b06d6bd748e9755086a77dc68d295d29)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "activate", value)

    @builtins.property
    @jsii.member(jsii_name="alreadyHaveSag")
    def already_have_sag(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        alreadyHaveSag: Specifies whether you already have an SAG device. Valid values:
        true: yes
        false (default): no
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "alreadyHaveSag"))

    @already_have_sag.setter
    def already_have_sag(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b810087eea9bf86f2a6e63c754e79c74d5473942eb197ad925be96d16d2f80d7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "alreadyHaveSag", value)

    @builtins.property
    @jsii.member(jsii_name="autoPay")
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoPay: Specifies whether to enable auto-payment for the instance. Valid values:
        true: yes
        false: no
        If you set the parameter to false, go to Billing Management to complete the payment
        after you call this operation. After you complete the payment, the instance can be
        created.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoPay"))

    @auto_pay.setter
    def auto_pay(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__31bac616a77c332ab9149c2969c8d67426c0244b2eea3197ee4799fcccad9593)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoPay", value)

    @builtins.property
    @jsii.member(jsii_name="cidrBlock")
    def cidr_block(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        cidrBlock: The CIDR blocks of terminals in the private network. Make sure that the CIDR blocks
        do not overlap with each other.
        If the LAN port of the SAG device dynamically assigns IP addresses, IP addresses within
        the first CIDR block are assigned to terminals that have the Dynamic Host Configuration
        Protocol (DHCP) enabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "cidrBlock"))

    @cidr_block.setter
    def cidr_block(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__abc89f449093847f94e4363eca0afa1d143bff48799ad1bcd4246928a8aeaf4a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cidrBlock", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        description: The description of the SAG instance.
        The description must be 2 to 256 characters in length, and can contain digits, periods
        (.), underscores (_), and hyphens (-). It must start with a letter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2259e11e980dc0e756f24439a1a98a409999ad5a132b5a627a6ff796026b64c3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        name: The name of the SAG instance.
        The name must be 2 to 128 characters in length and can contain digits, periods (.),
        underscores (_), and hyphens (-). It must start with a letter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fcd2d9f47e8b8f4bf16c7e1b6cfad86a6e21e694e17f07c7330f92200dd7557e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="receiverPhone")
    def receiver_phone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: receiverPhone: The landline phone number of the recipient.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "receiverPhone"))

    @receiver_phone.setter
    def receiver_phone(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__747c05b64d35d476e8969d58898bc9dbbf2436cf3130892622ca1902e3e8ea21)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "receiverPhone", value)

    @builtins.property
    @jsii.member(jsii_name="routingStrategy")
    def routing_strategy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        routingStrategy: The policy to advertise routes from the private network to Alibaba Cloud.
        static: static routing.
        dynamic: dynamic routing.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "routingStrategy"))

    @routing_strategy.setter
    def routing_strategy(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3871c410d4b651bd69fa4489c281626c965b6d5e291e49cc7ee74e8471eba83f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "routingStrategy", value)

    @builtins.property
    @jsii.member(jsii_name="securityLockThreshold")
    def security_lock_threshold(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        securityLockThreshold: The time that a disconnected SAG device remain locked. The time must be no shorter
        than zero second.
        Unit: second.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "securityLockThreshold"))

    @security_lock_threshold.setter
    def security_lock_threshold(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6a814be234103a6869cd58e36bb3ac64845e68f45d670f0639692602c45aec54)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityLockThreshold", value)


class RosSmartAccessGatewayBinding(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sag.RosSmartAccessGatewayBinding",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::SAG::SmartAccessGatewayBinding``, which is used to bind a Smart Access Gateway (SAG) instance to a specified Cloud Connect Network (CCN) instance.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``SmartAccessGatewayBinding`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-smartaccessgatewaybinding
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosSmartAccessGatewayBindingProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c9ca653b404570ce719527e47e015991fe154b561741a02c110b2531d800e906)
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
            type_hints = typing.get_type_hints(_typecheckingstub__a60ef75b59c6d1d80f4b767f0ee19af2f5c16b2f78d2fda970796fb00e45cec1)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrSmartAgId")
    def attr_smart_ag_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SmartAGId: The ID of the Smart Access Gateway instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSmartAgId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="ccnId")
    def ccn_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ccnId: The ID of the CCN instance to bind.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "ccnId"))

    @ccn_id.setter
    def ccn_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__14491b8a491a56854fdac5275d32d2a11d4c0c32548707535553627808871a20)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ccnId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0f33a31ae588738462aca029631eca3717ae90755aee8123e7ee995fac094ac7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="smartAgId")
    def smart_ag_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: smartAgId: The ID of the Smart Access Gateway instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "smartAgId"))

    @smart_ag_id.setter
    def smart_ag_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fdcb64a460b42b6219aefe517908a29cd6ef83afbb534619076978bc29ee52c0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "smartAgId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sag.RosSmartAccessGatewayBindingProps",
    jsii_struct_bases=[],
    name_mapping={"ccn_id": "ccnId", "smart_ag_id": "smartAgId"},
)
class RosSmartAccessGatewayBindingProps:
    def __init__(
        self,
        *,
        ccn_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        smart_ag_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosSmartAccessGatewayBinding``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-smartaccessgatewaybinding

        :param ccn_id: 
        :param smart_ag_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__17de1e5989256d538e53edec8735bc9ec09195dec2bf20fd6dcd872e03ac4917)
            check_type(argname="argument ccn_id", value=ccn_id, expected_type=type_hints["ccn_id"])
            check_type(argname="argument smart_ag_id", value=smart_ag_id, expected_type=type_hints["smart_ag_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "ccn_id": ccn_id,
            "smart_ag_id": smart_ag_id,
        }

    @builtins.property
    def ccn_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ccnId: The ID of the CCN instance to bind.
        '''
        result = self._values.get("ccn_id")
        assert result is not None, "Required property 'ccn_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def smart_ag_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: smartAgId: The ID of the Smart Access Gateway instance.
        '''
        result = self._values.get("smart_ag_id")
        assert result is not None, "Required property 'smart_ag_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSmartAccessGatewayBindingProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sag.RosSmartAccessGatewayProps",
    jsii_struct_bases=[],
    name_mapping={
        "buyer_message": "buyerMessage",
        "charge_type": "chargeType",
        "hard_ware_spec": "hardWareSpec",
        "ha_type": "haType",
        "max_band_width": "maxBandWidth",
        "period": "period",
        "receiver_address": "receiverAddress",
        "receiver_city": "receiverCity",
        "receiver_country": "receiverCountry",
        "receiver_district": "receiverDistrict",
        "receiver_email": "receiverEmail",
        "receiver_mobile": "receiverMobile",
        "receiver_name": "receiverName",
        "receiver_state": "receiverState",
        "receiver_town": "receiverTown",
        "receiver_zip": "receiverZip",
        "activate": "activate",
        "already_have_sag": "alreadyHaveSag",
        "auto_pay": "autoPay",
        "cidr_block": "cidrBlock",
        "description": "description",
        "name": "name",
        "receiver_phone": "receiverPhone",
        "routing_strategy": "routingStrategy",
        "security_lock_threshold": "securityLockThreshold",
    },
)
class RosSmartAccessGatewayProps:
    def __init__(
        self,
        *,
        buyer_message: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        charge_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        hard_ware_spec: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ha_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        max_band_width: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        period: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        receiver_address: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        receiver_city: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        receiver_country: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        receiver_district: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        receiver_email: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        receiver_mobile: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        receiver_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        receiver_state: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        receiver_town: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        receiver_zip: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        activate: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        already_have_sag: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cidr_block: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        receiver_phone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        routing_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_lock_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosSmartAccessGateway``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-smartaccessgateway

        :param buyer_message: 
        :param charge_type: 
        :param hard_ware_spec: 
        :param ha_type: 
        :param max_band_width: 
        :param period: 
        :param receiver_address: 
        :param receiver_city: 
        :param receiver_country: 
        :param receiver_district: 
        :param receiver_email: 
        :param receiver_mobile: 
        :param receiver_name: 
        :param receiver_state: 
        :param receiver_town: 
        :param receiver_zip: 
        :param activate: 
        :param already_have_sag: 
        :param auto_pay: 
        :param cidr_block: 
        :param description: 
        :param name: 
        :param receiver_phone: 
        :param routing_strategy: 
        :param security_lock_threshold: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dbd8041977da1f01d51fdc5af043d594c46c71a64b9eae31c8a5ed10e183eeda)
            check_type(argname="argument buyer_message", value=buyer_message, expected_type=type_hints["buyer_message"])
            check_type(argname="argument charge_type", value=charge_type, expected_type=type_hints["charge_type"])
            check_type(argname="argument hard_ware_spec", value=hard_ware_spec, expected_type=type_hints["hard_ware_spec"])
            check_type(argname="argument ha_type", value=ha_type, expected_type=type_hints["ha_type"])
            check_type(argname="argument max_band_width", value=max_band_width, expected_type=type_hints["max_band_width"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument receiver_address", value=receiver_address, expected_type=type_hints["receiver_address"])
            check_type(argname="argument receiver_city", value=receiver_city, expected_type=type_hints["receiver_city"])
            check_type(argname="argument receiver_country", value=receiver_country, expected_type=type_hints["receiver_country"])
            check_type(argname="argument receiver_district", value=receiver_district, expected_type=type_hints["receiver_district"])
            check_type(argname="argument receiver_email", value=receiver_email, expected_type=type_hints["receiver_email"])
            check_type(argname="argument receiver_mobile", value=receiver_mobile, expected_type=type_hints["receiver_mobile"])
            check_type(argname="argument receiver_name", value=receiver_name, expected_type=type_hints["receiver_name"])
            check_type(argname="argument receiver_state", value=receiver_state, expected_type=type_hints["receiver_state"])
            check_type(argname="argument receiver_town", value=receiver_town, expected_type=type_hints["receiver_town"])
            check_type(argname="argument receiver_zip", value=receiver_zip, expected_type=type_hints["receiver_zip"])
            check_type(argname="argument activate", value=activate, expected_type=type_hints["activate"])
            check_type(argname="argument already_have_sag", value=already_have_sag, expected_type=type_hints["already_have_sag"])
            check_type(argname="argument auto_pay", value=auto_pay, expected_type=type_hints["auto_pay"])
            check_type(argname="argument cidr_block", value=cidr_block, expected_type=type_hints["cidr_block"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument receiver_phone", value=receiver_phone, expected_type=type_hints["receiver_phone"])
            check_type(argname="argument routing_strategy", value=routing_strategy, expected_type=type_hints["routing_strategy"])
            check_type(argname="argument security_lock_threshold", value=security_lock_threshold, expected_type=type_hints["security_lock_threshold"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "buyer_message": buyer_message,
            "charge_type": charge_type,
            "hard_ware_spec": hard_ware_spec,
            "ha_type": ha_type,
            "max_band_width": max_band_width,
            "period": period,
            "receiver_address": receiver_address,
            "receiver_city": receiver_city,
            "receiver_country": receiver_country,
            "receiver_district": receiver_district,
            "receiver_email": receiver_email,
            "receiver_mobile": receiver_mobile,
            "receiver_name": receiver_name,
            "receiver_state": receiver_state,
            "receiver_town": receiver_town,
            "receiver_zip": receiver_zip,
        }
        if activate is not None:
            self._values["activate"] = activate
        if already_have_sag is not None:
            self._values["already_have_sag"] = already_have_sag
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if cidr_block is not None:
            self._values["cidr_block"] = cidr_block
        if description is not None:
            self._values["description"] = description
        if name is not None:
            self._values["name"] = name
        if receiver_phone is not None:
            self._values["receiver_phone"] = receiver_phone
        if routing_strategy is not None:
            self._values["routing_strategy"] = routing_strategy
        if security_lock_threshold is not None:
            self._values["security_lock_threshold"] = security_lock_threshold

    @builtins.property
    def buyer_message(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: buyerMessage: The remarks left by the buyer.
        '''
        result = self._values.get("buyer_message")
        assert result is not None, "Required property 'buyer_message' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        chargeType: The billing method of the SAG instance.
        Set the value to PREPAY, which specifies the subscription billing method.
        '''
        result = self._values.get("charge_type")
        assert result is not None, "Required property 'charge_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def hard_ware_spec(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        hardWareSpec: The type of the SAG instance. Valid values:
        sag-100wm
        sag-1000
        sag-vcpe
        '''
        result = self._values.get("hard_ware_spec")
        assert result is not None, "Required property 'hard_ware_spec' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ha_type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        haType: The deployment mode. Valid values:
        no_backup: You buy only one SAG device to connect private networks to Alibaba Cloud.
        cold_backup: You buy two SAG devices in active-standby mode. One SAG device serves as an active
        device and the other serves as a standby device. Only the active device is connected
        to Alibaba Cloud. If the active device is not working as expected, you must manually
        perform a switchover.
        warm_backup: You buy two SAG devices in active-active mode. Both SAG devices are connected to
        Alibaba Cloud. If an active device is not working as expected, a failover is automatically
        performed.
        Note If you want to create an SAG vCPE instance, set the value to warm_backup.
        '''
        result = self._values.get("ha_type")
        assert result is not None, "Required property 'ha_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def max_band_width(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        maxBandWidth: The bandwidth of the SAG instance.
        If you want to create an SAG CPE instance and the model is sag-100wm, valid values of this parameter are 2 to 50. Unit: Mbit/s.
        If you want to create an SAG CPE instance and the model is sag-1000, valid values of this parameter are 10 to 500. Unit: Mbit/s.
        If you want to create an SAG vCPE instance, valid values of this parameter are 10 to 1000. Unit: Mbit/s.
        '''
        result = self._values.get("max_band_width")
        assert result is not None, "Required property 'max_band_width' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def period(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        period: The subscription period of the SAG instance. Unit: months.
        Valid values: 1 to 9, 12, 24, and 36.
        '''
        result = self._values.get("period")
        assert result is not None, "Required property 'period' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def receiver_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: receiverAddress: The detailed address of the recipient.
        '''
        result = self._values.get("receiver_address")
        assert result is not None, "Required property 'receiver_address' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def receiver_city(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: receiverCity: The city of the recipient address.
        '''
        result = self._values.get("receiver_city")
        assert result is not None, "Required property 'receiver_city' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def receiver_country(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: receiverCountry: The country of the recipient address.
        '''
        result = self._values.get("receiver_country")
        assert result is not None, "Required property 'receiver_country' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def receiver_district(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: receiverDistrict: The district of the recipient address.
        '''
        result = self._values.get("receiver_district")
        assert result is not None, "Required property 'receiver_district' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def receiver_email(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: receiverEmail: The email address of the recipient.
        '''
        result = self._values.get("receiver_email")
        assert result is not None, "Required property 'receiver_email' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def receiver_mobile(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: receiverMobile: The mobile phone number of the recipient.
        '''
        result = self._values.get("receiver_mobile")
        assert result is not None, "Required property 'receiver_mobile' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def receiver_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: receiverName: The name of the recipient.
        '''
        result = self._values.get("receiver_name")
        assert result is not None, "Required property 'receiver_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def receiver_state(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: receiverState: The province of the recipient address.
        '''
        result = self._values.get("receiver_state")
        assert result is not None, "Required property 'receiver_state' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def receiver_town(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: receiverTown: The town of the recipient address.
        '''
        result = self._values.get("receiver_town")
        assert result is not None, "Required property 'receiver_town' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def receiver_zip(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: receiverZip: The postcode of the recipient address.
        '''
        result = self._values.get("receiver_zip")
        assert result is not None, "Required property 'receiver_zip' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def activate(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: activate: Activate SAG or not. Default is False
        '''
        result = self._values.get("activate")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def already_have_sag(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        alreadyHaveSag: Specifies whether you already have an SAG device. Valid values:
        true: yes
        false (default): no
        '''
        result = self._values.get("already_have_sag")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoPay: Specifies whether to enable auto-payment for the instance. Valid values:
        true: yes
        false: no
        If you set the parameter to false, go to Billing Management to complete the payment
        after you call this operation. After you complete the payment, the instance can be
        created.
        '''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cidr_block(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        cidrBlock: The CIDR blocks of terminals in the private network. Make sure that the CIDR blocks
        do not overlap with each other.
        If the LAN port of the SAG device dynamically assigns IP addresses, IP addresses within
        the first CIDR block are assigned to terminals that have the Dynamic Host Configuration
        Protocol (DHCP) enabled.
        '''
        result = self._values.get("cidr_block")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        description: The description of the SAG instance.
        The description must be 2 to 256 characters in length, and can contain digits, periods
        (.), underscores (_), and hyphens (-). It must start with a letter.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        name: The name of the SAG instance.
        The name must be 2 to 128 characters in length and can contain digits, periods (.),
        underscores (_), and hyphens (-). It must start with a letter.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def receiver_phone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: receiverPhone: The landline phone number of the recipient.
        '''
        result = self._values.get("receiver_phone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def routing_strategy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        routingStrategy: The policy to advertise routes from the private network to Alibaba Cloud.
        static: static routing.
        dynamic: dynamic routing.
        '''
        result = self._values.get("routing_strategy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_lock_threshold(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        securityLockThreshold: The time that a disconnected SAG device remain locked. The time must be no shorter
        than zero second.
        Unit: second.
        '''
        result = self._values.get("security_lock_threshold")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSmartAccessGatewayProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class SerialNumberBinding(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sag.SerialNumberBinding",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::SAG::SerialNumberBinding``, which is used to associate a Smart Access Gateway (SAG) device with an SAG instance.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosSerialNumberBinding``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-serialnumberbinding
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["SerialNumberBindingProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__81019d7cbfdb5393183db0f23c7cca7ce9a3693072d37abbdaa6648c2e0ff1c8)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrSmartAgId")
    def attr_smart_ag_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SmartAGId: The ID of the SAG instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSmartAgId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7c0e6e3f38d6b6a6ca6150a6db6ab34c3b0113b88516d71eeeed445315ca3af2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bdff34404a64ef25e48ed4ce0d503f5ffd35855860fe947f437ea0fe9ce8e724)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "SerialNumberBindingProps":
        return typing.cast("SerialNumberBindingProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "SerialNumberBindingProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9081db6ac12d8cd7bccbc1e41fe498bf71f3787a727cc65f3b78245e78ac7f00)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5a34195eb7b252bdc451a226fc354e43e0e3234015134ab9d1ef5fe92b6cedc0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sag.SerialNumberBindingProps",
    jsii_struct_bases=[],
    name_mapping={"serial_number": "serialNumber", "smart_ag_id": "smartAgId"},
)
class SerialNumberBindingProps:
    def __init__(
        self,
        *,
        serial_number: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        smart_ag_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``SerialNumberBinding``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-serialnumberbinding

        :param serial_number: Property serialNumber: The serial number (SN) of the SAG device.
        :param smart_ag_id: Property smartAgId: The ID of the SAG instance.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6d9d7f9dfa490b38764486b03a227a7e7afc1ff0467433a1346fe9020c88ac7f)
            check_type(argname="argument serial_number", value=serial_number, expected_type=type_hints["serial_number"])
            check_type(argname="argument smart_ag_id", value=smart_ag_id, expected_type=type_hints["smart_ag_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "serial_number": serial_number,
            "smart_ag_id": smart_ag_id,
        }

    @builtins.property
    def serial_number(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property serialNumber: The serial number (SN) of the SAG device.'''
        result = self._values.get("serial_number")
        assert result is not None, "Required property 'serial_number' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def smart_ag_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property smartAgId: The ID of the SAG instance.'''
        result = self._values.get("smart_ag_id")
        assert result is not None, "Required property 'smart_ag_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SerialNumberBindingProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class SmartAccessGateway(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sag.SmartAccessGateway",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::SAG::SmartAccessGateway``, which is used to create a Smart Access Gateway (SAG) instance.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosSmartAccessGateway``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-smartaccessgateway
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["SmartAccessGatewayProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a126393039e6442991677f850a6264520ff3b51ec70085d9a0837faae090b7c8)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute OrderId: The ID of the order.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="attrSmartAgId")
    def attr_smart_ag_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SmartAGId: The ID of the SAG instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSmartAgId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9b335c043e70d42c44dc3b3858e85ff9564c986bb5f109e7eb7f117bd8adce14)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b6235ed1bc6d97101a76278d86f375550c80a71563d961fd95de80508bef979f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "SmartAccessGatewayProps":
        return typing.cast("SmartAccessGatewayProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "SmartAccessGatewayProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2f66c0af0b2a6b53d021a6fd9b3e020d1f6f8cadc235e09ab612de6959e3a61b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c4adb25bf5320d5f2750101e0888ae3ec0a96270bae3b746f57672ab97551c63)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


class SmartAccessGatewayBinding(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sag.SmartAccessGatewayBinding",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::SAG::SmartAccessGatewayBinding``, which is used to bind a Smart Access Gateway (SAG) instance to a specified Cloud Connect Network (CCN) instance.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosSmartAccessGatewayBinding``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-smartaccessgatewaybinding
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["SmartAccessGatewayBindingProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2f457bdf81df9f0b379fb19c32333cc372dd7dee70167125a48de5bf5eaee97f)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrSmartAgId")
    def attr_smart_ag_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SmartAGId: The ID of the Smart Access Gateway instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSmartAgId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__55399186348297606241cd5edc02bc83c062dd30ae2b07c8ca35d73231c208a9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6ed4b647ac74393833a39bca949e5726e04ceaec1efb3b3d01c15398f2789add)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "SmartAccessGatewayBindingProps":
        return typing.cast("SmartAccessGatewayBindingProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "SmartAccessGatewayBindingProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__83f747d277754e1701f8c081732d33ddba2124b643aad6a9636d101481a5073f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5cc1b502e875cf06f749745fd599c4f43d33000c684d302153e501f0d2670bc3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sag.SmartAccessGatewayBindingProps",
    jsii_struct_bases=[],
    name_mapping={"ccn_id": "ccnId", "smart_ag_id": "smartAgId"},
)
class SmartAccessGatewayBindingProps:
    def __init__(
        self,
        *,
        ccn_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        smart_ag_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``SmartAccessGatewayBinding``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-smartaccessgatewaybinding

        :param ccn_id: Property ccnId: The ID of the CCN instance to bind.
        :param smart_ag_id: Property smartAgId: The ID of the Smart Access Gateway instance.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__96211dd279200135fc1f079cfcd6fc215e21d2f60b326f5054937715650858eb)
            check_type(argname="argument ccn_id", value=ccn_id, expected_type=type_hints["ccn_id"])
            check_type(argname="argument smart_ag_id", value=smart_ag_id, expected_type=type_hints["smart_ag_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "ccn_id": ccn_id,
            "smart_ag_id": smart_ag_id,
        }

    @builtins.property
    def ccn_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property ccnId: The ID of the CCN instance to bind.'''
        result = self._values.get("ccn_id")
        assert result is not None, "Required property 'ccn_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def smart_ag_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property smartAgId: The ID of the Smart Access Gateway instance.'''
        result = self._values.get("smart_ag_id")
        assert result is not None, "Required property 'smart_ag_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SmartAccessGatewayBindingProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sag.SmartAccessGatewayProps",
    jsii_struct_bases=[],
    name_mapping={
        "buyer_message": "buyerMessage",
        "charge_type": "chargeType",
        "hard_ware_spec": "hardWareSpec",
        "ha_type": "haType",
        "max_band_width": "maxBandWidth",
        "period": "period",
        "receiver_address": "receiverAddress",
        "receiver_city": "receiverCity",
        "receiver_country": "receiverCountry",
        "receiver_district": "receiverDistrict",
        "receiver_email": "receiverEmail",
        "receiver_mobile": "receiverMobile",
        "receiver_name": "receiverName",
        "receiver_state": "receiverState",
        "receiver_town": "receiverTown",
        "receiver_zip": "receiverZip",
        "activate": "activate",
        "already_have_sag": "alreadyHaveSag",
        "auto_pay": "autoPay",
        "cidr_block": "cidrBlock",
        "description": "description",
        "name": "name",
        "receiver_phone": "receiverPhone",
        "routing_strategy": "routingStrategy",
        "security_lock_threshold": "securityLockThreshold",
    },
)
class SmartAccessGatewayProps:
    def __init__(
        self,
        *,
        buyer_message: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        charge_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        hard_ware_spec: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ha_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        max_band_width: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        period: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        receiver_address: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        receiver_city: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        receiver_country: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        receiver_district: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        receiver_email: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        receiver_mobile: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        receiver_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        receiver_state: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        receiver_town: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        receiver_zip: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        activate: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        already_have_sag: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cidr_block: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        receiver_phone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        routing_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_lock_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``SmartAccessGateway``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-smartaccessgateway

        :param buyer_message: Property buyerMessage: The remarks left by the buyer.
        :param charge_type: Property chargeType: The billing method of the SAG instance. Set the value to PREPAY, which specifies the subscription billing method.
        :param hard_ware_spec: Property hardWareSpec: The type of the SAG instance. Valid values: sag-100wm sag-1000 sag-vcpe
        :param ha_type: Property haType: The deployment mode. Valid values: no_backup: You buy only one SAG device to connect private networks to Alibaba Cloud. cold_backup: You buy two SAG devices in active-standby mode. One SAG device serves as an active device and the other serves as a standby device. Only the active device is connected to Alibaba Cloud. If the active device is not working as expected, you must manually perform a switchover. warm_backup: You buy two SAG devices in active-active mode. Both SAG devices are connected to Alibaba Cloud. If an active device is not working as expected, a failover is automatically performed. Note If you want to create an SAG vCPE instance, set the value to warm_backup.
        :param max_band_width: Property maxBandWidth: The bandwidth of the SAG instance. If you want to create an SAG CPE instance and the model is sag-100wm, valid values of this parameter are 2 to 50. Unit: Mbit/s. If you want to create an SAG CPE instance and the model is sag-1000, valid values of this parameter are 10 to 500. Unit: Mbit/s. If you want to create an SAG vCPE instance, valid values of this parameter are 10 to 1000. Unit: Mbit/s.
        :param period: Property period: The subscription period of the SAG instance. Unit: months. Valid values: 1 to 9, 12, 24, and 36.
        :param receiver_address: Property receiverAddress: The detailed address of the recipient.
        :param receiver_city: Property receiverCity: The city of the recipient address.
        :param receiver_country: Property receiverCountry: The country of the recipient address.
        :param receiver_district: Property receiverDistrict: The district of the recipient address.
        :param receiver_email: Property receiverEmail: The email address of the recipient.
        :param receiver_mobile: Property receiverMobile: The mobile phone number of the recipient.
        :param receiver_name: Property receiverName: The name of the recipient.
        :param receiver_state: Property receiverState: The province of the recipient address.
        :param receiver_town: Property receiverTown: The town of the recipient address.
        :param receiver_zip: Property receiverZip: The postcode of the recipient address.
        :param activate: Property activate: Activate SAG or not. Default is False
        :param already_have_sag: Property alreadyHaveSag: Specifies whether you already have an SAG device. Valid values: true: yes false (default): no
        :param auto_pay: Property autoPay: Specifies whether to enable auto-payment for the instance. Valid values: true: yes false: no If you set the parameter to false, go to Billing Management to complete the payment after you call this operation. After you complete the payment, the instance can be created.
        :param cidr_block: Property cidrBlock: The CIDR blocks of terminals in the private network. Make sure that the CIDR blocks do not overlap with each other. If the LAN port of the SAG device dynamically assigns IP addresses, IP addresses within the first CIDR block are assigned to terminals that have the Dynamic Host Configuration Protocol (DHCP) enabled.
        :param description: Property description: The description of the SAG instance. The description must be 2 to 256 characters in length, and can contain digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
        :param name: Property name: The name of the SAG instance. The name must be 2 to 128 characters in length and can contain digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
        :param receiver_phone: Property receiverPhone: The landline phone number of the recipient.
        :param routing_strategy: Property routingStrategy: The policy to advertise routes from the private network to Alibaba Cloud. static: static routing. dynamic: dynamic routing.
        :param security_lock_threshold: Property securityLockThreshold: The time that a disconnected SAG device remain locked. The time must be no shorter than zero second. Unit: second.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ad3277482a978a0ec308d8f2b1867a9f122d2c5d7b3841a27a2374e2837fa2f6)
            check_type(argname="argument buyer_message", value=buyer_message, expected_type=type_hints["buyer_message"])
            check_type(argname="argument charge_type", value=charge_type, expected_type=type_hints["charge_type"])
            check_type(argname="argument hard_ware_spec", value=hard_ware_spec, expected_type=type_hints["hard_ware_spec"])
            check_type(argname="argument ha_type", value=ha_type, expected_type=type_hints["ha_type"])
            check_type(argname="argument max_band_width", value=max_band_width, expected_type=type_hints["max_band_width"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument receiver_address", value=receiver_address, expected_type=type_hints["receiver_address"])
            check_type(argname="argument receiver_city", value=receiver_city, expected_type=type_hints["receiver_city"])
            check_type(argname="argument receiver_country", value=receiver_country, expected_type=type_hints["receiver_country"])
            check_type(argname="argument receiver_district", value=receiver_district, expected_type=type_hints["receiver_district"])
            check_type(argname="argument receiver_email", value=receiver_email, expected_type=type_hints["receiver_email"])
            check_type(argname="argument receiver_mobile", value=receiver_mobile, expected_type=type_hints["receiver_mobile"])
            check_type(argname="argument receiver_name", value=receiver_name, expected_type=type_hints["receiver_name"])
            check_type(argname="argument receiver_state", value=receiver_state, expected_type=type_hints["receiver_state"])
            check_type(argname="argument receiver_town", value=receiver_town, expected_type=type_hints["receiver_town"])
            check_type(argname="argument receiver_zip", value=receiver_zip, expected_type=type_hints["receiver_zip"])
            check_type(argname="argument activate", value=activate, expected_type=type_hints["activate"])
            check_type(argname="argument already_have_sag", value=already_have_sag, expected_type=type_hints["already_have_sag"])
            check_type(argname="argument auto_pay", value=auto_pay, expected_type=type_hints["auto_pay"])
            check_type(argname="argument cidr_block", value=cidr_block, expected_type=type_hints["cidr_block"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument receiver_phone", value=receiver_phone, expected_type=type_hints["receiver_phone"])
            check_type(argname="argument routing_strategy", value=routing_strategy, expected_type=type_hints["routing_strategy"])
            check_type(argname="argument security_lock_threshold", value=security_lock_threshold, expected_type=type_hints["security_lock_threshold"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "buyer_message": buyer_message,
            "charge_type": charge_type,
            "hard_ware_spec": hard_ware_spec,
            "ha_type": ha_type,
            "max_band_width": max_band_width,
            "period": period,
            "receiver_address": receiver_address,
            "receiver_city": receiver_city,
            "receiver_country": receiver_country,
            "receiver_district": receiver_district,
            "receiver_email": receiver_email,
            "receiver_mobile": receiver_mobile,
            "receiver_name": receiver_name,
            "receiver_state": receiver_state,
            "receiver_town": receiver_town,
            "receiver_zip": receiver_zip,
        }
        if activate is not None:
            self._values["activate"] = activate
        if already_have_sag is not None:
            self._values["already_have_sag"] = already_have_sag
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if cidr_block is not None:
            self._values["cidr_block"] = cidr_block
        if description is not None:
            self._values["description"] = description
        if name is not None:
            self._values["name"] = name
        if receiver_phone is not None:
            self._values["receiver_phone"] = receiver_phone
        if routing_strategy is not None:
            self._values["routing_strategy"] = routing_strategy
        if security_lock_threshold is not None:
            self._values["security_lock_threshold"] = security_lock_threshold

    @builtins.property
    def buyer_message(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property buyerMessage: The remarks left by the buyer.'''
        result = self._values.get("buyer_message")
        assert result is not None, "Required property 'buyer_message' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property chargeType: The billing method of the SAG instance.

        Set the value to PREPAY, which specifies the subscription billing method.
        '''
        result = self._values.get("charge_type")
        assert result is not None, "Required property 'charge_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def hard_ware_spec(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property hardWareSpec: The type of the SAG instance.

        Valid values:
        sag-100wm
        sag-1000
        sag-vcpe
        '''
        result = self._values.get("hard_ware_spec")
        assert result is not None, "Required property 'hard_ware_spec' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ha_type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property haType: The deployment mode.

        Valid values:
        no_backup: You buy only one SAG device to connect private networks to Alibaba Cloud.
        cold_backup: You buy two SAG devices in active-standby mode. One SAG device serves as an active
        device and the other serves as a standby device. Only the active device is connected
        to Alibaba Cloud. If the active device is not working as expected, you must manually
        perform a switchover.
        warm_backup: You buy two SAG devices in active-active mode. Both SAG devices are connected to
        Alibaba Cloud. If an active device is not working as expected, a failover is automatically
        performed.
        Note If you want to create an SAG vCPE instance, set the value to warm_backup.
        '''
        result = self._values.get("ha_type")
        assert result is not None, "Required property 'ha_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def max_band_width(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property maxBandWidth: The bandwidth of the SAG instance.

        If you want to create an SAG CPE instance and the model is sag-100wm, valid values of this parameter are 2 to 50. Unit: Mbit/s.
        If you want to create an SAG CPE instance and the model is sag-1000, valid values of this parameter are 10 to 500. Unit: Mbit/s.
        If you want to create an SAG vCPE instance, valid values of this parameter are 10 to 1000. Unit: Mbit/s.
        '''
        result = self._values.get("max_band_width")
        assert result is not None, "Required property 'max_band_width' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def period(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property period: The subscription period of the SAG instance.

        Unit: months.
        Valid values: 1 to 9, 12, 24, and 36.
        '''
        result = self._values.get("period")
        assert result is not None, "Required property 'period' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def receiver_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property receiverAddress: The detailed address of the recipient.'''
        result = self._values.get("receiver_address")
        assert result is not None, "Required property 'receiver_address' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def receiver_city(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property receiverCity: The city of the recipient address.'''
        result = self._values.get("receiver_city")
        assert result is not None, "Required property 'receiver_city' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def receiver_country(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property receiverCountry: The country of the recipient address.'''
        result = self._values.get("receiver_country")
        assert result is not None, "Required property 'receiver_country' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def receiver_district(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property receiverDistrict: The district of the recipient address.'''
        result = self._values.get("receiver_district")
        assert result is not None, "Required property 'receiver_district' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def receiver_email(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property receiverEmail: The email address of the recipient.'''
        result = self._values.get("receiver_email")
        assert result is not None, "Required property 'receiver_email' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def receiver_mobile(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property receiverMobile: The mobile phone number of the recipient.'''
        result = self._values.get("receiver_mobile")
        assert result is not None, "Required property 'receiver_mobile' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def receiver_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property receiverName: The name of the recipient.'''
        result = self._values.get("receiver_name")
        assert result is not None, "Required property 'receiver_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def receiver_state(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property receiverState: The province of the recipient address.'''
        result = self._values.get("receiver_state")
        assert result is not None, "Required property 'receiver_state' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def receiver_town(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property receiverTown: The town of the recipient address.'''
        result = self._values.get("receiver_town")
        assert result is not None, "Required property 'receiver_town' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def receiver_zip(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property receiverZip: The postcode of the recipient address.'''
        result = self._values.get("receiver_zip")
        assert result is not None, "Required property 'receiver_zip' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def activate(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property activate: Activate SAG or not.

        Default is False
        '''
        result = self._values.get("activate")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def already_have_sag(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property alreadyHaveSag: Specifies whether you already have an SAG device.

        Valid values:
        true: yes
        false (default): no
        '''
        result = self._values.get("already_have_sag")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoPay: Specifies whether to enable auto-payment for the instance.

        Valid values:
        true: yes
        false: no
        If you set the parameter to false, go to Billing Management to complete the payment
        after you call this operation. After you complete the payment, the instance can be
        created.
        '''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cidr_block(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property cidrBlock: The CIDR blocks of terminals in the private network.

        Make sure that the CIDR blocks
        do not overlap with each other.
        If the LAN port of the SAG device dynamically assigns IP addresses, IP addresses within
        the first CIDR block are assigned to terminals that have the Dynamic Host Configuration
        Protocol (DHCP) enabled.
        '''
        result = self._values.get("cidr_block")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the SAG instance.

        The description must be 2 to 256 characters in length, and can contain digits, periods
        (.), underscores (_), and hyphens (-). It must start with a letter.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property name: The name of the SAG instance.

        The name must be 2 to 128 characters in length and can contain digits, periods (.),
        underscores (_), and hyphens (-). It must start with a letter.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def receiver_phone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property receiverPhone: The landline phone number of the recipient.'''
        result = self._values.get("receiver_phone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def routing_strategy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property routingStrategy: The policy to advertise routes from the private network to Alibaba Cloud.

        static: static routing.
        dynamic: dynamic routing.
        '''
        result = self._values.get("routing_strategy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_lock_threshold(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property securityLockThreshold: The time that a disconnected SAG device remain locked.

        The time must be no shorter
        than zero second.
        Unit: second.
        '''
        result = self._values.get("security_lock_threshold")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SmartAccessGatewayProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "ACLAssociation",
    "ACLAssociationProps",
    "ACLProps",
    "ACLRule",
    "ACLRuleProps",
    "Acl",
    "App",
    "AppProps",
    "AppUser",
    "AppUserProps",
    "CloudConnectNetwork",
    "CloudConnectNetworkProps",
    "GrantCcnToCen",
    "GrantCcnToCenProps",
    "Qos",
    "QosAssociation",
    "QosAssociationProps",
    "QosCar",
    "QosCarProps",
    "QosPolicy",
    "QosPolicyProps",
    "QosProps",
    "RosACL",
    "RosACLAssociation",
    "RosACLAssociationProps",
    "RosACLProps",
    "RosACLRule",
    "RosACLRuleProps",
    "RosApp",
    "RosAppProps",
    "RosAppUser",
    "RosAppUserProps",
    "RosCloudConnectNetwork",
    "RosCloudConnectNetworkProps",
    "RosGrantCcnToCen",
    "RosGrantCcnToCenProps",
    "RosQos",
    "RosQosAssociation",
    "RosQosAssociationProps",
    "RosQosCar",
    "RosQosCarProps",
    "RosQosPolicy",
    "RosQosPolicyProps",
    "RosQosProps",
    "RosSerialNumberBinding",
    "RosSerialNumberBindingProps",
    "RosSmartAccessGateway",
    "RosSmartAccessGatewayBinding",
    "RosSmartAccessGatewayBindingProps",
    "RosSmartAccessGatewayProps",
    "SerialNumberBinding",
    "SerialNumberBindingProps",
    "SmartAccessGateway",
    "SmartAccessGatewayBinding",
    "SmartAccessGatewayBindingProps",
    "SmartAccessGatewayProps",
]

publication.publish()

def _typecheckingstub__af3a4f35659cb8f72c4d49f6eceb1114a893bae3498b7fabcc48802c43db04eb(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ACLAssociationProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__67dd3c1d8ccd5eecc9661cf02d244f96c15cb2aed41b7937ede10911d13889a5(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b1067fbf9e89d23f15e2b3733acc7a88ac65f3cef0e84a98d2a62bcda821519c(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a208c82e0f7c6058ff0b4ca36392bbfb06871391d45aa4ca5c236c93543296f9(
    value: ACLAssociationProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6ef314e677a14dd1a532b38c8248d58e591eb3f345459b1ec97dad7dbd4d4940(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f87d799eab9ec9d4ce1a77609ca0908c3a330f7c248c347ed92b639865bb7d4f(
    *,
    acl_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    smart_ag_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f530ae186f1eeac977ffc4bb94a619ec606ba2c139ad54c8e85e8dd0915f80e7(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__54062f89f597c4a9944587d9c4808663b66e54f136489889b9f24897fc99bb0e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ACLRuleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__182fb3efcf822fa669f62fd015a74e0b90ae73ff70956b04cede22fbedd9633b(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a85707086465cadcbc20c5acdd3263e0b2132eecb995a0aa0a9aad62eef9bc47(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5429a5ca95996dcb10293f5de1c126554abcd86c5ee4146f609b9b107673f3c8(
    value: ACLRuleProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e9a79c119690fb910f6b55a8c628692198048a56f33e861bc64be0eeda3e996b(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9c175a8a99b2a7239f888c77275d6302699ad2d5a2886ed082f0e4ca5cac7885(
    *,
    acl_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    dest_cidr: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    dest_port_range: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    direction: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ip_protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    policy: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_cidr: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_port_range: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dpi_group_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    dpi_signature_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    priority: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__52d84226253579f6ce20e6f3bfc00322c3736193ca09b348e4f88834f7339f1d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ACLProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2e3e42ca099ef400f752a6fea7b68c9276e61a5495c687eb12342421e9d750a6(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c371f9a5999b49aebde6b8ddafea0a8b6200f2f2e9d65a3ca0b09d6b3326cfef(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e18ade3db4892ea4af2d15852f9c903d779be80e8c6d4d4f1531b71ac866e082(
    value: ACLProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3f3eeace91f5b77b1ad4e2b6e1e0e933338d704475e21a0e1b624fa0477703bf(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4d36297bfc1cb38d8901f5a4d69311f0d71812589fc5f22db32fd154ce50837a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AppProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__180eb00a39a74c959bb472addf5bc500119bcf9e769cf508207b10f0a6231e8b(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6ba60e9cbd9179d1f9b6578a68ad419a1aa01b768c05d07132cc4ba1a297c534(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9eb9a96cbb6d9c51e566c8577babd21c872814074d636fbb0931e1e0a7ff885c(
    value: AppProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9b47e0d7c4e74af06d73ad9210627f9b328cf21d87d5ccb6e6d59442368c33f1(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a26b9e8958c16e0d74c69c3acdf1840e15c0aab3502f17ef2afc02b5b2e232aa(
    *,
    auto_pay: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    data_plan: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    period: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    user_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ba3be7b77cd4e2ad3723aa66d40449ab5812ca4dbf61e2e5eb09bee49407568b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AppUserProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__92161a91780bb7b9f29360ff4ef1f46465a988a4c7d05e8eafaf0b4602e04f9a(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e17a005322b195750b71ca45feffbf3bbbaf4c99704f5a297d863234bc0f90fa(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b3d9695a8ccc9824d162ba39139ecc36bc88141697161814bcaed748de8a8ae5(
    value: AppUserProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__93deaa0f1e49f91d3486d1511e6a00044c5cc7479de267291be41ab58e8c0fab(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bdc8394557a3ca9be58b4e7b188a4f94cd2b5f3d89420bcab416a2944378b362(
    *,
    bandwidth: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    smart_ag_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    user_mail: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    client_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    user_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4efb85fba06871d3bece12071358121c5161815dabee515c3e5105c83f82da02(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[CloudConnectNetworkProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1443bf6602961a6410aa945b76774cde7a4cee7fdff1d13bcd30ecaf6c354b98(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4aea792e5440d62340b8718ce1db1500560d4f1fbcf3394a48be222842f876d0(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2e1288538f8f7b42aaa429d4b82b8812acbe6da140d382edd22d5638062d0d49(
    value: CloudConnectNetworkProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__13e448053fcb08cddf7973ed6ac320f4ad6bc3070069d84e111acc99e3bb428a(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b6dbe9a74e1c99bc2e4df2e87cae836af9efdafb28645b1eb33087f6a6c085a5(
    *,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    is_default: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosCloudConnectNetwork.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c4d121ac09976f46e349e33ceccb658e4f5859b17edb91752b4fb151bec3fd7c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[GrantCcnToCenProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__144f7f0e1c5a9cfa063588883a305d1a7eab390c500e50f1d700b1ee13e6d7ef(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c8ffdf7863c7b00dddb91b2e766f448e4ad5318dc7f75d1338df638635a84794(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__43649f9c135e22f9523b8056ead6e2e06084f64465a7115be46c0195641841f7(
    value: GrantCcnToCenProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__602585255ad215262f39223920c4abd7b0908b4b040db0b2918c0f0f79c2c8c1(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5d1dd868d299afbcd166e95681187416beaf0655c29199386d1a9c6b26e73506(
    *,
    ccn_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cen_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cen_uid: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bcd23ced0343fcf0d130be858d262a964a9cc9c1d10354478a22c36d4cd0e24d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[QosProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__001f9fe7124f799e949a6594b3e68e0cfe20b4c5c05c260e0027021c83650e4f(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__33723ee42aff9d078c9086dce380f5868d052e8fed9665aad0e3f7d569aa1f60(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__40ec91528d44670b81768205b4712912b868494945078fd58b177a42dd15c64c(
    value: QosProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__589c8ae55256d7e73fc755994d2ecf11c648c847c03a7bf305a93bd95185f6e1(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1f8b430590a50f82fedf069ea1ef64c713f58ba24a469d3f6554bc80e28d8d21(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[QosAssociationProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3094c2bfa112ad025f9fc1d186786f87c3901095dd0ff535acf98a87e0ce15c3(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5e05fc924f6e8c083a7dea19d267615f2b0f0a536e8811246401ab101fae387a(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ac0325b8262682f3a60ef4f5f86ea9a2404762ac14d776df2556c83ec556f934(
    value: QosAssociationProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c4ce80eec5ce6ffc0392234ec7331a7b0a3017b93278ce718d6470230f106697(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7ab091b0d57c40ac5ecce01658c561423f1ace0898f4dc67dd0371b7bdefa88e(
    *,
    qos_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    smart_ag_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e3cd41be5cb5219fef45a7a0527ba2bd0ce9b9c5c5918230a54a844cc7d7b168(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[QosCarProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3c88f370619e48f279b4425f338419fe4db12c797d2fc3d94d6ed71e5ea203eb(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f0ce9969dd967600c883233da8bfc7e5e4423320283bcbe483934add30934406(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__94e5aa002504ccfb6cbe3ab3e3289948727ec26f23e4a2a82eb7b08b1d377d9e(
    value: QosCarProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d08c9e916ccc8baa4b63fe6edd23e3a83c82cd6d07e9dda0786c5b538b2580ae(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9136fbdde9a5f9ee466ff9b47ea34c3e0b941e1247006ecb6928a569da067455(
    *,
    limit_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    priority: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    qos_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    max_bandwidth_abs: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    max_bandwidth_percent: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    min_bandwidth_abs: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    min_bandwidth_percent: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    percent_source_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a23030af66f73deaf39adcdfa070a457367fa0223bb5b479c60b57a4c3a3df87(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[QosPolicyProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2f3820bfc51e99ba2296f0a4d51fbb3fa18102bfb045edd827a2496ef097e03f(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__95a98525966e6f7c92dae7bfce62d517d109bf3de43ffb30337ec45f39f3bea2(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a2355ceb4f33f9df3066708baa3ff1bcf36d700a798543e3edaef09664accbdd(
    value: QosPolicyProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7b1ba0e71277b2549f951b036e15ad7cafdba205029f7b58010817e4af04c7c9(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f09cb49edd875084f9b97b045c0e49651c92784e149c897d0d472550af7d4867(
    *,
    dest_cidr: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    dest_port_range: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ip_protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    priority: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    qos_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_cidr: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_port_range: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dpi_group_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    dpi_signature_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    end_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    start_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__77c5d89f6b0f8e41aa51c18c58c533361298de0692888398d70a3312fff33450(
    *,
    qos_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    qos_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a5ca64b1a5b3da93f9473bc79c3c578b15f0cb3628feab411e311090acd3e856(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosACLProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aa84334c99a4d817fb53427a20bd0b094528635c79f5e5c853ef227a28422710(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1c14f7d62fe018776a4b2e33b0af6b78b366c90fdd7dfdf54b84cf015ea33c34(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1d2fc2a9f4121673a1d24eb0d7bb932fd4bd19efd45c59c24661bbae4969f605(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__472d80dc9a3a3f9f60cc74090444978ee8acabd66d69c7f3f99aeba745f3cb97(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosACLAssociationProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__97e5b7612b258f67b5f151c9b53750bc4ce9b3b3dc9003d16abcca5bda31d38d(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__820651be1de852bf746bf8647dbd18fb3efc5b9509255db844dac58ff77425a5(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bf583f9d3023fb0e68d4a83bd17d16f4fff625b6883e099a29b9e93345bdbf01(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__025f8f40e64629f5aa7957fce2bbbada93d6b0b1fe4808ac486fddb7b8591a9f(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__22dfba950be0403bc49884959f61e236e96b5ec8114ccbe91dbc74b16496419c(
    *,
    acl_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    smart_ag_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__61637a4972963012a8db50af162f74bba0a53052a827d43945cd4e28df7c062f(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__463833014d9ce1b40e358264e6ac4917924ec591507737124836dc89181f169e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosACLRuleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4140b8109ae0fcf5b93e4c7b07c254d663af0f11ba674faa4469b3e5d9d1f12a(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f13821a989028ca7827cd0623432be34007086fffc25f6ee118e23aeb0eaf622(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cd0975762e2042107b3ce012f3fc5ee15bbd9459bc481c15c6c2ef6be1af897d(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b97cd3edf237c5f7688f08b6c05fa946195609c8dff0237ca84b4d47dc04bc76(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4ecabfa8cc3f9a25b5eab14f8a545f68dc71aa4447c76cbd21af2b8b9ff6fa5c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ce4e4bbb516497785b51e5b4e3c320a877779541ff323d7ec7e82007e18530f8(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__20cf1a0e7ecb16363868f7b5e0beede0c6bb5730e6475d8761582ab86f5d983f(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4921d5f72755e046e3e86920bc1d5ddfd1fe1cf3c3b06427fab22dfd20b54fbd(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e49e3b6a99178fb2828aa7e671d5815fc0c2b3a6a01b9990155001cd74729b58(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e4bba322a742d82112bed64780f65197e118da87ec4e13a1ea45a52011866cb3(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3bbd6d2bd213661b870322e3013cdad42bad4e527b67f796bd7f87a39a6cfb7d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__941760bc9b9b601bd7141aeba2c0b62b91320a8094ef16349c949c62e6556888(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__97f47ec49b30e7edec05b65999f7ca10e5114c01d868b3bffbf18b4781345ec3(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__80a8348cd59f689124faaeeb295918ba0e9f3ad881b2cc64ae1331fd18a18535(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5b0b368cce63f9977ea6941131d39482050a1702aca6e036e3a8c1e78bbedbb2(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cb3687713e4e47cdb16dc6badf9d1ce199688e3188c7cc1b5f31a3490f769555(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ba001b4ee22321e656d067ff82c6d8a021bbaaa3720dee9203e4bd795d6c7c07(
    *,
    acl_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    dest_cidr: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    dest_port_range: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    direction: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ip_protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    policy: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_cidr: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_port_range: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dpi_group_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    dpi_signature_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    priority: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__57e857af38ce55eb7f88d2db576174d93e7257e49e030f06871f20a34b5c62db(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAppProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d54fc5c99175d6d4141b514bd62a7fafd0f8d31d47b08a75b85d4c01a4832d32(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1807b6ce77f301549bc5381a78cdafa08d864d36d6542834f74ae709eb05d4f4(
    value: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__53c4913a5ef38daafb5cd58a95527c4fe3fc2f40c91c13cece006b94a0c4dfae(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__57f5ac1d0a5530b664a5f46cef6841cbf291dfdf17619894c1926a4c9e8c94f2(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a7319a35e37399eb567272cf289737aa05ff7b4f7a0143525b4be277c56f9c54(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3ad589434876bfdd9c90890b9880389bf4177fca660afb611f0920155986921e(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8e24d232680e7f96e04c1499a2aeba5c166b2461cffb94b2193c0187d9958b72(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1f4e3a6259b416788d7c18ab5985156ff69533547f0fd0d836e521311fce516f(
    *,
    auto_pay: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    data_plan: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    period: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    user_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3fc5726a736ec3c63a44f01925b000455406999da7c82fd7d43397ef62f38fbc(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAppUserProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7957b621dbf9be350346334e5d0ab99c37180a3692ae05461b7d63b82ddf4699(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8d3d4807886a69a743dd13a3e40c42e42431f3909fa56db36fd87aad851d077c(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4d026a6e219e8d597d6f460fdf2daf1829d894fd4578aa827cdc63e317894e69(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__51b5468f1fa8119b486da9e5750ba1024cf294a0b838e8030bd4278375897a83(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__10c5f6931b1ad91061474c45e58eed392410f73c32080b69a1cb2c5feb334d7d(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8db508e0ada882798b9d42984fe04ff4c2ad8d04cf56f6036bafabee0894abf0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a71f434cc341a0e664f33a36f5198526aeb6df00309567dd98fa160fe5b583d8(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1e913d6ebe8766fed1e8d9b9de7372be805267bb2d1984452ee0bb5c57e6119b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a5c09aca7f4d91d52ee0d5b64d09d7465798ce18ef35227abc7adb208c89e21e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2a3d9fd5ec614068bdf7dabc9e5abf610f87d760ce9b19ad3cebc5840e1e8424(
    *,
    bandwidth: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    smart_ag_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    user_mail: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    client_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    user_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__657c3ad0165cb449e6426b9c484a399aeb85ee11a4f711e755bcab173a3d4c56(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosCloudConnectNetworkProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2fd8a7cfa27b226f714ed36b0959397ba5737833d4aa1b92bad5fc5fc0f1e6af(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8129f2359a8f1dd2cc6846ad9a04edf04d0934506d16298e4ccaff8ea2f7079a(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__96cacdf2f3d4caae0971c3bf60f41353201671a22e7c02053abed35f9efe0ef1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bdf58af61a3241b1aa64e38ddb0d5d743a3d318298d4a17fbeb275d0df108e5f(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5cbbdc1d9b146a4514a0251be4ab33d678eae636858e8eb71b876e97cbc84af6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__420e9a718e01d5e83c2c5df5fa02827c981724447fc3fb5725babcce5a5d6c86(
    value: typing.Optional[typing.List[RosCloudConnectNetwork.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__66aa42a5616a30f5767fbcd7724950045f40bec6ef9c3171ae18cbc5695cfa45(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fe14762c207ea3df76c7789655e7c13eb38d4150abc47a3128970859ff0df17e(
    *,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    is_default: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosCloudConnectNetwork.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f56c29b0e7c84fcfb2b0c0fa2175501a79774046156eb49423f0e9c70350bbe4(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosGrantCcnToCenProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f2f32efb958c252ffb00ab2fde18577a87281ee83af45187e80e5569901f34c8(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__46d77c84b5b8b766c0059438621af5e8c38db0c722a91231df8d011cf50f06c7(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c2e56342338b83bd06389f091ade772f27cf49cd5ef041fe58fb8be7080fd37c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d6c40d8ecb5a24197af147e3e82f99aa4c36b0ab5bb0135461d27fa2199b0697(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0835a30221d2f3fcdb412a92d7fa107cee195e476a3246091f87aed6b26f0423(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9eabdf4292a26b08dd7140f6141daf425ea2f6df0d7aeecbe7f25db7cdea62cc(
    *,
    ccn_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cen_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cen_uid: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f5575e70d36ba18d93e33876028f790565ea5ff7cf41ca5f5c9b4e559c0f8c87(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosQosProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f263b283cd1ffce3e56ce1de00175da18340be1fd9a099eb4e42e2183534a6ef(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3a80f00203539a6ad7eb6db8cddfae268d8154b2b37d3d77d19f22555a21a2c2(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c9b3400ce643e7b6281a81bf57301aef0ba97fc176b1f1b2be62f069fe7ee94d(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b2b66204219674415df33cf0e0f4c73fa48dade7994a51aa91b754b5cd32e0c8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__34fd0a95af493492cce301c6028e1d88f6657d5743c4eb68ff4c27aff0f56901(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosQosAssociationProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__91f89b5bf9cc233b40f9f45c99f3777bb9a33c43e38c624e7d34e1e3e079d994(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6dec216b5b716127d315174e96a962a5e73058cb4c9b1c274e8332d78b599547(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e6f756b8b5082e3013bc98665c21636d467362fe792c86f02503b562d3137223(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f294aea1aa2bbc3fac75920e9e434676e4b12c85549d161fc25de2b7e004d182(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c29035e0a6dbeb5c4deb1ed6299bd0b55b11d8668dcd98717e1181b59447d929(
    *,
    qos_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    smart_ag_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__64718b91930c5bd95e5fabff06a087ae994251f4a9fa76d20929998fb144421d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosQosCarProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1b23577a67ab12c74128be948942d9bcbef9b97e0caeddee40edc2325cdbf679(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d5768f39b645041e0779c18b9999fe78842c4c0b5e4d450e3b76a7213ebdfc04(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__925e8178a6266ee6375e4cebdf2513157505d1e18c5621e23e128763c7739fd5(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5cb879c460f4e3ac67b4db1b8905c13821ad950f5e8c8e07e1f3a73e612e99dd(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__185e15e1d33850d4ee1e92f9a0d2b138d9ad449adcc47c1f9e29572f4a64bf80(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dbd84e0c31974a935d0836e03bd5f16668dd814371377529dd0574c1bdba3d19(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4cb3f283ddae9d44d2d99727b224809c963cb830685ccc22c430d4acd545d244(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__70c735f437204730ee1bd1ebfa56911f1bbd7906ccc96b0dd054645153b674da(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e36f2ef80fbdd17d44e22ab92f08c24bddabaeb4768df98bd918e865ea7169cc(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3fe4ec199c61b308f2304540e64a8b444c40014fcd35b056e3e72f471d27336b(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cdd8921c3717ea4ee1c0f037bb330fe75950c58d3ffb01a052fafae6576bc933(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e360f1d526cf508f58124cf6fbbd882b4b15aaf050c52111a2c1f0676b23a229(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__de2f68a0375a1737bc70b117f797a83d0cc5e16bad6510530eb8b13a1d3ecab7(
    *,
    limit_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    priority: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    qos_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    max_bandwidth_abs: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    max_bandwidth_percent: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    min_bandwidth_abs: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    min_bandwidth_percent: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    percent_source_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__661bccf5d12136e6ac7cb70c3e00e59b380b17df92e3c337d5c85ba78d44a478(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosQosPolicyProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e14197007fcc75859b6f091895599de49820ff0338b1ee738fc9e7b61f140023(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3cd3da22484f581ae7c49c8a0ac5187c4200ef3456622f47bf9a4d710be29965(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__706119f9a03add9911796423001a78685a675dffe143d28c4f38a15f717fdc40(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__467d3726137b3338f302beceec5422db5ecaaad5d769fe40aac05b34b26128e8(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eac6fc842c1a430b1f7c1e77a334fd978c67269df33f1401a93ee553033cd1fb(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__533938359737110bb30b5a5f39d16222dd3e4fef626bb1aa862ac676d2d78a03(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8c2776eaa54608a95e3cf0907b9b371295e5e75f640b69309f14ba17abf088ea(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aee37ae6544f9d39bcf0f245b2c948a6e4b35e4b9ce8b7d5607bc066b93b8706(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bd7f374b94e59a69b387e4a879729738354e291b8f9a908694f152eed01e4a01(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__201950de0445d6d3c1f6b2db08bd6789eaaab015c9504147b8d0abf0e5d9d271(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9858a70b2fabf44c2b4d3af5fa1835835f64445d55e2cdc187558801549aed31(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f82be9376c8feeb7b23bad1644420e4e0b26ed80142d125274e421d505dc090a(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9e8401b09ef5433944f5eac3ab03ec3f4ebd37536f99a608126dcdcecbee06c2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9d64770e2824144f24a9c4cd369dd9ba525c660a5ddefc1b34dc2846b25d8f38(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4e4d251ebdc9a1677f0bc32fec71978756c50a803bbfab08880dbfbcdf377d04(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__81d207d88623295776bb1f7dec88aa28e66062ac96d396ebf0784e7b61773b1c(
    *,
    dest_cidr: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    dest_port_range: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ip_protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    priority: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    qos_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_cidr: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_port_range: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dpi_group_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    dpi_signature_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    end_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    start_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a3744f8e03cf5a999200af1901aa330fdf9f540e7a3e36e78bbdf60d59324454(
    *,
    qos_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    qos_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5f9acef511ea584ad813e5490b609bd8aada0afd750d92427c07878997631f1f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosSerialNumberBindingProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2ed80969a1f0ec138d294770456e25665978681c5383f57984e4d5c23f0bc1da(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b74519aa4540878a9343d109013dbeed3b2f6e1061111457773ad0e5d7e21700(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0c0272bff4877f60d01eee03864fc4c371e5323e4ab2125fe946bae5a1d5b83b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__317c5fe9491ff4d1ca568557ba1ea3e89a1d745d3b36342d1fd1c9ffc2192b87(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__08d6a3f2bc12c6611010eb7827cbb79bf72a447456e070e067ee9b3fe7ddf3f7(
    *,
    serial_number: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    smart_ag_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1180670dc5d5d51c1ab3511df1f180950b4363271da05874346ef7e64681c481(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosSmartAccessGatewayProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__39e09888788633ae74520e99d6ee3ed7a778201a3750c66c37863e2ccae8830e(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6bddd2af34480980cc43019c6904d99d8a0716dcba7c383380f20c7b640ae34b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__10a0806eec516bb053d58696e8c28b367659dc1a34173215f4664aa5c4761baf(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c7ce59b8e88bc8d85f148e55e0dcbc4324a1e44121c420bfe3769cf074ab0274(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__48ff554fa3c369d17b775014bc8dc9defed9b57b01e4a9d01ed3d12f3a2cbc0d(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4673ca98acd7c7c90f2c34bbd8ee58899d5ba3e6ed0dd54d13ce56c4273ea60d(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b8028a0c5c14372ace0ffbc59af4919c3f13050b8ee96ab95d11670b591a8964(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e293e57b36567444ed5fadfb6ddad8a7a119704b60e7d2c18f45fbc1ea63b140(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f98f41a518b0109efabd5016bcb71098c3ff5194033981107ac432bd78cc433f(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__adf790fc5b50fca98b56cd90a80b3230f3157e24f014e758badacd092085c93b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3a980302be6cfc89c598ea40915e0da27643c1568b054d9e5852ac17799818ea(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__80cd533e088740e9d1b8e898e1affae189a50ed01f6104e0a8c47c7955ed4cc7(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__57a945cff983816d9e4acb58a58c1899b3f8ef01bd2f7a68bdc66bdc1a637933(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__10a369d653cd1614ba8bd14f257b81c4e27bf82fc01a7a41df49ceb4a7fb693e(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__adda83ec5372d8f6d91f70226202d1cd5683a8f577f07c9ce011db9cebb8613d(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a09cff5cac924b9a57cebd132f09a8d6765dad746eee8c891d3b713fdc094929(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e0bd3aee7ce9e193eaebaca2aa0af43d9975f7cee5011e3b320387a9468ca74c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__901a16e49b89a1fc6a2ecbd181cf6387e515c9bb5cb83e8278f00b3d103a442e(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ed817f4f12c340bd095b687635d3c5b8b06d6bd748e9755086a77dc68d295d29(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b810087eea9bf86f2a6e63c754e79c74d5473942eb197ad925be96d16d2f80d7(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__31bac616a77c332ab9149c2969c8d67426c0244b2eea3197ee4799fcccad9593(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__abc89f449093847f94e4363eca0afa1d143bff48799ad1bcd4246928a8aeaf4a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2259e11e980dc0e756f24439a1a98a409999ad5a132b5a627a6ff796026b64c3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fcd2d9f47e8b8f4bf16c7e1b6cfad86a6e21e694e17f07c7330f92200dd7557e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__747c05b64d35d476e8969d58898bc9dbbf2436cf3130892622ca1902e3e8ea21(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3871c410d4b651bd69fa4489c281626c965b6d5e291e49cc7ee74e8471eba83f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6a814be234103a6869cd58e36bb3ac64845e68f45d670f0639692602c45aec54(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c9ca653b404570ce719527e47e015991fe154b561741a02c110b2531d800e906(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosSmartAccessGatewayBindingProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a60ef75b59c6d1d80f4b767f0ee19af2f5c16b2f78d2fda970796fb00e45cec1(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__14491b8a491a56854fdac5275d32d2a11d4c0c32548707535553627808871a20(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0f33a31ae588738462aca029631eca3717ae90755aee8123e7ee995fac094ac7(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fdcb64a460b42b6219aefe517908a29cd6ef83afbb534619076978bc29ee52c0(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__17de1e5989256d538e53edec8735bc9ec09195dec2bf20fd6dcd872e03ac4917(
    *,
    ccn_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    smart_ag_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dbd8041977da1f01d51fdc5af043d594c46c71a64b9eae31c8a5ed10e183eeda(
    *,
    buyer_message: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    charge_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    hard_ware_spec: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ha_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    max_band_width: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    period: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    receiver_address: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    receiver_city: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    receiver_country: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    receiver_district: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    receiver_email: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    receiver_mobile: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    receiver_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    receiver_state: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    receiver_town: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    receiver_zip: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    activate: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    already_have_sag: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cidr_block: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    receiver_phone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    routing_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_lock_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__81019d7cbfdb5393183db0f23c7cca7ce9a3693072d37abbdaa6648c2e0ff1c8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[SerialNumberBindingProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7c0e6e3f38d6b6a6ca6150a6db6ab34c3b0113b88516d71eeeed445315ca3af2(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bdff34404a64ef25e48ed4ce0d503f5ffd35855860fe947f437ea0fe9ce8e724(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9081db6ac12d8cd7bccbc1e41fe498bf71f3787a727cc65f3b78245e78ac7f00(
    value: SerialNumberBindingProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5a34195eb7b252bdc451a226fc354e43e0e3234015134ab9d1ef5fe92b6cedc0(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6d9d7f9dfa490b38764486b03a227a7e7afc1ff0467433a1346fe9020c88ac7f(
    *,
    serial_number: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    smart_ag_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a126393039e6442991677f850a6264520ff3b51ec70085d9a0837faae090b7c8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[SmartAccessGatewayProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9b335c043e70d42c44dc3b3858e85ff9564c986bb5f109e7eb7f117bd8adce14(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b6235ed1bc6d97101a76278d86f375550c80a71563d961fd95de80508bef979f(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2f66c0af0b2a6b53d021a6fd9b3e020d1f6f8cadc235e09ab612de6959e3a61b(
    value: SmartAccessGatewayProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c4adb25bf5320d5f2750101e0888ae3ec0a96270bae3b746f57672ab97551c63(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2f457bdf81df9f0b379fb19c32333cc372dd7dee70167125a48de5bf5eaee97f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[SmartAccessGatewayBindingProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__55399186348297606241cd5edc02bc83c062dd30ae2b07c8ca35d73231c208a9(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6ed4b647ac74393833a39bca949e5726e04ceaec1efb3b3d01c15398f2789add(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__83f747d277754e1701f8c081732d33ddba2124b643aad6a9636d101481a5073f(
    value: SmartAccessGatewayBindingProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5cc1b502e875cf06f749745fd599c4f43d33000c684d302153e501f0d2670bc3(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__96211dd279200135fc1f079cfcd6fc215e21d2f60b326f5054937715650858eb(
    *,
    ccn_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    smart_ag_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ad3277482a978a0ec308d8f2b1867a9f122d2c5d7b3841a27a2374e2837fa2f6(
    *,
    buyer_message: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    charge_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    hard_ware_spec: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ha_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    max_band_width: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    period: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    receiver_address: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    receiver_city: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    receiver_country: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    receiver_district: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    receiver_email: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    receiver_mobile: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    receiver_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    receiver_state: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    receiver_town: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    receiver_zip: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    activate: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    already_have_sag: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cidr_block: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    receiver_phone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    routing_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_lock_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
