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


class AccessControls(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.datasource.AccessControls",
):
    '''A ROS resource type:  ``DATASOURCE::SLB::AccessControls``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["AccessControlsProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::SLB::AccessControls``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

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
    def attr_access_controls(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AccessControls: The list of access controls.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccessControls"))

    @builtins.property
    @jsii.member(jsii_name="attrAclIds")
    def attr_acl_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AclIds: The list of acl IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAclIds"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.datasource.AccessControlsProps",
    jsii_struct_bases=[],
    name_mapping={
        "acl_name": "aclName",
        "address_ip_version": "addressIpVersion",
        "resource_group_id": "resourceGroupId",
    },
)
class AccessControlsProps:
    def __init__(
        self,
        *,
        acl_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        address_ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::SLB::AccessControls``.

        :param acl_name: Property aclName: The name of the network ACL.
        :param address_ip_version: Property addressIpVersion: The IP version. Valid values: ipv4 and ipv6.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group to which the network ACL belongs.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__84a48742341036f352a00e9248dbd7c6b28eb634e643246824039507d476ef36)
            check_type(argname="argument acl_name", value=acl_name, expected_type=type_hints["acl_name"])
            check_type(argname="argument address_ip_version", value=address_ip_version, expected_type=type_hints["address_ip_version"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if acl_name is not None:
            self._values["acl_name"] = acl_name
        if address_ip_version is not None:
            self._values["address_ip_version"] = address_ip_version
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


class DomainExtensions(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.datasource.DomainExtensions",
):
    '''A ROS resource type:  ``DATASOURCE::SLB::DomainExtensions``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DomainExtensionsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::SLB::DomainExtensions``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

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
    def attr_domain_extension_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DomainExtensionIds: The list of domain extension IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomainExtensionIds"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainExtensions")
    def attr_domain_extensions(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DomainExtensions: The list of domain extensions.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomainExtensions"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.datasource.DomainExtensionsProps",
    jsii_struct_bases=[],
    name_mapping={
        "listener_port": "listenerPort",
        "load_balancer_id": "loadBalancerId",
        "domain_extension_id": "domainExtensionId",
    },
)
class DomainExtensionsProps:
    def __init__(
        self,
        *,
        listener_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        domain_extension_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::SLB::DomainExtensions``.

        :param listener_port: Property listenerPort: The frontend port of the HTTPS listener that is configured for the Classic Load Balancer (CLB) instance. Valid values: 1 to 65535.
        :param load_balancer_id: Property loadBalancerId: The ID of the CLB instance.
        :param domain_extension_id: Property domainExtensionId: The ID of the additional certificate.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9c8a726a47931d4c3db4d1b49045a5a1033fb60c6e6797181b2f7bcf129f3ca0)
            check_type(argname="argument listener_port", value=listener_port, expected_type=type_hints["listener_port"])
            check_type(argname="argument load_balancer_id", value=load_balancer_id, expected_type=type_hints["load_balancer_id"])
            check_type(argname="argument domain_extension_id", value=domain_extension_id, expected_type=type_hints["domain_extension_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "listener_port": listener_port,
            "load_balancer_id": load_balancer_id,
        }
        if domain_extension_id is not None:
            self._values["domain_extension_id"] = domain_extension_id

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

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DomainExtensionsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class LoadBalancers(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.datasource.LoadBalancers",
):
    '''A ROS resource type:  ``DATASOURCE::SLB::LoadBalancers``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["LoadBalancersProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::SLB::LoadBalancers``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

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
    def attr_load_balancer_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute LoadBalancerIds: The list of load balancer IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLoadBalancerIds"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancers")
    def attr_load_balancers(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute LoadBalancers: The list of load balancers.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLoadBalancers"))


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
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        slave_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::SLB::LoadBalancers``.

        :param address: Property address: The service address of the load balancing instance.
        :param address_ip_version: Property addressIpVersion: IP version.
        :param address_type: Property addressType: The address type of the load balancing instance.
        :param internet_charge_type: Property internetChargeType: Public network type instance payment method.
        :param load_balancer_id: Property loadBalancerId: ID of the load balancing instance.
        :param load_balancer_name: Property loadBalancerName: Name of the load balancing instance.
        :param master_zone_id: Property masterZoneId: ID of the primary available area of the load balancing instance.
        :param network_type: Property networkType: The network type of the private network load balancing instance.
        :param payment_type: Property paymentType: Load balancing instance payment type.
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


class RosAccessControls(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.datasource.RosAccessControls",
):
    '''A ROS template type:  ``DATASOURCE::SLB::AccessControls``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAccessControlsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::SLB::AccessControls``.

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
        "resource_group_id": "resourceGroupId",
    },
)
class RosAccessControlsProps:
    def __init__(
        self,
        *,
        acl_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        address_ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::SLB::AccessControls``.

        :param acl_name: 
        :param address_ip_version: 
        :param resource_group_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a5efc751daed12b610baa31a7a96e93c359c4624a8d2466e2b619905f67de798)
            check_type(argname="argument acl_name", value=acl_name, expected_type=type_hints["acl_name"])
            check_type(argname="argument address_ip_version", value=address_ip_version, expected_type=type_hints["address_ip_version"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if acl_name is not None:
            self._values["acl_name"] = acl_name
        if address_ip_version is not None:
            self._values["address_ip_version"] = address_ip_version
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


class RosDomainExtensions(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.datasource.RosDomainExtensions",
):
    '''A ROS template type:  ``DATASOURCE::SLB::DomainExtensions``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDomainExtensionsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::SLB::DomainExtensions``.

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


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.datasource.RosDomainExtensionsProps",
    jsii_struct_bases=[],
    name_mapping={
        "listener_port": "listenerPort",
        "load_balancer_id": "loadBalancerId",
        "domain_extension_id": "domainExtensionId",
    },
)
class RosDomainExtensionsProps:
    def __init__(
        self,
        *,
        listener_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        domain_extension_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::SLB::DomainExtensions``.

        :param listener_port: 
        :param load_balancer_id: 
        :param domain_extension_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c2bd4733450a5533a1809b5c8d137464ae54db9203f1cec9be5f6713319e0dfe)
            check_type(argname="argument listener_port", value=listener_port, expected_type=type_hints["listener_port"])
            check_type(argname="argument load_balancer_id", value=load_balancer_id, expected_type=type_hints["load_balancer_id"])
            check_type(argname="argument domain_extension_id", value=domain_extension_id, expected_type=type_hints["domain_extension_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "listener_port": listener_port,
            "load_balancer_id": load_balancer_id,
        }
        if domain_extension_id is not None:
            self._values["domain_extension_id"] = domain_extension_id

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

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDomainExtensionsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosLoadBalancers(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.datasource.RosLoadBalancers",
):
    '''A ROS template type:  ``DATASOURCE::SLB::LoadBalancers``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosLoadBalancersProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::SLB::LoadBalancers``.

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
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        slave_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::SLB::LoadBalancers``.

        :param address: 
        :param address_ip_version: 
        :param address_type: 
        :param internet_charge_type: 
        :param load_balancer_id: 
        :param load_balancer_name: 
        :param master_zone_id: 
        :param network_type: 
        :param payment_type: 
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


class RosRules(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.datasource.RosRules",
):
    '''A ROS template type:  ``DATASOURCE::SLB::Rules``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosRulesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::SLB::Rules``.

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


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.datasource.RosRulesProps",
    jsii_struct_bases=[],
    name_mapping={
        "listener_port": "listenerPort",
        "load_balancer_id": "loadBalancerId",
        "listener_protocol": "listenerProtocol",
    },
)
class RosRulesProps:
    def __init__(
        self,
        *,
        listener_port: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        listener_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::SLB::Rules``.

        :param listener_port: 
        :param load_balancer_id: 
        :param listener_protocol: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2b62fd54ebb6259094878d5e4ce6ae283140afc28d71dfa84efac6a0454a4dee)
            check_type(argname="argument listener_port", value=listener_port, expected_type=type_hints["listener_port"])
            check_type(argname="argument load_balancer_id", value=load_balancer_id, expected_type=type_hints["load_balancer_id"])
            check_type(argname="argument listener_protocol", value=listener_protocol, expected_type=type_hints["listener_protocol"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "listener_port": listener_port,
            "load_balancer_id": load_balancer_id,
        }
        if listener_protocol is not None:
            self._values["listener_protocol"] = listener_protocol

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
    '''A ROS template type:  ``DATASOURCE::SLB::TLSPolicies``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosTLSPoliciesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::SLB::TLSPolicies``.

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
    name_mapping={"instance_id": "instanceId", "tls_policy_name": "tlsPolicyName"},
)
class RosTLSPoliciesProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        tls_policy_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::SLB::TLSPolicies``.

        :param instance_id: 
        :param tls_policy_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__96e179c9f0e6ffd3c54f200937f2b85f034a3d1cfbaa37696bbb2cf6397213e5)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument tls_policy_name", value=tls_policy_name, expected_type=type_hints["tls_policy_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
        }
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


