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

from ._jsii import *

import ros_cdk_core


class ACLAssociation(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sag.ACLAssociation",
):
    '''A ROS resource type:  ``ALIYUN::SAG::ACLAssociation``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ACLAssociationProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::SAG::ACLAssociation``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sag.ACLAssociationProps",
    jsii_struct_bases=[],
    name_mapping={"acl_id": "aclId", "smart_ag_id": "smartAgId"},
)
class ACLAssociationProps:
    def __init__(
        self,
        *,
        acl_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        smart_ag_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::SAG::ACLAssociation``.

        :param acl_id: Property aclId: Access control ID.
        :param smart_ag_id: Property smartAgId: An intelligent gateway instance that needs to bind access control.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "acl_id": acl_id,
            "smart_ag_id": smart_ag_id,
        }

    @builtins.property
    def acl_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property aclId: Access control ID.'''
        result = self._values.get("acl_id")
        assert result is not None, "Required property 'acl_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def smart_ag_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property smartAgId: An intelligent gateway instance that needs to bind access control.'''
        result = self._values.get("smart_ag_id")
        assert result is not None, "Required property 'smart_ag_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

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
        name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::SAG::ACL``.

        :param name: Property name: Access control name. The length is 2-128 characters. It must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:// or https://.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "name": name,
        }

    @builtins.property
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property name: Access control name.

        The length is 2-128 characters. It must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:// or https://.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ACLProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ACLRule(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sag.ACLRule",
):
    '''A ROS resource type:  ``ALIYUN::SAG::ACLRule``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ACLRuleProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::SAG::ACLRule``.

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
    @jsii.member(jsii_name="attrAcrId")
    def attr_acr_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute AcrId: Access control rule ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAcrId"))


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
        "priority": "priority",
    },
)
class ACLRuleProps:
    def __init__(
        self,
        *,
        acl_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        dest_cidr: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        dest_port_range: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        direction: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ip_protocol: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        policy: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        source_cidr: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        source_port_range: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        priority: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SAG::ACLRule``.

        :param acl_id: Property aclId: Access control ID.
        :param dest_cidr: Property destCidr: Destination address, CIDR format and IP address range in IPv4 format.
        :param dest_port_range: Property destPortRange: Destination port range, 80/80.
        :param direction: Property direction: Regular direction. Value: in|out
        :param ip_protocol: Property ipProtocol: Protocol, not case sensitive.
        :param policy: Property policy: Access: accept|drop.
        :param source_cidr: Property sourceCidr: Source address, CIDR format and IP address range in IPv4 format.
        :param source_port_range: Property sourcePortRange: Source port range, 80/80.
        :param description: Property description: Rule description information, ranging from 1 to 512 characters.
        :param priority: Property priority: Priority, ranging from 1 to 100. Default: 1
        '''
        self._values: typing.Dict[str, typing.Any] = {
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
        if priority is not None:
            self._values["priority"] = priority

    @builtins.property
    def acl_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property aclId: Access control ID.'''
        result = self._values.get("acl_id")
        assert result is not None, "Required property 'acl_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def dest_cidr(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property destCidr: Destination address, CIDR format and IP address range in IPv4 format.'''
        result = self._values.get("dest_cidr")
        assert result is not None, "Required property 'dest_cidr' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def dest_port_range(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property destPortRange: Destination port range, 80/80.'''
        result = self._values.get("dest_port_range")
        assert result is not None, "Required property 'dest_port_range' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def direction(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property direction: Regular direction.

        Value: in|out
        '''
        result = self._values.get("direction")
        assert result is not None, "Required property 'direction' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def ip_protocol(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property ipProtocol: Protocol, not case sensitive.'''
        result = self._values.get("ip_protocol")
        assert result is not None, "Required property 'ip_protocol' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def policy(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property policy: Access: accept|drop.'''
        result = self._values.get("policy")
        assert result is not None, "Required property 'policy' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def source_cidr(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property sourceCidr: Source address, CIDR format and IP address range in IPv4 format.'''
        result = self._values.get("source_cidr")
        assert result is not None, "Required property 'source_cidr' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def source_port_range(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property sourcePortRange: Source port range, 80/80.'''
        result = self._values.get("source_port_range")
        assert result is not None, "Required property 'source_port_range' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: Rule description information, ranging from 1 to 512 characters.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def priority(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property priority: Priority, ranging from 1 to 100.

        Default: 1
        '''
        result = self._values.get("priority")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ACLRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Acl(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sag.Acl",
):
    '''A ROS resource type:  ``ALIYUN::SAG::ACL``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: ACLProps,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::SAG::ACL``.

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
    @jsii.member(jsii_name="attrAclId")
    def attr_acl_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute AclId: Access control set ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAclId"))


class CloudConnectNetwork(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sag.CloudConnectNetwork",
):
    '''A ROS resource type:  ``ALIYUN::SAG::CloudConnectNetwork``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Optional["CloudConnectNetworkProps"] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::SAG::CloudConnectNetwork``.

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
    @jsii.member(jsii_name="attrCcnId")
    def attr_ccn_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute CcnId: The ID of the CCN instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCcnId"))


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
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        is_default: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence["RosCloudConnectNetwork.TagsProperty"]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SAG::CloudConnectNetwork``.

        :param description: Property description: The description of the CCN instance. The description can contain 2 to 256 characters. The description cannot start with http:// or https://.
        :param is_default: Property isDefault: Whether is created by system.
        :param name: Property name: The name of the CCN instance. The name can contain 2 to 128 characters including a-z, A-Z, 0-9, chinese, underlines, and hyphens. The name must start with an English letter, but cannot start with http:// or https://.
        :param tags: Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        self._values: typing.Dict[str, typing.Any] = {}
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
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: The description of the CCN instance.

        The description can contain 2 to 256 characters. The description cannot start with http:// or https://.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def is_default(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property isDefault: Whether is created by system.'''
        result = self._values.get("is_default")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property name: The name of the CCN instance.

        The name can contain 2 to 128 characters including a-z, A-Z, 0-9, chinese, underlines, and hyphens. The name must start with an English letter, but cannot start with http:// or https://.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sag.GrantCcnToCen",
):
    '''A ROS resource type:  ``ALIYUN::SAG::GrantCcnToCen``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "GrantCcnToCenProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::SAG::GrantCcnToCen``.

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
    @jsii.member(jsii_name="attrCcnInstanceId")
    def attr_ccn_instance_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute CcnInstanceId: The ID of the CCN instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCcnInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCenInstanceId")
    def attr_cen_instance_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute CenInstanceId: The ID of the CEN instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCenInstanceId"))


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
        ccn_instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        cen_instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        cen_uid: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::SAG::GrantCcnToCen``.

        :param ccn_instance_id: Property ccnInstanceId: The ID of the CCN instance.
        :param cen_instance_id: Property cenInstanceId: The ID of the CEN instance.
        :param cen_uid: Property cenUid: The ID of the account to which the CEN instance belongs.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "ccn_instance_id": ccn_instance_id,
            "cen_instance_id": cen_instance_id,
            "cen_uid": cen_uid,
        }

    @builtins.property
    def ccn_instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property ccnInstanceId: The ID of the CCN instance.'''
        result = self._values.get("ccn_instance_id")
        assert result is not None, "Required property 'ccn_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def cen_instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property cenInstanceId: The ID of the CEN instance.'''
        result = self._values.get("cen_instance_id")
        assert result is not None, "Required property 'cen_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def cen_uid(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property cenUid: The ID of the account to which the CEN instance belongs.'''
        result = self._values.get("cen_uid")
        assert result is not None, "Required property 'cen_uid' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "GrantCcnToCenProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosACL(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sag.RosACL",
):
    '''A ROS template type:  ``ALIYUN::SAG::ACL``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosACLProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SAG::ACL``.

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
    @jsii.member(jsii_name="attrAclId")
    def attr_acl_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AclId: Access control set ID.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAclId"))

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

        name: Access control name.
        The length is 2-128 characters. It must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:// or https://.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(self, value: typing.Union[builtins.str, ros_cdk_core.IResolvable]) -> None:
        jsii.set(self, "name", value)


class RosACLAssociation(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sag.RosACLAssociation",
):
    '''A ROS template type:  ``ALIYUN::SAG::ACLAssociation``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosACLAssociationProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SAG::ACLAssociation``.

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
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="aclId")
    def acl_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: aclId: Access control ID.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "aclId"))

    @acl_id.setter
    def acl_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "aclId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        '''A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.'''
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="smartAgId")
    def smart_ag_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: smartAgId: An intelligent gateway instance that needs to bind access control.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "smartAgId"))

    @smart_ag_id.setter
    def smart_ag_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
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
        acl_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        smart_ag_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::SAG::ACLAssociation``.

        :param acl_id: 
        :param smart_ag_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "acl_id": acl_id,
            "smart_ag_id": smart_ag_id,
        }

    @builtins.property
    def acl_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: aclId: Access control ID.
        '''
        result = self._values.get("acl_id")
        assert result is not None, "Required property 'acl_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def smart_ag_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: smartAgId: An intelligent gateway instance that needs to bind access control.
        '''
        result = self._values.get("smart_ag_id")
        assert result is not None, "Required property 'smart_ag_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

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
        name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::SAG::ACL``.

        :param name: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "name": name,
        }

    @builtins.property
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        name: Access control name.
        The length is 2-128 characters. It must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:// or https://.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosACLProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosACLRule(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sag.RosACLRule",
):
    '''A ROS template type:  ``ALIYUN::SAG::ACLRule``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosACLRuleProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SAG::ACLRule``.

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
    @jsii.member(jsii_name="attrAcrId")
    def attr_acr_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AcrId: Access control rule ID.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAcrId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="aclId")
    def acl_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: aclId: Access control ID.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "aclId"))

    @acl_id.setter
    def acl_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "aclId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="destCidr")
    def dest_cidr(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: destCidr: Destination address, CIDR format and IP address range in IPv4 format.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "destCidr"))

    @dest_cidr.setter
    def dest_cidr(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "destCidr", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="destPortRange")
    def dest_port_range(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: destPortRange: Destination port range, 80/80.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "destPortRange"))

    @dest_port_range.setter
    def dest_port_range(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "destPortRange", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="direction")
    def direction(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        direction: Regular direction.
        Value: in|out
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "direction"))

    @direction.setter
    def direction(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "direction", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="ipProtocol")
    def ip_protocol(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: ipProtocol: Protocol, not case sensitive.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "ipProtocol"))

    @ip_protocol.setter
    def ip_protocol(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "ipProtocol", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="policy")
    def policy(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: policy: Access: accept|drop
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "policy"))

    @policy.setter
    def policy(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "policy", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="sourceCidr")
    def source_cidr(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: sourceCidr: Source address, CIDR format and IP address range in IPv4 format.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "sourceCidr"))

    @source_cidr.setter
    def source_cidr(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "sourceCidr", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="sourcePortRange")
    def source_port_range(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: sourcePortRange: Source port range, 80/80.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "sourcePortRange"))

    @source_port_range.setter
    def source_port_range(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "sourcePortRange", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Rule description information, ranging from 1 to 512 characters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="priority")
    def priority(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        priority: Priority, ranging from 1 to 100.
        Default: 1
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "priority"))

    @priority.setter
    def priority(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "priority", value)


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
        "priority": "priority",
    },
)
class RosACLRuleProps:
    def __init__(
        self,
        *,
        acl_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        dest_cidr: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        dest_port_range: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        direction: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ip_protocol: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        policy: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        source_cidr: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        source_port_range: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        priority: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SAG::ACLRule``.

        :param acl_id: 
        :param dest_cidr: 
        :param dest_port_range: 
        :param direction: 
        :param ip_protocol: 
        :param policy: 
        :param source_cidr: 
        :param source_port_range: 
        :param description: 
        :param priority: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
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
        if priority is not None:
            self._values["priority"] = priority

    @builtins.property
    def acl_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: aclId: Access control ID.
        '''
        result = self._values.get("acl_id")
        assert result is not None, "Required property 'acl_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def dest_cidr(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: destCidr: Destination address, CIDR format and IP address range in IPv4 format.
        '''
        result = self._values.get("dest_cidr")
        assert result is not None, "Required property 'dest_cidr' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def dest_port_range(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: destPortRange: Destination port range, 80/80.
        '''
        result = self._values.get("dest_port_range")
        assert result is not None, "Required property 'dest_port_range' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def direction(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        direction: Regular direction.
        Value: in|out
        '''
        result = self._values.get("direction")
        assert result is not None, "Required property 'direction' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def ip_protocol(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: ipProtocol: Protocol, not case sensitive.
        '''
        result = self._values.get("ip_protocol")
        assert result is not None, "Required property 'ip_protocol' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def policy(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: policy: Access: accept|drop
        '''
        result = self._values.get("policy")
        assert result is not None, "Required property 'policy' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def source_cidr(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: sourceCidr: Source address, CIDR format and IP address range in IPv4 format.
        '''
        result = self._values.get("source_cidr")
        assert result is not None, "Required property 'source_cidr' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def source_port_range(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: sourcePortRange: Source port range, 80/80.
        '''
        result = self._values.get("source_port_range")
        assert result is not None, "Required property 'source_port_range' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Rule description information, ranging from 1 to 512 characters.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def priority(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        priority: Priority, ranging from 1 to 100.
        Default: 1
        '''
        result = self._values.get("priority")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosACLRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCloudConnectNetwork(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sag.RosCloudConnectNetwork",
):
    '''A ROS template type:  ``ALIYUN::SAG::CloudConnectNetwork``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosCloudConnectNetworkProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SAG::CloudConnectNetwork``.

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
    @jsii.member(jsii_name="attrCcnId")
    def attr_ccn_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: CcnId: The ID of the CCN instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCcnId"))

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
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        description: The description of the CCN instance.
        The description can contain 2 to 256 characters. The description cannot start with http:// or https://.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="isDefault")
    def is_default(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: isDefault: Whether is created by system
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "isDefault"))

    @is_default.setter
    def is_default(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "isDefault", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="name")
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        name: The name of the CCN instance.
        The name can contain 2 to 128 characters including a-z, A-Z, 0-9, chinese, underlines, and hyphens. The name must start with an English letter, but cannot start with http:// or https://.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "name", value)

    @builtins.property # type: ignore[misc]
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
            key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "key": key,
            }
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        is_default: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[RosCloudConnectNetwork.TagsProperty]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SAG::CloudConnectNetwork``.

        :param description: 
        :param is_default: 
        :param name: 
        :param tags: 
        '''
        self._values: typing.Dict[str, typing.Any] = {}
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
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        description: The description of the CCN instance.
        The description can contain 2 to 256 characters. The description cannot start with http:// or https://.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def is_default(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: isDefault: Whether is created by system
        '''
        result = self._values.get("is_default")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        name: The name of the CCN instance.
        The name can contain 2 to 128 characters including a-z, A-Z, 0-9, chinese, underlines, and hyphens. The name must start with an English letter, but cannot start with http:// or https://.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sag.RosGrantCcnToCen",
):
    '''A ROS template type:  ``ALIYUN::SAG::GrantCcnToCen``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosGrantCcnToCenProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SAG::GrantCcnToCen``.

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
    @jsii.member(jsii_name="attrCcnInstanceId")
    def attr_ccn_instance_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: CcnInstanceId: The ID of the CCN instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCcnInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCenInstanceId")
    def attr_cen_instance_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: CenInstanceId: The ID of the CEN instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCenInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="ccnInstanceId")
    def ccn_instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: ccnInstanceId: The ID of the CCN instance.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "ccnInstanceId"))

    @ccn_instance_id.setter
    def ccn_instance_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "ccnInstanceId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="cenInstanceId")
    def cen_instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: cenInstanceId: The ID of the CEN instance.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "cenInstanceId"))

    @cen_instance_id.setter
    def cen_instance_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "cenInstanceId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="cenUid")
    def cen_uid(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: cenUid: The ID of the account to which the CEN instance belongs.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "cenUid"))

    @cen_uid.setter
    def cen_uid(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "cenUid", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
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
        ccn_instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        cen_instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        cen_uid: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::SAG::GrantCcnToCen``.

        :param ccn_instance_id: 
        :param cen_instance_id: 
        :param cen_uid: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "ccn_instance_id": ccn_instance_id,
            "cen_instance_id": cen_instance_id,
            "cen_uid": cen_uid,
        }

    @builtins.property
    def ccn_instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: ccnInstanceId: The ID of the CCN instance.
        '''
        result = self._values.get("ccn_instance_id")
        assert result is not None, "Required property 'ccn_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def cen_instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: cenInstanceId: The ID of the CEN instance.
        '''
        result = self._values.get("cen_instance_id")
        assert result is not None, "Required property 'cen_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def cen_uid(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: cenUid: The ID of the account to which the CEN instance belongs.
        '''
        result = self._values.get("cen_uid")
        assert result is not None, "Required property 'cen_uid' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosGrantCcnToCenProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSerialNumberBinding(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sag.RosSerialNumberBinding",
):
    '''A ROS template type:  ``ALIYUN::SAG::SerialNumberBinding``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosSerialNumberBindingProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SAG::SerialNumberBinding``.

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
    @jsii.member(jsii_name="attrSmartAgId")
    def attr_smart_ag_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: SmartAGId: The ID of the SAG instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSmartAgId"))

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
    @jsii.member(jsii_name="serialNumber")
    def serial_number(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: serialNumber: The serial number (SN) of the SAG device.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "serialNumber"))

    @serial_number.setter
    def serial_number(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "serialNumber", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="smartAgId")
    def smart_ag_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: smartAgId: The ID of the SAG instance.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "smartAgId"))

    @smart_ag_id.setter
    def smart_ag_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
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
        serial_number: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        smart_ag_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::SAG::SerialNumberBinding``.

        :param serial_number: 
        :param smart_ag_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "serial_number": serial_number,
            "smart_ag_id": smart_ag_id,
        }

    @builtins.property
    def serial_number(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: serialNumber: The serial number (SN) of the SAG device.
        '''
        result = self._values.get("serial_number")
        assert result is not None, "Required property 'serial_number' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def smart_ag_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: smartAgId: The ID of the SAG instance.
        '''
        result = self._values.get("smart_ag_id")
        assert result is not None, "Required property 'smart_ag_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSerialNumberBindingProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSmartAccessGateway(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sag.RosSmartAccessGateway",
):
    '''A ROS template type:  ``ALIYUN::SAG::SmartAccessGateway``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosSmartAccessGatewayProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SAG::SmartAccessGateway``.

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
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: OrderId: The ID of the order.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSmartAgId")
    def attr_smart_ag_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: SmartAGId: The ID of the SAG instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSmartAgId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="buyerMessage")
    def buyer_message(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: buyerMessage: The remarks left by the buyer.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "buyerMessage"))

    @buyer_message.setter
    def buyer_message(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "buyerMessage", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="chargeType")
    def charge_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        chargeType: The billing method of the SAG instance.
        Set the value to PREPAY, which specifies the subscription billing method.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "chargeType"))

    @charge_type.setter
    def charge_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "chargeType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="hardWareSpec")
    def hard_ware_spec(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        hardWareSpec: The type of the SAG instance. Valid values:
        sag-100wm
        sag-1000
        sag-vcpe
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "hardWareSpec"))

    @hard_ware_spec.setter
    def hard_ware_spec(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "hardWareSpec", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="haType")
    def ha_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
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
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "haType"))

    @ha_type.setter
    def ha_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "haType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="maxBandWidth")
    def max_band_width(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property:

        maxBandWidth: The bandwidth of the SAG instance.
        If you want to create an SAG CPE instance and the model is sag-100wm, valid values of this parameter are 2 to 50. Unit: Mbit/s.
        If you want to create an SAG CPE instance and the model is sag-1000, valid values of this parameter are 10 to 500. Unit: Mbit/s.
        If you want to create an SAG vCPE instance, valid values of this parameter are 10 to 1000. Unit: Mbit/s.
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "maxBandWidth"))

    @max_band_width.setter
    def max_band_width(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "maxBandWidth", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="period")
    def period(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property:

        period: The subscription period of the SAG instance. Unit: months.
        Valid values: 1 to 9, 12, 24, and 36.
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "period", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="receiverAddress")
    def receiver_address(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: receiverAddress: The detailed address of the recipient.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "receiverAddress"))

    @receiver_address.setter
    def receiver_address(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "receiverAddress", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="receiverCity")
    def receiver_city(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: receiverCity: The city of the recipient address.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "receiverCity"))

    @receiver_city.setter
    def receiver_city(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "receiverCity", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="receiverCountry")
    def receiver_country(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: receiverCountry: The country of the recipient address.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "receiverCountry"))

    @receiver_country.setter
    def receiver_country(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "receiverCountry", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="receiverDistrict")
    def receiver_district(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: receiverDistrict: The district of the recipient address.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "receiverDistrict"))

    @receiver_district.setter
    def receiver_district(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "receiverDistrict", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="receiverEmail")
    def receiver_email(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: receiverEmail: The email address of the recipient.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "receiverEmail"))

    @receiver_email.setter
    def receiver_email(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "receiverEmail", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="receiverMobile")
    def receiver_mobile(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: receiverMobile: The mobile phone number of the recipient.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "receiverMobile"))

    @receiver_mobile.setter
    def receiver_mobile(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "receiverMobile", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="receiverName")
    def receiver_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: receiverName: The name of the recipient.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "receiverName"))

    @receiver_name.setter
    def receiver_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "receiverName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="receiverState")
    def receiver_state(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: receiverState: The province of the recipient address.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "receiverState"))

    @receiver_state.setter
    def receiver_state(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "receiverState", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="receiverTown")
    def receiver_town(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: receiverTown: The town of the recipient address.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "receiverTown"))

    @receiver_town.setter
    def receiver_town(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "receiverTown", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="receiverZip")
    def receiver_zip(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: receiverZip: The postcode of the recipient address.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "receiverZip"))

    @receiver_zip.setter
    def receiver_zip(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "receiverZip", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="activate")
    def activate(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: activate: Activate SAG or not. Default is False
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "activate"))

    @activate.setter
    def activate(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "activate", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="alreadyHaveSag")
    def already_have_sag(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        alreadyHaveSag: Specifies whether you already have an SAG device. Valid values:
        true: yes
        false (default): no
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "alreadyHaveSag"))

    @already_have_sag.setter
    def already_have_sag(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "alreadyHaveSag", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="autoPay")
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        autoPay: Specifies whether to enable auto-payment for the instance. Valid values:
        true: yes
        false: no
        If you set the parameter to false, go to Billing Management to complete the payment
        after you call this operation. After you complete the payment, the instance can be
        created.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "autoPay"))

    @auto_pay.setter
    def auto_pay(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoPay", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="cidrBlock")
    def cidr_block(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        cidrBlock: The CIDR blocks of terminals in the private network. Make sure that the CIDR blocks
        do not overlap with each other.
        If the LAN port of the SAG device dynamically assigns IP addresses, IP addresses within
        the first CIDR block are assigned to terminals that have the Dynamic Host Configuration
        Protocol (DHCP) enabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "cidrBlock"))

    @cidr_block.setter
    def cidr_block(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "cidrBlock", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        description: The description of the SAG instance.
        The description must be 2 to 256 characters in length, and can contain digits, periods
        (.), underscores (_), and hyphens (-). It must start with a letter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="name")
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        name: The name of the SAG instance.
        The name must be 2 to 128 characters in length and can contain digits, periods (.),
        underscores (_), and hyphens (-). It must start with a letter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "name", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="receiverPhone")
    def receiver_phone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: receiverPhone: The landline phone number of the recipient.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "receiverPhone"))

    @receiver_phone.setter
    def receiver_phone(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "receiverPhone", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="routingStrategy")
    def routing_strategy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        routingStrategy: The policy to advertise routes from the private network to Alibaba Cloud.
        static: static routing.
        dynamic: dynamic routing.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "routingStrategy"))

    @routing_strategy.setter
    def routing_strategy(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "routingStrategy", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="securityLockThreshold")
    def security_lock_threshold(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        securityLockThreshold: The time that a disconnected SAG device remain locked. The time must be no shorter
        than zero second.
        Unit: second.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "securityLockThreshold"))

    @security_lock_threshold.setter
    def security_lock_threshold(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "securityLockThreshold", value)


class RosSmartAccessGatewayBinding(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sag.RosSmartAccessGatewayBinding",
):
    '''A ROS template type:  ``ALIYUN::SAG::SmartAccessGatewayBinding``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosSmartAccessGatewayBindingProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SAG::SmartAccessGatewayBinding``.

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
    @jsii.member(jsii_name="attrSmartAgId")
    def attr_smart_ag_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: SmartAGId: The ID of the Smart Access Gateway instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSmartAgId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="ccnId")
    def ccn_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: ccnId: The ID of the CCN instance to bind.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "ccnId"))

    @ccn_id.setter
    def ccn_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "ccnId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="smartAgId")
    def smart_ag_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: smartAgId: The ID of the Smart Access Gateway instance.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "smartAgId"))

    @smart_ag_id.setter
    def smart_ag_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
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
        ccn_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        smart_ag_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::SAG::SmartAccessGatewayBinding``.

        :param ccn_id: 
        :param smart_ag_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "ccn_id": ccn_id,
            "smart_ag_id": smart_ag_id,
        }

    @builtins.property
    def ccn_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: ccnId: The ID of the CCN instance to bind.
        '''
        result = self._values.get("ccn_id")
        assert result is not None, "Required property 'ccn_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def smart_ag_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: smartAgId: The ID of the Smart Access Gateway instance.
        '''
        result = self._values.get("smart_ag_id")
        assert result is not None, "Required property 'smart_ag_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

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
        buyer_message: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        charge_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        hard_ware_spec: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ha_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        max_band_width: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        period: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        receiver_address: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        receiver_city: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        receiver_country: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        receiver_district: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        receiver_email: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        receiver_mobile: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        receiver_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        receiver_state: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        receiver_town: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        receiver_zip: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        activate: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        already_have_sag: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        auto_pay: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        cidr_block: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        receiver_phone: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        routing_strategy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        security_lock_threshold: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SAG::SmartAccessGateway``.

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
        self._values: typing.Dict[str, typing.Any] = {
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
    def buyer_message(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: buyerMessage: The remarks left by the buyer.
        '''
        result = self._values.get("buyer_message")
        assert result is not None, "Required property 'buyer_message' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def charge_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        chargeType: The billing method of the SAG instance.
        Set the value to PREPAY, which specifies the subscription billing method.
        '''
        result = self._values.get("charge_type")
        assert result is not None, "Required property 'charge_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def hard_ware_spec(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        hardWareSpec: The type of the SAG instance. Valid values:
        sag-100wm
        sag-1000
        sag-vcpe
        '''
        result = self._values.get("hard_ware_spec")
        assert result is not None, "Required property 'hard_ware_spec' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def ha_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
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
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def max_band_width(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property:

        maxBandWidth: The bandwidth of the SAG instance.
        If you want to create an SAG CPE instance and the model is sag-100wm, valid values of this parameter are 2 to 50. Unit: Mbit/s.
        If you want to create an SAG CPE instance and the model is sag-1000, valid values of this parameter are 10 to 500. Unit: Mbit/s.
        If you want to create an SAG vCPE instance, valid values of this parameter are 10 to 1000. Unit: Mbit/s.
        '''
        result = self._values.get("max_band_width")
        assert result is not None, "Required property 'max_band_width' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def period(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property:

        period: The subscription period of the SAG instance. Unit: months.
        Valid values: 1 to 9, 12, 24, and 36.
        '''
        result = self._values.get("period")
        assert result is not None, "Required property 'period' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def receiver_address(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: receiverAddress: The detailed address of the recipient.
        '''
        result = self._values.get("receiver_address")
        assert result is not None, "Required property 'receiver_address' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def receiver_city(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: receiverCity: The city of the recipient address.
        '''
        result = self._values.get("receiver_city")
        assert result is not None, "Required property 'receiver_city' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def receiver_country(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: receiverCountry: The country of the recipient address.
        '''
        result = self._values.get("receiver_country")
        assert result is not None, "Required property 'receiver_country' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def receiver_district(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: receiverDistrict: The district of the recipient address.
        '''
        result = self._values.get("receiver_district")
        assert result is not None, "Required property 'receiver_district' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def receiver_email(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: receiverEmail: The email address of the recipient.
        '''
        result = self._values.get("receiver_email")
        assert result is not None, "Required property 'receiver_email' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def receiver_mobile(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: receiverMobile: The mobile phone number of the recipient.
        '''
        result = self._values.get("receiver_mobile")
        assert result is not None, "Required property 'receiver_mobile' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def receiver_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: receiverName: The name of the recipient.
        '''
        result = self._values.get("receiver_name")
        assert result is not None, "Required property 'receiver_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def receiver_state(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: receiverState: The province of the recipient address.
        '''
        result = self._values.get("receiver_state")
        assert result is not None, "Required property 'receiver_state' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def receiver_town(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: receiverTown: The town of the recipient address.
        '''
        result = self._values.get("receiver_town")
        assert result is not None, "Required property 'receiver_town' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def receiver_zip(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: receiverZip: The postcode of the recipient address.
        '''
        result = self._values.get("receiver_zip")
        assert result is not None, "Required property 'receiver_zip' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def activate(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: activate: Activate SAG or not. Default is False
        '''
        result = self._values.get("activate")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def already_have_sag(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        alreadyHaveSag: Specifies whether you already have an SAG device. Valid values:
        true: yes
        false (default): no
        '''
        result = self._values.get("already_have_sag")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def cidr_block(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        cidrBlock: The CIDR blocks of terminals in the private network. Make sure that the CIDR blocks
        do not overlap with each other.
        If the LAN port of the SAG device dynamically assigns IP addresses, IP addresses within
        the first CIDR block are assigned to terminals that have the Dynamic Host Configuration
        Protocol (DHCP) enabled.
        '''
        result = self._values.get("cidr_block")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        description: The description of the SAG instance.
        The description must be 2 to 256 characters in length, and can contain digits, periods
        (.), underscores (_), and hyphens (-). It must start with a letter.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        name: The name of the SAG instance.
        The name must be 2 to 128 characters in length and can contain digits, periods (.),
        underscores (_), and hyphens (-). It must start with a letter.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def receiver_phone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: receiverPhone: The landline phone number of the recipient.
        '''
        result = self._values.get("receiver_phone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def routing_strategy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        routingStrategy: The policy to advertise routes from the private network to Alibaba Cloud.
        static: static routing.
        dynamic: dynamic routing.
        '''
        result = self._values.get("routing_strategy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def security_lock_threshold(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        securityLockThreshold: The time that a disconnected SAG device remain locked. The time must be no shorter
        than zero second.
        Unit: second.
        '''
        result = self._values.get("security_lock_threshold")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSmartAccessGatewayProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class SerialNumberBinding(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sag.SerialNumberBinding",
):
    '''A ROS resource type:  ``ALIYUN::SAG::SerialNumberBinding``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "SerialNumberBindingProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::SAG::SerialNumberBinding``.

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
    @jsii.member(jsii_name="attrSmartAgId")
    def attr_smart_ag_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute SmartAGId: The ID of the SAG instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSmartAgId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sag.SerialNumberBindingProps",
    jsii_struct_bases=[],
    name_mapping={"serial_number": "serialNumber", "smart_ag_id": "smartAgId"},
)
class SerialNumberBindingProps:
    def __init__(
        self,
        *,
        serial_number: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        smart_ag_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::SAG::SerialNumberBinding``.

        :param serial_number: Property serialNumber: The serial number (SN) of the SAG device.
        :param smart_ag_id: Property smartAgId: The ID of the SAG instance.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "serial_number": serial_number,
            "smart_ag_id": smart_ag_id,
        }

    @builtins.property
    def serial_number(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property serialNumber: The serial number (SN) of the SAG device.'''
        result = self._values.get("serial_number")
        assert result is not None, "Required property 'serial_number' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def smart_ag_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property smartAgId: The ID of the SAG instance.'''
        result = self._values.get("smart_ag_id")
        assert result is not None, "Required property 'smart_ag_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SerialNumberBindingProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class SmartAccessGateway(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sag.SmartAccessGateway",
):
    '''A ROS resource type:  ``ALIYUN::SAG::SmartAccessGateway``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "SmartAccessGatewayProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::SAG::SmartAccessGateway``.

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
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute OrderId: The ID of the order.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSmartAgId")
    def attr_smart_ag_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute SmartAGId: The ID of the SAG instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSmartAgId"))


class SmartAccessGatewayBinding(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sag.SmartAccessGatewayBinding",
):
    '''A ROS resource type:  ``ALIYUN::SAG::SmartAccessGatewayBinding``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "SmartAccessGatewayBindingProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::SAG::SmartAccessGatewayBinding``.

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
    @jsii.member(jsii_name="attrSmartAgId")
    def attr_smart_ag_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute SmartAGId: The ID of the Smart Access Gateway instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSmartAgId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sag.SmartAccessGatewayBindingProps",
    jsii_struct_bases=[],
    name_mapping={"ccn_id": "ccnId", "smart_ag_id": "smartAgId"},
)
class SmartAccessGatewayBindingProps:
    def __init__(
        self,
        *,
        ccn_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        smart_ag_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::SAG::SmartAccessGatewayBinding``.

        :param ccn_id: Property ccnId: The ID of the CCN instance to bind.
        :param smart_ag_id: Property smartAgId: The ID of the Smart Access Gateway instance.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "ccn_id": ccn_id,
            "smart_ag_id": smart_ag_id,
        }

    @builtins.property
    def ccn_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property ccnId: The ID of the CCN instance to bind.'''
        result = self._values.get("ccn_id")
        assert result is not None, "Required property 'ccn_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def smart_ag_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property smartAgId: The ID of the Smart Access Gateway instance.'''
        result = self._values.get("smart_ag_id")
        assert result is not None, "Required property 'smart_ag_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

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
        buyer_message: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        charge_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        hard_ware_spec: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ha_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        max_band_width: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        period: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        receiver_address: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        receiver_city: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        receiver_country: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        receiver_district: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        receiver_email: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        receiver_mobile: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        receiver_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        receiver_state: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        receiver_town: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        receiver_zip: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        activate: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        already_have_sag: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        auto_pay: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        cidr_block: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        receiver_phone: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        routing_strategy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        security_lock_threshold: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SAG::SmartAccessGateway``.

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
        self._values: typing.Dict[str, typing.Any] = {
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
    def buyer_message(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property buyerMessage: The remarks left by the buyer.'''
        result = self._values.get("buyer_message")
        assert result is not None, "Required property 'buyer_message' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def charge_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property chargeType: The billing method of the SAG instance.

        Set the value to PREPAY, which specifies the subscription billing method.
        '''
        result = self._values.get("charge_type")
        assert result is not None, "Required property 'charge_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def hard_ware_spec(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property hardWareSpec: The type of the SAG instance.

        Valid values:
        sag-100wm
        sag-1000
        sag-vcpe
        '''
        result = self._values.get("hard_ware_spec")
        assert result is not None, "Required property 'hard_ware_spec' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def ha_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
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
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def max_band_width(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property maxBandWidth: The bandwidth of the SAG instance.

        If you want to create an SAG CPE instance and the model is sag-100wm, valid values of this parameter are 2 to 50. Unit: Mbit/s.
        If you want to create an SAG CPE instance and the model is sag-1000, valid values of this parameter are 10 to 500. Unit: Mbit/s.
        If you want to create an SAG vCPE instance, valid values of this parameter are 10 to 1000. Unit: Mbit/s.
        '''
        result = self._values.get("max_band_width")
        assert result is not None, "Required property 'max_band_width' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def period(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property period: The subscription period of the SAG instance.

        Unit: months.
        Valid values: 1 to 9, 12, 24, and 36.
        '''
        result = self._values.get("period")
        assert result is not None, "Required property 'period' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def receiver_address(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property receiverAddress: The detailed address of the recipient.'''
        result = self._values.get("receiver_address")
        assert result is not None, "Required property 'receiver_address' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def receiver_city(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property receiverCity: The city of the recipient address.'''
        result = self._values.get("receiver_city")
        assert result is not None, "Required property 'receiver_city' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def receiver_country(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property receiverCountry: The country of the recipient address.'''
        result = self._values.get("receiver_country")
        assert result is not None, "Required property 'receiver_country' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def receiver_district(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property receiverDistrict: The district of the recipient address.'''
        result = self._values.get("receiver_district")
        assert result is not None, "Required property 'receiver_district' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def receiver_email(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property receiverEmail: The email address of the recipient.'''
        result = self._values.get("receiver_email")
        assert result is not None, "Required property 'receiver_email' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def receiver_mobile(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property receiverMobile: The mobile phone number of the recipient.'''
        result = self._values.get("receiver_mobile")
        assert result is not None, "Required property 'receiver_mobile' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def receiver_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property receiverName: The name of the recipient.'''
        result = self._values.get("receiver_name")
        assert result is not None, "Required property 'receiver_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def receiver_state(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property receiverState: The province of the recipient address.'''
        result = self._values.get("receiver_state")
        assert result is not None, "Required property 'receiver_state' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def receiver_town(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property receiverTown: The town of the recipient address.'''
        result = self._values.get("receiver_town")
        assert result is not None, "Required property 'receiver_town' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def receiver_zip(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property receiverZip: The postcode of the recipient address.'''
        result = self._values.get("receiver_zip")
        assert result is not None, "Required property 'receiver_zip' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def activate(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property activate: Activate SAG or not.

        Default is False
        '''
        result = self._values.get("activate")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def already_have_sag(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property alreadyHaveSag: Specifies whether you already have an SAG device.

        Valid values:
        true: yes
        false (default): no
        '''
        result = self._values.get("already_have_sag")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property autoPay: Specifies whether to enable auto-payment for the instance.

        Valid values:
        true: yes
        false: no
        If you set the parameter to false, go to Billing Management to complete the payment
        after you call this operation. After you complete the payment, the instance can be
        created.
        '''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def cidr_block(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property cidrBlock: The CIDR blocks of terminals in the private network.

        Make sure that the CIDR blocks
        do not overlap with each other.
        If the LAN port of the SAG device dynamically assigns IP addresses, IP addresses within
        the first CIDR block are assigned to terminals that have the Dynamic Host Configuration
        Protocol (DHCP) enabled.
        '''
        result = self._values.get("cidr_block")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: The description of the SAG instance.

        The description must be 2 to 256 characters in length, and can contain digits, periods
        (.), underscores (_), and hyphens (-). It must start with a letter.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property name: The name of the SAG instance.

        The name must be 2 to 128 characters in length and can contain digits, periods (.),
        underscores (_), and hyphens (-). It must start with a letter.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def receiver_phone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property receiverPhone: The landline phone number of the recipient.'''
        result = self._values.get("receiver_phone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def routing_strategy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property routingStrategy: The policy to advertise routes from the private network to Alibaba Cloud.

        static: static routing.
        dynamic: dynamic routing.
        '''
        result = self._values.get("routing_strategy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def security_lock_threshold(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property securityLockThreshold: The time that a disconnected SAG device remain locked.

        The time must be no shorter
        than zero second.
        Unit: second.
        '''
        result = self._values.get("security_lock_threshold")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

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
    "CloudConnectNetwork",
    "CloudConnectNetworkProps",
    "GrantCcnToCen",
    "GrantCcnToCenProps",
    "RosACL",
    "RosACLAssociation",
    "RosACLAssociationProps",
    "RosACLProps",
    "RosACLRule",
    "RosACLRuleProps",
    "RosCloudConnectNetwork",
    "RosCloudConnectNetworkProps",
    "RosGrantCcnToCen",
    "RosGrantCcnToCenProps",
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
