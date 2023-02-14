'''
## Aliyun ROS MSE Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as MSE from '@alicloud/ros-cdk-mse';
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


class Cluster(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mse.Cluster",
):
    '''A ROS resource type:  ``ALIYUN::MSE::Cluster``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ClusterProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::MSE::Cluster``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8920f7274ca60d5c8c0eb0dbe17b34b420959f182f7eda8c4835591a1dc0db13)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAclEntryList")
    def attr_acl_entry_list(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AclEntryList: The public network whitelist list is used only when the public network is enabled.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAclEntryList"))

    @builtins.property
    @jsii.member(jsii_name="attrAclId")
    def attr_acl_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AclId: acl id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAclId"))

    @builtins.property
    @jsii.member(jsii_name="attrAppVersion")
    def attr_app_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AppVersion: app version.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAppVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterAliasName")
    def attr_cluster_alias_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ClusterAliasName: cluster alias name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterAliasName"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ClusterId: cluster id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterName")
    def attr_cluster_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ClusterName: cluster name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterName"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterSpecification")
    def attr_cluster_specification(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ClusterSpecification: Cluster specifications.

        Note the msversion requirements of the version parameter,
        Optional parameters:
        "MSE_ SC *1_2_60_c",
        "MSE* SC *2_4_60_c",
        "MSE* SC *4_8_60_c",
        "MSE* SC *8_16_60_c",
        "MSE* SC _16_32_60_c"
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterSpecification"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterType")
    def attr_cluster_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ClusterType: cluster type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterType"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterVersion")
    def attr_cluster_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ClusterVersion: Cluster version, such as ZooKeeper_3_8_0,NACOS_2_0_0.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrConfigAuthEnabled")
    def attr_config_auth_enabled(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ConfigAuthEnabled: Whether the configuration supports it.

        Valid values: true: false: not supported
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConfigAuthEnabled"))

    @builtins.property
    @jsii.member(jsii_name="attrConfigSecretEnabled")
    def attr_config_secret_enabled(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ConfigSecretEnabled: Whether the configuration password takes effect.

        The value is as follows: true: valid false: not valid
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConfigSecretEnabled"))

    @builtins.property
    @jsii.member(jsii_name="attrConnectionType")
    def attr_connection_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ConnectionType: network connect type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConnectionType"))

    @builtins.property
    @jsii.member(jsii_name="attrCpu")
    def attr_cpu(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Cpu: cpu core size.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCpu"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskCapacity")
    def attr_disk_capacity(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DiskCapacity: disk capacity, unit: G.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDiskCapacity"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskType")
    def attr_disk_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DiskType: disk type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDiskType"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthStatus")
    def attr_health_status(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute HealthStatus: health status.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHealthStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceCount")
    def attr_instance_count(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceCount: instance count.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceCount"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceId: instance id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetAddress")
    def attr_internet_address(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InternetAddress: internet address.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInternetAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetDomain")
    def attr_internet_domain(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InternetDomain: internet domain.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInternetDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetPort")
    def attr_internet_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InternetPort: internet port.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInternetPort"))

    @builtins.property
    @jsii.member(jsii_name="attrIntranetAddress")
    def attr_intranet_address(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute IntranetAddress: intranet address.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIntranetAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrIntranetDomain")
    def attr_intranet_domain(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute IntranetDomain: intranet domain.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIntranetDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrIntranetPort")
    def attr_intranet_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute IntranetPort: intranet port.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIntranetPort"))

    @builtins.property
    @jsii.member(jsii_name="attrMcpEnabled")
    def attr_mcp_enabled(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute MCPEnabled: Whether MCP takes effect, the value is as follows: true: valid false: not valid.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMcpEnabled"))

    @builtins.property
    @jsii.member(jsii_name="attrMemoryCapacity")
    def attr_memory_capacity(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute MemoryCapacity: memory capacity.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMemoryCapacity"))

    @builtins.property
    @jsii.member(jsii_name="attrMseVersion")
    def attr_mse_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute MseVersion: Required, the value is as follows:.

        -'mse_dev': indicates the development version.
        -'Mse_pro': means professional version. When this version is selected, the specification is 2c4g or above, and the specification is 3 nodes or above.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMseVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrNetType")
    def attr_net_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute NetType: Network type (whether private network is enabled or not).

        privatenet indicates that private network is enabled.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNetType"))

    @builtins.property
    @jsii.member(jsii_name="attrPayInfo")
    def attr_pay_info(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PayInfo: pay info.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPayInfo"))

    @builtins.property
    @jsii.member(jsii_name="attrPubNetworkFlow")
    def attr_pub_network_flow(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PubNetworkFlow: Public network bandwidth.

        If the bandwidth is greater than 0, the public network is enabled.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPubNetworkFlow"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VpcId: vpc id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VSwitchId: switcher Id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVSwitchId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mse.ClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_specification": "clusterSpecification",
        "cluster_type": "clusterType",
        "cluster_version": "clusterVersion",
        "instance_count": "instanceCount",
        "net_type": "netType",
        "accept_language": "acceptLanguage",
        "acl_entry_list": "aclEntryList",
        "cluster_alias_name": "clusterAliasName",
        "connection_type": "connectionType",
        "disk_type": "diskType",
        "mse_version": "mseVersion",
        "private_slb_specification": "privateSlbSpecification",
        "pub_network_flow": "pubNetworkFlow",
        "pub_slb_specification": "pubSlbSpecification",
        "request_pars": "requestPars",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
    },
)
class ClusterProps:
    def __init__(
        self,
        *,
        cluster_specification: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cluster_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cluster_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        net_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        accept_language: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        acl_entry_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        cluster_alias_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        connection_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        disk_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        mse_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        private_slb_specification: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pub_network_flow: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pub_slb_specification: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        request_pars: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::MSE::Cluster``.

        :param cluster_specification: Property clusterSpecification: Cluster specifications. Note the msversion requirements of the version parameter, Optional parameters: "MSE_ SC *1_2_60_c", "MSE* SC *2_4_60_c", "MSE* SC *4_8_60_c", "MSE* SC *8_16_60_c", "MSE* SC _16_32_60_c"
        :param cluster_type: Property clusterType: cluster type.
        :param cluster_version: Property clusterVersion: Cluster version, such as ZooKeeper_3_8_0,NACOS_2_0_0.
        :param instance_count: Property instanceCount: instance count.
        :param net_type: Property netType: Network type (whether private network is enabled or not). privatenet indicates that private network is enabled.
        :param accept_language: Property acceptLanguage:.
        :param acl_entry_list: Property aclEntryList: The public network whitelist list is used only when the public network is enabled.
        :param cluster_alias_name: Property clusterAliasName: cluster alias name.
        :param connection_type: Property connectionType: network connect type.
        :param disk_type: Property diskType: disk type.
        :param mse_version: Property mseVersion: Required, the value is as follows:. -'mse_dev': indicates the development version. -'Mse_pro': means professional version. When this version is selected, the specification is 2c4g or above, and the specification is 3 nodes or above.
        :param private_slb_specification: Property privateSlbSpecification:.
        :param pub_network_flow: Property pubNetworkFlow: Public network bandwidth. If the bandwidth is greater than 0, the public network is enabled.
        :param pub_slb_specification: Property pubSlbSpecification:.
        :param request_pars: Property requestPars:.
        :param vpc_id: Property vpcId: vpc id.
        :param v_switch_id: Property vSwitchId: switcher Id.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c3f61b7de5b8d98fccf402f2e7791aec91d15600817d870623464c556207ae26)
            check_type(argname="argument cluster_specification", value=cluster_specification, expected_type=type_hints["cluster_specification"])
            check_type(argname="argument cluster_type", value=cluster_type, expected_type=type_hints["cluster_type"])
            check_type(argname="argument cluster_version", value=cluster_version, expected_type=type_hints["cluster_version"])
            check_type(argname="argument instance_count", value=instance_count, expected_type=type_hints["instance_count"])
            check_type(argname="argument net_type", value=net_type, expected_type=type_hints["net_type"])
            check_type(argname="argument accept_language", value=accept_language, expected_type=type_hints["accept_language"])
            check_type(argname="argument acl_entry_list", value=acl_entry_list, expected_type=type_hints["acl_entry_list"])
            check_type(argname="argument cluster_alias_name", value=cluster_alias_name, expected_type=type_hints["cluster_alias_name"])
            check_type(argname="argument connection_type", value=connection_type, expected_type=type_hints["connection_type"])
            check_type(argname="argument disk_type", value=disk_type, expected_type=type_hints["disk_type"])
            check_type(argname="argument mse_version", value=mse_version, expected_type=type_hints["mse_version"])
            check_type(argname="argument private_slb_specification", value=private_slb_specification, expected_type=type_hints["private_slb_specification"])
            check_type(argname="argument pub_network_flow", value=pub_network_flow, expected_type=type_hints["pub_network_flow"])
            check_type(argname="argument pub_slb_specification", value=pub_slb_specification, expected_type=type_hints["pub_slb_specification"])
            check_type(argname="argument request_pars", value=request_pars, expected_type=type_hints["request_pars"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cluster_specification": cluster_specification,
            "cluster_type": cluster_type,
            "cluster_version": cluster_version,
            "instance_count": instance_count,
            "net_type": net_type,
        }
        if accept_language is not None:
            self._values["accept_language"] = accept_language
        if acl_entry_list is not None:
            self._values["acl_entry_list"] = acl_entry_list
        if cluster_alias_name is not None:
            self._values["cluster_alias_name"] = cluster_alias_name
        if connection_type is not None:
            self._values["connection_type"] = connection_type
        if disk_type is not None:
            self._values["disk_type"] = disk_type
        if mse_version is not None:
            self._values["mse_version"] = mse_version
        if private_slb_specification is not None:
            self._values["private_slb_specification"] = private_slb_specification
        if pub_network_flow is not None:
            self._values["pub_network_flow"] = pub_network_flow
        if pub_slb_specification is not None:
            self._values["pub_slb_specification"] = pub_slb_specification
        if request_pars is not None:
            self._values["request_pars"] = request_pars
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id

    @builtins.property
    def cluster_specification(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property clusterSpecification: Cluster specifications.

        Note the msversion requirements of the version parameter,
        Optional parameters:
        "MSE_ SC *1_2_60_c",
        "MSE* SC *2_4_60_c",
        "MSE* SC *4_8_60_c",
        "MSE* SC *8_16_60_c",
        "MSE* SC _16_32_60_c"
        '''
        result = self._values.get("cluster_specification")
        assert result is not None, "Required property 'cluster_specification' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cluster_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property clusterType: cluster type.'''
        result = self._values.get("cluster_type")
        assert result is not None, "Required property 'cluster_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cluster_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property clusterVersion: Cluster version, such as ZooKeeper_3_8_0,NACOS_2_0_0.'''
        result = self._values.get("cluster_version")
        assert result is not None, "Required property 'cluster_version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceCount: instance count.'''
        result = self._values.get("instance_count")
        assert result is not None, "Required property 'instance_count' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def net_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property netType: Network type (whether private network is enabled or not).

        privatenet indicates that private network is enabled.
        '''
        result = self._values.get("net_type")
        assert result is not None, "Required property 'net_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def accept_language(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property acceptLanguage:.'''
        result = self._values.get("accept_language")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def acl_entry_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property aclEntryList: The public network whitelist list is used only when the public network is enabled.'''
        result = self._values.get("acl_entry_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def cluster_alias_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property clusterAliasName: cluster alias name.'''
        result = self._values.get("cluster_alias_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def connection_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property connectionType: network connect type.'''
        result = self._values.get("connection_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def disk_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property diskType: disk type.'''
        result = self._values.get("disk_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def mse_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property mseVersion: Required, the value is as follows:.

        -'mse_dev': indicates the development version.
        -'Mse_pro': means professional version. When this version is selected, the specification is 2c4g or above, and the specification is 3 nodes or above.
        '''
        result = self._values.get("mse_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def private_slb_specification(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property privateSlbSpecification:.'''
        result = self._values.get("private_slb_specification")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pub_network_flow(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property pubNetworkFlow: Public network bandwidth.

        If the bandwidth is greater than 0, the public network is enabled.
        '''
        result = self._values.get("pub_network_flow")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pub_slb_specification(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property pubSlbSpecification:.'''
        result = self._values.get("pub_slb_specification")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def request_pars(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property requestPars:.'''
        result = self._values.get("request_pars")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcId: vpc id.'''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vSwitchId: switcher Id.'''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Gateway(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mse.Gateway",
):
    '''A ROS resource type:  ``ALIYUN::MSE::Gateway``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["GatewayProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::MSE::Gateway``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8aa2892719448a9d6927894e5847e221c315743387dd9e601543909c6bdaddd4)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrBackupVSwitchId")
    def attr_backup_v_switch_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute BackupVSwitchId: VSwitchId For Backup.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBackupVSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="attrGatewayUniqueId")
    def attr_gateway_unique_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute GatewayUniqueId: Gateway unique identification.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGatewayUniqueId"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PaymentType: The payment type of the resource.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrReplica")
    def attr_replica(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Replica: Gateway Node Number.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReplica"))

    @builtins.property
    @jsii.member(jsii_name="attrSpec")
    def attr_spec(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Spec: Gateway Node Specifications.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSpec"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VpcId: VpcId.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VSwitchId: VSwitchId.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVSwitchId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mse.GatewayProps",
    jsii_struct_bases=[],
    name_mapping={
        "replica": "replica",
        "spec": "spec",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "backup_v_switch_id": "backupVSwitchId",
        "enterprise_security_group": "enterpriseSecurityGroup",
        "internet_slb_spec": "internetSlbSpec",
        "name": "name",
        "slb_spec": "slbSpec",
    },
)
class GatewayProps:
    def __init__(
        self,
        *,
        replica: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        spec: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        backup_v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enterprise_security_group: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        internet_slb_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        slb_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::MSE::Gateway``.

        :param replica: Property replica: Gateway Node Number.
        :param spec: Property spec: Gateway Node Specifications.
        :param vpc_id: Property vpcId: VpcId.
        :param v_switch_id: Property vSwitchId: VSwitchId.
        :param backup_v_switch_id: Property backupVSwitchId: VSwitchId For Backup.
        :param enterprise_security_group: Property enterpriseSecurityGroup:.
        :param internet_slb_spec: Property internetSlbSpec:.
        :param name: Property name:.
        :param slb_spec: Property slbSpec:.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__37db6aaa4955203fa0af078b3a47704ee39b27e0d514a8cc3c4d06919af55e40)
            check_type(argname="argument replica", value=replica, expected_type=type_hints["replica"])
            check_type(argname="argument spec", value=spec, expected_type=type_hints["spec"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument backup_v_switch_id", value=backup_v_switch_id, expected_type=type_hints["backup_v_switch_id"])
            check_type(argname="argument enterprise_security_group", value=enterprise_security_group, expected_type=type_hints["enterprise_security_group"])
            check_type(argname="argument internet_slb_spec", value=internet_slb_spec, expected_type=type_hints["internet_slb_spec"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument slb_spec", value=slb_spec, expected_type=type_hints["slb_spec"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "replica": replica,
            "spec": spec,
            "vpc_id": vpc_id,
            "v_switch_id": v_switch_id,
        }
        if backup_v_switch_id is not None:
            self._values["backup_v_switch_id"] = backup_v_switch_id
        if enterprise_security_group is not None:
            self._values["enterprise_security_group"] = enterprise_security_group
        if internet_slb_spec is not None:
            self._values["internet_slb_spec"] = internet_slb_spec
        if name is not None:
            self._values["name"] = name
        if slb_spec is not None:
            self._values["slb_spec"] = slb_spec

    @builtins.property
    def replica(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property replica: Gateway Node Number.'''
        result = self._values.get("replica")
        assert result is not None, "Required property 'replica' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def spec(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property spec: Gateway Node Specifications.'''
        result = self._values.get("spec")
        assert result is not None, "Required property 'spec' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vpcId: VpcId.'''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vSwitchId: VSwitchId.'''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def backup_v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property backupVSwitchId: VSwitchId For Backup.'''
        result = self._values.get("backup_v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enterprise_security_group(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enterpriseSecurityGroup:.'''
        result = self._values.get("enterprise_security_group")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def internet_slb_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property internetSlbSpec:.'''
        result = self._values.get("internet_slb_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property name:.'''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def slb_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property slbSpec:.'''
        result = self._values.get("slb_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "GatewayProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class NacosConfig(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mse.NacosConfig",
):
    '''A ROS resource type:  ``ALIYUN::MSE::NacosConfig``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["NacosConfigProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::MSE::NacosConfig``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9339bf1f553d59326b03d52f19564e960f2055ea424e59e4176b5c05cc619c0b)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mse.NacosConfigProps",
    jsii_struct_bases=[],
    name_mapping={
        "data_id": "dataId",
        "group": "group",
        "instance_id": "instanceId",
        "app_name": "appName",
        "beta_ips": "betaIps",
        "content": "content",
        "desc": "desc",
        "namespace_id": "namespaceId",
        "tags": "tags",
        "type": "type",
    },
)
class NacosConfigProps:
    def __init__(
        self,
        *,
        data_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        group: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        app_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        beta_ips: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        content: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        namespace_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[builtins.str] = None,
        type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::MSE::NacosConfig``.

        :param data_id: Property dataId: The data ID.
        :param group: Property group: The ID of the group.
        :param instance_id: Property instanceId: The ID of the instance.
        :param app_name: Property appName: The name of the application.
        :param beta_ips: Property betaIps: The list of IP addresses where the beta release of the configuration is performed.
        :param content: Property content: The content of the configuration.
        :param desc: Property desc: The description of the configuration.
        :param namespace_id: Property namespaceId: The ID of the namespace.
        :param tags: Property tags: The tag of the configuration.
        :param type: Property type: The format of the configuration. Supported formats include TEXT, JSON, and XML.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d6f1a88fa6b9468c572e617732a30921880d8ee7cb200d6f6348ecf5c936222c)
            check_type(argname="argument data_id", value=data_id, expected_type=type_hints["data_id"])
            check_type(argname="argument group", value=group, expected_type=type_hints["group"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument app_name", value=app_name, expected_type=type_hints["app_name"])
            check_type(argname="argument beta_ips", value=beta_ips, expected_type=type_hints["beta_ips"])
            check_type(argname="argument content", value=content, expected_type=type_hints["content"])
            check_type(argname="argument desc", value=desc, expected_type=type_hints["desc"])
            check_type(argname="argument namespace_id", value=namespace_id, expected_type=type_hints["namespace_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "data_id": data_id,
            "group": group,
            "instance_id": instance_id,
        }
        if app_name is not None:
            self._values["app_name"] = app_name
        if beta_ips is not None:
            self._values["beta_ips"] = beta_ips
        if content is not None:
            self._values["content"] = content
        if desc is not None:
            self._values["desc"] = desc
        if namespace_id is not None:
            self._values["namespace_id"] = namespace_id
        if tags is not None:
            self._values["tags"] = tags
        if type is not None:
            self._values["type"] = type

    @builtins.property
    def data_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dataId: The data ID.'''
        result = self._values.get("data_id")
        assert result is not None, "Required property 'data_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def group(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property group: The ID of the group.'''
        result = self._values.get("group")
        assert result is not None, "Required property 'group' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: The ID of the instance.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def app_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property appName: The name of the application.'''
        result = self._values.get("app_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def beta_ips(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property betaIps: The list of IP addresses where the beta release of the configuration is performed.'''
        result = self._values.get("beta_ips")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def content(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property content: The content of the configuration.'''
        result = self._values.get("content")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property desc: The description of the configuration.'''
        result = self._values.get("desc")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def namespace_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property namespaceId: The ID of the namespace.'''
        result = self._values.get("namespace_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[builtins.str]:
        '''Property tags: The tag of the configuration.'''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property type: The format of the configuration.

        Supported formats include TEXT, JSON, and XML.
        '''
        result = self._values.get("type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "NacosConfigProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class NacosService(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mse.NacosService",
):
    '''A ROS resource type:  ``ALIYUN::MSE::NacosService``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["NacosServiceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::MSE::NacosService``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__36b2b87603d3ad3595a58388cfa610160c409ac52c54bec26ebf4fa46331cac6)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mse.NacosServiceProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "service_name": "serviceName",
        "ephemeral": "ephemeral",
        "group_name": "groupName",
        "namespace_id": "namespaceId",
        "protect_threshold": "protectThreshold",
    },
)
class NacosServiceProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        service_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ephemeral: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        namespace_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        protect_threshold: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::MSE::NacosService``.

        :param instance_id: Property instanceId: The ID of the instance.
        :param service_name: Property serviceName: The name of the service.
        :param ephemeral: Property ephemeral: Specifies whether the instance is a temporary node. Valid values: true: yes false: no
        :param group_name: Property groupName: The name of the group.
        :param namespace_id: Property namespaceId: The ID of the namespace.
        :param protect_threshold: Property protectThreshold: The protection threshold.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4494a41cf823074a78553313765d704b6f72246fc2e6f7c8c2d2a4687720cafb)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument service_name", value=service_name, expected_type=type_hints["service_name"])
            check_type(argname="argument ephemeral", value=ephemeral, expected_type=type_hints["ephemeral"])
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument namespace_id", value=namespace_id, expected_type=type_hints["namespace_id"])
            check_type(argname="argument protect_threshold", value=protect_threshold, expected_type=type_hints["protect_threshold"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
            "service_name": service_name,
        }
        if ephemeral is not None:
            self._values["ephemeral"] = ephemeral
        if group_name is not None:
            self._values["group_name"] = group_name
        if namespace_id is not None:
            self._values["namespace_id"] = namespace_id
        if protect_threshold is not None:
            self._values["protect_threshold"] = protect_threshold

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: The ID of the instance.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def service_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property serviceName: The name of the service.'''
        result = self._values.get("service_name")
        assert result is not None, "Required property 'service_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ephemeral(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ephemeral: Specifies whether the instance is a temporary node.

        Valid values:
        true: yes
        false: no
        '''
        result = self._values.get("ephemeral")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property groupName: The name of the group.'''
        result = self._values.get("group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def namespace_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property namespaceId: The ID of the namespace.'''
        result = self._values.get("namespace_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def protect_threshold(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property protectThreshold: The protection threshold.'''
        result = self._values.get("protect_threshold")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "NacosServiceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCluster(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mse.RosCluster",
):
    '''A ROS template type:  ``ALIYUN::MSE::Cluster``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosClusterProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::MSE::Cluster``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__97bcfecd9811cd6acbf8cfb34ab31f665317563267ad6a0f6e8994df69810483)
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
            type_hints = typing.get_type_hints(_typecheckingstub__ab774d5814f467d7a0f2da236c8bff72a97586f1f48bf8cc164053d353fe3954)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAclEntryList")
    def attr_acl_entry_list(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AclEntryList: The public network whitelist list is used only when the public network is enabled.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAclEntryList"))

    @builtins.property
    @jsii.member(jsii_name="attrAclId")
    def attr_acl_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AclId: acl id
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAclId"))

    @builtins.property
    @jsii.member(jsii_name="attrAppVersion")
    def attr_app_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AppVersion: app version
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAppVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterAliasName")
    def attr_cluster_alias_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ClusterAliasName: cluster alias name
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterAliasName"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ClusterId: cluster id
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterName")
    def attr_cluster_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ClusterName: cluster name
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterName"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterSpecification")
    def attr_cluster_specification(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        ClusterSpecification: Cluster specifications. Note the msversion requirements of the version parameter,
        Optional parameters:
        "MSE_ SC *1_2_60_c",
        "MSE* SC *2_4_60_c",
        "MSE* SC *4_8_60_c",
        "MSE* SC *8_16_60_c",
        "MSE* SC _16_32_60_c"
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterSpecification"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterType")
    def attr_cluster_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ClusterType: cluster type
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterType"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterVersion")
    def attr_cluster_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ClusterVersion: Cluster version, such as ZooKeeper_3_8_0,NACOS_2_0_0
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrConfigAuthEnabled")
    def attr_config_auth_enabled(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ConfigAuthEnabled: Whether the configuration supports it. Valid values: true: false: not supported
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConfigAuthEnabled"))

    @builtins.property
    @jsii.member(jsii_name="attrConfigSecretEnabled")
    def attr_config_secret_enabled(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ConfigSecretEnabled: Whether the configuration password takes effect. The value is as follows: true: valid false: not valid
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConfigSecretEnabled"))

    @builtins.property
    @jsii.member(jsii_name="attrConnectionType")
    def attr_connection_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ConnectionType: network connect type
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConnectionType"))

    @builtins.property
    @jsii.member(jsii_name="attrCpu")
    def attr_cpu(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Cpu: cpu core size
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCpu"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskCapacity")
    def attr_disk_capacity(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DiskCapacity: disk capacity, unit: G
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDiskCapacity"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskType")
    def attr_disk_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DiskType: disk type
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDiskType"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthStatus")
    def attr_health_status(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HealthStatus: health status
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHealthStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceCount")
    def attr_instance_count(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceCount: instance count
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceCount"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceId: instance id
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetAddress")
    def attr_internet_address(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InternetAddress: internet address
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInternetAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetDomain")
    def attr_internet_domain(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InternetDomain: internet domain
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInternetDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetPort")
    def attr_internet_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InternetPort: internet port
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInternetPort"))

    @builtins.property
    @jsii.member(jsii_name="attrIntranetAddress")
    def attr_intranet_address(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IntranetAddress: intranet address
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIntranetAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrIntranetDomain")
    def attr_intranet_domain(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IntranetDomain: intranet domain
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIntranetDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrIntranetPort")
    def attr_intranet_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IntranetPort: intranet port
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIntranetPort"))

    @builtins.property
    @jsii.member(jsii_name="attrMcpEnabled")
    def attr_mcp_enabled(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MCPEnabled: Whether MCP takes effect, the value is as follows: true: valid false: not valid
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMcpEnabled"))

    @builtins.property
    @jsii.member(jsii_name="attrMemoryCapacity")
    def attr_memory_capacity(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MemoryCapacity: memory capacity
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMemoryCapacity"))

    @builtins.property
    @jsii.member(jsii_name="attrMseVersion")
    def attr_mse_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        MseVersion: Required, the value is as follows:
        -'mse_dev': indicates the development version.
        -'Mse_pro': means professional version. When this version is selected, the specification is 2c4g or above, and the specification is 3 nodes or above.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMseVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrNetType")
    def attr_net_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: NetType: Network type (whether private network is enabled or not). privatenet indicates that private network is enabled.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNetType"))

    @builtins.property
    @jsii.member(jsii_name="attrPayInfo")
    def attr_pay_info(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PayInfo: pay info
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPayInfo"))

    @builtins.property
    @jsii.member(jsii_name="attrPubNetworkFlow")
    def attr_pub_network_flow(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PubNetworkFlow: Public network bandwidth. If the bandwidth is greater than 0, the public network is enabled.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPubNetworkFlow"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcId: vpc id
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VSwitchId: switcher Id
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="clusterSpecification")
    def cluster_specification(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        clusterSpecification: Cluster specifications. Note the msversion requirements of the version parameter,
        Optional parameters:
        "MSE_ SC *1_2_60_c",
        "MSE* SC *2_4_60_c",
        "MSE* SC *4_8_60_c",
        "MSE* SC *8_16_60_c",
        "MSE* SC _16_32_60_c"
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "clusterSpecification"))

    @cluster_specification.setter
    def cluster_specification(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1331c0e118e6a7fe89b3c6eb3a141df739b919937ada8e2e27470eb8e925e4d7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterSpecification", value)

    @builtins.property
    @jsii.member(jsii_name="clusterType")
    def cluster_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: clusterType: cluster type
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "clusterType"))

    @cluster_type.setter
    def cluster_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__929fda1489d6f0fe51c23d3f7dd4b5898a4c5b79d8f8045fcea8d535fd8c5366)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterType", value)

    @builtins.property
    @jsii.member(jsii_name="clusterVersion")
    def cluster_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: clusterVersion: Cluster version, such as ZooKeeper_3_8_0,NACOS_2_0_0
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "clusterVersion"))

    @cluster_version.setter
    def cluster_version(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f2dce1f23cadd85e56c4cba3f740bbfab69c3a7f3b8d72cb6f2cf878ace48c6e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterVersion", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__84b153768b862208d826d17645a9eb26818f4e749bbef96b47ba6e83f8120063)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceCount")
    def instance_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceCount: instance count
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceCount"))

    @instance_count.setter
    def instance_count(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__92e5b27d20cc4de249a50b462ba8625bb01cef9a75390830f7012a7d880b3be3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceCount", value)

    @builtins.property
    @jsii.member(jsii_name="netType")
    def net_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: netType: Network type (whether private network is enabled or not). privatenet indicates that private network is enabled.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "netType"))

    @net_type.setter
    def net_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__166bce99a3b915459b4f4373fd869c4d7d8a24b3682c85c47e91444b76a937eb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "netType", value)

    @builtins.property
    @jsii.member(jsii_name="acceptLanguage")
    def accept_language(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: acceptLanguage:
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "acceptLanguage"))

    @accept_language.setter
    def accept_language(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7c9c8484c5bc8f64a16a8ab16bcfdf5ff8bc75e176da741c8a313e137dfcc3e9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "acceptLanguage", value)

    @builtins.property
    @jsii.member(jsii_name="aclEntryList")
    def acl_entry_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: aclEntryList: The public network whitelist list is used only when the public network is enabled.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "aclEntryList"))

    @acl_entry_list.setter
    def acl_entry_list(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a119002eff8e34757e1e81015e34135a393110c8d782da1caee5ae592e879fd8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "aclEntryList", value)

    @builtins.property
    @jsii.member(jsii_name="clusterAliasName")
    def cluster_alias_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: clusterAliasName: cluster alias name
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "clusterAliasName"))

    @cluster_alias_name.setter
    def cluster_alias_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0bd43cd08ed40252942ce07d876b034563912f404f196797d037a39db290308e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterAliasName", value)

    @builtins.property
    @jsii.member(jsii_name="connectionType")
    def connection_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: connectionType: network connect type
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "connectionType"))

    @connection_type.setter
    def connection_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e18c7767cb9ad55d13670a44766d5558f6e38b463418a0cc24aea3cbf06a9b33)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "connectionType", value)

    @builtins.property
    @jsii.member(jsii_name="diskType")
    def disk_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: diskType: disk type
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "diskType"))

    @disk_type.setter
    def disk_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__78c0928d56d7d2e80087bcf6bc4f36235493d8db20d774f6b917d2a7f2bfd35c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "diskType", value)

    @builtins.property
    @jsii.member(jsii_name="mseVersion")
    def mse_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        mseVersion: Required, the value is as follows:

        -'mse_dev': indicates the development version.
        -'Mse_pro': means professional version. When this version is selected, the specification is 2c4g or above, and the specification is 3 nodes or above.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "mseVersion"))

    @mse_version.setter
    def mse_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__401deaea625555fc3d8cf1390547e2451f6820f415a72b61627913f42483a301)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "mseVersion", value)

    @builtins.property
    @jsii.member(jsii_name="privateSlbSpecification")
    def private_slb_specification(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: privateSlbSpecification:
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "privateSlbSpecification"))

    @private_slb_specification.setter
    def private_slb_specification(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b15f7cce20e8b1599d1a925cee316a092deb35a98e73e4d91a15eee918722eb9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "privateSlbSpecification", value)

    @builtins.property
    @jsii.member(jsii_name="pubNetworkFlow")
    def pub_network_flow(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: pubNetworkFlow: Public network bandwidth. If the bandwidth is greater than 0, the public network is enabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "pubNetworkFlow"))

    @pub_network_flow.setter
    def pub_network_flow(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__919de38d1d220e3dbf96feede4f2da5f2266a99cfb3415615bbae2ce346d65a2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "pubNetworkFlow", value)

    @builtins.property
    @jsii.member(jsii_name="pubSlbSpecification")
    def pub_slb_specification(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: pubSlbSpecification:
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "pubSlbSpecification"))

    @pub_slb_specification.setter
    def pub_slb_specification(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b429903ce7df30ca8a993d831863a2bf5f12eb64b35866a8a3ed72efa6423afa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "pubSlbSpecification", value)

    @builtins.property
    @jsii.member(jsii_name="requestPars")
    def request_pars(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: requestPars:
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "requestPars"))

    @request_pars.setter
    def request_pars(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c49d929d644ff8a11e93344d4489a213bd7c09990363aaa8f09356955fa010b3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "requestPars", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: vpc id
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fb9aef688f147f2f1866a5589c5a386ef619c1ede627eb3bc19dacb3f47f517c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: switcher Id
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__15bf01166d25bc19bc027f3e35516e29a4e0946a9f84a51d8f6f8375bdf42a09)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mse.RosClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_specification": "clusterSpecification",
        "cluster_type": "clusterType",
        "cluster_version": "clusterVersion",
        "instance_count": "instanceCount",
        "net_type": "netType",
        "accept_language": "acceptLanguage",
        "acl_entry_list": "aclEntryList",
        "cluster_alias_name": "clusterAliasName",
        "connection_type": "connectionType",
        "disk_type": "diskType",
        "mse_version": "mseVersion",
        "private_slb_specification": "privateSlbSpecification",
        "pub_network_flow": "pubNetworkFlow",
        "pub_slb_specification": "pubSlbSpecification",
        "request_pars": "requestPars",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
    },
)
class RosClusterProps:
    def __init__(
        self,
        *,
        cluster_specification: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cluster_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cluster_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        net_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        accept_language: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        acl_entry_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        cluster_alias_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        connection_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        disk_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        mse_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        private_slb_specification: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pub_network_flow: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pub_slb_specification: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        request_pars: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::MSE::Cluster``.

        :param cluster_specification: 
        :param cluster_type: 
        :param cluster_version: 
        :param instance_count: 
        :param net_type: 
        :param accept_language: 
        :param acl_entry_list: 
        :param cluster_alias_name: 
        :param connection_type: 
        :param disk_type: 
        :param mse_version: 
        :param private_slb_specification: 
        :param pub_network_flow: 
        :param pub_slb_specification: 
        :param request_pars: 
        :param vpc_id: 
        :param v_switch_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ea3094298a1692db46aec7c3683b0834575762465a6778c6f0f6d830e6383ccb)
            check_type(argname="argument cluster_specification", value=cluster_specification, expected_type=type_hints["cluster_specification"])
            check_type(argname="argument cluster_type", value=cluster_type, expected_type=type_hints["cluster_type"])
            check_type(argname="argument cluster_version", value=cluster_version, expected_type=type_hints["cluster_version"])
            check_type(argname="argument instance_count", value=instance_count, expected_type=type_hints["instance_count"])
            check_type(argname="argument net_type", value=net_type, expected_type=type_hints["net_type"])
            check_type(argname="argument accept_language", value=accept_language, expected_type=type_hints["accept_language"])
            check_type(argname="argument acl_entry_list", value=acl_entry_list, expected_type=type_hints["acl_entry_list"])
            check_type(argname="argument cluster_alias_name", value=cluster_alias_name, expected_type=type_hints["cluster_alias_name"])
            check_type(argname="argument connection_type", value=connection_type, expected_type=type_hints["connection_type"])
            check_type(argname="argument disk_type", value=disk_type, expected_type=type_hints["disk_type"])
            check_type(argname="argument mse_version", value=mse_version, expected_type=type_hints["mse_version"])
            check_type(argname="argument private_slb_specification", value=private_slb_specification, expected_type=type_hints["private_slb_specification"])
            check_type(argname="argument pub_network_flow", value=pub_network_flow, expected_type=type_hints["pub_network_flow"])
            check_type(argname="argument pub_slb_specification", value=pub_slb_specification, expected_type=type_hints["pub_slb_specification"])
            check_type(argname="argument request_pars", value=request_pars, expected_type=type_hints["request_pars"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cluster_specification": cluster_specification,
            "cluster_type": cluster_type,
            "cluster_version": cluster_version,
            "instance_count": instance_count,
            "net_type": net_type,
        }
        if accept_language is not None:
            self._values["accept_language"] = accept_language
        if acl_entry_list is not None:
            self._values["acl_entry_list"] = acl_entry_list
        if cluster_alias_name is not None:
            self._values["cluster_alias_name"] = cluster_alias_name
        if connection_type is not None:
            self._values["connection_type"] = connection_type
        if disk_type is not None:
            self._values["disk_type"] = disk_type
        if mse_version is not None:
            self._values["mse_version"] = mse_version
        if private_slb_specification is not None:
            self._values["private_slb_specification"] = private_slb_specification
        if pub_network_flow is not None:
            self._values["pub_network_flow"] = pub_network_flow
        if pub_slb_specification is not None:
            self._values["pub_slb_specification"] = pub_slb_specification
        if request_pars is not None:
            self._values["request_pars"] = request_pars
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id

    @builtins.property
    def cluster_specification(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        clusterSpecification: Cluster specifications. Note the msversion requirements of the version parameter,
        Optional parameters:
        "MSE_ SC *1_2_60_c",
        "MSE* SC *2_4_60_c",
        "MSE* SC *4_8_60_c",
        "MSE* SC *8_16_60_c",
        "MSE* SC _16_32_60_c"
        '''
        result = self._values.get("cluster_specification")
        assert result is not None, "Required property 'cluster_specification' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cluster_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: clusterType: cluster type
        '''
        result = self._values.get("cluster_type")
        assert result is not None, "Required property 'cluster_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cluster_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: clusterVersion: Cluster version, such as ZooKeeper_3_8_0,NACOS_2_0_0
        '''
        result = self._values.get("cluster_version")
        assert result is not None, "Required property 'cluster_version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceCount: instance count
        '''
        result = self._values.get("instance_count")
        assert result is not None, "Required property 'instance_count' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def net_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: netType: Network type (whether private network is enabled or not). privatenet indicates that private network is enabled.
        '''
        result = self._values.get("net_type")
        assert result is not None, "Required property 'net_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def accept_language(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: acceptLanguage:
        '''
        result = self._values.get("accept_language")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def acl_entry_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: aclEntryList: The public network whitelist list is used only when the public network is enabled.
        '''
        result = self._values.get("acl_entry_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def cluster_alias_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: clusterAliasName: cluster alias name
        '''
        result = self._values.get("cluster_alias_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def connection_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: connectionType: network connect type
        '''
        result = self._values.get("connection_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def disk_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: diskType: disk type
        '''
        result = self._values.get("disk_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def mse_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        mseVersion: Required, the value is as follows:

        -'mse_dev': indicates the development version.
        -'Mse_pro': means professional version. When this version is selected, the specification is 2c4g or above, and the specification is 3 nodes or above.
        '''
        result = self._values.get("mse_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def private_slb_specification(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: privateSlbSpecification:
        '''
        result = self._values.get("private_slb_specification")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pub_network_flow(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: pubNetworkFlow: Public network bandwidth. If the bandwidth is greater than 0, the public network is enabled.
        '''
        result = self._values.get("pub_network_flow")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pub_slb_specification(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: pubSlbSpecification:
        '''
        result = self._values.get("pub_slb_specification")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def request_pars(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: requestPars:
        '''
        result = self._values.get("request_pars")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: vpc id
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: switcher Id
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosGateway(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mse.RosGateway",
):
    '''A ROS template type:  ``ALIYUN::MSE::Gateway``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosGatewayProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::MSE::Gateway``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1d95f79940e98cf8f52899ded1550e078d94286cdb62ba26ee2a657ea9022351)
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
            type_hints = typing.get_type_hints(_typecheckingstub__990581fd49a844c11a69af33b09f5fbbe414a3283e60557b8b4ae489f6460755)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrBackupVSwitchId")
    def attr_backup_v_switch_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BackupVSwitchId: VSwitchId For Backup
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBackupVSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="attrGatewayUniqueId")
    def attr_gateway_unique_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GatewayUniqueId: Gateway unique identification
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGatewayUniqueId"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PaymentType: The payment type of the resource
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrReplica")
    def attr_replica(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Replica: Gateway Node Number
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReplica"))

    @builtins.property
    @jsii.member(jsii_name="attrSpec")
    def attr_spec(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Spec: Gateway Node Specifications
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSpec"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcId: VpcId
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VSwitchId: VSwitchId
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
            type_hints = typing.get_type_hints(_typecheckingstub__62d2d9babba43960951fc9e62305f4cb134cba5347e068f6e6bd8ebc725462ab)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="replica")
    def replica(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: replica: Gateway Node Number
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "replica"))

    @replica.setter
    def replica(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f69fc944803608e60eb80d76fc8522f3bce825dd0d2c0ccfe3362590d237e174)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "replica", value)

    @builtins.property
    @jsii.member(jsii_name="spec")
    def spec(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: spec: Gateway Node Specifications
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "spec"))

    @spec.setter
    def spec(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c71541c79264c5ffb6227f695ece903607dd6892deea78917feb5f91283215d5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "spec", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: VpcId
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ea90c7a20ecea7a9b03bb88aced59014447387bc2f8d63c2db5237c2339cbbbe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vSwitchId: VSwitchId
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__243e6e3fa4e2efcb300712b38d574699cc95e095bc0d3cc8b0b5d8ef58c74b88)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="backupVSwitchId")
    def backup_v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: backupVSwitchId: VSwitchId For Backup
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "backupVSwitchId"))

    @backup_v_switch_id.setter
    def backup_v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1c4904a50e8f444d6bf2a179814ad8499f22780ebadf32822fefb5248454c725)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "backupVSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="enterpriseSecurityGroup")
    def enterprise_security_group(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enterpriseSecurityGroup:
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enterpriseSecurityGroup"))

    @enterprise_security_group.setter
    def enterprise_security_group(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__28878305f1aff9eeb42ab46a3560c1a7b79ffcc33e3b37669f0ae760b1fb6c7e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enterpriseSecurityGroup", value)

    @builtins.property
    @jsii.member(jsii_name="internetSlbSpec")
    def internet_slb_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: internetSlbSpec:
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "internetSlbSpec"))

    @internet_slb_spec.setter
    def internet_slb_spec(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6234747178aa7d852170c56c5f6f66722577c87254f0a19677cc15fa78b8891a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "internetSlbSpec", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: name:
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ee2c523734ca52563a586066b7316d9f39221e35690465b85b8914a8887b890e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="slbSpec")
    def slb_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: slbSpec:
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "slbSpec"))

    @slb_spec.setter
    def slb_spec(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c7038069dd02a22cca336d767b9ff469478c12412b0880fbbe1291bdb11cfe36)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "slbSpec", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mse.RosGatewayProps",
    jsii_struct_bases=[],
    name_mapping={
        "replica": "replica",
        "spec": "spec",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "backup_v_switch_id": "backupVSwitchId",
        "enterprise_security_group": "enterpriseSecurityGroup",
        "internet_slb_spec": "internetSlbSpec",
        "name": "name",
        "slb_spec": "slbSpec",
    },
)
class RosGatewayProps:
    def __init__(
        self,
        *,
        replica: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        spec: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        backup_v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enterprise_security_group: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        internet_slb_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        slb_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::MSE::Gateway``.

        :param replica: 
        :param spec: 
        :param vpc_id: 
        :param v_switch_id: 
        :param backup_v_switch_id: 
        :param enterprise_security_group: 
        :param internet_slb_spec: 
        :param name: 
        :param slb_spec: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__87f12ce01d08e3b0f63922babdfcbb7396d4e8ec029b481df69001ac81a40ecc)
            check_type(argname="argument replica", value=replica, expected_type=type_hints["replica"])
            check_type(argname="argument spec", value=spec, expected_type=type_hints["spec"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument backup_v_switch_id", value=backup_v_switch_id, expected_type=type_hints["backup_v_switch_id"])
            check_type(argname="argument enterprise_security_group", value=enterprise_security_group, expected_type=type_hints["enterprise_security_group"])
            check_type(argname="argument internet_slb_spec", value=internet_slb_spec, expected_type=type_hints["internet_slb_spec"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument slb_spec", value=slb_spec, expected_type=type_hints["slb_spec"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "replica": replica,
            "spec": spec,
            "vpc_id": vpc_id,
            "v_switch_id": v_switch_id,
        }
        if backup_v_switch_id is not None:
            self._values["backup_v_switch_id"] = backup_v_switch_id
        if enterprise_security_group is not None:
            self._values["enterprise_security_group"] = enterprise_security_group
        if internet_slb_spec is not None:
            self._values["internet_slb_spec"] = internet_slb_spec
        if name is not None:
            self._values["name"] = name
        if slb_spec is not None:
            self._values["slb_spec"] = slb_spec

    @builtins.property
    def replica(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: replica: Gateway Node Number
        '''
        result = self._values.get("replica")
        assert result is not None, "Required property 'replica' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def spec(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: spec: Gateway Node Specifications
        '''
        result = self._values.get("spec")
        assert result is not None, "Required property 'spec' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: VpcId
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vSwitchId: VSwitchId
        '''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def backup_v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: backupVSwitchId: VSwitchId For Backup
        '''
        result = self._values.get("backup_v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enterprise_security_group(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enterpriseSecurityGroup:
        '''
        result = self._values.get("enterprise_security_group")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def internet_slb_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: internetSlbSpec:
        '''
        result = self._values.get("internet_slb_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: name:
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def slb_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: slbSpec:
        '''
        result = self._values.get("slb_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosGatewayProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosNacosConfig(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mse.RosNacosConfig",
):
    '''A ROS template type:  ``ALIYUN::MSE::NacosConfig``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosNacosConfigProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::MSE::NacosConfig``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fbfc5fd7d562d826c6a8b2d7bcf079e437c34be52e275be11bd3c46138afb06f)
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
            type_hints = typing.get_type_hints(_typecheckingstub__0f15b023dcb7463402c880d6374a4d9d5f1f687f14640b0cebb4891f33c04b47)
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
    @jsii.member(jsii_name="dataId")
    def data_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dataId: The data ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dataId"))

    @data_id.setter
    def data_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__be7c91e8889fb75b3790ed2a61e53323f097553134bdc667a6f76b09c9f95518)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dataId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        '''A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.'''
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9a75e7e97b757af857b927c3b882ecd588fa7bf2f7801d3d74d913dce84bf948)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="group")
    def group(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: group: The ID of the group.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "group"))

    @group.setter
    def group(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c66e44c705f0102230a14be2a1d38fbc5b0bb21c34d8b7d4df992383a559b900)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "group", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4c5e0e7a9ac8815c118b3f0409f84d62827b553681627d6870a751c7761bc1dd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="appName")
    def app_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: appName: The name of the application.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "appName"))

    @app_name.setter
    def app_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bb257dbe54f12e83e0be1395dc0c9295b938f0253519819b55a944f9553dac17)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "appName", value)

    @builtins.property
    @jsii.member(jsii_name="betaIps")
    def beta_ips(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: betaIps: The list of IP addresses where the beta release of the configuration is performed.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "betaIps"))

    @beta_ips.setter
    def beta_ips(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__40c8eab9e36ffc040827a2f1cd6c728f60ff3d53805f706414bdbd525534189e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "betaIps", value)

    @builtins.property
    @jsii.member(jsii_name="content")
    def content(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: content: The content of the configuration.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "content"))

    @content.setter
    def content(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e2fc6030817a4e801dc6942aa265ce460243ee0a69b4be8136fb999964ace36c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "content", value)

    @builtins.property
    @jsii.member(jsii_name="desc")
    def desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: desc: The description of the configuration.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "desc"))

    @desc.setter
    def desc(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6631c270c47c23b9d85ddebe93e87fbd2f37d7c32add41f768cb99fd3b7d3168)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "desc", value)

    @builtins.property
    @jsii.member(jsii_name="namespaceId")
    def namespace_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: namespaceId: The ID of the namespace.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "namespaceId"))

    @namespace_id.setter
    def namespace_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__28aebe97c54f1608ff7b4fe88cb161069d5b1d14b2abd9e9d441804a6bc68225)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "namespaceId", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[builtins.str]:
        '''
        :Property: tags: The tag of the configuration.
        '''
        return typing.cast(typing.Optional[builtins.str], jsii.get(self, "tags"))

    @tags.setter
    def tags(self, value: typing.Optional[builtins.str]) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__107a12dabe2ae3eb0ba2bf5c5f171e737aef544c4e3e31959860d38958f78a90)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="type")
    def type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: type: The format of the configuration. Supported formats include TEXT, JSON, and XML.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "type"))

    @type.setter
    def type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c318bb52e4e58fb8a01d2be3cbd0aa3ec648048364b0e613790729b2d2fada2f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "type", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mse.RosNacosConfigProps",
    jsii_struct_bases=[],
    name_mapping={
        "data_id": "dataId",
        "group": "group",
        "instance_id": "instanceId",
        "app_name": "appName",
        "beta_ips": "betaIps",
        "content": "content",
        "desc": "desc",
        "namespace_id": "namespaceId",
        "tags": "tags",
        "type": "type",
    },
)
class RosNacosConfigProps:
    def __init__(
        self,
        *,
        data_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        group: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        app_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        beta_ips: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        content: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        namespace_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[builtins.str] = None,
        type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::MSE::NacosConfig``.

        :param data_id: 
        :param group: 
        :param instance_id: 
        :param app_name: 
        :param beta_ips: 
        :param content: 
        :param desc: 
        :param namespace_id: 
        :param tags: 
        :param type: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9521663af0159ec0eed998266b54245eb300f15a2a42b4102ec2cd4978b956ed)
            check_type(argname="argument data_id", value=data_id, expected_type=type_hints["data_id"])
            check_type(argname="argument group", value=group, expected_type=type_hints["group"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument app_name", value=app_name, expected_type=type_hints["app_name"])
            check_type(argname="argument beta_ips", value=beta_ips, expected_type=type_hints["beta_ips"])
            check_type(argname="argument content", value=content, expected_type=type_hints["content"])
            check_type(argname="argument desc", value=desc, expected_type=type_hints["desc"])
            check_type(argname="argument namespace_id", value=namespace_id, expected_type=type_hints["namespace_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "data_id": data_id,
            "group": group,
            "instance_id": instance_id,
        }
        if app_name is not None:
            self._values["app_name"] = app_name
        if beta_ips is not None:
            self._values["beta_ips"] = beta_ips
        if content is not None:
            self._values["content"] = content
        if desc is not None:
            self._values["desc"] = desc
        if namespace_id is not None:
            self._values["namespace_id"] = namespace_id
        if tags is not None:
            self._values["tags"] = tags
        if type is not None:
            self._values["type"] = type

    @builtins.property
    def data_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dataId: The data ID.
        '''
        result = self._values.get("data_id")
        assert result is not None, "Required property 'data_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def group(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: group: The ID of the group.
        '''
        result = self._values.get("group")
        assert result is not None, "Required property 'group' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the instance.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def app_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: appName: The name of the application.
        '''
        result = self._values.get("app_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def beta_ips(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: betaIps: The list of IP addresses where the beta release of the configuration is performed.
        '''
        result = self._values.get("beta_ips")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def content(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: content: The content of the configuration.
        '''
        result = self._values.get("content")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: desc: The description of the configuration.
        '''
        result = self._values.get("desc")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def namespace_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: namespaceId: The ID of the namespace.
        '''
        result = self._values.get("namespace_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[builtins.str]:
        '''
        :Property: tags: The tag of the configuration.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: type: The format of the configuration. Supported formats include TEXT, JSON, and XML.
        '''
        result = self._values.get("type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosNacosConfigProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosNacosService(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mse.RosNacosService",
):
    '''A ROS template type:  ``ALIYUN::MSE::NacosService``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosNacosServiceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::MSE::NacosService``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0a2a5839694a665ae475bcf65ff0b2e9437c4d14dea07916da4822893aadc1d0)
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
            type_hints = typing.get_type_hints(_typecheckingstub__c48b5bdd617658846217139894385c5334b68f833776316a7533c27b420eb4c8)
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
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        '''A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.'''
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1689ebb53bdcc61b8e8431eda12446092efb2317e952bdb28b07ee148b80f50b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__00cf2614999315c85f5df839b1b38f8110618f426ae28185ae2db518ea8b06d2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="serviceName")
    def service_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: serviceName: The name of the service.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "serviceName"))

    @service_name.setter
    def service_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7b8b3db2084a3c1a334a09e8fa08a02061ba94d311aeb427ddf5eef0b99c65ba)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serviceName", value)

    @builtins.property
    @jsii.member(jsii_name="ephemeral")
    def ephemeral(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ephemeral: Specifies whether the instance is a temporary node. Valid values:
        true: yes
        false: no
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ephemeral"))

    @ephemeral.setter
    def ephemeral(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a68b767de8769311cbdf45c798efdf507171fec61aa63387689ce0d58f2232b0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ephemeral", value)

    @builtins.property
    @jsii.member(jsii_name="groupName")
    def group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groupName: The name of the group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "groupName"))

    @group_name.setter
    def group_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bcc206618a4e652912791ba59906aa71fd2301dad9d391ffe7b0efcdc330c49c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupName", value)

    @builtins.property
    @jsii.member(jsii_name="namespaceId")
    def namespace_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: namespaceId: The ID of the namespace.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "namespaceId"))

    @namespace_id.setter
    def namespace_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0690393fef737748402bb21b3adcbfd0020b7c28244299fd0a0fee74a72f41fd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "namespaceId", value)

    @builtins.property
    @jsii.member(jsii_name="protectThreshold")
    def protect_threshold(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: protectThreshold: The protection threshold.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "protectThreshold"))

    @protect_threshold.setter
    def protect_threshold(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__af70809b89f9aef2c516320b1a618be2f2a6b74ea9e43bb3ab38e40f60425a9c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "protectThreshold", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mse.RosNacosServiceProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "service_name": "serviceName",
        "ephemeral": "ephemeral",
        "group_name": "groupName",
        "namespace_id": "namespaceId",
        "protect_threshold": "protectThreshold",
    },
)
class RosNacosServiceProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        service_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ephemeral: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        namespace_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        protect_threshold: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::MSE::NacosService``.

        :param instance_id: 
        :param service_name: 
        :param ephemeral: 
        :param group_name: 
        :param namespace_id: 
        :param protect_threshold: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eaa77f16978f14ee84a13881a3008d00825f64794b7ba615d06433e1d773761d)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument service_name", value=service_name, expected_type=type_hints["service_name"])
            check_type(argname="argument ephemeral", value=ephemeral, expected_type=type_hints["ephemeral"])
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument namespace_id", value=namespace_id, expected_type=type_hints["namespace_id"])
            check_type(argname="argument protect_threshold", value=protect_threshold, expected_type=type_hints["protect_threshold"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
            "service_name": service_name,
        }
        if ephemeral is not None:
            self._values["ephemeral"] = ephemeral
        if group_name is not None:
            self._values["group_name"] = group_name
        if namespace_id is not None:
            self._values["namespace_id"] = namespace_id
        if protect_threshold is not None:
            self._values["protect_threshold"] = protect_threshold

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the instance.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def service_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: serviceName: The name of the service.
        '''
        result = self._values.get("service_name")
        assert result is not None, "Required property 'service_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ephemeral(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ephemeral: Specifies whether the instance is a temporary node. Valid values:
        true: yes
        false: no
        '''
        result = self._values.get("ephemeral")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groupName: The name of the group.
        '''
        result = self._values.get("group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def namespace_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: namespaceId: The ID of the namespace.
        '''
        result = self._values.get("namespace_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def protect_threshold(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: protectThreshold: The protection threshold.
        '''
        result = self._values.get("protect_threshold")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosNacosServiceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Cluster",
    "ClusterProps",
    "Gateway",
    "GatewayProps",
    "NacosConfig",
    "NacosConfigProps",
    "NacosService",
    "NacosServiceProps",
    "RosCluster",
    "RosClusterProps",
    "RosGateway",
    "RosGatewayProps",
    "RosNacosConfig",
    "RosNacosConfigProps",
    "RosNacosService",
    "RosNacosServiceProps",
]

publication.publish()

def _typecheckingstub__8920f7274ca60d5c8c0eb0dbe17b34b420959f182f7eda8c4835591a1dc0db13(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ClusterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c3f61b7de5b8d98fccf402f2e7791aec91d15600817d870623464c556207ae26(
    *,
    cluster_specification: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cluster_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cluster_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    net_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    accept_language: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    acl_entry_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    cluster_alias_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    connection_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disk_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mse_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    private_slb_specification: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pub_network_flow: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pub_slb_specification: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    request_pars: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8aa2892719448a9d6927894e5847e221c315743387dd9e601543909c6bdaddd4(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[GatewayProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__37db6aaa4955203fa0af078b3a47704ee39b27e0d514a8cc3c4d06919af55e40(
    *,
    replica: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    spec: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    backup_v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enterprise_security_group: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    internet_slb_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    slb_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9339bf1f553d59326b03d52f19564e960f2055ea424e59e4176b5c05cc619c0b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[NacosConfigProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d6f1a88fa6b9468c572e617732a30921880d8ee7cb200d6f6348ecf5c936222c(
    *,
    data_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    group: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    app_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    beta_ips: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    content: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    namespace_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[builtins.str] = None,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__36b2b87603d3ad3595a58388cfa610160c409ac52c54bec26ebf4fa46331cac6(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[NacosServiceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4494a41cf823074a78553313765d704b6f72246fc2e6f7c8c2d2a4687720cafb(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    service_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ephemeral: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    namespace_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    protect_threshold: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__97bcfecd9811cd6acbf8cfb34ab31f665317563267ad6a0f6e8994df69810483(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosClusterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ab774d5814f467d7a0f2da236c8bff72a97586f1f48bf8cc164053d353fe3954(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1331c0e118e6a7fe89b3c6eb3a141df739b919937ada8e2e27470eb8e925e4d7(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__929fda1489d6f0fe51c23d3f7dd4b5898a4c5b79d8f8045fcea8d535fd8c5366(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f2dce1f23cadd85e56c4cba3f740bbfab69c3a7f3b8d72cb6f2cf878ace48c6e(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__84b153768b862208d826d17645a9eb26818f4e749bbef96b47ba6e83f8120063(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__92e5b27d20cc4de249a50b462ba8625bb01cef9a75390830f7012a7d880b3be3(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__166bce99a3b915459b4f4373fd869c4d7d8a24b3682c85c47e91444b76a937eb(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7c9c8484c5bc8f64a16a8ab16bcfdf5ff8bc75e176da741c8a313e137dfcc3e9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a119002eff8e34757e1e81015e34135a393110c8d782da1caee5ae592e879fd8(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0bd43cd08ed40252942ce07d876b034563912f404f196797d037a39db290308e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e18c7767cb9ad55d13670a44766d5558f6e38b463418a0cc24aea3cbf06a9b33(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__78c0928d56d7d2e80087bcf6bc4f36235493d8db20d774f6b917d2a7f2bfd35c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__401deaea625555fc3d8cf1390547e2451f6820f415a72b61627913f42483a301(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b15f7cce20e8b1599d1a925cee316a092deb35a98e73e4d91a15eee918722eb9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__919de38d1d220e3dbf96feede4f2da5f2266a99cfb3415615bbae2ce346d65a2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b429903ce7df30ca8a993d831863a2bf5f12eb64b35866a8a3ed72efa6423afa(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c49d929d644ff8a11e93344d4489a213bd7c09990363aaa8f09356955fa010b3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fb9aef688f147f2f1866a5589c5a386ef619c1ede627eb3bc19dacb3f47f517c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__15bf01166d25bc19bc027f3e35516e29a4e0946a9f84a51d8f6f8375bdf42a09(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ea3094298a1692db46aec7c3683b0834575762465a6778c6f0f6d830e6383ccb(
    *,
    cluster_specification: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cluster_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cluster_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    net_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    accept_language: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    acl_entry_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    cluster_alias_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    connection_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disk_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mse_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    private_slb_specification: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pub_network_flow: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pub_slb_specification: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    request_pars: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1d95f79940e98cf8f52899ded1550e078d94286cdb62ba26ee2a657ea9022351(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosGatewayProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__990581fd49a844c11a69af33b09f5fbbe414a3283e60557b8b4ae489f6460755(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__62d2d9babba43960951fc9e62305f4cb134cba5347e068f6e6bd8ebc725462ab(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f69fc944803608e60eb80d76fc8522f3bce825dd0d2c0ccfe3362590d237e174(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c71541c79264c5ffb6227f695ece903607dd6892deea78917feb5f91283215d5(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ea90c7a20ecea7a9b03bb88aced59014447387bc2f8d63c2db5237c2339cbbbe(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__243e6e3fa4e2efcb300712b38d574699cc95e095bc0d3cc8b0b5d8ef58c74b88(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1c4904a50e8f444d6bf2a179814ad8499f22780ebadf32822fefb5248454c725(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__28878305f1aff9eeb42ab46a3560c1a7b79ffcc33e3b37669f0ae760b1fb6c7e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6234747178aa7d852170c56c5f6f66722577c87254f0a19677cc15fa78b8891a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ee2c523734ca52563a586066b7316d9f39221e35690465b85b8914a8887b890e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c7038069dd02a22cca336d767b9ff469478c12412b0880fbbe1291bdb11cfe36(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__87f12ce01d08e3b0f63922babdfcbb7396d4e8ec029b481df69001ac81a40ecc(
    *,
    replica: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    spec: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    backup_v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enterprise_security_group: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    internet_slb_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    slb_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fbfc5fd7d562d826c6a8b2d7bcf079e437c34be52e275be11bd3c46138afb06f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosNacosConfigProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0f15b023dcb7463402c880d6374a4d9d5f1f687f14640b0cebb4891f33c04b47(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__be7c91e8889fb75b3790ed2a61e53323f097553134bdc667a6f76b09c9f95518(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9a75e7e97b757af857b927c3b882ecd588fa7bf2f7801d3d74d913dce84bf948(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c66e44c705f0102230a14be2a1d38fbc5b0bb21c34d8b7d4df992383a559b900(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4c5e0e7a9ac8815c118b3f0409f84d62827b553681627d6870a751c7761bc1dd(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bb257dbe54f12e83e0be1395dc0c9295b938f0253519819b55a944f9553dac17(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__40c8eab9e36ffc040827a2f1cd6c728f60ff3d53805f706414bdbd525534189e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e2fc6030817a4e801dc6942aa265ce460243ee0a69b4be8136fb999964ace36c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6631c270c47c23b9d85ddebe93e87fbd2f37d7c32add41f768cb99fd3b7d3168(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__28aebe97c54f1608ff7b4fe88cb161069d5b1d14b2abd9e9d441804a6bc68225(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__107a12dabe2ae3eb0ba2bf5c5f171e737aef544c4e3e31959860d38958f78a90(
    value: typing.Optional[builtins.str],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c318bb52e4e58fb8a01d2be3cbd0aa3ec648048364b0e613790729b2d2fada2f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9521663af0159ec0eed998266b54245eb300f15a2a42b4102ec2cd4978b956ed(
    *,
    data_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    group: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    app_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    beta_ips: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    content: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    namespace_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[builtins.str] = None,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0a2a5839694a665ae475bcf65ff0b2e9437c4d14dea07916da4822893aadc1d0(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosNacosServiceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c48b5bdd617658846217139894385c5334b68f833776316a7533c27b420eb4c8(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1689ebb53bdcc61b8e8431eda12446092efb2317e952bdb28b07ee148b80f50b(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__00cf2614999315c85f5df839b1b38f8110618f426ae28185ae2db518ea8b06d2(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7b8b3db2084a3c1a334a09e8fa08a02061ba94d311aeb427ddf5eef0b99c65ba(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a68b767de8769311cbdf45c798efdf507171fec61aa63387689ce0d58f2232b0(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bcc206618a4e652912791ba59906aa71fd2301dad9d391ffe7b0efcdc330c49c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0690393fef737748402bb21b3adcbfd0020b7c28244299fd0a0fee74a72f41fd(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__af70809b89f9aef2c516320b1a618be2f2a6b74ea9e43bb3ab38e40f60425a9c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eaa77f16978f14ee84a13881a3008d00825f64794b7ba615d06433e1d773761d(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    service_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ephemeral: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    namespace_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    protect_threshold: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
