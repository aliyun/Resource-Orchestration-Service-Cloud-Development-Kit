'''
## Aliyun ROS ECI Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as ECI from '@alicloud/ros-cdk-eci';
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


class ContainerGroup(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-eci.ContainerGroup",
):
    '''A ROS resource type:  ``ALIYUN::ECI::ContainerGroup``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ContainerGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ECI::ContainerGroup``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2ac05a477646da5c139ccff518b62ee1ef4b604e91e48879336105cdf5de1e52)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrContainerGroupId")
    def attr_container_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ContainerGroupId: The ID of the container group.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrContainerGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrContainerGroupName")
    def attr_container_group_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ContainerGroupName: The name of the container group.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrContainerGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrEniInstanceId")
    def attr_eni_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute EniInstanceId: ENI instance ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEniInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetIp")
    def attr_internet_ip(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InternetIp: Internet IP.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInternetIp"))

    @builtins.property
    @jsii.member(jsii_name="attrIntranetIp")
    def attr_intranet_ip(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute IntranetIp: Intranet IP.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIntranetIp"))

    @builtins.property
    @jsii.member(jsii_name="attrIpv6Address")
    def attr_ipv6_address(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Ipv6Address: Ipv6 address.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIpv6Address"))

    @builtins.property
    @jsii.member(jsii_name="attrRegionId")
    def attr_region_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RegionId: The ID of the region in which the instance resides.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRegionId"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityGroupId")
    def attr_security_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SecurityGroupId: The ID of the security group to which the instance belongs.

        Instances in the same security group can access one another.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecurityGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VSwitchId: The ID of the VSwitch.

        Currently, ECI instances can only be deployed in VPCs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ZoneId: The ID of the zone in which the instance resides.

        If you leave the parameter blank, the system assigns a zone for you. The default value is blank.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZoneId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-eci.ContainerGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "container": "container",
        "container_group_name": "containerGroupName",
        "security_group_id": "securityGroupId",
        "v_switch_id": "vSwitchId",
        "acr_registry_info": "acrRegistryInfo",
        "active_deadline_seconds": "activeDeadlineSeconds",
        "auto_match_image_cache": "autoMatchImageCache",
        "cpu": "cpu",
        "dns_config": "dnsConfig",
        "eip_instance_id": "eipInstanceId",
        "host_aliase": "hostAliase",
        "image_registry_credential": "imageRegistryCredential",
        "image_snapshot_id": "imageSnapshotId",
        "init_container": "initContainer",
        "instance_type": "instanceType",
        "ipv6_address_count": "ipv6AddressCount",
        "memory": "memory",
        "ram_role_name": "ramRoleName",
        "resource_group_id": "resourceGroupId",
        "restart_policy": "restartPolicy",
        "security_context_sysctl": "securityContextSysctl",
        "sls_enable": "slsEnable",
        "spot_price_limit": "spotPriceLimit",
        "spot_strategy": "spotStrategy",
        "tag": "tag",
        "termination_grace_period_seconds": "terminationGracePeriodSeconds",
        "volume": "volume",
        "zone_id": "zoneId",
    },
)
class ContainerGroupProps:
    def __init__(
        self,
        *,
        container: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[typing.Union["RosContainerGroup.ContainerProperty", typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable]]],
        container_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        security_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        acr_registry_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosContainerGroup.AcrRegistryInfoProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        active_deadline_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_match_image_cache: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cpu: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dns_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosContainerGroup.DnsConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        eip_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        host_aliase: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosContainerGroup.HostAliaseProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        image_registry_credential: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosContainerGroup.ImageRegistryCredentialProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        image_snapshot_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        init_container: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosContainerGroup.InitContainerProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ipv6_address_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        memory: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ram_role_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        restart_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_context_sysctl: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosContainerGroup.SecurityContextSysctlProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        sls_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        spot_price_limit: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        spot_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tag: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[_ros_cdk_core_7adfd82f.RosTag, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        termination_grace_period_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        volume: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosContainerGroup.VolumeProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ECI::ContainerGroup``.

        :param container: Property container: The containers that constitute the container group.
        :param container_group_name: Property containerGroupName: The name of the container group. The length is [2,128] English lowercase letters, numbers or hyphens (-), cannot begin or end with a hyphens.
        :param security_group_id: Property securityGroupId: The ID of the security group to which the instance belongs. Instances in the same security group can access one another.
        :param v_switch_id: Property vSwitchId: The ID of the specified VSwitch. Currently, ECI instances can only be deployed in VPCs.
        :param acr_registry_info: Property acrRegistryInfo: Enterprise Edition access credential configuration information.
        :param active_deadline_seconds: Property activeDeadlineSeconds: The validity period in seconds.
        :param auto_match_image_cache: Property autoMatchImageCache: Specifies whether to automatically match the image cache.
        :param cpu: Property cpu: CPU size.
        :param dns_config: Property dnsConfig: The information about DNS configurations.
        :param eip_instance_id: Property eipInstanceId: Elastic IP ID.
        :param host_aliase: Property hostAliase: Customize the hostname mapping of a container inside the pod.
        :param image_registry_credential: Property imageRegistryCredential: The information that you need to log on to the container image repository, including the server address, username, and password.
        :param image_snapshot_id: Property imageSnapshotId: Image cache ID or snapshot ID.
        :param init_container: Property initContainer: The containers that constitute the container group for initializing.
        :param instance_type: Property instanceType: The type of the ECS instance.
        :param ipv6_address_count: Property ipv6AddressCount: The number of IPv6 addresses.
        :param memory: Property memory: memory size.
        :param ram_role_name: Property ramRoleName: The RAM role that the container group assumes. ECI and ECS share the same RAM role.
        :param resource_group_id: Property resourceGroupId: Resource group id.
        :param restart_policy: Property restartPolicy: The policy for restarting the instance. Default value: Always.
        :param security_context_sysctl: Property securityContextSysctl: ECI Sysctl is valid for every container in ECI. Currently only two Sysctl keyNames are supported: Kernel.shm_rmid_forced Kernel.msgmax
        :param sls_enable: Property slsEnable: Enable user log collection. The default is False.
        :param spot_price_limit: Property spotPriceLimit: Set the hourly maximum price of the instance. It supports a maximum of 3 decimal places. It takes effect when the value of the parameter SpotStrategy is SpotWithPriceLimit.
        :param spot_strategy: Property spotStrategy: Instance preemption strategy. Ranges: NoSpot (default): normal pay-as-you-go instances. SpotWithPriceLimit: Preemptive instance that sets a cap price. SpotAsPriceGo: The system automatically bids, following the current market actual price.
        :param tag: Property tag: The list of container group tags in the form of key/value pairs. You can define a maximum of 20 tags for each container group.
        :param termination_grace_period_seconds: Property terminationGracePeriodSeconds: The buffer time for the program to handle operations before it is stopped.
        :param volume: Property volume: The data volume. You can specify a maximum of 20 data volumes.
        :param zone_id: Property zoneId: The ID of the zone in which the instance resides. If you leave the parameter blank, the system assigns a zone for you. The default value is blank.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b85b6ba2bc63b3953071ca63a46e86716a5f4cef3a8e68eb49cf476188032c91)
            check_type(argname="argument container", value=container, expected_type=type_hints["container"])
            check_type(argname="argument container_group_name", value=container_group_name, expected_type=type_hints["container_group_name"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument acr_registry_info", value=acr_registry_info, expected_type=type_hints["acr_registry_info"])
            check_type(argname="argument active_deadline_seconds", value=active_deadline_seconds, expected_type=type_hints["active_deadline_seconds"])
            check_type(argname="argument auto_match_image_cache", value=auto_match_image_cache, expected_type=type_hints["auto_match_image_cache"])
            check_type(argname="argument cpu", value=cpu, expected_type=type_hints["cpu"])
            check_type(argname="argument dns_config", value=dns_config, expected_type=type_hints["dns_config"])
            check_type(argname="argument eip_instance_id", value=eip_instance_id, expected_type=type_hints["eip_instance_id"])
            check_type(argname="argument host_aliase", value=host_aliase, expected_type=type_hints["host_aliase"])
            check_type(argname="argument image_registry_credential", value=image_registry_credential, expected_type=type_hints["image_registry_credential"])
            check_type(argname="argument image_snapshot_id", value=image_snapshot_id, expected_type=type_hints["image_snapshot_id"])
            check_type(argname="argument init_container", value=init_container, expected_type=type_hints["init_container"])
            check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
            check_type(argname="argument ipv6_address_count", value=ipv6_address_count, expected_type=type_hints["ipv6_address_count"])
            check_type(argname="argument memory", value=memory, expected_type=type_hints["memory"])
            check_type(argname="argument ram_role_name", value=ram_role_name, expected_type=type_hints["ram_role_name"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument restart_policy", value=restart_policy, expected_type=type_hints["restart_policy"])
            check_type(argname="argument security_context_sysctl", value=security_context_sysctl, expected_type=type_hints["security_context_sysctl"])
            check_type(argname="argument sls_enable", value=sls_enable, expected_type=type_hints["sls_enable"])
            check_type(argname="argument spot_price_limit", value=spot_price_limit, expected_type=type_hints["spot_price_limit"])
            check_type(argname="argument spot_strategy", value=spot_strategy, expected_type=type_hints["spot_strategy"])
            check_type(argname="argument tag", value=tag, expected_type=type_hints["tag"])
            check_type(argname="argument termination_grace_period_seconds", value=termination_grace_period_seconds, expected_type=type_hints["termination_grace_period_seconds"])
            check_type(argname="argument volume", value=volume, expected_type=type_hints["volume"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "container": container,
            "container_group_name": container_group_name,
            "security_group_id": security_group_id,
            "v_switch_id": v_switch_id,
        }
        if acr_registry_info is not None:
            self._values["acr_registry_info"] = acr_registry_info
        if active_deadline_seconds is not None:
            self._values["active_deadline_seconds"] = active_deadline_seconds
        if auto_match_image_cache is not None:
            self._values["auto_match_image_cache"] = auto_match_image_cache
        if cpu is not None:
            self._values["cpu"] = cpu
        if dns_config is not None:
            self._values["dns_config"] = dns_config
        if eip_instance_id is not None:
            self._values["eip_instance_id"] = eip_instance_id
        if host_aliase is not None:
            self._values["host_aliase"] = host_aliase
        if image_registry_credential is not None:
            self._values["image_registry_credential"] = image_registry_credential
        if image_snapshot_id is not None:
            self._values["image_snapshot_id"] = image_snapshot_id
        if init_container is not None:
            self._values["init_container"] = init_container
        if instance_type is not None:
            self._values["instance_type"] = instance_type
        if ipv6_address_count is not None:
            self._values["ipv6_address_count"] = ipv6_address_count
        if memory is not None:
            self._values["memory"] = memory
        if ram_role_name is not None:
            self._values["ram_role_name"] = ram_role_name
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if restart_policy is not None:
            self._values["restart_policy"] = restart_policy
        if security_context_sysctl is not None:
            self._values["security_context_sysctl"] = security_context_sysctl
        if sls_enable is not None:
            self._values["sls_enable"] = sls_enable
        if spot_price_limit is not None:
            self._values["spot_price_limit"] = spot_price_limit
        if spot_strategy is not None:
            self._values["spot_strategy"] = spot_strategy
        if tag is not None:
            self._values["tag"] = tag
        if termination_grace_period_seconds is not None:
            self._values["termination_grace_period_seconds"] = termination_grace_period_seconds
        if volume is not None:
            self._values["volume"] = volume
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def container(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union["RosContainerGroup.ContainerProperty", _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''Property container: The containers that constitute the container group.'''
        result = self._values.get("container")
        assert result is not None, "Required property 'container' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union["RosContainerGroup.ContainerProperty", _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def container_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property containerGroupName: The name of the container group.

        The length is [2,128] English lowercase letters, numbers or hyphens (-), cannot begin or end with a hyphens.
        '''
        result = self._values.get("container_group_name")
        assert result is not None, "Required property 'container_group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property securityGroupId: The ID of the security group to which the instance belongs.

        Instances in the same security group can access one another.
        '''
        result = self._values.get("security_group_id")
        assert result is not None, "Required property 'security_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vSwitchId: The ID of the specified VSwitch.

        Currently, ECI instances can only be deployed in VPCs.
        '''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def acr_registry_info(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.AcrRegistryInfoProperty"]]]]:
        '''Property acrRegistryInfo: Enterprise Edition access credential configuration information.'''
        result = self._values.get("acr_registry_info")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.AcrRegistryInfoProperty"]]]], result)

    @builtins.property
    def active_deadline_seconds(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property activeDeadlineSeconds: The validity period in seconds.'''
        result = self._values.get("active_deadline_seconds")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_match_image_cache(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoMatchImageCache: Specifies whether to automatically match the image cache.'''
        result = self._values.get("auto_match_image_cache")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cpu(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property cpu: CPU size.'''
        result = self._values.get("cpu")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dns_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.DnsConfigProperty"]]:
        '''Property dnsConfig: The information about DNS configurations.'''
        result = self._values.get("dns_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.DnsConfigProperty"]], result)

    @builtins.property
    def eip_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property eipInstanceId: Elastic IP ID.'''
        result = self._values.get("eip_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def host_aliase(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.HostAliaseProperty"]]]]:
        '''Property hostAliase: Customize the hostname mapping of a container inside the pod.'''
        result = self._values.get("host_aliase")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.HostAliaseProperty"]]]], result)

    @builtins.property
    def image_registry_credential(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.ImageRegistryCredentialProperty"]]]]:
        '''Property imageRegistryCredential: The information that you need to log on to the container image repository, including the server address, username, and password.'''
        result = self._values.get("image_registry_credential")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.ImageRegistryCredentialProperty"]]]], result)

    @builtins.property
    def image_snapshot_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property imageSnapshotId: Image cache ID or snapshot ID.'''
        result = self._values.get("image_snapshot_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def init_container(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.InitContainerProperty"]]]]:
        '''Property initContainer: The containers that constitute the container group for initializing.'''
        result = self._values.get("init_container")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.InitContainerProperty"]]]], result)

    @builtins.property
    def instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceType: The type of the ECS instance.'''
        result = self._values.get("instance_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ipv6_address_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ipv6AddressCount: The number of IPv6 addresses.'''
        result = self._values.get("ipv6_address_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def memory(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property memory: memory size.'''
        result = self._values.get("memory")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ram_role_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ramRoleName: The RAM role that the container group assumes.

        ECI and ECS share the same RAM role.
        '''
        result = self._values.get("ram_role_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: Resource group id.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def restart_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property restartPolicy: The policy for restarting the instance.

        Default value: Always.
        '''
        result = self._values.get("restart_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_context_sysctl(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.SecurityContextSysctlProperty"]]]]:
        '''Property securityContextSysctl: ECI Sysctl is valid for every container in ECI.

        Currently only two Sysctl keyNames are supported:
        Kernel.shm_rmid_forced
        Kernel.msgmax
        '''
        result = self._values.get("security_context_sysctl")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.SecurityContextSysctlProperty"]]]], result)

    @builtins.property
    def sls_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property slsEnable: Enable user log collection.

        The default is False.
        '''
        result = self._values.get("sls_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def spot_price_limit(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property spotPriceLimit: Set the hourly maximum price of the instance.

        It supports a maximum of 3 decimal places. It takes effect when the value of the parameter SpotStrategy is SpotWithPriceLimit.
        '''
        result = self._values.get("spot_price_limit")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def spot_strategy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property spotStrategy: Instance preemption strategy.

        Ranges:
        NoSpot (default): normal pay-as-you-go instances.
        SpotWithPriceLimit: Preemptive instance that sets a cap price.
        SpotAsPriceGo: The system automatically bids, following the current market actual price.
        '''
        result = self._values.get("spot_strategy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tag(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, _ros_cdk_core_7adfd82f.RosTag]]]]:
        '''Property tag: The list of container group tags in the form of key/value pairs.

        You can define a maximum of 20 tags for each container group.
        '''
        result = self._values.get("tag")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, _ros_cdk_core_7adfd82f.RosTag]]]], result)

    @builtins.property
    def termination_grace_period_seconds(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property terminationGracePeriodSeconds: The buffer time for the program to handle operations before it is stopped.'''
        result = self._values.get("termination_grace_period_seconds")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def volume(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.VolumeProperty"]]]]:
        '''Property volume: The data volume.

        You can specify a maximum of 20 data volumes.
        '''
        result = self._values.get("volume")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.VolumeProperty"]]]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property zoneId: The ID of the zone in which the instance resides.

        If you leave the parameter blank, the system assigns a zone for you. The default value is blank.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ContainerGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ImageCache(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-eci.ImageCache",
):
    '''A ROS resource type:  ``ALIYUN::ECI::ImageCache``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ImageCacheProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ECI::ImageCache``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cb827cde588517a23306d4a0806d1df9e4eb4e8d564b3688f057234d0b502f3c)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrImageCacheId")
    def attr_image_cache_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ImageCacheId: The ID of the image cache.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImageCacheId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-eci.ImageCacheProps",
    jsii_struct_bases=[],
    name_mapping={
        "image": "image",
        "image_cache_name": "imageCacheName",
        "security_group_id": "securityGroupId",
        "v_switch_id": "vSwitchId",
        "eip_instance_id": "eipInstanceId",
        "image_registry_credential": "imageRegistryCredential",
        "resource_group_id": "resourceGroupId",
    },
)
class ImageCacheProps:
    def __init__(
        self,
        *,
        image: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        image_cache_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        security_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        eip_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_registry_credential: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ECI::ImageCache``.

        :param image: Property image: The image list to be cached.
        :param image_cache_name: Property imageCacheName: Image cache name.
        :param security_group_id: Property securityGroupId: Security group ID.
        :param v_switch_id: Property vSwitchId: VSwitch ID.
        :param eip_instance_id: Property eipInstanceId: If you want to pull the public network image, you need to configure the public network ip or configure the switch NAT gateway.
        :param image_registry_credential: Property imageRegistryCredential: Private image password. Alibaba Cloud ACR image can be left blank.
        :param resource_group_id: Property resourceGroupId: Resource group id.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a8f1fe70ea22126821702ecdc2689c2f9bad90d66841e57b735b5bd0fe8d1708)
            check_type(argname="argument image", value=image, expected_type=type_hints["image"])
            check_type(argname="argument image_cache_name", value=image_cache_name, expected_type=type_hints["image_cache_name"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument eip_instance_id", value=eip_instance_id, expected_type=type_hints["eip_instance_id"])
            check_type(argname="argument image_registry_credential", value=image_registry_credential, expected_type=type_hints["image_registry_credential"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "image": image,
            "image_cache_name": image_cache_name,
            "security_group_id": security_group_id,
            "v_switch_id": v_switch_id,
        }
        if eip_instance_id is not None:
            self._values["eip_instance_id"] = eip_instance_id
        if image_registry_credential is not None:
            self._values["image_registry_credential"] = image_registry_credential
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def image(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''Property image: The image list to be cached.'''
        result = self._values.get("image")
        assert result is not None, "Required property 'image' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def image_cache_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property imageCacheName: Image cache name.'''
        result = self._values.get("image_cache_name")
        assert result is not None, "Required property 'image_cache_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property securityGroupId: Security group ID.'''
        result = self._values.get("security_group_id")
        assert result is not None, "Required property 'security_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vSwitchId: VSwitch ID.'''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def eip_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property eipInstanceId: If you want to pull the public network image, you need to configure the public network ip or configure the switch NAT gateway.'''
        result = self._values.get("eip_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_registry_credential(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property imageRegistryCredential: Private image password.

        Alibaba Cloud ACR image can be left blank.
        '''
        result = self._values.get("image_registry_credential")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: Resource group id.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ImageCacheProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosContainerGroup(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-eci.RosContainerGroup",
):
    '''A ROS template type:  ``ALIYUN::ECI::ContainerGroup``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosContainerGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ECI::ContainerGroup``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__362275f85f1f199a8528613e2e6f0fb53a77a0d451febd2082d4e4df00479bbd)
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
            type_hints = typing.get_type_hints(_typecheckingstub__82a9fa932ce5b34b7d0406c6621e7a14f8d3779d316a396deb1046eaf6c3be7d)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrContainerGroupId")
    def attr_container_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ContainerGroupId: The ID of the container group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrContainerGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrContainerGroupName")
    def attr_container_group_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ContainerGroupName: The name of the container group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrContainerGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrEniInstanceId")
    def attr_eni_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EniInstanceId: ENI instance ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEniInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetIp")
    def attr_internet_ip(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InternetIp: Internet IP.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInternetIp"))

    @builtins.property
    @jsii.member(jsii_name="attrIntranetIp")
    def attr_intranet_ip(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IntranetIp: Intranet IP.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIntranetIp"))

    @builtins.property
    @jsii.member(jsii_name="attrIpv6Address")
    def attr_ipv6_address(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Ipv6Address: Ipv6 address.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIpv6Address"))

    @builtins.property
    @jsii.member(jsii_name="attrRegionId")
    def attr_region_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RegionId: The ID of the region in which the instance resides.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRegionId"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityGroupId")
    def attr_security_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SecurityGroupId: The ID of the security group to which the instance belongs. Instances in the same security group can access one another.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecurityGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VSwitchId: The ID of the VSwitch. Currently, ECI instances can only be deployed in VPCs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ZoneId: The ID of the zone in which the instance resides. If you leave the parameter blank, the system assigns a zone for you. The default value is blank.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZoneId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="container")
    def container(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union["RosContainerGroup.ContainerProperty", _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: container: The containers that constitute the container group.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union["RosContainerGroup.ContainerProperty", _ros_cdk_core_7adfd82f.IResolvable]]], jsii.get(self, "container"))

    @container.setter
    def container(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union["RosContainerGroup.ContainerProperty", _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__49b4980db693fbe3f110accf74305856a31269b12a6ceb72143ebcfc38240477)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "container", value)

    @builtins.property
    @jsii.member(jsii_name="containerGroupName")
    def container_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        containerGroupName: The name of the container group.
        The length is [2,128] English lowercase letters, numbers or hyphens (-), cannot begin or end with a hyphens.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "containerGroupName"))

    @container_group_name.setter
    def container_group_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__27e80663e31cfa677319c20b323eae7991013c8afd39bdf4fd891b239fb59c3f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "containerGroupName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1923edeaf7c7a988b53f8394cbbb5bacf543354e267f0974c4dec9c3bb713223)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="securityGroupId")
    def security_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: securityGroupId: The ID of the security group to which the instance belongs. Instances in the same security group can access one another.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "securityGroupId"))

    @security_group_id.setter
    def security_group_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9e0d4f77396dd05c3f5c8ba4a939fca32992c028390dba684dbcf58d47f4eec8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vSwitchId: The ID of the specified VSwitch. Currently, ECI instances can only be deployed in VPCs.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__938eb530e6c81470aaedf715d87f313aab9a98f624496131977a820a64c5ba4d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="acrRegistryInfo")
    def acr_registry_info(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.AcrRegistryInfoProperty"]]]]:
        '''
        :Property: acrRegistryInfo: Enterprise Edition access credential configuration information.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.AcrRegistryInfoProperty"]]]], jsii.get(self, "acrRegistryInfo"))

    @acr_registry_info.setter
    def acr_registry_info(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.AcrRegistryInfoProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4d31f76e85012b02e64bc73b86779c5c447eff711d15050322389507f239ad83)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "acrRegistryInfo", value)

    @builtins.property
    @jsii.member(jsii_name="activeDeadlineSeconds")
    def active_deadline_seconds(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: activeDeadlineSeconds: The validity period in seconds.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "activeDeadlineSeconds"))

    @active_deadline_seconds.setter
    def active_deadline_seconds(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fc65e43b988a5484a8d1cebfcb4dbb8b393247518fd2d72ca02ccadf5cd39368)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "activeDeadlineSeconds", value)

    @builtins.property
    @jsii.member(jsii_name="autoMatchImageCache")
    def auto_match_image_cache(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoMatchImageCache: Specifies whether to automatically match the image cache.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoMatchImageCache"))

    @auto_match_image_cache.setter
    def auto_match_image_cache(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7ff417c184618b225b2596f53fcaf8bb88e92658fd8255e920aca97d494c754e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoMatchImageCache", value)

    @builtins.property
    @jsii.member(jsii_name="cpu")
    def cpu(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: cpu: CPU size
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "cpu"))

    @cpu.setter
    def cpu(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__89718a8a1e6cc75c5e863daee03ce752fadeb5dd6060ec37fa5b5beaaa669c17)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cpu", value)

    @builtins.property
    @jsii.member(jsii_name="dnsConfig")
    def dns_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.DnsConfigProperty"]]:
        '''
        :Property: dnsConfig: The information about DNS configurations.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.DnsConfigProperty"]], jsii.get(self, "dnsConfig"))

    @dns_config.setter
    def dns_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.DnsConfigProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__48480b592013c3df2af026a2009563d4674a171e4e3248a084545ae8f9a86f34)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dnsConfig", value)

    @builtins.property
    @jsii.member(jsii_name="eipInstanceId")
    def eip_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: eipInstanceId: Elastic IP ID
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "eipInstanceId"))

    @eip_instance_id.setter
    def eip_instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__437912cf54e8826592d76c2c4629bfff81523b3d9bedaa76b75d519f4a6ee1c3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "eipInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="hostAliase")
    def host_aliase(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.HostAliaseProperty"]]]]:
        '''
        :Property: hostAliase: Customize the hostname mapping of a container inside the pod
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.HostAliaseProperty"]]]], jsii.get(self, "hostAliase"))

    @host_aliase.setter
    def host_aliase(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.HostAliaseProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5c142d461f802620bba87db56d1ec7ea4da6f89b57e445a11c5a01a18e237a48)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "hostAliase", value)

    @builtins.property
    @jsii.member(jsii_name="imageRegistryCredential")
    def image_registry_credential(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.ImageRegistryCredentialProperty"]]]]:
        '''
        :Property: imageRegistryCredential: The information that you need to log on to the container image repository, including the server address, username, and password.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.ImageRegistryCredentialProperty"]]]], jsii.get(self, "imageRegistryCredential"))

    @image_registry_credential.setter
    def image_registry_credential(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.ImageRegistryCredentialProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2cdf56931e53760a3c17652c9fcee6950809ba3dfb40909317d715103f3933a2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "imageRegistryCredential", value)

    @builtins.property
    @jsii.member(jsii_name="imageSnapshotId")
    def image_snapshot_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: imageSnapshotId: Image cache ID or snapshot ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "imageSnapshotId"))

    @image_snapshot_id.setter
    def image_snapshot_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5984befdb67979c051caff1d1440317bb7f95522c348baed6b6ac54fe06c1734)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "imageSnapshotId", value)

    @builtins.property
    @jsii.member(jsii_name="initContainer")
    def init_container(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.InitContainerProperty"]]]]:
        '''
        :Property: initContainer: The containers that constitute the container group for initializing.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.InitContainerProperty"]]]], jsii.get(self, "initContainer"))

    @init_container.setter
    def init_container(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.InitContainerProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5ec424a04280b9f105ca4782722947e5893082f96810a1805c4b03c41a00c3d3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "initContainer", value)

    @builtins.property
    @jsii.member(jsii_name="instanceType")
    def instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceType: The type of the ECS instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceType"))

    @instance_type.setter
    def instance_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5135b62bc50155378a13fbc2f391640077275559e4b16b743bec9078f12603b9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceType", value)

    @builtins.property
    @jsii.member(jsii_name="ipv6AddressCount")
    def ipv6_address_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ipv6AddressCount: The number of IPv6 addresses.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ipv6AddressCount"))

    @ipv6_address_count.setter
    def ipv6_address_count(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b6a0a18ffb066c59edfaa3e1a3cf9c8b6a3e9de11c3b4638307b2a11d63cc630)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ipv6AddressCount", value)

    @builtins.property
    @jsii.member(jsii_name="memory")
    def memory(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: memory: memory size
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "memory"))

    @memory.setter
    def memory(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__790056c1216ab695993156ff12ca384f40fd8a948ca14fae6a5cc4b7152c7d31)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "memory", value)

    @builtins.property
    @jsii.member(jsii_name="ramRoleName")
    def ram_role_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ramRoleName: The RAM role that the container group assumes. ECI and ECS share the same RAM role.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ramRoleName"))

    @ram_role_name.setter
    def ram_role_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b3e6ffeccfe08167eeb7bd6bf2e1d86bd18a2db812b472765a89798cc617aa38)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ramRoleName", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6940c82ed2e2a248397a5dd0850c4280741519844be34983371da5539fc9bc79)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="restartPolicy")
    def restart_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: restartPolicy: The policy for restarting the instance. Default value: Always.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "restartPolicy"))

    @restart_policy.setter
    def restart_policy(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0d682fdb194b6dbdd13d459cc073e971c00b25521fc7efb132523c68d3b3fa9c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "restartPolicy", value)

    @builtins.property
    @jsii.member(jsii_name="securityContextSysctl")
    def security_context_sysctl(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.SecurityContextSysctlProperty"]]]]:
        '''
        :Property:

        securityContextSysctl: ECI Sysctl is valid for every container in ECI.
        Currently only two Sysctl keyNames are supported:
        Kernel.shm_rmid_forced
        Kernel.msgmax
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.SecurityContextSysctlProperty"]]]], jsii.get(self, "securityContextSysctl"))

    @security_context_sysctl.setter
    def security_context_sysctl(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.SecurityContextSysctlProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a274734d054d118092866b8c10ce3a5cd7fbf0c416425f3ddf5cee3ef05e4e93)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityContextSysctl", value)

    @builtins.property
    @jsii.member(jsii_name="slsEnable")
    def sls_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: slsEnable: Enable user log collection. The default is False.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "slsEnable"))

    @sls_enable.setter
    def sls_enable(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ce6259f0f39e0dcbd24816a8217b80f68ec08413cd4b64ac08ef3601477fb2d7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "slsEnable", value)

    @builtins.property
    @jsii.member(jsii_name="spotPriceLimit")
    def spot_price_limit(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: spotPriceLimit: Set the hourly maximum price of the instance. It supports a maximum of 3 decimal places. It takes effect when the value of the parameter SpotStrategy is SpotWithPriceLimit.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "spotPriceLimit"))

    @spot_price_limit.setter
    def spot_price_limit(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6513127c7060ab6958ce8fd4a5234ed0aa44189da0258f2d1b3af50e5a77666b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "spotPriceLimit", value)

    @builtins.property
    @jsii.member(jsii_name="spotStrategy")
    def spot_strategy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        spotStrategy: Instance preemption strategy.
        Ranges:
        NoSpot (default): normal pay-as-you-go instances.
        SpotWithPriceLimit: Preemptive instance that sets a cap price.
        SpotAsPriceGo: The system automatically bids, following the current market actual price.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "spotStrategy"))

    @spot_strategy.setter
    def spot_strategy(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0e6d231c1bda43c2451e04028f6c8ea0bc70f6bb3e1d0caa284887f128a62b7f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "spotStrategy", value)

    @builtins.property
    @jsii.member(jsii_name="tag")
    def tag(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, _ros_cdk_core_7adfd82f.RosTag]]]]:
        '''
        :Property: tag: The list of container group tags in the form of key/value pairs. You can define a maximum of 20 tags for each container group.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, _ros_cdk_core_7adfd82f.RosTag]]]], jsii.get(self, "tag"))

    @tag.setter
    def tag(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, _ros_cdk_core_7adfd82f.RosTag]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__47902e0e8931ab4b4bd0a12da47952eb5ee371a5f777bd32b19ee980f961cf84)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tag", value)

    @builtins.property
    @jsii.member(jsii_name="terminationGracePeriodSeconds")
    def termination_grace_period_seconds(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: terminationGracePeriodSeconds: The buffer time for the program to handle operations before it is stopped.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "terminationGracePeriodSeconds"))

    @termination_grace_period_seconds.setter
    def termination_grace_period_seconds(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0b1bb9feeea77dabaa83767c556a05de229c1ef2d4d211cccf0800989be66c4e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "terminationGracePeriodSeconds", value)

    @builtins.property
    @jsii.member(jsii_name="volume")
    def volume(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.VolumeProperty"]]]]:
        '''
        :Property: volume: The data volume. You can specify a maximum of 20 data volumes.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.VolumeProperty"]]]], jsii.get(self, "volume"))

    @volume.setter
    def volume(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.VolumeProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__edbfe46c7de6a2c68b23b8013e6d29e680bdb24b9e5a931d21553b3f670ef69c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "volume", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: The ID of the zone in which the instance resides. If you leave the parameter blank, the system assigns a zone for you. The default value is blank.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__50b1525372332e3443aeb30adb02875cad1bcb213453fe3600a487cdb481a049)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eci.RosContainerGroup.AcrRegistryInfoProperty",
        jsii_struct_bases=[],
        name_mapping={
            "instance_id": "instanceId",
            "domain": "domain",
            "instance_name": "instanceName",
            "region_id": "regionId",
        },
    )
    class AcrRegistryInfoProperty:
        def __init__(
            self,
            *,
            instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            domain: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param instance_id: 
            :param domain: 
            :param instance_name: 
            :param region_id: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__e1ed85e49d2e42055bbcee48fedc04811d557fc29c4c1068a58b4576be8a1e11)
                check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
                check_type(argname="argument domain", value=domain, expected_type=type_hints["domain"])
                check_type(argname="argument instance_name", value=instance_name, expected_type=type_hints["instance_name"])
                check_type(argname="argument region_id", value=region_id, expected_type=type_hints["region_id"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "instance_id": instance_id,
            }
            if domain is not None:
                self._values["domain"] = domain
            if instance_name is not None:
                self._values["instance_name"] = instance_name
            if region_id is not None:
                self._values["region_id"] = region_id

        @builtins.property
        def instance_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: instanceId: Instance id
            '''
            result = self._values.get("instance_id")
            assert result is not None, "Required property 'instance_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def domain(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: domain: domain
            '''
            result = self._values.get("domain")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def instance_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: instanceName: instance name
            '''
            result = self._values.get("instance_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def region_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: regionId: The region to which it belongs. Optional, the default is the local region
            '''
            result = self._values.get("region_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "AcrRegistryInfoProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eci.RosContainerGroup.ConfigFileVolumeConfigFileToPathProperty",
        jsii_struct_bases=[],
        name_mapping={"path": "path", "content": "content"},
    )
    class ConfigFileVolumeConfigFileToPathProperty:
        def __init__(
            self,
            *,
            path: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            content: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param path: 
            :param content: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__31719b61953301b9c096b8b77d55a665ef074bdd52b7547db908df22bf937b16)
                check_type(argname="argument path", value=path, expected_type=type_hints["path"])
                check_type(argname="argument content", value=content, expected_type=type_hints["content"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "path": path,
            }
            if content is not None:
                self._values["content"] = content

        @builtins.property
        def path(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: path: The relative path in the configuration file. You can specify a location of a directory relative to another directory.
            '''
            result = self._values.get("path")
            assert result is not None, "Required property 'path' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def content(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: content: The content of the configuration file. Maximum size: 32 KB.
            '''
            result = self._values.get("content")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ConfigFileVolumeConfigFileToPathProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eci.RosContainerGroup.ContainerProperty",
        jsii_struct_bases=[],
        name_mapping={
            "image": "image",
            "name": "name",
            "arg": "arg",
            "command": "command",
            "cpu": "cpu",
            "environment_var": "environmentVar",
            "image_pull_policy": "imagePullPolicy",
            "liveness_probe": "livenessProbe",
            "memory": "memory",
            "port": "port",
            "readiness_probe": "readinessProbe",
            "security_context": "securityContext",
            "stdin": "stdin",
            "stdin_once": "stdinOnce",
            "tty": "tty",
            "volume_mount": "volumeMount",
            "working_dir": "workingDir",
        },
    )
    class ContainerProperty:
        def __init__(
            self,
            *,
            image: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            arg: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            command: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            cpu: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            environment_var: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosContainerGroup.EnvironmentVarProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            image_pull_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            liveness_probe: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosContainerGroup.LivenessProbeProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            memory: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            port: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosContainerGroup.PortProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            readiness_probe: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosContainerGroup.ReadinessProbeProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            security_context: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosContainerGroup.SecurityContextProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            stdin: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            stdin_once: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            tty: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            volume_mount: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosContainerGroup.VolumeMountProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            working_dir: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param image: 
            :param name: 
            :param arg: 
            :param command: 
            :param cpu: 
            :param environment_var: 
            :param image_pull_policy: 
            :param liveness_probe: 
            :param memory: 
            :param port: 
            :param readiness_probe: 
            :param security_context: 
            :param stdin: 
            :param stdin_once: 
            :param tty: 
            :param volume_mount: 
            :param working_dir: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__ca473c4751c1103799a01ce099656b3321d578cb098e8e51cc193c8d6aff38e0)
                check_type(argname="argument image", value=image, expected_type=type_hints["image"])
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument arg", value=arg, expected_type=type_hints["arg"])
                check_type(argname="argument command", value=command, expected_type=type_hints["command"])
                check_type(argname="argument cpu", value=cpu, expected_type=type_hints["cpu"])
                check_type(argname="argument environment_var", value=environment_var, expected_type=type_hints["environment_var"])
                check_type(argname="argument image_pull_policy", value=image_pull_policy, expected_type=type_hints["image_pull_policy"])
                check_type(argname="argument liveness_probe", value=liveness_probe, expected_type=type_hints["liveness_probe"])
                check_type(argname="argument memory", value=memory, expected_type=type_hints["memory"])
                check_type(argname="argument port", value=port, expected_type=type_hints["port"])
                check_type(argname="argument readiness_probe", value=readiness_probe, expected_type=type_hints["readiness_probe"])
                check_type(argname="argument security_context", value=security_context, expected_type=type_hints["security_context"])
                check_type(argname="argument stdin", value=stdin, expected_type=type_hints["stdin"])
                check_type(argname="argument stdin_once", value=stdin_once, expected_type=type_hints["stdin_once"])
                check_type(argname="argument tty", value=tty, expected_type=type_hints["tty"])
                check_type(argname="argument volume_mount", value=volume_mount, expected_type=type_hints["volume_mount"])
                check_type(argname="argument working_dir", value=working_dir, expected_type=type_hints["working_dir"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "image": image,
                "name": name,
            }
            if arg is not None:
                self._values["arg"] = arg
            if command is not None:
                self._values["command"] = command
            if cpu is not None:
                self._values["cpu"] = cpu
            if environment_var is not None:
                self._values["environment_var"] = environment_var
            if image_pull_policy is not None:
                self._values["image_pull_policy"] = image_pull_policy
            if liveness_probe is not None:
                self._values["liveness_probe"] = liveness_probe
            if memory is not None:
                self._values["memory"] = memory
            if port is not None:
                self._values["port"] = port
            if readiness_probe is not None:
                self._values["readiness_probe"] = readiness_probe
            if security_context is not None:
                self._values["security_context"] = security_context
            if stdin is not None:
                self._values["stdin"] = stdin
            if stdin_once is not None:
                self._values["stdin_once"] = stdin_once
            if tty is not None:
                self._values["tty"] = tty
            if volume_mount is not None:
                self._values["volume_mount"] = volume_mount
            if working_dir is not None:
                self._values["working_dir"] = working_dir

        @builtins.property
        def image(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: image: The container image.
            '''
            result = self._values.get("image")
            assert result is not None, "Required property 'image' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: name: The name of the container.
            '''
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def arg(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: arg: The arguments passed to the commands. A maximum of 10 arguments are supported.
            '''
            result = self._values.get("arg")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def command(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: command: The list of commands that you want to send to a container to run. You can specify a maximum of 1 commands. Maximum length per string: 256 characters.
            '''
            result = self._values.get("command")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def cpu(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: cpu: The number of vCPUs assigned to the container. Unit: vCPUs (cores).
            '''
            result = self._values.get("cpu")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def environment_var(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.EnvironmentVarProperty"]]]]:
            '''
            :Property: environmentVar: Environment variables in the operating system of the container. Each environment variable is a key/value pair, and both the key and value are strings. A maximum of 100 environment variables are supported. The key indicates the name of a variable. The value indicates the value of the variable.
            '''
            result = self._values.get("environment_var")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.EnvironmentVarProperty"]]]], result)

        @builtins.property
        def image_pull_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: imagePullPolicy: The image pull policy. You can use it to pull the image from the image repository.
            '''
            result = self._values.get("image_pull_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def liveness_probe(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.LivenessProbeProperty"]]:
            '''
            :Property: livenessProbe: The liveness probe.
            '''
            result = self._values.get("liveness_probe")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.LivenessProbeProperty"]], result)

        @builtins.property
        def memory(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: memory: The memory assigned to the container. Unit: GiB.
            '''
            result = self._values.get("memory")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def port(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.PortProperty"]]]]:
            '''
            :Property: port: The open ports and protocols. You can set a maximum of 100 ports.
            '''
            result = self._values.get("port")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.PortProperty"]]]], result)

        @builtins.property
        def readiness_probe(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.ReadinessProbeProperty"]]:
            '''
            :Property: readinessProbe: The readiness probe.
            '''
            result = self._values.get("readiness_probe")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.ReadinessProbeProperty"]], result)

        @builtins.property
        def security_context(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.SecurityContextProperty"]]:
            '''
            :Property: securityContext: The security context of the container group.
            '''
            result = self._values.get("security_context")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.SecurityContextProperty"]], result)

        @builtins.property
        def stdin(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: stdin: undefined
            '''
            result = self._values.get("stdin")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def stdin_once(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: stdinOnce: undefined
            '''
            result = self._values.get("stdin_once")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def tty(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: tty: undefined
            '''
            result = self._values.get("tty")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def volume_mount(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.VolumeMountProperty"]]]]:
            '''
            :Property: volumeMount: The number of volumes that are mounted to the container. A maximum of 16 volumes are supported.
            '''
            result = self._values.get("volume_mount")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.VolumeMountProperty"]]]], result)

        @builtins.property
        def working_dir(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: workingDir: The working directory for the container.
            '''
            result = self._values.get("working_dir")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ContainerProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eci.RosContainerGroup.DnsConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "name_server": "nameServer",
            "option": "option",
            "search": "search",
        },
    )
    class DnsConfigProperty:
        def __init__(
            self,
            *,
            name_server: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            option: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosContainerGroup.OptionProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            search: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        ) -> None:
            '''
            :param name_server: 
            :param option: 
            :param search: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__7390e3fe4280c6eb1783c1be0e762b5ac6c888511feeeca373fa6cf1cabfae25)
                check_type(argname="argument name_server", value=name_server, expected_type=type_hints["name_server"])
                check_type(argname="argument option", value=option, expected_type=type_hints["option"])
                check_type(argname="argument search", value=search, expected_type=type_hints["search"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if name_server is not None:
                self._values["name_server"] = name_server
            if option is not None:
                self._values["option"] = option
            if search is not None:
                self._values["search"] = search

        @builtins.property
        def name_server(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: nameServer: The list of IP addresses for DNS servers.
            '''
            result = self._values.get("name_server")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def option(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.OptionProperty"]]]]:
            '''
            :Property: option: The list of options. Each option includes a name and a value. The value is optional.
            '''
            result = self._values.get("option")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.OptionProperty"]]]], result)

        @builtins.property
        def search(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: search: The list of DNS search domains.
            '''
            result = self._values.get("search")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DnsConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eci.RosContainerGroup.EnvironmentVarProperty",
        jsii_struct_bases=[],
        name_mapping={
            "field_ref_field_path": "fieldRefFieldPath",
            "key": "key",
            "value": "value",
        },
    )
    class EnvironmentVarProperty:
        def __init__(
            self,
            *,
            field_ref_field_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param field_ref_field_path: 
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__02c38ac90d568138f436ae1115c80edcc43817f32df778a5b8a72e7142fbb447)
                check_type(argname="argument field_ref_field_path", value=field_ref_field_path, expected_type=type_hints["field_ref_field_path"])
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if field_ref_field_path is not None:
                self._values["field_ref_field_path"] = field_ref_field_path
            if key is not None:
                self._values["key"] = key
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def field_ref_field_path(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: fieldRefFieldPath: A reference to another variable. Currently, only status.podIP is supported.
            '''
            result = self._values.get("field_ref_field_path")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def key(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: key: The name of the variable. The name must be [1,128] characters in length and can contain [, 0-9a-zA-Z, ], and underscores (_). It cannot start with a digit.
            '''
            result = self._values.get("key")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: The value of the variable.
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "EnvironmentVarProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eci.RosContainerGroup.HostAliaseProperty",
        jsii_struct_bases=[],
        name_mapping={"hostname": "hostname", "ip": "ip"},
    )
    class HostAliaseProperty:
        def __init__(
            self,
            *,
            hostname: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param hostname: 
            :param ip: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__74f9900d7f127d988ec6522adbec43ab05d263e4fd96943ad0f12a5940caa463)
                check_type(argname="argument hostname", value=hostname, expected_type=type_hints["hostname"])
                check_type(argname="argument ip", value=ip, expected_type=type_hints["ip"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if hostname is not None:
                self._values["hostname"] = hostname
            if ip is not None:
                self._values["ip"] = ip

        @builtins.property
        def hostname(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: hostname: undefined
            '''
            result = self._values.get("hostname")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def ip(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ip: undefined
            '''
            result = self._values.get("ip")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "HostAliaseProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eci.RosContainerGroup.ImageRegistryCredentialProperty",
        jsii_struct_bases=[],
        name_mapping={
            "password": "password",
            "server": "server",
            "user_name": "userName",
        },
    )
    class ImageRegistryCredentialProperty:
        def __init__(
            self,
            *,
            password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            server: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            user_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param password: 
            :param server: 
            :param user_name: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__817ccf032f66b0b6d797be72096deaf7fab8100e789f07ee8340f5bf8251a079)
                check_type(argname="argument password", value=password, expected_type=type_hints["password"])
                check_type(argname="argument server", value=server, expected_type=type_hints["server"])
                check_type(argname="argument user_name", value=user_name, expected_type=type_hints["user_name"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "password": password,
                "server": server,
                "user_name": user_name,
            }

        @builtins.property
        def password(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: password: The password that is used to log on to the image repository.
            '''
            result = self._values.get("password")
            assert result is not None, "Required property 'password' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def server(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: server: The IP address of the image repository. This address does not include a protocol prefix, such as http:// or https://.
            '''
            result = self._values.get("server")
            assert result is not None, "Required property 'server' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def user_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: userName: The username that is used to log on to the image repository.
            '''
            result = self._values.get("user_name")
            assert result is not None, "Required property 'user_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ImageRegistryCredentialProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eci.RosContainerGroup.InitContainerEnvironmentVarProperty",
        jsii_struct_bases=[],
        name_mapping={
            "field_ref_field_path": "fieldRefFieldPath",
            "key": "key",
            "value": "value",
        },
    )
    class InitContainerEnvironmentVarProperty:
        def __init__(
            self,
            *,
            field_ref_field_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param field_ref_field_path: 
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__cf651166d250edca071af337091410e9cec62263978163a88f86bb17c486f766)
                check_type(argname="argument field_ref_field_path", value=field_ref_field_path, expected_type=type_hints["field_ref_field_path"])
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if field_ref_field_path is not None:
                self._values["field_ref_field_path"] = field_ref_field_path
            if key is not None:
                self._values["key"] = key
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def field_ref_field_path(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: fieldRefFieldPath: A reference to another variable. Currently, only status.podIP is supported.
            '''
            result = self._values.get("field_ref_field_path")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def key(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: key: The name of the variable. The name must be [1,128] characters in length and can contain [, 0-9a-zA-Z, ], and underscores (_). It cannot start with a digit.
            '''
            result = self._values.get("key")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: The value of the variable. The value must be [0,256] characters in length.
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "InitContainerEnvironmentVarProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eci.RosContainerGroup.InitContainerPortProperty",
        jsii_struct_bases=[],
        name_mapping={"port": "port", "protocol": "protocol"},
    )
    class InitContainerPortProperty:
        def __init__(
            self,
            *,
            port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param port: 
            :param protocol: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__be1c7eaf13af04111f27e3949f40e1c9928c210ed790f3482f8bd4b359856001)
                check_type(argname="argument port", value=port, expected_type=type_hints["port"])
                check_type(argname="argument protocol", value=protocol, expected_type=type_hints["protocol"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if port is not None:
                self._values["port"] = port
            if protocol is not None:
                self._values["protocol"] = protocol

        @builtins.property
        def port(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: port: The port number. Valid values: 1-65535.
            '''
            result = self._values.get("port")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def protocol(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: protocol: The protocol that the port uses. Valid values: TCP and UDP
            '''
            result = self._values.get("protocol")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "InitContainerPortProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eci.RosContainerGroup.InitContainerProperty",
        jsii_struct_bases=[],
        name_mapping={
            "arg": "arg",
            "command": "command",
            "cpu": "cpu",
            "environment_var": "environmentVar",
            "image": "image",
            "image_pull_policy": "imagePullPolicy",
            "memory": "memory",
            "name": "name",
            "port": "port",
            "security_context": "securityContext",
            "volume_mount": "volumeMount",
            "working_dir": "workingDir",
        },
    )
    class InitContainerProperty:
        def __init__(
            self,
            *,
            arg: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            command: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            cpu: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            environment_var: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosContainerGroup.InitContainerEnvironmentVarProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            image: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            image_pull_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            memory: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            port: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosContainerGroup.InitContainerPortProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            security_context: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosContainerGroup.InitContainerSecurityContextProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            volume_mount: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosContainerGroup.InitContainerVolumeMountProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            working_dir: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param arg: 
            :param command: 
            :param cpu: 
            :param environment_var: 
            :param image: 
            :param image_pull_policy: 
            :param memory: 
            :param name: 
            :param port: 
            :param security_context: 
            :param volume_mount: 
            :param working_dir: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__f26c0eeb4771c15cf1a1fe8ad37bf7d5872f93c80d441589091d8c19f42ac158)
                check_type(argname="argument arg", value=arg, expected_type=type_hints["arg"])
                check_type(argname="argument command", value=command, expected_type=type_hints["command"])
                check_type(argname="argument cpu", value=cpu, expected_type=type_hints["cpu"])
                check_type(argname="argument environment_var", value=environment_var, expected_type=type_hints["environment_var"])
                check_type(argname="argument image", value=image, expected_type=type_hints["image"])
                check_type(argname="argument image_pull_policy", value=image_pull_policy, expected_type=type_hints["image_pull_policy"])
                check_type(argname="argument memory", value=memory, expected_type=type_hints["memory"])
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument port", value=port, expected_type=type_hints["port"])
                check_type(argname="argument security_context", value=security_context, expected_type=type_hints["security_context"])
                check_type(argname="argument volume_mount", value=volume_mount, expected_type=type_hints["volume_mount"])
                check_type(argname="argument working_dir", value=working_dir, expected_type=type_hints["working_dir"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if arg is not None:
                self._values["arg"] = arg
            if command is not None:
                self._values["command"] = command
            if cpu is not None:
                self._values["cpu"] = cpu
            if environment_var is not None:
                self._values["environment_var"] = environment_var
            if image is not None:
                self._values["image"] = image
            if image_pull_policy is not None:
                self._values["image_pull_policy"] = image_pull_policy
            if memory is not None:
                self._values["memory"] = memory
            if name is not None:
                self._values["name"] = name
            if port is not None:
                self._values["port"] = port
            if security_context is not None:
                self._values["security_context"] = security_context
            if volume_mount is not None:
                self._values["volume_mount"] = volume_mount
            if working_dir is not None:
                self._values["working_dir"] = working_dir

        @builtins.property
        def arg(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: arg: The arguments passed to the commands. A maximum of 10 arguments are supported.
            '''
            result = self._values.get("arg")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def command(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: command: The list of commands that you want to send to a container to run. You can specify a maximum of 1 commands. Maximum length per string: 256 characters.
            '''
            result = self._values.get("command")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def cpu(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: cpu: The number of vCPUs assigned to the container. Unit: vCPUs (cores).
            '''
            result = self._values.get("cpu")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def environment_var(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.InitContainerEnvironmentVarProperty"]]]]:
            '''
            :Property: environmentVar: Environment variables in the operating system of the container. Each environment variable is a key/value pair, and both the key and value are strings. A maximum of 100 environment variables are supported. The key indicates the name of a variable. The value indicates the value of the variable.
            '''
            result = self._values.get("environment_var")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.InitContainerEnvironmentVarProperty"]]]], result)

        @builtins.property
        def image(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: image: The container image.
            '''
            result = self._values.get("image")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def image_pull_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: imagePullPolicy: The image pull policy. You can use it to pull the image from the image repository.
            '''
            result = self._values.get("image_pull_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def memory(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: memory: The memory assigned to the container. Unit: GiB.
            '''
            result = self._values.get("memory")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: name: The name of the container.
            '''
            result = self._values.get("name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def port(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.InitContainerPortProperty"]]]]:
            '''
            :Property: port: The open ports and protocols. You can set a maximum of 100 ports.
            '''
            result = self._values.get("port")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.InitContainerPortProperty"]]]], result)

        @builtins.property
        def security_context(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.InitContainerSecurityContextProperty"]]:
            '''
            :Property: securityContext: The security context of the container group.
            '''
            result = self._values.get("security_context")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.InitContainerSecurityContextProperty"]], result)

        @builtins.property
        def volume_mount(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.InitContainerVolumeMountProperty"]]]]:
            '''
            :Property: volumeMount: The number of volumes that are mounted to the container. A maximum of 16 volumes are supported.
            '''
            result = self._values.get("volume_mount")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.InitContainerVolumeMountProperty"]]]], result)

        @builtins.property
        def working_dir(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: workingDir: The working directory for the container.
            '''
            result = self._values.get("working_dir")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "InitContainerProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eci.RosContainerGroup.InitContainerSecurityContextProperty",
        jsii_struct_bases=[],
        name_mapping={
            "capability_add": "capabilityAdd",
            "read_only_root_filesystem": "readOnlyRootFilesystem",
            "run_as_user": "runAsUser",
        },
    )
    class InitContainerSecurityContextProperty:
        def __init__(
            self,
            *,
            capability_add: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            read_only_root_filesystem: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            run_as_user: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param capability_add: 
            :param read_only_root_filesystem: 
            :param run_as_user: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__b3aed5c5e929bdbef83253ce9118e2f22ace33a282fc88473852efafe46e2be0)
                check_type(argname="argument capability_add", value=capability_add, expected_type=type_hints["capability_add"])
                check_type(argname="argument read_only_root_filesystem", value=read_only_root_filesystem, expected_type=type_hints["read_only_root_filesystem"])
                check_type(argname="argument run_as_user", value=run_as_user, expected_type=type_hints["run_as_user"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if capability_add is not None:
                self._values["capability_add"] = capability_add
            if read_only_root_filesystem is not None:
                self._values["read_only_root_filesystem"] = read_only_root_filesystem
            if run_as_user is not None:
                self._values["run_as_user"] = run_as_user

        @builtins.property
        def capability_add(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: capabilityAdd: undefined
            '''
            result = self._values.get("capability_add")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def read_only_root_filesystem(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: readOnlyRootFilesystem: Valid value: True.
            '''
            result = self._values.get("read_only_root_filesystem")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def run_as_user(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: runAsUser: Valid value: 1337.
            '''
            result = self._values.get("run_as_user")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "InitContainerSecurityContextProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eci.RosContainerGroup.InitContainerVolumeMountProperty",
        jsii_struct_bases=[],
        name_mapping={
            "mount_path": "mountPath",
            "name": "name",
            "read_only": "readOnly",
        },
    )
    class InitContainerVolumeMountProperty:
        def __init__(
            self,
            *,
            mount_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            name: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            read_only: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param mount_path: 
            :param name: 
            :param read_only: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__2bb3a0060e1fb50f4d6203f7785362dd1cd8c36d5559daa2c51b3641def4c623)
                check_type(argname="argument mount_path", value=mount_path, expected_type=type_hints["mount_path"])
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument read_only", value=read_only, expected_type=type_hints["read_only"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if mount_path is not None:
                self._values["mount_path"] = mount_path
            if name is not None:
                self._values["name"] = name
            if read_only is not None:
                self._values["read_only"] = read_only

        @builtins.property
        def mount_path(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: mountPath: A mount path. The data in the target directory is overwritten by the data in the mounted volume. Therefore, use caution when you mount a volume to a directory.
            '''
            result = self._values.get("mount_path")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def name(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: name: The name of the volume. The name is the same as that specified for the Name parameter in the Volume section.
            '''
            result = self._values.get("name")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def read_only(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: readOnly: Default value: False.
            '''
            result = self._values.get("read_only")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "InitContainerVolumeMountProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eci.RosContainerGroup.LivenessProbeProperty",
        jsii_struct_bases=[],
        name_mapping={
            "exec_command": "execCommand",
            "failure_threshold": "failureThreshold",
            "http_get_path": "httpGetPath",
            "http_get_port": "httpGetPort",
            "http_get_scheme": "httpGetScheme",
            "initial_delay_seconds": "initialDelaySeconds",
            "period_seconds": "periodSeconds",
            "success_threshold": "successThreshold",
            "tcp_socket_port": "tcpSocketPort",
            "timeout_seconds": "timeoutSeconds",
        },
    )
    class LivenessProbeProperty:
        def __init__(
            self,
            *,
            exec_command: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            failure_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            http_get_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            http_get_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            http_get_scheme: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            initial_delay_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            period_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            success_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            tcp_socket_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            timeout_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param exec_command: 
            :param failure_threshold: 
            :param http_get_path: 
            :param http_get_port: 
            :param http_get_scheme: 
            :param initial_delay_seconds: 
            :param period_seconds: 
            :param success_threshold: 
            :param tcp_socket_port: 
            :param timeout_seconds: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__64ee897829a8a8c19c1f0e265a3c0633ac1dae0e24b22e3fe8927b26d91ead08)
                check_type(argname="argument exec_command", value=exec_command, expected_type=type_hints["exec_command"])
                check_type(argname="argument failure_threshold", value=failure_threshold, expected_type=type_hints["failure_threshold"])
                check_type(argname="argument http_get_path", value=http_get_path, expected_type=type_hints["http_get_path"])
                check_type(argname="argument http_get_port", value=http_get_port, expected_type=type_hints["http_get_port"])
                check_type(argname="argument http_get_scheme", value=http_get_scheme, expected_type=type_hints["http_get_scheme"])
                check_type(argname="argument initial_delay_seconds", value=initial_delay_seconds, expected_type=type_hints["initial_delay_seconds"])
                check_type(argname="argument period_seconds", value=period_seconds, expected_type=type_hints["period_seconds"])
                check_type(argname="argument success_threshold", value=success_threshold, expected_type=type_hints["success_threshold"])
                check_type(argname="argument tcp_socket_port", value=tcp_socket_port, expected_type=type_hints["tcp_socket_port"])
                check_type(argname="argument timeout_seconds", value=timeout_seconds, expected_type=type_hints["timeout_seconds"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if exec_command is not None:
                self._values["exec_command"] = exec_command
            if failure_threshold is not None:
                self._values["failure_threshold"] = failure_threshold
            if http_get_path is not None:
                self._values["http_get_path"] = http_get_path
            if http_get_port is not None:
                self._values["http_get_port"] = http_get_port
            if http_get_scheme is not None:
                self._values["http_get_scheme"] = http_get_scheme
            if initial_delay_seconds is not None:
                self._values["initial_delay_seconds"] = initial_delay_seconds
            if period_seconds is not None:
                self._values["period_seconds"] = period_seconds
            if success_threshold is not None:
                self._values["success_threshold"] = success_threshold
            if tcp_socket_port is not None:
                self._values["tcp_socket_port"] = tcp_socket_port
            if timeout_seconds is not None:
                self._values["timeout_seconds"] = timeout_seconds

        @builtins.property
        def exec_command(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: execCommand: The commands for running the readiness probe.
            '''
            result = self._values.get("exec_command")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def failure_threshold(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: failureThreshold: The minimum consecutive failures for the probe to be considered to have failed after having succeeded. Default value: 3.
            '''
            result = self._values.get("failure_threshold")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def http_get_path(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: httpGetPath: The path to which the system sends an HTTP GET request to perform the check.
            '''
            result = self._values.get("http_get_path")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def http_get_port(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: httpGetPort: The port to which the system sends an HTTP GET request to perform the check.
            '''
            result = self._values.get("http_get_port")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def http_get_scheme(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: httpGetScheme: The protocol that is used to connect the host. Valid values: HTTP and HTTPS.
            '''
            result = self._values.get("http_get_scheme")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def initial_delay_seconds(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: initialDelaySeconds: The number of seconds after the container has started before probes are initiated.
            '''
            result = self._values.get("initial_delay_seconds")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def period_seconds(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: periodSeconds: Specifies the period at which the probe is performed. Unit: seconds. Default value: 10. Minimum value: 1.
            '''
            result = self._values.get("period_seconds")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def success_threshold(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: successThreshold: The minimum consecutive successes for the probe to be considered successful after having failed. Default value: 1.
            '''
            result = self._values.get("success_threshold")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def tcp_socket_port(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: tcpSocketPort: The port to which the system sends a TCP SOCKET request to perform the check.
            '''
            result = self._values.get("tcp_socket_port")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def timeout_seconds(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: timeoutSeconds: The number of seconds after which the probe times out. Default value: 1. Minimum value: 1.
            '''
            result = self._values.get("timeout_seconds")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "LivenessProbeProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eci.RosContainerGroup.OptionProperty",
        jsii_struct_bases=[],
        name_mapping={"name": "name", "value": "value"},
    )
    class OptionProperty:
        def __init__(
            self,
            *,
            name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param name: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__cc9ab174bddfb72d632aa7ae41003cc1390f75a2b39a4ec59eb85d06cba0b69d)
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if name is not None:
                self._values["name"] = name
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: name: The name of the option.
            '''
            result = self._values.get("name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: The value of the option.
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "OptionProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eci.RosContainerGroup.PortProperty",
        jsii_struct_bases=[],
        name_mapping={"port": "port", "protocol": "protocol"},
    )
    class PortProperty:
        def __init__(
            self,
            *,
            port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param port: 
            :param protocol: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__a1d71f1b640e6e898f95a6c19486a794446324e1d235827b87eabda5cebe0e66)
                check_type(argname="argument port", value=port, expected_type=type_hints["port"])
                check_type(argname="argument protocol", value=protocol, expected_type=type_hints["protocol"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if port is not None:
                self._values["port"] = port
            if protocol is not None:
                self._values["protocol"] = protocol

        @builtins.property
        def port(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: port: The port number. Valid values: 1-65535.
            '''
            result = self._values.get("port")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def protocol(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: protocol: The protocol that the port uses. Valid values: TCP and UDP
            '''
            result = self._values.get("protocol")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PortProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eci.RosContainerGroup.ReadinessProbeProperty",
        jsii_struct_bases=[],
        name_mapping={
            "exec_command": "execCommand",
            "failure_threshold": "failureThreshold",
            "http_get_path": "httpGetPath",
            "http_get_port": "httpGetPort",
            "http_get_scheme": "httpGetScheme",
            "initial_delay_seconds": "initialDelaySeconds",
            "period_seconds": "periodSeconds",
            "success_threshold": "successThreshold",
            "tcp_socket_port": "tcpSocketPort",
            "timeout_seconds": "timeoutSeconds",
        },
    )
    class ReadinessProbeProperty:
        def __init__(
            self,
            *,
            exec_command: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            failure_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            http_get_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            http_get_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            http_get_scheme: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            initial_delay_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            period_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            success_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            tcp_socket_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            timeout_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param exec_command: 
            :param failure_threshold: 
            :param http_get_path: 
            :param http_get_port: 
            :param http_get_scheme: 
            :param initial_delay_seconds: 
            :param period_seconds: 
            :param success_threshold: 
            :param tcp_socket_port: 
            :param timeout_seconds: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__3082e82ea97e0d1e91b0c7e0408c84944dfe1b1a5880ae9b5df9a5a234a0831d)
                check_type(argname="argument exec_command", value=exec_command, expected_type=type_hints["exec_command"])
                check_type(argname="argument failure_threshold", value=failure_threshold, expected_type=type_hints["failure_threshold"])
                check_type(argname="argument http_get_path", value=http_get_path, expected_type=type_hints["http_get_path"])
                check_type(argname="argument http_get_port", value=http_get_port, expected_type=type_hints["http_get_port"])
                check_type(argname="argument http_get_scheme", value=http_get_scheme, expected_type=type_hints["http_get_scheme"])
                check_type(argname="argument initial_delay_seconds", value=initial_delay_seconds, expected_type=type_hints["initial_delay_seconds"])
                check_type(argname="argument period_seconds", value=period_seconds, expected_type=type_hints["period_seconds"])
                check_type(argname="argument success_threshold", value=success_threshold, expected_type=type_hints["success_threshold"])
                check_type(argname="argument tcp_socket_port", value=tcp_socket_port, expected_type=type_hints["tcp_socket_port"])
                check_type(argname="argument timeout_seconds", value=timeout_seconds, expected_type=type_hints["timeout_seconds"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if exec_command is not None:
                self._values["exec_command"] = exec_command
            if failure_threshold is not None:
                self._values["failure_threshold"] = failure_threshold
            if http_get_path is not None:
                self._values["http_get_path"] = http_get_path
            if http_get_port is not None:
                self._values["http_get_port"] = http_get_port
            if http_get_scheme is not None:
                self._values["http_get_scheme"] = http_get_scheme
            if initial_delay_seconds is not None:
                self._values["initial_delay_seconds"] = initial_delay_seconds
            if period_seconds is not None:
                self._values["period_seconds"] = period_seconds
            if success_threshold is not None:
                self._values["success_threshold"] = success_threshold
            if tcp_socket_port is not None:
                self._values["tcp_socket_port"] = tcp_socket_port
            if timeout_seconds is not None:
                self._values["timeout_seconds"] = timeout_seconds

        @builtins.property
        def exec_command(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: execCommand: The commands for running the readiness probe.
            '''
            result = self._values.get("exec_command")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def failure_threshold(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: failureThreshold: The minimum consecutive failures for the probe to be considered to have failed after having succeeded. Default value: 3.
            '''
            result = self._values.get("failure_threshold")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def http_get_path(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: httpGetPath: The path to which the system sends an HTTP GET request to perform the check.
            '''
            result = self._values.get("http_get_path")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def http_get_port(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: httpGetPort: The port to which the system sends an HTTP GET request to perform the check.
            '''
            result = self._values.get("http_get_port")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def http_get_scheme(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: httpGetScheme: The protocol that is used to connect the host. Valid values: HTTP and HTTPS.
            '''
            result = self._values.get("http_get_scheme")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def initial_delay_seconds(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: initialDelaySeconds: The number of seconds after the container has started before probes are initiated.
            '''
            result = self._values.get("initial_delay_seconds")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def period_seconds(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: periodSeconds: Specifies the period at which the probe is performed. Unit: seconds. Default value: 10. Minimum value: 1.
            '''
            result = self._values.get("period_seconds")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def success_threshold(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: successThreshold: The minimum consecutive successes for the probe to be considered successful after having failed. Default value: 1.
            '''
            result = self._values.get("success_threshold")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def tcp_socket_port(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: tcpSocketPort: The port to which the system sends a TCP SOCKET request to perform the check.
            '''
            result = self._values.get("tcp_socket_port")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def timeout_seconds(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: timeoutSeconds: The number of seconds after which the probe times out. Default value: 1. Minimum value: 1.
            '''
            result = self._values.get("timeout_seconds")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ReadinessProbeProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eci.RosContainerGroup.SecurityContextProperty",
        jsii_struct_bases=[],
        name_mapping={
            "capability_add": "capabilityAdd",
            "read_only_root_filesystem": "readOnlyRootFilesystem",
            "run_as_user": "runAsUser",
        },
    )
    class SecurityContextProperty:
        def __init__(
            self,
            *,
            capability_add: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            read_only_root_filesystem: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            run_as_user: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param capability_add: 
            :param read_only_root_filesystem: 
            :param run_as_user: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__e03da7b3fde4a43601b1b3dc4a0376092fb3d9da0098a4332a947ed12f589866)
                check_type(argname="argument capability_add", value=capability_add, expected_type=type_hints["capability_add"])
                check_type(argname="argument read_only_root_filesystem", value=read_only_root_filesystem, expected_type=type_hints["read_only_root_filesystem"])
                check_type(argname="argument run_as_user", value=run_as_user, expected_type=type_hints["run_as_user"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if capability_add is not None:
                self._values["capability_add"] = capability_add
            if read_only_root_filesystem is not None:
                self._values["read_only_root_filesystem"] = read_only_root_filesystem
            if run_as_user is not None:
                self._values["run_as_user"] = run_as_user

        @builtins.property
        def capability_add(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: capabilityAdd: undefined
            '''
            result = self._values.get("capability_add")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def read_only_root_filesystem(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: readOnlyRootFilesystem: Valid value: True.
            '''
            result = self._values.get("read_only_root_filesystem")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def run_as_user(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: runAsUser: User ID.
            '''
            result = self._values.get("run_as_user")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SecurityContextProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eci.RosContainerGroup.SecurityContextSysctlProperty",
        jsii_struct_bases=[],
        name_mapping={"name": "name", "value": "value"},
    )
    class SecurityContextSysctlProperty:
        def __init__(
            self,
            *,
            name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param name: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__c990c6f448466d9ecb2cc531e265c52f95b7d2257729603bbc47db7ee7aedb46)
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if name is not None:
                self._values["name"] = name
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: name: undefined
            '''
            result = self._values.get("name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
            return "SecurityContextSysctlProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eci.RosContainerGroup.TagProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class TagProperty:
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
                type_hints = typing.get_type_hints(_typecheckingstub__a3199f1236c2b37f0e784900bc2aa24cbdf683966772828ba4e74fc2464bea74)
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
            :Property: key: The keyword of the tag.
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: The value of the tag.
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TagProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eci.RosContainerGroup.VolumeMountProperty",
        jsii_struct_bases=[],
        name_mapping={
            "mount_path": "mountPath",
            "name": "name",
            "read_only": "readOnly",
        },
    )
    class VolumeMountProperty:
        def __init__(
            self,
            *,
            mount_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            read_only: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param mount_path: 
            :param name: 
            :param read_only: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__059962d1896b74b6a7ccad505eaf2965e5215638d1a77ae75adb17a90abb5b9c)
                check_type(argname="argument mount_path", value=mount_path, expected_type=type_hints["mount_path"])
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument read_only", value=read_only, expected_type=type_hints["read_only"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if mount_path is not None:
                self._values["mount_path"] = mount_path
            if name is not None:
                self._values["name"] = name
            if read_only is not None:
                self._values["read_only"] = read_only

        @builtins.property
        def mount_path(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: mountPath: A mount path. The data in the target directory is overwritten by the data in the mounted volume. Therefore, use caution when you mount a volume to a directory.
            '''
            result = self._values.get("mount_path")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: name: The name of the volume. The name is the same as that specified for the Name parameter in the Volume section.
            '''
            result = self._values.get("name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def read_only(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: readOnly: Default value: False.
            '''
            result = self._values.get("read_only")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "VolumeMountProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eci.RosContainerGroup.VolumeProperty",
        jsii_struct_bases=[],
        name_mapping={
            "name": "name",
            "type": "type",
            "config_file_volume_config_file_to_path": "configFileVolumeConfigFileToPath",
            "empty_dir_volume_medium": "emptyDirVolumeMedium",
            "nfs_volume_path": "nfsVolumePath",
            "nfs_volume_read_only": "nfsVolumeReadOnly",
            "nfs_volume_server": "nfsVolumeServer",
        },
    )
    class VolumeProperty:
        def __init__(
            self,
            *,
            name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            config_file_volume_config_file_to_path: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosContainerGroup.ConfigFileVolumeConfigFileToPathProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            empty_dir_volume_medium: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            nfs_volume_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            nfs_volume_read_only: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            nfs_volume_server: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param name: 
            :param type: 
            :param config_file_volume_config_file_to_path: 
            :param empty_dir_volume_medium: 
            :param nfs_volume_path: 
            :param nfs_volume_read_only: 
            :param nfs_volume_server: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__3109c7e10c1d38828d6499c8cd1967e935016fc9762e2263cd8bb8d2d41b6512)
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
                check_type(argname="argument config_file_volume_config_file_to_path", value=config_file_volume_config_file_to_path, expected_type=type_hints["config_file_volume_config_file_to_path"])
                check_type(argname="argument empty_dir_volume_medium", value=empty_dir_volume_medium, expected_type=type_hints["empty_dir_volume_medium"])
                check_type(argname="argument nfs_volume_path", value=nfs_volume_path, expected_type=type_hints["nfs_volume_path"])
                check_type(argname="argument nfs_volume_read_only", value=nfs_volume_read_only, expected_type=type_hints["nfs_volume_read_only"])
                check_type(argname="argument nfs_volume_server", value=nfs_volume_server, expected_type=type_hints["nfs_volume_server"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "name": name,
                "type": type,
            }
            if config_file_volume_config_file_to_path is not None:
                self._values["config_file_volume_config_file_to_path"] = config_file_volume_config_file_to_path
            if empty_dir_volume_medium is not None:
                self._values["empty_dir_volume_medium"] = empty_dir_volume_medium
            if nfs_volume_path is not None:
                self._values["nfs_volume_path"] = nfs_volume_path
            if nfs_volume_read_only is not None:
                self._values["nfs_volume_read_only"] = nfs_volume_read_only
            if nfs_volume_server is not None:
                self._values["nfs_volume_server"] = nfs_volume_server

        @builtins.property
        def name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: name: The name of the volume.
            '''
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: type: The type of volume. Valid values: EmptyDirVolume, NFSVolume, and ConfigFileVolume.
            '''
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def config_file_volume_config_file_to_path(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.ConfigFileVolumeConfigFileToPathProperty"]]]]:
            '''
            :Property: configFileVolumeConfigFileToPath: The path to the configuration file.
            '''
            result = self._values.get("config_file_volume_config_file_to_path")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosContainerGroup.ConfigFileVolumeConfigFileToPathProperty"]]]], result)

        @builtins.property
        def empty_dir_volume_medium(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: emptyDirVolumeMedium: The storage medium for EmptyDirVolume. By default, the file system on the node is used. Default value: not specified. Valid value: Memory. If this parameter is set to Memory, the EmptyDirVolume volume is stored in memory.
            '''
            result = self._values.get("empty_dir_volume_medium")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def nfs_volume_path(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: nfsVolumePath: The path to the NFS volume.
            '''
            result = self._values.get("nfs_volume_path")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def nfs_volume_read_only(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: nfsVolumeReadOnly: Default value: False.
            '''
            result = self._values.get("nfs_volume_read_only")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def nfs_volume_server(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: nfsVolumeServer: The IP address of the NFS server.
            '''
            result = self._values.get("nfs_volume_server")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "VolumeProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-eci.RosContainerGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "container": "container",
        "container_group_name": "containerGroupName",
        "security_group_id": "securityGroupId",
        "v_switch_id": "vSwitchId",
        "acr_registry_info": "acrRegistryInfo",
        "active_deadline_seconds": "activeDeadlineSeconds",
        "auto_match_image_cache": "autoMatchImageCache",
        "cpu": "cpu",
        "dns_config": "dnsConfig",
        "eip_instance_id": "eipInstanceId",
        "host_aliase": "hostAliase",
        "image_registry_credential": "imageRegistryCredential",
        "image_snapshot_id": "imageSnapshotId",
        "init_container": "initContainer",
        "instance_type": "instanceType",
        "ipv6_address_count": "ipv6AddressCount",
        "memory": "memory",
        "ram_role_name": "ramRoleName",
        "resource_group_id": "resourceGroupId",
        "restart_policy": "restartPolicy",
        "security_context_sysctl": "securityContextSysctl",
        "sls_enable": "slsEnable",
        "spot_price_limit": "spotPriceLimit",
        "spot_strategy": "spotStrategy",
        "tag": "tag",
        "termination_grace_period_seconds": "terminationGracePeriodSeconds",
        "volume": "volume",
        "zone_id": "zoneId",
    },
)
class RosContainerGroupProps:
    def __init__(
        self,
        *,
        container: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[typing.Union[RosContainerGroup.ContainerProperty, typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable]]],
        container_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        security_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        acr_registry_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosContainerGroup.AcrRegistryInfoProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        active_deadline_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_match_image_cache: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cpu: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dns_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosContainerGroup.DnsConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        eip_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        host_aliase: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosContainerGroup.HostAliaseProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        image_registry_credential: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosContainerGroup.ImageRegistryCredentialProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        image_snapshot_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        init_container: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosContainerGroup.InitContainerProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ipv6_address_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        memory: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ram_role_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        restart_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_context_sysctl: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosContainerGroup.SecurityContextSysctlProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        sls_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        spot_price_limit: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        spot_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tag: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[_ros_cdk_core_7adfd82f.RosTag, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        termination_grace_period_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        volume: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosContainerGroup.VolumeProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ECI::ContainerGroup``.

        :param container: 
        :param container_group_name: 
        :param security_group_id: 
        :param v_switch_id: 
        :param acr_registry_info: 
        :param active_deadline_seconds: 
        :param auto_match_image_cache: 
        :param cpu: 
        :param dns_config: 
        :param eip_instance_id: 
        :param host_aliase: 
        :param image_registry_credential: 
        :param image_snapshot_id: 
        :param init_container: 
        :param instance_type: 
        :param ipv6_address_count: 
        :param memory: 
        :param ram_role_name: 
        :param resource_group_id: 
        :param restart_policy: 
        :param security_context_sysctl: 
        :param sls_enable: 
        :param spot_price_limit: 
        :param spot_strategy: 
        :param tag: 
        :param termination_grace_period_seconds: 
        :param volume: 
        :param zone_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__925ff59b250c97faa983d2bd5eff20e4db10feda5c9a634a25d762fbe6337d53)
            check_type(argname="argument container", value=container, expected_type=type_hints["container"])
            check_type(argname="argument container_group_name", value=container_group_name, expected_type=type_hints["container_group_name"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument acr_registry_info", value=acr_registry_info, expected_type=type_hints["acr_registry_info"])
            check_type(argname="argument active_deadline_seconds", value=active_deadline_seconds, expected_type=type_hints["active_deadline_seconds"])
            check_type(argname="argument auto_match_image_cache", value=auto_match_image_cache, expected_type=type_hints["auto_match_image_cache"])
            check_type(argname="argument cpu", value=cpu, expected_type=type_hints["cpu"])
            check_type(argname="argument dns_config", value=dns_config, expected_type=type_hints["dns_config"])
            check_type(argname="argument eip_instance_id", value=eip_instance_id, expected_type=type_hints["eip_instance_id"])
            check_type(argname="argument host_aliase", value=host_aliase, expected_type=type_hints["host_aliase"])
            check_type(argname="argument image_registry_credential", value=image_registry_credential, expected_type=type_hints["image_registry_credential"])
            check_type(argname="argument image_snapshot_id", value=image_snapshot_id, expected_type=type_hints["image_snapshot_id"])
            check_type(argname="argument init_container", value=init_container, expected_type=type_hints["init_container"])
            check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
            check_type(argname="argument ipv6_address_count", value=ipv6_address_count, expected_type=type_hints["ipv6_address_count"])
            check_type(argname="argument memory", value=memory, expected_type=type_hints["memory"])
            check_type(argname="argument ram_role_name", value=ram_role_name, expected_type=type_hints["ram_role_name"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument restart_policy", value=restart_policy, expected_type=type_hints["restart_policy"])
            check_type(argname="argument security_context_sysctl", value=security_context_sysctl, expected_type=type_hints["security_context_sysctl"])
            check_type(argname="argument sls_enable", value=sls_enable, expected_type=type_hints["sls_enable"])
            check_type(argname="argument spot_price_limit", value=spot_price_limit, expected_type=type_hints["spot_price_limit"])
            check_type(argname="argument spot_strategy", value=spot_strategy, expected_type=type_hints["spot_strategy"])
            check_type(argname="argument tag", value=tag, expected_type=type_hints["tag"])
            check_type(argname="argument termination_grace_period_seconds", value=termination_grace_period_seconds, expected_type=type_hints["termination_grace_period_seconds"])
            check_type(argname="argument volume", value=volume, expected_type=type_hints["volume"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "container": container,
            "container_group_name": container_group_name,
            "security_group_id": security_group_id,
            "v_switch_id": v_switch_id,
        }
        if acr_registry_info is not None:
            self._values["acr_registry_info"] = acr_registry_info
        if active_deadline_seconds is not None:
            self._values["active_deadline_seconds"] = active_deadline_seconds
        if auto_match_image_cache is not None:
            self._values["auto_match_image_cache"] = auto_match_image_cache
        if cpu is not None:
            self._values["cpu"] = cpu
        if dns_config is not None:
            self._values["dns_config"] = dns_config
        if eip_instance_id is not None:
            self._values["eip_instance_id"] = eip_instance_id
        if host_aliase is not None:
            self._values["host_aliase"] = host_aliase
        if image_registry_credential is not None:
            self._values["image_registry_credential"] = image_registry_credential
        if image_snapshot_id is not None:
            self._values["image_snapshot_id"] = image_snapshot_id
        if init_container is not None:
            self._values["init_container"] = init_container
        if instance_type is not None:
            self._values["instance_type"] = instance_type
        if ipv6_address_count is not None:
            self._values["ipv6_address_count"] = ipv6_address_count
        if memory is not None:
            self._values["memory"] = memory
        if ram_role_name is not None:
            self._values["ram_role_name"] = ram_role_name
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if restart_policy is not None:
            self._values["restart_policy"] = restart_policy
        if security_context_sysctl is not None:
            self._values["security_context_sysctl"] = security_context_sysctl
        if sls_enable is not None:
            self._values["sls_enable"] = sls_enable
        if spot_price_limit is not None:
            self._values["spot_price_limit"] = spot_price_limit
        if spot_strategy is not None:
            self._values["spot_strategy"] = spot_strategy
        if tag is not None:
            self._values["tag"] = tag
        if termination_grace_period_seconds is not None:
            self._values["termination_grace_period_seconds"] = termination_grace_period_seconds
        if volume is not None:
            self._values["volume"] = volume
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def container(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[RosContainerGroup.ContainerProperty, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: container: The containers that constitute the container group.
        '''
        result = self._values.get("container")
        assert result is not None, "Required property 'container' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[RosContainerGroup.ContainerProperty, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def container_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        containerGroupName: The name of the container group.
        The length is [2,128] English lowercase letters, numbers or hyphens (-), cannot begin or end with a hyphens.
        '''
        result = self._values.get("container_group_name")
        assert result is not None, "Required property 'container_group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: securityGroupId: The ID of the security group to which the instance belongs. Instances in the same security group can access one another.
        '''
        result = self._values.get("security_group_id")
        assert result is not None, "Required property 'security_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vSwitchId: The ID of the specified VSwitch. Currently, ECI instances can only be deployed in VPCs.
        '''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def acr_registry_info(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosContainerGroup.AcrRegistryInfoProperty]]]]:
        '''
        :Property: acrRegistryInfo: Enterprise Edition access credential configuration information.
        '''
        result = self._values.get("acr_registry_info")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosContainerGroup.AcrRegistryInfoProperty]]]], result)

    @builtins.property
    def active_deadline_seconds(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: activeDeadlineSeconds: The validity period in seconds.
        '''
        result = self._values.get("active_deadline_seconds")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_match_image_cache(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoMatchImageCache: Specifies whether to automatically match the image cache.
        '''
        result = self._values.get("auto_match_image_cache")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cpu(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: cpu: CPU size
        '''
        result = self._values.get("cpu")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dns_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosContainerGroup.DnsConfigProperty]]:
        '''
        :Property: dnsConfig: The information about DNS configurations.
        '''
        result = self._values.get("dns_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosContainerGroup.DnsConfigProperty]], result)

    @builtins.property
    def eip_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: eipInstanceId: Elastic IP ID
        '''
        result = self._values.get("eip_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def host_aliase(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosContainerGroup.HostAliaseProperty]]]]:
        '''
        :Property: hostAliase: Customize the hostname mapping of a container inside the pod
        '''
        result = self._values.get("host_aliase")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosContainerGroup.HostAliaseProperty]]]], result)

    @builtins.property
    def image_registry_credential(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosContainerGroup.ImageRegistryCredentialProperty]]]]:
        '''
        :Property: imageRegistryCredential: The information that you need to log on to the container image repository, including the server address, username, and password.
        '''
        result = self._values.get("image_registry_credential")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosContainerGroup.ImageRegistryCredentialProperty]]]], result)

    @builtins.property
    def image_snapshot_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: imageSnapshotId: Image cache ID or snapshot ID.
        '''
        result = self._values.get("image_snapshot_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def init_container(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosContainerGroup.InitContainerProperty]]]]:
        '''
        :Property: initContainer: The containers that constitute the container group for initializing.
        '''
        result = self._values.get("init_container")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosContainerGroup.InitContainerProperty]]]], result)

    @builtins.property
    def instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceType: The type of the ECS instance.
        '''
        result = self._values.get("instance_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ipv6_address_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ipv6AddressCount: The number of IPv6 addresses.
        '''
        result = self._values.get("ipv6_address_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def memory(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: memory: memory size
        '''
        result = self._values.get("memory")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ram_role_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ramRoleName: The RAM role that the container group assumes. ECI and ECS share the same RAM role.
        '''
        result = self._values.get("ram_role_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def restart_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: restartPolicy: The policy for restarting the instance. Default value: Always.
        '''
        result = self._values.get("restart_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_context_sysctl(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosContainerGroup.SecurityContextSysctlProperty]]]]:
        '''
        :Property:

        securityContextSysctl: ECI Sysctl is valid for every container in ECI.
        Currently only two Sysctl keyNames are supported:
        Kernel.shm_rmid_forced
        Kernel.msgmax
        '''
        result = self._values.get("security_context_sysctl")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosContainerGroup.SecurityContextSysctlProperty]]]], result)

    @builtins.property
    def sls_enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: slsEnable: Enable user log collection. The default is False.
        '''
        result = self._values.get("sls_enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def spot_price_limit(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: spotPriceLimit: Set the hourly maximum price of the instance. It supports a maximum of 3 decimal places. It takes effect when the value of the parameter SpotStrategy is SpotWithPriceLimit.
        '''
        result = self._values.get("spot_price_limit")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def spot_strategy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        spotStrategy: Instance preemption strategy.
        Ranges:
        NoSpot (default): normal pay-as-you-go instances.
        SpotWithPriceLimit: Preemptive instance that sets a cap price.
        SpotAsPriceGo: The system automatically bids, following the current market actual price.
        '''
        result = self._values.get("spot_strategy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tag(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, _ros_cdk_core_7adfd82f.RosTag]]]]:
        '''
        :Property: tag: The list of container group tags in the form of key/value pairs. You can define a maximum of 20 tags for each container group.
        '''
        result = self._values.get("tag")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, _ros_cdk_core_7adfd82f.RosTag]]]], result)

    @builtins.property
    def termination_grace_period_seconds(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: terminationGracePeriodSeconds: The buffer time for the program to handle operations before it is stopped.
        '''
        result = self._values.get("termination_grace_period_seconds")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def volume(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosContainerGroup.VolumeProperty]]]]:
        '''
        :Property: volume: The data volume. You can specify a maximum of 20 data volumes.
        '''
        result = self._values.get("volume")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosContainerGroup.VolumeProperty]]]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: The ID of the zone in which the instance resides. If you leave the parameter blank, the system assigns a zone for you. The default value is blank.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosContainerGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosImageCache(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-eci.RosImageCache",
):
    '''A ROS template type:  ``ALIYUN::ECI::ImageCache``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosImageCacheProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ECI::ImageCache``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c619f25cb883bbab83efa19a22832aa2f26cd93194362f7398aaa7756e702d93)
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
            type_hints = typing.get_type_hints(_typecheckingstub__ac81237a4cde10d0506b351bd756849f1c1d76f016d5d30f876c643227ea56c3)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrImageCacheId")
    def attr_image_cache_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ImageCacheId: The ID of the image cache.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImageCacheId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__454a3facdbcce2118e6fb0d1cbe6504a67cba196f0e59df981eb903374ce4319)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="image")
    def image(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: image: The image list to be cached.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], jsii.get(self, "image"))

    @image.setter
    def image(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5ce87d0b6ae873766e96a64ab694693ae5d75be7c056ac0a47ce472dc1bb9673)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "image", value)

    @builtins.property
    @jsii.member(jsii_name="imageCacheName")
    def image_cache_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: imageCacheName: Image cache name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "imageCacheName"))

    @image_cache_name.setter
    def image_cache_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__64b7fdbc676210e5ee54fbe9aa8e168f0906014333bc309a74da5489d2246093)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "imageCacheName", value)

    @builtins.property
    @jsii.member(jsii_name="securityGroupId")
    def security_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: securityGroupId: Security group ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "securityGroupId"))

    @security_group_id.setter
    def security_group_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__365e7400ecc4ae3c8b57ab881f787e09c63a8984f40b0eb71264944c84e4193f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vSwitchId: VSwitch ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__86d7452ebd2113e3cf00cbacd05b4ab3a74dcc330561a16803512b69298d458c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="eipInstanceId")
    def eip_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: eipInstanceId: If you want to pull the public network image, you need to configure the public network ip or configure the switch NAT gateway.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "eipInstanceId"))

    @eip_instance_id.setter
    def eip_instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__76da0f876604b6767867d679c71931e4426ab62273a77e7253e746c90133bb95)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "eipInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="imageRegistryCredential")
    def image_registry_credential(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: imageRegistryCredential: Private image password. Alibaba Cloud ACR image can be left blank.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "imageRegistryCredential"))

    @image_registry_credential.setter
    def image_registry_credential(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f89503d51e53974cf6cc47926b62f9cd43c6e6d911a712cf54ee361b9bbf3a87)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "imageRegistryCredential", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e228cbe0bc771bbe9a5451896a2fd8ec694183cc63e1cdebdff8ff25121bb3aa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-eci.RosImageCacheProps",
    jsii_struct_bases=[],
    name_mapping={
        "image": "image",
        "image_cache_name": "imageCacheName",
        "security_group_id": "securityGroupId",
        "v_switch_id": "vSwitchId",
        "eip_instance_id": "eipInstanceId",
        "image_registry_credential": "imageRegistryCredential",
        "resource_group_id": "resourceGroupId",
    },
)
class RosImageCacheProps:
    def __init__(
        self,
        *,
        image: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        image_cache_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        security_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        eip_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_registry_credential: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ECI::ImageCache``.

        :param image: 
        :param image_cache_name: 
        :param security_group_id: 
        :param v_switch_id: 
        :param eip_instance_id: 
        :param image_registry_credential: 
        :param resource_group_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__95575ac9f6334aec0ca8df4bffc9c6696e7fac5338778a33322e09731eb1f532)
            check_type(argname="argument image", value=image, expected_type=type_hints["image"])
            check_type(argname="argument image_cache_name", value=image_cache_name, expected_type=type_hints["image_cache_name"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument eip_instance_id", value=eip_instance_id, expected_type=type_hints["eip_instance_id"])
            check_type(argname="argument image_registry_credential", value=image_registry_credential, expected_type=type_hints["image_registry_credential"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "image": image,
            "image_cache_name": image_cache_name,
            "security_group_id": security_group_id,
            "v_switch_id": v_switch_id,
        }
        if eip_instance_id is not None:
            self._values["eip_instance_id"] = eip_instance_id
        if image_registry_credential is not None:
            self._values["image_registry_credential"] = image_registry_credential
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def image(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: image: The image list to be cached.
        '''
        result = self._values.get("image")
        assert result is not None, "Required property 'image' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def image_cache_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: imageCacheName: Image cache name.
        '''
        result = self._values.get("image_cache_name")
        assert result is not None, "Required property 'image_cache_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: securityGroupId: Security group ID.
        '''
        result = self._values.get("security_group_id")
        assert result is not None, "Required property 'security_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vSwitchId: VSwitch ID.
        '''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def eip_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: eipInstanceId: If you want to pull the public network image, you need to configure the public network ip or configure the switch NAT gateway.
        '''
        result = self._values.get("eip_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_registry_credential(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: imageRegistryCredential: Private image password. Alibaba Cloud ACR image can be left blank.
        '''
        result = self._values.get("image_registry_credential")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosImageCacheProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "ContainerGroup",
    "ContainerGroupProps",
    "ImageCache",
    "ImageCacheProps",
    "RosContainerGroup",
    "RosContainerGroupProps",
    "RosImageCache",
    "RosImageCacheProps",
]

publication.publish()

def _typecheckingstub__2ac05a477646da5c139ccff518b62ee1ef4b604e91e48879336105cdf5de1e52(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ContainerGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b85b6ba2bc63b3953071ca63a46e86716a5f4cef3a8e68eb49cf476188032c91(
    *,
    container: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[typing.Union[RosContainerGroup.ContainerProperty, typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable]]],
    container_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    security_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    acr_registry_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosContainerGroup.AcrRegistryInfoProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    active_deadline_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_match_image_cache: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cpu: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dns_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosContainerGroup.DnsConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    eip_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    host_aliase: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosContainerGroup.HostAliaseProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    image_registry_credential: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosContainerGroup.ImageRegistryCredentialProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    image_snapshot_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    init_container: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosContainerGroup.InitContainerProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ipv6_address_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    memory: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ram_role_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    restart_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_context_sysctl: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosContainerGroup.SecurityContextSysctlProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    sls_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    spot_price_limit: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    spot_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tag: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[_ros_cdk_core_7adfd82f.RosTag, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    termination_grace_period_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    volume: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosContainerGroup.VolumeProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cb827cde588517a23306d4a0806d1df9e4eb4e8d564b3688f057234d0b502f3c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ImageCacheProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a8f1fe70ea22126821702ecdc2689c2f9bad90d66841e57b735b5bd0fe8d1708(
    *,
    image: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    image_cache_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    security_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    eip_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_registry_credential: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__362275f85f1f199a8528613e2e6f0fb53a77a0d451febd2082d4e4df00479bbd(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosContainerGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__82a9fa932ce5b34b7d0406c6621e7a14f8d3779d316a396deb1046eaf6c3be7d(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__49b4980db693fbe3f110accf74305856a31269b12a6ceb72143ebcfc38240477(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[RosContainerGroup.ContainerProperty, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__27e80663e31cfa677319c20b323eae7991013c8afd39bdf4fd891b239fb59c3f(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1923edeaf7c7a988b53f8394cbbb5bacf543354e267f0974c4dec9c3bb713223(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9e0d4f77396dd05c3f5c8ba4a939fca32992c028390dba684dbcf58d47f4eec8(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__938eb530e6c81470aaedf715d87f313aab9a98f624496131977a820a64c5ba4d(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4d31f76e85012b02e64bc73b86779c5c447eff711d15050322389507f239ad83(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosContainerGroup.AcrRegistryInfoProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fc65e43b988a5484a8d1cebfcb4dbb8b393247518fd2d72ca02ccadf5cd39368(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7ff417c184618b225b2596f53fcaf8bb88e92658fd8255e920aca97d494c754e(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__89718a8a1e6cc75c5e863daee03ce752fadeb5dd6060ec37fa5b5beaaa669c17(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__48480b592013c3df2af026a2009563d4674a171e4e3248a084545ae8f9a86f34(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosContainerGroup.DnsConfigProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__437912cf54e8826592d76c2c4629bfff81523b3d9bedaa76b75d519f4a6ee1c3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5c142d461f802620bba87db56d1ec7ea4da6f89b57e445a11c5a01a18e237a48(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosContainerGroup.HostAliaseProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2cdf56931e53760a3c17652c9fcee6950809ba3dfb40909317d715103f3933a2(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosContainerGroup.ImageRegistryCredentialProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5984befdb67979c051caff1d1440317bb7f95522c348baed6b6ac54fe06c1734(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5ec424a04280b9f105ca4782722947e5893082f96810a1805c4b03c41a00c3d3(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosContainerGroup.InitContainerProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5135b62bc50155378a13fbc2f391640077275559e4b16b743bec9078f12603b9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b6a0a18ffb066c59edfaa3e1a3cf9c8b6a3e9de11c3b4638307b2a11d63cc630(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__790056c1216ab695993156ff12ca384f40fd8a948ca14fae6a5cc4b7152c7d31(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b3e6ffeccfe08167eeb7bd6bf2e1d86bd18a2db812b472765a89798cc617aa38(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6940c82ed2e2a248397a5dd0850c4280741519844be34983371da5539fc9bc79(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0d682fdb194b6dbdd13d459cc073e971c00b25521fc7efb132523c68d3b3fa9c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a274734d054d118092866b8c10ce3a5cd7fbf0c416425f3ddf5cee3ef05e4e93(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosContainerGroup.SecurityContextSysctlProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ce6259f0f39e0dcbd24816a8217b80f68ec08413cd4b64ac08ef3601477fb2d7(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6513127c7060ab6958ce8fd4a5234ed0aa44189da0258f2d1b3af50e5a77666b(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0e6d231c1bda43c2451e04028f6c8ea0bc70f6bb3e1d0caa284887f128a62b7f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__47902e0e8931ab4b4bd0a12da47952eb5ee371a5f777bd32b19ee980f961cf84(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, _ros_cdk_core_7adfd82f.RosTag]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0b1bb9feeea77dabaa83767c556a05de229c1ef2d4d211cccf0800989be66c4e(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__edbfe46c7de6a2c68b23b8013e6d29e680bdb24b9e5a931d21553b3f670ef69c(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosContainerGroup.VolumeProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__50b1525372332e3443aeb30adb02875cad1bcb213453fe3600a487cdb481a049(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e1ed85e49d2e42055bbcee48fedc04811d557fc29c4c1068a58b4576be8a1e11(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    domain: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__31719b61953301b9c096b8b77d55a665ef074bdd52b7547db908df22bf937b16(
    *,
    path: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    content: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ca473c4751c1103799a01ce099656b3321d578cb098e8e51cc193c8d6aff38e0(
    *,
    image: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    arg: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    command: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    cpu: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    environment_var: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosContainerGroup.EnvironmentVarProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    image_pull_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    liveness_probe: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosContainerGroup.LivenessProbeProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    memory: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    port: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosContainerGroup.PortProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    readiness_probe: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosContainerGroup.ReadinessProbeProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    security_context: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosContainerGroup.SecurityContextProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    stdin: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    stdin_once: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tty: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    volume_mount: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosContainerGroup.VolumeMountProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    working_dir: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7390e3fe4280c6eb1783c1be0e762b5ac6c888511feeeca373fa6cf1cabfae25(
    *,
    name_server: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    option: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosContainerGroup.OptionProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    search: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__02c38ac90d568138f436ae1115c80edcc43817f32df778a5b8a72e7142fbb447(
    *,
    field_ref_field_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__74f9900d7f127d988ec6522adbec43ab05d263e4fd96943ad0f12a5940caa463(
    *,
    hostname: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__817ccf032f66b0b6d797be72096deaf7fab8100e789f07ee8340f5bf8251a079(
    *,
    password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    server: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    user_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cf651166d250edca071af337091410e9cec62263978163a88f86bb17c486f766(
    *,
    field_ref_field_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__be1c7eaf13af04111f27e3949f40e1c9928c210ed790f3482f8bd4b359856001(
    *,
    port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f26c0eeb4771c15cf1a1fe8ad37bf7d5872f93c80d441589091d8c19f42ac158(
    *,
    arg: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    command: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    cpu: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    environment_var: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosContainerGroup.InitContainerEnvironmentVarProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    image: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_pull_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    memory: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    port: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosContainerGroup.InitContainerPortProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    security_context: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosContainerGroup.InitContainerSecurityContextProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    volume_mount: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosContainerGroup.InitContainerVolumeMountProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    working_dir: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b3aed5c5e929bdbef83253ce9118e2f22ace33a282fc88473852efafe46e2be0(
    *,
    capability_add: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    read_only_root_filesystem: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    run_as_user: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2bb3a0060e1fb50f4d6203f7785362dd1cd8c36d5559daa2c51b3641def4c623(
    *,
    mount_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    read_only: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__64ee897829a8a8c19c1f0e265a3c0633ac1dae0e24b22e3fe8927b26d91ead08(
    *,
    exec_command: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    failure_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    http_get_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    http_get_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    http_get_scheme: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    initial_delay_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    success_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tcp_socket_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    timeout_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cc9ab174bddfb72d632aa7ae41003cc1390f75a2b39a4ec59eb85d06cba0b69d(
    *,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a1d71f1b640e6e898f95a6c19486a794446324e1d235827b87eabda5cebe0e66(
    *,
    port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3082e82ea97e0d1e91b0c7e0408c84944dfe1b1a5880ae9b5df9a5a234a0831d(
    *,
    exec_command: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    failure_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    http_get_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    http_get_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    http_get_scheme: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    initial_delay_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    success_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tcp_socket_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    timeout_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e03da7b3fde4a43601b1b3dc4a0376092fb3d9da0098a4332a947ed12f589866(
    *,
    capability_add: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    read_only_root_filesystem: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    run_as_user: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c990c6f448466d9ecb2cc531e265c52f95b7d2257729603bbc47db7ee7aedb46(
    *,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a3199f1236c2b37f0e784900bc2aa24cbdf683966772828ba4e74fc2464bea74(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__059962d1896b74b6a7ccad505eaf2965e5215638d1a77ae75adb17a90abb5b9c(
    *,
    mount_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    read_only: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3109c7e10c1d38828d6499c8cd1967e935016fc9762e2263cd8bb8d2d41b6512(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    config_file_volume_config_file_to_path: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosContainerGroup.ConfigFileVolumeConfigFileToPathProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    empty_dir_volume_medium: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    nfs_volume_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    nfs_volume_read_only: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    nfs_volume_server: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__925ff59b250c97faa983d2bd5eff20e4db10feda5c9a634a25d762fbe6337d53(
    *,
    container: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[typing.Union[RosContainerGroup.ContainerProperty, typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable]]],
    container_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    security_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    acr_registry_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosContainerGroup.AcrRegistryInfoProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    active_deadline_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_match_image_cache: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cpu: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dns_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosContainerGroup.DnsConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    eip_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    host_aliase: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosContainerGroup.HostAliaseProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    image_registry_credential: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosContainerGroup.ImageRegistryCredentialProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    image_snapshot_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    init_container: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosContainerGroup.InitContainerProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ipv6_address_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    memory: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ram_role_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    restart_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_context_sysctl: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosContainerGroup.SecurityContextSysctlProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    sls_enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    spot_price_limit: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    spot_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tag: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[_ros_cdk_core_7adfd82f.RosTag, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    termination_grace_period_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    volume: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosContainerGroup.VolumeProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c619f25cb883bbab83efa19a22832aa2f26cd93194362f7398aaa7756e702d93(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosImageCacheProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ac81237a4cde10d0506b351bd756849f1c1d76f016d5d30f876c643227ea56c3(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__454a3facdbcce2118e6fb0d1cbe6504a67cba196f0e59df981eb903374ce4319(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5ce87d0b6ae873766e96a64ab694693ae5d75be7c056ac0a47ce472dc1bb9673(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__64b7fdbc676210e5ee54fbe9aa8e168f0906014333bc309a74da5489d2246093(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__365e7400ecc4ae3c8b57ab881f787e09c63a8984f40b0eb71264944c84e4193f(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__86d7452ebd2113e3cf00cbacd05b4ab3a74dcc330561a16803512b69298d458c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__76da0f876604b6767867d679c71931e4426ab62273a77e7253e746c90133bb95(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f89503d51e53974cf6cc47926b62f9cd43c6e6d911a712cf54ee361b9bbf3a87(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e228cbe0bc771bbe9a5451896a2fd8ec694183cc63e1cdebdff8ff25121bb3aa(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__95575ac9f6334aec0ca8df4bffc9c6696e7fac5338778a33322e09731eb1f532(
    *,
    image: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    image_cache_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    security_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    eip_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_registry_credential: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
