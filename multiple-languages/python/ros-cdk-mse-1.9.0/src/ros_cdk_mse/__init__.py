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
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
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
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosCluster.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Cluster``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-cluster

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
        :param resource_group_id: Property resourceGroupId: Resource group id.
        :param tags: Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
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
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
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
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags
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
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: Resource group id.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosCluster.TagsProperty"]]:
        '''Property tags: Tags to attach to instance.

        Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosCluster.TagsProperty"]], result)

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


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mse.EngineNamespaceProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "name": "name",
        "desc": "desc",
        "identity": "identity",
    },
)
class EngineNamespaceProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        identity: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``EngineNamespace``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-enginenamespace

        :param instance_id: Property instanceId: The ID of the instance.
        :param name: Property name: The display name of the namespace.
        :param desc: Property desc: The description of the namespace.
        :param identity: Property identity: The custom ID of the namespace. If you do not specify this parameter, the automatically generated Universally Unique Identifier (UUID) is returned.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ae95b9d1c5819ff82c11eded77de97b23c3f68f5e8d40376ff358910f1109e2d)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument desc", value=desc, expected_type=type_hints["desc"])
            check_type(argname="argument identity", value=identity, expected_type=type_hints["identity"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
            "name": name,
        }
        if desc is not None:
            self._values["desc"] = desc
        if identity is not None:
            self._values["identity"] = identity

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: The ID of the instance.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property name: The display name of the namespace.'''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property desc: The description of the namespace.'''
        result = self._values.get("desc")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def identity(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property identity: The custom ID of the namespace.

        If you do not specify this parameter, the automatically generated Universally Unique Identifier (UUID) is returned.
        '''
        result = self._values.get("identity")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "EngineNamespaceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mse.Gateway2Props",
    jsii_struct_bases=[],
    name_mapping={
        "vpc_id": "vpcId",
        "accept_language": "acceptLanguage",
        "charge_type": "chargeType",
        "clb_network_type": "clbNetworkType",
        "enable_hardware_acceleration": "enableHardwareAcceleration",
        "enable_sls": "enableSls",
        "enable_xtrace": "enableXtrace",
        "enterprise_security_group": "enterpriseSecurityGroup",
        "internet_slb": "internetSlb",
        "managed_entry_network_type": "managedEntryNetworkType",
        "mser_version": "mserVersion",
        "name": "name",
        "nlb_network_type": "nlbNetworkType",
        "period": "period",
        "period_unit": "periodUnit",
        "replica": "replica",
        "resource_group_id": "resourceGroupId",
        "slb_spec": "slbSpec",
        "spec": "spec",
        "tags": "tags",
        "v_switch_id": "vSwitchId",
        "v_switch_id2": "vSwitchId2",
        "xtrace_ratio": "xtraceRatio",
        "zone_info": "zoneInfo",
    },
)
class Gateway2Props:
    def __init__(
        self,
        *,
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        accept_language: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        clb_network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_hardware_acceleration: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_sls: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_xtrace: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enterprise_security_group: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        internet_slb: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        managed_entry_network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        mser_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        nlb_network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        replica: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        slb_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosGateway2.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id2: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        xtrace_ratio: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosGateway2.ZoneInfoProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
    ) -> None:
        '''Properties for defining a ``Gateway2``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gateway2

        :param vpc_id: Property vpcId: The ID of the vpc.
        :param accept_language: Property acceptLanguage: The language of the response. Valid values: zh: Chinese en: English
        :param charge_type: Property chargeType: The billing method you specify when you purchase an normal instance. Valid values: PREPAY: subscription POSTPAY: pay-as-you-go
        :param clb_network_type: Property clbNetworkType: The network type of the purchased Classic Load Balancer (CLB) instance that is billed based on LCUs. pubnet: Internet privatenet: private network privatepubnet: Internet and private network
        :param enable_hardware_acceleration: Property enableHardwareAcceleration: Specifies whether to activate Tracing Analysis.
        :param enable_sls: Property enableSls: Specifies whether to activate Log Service.
        :param enable_xtrace: Property enableXtrace: Whether to activate Tracing Analysis.
        :param enterprise_security_group: Property enterpriseSecurityGroup: Specifies whether to enable hardware acceleration.
        :param internet_slb: Property internetSlb: Public network SLB specifications (for normal instances). Simple type (slb.s1.small) Standard type 1 (slb.s2.smal) Standard type I(slb.s2.medium) Advanced Type 1 (slb.s3.small) Advanced I(slb.s3.medium) Super strong type I (slb.s3.large) Description Traditional example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU, and CLB specifications. Serverless example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU
        :param managed_entry_network_type: Property managedEntryNetworkType: Gateway entrance type (applicable to the mse_premium instance) pubnet: public network privatenet: privatenet privatepubnet: public + private network.
        :param mser_version: Property mserVersion: The MSE gateway instance type. Valid values: mse_pro: normal instance mse_premium: professional normal instancemse_serverless: serverless instance
        :param name: Property name: The name of the created gateway.
        :param nlb_network_type: Property nlbNetworkType: The network type of the Network Load Balancer (NLB) instance you specify when you purchase a serverless instance. pubnet: Internet privatenet: private network privatepubnet: Internet and private network
        :param period: Property period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3. This parameter is Only valid when updating from postpaid instance to prepaid instance.
        :param period_unit: Property periodUnit: Charge period for created instances. This parameter is only valid when updating from postpaid instance to prepaid instance.
        :param replica: Property replica: The number of nodes you specify when you purchase an normal instance. For high availability, the value for this param is recommended to be greater than 2.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        :param slb_spec: Property slbSpec: Private network SLB specifications (for normal instances). Simple type (slb.s1.small) Standard type 1 (slb.s2.small) Standard type I(slb.s2.medium) Advanced Type 1 (slb.s3.small) Advanced I(slb.s3.medium) Super strong type I (slb.s3.large) Description Traditional example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU, and CLB specifications. Serverless example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU
        :param spec: Property spec: The node specifications you specify when you purchase an normal instance. Valid values: MSE_GTW_16_32_200_c(16C32G) MSE_GTW_2_4_200_c(2C4G) MSE_GTW_4_8_200_c(4C8G) MSE_GTW_8_16_200_c(8C16G)
        :param tags: Property tags: The list of tags in the form of key/value pairs. You can define a maximum of 20 tags.
        :param v_switch_id: Property vSwitchId: The primary VSwitch ID.
        :param v_switch_id2: Property vSwitchId2: The secondary VSwitch ID.
        :param xtrace_ratio: Property xtraceRatio: The sampling rate of Tracing Analysis. Valid values: [1,100]
        :param zone_info: Property zoneInfo: The info details of the available zone.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f9ad5809257b5d9f49e03d473243bebf37a18c163089c223250d390f01b69739)
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument accept_language", value=accept_language, expected_type=type_hints["accept_language"])
            check_type(argname="argument charge_type", value=charge_type, expected_type=type_hints["charge_type"])
            check_type(argname="argument clb_network_type", value=clb_network_type, expected_type=type_hints["clb_network_type"])
            check_type(argname="argument enable_hardware_acceleration", value=enable_hardware_acceleration, expected_type=type_hints["enable_hardware_acceleration"])
            check_type(argname="argument enable_sls", value=enable_sls, expected_type=type_hints["enable_sls"])
            check_type(argname="argument enable_xtrace", value=enable_xtrace, expected_type=type_hints["enable_xtrace"])
            check_type(argname="argument enterprise_security_group", value=enterprise_security_group, expected_type=type_hints["enterprise_security_group"])
            check_type(argname="argument internet_slb", value=internet_slb, expected_type=type_hints["internet_slb"])
            check_type(argname="argument managed_entry_network_type", value=managed_entry_network_type, expected_type=type_hints["managed_entry_network_type"])
            check_type(argname="argument mser_version", value=mser_version, expected_type=type_hints["mser_version"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument nlb_network_type", value=nlb_network_type, expected_type=type_hints["nlb_network_type"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument replica", value=replica, expected_type=type_hints["replica"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument slb_spec", value=slb_spec, expected_type=type_hints["slb_spec"])
            check_type(argname="argument spec", value=spec, expected_type=type_hints["spec"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument v_switch_id2", value=v_switch_id2, expected_type=type_hints["v_switch_id2"])
            check_type(argname="argument xtrace_ratio", value=xtrace_ratio, expected_type=type_hints["xtrace_ratio"])
            check_type(argname="argument zone_info", value=zone_info, expected_type=type_hints["zone_info"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "vpc_id": vpc_id,
        }
        if accept_language is not None:
            self._values["accept_language"] = accept_language
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if clb_network_type is not None:
            self._values["clb_network_type"] = clb_network_type
        if enable_hardware_acceleration is not None:
            self._values["enable_hardware_acceleration"] = enable_hardware_acceleration
        if enable_sls is not None:
            self._values["enable_sls"] = enable_sls
        if enable_xtrace is not None:
            self._values["enable_xtrace"] = enable_xtrace
        if enterprise_security_group is not None:
            self._values["enterprise_security_group"] = enterprise_security_group
        if internet_slb is not None:
            self._values["internet_slb"] = internet_slb
        if managed_entry_network_type is not None:
            self._values["managed_entry_network_type"] = managed_entry_network_type
        if mser_version is not None:
            self._values["mser_version"] = mser_version
        if name is not None:
            self._values["name"] = name
        if nlb_network_type is not None:
            self._values["nlb_network_type"] = nlb_network_type
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if replica is not None:
            self._values["replica"] = replica
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if slb_spec is not None:
            self._values["slb_spec"] = slb_spec
        if spec is not None:
            self._values["spec"] = spec
        if tags is not None:
            self._values["tags"] = tags
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if v_switch_id2 is not None:
            self._values["v_switch_id2"] = v_switch_id2
        if xtrace_ratio is not None:
            self._values["xtrace_ratio"] = xtrace_ratio
        if zone_info is not None:
            self._values["zone_info"] = zone_info

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vpcId: The ID of the vpc.'''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def accept_language(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property acceptLanguage: The language of the response.

        Valid values:
        zh: Chinese
        en: English
        '''
        result = self._values.get("accept_language")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property chargeType: The billing method you specify when you purchase an normal instance.

        Valid values:
        PREPAY: subscription
        POSTPAY: pay-as-you-go
        '''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def clb_network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property clbNetworkType: The network type of the purchased Classic Load Balancer (CLB) instance that is billed based on LCUs.

        pubnet: Internet
        privatenet: private network
        privatepubnet: Internet and private network
        '''
        result = self._values.get("clb_network_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_hardware_acceleration(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enableHardwareAcceleration: Specifies whether to activate Tracing Analysis.'''
        result = self._values.get("enable_hardware_acceleration")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_sls(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enableSls: Specifies whether to activate Log Service.'''
        result = self._values.get("enable_sls")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_xtrace(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enableXtrace: Whether to activate Tracing Analysis.'''
        result = self._values.get("enable_xtrace")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enterprise_security_group(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enterpriseSecurityGroup: Specifies whether to enable hardware acceleration.'''
        result = self._values.get("enterprise_security_group")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def internet_slb(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property internetSlb: Public network SLB specifications (for normal instances).

        Simple type (slb.s1.small)
        Standard type 1 (slb.s2.smal)
        Standard type I(slb.s2.medium)
        Advanced Type 1 (slb.s3.small)
        Advanced I(slb.s3.medium)
        Super strong type I (slb.s3.large)
        Description Traditional example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU, and CLB specifications. Serverless example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU
        '''
        result = self._values.get("internet_slb")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def managed_entry_network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property managedEntryNetworkType: Gateway entrance type (applicable to the mse_premium instance) pubnet: public network privatenet: privatenet privatepubnet: public + private network.'''
        result = self._values.get("managed_entry_network_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def mser_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property mserVersion: The MSE gateway instance type.

        Valid values:
        mse_pro: normal instance
        mse_premium: professional normal instancemse_serverless: serverless instance
        '''
        result = self._values.get("mser_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property name: The name of the created gateway.'''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def nlb_network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property nlbNetworkType: The network type of the Network Load Balancer (NLB) instance you specify when you purchase a serverless instance.

        pubnet: Internet
        privatenet: private network
        privatepubnet: Internet and private network
        '''
        result = self._values.get("nlb_network_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period: Prepaid time period.

        While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3. This parameter is Only valid when updating from postpaid instance to prepaid instance.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property periodUnit: Charge period for created instances.

        This parameter is only valid when updating from postpaid instance to prepaid instance.
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def replica(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property replica: The number of nodes you specify when you purchase an normal instance.

        For high availability, the value for this param is recommended to be greater than 2.
        '''
        result = self._values.get("replica")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def slb_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property slbSpec: Private network SLB specifications (for normal instances).

        Simple type (slb.s1.small)
        Standard type 1 (slb.s2.small)
        Standard type I(slb.s2.medium)
        Advanced Type 1 (slb.s3.small)
        Advanced I(slb.s3.medium)
        Super strong type I (slb.s3.large)
        Description Traditional example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU, and CLB specifications. Serverless example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU
        '''
        result = self._values.get("slb_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property spec: The node specifications you specify when you purchase an normal instance.

        Valid values:
        MSE_GTW_16_32_200_c(16C32G)
        MSE_GTW_2_4_200_c(2C4G)
        MSE_GTW_4_8_200_c(4C8G)
        MSE_GTW_8_16_200_c(8C16G)
        '''
        result = self._values.get("spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosGateway2.TagsProperty"]]:
        '''Property tags: The list of tags in the form of key/value pairs.

        You can define a maximum of 20 tags.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosGateway2.TagsProperty"]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vSwitchId: The primary VSwitch ID.'''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id2(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vSwitchId2: The secondary VSwitch ID.'''
        result = self._values.get("v_switch_id2")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def xtrace_ratio(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property xtraceRatio: The sampling rate of Tracing Analysis.

        Valid values: [1,100]
        '''
        result = self._values.get("xtrace_ratio")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_info(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGateway2.ZoneInfoProperty"]]]]:
        '''Property zoneInfo: The info details of the available zone.'''
        result = self._values.get("zone_info")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGateway2.ZoneInfoProperty"]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "Gateway2Props(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


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
        '''Properties for defining a ``Gateway``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gateway

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


@jsii.interface(jsii_type="@alicloud/ros-cdk-mse.ICluster")
class ICluster(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Cluster``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAclEntryList")
    def attr_acl_entry_list(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AclEntryList: The public network whitelist list is used only when the public network is enabled.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAclId")
    def attr_acl_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AclId: acl id.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAppVersion")
    def attr_app_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AppVersion: app version.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrClusterAliasName")
    def attr_cluster_alias_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterAliasName: cluster alias name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterId: cluster id.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrClusterName")
    def attr_cluster_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterName: cluster name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrClusterSpecification")
    def attr_cluster_specification(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterSpecification: Cluster specifications.

        Note the msversion requirements of the version parameter,
        Optional parameters:
        "MSE_ SC *1_2_60_c",
        "MSE* SC *2_4_60_c",
        "MSE* SC *4_8_60_c",
        "MSE* SC *8_16_60_c",
        "MSE* SC _16_32_60_c"
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrClusterType")
    def attr_cluster_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterType: cluster type.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrClusterVersion")
    def attr_cluster_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterVersion: Cluster version, such as ZooKeeper_3_8_0,NACOS_2_0_0.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrConfigAuthEnabled")
    def attr_config_auth_enabled(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConfigAuthEnabled: Whether the configuration supports it.

        Valid values: true: false: not supported
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrConfigSecretEnabled")
    def attr_config_secret_enabled(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConfigSecretEnabled: Whether the configuration password takes effect.

        The value is as follows: true: valid false: not valid
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrConnectionType")
    def attr_connection_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConnectionType: network connect type.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCpu")
    def attr_cpu(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Cpu: cpu core size.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDiskCapacity")
    def attr_disk_capacity(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DiskCapacity: disk capacity, unit: G.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDiskType")
    def attr_disk_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DiskType: disk type.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHealthStatus")
    def attr_health_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthStatus: health status.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrInstanceCount")
    def attr_instance_count(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceCount: instance count.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: instance id.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrInternetAddress")
    def attr_internet_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InternetAddress: internet address.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrInternetDomain")
    def attr_internet_domain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InternetDomain: internet domain.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrInternetPort")
    def attr_internet_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InternetPort: internet port.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrIntranetAddress")
    def attr_intranet_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IntranetAddress: intranet address.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrIntranetDomain")
    def attr_intranet_domain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IntranetDomain: intranet domain.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrIntranetPort")
    def attr_intranet_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IntranetPort: intranet port.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMcpEnabled")
    def attr_mcp_enabled(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MCPEnabled: Whether MCP takes effect, the value is as follows: true: valid false: not valid.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMemoryCapacity")
    def attr_memory_capacity(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MemoryCapacity: memory capacity.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMseVersion")
    def attr_mse_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MseVersion: Required, the value is as follows:.

        -'mse_dev': indicates the development version.
        -'Mse_pro': means professional version. When this version is selected, the specification is 2c4g or above, and the specification is 3 nodes or above.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrNetType")
    def attr_net_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NetType: Network type (whether private network is enabled or not).

        privatenet indicates that private network is enabled.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPayInfo")
    def attr_pay_info(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PayInfo: pay info.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPubNetworkFlow")
    def attr_pub_network_flow(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PubNetworkFlow: Public network bandwidth.

        If the bandwidth is greater than 0, the public network is enabled.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcId: vpc id.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VSwitchId: switcher Id.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ClusterProps:
        ...


class _IClusterProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Cluster``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-mse.ICluster"

    @builtins.property
    @jsii.member(jsii_name="attrAclEntryList")
    def attr_acl_entry_list(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AclEntryList: The public network whitelist list is used only when the public network is enabled.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAclEntryList"))

    @builtins.property
    @jsii.member(jsii_name="attrAclId")
    def attr_acl_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AclId: acl id.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAclId"))

    @builtins.property
    @jsii.member(jsii_name="attrAppVersion")
    def attr_app_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AppVersion: app version.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAppVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterAliasName")
    def attr_cluster_alias_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterAliasName: cluster alias name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterAliasName"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterId: cluster id.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterName")
    def attr_cluster_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterName: cluster name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterName"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterSpecification")
    def attr_cluster_specification(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterSpecification: Cluster specifications.

        Note the msversion requirements of the version parameter,
        Optional parameters:
        "MSE_ SC *1_2_60_c",
        "MSE* SC *2_4_60_c",
        "MSE* SC *4_8_60_c",
        "MSE* SC *8_16_60_c",
        "MSE* SC _16_32_60_c"
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterSpecification"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterType")
    def attr_cluster_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterType: cluster type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterType"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterVersion")
    def attr_cluster_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterVersion: Cluster version, such as ZooKeeper_3_8_0,NACOS_2_0_0.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrConfigAuthEnabled")
    def attr_config_auth_enabled(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConfigAuthEnabled: Whether the configuration supports it.

        Valid values: true: false: not supported
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConfigAuthEnabled"))

    @builtins.property
    @jsii.member(jsii_name="attrConfigSecretEnabled")
    def attr_config_secret_enabled(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConfigSecretEnabled: Whether the configuration password takes effect.

        The value is as follows: true: valid false: not valid
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConfigSecretEnabled"))

    @builtins.property
    @jsii.member(jsii_name="attrConnectionType")
    def attr_connection_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConnectionType: network connect type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConnectionType"))

    @builtins.property
    @jsii.member(jsii_name="attrCpu")
    def attr_cpu(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Cpu: cpu core size.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCpu"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskCapacity")
    def attr_disk_capacity(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DiskCapacity: disk capacity, unit: G.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDiskCapacity"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskType")
    def attr_disk_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DiskType: disk type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDiskType"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthStatus")
    def attr_health_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthStatus: health status.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceCount")
    def attr_instance_count(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceCount: instance count.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceCount"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: instance id.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetAddress")
    def attr_internet_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InternetAddress: internet address.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInternetAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetDomain")
    def attr_internet_domain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InternetDomain: internet domain.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInternetDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetPort")
    def attr_internet_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InternetPort: internet port.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInternetPort"))

    @builtins.property
    @jsii.member(jsii_name="attrIntranetAddress")
    def attr_intranet_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IntranetAddress: intranet address.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIntranetAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrIntranetDomain")
    def attr_intranet_domain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IntranetDomain: intranet domain.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIntranetDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrIntranetPort")
    def attr_intranet_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IntranetPort: intranet port.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIntranetPort"))

    @builtins.property
    @jsii.member(jsii_name="attrMcpEnabled")
    def attr_mcp_enabled(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MCPEnabled: Whether MCP takes effect, the value is as follows: true: valid false: not valid.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMcpEnabled"))

    @builtins.property
    @jsii.member(jsii_name="attrMemoryCapacity")
    def attr_memory_capacity(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MemoryCapacity: memory capacity.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMemoryCapacity"))

    @builtins.property
    @jsii.member(jsii_name="attrMseVersion")
    def attr_mse_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MseVersion: Required, the value is as follows:.

        -'mse_dev': indicates the development version.
        -'Mse_pro': means professional version. When this version is selected, the specification is 2c4g or above, and the specification is 3 nodes or above.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMseVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrNetType")
    def attr_net_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NetType: Network type (whether private network is enabled or not).

        privatenet indicates that private network is enabled.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNetType"))

    @builtins.property
    @jsii.member(jsii_name="attrPayInfo")
    def attr_pay_info(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PayInfo: pay info.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPayInfo"))

    @builtins.property
    @jsii.member(jsii_name="attrPubNetworkFlow")
    def attr_pub_network_flow(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PubNetworkFlow: Public network bandwidth.

        If the bandwidth is greater than 0, the public network is enabled.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPubNetworkFlow"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcId: vpc id.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VSwitchId: switcher Id.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ClusterProps:
        return typing.cast(ClusterProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ICluster).__jsii_proxy_class__ = lambda : _IClusterProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-mse.IEngineNamespace")
class IEngineNamespace(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``EngineNamespace``.'''

    @builtins.property
    @jsii.member(jsii_name="attrNamespaceId")
    def attr_namespace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NamespaceId: The ID of the namespace.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> EngineNamespaceProps:
        ...


class _IEngineNamespaceProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``EngineNamespace``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-mse.IEngineNamespace"

    @builtins.property
    @jsii.member(jsii_name="attrNamespaceId")
    def attr_namespace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NamespaceId: The ID of the namespace.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNamespaceId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> EngineNamespaceProps:
        return typing.cast(EngineNamespaceProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IEngineNamespace).__jsii_proxy_class__ = lambda : _IEngineNamespaceProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-mse.IGateway")
class IGateway(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Gateway``.'''

    @builtins.property
    @jsii.member(jsii_name="attrBackupVSwitchId")
    def attr_backup_v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupVSwitchId: VSwitchId For Backup.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrGatewayUniqueId")
    def attr_gateway_unique_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GatewayUniqueId: Gateway unique identification.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PaymentType: The payment type of the resource.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrReplica")
    def attr_replica(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Replica: Gateway Node Number.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSpec")
    def attr_spec(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Spec: Gateway Node Specifications.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcId: VpcId.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VSwitchId: VSwitchId.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> GatewayProps:
        ...


class _IGatewayProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Gateway``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-mse.IGateway"

    @builtins.property
    @jsii.member(jsii_name="attrBackupVSwitchId")
    def attr_backup_v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupVSwitchId: VSwitchId For Backup.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBackupVSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="attrGatewayUniqueId")
    def attr_gateway_unique_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GatewayUniqueId: Gateway unique identification.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGatewayUniqueId"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PaymentType: The payment type of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrReplica")
    def attr_replica(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Replica: Gateway Node Number.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrReplica"))

    @builtins.property
    @jsii.member(jsii_name="attrSpec")
    def attr_spec(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Spec: Gateway Node Specifications.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSpec"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcId: VpcId.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VSwitchId: VSwitchId.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> GatewayProps:
        return typing.cast(GatewayProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IGateway).__jsii_proxy_class__ = lambda : _IGatewayProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-mse.IGateway2")
class IGateway2(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Gateway2``.'''

    @builtins.property
    @jsii.member(jsii_name="attrGatewayUniqueId")
    def attr_gateway_unique_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GatewayUniqueId: The unique ID of the gateway.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> Gateway2Props:
        ...


class _IGateway2Proxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Gateway2``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-mse.IGateway2"

    @builtins.property
    @jsii.member(jsii_name="attrGatewayUniqueId")
    def attr_gateway_unique_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GatewayUniqueId: The unique ID of the gateway.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGatewayUniqueId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> Gateway2Props:
        return typing.cast(Gateway2Props, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IGateway2).__jsii_proxy_class__ = lambda : _IGateway2Proxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-mse.INacosConfig")
class INacosConfig(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``NacosConfig``.'''

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "NacosConfigProps":
        ...


class _INacosConfigProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``NacosConfig``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-mse.INacosConfig"

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "NacosConfigProps":
        return typing.cast("NacosConfigProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, INacosConfig).__jsii_proxy_class__ = lambda : _INacosConfigProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-mse.INacosService")
class INacosService(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``NacosService``.'''

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "NacosServiceProps":
        ...


class _INacosServiceProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``NacosService``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-mse.INacosService"

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "NacosServiceProps":
        return typing.cast("NacosServiceProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, INacosService).__jsii_proxy_class__ = lambda : _INacosServiceProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-mse.IServiceSource")
class IServiceSource(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``ServiceSource``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAddress")
    def attr_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Address: Registration Address.

        If not specified, it will be automatically generated based on the selected instance.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrGatewayUniqueId")
    def attr_gateway_unique_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GatewayUniqueId: The unique ID of the gateway.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrId")
    def attr_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Id: The ID of service source.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Name: The name.

        If Type is set to K8S, this parameter specifies the name of the ACK cluster.
        If Type is set to NACOS, this parameter specifies the ID of the Nacos instance.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ServiceSourceProps":
        ...


class _IServiceSourceProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ServiceSource``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-mse.IServiceSource"

    @builtins.property
    @jsii.member(jsii_name="attrAddress")
    def attr_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Address: Registration Address.

        If not specified, it will be automatically generated based on the selected instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrGatewayUniqueId")
    def attr_gateway_unique_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GatewayUniqueId: The unique ID of the gateway.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGatewayUniqueId"))

    @builtins.property
    @jsii.member(jsii_name="attrId")
    def attr_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Id: The ID of service source.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrId"))

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Name: The name.

        If Type is set to K8S, this parameter specifies the name of the ACK cluster.
        If Type is set to NACOS, this parameter specifies the ID of the Nacos instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ServiceSourceProps":
        return typing.cast("ServiceSourceProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IServiceSource).__jsii_proxy_class__ = lambda : _IServiceSourceProxy


@jsii.implements(INacosConfig)
class NacosConfig(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mse.NacosConfig",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::MSE::NacosConfig``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosNacosConfig``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-nacosconfig
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["NacosConfigProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

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

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "NacosConfigProps":
        return typing.cast("NacosConfigProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1083442f5ba3c78fe9d320ef7923412fe646e09ef4b4389b37125e18b98d34c5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0d40f7bd73b7e4515e94f70e5b7a23015ecfd7cd5ba775556c938b598562ef9e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ef34b4ac0ce2569e1c6201887ba2876aac5fb2f0348b403debf95e55c33e3ba4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


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
        '''Properties for defining a ``NacosConfig``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-nacosconfig

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


@jsii.implements(INacosService)
class NacosService(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mse.NacosService",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::MSE::NacosService``, which is used to create a Nacos service.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosNacosService``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-nacosservice
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["NacosServiceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

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

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "NacosServiceProps":
        return typing.cast("NacosServiceProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9b72304516e904eefd218659923b1dbec7e929591cba526acde572d94cc71758)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__467bc2fc836c2bcacba64ddc36111374e493d4e388b517d334151757ab50f1d5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ba50f6c5d5ee142d8a8bc98a87b5b6ea1ad3ab210cbcbf6d783cafe015231926)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


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
        '''Properties for defining a ``NacosService``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-nacosservice

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
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::MSE::Cluster``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Cluster`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-cluster
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosClusterProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
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
            type_hints = typing.get_type_hints(_typecheckingstub__a1bbb8e6191a4172953a5eccf5d2c426d5cf5ac6da6ab1caeab579ad27fbd3b7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosCluster.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosCluster.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosCluster.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6bed81671ef303902c4e0bc6c79df21de7f92b9a7ba6909fa5cb98c958e4c43e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

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
        jsii_type="@alicloud/ros-cdk-mse.RosCluster.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__31a06c6728c84f611f6f6856004fb510a76e602385ef667056aa0f3068dd7e43)
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
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
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
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosCluster.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosCluster``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-cluster

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
        :param resource_group_id: 
        :param tags: 
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
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
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
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags
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
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosCluster.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosCluster.TagsProperty]], result)

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


class RosEngineNamespace(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mse.RosEngineNamespace",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::MSE::EngineNamespace``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``EngineNamespace`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-enginenamespace
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosEngineNamespaceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__956619f383d5dff09236b8f679814d92e54a8b3b14b792e0a5c491f53df4d9a5)
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
            type_hints = typing.get_type_hints(_typecheckingstub__39eff009aa4ba3280465d5d299dd453d03d556199eb4b7044708e7ccf3fbc972)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrNamespaceId")
    def attr_namespace_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: NamespaceId: The ID of the namespace.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNamespaceId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__f9510e546ce3e7990c360d4f33d591d536c601a97514078b50658125144ea9f9)
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
            type_hints = typing.get_type_hints(_typecheckingstub__3d52e2250ba38230e996cb859933422955376049e9707f24139bd01a02579edb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The display name of the namespace.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0272e0296f6b89689de6382955f0185020815a5aec4875c87ff7c1a761d54219)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="desc")
    def desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: desc: The description of the namespace.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "desc"))

    @desc.setter
    def desc(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__234948a278a365520de1f340d5b725171f62a5f41aa4d5587e2def031429de37)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "desc", value)

    @builtins.property
    @jsii.member(jsii_name="identity")
    def identity(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: identity: The custom ID of the namespace. If you do not specify this parameter, the automatically generated Universally Unique Identifier (UUID) is returned.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "identity"))

    @identity.setter
    def identity(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__878e4a05e8f809fb83a86815f99b52c2ca48e74bc86e3d56f1737a45c4a293a7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "identity", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mse.RosEngineNamespaceProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "name": "name",
        "desc": "desc",
        "identity": "identity",
    },
)
class RosEngineNamespaceProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        identity: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosEngineNamespace``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-enginenamespace

        :param instance_id: 
        :param name: 
        :param desc: 
        :param identity: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__61a2f7d7e1a72c5f44e1478fec5c629b1132f5c1a46f7de10adf2895dd2cc35b)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument desc", value=desc, expected_type=type_hints["desc"])
            check_type(argname="argument identity", value=identity, expected_type=type_hints["identity"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
            "name": name,
        }
        if desc is not None:
            self._values["desc"] = desc
        if identity is not None:
            self._values["identity"] = identity

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
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The display name of the namespace.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: desc: The description of the namespace.
        '''
        result = self._values.get("desc")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def identity(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: identity: The custom ID of the namespace. If you do not specify this parameter, the automatically generated Universally Unique Identifier (UUID) is returned.
        '''
        result = self._values.get("identity")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosEngineNamespaceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosGateway(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mse.RosGateway",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::MSE::Gateway``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Gateway`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gateway
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosGatewayProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
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


class RosGateway2(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mse.RosGateway2",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::MSE::Gateway2``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Gateway2`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gateway2
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosGateway2Props", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e2c33faa2aab9ccc4639e3bd2697422aa8bbaf92217514cbab444c7a588df781)
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
            type_hints = typing.get_type_hints(_typecheckingstub__eb03574400296b9b031b87458ada4184ba8c39ef9d4f28b953bfb2b1bd24b857)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrGatewayUniqueId")
    def attr_gateway_unique_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GatewayUniqueId: The unique ID of the gateway.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGatewayUniqueId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__1d34d271f03d97a7dffbca61dea9c1a145e05c94457073ac093046d458afb4fa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: The ID of the vpc.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__74a9c4d3ef1155a466dc19febae5293abae5c1e437e71fdf007cab96445fb0d8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="acceptLanguage")
    def accept_language(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        acceptLanguage: The language of the response. Valid values:
        zh: Chinese
        en: English
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "acceptLanguage"))

    @accept_language.setter
    def accept_language(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e6bbdedbde169e2d99cd77a71a7da6214a664ec3d6e04bc620ba3e9cd2237c7f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "acceptLanguage", value)

    @builtins.property
    @jsii.member(jsii_name="chargeType")
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        chargeType: The billing method you specify when you purchase an normal instance.
        Valid values:
        PREPAY: subscription
        POSTPAY: pay-as-you-go
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "chargeType"))

    @charge_type.setter
    def charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0ea73a78af1225d9921e614b9afd505b13c32a6b1c34e5e4afaedb75e34b2450)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "chargeType", value)

    @builtins.property
    @jsii.member(jsii_name="clbNetworkType")
    def clb_network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        clbNetworkType: The network type of the purchased Classic Load Balancer (CLB) instance that is billed based on LCUs.
        pubnet: Internet
        privatenet: private network
        privatepubnet: Internet and private network
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "clbNetworkType"))

    @clb_network_type.setter
    def clb_network_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0fdb6363665c18bf4aa10352e83b2e415a4f825e64179bfbec4b13bc8c0134ab)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clbNetworkType", value)

    @builtins.property
    @jsii.member(jsii_name="enableHardwareAcceleration")
    def enable_hardware_acceleration(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enableHardwareAcceleration: Specifies whether to activate Tracing Analysis.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enableHardwareAcceleration"))

    @enable_hardware_acceleration.setter
    def enable_hardware_acceleration(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2a9824fde2cc42fba86f7d9bdd7d03400e51038ab54c2a1afbdba403b8658271)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableHardwareAcceleration", value)

    @builtins.property
    @jsii.member(jsii_name="enableSls")
    def enable_sls(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enableSls: Specifies whether to activate Log Service.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enableSls"))

    @enable_sls.setter
    def enable_sls(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__48ffba05b0f2a26a67109fe898b8b879797402724b2e76f005e1ef3adb5d740f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableSls", value)

    @builtins.property
    @jsii.member(jsii_name="enableXtrace")
    def enable_xtrace(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enableXtrace: Whether to activate Tracing Analysis.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enableXtrace"))

    @enable_xtrace.setter
    def enable_xtrace(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8bcd2ad8ea90a171fa33129f78cfc7f2947f4382aa9d502d6ebf41efa3bd194b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableXtrace", value)

    @builtins.property
    @jsii.member(jsii_name="enterpriseSecurityGroup")
    def enterprise_security_group(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enterpriseSecurityGroup: Specifies whether to enable hardware acceleration.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enterpriseSecurityGroup"))

    @enterprise_security_group.setter
    def enterprise_security_group(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fb18236a37ae1d00a6ffa484be459f88a83b156bb2aa1dc055be93b838abf2fe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enterpriseSecurityGroup", value)

    @builtins.property
    @jsii.member(jsii_name="internetSlb")
    def internet_slb(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        internetSlb: Public network SLB specifications (for normal instances).
        Simple type (slb.s1.small)
        Standard type 1 (slb.s2.smal)
        Standard type I(slb.s2.medium)
        Advanced Type 1 (slb.s3.small)
        Advanced I(slb.s3.medium)
        Super strong type I (slb.s3.large)
        Description Traditional example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU, and CLB specifications. Serverless example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "internetSlb"))

    @internet_slb.setter
    def internet_slb(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f544a8914fdd3562ba2f8e283f050e62902dea850aa7915de71383f3d045a255)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "internetSlb", value)

    @builtins.property
    @jsii.member(jsii_name="managedEntryNetworkType")
    def managed_entry_network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        managedEntryNetworkType: Gateway entrance type (applicable to the mse_premium instance)
        pubnet: public network
        privatenet: privatenet
        privatepubnet: public + private network
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "managedEntryNetworkType"))

    @managed_entry_network_type.setter
    def managed_entry_network_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__903ae12f0de7d8ccf342d9cd4bacabf7cdd346a2a95bbbfe3c63da2faae04175)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "managedEntryNetworkType", value)

    @builtins.property
    @jsii.member(jsii_name="mserVersion")
    def mser_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        mserVersion: The MSE gateway instance type. Valid values:
        mse_pro: normal instance
        mse_premium: professional normal instancemse_serverless: serverless instance
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "mserVersion"))

    @mser_version.setter
    def mser_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e4f9d4d2ce73b45c3ffe3da160b14304f0992ad277b17d19da2cfe238a2c38e8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "mserVersion", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: name: The name of the created gateway.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2201e18d03610330c03fe3207a7a4fb85ef7e800e0d8e5ee940b6ac80af334c1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="nlbNetworkType")
    def nlb_network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        nlbNetworkType: The network type of the Network Load Balancer (NLB) instance you specify when you purchase a serverless instance.
        pubnet: Internet
        privatenet: private network
        privatepubnet: Internet and private network
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "nlbNetworkType"))

    @nlb_network_type.setter
    def nlb_network_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__55490105143910fc70d06c3451f371db2c75ed77d3890309bb6558ca3e4ba677)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "nlbNetworkType", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3. This parameter is Only valid when updating from postpaid instance to prepaid instance.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c94312abd5987a5209479bf74e2e4c1f732aaa91b544ee966dd787a9c6764304)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="periodUnit")
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: periodUnit: Charge period for created instances. This parameter is only valid when updating from postpaid instance to prepaid instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "periodUnit"))

    @period_unit.setter
    def period_unit(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e6f5ae5e4ed21eb960d51c58c0d42c4923011aeb9b7990087da3f97c1b1e34ac)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "periodUnit", value)

    @builtins.property
    @jsii.member(jsii_name="replica")
    def replica(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: replica: The number of nodes you specify when you purchase an normal instance. For high availability, the value for this param is recommended to be greater than 2.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "replica"))

    @replica.setter
    def replica(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f9de558c74570a4a8cf8932c2ff8942fb2837d799266ffdaf25aef663298f4d3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "replica", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3b676f46bcfb59780c4d5b947b24149df578e4ca81a9315ac8102d091bd79867)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="slbSpec")
    def slb_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        slbSpec: Private network SLB specifications (for normal instances).
        Simple type (slb.s1.small)
        Standard type 1 (slb.s2.small)
        Standard type I(slb.s2.medium)
        Advanced Type 1 (slb.s3.small)
        Advanced I(slb.s3.medium)
        Super strong type I (slb.s3.large)
        Description Traditional example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU, and CLB specifications. Serverless example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "slbSpec"))

    @slb_spec.setter
    def slb_spec(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9f40f5435879483c62db91f01dfaf5794f135fe2fb6b5c8b1d80c1efc545d328)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "slbSpec", value)

    @builtins.property
    @jsii.member(jsii_name="spec")
    def spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        spec: The node specifications you specify when you purchase an normal instance. Valid values:
        MSE_GTW_16_32_200_c(16C32G)
        MSE_GTW_2_4_200_c(2C4G)
        MSE_GTW_4_8_200_c(4C8G)
        MSE_GTW_8_16_200_c(8C16G)
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "spec"))

    @spec.setter
    def spec(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fb211fb68fd39fe4455ac8735ff3f3e6fe0f4f0016e4049cd3b5c3b06b492a05)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "spec", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosGateway2.TagsProperty"]]:
        '''
        :Property: tags: The list of tags in the form of key/value pairs. You can define a maximum of 20 tags.
        '''
        return typing.cast(typing.Optional[typing.List["RosGateway2.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosGateway2.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b8c6d56367c7eb6f045e21ca59fd6eeb43a42d7b0fe9c10d884aa9a6116c159a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The primary VSwitch ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8c13a941d41d0b044c894095fdd92d91666c1865869298b4d70b9a8f8846b852)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId2")
    def v_switch_id2(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId2: The secondary VSwitch ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vSwitchId2"))

    @v_switch_id2.setter
    def v_switch_id2(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6639b0d8768ed4b49d72a7763dc80cfe707a3e8681e0f1415dafef6567d9e8ca)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId2", value)

    @builtins.property
    @jsii.member(jsii_name="xtraceRatio")
    def xtrace_ratio(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: xtraceRatio: The sampling rate of Tracing Analysis. Valid values: [1,100]
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "xtraceRatio"))

    @xtrace_ratio.setter
    def xtrace_ratio(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e62ca04c6bd7129afcdcdcdc1c00d3a1e5a6f208cc47f8132df8c12fe739c781)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "xtraceRatio", value)

    @builtins.property
    @jsii.member(jsii_name="zoneInfo")
    def zone_info(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGateway2.ZoneInfoProperty"]]]]:
        '''
        :Property: zoneInfo: The info details of the available zone.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGateway2.ZoneInfoProperty"]]]], jsii.get(self, "zoneInfo"))

    @zone_info.setter
    def zone_info(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGateway2.ZoneInfoProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4e28ee438e4668092af969713475d2dc87dcec26fb7bab4ba184a2c8c5917e65)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneInfo", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-mse.RosGateway2.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__03c85e91d950669259e716dc37fa525f999002f3e626e2d1749b0ca8d550c5ff)
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
            return "TagsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-mse.RosGateway2.ZoneInfoProperty",
        jsii_struct_bases=[],
        name_mapping={"v_switch_id": "vSwitchId", "zone_id": "zoneId"},
    )
    class ZoneInfoProperty:
        def __init__(
            self,
            *,
            v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param v_switch_id: 
            :param zone_id: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__7abc2895eb2381603ec2c8163e22d62ec172cd97358bfaa8b036d03c12d25070)
                check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
                check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if v_switch_id is not None:
                self._values["v_switch_id"] = v_switch_id
            if zone_id is not None:
                self._values["zone_id"] = zone_id

        @builtins.property
        def v_switch_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: vSwitchId: The id of the VSwitch.
            '''
            result = self._values.get("v_switch_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def zone_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: zoneId: The id of the zone.
            '''
            result = self._values.get("zone_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ZoneInfoProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mse.RosGateway2Props",
    jsii_struct_bases=[],
    name_mapping={
        "vpc_id": "vpcId",
        "accept_language": "acceptLanguage",
        "charge_type": "chargeType",
        "clb_network_type": "clbNetworkType",
        "enable_hardware_acceleration": "enableHardwareAcceleration",
        "enable_sls": "enableSls",
        "enable_xtrace": "enableXtrace",
        "enterprise_security_group": "enterpriseSecurityGroup",
        "internet_slb": "internetSlb",
        "managed_entry_network_type": "managedEntryNetworkType",
        "mser_version": "mserVersion",
        "name": "name",
        "nlb_network_type": "nlbNetworkType",
        "period": "period",
        "period_unit": "periodUnit",
        "replica": "replica",
        "resource_group_id": "resourceGroupId",
        "slb_spec": "slbSpec",
        "spec": "spec",
        "tags": "tags",
        "v_switch_id": "vSwitchId",
        "v_switch_id2": "vSwitchId2",
        "xtrace_ratio": "xtraceRatio",
        "zone_info": "zoneInfo",
    },
)
class RosGateway2Props:
    def __init__(
        self,
        *,
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        accept_language: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        clb_network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_hardware_acceleration: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_sls: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_xtrace: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enterprise_security_group: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        internet_slb: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        managed_entry_network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        mser_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        nlb_network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        replica: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        slb_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosGateway2.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id2: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        xtrace_ratio: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGateway2.ZoneInfoProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosGateway2``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gateway2

        :param vpc_id: 
        :param accept_language: 
        :param charge_type: 
        :param clb_network_type: 
        :param enable_hardware_acceleration: 
        :param enable_sls: 
        :param enable_xtrace: 
        :param enterprise_security_group: 
        :param internet_slb: 
        :param managed_entry_network_type: 
        :param mser_version: 
        :param name: 
        :param nlb_network_type: 
        :param period: 
        :param period_unit: 
        :param replica: 
        :param resource_group_id: 
        :param slb_spec: 
        :param spec: 
        :param tags: 
        :param v_switch_id: 
        :param v_switch_id2: 
        :param xtrace_ratio: 
        :param zone_info: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b0162674b79be147f4c66f354b3add248c7fe4d60b89802664a5fd64c6212523)
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument accept_language", value=accept_language, expected_type=type_hints["accept_language"])
            check_type(argname="argument charge_type", value=charge_type, expected_type=type_hints["charge_type"])
            check_type(argname="argument clb_network_type", value=clb_network_type, expected_type=type_hints["clb_network_type"])
            check_type(argname="argument enable_hardware_acceleration", value=enable_hardware_acceleration, expected_type=type_hints["enable_hardware_acceleration"])
            check_type(argname="argument enable_sls", value=enable_sls, expected_type=type_hints["enable_sls"])
            check_type(argname="argument enable_xtrace", value=enable_xtrace, expected_type=type_hints["enable_xtrace"])
            check_type(argname="argument enterprise_security_group", value=enterprise_security_group, expected_type=type_hints["enterprise_security_group"])
            check_type(argname="argument internet_slb", value=internet_slb, expected_type=type_hints["internet_slb"])
            check_type(argname="argument managed_entry_network_type", value=managed_entry_network_type, expected_type=type_hints["managed_entry_network_type"])
            check_type(argname="argument mser_version", value=mser_version, expected_type=type_hints["mser_version"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument nlb_network_type", value=nlb_network_type, expected_type=type_hints["nlb_network_type"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument replica", value=replica, expected_type=type_hints["replica"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument slb_spec", value=slb_spec, expected_type=type_hints["slb_spec"])
            check_type(argname="argument spec", value=spec, expected_type=type_hints["spec"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument v_switch_id2", value=v_switch_id2, expected_type=type_hints["v_switch_id2"])
            check_type(argname="argument xtrace_ratio", value=xtrace_ratio, expected_type=type_hints["xtrace_ratio"])
            check_type(argname="argument zone_info", value=zone_info, expected_type=type_hints["zone_info"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "vpc_id": vpc_id,
        }
        if accept_language is not None:
            self._values["accept_language"] = accept_language
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if clb_network_type is not None:
            self._values["clb_network_type"] = clb_network_type
        if enable_hardware_acceleration is not None:
            self._values["enable_hardware_acceleration"] = enable_hardware_acceleration
        if enable_sls is not None:
            self._values["enable_sls"] = enable_sls
        if enable_xtrace is not None:
            self._values["enable_xtrace"] = enable_xtrace
        if enterprise_security_group is not None:
            self._values["enterprise_security_group"] = enterprise_security_group
        if internet_slb is not None:
            self._values["internet_slb"] = internet_slb
        if managed_entry_network_type is not None:
            self._values["managed_entry_network_type"] = managed_entry_network_type
        if mser_version is not None:
            self._values["mser_version"] = mser_version
        if name is not None:
            self._values["name"] = name
        if nlb_network_type is not None:
            self._values["nlb_network_type"] = nlb_network_type
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if replica is not None:
            self._values["replica"] = replica
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if slb_spec is not None:
            self._values["slb_spec"] = slb_spec
        if spec is not None:
            self._values["spec"] = spec
        if tags is not None:
            self._values["tags"] = tags
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if v_switch_id2 is not None:
            self._values["v_switch_id2"] = v_switch_id2
        if xtrace_ratio is not None:
            self._values["xtrace_ratio"] = xtrace_ratio
        if zone_info is not None:
            self._values["zone_info"] = zone_info

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: The ID of the vpc.
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def accept_language(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        acceptLanguage: The language of the response. Valid values:
        zh: Chinese
        en: English
        '''
        result = self._values.get("accept_language")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        chargeType: The billing method you specify when you purchase an normal instance.
        Valid values:
        PREPAY: subscription
        POSTPAY: pay-as-you-go
        '''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def clb_network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        clbNetworkType: The network type of the purchased Classic Load Balancer (CLB) instance that is billed based on LCUs.
        pubnet: Internet
        privatenet: private network
        privatepubnet: Internet and private network
        '''
        result = self._values.get("clb_network_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_hardware_acceleration(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enableHardwareAcceleration: Specifies whether to activate Tracing Analysis.
        '''
        result = self._values.get("enable_hardware_acceleration")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_sls(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enableSls: Specifies whether to activate Log Service.
        '''
        result = self._values.get("enable_sls")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_xtrace(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enableXtrace: Whether to activate Tracing Analysis.
        '''
        result = self._values.get("enable_xtrace")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enterprise_security_group(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enterpriseSecurityGroup: Specifies whether to enable hardware acceleration.
        '''
        result = self._values.get("enterprise_security_group")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def internet_slb(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        internetSlb: Public network SLB specifications (for normal instances).
        Simple type (slb.s1.small)
        Standard type 1 (slb.s2.smal)
        Standard type I(slb.s2.medium)
        Advanced Type 1 (slb.s3.small)
        Advanced I(slb.s3.medium)
        Super strong type I (slb.s3.large)
        Description Traditional example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU, and CLB specifications. Serverless example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU
        '''
        result = self._values.get("internet_slb")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def managed_entry_network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        managedEntryNetworkType: Gateway entrance type (applicable to the mse_premium instance)
        pubnet: public network
        privatenet: privatenet
        privatepubnet: public + private network
        '''
        result = self._values.get("managed_entry_network_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def mser_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        mserVersion: The MSE gateway instance type. Valid values:
        mse_pro: normal instance
        mse_premium: professional normal instancemse_serverless: serverless instance
        '''
        result = self._values.get("mser_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: name: The name of the created gateway.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def nlb_network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        nlbNetworkType: The network type of the Network Load Balancer (NLB) instance you specify when you purchase a serverless instance.
        pubnet: Internet
        privatenet: private network
        privatepubnet: Internet and private network
        '''
        result = self._values.get("nlb_network_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3. This parameter is Only valid when updating from postpaid instance to prepaid instance.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: periodUnit: Charge period for created instances. This parameter is only valid when updating from postpaid instance to prepaid instance.
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def replica(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: replica: The number of nodes you specify when you purchase an normal instance. For high availability, the value for this param is recommended to be greater than 2.
        '''
        result = self._values.get("replica")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def slb_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        slbSpec: Private network SLB specifications (for normal instances).
        Simple type (slb.s1.small)
        Standard type 1 (slb.s2.small)
        Standard type I(slb.s2.medium)
        Advanced Type 1 (slb.s3.small)
        Advanced I(slb.s3.medium)
        Super strong type I (slb.s3.large)
        Description Traditional example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU, and CLB specifications. Serverless example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU
        '''
        result = self._values.get("slb_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        spec: The node specifications you specify when you purchase an normal instance. Valid values:
        MSE_GTW_16_32_200_c(16C32G)
        MSE_GTW_2_4_200_c(2C4G)
        MSE_GTW_4_8_200_c(4C8G)
        MSE_GTW_8_16_200_c(8C16G)
        '''
        result = self._values.get("spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosGateway2.TagsProperty]]:
        '''
        :Property: tags: The list of tags in the form of key/value pairs. You can define a maximum of 20 tags.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosGateway2.TagsProperty]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The primary VSwitch ID.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id2(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId2: The secondary VSwitch ID.
        '''
        result = self._values.get("v_switch_id2")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def xtrace_ratio(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: xtraceRatio: The sampling rate of Tracing Analysis. Valid values: [1,100]
        '''
        result = self._values.get("xtrace_ratio")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_info(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosGateway2.ZoneInfoProperty]]]]:
        '''
        :Property: zoneInfo: The info details of the available zone.
        '''
        result = self._values.get("zone_info")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosGateway2.ZoneInfoProperty]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosGateway2Props(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


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
        '''Properties for defining a ``RosGateway``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gateway

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
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::MSE::NacosConfig``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``NacosConfig`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-nacosconfig
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosNacosConfigProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
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
        '''Properties for defining a ``RosNacosConfig``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-nacosconfig

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
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::MSE::NacosService``, which is used to create a Nacos service.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``NacosService`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-nacosservice
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosNacosServiceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
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
        '''Properties for defining a ``RosNacosService``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-nacosservice

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


class RosServiceSource(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mse.RosServiceSource",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::MSE::ServiceSource``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ServiceSource`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-servicesource
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosServiceSourceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3345ea87ee7aafe90b42f7ca3df2d1ca4d078e148ef39496e322ae24e0419db8)
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
            type_hints = typing.get_type_hints(_typecheckingstub__6f74d493a90b917c6d3144cdc5ae98569dccda03f804edfb45feb5e4b6e17176)
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
        :Attribute: Address: Registration Address. If not specified, it will be automatically generated based on the selected instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrGatewayUniqueId")
    def attr_gateway_unique_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GatewayUniqueId: The unique ID of the gateway.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGatewayUniqueId"))

    @builtins.property
    @jsii.member(jsii_name="attrId")
    def attr_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Id: The ID of service source.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrId"))

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        Name: The name.
        If Type is set to K8S, this parameter specifies the name of the ACK cluster.
        If Type is set to NACOS, this parameter specifies the ID of the Nacos instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrName"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__1c97307fba30c8251cf1ffcdbb784a310f6dd5c194b3f0d6d433c838e307c3b0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="gatewayUniqueId")
    def gateway_unique_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: gatewayUniqueId: The unique ID of the gateway.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "gatewayUniqueId"))

    @gateway_unique_id.setter
    def gateway_unique_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ecba0bab1ef871cfa63d33db3b0a8532c6c1ce0ec7daf57c08ff0ffb1d65d84b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "gatewayUniqueId", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        name: The name.
        If Source=K8S, this parameter specifies the name of the ACK cluster.
        If Source=MSE, this parameter specifies the ID of the Nacos instance.
        If Source=MSE_ZK, this parameter specifies the ID of the ZooKeeper instance.
        If Source=EDAS, this parameter specifies the ID of the EDAS namespace.
        If Source=SAE, this parameter specifies the ID of the SAE namespace.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__746701b873a31982116ce559841b6d894865620bca354052b913523d9d44fe47)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="source")
    def source(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        source: The service source. Valid values:
        K8S: ACK cluster
        MSE: MSE Nacos instance
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "source"))

    @source.setter
    def source(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__28f80766117b74ffa1ed73e7994a0ded511f4a92e0593fc000c9167c1b2da7ac)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "source", value)

    @builtins.property
    @jsii.member(jsii_name="address")
    def address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: address: Registration Address. If not specified, it will be automatically generated based on the selected instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "address"))

    @address.setter
    def address(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__848a3cd197f5eef2fafe2bab40dde3f9ab18e12b514c1302663676550fa29b2c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "address", value)

    @builtins.property
    @jsii.member(jsii_name="groupList")
    def group_list(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groupList: The list of service groups. This is required when Source=EDAS.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "groupList"))

    @group_list.setter
    def group_list(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3764c5f3d0052c4776098106b9d2a2b0aa292b91a6850fccb00598205811f79e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupList", value)

    @builtins.property
    @jsii.member(jsii_name="ingressOptions")
    def ingress_options(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosServiceSource.IngressOptionsProperty"]]:
        '''
        :Property: ingressOptions: The Ingress configuration.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosServiceSource.IngressOptionsProperty"]], jsii.get(self, "ingressOptions"))

    @ingress_options.setter
    def ingress_options(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosServiceSource.IngressOptionsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6efa2a848d23e2fe044b0589d86c304089b2b047791a142b3018c944ab39db6e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ingressOptions", value)

    @builtins.property
    @jsii.member(jsii_name="pathList")
    def path_list(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: pathList: An array of service root paths.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "pathList"))

    @path_list.setter
    def path_list(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e2ea1921a4033ac2fdb3327381ff3f05bd9a07bdab04052ffb6e8402465a8b80)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "pathList", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-mse.RosServiceSource.IngressOptionsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "enable_ingress": "enableIngress",
            "enable_status": "enableStatus",
            "ingress_class": "ingressClass",
            "watch_namespace": "watchNamespace",
        },
    )
    class IngressOptionsProperty:
        def __init__(
            self,
            *,
            enable_ingress: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            enable_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            ingress_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            watch_namespace: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param enable_ingress: 
            :param enable_status: 
            :param ingress_class: 
            :param watch_namespace: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__02a9dbcea7766d47c3d3fdb0e45342369886c80fc856e7a8def1e218b3fd1488)
                check_type(argname="argument enable_ingress", value=enable_ingress, expected_type=type_hints["enable_ingress"])
                check_type(argname="argument enable_status", value=enable_status, expected_type=type_hints["enable_status"])
                check_type(argname="argument ingress_class", value=ingress_class, expected_type=type_hints["ingress_class"])
                check_type(argname="argument watch_namespace", value=watch_namespace, expected_type=type_hints["watch_namespace"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if enable_ingress is not None:
                self._values["enable_ingress"] = enable_ingress
            if enable_status is not None:
                self._values["enable_status"] = enable_status
            if ingress_class is not None:
                self._values["ingress_class"] = ingress_class
            if watch_namespace is not None:
                self._values["watch_namespace"] = watch_namespace

        @builtins.property
        def enable_ingress(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: enableIngress: Specifies whether to enable Ingress.
            '''
            result = self._values.get("enable_ingress")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def enable_status(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: enableStatus: Specifies whether to update the Ingress status.
            '''
            result = self._values.get("enable_status")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def ingress_class(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ingressClass: Specifies whether to monitor Ingress classes.
            '''
            result = self._values.get("ingress_class")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def watch_namespace(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: watchNamespace: The namespace whose resources you want to monitor.
            '''
            result = self._values.get("watch_namespace")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "IngressOptionsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mse.RosServiceSourceProps",
    jsii_struct_bases=[],
    name_mapping={
        "gateway_unique_id": "gatewayUniqueId",
        "name": "name",
        "source": "source",
        "address": "address",
        "group_list": "groupList",
        "ingress_options": "ingressOptions",
        "path_list": "pathList",
    },
)
class RosServiceSourceProps:
    def __init__(
        self,
        *,
        gateway_unique_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        group_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ingress_options: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosServiceSource.IngressOptionsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        path_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosServiceSource``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-servicesource

        :param gateway_unique_id: 
        :param name: 
        :param source: 
        :param address: 
        :param group_list: 
        :param ingress_options: 
        :param path_list: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6e1efd41eb5146d67e76c46dd8154b308a219e336080bdbdd4cca0df87e21aa5)
            check_type(argname="argument gateway_unique_id", value=gateway_unique_id, expected_type=type_hints["gateway_unique_id"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument source", value=source, expected_type=type_hints["source"])
            check_type(argname="argument address", value=address, expected_type=type_hints["address"])
            check_type(argname="argument group_list", value=group_list, expected_type=type_hints["group_list"])
            check_type(argname="argument ingress_options", value=ingress_options, expected_type=type_hints["ingress_options"])
            check_type(argname="argument path_list", value=path_list, expected_type=type_hints["path_list"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "gateway_unique_id": gateway_unique_id,
            "name": name,
            "source": source,
        }
        if address is not None:
            self._values["address"] = address
        if group_list is not None:
            self._values["group_list"] = group_list
        if ingress_options is not None:
            self._values["ingress_options"] = ingress_options
        if path_list is not None:
            self._values["path_list"] = path_list

    @builtins.property
    def gateway_unique_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: gatewayUniqueId: The unique ID of the gateway.
        '''
        result = self._values.get("gateway_unique_id")
        assert result is not None, "Required property 'gateway_unique_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        name: The name.
        If Source=K8S, this parameter specifies the name of the ACK cluster.
        If Source=MSE, this parameter specifies the ID of the Nacos instance.
        If Source=MSE_ZK, this parameter specifies the ID of the ZooKeeper instance.
        If Source=EDAS, this parameter specifies the ID of the EDAS namespace.
        If Source=SAE, this parameter specifies the ID of the SAE namespace.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        source: The service source. Valid values:
        K8S: ACK cluster
        MSE: MSE Nacos instance
        '''
        result = self._values.get("source")
        assert result is not None, "Required property 'source' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: address: Registration Address. If not specified, it will be automatically generated based on the selected instance.
        '''
        result = self._values.get("address")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def group_list(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groupList: The list of service groups. This is required when Source=EDAS.
        '''
        result = self._values.get("group_list")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ingress_options(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosServiceSource.IngressOptionsProperty]]:
        '''
        :Property: ingressOptions: The Ingress configuration.
        '''
        result = self._values.get("ingress_options")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosServiceSource.IngressOptionsProperty]], result)

    @builtins.property
    def path_list(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: pathList: An array of service root paths.
        '''
        result = self._values.get("path_list")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosServiceSourceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IServiceSource)
class ServiceSource(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mse.ServiceSource",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::MSE::ServiceSource``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosServiceSource``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-servicesource
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ServiceSourceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4e33bc40958e1987a9d2b7e6fdd1eb06faa89795ab979cea472d3397ed469703)
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
        '''Attribute Address: Registration Address.

        If not specified, it will be automatically generated based on the selected instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrGatewayUniqueId")
    def attr_gateway_unique_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GatewayUniqueId: The unique ID of the gateway.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGatewayUniqueId"))

    @builtins.property
    @jsii.member(jsii_name="attrId")
    def attr_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Id: The ID of service source.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrId"))

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Name: The name.

        If Type is set to K8S, this parameter specifies the name of the ACK cluster.
        If Type is set to NACOS, this parameter specifies the ID of the Nacos instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ServiceSourceProps":
        return typing.cast("ServiceSourceProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9159766479dbbf0a01204ed3aa0db06156abe32e8bd88717c62464fe12b5fc0c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__514f5a6e3925c530e25c5e555e5e2c7b83936d7e7380237501d51f79b6c26859)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__acdc5da36e224db1b9794ae1d83870820ebd92f3191621e48a3fc59026b26d2b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mse.ServiceSourceProps",
    jsii_struct_bases=[],
    name_mapping={
        "gateway_unique_id": "gatewayUniqueId",
        "name": "name",
        "source": "source",
        "address": "address",
        "group_list": "groupList",
        "ingress_options": "ingressOptions",
        "path_list": "pathList",
    },
)
class ServiceSourceProps:
    def __init__(
        self,
        *,
        gateway_unique_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        group_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ingress_options: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosServiceSource.IngressOptionsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        path_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ServiceSource``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-servicesource

        :param gateway_unique_id: Property gatewayUniqueId: The unique ID of the gateway.
        :param name: Property name: The name. If Source=K8S, this parameter specifies the name of the ACK cluster. If Source=MSE, this parameter specifies the ID of the Nacos instance. If Source=MSE_ZK, this parameter specifies the ID of the ZooKeeper instance. If Source=EDAS, this parameter specifies the ID of the EDAS namespace. If Source=SAE, this parameter specifies the ID of the SAE namespace.
        :param source: Property source: The service source. Valid values: K8S: ACK cluster MSE: MSE Nacos instance
        :param address: Property address: Registration Address. If not specified, it will be automatically generated based on the selected instance.
        :param group_list: Property groupList: The list of service groups. This is required when Source=EDAS.
        :param ingress_options: Property ingressOptions: The Ingress configuration.
        :param path_list: Property pathList: An array of service root paths.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5fe5875d6110b49d8a09dda395507115e2825cfa4170e70aeac4daad81735a4c)
            check_type(argname="argument gateway_unique_id", value=gateway_unique_id, expected_type=type_hints["gateway_unique_id"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument source", value=source, expected_type=type_hints["source"])
            check_type(argname="argument address", value=address, expected_type=type_hints["address"])
            check_type(argname="argument group_list", value=group_list, expected_type=type_hints["group_list"])
            check_type(argname="argument ingress_options", value=ingress_options, expected_type=type_hints["ingress_options"])
            check_type(argname="argument path_list", value=path_list, expected_type=type_hints["path_list"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "gateway_unique_id": gateway_unique_id,
            "name": name,
            "source": source,
        }
        if address is not None:
            self._values["address"] = address
        if group_list is not None:
            self._values["group_list"] = group_list
        if ingress_options is not None:
            self._values["ingress_options"] = ingress_options
        if path_list is not None:
            self._values["path_list"] = path_list

    @builtins.property
    def gateway_unique_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property gatewayUniqueId: The unique ID of the gateway.'''
        result = self._values.get("gateway_unique_id")
        assert result is not None, "Required property 'gateway_unique_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property name: The name.

        If Source=K8S, this parameter specifies the name of the ACK cluster.
        If Source=MSE, this parameter specifies the ID of the Nacos instance.
        If Source=MSE_ZK, this parameter specifies the ID of the ZooKeeper instance.
        If Source=EDAS, this parameter specifies the ID of the EDAS namespace.
        If Source=SAE, this parameter specifies the ID of the SAE namespace.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property source: The service source.

        Valid values:
        K8S: ACK cluster
        MSE: MSE Nacos instance
        '''
        result = self._values.get("source")
        assert result is not None, "Required property 'source' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property address: Registration Address.

        If not specified, it will be automatically generated based on the selected instance.
        '''
        result = self._values.get("address")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def group_list(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property groupList: The list of service groups.

        This is required when Source=EDAS.
        '''
        result = self._values.get("group_list")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ingress_options(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosServiceSource.IngressOptionsProperty]]:
        '''Property ingressOptions: The Ingress configuration.'''
        result = self._values.get("ingress_options")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosServiceSource.IngressOptionsProperty]], result)

    @builtins.property
    def path_list(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property pathList: An array of service root paths.'''
        result = self._values.get("path_list")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ServiceSourceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(ICluster)
class Cluster(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mse.Cluster",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::MSE::Cluster``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosCluster``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-cluster
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[ClusterProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

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
    def attr_acl_entry_list(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AclEntryList: The public network whitelist list is used only when the public network is enabled.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAclEntryList"))

    @builtins.property
    @jsii.member(jsii_name="attrAclId")
    def attr_acl_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AclId: acl id.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAclId"))

    @builtins.property
    @jsii.member(jsii_name="attrAppVersion")
    def attr_app_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AppVersion: app version.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAppVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterAliasName")
    def attr_cluster_alias_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterAliasName: cluster alias name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterAliasName"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterId: cluster id.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterName")
    def attr_cluster_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterName: cluster name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterName"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterSpecification")
    def attr_cluster_specification(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterSpecification: Cluster specifications.

        Note the msversion requirements of the version parameter,
        Optional parameters:
        "MSE_ SC *1_2_60_c",
        "MSE* SC *2_4_60_c",
        "MSE* SC *4_8_60_c",
        "MSE* SC *8_16_60_c",
        "MSE* SC _16_32_60_c"
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterSpecification"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterType")
    def attr_cluster_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterType: cluster type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterType"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterVersion")
    def attr_cluster_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterVersion: Cluster version, such as ZooKeeper_3_8_0,NACOS_2_0_0.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrConfigAuthEnabled")
    def attr_config_auth_enabled(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConfigAuthEnabled: Whether the configuration supports it.

        Valid values: true: false: not supported
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConfigAuthEnabled"))

    @builtins.property
    @jsii.member(jsii_name="attrConfigSecretEnabled")
    def attr_config_secret_enabled(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConfigSecretEnabled: Whether the configuration password takes effect.

        The value is as follows: true: valid false: not valid
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConfigSecretEnabled"))

    @builtins.property
    @jsii.member(jsii_name="attrConnectionType")
    def attr_connection_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConnectionType: network connect type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConnectionType"))

    @builtins.property
    @jsii.member(jsii_name="attrCpu")
    def attr_cpu(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Cpu: cpu core size.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCpu"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskCapacity")
    def attr_disk_capacity(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DiskCapacity: disk capacity, unit: G.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDiskCapacity"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskType")
    def attr_disk_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DiskType: disk type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDiskType"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthStatus")
    def attr_health_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthStatus: health status.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceCount")
    def attr_instance_count(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceCount: instance count.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceCount"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: instance id.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetAddress")
    def attr_internet_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InternetAddress: internet address.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInternetAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetDomain")
    def attr_internet_domain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InternetDomain: internet domain.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInternetDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetPort")
    def attr_internet_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InternetPort: internet port.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInternetPort"))

    @builtins.property
    @jsii.member(jsii_name="attrIntranetAddress")
    def attr_intranet_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IntranetAddress: intranet address.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIntranetAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrIntranetDomain")
    def attr_intranet_domain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IntranetDomain: intranet domain.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIntranetDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrIntranetPort")
    def attr_intranet_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IntranetPort: intranet port.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIntranetPort"))

    @builtins.property
    @jsii.member(jsii_name="attrMcpEnabled")
    def attr_mcp_enabled(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MCPEnabled: Whether MCP takes effect, the value is as follows: true: valid false: not valid.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMcpEnabled"))

    @builtins.property
    @jsii.member(jsii_name="attrMemoryCapacity")
    def attr_memory_capacity(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MemoryCapacity: memory capacity.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMemoryCapacity"))

    @builtins.property
    @jsii.member(jsii_name="attrMseVersion")
    def attr_mse_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MseVersion: Required, the value is as follows:.

        -'mse_dev': indicates the development version.
        -'Mse_pro': means professional version. When this version is selected, the specification is 2c4g or above, and the specification is 3 nodes or above.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMseVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrNetType")
    def attr_net_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NetType: Network type (whether private network is enabled or not).

        privatenet indicates that private network is enabled.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNetType"))

    @builtins.property
    @jsii.member(jsii_name="attrPayInfo")
    def attr_pay_info(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PayInfo: pay info.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPayInfo"))

    @builtins.property
    @jsii.member(jsii_name="attrPubNetworkFlow")
    def attr_pub_network_flow(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PubNetworkFlow: Public network bandwidth.

        If the bandwidth is greater than 0, the public network is enabled.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPubNetworkFlow"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcId: vpc id.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VSwitchId: switcher Id.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ClusterProps:
        return typing.cast(ClusterProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ebf143c70802735416e14cedb04152e23143e6cf4c3d94d81f7bc23a7ed920a3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f9844cd457633ba5e793bc86b01a43e99a87650e2d6082ddf79d05284eef96f6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__90b206a7b857e9b3ae27b99a8cd7074868c1aebb15b1d5a7e4d52dbe5cc2922e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IEngineNamespace)
class EngineNamespace(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mse.EngineNamespace",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::MSE::EngineNamespace``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosEngineNamespace``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-enginenamespace
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[EngineNamespaceProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e49d11f626a9a9c39a182b29ff5332512b1bd42f0dcee547c43500fd6da15d16)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrNamespaceId")
    def attr_namespace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NamespaceId: The ID of the namespace.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNamespaceId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> EngineNamespaceProps:
        return typing.cast(EngineNamespaceProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__19b3118087a9e73c0a4abf5641e29b4d444f12612ee10c701344e23c187042c8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3460a505dd0a9cf834503dc522ca6aed081049af20a06fdfcd383d3d10770d58)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6bd21458ca2e3a321c8862d222d97369328d3a52212ccb453e664613a1399ba0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IGateway)
class Gateway(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mse.Gateway",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::MSE::Gateway``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosGateway``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gateway
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[GatewayProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

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
    def attr_backup_v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupVSwitchId: VSwitchId For Backup.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBackupVSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="attrGatewayUniqueId")
    def attr_gateway_unique_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GatewayUniqueId: Gateway unique identification.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGatewayUniqueId"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PaymentType: The payment type of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrReplica")
    def attr_replica(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Replica: Gateway Node Number.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrReplica"))

    @builtins.property
    @jsii.member(jsii_name="attrSpec")
    def attr_spec(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Spec: Gateway Node Specifications.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSpec"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcId: VpcId.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VSwitchId: VSwitchId.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> GatewayProps:
        return typing.cast(GatewayProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__99267164a41a0147afaebc49e3693abe2689fff0c24a3040355c85fb35d835fc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ced54d853031912d55b599498e86e48d4da06f9005400ec9a031a49edff43f3c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__69afc436ccf0a8b0ca6d4ffbd7a190bf552890442e6c81fced9fae62ed690808)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IGateway2)
class Gateway2(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mse.Gateway2",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::MSE::Gateway2``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosGateway2``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gateway2
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[Gateway2Props, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__396e6eac79d89de6c03b410adc1503e75ce55e0b262329a23503c557cef428b5)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrGatewayUniqueId")
    def attr_gateway_unique_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GatewayUniqueId: The unique ID of the gateway.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGatewayUniqueId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> Gateway2Props:
        return typing.cast(Gateway2Props, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__99ace15a37d74f805667741af41ad02353e9ebfaea67f41549b77fad6701ac05)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c6ee261b6fa61cab77d13aa420e39befd44010a05022260fdb5f29a36c709dbc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ba9cd8469df9f6edbf744450d340dca223ba485ca28a7afe6f250d6e1bc23bd9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "Cluster",
    "ClusterProps",
    "EngineNamespace",
    "EngineNamespaceProps",
    "Gateway",
    "Gateway2",
    "Gateway2Props",
    "GatewayProps",
    "ICluster",
    "IEngineNamespace",
    "IGateway",
    "IGateway2",
    "INacosConfig",
    "INacosService",
    "IServiceSource",
    "NacosConfig",
    "NacosConfigProps",
    "NacosService",
    "NacosServiceProps",
    "RosCluster",
    "RosClusterProps",
    "RosEngineNamespace",
    "RosEngineNamespaceProps",
    "RosGateway",
    "RosGateway2",
    "RosGateway2Props",
    "RosGatewayProps",
    "RosNacosConfig",
    "RosNacosConfigProps",
    "RosNacosService",
    "RosNacosServiceProps",
    "RosServiceSource",
    "RosServiceSourceProps",
    "ServiceSource",
    "ServiceSourceProps",
    "datasource",
]

publication.publish()

# Loading modules to ensure their types are registered with the jsii runtime library
from . import datasource

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
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosCluster.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ae95b9d1c5819ff82c11eded77de97b23c3f68f5e8d40376ff358910f1109e2d(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    identity: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f9ad5809257b5d9f49e03d473243bebf37a18c163089c223250d390f01b69739(
    *,
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    accept_language: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    clb_network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_hardware_acceleration: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_sls: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_xtrace: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enterprise_security_group: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    internet_slb: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    managed_entry_network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mser_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    nlb_network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    replica: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    slb_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosGateway2.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id2: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    xtrace_ratio: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGateway2.ZoneInfoProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
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

def _typecheckingstub__1083442f5ba3c78fe9d320ef7923412fe646e09ef4b4389b37125e18b98d34c5(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0d40f7bd73b7e4515e94f70e5b7a23015ecfd7cd5ba775556c938b598562ef9e(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ef34b4ac0ce2569e1c6201887ba2876aac5fb2f0348b403debf95e55c33e3ba4(
    value: _ros_cdk_core_7adfd82f.Construct,
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

def _typecheckingstub__9b72304516e904eefd218659923b1dbec7e929591cba526acde572d94cc71758(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__467bc2fc836c2bcacba64ddc36111374e493d4e388b517d334151757ab50f1d5(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ba50f6c5d5ee142d8a8bc98a87b5b6ea1ad3ab210cbcbf6d783cafe015231926(
    value: _ros_cdk_core_7adfd82f.Construct,
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

def _typecheckingstub__a1bbb8e6191a4172953a5eccf5d2c426d5cf5ac6da6ab1caeab579ad27fbd3b7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6bed81671ef303902c4e0bc6c79df21de7f92b9a7ba6909fa5cb98c958e4c43e(
    value: typing.Optional[typing.List[RosCluster.TagsProperty]],
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

def _typecheckingstub__31a06c6728c84f611f6f6856004fb510a76e602385ef667056aa0f3068dd7e43(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosCluster.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__956619f383d5dff09236b8f679814d92e54a8b3b14b792e0a5c491f53df4d9a5(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosEngineNamespaceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__39eff009aa4ba3280465d5d299dd453d03d556199eb4b7044708e7ccf3fbc972(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f9510e546ce3e7990c360d4f33d591d536c601a97514078b50658125144ea9f9(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3d52e2250ba38230e996cb859933422955376049e9707f24139bd01a02579edb(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0272e0296f6b89689de6382955f0185020815a5aec4875c87ff7c1a761d54219(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__234948a278a365520de1f340d5b725171f62a5f41aa4d5587e2def031429de37(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__878e4a05e8f809fb83a86815f99b52c2ca48e74bc86e3d56f1737a45c4a293a7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__61a2f7d7e1a72c5f44e1478fec5c629b1132f5c1a46f7de10adf2895dd2cc35b(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    identity: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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

def _typecheckingstub__e2c33faa2aab9ccc4639e3bd2697422aa8bbaf92217514cbab444c7a588df781(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosGateway2Props, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eb03574400296b9b031b87458ada4184ba8c39ef9d4f28b953bfb2b1bd24b857(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1d34d271f03d97a7dffbca61dea9c1a145e05c94457073ac093046d458afb4fa(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__74a9c4d3ef1155a466dc19febae5293abae5c1e437e71fdf007cab96445fb0d8(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e6bbdedbde169e2d99cd77a71a7da6214a664ec3d6e04bc620ba3e9cd2237c7f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0ea73a78af1225d9921e614b9afd505b13c32a6b1c34e5e4afaedb75e34b2450(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0fdb6363665c18bf4aa10352e83b2e415a4f825e64179bfbec4b13bc8c0134ab(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2a9824fde2cc42fba86f7d9bdd7d03400e51038ab54c2a1afbdba403b8658271(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__48ffba05b0f2a26a67109fe898b8b879797402724b2e76f005e1ef3adb5d740f(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8bcd2ad8ea90a171fa33129f78cfc7f2947f4382aa9d502d6ebf41efa3bd194b(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fb18236a37ae1d00a6ffa484be459f88a83b156bb2aa1dc055be93b838abf2fe(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f544a8914fdd3562ba2f8e283f050e62902dea850aa7915de71383f3d045a255(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__903ae12f0de7d8ccf342d9cd4bacabf7cdd346a2a95bbbfe3c63da2faae04175(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e4f9d4d2ce73b45c3ffe3da160b14304f0992ad277b17d19da2cfe238a2c38e8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2201e18d03610330c03fe3207a7a4fb85ef7e800e0d8e5ee940b6ac80af334c1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__55490105143910fc70d06c3451f371db2c75ed77d3890309bb6558ca3e4ba677(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c94312abd5987a5209479bf74e2e4c1f732aaa91b544ee966dd787a9c6764304(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e6f5ae5e4ed21eb960d51c58c0d42c4923011aeb9b7990087da3f97c1b1e34ac(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f9de558c74570a4a8cf8932c2ff8942fb2837d799266ffdaf25aef663298f4d3(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3b676f46bcfb59780c4d5b947b24149df578e4ca81a9315ac8102d091bd79867(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9f40f5435879483c62db91f01dfaf5794f135fe2fb6b5c8b1d80c1efc545d328(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fb211fb68fd39fe4455ac8735ff3f3e6fe0f4f0016e4049cd3b5c3b06b492a05(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b8c6d56367c7eb6f045e21ca59fd6eeb43a42d7b0fe9c10d884aa9a6116c159a(
    value: typing.Optional[typing.List[RosGateway2.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8c13a941d41d0b044c894095fdd92d91666c1865869298b4d70b9a8f8846b852(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6639b0d8768ed4b49d72a7763dc80cfe707a3e8681e0f1415dafef6567d9e8ca(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e62ca04c6bd7129afcdcdcdc1c00d3a1e5a6f208cc47f8132df8c12fe739c781(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4e28ee438e4668092af969713475d2dc87dcec26fb7bab4ba184a2c8c5917e65(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosGateway2.ZoneInfoProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__03c85e91d950669259e716dc37fa525f999002f3e626e2d1749b0ca8d550c5ff(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7abc2895eb2381603ec2c8163e22d62ec172cd97358bfaa8b036d03c12d25070(
    *,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b0162674b79be147f4c66f354b3add248c7fe4d60b89802664a5fd64c6212523(
    *,
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    accept_language: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    clb_network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_hardware_acceleration: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_sls: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_xtrace: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enterprise_security_group: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    internet_slb: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    managed_entry_network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mser_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    nlb_network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    replica: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    slb_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosGateway2.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id2: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    xtrace_ratio: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGateway2.ZoneInfoProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
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

def _typecheckingstub__3345ea87ee7aafe90b42f7ca3df2d1ca4d078e148ef39496e322ae24e0419db8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosServiceSourceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6f74d493a90b917c6d3144cdc5ae98569dccda03f804edfb45feb5e4b6e17176(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1c97307fba30c8251cf1ffcdbb784a310f6dd5c194b3f0d6d433c838e307c3b0(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ecba0bab1ef871cfa63d33db3b0a8532c6c1ce0ec7daf57c08ff0ffb1d65d84b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__746701b873a31982116ce559841b6d894865620bca354052b913523d9d44fe47(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__28f80766117b74ffa1ed73e7994a0ded511f4a92e0593fc000c9167c1b2da7ac(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__848a3cd197f5eef2fafe2bab40dde3f9ab18e12b514c1302663676550fa29b2c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3764c5f3d0052c4776098106b9d2a2b0aa292b91a6850fccb00598205811f79e(
    value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6efa2a848d23e2fe044b0589d86c304089b2b047791a142b3018c944ab39db6e(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosServiceSource.IngressOptionsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e2ea1921a4033ac2fdb3327381ff3f05bd9a07bdab04052ffb6e8402465a8b80(
    value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__02a9dbcea7766d47c3d3fdb0e45342369886c80fc856e7a8def1e218b3fd1488(
    *,
    enable_ingress: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ingress_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    watch_namespace: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6e1efd41eb5146d67e76c46dd8154b308a219e336080bdbdd4cca0df87e21aa5(
    *,
    gateway_unique_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    group_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ingress_options: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosServiceSource.IngressOptionsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    path_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4e33bc40958e1987a9d2b7e6fdd1eb06faa89795ab979cea472d3397ed469703(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ServiceSourceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9159766479dbbf0a01204ed3aa0db06156abe32e8bd88717c62464fe12b5fc0c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__514f5a6e3925c530e25c5e555e5e2c7b83936d7e7380237501d51f79b6c26859(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__acdc5da36e224db1b9794ae1d83870820ebd92f3191621e48a3fc59026b26d2b(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5fe5875d6110b49d8a09dda395507115e2825cfa4170e70aeac4daad81735a4c(
    *,
    gateway_unique_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    group_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ingress_options: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosServiceSource.IngressOptionsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    path_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8920f7274ca60d5c8c0eb0dbe17b34b420959f182f7eda8c4835591a1dc0db13(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ClusterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ebf143c70802735416e14cedb04152e23143e6cf4c3d94d81f7bc23a7ed920a3(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f9844cd457633ba5e793bc86b01a43e99a87650e2d6082ddf79d05284eef96f6(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__90b206a7b857e9b3ae27b99a8cd7074868c1aebb15b1d5a7e4d52dbe5cc2922e(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e49d11f626a9a9c39a182b29ff5332512b1bd42f0dcee547c43500fd6da15d16(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[EngineNamespaceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__19b3118087a9e73c0a4abf5641e29b4d444f12612ee10c701344e23c187042c8(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3460a505dd0a9cf834503dc522ca6aed081049af20a06fdfcd383d3d10770d58(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6bd21458ca2e3a321c8862d222d97369328d3a52212ccb453e664613a1399ba0(
    value: _ros_cdk_core_7adfd82f.Construct,
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

def _typecheckingstub__99267164a41a0147afaebc49e3693abe2689fff0c24a3040355c85fb35d835fc(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ced54d853031912d55b599498e86e48d4da06f9005400ec9a031a49edff43f3c(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__69afc436ccf0a8b0ca6d4ffbd7a190bf552890442e6c81fced9fae62ed690808(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__396e6eac79d89de6c03b410adc1503e75ce55e0b262329a23503c557cef428b5(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[Gateway2Props, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__99ace15a37d74f805667741af41ad02353e9ebfaea67f41549b77fad6701ac05(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c6ee261b6fa61cab77d13aa420e39befd44010a05022260fdb5f29a36c709dbc(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ba9cd8469df9f6edbf744450d340dca223ba485ca28a7afe6f250d6e1bc23bd9(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
