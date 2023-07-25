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


class Domains(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cdn.datasource.Domains",
):
    '''A ROS resource type:  ``DATASOURCE::CDN::Domains``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DomainsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::CDN::Domains``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ce1d951247d9ee265c44e802beb1724657f0f001cf17b61088fd5a3ecdf0c7b6)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDomainNames")
    def attr_domain_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DomainNames: The list of domain names.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomainNames"))

    @builtins.property
    @jsii.member(jsii_name="attrDomains")
    def attr_domains(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Domains: The list of domains.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomains"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cdn.datasource.DomainsProps",
    jsii_struct_bases=[],
    name_mapping={"domain_name": "domainName"},
)
class DomainsProps:
    def __init__(
        self,
        *,
        domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``DATASOURCE::CDN::Domains``.

        :param domain_name: Property domainName: The accelerated domain name. You can specify only one domain name.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3a8d1ec65e55ae2b8da74e6539a074b3d75244e7e9035358f9f66b23281c6231)
            check_type(argname="argument domain_name", value=domain_name, expected_type=type_hints["domain_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "domain_name": domain_name,
        }

    @builtins.property
    def domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property domainName: The accelerated domain name.

        You can specify only one domain name.
        '''
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DomainsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDomains(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cdn.datasource.RosDomains",
):
    '''A ROS template type:  ``DATASOURCE::CDN::Domains``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDomainsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::CDN::Domains``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b48a466f4a905c1d5785a6344087e7c946a42f25759648c5e2d75bf55c265ed2)
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
            type_hints = typing.get_type_hints(_typecheckingstub__552c6bcb53c3a39f549ce9d0d68d7bf5d9dd82e03fe715cd8da6abb844ead9b9)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainNames")
    def attr_domain_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DomainNames: The list of domain names.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomainNames"))

    @builtins.property
    @jsii.member(jsii_name="attrDomains")
    def attr_domains(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Domains: The list of domains.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomains"))

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
        :Property: domainName: The accelerated domain name. You can specify only one domain name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "domainName"))

    @domain_name.setter
    def domain_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a904a207d2b6057b2e4303835ccc57cc1efb18cd68c451065c418063991af05e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "domainName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__efd860638681eaa1e0f223c5ad14f9407281c89529af68f77bf5e5f186932ede)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cdn.datasource.RosDomainsProps",
    jsii_struct_bases=[],
    name_mapping={"domain_name": "domainName"},
)
class RosDomainsProps:
    def __init__(
        self,
        *,
        domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``DATASOURCE::CDN::Domains``.

        :param domain_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ea3252d763d1aa72d65a5f391ea52f53700e62bb90fef1a6bf51fbece9b1eb36)
            check_type(argname="argument domain_name", value=domain_name, expected_type=type_hints["domain_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "domain_name": domain_name,
        }

    @builtins.property
    def domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: domainName: The accelerated domain name. You can specify only one domain name.
        '''
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDomainsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Domains",
    "DomainsProps",
    "RosDomains",
    "RosDomainsProps",
]

publication.publish()

def _typecheckingstub__ce1d951247d9ee265c44e802beb1724657f0f001cf17b61088fd5a3ecdf0c7b6(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DomainsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3a8d1ec65e55ae2b8da74e6539a074b3d75244e7e9035358f9f66b23281c6231(
    *,
    domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b48a466f4a905c1d5785a6344087e7c946a42f25759648c5e2d75bf55c265ed2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDomainsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__552c6bcb53c3a39f549ce9d0d68d7bf5d9dd82e03fe715cd8da6abb844ead9b9(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a904a207d2b6057b2e4303835ccc57cc1efb18cd68c451065c418063991af05e(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__efd860638681eaa1e0f223c5ad14f9407281c89529af68f77bf5e5f186932ede(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ea3252d763d1aa72d65a5f391ea52f53700e62bb90fef1a6bf51fbece9b1eb36(
    *,
    domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass
