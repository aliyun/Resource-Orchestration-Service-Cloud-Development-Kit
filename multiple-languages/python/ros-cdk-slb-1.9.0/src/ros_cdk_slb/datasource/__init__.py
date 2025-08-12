import abc
import builtins
import datetime
import enum
import typing

import jsii
import publication
import typing_extensions

from typeguard import check_type

from .._jsii import *

import ros_cdk_core as _ros_cdk_core_7adfd82f


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.datasource.AccessControlProps",
    jsii_struct_bases=[],
    name_mapping={"acl_id": "aclId", "refresh_options": "refreshOptions"},
)
class AccessControlProps:
    def __init__(
        self,
        *,
        acl_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``AccessControl``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-accesscontrol

        :param acl_id: Property aclId: The ID of the ACL.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1b4208a2dd1bc6054bcde389ddff70ca085d818979364242a214f9904c60659c)
            check_type(argname="argument acl_id", value=acl_id, expected_type=type_hints["acl_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "acl_id": acl_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def acl_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property aclId: The ID of the ACL.'''
        result = self._values.get("acl_id")
        assert result is not None, "Required property 'acl_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AccessControlProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.datasource.AccessControlsProps",
    jsii_struct_bases=[],
    name_mapping={
        "acl_name": "aclName",
        "address_ip_version": "addressIpVersion",
        "refresh_options": "refreshOptions",
        "resource_group_id": "resourceGroupId",
    },
)
class AccessControlsProps:
    def __init__(
        self,
        *,
        acl_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        address_ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``AccessControls``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-accesscontrols

        :param acl_name: Property aclName: The name of the network ACL.
        :param address_ip_version: Property addressIpVersion: The IP version. Valid values: ipv4 and ipv6.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group to which the network ACL belongs.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__84a48742341036f352a00e9248dbd7c6b28eb634e643246824039507d476ef36)
            check_type(argname="argument acl_name", value=acl_name, expected_type=type_hints["acl_name"])
            check_type(argname="argument address_ip_version", value=address_ip_version, expected_type=type_hints["address_ip_version"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if acl_name is not None:
            self._values["acl_name"] = acl_name
        if address_ip_version is not None:
            self._values["address_ip_version"] = address_ip_version
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def acl_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property aclName: The name of the network ACL.'''
        result = self._values.get("acl_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def address_ip_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property addressIpVersion: The IP version.

        Valid values: ipv4 and ipv6.
        '''
        result = self._values.get("address_ip_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group to which the network ACL belongs.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AccessControlsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.datasource.DomainExtensionProps",
    jsii_struct_bases=[],
    name_mapping={
        "domain_extension_id": "domainExtensionId",
        "refresh_options": "refreshOptions",
    },
)
class DomainExtensionProps:
    def __init__(
        self,
        *,
        domain_extension_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DomainExtension``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-domainextension

        :param domain_extension_id: Property domainExtensionId: The ID of the additional certificate.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f5ae3443f0bc5640dee11b6a5b51a519d10ab2fb886e5491bd3c426ef5a91d45)
            check_type(argname="argument domain_extension_id", value=domain_extension_id, expected_type=type_hints["domain_extension_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "domain_extension_id": domain_extension_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def domain_extension_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property domainExtensionId: The ID of the additional certificate.'''
        result = self._values.get("domain_extension_id")
        assert result is not None, "Required property 'domain_extension_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DomainExtensionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.datasource.DomainExtensionsProps",
    jsii_struct_bases=[],
    name_mapping={
        "listener_port": "listenerPort",
        "load_balancer_id": "loadBalancerId",
        "domain_extension_id": "domainExtensionId",
        "refresh_options": "refreshOptions",
    },
)
class DomainExtensionsProps:
    def __init__(
        self,
        *,
        listener_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        domain_extension_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DomainExtensions``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-domainextensions

        :param listener_port: Property listenerPort: The frontend port of the HTTPS listener that is configured for the Classic Load Balancer (CLB) instance. Valid values: 1 to 65535.
        :param load_balancer_id: Property loadBalancerId: The ID of the CLB instance.
        :param domain_extension_id: Property domainExtensionId: The ID of the additional certificate.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9c8a726a47931d4c3db4d1b49045a5a1033fb60c6e6797181b2f7bcf129f3ca0)
            check_type(argname="argument listener_port", value=listener_port, expected_type=type_hints["listener_port"])
            check_type(argname="argument load_balancer_id", value=load_balancer_id, expected_type=type_hints["load_balancer_id"])
            check_type(argname="argument domain_extension_id", value=domain_extension_id, expected_type=type_hints["domain_extension_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "listener_port": listener_port,
            "load_balancer_id": load_balancer_id,
        }
        if domain_extension_id is not None:
            self._values["domain_extension_id"] = domain_extension_id
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def listener_port(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property listenerPort: The frontend port of the HTTPS listener that is configured for the Classic Load Balancer (CLB) instance.

        Valid values: 1 to 65535.
        '''
        result = self._values.get("listener_port")
        assert result is not None, "Required property 'listener_port' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property loadBalancerId: The ID of the CLB instance.'''
        result = self._values.get("load_balancer_id")
        assert result is not None, "Required property 'load_balancer_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def domain_extension_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property domainExtensionId: The ID of the additional certificate.'''
        result = self._values.get("domain_extension_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DomainExtensionsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-slb.datasource.IAccessControl")
class IAccessControl(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``AccessControl``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAclEntries")
    def attr_acl_entries(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AclEntries: The IP entries that you want to remove from the network ACL.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAclId")
    def attr_acl_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AclId: The ID of the ACL.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAclName")
    def attr_acl_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AclName: The ACL name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAddressIpVersion")
    def attr_address_ip_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AddressIpVersion: The IP version.

        Valid values: ipv4 and ipv6.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRelatedListeners")
    def attr_related_listeners(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RelatedListeners: The listeners that are associated with the network ACL.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The resource group ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Tags: The tags of the resource.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AccessControlProps:
        ...


class _IAccessControlProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``AccessControl``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-slb.datasource.IAccessControl"

    @builtins.property
    @jsii.member(jsii_name="attrAclEntries")
    def attr_acl_entries(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AclEntries: The IP entries that you want to remove from the network ACL.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAclEntries"))

    @builtins.property
    @jsii.member(jsii_name="attrAclId")
    def attr_acl_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AclId: The ID of the ACL.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAclId"))

    @builtins.property
    @jsii.member(jsii_name="attrAclName")
    def attr_acl_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AclName: The ACL name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAclName"))

    @builtins.property
    @jsii.member(jsii_name="attrAddressIpVersion")
    def attr_address_ip_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AddressIpVersion: The IP version.

        Valid values: ipv4 and ipv6.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAddressIpVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrRelatedListeners")
    def attr_related_listeners(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RelatedListeners: The listeners that are associated with the network ACL.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRelatedListeners"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The resource group ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Tags: The tags of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AccessControlProps:
        return typing.cast(AccessControlProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IAccessControl).__jsii_proxy_class__ = lambda : _IAccessControlProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-slb.datasource.IAccessControls")
class IAccessControls(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``AccessControls``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAccessControls")
    def attr_access_controls(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AccessControls: The list of access controls.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAclIds")
    def attr_acl_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AclIds: The list of acl IDs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AccessControlsProps:
        ...


class _IAccessControlsProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``AccessControls``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-slb.datasource.IAccessControls"

    @builtins.property
    @jsii.member(jsii_name="attrAccessControls")
    def attr_access_controls(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AccessControls: The list of access controls.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAccessControls"))

    @builtins.property
    @jsii.member(jsii_name="attrAclIds")
    def attr_acl_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AclIds: The list of acl IDs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAclIds"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AccessControlsProps:
        return typing.cast(AccessControlsProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IAccessControls).__jsii_proxy_class__ = lambda : _IAccessControlsProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-slb.datasource.IDomainExtension")
class IDomainExtension(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``DomainExtension``.'''

    @builtins.property
    @jsii.member(jsii_name="attrDomain")
    def attr_domain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Domain: The domain name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDomainExtensionId")
    def attr_domain_extension_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainExtensionId: The ID of the additional certificate.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrListenerPort")
    def attr_listener_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ListenerPort: The frontend port of the HTTPS listener that is configured for the SLB instance.

        Valid values: 1 to 65535.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerId")
    def attr_load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LoadBalancerId: The ID of the SLB instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrServerCertificateId")
    def attr_server_certificate_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServerCertificateId: The ID of the server certificate that is used by the domain name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DomainExtensionProps:
        ...


class _IDomainExtensionProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``DomainExtension``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-slb.datasource.IDomainExtension"

    @builtins.property
    @jsii.member(jsii_name="attrDomain")
    def attr_domain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Domain: The domain name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainExtensionId")
    def attr_domain_extension_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainExtensionId: The ID of the additional certificate.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDomainExtensionId"))

    @builtins.property
    @jsii.member(jsii_name="attrListenerPort")
    def attr_listener_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ListenerPort: The frontend port of the HTTPS listener that is configured for the SLB instance.

        Valid values: 1 to 65535.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrListenerPort"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerId")
    def attr_load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LoadBalancerId: The ID of the SLB instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLoadBalancerId"))

    @builtins.property
    @jsii.member(jsii_name="attrServerCertificateId")
    def attr_server_certificate_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServerCertificateId: The ID of the server certificate that is used by the domain name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrServerCertificateId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DomainExtensionProps:
        return typing.cast(DomainExtensionProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IDomainExtension).__jsii_proxy_class__ = lambda : _IDomainExtensionProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-slb.datasource.IDomainExtensions")
class IDomainExtensions(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``DomainExtensions``.'''

    @builtins.property
    @jsii.member(jsii_name="attrDomainExtensionIds")
    def attr_domain_extension_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainExtensionIds: The list of domain extension IDs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDomainExtensions")
    def attr_domain_extensions(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainExtensions: The list of domain extensions.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DomainExtensionsProps:
        ...


class _IDomainExtensionsProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``DomainExtensions``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-slb.datasource.IDomainExtensions"

    @builtins.property
    @jsii.member(jsii_name="attrDomainExtensionIds")
    def attr_domain_extension_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainExtensionIds: The list of domain extension IDs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDomainExtensionIds"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainExtensions")
    def attr_domain_extensions(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainExtensions: The list of domain extensions.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDomainExtensions"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DomainExtensionsProps:
        return typing.cast(DomainExtensionsProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IDomainExtensions).__jsii_proxy_class__ = lambda : _IDomainExtensionsProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-slb.datasource.ILoadBalancer")
class ILoadBalancer(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``LoadBalancer``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAddress")
    def attr_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Address: The service IP address of the CLB instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAddressIpVersion")
    def attr_address_ip_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AddressIpVersion: The version of the IP address.

        Valid values: ipv4 and ipv6.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAddressType")
    def attr_address_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AddressType: The address type of the CLB instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAutoReleaseTime")
    def attr_auto_release_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AutoReleaseTime: The timestamp generated when the CLB instance is released.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrBackendServers")
    def attr_backend_servers(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackendServers: The backend servers of the CLB instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrBandwidth")
    def attr_bandwidth(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Bandwidth: The maximum bandwidth of the Internet-facing CLB instance that is billed on a pay-by-bandwidth basis.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The time when the CLB instance was created.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCreateTimeStamp")
    def attr_create_time_stamp(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTimeStamp: The timestamp generated when the CA certificate is uploaded.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDeleteProtection")
    def attr_delete_protection(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DeleteProtection: Indicates whether deletion protection is enabled for the CLB instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEndTime")
    def attr_end_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EndTime: The time when the CLB instance expires.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEndTimeStamp")
    def attr_end_time_stamp(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EndTimeStamp: The timestamp that indicates the expiration time of the CLB instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrInstanceChargeType")
    def attr_instance_charge_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceChargeType: Instance billing method.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrInternetChargeType")
    def attr_internet_charge_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InternetChargeType: The metering method of the Internet-facing CLB instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrListenerPortsAndProtocal")
    def attr_listener_ports_and_protocal(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ListenerPortsAndProtocal: The ports or protocols of the listeners.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrListenerPortsAndProtocol")
    def attr_listener_ports_and_protocol(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ListenerPortsAndProtocol: The ports or protocols of the listeners.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerId")
    def attr_load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LoadBalancerId: The CLB instance ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerName")
    def attr_load_balancer_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LoadBalancerName: The name of the CLB instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerSpec")
    def attr_load_balancer_spec(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LoadBalancerSpec: The specification of the CLB instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMasterZoneId")
    def attr_master_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MasterZoneId: The ID of the primary zone to which the CLB instance belongs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrModificationProtectionReason")
    def attr_modification_protection_reason(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ModificationProtectionReason: The reason why the configuration read-only mode is enabled.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrModificationProtectionStatus")
    def attr_modification_protection_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ModificationProtectionStatus: Load balancing modifies the protection state.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrNetworkType")
    def attr_network_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NetworkType: The network type of the CLB instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PaymentType: Load balancing instance payment type.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRegionIdAlias")
    def attr_region_id_alias(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RegionIdAlias: The alias of the region to which the CLB instance belongs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRenewalCycUnit")
    def attr_renewal_cyc_unit(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RenewalCycUnit: The auto-renewal cycle.

        Valid values: Year and Month. Default value: Month.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRenewalDuration")
    def attr_renewal_duration(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RenewalDuration: The auto-renewal duration.

        This parameter is valid only if RenewalStatus is set to AutoRenewal.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRenewalStatus")
    def attr_renewal_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RenewalStatus: Indicates whether auto-renewal is enabled.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The resource group ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSlaveZoneId")
    def attr_slave_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SlaveZoneId: The ID of the secondary zone to which the CLB instance belongs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Tags: The tags of the CLB instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcId: The ID of the virtual private cloud (VPC) where the internal-facing CLB instance is deployed.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VSwitchId: The ID of the vSwitch to which the internal-facing CLB instance belongs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "LoadBalancerProps":
        ...


class _ILoadBalancerProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``LoadBalancer``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-slb.datasource.ILoadBalancer"

    @builtins.property
    @jsii.member(jsii_name="attrAddress")
    def attr_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Address: The service IP address of the CLB instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrAddressIpVersion")
    def attr_address_ip_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AddressIpVersion: The version of the IP address.

        Valid values: ipv4 and ipv6.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAddressIpVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrAddressType")
    def attr_address_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AddressType: The address type of the CLB instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAddressType"))

    @builtins.property
    @jsii.member(jsii_name="attrAutoReleaseTime")
    def attr_auto_release_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AutoReleaseTime: The timestamp generated when the CLB instance is released.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAutoReleaseTime"))

    @builtins.property
    @jsii.member(jsii_name="attrBackendServers")
    def attr_backend_servers(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackendServers: The backend servers of the CLB instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBackendServers"))

    @builtins.property
    @jsii.member(jsii_name="attrBandwidth")
    def attr_bandwidth(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Bandwidth: The maximum bandwidth of the Internet-facing CLB instance that is billed on a pay-by-bandwidth basis.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBandwidth"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The time when the CLB instance was created.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTimeStamp")
    def attr_create_time_stamp(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTimeStamp: The timestamp generated when the CA certificate is uploaded.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTimeStamp"))

    @builtins.property
    @jsii.member(jsii_name="attrDeleteProtection")
    def attr_delete_protection(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DeleteProtection: Indicates whether deletion protection is enabled for the CLB instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDeleteProtection"))

    @builtins.property
    @jsii.member(jsii_name="attrEndTime")
    def attr_end_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EndTime: The time when the CLB instance expires.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEndTime"))

    @builtins.property
    @jsii.member(jsii_name="attrEndTimeStamp")
    def attr_end_time_stamp(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EndTimeStamp: The timestamp that indicates the expiration time of the CLB instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEndTimeStamp"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceChargeType")
    def attr_instance_charge_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceChargeType: Instance billing method.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceChargeType"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetChargeType")
    def attr_internet_charge_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InternetChargeType: The metering method of the Internet-facing CLB instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInternetChargeType"))

    @builtins.property
    @jsii.member(jsii_name="attrListenerPortsAndProtocal")
    def attr_listener_ports_and_protocal(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ListenerPortsAndProtocal: The ports or protocols of the listeners.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrListenerPortsAndProtocal"))

    @builtins.property
    @jsii.member(jsii_name="attrListenerPortsAndProtocol")
    def attr_listener_ports_and_protocol(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ListenerPortsAndProtocol: The ports or protocols of the listeners.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrListenerPortsAndProtocol"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerId")
    def attr_load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LoadBalancerId: The CLB instance ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLoadBalancerId"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerName")
    def attr_load_balancer_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LoadBalancerName: The name of the CLB instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLoadBalancerName"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerSpec")
    def attr_load_balancer_spec(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LoadBalancerSpec: The specification of the CLB instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLoadBalancerSpec"))

    @builtins.property
    @jsii.member(jsii_name="attrMasterZoneId")
    def attr_master_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MasterZoneId: The ID of the primary zone to which the CLB instance belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMasterZoneId"))

    @builtins.property
    @jsii.member(jsii_name="attrModificationProtectionReason")
    def attr_modification_protection_reason(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ModificationProtectionReason: The reason why the configuration read-only mode is enabled.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrModificationProtectionReason"))

    @builtins.property
    @jsii.member(jsii_name="attrModificationProtectionStatus")
    def attr_modification_protection_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ModificationProtectionStatus: Load balancing modifies the protection state.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrModificationProtectionStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrNetworkType")
    def attr_network_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NetworkType: The network type of the CLB instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNetworkType"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PaymentType: Load balancing instance payment type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrRegionIdAlias")
    def attr_region_id_alias(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RegionIdAlias: The alias of the region to which the CLB instance belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRegionIdAlias"))

    @builtins.property
    @jsii.member(jsii_name="attrRenewalCycUnit")
    def attr_renewal_cyc_unit(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RenewalCycUnit: The auto-renewal cycle.

        Valid values: Year and Month. Default value: Month.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRenewalCycUnit"))

    @builtins.property
    @jsii.member(jsii_name="attrRenewalDuration")
    def attr_renewal_duration(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RenewalDuration: The auto-renewal duration.

        This parameter is valid only if RenewalStatus is set to AutoRenewal.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRenewalDuration"))

    @builtins.property
    @jsii.member(jsii_name="attrRenewalStatus")
    def attr_renewal_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RenewalStatus: Indicates whether auto-renewal is enabled.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRenewalStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The resource group ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSlaveZoneId")
    def attr_slave_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SlaveZoneId: The ID of the secondary zone to which the CLB instance belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSlaveZoneId"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Tags: The tags of the CLB instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcId: The ID of the virtual private cloud (VPC) where the internal-facing CLB instance is deployed.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VSwitchId: The ID of the vSwitch to which the internal-facing CLB instance belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "LoadBalancerProps":
        return typing.cast("LoadBalancerProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ILoadBalancer).__jsii_proxy_class__ = lambda : _ILoadBalancerProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-slb.datasource.ILoadBalancerTCPListener")
class ILoadBalancerTCPListener(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``LoadBalancerTCPListener``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAclId")
    def attr_acl_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AclId: The ID of the network ACL that is associated with the listener.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAclIds")
    def attr_acl_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AclIds: The ID list of the network ACL that is associated with the listener.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAclStatus")
    def attr_acl_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AclStatus: Indicates whether access control is enabled.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAclType")
    def attr_acl_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AclType: The type of the ACL.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrBackendServerPort")
    def attr_backend_server_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackendServerPort: The backend port used by the CLB instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrBandwidth")
    def attr_bandwidth(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Bandwidth: The maximum bandwidth of the listener.

        Unit: Mbit/s.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrConnectionDrain")
    def attr_connection_drain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConnectionDrain: Indicates whether connection draining is enabled.

        If ConnectionDrain is set to on, the parameter is returned.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrConnectionDrainTimeout")
    def attr_connection_drain_timeout(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConnectionDrainTimeout: The timeout period of connection draining.

        If ConnectionDrain is set to on, the parameter is returned.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of the listener.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEstablishedTimeout")
    def attr_established_timeout(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EstablishedTimeout: The timeout period of a connection.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheck")
    def attr_health_check(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheck: Indicates whether the health check feature is enabled.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckConnectPort")
    def attr_health_check_connect_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckConnectPort: The port that is used for health checks.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckConnectTimeout")
    def attr_health_check_connect_timeout(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckConnectTimeout: The timeout period.

        Unit: seconds.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckDomain")
    def attr_health_check_domain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckDomain: The domain name that is used for health checks.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckHttpCode")
    def attr_health_check_http_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckHttpCode: The HTTP status code for a successful health check.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckInterval")
    def attr_health_check_interval(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckInterval: The interval between two consecutive health checks.

        Valid values: 1 to 50. Unit: seconds.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckMethod")
    def attr_health_check_method(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckMethod: The health check method.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckType")
    def attr_health_check_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckType: The health check method that is used by the TCP listener.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckUri")
    def attr_health_check_uri(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckUri: The URL that is used for health checks.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHealthyThreshold")
    def attr_healthy_threshold(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthyThreshold: The healthy threshold.

        The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health status is changed from fail to success. Valid values: 2 to 10.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrListenerPort")
    def attr_listener_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ListenerPort: The frontend port used by the CLB instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerId")
    def attr_load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LoadBalancerId: The ID of the CLB instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMasterSlaveServerGroupId")
    def attr_master_slave_server_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MasterSlaveServerGroupId: The ID of the primary/secondary server group that is associated with the listener.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPersistenceTimeout")
    def attr_persistence_timeout(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PersistenceTimeout: The timeout period of session persistence.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrProxyProtocolV2Enabled")
    def attr_proxy_protocol_v2_enabled(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ProxyProtocolV2Enabled: Indicates whether the Proxy protocol is used to pass client IP addresses to backend servers.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrScheduler")
    def attr_scheduler(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Scheduler: The scheduling algorithm.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSynProxy")
    def attr_syn_proxy(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SynProxy: Indicates whether the SynProxy feature of CLB is enabled for protection.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrUnhealthyThreshold")
    def attr_unhealthy_threshold(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UnhealthyThreshold: The unhealthy threshold.

        The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health status is changed from success to fail. Valid values: 2 to 10.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVServerGroupId")
    def attr_v_server_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VServerGroupId: The ID of the associated server group.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "LoadBalancerTCPListenerProps":
        ...


class _ILoadBalancerTCPListenerProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``LoadBalancerTCPListener``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-slb.datasource.ILoadBalancerTCPListener"

    @builtins.property
    @jsii.member(jsii_name="attrAclId")
    def attr_acl_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AclId: The ID of the network ACL that is associated with the listener.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAclId"))

    @builtins.property
    @jsii.member(jsii_name="attrAclIds")
    def attr_acl_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AclIds: The ID list of the network ACL that is associated with the listener.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAclIds"))

    @builtins.property
    @jsii.member(jsii_name="attrAclStatus")
    def attr_acl_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AclStatus: Indicates whether access control is enabled.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAclStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrAclType")
    def attr_acl_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AclType: The type of the ACL.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAclType"))

    @builtins.property
    @jsii.member(jsii_name="attrBackendServerPort")
    def attr_backend_server_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackendServerPort: The backend port used by the CLB instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBackendServerPort"))

    @builtins.property
    @jsii.member(jsii_name="attrBandwidth")
    def attr_bandwidth(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Bandwidth: The maximum bandwidth of the listener.

        Unit: Mbit/s.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBandwidth"))

    @builtins.property
    @jsii.member(jsii_name="attrConnectionDrain")
    def attr_connection_drain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConnectionDrain: Indicates whether connection draining is enabled.

        If ConnectionDrain is set to on, the parameter is returned.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConnectionDrain"))

    @builtins.property
    @jsii.member(jsii_name="attrConnectionDrainTimeout")
    def attr_connection_drain_timeout(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConnectionDrainTimeout: The timeout period of connection draining.

        If ConnectionDrain is set to on, the parameter is returned.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConnectionDrainTimeout"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of the listener.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrEstablishedTimeout")
    def attr_established_timeout(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EstablishedTimeout: The timeout period of a connection.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEstablishedTimeout"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheck")
    def attr_health_check(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheck: Indicates whether the health check feature is enabled.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheck"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckConnectPort")
    def attr_health_check_connect_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckConnectPort: The port that is used for health checks.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheckConnectPort"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckConnectTimeout")
    def attr_health_check_connect_timeout(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckConnectTimeout: The timeout period.

        Unit: seconds.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheckConnectTimeout"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckDomain")
    def attr_health_check_domain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckDomain: The domain name that is used for health checks.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheckDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckHttpCode")
    def attr_health_check_http_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckHttpCode: The HTTP status code for a successful health check.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheckHttpCode"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckInterval")
    def attr_health_check_interval(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckInterval: The interval between two consecutive health checks.

        Valid values: 1 to 50. Unit: seconds.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheckInterval"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckMethod")
    def attr_health_check_method(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckMethod: The health check method.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheckMethod"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckType")
    def attr_health_check_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckType: The health check method that is used by the TCP listener.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheckType"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckUri")
    def attr_health_check_uri(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckUri: The URL that is used for health checks.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheckUri"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthyThreshold")
    def attr_healthy_threshold(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthyThreshold: The healthy threshold.

        The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health status is changed from fail to success. Valid values: 2 to 10.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthyThreshold"))

    @builtins.property
    @jsii.member(jsii_name="attrListenerPort")
    def attr_listener_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ListenerPort: The frontend port used by the CLB instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrListenerPort"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerId")
    def attr_load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LoadBalancerId: The ID of the CLB instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLoadBalancerId"))

    @builtins.property
    @jsii.member(jsii_name="attrMasterSlaveServerGroupId")
    def attr_master_slave_server_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MasterSlaveServerGroupId: The ID of the primary/secondary server group that is associated with the listener.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMasterSlaveServerGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrPersistenceTimeout")
    def attr_persistence_timeout(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PersistenceTimeout: The timeout period of session persistence.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPersistenceTimeout"))

    @builtins.property
    @jsii.member(jsii_name="attrProxyProtocolV2Enabled")
    def attr_proxy_protocol_v2_enabled(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ProxyProtocolV2Enabled: Indicates whether the Proxy protocol is used to pass client IP addresses to backend servers.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrProxyProtocolV2Enabled"))

    @builtins.property
    @jsii.member(jsii_name="attrScheduler")
    def attr_scheduler(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Scheduler: The scheduling algorithm.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScheduler"))

    @builtins.property
    @jsii.member(jsii_name="attrSynProxy")
    def attr_syn_proxy(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SynProxy: Indicates whether the SynProxy feature of CLB is enabled for protection.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSynProxy"))

    @builtins.property
    @jsii.member(jsii_name="attrUnhealthyThreshold")
    def attr_unhealthy_threshold(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UnhealthyThreshold: The unhealthy threshold.

        The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health status is changed from success to fail. Valid values: 2 to 10.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUnhealthyThreshold"))

    @builtins.property
    @jsii.member(jsii_name="attrVServerGroupId")
    def attr_v_server_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VServerGroupId: The ID of the associated server group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVServerGroupId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "LoadBalancerTCPListenerProps":
        return typing.cast("LoadBalancerTCPListenerProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ILoadBalancerTCPListener).__jsii_proxy_class__ = lambda : _ILoadBalancerTCPListenerProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-slb.datasource.ILoadBalancerTCPListeners")
class ILoadBalancerTCPListeners(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``LoadBalancerTCPListeners``.'''

    @builtins.property
    @jsii.member(jsii_name="attrListenerPorts")
    def attr_listener_ports(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ListenerPorts: The list of listener ports.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerTcpListeners")
    def attr_load_balancer_tcp_listeners(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LoadBalancerTCPListeners: The list of load balancer tcp listeners.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "LoadBalancerTCPListenersProps":
        ...


class _ILoadBalancerTCPListenersProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``LoadBalancerTCPListeners``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-slb.datasource.ILoadBalancerTCPListeners"

    @builtins.property
    @jsii.member(jsii_name="attrListenerPorts")
    def attr_listener_ports(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ListenerPorts: The list of listener ports.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrListenerPorts"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerTcpListeners")
    def attr_load_balancer_tcp_listeners(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LoadBalancerTCPListeners: The list of load balancer tcp listeners.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLoadBalancerTcpListeners"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "LoadBalancerTCPListenersProps":
        return typing.cast("LoadBalancerTCPListenersProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ILoadBalancerTCPListeners).__jsii_proxy_class__ = lambda : _ILoadBalancerTCPListenersProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-slb.datasource.ILoadBalancers")
class ILoadBalancers(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``LoadBalancers``.'''

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerIds")
    def attr_load_balancer_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LoadBalancerIds: The list of load balancer IDs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancers")
    def attr_load_balancers(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LoadBalancers: The list of load balancers.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "LoadBalancersProps":
        ...


class _ILoadBalancersProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``LoadBalancers``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-slb.datasource.ILoadBalancers"

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerIds")
    def attr_load_balancer_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LoadBalancerIds: The list of load balancer IDs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLoadBalancerIds"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancers")
    def attr_load_balancers(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LoadBalancers: The list of load balancers.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLoadBalancers"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "LoadBalancersProps":
        return typing.cast("LoadBalancersProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ILoadBalancers).__jsii_proxy_class__ = lambda : _ILoadBalancersProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-slb.datasource.IRule")
class IRule(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Rule``.'''

    @builtins.property
    @jsii.member(jsii_name="attrCookie")
    def attr_cookie(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Cookie: The cookie to be configured on the backend server.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCookieTimeout")
    def attr_cookie_timeout(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CookieTimeout: The timeout period of a cookie.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDomain")
    def attr_domain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Domain: The domain name that is configured in the forwarding rule.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheck")
    def attr_health_check(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheck: Specifies whether to enable health checks.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckConnectPort")
    def attr_health_check_connect_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckConnectPort: The port of the backend server that is used for health checks.

        Valid values: 1 to 65535.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckDomain")
    def attr_health_check_domain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckDomain: The domain name that is used for health checks.

        Valid values:  $_ip: The private IP address of the backend server. If the $_ip parameter is set or the HealthCheckDomain parameter is not set, SLB uses the private IP addresses of backend servers as the domain names for health checks. domain: The domain name must be 1 to 80 characters in length. It can contain only letters, digits, periods (.),and hyphens (-).
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckHttpCode")
    def attr_health_check_http_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckHttpCode: The HTTP status code that indicates a successful health check.

        Separate multiple HTTP status codes with commas (,). Default value: http_2xx.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckInterval")
    def attr_health_check_interval(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckInterval: The time interval between two consecutive health checks.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckTimeout")
    def attr_health_check_timeout(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckTimeout: The timeout period of a health check response.

        If a backend ECS instance does not send an expected response within the specified period of time, the ECS instance is considered unhealthy.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckUri")
    def attr_health_check_uri(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckUri: The URI that is used for health checks.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHealthyThreshold")
    def attr_healthy_threshold(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthyThreshold: The number of consecutive successful health checks that must occur before an unhealthy backend server is declared healthy.

        In this case, the health check state is changed from fail to success.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrListenerPort")
    def attr_listener_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ListenerPort: The listener port that is used by the SLB instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrListenerSync")
    def attr_listener_sync(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ListenerSync: Indicates whether the forwarding rule uses the scheduling algorithm, session persistence, and health check configurations of the listener.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerId")
    def attr_load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LoadBalancerId: The ID of the SLB instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRuleId")
    def attr_rule_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleId: The ID of the forwarding rule.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRuleName")
    def attr_rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleName: The name of the forwarding rule.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrScheduler")
    def attr_scheduler(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Scheduler: The scheduling algorithm.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrStickySession")
    def attr_sticky_session(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StickySession: Indicates whether session persistence is enabled.

        Valid values: on and off.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrStickySessionType")
    def attr_sticky_session_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StickySessionType: The method that is used to handle a cookie.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrUnhealthyThreshold")
    def attr_unhealthy_threshold(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UnhealthyThreshold: The number of consecutive failed health checks that must occur before a healthy backend server is declared unhealthy.

        In this case, the health check state is changed from success to fail.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrUrl")
    def attr_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Url: The URL that is configured in the forwarding rule.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVserverGroupId")
    def attr_vserver_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VserverGroupId: The ID of the vServer group that is associated with the forwarding rule.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "RuleProps":
        ...


class _IRuleProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Rule``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-slb.datasource.IRule"

    @builtins.property
    @jsii.member(jsii_name="attrCookie")
    def attr_cookie(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Cookie: The cookie to be configured on the backend server.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCookie"))

    @builtins.property
    @jsii.member(jsii_name="attrCookieTimeout")
    def attr_cookie_timeout(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CookieTimeout: The timeout period of a cookie.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCookieTimeout"))

    @builtins.property
    @jsii.member(jsii_name="attrDomain")
    def attr_domain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Domain: The domain name that is configured in the forwarding rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheck")
    def attr_health_check(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheck: Specifies whether to enable health checks.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheck"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckConnectPort")
    def attr_health_check_connect_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckConnectPort: The port of the backend server that is used for health checks.

        Valid values: 1 to 65535.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheckConnectPort"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckDomain")
    def attr_health_check_domain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckDomain: The domain name that is used for health checks.

        Valid values:  $_ip: The private IP address of the backend server. If the $_ip parameter is set or the HealthCheckDomain parameter is not set, SLB uses the private IP addresses of backend servers as the domain names for health checks. domain: The domain name must be 1 to 80 characters in length. It can contain only letters, digits, periods (.),and hyphens (-).
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheckDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckHttpCode")
    def attr_health_check_http_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckHttpCode: The HTTP status code that indicates a successful health check.

        Separate multiple HTTP status codes with commas (,). Default value: http_2xx.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheckHttpCode"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckInterval")
    def attr_health_check_interval(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckInterval: The time interval between two consecutive health checks.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheckInterval"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckTimeout")
    def attr_health_check_timeout(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckTimeout: The timeout period of a health check response.

        If a backend ECS instance does not send an expected response within the specified period of time, the ECS instance is considered unhealthy.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheckTimeout"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckUri")
    def attr_health_check_uri(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckUri: The URI that is used for health checks.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheckUri"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthyThreshold")
    def attr_healthy_threshold(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthyThreshold: The number of consecutive successful health checks that must occur before an unhealthy backend server is declared healthy.

        In this case, the health check state is changed from fail to success.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthyThreshold"))

    @builtins.property
    @jsii.member(jsii_name="attrListenerPort")
    def attr_listener_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ListenerPort: The listener port that is used by the SLB instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrListenerPort"))

    @builtins.property
    @jsii.member(jsii_name="attrListenerSync")
    def attr_listener_sync(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ListenerSync: Indicates whether the forwarding rule uses the scheduling algorithm, session persistence, and health check configurations of the listener.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrListenerSync"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerId")
    def attr_load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LoadBalancerId: The ID of the SLB instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLoadBalancerId"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleId")
    def attr_rule_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleId: The ID of the forwarding rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRuleId"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleName")
    def attr_rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleName: The name of the forwarding rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRuleName"))

    @builtins.property
    @jsii.member(jsii_name="attrScheduler")
    def attr_scheduler(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Scheduler: The scheduling algorithm.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScheduler"))

    @builtins.property
    @jsii.member(jsii_name="attrStickySession")
    def attr_sticky_session(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StickySession: Indicates whether session persistence is enabled.

        Valid values: on and off.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStickySession"))

    @builtins.property
    @jsii.member(jsii_name="attrStickySessionType")
    def attr_sticky_session_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StickySessionType: The method that is used to handle a cookie.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStickySessionType"))

    @builtins.property
    @jsii.member(jsii_name="attrUnhealthyThreshold")
    def attr_unhealthy_threshold(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UnhealthyThreshold: The number of consecutive failed health checks that must occur before a healthy backend server is declared unhealthy.

        In this case, the health check state is changed from success to fail.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUnhealthyThreshold"))

    @builtins.property
    @jsii.member(jsii_name="attrUrl")
    def attr_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Url: The URL that is configured in the forwarding rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrVserverGroupId")
    def attr_vserver_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VserverGroupId: The ID of the vServer group that is associated with the forwarding rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVserverGroupId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "RuleProps":
        return typing.cast("RuleProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IRule).__jsii_proxy_class__ = lambda : _IRuleProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-slb.datasource.IRules")
class IRules(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Rules``.'''

    @builtins.property
    @jsii.member(jsii_name="attrRuleIds")
    def attr_rule_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleIds: The list of rule IDs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRules")
    def attr_rules(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Rules: The list of rules.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "RulesProps":
        ...


class _IRulesProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Rules``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-slb.datasource.IRules"

    @builtins.property
    @jsii.member(jsii_name="attrRuleIds")
    def attr_rule_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleIds: The list of rule IDs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRuleIds"))

    @builtins.property
    @jsii.member(jsii_name="attrRules")
    def attr_rules(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Rules: The list of rules.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRules"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "RulesProps":
        return typing.cast("RulesProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IRules).__jsii_proxy_class__ = lambda : _IRulesProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-slb.datasource.ITLSPolicies")
class ITLSPolicies(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``TLSPolicies``.'''

    @builtins.property
    @jsii.member(jsii_name="attrInstanceIds")
    def attr_instance_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceIds: The list of instance IDs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTlsPolicies")
    def attr_tls_policies(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TLSPolicies: The list of tls policies.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "TLSPoliciesProps":
        ...


class _ITLSPoliciesProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``TLSPolicies``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-slb.datasource.ITLSPolicies"

    @builtins.property
    @jsii.member(jsii_name="attrInstanceIds")
    def attr_instance_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceIds: The list of instance IDs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrTlsPolicies")
    def attr_tls_policies(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TLSPolicies: The list of tls policies.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTlsPolicies"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "TLSPoliciesProps":
        return typing.cast("TLSPoliciesProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ITLSPolicies).__jsii_proxy_class__ = lambda : _ITLSPoliciesProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-slb.datasource.ITLSPolicy")
class ITLSPolicy(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``TLSPolicy``.'''

    @builtins.property
    @jsii.member(jsii_name="attrCiphers")
    def attr_ciphers(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Ciphers: The cipher suites supported by the TLS version.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The timestamp generated when the TLS policy is created.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The ID of the TLS policy.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTlsPolicyName")
    def attr_tls_policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TLSPolicyName: The name of the TLS policy.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTlsVersions")
    def attr_tls_versions(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TlsVersions: The version of the TLS protocol.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "TLSPolicyProps":
        ...


class _ITLSPolicyProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``TLSPolicy``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-slb.datasource.ITLSPolicy"

    @builtins.property
    @jsii.member(jsii_name="attrCiphers")
    def attr_ciphers(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Ciphers: The cipher suites supported by the TLS version.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCiphers"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The timestamp generated when the TLS policy is created.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The ID of the TLS policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrTlsPolicyName")
    def attr_tls_policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TLSPolicyName: The name of the TLS policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTlsPolicyName"))

    @builtins.property
    @jsii.member(jsii_name="attrTlsVersions")
    def attr_tls_versions(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TlsVersions: The version of the TLS protocol.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTlsVersions"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "TLSPolicyProps":
        return typing.cast("TLSPolicyProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ITLSPolicy).__jsii_proxy_class__ = lambda : _ITLSPolicyProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-slb.datasource.IVServerGroup")
class IVServerGroup(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``VServerGroup``.'''

    @builtins.property
    @jsii.member(jsii_name="attrBackendServers")
    def attr_backend_servers(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackendServers: The list of backend servers.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The time when the CLB instance was created.

        The time follows the YYYY-MM-DDThh:mm:ssZ format.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerId")
    def attr_load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LoadBalancerId: The ID of the CLB instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVServerGroupId")
    def attr_v_server_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VServerGroupId: The ID of the vServer group.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVServerGroupName")
    def attr_v_server_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VServerGroupName: The name of the vServer group.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "VServerGroupProps":
        ...


class _IVServerGroupProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``VServerGroup``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-slb.datasource.IVServerGroup"

    @builtins.property
    @jsii.member(jsii_name="attrBackendServers")
    def attr_backend_servers(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackendServers: The list of backend servers.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBackendServers"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The time when the CLB instance was created.

        The time follows the YYYY-MM-DDThh:mm:ssZ format.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerId")
    def attr_load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LoadBalancerId: The ID of the CLB instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLoadBalancerId"))

    @builtins.property
    @jsii.member(jsii_name="attrVServerGroupId")
    def attr_v_server_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VServerGroupId: The ID of the vServer group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVServerGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrVServerGroupName")
    def attr_v_server_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VServerGroupName: The name of the vServer group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVServerGroupName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "VServerGroupProps":
        return typing.cast("VServerGroupProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IVServerGroup).__jsii_proxy_class__ = lambda : _IVServerGroupProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-slb.datasource.IVServerGroups")
class IVServerGroups(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``VServerGroups``.'''

    @builtins.property
    @jsii.member(jsii_name="attrVServerGroupIds")
    def attr_v_server_group_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VServerGroupIds: The list of VServer group IDs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVServerGroups")
    def attr_v_server_groups(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VServerGroups: The list of VServer groups.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "VServerGroupsProps":
        ...


class _IVServerGroupsProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``VServerGroups``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-slb.datasource.IVServerGroups"

    @builtins.property
    @jsii.member(jsii_name="attrVServerGroupIds")
    def attr_v_server_group_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VServerGroupIds: The list of VServer group IDs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVServerGroupIds"))

    @builtins.property
    @jsii.member(jsii_name="attrVServerGroups")
    def attr_v_server_groups(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VServerGroups: The list of VServer groups.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVServerGroups"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "VServerGroupsProps":
        return typing.cast("VServerGroupsProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IVServerGroups).__jsii_proxy_class__ = lambda : _IVServerGroupsProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-slb.datasource.IZones")
class IZones(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Zones``.'''

    @builtins.property
    @jsii.member(jsii_name="attrZoneIds")
    def attr_zone_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ZoneIds: The list of The primary zone Ids.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrZones")
    def attr_zones(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Zones: The list of The Zones.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ZonesProps":
        ...


class _IZonesProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Zones``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-slb.datasource.IZones"

    @builtins.property
    @jsii.member(jsii_name="attrZoneIds")
    def attr_zone_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ZoneIds: The list of The primary zone Ids.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrZoneIds"))

    @builtins.property
    @jsii.member(jsii_name="attrZones")
    def attr_zones(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Zones: The list of The Zones.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrZones"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ZonesProps":
        return typing.cast("ZonesProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IZones).__jsii_proxy_class__ = lambda : _IZonesProxy


@jsii.implements(ILoadBalancer)
class LoadBalancer(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.datasource.LoadBalancer",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::SLB::LoadBalancer``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosLoadBalancer``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancer
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["LoadBalancerProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8c05c6f5ae159930ad06af7481b22bc4823d2c145fe76c04c9fd4f0e607a3dbd)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAddress")
    def attr_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Address: The service IP address of the CLB instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrAddressIpVersion")
    def attr_address_ip_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AddressIpVersion: The version of the IP address.

        Valid values: ipv4 and ipv6.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAddressIpVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrAddressType")
    def attr_address_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AddressType: The address type of the CLB instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAddressType"))

    @builtins.property
    @jsii.member(jsii_name="attrAutoReleaseTime")
    def attr_auto_release_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AutoReleaseTime: The timestamp generated when the CLB instance is released.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAutoReleaseTime"))

    @builtins.property
    @jsii.member(jsii_name="attrBackendServers")
    def attr_backend_servers(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackendServers: The backend servers of the CLB instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBackendServers"))

    @builtins.property
    @jsii.member(jsii_name="attrBandwidth")
    def attr_bandwidth(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Bandwidth: The maximum bandwidth of the Internet-facing CLB instance that is billed on a pay-by-bandwidth basis.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBandwidth"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The time when the CLB instance was created.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTimeStamp")
    def attr_create_time_stamp(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTimeStamp: The timestamp generated when the CA certificate is uploaded.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTimeStamp"))

    @builtins.property
    @jsii.member(jsii_name="attrDeleteProtection")
    def attr_delete_protection(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DeleteProtection: Indicates whether deletion protection is enabled for the CLB instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDeleteProtection"))

    @builtins.property
    @jsii.member(jsii_name="attrEndTime")
    def attr_end_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EndTime: The time when the CLB instance expires.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEndTime"))

    @builtins.property
    @jsii.member(jsii_name="attrEndTimeStamp")
    def attr_end_time_stamp(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EndTimeStamp: The timestamp that indicates the expiration time of the CLB instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEndTimeStamp"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceChargeType")
    def attr_instance_charge_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceChargeType: Instance billing method.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceChargeType"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetChargeType")
    def attr_internet_charge_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InternetChargeType: The metering method of the Internet-facing CLB instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInternetChargeType"))

    @builtins.property
    @jsii.member(jsii_name="attrListenerPortsAndProtocal")
    def attr_listener_ports_and_protocal(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ListenerPortsAndProtocal: The ports or protocols of the listeners.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrListenerPortsAndProtocal"))

    @builtins.property
    @jsii.member(jsii_name="attrListenerPortsAndProtocol")
    def attr_listener_ports_and_protocol(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ListenerPortsAndProtocol: The ports or protocols of the listeners.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrListenerPortsAndProtocol"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerId")
    def attr_load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LoadBalancerId: The CLB instance ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLoadBalancerId"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerName")
    def attr_load_balancer_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LoadBalancerName: The name of the CLB instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLoadBalancerName"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerSpec")
    def attr_load_balancer_spec(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LoadBalancerSpec: The specification of the CLB instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLoadBalancerSpec"))

    @builtins.property
    @jsii.member(jsii_name="attrMasterZoneId")
    def attr_master_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MasterZoneId: The ID of the primary zone to which the CLB instance belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMasterZoneId"))

    @builtins.property
    @jsii.member(jsii_name="attrModificationProtectionReason")
    def attr_modification_protection_reason(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ModificationProtectionReason: The reason why the configuration read-only mode is enabled.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrModificationProtectionReason"))

    @builtins.property
    @jsii.member(jsii_name="attrModificationProtectionStatus")
    def attr_modification_protection_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ModificationProtectionStatus: Load balancing modifies the protection state.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrModificationProtectionStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrNetworkType")
    def attr_network_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NetworkType: The network type of the CLB instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNetworkType"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PaymentType: Load balancing instance payment type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrRegionIdAlias")
    def attr_region_id_alias(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RegionIdAlias: The alias of the region to which the CLB instance belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRegionIdAlias"))

    @builtins.property
    @jsii.member(jsii_name="attrRenewalCycUnit")
    def attr_renewal_cyc_unit(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RenewalCycUnit: The auto-renewal cycle.

        Valid values: Year and Month. Default value: Month.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRenewalCycUnit"))

    @builtins.property
    @jsii.member(jsii_name="attrRenewalDuration")
    def attr_renewal_duration(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RenewalDuration: The auto-renewal duration.

        This parameter is valid only if RenewalStatus is set to AutoRenewal.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRenewalDuration"))

    @builtins.property
    @jsii.member(jsii_name="attrRenewalStatus")
    def attr_renewal_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RenewalStatus: Indicates whether auto-renewal is enabled.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRenewalStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The resource group ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSlaveZoneId")
    def attr_slave_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SlaveZoneId: The ID of the secondary zone to which the CLB instance belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSlaveZoneId"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Tags: The tags of the CLB instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcId: The ID of the virtual private cloud (VPC) where the internal-facing CLB instance is deployed.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VSwitchId: The ID of the vSwitch to which the internal-facing CLB instance belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "LoadBalancerProps":
        return typing.cast("LoadBalancerProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8a38de27f031fcbec82b5ddb7f1e0618cba7d2e4cadc9bc68a772d1a1f6539f7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f1ebe500c2ecd743b78bdd0349ce97d6d3eebf26522af7eafe7a4461f05f0944)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0f3f90fc3ce8ebac8536bb602086754147ef3d39f8618da6428fd32d1dd40aac)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.datasource.LoadBalancerProps",
    jsii_struct_bases=[],
    name_mapping={
        "load_balancer_id": "loadBalancerId",
        "refresh_options": "refreshOptions",
    },
)
class LoadBalancerProps:
    def __init__(
        self,
        *,
        load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``LoadBalancer``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancer

        :param load_balancer_id: Property loadBalancerId: The CLB instance ID.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__72a889ee115195d124b442008e5293d441ba56a786826927c8633c43f1db935f)
            check_type(argname="argument load_balancer_id", value=load_balancer_id, expected_type=type_hints["load_balancer_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "load_balancer_id": load_balancer_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property loadBalancerId: The CLB instance ID.'''
        result = self._values.get("load_balancer_id")
        assert result is not None, "Required property 'load_balancer_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "LoadBalancerProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(ILoadBalancerTCPListener)
class LoadBalancerTCPListener(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.datasource.LoadBalancerTCPListener",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::SLB::LoadBalancerTCPListener``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosLoadBalancerTCPListener``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancertcplistener
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["LoadBalancerTCPListenerProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d63c162b7ee07b4e7c0c42c413ffa26fa48672f52f209b172547f32b26c35e48)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAclId")
    def attr_acl_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AclId: The ID of the network ACL that is associated with the listener.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAclId"))

    @builtins.property
    @jsii.member(jsii_name="attrAclIds")
    def attr_acl_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AclIds: The ID list of the network ACL that is associated with the listener.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAclIds"))

    @builtins.property
    @jsii.member(jsii_name="attrAclStatus")
    def attr_acl_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AclStatus: Indicates whether access control is enabled.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAclStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrAclType")
    def attr_acl_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AclType: The type of the ACL.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAclType"))

    @builtins.property
    @jsii.member(jsii_name="attrBackendServerPort")
    def attr_backend_server_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackendServerPort: The backend port used by the CLB instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBackendServerPort"))

    @builtins.property
    @jsii.member(jsii_name="attrBandwidth")
    def attr_bandwidth(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Bandwidth: The maximum bandwidth of the listener.

        Unit: Mbit/s.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBandwidth"))

    @builtins.property
    @jsii.member(jsii_name="attrConnectionDrain")
    def attr_connection_drain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConnectionDrain: Indicates whether connection draining is enabled.

        If ConnectionDrain is set to on, the parameter is returned.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConnectionDrain"))

    @builtins.property
    @jsii.member(jsii_name="attrConnectionDrainTimeout")
    def attr_connection_drain_timeout(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConnectionDrainTimeout: The timeout period of connection draining.

        If ConnectionDrain is set to on, the parameter is returned.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConnectionDrainTimeout"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of the listener.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrEstablishedTimeout")
    def attr_established_timeout(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EstablishedTimeout: The timeout period of a connection.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEstablishedTimeout"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheck")
    def attr_health_check(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheck: Indicates whether the health check feature is enabled.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheck"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckConnectPort")
    def attr_health_check_connect_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckConnectPort: The port that is used for health checks.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheckConnectPort"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckConnectTimeout")
    def attr_health_check_connect_timeout(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckConnectTimeout: The timeout period.

        Unit: seconds.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheckConnectTimeout"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckDomain")
    def attr_health_check_domain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckDomain: The domain name that is used for health checks.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheckDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckHttpCode")
    def attr_health_check_http_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckHttpCode: The HTTP status code for a successful health check.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheckHttpCode"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckInterval")
    def attr_health_check_interval(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckInterval: The interval between two consecutive health checks.

        Valid values: 1 to 50. Unit: seconds.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheckInterval"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckMethod")
    def attr_health_check_method(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckMethod: The health check method.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheckMethod"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckType")
    def attr_health_check_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckType: The health check method that is used by the TCP listener.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheckType"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckUri")
    def attr_health_check_uri(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckUri: The URL that is used for health checks.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheckUri"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthyThreshold")
    def attr_healthy_threshold(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthyThreshold: The healthy threshold.

        The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health status is changed from fail to success. Valid values: 2 to 10.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthyThreshold"))

    @builtins.property
    @jsii.member(jsii_name="attrListenerPort")
    def attr_listener_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ListenerPort: The frontend port used by the CLB instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrListenerPort"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerId")
    def attr_load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LoadBalancerId: The ID of the CLB instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLoadBalancerId"))

    @builtins.property
    @jsii.member(jsii_name="attrMasterSlaveServerGroupId")
    def attr_master_slave_server_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MasterSlaveServerGroupId: The ID of the primary/secondary server group that is associated with the listener.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMasterSlaveServerGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrPersistenceTimeout")
    def attr_persistence_timeout(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PersistenceTimeout: The timeout period of session persistence.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPersistenceTimeout"))

    @builtins.property
    @jsii.member(jsii_name="attrProxyProtocolV2Enabled")
    def attr_proxy_protocol_v2_enabled(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ProxyProtocolV2Enabled: Indicates whether the Proxy protocol is used to pass client IP addresses to backend servers.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrProxyProtocolV2Enabled"))

    @builtins.property
    @jsii.member(jsii_name="attrScheduler")
    def attr_scheduler(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Scheduler: The scheduling algorithm.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScheduler"))

    @builtins.property
    @jsii.member(jsii_name="attrSynProxy")
    def attr_syn_proxy(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SynProxy: Indicates whether the SynProxy feature of CLB is enabled for protection.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSynProxy"))

    @builtins.property
    @jsii.member(jsii_name="attrUnhealthyThreshold")
    def attr_unhealthy_threshold(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UnhealthyThreshold: The unhealthy threshold.

        The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health status is changed from success to fail. Valid values: 2 to 10.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUnhealthyThreshold"))

    @builtins.property
    @jsii.member(jsii_name="attrVServerGroupId")
    def attr_v_server_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VServerGroupId: The ID of the associated server group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVServerGroupId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "LoadBalancerTCPListenerProps":
        return typing.cast("LoadBalancerTCPListenerProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__52ea1c6296f9355053b97ac18ab3817724685733c3395b2362c4a7933fc89ac3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__700849a0089e8c82ff57470c892a7698286b636122dcc456f4900869908f4f26)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7a21238dc2e2be8e5a8693ca9a550fd55035459a807f05a2eb3acceba641f652)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.datasource.LoadBalancerTCPListenerProps",
    jsii_struct_bases=[],
    name_mapping={
        "listener_port": "listenerPort",
        "load_balancer_id": "loadBalancerId",
        "refresh_options": "refreshOptions",
    },
)
class LoadBalancerTCPListenerProps:
    def __init__(
        self,
        *,
        listener_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``LoadBalancerTCPListener``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancertcplistener

        :param listener_port: Property listenerPort: The frontend port used by the CLB instance.Valid values: 1 to 65535.
        :param load_balancer_id: Property loadBalancerId: The ID of the CLB instance.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dd65e70931d1730ccdcec54c039855e7853877429dbd2d4553ba63ff5573ff67)
            check_type(argname="argument listener_port", value=listener_port, expected_type=type_hints["listener_port"])
            check_type(argname="argument load_balancer_id", value=load_balancer_id, expected_type=type_hints["load_balancer_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "listener_port": listener_port,
            "load_balancer_id": load_balancer_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def listener_port(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property listenerPort: The frontend port used by the CLB instance.Valid values: 1 to 65535.'''
        result = self._values.get("listener_port")
        assert result is not None, "Required property 'listener_port' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property loadBalancerId: The ID of the CLB instance.'''
        result = self._values.get("load_balancer_id")
        assert result is not None, "Required property 'load_balancer_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "LoadBalancerTCPListenerProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(ILoadBalancerTCPListeners)
class LoadBalancerTCPListeners(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.datasource.LoadBalancerTCPListeners",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::SLB::LoadBalancerTCPListeners``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosLoadBalancerTCPListeners``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancertcplisteners
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["LoadBalancerTCPListenersProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bac83e3677fe97c324e941f9d9760fec07aedcf6b23675b26aae3ca3d7fb76fe)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrListenerPorts")
    def attr_listener_ports(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ListenerPorts: The list of listener ports.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrListenerPorts"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerTcpListeners")
    def attr_load_balancer_tcp_listeners(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LoadBalancerTCPListeners: The list of load balancer tcp listeners.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLoadBalancerTcpListeners"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "LoadBalancerTCPListenersProps":
        return typing.cast("LoadBalancerTCPListenersProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bb8995501b7193fc4e1c280e6a3de30e8cac8e3321a2d1ce4e8643fe53db0cf9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__03877efe51f70d3293187b75dabf3f5351dbd567962272c6d2a01e8443b2493a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fc72ac7265af00fa5ed22eff20dad06992cbc496bf79dd360e7aa4a06b9ac1ad)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.datasource.LoadBalancerTCPListenersProps",
    jsii_struct_bases=[],
    name_mapping={
        "load_balancer_id": "loadBalancerId",
        "refresh_options": "refreshOptions",
    },
)
class LoadBalancerTCPListenersProps:
    def __init__(
        self,
        *,
        load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``LoadBalancerTCPListeners``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancertcplisteners

        :param load_balancer_id: Property loadBalancerId: The ID of the CLB instance.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__956d922404e6c7ce1ca13fc20817820ebca68d8e7f4498a14ff70134068ab803)
            check_type(argname="argument load_balancer_id", value=load_balancer_id, expected_type=type_hints["load_balancer_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "load_balancer_id": load_balancer_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property loadBalancerId: The ID of the CLB instance.'''
        result = self._values.get("load_balancer_id")
        assert result is not None, "Required property 'load_balancer_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "LoadBalancerTCPListenersProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(ILoadBalancers)
class LoadBalancers(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.datasource.LoadBalancers",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::SLB::LoadBalancers``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosLoadBalancers``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancers
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["LoadBalancersProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b5011156b6868f3cbbdfe8bd470d1c9e66680ae5cdf1c3059073e38b6b91847a)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerIds")
    def attr_load_balancer_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LoadBalancerIds: The list of load balancer IDs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLoadBalancerIds"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancers")
    def attr_load_balancers(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LoadBalancers: The list of load balancers.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLoadBalancers"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "LoadBalancersProps":
        return typing.cast("LoadBalancersProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dcd5eea8b5534f49720a07b5b92342a75abaf21d69885cb5a0877e00aaa54da4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c3ada8af7251c54a77ae74aa2594dd6f32a711fa4bc5f33f698d2d9eb0f08f53)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__49f20c15f4cfe7abfa4e50db89ae23c109168395896b2d96afeb723f67640ddc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.datasource.LoadBalancersProps",
    jsii_struct_bases=[],
    name_mapping={
        "address": "address",
        "address_ip_version": "addressIpVersion",
        "address_type": "addressType",
        "internet_charge_type": "internetChargeType",
        "load_balancer_id": "loadBalancerId",
        "load_balancer_name": "loadBalancerName",
        "master_zone_id": "masterZoneId",
        "network_type": "networkType",
        "payment_type": "paymentType",
        "refresh_options": "refreshOptions",
        "resource_group_id": "resourceGroupId",
        "slave_zone_id": "slaveZoneId",
        "status": "status",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
    },
)
class LoadBalancersProps:
    def __init__(
        self,
        *,
        address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        address_ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        address_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        internet_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        load_balancer_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        load_balancer_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        master_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        payment_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        slave_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``LoadBalancers``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancers

        :param address: Property address: The service address of the load balancing instance.
        :param address_ip_version: Property addressIpVersion: IP version.
        :param address_type: Property addressType: The address type of the load balancing instance.
        :param internet_charge_type: Property internetChargeType: Public network type instance payment method.
        :param load_balancer_id: Property loadBalancerId: ID of the load balancing instance.
        :param load_balancer_name: Property loadBalancerName: Name of the load balancing instance.
        :param master_zone_id: Property masterZoneId: ID of the primary available area of the load balancing instance.
        :param network_type: Property networkType: The network type of the private network load balancing instance.
        :param payment_type: Property paymentType: Load balancing instance payment type.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        :param resource_group_id: Property resourceGroupId: Resource group id.
        :param slave_zone_id: Property slaveZoneId: ID of the ready-to-use zone of the load balancing instance.
        :param status: Property status: The status of SLB.
        :param vpc_id: Property vpcId: VPC ID.
        :param v_switch_id: Property vSwitchId: The ID of the switch.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__053a9cc1fb3cc829bb75a0af0145d04b1f578305304ab31324d02abf64370cad)
            check_type(argname="argument address", value=address, expected_type=type_hints["address"])
            check_type(argname="argument address_ip_version", value=address_ip_version, expected_type=type_hints["address_ip_version"])
            check_type(argname="argument address_type", value=address_type, expected_type=type_hints["address_type"])
            check_type(argname="argument internet_charge_type", value=internet_charge_type, expected_type=type_hints["internet_charge_type"])
            check_type(argname="argument load_balancer_id", value=load_balancer_id, expected_type=type_hints["load_balancer_id"])
            check_type(argname="argument load_balancer_name", value=load_balancer_name, expected_type=type_hints["load_balancer_name"])
            check_type(argname="argument master_zone_id", value=master_zone_id, expected_type=type_hints["master_zone_id"])
            check_type(argname="argument network_type", value=network_type, expected_type=type_hints["network_type"])
            check_type(argname="argument payment_type", value=payment_type, expected_type=type_hints["payment_type"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument slave_zone_id", value=slave_zone_id, expected_type=type_hints["slave_zone_id"])
            check_type(argname="argument status", value=status, expected_type=type_hints["status"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if address is not None:
            self._values["address"] = address
        if address_ip_version is not None:
            self._values["address_ip_version"] = address_ip_version
        if address_type is not None:
            self._values["address_type"] = address_type
        if internet_charge_type is not None:
            self._values["internet_charge_type"] = internet_charge_type
        if load_balancer_id is not None:
            self._values["load_balancer_id"] = load_balancer_id
        if load_balancer_name is not None:
            self._values["load_balancer_name"] = load_balancer_name
        if master_zone_id is not None:
            self._values["master_zone_id"] = master_zone_id
        if network_type is not None:
            self._values["network_type"] = network_type
        if payment_type is not None:
            self._values["payment_type"] = payment_type
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if slave_zone_id is not None:
            self._values["slave_zone_id"] = slave_zone_id
        if status is not None:
            self._values["status"] = status
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id

    @builtins.property
    def address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property address: The service address of the load balancing instance.'''
        result = self._values.get("address")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def address_ip_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property addressIpVersion: IP version.'''
        result = self._values.get("address_ip_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def address_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property addressType: The address type of the load balancing instance.'''
        result = self._values.get("address_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def internet_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property internetChargeType: Public network type instance payment method.'''
        result = self._values.get("internet_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def load_balancer_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property loadBalancerId: ID of the load balancing instance.'''
        result = self._values.get("load_balancer_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def load_balancer_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property loadBalancerName: Name of the load balancing instance.'''
        result = self._values.get("load_balancer_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def master_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property masterZoneId: ID of the primary available area of the load balancing instance.'''
        result = self._values.get("master_zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property networkType: The network type of the private network load balancing instance.'''
        result = self._values.get("network_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def payment_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property paymentType: Load balancing instance payment type.'''
        result = self._values.get("payment_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: Resource group id.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def slave_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property slaveZoneId: ID of the ready-to-use zone of the load balancing instance.'''
        result = self._values.get("slave_zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property status: The status of SLB.'''
        result = self._values.get("status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcId: VPC ID.'''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vSwitchId: The ID of the switch.'''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "LoadBalancersProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAccessControl(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.datasource.RosAccessControl",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::SLB::AccessControl``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``AccessControl`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-accesscontrol
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAccessControlProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__16cdff3a391b4b3792c1ab195160f1c9c927d379a30bd554291a9108b7b5dbee)
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
            type_hints = typing.get_type_hints(_typecheckingstub__e07628f22c46d6b24245608b301916cfefd6709d226560f1546fa702bdab2f55)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAclEntries")
    def attr_acl_entries(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AclEntries: The IP entries that you want to remove from the network ACL.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAclEntries"))

    @builtins.property
    @jsii.member(jsii_name="attrAclId")
    def attr_acl_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AclId: The ID of the ACL.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAclId"))

    @builtins.property
    @jsii.member(jsii_name="attrAclName")
    def attr_acl_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AclName: The ACL name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAclName"))

    @builtins.property
    @jsii.member(jsii_name="attrAddressIpVersion")
    def attr_address_ip_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AddressIpVersion: The IP version. Valid values: ipv4 and ipv6.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAddressIpVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrRelatedListeners")
    def attr_related_listeners(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RelatedListeners: The listeners that are associated with the network ACL.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRelatedListeners"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceGroupId: The resource group ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Tags: The tags of the resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="aclId")
    def acl_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: aclId: The ID of the ACL.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "aclId"))

    @acl_id.setter
    def acl_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__619f003502bf2f09509b839fcc86061f5250ac2a50737c45d0a996e86acf6e39)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "aclId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__001e271b555726f6cb8738723d9ad561816c1a49234b41ccff533ea165bf87ea)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c890a083e64702ef97e1f080df36bd3b8bf49f5e73a479af67207125d1197ff9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.datasource.RosAccessControlProps",
    jsii_struct_bases=[],
    name_mapping={"acl_id": "aclId", "refresh_options": "refreshOptions"},
)
class RosAccessControlProps:
    def __init__(
        self,
        *,
        acl_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosAccessControl``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-accesscontrol

        :param acl_id: 
        :param refresh_options: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__628931a38cbfffe2e22cc16ebf186b33db1a3f660ae133b67405ed691ebfa6b6)
            check_type(argname="argument acl_id", value=acl_id, expected_type=type_hints["acl_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "acl_id": acl_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def acl_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: aclId: The ID of the ACL.
        '''
        result = self._values.get("acl_id")
        assert result is not None, "Required property 'acl_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAccessControlProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAccessControls(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.datasource.RosAccessControls",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::SLB::AccessControls``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``AccessControls`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-accesscontrols
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAccessControlsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7c3849d13a08982c718769af8843f49460f988f9a416fc9b56382d3ccfe5ab60)
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
            type_hints = typing.get_type_hints(_typecheckingstub__446a3f249dfe375eeaa9d6d8d53f3c6cf929589014954260e55ae1e7ac849973)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAccessControls")
    def attr_access_controls(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AccessControls: The list of access controls.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccessControls"))

    @builtins.property
    @jsii.member(jsii_name="attrAclIds")
    def attr_acl_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AclIds: The list of acl IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAclIds"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__deec1c94b6f2d541e7f352bf2d3957ab41586f7fc58784e9261ed800970af1ce)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="aclName")
    def acl_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: aclName: The name of the network ACL.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "aclName"))

    @acl_name.setter
    def acl_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e122c2ea3437c9f8f50083e6aa34db5e43f9fe357b3d1999c17edd8d8cd774d8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "aclName", value)

    @builtins.property
    @jsii.member(jsii_name="addressIpVersion")
    def address_ip_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: addressIpVersion: The IP version. Valid values: ipv4 and ipv6.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "addressIpVersion"))

    @address_ip_version.setter
    def address_ip_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9e8c30a1ffafae694b7bda90396bf2daf058537c325fc73f9131ee274bb5f868)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "addressIpVersion", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a3775d22ee8e5ed676cb88eba636cbdb3560fb9b496528f04eb793a398177629)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group to which the network ACL belongs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__41a460dde6e0424e7c2ea2e5441b49385acf23375e4edd3508f491d29a9d8b24)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.datasource.RosAccessControlsProps",
    jsii_struct_bases=[],
    name_mapping={
        "acl_name": "aclName",
        "address_ip_version": "addressIpVersion",
        "refresh_options": "refreshOptions",
        "resource_group_id": "resourceGroupId",
    },
)
class RosAccessControlsProps:
    def __init__(
        self,
        *,
        acl_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        address_ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosAccessControls``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-accesscontrols

        :param acl_name: 
        :param address_ip_version: 
        :param refresh_options: 
        :param resource_group_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a5efc751daed12b610baa31a7a96e93c359c4624a8d2466e2b619905f67de798)
            check_type(argname="argument acl_name", value=acl_name, expected_type=type_hints["acl_name"])
            check_type(argname="argument address_ip_version", value=address_ip_version, expected_type=type_hints["address_ip_version"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if acl_name is not None:
            self._values["acl_name"] = acl_name
        if address_ip_version is not None:
            self._values["address_ip_version"] = address_ip_version
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def acl_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: aclName: The name of the network ACL.
        '''
        result = self._values.get("acl_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def address_ip_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: addressIpVersion: The IP version. Valid values: ipv4 and ipv6.
        '''
        result = self._values.get("address_ip_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group to which the network ACL belongs.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAccessControlsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDomainExtension(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.datasource.RosDomainExtension",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::SLB::DomainExtension``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``DomainExtension`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-domainextension
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDomainExtensionProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0001506547e0b9fc0e1f3d70142af5fd643a35e4ba15f531f562ae8ae295624e)
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
            type_hints = typing.get_type_hints(_typecheckingstub__ad68d8cea54a80bbb67b384aea3e293ab6625b059fad350ae606c910c529ae68)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDomain")
    def attr_domain(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Domain: The domain name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainExtensionId")
    def attr_domain_extension_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DomainExtensionId: The ID of the additional certificate.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomainExtensionId"))

    @builtins.property
    @jsii.member(jsii_name="attrListenerPort")
    def attr_listener_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ListenerPort: The frontend port of the HTTPS listener that is configured for the SLB instance. Valid values: 1 to 65535.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrListenerPort"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerId")
    def attr_load_balancer_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LoadBalancerId: The ID of the SLB instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLoadBalancerId"))

    @builtins.property
    @jsii.member(jsii_name="attrServerCertificateId")
    def attr_server_certificate_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ServerCertificateId: The ID of the server certificate that is used by the domain name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServerCertificateId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="domainExtensionId")
    def domain_extension_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: domainExtensionId: The ID of the additional certificate.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "domainExtensionId"))

    @domain_extension_id.setter
    def domain_extension_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__16da193120887bba84f9270e096315705f304b391948d6285183cb624054685c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "domainExtensionId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0e6292c05914b41ee740b432f2f3fefec466c6b0688b4d301dd8dd5b2b4130f4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6818bc6ad90797f685451309738eb8bf20df7c9b7fe1af6d282d516dad35163d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.datasource.RosDomainExtensionProps",
    jsii_struct_bases=[],
    name_mapping={
        "domain_extension_id": "domainExtensionId",
        "refresh_options": "refreshOptions",
    },
)
class RosDomainExtensionProps:
    def __init__(
        self,
        *,
        domain_extension_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosDomainExtension``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-domainextension

        :param domain_extension_id: 
        :param refresh_options: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8d86275fb3d875ceea307e0a9844fbffbc8a8439669ca1ee1329040485e3e3cc)
            check_type(argname="argument domain_extension_id", value=domain_extension_id, expected_type=type_hints["domain_extension_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "domain_extension_id": domain_extension_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def domain_extension_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: domainExtensionId: The ID of the additional certificate.
        '''
        result = self._values.get("domain_extension_id")
        assert result is not None, "Required property 'domain_extension_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDomainExtensionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDomainExtensions(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.datasource.RosDomainExtensions",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::SLB::DomainExtensions``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``DomainExtensions`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-domainextensions
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDomainExtensionsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d91b0cf25f2cf7cf9799bc1aa5c5d3f21e331eab641ad4e1bc3cbec7f0fa440f)
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
            type_hints = typing.get_type_hints(_typecheckingstub__77895b9c0fb60a85275be5fe15c02f99097f1fbe505a4a3d31955650bbc4dfd4)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainExtensionIds")
    def attr_domain_extension_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DomainExtensionIds: The list of domain extension IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomainExtensionIds"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainExtensions")
    def attr_domain_extensions(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DomainExtensions: The list of domain extensions.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomainExtensions"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__18fa49cfed86f12c4083a1c09d495b08faac23446ce722c34fc48f747339a098)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="listenerPort")
    def listener_port(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        listenerPort: The frontend port of the HTTPS listener that is configured for the Classic Load Balancer (CLB) instance.
        Valid values: 1 to 65535.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "listenerPort"))

    @listener_port.setter
    def listener_port(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__afb7ad02c4750cdbee434add2030b0b71f4b6dc86313cadd8c4cc126c5aad904)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "listenerPort", value)

    @builtins.property
    @jsii.member(jsii_name="loadBalancerId")
    def load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: loadBalancerId: The ID of the CLB instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "loadBalancerId"))

    @load_balancer_id.setter
    def load_balancer_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__75981201fc7408b5ebf249fac8f5a543bf7be4049070921df96138e6595bb38e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loadBalancerId", value)

    @builtins.property
    @jsii.member(jsii_name="domainExtensionId")
    def domain_extension_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: domainExtensionId: The ID of the additional certificate.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "domainExtensionId"))

    @domain_extension_id.setter
    def domain_extension_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eadbeaa34916e88f6e1cd5239725886c72e447a79bf002ede5df325c852127ee)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "domainExtensionId", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__555dd19c532d2e6b9513c7096786bceebf6e9a4af3cbf82775d955a2e2edde9a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.datasource.RosDomainExtensionsProps",
    jsii_struct_bases=[],
    name_mapping={
        "listener_port": "listenerPort",
        "load_balancer_id": "loadBalancerId",
        "domain_extension_id": "domainExtensionId",
        "refresh_options": "refreshOptions",
    },
)
class RosDomainExtensionsProps:
    def __init__(
        self,
        *,
        listener_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        domain_extension_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosDomainExtensions``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-domainextensions

        :param listener_port: 
        :param load_balancer_id: 
        :param domain_extension_id: 
        :param refresh_options: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c2bd4733450a5533a1809b5c8d137464ae54db9203f1cec9be5f6713319e0dfe)
            check_type(argname="argument listener_port", value=listener_port, expected_type=type_hints["listener_port"])
            check_type(argname="argument load_balancer_id", value=load_balancer_id, expected_type=type_hints["load_balancer_id"])
            check_type(argname="argument domain_extension_id", value=domain_extension_id, expected_type=type_hints["domain_extension_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "listener_port": listener_port,
            "load_balancer_id": load_balancer_id,
        }
        if domain_extension_id is not None:
            self._values["domain_extension_id"] = domain_extension_id
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def listener_port(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        listenerPort: The frontend port of the HTTPS listener that is configured for the Classic Load Balancer (CLB) instance.
        Valid values: 1 to 65535.
        '''
        result = self._values.get("listener_port")
        assert result is not None, "Required property 'listener_port' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: loadBalancerId: The ID of the CLB instance.
        '''
        result = self._values.get("load_balancer_id")
        assert result is not None, "Required property 'load_balancer_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def domain_extension_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: domainExtensionId: The ID of the additional certificate.
        '''
        result = self._values.get("domain_extension_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDomainExtensionsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosLoadBalancer(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.datasource.RosLoadBalancer",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::SLB::LoadBalancer``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``LoadBalancer`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancer
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosLoadBalancerProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__24327bb23b4c28b95a8cff205aa1776129a1fbc0c2ec8a7035a280350202c578)
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
            type_hints = typing.get_type_hints(_typecheckingstub__221407d40614d11e9ace25e58f599e8618299042ba5ac52b7313df37bfb2d8ab)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAddress")
    def attr_address(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Address: The service IP address of the CLB instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrAddressIpVersion")
    def attr_address_ip_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AddressIpVersion: The version of the IP address. Valid values: ipv4 and ipv6.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAddressIpVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrAddressType")
    def attr_address_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AddressType: The address type of the CLB instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAddressType"))

    @builtins.property
    @jsii.member(jsii_name="attrAutoReleaseTime")
    def attr_auto_release_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AutoReleaseTime: The timestamp generated when the CLB instance is released.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAutoReleaseTime"))

    @builtins.property
    @jsii.member(jsii_name="attrBackendServers")
    def attr_backend_servers(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BackendServers: The backend servers of the CLB instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBackendServers"))

    @builtins.property
    @jsii.member(jsii_name="attrBandwidth")
    def attr_bandwidth(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Bandwidth: The maximum bandwidth of the Internet-facing CLB instance that is billed on a pay-by-bandwidth basis.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBandwidth"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: The time when the CLB instance was created.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTimeStamp")
    def attr_create_time_stamp(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTimeStamp: The timestamp generated when the CA certificate is uploaded.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTimeStamp"))

    @builtins.property
    @jsii.member(jsii_name="attrDeleteProtection")
    def attr_delete_protection(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DeleteProtection: Indicates whether deletion protection is enabled for the CLB instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDeleteProtection"))

    @builtins.property
    @jsii.member(jsii_name="attrEndTime")
    def attr_end_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EndTime: The time when the CLB instance expires.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEndTime"))

    @builtins.property
    @jsii.member(jsii_name="attrEndTimeStamp")
    def attr_end_time_stamp(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EndTimeStamp: The timestamp that indicates the expiration time of the CLB instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEndTimeStamp"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceChargeType")
    def attr_instance_charge_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceChargeType: Instance billing method.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceChargeType"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetChargeType")
    def attr_internet_charge_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InternetChargeType: The metering method of the Internet-facing CLB instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInternetChargeType"))

    @builtins.property
    @jsii.member(jsii_name="attrListenerPortsAndProtocal")
    def attr_listener_ports_and_protocal(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ListenerPortsAndProtocal: The ports or protocols of the listeners.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrListenerPortsAndProtocal"))

    @builtins.property
    @jsii.member(jsii_name="attrListenerPortsAndProtocol")
    def attr_listener_ports_and_protocol(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ListenerPortsAndProtocol: The ports or protocols of the listeners.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrListenerPortsAndProtocol"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerId")
    def attr_load_balancer_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LoadBalancerId: The CLB instance ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLoadBalancerId"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerName")
    def attr_load_balancer_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LoadBalancerName: The name of the CLB instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLoadBalancerName"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerSpec")
    def attr_load_balancer_spec(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LoadBalancerSpec: The specification of the CLB instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLoadBalancerSpec"))

    @builtins.property
    @jsii.member(jsii_name="attrMasterZoneId")
    def attr_master_zone_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MasterZoneId: The ID of the primary zone to which the CLB instance belongs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMasterZoneId"))

    @builtins.property
    @jsii.member(jsii_name="attrModificationProtectionReason")
    def attr_modification_protection_reason(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ModificationProtectionReason: The reason why the configuration read-only mode is enabled.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrModificationProtectionReason"))

    @builtins.property
    @jsii.member(jsii_name="attrModificationProtectionStatus")
    def attr_modification_protection_status(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ModificationProtectionStatus: Load balancing modifies the protection state.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrModificationProtectionStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrNetworkType")
    def attr_network_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: NetworkType: The network type of the CLB instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNetworkType"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PaymentType: Load balancing instance payment type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrRegionIdAlias")
    def attr_region_id_alias(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RegionIdAlias: The alias of the region to which the CLB instance belongs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRegionIdAlias"))

    @builtins.property
    @jsii.member(jsii_name="attrRenewalCycUnit")
    def attr_renewal_cyc_unit(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RenewalCycUnit: The auto-renewal cycle. Valid values: Year and Month. Default value: Month.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRenewalCycUnit"))

    @builtins.property
    @jsii.member(jsii_name="attrRenewalDuration")
    def attr_renewal_duration(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RenewalDuration: The auto-renewal duration. This parameter is valid only if RenewalStatus is set to AutoRenewal.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRenewalDuration"))

    @builtins.property
    @jsii.member(jsii_name="attrRenewalStatus")
    def attr_renewal_status(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RenewalStatus: Indicates whether auto-renewal is enabled.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRenewalStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceGroupId: The resource group ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSlaveZoneId")
    def attr_slave_zone_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SlaveZoneId: The ID of the secondary zone to which the CLB instance belongs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSlaveZoneId"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Tags: The tags of the CLB instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcId: The ID of the virtual private cloud (VPC) where the internal-facing CLB instance is deployed.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VSwitchId: The ID of the vSwitch to which the internal-facing CLB instance belongs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVSwitchId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__ce91ab2dcae643824c675e046fadf83efdc14ba2cbf49a20019bae4dfc5195b6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="loadBalancerId")
    def load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: loadBalancerId: The CLB instance ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "loadBalancerId"))

    @load_balancer_id.setter
    def load_balancer_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__becbceb3e6d5695654f0e27ae993272369b92bc41349b75eb0cf361e72c44989)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loadBalancerId", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3b8bdd5e6b25482153ce2e3bf80872b87b8167a5e45568957306647b74a9df7f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.datasource.RosLoadBalancerProps",
    jsii_struct_bases=[],
    name_mapping={
        "load_balancer_id": "loadBalancerId",
        "refresh_options": "refreshOptions",
    },
)
class RosLoadBalancerProps:
    def __init__(
        self,
        *,
        load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosLoadBalancer``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancer

        :param load_balancer_id: 
        :param refresh_options: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b9cdb5ab5fc495c80a495a525dcc12d223095e767be0802e5ed600a46d17d23d)
            check_type(argname="argument load_balancer_id", value=load_balancer_id, expected_type=type_hints["load_balancer_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "load_balancer_id": load_balancer_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: loadBalancerId: The CLB instance ID.
        '''
        result = self._values.get("load_balancer_id")
        assert result is not None, "Required property 'load_balancer_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosLoadBalancerProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosLoadBalancerTCPListener(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.datasource.RosLoadBalancerTCPListener",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::SLB::LoadBalancerTCPListener``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``LoadBalancerTCPListener`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancertcplistener
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosLoadBalancerTCPListenerProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__64d68c39759a63cc015aa3fb1b3ae0c3125197507c5604154a8159079d42032d)
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
            type_hints = typing.get_type_hints(_typecheckingstub__26fa8819b5b74ae8f1a0f336729eecfc211297af985d3aba1a27df4ef5e3eca5)
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
        :Attribute: AclId: The ID of the network ACL that is associated with the listener.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAclId"))

    @builtins.property
    @jsii.member(jsii_name="attrAclIds")
    def attr_acl_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AclIds: The ID list of the network ACL that is associated with the listener.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAclIds"))

    @builtins.property
    @jsii.member(jsii_name="attrAclStatus")
    def attr_acl_status(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AclStatus: Indicates whether access control is enabled.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAclStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrAclType")
    def attr_acl_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AclType: The type of the ACL.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAclType"))

    @builtins.property
    @jsii.member(jsii_name="attrBackendServerPort")
    def attr_backend_server_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BackendServerPort: The backend port used by the CLB instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBackendServerPort"))

    @builtins.property
    @jsii.member(jsii_name="attrBandwidth")
    def attr_bandwidth(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Bandwidth: The maximum bandwidth of the listener. Unit: Mbit/s.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBandwidth"))

    @builtins.property
    @jsii.member(jsii_name="attrConnectionDrain")
    def attr_connection_drain(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ConnectionDrain: Indicates whether connection draining is enabled. If ConnectionDrain is set to on, the parameter is returned.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConnectionDrain"))

    @builtins.property
    @jsii.member(jsii_name="attrConnectionDrainTimeout")
    def attr_connection_drain_timeout(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ConnectionDrainTimeout: The timeout period of connection draining. If ConnectionDrain is set to on, the parameter is returned.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConnectionDrainTimeout"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Description: The description of the listener.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrEstablishedTimeout")
    def attr_established_timeout(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EstablishedTimeout: The timeout period of a connection.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEstablishedTimeout"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheck")
    def attr_health_check(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HealthCheck: Indicates whether the health check feature is enabled.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHealthCheck"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckConnectPort")
    def attr_health_check_connect_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HealthCheckConnectPort: The port that is used for health checks.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHealthCheckConnectPort"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckConnectTimeout")
    def attr_health_check_connect_timeout(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HealthCheckConnectTimeout: The timeout period. Unit: seconds.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHealthCheckConnectTimeout"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckDomain")
    def attr_health_check_domain(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HealthCheckDomain: The domain name that is used for health checks.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHealthCheckDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckHttpCode")
    def attr_health_check_http_code(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HealthCheckHttpCode: The HTTP status code for a successful health check.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHealthCheckHttpCode"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckInterval")
    def attr_health_check_interval(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HealthCheckInterval: The interval between two consecutive health checks. Valid values: 1 to 50. Unit: seconds.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHealthCheckInterval"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckMethod")
    def attr_health_check_method(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HealthCheckMethod: The health check method.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHealthCheckMethod"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckType")
    def attr_health_check_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HealthCheckType: The health check method that is used by the TCP listener.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHealthCheckType"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckUri")
    def attr_health_check_uri(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HealthCheckUri: The URL that is used for health checks.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHealthCheckUri"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthyThreshold")
    def attr_healthy_threshold(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HealthyThreshold: The healthy threshold. The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health status is changed from fail to success. Valid values: 2 to 10.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHealthyThreshold"))

    @builtins.property
    @jsii.member(jsii_name="attrListenerPort")
    def attr_listener_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ListenerPort: The frontend port used by the CLB instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrListenerPort"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerId")
    def attr_load_balancer_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LoadBalancerId: The ID of the CLB instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLoadBalancerId"))

    @builtins.property
    @jsii.member(jsii_name="attrMasterSlaveServerGroupId")
    def attr_master_slave_server_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MasterSlaveServerGroupId: The ID of the primary/secondary server group that is associated with the listener.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMasterSlaveServerGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrPersistenceTimeout")
    def attr_persistence_timeout(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PersistenceTimeout: The timeout period of session persistence.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPersistenceTimeout"))

    @builtins.property
    @jsii.member(jsii_name="attrProxyProtocolV2Enabled")
    def attr_proxy_protocol_v2_enabled(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ProxyProtocolV2Enabled: Indicates whether the Proxy protocol is used to pass client IP addresses to backend servers.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProxyProtocolV2Enabled"))

    @builtins.property
    @jsii.member(jsii_name="attrScheduler")
    def attr_scheduler(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Scheduler: The scheduling algorithm.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScheduler"))

    @builtins.property
    @jsii.member(jsii_name="attrSynProxy")
    def attr_syn_proxy(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SynProxy: Indicates whether the SynProxy feature of CLB is enabled for protection.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSynProxy"))

    @builtins.property
    @jsii.member(jsii_name="attrUnhealthyThreshold")
    def attr_unhealthy_threshold(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UnhealthyThreshold: The unhealthy threshold. The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health status is changed from success to fail. Valid values: 2 to 10.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUnhealthyThreshold"))

    @builtins.property
    @jsii.member(jsii_name="attrVServerGroupId")
    def attr_v_server_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VServerGroupId: The ID of the associated server group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVServerGroupId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__30f0f769ac31d60b77e8a02785d2b3963b3dde2f95203100ce151cd664cc79c6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="listenerPort")
    def listener_port(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: listenerPort: The frontend port used by the CLB instance.Valid values: 1 to 65535.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "listenerPort"))

    @listener_port.setter
    def listener_port(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__97452925786f61d880ab9c484dbb3932bc42afd132b8f45b7b95ce55be2a4994)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "listenerPort", value)

    @builtins.property
    @jsii.member(jsii_name="loadBalancerId")
    def load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: loadBalancerId: The ID of the CLB instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "loadBalancerId"))

    @load_balancer_id.setter
    def load_balancer_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dc1320b5718d40898ce7a60491a3b25ea378777085e1ba04c2c1f29174d49117)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loadBalancerId", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4ec8ecc0ef87cb9ff8e8a0050f63a44fa6f22a7a7378a180ca792fc59549149b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.datasource.RosLoadBalancerTCPListenerProps",
    jsii_struct_bases=[],
    name_mapping={
        "listener_port": "listenerPort",
        "load_balancer_id": "loadBalancerId",
        "refresh_options": "refreshOptions",
    },
)
class RosLoadBalancerTCPListenerProps:
    def __init__(
        self,
        *,
        listener_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosLoadBalancerTCPListener``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancertcplistener

        :param listener_port: 
        :param load_balancer_id: 
        :param refresh_options: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8e4c819a93d1353bcef3ed46dc8f4321e89cf494a6e6c90d23b81baf616a8394)
            check_type(argname="argument listener_port", value=listener_port, expected_type=type_hints["listener_port"])
            check_type(argname="argument load_balancer_id", value=load_balancer_id, expected_type=type_hints["load_balancer_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "listener_port": listener_port,
            "load_balancer_id": load_balancer_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def listener_port(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: listenerPort: The frontend port used by the CLB instance.Valid values: 1 to 65535.
        '''
        result = self._values.get("listener_port")
        assert result is not None, "Required property 'listener_port' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: loadBalancerId: The ID of the CLB instance.
        '''
        result = self._values.get("load_balancer_id")
        assert result is not None, "Required property 'load_balancer_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosLoadBalancerTCPListenerProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosLoadBalancerTCPListeners(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.datasource.RosLoadBalancerTCPListeners",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::SLB::LoadBalancerTCPListeners``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``LoadBalancerTCPListeners`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancertcplisteners
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosLoadBalancerTCPListenersProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5e6a581beea1d027a167e283fa78638d13e46555c877d0954d8c1c5561a891e2)
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
            type_hints = typing.get_type_hints(_typecheckingstub__8098ea4ecd31ae402c93a6a674d7ea767a7b79e19756a7d78b6a29dff471e1cc)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrListenerPorts")
    def attr_listener_ports(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ListenerPorts: The list of listener ports.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrListenerPorts"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerTcpListeners")
    def attr_load_balancer_tcp_listeners(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LoadBalancerTCPListeners: The list of load balancer tcp listeners.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLoadBalancerTcpListeners"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__aee5639f80aca502cc36ec35c1414a856eaa3a83903036888ef7dca657e7feff)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="loadBalancerId")
    def load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: loadBalancerId: The ID of the CLB instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "loadBalancerId"))

    @load_balancer_id.setter
    def load_balancer_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6d096c76013d887fbf90d98326d6656ce1dcc0e86f42ced68e1c8b67a79c0206)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loadBalancerId", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eff11a028c54b8428a35876db595600699f3847c1a7b56812c52401e68980d3b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.datasource.RosLoadBalancerTCPListenersProps",
    jsii_struct_bases=[],
    name_mapping={
        "load_balancer_id": "loadBalancerId",
        "refresh_options": "refreshOptions",
    },
)
class RosLoadBalancerTCPListenersProps:
    def __init__(
        self,
        *,
        load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosLoadBalancerTCPListeners``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancertcplisteners

        :param load_balancer_id: 
        :param refresh_options: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4185c42d70bbe581ec6402aca57b9e46a5da628a33ae7783e0630aeace39e6db)
            check_type(argname="argument load_balancer_id", value=load_balancer_id, expected_type=type_hints["load_balancer_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "load_balancer_id": load_balancer_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: loadBalancerId: The ID of the CLB instance.
        '''
        result = self._values.get("load_balancer_id")
        assert result is not None, "Required property 'load_balancer_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosLoadBalancerTCPListenersProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosLoadBalancers(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.datasource.RosLoadBalancers",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::SLB::LoadBalancers``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``LoadBalancers`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancers
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosLoadBalancersProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8f311a668b9df3cd87cbeef1b6bcf816e3393f13638996569ada614b3d540396)
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
            type_hints = typing.get_type_hints(_typecheckingstub__19736b5893ead00fc52127bb1324bc617e799cc867ec0072e439494bed193b35)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerIds")
    def attr_load_balancer_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LoadBalancerIds: The list of load balancer IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLoadBalancerIds"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancers")
    def attr_load_balancers(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LoadBalancers: The list of load balancers.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLoadBalancers"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__75c9db405c674fd58638d9fc114a036e1136ce9b518b4bbf10a98df2550314dd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="address")
    def address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: address: The service address of the load balancing instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "address"))

    @address.setter
    def address(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__afe2cda9e626731db7670a538a406a575d1c61b996a34828a22d9a605c78edae)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "address", value)

    @builtins.property
    @jsii.member(jsii_name="addressIpVersion")
    def address_ip_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: addressIpVersion: IP version.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "addressIpVersion"))

    @address_ip_version.setter
    def address_ip_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__27ffedd566547db44dcce943a2085fe3c939655e2abc06d736cfa1f26a22d932)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "addressIpVersion", value)

    @builtins.property
    @jsii.member(jsii_name="addressType")
    def address_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: addressType: The address type of the load balancing instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "addressType"))

    @address_type.setter
    def address_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bad9d2f3190de34d54bc8b2a3f4aa6c10f58ff5ae9997b68b34dbaf47bd5616d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "addressType", value)

    @builtins.property
    @jsii.member(jsii_name="internetChargeType")
    def internet_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: internetChargeType: Public network type instance payment method.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "internetChargeType"))

    @internet_charge_type.setter
    def internet_charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2ad059fd7834578c80288bd12e2955b3aaa3da0c95c77b57461c669078d5e2e1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "internetChargeType", value)

    @builtins.property
    @jsii.member(jsii_name="loadBalancerId")
    def load_balancer_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: loadBalancerId: ID of the load balancing instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "loadBalancerId"))

    @load_balancer_id.setter
    def load_balancer_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fd8c28e6debbfa6670ace3cf8574fc74dbc32fa5016b397422087bfab3ebe671)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loadBalancerId", value)

    @builtins.property
    @jsii.member(jsii_name="loadBalancerName")
    def load_balancer_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: loadBalancerName: Name of the load balancing instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "loadBalancerName"))

    @load_balancer_name.setter
    def load_balancer_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__087930bd377eff91dfa9e82eb16d878e8ad7328434632b55691fc2b7bec565bc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loadBalancerName", value)

    @builtins.property
    @jsii.member(jsii_name="masterZoneId")
    def master_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: masterZoneId: ID of the primary available area of the load balancing instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "masterZoneId"))

    @master_zone_id.setter
    def master_zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b753f5323d4b157224e2bc0f5f9c4212c5ca9e510efcd238f4b5b92b3bd7cad4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "masterZoneId", value)

    @builtins.property
    @jsii.member(jsii_name="networkType")
    def network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: networkType: The network type of the private network load balancing instance
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "networkType"))

    @network_type.setter
    def network_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bcd74a3efb9b0bffac87ed0de1e83a130bea65a9b235c4692f7edb76b87c409d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "networkType", value)

    @builtins.property
    @jsii.member(jsii_name="paymentType")
    def payment_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: paymentType: Load balancing instance payment type
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "paymentType"))

    @payment_type.setter
    def payment_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7a66816697cff1da554b59aa68d68dda59af67079ec6254cc741eadefdf2718e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "paymentType", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__551d3665e0956ab07c7a498ebbace0e785ba5fab4865f7d4a5c404ed47a81d6a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c1ec076d6106af6c7b21c925cce78ae3b216e7f2c83672746b171c5e43baab6a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="slaveZoneId")
    def slave_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: slaveZoneId: ID of the ready-to-use zone of the load balancing instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "slaveZoneId"))

    @slave_zone_id.setter
    def slave_zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7585650ebd8ce83953ef8edbced8aeb98b04ad6593f8333d4bb56b13727b536e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "slaveZoneId", value)

    @builtins.property
    @jsii.member(jsii_name="status")
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: status: The status of SLB.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "status"))

    @status.setter
    def status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b004fe22f0def022d48647a2a253452f493fcf2b584a2631fe939a40722093ac)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "status", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: VPC ID
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2d50ad5871abab64cc4bcbdea76eee8bdbab071c1c89f1ae567b28edef410c9e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The ID of the switch.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5f2d846864135862b6304c975603c99ec7130ffde518dfe44f49c46863906b5a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.datasource.RosLoadBalancersProps",
    jsii_struct_bases=[],
    name_mapping={
        "address": "address",
        "address_ip_version": "addressIpVersion",
        "address_type": "addressType",
        "internet_charge_type": "internetChargeType",
        "load_balancer_id": "loadBalancerId",
        "load_balancer_name": "loadBalancerName",
        "master_zone_id": "masterZoneId",
        "network_type": "networkType",
        "payment_type": "paymentType",
        "refresh_options": "refreshOptions",
        "resource_group_id": "resourceGroupId",
        "slave_zone_id": "slaveZoneId",
        "status": "status",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
    },
)
class RosLoadBalancersProps:
    def __init__(
        self,
        *,
        address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        address_ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        address_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        internet_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        load_balancer_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        load_balancer_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        master_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        payment_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        slave_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosLoadBalancers``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancers

        :param address: 
        :param address_ip_version: 
        :param address_type: 
        :param internet_charge_type: 
        :param load_balancer_id: 
        :param load_balancer_name: 
        :param master_zone_id: 
        :param network_type: 
        :param payment_type: 
        :param refresh_options: 
        :param resource_group_id: 
        :param slave_zone_id: 
        :param status: 
        :param vpc_id: 
        :param v_switch_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__92a2210bfe079595d3f5d61d99448054e721542e9bc89fcb2c109c4a119a56f3)
            check_type(argname="argument address", value=address, expected_type=type_hints["address"])
            check_type(argname="argument address_ip_version", value=address_ip_version, expected_type=type_hints["address_ip_version"])
            check_type(argname="argument address_type", value=address_type, expected_type=type_hints["address_type"])
            check_type(argname="argument internet_charge_type", value=internet_charge_type, expected_type=type_hints["internet_charge_type"])
            check_type(argname="argument load_balancer_id", value=load_balancer_id, expected_type=type_hints["load_balancer_id"])
            check_type(argname="argument load_balancer_name", value=load_balancer_name, expected_type=type_hints["load_balancer_name"])
            check_type(argname="argument master_zone_id", value=master_zone_id, expected_type=type_hints["master_zone_id"])
            check_type(argname="argument network_type", value=network_type, expected_type=type_hints["network_type"])
            check_type(argname="argument payment_type", value=payment_type, expected_type=type_hints["payment_type"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument slave_zone_id", value=slave_zone_id, expected_type=type_hints["slave_zone_id"])
            check_type(argname="argument status", value=status, expected_type=type_hints["status"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if address is not None:
            self._values["address"] = address
        if address_ip_version is not None:
            self._values["address_ip_version"] = address_ip_version
        if address_type is not None:
            self._values["address_type"] = address_type
        if internet_charge_type is not None:
            self._values["internet_charge_type"] = internet_charge_type
        if load_balancer_id is not None:
            self._values["load_balancer_id"] = load_balancer_id
        if load_balancer_name is not None:
            self._values["load_balancer_name"] = load_balancer_name
        if master_zone_id is not None:
            self._values["master_zone_id"] = master_zone_id
        if network_type is not None:
            self._values["network_type"] = network_type
        if payment_type is not None:
            self._values["payment_type"] = payment_type
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if slave_zone_id is not None:
            self._values["slave_zone_id"] = slave_zone_id
        if status is not None:
            self._values["status"] = status
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id

    @builtins.property
    def address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: address: The service address of the load balancing instance.
        '''
        result = self._values.get("address")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def address_ip_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: addressIpVersion: IP version.
        '''
        result = self._values.get("address_ip_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def address_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: addressType: The address type of the load balancing instance.
        '''
        result = self._values.get("address_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def internet_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: internetChargeType: Public network type instance payment method.
        '''
        result = self._values.get("internet_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def load_balancer_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: loadBalancerId: ID of the load balancing instance.
        '''
        result = self._values.get("load_balancer_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def load_balancer_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: loadBalancerName: Name of the load balancing instance.
        '''
        result = self._values.get("load_balancer_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def master_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: masterZoneId: ID of the primary available area of the load balancing instance.
        '''
        result = self._values.get("master_zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: networkType: The network type of the private network load balancing instance
        '''
        result = self._values.get("network_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def payment_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: paymentType: Load balancing instance payment type
        '''
        result = self._values.get("payment_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def slave_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: slaveZoneId: ID of the ready-to-use zone of the load balancing instance.
        '''
        result = self._values.get("slave_zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: status: The status of SLB.
        '''
        result = self._values.get("status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: VPC ID
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The ID of the switch.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosLoadBalancersProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosRule(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.datasource.RosRule",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::SLB::Rule``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Rule`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-rule
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosRuleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__849bb4292ac9439c64fae6c41051f63beabfab1dbfe47823a6dfce52ad0a1804)
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
            type_hints = typing.get_type_hints(_typecheckingstub__4c7c9f37ddf9e323cfb97b6701bc4dff05813a6430a36c7d5e929ba5f9d4287b)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCookie")
    def attr_cookie(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Cookie: The cookie to be configured on the backend server.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCookie"))

    @builtins.property
    @jsii.member(jsii_name="attrCookieTimeout")
    def attr_cookie_timeout(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CookieTimeout: The timeout period of a cookie.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCookieTimeout"))

    @builtins.property
    @jsii.member(jsii_name="attrDomain")
    def attr_domain(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Domain: The domain name that is configured in the forwarding rule.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheck")
    def attr_health_check(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HealthCheck: Specifies whether to enable health checks.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHealthCheck"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckConnectPort")
    def attr_health_check_connect_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HealthCheckConnectPort: The port of the backend server that is used for health checks. Valid values: 1 to 65535.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHealthCheckConnectPort"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckDomain")
    def attr_health_check_domain(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HealthCheckDomain: The domain name that is used for health checks. Valid values:  $_ip: The private IP address of the backend server. If the $_ip parameter is set or the HealthCheckDomain parameter is not set, SLB uses the private IP addresses of backend servers as the domain names for health checks. domain: The domain name must be 1 to 80 characters in length. It can contain only letters, digits, periods (.),and hyphens (-).
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHealthCheckDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckHttpCode")
    def attr_health_check_http_code(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HealthCheckHttpCode: The HTTP status code that indicates a successful health check. Separate multiple HTTP status codes with commas (,). Default value: http_2xx.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHealthCheckHttpCode"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckInterval")
    def attr_health_check_interval(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HealthCheckInterval: The time interval between two consecutive health checks.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHealthCheckInterval"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckTimeout")
    def attr_health_check_timeout(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HealthCheckTimeout: The timeout period of a health check response. If a backend ECS instance does not send an expected response within the specified period of time, the ECS instance is considered unhealthy.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHealthCheckTimeout"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckUri")
    def attr_health_check_uri(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HealthCheckUri: The URI that is used for health checks.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHealthCheckUri"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthyThreshold")
    def attr_healthy_threshold(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HealthyThreshold: The number of consecutive successful health checks that must occur before an unhealthy backend server is declared healthy. In this case, the health check state is changed from fail to success.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHealthyThreshold"))

    @builtins.property
    @jsii.member(jsii_name="attrListenerPort")
    def attr_listener_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ListenerPort: The listener port that is used by the SLB instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrListenerPort"))

    @builtins.property
    @jsii.member(jsii_name="attrListenerSync")
    def attr_listener_sync(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ListenerSync: Indicates whether the forwarding rule uses the scheduling algorithm, session persistence, and health check configurations of the listener.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrListenerSync"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerId")
    def attr_load_balancer_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LoadBalancerId: The ID of the SLB instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLoadBalancerId"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleId")
    def attr_rule_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RuleId: The ID of the forwarding rule.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRuleId"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleName")
    def attr_rule_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RuleName: The name of the forwarding rule.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRuleName"))

    @builtins.property
    @jsii.member(jsii_name="attrScheduler")
    def attr_scheduler(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Scheduler: The scheduling algorithm.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScheduler"))

    @builtins.property
    @jsii.member(jsii_name="attrStickySession")
    def attr_sticky_session(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: StickySession: Indicates whether session persistence is enabled.  Valid values: on and off.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStickySession"))

    @builtins.property
    @jsii.member(jsii_name="attrStickySessionType")
    def attr_sticky_session_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: StickySessionType: The method that is used to handle a cookie.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStickySessionType"))

    @builtins.property
    @jsii.member(jsii_name="attrUnhealthyThreshold")
    def attr_unhealthy_threshold(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UnhealthyThreshold: The number of consecutive failed health checks that must occur before a healthy backend server is declared unhealthy. In this case, the health check state is changed from success to fail.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUnhealthyThreshold"))

    @builtins.property
    @jsii.member(jsii_name="attrUrl")
    def attr_url(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Url: The URL that is configured in the forwarding rule.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrVserverGroupId")
    def attr_vserver_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VserverGroupId: The ID of the vServer group that is associated with the forwarding rule.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVserverGroupId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__581e113bcb950c6d62dcc439211c37e221d33829dfc77c1be85e8b0cfb9d8875)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="ruleId")
    def rule_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ruleId: The ID of the forwarding rule.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "ruleId"))

    @rule_id.setter
    def rule_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6e69828c0a4a69c95c5c0249bcab4294fea594a5ef5b8ff42f3b4577bc9d9419)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ruleId", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__97f84291b62f9c213eab508f85acbc0a19b510534c57a17fb8d22f82c95a3c68)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.datasource.RosRuleProps",
    jsii_struct_bases=[],
    name_mapping={"rule_id": "ruleId", "refresh_options": "refreshOptions"},
)
class RosRuleProps:
    def __init__(
        self,
        *,
        rule_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosRule``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-rule

        :param rule_id: 
        :param refresh_options: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b5bc2bc198666c972a7722ca1d95aca226c97aa0c06bfa64a63b097e8de4a5b1)
            check_type(argname="argument rule_id", value=rule_id, expected_type=type_hints["rule_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "rule_id": rule_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def rule_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ruleId: The ID of the forwarding rule.
        '''
        result = self._values.get("rule_id")
        assert result is not None, "Required property 'rule_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosRules(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.datasource.RosRules",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::SLB::Rules``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Rules`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-rules
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosRulesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6460fdae11b11e90531689b83740595d845ef80fbff1a246dc16e8292fca9db7)
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
            type_hints = typing.get_type_hints(_typecheckingstub__c274de592fc6bec00356d5bf9a37de788a2ed9c7c1aeccfe796f9fb94d0a855d)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleIds")
    def attr_rule_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RuleIds: The list of rule IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRuleIds"))

    @builtins.property
    @jsii.member(jsii_name="attrRules")
    def attr_rules(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Rules: The list of rules.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRules"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__e980dcb415dd7866e1f4e48db00f48369d8ec0681bb866d27173c90b270c91a6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="listenerPort")
    def listener_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: listenerPort: The frontend listener port that is used by the Classic Load Balancer (CLB) instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "listenerPort"))

    @listener_port.setter
    def listener_port(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c7aaab0a4d016cb5019ac6b3e8fb70a7704770de0e1148b6b7ad577a60212dda)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "listenerPort", value)

    @builtins.property
    @jsii.member(jsii_name="loadBalancerId")
    def load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: loadBalancerId: The ID of the CLB instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "loadBalancerId"))

    @load_balancer_id.setter
    def load_balancer_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__92685b10e57c16ff68557ad73f881a82bf1df4a3ebb37f267de049d739283788)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loadBalancerId", value)

    @builtins.property
    @jsii.member(jsii_name="listenerProtocol")
    def listener_protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: listenerProtocol: The frontend listener protocol that is used by the SLB instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "listenerProtocol"))

    @listener_protocol.setter
    def listener_protocol(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__48781a74dbd4f010f22471dd19bc7c758b8e7e19c8dedcdd1aec51771b835d65)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "listenerProtocol", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__18a60f062279916e2a0873fcfa7ef987930f5a6dd7d60f0e9a2978e6d3f575a1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.datasource.RosRulesProps",
    jsii_struct_bases=[],
    name_mapping={
        "listener_port": "listenerPort",
        "load_balancer_id": "loadBalancerId",
        "listener_protocol": "listenerProtocol",
        "refresh_options": "refreshOptions",
    },
)
class RosRulesProps:
    def __init__(
        self,
        *,
        listener_port: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        listener_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosRules``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-rules

        :param listener_port: 
        :param load_balancer_id: 
        :param listener_protocol: 
        :param refresh_options: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2b62fd54ebb6259094878d5e4ce6ae283140afc28d71dfa84efac6a0454a4dee)
            check_type(argname="argument listener_port", value=listener_port, expected_type=type_hints["listener_port"])
            check_type(argname="argument load_balancer_id", value=load_balancer_id, expected_type=type_hints["load_balancer_id"])
            check_type(argname="argument listener_protocol", value=listener_protocol, expected_type=type_hints["listener_protocol"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "listener_port": listener_port,
            "load_balancer_id": load_balancer_id,
        }
        if listener_protocol is not None:
            self._values["listener_protocol"] = listener_protocol
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def listener_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: listenerPort: The frontend listener port that is used by the Classic Load Balancer (CLB) instance.
        '''
        result = self._values.get("listener_port")
        assert result is not None, "Required property 'listener_port' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: loadBalancerId: The ID of the CLB instance.
        '''
        result = self._values.get("load_balancer_id")
        assert result is not None, "Required property 'load_balancer_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def listener_protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: listenerProtocol: The frontend listener protocol that is used by the SLB instance.
        '''
        result = self._values.get("listener_protocol")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRulesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosTLSPolicies(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.datasource.RosTLSPolicies",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::SLB::TLSPolicies``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``TLSPolicies`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-tlspolicies
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosTLSPoliciesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f77fa86f3733904a6bd58c6e324a1827d06d38e6573a9ba678d2504d913bb9e0)
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
            type_hints = typing.get_type_hints(_typecheckingstub__4dee44a7ee5148f48a55fdd64f7ac6225d7d3bfee6b18bfa79f43586efdbe7af)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceIds")
    def attr_instance_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceIds: The list of instance IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrTlsPolicies")
    def attr_tls_policies(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TLSPolicies: The list of tls policies.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTlsPolicies"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__0ebca4fddafa80fc4fa87c1a608e0367451f7fdf24557bd1b1813cb4fef42cb7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the TLS policy.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0b91abada762e88f10cb2a8891c1cc3f56614628ea0d578a37dbeb6f060cddf8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fa2e54a83795a19268f33496126048999f6a380779436f73d92cf8e2a61be21f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)

    @builtins.property
    @jsii.member(jsii_name="tlsPolicyName")
    def tls_policy_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: tlsPolicyName: The name of the TLS policy. The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "tlsPolicyName"))

    @tls_policy_name.setter
    def tls_policy_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cac9b194c1b466d69a7f371afba2fc5481a90f3a8c2dab96e704c59a534c4f7d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tlsPolicyName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.datasource.RosTLSPoliciesProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "refresh_options": "refreshOptions",
        "tls_policy_name": "tlsPolicyName",
    },
)
class RosTLSPoliciesProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tls_policy_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosTLSPolicies``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-tlspolicies

        :param instance_id: 
        :param refresh_options: 
        :param tls_policy_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__96e179c9f0e6ffd3c54f200937f2b85f034a3d1cfbaa37696bbb2cf6397213e5)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument tls_policy_name", value=tls_policy_name, expected_type=type_hints["tls_policy_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if tls_policy_name is not None:
            self._values["tls_policy_name"] = tls_policy_name

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the TLS policy.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tls_policy_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: tlsPolicyName: The name of the TLS policy. The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
        '''
        result = self._values.get("tls_policy_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTLSPoliciesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosTLSPolicy(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.datasource.RosTLSPolicy",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::SLB::TLSPolicy``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``TLSPolicy`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-tlspolicy
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosTLSPolicyProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__38f58e183603d0efd61d02698e6728f1f0d241cd045684c34fc57947a057dd66)
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
            type_hints = typing.get_type_hints(_typecheckingstub__973cdcd6d86033325c24ea918cfdc7c472b024b7396040bad65a562f8992a018)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCiphers")
    def attr_ciphers(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Ciphers: The cipher suites supported by the TLS version.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCiphers"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: The timestamp generated when the TLS policy is created.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceId: The ID of the TLS policy.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrTlsPolicyName")
    def attr_tls_policy_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TLSPolicyName: The name of the TLS policy.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTlsPolicyName"))

    @builtins.property
    @jsii.member(jsii_name="attrTlsVersions")
    def attr_tls_versions(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TlsVersions: The version of the TLS protocol.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTlsVersions"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__fda62abe155f39769ef0be5d5f663dc894ef7c8fda1325f2da57bf105541e088)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the TLS policy.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__138188c3955bab5395f232195b83c3fe71d40adbba83c9fb22dfcc0bf505c8e4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a611c72aaddcba43956dd2f1249f252d40e1544c692b1b4485237e813b7da1b0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.datasource.RosTLSPolicyProps",
    jsii_struct_bases=[],
    name_mapping={"instance_id": "instanceId", "refresh_options": "refreshOptions"},
)
class RosTLSPolicyProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosTLSPolicy``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-tlspolicy

        :param instance_id: 
        :param refresh_options: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fabda701637d5437b864e886b7d455bdeabc54d22c4db6eb3ba0488779e47be1)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the TLS policy.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTLSPolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosVServerGroup(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.datasource.RosVServerGroup",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::SLB::VServerGroup``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``VServerGroup`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-vservergroup
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosVServerGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__edaa8dacb971c8029c49c241f827d31ffc21f614bf0c4edde8cd73d5233a4fb7)
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
            type_hints = typing.get_type_hints(_typecheckingstub__83d07ff5745e71aaf193cadc04cd021740c6679b7a57bc58bfc15248d36b79a8)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrBackendServers")
    def attr_backend_servers(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BackendServers: The list of backend servers.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBackendServers"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: The time when the CLB instance was created. The time follows the YYYY-MM-DDThh:mm:ssZ format.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerId")
    def attr_load_balancer_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LoadBalancerId: The ID of the CLB instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLoadBalancerId"))

    @builtins.property
    @jsii.member(jsii_name="attrVServerGroupId")
    def attr_v_server_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VServerGroupId: The ID of the vServer group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVServerGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrVServerGroupName")
    def attr_v_server_group_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VServerGroupName: The name of the vServer group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVServerGroupName"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__4866ec3b4fa5e2c07f9748171fec5faf2caf41ddbf880398aa4391f22be8534d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="vServerGroupId")
    def v_server_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vServerGroupId: The ID of the vServer group.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vServerGroupId"))

    @v_server_group_id.setter
    def v_server_group_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f0e6067dd42566000a2b4ca58135e02bd83d2c060fc6df1663e33f04fbe76190)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vServerGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f2d0191aab080c2b10fd48fd98c745989effe22646d3330d353b40317ec36f77)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.datasource.RosVServerGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "v_server_group_id": "vServerGroupId",
        "refresh_options": "refreshOptions",
    },
)
class RosVServerGroupProps:
    def __init__(
        self,
        *,
        v_server_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosVServerGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-vservergroup

        :param v_server_group_id: 
        :param refresh_options: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c3fc6b26ae4bbbbd03d2f1211fa09bd22fda84a1a1a86d459c027d811e979977)
            check_type(argname="argument v_server_group_id", value=v_server_group_id, expected_type=type_hints["v_server_group_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "v_server_group_id": v_server_group_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def v_server_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vServerGroupId: The ID of the vServer group.
        '''
        result = self._values.get("v_server_group_id")
        assert result is not None, "Required property 'v_server_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosVServerGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosVServerGroups(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.datasource.RosVServerGroups",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::SLB::VServerGroups``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``VServerGroups`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-vservergroups
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosVServerGroupsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__49fd9b40d82f30340905c1148b8aca447243317b17abe5db736d887de8e7405a)
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
            type_hints = typing.get_type_hints(_typecheckingstub__9b514ad9431d9600947dfde841d20ee0ee2c7bd08ab6a1fd58f60df48a23ea58)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrVServerGroupIds")
    def attr_v_server_group_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VServerGroupIds: The list of VServer group IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVServerGroupIds"))

    @builtins.property
    @jsii.member(jsii_name="attrVServerGroups")
    def attr_v_server_groups(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VServerGroups: The list of VServer groups.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVServerGroups"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__daf9e6b81a845bb3195512b30cddd003b4b8f170e7a0e05b2b418ecab8bc4a17)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="loadBalancerId")
    def load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: loadBalancerId: The ID of the CLB instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "loadBalancerId"))

    @load_balancer_id.setter
    def load_balancer_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a257725ac472a3564829d45c06acffc3eeae4b82b2b807348dcf629c1a73fbdb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loadBalancerId", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__07176c2cfe7ed892ab2a7e4492e6f8e33119b91b5b63086c3f76a1cdc4e08dfb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.datasource.RosVServerGroupsProps",
    jsii_struct_bases=[],
    name_mapping={
        "load_balancer_id": "loadBalancerId",
        "refresh_options": "refreshOptions",
    },
)
class RosVServerGroupsProps:
    def __init__(
        self,
        *,
        load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosVServerGroups``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-vservergroups

        :param load_balancer_id: 
        :param refresh_options: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dc7e6240147cf67ea50421eda17f91be49bf44cfe15b78a45fa95e93a915cae0)
            check_type(argname="argument load_balancer_id", value=load_balancer_id, expected_type=type_hints["load_balancer_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "load_balancer_id": load_balancer_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: loadBalancerId: The ID of the CLB instance.
        '''
        result = self._values.get("load_balancer_id")
        assert result is not None, "Required property 'load_balancer_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosVServerGroupsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosZones(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.datasource.RosZones",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::SLB::Zones``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Zones`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-zones
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosZonesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6934b56f22d2786a24701bbf351583558d875a87b038a813d3c56e0310db101e)
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
            type_hints = typing.get_type_hints(_typecheckingstub__b3be719969cae4b6ef7a5ee7cdefa12959dd1294175e8e91d45a16ae7a13d9c8)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneIds")
    def attr_zone_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ZoneIds: The list of The primary zone Ids.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZoneIds"))

    @builtins.property
    @jsii.member(jsii_name="attrZones")
    def attr_zones(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Zones: The list of The Zones.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZones"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__9304f3f36780b79a40843059af343ab6fbc0d5235eebc776f9091ec029b28299)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="addressIpVersion")
    def address_ip_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        addressIpVersion: The type of IP address.
        Valid values: ipv4 and ipv6.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "addressIpVersion"))

    @address_ip_version.setter
    def address_ip_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c8c72a8c82f97579e28786913387c27023bb19a8c44cb66da2c77a24a53e04c0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "addressIpVersion", value)

    @builtins.property
    @jsii.member(jsii_name="addressType")
    def address_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        addressType: The type of network.Valid values: vpc, classic_internet, and classic_intranet..
        vpc: an internal SLB instance that is deployed in a virtual private cloud (VPC).
        classic_internet: a public-facing SLB instance.
        classic_intranet: an internal SLB instance that is deployed in a classic network.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "addressType"))

    @address_type.setter
    def address_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__501c26f26d206afaf9cfc287851250a2cc09d3d69a610dde2f3d19b19eeb5c9a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "addressType", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f72cba2119d8729fcc0ae9481a9a60f5fb283ed0e61526a090aff325a5b05801)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.datasource.RosZonesProps",
    jsii_struct_bases=[],
    name_mapping={
        "address_ip_version": "addressIpVersion",
        "address_type": "addressType",
        "refresh_options": "refreshOptions",
    },
)
class RosZonesProps:
    def __init__(
        self,
        *,
        address_ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        address_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosZones``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-zones

        :param address_ip_version: 
        :param address_type: 
        :param refresh_options: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a22aff7cc31fdbf2cba249ed4ec699a7a2138c3ec7c2c4c9df60fa52c68fbafe)
            check_type(argname="argument address_ip_version", value=address_ip_version, expected_type=type_hints["address_ip_version"])
            check_type(argname="argument address_type", value=address_type, expected_type=type_hints["address_type"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if address_ip_version is not None:
            self._values["address_ip_version"] = address_ip_version
        if address_type is not None:
            self._values["address_type"] = address_type
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def address_ip_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        addressIpVersion: The type of IP address.
        Valid values: ipv4 and ipv6.
        '''
        result = self._values.get("address_ip_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def address_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        addressType: The type of network.Valid values: vpc, classic_internet, and classic_intranet..
        vpc: an internal SLB instance that is deployed in a virtual private cloud (VPC).
        classic_internet: a public-facing SLB instance.
        classic_intranet: an internal SLB instance that is deployed in a classic network.
        '''
        result = self._values.get("address_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosZonesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IRule)
class Rule(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.datasource.Rule",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::SLB::Rule``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosRule``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-rule
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RuleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e579fb83a763c8225e6bc4de826648090ebe784fde4a1039ea314f5697bbbd80)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCookie")
    def attr_cookie(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Cookie: The cookie to be configured on the backend server.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCookie"))

    @builtins.property
    @jsii.member(jsii_name="attrCookieTimeout")
    def attr_cookie_timeout(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CookieTimeout: The timeout period of a cookie.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCookieTimeout"))

    @builtins.property
    @jsii.member(jsii_name="attrDomain")
    def attr_domain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Domain: The domain name that is configured in the forwarding rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheck")
    def attr_health_check(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheck: Specifies whether to enable health checks.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheck"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckConnectPort")
    def attr_health_check_connect_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckConnectPort: The port of the backend server that is used for health checks.

        Valid values: 1 to 65535.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheckConnectPort"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckDomain")
    def attr_health_check_domain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckDomain: The domain name that is used for health checks.

        Valid values:  $_ip: The private IP address of the backend server. If the $_ip parameter is set or the HealthCheckDomain parameter is not set, SLB uses the private IP addresses of backend servers as the domain names for health checks. domain: The domain name must be 1 to 80 characters in length. It can contain only letters, digits, periods (.),and hyphens (-).
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheckDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckHttpCode")
    def attr_health_check_http_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckHttpCode: The HTTP status code that indicates a successful health check.

        Separate multiple HTTP status codes with commas (,). Default value: http_2xx.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheckHttpCode"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckInterval")
    def attr_health_check_interval(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckInterval: The time interval between two consecutive health checks.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheckInterval"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckTimeout")
    def attr_health_check_timeout(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckTimeout: The timeout period of a health check response.

        If a backend ECS instance does not send an expected response within the specified period of time, the ECS instance is considered unhealthy.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheckTimeout"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthCheckUri")
    def attr_health_check_uri(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthCheckUri: The URI that is used for health checks.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthCheckUri"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthyThreshold")
    def attr_healthy_threshold(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthyThreshold: The number of consecutive successful health checks that must occur before an unhealthy backend server is declared healthy.

        In this case, the health check state is changed from fail to success.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthyThreshold"))

    @builtins.property
    @jsii.member(jsii_name="attrListenerPort")
    def attr_listener_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ListenerPort: The listener port that is used by the SLB instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrListenerPort"))

    @builtins.property
    @jsii.member(jsii_name="attrListenerSync")
    def attr_listener_sync(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ListenerSync: Indicates whether the forwarding rule uses the scheduling algorithm, session persistence, and health check configurations of the listener.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrListenerSync"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerId")
    def attr_load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LoadBalancerId: The ID of the SLB instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLoadBalancerId"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleId")
    def attr_rule_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleId: The ID of the forwarding rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRuleId"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleName")
    def attr_rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleName: The name of the forwarding rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRuleName"))

    @builtins.property
    @jsii.member(jsii_name="attrScheduler")
    def attr_scheduler(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Scheduler: The scheduling algorithm.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrScheduler"))

    @builtins.property
    @jsii.member(jsii_name="attrStickySession")
    def attr_sticky_session(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StickySession: Indicates whether session persistence is enabled.

        Valid values: on and off.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStickySession"))

    @builtins.property
    @jsii.member(jsii_name="attrStickySessionType")
    def attr_sticky_session_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StickySessionType: The method that is used to handle a cookie.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStickySessionType"))

    @builtins.property
    @jsii.member(jsii_name="attrUnhealthyThreshold")
    def attr_unhealthy_threshold(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UnhealthyThreshold: The number of consecutive failed health checks that must occur before a healthy backend server is declared unhealthy.

        In this case, the health check state is changed from success to fail.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUnhealthyThreshold"))

    @builtins.property
    @jsii.member(jsii_name="attrUrl")
    def attr_url(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Url: The URL that is configured in the forwarding rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUrl"))

    @builtins.property
    @jsii.member(jsii_name="attrVserverGroupId")
    def attr_vserver_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VserverGroupId: The ID of the vServer group that is associated with the forwarding rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVserverGroupId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "RuleProps":
        return typing.cast("RuleProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__74537ef6de4e363bcb4154fe10e03a62f70c60ed8ae50b6b08ea0e48fefa8f32)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0f9f404d4c74690d5721d1aae3e94ee3d7c34e4068525d213e1160520fa6c6ef)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__88a77f2998ba9fab25bbe4814d078bfea8e91cc3353dacfefef5a4b97bae9075)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.datasource.RuleProps",
    jsii_struct_bases=[],
    name_mapping={"rule_id": "ruleId", "refresh_options": "refreshOptions"},
)
class RuleProps:
    def __init__(
        self,
        *,
        rule_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Rule``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-rule

        :param rule_id: Property ruleId: The ID of the forwarding rule.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cd6cb941a9b5f41ae4afc5086db905ce2cdcdc8acbf7f8b2570d20185963efcb)
            check_type(argname="argument rule_id", value=rule_id, expected_type=type_hints["rule_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "rule_id": rule_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def rule_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property ruleId: The ID of the forwarding rule.'''
        result = self._values.get("rule_id")
        assert result is not None, "Required property 'rule_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IRules)
class Rules(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.datasource.Rules",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::SLB::Rules``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosRules``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-rules
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RulesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ec5b81e8a3502b107b02a8e8452aef3fb2c56d518e99bb4bb57392f75057d982)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrRuleIds")
    def attr_rule_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleIds: The list of rule IDs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRuleIds"))

    @builtins.property
    @jsii.member(jsii_name="attrRules")
    def attr_rules(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Rules: The list of rules.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRules"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "RulesProps":
        return typing.cast("RulesProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e9777174f198fbd32ba9bc4bb8d6819e780aa9475ee136544a145f7beb417de9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ad7d1387618fc32badd3a860a96c2fbf6e56e372fe536cc917be91e23f3c844e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b852d62fccd0601c985466ea674cba5a8a04cb0a7bf8aba6251ff1fc54833bfe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.datasource.RulesProps",
    jsii_struct_bases=[],
    name_mapping={
        "listener_port": "listenerPort",
        "load_balancer_id": "loadBalancerId",
        "listener_protocol": "listenerProtocol",
        "refresh_options": "refreshOptions",
    },
)
class RulesProps:
    def __init__(
        self,
        *,
        listener_port: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        listener_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Rules``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-rules

        :param listener_port: Property listenerPort: The frontend listener port that is used by the Classic Load Balancer (CLB) instance.
        :param load_balancer_id: Property loadBalancerId: The ID of the CLB instance.
        :param listener_protocol: Property listenerProtocol: The frontend listener protocol that is used by the SLB instance.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a72d585a2cd9b9f9ca0fe6ace287abe200ca1dad9c80ef20969b82ce4a3a0765)
            check_type(argname="argument listener_port", value=listener_port, expected_type=type_hints["listener_port"])
            check_type(argname="argument load_balancer_id", value=load_balancer_id, expected_type=type_hints["load_balancer_id"])
            check_type(argname="argument listener_protocol", value=listener_protocol, expected_type=type_hints["listener_protocol"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "listener_port": listener_port,
            "load_balancer_id": load_balancer_id,
        }
        if listener_protocol is not None:
            self._values["listener_protocol"] = listener_protocol
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def listener_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property listenerPort: The frontend listener port that is used by the Classic Load Balancer (CLB) instance.'''
        result = self._values.get("listener_port")
        assert result is not None, "Required property 'listener_port' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property loadBalancerId: The ID of the CLB instance.'''
        result = self._values.get("load_balancer_id")
        assert result is not None, "Required property 'load_balancer_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def listener_protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property listenerProtocol: The frontend listener protocol that is used by the SLB instance.'''
        result = self._values.get("listener_protocol")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RulesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(ITLSPolicies)
class TLSPolicies(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.datasource.TLSPolicies",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::SLB::TLSPolicies``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosTLSPolicies``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-tlspolicies
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["TLSPoliciesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__69f29bd95f157f3a710a577b6852324a9106bf0429f10013b65d312d934edfe2)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrInstanceIds")
    def attr_instance_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceIds: The list of instance IDs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrTlsPolicies")
    def attr_tls_policies(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TLSPolicies: The list of tls policies.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTlsPolicies"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "TLSPoliciesProps":
        return typing.cast("TLSPoliciesProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__61cf9efa3d1cc902b3da16861ea61bd0a1114f8da84db42ac663c1c519409400)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__88002743d9121960a34d2ccde0dfc3b903d5350f38dd182901f32d7c1fa8e7a7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8fb7936214ad705da2eef4f7313937da0e3fd3877ff8bc6ae2a01786e77d5839)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.datasource.TLSPoliciesProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "refresh_options": "refreshOptions",
        "tls_policy_name": "tlsPolicyName",
    },
)
class TLSPoliciesProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tls_policy_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``TLSPolicies``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-tlspolicies

        :param instance_id: Property instanceId: The ID of the TLS policy.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        :param tls_policy_name: Property tlsPolicyName: The name of the TLS policy. The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3dd7b6f8b3c280a5553e985fd0a058f322a573322a1fadcb1e41f83cec45c167)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument tls_policy_name", value=tls_policy_name, expected_type=type_hints["tls_policy_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if tls_policy_name is not None:
            self._values["tls_policy_name"] = tls_policy_name

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: The ID of the TLS policy.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tls_policy_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property tlsPolicyName: The name of the TLS policy.

        The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
        '''
        result = self._values.get("tls_policy_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TLSPoliciesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(ITLSPolicy)
class TLSPolicy(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.datasource.TLSPolicy",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::SLB::TLSPolicy``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosTLSPolicy``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-tlspolicy
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["TLSPolicyProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5aa7d3205ef8c624e7094012a75ac319d9bca84c7310d66e0dd0640e21b6f599)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCiphers")
    def attr_ciphers(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Ciphers: The cipher suites supported by the TLS version.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCiphers"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The timestamp generated when the TLS policy is created.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The ID of the TLS policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrTlsPolicyName")
    def attr_tls_policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TLSPolicyName: The name of the TLS policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTlsPolicyName"))

    @builtins.property
    @jsii.member(jsii_name="attrTlsVersions")
    def attr_tls_versions(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TlsVersions: The version of the TLS protocol.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTlsVersions"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "TLSPolicyProps":
        return typing.cast("TLSPolicyProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ca9f1a52d6af138e3f550cd3bbdfc8cd1b4e878f8aa72adf59aa6a600771a694)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dc8c3843b958e67b3ff4361855344d15606907f2040277116ed7e8a2822a528f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cc9fd7fdb23ff587e0a3581d75de4fd1d888da2e3f8281dbcb52a6aadb37c56c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.datasource.TLSPolicyProps",
    jsii_struct_bases=[],
    name_mapping={"instance_id": "instanceId", "refresh_options": "refreshOptions"},
)
class TLSPolicyProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``TLSPolicy``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-tlspolicy

        :param instance_id: Property instanceId: The ID of the TLS policy.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__61aa5531a407694d5c6c9db0f0ca432573bf4ba4b287e81582175af3a557ffc5)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: The ID of the TLS policy.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TLSPolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IVServerGroup)
class VServerGroup(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.datasource.VServerGroup",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::SLB::VServerGroup``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosVServerGroup``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-vservergroup
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["VServerGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d7f740decceee67aa03f781fed3cab0d6e9812175e4a61ca420e13bbebc3fbac)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrBackendServers")
    def attr_backend_servers(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackendServers: The list of backend servers.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBackendServers"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The time when the CLB instance was created.

        The time follows the YYYY-MM-DDThh:mm:ssZ format.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerId")
    def attr_load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LoadBalancerId: The ID of the CLB instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLoadBalancerId"))

    @builtins.property
    @jsii.member(jsii_name="attrVServerGroupId")
    def attr_v_server_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VServerGroupId: The ID of the vServer group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVServerGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrVServerGroupName")
    def attr_v_server_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VServerGroupName: The name of the vServer group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVServerGroupName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "VServerGroupProps":
        return typing.cast("VServerGroupProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6b37b8c69c2d4cd1bffaf83f4ece52adddb53ffbc517b065f5aaffe9c52deec7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9730e7e80246a45b8f268e14b1d1a986b79010371b3c748a32b683c00dafeea1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5bf84f5afbd243f097ca795abdc08f0dd2526e65ed6044580029b2ccbc323356)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.datasource.VServerGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "v_server_group_id": "vServerGroupId",
        "refresh_options": "refreshOptions",
    },
)
class VServerGroupProps:
    def __init__(
        self,
        *,
        v_server_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``VServerGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-vservergroup

        :param v_server_group_id: Property vServerGroupId: The ID of the vServer group.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1555593e4730cbeadaef8d2615a9241c8c26b18d15ecd0bb5f1db84cbdad679c)
            check_type(argname="argument v_server_group_id", value=v_server_group_id, expected_type=type_hints["v_server_group_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "v_server_group_id": v_server_group_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def v_server_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vServerGroupId: The ID of the vServer group.'''
        result = self._values.get("v_server_group_id")
        assert result is not None, "Required property 'v_server_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "VServerGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IVServerGroups)
class VServerGroups(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.datasource.VServerGroups",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::SLB::VServerGroups``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosVServerGroups``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-vservergroups
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["VServerGroupsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__29b37a9f26f0551f66bedc0ccc81f43ad633b0f9cd85edd1f9dff605d96e61c1)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrVServerGroupIds")
    def attr_v_server_group_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VServerGroupIds: The list of VServer group IDs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVServerGroupIds"))

    @builtins.property
    @jsii.member(jsii_name="attrVServerGroups")
    def attr_v_server_groups(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VServerGroups: The list of VServer groups.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVServerGroups"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "VServerGroupsProps":
        return typing.cast("VServerGroupsProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ac8a1fef81ea4e5165eae3889d51e4adffe50ab9dd4f7348b0740b1b4748d577)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b3ef64d9e42ebf4867889efd4c49dc22e71321b430c925bfe29f56416a9b7e39)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b11cf86663027ad4d6c9494c166c785d331c7cc2152b3640b6caaba7c726cc34)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.datasource.VServerGroupsProps",
    jsii_struct_bases=[],
    name_mapping={
        "load_balancer_id": "loadBalancerId",
        "refresh_options": "refreshOptions",
    },
)
class VServerGroupsProps:
    def __init__(
        self,
        *,
        load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``VServerGroups``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-vservergroups

        :param load_balancer_id: Property loadBalancerId: The ID of the CLB instance.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1b6892a397d383802025b636bc7f941c315daadf8a68530bb667df6bf7d036d4)
            check_type(argname="argument load_balancer_id", value=load_balancer_id, expected_type=type_hints["load_balancer_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "load_balancer_id": load_balancer_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property loadBalancerId: The ID of the CLB instance.'''
        result = self._values.get("load_balancer_id")
        assert result is not None, "Required property 'load_balancer_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "VServerGroupsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IZones)
class Zones(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.datasource.Zones",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::SLB::Zones``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosZones``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-zones
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["ZonesProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__564c2a79f31847e39cd2017e8967f345e1655f7dcc0d15c9c22adc877ce543ca)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrZoneIds")
    def attr_zone_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ZoneIds: The list of The primary zone Ids.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrZoneIds"))

    @builtins.property
    @jsii.member(jsii_name="attrZones")
    def attr_zones(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Zones: The list of The Zones.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrZones"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ZonesProps":
        return typing.cast("ZonesProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f84f160d2cb6b19cfe838913a4f64b5d8580cb55dde6275156bccb291ddaa9e0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ed7ec060a45329b03f4f1dd1a82ddce4228ac0ad5801d0db5e182f4427e2801e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b506c9a2baf1d255a75569b7b581c9b1163913dad8a2cfce5e1ba780892bb5cf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.datasource.ZonesProps",
    jsii_struct_bases=[],
    name_mapping={
        "address_ip_version": "addressIpVersion",
        "address_type": "addressType",
        "refresh_options": "refreshOptions",
    },
)
class ZonesProps:
    def __init__(
        self,
        *,
        address_ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        address_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Zones``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-zones

        :param address_ip_version: Property addressIpVersion: The type of IP address. Valid values: ipv4 and ipv6.
        :param address_type: Property addressType: The type of network.Valid values: vpc, classic_internet, and classic_intranet.. vpc: an internal SLB instance that is deployed in a virtual private cloud (VPC). classic_internet: a public-facing SLB instance. classic_intranet: an internal SLB instance that is deployed in a classic network.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__314fc4cc7b545a1e6bc907dc8ca0015b8abeb639796cb4cc3b3e37a2deb4e853)
            check_type(argname="argument address_ip_version", value=address_ip_version, expected_type=type_hints["address_ip_version"])
            check_type(argname="argument address_type", value=address_type, expected_type=type_hints["address_type"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if address_ip_version is not None:
            self._values["address_ip_version"] = address_ip_version
        if address_type is not None:
            self._values["address_type"] = address_type
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def address_ip_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property addressIpVersion: The type of IP address.

        Valid values: ipv4 and ipv6.
        '''
        result = self._values.get("address_ip_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def address_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property addressType: The type of network.Valid values: vpc, classic_internet, and classic_intranet.. vpc: an internal SLB instance that is deployed in a virtual private cloud (VPC). classic_internet: a public-facing SLB instance. classic_intranet: an internal SLB instance that is deployed in a classic network.'''
        result = self._values.get("address_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ZonesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IAccessControl)
class AccessControl(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.datasource.AccessControl",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::SLB::AccessControl``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosAccessControl``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-accesscontrol
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[AccessControlProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d2c553ccd793246068603b15510e341c87110a925bed9003851faa31c71cca83)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAclEntries")
    def attr_acl_entries(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AclEntries: The IP entries that you want to remove from the network ACL.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAclEntries"))

    @builtins.property
    @jsii.member(jsii_name="attrAclId")
    def attr_acl_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AclId: The ID of the ACL.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAclId"))

    @builtins.property
    @jsii.member(jsii_name="attrAclName")
    def attr_acl_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AclName: The ACL name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAclName"))

    @builtins.property
    @jsii.member(jsii_name="attrAddressIpVersion")
    def attr_address_ip_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AddressIpVersion: The IP version.

        Valid values: ipv4 and ipv6.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAddressIpVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrRelatedListeners")
    def attr_related_listeners(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RelatedListeners: The listeners that are associated with the network ACL.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRelatedListeners"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The resource group ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Tags: The tags of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AccessControlProps:
        return typing.cast(AccessControlProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__becd50892c4c241fa54ee742527557b46dbc4fe8af0ff59e4aa278071944628f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__33a45f90822cad48461fe2f9ef3893bf9e07ab8e7b7154248aa8c1f03ef2b048)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c6515d359a25079f2673f013d506ce0a88f571ae61c124587bfa38aeb1fef7ff)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IAccessControls)
class AccessControls(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.datasource.AccessControls",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::SLB::AccessControls``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosAccessControls``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-accesscontrols
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union[AccessControlsProps, typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e6eff42573e427403e456b8e9726f93522e4833615f21dbea692c30502125a6f)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAccessControls")
    def attr_access_controls(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AccessControls: The list of access controls.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAccessControls"))

    @builtins.property
    @jsii.member(jsii_name="attrAclIds")
    def attr_acl_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AclIds: The list of acl IDs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAclIds"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AccessControlsProps:
        return typing.cast(AccessControlsProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__51c4498219e8d00d0c970b6889ed7d4656479ea1fac5a4a09ecbfc4722ac0971)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b2a84aa0e6b6e983a479f549967130a937b7c44c2ad44acb963fd48a33bec02b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7b20566110579d4a9c281a8a908331fc5c55dd5baea9897806243aa196078b01)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IDomainExtension)
class DomainExtension(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.datasource.DomainExtension",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::SLB::DomainExtension``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDomainExtension``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-domainextension
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[DomainExtensionProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d4ff601084e5088ff0717e9bd4c4f4bc76af57b0f2f44655acd2d0c69cd8f28f)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDomain")
    def attr_domain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Domain: The domain name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainExtensionId")
    def attr_domain_extension_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainExtensionId: The ID of the additional certificate.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDomainExtensionId"))

    @builtins.property
    @jsii.member(jsii_name="attrListenerPort")
    def attr_listener_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ListenerPort: The frontend port of the HTTPS listener that is configured for the SLB instance.

        Valid values: 1 to 65535.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrListenerPort"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerId")
    def attr_load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LoadBalancerId: The ID of the SLB instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLoadBalancerId"))

    @builtins.property
    @jsii.member(jsii_name="attrServerCertificateId")
    def attr_server_certificate_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServerCertificateId: The ID of the server certificate that is used by the domain name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrServerCertificateId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DomainExtensionProps:
        return typing.cast(DomainExtensionProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__176a40276462e02a777857d800d9501ec117e11d767026d453f2ead05ce1ed96)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bc98e2a3fdb0d48b69762bff4eb6e1b9303f4d749b478668846282e9618d32ec)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3f5457d6c0ca5d45f124be13e0a341335ced29d03283f9109b90532ac29322dc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IDomainExtensions)
class DomainExtensions(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.datasource.DomainExtensions",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::SLB::DomainExtensions``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDomainExtensions``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-domainextensions
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[DomainExtensionsProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__57624e86c83ee7c8093fff48345911e4c895a7800cbf8ca7b711232fe4a7b9b4)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDomainExtensionIds")
    def attr_domain_extension_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainExtensionIds: The list of domain extension IDs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDomainExtensionIds"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainExtensions")
    def attr_domain_extensions(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainExtensions: The list of domain extensions.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDomainExtensions"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DomainExtensionsProps:
        return typing.cast(DomainExtensionsProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__250b5ab9cd2532a8cd6a0841c48dfaa43c5b05a9ac57afbe0e0c0800c2f4b1fb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__030a8ae8f7948c1e54cdb63ad8a9e5893e9ccff04cc3608e1379143e0d56e640)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9570c611874a4947858892761512bafdfa92b265d058a845d761630853830d25)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "AccessControl",
    "AccessControlProps",
    "AccessControls",
    "AccessControlsProps",
    "DomainExtension",
    "DomainExtensionProps",
    "DomainExtensions",
    "DomainExtensionsProps",
    "IAccessControl",
    "IAccessControls",
    "IDomainExtension",
    "IDomainExtensions",
    "ILoadBalancer",
    "ILoadBalancerTCPListener",
    "ILoadBalancerTCPListeners",
    "ILoadBalancers",
    "IRule",
    "IRules",
    "ITLSPolicies",
    "ITLSPolicy",
    "IVServerGroup",
    "IVServerGroups",
    "IZones",
    "LoadBalancer",
    "LoadBalancerProps",
    "LoadBalancerTCPListener",
    "LoadBalancerTCPListenerProps",
    "LoadBalancerTCPListeners",
    "LoadBalancerTCPListenersProps",
    "LoadBalancers",
    "LoadBalancersProps",
    "RosAccessControl",
    "RosAccessControlProps",
    "RosAccessControls",
    "RosAccessControlsProps",
    "RosDomainExtension",
    "RosDomainExtensionProps",
    "RosDomainExtensions",
    "RosDomainExtensionsProps",
    "RosLoadBalancer",
    "RosLoadBalancerProps",
    "RosLoadBalancerTCPListener",
    "RosLoadBalancerTCPListenerProps",
    "RosLoadBalancerTCPListeners",
    "RosLoadBalancerTCPListenersProps",
    "RosLoadBalancers",
    "RosLoadBalancersProps",
    "RosRule",
    "RosRuleProps",
    "RosRules",
    "RosRulesProps",
    "RosTLSPolicies",
    "RosTLSPoliciesProps",
    "RosTLSPolicy",
    "RosTLSPolicyProps",
    "RosVServerGroup",
    "RosVServerGroupProps",
    "RosVServerGroups",
    "RosVServerGroupsProps",
    "RosZones",
    "RosZonesProps",
    "Rule",
    "RuleProps",
    "Rules",
    "RulesProps",
    "TLSPolicies",
    "TLSPoliciesProps",
    "TLSPolicy",
    "TLSPolicyProps",
    "VServerGroup",
    "VServerGroupProps",
    "VServerGroups",
    "VServerGroupsProps",
    "Zones",
    "ZonesProps",
]

publication.publish()

def _typecheckingstub__1b4208a2dd1bc6054bcde389ddff70ca085d818979364242a214f9904c60659c(
    *,
    acl_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__84a48742341036f352a00e9248dbd7c6b28eb634e643246824039507d476ef36(
    *,
    acl_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    address_ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f5ae3443f0bc5640dee11b6a5b51a519d10ab2fb886e5491bd3c426ef5a91d45(
    *,
    domain_extension_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9c8a726a47931d4c3db4d1b49045a5a1033fb60c6e6797181b2f7bcf129f3ca0(
    *,
    listener_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    domain_extension_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8c05c6f5ae159930ad06af7481b22bc4823d2c145fe76c04c9fd4f0e607a3dbd(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[LoadBalancerProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8a38de27f031fcbec82b5ddb7f1e0618cba7d2e4cadc9bc68a772d1a1f6539f7(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f1ebe500c2ecd743b78bdd0349ce97d6d3eebf26522af7eafe7a4461f05f0944(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0f3f90fc3ce8ebac8536bb602086754147ef3d39f8618da6428fd32d1dd40aac(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__72a889ee115195d124b442008e5293d441ba56a786826927c8633c43f1db935f(
    *,
    load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d63c162b7ee07b4e7c0c42c413ffa26fa48672f52f209b172547f32b26c35e48(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[LoadBalancerTCPListenerProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__52ea1c6296f9355053b97ac18ab3817724685733c3395b2362c4a7933fc89ac3(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__700849a0089e8c82ff57470c892a7698286b636122dcc456f4900869908f4f26(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7a21238dc2e2be8e5a8693ca9a550fd55035459a807f05a2eb3acceba641f652(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dd65e70931d1730ccdcec54c039855e7853877429dbd2d4553ba63ff5573ff67(
    *,
    listener_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bac83e3677fe97c324e941f9d9760fec07aedcf6b23675b26aae3ca3d7fb76fe(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[LoadBalancerTCPListenersProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bb8995501b7193fc4e1c280e6a3de30e8cac8e3321a2d1ce4e8643fe53db0cf9(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__03877efe51f70d3293187b75dabf3f5351dbd567962272c6d2a01e8443b2493a(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fc72ac7265af00fa5ed22eff20dad06992cbc496bf79dd360e7aa4a06b9ac1ad(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__956d922404e6c7ce1ca13fc20817820ebca68d8e7f4498a14ff70134068ab803(
    *,
    load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b5011156b6868f3cbbdfe8bd470d1c9e66680ae5cdf1c3059073e38b6b91847a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[LoadBalancersProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dcd5eea8b5534f49720a07b5b92342a75abaf21d69885cb5a0877e00aaa54da4(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c3ada8af7251c54a77ae74aa2594dd6f32a711fa4bc5f33f698d2d9eb0f08f53(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__49f20c15f4cfe7abfa4e50db89ae23c109168395896b2d96afeb723f67640ddc(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__053a9cc1fb3cc829bb75a0af0145d04b1f578305304ab31324d02abf64370cad(
    *,
    address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    address_ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    address_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    internet_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    load_balancer_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    load_balancer_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    master_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    payment_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    slave_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__16cdff3a391b4b3792c1ab195160f1c9c927d379a30bd554291a9108b7b5dbee(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAccessControlProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e07628f22c46d6b24245608b301916cfefd6709d226560f1546fa702bdab2f55(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__619f003502bf2f09509b839fcc86061f5250ac2a50737c45d0a996e86acf6e39(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__001e271b555726f6cb8738723d9ad561816c1a49234b41ccff533ea165bf87ea(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c890a083e64702ef97e1f080df36bd3b8bf49f5e73a479af67207125d1197ff9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__628931a38cbfffe2e22cc16ebf186b33db1a3f660ae133b67405ed691ebfa6b6(
    *,
    acl_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7c3849d13a08982c718769af8843f49460f988f9a416fc9b56382d3ccfe5ab60(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAccessControlsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__446a3f249dfe375eeaa9d6d8d53f3c6cf929589014954260e55ae1e7ac849973(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__deec1c94b6f2d541e7f352bf2d3957ab41586f7fc58784e9261ed800970af1ce(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e122c2ea3437c9f8f50083e6aa34db5e43f9fe357b3d1999c17edd8d8cd774d8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9e8c30a1ffafae694b7bda90396bf2daf058537c325fc73f9131ee274bb5f868(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a3775d22ee8e5ed676cb88eba636cbdb3560fb9b496528f04eb793a398177629(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__41a460dde6e0424e7c2ea2e5441b49385acf23375e4edd3508f491d29a9d8b24(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a5efc751daed12b610baa31a7a96e93c359c4624a8d2466e2b619905f67de798(
    *,
    acl_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    address_ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0001506547e0b9fc0e1f3d70142af5fd643a35e4ba15f531f562ae8ae295624e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDomainExtensionProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ad68d8cea54a80bbb67b384aea3e293ab6625b059fad350ae606c910c529ae68(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__16da193120887bba84f9270e096315705f304b391948d6285183cb624054685c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0e6292c05914b41ee740b432f2f3fefec466c6b0688b4d301dd8dd5b2b4130f4(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6818bc6ad90797f685451309738eb8bf20df7c9b7fe1af6d282d516dad35163d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8d86275fb3d875ceea307e0a9844fbffbc8a8439669ca1ee1329040485e3e3cc(
    *,
    domain_extension_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d91b0cf25f2cf7cf9799bc1aa5c5d3f21e331eab641ad4e1bc3cbec7f0fa440f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDomainExtensionsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__77895b9c0fb60a85275be5fe15c02f99097f1fbe505a4a3d31955650bbc4dfd4(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__18fa49cfed86f12c4083a1c09d495b08faac23446ce722c34fc48f747339a098(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__afb7ad02c4750cdbee434add2030b0b71f4b6dc86313cadd8c4cc126c5aad904(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__75981201fc7408b5ebf249fac8f5a543bf7be4049070921df96138e6595bb38e(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eadbeaa34916e88f6e1cd5239725886c72e447a79bf002ede5df325c852127ee(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__555dd19c532d2e6b9513c7096786bceebf6e9a4af3cbf82775d955a2e2edde9a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c2bd4733450a5533a1809b5c8d137464ae54db9203f1cec9be5f6713319e0dfe(
    *,
    listener_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    domain_extension_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__24327bb23b4c28b95a8cff205aa1776129a1fbc0c2ec8a7035a280350202c578(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosLoadBalancerProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__221407d40614d11e9ace25e58f599e8618299042ba5ac52b7313df37bfb2d8ab(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ce91ab2dcae643824c675e046fadf83efdc14ba2cbf49a20019bae4dfc5195b6(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__becbceb3e6d5695654f0e27ae993272369b92bc41349b75eb0cf361e72c44989(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3b8bdd5e6b25482153ce2e3bf80872b87b8167a5e45568957306647b74a9df7f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b9cdb5ab5fc495c80a495a525dcc12d223095e767be0802e5ed600a46d17d23d(
    *,
    load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__64d68c39759a63cc015aa3fb1b3ae0c3125197507c5604154a8159079d42032d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosLoadBalancerTCPListenerProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__26fa8819b5b74ae8f1a0f336729eecfc211297af985d3aba1a27df4ef5e3eca5(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__30f0f769ac31d60b77e8a02785d2b3963b3dde2f95203100ce151cd664cc79c6(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__97452925786f61d880ab9c484dbb3932bc42afd132b8f45b7b95ce55be2a4994(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dc1320b5718d40898ce7a60491a3b25ea378777085e1ba04c2c1f29174d49117(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4ec8ecc0ef87cb9ff8e8a0050f63a44fa6f22a7a7378a180ca792fc59549149b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8e4c819a93d1353bcef3ed46dc8f4321e89cf494a6e6c90d23b81baf616a8394(
    *,
    listener_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5e6a581beea1d027a167e283fa78638d13e46555c877d0954d8c1c5561a891e2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosLoadBalancerTCPListenersProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8098ea4ecd31ae402c93a6a674d7ea767a7b79e19756a7d78b6a29dff471e1cc(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aee5639f80aca502cc36ec35c1414a856eaa3a83903036888ef7dca657e7feff(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6d096c76013d887fbf90d98326d6656ce1dcc0e86f42ced68e1c8b67a79c0206(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eff11a028c54b8428a35876db595600699f3847c1a7b56812c52401e68980d3b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4185c42d70bbe581ec6402aca57b9e46a5da628a33ae7783e0630aeace39e6db(
    *,
    load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8f311a668b9df3cd87cbeef1b6bcf816e3393f13638996569ada614b3d540396(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosLoadBalancersProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__19736b5893ead00fc52127bb1324bc617e799cc867ec0072e439494bed193b35(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__75c9db405c674fd58638d9fc114a036e1136ce9b518b4bbf10a98df2550314dd(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__afe2cda9e626731db7670a538a406a575d1c61b996a34828a22d9a605c78edae(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__27ffedd566547db44dcce943a2085fe3c939655e2abc06d736cfa1f26a22d932(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bad9d2f3190de34d54bc8b2a3f4aa6c10f58ff5ae9997b68b34dbaf47bd5616d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2ad059fd7834578c80288bd12e2955b3aaa3da0c95c77b57461c669078d5e2e1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fd8c28e6debbfa6670ace3cf8574fc74dbc32fa5016b397422087bfab3ebe671(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__087930bd377eff91dfa9e82eb16d878e8ad7328434632b55691fc2b7bec565bc(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b753f5323d4b157224e2bc0f5f9c4212c5ca9e510efcd238f4b5b92b3bd7cad4(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bcd74a3efb9b0bffac87ed0de1e83a130bea65a9b235c4692f7edb76b87c409d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7a66816697cff1da554b59aa68d68dda59af67079ec6254cc741eadefdf2718e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__551d3665e0956ab07c7a498ebbace0e785ba5fab4865f7d4a5c404ed47a81d6a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c1ec076d6106af6c7b21c925cce78ae3b216e7f2c83672746b171c5e43baab6a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7585650ebd8ce83953ef8edbced8aeb98b04ad6593f8333d4bb56b13727b536e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b004fe22f0def022d48647a2a253452f493fcf2b584a2631fe939a40722093ac(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2d50ad5871abab64cc4bcbdea76eee8bdbab071c1c89f1ae567b28edef410c9e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5f2d846864135862b6304c975603c99ec7130ffde518dfe44f49c46863906b5a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__92a2210bfe079595d3f5d61d99448054e721542e9bc89fcb2c109c4a119a56f3(
    *,
    address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    address_ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    address_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    internet_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    load_balancer_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    load_balancer_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    master_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    payment_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    slave_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__849bb4292ac9439c64fae6c41051f63beabfab1dbfe47823a6dfce52ad0a1804(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosRuleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4c7c9f37ddf9e323cfb97b6701bc4dff05813a6430a36c7d5e929ba5f9d4287b(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__581e113bcb950c6d62dcc439211c37e221d33829dfc77c1be85e8b0cfb9d8875(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6e69828c0a4a69c95c5c0249bcab4294fea594a5ef5b8ff42f3b4577bc9d9419(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__97f84291b62f9c213eab508f85acbc0a19b510534c57a17fb8d22f82c95a3c68(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b5bc2bc198666c972a7722ca1d95aca226c97aa0c06bfa64a63b097e8de4a5b1(
    *,
    rule_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6460fdae11b11e90531689b83740595d845ef80fbff1a246dc16e8292fca9db7(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosRulesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c274de592fc6bec00356d5bf9a37de788a2ed9c7c1aeccfe796f9fb94d0a855d(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e980dcb415dd7866e1f4e48db00f48369d8ec0681bb866d27173c90b270c91a6(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c7aaab0a4d016cb5019ac6b3e8fb70a7704770de0e1148b6b7ad577a60212dda(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__92685b10e57c16ff68557ad73f881a82bf1df4a3ebb37f267de049d739283788(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__48781a74dbd4f010f22471dd19bc7c758b8e7e19c8dedcdd1aec51771b835d65(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__18a60f062279916e2a0873fcfa7ef987930f5a6dd7d60f0e9a2978e6d3f575a1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2b62fd54ebb6259094878d5e4ce6ae283140afc28d71dfa84efac6a0454a4dee(
    *,
    listener_port: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    listener_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f77fa86f3733904a6bd58c6e324a1827d06d38e6573a9ba678d2504d913bb9e0(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosTLSPoliciesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4dee44a7ee5148f48a55fdd64f7ac6225d7d3bfee6b18bfa79f43586efdbe7af(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0ebca4fddafa80fc4fa87c1a608e0367451f7fdf24557bd1b1813cb4fef42cb7(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0b91abada762e88f10cb2a8891c1cc3f56614628ea0d578a37dbeb6f060cddf8(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fa2e54a83795a19268f33496126048999f6a380779436f73d92cf8e2a61be21f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cac9b194c1b466d69a7f371afba2fc5481a90f3a8c2dab96e704c59a534c4f7d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__96e179c9f0e6ffd3c54f200937f2b85f034a3d1cfbaa37696bbb2cf6397213e5(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tls_policy_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__38f58e183603d0efd61d02698e6728f1f0d241cd045684c34fc57947a057dd66(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosTLSPolicyProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__973cdcd6d86033325c24ea918cfdc7c472b024b7396040bad65a562f8992a018(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fda62abe155f39769ef0be5d5f663dc894ef7c8fda1325f2da57bf105541e088(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__138188c3955bab5395f232195b83c3fe71d40adbba83c9fb22dfcc0bf505c8e4(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a611c72aaddcba43956dd2f1249f252d40e1544c692b1b4485237e813b7da1b0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fabda701637d5437b864e886b7d455bdeabc54d22c4db6eb3ba0488779e47be1(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__edaa8dacb971c8029c49c241f827d31ffc21f614bf0c4edde8cd73d5233a4fb7(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosVServerGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__83d07ff5745e71aaf193cadc04cd021740c6679b7a57bc58bfc15248d36b79a8(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4866ec3b4fa5e2c07f9748171fec5faf2caf41ddbf880398aa4391f22be8534d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f0e6067dd42566000a2b4ca58135e02bd83d2c060fc6df1663e33f04fbe76190(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f2d0191aab080c2b10fd48fd98c745989effe22646d3330d353b40317ec36f77(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c3fc6b26ae4bbbbd03d2f1211fa09bd22fda84a1a1a86d459c027d811e979977(
    *,
    v_server_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__49fd9b40d82f30340905c1148b8aca447243317b17abe5db736d887de8e7405a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosVServerGroupsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9b514ad9431d9600947dfde841d20ee0ee2c7bd08ab6a1fd58f60df48a23ea58(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__daf9e6b81a845bb3195512b30cddd003b4b8f170e7a0e05b2b418ecab8bc4a17(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a257725ac472a3564829d45c06acffc3eeae4b82b2b807348dcf629c1a73fbdb(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__07176c2cfe7ed892ab2a7e4492e6f8e33119b91b5b63086c3f76a1cdc4e08dfb(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dc7e6240147cf67ea50421eda17f91be49bf44cfe15b78a45fa95e93a915cae0(
    *,
    load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6934b56f22d2786a24701bbf351583558d875a87b038a813d3c56e0310db101e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosZonesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b3be719969cae4b6ef7a5ee7cdefa12959dd1294175e8e91d45a16ae7a13d9c8(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9304f3f36780b79a40843059af343ab6fbc0d5235eebc776f9091ec029b28299(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c8c72a8c82f97579e28786913387c27023bb19a8c44cb66da2c77a24a53e04c0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__501c26f26d206afaf9cfc287851250a2cc09d3d69a610dde2f3d19b19eeb5c9a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f72cba2119d8729fcc0ae9481a9a60f5fb283ed0e61526a090aff325a5b05801(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a22aff7cc31fdbf2cba249ed4ec699a7a2138c3ec7c2c4c9df60fa52c68fbafe(
    *,
    address_ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    address_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e579fb83a763c8225e6bc4de826648090ebe784fde4a1039ea314f5697bbbd80(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RuleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__74537ef6de4e363bcb4154fe10e03a62f70c60ed8ae50b6b08ea0e48fefa8f32(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0f9f404d4c74690d5721d1aae3e94ee3d7c34e4068525d213e1160520fa6c6ef(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__88a77f2998ba9fab25bbe4814d078bfea8e91cc3353dacfefef5a4b97bae9075(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cd6cb941a9b5f41ae4afc5086db905ce2cdcdc8acbf7f8b2570d20185963efcb(
    *,
    rule_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ec5b81e8a3502b107b02a8e8452aef3fb2c56d518e99bb4bb57392f75057d982(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RulesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e9777174f198fbd32ba9bc4bb8d6819e780aa9475ee136544a145f7beb417de9(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ad7d1387618fc32badd3a860a96c2fbf6e56e372fe536cc917be91e23f3c844e(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b852d62fccd0601c985466ea674cba5a8a04cb0a7bf8aba6251ff1fc54833bfe(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a72d585a2cd9b9f9ca0fe6ace287abe200ca1dad9c80ef20969b82ce4a3a0765(
    *,
    listener_port: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    listener_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__69f29bd95f157f3a710a577b6852324a9106bf0429f10013b65d312d934edfe2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[TLSPoliciesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__61cf9efa3d1cc902b3da16861ea61bd0a1114f8da84db42ac663c1c519409400(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__88002743d9121960a34d2ccde0dfc3b903d5350f38dd182901f32d7c1fa8e7a7(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8fb7936214ad705da2eef4f7313937da0e3fd3877ff8bc6ae2a01786e77d5839(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3dd7b6f8b3c280a5553e985fd0a058f322a573322a1fadcb1e41f83cec45c167(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tls_policy_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5aa7d3205ef8c624e7094012a75ac319d9bca84c7310d66e0dd0640e21b6f599(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[TLSPolicyProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ca9f1a52d6af138e3f550cd3bbdfc8cd1b4e878f8aa72adf59aa6a600771a694(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dc8c3843b958e67b3ff4361855344d15606907f2040277116ed7e8a2822a528f(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cc9fd7fdb23ff587e0a3581d75de4fd1d888da2e3f8281dbcb52a6aadb37c56c(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__61aa5531a407694d5c6c9db0f0ca432573bf4ba4b287e81582175af3a557ffc5(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d7f740decceee67aa03f781fed3cab0d6e9812175e4a61ca420e13bbebc3fbac(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[VServerGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6b37b8c69c2d4cd1bffaf83f4ece52adddb53ffbc517b065f5aaffe9c52deec7(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9730e7e80246a45b8f268e14b1d1a986b79010371b3c748a32b683c00dafeea1(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5bf84f5afbd243f097ca795abdc08f0dd2526e65ed6044580029b2ccbc323356(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1555593e4730cbeadaef8d2615a9241c8c26b18d15ecd0bb5f1db84cbdad679c(
    *,
    v_server_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__29b37a9f26f0551f66bedc0ccc81f43ad633b0f9cd85edd1f9dff605d96e61c1(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[VServerGroupsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ac8a1fef81ea4e5165eae3889d51e4adffe50ab9dd4f7348b0740b1b4748d577(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b3ef64d9e42ebf4867889efd4c49dc22e71321b430c925bfe29f56416a9b7e39(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b11cf86663027ad4d6c9494c166c785d331c7cc2152b3640b6caaba7c726cc34(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1b6892a397d383802025b636bc7f941c315daadf8a68530bb667df6bf7d036d4(
    *,
    load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__564c2a79f31847e39cd2017e8967f345e1655f7dcc0d15c9c22adc877ce543ca(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[ZonesProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f84f160d2cb6b19cfe838913a4f64b5d8580cb55dde6275156bccb291ddaa9e0(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ed7ec060a45329b03f4f1dd1a82ddce4228ac0ad5801d0db5e182f4427e2801e(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b506c9a2baf1d255a75569b7b581c9b1163913dad8a2cfce5e1ba780892bb5cf(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__314fc4cc7b545a1e6bc907dc8ca0015b8abeb639796cb4cc3b3e37a2deb4e853(
    *,
    address_ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    address_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d2c553ccd793246068603b15510e341c87110a925bed9003851faa31c71cca83(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AccessControlProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__becd50892c4c241fa54ee742527557b46dbc4fe8af0ff59e4aa278071944628f(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__33a45f90822cad48461fe2f9ef3893bf9e07ab8e7b7154248aa8c1f03ef2b048(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c6515d359a25079f2673f013d506ce0a88f571ae61c124587bfa38aeb1fef7ff(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e6eff42573e427403e456b8e9726f93522e4833615f21dbea692c30502125a6f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[AccessControlsProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__51c4498219e8d00d0c970b6889ed7d4656479ea1fac5a4a09ecbfc4722ac0971(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b2a84aa0e6b6e983a479f549967130a937b7c44c2ad44acb963fd48a33bec02b(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7b20566110579d4a9c281a8a908331fc5c55dd5baea9897806243aa196078b01(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d4ff601084e5088ff0717e9bd4c4f4bc76af57b0f2f44655acd2d0c69cd8f28f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DomainExtensionProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__176a40276462e02a777857d800d9501ec117e11d767026d453f2ead05ce1ed96(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bc98e2a3fdb0d48b69762bff4eb6e1b9303f4d749b478668846282e9618d32ec(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3f5457d6c0ca5d45f124be13e0a341335ced29d03283f9109b90532ac29322dc(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__57624e86c83ee7c8093fff48345911e4c895a7800cbf8ca7b711232fe4a7b9b4(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DomainExtensionsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__250b5ab9cd2532a8cd6a0841c48dfaa43c5b05a9ac57afbe0e0c0800c2f4b1fb(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__030a8ae8f7948c1e54cdb63ad8a9e5893e9ccff04cc3608e1379143e0d56e640(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9570c611874a4947858892761512bafdfa92b265d058a845d761630853830d25(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
