"""
## Aliyun ROS SAG Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_sag as SAG
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


class ACLAssociation(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sag.ACLAssociation",
):
    """A ROS resource type:  ``ALIYUN::SAG::ACLAssociation``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ACLAssociationProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::SAG::ACLAssociation``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(ACLAssociation, self, [scope, id, props, enable_resource_property_constraint])


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sag.ACLAssociationProps",
    jsii_struct_bases=[],
    name_mapping={"acl_id": "aclId", "smart_ag_id": "smartAgId"},
)
class ACLAssociationProps:
    def __init__(self, *, acl_id: builtins.str, smart_ag_id: builtins.str) -> None:
        """Properties for defining a ``ALIYUN::SAG::ACLAssociation``.

        :param acl_id: 
        :param smart_ag_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "acl_id": acl_id,
            "smart_ag_id": smart_ag_id,
        }

    @builtins.property
    def acl_id(self) -> builtins.str:
        """
        :Property: aclId: Access control ID.
        """
        result = self._values.get("acl_id")
        assert result is not None, "Required property 'acl_id' is missing"
        return result

    @builtins.property
    def smart_ag_id(self) -> builtins.str:
        """
        :Property: smartAgId: An intelligent gateway instance that needs to bind access control.
        """
        result = self._values.get("smart_ag_id")
        assert result is not None, "Required property 'smart_ag_id' is missing"
        return result

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
    def __init__(self, *, name: builtins.str) -> None:
        """Properties for defining a ``ALIYUN::SAG::ACL``.

        :param name: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "name": name,
        }

    @builtins.property
    def name(self) -> builtins.str:
        """
        :Property:

        name: Access control name.
        The length is 2-128 characters. It must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:// or https://.
        """
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return result

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
    """A ROS resource type:  ``ALIYUN::SAG::ACLRule``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ACLRuleProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::SAG::ACLRule``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(ACLRule, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAcrId")
    def attr_acr_id(self) -> typing.Any:
        """
        :Attribute: AcrId: Access control rule ID.
        """
        return jsii.get(self, "attrAcrId")


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
        acl_id: builtins.str,
        dest_cidr: builtins.str,
        dest_port_range: builtins.str,
        direction: builtins.str,
        ip_protocol: builtins.str,
        policy: builtins.str,
        source_cidr: builtins.str,
        source_port_range: builtins.str,
        description: typing.Optional[builtins.str] = None,
        priority: typing.Optional[jsii.Number] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::SAG::ACLRule``.

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
        """
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
    def acl_id(self) -> builtins.str:
        """
        :Property: aclId: Access control ID.
        """
        result = self._values.get("acl_id")
        assert result is not None, "Required property 'acl_id' is missing"
        return result

    @builtins.property
    def dest_cidr(self) -> builtins.str:
        """
        :Property: destCidr: Destination address, CIDR format and IP address range in IPv4 format.
        """
        result = self._values.get("dest_cidr")
        assert result is not None, "Required property 'dest_cidr' is missing"
        return result

    @builtins.property
    def dest_port_range(self) -> builtins.str:
        """
        :Property: destPortRange: Destination port range, 80/80.
        """
        result = self._values.get("dest_port_range")
        assert result is not None, "Required property 'dest_port_range' is missing"
        return result

    @builtins.property
    def direction(self) -> builtins.str:
        """
        :Property:

        direction: Regular direction.
        Value: in|out
        """
        result = self._values.get("direction")
        assert result is not None, "Required property 'direction' is missing"
        return result

    @builtins.property
    def ip_protocol(self) -> builtins.str:
        """
        :Property: ipProtocol: Protocol, not case sensitive.
        """
        result = self._values.get("ip_protocol")
        assert result is not None, "Required property 'ip_protocol' is missing"
        return result

    @builtins.property
    def policy(self) -> builtins.str:
        """
        :Property: policy: Access: accept|drop
        """
        result = self._values.get("policy")
        assert result is not None, "Required property 'policy' is missing"
        return result

    @builtins.property
    def source_cidr(self) -> builtins.str:
        """
        :Property: sourceCidr: Source address, CIDR format and IP address range in IPv4 format.
        """
        result = self._values.get("source_cidr")
        assert result is not None, "Required property 'source_cidr' is missing"
        return result

    @builtins.property
    def source_port_range(self) -> builtins.str:
        """
        :Property: sourcePortRange: Source port range, 80/80.
        """
        result = self._values.get("source_port_range")
        assert result is not None, "Required property 'source_port_range' is missing"
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Rule description information, ranging from 1 to 512 characters.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def priority(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        priority: Priority, ranging from 1 to 100.
        Default: 1
        """
        result = self._values.get("priority")
        return result

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
    """A ROS resource type:  ``ALIYUN::SAG::ACL``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: ACLProps,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::SAG::ACL``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Acl, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAclId")
    def attr_acl_id(self) -> typing.Any:
        """
        :Attribute: AclId: Access control set ID.
        """
        return jsii.get(self, "attrAclId")


class CloudConnectNetwork(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sag.CloudConnectNetwork",
):
    """A ROS resource type:  ``ALIYUN::SAG::CloudConnectNetwork``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Optional["CloudConnectNetworkProps"] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::SAG::CloudConnectNetwork``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(CloudConnectNetwork, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrCcnId")
    def attr_ccn_id(self) -> typing.Any:
        """
        :Attribute: CcnId: The ID of the CCN instance.
        """
        return jsii.get(self, "attrCcnId")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sag.CloudConnectNetworkProps",
    jsii_struct_bases=[],
    name_mapping={
        "description": "description",
        "is_default": "isDefault",
        "name": "name",
    },
)
class CloudConnectNetworkProps:
    def __init__(
        self,
        *,
        description: typing.Optional[builtins.str] = None,
        is_default: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        name: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::SAG::CloudConnectNetwork``.

        :param description: 
        :param is_default: 
        :param name: 
        """
        self._values: typing.Dict[str, typing.Any] = {}
        if description is not None:
            self._values["description"] = description
        if is_default is not None:
            self._values["is_default"] = is_default
        if name is not None:
            self._values["name"] = name

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        description: The description of the CCN instance.
        The description can contain 2 to 256 characters. The description cannot start with http:// or https://.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def is_default(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: isDefault: Whether is created by system
        """
        result = self._values.get("is_default")
        return result

    @builtins.property
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        name: The name of the CCN instance.
        The name can contain 2 to 128 characters including a-z, A-Z, 0-9, chinese, underlines, and hyphens. The name must start with an English letter, but cannot start with http:// or https://.
        """
        result = self._values.get("name")
        return result

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
    """A ROS resource type:  ``ALIYUN::SAG::GrantCcnToCen``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "GrantCcnToCenProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::SAG::GrantCcnToCen``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(GrantCcnToCen, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrCcnInstanceId")
    def attr_ccn_instance_id(self) -> typing.Any:
        """
        :Attribute: CcnInstanceId: The ID of the CCN instance.
        """
        return jsii.get(self, "attrCcnInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrCenInstanceId")
    def attr_cen_instance_id(self) -> typing.Any:
        """
        :Attribute: CenInstanceId: The ID of the CEN instance.
        """
        return jsii.get(self, "attrCenInstanceId")


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
        ccn_instance_id: builtins.str,
        cen_instance_id: builtins.str,
        cen_uid: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::SAG::GrantCcnToCen``.

        :param ccn_instance_id: 
        :param cen_instance_id: 
        :param cen_uid: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "ccn_instance_id": ccn_instance_id,
            "cen_instance_id": cen_instance_id,
            "cen_uid": cen_uid,
        }

    @builtins.property
    def ccn_instance_id(self) -> builtins.str:
        """
        :Property: ccnInstanceId: The ID of the CCN instance.
        """
        result = self._values.get("ccn_instance_id")
        assert result is not None, "Required property 'ccn_instance_id' is missing"
        return result

    @builtins.property
    def cen_instance_id(self) -> builtins.str:
        """
        :Property: cenInstanceId: The ID of the CEN instance.
        """
        result = self._values.get("cen_instance_id")
        assert result is not None, "Required property 'cen_instance_id' is missing"
        return result

    @builtins.property
    def cen_uid(self) -> builtins.str:
        """
        :Property: cenUid: The ID of the account to which the CEN instance belongs.
        """
        result = self._values.get("cen_uid")
        assert result is not None, "Required property 'cen_uid' is missing"
        return result

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
    """A ROS template type:  ``ALIYUN::SAG::ACL``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosACLProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::SAG::ACL``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosACL, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrAclId")
    def attr_acl_id(self) -> typing.Any:
        """
        :Attribute: AclId: Access control set ID.
        """
        return jsii.get(self, "attrAclId")

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
        :Property:

        name: Access control name.
        The length is 2-128 characters. It must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:// or https://.
        """
        return jsii.get(self, "name")

    @name.setter # type: ignore
    def name(self, value: builtins.str) -> None:
        jsii.set(self, "name", value)


class RosACLAssociation(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sag.RosACLAssociation",
):
    """A ROS template type:  ``ALIYUN::SAG::ACLAssociation``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosACLAssociationProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::SAG::ACLAssociation``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosACLAssociation, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="aclId")
    def acl_id(self) -> builtins.str:
        """
        :Property: aclId: Access control ID.
        """
        return jsii.get(self, "aclId")

    @acl_id.setter # type: ignore
    def acl_id(self, value: builtins.str) -> None:
        jsii.set(self, "aclId", value)

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
    @jsii.member(jsii_name="smartAgId")
    def smart_ag_id(self) -> builtins.str:
        """
        :Property: smartAgId: An intelligent gateway instance that needs to bind access control.
        """
        return jsii.get(self, "smartAgId")

    @smart_ag_id.setter # type: ignore
    def smart_ag_id(self, value: builtins.str) -> None:
        jsii.set(self, "smartAgId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sag.RosACLAssociationProps",
    jsii_struct_bases=[],
    name_mapping={"acl_id": "aclId", "smart_ag_id": "smartAgId"},
)
class RosACLAssociationProps:
    def __init__(self, *, acl_id: builtins.str, smart_ag_id: builtins.str) -> None:
        """Properties for defining a ``ALIYUN::SAG::ACLAssociation``.

        :param acl_id: 
        :param smart_ag_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "acl_id": acl_id,
            "smart_ag_id": smart_ag_id,
        }

    @builtins.property
    def acl_id(self) -> builtins.str:
        """
        :Property: aclId: Access control ID.
        """
        result = self._values.get("acl_id")
        assert result is not None, "Required property 'acl_id' is missing"
        return result

    @builtins.property
    def smart_ag_id(self) -> builtins.str:
        """
        :Property: smartAgId: An intelligent gateway instance that needs to bind access control.
        """
        result = self._values.get("smart_ag_id")
        assert result is not None, "Required property 'smart_ag_id' is missing"
        return result

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
    def __init__(self, *, name: builtins.str) -> None:
        """Properties for defining a ``ALIYUN::SAG::ACL``.

        :param name: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "name": name,
        }

    @builtins.property
    def name(self) -> builtins.str:
        """
        :Property:

        name: Access control name.
        The length is 2-128 characters. It must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:// or https://.
        """
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return result

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
    """A ROS template type:  ``ALIYUN::SAG::ACLRule``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosACLRuleProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::SAG::ACLRule``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosACLRule, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrAcrId")
    def attr_acr_id(self) -> typing.Any:
        """
        :Attribute: AcrId: Access control rule ID.
        """
        return jsii.get(self, "attrAcrId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="aclId")
    def acl_id(self) -> builtins.str:
        """
        :Property: aclId: Access control ID.
        """
        return jsii.get(self, "aclId")

    @acl_id.setter # type: ignore
    def acl_id(self, value: builtins.str) -> None:
        jsii.set(self, "aclId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="destCidr")
    def dest_cidr(self) -> builtins.str:
        """
        :Property: destCidr: Destination address, CIDR format and IP address range in IPv4 format.
        """
        return jsii.get(self, "destCidr")

    @dest_cidr.setter # type: ignore
    def dest_cidr(self, value: builtins.str) -> None:
        jsii.set(self, "destCidr", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="destPortRange")
    def dest_port_range(self) -> builtins.str:
        """
        :Property: destPortRange: Destination port range, 80/80.
        """
        return jsii.get(self, "destPortRange")

    @dest_port_range.setter # type: ignore
    def dest_port_range(self, value: builtins.str) -> None:
        jsii.set(self, "destPortRange", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="direction")
    def direction(self) -> builtins.str:
        """
        :Property:

        direction: Regular direction.
        Value: in|out
        """
        return jsii.get(self, "direction")

    @direction.setter # type: ignore
    def direction(self, value: builtins.str) -> None:
        jsii.set(self, "direction", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="ipProtocol")
    def ip_protocol(self) -> builtins.str:
        """
        :Property: ipProtocol: Protocol, not case sensitive.
        """
        return jsii.get(self, "ipProtocol")

    @ip_protocol.setter # type: ignore
    def ip_protocol(self, value: builtins.str) -> None:
        jsii.set(self, "ipProtocol", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="policy")
    def policy(self) -> builtins.str:
        """
        :Property: policy: Access: accept|drop
        """
        return jsii.get(self, "policy")

    @policy.setter # type: ignore
    def policy(self, value: builtins.str) -> None:
        jsii.set(self, "policy", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="sourceCidr")
    def source_cidr(self) -> builtins.str:
        """
        :Property: sourceCidr: Source address, CIDR format and IP address range in IPv4 format.
        """
        return jsii.get(self, "sourceCidr")

    @source_cidr.setter # type: ignore
    def source_cidr(self, value: builtins.str) -> None:
        jsii.set(self, "sourceCidr", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="sourcePortRange")
    def source_port_range(self) -> builtins.str:
        """
        :Property: sourcePortRange: Source port range, 80/80.
        """
        return jsii.get(self, "sourcePortRange")

    @source_port_range.setter # type: ignore
    def source_port_range(self, value: builtins.str) -> None:
        jsii.set(self, "sourcePortRange", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Rule description information, ranging from 1 to 512 characters.
        """
        return jsii.get(self, "description")

    @description.setter # type: ignore
    def description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="priority")
    def priority(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        priority: Priority, ranging from 1 to 100.
        Default: 1
        """
        return jsii.get(self, "priority")

    @priority.setter # type: ignore
    def priority(self, value: typing.Optional[jsii.Number]) -> None:
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
        acl_id: builtins.str,
        dest_cidr: builtins.str,
        dest_port_range: builtins.str,
        direction: builtins.str,
        ip_protocol: builtins.str,
        policy: builtins.str,
        source_cidr: builtins.str,
        source_port_range: builtins.str,
        description: typing.Optional[builtins.str] = None,
        priority: typing.Optional[jsii.Number] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::SAG::ACLRule``.

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
        """
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
    def acl_id(self) -> builtins.str:
        """
        :Property: aclId: Access control ID.
        """
        result = self._values.get("acl_id")
        assert result is not None, "Required property 'acl_id' is missing"
        return result

    @builtins.property
    def dest_cidr(self) -> builtins.str:
        """
        :Property: destCidr: Destination address, CIDR format and IP address range in IPv4 format.
        """
        result = self._values.get("dest_cidr")
        assert result is not None, "Required property 'dest_cidr' is missing"
        return result

    @builtins.property
    def dest_port_range(self) -> builtins.str:
        """
        :Property: destPortRange: Destination port range, 80/80.
        """
        result = self._values.get("dest_port_range")
        assert result is not None, "Required property 'dest_port_range' is missing"
        return result

    @builtins.property
    def direction(self) -> builtins.str:
        """
        :Property:

        direction: Regular direction.
        Value: in|out
        """
        result = self._values.get("direction")
        assert result is not None, "Required property 'direction' is missing"
        return result

    @builtins.property
    def ip_protocol(self) -> builtins.str:
        """
        :Property: ipProtocol: Protocol, not case sensitive.
        """
        result = self._values.get("ip_protocol")
        assert result is not None, "Required property 'ip_protocol' is missing"
        return result

    @builtins.property
    def policy(self) -> builtins.str:
        """
        :Property: policy: Access: accept|drop
        """
        result = self._values.get("policy")
        assert result is not None, "Required property 'policy' is missing"
        return result

    @builtins.property
    def source_cidr(self) -> builtins.str:
        """
        :Property: sourceCidr: Source address, CIDR format and IP address range in IPv4 format.
        """
        result = self._values.get("source_cidr")
        assert result is not None, "Required property 'source_cidr' is missing"
        return result

    @builtins.property
    def source_port_range(self) -> builtins.str:
        """
        :Property: sourcePortRange: Source port range, 80/80.
        """
        result = self._values.get("source_port_range")
        assert result is not None, "Required property 'source_port_range' is missing"
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Rule description information, ranging from 1 to 512 characters.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def priority(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        priority: Priority, ranging from 1 to 100.
        Default: 1
        """
        result = self._values.get("priority")
        return result

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
    """A ROS template type:  ``ALIYUN::SAG::CloudConnectNetwork``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosCloudConnectNetworkProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::SAG::CloudConnectNetwork``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosCloudConnectNetwork, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrCcnId")
    def attr_ccn_id(self) -> typing.Any:
        """
        :Attribute: CcnId: The ID of the CCN instance.
        """
        return jsii.get(self, "attrCcnId")

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
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        description: The description of the CCN instance.
        The description can contain 2 to 256 characters. The description cannot start with http:// or https://.
        """
        return jsii.get(self, "description")

    @description.setter # type: ignore
    def description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="isDefault")
    def is_default(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: isDefault: Whether is created by system
        """
        return jsii.get(self, "isDefault")

    @is_default.setter # type: ignore
    def is_default(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "isDefault", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        name: The name of the CCN instance.
        The name can contain 2 to 128 characters including a-z, A-Z, 0-9, chinese, underlines, and hyphens. The name must start with an English letter, but cannot start with http:// or https://.
        """
        return jsii.get(self, "name")

    @name.setter # type: ignore
    def name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "name", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sag.RosCloudConnectNetworkProps",
    jsii_struct_bases=[],
    name_mapping={
        "description": "description",
        "is_default": "isDefault",
        "name": "name",
    },
)
class RosCloudConnectNetworkProps:
    def __init__(
        self,
        *,
        description: typing.Optional[builtins.str] = None,
        is_default: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        name: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::SAG::CloudConnectNetwork``.

        :param description: 
        :param is_default: 
        :param name: 
        """
        self._values: typing.Dict[str, typing.Any] = {}
        if description is not None:
            self._values["description"] = description
        if is_default is not None:
            self._values["is_default"] = is_default
        if name is not None:
            self._values["name"] = name

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        description: The description of the CCN instance.
        The description can contain 2 to 256 characters. The description cannot start with http:// or https://.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def is_default(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: isDefault: Whether is created by system
        """
        result = self._values.get("is_default")
        return result

    @builtins.property
    def name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        name: The name of the CCN instance.
        The name can contain 2 to 128 characters including a-z, A-Z, 0-9, chinese, underlines, and hyphens. The name must start with an English letter, but cannot start with http:// or https://.
        """
        result = self._values.get("name")
        return result

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
    """A ROS template type:  ``ALIYUN::SAG::GrantCcnToCen``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosGrantCcnToCenProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::SAG::GrantCcnToCen``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosGrantCcnToCen, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrCcnInstanceId")
    def attr_ccn_instance_id(self) -> typing.Any:
        """
        :Attribute: CcnInstanceId: The ID of the CCN instance.
        """
        return jsii.get(self, "attrCcnInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrCenInstanceId")
    def attr_cen_instance_id(self) -> typing.Any:
        """
        :Attribute: CenInstanceId: The ID of the CEN instance.
        """
        return jsii.get(self, "attrCenInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="ccnInstanceId")
    def ccn_instance_id(self) -> builtins.str:
        """
        :Property: ccnInstanceId: The ID of the CCN instance.
        """
        return jsii.get(self, "ccnInstanceId")

    @ccn_instance_id.setter # type: ignore
    def ccn_instance_id(self, value: builtins.str) -> None:
        jsii.set(self, "ccnInstanceId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="cenInstanceId")
    def cen_instance_id(self) -> builtins.str:
        """
        :Property: cenInstanceId: The ID of the CEN instance.
        """
        return jsii.get(self, "cenInstanceId")

    @cen_instance_id.setter # type: ignore
    def cen_instance_id(self, value: builtins.str) -> None:
        jsii.set(self, "cenInstanceId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="cenUid")
    def cen_uid(self) -> builtins.str:
        """
        :Property: cenUid: The ID of the account to which the CEN instance belongs.
        """
        return jsii.get(self, "cenUid")

    @cen_uid.setter # type: ignore
    def cen_uid(self, value: builtins.str) -> None:
        jsii.set(self, "cenUid", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
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
        ccn_instance_id: builtins.str,
        cen_instance_id: builtins.str,
        cen_uid: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::SAG::GrantCcnToCen``.

        :param ccn_instance_id: 
        :param cen_instance_id: 
        :param cen_uid: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "ccn_instance_id": ccn_instance_id,
            "cen_instance_id": cen_instance_id,
            "cen_uid": cen_uid,
        }

    @builtins.property
    def ccn_instance_id(self) -> builtins.str:
        """
        :Property: ccnInstanceId: The ID of the CCN instance.
        """
        result = self._values.get("ccn_instance_id")
        assert result is not None, "Required property 'ccn_instance_id' is missing"
        return result

    @builtins.property
    def cen_instance_id(self) -> builtins.str:
        """
        :Property: cenInstanceId: The ID of the CEN instance.
        """
        result = self._values.get("cen_instance_id")
        assert result is not None, "Required property 'cen_instance_id' is missing"
        return result

    @builtins.property
    def cen_uid(self) -> builtins.str:
        """
        :Property: cenUid: The ID of the account to which the CEN instance belongs.
        """
        result = self._values.get("cen_uid")
        assert result is not None, "Required property 'cen_uid' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosGrantCcnToCenProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSmartAccessGatewayBinding(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sag.RosSmartAccessGatewayBinding",
):
    """A ROS template type:  ``ALIYUN::SAG::SmartAccessGatewayBinding``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosSmartAccessGatewayBindingProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::SAG::SmartAccessGatewayBinding``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosSmartAccessGatewayBinding, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrSmartAgId")
    def attr_smart_ag_id(self) -> typing.Any:
        """
        :Attribute: SmartAGId: The ID of the Smart Access Gateway instance.
        """
        return jsii.get(self, "attrSmartAgId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="ccnId")
    def ccn_id(self) -> builtins.str:
        """
        :Property: ccnId: The ID of the CCN instance to bind.
        """
        return jsii.get(self, "ccnId")

    @ccn_id.setter # type: ignore
    def ccn_id(self, value: builtins.str) -> None:
        jsii.set(self, "ccnId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="smartAgId")
    def smart_ag_id(self) -> builtins.str:
        """
        :Property: smartAgId: The ID of the Smart Access Gateway instance.
        """
        return jsii.get(self, "smartAgId")

    @smart_ag_id.setter # type: ignore
    def smart_ag_id(self, value: builtins.str) -> None:
        jsii.set(self, "smartAgId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sag.RosSmartAccessGatewayBindingProps",
    jsii_struct_bases=[],
    name_mapping={"ccn_id": "ccnId", "smart_ag_id": "smartAgId"},
)
class RosSmartAccessGatewayBindingProps:
    def __init__(self, *, ccn_id: builtins.str, smart_ag_id: builtins.str) -> None:
        """Properties for defining a ``ALIYUN::SAG::SmartAccessGatewayBinding``.

        :param ccn_id: 
        :param smart_ag_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "ccn_id": ccn_id,
            "smart_ag_id": smart_ag_id,
        }

    @builtins.property
    def ccn_id(self) -> builtins.str:
        """
        :Property: ccnId: The ID of the CCN instance to bind.
        """
        result = self._values.get("ccn_id")
        assert result is not None, "Required property 'ccn_id' is missing"
        return result

    @builtins.property
    def smart_ag_id(self) -> builtins.str:
        """
        :Property: smartAgId: The ID of the Smart Access Gateway instance.
        """
        result = self._values.get("smart_ag_id")
        assert result is not None, "Required property 'smart_ag_id' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSmartAccessGatewayBindingProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class SmartAccessGatewayBinding(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sag.SmartAccessGatewayBinding",
):
    """A ROS resource type:  ``ALIYUN::SAG::SmartAccessGatewayBinding``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "SmartAccessGatewayBindingProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::SAG::SmartAccessGatewayBinding``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(SmartAccessGatewayBinding, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSmartAgId")
    def attr_smart_ag_id(self) -> typing.Any:
        """
        :Attribute: SmartAGId: The ID of the Smart Access Gateway instance.
        """
        return jsii.get(self, "attrSmartAgId")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sag.SmartAccessGatewayBindingProps",
    jsii_struct_bases=[],
    name_mapping={"ccn_id": "ccnId", "smart_ag_id": "smartAgId"},
)
class SmartAccessGatewayBindingProps:
    def __init__(self, *, ccn_id: builtins.str, smart_ag_id: builtins.str) -> None:
        """Properties for defining a ``ALIYUN::SAG::SmartAccessGatewayBinding``.

        :param ccn_id: 
        :param smart_ag_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "ccn_id": ccn_id,
            "smart_ag_id": smart_ag_id,
        }

    @builtins.property
    def ccn_id(self) -> builtins.str:
        """
        :Property: ccnId: The ID of the CCN instance to bind.
        """
        result = self._values.get("ccn_id")
        assert result is not None, "Required property 'ccn_id' is missing"
        return result

    @builtins.property
    def smart_ag_id(self) -> builtins.str:
        """
        :Property: smartAgId: The ID of the Smart Access Gateway instance.
        """
        result = self._values.get("smart_ag_id")
        assert result is not None, "Required property 'smart_ag_id' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SmartAccessGatewayBindingProps(%s)" % ", ".join(
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
    "RosSmartAccessGatewayBinding",
    "RosSmartAccessGatewayBindingProps",
    "SmartAccessGatewayBinding",
    "SmartAccessGatewayBindingProps",
]

publication.publish()
