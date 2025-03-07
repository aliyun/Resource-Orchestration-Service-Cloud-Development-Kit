'''
## Aliyun ROS DIRECTMAIL Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as DIRECTMAIL from '@alicloud/ros-cdk-directmail';
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
    jsii_type="@alicloud/ros-cdk-directmail.DomainProps",
    jsii_struct_bases=[],
    name_mapping={"domain_name": "domainName"},
)
class DomainProps:
    def __init__(
        self,
        *,
        domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``Domain``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-directmail-domain

        :param domain_name: Property domainName: The name of the domain.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__024381072f2e5971cf82130b592b8168ac7d73d1bc643cd0d582d1497081af34)
            check_type(argname="argument domain_name", value=domain_name, expected_type=type_hints["domain_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "domain_name": domain_name,
        }

    @builtins.property
    def domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property domainName: The name of the domain.'''
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DomainProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-directmail.IDomain")
class IDomain(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Domain``.'''

    @builtins.property
    @jsii.member(jsii_name="attrCnameAuthStatus")
    def attr_cname_auth_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CnameAuthStatus: Cname auth status.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCnameConfirmStatus")
    def attr_cname_confirm_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CnameConfirmStatus: Cname confirm status.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCnameRecord")
    def attr_cname_record(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CnameRecord: Cname record.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the domain.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDefaultDomain")
    def attr_default_domain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DefaultDomain: Default domain.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDnsMx")
    def attr_dns_mx(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DnsMx: DNS MX.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDnsSpf")
    def attr_dns_spf(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DnsSpf: DNS SPF.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDnsTxt")
    def attr_dns_txt(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DnsTxt: DNS txt.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDomainId")
    def attr_domain_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainId: The ID of the domain.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainName: The name of the domain.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDomainType")
    def attr_domain_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainType: The type of the domain.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrIcpStatus")
    def attr_icp_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IcpStatus: ICP status.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMxAuthStatus")
    def attr_mx_auth_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MxAuthStatus: MX auth status.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMxRecord")
    def attr_mx_record(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MxRecord: MX Record.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSpfAuthStatus")
    def attr_spf_auth_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SpfAuthStatus: SPF auth status.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSpfRecord")
    def attr_spf_record(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SpfRecord: SPF record.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTlDomainName")
    def attr_tl_domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TlDomainName: TL domain name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTracefRecord")
    def attr_tracef_record(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TracefRecord: Tracef Record.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DomainProps:
        ...


class _IDomainProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Domain``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-directmail.IDomain"

    @builtins.property
    @jsii.member(jsii_name="attrCnameAuthStatus")
    def attr_cname_auth_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CnameAuthStatus: Cname auth status.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCnameAuthStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrCnameConfirmStatus")
    def attr_cname_confirm_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CnameConfirmStatus: Cname confirm status.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCnameConfirmStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrCnameRecord")
    def attr_cname_record(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CnameRecord: Cname record.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCnameRecord"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the domain.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDefaultDomain")
    def attr_default_domain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DefaultDomain: Default domain.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDefaultDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrDnsMx")
    def attr_dns_mx(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DnsMx: DNS MX.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDnsMx"))

    @builtins.property
    @jsii.member(jsii_name="attrDnsSpf")
    def attr_dns_spf(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DnsSpf: DNS SPF.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDnsSpf"))

    @builtins.property
    @jsii.member(jsii_name="attrDnsTxt")
    def attr_dns_txt(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DnsTxt: DNS txt.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDnsTxt"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainId")
    def attr_domain_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainId: The ID of the domain.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDomainId"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainName: The name of the domain.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDomainName"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainType")
    def attr_domain_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainType: The type of the domain.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDomainType"))

    @builtins.property
    @jsii.member(jsii_name="attrIcpStatus")
    def attr_icp_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IcpStatus: ICP status.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIcpStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrMxAuthStatus")
    def attr_mx_auth_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MxAuthStatus: MX auth status.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMxAuthStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrMxRecord")
    def attr_mx_record(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MxRecord: MX Record.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMxRecord"))

    @builtins.property
    @jsii.member(jsii_name="attrSpfAuthStatus")
    def attr_spf_auth_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SpfAuthStatus: SPF auth status.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSpfAuthStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrSpfRecord")
    def attr_spf_record(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SpfRecord: SPF record.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSpfRecord"))

    @builtins.property
    @jsii.member(jsii_name="attrTlDomainName")
    def attr_tl_domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TlDomainName: TL domain name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTlDomainName"))

    @builtins.property
    @jsii.member(jsii_name="attrTracefRecord")
    def attr_tracef_record(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TracefRecord: Tracef Record.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTracefRecord"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DomainProps:
        return typing.cast(DomainProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IDomain).__jsii_proxy_class__ = lambda : _IDomainProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-directmail.IIpfilter")
class IIpfilter(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Ipfilter``.'''

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: Creation time.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrIpAddress")
    def attr_ip_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IpAddress: The whitelist IP address.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrIpfilterId")
    def attr_ipfilter_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IpfilterId: The ID of the IP filter.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "IpfilterProps":
        ...


class _IIpfilterProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Ipfilter``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-directmail.IIpfilter"

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: Creation time.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrIpAddress")
    def attr_ip_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IpAddress: The whitelist IP address.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIpAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrIpfilterId")
    def attr_ipfilter_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IpfilterId: The ID of the IP filter.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIpfilterId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "IpfilterProps":
        return typing.cast("IpfilterProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IIpfilter).__jsii_proxy_class__ = lambda : _IIpfilterProxy


@jsii.implements(IIpfilter)
class Ipfilter(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-directmail.Ipfilter",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::DirectMail::Ipfilter``, which is used to add an IP filter.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosIpfilter``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-directmail-ipfilter
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["IpfilterProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7c59d6945f423b43dcba769c392d65148221893d88e79299e0f7d456f0eb822a)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: Creation time.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrIpAddress")
    def attr_ip_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IpAddress: The whitelist IP address.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIpAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrIpfilterId")
    def attr_ipfilter_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IpfilterId: The ID of the IP filter.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIpfilterId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "IpfilterProps":
        return typing.cast("IpfilterProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__58e636f0f95fe5ff95bf8f9e3b60a7305149cd3f83d20a6c46647bd5a479f295)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8f42cfae603ed3f6b44e96f130ce8ac78e0c2b7676a5c9a7f8542e4012654937)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d58915c1479bd7c95558b25e5827db441e2d2078e44d1672496dc8bcf3e64453)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-directmail.IpfilterProps",
    jsii_struct_bases=[],
    name_mapping={"ip_address": "ipAddress"},
)
class IpfilterProps:
    def __init__(
        self,
        *,
        ip_address: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``Ipfilter``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-directmail-ipfilter

        :param ip_address: Property ipAddress: The whitelist IP address.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d8e43cc426aad646d20dd4c7065f10c74017ae981c9ae2b8d28ee20f5d8bd6e8)
            check_type(argname="argument ip_address", value=ip_address, expected_type=type_hints["ip_address"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "ip_address": ip_address,
        }

    @builtins.property
    def ip_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property ipAddress: The whitelist IP address.'''
        result = self._values.get("ip_address")
        assert result is not None, "Required property 'ip_address' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "IpfilterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDomain(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-directmail.RosDomain",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::DirectMail::Domain``, which is used to create a domain name in Direct Mail.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Domain`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-directmail-domain
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDomainProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f851ef4f3546a1c8038fa6db79b544aa27a68a531067db859ac9f0ab4581be75)
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
            type_hints = typing.get_type_hints(_typecheckingstub__273a948c39a9dbb2c23ef810f85c9eede96f448a441b04394757a708abd05a01)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCnameAuthStatus")
    def attr_cname_auth_status(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CnameAuthStatus: Cname auth status.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCnameAuthStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrCnameConfirmStatus")
    def attr_cname_confirm_status(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CnameConfirmStatus: Cname confirm status.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCnameConfirmStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrCnameRecord")
    def attr_cname_record(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CnameRecord: Cname record.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCnameRecord"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: The creation time of the domain.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDefaultDomain")
    def attr_default_domain(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DefaultDomain: Default domain.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDefaultDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrDnsMx")
    def attr_dns_mx(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DnsMx: DNS MX.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDnsMx"))

    @builtins.property
    @jsii.member(jsii_name="attrDnsSpf")
    def attr_dns_spf(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DnsSpf: DNS SPF.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDnsSpf"))

    @builtins.property
    @jsii.member(jsii_name="attrDnsTxt")
    def attr_dns_txt(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DnsTxt: DNS txt.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDnsTxt"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainId")
    def attr_domain_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DomainId: The ID of the domain.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomainId"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DomainName: The name of the domain.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomainName"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainType")
    def attr_domain_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DomainType: The type of the domain.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomainType"))

    @builtins.property
    @jsii.member(jsii_name="attrIcpStatus")
    def attr_icp_status(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IcpStatus: ICP status.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIcpStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrMxAuthStatus")
    def attr_mx_auth_status(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MxAuthStatus: MX auth status.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMxAuthStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrMxRecord")
    def attr_mx_record(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MxRecord: MX Record.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMxRecord"))

    @builtins.property
    @jsii.member(jsii_name="attrSpfAuthStatus")
    def attr_spf_auth_status(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SpfAuthStatus: SPF auth status.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSpfAuthStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrSpfRecord")
    def attr_spf_record(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SpfRecord: SPF record.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSpfRecord"))

    @builtins.property
    @jsii.member(jsii_name="attrTlDomainName")
    def attr_tl_domain_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TlDomainName: TL domain name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTlDomainName"))

    @builtins.property
    @jsii.member(jsii_name="attrTracefRecord")
    def attr_tracef_record(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TracefRecord: Tracef Record.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTracefRecord"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="domainName")
    def domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: domainName: The name of the domain.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "domainName"))

    @domain_name.setter
    def domain_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__26d9e4f2ef13b277b9a624a3594ea52738f7ae4397db8e95eb3cb2b7496849ed)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "domainName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9b3456acf5cea3ac533dfff412fc2126fce8bf0718e77e72f752965a32b4ba03)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-directmail.RosDomainProps",
    jsii_struct_bases=[],
    name_mapping={"domain_name": "domainName"},
)
class RosDomainProps:
    def __init__(
        self,
        *,
        domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosDomain``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-directmail-domain

        :param domain_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c1695dbefef5e18d53e05988b5f777d09250106fbf9850d434981a8e103c9385)
            check_type(argname="argument domain_name", value=domain_name, expected_type=type_hints["domain_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "domain_name": domain_name,
        }

    @builtins.property
    def domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: domainName: The name of the domain.
        '''
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDomainProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosIpfilter(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-directmail.RosIpfilter",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::DirectMail::Ipfilter``, which is used to add an IP filter.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Ipfilter`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-directmail-ipfilter
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosIpfilterProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0d449385e21eedf201529043c03e39f174dd0116796834292e6c8bb70333f55e)
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
            type_hints = typing.get_type_hints(_typecheckingstub__fe07fb0508d510e9bc268ffc502cf34e808970e35354733dbc2dfb925edfa56a)
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
        :Attribute: CreateTime: Creation time.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrIpAddress")
    def attr_ip_address(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IpAddress: The whitelist IP address.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIpAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrIpfilterId")
    def attr_ipfilter_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IpfilterId: The ID of the IP filter.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIpfilterId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__2291a71ed5492142ab91e04e820270680f7a84d45a308c83afbd713777e2f4cf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="ipAddress")
    def ip_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ipAddress: The whitelist IP address.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "ipAddress"))

    @ip_address.setter
    def ip_address(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__92ed31ec2d9fac973ae4d529615bc2bb9a83d83482196ea360753583db6fd403)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ipAddress", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-directmail.RosIpfilterProps",
    jsii_struct_bases=[],
    name_mapping={"ip_address": "ipAddress"},
)
class RosIpfilterProps:
    def __init__(
        self,
        *,
        ip_address: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosIpfilter``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-directmail-ipfilter

        :param ip_address: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c81c2115c357960ecbcc9419502ec76d990c2bca3e7766b34e949f1d0e65f0aa)
            check_type(argname="argument ip_address", value=ip_address, expected_type=type_hints["ip_address"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "ip_address": ip_address,
        }

    @builtins.property
    def ip_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ipAddress: The whitelist IP address.
        '''
        result = self._values.get("ip_address")
        assert result is not None, "Required property 'ip_address' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosIpfilterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IDomain)
class Domain(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-directmail.Domain",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::DirectMail::Domain``, which is used to create a domain name in Direct Mail.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDomain``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-directmail-domain
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[DomainProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__07e5535889367ac5fbb0bf92c6ee0efd0891e4db565c682913ac3810dd49c5aa)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCnameAuthStatus")
    def attr_cname_auth_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CnameAuthStatus: Cname auth status.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCnameAuthStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrCnameConfirmStatus")
    def attr_cname_confirm_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CnameConfirmStatus: Cname confirm status.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCnameConfirmStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrCnameRecord")
    def attr_cname_record(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CnameRecord: Cname record.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCnameRecord"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the domain.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDefaultDomain")
    def attr_default_domain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DefaultDomain: Default domain.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDefaultDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrDnsMx")
    def attr_dns_mx(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DnsMx: DNS MX.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDnsMx"))

    @builtins.property
    @jsii.member(jsii_name="attrDnsSpf")
    def attr_dns_spf(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DnsSpf: DNS SPF.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDnsSpf"))

    @builtins.property
    @jsii.member(jsii_name="attrDnsTxt")
    def attr_dns_txt(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DnsTxt: DNS txt.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDnsTxt"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainId")
    def attr_domain_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainId: The ID of the domain.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDomainId"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainName: The name of the domain.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDomainName"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainType")
    def attr_domain_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainType: The type of the domain.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDomainType"))

    @builtins.property
    @jsii.member(jsii_name="attrIcpStatus")
    def attr_icp_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IcpStatus: ICP status.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIcpStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrMxAuthStatus")
    def attr_mx_auth_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MxAuthStatus: MX auth status.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMxAuthStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrMxRecord")
    def attr_mx_record(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MxRecord: MX Record.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMxRecord"))

    @builtins.property
    @jsii.member(jsii_name="attrSpfAuthStatus")
    def attr_spf_auth_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SpfAuthStatus: SPF auth status.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSpfAuthStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrSpfRecord")
    def attr_spf_record(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SpfRecord: SPF record.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSpfRecord"))

    @builtins.property
    @jsii.member(jsii_name="attrTlDomainName")
    def attr_tl_domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TlDomainName: TL domain name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTlDomainName"))

    @builtins.property
    @jsii.member(jsii_name="attrTracefRecord")
    def attr_tracef_record(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TracefRecord: Tracef Record.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTracefRecord"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DomainProps:
        return typing.cast(DomainProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7328647bdf27da377112b4086249828ca55c0b9b1492b0915147ae12c226be94)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0f9816c7321c3ced11091b127c9a4641c6c77437efb6b937d621f12ede57e72a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c6f0cd764b3443870ba7e768784aa32528265bd261ebdd48999d10b64faf6541)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "Domain",
    "DomainProps",
    "IDomain",
    "IIpfilter",
    "Ipfilter",
    "IpfilterProps",
    "RosDomain",
    "RosDomainProps",
    "RosIpfilter",
    "RosIpfilterProps",
    "datasource",
]

publication.publish()

# Loading modules to ensure their types are registered with the jsii runtime library
from . import datasource

def _typecheckingstub__024381072f2e5971cf82130b592b8168ac7d73d1bc643cd0d582d1497081af34(
    *,
    domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7c59d6945f423b43dcba769c392d65148221893d88e79299e0f7d456f0eb822a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[IpfilterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__58e636f0f95fe5ff95bf8f9e3b60a7305149cd3f83d20a6c46647bd5a479f295(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8f42cfae603ed3f6b44e96f130ce8ac78e0c2b7676a5c9a7f8542e4012654937(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d58915c1479bd7c95558b25e5827db441e2d2078e44d1672496dc8bcf3e64453(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d8e43cc426aad646d20dd4c7065f10c74017ae981c9ae2b8d28ee20f5d8bd6e8(
    *,
    ip_address: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f851ef4f3546a1c8038fa6db79b544aa27a68a531067db859ac9f0ab4581be75(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDomainProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__273a948c39a9dbb2c23ef810f85c9eede96f448a441b04394757a708abd05a01(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__26d9e4f2ef13b277b9a624a3594ea52738f7ae4397db8e95eb3cb2b7496849ed(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9b3456acf5cea3ac533dfff412fc2126fce8bf0718e77e72f752965a32b4ba03(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c1695dbefef5e18d53e05988b5f777d09250106fbf9850d434981a8e103c9385(
    *,
    domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0d449385e21eedf201529043c03e39f174dd0116796834292e6c8bb70333f55e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosIpfilterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fe07fb0508d510e9bc268ffc502cf34e808970e35354733dbc2dfb925edfa56a(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2291a71ed5492142ab91e04e820270680f7a84d45a308c83afbd713777e2f4cf(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__92ed31ec2d9fac973ae4d529615bc2bb9a83d83482196ea360753583db6fd403(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c81c2115c357960ecbcc9419502ec76d990c2bca3e7766b34e949f1d0e65f0aa(
    *,
    ip_address: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__07e5535889367ac5fbb0bf92c6ee0efd0891e4db565c682913ac3810dd49c5aa(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DomainProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7328647bdf27da377112b4086249828ca55c0b9b1492b0915147ae12c226be94(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0f9816c7321c3ced11091b127c9a4641c6c77437efb6b937d621f12ede57e72a(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c6f0cd764b3443870ba7e768784aa32528265bd261ebdd48999d10b64faf6541(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