class RosVServerGroups(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.datasource.RosVServerGroups",
):
    '''A ROS template type:  ``DATASOURCE::SLB::VServerGroups``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosVServerGroupsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::SLB::VServerGroups``.

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


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.datasource.RosVServerGroupsProps",
    jsii_struct_bases=[],
    name_mapping={"load_balancer_id": "loadBalancerId"},
)
class RosVServerGroupsProps:
    def __init__(
        self,
        *,
        load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``DATASOURCE::SLB::VServerGroups``.

        :param load_balancer_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dc7e6240147cf67ea50421eda17f91be49bf44cfe15b78a45fa95e93a915cae0)
            check_type(argname="argument load_balancer_id", value=load_balancer_id, expected_type=type_hints["load_balancer_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "load_balancer_id": load_balancer_id,
        }

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
    '''A ROS template type:  ``DATASOURCE::SLB::Zones``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosZonesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::SLB::Zones``.

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


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.datasource.RosZonesProps",
    jsii_struct_bases=[],
    name_mapping={
        "address_ip_version": "addressIpVersion",
        "address_type": "addressType",
    },
)
class RosZonesProps:
    def __init__(
        self,
        *,
        address_ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        address_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::SLB::Zones``.

        :param address_ip_version: 
        :param address_type: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a22aff7cc31fdbf2cba249ed4ec699a7a2138c3ec7c2c4c9df60fa52c68fbafe)
            check_type(argname="argument address_ip_version", value=address_ip_version, expected_type=type_hints["address_ip_version"])
            check_type(argname="argument address_type", value=address_type, expected_type=type_hints["address_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if address_ip_version is not None:
            self._values["address_ip_version"] = address_ip_version
        if address_type is not None:
            self._values["address_type"] = address_type

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

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosZonesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Rules(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.datasource.Rules",
):
    '''A ROS resource type:  ``DATASOURCE::SLB::Rules``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RulesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::SLB::Rules``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

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
    def attr_rule_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RuleIds: The list of rule IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRuleIds"))

    @builtins.property
    @jsii.member(jsii_name="attrRules")
    def attr_rules(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Rules: The list of rules.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRules"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.datasource.RulesProps",
    jsii_struct_bases=[],
    name_mapping={
        "listener_port": "listenerPort",
        "load_balancer_id": "loadBalancerId",
        "listener_protocol": "listenerProtocol",
    },
)
class RulesProps:
    def __init__(
        self,
        *,
        listener_port: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        listener_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::SLB::Rules``.

        :param listener_port: Property listenerPort: The frontend listener port that is used by the Classic Load Balancer (CLB) instance.
        :param load_balancer_id: Property loadBalancerId: The ID of the CLB instance.
        :param listener_protocol: Property listenerProtocol: The frontend listener protocol that is used by the SLB instance.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a72d585a2cd9b9f9ca0fe6ace287abe200ca1dad9c80ef20969b82ce4a3a0765)
            check_type(argname="argument listener_port", value=listener_port, expected_type=type_hints["listener_port"])
            check_type(argname="argument load_balancer_id", value=load_balancer_id, expected_type=type_hints["load_balancer_id"])
            check_type(argname="argument listener_protocol", value=listener_protocol, expected_type=type_hints["listener_protocol"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "listener_port": listener_port,
            "load_balancer_id": load_balancer_id,
        }
        if listener_protocol is not None:
            self._values["listener_protocol"] = listener_protocol

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

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RulesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class TLSPolicies(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.datasource.TLSPolicies",
):
    '''A ROS resource type:  ``DATASOURCE::SLB::TLSPolicies``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["TLSPoliciesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::SLB::TLSPolicies``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

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
    def attr_instance_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceIds: The list of instance IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrTlsPolicies")
    def attr_tls_policies(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TLSPolicies: The list of tls policies.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTlsPolicies"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.datasource.TLSPoliciesProps",
    jsii_struct_bases=[],
    name_mapping={"instance_id": "instanceId", "tls_policy_name": "tlsPolicyName"},
)
class TLSPoliciesProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        tls_policy_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::SLB::TLSPolicies``.

        :param instance_id: Property instanceId: The ID of the TLS policy.
        :param tls_policy_name: Property tlsPolicyName: The name of the TLS policy. The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3dd7b6f8b3c280a5553e985fd0a058f322a573322a1fadcb1e41f83cec45c167)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument tls_policy_name", value=tls_policy_name, expected_type=type_hints["tls_policy_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
        }
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


class VServerGroups(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.datasource.VServerGroups",
):
    '''A ROS resource type:  ``DATASOURCE::SLB::VServerGroups``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["VServerGroupsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::SLB::VServerGroups``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

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
    def attr_v_server_group_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VServerGroupIds: The list of VServer group IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVServerGroupIds"))

    @builtins.property
    @jsii.member(jsii_name="attrVServerGroups")
    def attr_v_server_groups(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VServerGroups: The list of VServer groups.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVServerGroups"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.datasource.VServerGroupsProps",
    jsii_struct_bases=[],
    name_mapping={"load_balancer_id": "loadBalancerId"},
)
class VServerGroupsProps:
    def __init__(
        self,
        *,
        load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``DATASOURCE::SLB::VServerGroups``.

        :param load_balancer_id: Property loadBalancerId: The ID of the CLB instance.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1b6892a397d383802025b636bc7f941c315daadf8a68530bb667df6bf7d036d4)
            check_type(argname="argument load_balancer_id", value=load_balancer_id, expected_type=type_hints["load_balancer_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "load_balancer_id": load_balancer_id,
        }

    @builtins.property
    def load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property loadBalancerId: The ID of the CLB instance.'''
        result = self._values.get("load_balancer_id")
        assert result is not None, "Required property 'load_balancer_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "VServerGroupsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Zones(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.datasource.Zones",
):
    '''A ROS resource type:  ``DATASOURCE::SLB::Zones``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["ZonesProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::SLB::Zones``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

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
    def attr_zone_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ZoneIds: The list of The primary zone Ids.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZoneIds"))

    @builtins.property
    @jsii.member(jsii_name="attrZones")
    def attr_zones(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Zones: The list of The Zones.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZones"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.datasource.ZonesProps",
    jsii_struct_bases=[],
    name_mapping={
        "address_ip_version": "addressIpVersion",
        "address_type": "addressType",
    },
)
class ZonesProps:
    def __init__(
        self,
        *,
        address_ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        address_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::SLB::Zones``.

        :param address_ip_version: Property addressIpVersion: The type of IP address. Valid values: ipv4 and ipv6.
        :param address_type: Property addressType: The type of network.Valid values: vpc, classic_internet, and classic_intranet.. vpc: an internal SLB instance that is deployed in a virtual private cloud (VPC). classic_internet: a public-facing SLB instance. classic_intranet: an internal SLB instance that is deployed in a classic network.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__314fc4cc7b545a1e6bc907dc8ca0015b8abeb639796cb4cc3b3e37a2deb4e853)
            check_type(argname="argument address_ip_version", value=address_ip_version, expected_type=type_hints["address_ip_version"])
            check_type(argname="argument address_type", value=address_type, expected_type=type_hints["address_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if address_ip_version is not None:
            self._values["address_ip_version"] = address_ip_version
        if address_type is not None:
            self._values["address_type"] = address_type

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

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ZonesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "AccessControls",
    "AccessControlsProps",
    "DomainExtensions",
    "DomainExtensionsProps",
    "LoadBalancers",
    "LoadBalancersProps",
    "RosAccessControls",
    "RosAccessControlsProps",
    "RosDomainExtensions",
    "RosDomainExtensionsProps",
    "RosLoadBalancers",
    "RosLoadBalancersProps",
    "RosRules",
    "RosRulesProps",
    "RosTLSPolicies",
    "RosTLSPoliciesProps",
    "RosVServerGroups",
    "RosVServerGroupsProps",
    "RosZones",
    "RosZonesProps",
    "Rules",
    "RulesProps",
    "TLSPolicies",
    "TLSPoliciesProps",
    "VServerGroups",
    "VServerGroupsProps",
    "Zones",
    "ZonesProps",
]

publication.publish()

def _typecheckingstub__e6eff42573e427403e456b8e9726f93522e4833615f21dbea692c30502125a6f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[AccessControlsProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__84a48742341036f352a00e9248dbd7c6b28eb634e643246824039507d476ef36(
    *,
    acl_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    address_ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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

def _typecheckingstub__9c8a726a47931d4c3db4d1b49045a5a1033fb60c6e6797181b2f7bcf129f3ca0(
    *,
    listener_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    domain_extension_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    slave_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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

def _typecheckingstub__41a460dde6e0424e7c2ea2e5441b49385acf23375e4edd3508f491d29a9d8b24(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a5efc751daed12b610baa31a7a96e93c359c4624a8d2466e2b619905f67de798(
    *,
    acl_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    address_ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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

def _typecheckingstub__c2bd4733450a5533a1809b5c8d137464ae54db9203f1cec9be5f6713319e0dfe(
    *,
    listener_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    domain_extension_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    slave_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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

def _typecheckingstub__2b62fd54ebb6259094878d5e4ce6ae283140afc28d71dfa84efac6a0454a4dee(
    *,
    listener_port: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    listener_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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

def _typecheckingstub__cac9b194c1b466d69a7f371afba2fc5481a90f3a8c2dab96e704c59a534c4f7d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__96e179c9f0e6ffd3c54f200937f2b85f034a3d1cfbaa37696bbb2cf6397213e5(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    tls_policy_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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

def _typecheckingstub__dc7e6240147cf67ea50421eda17f91be49bf44cfe15b78a45fa95e93a915cae0(
    *,
    load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
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

def _typecheckingstub__a22aff7cc31fdbf2cba249ed4ec699a7a2138c3ec7c2c4c9df60fa52c68fbafe(
    *,
    address_ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    address_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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

def _typecheckingstub__a72d585a2cd9b9f9ca0fe6ace287abe200ca1dad9c80ef20969b82ce4a3a0765(
    *,
    listener_port: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    listener_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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

def _typecheckingstub__3dd7b6f8b3c280a5553e985fd0a058f322a573322a1fadcb1e41f83cec45c167(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    tls_policy_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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

def _typecheckingstub__1b6892a397d383802025b636bc7f941c315daadf8a68530bb667df6bf7d036d4(
    *,
    load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
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

def _typecheckingstub__314fc4cc7b545a1e6bc907dc8ca0015b8abeb639796cb4cc3b3e37a2deb4e853(
    *,
    address_ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    address_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
