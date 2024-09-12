'''
## Aliyun ROS BASTIONHOST Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as BASTIONHOST from '@alicloud/ros-cdk-bastionhost';
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


class Host(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-bastionhost.Host",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::BastionHost::Host``, which is used to create a host for O&M in a bastion host.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosHost``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-host
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["HostProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__37e6c27758efc11aabd63c809396802ff78296c4b61e292bda206365dda8b0b6)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrHostId")
    def attr_host_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute HostId: The ID of the host that was created.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHostId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__da19bdba0d5c03257b20188be746fce774477c02cdb43e290572e3e5c2f56628)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__70572c53a13159c9293987fb66b3f6f84e357ff67b47b35a3fb1b1e364f09ce2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "HostProps":
        return typing.cast("HostProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "HostProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__71f31b45c4938b632549dcc2380219bacae56880eb7559ae027a1a5e6f7e0f79)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__52db1e2762be5534ff35ea9833525b2a3f8ea9dab567059257a831e1579021a3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-bastionhost.HostProps",
    jsii_struct_bases=[],
    name_mapping={
        "active_address_type": "activeAddressType",
        "host_name": "hostName",
        "instance_id": "instanceId",
        "os_type": "osType",
        "source": "source",
        "comment": "comment",
        "host_private_address": "hostPrivateAddress",
        "host_public_address": "hostPublicAddress",
        "instance_region_id": "instanceRegionId",
        "source_instance_id": "sourceInstanceId",
    },
)
class HostProps:
    def __init__(
        self,
        *,
        active_address_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        host_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        os_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        comment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        host_private_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        host_public_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Host``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-host

        :param active_address_type: Property activeAddressType: The endpoint type of the host that you want to create. Valid values: Public: a public endpoint Private: an internal endpoint
        :param host_name: Property hostName: The name of the host that you want to create. The name can be up to 128 characters in length.
        :param instance_id: Property instanceId: The ID of the Bastionhost instance where you want to create the host. Note: You can call the DescribeInstances operation to query the ID of the Bastionhost instance.
        :param os_type: Property osType: The operating system of the host that you want to create. Valid values: - Linux - Windows
        :param source: Property source: The source of the host that you want to create. Valid values: - Local: an on-premises host - Ecs: an Elastic Compute Service (ECS) instance - Rds: a host in a dedicated cluster
        :param comment: Property comment: The description of the host that you want to create. The value can be up to 500 characters.
        :param host_private_address: Property hostPrivateAddress: The internal endpoint of the host that you want to create. You can set this parameter to a domain name or an IP address. Note: This parameter is required if the ActiveAddressType parameter is set to Private.
        :param host_public_address: Property hostPublicAddress: The public endpoint of the host that you want to create. You can set this parameter to a domain name or an IP address. Note: This parameter is required if the ActiveAddressType parameter is set to Public.
        :param instance_region_id: Property instanceRegionId: The ID of the region where the ECS instance or dedicated cluster host that you want to create resides. Note: This parameter is required if the Source parameter is set to Ecs or Rds.
        :param source_instance_id: Property sourceInstanceId: The ID of the ECS instance or dedicated cluster host that you want to create. Note This parameter is required if the Source parameter is set to Ecs or Rds.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2c99113053d4d394fd799d048617084e8d023e7b20a240c8ec1268b0e955efdc)
            check_type(argname="argument active_address_type", value=active_address_type, expected_type=type_hints["active_address_type"])
            check_type(argname="argument host_name", value=host_name, expected_type=type_hints["host_name"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument os_type", value=os_type, expected_type=type_hints["os_type"])
            check_type(argname="argument source", value=source, expected_type=type_hints["source"])
            check_type(argname="argument comment", value=comment, expected_type=type_hints["comment"])
            check_type(argname="argument host_private_address", value=host_private_address, expected_type=type_hints["host_private_address"])
            check_type(argname="argument host_public_address", value=host_public_address, expected_type=type_hints["host_public_address"])
            check_type(argname="argument instance_region_id", value=instance_region_id, expected_type=type_hints["instance_region_id"])
            check_type(argname="argument source_instance_id", value=source_instance_id, expected_type=type_hints["source_instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "active_address_type": active_address_type,
            "host_name": host_name,
            "instance_id": instance_id,
            "os_type": os_type,
            "source": source,
        }
        if comment is not None:
            self._values["comment"] = comment
        if host_private_address is not None:
            self._values["host_private_address"] = host_private_address
        if host_public_address is not None:
            self._values["host_public_address"] = host_public_address
        if instance_region_id is not None:
            self._values["instance_region_id"] = instance_region_id
        if source_instance_id is not None:
            self._values["source_instance_id"] = source_instance_id

    @builtins.property
    def active_address_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property activeAddressType: The endpoint type of the host that you want to create.

        Valid values:
        Public: a public endpoint
        Private: an internal endpoint
        '''
        result = self._values.get("active_address_type")
        assert result is not None, "Required property 'active_address_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def host_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property hostName: The name of the host that you want to create.

        The name can be up to 128 characters in length.
        '''
        result = self._values.get("host_name")
        assert result is not None, "Required property 'host_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: The ID of the Bastionhost instance where you want to create the host.

        Note: You can call the DescribeInstances operation to query the ID of the Bastionhost instance.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def os_type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property osType: The operating system of the host that you want to create.

        Valid values:

        - Linux
        - Windows
        '''
        result = self._values.get("os_type")
        assert result is not None, "Required property 'os_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property source: The source of the host that you want to create.

        Valid values:

        - Local: an on-premises host
        - Ecs: an Elastic Compute Service (ECS) instance
        - Rds: a host in a dedicated cluster
        '''
        result = self._values.get("source")
        assert result is not None, "Required property 'source' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def comment(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property comment: The description of the host that you want to create.

        The value can be up to 500 characters.
        '''
        result = self._values.get("comment")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def host_private_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property hostPrivateAddress: The internal endpoint of the host that you want to create.

        You can set this parameter to a domain name or an IP address.
        Note: This parameter is required if the ActiveAddressType parameter is set to Private.
        '''
        result = self._values.get("host_private_address")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def host_public_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property hostPublicAddress: The public endpoint of the host that you want to create.

        You can set this parameter to a domain name or an IP address.
        Note: This parameter is required if the ActiveAddressType parameter is set to Public.
        '''
        result = self._values.get("host_public_address")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceRegionId: The ID of the region where the ECS instance or dedicated cluster host that you want to create resides.

        Note: This parameter is required if the Source parameter is set to Ecs or Rds.
        '''
        result = self._values.get("instance_region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sourceInstanceId: The ID of the ECS instance or dedicated cluster host that you want to create.

        Note This parameter is required if the Source parameter is set to Ecs or Rds.
        '''
        result = self._values.get("source_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "HostProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Instance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-bastionhost.Instance",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::BastionHost::Instance``, which is used to create a bastion host.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosInstance``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-instance
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["InstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f7e76171e4ab46bd78788c0dd2c16be6c516bcf23aea62af6746d657e4328cec)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceId: Instance Id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f479e345b6f9b33ebc150b1c9ac711520a5848e132584e573bd2f23b2392ba1e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__46ce2979eb64a70fe9b0ba89feed4db618360c8a590204a5acedd5a15811b4a1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "InstanceProps":
        return typing.cast("InstanceProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "InstanceProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__04515d37ee2ca7e45b35a834029e9c5324b38c7bc7c59fa68d4a80f06998a175)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__87a6a6e08d8f4c05623313b9634d52cca547b7394c3da330c6f31b70b2dc9a64)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-bastionhost.InstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "extended_storage_plans": "extendedStoragePlans",
        "extra_bandwidth": "extraBandwidth",
        "plan": "plan",
        "start_instance_param": "startInstanceParam",
        "version": "version",
        "auto_pay": "autoPay",
        "auto_renew": "autoRenew",
        "period": "period",
        "period_unit": "periodUnit",
        "resource_group_id": "resourceGroupId",
    },
)
class InstanceProps:
    def __init__(
        self,
        *,
        extended_storage_plans: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        extra_bandwidth: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        plan: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        start_instance_param: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosInstance.StartInstanceParamProperty", typing.Dict[builtins.str, typing.Any]]],
        version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Instance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-instance

        :param extended_storage_plans: Property extendedStoragePlans: If the default storage capacity is insufficient, you can purchase extended storage plans.Unit: TB.
        :param extra_bandwidth: Property extraBandwidth: Additional bandwidth is added to the default settings to ensure efficient O&M.Unit: Mbps.
        :param plan: Property plan: The number of asset authorization and concurrency limit.Unit: Asset number.
        :param start_instance_param: Property startInstanceParam: Parameters required to start a bastion host instance.
        :param version: Property version: Enterprise version:- Deployment instructions: dual-engine architecture, supports multiple availability zones, and ensures high stability - Operation and maintenance scenarios: unified operation and maintenance of assets on Alibaba Cloud, offline IDC servers, and third-party clouds - Asset type: Linux/Windows, database assets - User management: RAM, AD/LDAP and local users - Control strategy: fine-grained strategic control such as operation and maintenance approval, high-risk command blocking, etc. - Operation and maintenance audit: full traceability of operation and maintenance log audit and video audit Value-added capabilities: automatic password change of Linux assets, database operation and maintenance management and control, convenient operation and maintenance of Web and client, network domain agent hybrid cloud scenario operation and maintenance mode, etc.Basic version:- Deployment instructions: The basic version is deployed on a single machine and does not support multiple availability zones. - Operation and maintenance scenarios: unified operation and maintenance of assets on Alibaba Cloud, offline IDC servers, and third-party clouds - Asset type: Linux/Windows assets - User management: RAM, AD/LDAP and local users - Control strategy: Operation and maintenance approval, high-risk command blocking and other strategic management and control - Operation and maintenance audit: full traceability of operation and maintenance log audit and video audit
        :param auto_pay: Property autoPay: Whether to auto pay the bill.
        :param auto_renew: Property autoRenew: Whether to auto renew the prepay instance. The auto-renewal period is Monthly.After you enable auto-renewal, the system deducts the renewal fee nine days before the resource expires.If the payment fails, the system does not stop deducting the fee until the deduction is successful or one day before the resource expires.
        :param period: Property period: The subscription period of the bastionhost instanceIf PeriodUnit is month, the valid range is 1, 3, 6 If periodUnit is year, the valid range is 1, 2, 3.
        :param period_unit: Property periodUnit: The unit of the subscription duration. Valid values: Month Year Default value: Month.
        :param resource_group_id: Property resourceGroupId: Resource group ID.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9133d987d047c69563f055f5e2cfcdcecb35b20426820991caa3b4e170d71d94)
            check_type(argname="argument extended_storage_plans", value=extended_storage_plans, expected_type=type_hints["extended_storage_plans"])
            check_type(argname="argument extra_bandwidth", value=extra_bandwidth, expected_type=type_hints["extra_bandwidth"])
            check_type(argname="argument plan", value=plan, expected_type=type_hints["plan"])
            check_type(argname="argument start_instance_param", value=start_instance_param, expected_type=type_hints["start_instance_param"])
            check_type(argname="argument version", value=version, expected_type=type_hints["version"])
            check_type(argname="argument auto_pay", value=auto_pay, expected_type=type_hints["auto_pay"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "extended_storage_plans": extended_storage_plans,
            "extra_bandwidth": extra_bandwidth,
            "plan": plan,
            "start_instance_param": start_instance_param,
            "version": version,
        }
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def extended_storage_plans(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property extendedStoragePlans: If the default storage capacity is insufficient, you can purchase extended storage plans.Unit: TB.'''
        result = self._values.get("extended_storage_plans")
        assert result is not None, "Required property 'extended_storage_plans' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def extra_bandwidth(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property extraBandwidth: Additional bandwidth is added to the default settings to ensure efficient O&M.Unit: Mbps.'''
        result = self._values.get("extra_bandwidth")
        assert result is not None, "Required property 'extra_bandwidth' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def plan(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property plan: The number of asset authorization and concurrency limit.Unit: Asset number.'''
        result = self._values.get("plan")
        assert result is not None, "Required property 'plan' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def start_instance_param(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.StartInstanceParamProperty"]:
        '''Property startInstanceParam: Parameters required to start a bastion host instance.'''
        result = self._values.get("start_instance_param")
        assert result is not None, "Required property 'start_instance_param' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.StartInstanceParamProperty"], result)

    @builtins.property
    def version(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property version: Enterprise version:- Deployment instructions: dual-engine architecture, supports multiple availability zones, and ensures high stability - Operation and maintenance scenarios: unified operation and maintenance of assets on Alibaba Cloud, offline IDC servers, and third-party clouds - Asset type: Linux/Windows, database assets - User management: RAM, AD/LDAP and local users - Control strategy: fine-grained strategic control such as operation and maintenance approval, high-risk command blocking, etc.

        - Operation and maintenance audit: full traceability of operation and maintenance log audit and video audit
          Value-added capabilities: automatic password change of Linux assets, database operation and maintenance management and control, convenient operation and maintenance of Web and client, network domain agent hybrid cloud scenario operation and maintenance mode, etc.Basic version:- Deployment instructions: The basic version is deployed on a single machine and does not support multiple availability zones.
        - Operation and maintenance scenarios: unified operation and maintenance of assets on Alibaba Cloud, offline IDC servers, and third-party clouds
        - Asset type: Linux/Windows assets
        - User management: RAM, AD/LDAP and local users
        - Control strategy: Operation and maintenance approval, high-risk command blocking and other strategic management and control
        - Operation and maintenance audit: full traceability of operation and maintenance log audit and video audit
        '''
        result = self._values.get("version")
        assert result is not None, "Required property 'version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoPay: Whether to auto pay the bill.'''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRenew: Whether to auto renew the prepay instance.

        The auto-renewal period is Monthly.After you enable auto-renewal, the system deducts the renewal fee nine days before the resource expires.If the payment fails, the system does not stop deducting the fee until the deduction is successful or one day before the resource expires.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period: The subscription period of the bastionhost instanceIf PeriodUnit is month, the valid range is 1, 3, 6 If periodUnit is year, the valid range is 1, 2, 3.'''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property periodUnit: The unit of the subscription duration.

        Valid values:
        Month
        Year
        Default value: Month.
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: Resource group ID.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosHost(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-bastionhost.RosHost",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::BastionHost::Host``, which is used to create a host for O&M in a bastion host.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Host`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-host
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosHostProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__de71b84bf8924d081168dd16cf6d34eb9b5bd4f8482e4701e82913159c11d945)
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
            type_hints = typing.get_type_hints(_typecheckingstub__2f23e0075876628cf092b95fbd5c752b1cc96ac1a9eceded0969a834a502696f)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrHostId")
    def attr_host_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HostId: The ID of the host that was created.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHostId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="activeAddressType")
    def active_address_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        activeAddressType: The endpoint type of the host that you want to create. Valid values:
        Public: a public endpoint
        Private: an internal endpoint
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "activeAddressType"))

    @active_address_type.setter
    def active_address_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1ecf55d3b9e001d213e18defc24eb080850459b59e94c58471fc575a23233271)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "activeAddressType", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6b417b2b12a8e6de3b794bdd23543f050286eec7da5860c1b9fe0308865ab1a1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="hostName")
    def host_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: hostName: The name of the host that you want to create. The name can be up to 128 characters in length.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "hostName"))

    @host_name.setter
    def host_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__31c14fcbdfa7061146d44dded867f6e877dd1883ff8dc4b78c4bdef6cfccc9c1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "hostName", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        instanceId: The ID of the Bastionhost instance where you want to create the host.
        Note: You can call the DescribeInstances operation to query the ID of the Bastionhost instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ee0602e7cb92fb577ecd7def8d672010913a968dfb88f0a34dce7163e9065be3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="osType")
    def os_type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        osType: The operating system of the host that you want to create. Valid values:

        - Linux
        - Windows
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "osType"))

    @os_type.setter
    def os_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6df66c032766b45e4bbf66321580178a982c5357c3566ffbdd438bccb66ceff7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "osType", value)

    @builtins.property
    @jsii.member(jsii_name="source")
    def source(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        source: The source of the host that you want to create. Valid values:

        - Local: an on-premises host
        - Ecs: an Elastic Compute Service (ECS) instance
        - Rds: a host in a dedicated cluster
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "source"))

    @source.setter
    def source(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__170bf54af43e605e39716af0ebd6818e6e06a21382044734032fda136b35d110)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "source", value)

    @builtins.property
    @jsii.member(jsii_name="comment")
    def comment(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: comment: The description of the host that you want to create. The value can be up to 500 characters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "comment"))

    @comment.setter
    def comment(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__21355f3f9ea1f29eecef6c0e608310bb32aff6b4d830230b1a2cf9dd5ca28271)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "comment", value)

    @builtins.property
    @jsii.member(jsii_name="hostPrivateAddress")
    def host_private_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        hostPrivateAddress: The internal endpoint of the host that you want to create. You can set this parameter to a domain name or an IP address.
        Note: This parameter is required if the ActiveAddressType parameter is set to Private.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "hostPrivateAddress"))

    @host_private_address.setter
    def host_private_address(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__180177a596f5456334cc263fb2272fc338d16f2458f0242fe534ff52e3709a5c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "hostPrivateAddress", value)

    @builtins.property
    @jsii.member(jsii_name="hostPublicAddress")
    def host_public_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        hostPublicAddress: The public endpoint of the host that you want to create. You can set this parameter to a domain name or an IP address.
        Note: This parameter is required if the ActiveAddressType parameter is set to Public.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "hostPublicAddress"))

    @host_public_address.setter
    def host_public_address(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__03f8e728c64bba1f1a8fbfab3dc99b4f331629328bc03a2e10be5eb7557ef712)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "hostPublicAddress", value)

    @builtins.property
    @jsii.member(jsii_name="instanceRegionId")
    def instance_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        instanceRegionId: The ID of the region where the ECS instance or dedicated cluster host that you want to create resides.
        Note: This parameter is required if the Source parameter is set to Ecs or Rds.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceRegionId"))

    @instance_region_id.setter
    def instance_region_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4a609d2efcd432f120de7beb9042f2619573d3e14d3a4f5f5582bcbc07baf3ef)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceRegionId", value)

    @builtins.property
    @jsii.member(jsii_name="sourceInstanceId")
    def source_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sourceInstanceId: The ID of the ECS instance or dedicated cluster host that you want to create.
        Note This parameter is required if the Source parameter is set to Ecs or Rds.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sourceInstanceId"))

    @source_instance_id.setter
    def source_instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__93e7b4226856024594f6facea40de41f48c46c1cdb4af4d74035b0693d19aeb5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceInstanceId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-bastionhost.RosHostProps",
    jsii_struct_bases=[],
    name_mapping={
        "active_address_type": "activeAddressType",
        "host_name": "hostName",
        "instance_id": "instanceId",
        "os_type": "osType",
        "source": "source",
        "comment": "comment",
        "host_private_address": "hostPrivateAddress",
        "host_public_address": "hostPublicAddress",
        "instance_region_id": "instanceRegionId",
        "source_instance_id": "sourceInstanceId",
    },
)
class RosHostProps:
    def __init__(
        self,
        *,
        active_address_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        host_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        os_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        comment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        host_private_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        host_public_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosHost``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-host

        :param active_address_type: 
        :param host_name: 
        :param instance_id: 
        :param os_type: 
        :param source: 
        :param comment: 
        :param host_private_address: 
        :param host_public_address: 
        :param instance_region_id: 
        :param source_instance_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6437460f12c5827a2252d699a10869e314ce0b7c948f156200ccd36549840ed7)
            check_type(argname="argument active_address_type", value=active_address_type, expected_type=type_hints["active_address_type"])
            check_type(argname="argument host_name", value=host_name, expected_type=type_hints["host_name"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument os_type", value=os_type, expected_type=type_hints["os_type"])
            check_type(argname="argument source", value=source, expected_type=type_hints["source"])
            check_type(argname="argument comment", value=comment, expected_type=type_hints["comment"])
            check_type(argname="argument host_private_address", value=host_private_address, expected_type=type_hints["host_private_address"])
            check_type(argname="argument host_public_address", value=host_public_address, expected_type=type_hints["host_public_address"])
            check_type(argname="argument instance_region_id", value=instance_region_id, expected_type=type_hints["instance_region_id"])
            check_type(argname="argument source_instance_id", value=source_instance_id, expected_type=type_hints["source_instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "active_address_type": active_address_type,
            "host_name": host_name,
            "instance_id": instance_id,
            "os_type": os_type,
            "source": source,
        }
        if comment is not None:
            self._values["comment"] = comment
        if host_private_address is not None:
            self._values["host_private_address"] = host_private_address
        if host_public_address is not None:
            self._values["host_public_address"] = host_public_address
        if instance_region_id is not None:
            self._values["instance_region_id"] = instance_region_id
        if source_instance_id is not None:
            self._values["source_instance_id"] = source_instance_id

    @builtins.property
    def active_address_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        activeAddressType: The endpoint type of the host that you want to create. Valid values:
        Public: a public endpoint
        Private: an internal endpoint
        '''
        result = self._values.get("active_address_type")
        assert result is not None, "Required property 'active_address_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def host_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: hostName: The name of the host that you want to create. The name can be up to 128 characters in length.
        '''
        result = self._values.get("host_name")
        assert result is not None, "Required property 'host_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        instanceId: The ID of the Bastionhost instance where you want to create the host.
        Note: You can call the DescribeInstances operation to query the ID of the Bastionhost instance.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def os_type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        osType: The operating system of the host that you want to create. Valid values:

        - Linux
        - Windows
        '''
        result = self._values.get("os_type")
        assert result is not None, "Required property 'os_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        source: The source of the host that you want to create. Valid values:

        - Local: an on-premises host
        - Ecs: an Elastic Compute Service (ECS) instance
        - Rds: a host in a dedicated cluster
        '''
        result = self._values.get("source")
        assert result is not None, "Required property 'source' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def comment(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: comment: The description of the host that you want to create. The value can be up to 500 characters.
        '''
        result = self._values.get("comment")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def host_private_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        hostPrivateAddress: The internal endpoint of the host that you want to create. You can set this parameter to a domain name or an IP address.
        Note: This parameter is required if the ActiveAddressType parameter is set to Private.
        '''
        result = self._values.get("host_private_address")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def host_public_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        hostPublicAddress: The public endpoint of the host that you want to create. You can set this parameter to a domain name or an IP address.
        Note: This parameter is required if the ActiveAddressType parameter is set to Public.
        '''
        result = self._values.get("host_public_address")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        instanceRegionId: The ID of the region where the ECS instance or dedicated cluster host that you want to create resides.
        Note: This parameter is required if the Source parameter is set to Ecs or Rds.
        '''
        result = self._values.get("instance_region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sourceInstanceId: The ID of the ECS instance or dedicated cluster host that you want to create.
        Note This parameter is required if the Source parameter is set to Ecs or Rds.
        '''
        result = self._values.get("source_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosHostProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstance(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-bastionhost.RosInstance",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::BastionHost::Instance``, which is used to create a bastion host.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Instance`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-instance
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__33c6172c41957cb73b51eba81971807017e4cd43cb316d37c515918fff889f84)
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
            type_hints = typing.get_type_hints(_typecheckingstub__a766b4afaa51f1a2adbd31b4e5cba00e4f44a07df16cb87907ca21d5162acabd)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceId: Instance Id.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__b634cd871a3a32669695b9c796bb041cbcd6e4a32d6e93989544c85417d84498)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="extendedStoragePlans")
    def extended_storage_plans(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: extendedStoragePlans: If the default storage capacity is insufficient, you can purchase extended storage plans.Unit: TB
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "extendedStoragePlans"))

    @extended_storage_plans.setter
    def extended_storage_plans(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cb4e84aee68dc089e835a702deb7988cc736e4376de300d42a2b4e12d7bba51d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "extendedStoragePlans", value)

    @builtins.property
    @jsii.member(jsii_name="extraBandwidth")
    def extra_bandwidth(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: extraBandwidth: Additional bandwidth is added to the default settings to ensure efficient O&M.Unit: Mbps
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "extraBandwidth"))

    @extra_bandwidth.setter
    def extra_bandwidth(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3269a6e38f46e6633ab823dd405e65a44c0cac4866d3c5d342054b07cb1c0cf7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "extraBandwidth", value)

    @builtins.property
    @jsii.member(jsii_name="plan")
    def plan(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: plan: The number of asset authorization and concurrency limit.Unit: Asset number
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "plan"))

    @plan.setter
    def plan(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e154d21f03b0a2e54e40712cab3e603ec04a2507d17efb40fed6dd30e52ae012)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "plan", value)

    @builtins.property
    @jsii.member(jsii_name="startInstanceParam")
    def start_instance_param(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.StartInstanceParamProperty"]:
        '''
        :Property: startInstanceParam: Parameters required to start a bastion host instance.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.StartInstanceParamProperty"], jsii.get(self, "startInstanceParam"))

    @start_instance_param.setter
    def start_instance_param(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.StartInstanceParamProperty"],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3ca1e4e47e72e2b3ba1303584cb9b8f02a0f31ef765d0be77be91079a4bf19fd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "startInstanceParam", value)

    @builtins.property
    @jsii.member(jsii_name="version")
    def version(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        version: Enterprise version:- Deployment instructions: dual-engine architecture, supports multiple availability zones, and ensures high stability

        - Operation and maintenance scenarios: unified operation and maintenance of assets on Alibaba Cloud, offline IDC servers, and third-party clouds
        - Asset type: Linux/Windows, database assets
        - User management: RAM, AD/LDAP and local users
        - Control strategy: fine-grained strategic control such as operation and maintenance approval, high-risk command blocking, etc.
        - Operation and maintenance audit: full traceability of operation and maintenance log audit and video audit
        Value-added capabilities: automatic password change of Linux assets, database operation and maintenance management and control, convenient operation and maintenance of Web and client, network domain agent hybrid cloud scenario operation and maintenance mode, etc.Basic version:- Deployment instructions: The basic version is deployed on a single machine and does not support multiple availability zones.
        - Operation and maintenance scenarios: unified operation and maintenance of assets on Alibaba Cloud, offline IDC servers, and third-party clouds
        - Asset type: Linux/Windows assets
        - User management: RAM, AD/LDAP and local users
        - Control strategy: Operation and maintenance approval, high-risk command blocking and other strategic management and control
        - Operation and maintenance audit: full traceability of operation and maintenance log audit and video audit
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "version"))

    @version.setter
    def version(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b92c2e5f0f20e9199022b403a71f16d524aa6381b1c07e44e0417000ceae2aa1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "version", value)

    @builtins.property
    @jsii.member(jsii_name="autoPay")
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoPay: Whether to auto pay the bill.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoPay"))

    @auto_pay.setter
    def auto_pay(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bafa0dd476c5ebe4096056abafdd6cc54f9c33477d957cf0aacd7ce539802ef1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoPay", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenew: Whether to auto renew the prepay instance. The auto-renewal period is Monthly.After you enable auto-renewal, the system deducts the renewal fee nine days before the resource expires.If the payment fails, the system does not stop deducting the fee until the deduction is successful or one day before the resource expires.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRenew"))

    @auto_renew.setter
    def auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a423eb41c4f260147658714c52b8b0f33c58513bad00213f10a1c5c9bdfdd7f7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenew", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The subscription period of the bastionhost instanceIf PeriodUnit is month, the valid range is 1, 3, 6
        If periodUnit is year, the valid range is 1, 2, 3
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f00d727722a057316299e25037362144ec705eab692f33916d3379f0122a92dd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="periodUnit")
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        periodUnit: The unit of the subscription duration. Valid values:
        Month
        Year
        Default value: Month.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "periodUnit"))

    @period_unit.setter
    def period_unit(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1f6ef072a498ff5da4ed6e8ab446230049395329431679c7dfe0ca53aacbbd5d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "periodUnit", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9505cc404e13bcb913fb1abf07e32f0c33f5283c993f7f91bb36381808cb081a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-bastionhost.RosInstance.StartInstanceParamProperty",
        jsii_struct_bases=[],
        name_mapping={
            "security_group_ids": "securityGroupIds",
            "vswitch_id": "vswitchId",
        },
    )
    class StartInstanceParamProperty:
        def __init__(
            self,
            *,
            security_group_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
            vswitch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param security_group_ids: 
            :param vswitch_id: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__79cfc1523770317c4772a5b7be585c7915833bc10b0484c79da45f4183fb871e)
                check_type(argname="argument security_group_ids", value=security_group_ids, expected_type=type_hints["security_group_ids"])
                check_type(argname="argument vswitch_id", value=vswitch_id, expected_type=type_hints["vswitch_id"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "security_group_ids": security_group_ids,
                "vswitch_id": vswitch_id,
            }

        @builtins.property
        def security_group_ids(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
            '''
            :Property: securityGroupIds: List of security group IDs bound to the bastion host instance
            '''
            result = self._values.get("security_group_ids")
            assert result is not None, "Required property 'security_group_ids' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

        @builtins.property
        def vswitch_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: vswitchId: The VSwitch ID bound to the bastion host instance.
            '''
            result = self._values.get("vswitch_id")
            assert result is not None, "Required property 'vswitch_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "StartInstanceParamProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-bastionhost.RosInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "extended_storage_plans": "extendedStoragePlans",
        "extra_bandwidth": "extraBandwidth",
        "plan": "plan",
        "start_instance_param": "startInstanceParam",
        "version": "version",
        "auto_pay": "autoPay",
        "auto_renew": "autoRenew",
        "period": "period",
        "period_unit": "periodUnit",
        "resource_group_id": "resourceGroupId",
    },
)
class RosInstanceProps:
    def __init__(
        self,
        *,
        extended_storage_plans: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        extra_bandwidth: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        plan: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        start_instance_param: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.StartInstanceParamProperty, typing.Dict[builtins.str, typing.Any]]],
        version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosInstance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-instance

        :param extended_storage_plans: 
        :param extra_bandwidth: 
        :param plan: 
        :param start_instance_param: 
        :param version: 
        :param auto_pay: 
        :param auto_renew: 
        :param period: 
        :param period_unit: 
        :param resource_group_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9314358ca64f22f88096e1b5d73a194d6d9843fefe488f68b52931ed41936f9b)
            check_type(argname="argument extended_storage_plans", value=extended_storage_plans, expected_type=type_hints["extended_storage_plans"])
            check_type(argname="argument extra_bandwidth", value=extra_bandwidth, expected_type=type_hints["extra_bandwidth"])
            check_type(argname="argument plan", value=plan, expected_type=type_hints["plan"])
            check_type(argname="argument start_instance_param", value=start_instance_param, expected_type=type_hints["start_instance_param"])
            check_type(argname="argument version", value=version, expected_type=type_hints["version"])
            check_type(argname="argument auto_pay", value=auto_pay, expected_type=type_hints["auto_pay"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "extended_storage_plans": extended_storage_plans,
            "extra_bandwidth": extra_bandwidth,
            "plan": plan,
            "start_instance_param": start_instance_param,
            "version": version,
        }
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def extended_storage_plans(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: extendedStoragePlans: If the default storage capacity is insufficient, you can purchase extended storage plans.Unit: TB
        '''
        result = self._values.get("extended_storage_plans")
        assert result is not None, "Required property 'extended_storage_plans' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def extra_bandwidth(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: extraBandwidth: Additional bandwidth is added to the default settings to ensure efficient O&M.Unit: Mbps
        '''
        result = self._values.get("extra_bandwidth")
        assert result is not None, "Required property 'extra_bandwidth' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def plan(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: plan: The number of asset authorization and concurrency limit.Unit: Asset number
        '''
        result = self._values.get("plan")
        assert result is not None, "Required property 'plan' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def start_instance_param(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.StartInstanceParamProperty]:
        '''
        :Property: startInstanceParam: Parameters required to start a bastion host instance.
        '''
        result = self._values.get("start_instance_param")
        assert result is not None, "Required property 'start_instance_param' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.StartInstanceParamProperty], result)

    @builtins.property
    def version(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        version: Enterprise version:- Deployment instructions: dual-engine architecture, supports multiple availability zones, and ensures high stability

        - Operation and maintenance scenarios: unified operation and maintenance of assets on Alibaba Cloud, offline IDC servers, and third-party clouds
        - Asset type: Linux/Windows, database assets
        - User management: RAM, AD/LDAP and local users
        - Control strategy: fine-grained strategic control such as operation and maintenance approval, high-risk command blocking, etc.
        - Operation and maintenance audit: full traceability of operation and maintenance log audit and video audit
        Value-added capabilities: automatic password change of Linux assets, database operation and maintenance management and control, convenient operation and maintenance of Web and client, network domain agent hybrid cloud scenario operation and maintenance mode, etc.Basic version:- Deployment instructions: The basic version is deployed on a single machine and does not support multiple availability zones.
        - Operation and maintenance scenarios: unified operation and maintenance of assets on Alibaba Cloud, offline IDC servers, and third-party clouds
        - Asset type: Linux/Windows assets
        - User management: RAM, AD/LDAP and local users
        - Control strategy: Operation and maintenance approval, high-risk command blocking and other strategic management and control
        - Operation and maintenance audit: full traceability of operation and maintenance log audit and video audit
        '''
        result = self._values.get("version")
        assert result is not None, "Required property 'version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoPay: Whether to auto pay the bill.
        '''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenew: Whether to auto renew the prepay instance. The auto-renewal period is Monthly.After you enable auto-renewal, the system deducts the renewal fee nine days before the resource expires.If the payment fails, the system does not stop deducting the fee until the deduction is successful or one day before the resource expires.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The subscription period of the bastionhost instanceIf PeriodUnit is month, the valid range is 1, 3, 6
        If periodUnit is year, the valid range is 1, 2, 3
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        periodUnit: The unit of the subscription duration. Valid values:
        Month
        Year
        Default value: Month.
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group ID.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Host",
    "HostProps",
    "Instance",
    "InstanceProps",
    "RosHost",
    "RosHostProps",
    "RosInstance",
    "RosInstanceProps",
]

publication.publish()

def _typecheckingstub__37e6c27758efc11aabd63c809396802ff78296c4b61e292bda206365dda8b0b6(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[HostProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__da19bdba0d5c03257b20188be746fce774477c02cdb43e290572e3e5c2f56628(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__70572c53a13159c9293987fb66b3f6f84e357ff67b47b35a3fb1b1e364f09ce2(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__71f31b45c4938b632549dcc2380219bacae56880eb7559ae027a1a5e6f7e0f79(
    value: HostProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__52db1e2762be5534ff35ea9833525b2a3f8ea9dab567059257a831e1579021a3(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2c99113053d4d394fd799d048617084e8d023e7b20a240c8ec1268b0e955efdc(
    *,
    active_address_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    host_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    os_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    comment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    host_private_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    host_public_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f7e76171e4ab46bd78788c0dd2c16be6c516bcf23aea62af6746d657e4328cec(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[InstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f479e345b6f9b33ebc150b1c9ac711520a5848e132584e573bd2f23b2392ba1e(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__46ce2979eb64a70fe9b0ba89feed4db618360c8a590204a5acedd5a15811b4a1(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__04515d37ee2ca7e45b35a834029e9c5324b38c7bc7c59fa68d4a80f06998a175(
    value: InstanceProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__87a6a6e08d8f4c05623313b9634d52cca547b7394c3da330c6f31b70b2dc9a64(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9133d987d047c69563f055f5e2cfcdcecb35b20426820991caa3b4e170d71d94(
    *,
    extended_storage_plans: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    extra_bandwidth: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    plan: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    start_instance_param: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.StartInstanceParamProperty, typing.Dict[builtins.str, typing.Any]]],
    version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__de71b84bf8924d081168dd16cf6d34eb9b5bd4f8482e4701e82913159c11d945(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosHostProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2f23e0075876628cf092b95fbd5c752b1cc96ac1a9eceded0969a834a502696f(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1ecf55d3b9e001d213e18defc24eb080850459b59e94c58471fc575a23233271(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6b417b2b12a8e6de3b794bdd23543f050286eec7da5860c1b9fe0308865ab1a1(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__31c14fcbdfa7061146d44dded867f6e877dd1883ff8dc4b78c4bdef6cfccc9c1(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ee0602e7cb92fb577ecd7def8d672010913a968dfb88f0a34dce7163e9065be3(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6df66c032766b45e4bbf66321580178a982c5357c3566ffbdd438bccb66ceff7(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__170bf54af43e605e39716af0ebd6818e6e06a21382044734032fda136b35d110(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__21355f3f9ea1f29eecef6c0e608310bb32aff6b4d830230b1a2cf9dd5ca28271(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__180177a596f5456334cc263fb2272fc338d16f2458f0242fe534ff52e3709a5c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__03f8e728c64bba1f1a8fbfab3dc99b4f331629328bc03a2e10be5eb7557ef712(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4a609d2efcd432f120de7beb9042f2619573d3e14d3a4f5f5582bcbc07baf3ef(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__93e7b4226856024594f6facea40de41f48c46c1cdb4af4d74035b0693d19aeb5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6437460f12c5827a2252d699a10869e314ce0b7c948f156200ccd36549840ed7(
    *,
    active_address_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    host_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    os_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    comment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    host_private_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    host_public_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__33c6172c41957cb73b51eba81971807017e4cd43cb316d37c515918fff889f84(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a766b4afaa51f1a2adbd31b4e5cba00e4f44a07df16cb87907ca21d5162acabd(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b634cd871a3a32669695b9c796bb041cbcd6e4a32d6e93989544c85417d84498(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cb4e84aee68dc089e835a702deb7988cc736e4376de300d42a2b4e12d7bba51d(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3269a6e38f46e6633ab823dd405e65a44c0cac4866d3c5d342054b07cb1c0cf7(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e154d21f03b0a2e54e40712cab3e603ec04a2507d17efb40fed6dd30e52ae012(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3ca1e4e47e72e2b3ba1303584cb9b8f02a0f31ef765d0be77be91079a4bf19fd(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.StartInstanceParamProperty],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b92c2e5f0f20e9199022b403a71f16d524aa6381b1c07e44e0417000ceae2aa1(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bafa0dd476c5ebe4096056abafdd6cc54f9c33477d957cf0aacd7ce539802ef1(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a423eb41c4f260147658714c52b8b0f33c58513bad00213f10a1c5c9bdfdd7f7(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f00d727722a057316299e25037362144ec705eab692f33916d3379f0122a92dd(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1f6ef072a498ff5da4ed6e8ab446230049395329431679c7dfe0ca53aacbbd5d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9505cc404e13bcb913fb1abf07e32f0c33f5283c993f7f91bb36381808cb081a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__79cfc1523770317c4772a5b7be585c7915833bc10b0484c79da45f4183fb871e(
    *,
    security_group_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    vswitch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9314358ca64f22f88096e1b5d73a194d6d9843fefe488f68b52931ed41936f9b(
    *,
    extended_storage_plans: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    extra_bandwidth: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    plan: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    start_instance_param: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.StartInstanceParamProperty, typing.Dict[builtins.str, typing.Any]]],
    version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
