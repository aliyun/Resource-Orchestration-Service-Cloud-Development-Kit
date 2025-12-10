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
        "acl_entry_list": "aclEntryList",
        "charge_type": "chargeType",
        "cluster_alias_name": "clusterAliasName",
        "connection_type": "connectionType",
        "eip_enabled": "eipEnabled",
        "mse_version": "mseVersion",
        "pub_network_flow": "pubNetworkFlow",
        "request_pars": "requestPars",
        "resource_group_id": "resourceGroupId",
        "security_group_type": "securityGroupType",
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
        acl_entry_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cluster_alias_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        connection_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        eip_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        mse_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pub_network_flow: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        request_pars: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosCluster.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Cluster``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-cluster

        :param cluster_specification: Property clusterSpecification: Engine specification. [Professional Edition] - ``MSE_SC_2_4_60_c``: 2 cores 4GB - ``MSE_SC_1_2_60_c``: 1 core 2GB - ``MSE_SC_4_8_60_c``: 4 cores 8GB - ``MSE_SC_8_16_60_c``: 8 cores 16GB - ``MSE_SC_16_32_60_c``: 16 cores 32GB [Development Edition] - ``MSE_SC_1_2_60_c``: 1 core 2GB - ``MSE_SC_2_4_60_c``: 2 cores 4GB [Serverless Edition] - Ignore this parameter or fill with ``MSE_SC_SERVERLESS``.
        :param cluster_type: Property clusterType: Cluster type, including ZooKeeper, Nacos-Ans.
        :param cluster_version: Property clusterVersion: Cluster version. [Professional Edition] - ``NACOS_2_0_0``: Nacos 2.x.x version. - ``ZooKeeper_3_8_0``: ZooKeeper 3.8.x version. [Development Edition] - ``NACOS_2_0_0``: Nacos 2.x version. - ``ZooKeeper_3_8_0``: ZooKeeper 3.8.x version. [Serverless Edition] - ``NACOS_2_0_0``: Nacos 2.x version. - ``ZooKeeper_3_8_0``: ZooKeeper 3.8.x version.
        :param instance_count: Property instanceCount: Number of instance nodes. Range: 1~15. [Professional Edition] - Must be >=3 and odd number. [Development Edition] - Only 1 allowed. [Serverless Edition] - Ignore this parameter.
        :param net_type: Property netType: Network type. Valid values: - ``privatenet``: Private network. - ``pubnet``: Public network.
        :param acl_entry_list: Property aclEntryList: List of ACL entries.
        :param charge_type: Property chargeType: Billing mode, including PREPAY (annual/monthly) and POSTPAY (pay-as-you-go). Ignored for Serverless Edition.
        :param cluster_alias_name: Property clusterAliasName: cluster alias name.
        :param connection_type: Property connectionType: Network access type, ``slb`` or ``single_eni``; some regions only support ``single_eni`` for Development Edition.
        :param eip_enabled: Property eipEnabled: Effective when ConnectionType is ``single_eni``, indicates whether to enable public access (elastic IP).
        :param mse_version: Property mseVersion: Must be filled unless special circumstances. Valid values: - ``mse_pro``: Professional Edition. - ``mse_dev``: Development Edition. - ``mse_serverless``: Serverless Edition.
        :param pub_network_flow: Property pubNetworkFlow: Public network flow. Valid when ConnectionType is ``slb``. 0 means do not create public SLB; 1 or above indicates fixed bandwidth value in Mbps. Range: 0~5000.
        :param request_pars: Property requestPars: Extended request parameters in JSON format.
        :param resource_group_id: Property resourceGroupId: Resource group id.
        :param security_group_type: Property securityGroupType: Effective when ConnectionType is ``single_eni``, represents the security group type of the instance.
        :param tags: Property tags: Tags to attach to cluster. Max support 20 tags to add during create cluster. Each tag with two properties Key and Value, and Key is required.
        :param vpc_id: Property vpcId: VPC ID.
        :param v_switch_id: Property vSwitchId: Switch ID.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c3f61b7de5b8d98fccf402f2e7791aec91d15600817d870623464c556207ae26)
            check_type(argname="argument cluster_specification", value=cluster_specification, expected_type=type_hints["cluster_specification"])
            check_type(argname="argument cluster_type", value=cluster_type, expected_type=type_hints["cluster_type"])
            check_type(argname="argument cluster_version", value=cluster_version, expected_type=type_hints["cluster_version"])
            check_type(argname="argument instance_count", value=instance_count, expected_type=type_hints["instance_count"])
            check_type(argname="argument net_type", value=net_type, expected_type=type_hints["net_type"])
            check_type(argname="argument acl_entry_list", value=acl_entry_list, expected_type=type_hints["acl_entry_list"])
            check_type(argname="argument charge_type", value=charge_type, expected_type=type_hints["charge_type"])
            check_type(argname="argument cluster_alias_name", value=cluster_alias_name, expected_type=type_hints["cluster_alias_name"])
            check_type(argname="argument connection_type", value=connection_type, expected_type=type_hints["connection_type"])
            check_type(argname="argument eip_enabled", value=eip_enabled, expected_type=type_hints["eip_enabled"])
            check_type(argname="argument mse_version", value=mse_version, expected_type=type_hints["mse_version"])
            check_type(argname="argument pub_network_flow", value=pub_network_flow, expected_type=type_hints["pub_network_flow"])
            check_type(argname="argument request_pars", value=request_pars, expected_type=type_hints["request_pars"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument security_group_type", value=security_group_type, expected_type=type_hints["security_group_type"])
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
        if acl_entry_list is not None:
            self._values["acl_entry_list"] = acl_entry_list
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if cluster_alias_name is not None:
            self._values["cluster_alias_name"] = cluster_alias_name
        if connection_type is not None:
            self._values["connection_type"] = connection_type
        if eip_enabled is not None:
            self._values["eip_enabled"] = eip_enabled
        if mse_version is not None:
            self._values["mse_version"] = mse_version
        if pub_network_flow is not None:
            self._values["pub_network_flow"] = pub_network_flow
        if request_pars is not None:
            self._values["request_pars"] = request_pars
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if security_group_type is not None:
            self._values["security_group_type"] = security_group_type
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
        '''Property clusterSpecification: Engine specification.

        [Professional Edition]

        - ``MSE_SC_2_4_60_c``: 2 cores 4GB
        - ``MSE_SC_1_2_60_c``: 1 core 2GB
        - ``MSE_SC_4_8_60_c``: 4 cores 8GB
        - ``MSE_SC_8_16_60_c``: 8 cores 16GB
        - ``MSE_SC_16_32_60_c``: 16 cores 32GB

        [Development Edition]

        - ``MSE_SC_1_2_60_c``: 1 core 2GB
        - ``MSE_SC_2_4_60_c``: 2 cores 4GB

        [Serverless Edition]

        - Ignore this parameter or fill with ``MSE_SC_SERVERLESS``.
        '''
        result = self._values.get("cluster_specification")
        assert result is not None, "Required property 'cluster_specification' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cluster_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property clusterType: Cluster type, including ZooKeeper, Nacos-Ans.'''
        result = self._values.get("cluster_type")
        assert result is not None, "Required property 'cluster_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cluster_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property clusterVersion: Cluster version.

        [Professional Edition]

        - ``NACOS_2_0_0``: Nacos 2.x.x version.
        - ``ZooKeeper_3_8_0``: ZooKeeper 3.8.x version.

        [Development Edition]

        - ``NACOS_2_0_0``: Nacos 2.x version.
        - ``ZooKeeper_3_8_0``: ZooKeeper 3.8.x version.

        [Serverless Edition]

        - ``NACOS_2_0_0``: Nacos 2.x version.
        - ``ZooKeeper_3_8_0``: ZooKeeper 3.8.x version.
        '''
        result = self._values.get("cluster_version")
        assert result is not None, "Required property 'cluster_version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceCount: Number of instance nodes. Range: 1~15.

        [Professional Edition]

        - Must be >=3 and odd number.

        [Development Edition]

        - Only 1 allowed.

        [Serverless Edition]

        - Ignore this parameter.
        '''
        result = self._values.get("instance_count")
        assert result is not None, "Required property 'instance_count' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def net_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property netType: Network type.

        Valid values:

        - ``privatenet``: Private network.
        - ``pubnet``: Public network.
        '''
        result = self._values.get("net_type")
        assert result is not None, "Required property 'net_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def acl_entry_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property aclEntryList: List of ACL entries.'''
        result = self._values.get("acl_entry_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property chargeType: Billing mode, including PREPAY (annual/monthly) and POSTPAY (pay-as-you-go).

        Ignored for Serverless Edition.
        '''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
        '''Property connectionType: Network access type, ``slb`` or ``single_eni``;

        some regions only support ``single_eni`` for Development Edition.
        '''
        result = self._values.get("connection_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def eip_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property eipEnabled: Effective when ConnectionType is ``single_eni``, indicates whether to enable public access (elastic IP).'''
        result = self._values.get("eip_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def mse_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property mseVersion: Must be filled unless special circumstances.

        Valid values:

        - ``mse_pro``: Professional Edition.
        - ``mse_dev``: Development Edition.
        - ``mse_serverless``: Serverless Edition.
        '''
        result = self._values.get("mse_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pub_network_flow(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property pubNetworkFlow: Public network flow.

        Valid when ConnectionType is ``slb``. 0 means do not create public SLB; 1 or above indicates fixed bandwidth value in Mbps. Range: 0~5000.
        '''
        result = self._values.get("pub_network_flow")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def request_pars(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property requestPars: Extended request parameters in JSON format.'''
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
    def security_group_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property securityGroupType: Effective when ConnectionType is ``single_eni``, represents the security group type of the instance.'''
        result = self._values.get("security_group_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosCluster.TagsProperty"]]:
        '''Property tags: Tags to attach to cluster.

        Max support 20 tags to add during create cluster. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosCluster.TagsProperty"]], result)

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
        '''Property vSwitchId: Switch ID.'''
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
    jsii_type="@alicloud/ros-cdk-mse.GatewayDomainProps",
    jsii_struct_bases=[],
    name_mapping={
        "gateway_unique_id": "gatewayUniqueId",
        "name": "name",
        "protocol": "protocol",
        "cert_identifier": "certIdentifier",
        "http2": "http2",
        "must_https": "mustHttps",
        "tls_cipher_suites_config_json": "tlsCipherSuitesConfigJson",
        "tls_max": "tlsMax",
        "tls_min": "tlsMin",
    },
)
class GatewayDomainProps:
    def __init__(
        self,
        *,
        gateway_unique_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cert_identifier: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        http2: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        must_https: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tls_cipher_suites_config_json: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosGatewayDomain.TlsCipherSuitesConfigJSONProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        tls_max: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tls_min: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``GatewayDomain``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gatewaydomain

        :param gateway_unique_id: Property gatewayUniqueId: The unique identifier of the gateway.
        :param name: Property name: The domain name.
        :param protocol: Property protocol: The protocol type: HTTP, HTTPS.
        :param cert_identifier: Property certIdentifier: Certificate ID.
        :param http2: Property http2: Whether to enable Http2: open, close, globalConfig.
        :param must_https: Property mustHttps: Whether to enable HTTPS.
        :param tls_cipher_suites_config_json: Property tlsCipherSuitesConfigJson: TLS encryption suite configuration.
        :param tls_max: Property tlsMax: The maximum TLS version.
        :param tls_min: Property tlsMin: The minimum TLS version.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3dd7b0b573d20d44514e4311f050cb7025df6dd36c6310d88157ddac86e16261)
            check_type(argname="argument gateway_unique_id", value=gateway_unique_id, expected_type=type_hints["gateway_unique_id"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument protocol", value=protocol, expected_type=type_hints["protocol"])
            check_type(argname="argument cert_identifier", value=cert_identifier, expected_type=type_hints["cert_identifier"])
            check_type(argname="argument http2", value=http2, expected_type=type_hints["http2"])
            check_type(argname="argument must_https", value=must_https, expected_type=type_hints["must_https"])
            check_type(argname="argument tls_cipher_suites_config_json", value=tls_cipher_suites_config_json, expected_type=type_hints["tls_cipher_suites_config_json"])
            check_type(argname="argument tls_max", value=tls_max, expected_type=type_hints["tls_max"])
            check_type(argname="argument tls_min", value=tls_min, expected_type=type_hints["tls_min"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "gateway_unique_id": gateway_unique_id,
            "name": name,
            "protocol": protocol,
        }
        if cert_identifier is not None:
            self._values["cert_identifier"] = cert_identifier
        if http2 is not None:
            self._values["http2"] = http2
        if must_https is not None:
            self._values["must_https"] = must_https
        if tls_cipher_suites_config_json is not None:
            self._values["tls_cipher_suites_config_json"] = tls_cipher_suites_config_json
        if tls_max is not None:
            self._values["tls_max"] = tls_max
        if tls_min is not None:
            self._values["tls_min"] = tls_min

    @builtins.property
    def gateway_unique_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property gatewayUniqueId: The unique identifier of the gateway.'''
        result = self._values.get("gateway_unique_id")
        assert result is not None, "Required property 'gateway_unique_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property name: The domain name.'''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def protocol(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property protocol: The protocol type: HTTP, HTTPS.'''
        result = self._values.get("protocol")
        assert result is not None, "Required property 'protocol' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cert_identifier(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property certIdentifier: Certificate ID.'''
        result = self._values.get("cert_identifier")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def http2(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property http2: Whether to enable Http2: open, close, globalConfig.'''
        result = self._values.get("http2")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def must_https(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property mustHttps: Whether to enable HTTPS.'''
        result = self._values.get("must_https")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tls_cipher_suites_config_json(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGatewayDomain.TlsCipherSuitesConfigJSONProperty"]]:
        '''Property tlsCipherSuitesConfigJson: TLS encryption suite configuration.'''
        result = self._values.get("tls_cipher_suites_config_json")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGatewayDomain.TlsCipherSuitesConfigJSONProperty"]], result)

    @builtins.property
    def tls_max(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property tlsMax: The maximum TLS version.'''
        result = self._values.get("tls_max")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tls_min(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property tlsMin: The minimum TLS version.'''
        result = self._values.get("tls_min")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "GatewayDomainProps(%s)" % ", ".join(
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


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mse.GatewayRouteProps",
    jsii_struct_bases=[],
    name_mapping={
        "domain_id_list": "domainIdList",
        "gateway_unique_id": "gatewayUniqueId",
        "name": "name",
        "description": "description",
        "destination_type": "destinationType",
        "direct_response_json": "directResponseJson",
        "domain_id": "domainId",
        "fallback": "fallback",
        "fallback_services": "fallbackServices",
        "gateway_id": "gatewayId",
        "policies": "policies",
        "predicates": "predicates",
        "redirect_json": "redirectJson",
        "route_order": "routeOrder",
        "route_type": "routeType",
        "services": "services",
    },
)
class GatewayRouteProps:
    def __init__(
        self,
        *,
        domain_id_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        gateway_unique_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        destination_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        direct_response_json: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosGatewayRoute.DirectResponseJSONProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        domain_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        fallback: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        fallback_services: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosGatewayRoute.FallbackServicesProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        gateway_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        policies: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        predicates: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosGatewayRoute.PredicatesProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        redirect_json: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosGatewayRoute.RedirectJSONProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        route_order: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        route_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        services: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosGatewayRoute.ServicesProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
    ) -> None:
        '''Properties for defining a ``GatewayRoute``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gatewayroute

        :param domain_id_list: Property domainIdList: The list of domain IDs in JSON format.
        :param gateway_unique_id: Property gatewayUniqueId: The unique ID of the gateway.
        :param name: Property name: The name of the route.
        :param description: Property description: The description of the route.
        :param destination_type: Property destinationType: The type of destination service. Valid values: - Single: single service - Multiple: multiple services - VersionOriented: tag-based routing - Mock: mock response - Redirect: redirect
        :param direct_response_json: Property directResponseJson: Configuration for mock response.
        :param domain_id: Property domainId: The ID of the domain.
        :param fallback: Property fallback: Whether to enable fallback service.
        :param fallback_services: Property fallbackServices: The list of fallback services.
        :param gateway_id: Property gatewayId: The ID of the gateway.
        :param policies: Property policies: The JSON string of route policies.
        :param predicates: Property predicates: Matching rules for the route.
        :param redirect_json: Property redirectJson: Configuration for redirect.
        :param route_order: Property routeOrder: The order of the route. Smaller values indicate higher priority.
        :param route_type: Property routeType: The type of the route. Valid value: Op (control route).
        :param services: Property services: The list of backend services. Required when DestinationType is Single, Multiple, or VersionOriented.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ec49c432ead2946f9ac2b1c2953ba34e0646be9ad4636e6f290440dc88dadbdf)
            check_type(argname="argument domain_id_list", value=domain_id_list, expected_type=type_hints["domain_id_list"])
            check_type(argname="argument gateway_unique_id", value=gateway_unique_id, expected_type=type_hints["gateway_unique_id"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument destination_type", value=destination_type, expected_type=type_hints["destination_type"])
            check_type(argname="argument direct_response_json", value=direct_response_json, expected_type=type_hints["direct_response_json"])
            check_type(argname="argument domain_id", value=domain_id, expected_type=type_hints["domain_id"])
            check_type(argname="argument fallback", value=fallback, expected_type=type_hints["fallback"])
            check_type(argname="argument fallback_services", value=fallback_services, expected_type=type_hints["fallback_services"])
            check_type(argname="argument gateway_id", value=gateway_id, expected_type=type_hints["gateway_id"])
            check_type(argname="argument policies", value=policies, expected_type=type_hints["policies"])
            check_type(argname="argument predicates", value=predicates, expected_type=type_hints["predicates"])
            check_type(argname="argument redirect_json", value=redirect_json, expected_type=type_hints["redirect_json"])
            check_type(argname="argument route_order", value=route_order, expected_type=type_hints["route_order"])
            check_type(argname="argument route_type", value=route_type, expected_type=type_hints["route_type"])
            check_type(argname="argument services", value=services, expected_type=type_hints["services"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "domain_id_list": domain_id_list,
            "gateway_unique_id": gateway_unique_id,
            "name": name,
        }
        if description is not None:
            self._values["description"] = description
        if destination_type is not None:
            self._values["destination_type"] = destination_type
        if direct_response_json is not None:
            self._values["direct_response_json"] = direct_response_json
        if domain_id is not None:
            self._values["domain_id"] = domain_id
        if fallback is not None:
            self._values["fallback"] = fallback
        if fallback_services is not None:
            self._values["fallback_services"] = fallback_services
        if gateway_id is not None:
            self._values["gateway_id"] = gateway_id
        if policies is not None:
            self._values["policies"] = policies
        if predicates is not None:
            self._values["predicates"] = predicates
        if redirect_json is not None:
            self._values["redirect_json"] = redirect_json
        if route_order is not None:
            self._values["route_order"] = route_order
        if route_type is not None:
            self._values["route_type"] = route_type
        if services is not None:
            self._values["services"] = services

    @builtins.property
    def domain_id_list(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''Property domainIdList: The list of domain IDs in JSON format.'''
        result = self._values.get("domain_id_list")
        assert result is not None, "Required property 'domain_id_list' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

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
        '''Property name: The name of the route.'''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the route.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def destination_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property destinationType: The type of destination service.

        Valid values:

        - Single: single service
        - Multiple: multiple services
        - VersionOriented: tag-based routing
        - Mock: mock response
        - Redirect: redirect
        '''
        result = self._values.get("destination_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def direct_response_json(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGatewayRoute.DirectResponseJSONProperty"]]:
        '''Property directResponseJson: Configuration for mock response.'''
        result = self._values.get("direct_response_json")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGatewayRoute.DirectResponseJSONProperty"]], result)

    @builtins.property
    def domain_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property domainId: The ID of the domain.'''
        result = self._values.get("domain_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def fallback(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property fallback: Whether to enable fallback service.'''
        result = self._values.get("fallback")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def fallback_services(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGatewayRoute.FallbackServicesProperty"]]]]:
        '''Property fallbackServices: The list of fallback services.'''
        result = self._values.get("fallback_services")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGatewayRoute.FallbackServicesProperty"]]]], result)

    @builtins.property
    def gateway_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property gatewayId: The ID of the gateway.'''
        result = self._values.get("gateway_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def policies(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property policies: The JSON string of route policies.'''
        result = self._values.get("policies")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def predicates(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGatewayRoute.PredicatesProperty"]]:
        '''Property predicates: Matching rules for the route.'''
        result = self._values.get("predicates")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGatewayRoute.PredicatesProperty"]], result)

    @builtins.property
    def redirect_json(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGatewayRoute.RedirectJSONProperty"]]:
        '''Property redirectJson: Configuration for redirect.'''
        result = self._values.get("redirect_json")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGatewayRoute.RedirectJSONProperty"]], result)

    @builtins.property
    def route_order(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property routeOrder: The order of the route.

        Smaller values indicate higher priority.
        '''
        result = self._values.get("route_order")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def route_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property routeType: The type of the route.

        Valid value: Op (control route).
        '''
        result = self._values.get("route_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def services(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGatewayRoute.ServicesProperty"]]]]:
        '''Property services: The list of backend services.

        Required when DestinationType is Single, Multiple, or VersionOriented.
        '''
        result = self._values.get("services")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGatewayRoute.ServicesProperty"]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "GatewayRouteProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mse.GatewayServiceProps",
    jsii_struct_bases=[],
    name_mapping={
        "gateway_unique_id": "gatewayUniqueId",
        "name": "name",
        "source_type": "sourceType",
        "dns_server_list": "dnsServerList",
        "fc_alias": "fcAlias",
        "fc_service_name": "fcServiceName",
        "fc_version": "fcVersion",
        "group_name": "groupName",
        "ips": "ips",
        "namespace": "namespace",
        "sae_app_id": "saeAppId",
        "service_port": "servicePort",
        "service_protocol": "serviceProtocol",
        "source_id": "sourceId",
        "tls_setting": "tlsSetting",
    },
)
class GatewayServiceProps:
    def __init__(
        self,
        *,
        gateway_unique_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        dns_server_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        fc_alias: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        fc_service_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        fc_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ips: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        namespace: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sae_app_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        service_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        service_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tls_setting: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    ) -> None:
        '''Properties for defining a ``GatewayService``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gatewayservice

        :param gateway_unique_id: Property gatewayUniqueId: Unique identifier of the gateway.
        :param name: Property name: Name of the service.
        :param source_type: Property sourceType: Type of service source. Valid values: - MSE: MSE-NACOS - K8s: ACK container service - VIP: Fixed address - DNS: DNS domain name - FC: Function Compute - EDAS: EDAS - MSE_ZK: MSE-Zookeeper - SAE: SAE
        :param dns_server_list: Property dnsServerList: List of DNS servers.
        :param fc_alias: Property fcAlias: Function Compute service alias. Used when SourceType is FC.
        :param fc_service_name: Property fcServiceName: Function Compute service name. Required when SourceType is FC.
        :param fc_version: Property fcVersion: Function Compute service version. Used when SourceType is FC.
        :param group_name: Property groupName: Group name of the service.
        :param ips: Property ips: List of IPs.
        :param namespace: Property namespace: Namespace of the service.
        :param sae_app_id: Property saeAppId: SAE application ID.
        :param service_port: Property servicePort: Port of the service.
        :param service_protocol: Property serviceProtocol: Protocol of the service.
        :param source_id: Property sourceId: Source ID of the service. Used when specifying a source to add services.
        :param tls_setting: Property tlsSetting: TLS settings for the service.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__81b4f0537bc2f47b3c03e50680929951954925425ace23e4011b52900577ac4d)
            check_type(argname="argument gateway_unique_id", value=gateway_unique_id, expected_type=type_hints["gateway_unique_id"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument source_type", value=source_type, expected_type=type_hints["source_type"])
            check_type(argname="argument dns_server_list", value=dns_server_list, expected_type=type_hints["dns_server_list"])
            check_type(argname="argument fc_alias", value=fc_alias, expected_type=type_hints["fc_alias"])
            check_type(argname="argument fc_service_name", value=fc_service_name, expected_type=type_hints["fc_service_name"])
            check_type(argname="argument fc_version", value=fc_version, expected_type=type_hints["fc_version"])
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument ips", value=ips, expected_type=type_hints["ips"])
            check_type(argname="argument namespace", value=namespace, expected_type=type_hints["namespace"])
            check_type(argname="argument sae_app_id", value=sae_app_id, expected_type=type_hints["sae_app_id"])
            check_type(argname="argument service_port", value=service_port, expected_type=type_hints["service_port"])
            check_type(argname="argument service_protocol", value=service_protocol, expected_type=type_hints["service_protocol"])
            check_type(argname="argument source_id", value=source_id, expected_type=type_hints["source_id"])
            check_type(argname="argument tls_setting", value=tls_setting, expected_type=type_hints["tls_setting"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "gateway_unique_id": gateway_unique_id,
            "name": name,
            "source_type": source_type,
        }
        if dns_server_list is not None:
            self._values["dns_server_list"] = dns_server_list
        if fc_alias is not None:
            self._values["fc_alias"] = fc_alias
        if fc_service_name is not None:
            self._values["fc_service_name"] = fc_service_name
        if fc_version is not None:
            self._values["fc_version"] = fc_version
        if group_name is not None:
            self._values["group_name"] = group_name
        if ips is not None:
            self._values["ips"] = ips
        if namespace is not None:
            self._values["namespace"] = namespace
        if sae_app_id is not None:
            self._values["sae_app_id"] = sae_app_id
        if service_port is not None:
            self._values["service_port"] = service_port
        if service_protocol is not None:
            self._values["service_protocol"] = service_protocol
        if source_id is not None:
            self._values["source_id"] = source_id
        if tls_setting is not None:
            self._values["tls_setting"] = tls_setting

    @builtins.property
    def gateway_unique_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property gatewayUniqueId: Unique identifier of the gateway.'''
        result = self._values.get("gateway_unique_id")
        assert result is not None, "Required property 'gateway_unique_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property name: Name of the service.'''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property sourceType: Type of service source.

        Valid values:

        - MSE: MSE-NACOS
        - K8s: ACK container service
        - VIP: Fixed address
        - DNS: DNS domain name
        - FC: Function Compute
        - EDAS: EDAS
        - MSE_ZK: MSE-Zookeeper
        - SAE: SAE
        '''
        result = self._values.get("source_type")
        assert result is not None, "Required property 'source_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def dns_server_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property dnsServerList: List of DNS servers.'''
        result = self._values.get("dns_server_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def fc_alias(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property fcAlias: Function Compute service alias.

        Used when SourceType is FC.
        '''
        result = self._values.get("fc_alias")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def fc_service_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property fcServiceName: Function Compute service name.

        Required when SourceType is FC.
        '''
        result = self._values.get("fc_service_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def fc_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property fcVersion: Function Compute service version.

        Used when SourceType is FC.
        '''
        result = self._values.get("fc_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property groupName: Group name of the service.'''
        result = self._values.get("group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ips(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property ips: List of IPs.'''
        result = self._values.get("ips")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def namespace(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property namespace: Namespace of the service.'''
        result = self._values.get("namespace")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sae_app_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property saeAppId: SAE application ID.'''
        result = self._values.get("sae_app_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def service_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property servicePort: Port of the service.'''
        result = self._values.get("service_port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def service_protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property serviceProtocol: Protocol of the service.'''
        result = self._values.get("service_protocol")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sourceId: Source ID of the service.

        Used when specifying a source to add services.
        '''
        result = self._values.get("source_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tls_setting(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property tlsSetting: TLS settings for the service.'''
        result = self._values.get("tls_setting")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "GatewayServiceProps(%s)" % ", ".join(
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
        '''Attribute AclEntryList: The list of ACL entries.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAclId")
    def attr_acl_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AclId: The ID of the ACL.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAppVersion")
    def attr_app_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AppVersion: The version of the application.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Arn: The Alibaba Cloud Resource Name (ARN).'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrClusterAliasName")
    def attr_cluster_alias_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterAliasName: The alias name of the cluster.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterId: The ID of the cluster.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrClusterName")
    def attr_cluster_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterName: The name of the cluster.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrClusterSpecification")
    def attr_cluster_specification(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterSpecification: The specification of the cluster.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrClusterType")
    def attr_cluster_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterType: The type of the cluster.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrClusterVersion")
    def attr_cluster_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterVersion: The version of the cluster.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrConfigAuthEnabled")
    def attr_config_auth_enabled(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConfigAuthEnabled: Whether to enable the configuration authentication.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrConfigSecretEnabled")
    def attr_config_secret_enabled(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConfigSecretEnabled: Whether to enable the configuration secret.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrConnectionType")
    def attr_connection_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConnectionType: The connection type.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCpu")
    def attr_cpu(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Cpu: The number of CPU cores.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDiskCapacity")
    def attr_disk_capacity(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DiskCapacity: The disk capacity.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDiskType")
    def attr_disk_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DiskType: The disk type.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHealthStatus")
    def attr_health_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthStatus: The health status of the cluster.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrInstanceCount")
    def attr_instance_count(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceCount: The number of instances.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The ID of the cluster instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrInternetAddress")
    def attr_internet_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InternetAddress: The public network address of the cluster.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrInternetDomain")
    def attr_internet_domain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InternetDomain: The public network domain of the cluster.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrInternetPort")
    def attr_internet_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InternetPort: The public network port of the cluster.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrIntranetAddress")
    def attr_intranet_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IntranetAddress: The intranet address of the cluster.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrIntranetDomain")
    def attr_intranet_domain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IntranetDomain: The intranet domain of the cluster.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrIntranetPort")
    def attr_intranet_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IntranetPort: The intranet port of the cluster.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMcpEnabled")
    def attr_mcp_enabled(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MCPEnabled: Whether to enable the MCP.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMemoryCapacity")
    def attr_memory_capacity(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MemoryCapacity: The memory capacity.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMseVersion")
    def attr_mse_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MseVersion: The MSE version.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrNetType")
    def attr_net_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NetType: The network type.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPayInfo")
    def attr_pay_info(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PayInfo: The payment information.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPubNetworkFlow")
    def attr_pub_network_flow(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PubNetworkFlow: The public network flow.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcId: The ID of the VPC.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VSwitchId: The ID of the VSwitch.'''
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
        '''Attribute AclEntryList: The list of ACL entries.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAclEntryList"))

    @builtins.property
    @jsii.member(jsii_name="attrAclId")
    def attr_acl_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AclId: The ID of the ACL.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAclId"))

    @builtins.property
    @jsii.member(jsii_name="attrAppVersion")
    def attr_app_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AppVersion: The version of the application.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAppVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Arn: The Alibaba Cloud Resource Name (ARN).'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrArn"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterAliasName")
    def attr_cluster_alias_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterAliasName: The alias name of the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterAliasName"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterId: The ID of the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterName")
    def attr_cluster_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterName: The name of the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterName"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterSpecification")
    def attr_cluster_specification(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterSpecification: The specification of the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterSpecification"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterType")
    def attr_cluster_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterType: The type of the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterType"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterVersion")
    def attr_cluster_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterVersion: The version of the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrConfigAuthEnabled")
    def attr_config_auth_enabled(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConfigAuthEnabled: Whether to enable the configuration authentication.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConfigAuthEnabled"))

    @builtins.property
    @jsii.member(jsii_name="attrConfigSecretEnabled")
    def attr_config_secret_enabled(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConfigSecretEnabled: Whether to enable the configuration secret.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConfigSecretEnabled"))

    @builtins.property
    @jsii.member(jsii_name="attrConnectionType")
    def attr_connection_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConnectionType: The connection type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConnectionType"))

    @builtins.property
    @jsii.member(jsii_name="attrCpu")
    def attr_cpu(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Cpu: The number of CPU cores.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCpu"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskCapacity")
    def attr_disk_capacity(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DiskCapacity: The disk capacity.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDiskCapacity"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskType")
    def attr_disk_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DiskType: The disk type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDiskType"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthStatus")
    def attr_health_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthStatus: The health status of the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceCount")
    def attr_instance_count(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceCount: The number of instances.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceCount"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The ID of the cluster instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetAddress")
    def attr_internet_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InternetAddress: The public network address of the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInternetAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetDomain")
    def attr_internet_domain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InternetDomain: The public network domain of the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInternetDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetPort")
    def attr_internet_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InternetPort: The public network port of the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInternetPort"))

    @builtins.property
    @jsii.member(jsii_name="attrIntranetAddress")
    def attr_intranet_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IntranetAddress: The intranet address of the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIntranetAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrIntranetDomain")
    def attr_intranet_domain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IntranetDomain: The intranet domain of the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIntranetDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrIntranetPort")
    def attr_intranet_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IntranetPort: The intranet port of the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIntranetPort"))

    @builtins.property
    @jsii.member(jsii_name="attrMcpEnabled")
    def attr_mcp_enabled(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MCPEnabled: Whether to enable the MCP.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMcpEnabled"))

    @builtins.property
    @jsii.member(jsii_name="attrMemoryCapacity")
    def attr_memory_capacity(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MemoryCapacity: The memory capacity.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMemoryCapacity"))

    @builtins.property
    @jsii.member(jsii_name="attrMseVersion")
    def attr_mse_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MseVersion: The MSE version.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMseVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrNetType")
    def attr_net_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NetType: The network type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNetType"))

    @builtins.property
    @jsii.member(jsii_name="attrPayInfo")
    def attr_pay_info(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PayInfo: The payment information.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPayInfo"))

    @builtins.property
    @jsii.member(jsii_name="attrPubNetworkFlow")
    def attr_pub_network_flow(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PubNetworkFlow: The public network flow.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPubNetworkFlow"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcId: The ID of the VPC.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VSwitchId: The ID of the VSwitch.'''
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


@jsii.interface(jsii_type="@alicloud/ros-cdk-mse.IGatewayDomain")
class IGatewayDomain(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``GatewayDomain``.'''

    @builtins.property
    @jsii.member(jsii_name="attrDomainId")
    def attr_domain_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainId: The ID of the domain.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> GatewayDomainProps:
        ...


class _IGatewayDomainProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``GatewayDomain``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-mse.IGatewayDomain"

    @builtins.property
    @jsii.member(jsii_name="attrDomainId")
    def attr_domain_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainId: The ID of the domain.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDomainId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> GatewayDomainProps:
        return typing.cast(GatewayDomainProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IGatewayDomain).__jsii_proxy_class__ = lambda : _IGatewayDomainProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-mse.IGatewayRoute")
class IGatewayRoute(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``GatewayRoute``.'''

    @builtins.property
    @jsii.member(jsii_name="attrRouteId")
    def attr_route_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RouteId: The ID of the route.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> GatewayRouteProps:
        ...


class _IGatewayRouteProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``GatewayRoute``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-mse.IGatewayRoute"

    @builtins.property
    @jsii.member(jsii_name="attrRouteId")
    def attr_route_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RouteId: The ID of the route.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRouteId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> GatewayRouteProps:
        return typing.cast(GatewayRouteProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IGatewayRoute).__jsii_proxy_class__ = lambda : _IGatewayRouteProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-mse.IGatewayService")
class IGatewayService(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``GatewayService``.'''

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Name: The name of the service.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrServiceId")
    def attr_service_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServiceId: The ID of the gateway service.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> GatewayServiceProps:
        ...


class _IGatewayServiceProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``GatewayService``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-mse.IGatewayService"

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Name: The name of the service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceId")
    def attr_service_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServiceId: The ID of the gateway service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrServiceId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> GatewayServiceProps:
        return typing.cast(GatewayServiceProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IGatewayService).__jsii_proxy_class__ = lambda : _IGatewayServiceProxy


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


@jsii.interface(jsii_type="@alicloud/ros-cdk-mse.IPluginConfig")
class IPluginConfig(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``PluginConfig``.'''

    @builtins.property
    @jsii.member(jsii_name="attrPluginConfigId")
    def attr_plugin_config_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PluginConfigId: The ID of the plugin config.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PluginConfigProps":
        ...


class _IPluginConfigProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``PluginConfig``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-mse.IPluginConfig"

    @builtins.property
    @jsii.member(jsii_name="attrPluginConfigId")
    def attr_plugin_config_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PluginConfigId: The ID of the plugin config.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPluginConfigId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PluginConfigProps":
        return typing.cast("PluginConfigProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IPluginConfig).__jsii_proxy_class__ = lambda : _IPluginConfigProxy


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
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::MSE::NacosService``.

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


@jsii.implements(IPluginConfig)
class PluginConfig(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mse.PluginConfig",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::MSE::PluginConfig``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosPluginConfig``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-pluginconfig
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["PluginConfigProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__341ea3ed24ae84c9e84a66654313cffbdc976ea2acc5ba394bc49fc5cbff8124)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrPluginConfigId")
    def attr_plugin_config_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PluginConfigId: The ID of the plugin config.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPluginConfigId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PluginConfigProps":
        return typing.cast("PluginConfigProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cc5a86d5d3af310f46075ed426b2cc2acd5ab82a9ee151e7be4fa2cc9e343c7b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__906b26bb618286c52afe68e147d4ac5cf9fe40165edf13d89e2526adab8d8b40)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aa8b609c75ee336cafdf68c52e3a3b85ba1eb4a16f78fe9b708dd9dffdacf5d4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mse.PluginConfigProps",
    jsii_struct_bases=[],
    name_mapping={
        "config_level": "configLevel",
        "enable": "enable",
        "gateway_unique_id": "gatewayUniqueId",
        "plugin_id": "pluginId",
        "config": "config",
        "resource_id_list": "resourceIdList",
    },
)
class PluginConfigProps:
    def __init__(
        self,
        *,
        config_level: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        enable: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
        gateway_unique_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        plugin_id: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        config: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_id_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``PluginConfig``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-pluginconfig

        :param config_level: Property configLevel: The scope of the plugin application. - 0: Global - 1: Route - 2: Domain
        :param enable: Property enable: Whether to enable the plugin.
        :param gateway_unique_id: Property gatewayUniqueId: The unique ID of the gateway.
        :param plugin_id: Property pluginId: The ID of the gateway plugin.
        :param config: Property config: The configuration of the plugin. For Wasm plugins, the content is in YAML format. For Lua plugins, the content is Lua code.
        :param resource_id_list: Property resourceIdList: List of domain IDs/route IDs (depending on ConfigLevel).
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cc363c24d043ef54ba3db5f295dc41b1487fc52254dc66febbc034bbc0f4921c)
            check_type(argname="argument config_level", value=config_level, expected_type=type_hints["config_level"])
            check_type(argname="argument enable", value=enable, expected_type=type_hints["enable"])
            check_type(argname="argument gateway_unique_id", value=gateway_unique_id, expected_type=type_hints["gateway_unique_id"])
            check_type(argname="argument plugin_id", value=plugin_id, expected_type=type_hints["plugin_id"])
            check_type(argname="argument config", value=config, expected_type=type_hints["config"])
            check_type(argname="argument resource_id_list", value=resource_id_list, expected_type=type_hints["resource_id_list"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "config_level": config_level,
            "enable": enable,
            "gateway_unique_id": gateway_unique_id,
            "plugin_id": plugin_id,
        }
        if config is not None:
            self._values["config"] = config
        if resource_id_list is not None:
            self._values["resource_id_list"] = resource_id_list

    @builtins.property
    def config_level(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property configLevel: The scope of the plugin application.

        - 0: Global
        - 1: Route
        - 2: Domain
        '''
        result = self._values.get("config_level")
        assert result is not None, "Required property 'config_level' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def enable(self) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property enable: Whether to enable the plugin.'''
        result = self._values.get("enable")
        assert result is not None, "Required property 'enable' is missing"
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def gateway_unique_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property gatewayUniqueId: The unique ID of the gateway.'''
        result = self._values.get("gateway_unique_id")
        assert result is not None, "Required property 'gateway_unique_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def plugin_id(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property pluginId: The ID of the gateway plugin.'''
        result = self._values.get("plugin_id")
        assert result is not None, "Required property 'plugin_id' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def config(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property config: The configuration of the plugin.

        For Wasm plugins, the content is in YAML format. For Lua plugins, the content is Lua code.
        '''
        result = self._values.get("config")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_id_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property resourceIdList: List of domain IDs/route IDs (depending on ConfigLevel).'''
        result = self._values.get("resource_id_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "PluginConfigProps(%s)" % ", ".join(
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
        :Attribute: AclEntryList: The list of ACL entries.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAclEntryList"))

    @builtins.property
    @jsii.member(jsii_name="attrAclId")
    def attr_acl_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AclId: The ID of the ACL.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAclId"))

    @builtins.property
    @jsii.member(jsii_name="attrAppVersion")
    def attr_app_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AppVersion: The version of the application.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAppVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Arn: The Alibaba Cloud Resource Name (ARN).
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrArn"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterAliasName")
    def attr_cluster_alias_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ClusterAliasName: The alias name of the cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterAliasName"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ClusterId: The ID of the cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterName")
    def attr_cluster_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ClusterName: The name of the cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterName"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterSpecification")
    def attr_cluster_specification(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ClusterSpecification: The specification of the cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterSpecification"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterType")
    def attr_cluster_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ClusterType: The type of the cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterType"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterVersion")
    def attr_cluster_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ClusterVersion: The version of the cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrConfigAuthEnabled")
    def attr_config_auth_enabled(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ConfigAuthEnabled: Whether to enable the configuration authentication.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConfigAuthEnabled"))

    @builtins.property
    @jsii.member(jsii_name="attrConfigSecretEnabled")
    def attr_config_secret_enabled(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ConfigSecretEnabled: Whether to enable the configuration secret.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConfigSecretEnabled"))

    @builtins.property
    @jsii.member(jsii_name="attrConnectionType")
    def attr_connection_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ConnectionType: The connection type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConnectionType"))

    @builtins.property
    @jsii.member(jsii_name="attrCpu")
    def attr_cpu(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Cpu: The number of CPU cores.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCpu"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskCapacity")
    def attr_disk_capacity(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DiskCapacity: The disk capacity.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDiskCapacity"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskType")
    def attr_disk_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DiskType: The disk type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDiskType"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthStatus")
    def attr_health_status(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HealthStatus: The health status of the cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHealthStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceCount")
    def attr_instance_count(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceCount: The number of instances.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceCount"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceId: The ID of the cluster instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetAddress")
    def attr_internet_address(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InternetAddress: The public network address of the cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInternetAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetDomain")
    def attr_internet_domain(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InternetDomain: The public network domain of the cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInternetDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetPort")
    def attr_internet_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InternetPort: The public network port of the cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInternetPort"))

    @builtins.property
    @jsii.member(jsii_name="attrIntranetAddress")
    def attr_intranet_address(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IntranetAddress: The intranet address of the cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIntranetAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrIntranetDomain")
    def attr_intranet_domain(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IntranetDomain: The intranet domain of the cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIntranetDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrIntranetPort")
    def attr_intranet_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IntranetPort: The intranet port of the cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIntranetPort"))

    @builtins.property
    @jsii.member(jsii_name="attrMcpEnabled")
    def attr_mcp_enabled(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MCPEnabled: Whether to enable the MCP.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMcpEnabled"))

    @builtins.property
    @jsii.member(jsii_name="attrMemoryCapacity")
    def attr_memory_capacity(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MemoryCapacity: The memory capacity.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMemoryCapacity"))

    @builtins.property
    @jsii.member(jsii_name="attrMseVersion")
    def attr_mse_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MseVersion: The MSE version.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMseVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrNetType")
    def attr_net_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: NetType: The network type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNetType"))

    @builtins.property
    @jsii.member(jsii_name="attrPayInfo")
    def attr_pay_info(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PayInfo: The payment information.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPayInfo"))

    @builtins.property
    @jsii.member(jsii_name="attrPubNetworkFlow")
    def attr_pub_network_flow(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PubNetworkFlow: The public network flow.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPubNetworkFlow"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcId: The ID of the VPC.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VSwitchId: The ID of the VSwitch.
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

        clusterSpecification: Engine specification.

        [Professional Edition]

        - ``MSE_SC_2_4_60_c``: 2 cores 4GB
        - ``MSE_SC_1_2_60_c``: 1 core 2GB
        - ``MSE_SC_4_8_60_c``: 4 cores 8GB
        - ``MSE_SC_8_16_60_c``: 8 cores 16GB
        - ``MSE_SC_16_32_60_c``: 16 cores 32GB

        [Development Edition]

        - ``MSE_SC_1_2_60_c``: 1 core 2GB
        - ``MSE_SC_2_4_60_c``: 2 cores 4GB

        [Serverless Edition]

        - Ignore this parameter or fill with ``MSE_SC_SERVERLESS``.
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
        :Property: clusterType: Cluster type, including ZooKeeper, Nacos-Ans.
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
        :Property:

        clusterVersion: Cluster version.

        [Professional Edition]

        - ``NACOS_2_0_0``: Nacos 2.x.x version.
        - ``ZooKeeper_3_8_0``: ZooKeeper 3.8.x version.

        [Development Edition]

        - ``NACOS_2_0_0``: Nacos 2.x version.
        - ``ZooKeeper_3_8_0``: ZooKeeper 3.8.x version.

        [Serverless Edition]

        - ``NACOS_2_0_0``: Nacos 2.x version.
        - ``ZooKeeper_3_8_0``: ZooKeeper 3.8.x version.
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
        :Property:

        instanceCount: Number of instance nodes. Range: 1~15.

        [Professional Edition]

        - Must be >=3 and odd number.

        [Development Edition]

        - Only 1 allowed.

        [Serverless Edition]

        - Ignore this parameter.
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
        :Property:

        netType: Network type. Valid values:

        - ``privatenet``: Private network.
        - ``pubnet``: Public network.
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
    @jsii.member(jsii_name="aclEntryList")
    def acl_entry_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: aclEntryList: List of ACL entries.
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
    @jsii.member(jsii_name="chargeType")
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        chargeType: Billing mode, including PREPAY (annual/monthly) and POSTPAY (pay-as-you-go).
        Ignored for Serverless Edition.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "chargeType"))

    @charge_type.setter
    def charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ff42d9f5df1d53188638498b956852a4eab92cbe73910228731d79d28d335aa6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "chargeType", value)

    @builtins.property
    @jsii.member(jsii_name="clusterAliasName")
    def cluster_alias_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: clusterAliasName: cluster alias name.
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
        :Property: connectionType: Network access type, ``slb`` or ``single_eni``; some regions only support ``single_eni`` for Development Edition.
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
    @jsii.member(jsii_name="eipEnabled")
    def eip_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: eipEnabled: Effective when ConnectionType is ``single_eni``, indicates whether to enable public access (elastic IP).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "eipEnabled"))

    @eip_enabled.setter
    def eip_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ccfe3f0199207e4434fbcb6da3b374c9bfefd79cefdb988b7de8b80dfaf639bf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "eipEnabled", value)

    @builtins.property
    @jsii.member(jsii_name="mseVersion")
    def mse_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        mseVersion: Must be filled unless special circumstances. Valid values:

        - ``mse_pro``: Professional Edition.
        - ``mse_dev``: Development Edition.
        - ``mse_serverless``: Serverless Edition.
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
    @jsii.member(jsii_name="pubNetworkFlow")
    def pub_network_flow(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: pubNetworkFlow: Public network flow. Valid when ConnectionType is ``slb``. 0 means do not create public SLB; 1 or above indicates fixed bandwidth value in Mbps. Range: 0~5000.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "pubNetworkFlow"))

    @pub_network_flow.setter
    def pub_network_flow(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__919de38d1d220e3dbf96feede4f2da5f2266a99cfb3415615bbae2ce346d65a2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "pubNetworkFlow", value)

    @builtins.property
    @jsii.member(jsii_name="requestPars")
    def request_pars(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: requestPars: Extended request parameters in JSON format.
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
    @jsii.member(jsii_name="securityGroupType")
    def security_group_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: securityGroupType: Effective when ConnectionType is ``single_eni``, represents the security group type of the instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "securityGroupType"))

    @security_group_type.setter
    def security_group_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3e8ff84a4bd004e04be47ccd54c02095b79f2e2026ecef98d809e77aa5087427)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityGroupType", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosCluster.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to cluster. Max support 20 tags to add during create cluster. Each tag with two properties Key and Value, and Key is required.
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
        :Property: vpcId: VPC ID.
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
        :Property: vSwitchId: Switch ID.
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
        "acl_entry_list": "aclEntryList",
        "charge_type": "chargeType",
        "cluster_alias_name": "clusterAliasName",
        "connection_type": "connectionType",
        "eip_enabled": "eipEnabled",
        "mse_version": "mseVersion",
        "pub_network_flow": "pubNetworkFlow",
        "request_pars": "requestPars",
        "resource_group_id": "resourceGroupId",
        "security_group_type": "securityGroupType",
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
        acl_entry_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cluster_alias_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        connection_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        eip_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        mse_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pub_network_flow: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        request_pars: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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
        :param acl_entry_list: 
        :param charge_type: 
        :param cluster_alias_name: 
        :param connection_type: 
        :param eip_enabled: 
        :param mse_version: 
        :param pub_network_flow: 
        :param request_pars: 
        :param resource_group_id: 
        :param security_group_type: 
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
            check_type(argname="argument acl_entry_list", value=acl_entry_list, expected_type=type_hints["acl_entry_list"])
            check_type(argname="argument charge_type", value=charge_type, expected_type=type_hints["charge_type"])
            check_type(argname="argument cluster_alias_name", value=cluster_alias_name, expected_type=type_hints["cluster_alias_name"])
            check_type(argname="argument connection_type", value=connection_type, expected_type=type_hints["connection_type"])
            check_type(argname="argument eip_enabled", value=eip_enabled, expected_type=type_hints["eip_enabled"])
            check_type(argname="argument mse_version", value=mse_version, expected_type=type_hints["mse_version"])
            check_type(argname="argument pub_network_flow", value=pub_network_flow, expected_type=type_hints["pub_network_flow"])
            check_type(argname="argument request_pars", value=request_pars, expected_type=type_hints["request_pars"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument security_group_type", value=security_group_type, expected_type=type_hints["security_group_type"])
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
        if acl_entry_list is not None:
            self._values["acl_entry_list"] = acl_entry_list
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if cluster_alias_name is not None:
            self._values["cluster_alias_name"] = cluster_alias_name
        if connection_type is not None:
            self._values["connection_type"] = connection_type
        if eip_enabled is not None:
            self._values["eip_enabled"] = eip_enabled
        if mse_version is not None:
            self._values["mse_version"] = mse_version
        if pub_network_flow is not None:
            self._values["pub_network_flow"] = pub_network_flow
        if request_pars is not None:
            self._values["request_pars"] = request_pars
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if security_group_type is not None:
            self._values["security_group_type"] = security_group_type
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

        clusterSpecification: Engine specification.

        [Professional Edition]

        - ``MSE_SC_2_4_60_c``: 2 cores 4GB
        - ``MSE_SC_1_2_60_c``: 1 core 2GB
        - ``MSE_SC_4_8_60_c``: 4 cores 8GB
        - ``MSE_SC_8_16_60_c``: 8 cores 16GB
        - ``MSE_SC_16_32_60_c``: 16 cores 32GB

        [Development Edition]

        - ``MSE_SC_1_2_60_c``: 1 core 2GB
        - ``MSE_SC_2_4_60_c``: 2 cores 4GB

        [Serverless Edition]

        - Ignore this parameter or fill with ``MSE_SC_SERVERLESS``.
        '''
        result = self._values.get("cluster_specification")
        assert result is not None, "Required property 'cluster_specification' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cluster_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: clusterType: Cluster type, including ZooKeeper, Nacos-Ans.
        '''
        result = self._values.get("cluster_type")
        assert result is not None, "Required property 'cluster_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cluster_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        clusterVersion: Cluster version.

        [Professional Edition]

        - ``NACOS_2_0_0``: Nacos 2.x.x version.
        - ``ZooKeeper_3_8_0``: ZooKeeper 3.8.x version.

        [Development Edition]

        - ``NACOS_2_0_0``: Nacos 2.x version.
        - ``ZooKeeper_3_8_0``: ZooKeeper 3.8.x version.

        [Serverless Edition]

        - ``NACOS_2_0_0``: Nacos 2.x version.
        - ``ZooKeeper_3_8_0``: ZooKeeper 3.8.x version.
        '''
        result = self._values.get("cluster_version")
        assert result is not None, "Required property 'cluster_version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        instanceCount: Number of instance nodes. Range: 1~15.

        [Professional Edition]

        - Must be >=3 and odd number.

        [Development Edition]

        - Only 1 allowed.

        [Serverless Edition]

        - Ignore this parameter.
        '''
        result = self._values.get("instance_count")
        assert result is not None, "Required property 'instance_count' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def net_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        netType: Network type. Valid values:

        - ``privatenet``: Private network.
        - ``pubnet``: Public network.
        '''
        result = self._values.get("net_type")
        assert result is not None, "Required property 'net_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def acl_entry_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: aclEntryList: List of ACL entries.
        '''
        result = self._values.get("acl_entry_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        chargeType: Billing mode, including PREPAY (annual/monthly) and POSTPAY (pay-as-you-go).
        Ignored for Serverless Edition.
        '''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cluster_alias_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: clusterAliasName: cluster alias name.
        '''
        result = self._values.get("cluster_alias_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def connection_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: connectionType: Network access type, ``slb`` or ``single_eni``; some regions only support ``single_eni`` for Development Edition.
        '''
        result = self._values.get("connection_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def eip_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: eipEnabled: Effective when ConnectionType is ``single_eni``, indicates whether to enable public access (elastic IP).
        '''
        result = self._values.get("eip_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def mse_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        mseVersion: Must be filled unless special circumstances. Valid values:

        - ``mse_pro``: Professional Edition.
        - ``mse_dev``: Development Edition.
        - ``mse_serverless``: Serverless Edition.
        '''
        result = self._values.get("mse_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pub_network_flow(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: pubNetworkFlow: Public network flow. Valid when ConnectionType is ``slb``. 0 means do not create public SLB; 1 or above indicates fixed bandwidth value in Mbps. Range: 0~5000.
        '''
        result = self._values.get("pub_network_flow")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def request_pars(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: requestPars: Extended request parameters in JSON format.
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
    def security_group_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: securityGroupType: Effective when ConnectionType is ``single_eni``, represents the security group type of the instance.
        '''
        result = self._values.get("security_group_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosCluster.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to cluster. Max support 20 tags to add during create cluster. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosCluster.TagsProperty]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: VPC ID.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: Switch ID.
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


class RosGatewayDomain(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mse.RosGatewayDomain",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::MSE::GatewayDomain``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``GatewayDomain`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gatewaydomain
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosGatewayDomainProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cec5ad7bc1af3262228ebd96dd29c2a68d4031e52471ec74a539eafe9fe8dc7f)
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
            type_hints = typing.get_type_hints(_typecheckingstub__b5063283ff2e01a22dea409c9fd574bafadc431ff62f1447d77ebc75f10fd01b)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainId")
    def attr_domain_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DomainId: The ID of the domain.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomainId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__edc27461381be4dfbd79039be4b5d487afded621996f732aeb2d84a49586c3c3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="gatewayUniqueId")
    def gateway_unique_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: gatewayUniqueId: The unique identifier of the gateway.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "gatewayUniqueId"))

    @gateway_unique_id.setter
    def gateway_unique_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9d18308cad3cbfc521d2158c0b1bd3909644a944d925a94adf56b123c1d8cb39)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "gatewayUniqueId", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The domain name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ea55696e415b083884d213183e71280d897601585600ac127c043c38de671299)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="protocol")
    def protocol(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: protocol: The protocol type: HTTP, HTTPS.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "protocol"))

    @protocol.setter
    def protocol(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b3344a90234d2c295c2822213456d75de94154f08671ac11f4efac9cae77d0b3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "protocol", value)

    @builtins.property
    @jsii.member(jsii_name="certIdentifier")
    def cert_identifier(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: certIdentifier: Certificate ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "certIdentifier"))

    @cert_identifier.setter
    def cert_identifier(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cb7bae5d172dea24a54252fbe783b3cd6140e437a496123f89101fd8d4fe78e7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "certIdentifier", value)

    @builtins.property
    @jsii.member(jsii_name="http2")
    def http2(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: http2: Whether to enable Http2: open, close, globalConfig.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "http2"))

    @http2.setter
    def http2(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8cc5e8d918499dd2f2db4f07680d1757c4dc12beea52eb3bca3050bc012b71a0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "http2", value)

    @builtins.property
    @jsii.member(jsii_name="mustHttps")
    def must_https(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: mustHttps: Whether to enable HTTPS.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "mustHttps"))

    @must_https.setter
    def must_https(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c0bb06cd835fba00822c3638995b6a50afeed9e4d9d29b76eb20ae0ab965a0da)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "mustHttps", value)

    @builtins.property
    @jsii.member(jsii_name="tlsCipherSuitesConfigJson")
    def tls_cipher_suites_config_json(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGatewayDomain.TlsCipherSuitesConfigJSONProperty"]]:
        '''
        :Property: tlsCipherSuitesConfigJson: TLS encryption suite configuration.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGatewayDomain.TlsCipherSuitesConfigJSONProperty"]], jsii.get(self, "tlsCipherSuitesConfigJson"))

    @tls_cipher_suites_config_json.setter
    def tls_cipher_suites_config_json(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGatewayDomain.TlsCipherSuitesConfigJSONProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__da1b59a75e27f9e93c1dd962df00e67bf4062bda9b5364af3ca25b01de23a667)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tlsCipherSuitesConfigJson", value)

    @builtins.property
    @jsii.member(jsii_name="tlsMax")
    def tls_max(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: tlsMax: The maximum TLS version.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "tlsMax"))

    @tls_max.setter
    def tls_max(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fbe01d953a6801c5b096bd43c80505fcb2a67a547006f7ec83781382323df1e3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tlsMax", value)

    @builtins.property
    @jsii.member(jsii_name="tlsMin")
    def tls_min(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: tlsMin: The minimum TLS version.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "tlsMin"))

    @tls_min.setter
    def tls_min(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7b522e2082d71f82c1c4e14744582b24b6d18784bb7a2b975d4913e5c365608d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tlsMin", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-mse.RosGatewayDomain.TlsCipherSuitesConfigJSONProperty",
        jsii_struct_bases=[],
        name_mapping={
            "config_type": "configType",
            "tls_cipher_suites": "tlsCipherSuites",
        },
    )
    class TlsCipherSuitesConfigJSONProperty:
        def __init__(
            self,
            *,
            config_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            tls_cipher_suites: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        ) -> None:
            '''
            :param config_type: 
            :param tls_cipher_suites: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__5afc1016b63713ab7b822cfd0296995bdd82a19afe08d556c416049a3e59c8b1)
                check_type(argname="argument config_type", value=config_type, expected_type=type_hints["config_type"])
                check_type(argname="argument tls_cipher_suites", value=tls_cipher_suites, expected_type=type_hints["tls_cipher_suites"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if config_type is not None:
                self._values["config_type"] = config_type
            if tls_cipher_suites is not None:
                self._values["tls_cipher_suites"] = tls_cipher_suites

        @builtins.property
        def config_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: configType: Encryption suite configuration type.
            '''
            result = self._values.get("config_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def tls_cipher_suites(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: tlsCipherSuites: List of encryption suite names.
            '''
            result = self._values.get("tls_cipher_suites")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TlsCipherSuitesConfigJSONProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mse.RosGatewayDomainProps",
    jsii_struct_bases=[],
    name_mapping={
        "gateway_unique_id": "gatewayUniqueId",
        "name": "name",
        "protocol": "protocol",
        "cert_identifier": "certIdentifier",
        "http2": "http2",
        "must_https": "mustHttps",
        "tls_cipher_suites_config_json": "tlsCipherSuitesConfigJson",
        "tls_max": "tlsMax",
        "tls_min": "tlsMin",
    },
)
class RosGatewayDomainProps:
    def __init__(
        self,
        *,
        gateway_unique_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cert_identifier: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        http2: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        must_https: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tls_cipher_suites_config_json: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGatewayDomain.TlsCipherSuitesConfigJSONProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        tls_max: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tls_min: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosGatewayDomain``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gatewaydomain

        :param gateway_unique_id: 
        :param name: 
        :param protocol: 
        :param cert_identifier: 
        :param http2: 
        :param must_https: 
        :param tls_cipher_suites_config_json: 
        :param tls_max: 
        :param tls_min: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__524a97f1a98c93d98f8b7f446185670e14d7b6fdca71059b37c59d135426248c)
            check_type(argname="argument gateway_unique_id", value=gateway_unique_id, expected_type=type_hints["gateway_unique_id"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument protocol", value=protocol, expected_type=type_hints["protocol"])
            check_type(argname="argument cert_identifier", value=cert_identifier, expected_type=type_hints["cert_identifier"])
            check_type(argname="argument http2", value=http2, expected_type=type_hints["http2"])
            check_type(argname="argument must_https", value=must_https, expected_type=type_hints["must_https"])
            check_type(argname="argument tls_cipher_suites_config_json", value=tls_cipher_suites_config_json, expected_type=type_hints["tls_cipher_suites_config_json"])
            check_type(argname="argument tls_max", value=tls_max, expected_type=type_hints["tls_max"])
            check_type(argname="argument tls_min", value=tls_min, expected_type=type_hints["tls_min"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "gateway_unique_id": gateway_unique_id,
            "name": name,
            "protocol": protocol,
        }
        if cert_identifier is not None:
            self._values["cert_identifier"] = cert_identifier
        if http2 is not None:
            self._values["http2"] = http2
        if must_https is not None:
            self._values["must_https"] = must_https
        if tls_cipher_suites_config_json is not None:
            self._values["tls_cipher_suites_config_json"] = tls_cipher_suites_config_json
        if tls_max is not None:
            self._values["tls_max"] = tls_max
        if tls_min is not None:
            self._values["tls_min"] = tls_min

    @builtins.property
    def gateway_unique_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: gatewayUniqueId: The unique identifier of the gateway.
        '''
        result = self._values.get("gateway_unique_id")
        assert result is not None, "Required property 'gateway_unique_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The domain name.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def protocol(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: protocol: The protocol type: HTTP, HTTPS.
        '''
        result = self._values.get("protocol")
        assert result is not None, "Required property 'protocol' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cert_identifier(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: certIdentifier: Certificate ID.
        '''
        result = self._values.get("cert_identifier")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def http2(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: http2: Whether to enable Http2: open, close, globalConfig.
        '''
        result = self._values.get("http2")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def must_https(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: mustHttps: Whether to enable HTTPS.
        '''
        result = self._values.get("must_https")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tls_cipher_suites_config_json(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosGatewayDomain.TlsCipherSuitesConfigJSONProperty]]:
        '''
        :Property: tlsCipherSuitesConfigJson: TLS encryption suite configuration.
        '''
        result = self._values.get("tls_cipher_suites_config_json")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosGatewayDomain.TlsCipherSuitesConfigJSONProperty]], result)

    @builtins.property
    def tls_max(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: tlsMax: The maximum TLS version.
        '''
        result = self._values.get("tls_max")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tls_min(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: tlsMin: The minimum TLS version.
        '''
        result = self._values.get("tls_min")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosGatewayDomainProps(%s)" % ", ".join(
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


class RosGatewayRoute(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mse.RosGatewayRoute",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::MSE::GatewayRoute``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``GatewayRoute`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gatewayroute
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosGatewayRouteProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c95abdc0d157104092c16c25740f99c98b23b69558dc2d250584af26a389e0ca)
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
            type_hints = typing.get_type_hints(_typecheckingstub__bfd70d945a70f1923b3e07f7cf3f8fc04b9bd26bcad079b01fab5315f404de08)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrRouteId")
    def attr_route_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RouteId: The ID of the route.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRouteId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="domainIdList")
    def domain_id_list(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: domainIdList: The list of domain IDs in JSON format.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], jsii.get(self, "domainIdList"))

    @domain_id_list.setter
    def domain_id_list(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2b8af284ab59c62c63504098c1e214db2fa8d99ac6eac10d537800db3130c34e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "domainIdList", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__094efe53747e2e1635cc75f708744aa01b1981b4b73e74d64c4b235ec8098e3e)
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
            type_hints = typing.get_type_hints(_typecheckingstub__8fffdabebc8b9743d9ee5ae7db5369ed1c4c46b0cdf2eac9bcf826ae8e2dbd04)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "gatewayUniqueId", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name of the route.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4df118b7324468738157e5e5d79df25a84fd244b0d14bc86f32a5f77863cfcd9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the route.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__177a33b1479942a4b2eb06d05070f2fc4758dc9e0ba0d63155608fc136b754d9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="destinationType")
    def destination_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        destinationType: The type of destination service. Valid values:

        - Single: single service
        - Multiple: multiple services
        - VersionOriented: tag-based routing
        - Mock: mock response
        - Redirect: redirect
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "destinationType"))

    @destination_type.setter
    def destination_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__647889ff68e76aa17c9b89d5bfe261998c8f1007dbbdedfa5cdb80f720c88326)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "destinationType", value)

    @builtins.property
    @jsii.member(jsii_name="directResponseJson")
    def direct_response_json(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGatewayRoute.DirectResponseJSONProperty"]]:
        '''
        :Property: directResponseJson: Configuration for mock response.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGatewayRoute.DirectResponseJSONProperty"]], jsii.get(self, "directResponseJson"))

    @direct_response_json.setter
    def direct_response_json(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGatewayRoute.DirectResponseJSONProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4ba6baba2ced00cff7a1c1ffbfb1423bd3b619bb800359dcd2c33eb6ed622f06)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "directResponseJson", value)

    @builtins.property
    @jsii.member(jsii_name="domainId")
    def domain_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: domainId: The ID of the domain.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "domainId"))

    @domain_id.setter
    def domain_id(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__05913e2e997931ff64397510f5e6a7050e62ac70f17a6b0df2dcfc05c5ffe285)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "domainId", value)

    @builtins.property
    @jsii.member(jsii_name="fallback")
    def fallback(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: fallback: Whether to enable fallback service.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "fallback"))

    @fallback.setter
    def fallback(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6afdb41fdcb0bd99449ab7c0b9e8b6bed7666822257b9f95bdfb53a03db782b5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "fallback", value)

    @builtins.property
    @jsii.member(jsii_name="fallbackServices")
    def fallback_services(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGatewayRoute.FallbackServicesProperty"]]]]:
        '''
        :Property: fallbackServices: The list of fallback services.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGatewayRoute.FallbackServicesProperty"]]]], jsii.get(self, "fallbackServices"))

    @fallback_services.setter
    def fallback_services(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGatewayRoute.FallbackServicesProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__38523764ec20519badef8b071eea66ac62360e253af182123785ab2c216dddb3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "fallbackServices", value)

    @builtins.property
    @jsii.member(jsii_name="gatewayId")
    def gateway_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: gatewayId: The ID of the gateway.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "gatewayId"))

    @gateway_id.setter
    def gateway_id(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__58aaf07a4f71baa401b075a2309d2a53a516171187fc99660d26017584cfdb9e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "gatewayId", value)

    @builtins.property
    @jsii.member(jsii_name="policies")
    def policies(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: policies: The JSON string of route policies.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "policies"))

    @policies.setter
    def policies(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c32121227293f580a6fe7e5917c30535bb736c5b3ff205e783fa7b2d2c8b741b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "policies", value)

    @builtins.property
    @jsii.member(jsii_name="predicates")
    def predicates(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGatewayRoute.PredicatesProperty"]]:
        '''
        :Property: predicates: Matching rules for the route.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGatewayRoute.PredicatesProperty"]], jsii.get(self, "predicates"))

    @predicates.setter
    def predicates(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGatewayRoute.PredicatesProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9a2941a8b625db5bdcddf8e9949bc03c0eb83369dcfff48efb22e27f8ce8d286)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "predicates", value)

    @builtins.property
    @jsii.member(jsii_name="redirectJson")
    def redirect_json(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGatewayRoute.RedirectJSONProperty"]]:
        '''
        :Property: redirectJson: Configuration for redirect.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGatewayRoute.RedirectJSONProperty"]], jsii.get(self, "redirectJson"))

    @redirect_json.setter
    def redirect_json(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGatewayRoute.RedirectJSONProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__51b745989f7796bede67c225ab4a5ffaa610ed6afca9b6f54471c491519b7dde)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "redirectJson", value)

    @builtins.property
    @jsii.member(jsii_name="routeOrder")
    def route_order(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: routeOrder: The order of the route. Smaller values indicate higher priority.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "routeOrder"))

    @route_order.setter
    def route_order(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__41d08b1b7b59945f395d887d3e756e678ae4dd3dee3e1eba7447a0c2b6bda894)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "routeOrder", value)

    @builtins.property
    @jsii.member(jsii_name="routeType")
    def route_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: routeType: The type of the route. Valid value: Op (control route).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "routeType"))

    @route_type.setter
    def route_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__84a52ffed26b676718ea8fe330f7f516782827495408395cc597eb06d41cd20c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "routeType", value)

    @builtins.property
    @jsii.member(jsii_name="services")
    def services(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGatewayRoute.ServicesProperty"]]]]:
        '''
        :Property: services: The list of backend services. Required when DestinationType is Single, Multiple, or VersionOriented.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGatewayRoute.ServicesProperty"]]]], jsii.get(self, "services"))

    @services.setter
    def services(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGatewayRoute.ServicesProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f00f9545b9f1c453d99e91d3bca7d828d3622634215bf5a549013a435271af20)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "services", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-mse.RosGatewayRoute.DirectResponseJSONProperty",
        jsii_struct_bases=[],
        name_mapping={"body": "body", "code": "code"},
    )
    class DirectResponseJSONProperty:
        def __init__(
            self,
            *,
            body: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            code: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param body: 
            :param code: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__bd145dac2537e3da68fb651e97adcb08881b7186ec0c8b2b1190b073639d861f)
                check_type(argname="argument body", value=body, expected_type=type_hints["body"])
                check_type(argname="argument code", value=code, expected_type=type_hints["code"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if body is not None:
                self._values["body"] = body
            if code is not None:
                self._values["code"] = code

        @builtins.property
        def body(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: body: The body content to return for the mock response.
            '''
            result = self._values.get("body")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def code(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: code: The HTTP status code to return for the mock response.
            '''
            result = self._values.get("code")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DirectResponseJSONProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-mse.RosGatewayRoute.FallbackServicesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "agreement_type": "agreementType",
            "group_name": "groupName",
            "name": "name",
            "namespace": "namespace",
            "percent": "percent",
            "service_id": "serviceId",
            "service_port": "servicePort",
            "source_type": "sourceType",
            "version": "version",
        },
    )
    class FallbackServicesProperty:
        def __init__(
            self,
            *,
            agreement_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            namespace: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            percent: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            service_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            service_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            source_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param agreement_type: 
            :param group_name: 
            :param name: 
            :param namespace: 
            :param percent: 
            :param service_id: 
            :param service_port: 
            :param source_type: 
            :param version: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__9d5c95b5a91e5a9000f8b9bbef1c29c115aedede8013df11baf7045109d70e17)
                check_type(argname="argument agreement_type", value=agreement_type, expected_type=type_hints["agreement_type"])
                check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument namespace", value=namespace, expected_type=type_hints["namespace"])
                check_type(argname="argument percent", value=percent, expected_type=type_hints["percent"])
                check_type(argname="argument service_id", value=service_id, expected_type=type_hints["service_id"])
                check_type(argname="argument service_port", value=service_port, expected_type=type_hints["service_port"])
                check_type(argname="argument source_type", value=source_type, expected_type=type_hints["source_type"])
                check_type(argname="argument version", value=version, expected_type=type_hints["version"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if agreement_type is not None:
                self._values["agreement_type"] = agreement_type
            if group_name is not None:
                self._values["group_name"] = group_name
            if name is not None:
                self._values["name"] = name
            if namespace is not None:
                self._values["namespace"] = namespace
            if percent is not None:
                self._values["percent"] = percent
            if service_id is not None:
                self._values["service_id"] = service_id
            if service_port is not None:
                self._values["service_port"] = service_port
            if source_type is not None:
                self._values["source_type"] = source_type
            if version is not None:
                self._values["version"] = version

        @builtins.property
        def agreement_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: agreementType: The protocol type of the fallback service.
            '''
            result = self._values.get("agreement_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def group_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: groupName: The group name of the fallback service.
            '''
            result = self._values.get("group_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: name: The name of the fallback service.
            '''
            result = self._values.get("name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def namespace(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: namespace: The namespace of the fallback service.
            '''
            result = self._values.get("namespace")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def percent(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: percent: The weight percentage of the fallback service.
            '''
            result = self._values.get("percent")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def service_id(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: serviceId: The ID of the fallback service.
            '''
            result = self._values.get("service_id")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def service_port(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: servicePort: The port of the fallback service.
            '''
            result = self._values.get("service_port")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def source_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: sourceType: The source type of the fallback service.
            '''
            result = self._values.get("source_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def version(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: version: The version of the fallback service.
            '''
            result = self._values.get("version")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "FallbackServicesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-mse.RosGatewayRoute.HeaderPredicatesProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "type": "type", "value": "value"},
    )
    class HeaderPredicatesProperty:
        def __init__(
            self,
            *,
            key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param type: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__a91415deced0823ef6b82ee8e30f0e8faf0a67bb21aacdcd52bc7d45c81b2672)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if key is not None:
                self._values["key"] = key
            if type is not None:
                self._values["type"] = type
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: key: The key of the request header.
            '''
            result = self._values.get("key")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: type: The matching type for the header.
            '''
            result = self._values.get("type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: The value of the request header.
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "HeaderPredicatesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-mse.RosGatewayRoute.HttpDubboTranscoderProperty",
        jsii_struct_bases=[],
        name_mapping={
            "dubbo_service_group": "dubboServiceGroup",
            "dubbo_service_name": "dubboServiceName",
            "dubbo_service_version": "dubboServiceVersion",
            "mothed_map_list": "mothedMapList",
        },
    )
    class HttpDubboTranscoderProperty:
        def __init__(
            self,
            *,
            dubbo_service_group: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            dubbo_service_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            dubbo_service_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            mothed_map_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosGatewayRoute.MothedMapListProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        ) -> None:
            '''
            :param dubbo_service_group: 
            :param dubbo_service_name: 
            :param dubbo_service_version: 
            :param mothed_map_list: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__1cd42c862c5e076140ae0efa0d65d50eece94fa573cb436a5ce309a07ad6135b)
                check_type(argname="argument dubbo_service_group", value=dubbo_service_group, expected_type=type_hints["dubbo_service_group"])
                check_type(argname="argument dubbo_service_name", value=dubbo_service_name, expected_type=type_hints["dubbo_service_name"])
                check_type(argname="argument dubbo_service_version", value=dubbo_service_version, expected_type=type_hints["dubbo_service_version"])
                check_type(argname="argument mothed_map_list", value=mothed_map_list, expected_type=type_hints["mothed_map_list"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if dubbo_service_group is not None:
                self._values["dubbo_service_group"] = dubbo_service_group
            if dubbo_service_name is not None:
                self._values["dubbo_service_name"] = dubbo_service_name
            if dubbo_service_version is not None:
                self._values["dubbo_service_version"] = dubbo_service_version
            if mothed_map_list is not None:
                self._values["mothed_map_list"] = mothed_map_list

        @builtins.property
        def dubbo_service_group(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: dubboServiceGroup: The group of the Dubbo service.
            '''
            result = self._values.get("dubbo_service_group")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def dubbo_service_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: dubboServiceName: The name of the Dubbo service.
            '''
            result = self._values.get("dubbo_service_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def dubbo_service_version(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: dubboServiceVersion: The version of the Dubbo service.
            '''
            result = self._values.get("dubbo_service_version")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def mothed_map_list(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGatewayRoute.MothedMapListProperty"]]]]:
            '''
            :Property: mothedMapList: List of Dubbo forwarding rules.
            '''
            result = self._values.get("mothed_map_list")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGatewayRoute.MothedMapListProperty"]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "HttpDubboTranscoderProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-mse.RosGatewayRoute.MothedMapListProperty",
        jsii_struct_bases=[],
        name_mapping={
            "dubbo_mothed_name": "dubboMothedName",
            "http_mothed": "httpMothed",
            "mothedpath": "mothedpath",
            "param_maps_list": "paramMapsList",
            "pass_through_all_headers": "passThroughAllHeaders",
            "pass_through_list": "passThroughList",
        },
    )
    class MothedMapListProperty:
        def __init__(
            self,
            *,
            dubbo_mothed_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            http_mothed: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            mothedpath: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            param_maps_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosGatewayRoute.ParamMapsListProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            pass_through_all_headers: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            pass_through_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        ) -> None:
            '''
            :param dubbo_mothed_name: 
            :param http_mothed: 
            :param mothedpath: 
            :param param_maps_list: 
            :param pass_through_all_headers: 
            :param pass_through_list: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__e48d20bac8b1007e4694855a841eac659610ba278fda61fc0f529765135fe8d4)
                check_type(argname="argument dubbo_mothed_name", value=dubbo_mothed_name, expected_type=type_hints["dubbo_mothed_name"])
                check_type(argname="argument http_mothed", value=http_mothed, expected_type=type_hints["http_mothed"])
                check_type(argname="argument mothedpath", value=mothedpath, expected_type=type_hints["mothedpath"])
                check_type(argname="argument param_maps_list", value=param_maps_list, expected_type=type_hints["param_maps_list"])
                check_type(argname="argument pass_through_all_headers", value=pass_through_all_headers, expected_type=type_hints["pass_through_all_headers"])
                check_type(argname="argument pass_through_list", value=pass_through_list, expected_type=type_hints["pass_through_list"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if dubbo_mothed_name is not None:
                self._values["dubbo_mothed_name"] = dubbo_mothed_name
            if http_mothed is not None:
                self._values["http_mothed"] = http_mothed
            if mothedpath is not None:
                self._values["mothedpath"] = mothedpath
            if param_maps_list is not None:
                self._values["param_maps_list"] = param_maps_list
            if pass_through_all_headers is not None:
                self._values["pass_through_all_headers"] = pass_through_all_headers
            if pass_through_list is not None:
                self._values["pass_through_list"] = pass_through_list

        @builtins.property
        def dubbo_mothed_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: dubboMothedName: The name of the Dubbo method.
            '''
            result = self._values.get("dubbo_mothed_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def http_mothed(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            httpMothed: The corresponding HTTP method. Supported values:

            - ALL_GET
            - ALL_POST
            - ALL_PUT
            - ALL_DELETE
            - ALL_PATCH
            '''
            result = self._values.get("http_mothed")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def mothedpath(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: mothedpath: The path to match for the method.
            '''
            result = self._values.get("mothedpath")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def param_maps_list(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGatewayRoute.ParamMapsListProperty"]]]]:
            '''
            :Property: paramMapsList: List of parameter mappings.
            '''
            result = self._values.get("param_maps_list")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGatewayRoute.ParamMapsListProperty"]]]], result)

        @builtins.property
        def pass_through_all_headers(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            passThroughAllHeaders: Header pass-through type. Valid values:

            - PASS_ALL: Pass all headers.
            - PASS_NOT: Do not pass any header.
            - PASS_ASSIGN: Pass specified headers.
            '''
            result = self._values.get("pass_through_all_headers")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def pass_through_list(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: passThroughList: List of headers to pass through.
            '''
            result = self._values.get("pass_through_list")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "MothedMapListProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-mse.RosGatewayRoute.ParamMapsListProperty",
        jsii_struct_bases=[],
        name_mapping={
            "extract_key": "extractKey",
            "extract_key_spec": "extractKeySpec",
            "mapping_type": "mappingType",
        },
    )
    class ParamMapsListProperty:
        def __init__(
            self,
            *,
            extract_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            extract_key_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            mapping_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param extract_key: 
            :param extract_key_spec: 
            :param mapping_type: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__717123bafa687595b08d8a32004758f5fe2009f3a7fa051c5b44fade3d3a936f)
                check_type(argname="argument extract_key", value=extract_key, expected_type=type_hints["extract_key"])
                check_type(argname="argument extract_key_spec", value=extract_key_spec, expected_type=type_hints["extract_key_spec"])
                check_type(argname="argument mapping_type", value=mapping_type, expected_type=type_hints["mapping_type"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if extract_key is not None:
                self._values["extract_key"] = extract_key
            if extract_key_spec is not None:
                self._values["extract_key_spec"] = extract_key_spec
            if mapping_type is not None:
                self._values["mapping_type"] = mapping_type

        @builtins.property
        def extract_key(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: extractKey: The key to extract from the input.
            '''
            result = self._values.get("extract_key")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def extract_key_spec(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            extractKeySpec: Position of input parameter. Valid values:

            - ALL_QUERY_PARAMETER: Query parameters
            - ALL_HEADER: Request headers
            - ALL_PATH: Request path
            - ALL_BODY: Request body
            '''
            result = self._values.get("extract_key_spec")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def mapping_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: mappingType: The type of the backend parameter.
            '''
            result = self._values.get("mapping_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ParamMapsListProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-mse.RosGatewayRoute.PathPredicatesProperty",
        jsii_struct_bases=[],
        name_mapping={"ignore_case": "ignoreCase", "path": "path", "type": "type"},
    )
    class PathPredicatesProperty:
        def __init__(
            self,
            *,
            ignore_case: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param ignore_case: 
            :param path: 
            :param type: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__9483195264fde2c884c2e82779b552b12af95c04907b9b0ade3e66bdb86154e3)
                check_type(argname="argument ignore_case", value=ignore_case, expected_type=type_hints["ignore_case"])
                check_type(argname="argument path", value=path, expected_type=type_hints["path"])
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if ignore_case is not None:
                self._values["ignore_case"] = ignore_case
            if path is not None:
                self._values["path"] = path
            if type is not None:
                self._values["type"] = type

        @builtins.property
        def ignore_case(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ignoreCase: Whether to ignore case when matching paths.
            '''
            result = self._values.get("ignore_case")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def path(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: path: The path to match.
            '''
            result = self._values.get("path")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            type: The type of path matching. Valid values:

            - PRE: prefix match.
            - EQUAL: exact match.
            - REGULAR: regular expression match.
            '''
            result = self._values.get("type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PathPredicatesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-mse.RosGatewayRoute.PredicatesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "header_predicates": "headerPredicates",
            "method_predicates": "methodPredicates",
            "path_predicates": "pathPredicates",
            "query_predicates": "queryPredicates",
        },
    )
    class PredicatesProperty:
        def __init__(
            self,
            *,
            header_predicates: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosGatewayRoute.HeaderPredicatesProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            method_predicates: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            path_predicates: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosGatewayRoute.PathPredicatesProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            query_predicates: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosGatewayRoute.QueryPredicatesProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        ) -> None:
            '''
            :param header_predicates: 
            :param method_predicates: 
            :param path_predicates: 
            :param query_predicates: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__0dfc272c92652e961ae7142f6b33c8f11bc4c4de0612da8bbeced947e4082ef8)
                check_type(argname="argument header_predicates", value=header_predicates, expected_type=type_hints["header_predicates"])
                check_type(argname="argument method_predicates", value=method_predicates, expected_type=type_hints["method_predicates"])
                check_type(argname="argument path_predicates", value=path_predicates, expected_type=type_hints["path_predicates"])
                check_type(argname="argument query_predicates", value=query_predicates, expected_type=type_hints["query_predicates"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if header_predicates is not None:
                self._values["header_predicates"] = header_predicates
            if method_predicates is not None:
                self._values["method_predicates"] = method_predicates
            if path_predicates is not None:
                self._values["path_predicates"] = path_predicates
            if query_predicates is not None:
                self._values["query_predicates"] = query_predicates

        @builtins.property
        def header_predicates(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGatewayRoute.HeaderPredicatesProperty"]]]]:
            '''
            :Property: headerPredicates: Request header matching rules.
            '''
            result = self._values.get("header_predicates")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGatewayRoute.HeaderPredicatesProperty"]]]], result)

        @builtins.property
        def method_predicates(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: methodPredicates: HTTP method matching rules.
            '''
            result = self._values.get("method_predicates")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def path_predicates(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGatewayRoute.PathPredicatesProperty"]]:
            '''
            :Property: pathPredicates: Path matching rules.
            '''
            result = self._values.get("path_predicates")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGatewayRoute.PathPredicatesProperty"]], result)

        @builtins.property
        def query_predicates(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGatewayRoute.QueryPredicatesProperty"]]]]:
            '''
            :Property: queryPredicates: URL query parameter matching rules.
            '''
            result = self._values.get("query_predicates")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGatewayRoute.QueryPredicatesProperty"]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PredicatesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-mse.RosGatewayRoute.QueryPredicatesProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "type": "type", "value": "value"},
    )
    class QueryPredicatesProperty:
        def __init__(
            self,
            *,
            key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param type: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__d3a257146a94380a1beadeeca7720fc4ce2ae4b0f6d9cb7d1901e1fcc28978bd)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if key is not None:
                self._values["key"] = key
            if type is not None:
                self._values["type"] = type
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: key: The name of the query parameter.
            '''
            result = self._values.get("key")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: type: The matching type for the query parameter.
            '''
            result = self._values.get("type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: The value to match for the query parameter.
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "QueryPredicatesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-mse.RosGatewayRoute.RedirectJSONProperty",
        jsii_struct_bases=[],
        name_mapping={"code": "code", "host": "host", "path": "path"},
    )
    class RedirectJSONProperty:
        def __init__(
            self,
            *,
            code: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            host: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param code: 
            :param host: 
            :param path: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__f84fe74fc1654b3292c59a7dd5a263d2e4ffb32210629f965a9d74379907fc9f)
                check_type(argname="argument code", value=code, expected_type=type_hints["code"])
                check_type(argname="argument host", value=host, expected_type=type_hints["host"])
                check_type(argname="argument path", value=path, expected_type=type_hints["path"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if code is not None:
                self._values["code"] = code
            if host is not None:
                self._values["host"] = host
            if path is not None:
                self._values["path"] = path

        @builtins.property
        def code(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: code: The HTTP status code for redirect.
            '''
            result = self._values.get("code")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def host(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: host: The host to redirect to.
            '''
            result = self._values.get("host")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def path(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: path: The path to redirect to.
            '''
            result = self._values.get("path")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "RedirectJSONProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-mse.RosGatewayRoute.ServicesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "agreement_type": "agreementType",
            "group_name": "groupName",
            "http_dubbo_transcoder": "httpDubboTranscoder",
            "name": "name",
            "namespace": "namespace",
            "percent": "percent",
            "service_id": "serviceId",
            "service_port": "servicePort",
            "source_type": "sourceType",
            "version": "version",
        },
    )
    class ServicesProperty:
        def __init__(
            self,
            *,
            agreement_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            http_dubbo_transcoder: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosGatewayRoute.HttpDubboTranscoderProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            namespace: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            percent: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            service_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            service_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            source_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param agreement_type: 
            :param group_name: 
            :param http_dubbo_transcoder: 
            :param name: 
            :param namespace: 
            :param percent: 
            :param service_id: 
            :param service_port: 
            :param source_type: 
            :param version: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__76b49324de818af9c87deec9c416f02c8becc85d56b16bcea84a9623665334b9)
                check_type(argname="argument agreement_type", value=agreement_type, expected_type=type_hints["agreement_type"])
                check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
                check_type(argname="argument http_dubbo_transcoder", value=http_dubbo_transcoder, expected_type=type_hints["http_dubbo_transcoder"])
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument namespace", value=namespace, expected_type=type_hints["namespace"])
                check_type(argname="argument percent", value=percent, expected_type=type_hints["percent"])
                check_type(argname="argument service_id", value=service_id, expected_type=type_hints["service_id"])
                check_type(argname="argument service_port", value=service_port, expected_type=type_hints["service_port"])
                check_type(argname="argument source_type", value=source_type, expected_type=type_hints["source_type"])
                check_type(argname="argument version", value=version, expected_type=type_hints["version"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if agreement_type is not None:
                self._values["agreement_type"] = agreement_type
            if group_name is not None:
                self._values["group_name"] = group_name
            if http_dubbo_transcoder is not None:
                self._values["http_dubbo_transcoder"] = http_dubbo_transcoder
            if name is not None:
                self._values["name"] = name
            if namespace is not None:
                self._values["namespace"] = namespace
            if percent is not None:
                self._values["percent"] = percent
            if service_id is not None:
                self._values["service_id"] = service_id
            if service_port is not None:
                self._values["service_port"] = service_port
            if source_type is not None:
                self._values["source_type"] = source_type
            if version is not None:
                self._values["version"] = version

        @builtins.property
        def agreement_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: agreementType: The protocol type of the service.
            '''
            result = self._values.get("agreement_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def group_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: groupName: The group name of the service.
            '''
            result = self._values.get("group_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def http_dubbo_transcoder(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGatewayRoute.HttpDubboTranscoderProperty"]]:
            '''
            :Property: httpDubboTranscoder: Configuration for Dubbo protocol transcoding.
            '''
            result = self._values.get("http_dubbo_transcoder")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGatewayRoute.HttpDubboTranscoderProperty"]], result)

        @builtins.property
        def name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: name: The name of the service.
            '''
            result = self._values.get("name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def namespace(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: namespace: The namespace where the service resides.
            '''
            result = self._values.get("namespace")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def percent(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: percent: The percentage of traffic allocated to this service/version. Only used for multiple-service or tag-based routing.
            '''
            result = self._values.get("percent")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def service_id(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: serviceId: The ID of the service.
            '''
            result = self._values.get("service_id")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def service_port(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: servicePort: The port of the backend service.
            '''
            result = self._values.get("service_port")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def source_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: sourceType: The source type of the service.
            '''
            result = self._values.get("source_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def version(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: version: The version of the service. Only used for tag-based routing.
            '''
            result = self._values.get("version")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ServicesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mse.RosGatewayRouteProps",
    jsii_struct_bases=[],
    name_mapping={
        "domain_id_list": "domainIdList",
        "gateway_unique_id": "gatewayUniqueId",
        "name": "name",
        "description": "description",
        "destination_type": "destinationType",
        "direct_response_json": "directResponseJson",
        "domain_id": "domainId",
        "fallback": "fallback",
        "fallback_services": "fallbackServices",
        "gateway_id": "gatewayId",
        "policies": "policies",
        "predicates": "predicates",
        "redirect_json": "redirectJson",
        "route_order": "routeOrder",
        "route_type": "routeType",
        "services": "services",
    },
)
class RosGatewayRouteProps:
    def __init__(
        self,
        *,
        domain_id_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        gateway_unique_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        destination_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        direct_response_json: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGatewayRoute.DirectResponseJSONProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        domain_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        fallback: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        fallback_services: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGatewayRoute.FallbackServicesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        gateway_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        policies: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        predicates: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGatewayRoute.PredicatesProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        redirect_json: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGatewayRoute.RedirectJSONProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        route_order: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        route_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        services: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGatewayRoute.ServicesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosGatewayRoute``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gatewayroute

        :param domain_id_list: 
        :param gateway_unique_id: 
        :param name: 
        :param description: 
        :param destination_type: 
        :param direct_response_json: 
        :param domain_id: 
        :param fallback: 
        :param fallback_services: 
        :param gateway_id: 
        :param policies: 
        :param predicates: 
        :param redirect_json: 
        :param route_order: 
        :param route_type: 
        :param services: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4594428cc7e608ae1104d2460849d3f952e1fa3fc2c6f31aff4c02e340e395d5)
            check_type(argname="argument domain_id_list", value=domain_id_list, expected_type=type_hints["domain_id_list"])
            check_type(argname="argument gateway_unique_id", value=gateway_unique_id, expected_type=type_hints["gateway_unique_id"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument destination_type", value=destination_type, expected_type=type_hints["destination_type"])
            check_type(argname="argument direct_response_json", value=direct_response_json, expected_type=type_hints["direct_response_json"])
            check_type(argname="argument domain_id", value=domain_id, expected_type=type_hints["domain_id"])
            check_type(argname="argument fallback", value=fallback, expected_type=type_hints["fallback"])
            check_type(argname="argument fallback_services", value=fallback_services, expected_type=type_hints["fallback_services"])
            check_type(argname="argument gateway_id", value=gateway_id, expected_type=type_hints["gateway_id"])
            check_type(argname="argument policies", value=policies, expected_type=type_hints["policies"])
            check_type(argname="argument predicates", value=predicates, expected_type=type_hints["predicates"])
            check_type(argname="argument redirect_json", value=redirect_json, expected_type=type_hints["redirect_json"])
            check_type(argname="argument route_order", value=route_order, expected_type=type_hints["route_order"])
            check_type(argname="argument route_type", value=route_type, expected_type=type_hints["route_type"])
            check_type(argname="argument services", value=services, expected_type=type_hints["services"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "domain_id_list": domain_id_list,
            "gateway_unique_id": gateway_unique_id,
            "name": name,
        }
        if description is not None:
            self._values["description"] = description
        if destination_type is not None:
            self._values["destination_type"] = destination_type
        if direct_response_json is not None:
            self._values["direct_response_json"] = direct_response_json
        if domain_id is not None:
            self._values["domain_id"] = domain_id
        if fallback is not None:
            self._values["fallback"] = fallback
        if fallback_services is not None:
            self._values["fallback_services"] = fallback_services
        if gateway_id is not None:
            self._values["gateway_id"] = gateway_id
        if policies is not None:
            self._values["policies"] = policies
        if predicates is not None:
            self._values["predicates"] = predicates
        if redirect_json is not None:
            self._values["redirect_json"] = redirect_json
        if route_order is not None:
            self._values["route_order"] = route_order
        if route_type is not None:
            self._values["route_type"] = route_type
        if services is not None:
            self._values["services"] = services

    @builtins.property
    def domain_id_list(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: domainIdList: The list of domain IDs in JSON format.
        '''
        result = self._values.get("domain_id_list")
        assert result is not None, "Required property 'domain_id_list' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

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
        :Property: name: The name of the route.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the route.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def destination_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        destinationType: The type of destination service. Valid values:

        - Single: single service
        - Multiple: multiple services
        - VersionOriented: tag-based routing
        - Mock: mock response
        - Redirect: redirect
        '''
        result = self._values.get("destination_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def direct_response_json(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosGatewayRoute.DirectResponseJSONProperty]]:
        '''
        :Property: directResponseJson: Configuration for mock response.
        '''
        result = self._values.get("direct_response_json")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosGatewayRoute.DirectResponseJSONProperty]], result)

    @builtins.property
    def domain_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: domainId: The ID of the domain.
        '''
        result = self._values.get("domain_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def fallback(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: fallback: Whether to enable fallback service.
        '''
        result = self._values.get("fallback")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def fallback_services(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosGatewayRoute.FallbackServicesProperty]]]]:
        '''
        :Property: fallbackServices: The list of fallback services.
        '''
        result = self._values.get("fallback_services")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosGatewayRoute.FallbackServicesProperty]]]], result)

    @builtins.property
    def gateway_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: gatewayId: The ID of the gateway.
        '''
        result = self._values.get("gateway_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def policies(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: policies: The JSON string of route policies.
        '''
        result = self._values.get("policies")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def predicates(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosGatewayRoute.PredicatesProperty]]:
        '''
        :Property: predicates: Matching rules for the route.
        '''
        result = self._values.get("predicates")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosGatewayRoute.PredicatesProperty]], result)

    @builtins.property
    def redirect_json(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosGatewayRoute.RedirectJSONProperty]]:
        '''
        :Property: redirectJson: Configuration for redirect.
        '''
        result = self._values.get("redirect_json")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosGatewayRoute.RedirectJSONProperty]], result)

    @builtins.property
    def route_order(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: routeOrder: The order of the route. Smaller values indicate higher priority.
        '''
        result = self._values.get("route_order")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def route_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: routeType: The type of the route. Valid value: Op (control route).
        '''
        result = self._values.get("route_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def services(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosGatewayRoute.ServicesProperty]]]]:
        '''
        :Property: services: The list of backend services. Required when DestinationType is Single, Multiple, or VersionOriented.
        '''
        result = self._values.get("services")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosGatewayRoute.ServicesProperty]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosGatewayRouteProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosGatewayService(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mse.RosGatewayService",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::MSE::GatewayService``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``GatewayService`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gatewayservice
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosGatewayServiceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e3e76017bb4b6668986508581e0456cb09782d06a6c3865defdd08b2475606c9)
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
            type_hints = typing.get_type_hints(_typecheckingstub__50a69206915cb01957c6ad2da181943de25e9b53fc34fb233c9fb5b953c868c8)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Name: The name of the service.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceId")
    def attr_service_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ServiceId: The ID of the gateway service.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServiceId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__6b4258a1f4c07641d6f06eab9b5b919b491f5f6e71b05147ef643ebdb84f6e9c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="gatewayUniqueId")
    def gateway_unique_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: gatewayUniqueId: Unique identifier of the gateway.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "gatewayUniqueId"))

    @gateway_unique_id.setter
    def gateway_unique_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__90ee7aa3f6a09390b57e9dfd639efbe7b260f20078ca7bcb4daebdad93efd223)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "gatewayUniqueId", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: Name of the service.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c2989472434c302759bda8768037b5f8fdb5e297ef2bf5164c7c4fd1c16fa3cb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="sourceType")
    def source_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        sourceType: Type of service source. Valid values:

        - MSE: MSE-NACOS
        - K8s: ACK container service
        - VIP: Fixed address
        - DNS: DNS domain name
        - FC: Function Compute
        - EDAS: EDAS
        - MSE_ZK: MSE-Zookeeper
        - SAE: SAE
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "sourceType"))

    @source_type.setter
    def source_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3179d6ed9408ae5860bfc64b626b292ab4f5fb640d613c7fb470a93810b2c177)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceType", value)

    @builtins.property
    @jsii.member(jsii_name="dnsServerList")
    def dns_server_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: dnsServerList: List of DNS servers.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "dnsServerList"))

    @dns_server_list.setter
    def dns_server_list(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dae3f50d8d0bf36f01c30e5148e11fee4e2607a02313cd1fc9e2c445a74e753f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dnsServerList", value)

    @builtins.property
    @jsii.member(jsii_name="fcAlias")
    def fc_alias(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: fcAlias: Function Compute service alias. Used when SourceType is FC.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "fcAlias"))

    @fc_alias.setter
    def fc_alias(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a78e5dd9b627392927d5e1b29204d2a8a5678fb4fa88c5496b8f599064cd220a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "fcAlias", value)

    @builtins.property
    @jsii.member(jsii_name="fcServiceName")
    def fc_service_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: fcServiceName: Function Compute service name. Required when SourceType is FC.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "fcServiceName"))

    @fc_service_name.setter
    def fc_service_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c86677c33223ec94882a5c99ae5c62aec5bc358e795d0a7bd0c9442a8916b63f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "fcServiceName", value)

    @builtins.property
    @jsii.member(jsii_name="fcVersion")
    def fc_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: fcVersion: Function Compute service version. Used when SourceType is FC.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "fcVersion"))

    @fc_version.setter
    def fc_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2976edd1c73c588c38817dc5c65249b32338afef47e1db59417e9ec86ab8400f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "fcVersion", value)

    @builtins.property
    @jsii.member(jsii_name="groupName")
    def group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groupName: Group name of the service.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "groupName"))

    @group_name.setter
    def group_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__866a59ae04dc5d030ad08efa88bd002925ba232e8eb5598a560e6c17198ae19d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupName", value)

    @builtins.property
    @jsii.member(jsii_name="ips")
    def ips(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: ips: List of IPs.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "ips"))

    @ips.setter
    def ips(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1bdc6fb81c320ebac0cf1760ba2995c08222936bb7c646891c0037d8547c88be)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ips", value)

    @builtins.property
    @jsii.member(jsii_name="namespace")
    def namespace(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: namespace: Namespace of the service.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "namespace"))

    @namespace.setter
    def namespace(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__29315e8aaf5966b2166f41a252dc230b985e92ac03000d496675d76acb654f76)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "namespace", value)

    @builtins.property
    @jsii.member(jsii_name="saeAppId")
    def sae_app_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: saeAppId: SAE application ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "saeAppId"))

    @sae_app_id.setter
    def sae_app_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__17d5a133cba2a401660b19382b6157905745ed819540668afd38a6b10e518da0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "saeAppId", value)

    @builtins.property
    @jsii.member(jsii_name="servicePort")
    def service_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: servicePort: Port of the service.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "servicePort"))

    @service_port.setter
    def service_port(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9fa0ca64d6d82541329bc5646ae31290bc397813ae7a4ee68108a53f3eb9da4c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "servicePort", value)

    @builtins.property
    @jsii.member(jsii_name="serviceProtocol")
    def service_protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: serviceProtocol: Protocol of the service.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "serviceProtocol"))

    @service_protocol.setter
    def service_protocol(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__069495745906ee919938442f1cd4351761cd5209404305a338f768c8d7f3d643)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serviceProtocol", value)

    @builtins.property
    @jsii.member(jsii_name="sourceId")
    def source_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sourceId: Source ID of the service. Used when specifying a source to add services.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sourceId"))

    @source_id.setter
    def source_id(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4a3aad403b4281356ea55e5f652199f4224debe2bd01c9c29b9c1fba1cf79ed6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceId", value)

    @builtins.property
    @jsii.member(jsii_name="tlsSetting")
    def tls_setting(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: tlsSetting: TLS settings for the service.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "tlsSetting"))

    @tls_setting.setter
    def tls_setting(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fa0c967781b15ed74c9d429f334568289b4b4a86779333657ee99dc984633f4c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tlsSetting", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mse.RosGatewayServiceProps",
    jsii_struct_bases=[],
    name_mapping={
        "gateway_unique_id": "gatewayUniqueId",
        "name": "name",
        "source_type": "sourceType",
        "dns_server_list": "dnsServerList",
        "fc_alias": "fcAlias",
        "fc_service_name": "fcServiceName",
        "fc_version": "fcVersion",
        "group_name": "groupName",
        "ips": "ips",
        "namespace": "namespace",
        "sae_app_id": "saeAppId",
        "service_port": "servicePort",
        "service_protocol": "serviceProtocol",
        "source_id": "sourceId",
        "tls_setting": "tlsSetting",
    },
)
class RosGatewayServiceProps:
    def __init__(
        self,
        *,
        gateway_unique_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        dns_server_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        fc_alias: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        fc_service_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        fc_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ips: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        namespace: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sae_app_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        service_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        service_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tls_setting: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    ) -> None:
        '''Properties for defining a ``RosGatewayService``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gatewayservice

        :param gateway_unique_id: 
        :param name: 
        :param source_type: 
        :param dns_server_list: 
        :param fc_alias: 
        :param fc_service_name: 
        :param fc_version: 
        :param group_name: 
        :param ips: 
        :param namespace: 
        :param sae_app_id: 
        :param service_port: 
        :param service_protocol: 
        :param source_id: 
        :param tls_setting: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__18391150c578b198d1bbeddd3d7ff5b4477a324a6a90e06e6817fd066de76a49)
            check_type(argname="argument gateway_unique_id", value=gateway_unique_id, expected_type=type_hints["gateway_unique_id"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument source_type", value=source_type, expected_type=type_hints["source_type"])
            check_type(argname="argument dns_server_list", value=dns_server_list, expected_type=type_hints["dns_server_list"])
            check_type(argname="argument fc_alias", value=fc_alias, expected_type=type_hints["fc_alias"])
            check_type(argname="argument fc_service_name", value=fc_service_name, expected_type=type_hints["fc_service_name"])
            check_type(argname="argument fc_version", value=fc_version, expected_type=type_hints["fc_version"])
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument ips", value=ips, expected_type=type_hints["ips"])
            check_type(argname="argument namespace", value=namespace, expected_type=type_hints["namespace"])
            check_type(argname="argument sae_app_id", value=sae_app_id, expected_type=type_hints["sae_app_id"])
            check_type(argname="argument service_port", value=service_port, expected_type=type_hints["service_port"])
            check_type(argname="argument service_protocol", value=service_protocol, expected_type=type_hints["service_protocol"])
            check_type(argname="argument source_id", value=source_id, expected_type=type_hints["source_id"])
            check_type(argname="argument tls_setting", value=tls_setting, expected_type=type_hints["tls_setting"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "gateway_unique_id": gateway_unique_id,
            "name": name,
            "source_type": source_type,
        }
        if dns_server_list is not None:
            self._values["dns_server_list"] = dns_server_list
        if fc_alias is not None:
            self._values["fc_alias"] = fc_alias
        if fc_service_name is not None:
            self._values["fc_service_name"] = fc_service_name
        if fc_version is not None:
            self._values["fc_version"] = fc_version
        if group_name is not None:
            self._values["group_name"] = group_name
        if ips is not None:
            self._values["ips"] = ips
        if namespace is not None:
            self._values["namespace"] = namespace
        if sae_app_id is not None:
            self._values["sae_app_id"] = sae_app_id
        if service_port is not None:
            self._values["service_port"] = service_port
        if service_protocol is not None:
            self._values["service_protocol"] = service_protocol
        if source_id is not None:
            self._values["source_id"] = source_id
        if tls_setting is not None:
            self._values["tls_setting"] = tls_setting

    @builtins.property
    def gateway_unique_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: gatewayUniqueId: Unique identifier of the gateway.
        '''
        result = self._values.get("gateway_unique_id")
        assert result is not None, "Required property 'gateway_unique_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: Name of the service.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        sourceType: Type of service source. Valid values:

        - MSE: MSE-NACOS
        - K8s: ACK container service
        - VIP: Fixed address
        - DNS: DNS domain name
        - FC: Function Compute
        - EDAS: EDAS
        - MSE_ZK: MSE-Zookeeper
        - SAE: SAE
        '''
        result = self._values.get("source_type")
        assert result is not None, "Required property 'source_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def dns_server_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: dnsServerList: List of DNS servers.
        '''
        result = self._values.get("dns_server_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def fc_alias(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: fcAlias: Function Compute service alias. Used when SourceType is FC.
        '''
        result = self._values.get("fc_alias")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def fc_service_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: fcServiceName: Function Compute service name. Required when SourceType is FC.
        '''
        result = self._values.get("fc_service_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def fc_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: fcVersion: Function Compute service version. Used when SourceType is FC.
        '''
        result = self._values.get("fc_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groupName: Group name of the service.
        '''
        result = self._values.get("group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ips(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: ips: List of IPs.
        '''
        result = self._values.get("ips")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def namespace(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: namespace: Namespace of the service.
        '''
        result = self._values.get("namespace")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sae_app_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: saeAppId: SAE application ID.
        '''
        result = self._values.get("sae_app_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def service_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: servicePort: Port of the service.
        '''
        result = self._values.get("service_port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def service_protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: serviceProtocol: Protocol of the service.
        '''
        result = self._values.get("service_protocol")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sourceId: Source ID of the service. Used when specifying a source to add services.
        '''
        result = self._values.get("source_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tls_setting(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: tlsSetting: TLS settings for the service.
        '''
        result = self._values.get("tls_setting")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosGatewayServiceProps(%s)" % ", ".join(
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
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::MSE::NacosService``.

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


class RosPluginConfig(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mse.RosPluginConfig",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::MSE::PluginConfig``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``PluginConfig`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-pluginconfig
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosPluginConfigProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__310b134e20a1791153ca42b1d610cbe82d931f83ceb7dba9e13764b784a209a5)
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
            type_hints = typing.get_type_hints(_typecheckingstub__48c76fd9bdcd428daade6b8c283fd2345c2534668cf2a81ff1125ba65d0dbdb2)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrPluginConfigId")
    def attr_plugin_config_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PluginConfigId: The ID of the plugin config.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPluginConfigId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="configLevel")
    def config_level(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        configLevel: The scope of the plugin application.

        - 0: Global
        - 1: Route
        - 2: Domain
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "configLevel"))

    @config_level.setter
    def config_level(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6be18b726712d904577f019cb5a51de70d6d70dcdd83a57b06922ce5327a3542)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "configLevel", value)

    @builtins.property
    @jsii.member(jsii_name="enable")
    def enable(self) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: enable: Whether to enable the plugin.
        '''
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "enable"))

    @enable.setter
    def enable(
        self,
        value: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eeb7e25d243741db979e7d4807e57541fbeb02972aadc4dcdc5bac8620ecacdf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enable", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8115483d810609e342625e9082001065395b695484a8a68d4e7955b04378db39)
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
            type_hints = typing.get_type_hints(_typecheckingstub__e979d306a381b1870b29d2cbbb284675c03eac5b78cb2676a03f9916c7748f08)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "gatewayUniqueId", value)

    @builtins.property
    @jsii.member(jsii_name="pluginId")
    def plugin_id(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: pluginId: The ID of the gateway plugin.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "pluginId"))

    @plugin_id.setter
    def plugin_id(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__77a597e26a838c854232d3c76527d004f10b6ab0e1f5a0a4508866b23cd7ab52)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "pluginId", value)

    @builtins.property
    @jsii.member(jsii_name="config")
    def config(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: config: The configuration of the plugin. For Wasm plugins, the content is in YAML format. For Lua plugins, the content is Lua code.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "config"))

    @config.setter
    def config(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6b544b2d1cf3cf2a5142215348979b070551ed2e92bcaf5ba9b0afa89a5b2c82)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "config", value)

    @builtins.property
    @jsii.member(jsii_name="resourceIdList")
    def resource_id_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: resourceIdList: List of domain IDs/route IDs (depending on ConfigLevel).
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "resourceIdList"))

    @resource_id_list.setter
    def resource_id_list(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f2e910dba1748a758b8ee516f619e718972687bea3d9f96c605653eec25ab53c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceIdList", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mse.RosPluginConfigProps",
    jsii_struct_bases=[],
    name_mapping={
        "config_level": "configLevel",
        "enable": "enable",
        "gateway_unique_id": "gatewayUniqueId",
        "plugin_id": "pluginId",
        "config": "config",
        "resource_id_list": "resourceIdList",
    },
)
class RosPluginConfigProps:
    def __init__(
        self,
        *,
        config_level: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        enable: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
        gateway_unique_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        plugin_id: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        config: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_id_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosPluginConfig``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-pluginconfig

        :param config_level: 
        :param enable: 
        :param gateway_unique_id: 
        :param plugin_id: 
        :param config: 
        :param resource_id_list: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a085ce6e03b1d3bfb538ca4db23641e4dee2c070975b2d9049342a554b1c6b74)
            check_type(argname="argument config_level", value=config_level, expected_type=type_hints["config_level"])
            check_type(argname="argument enable", value=enable, expected_type=type_hints["enable"])
            check_type(argname="argument gateway_unique_id", value=gateway_unique_id, expected_type=type_hints["gateway_unique_id"])
            check_type(argname="argument plugin_id", value=plugin_id, expected_type=type_hints["plugin_id"])
            check_type(argname="argument config", value=config, expected_type=type_hints["config"])
            check_type(argname="argument resource_id_list", value=resource_id_list, expected_type=type_hints["resource_id_list"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "config_level": config_level,
            "enable": enable,
            "gateway_unique_id": gateway_unique_id,
            "plugin_id": plugin_id,
        }
        if config is not None:
            self._values["config"] = config
        if resource_id_list is not None:
            self._values["resource_id_list"] = resource_id_list

    @builtins.property
    def config_level(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        configLevel: The scope of the plugin application.

        - 0: Global
        - 1: Route
        - 2: Domain
        '''
        result = self._values.get("config_level")
        assert result is not None, "Required property 'config_level' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def enable(self) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: enable: Whether to enable the plugin.
        '''
        result = self._values.get("enable")
        assert result is not None, "Required property 'enable' is missing"
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

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
    def plugin_id(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: pluginId: The ID of the gateway plugin.
        '''
        result = self._values.get("plugin_id")
        assert result is not None, "Required property 'plugin_id' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def config(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: config: The configuration of the plugin. For Wasm plugins, the content is in YAML format. For Lua plugins, the content is Lua code.
        '''
        result = self._values.get("config")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_id_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: resourceIdList: List of domain IDs/route IDs (depending on ConfigLevel).
        '''
        result = self._values.get("resource_id_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosPluginConfigProps(%s)" % ", ".join(
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
        '''Attribute AclEntryList: The list of ACL entries.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAclEntryList"))

    @builtins.property
    @jsii.member(jsii_name="attrAclId")
    def attr_acl_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AclId: The ID of the ACL.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAclId"))

    @builtins.property
    @jsii.member(jsii_name="attrAppVersion")
    def attr_app_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AppVersion: The version of the application.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAppVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Arn: The Alibaba Cloud Resource Name (ARN).'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrArn"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterAliasName")
    def attr_cluster_alias_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterAliasName: The alias name of the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterAliasName"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterId: The ID of the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterName")
    def attr_cluster_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterName: The name of the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterName"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterSpecification")
    def attr_cluster_specification(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterSpecification: The specification of the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterSpecification"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterType")
    def attr_cluster_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterType: The type of the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterType"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterVersion")
    def attr_cluster_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClusterVersion: The version of the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClusterVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrConfigAuthEnabled")
    def attr_config_auth_enabled(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConfigAuthEnabled: Whether to enable the configuration authentication.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConfigAuthEnabled"))

    @builtins.property
    @jsii.member(jsii_name="attrConfigSecretEnabled")
    def attr_config_secret_enabled(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConfigSecretEnabled: Whether to enable the configuration secret.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConfigSecretEnabled"))

    @builtins.property
    @jsii.member(jsii_name="attrConnectionType")
    def attr_connection_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConnectionType: The connection type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConnectionType"))

    @builtins.property
    @jsii.member(jsii_name="attrCpu")
    def attr_cpu(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Cpu: The number of CPU cores.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCpu"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskCapacity")
    def attr_disk_capacity(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DiskCapacity: The disk capacity.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDiskCapacity"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskType")
    def attr_disk_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DiskType: The disk type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDiskType"))

    @builtins.property
    @jsii.member(jsii_name="attrHealthStatus")
    def attr_health_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HealthStatus: The health status of the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHealthStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceCount")
    def attr_instance_count(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceCount: The number of instances.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceCount"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The ID of the cluster instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetAddress")
    def attr_internet_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InternetAddress: The public network address of the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInternetAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetDomain")
    def attr_internet_domain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InternetDomain: The public network domain of the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInternetDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetPort")
    def attr_internet_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InternetPort: The public network port of the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInternetPort"))

    @builtins.property
    @jsii.member(jsii_name="attrIntranetAddress")
    def attr_intranet_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IntranetAddress: The intranet address of the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIntranetAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrIntranetDomain")
    def attr_intranet_domain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IntranetDomain: The intranet domain of the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIntranetDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrIntranetPort")
    def attr_intranet_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IntranetPort: The intranet port of the cluster.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIntranetPort"))

    @builtins.property
    @jsii.member(jsii_name="attrMcpEnabled")
    def attr_mcp_enabled(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MCPEnabled: Whether to enable the MCP.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMcpEnabled"))

    @builtins.property
    @jsii.member(jsii_name="attrMemoryCapacity")
    def attr_memory_capacity(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MemoryCapacity: The memory capacity.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMemoryCapacity"))

    @builtins.property
    @jsii.member(jsii_name="attrMseVersion")
    def attr_mse_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MseVersion: The MSE version.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMseVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrNetType")
    def attr_net_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NetType: The network type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNetType"))

    @builtins.property
    @jsii.member(jsii_name="attrPayInfo")
    def attr_pay_info(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PayInfo: The payment information.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPayInfo"))

    @builtins.property
    @jsii.member(jsii_name="attrPubNetworkFlow")
    def attr_pub_network_flow(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PubNetworkFlow: The public network flow.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPubNetworkFlow"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcId: The ID of the VPC.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VSwitchId: The ID of the VSwitch.'''
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


@jsii.implements(IGatewayDomain)
class GatewayDomain(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mse.GatewayDomain",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::MSE::GatewayDomain``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosGatewayDomain``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gatewaydomain
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[GatewayDomainProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a68c2f0e88036919e7755d3bfb1a7aa33733613fe9dfc08c0882764d62b04557)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDomainId")
    def attr_domain_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainId: The ID of the domain.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDomainId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> GatewayDomainProps:
        return typing.cast(GatewayDomainProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6ccf53499835d8f6bcb91c79bf3852c45bd052df837f226b2934a5387773ea5c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2f75656e96188426288f010a15bab0c607020b02940b096435fd50aaee29264a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ee3d8fee31a522df6736755c844651de26a2d3103e66c2fa4f87ce3d8e6e7b0d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IGatewayRoute)
class GatewayRoute(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mse.GatewayRoute",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::MSE::GatewayRoute``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosGatewayRoute``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gatewayroute
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[GatewayRouteProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__be37ba2e316e5aa5ab655758ac65838ae9d70f4aff83807b6061d88fdcae10bb)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrRouteId")
    def attr_route_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RouteId: The ID of the route.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRouteId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> GatewayRouteProps:
        return typing.cast(GatewayRouteProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d7371f9d5a66927dc347f24190d8c0135c53b0abc6159005f437277d6e05d626)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__820b020d9e2cbed232772105225d86bceaf815c39b4d3cb1d788ed3a51afdb26)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__45b661cc87b6b962fdbddf6c1f168f47cd17581d9304d8eaa049ae0535992412)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IGatewayService)
class GatewayService(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mse.GatewayService",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::MSE::GatewayService``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosGatewayService``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gatewayservice
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[GatewayServiceProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6335da8bca9d45aa56bf437379c5a8312c646a27c161531aa300ca1cce164651)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Name: The name of the service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceId")
    def attr_service_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServiceId: The ID of the gateway service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrServiceId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> GatewayServiceProps:
        return typing.cast(GatewayServiceProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__af2ad8de861efe3db5dcc88316e0cc7451d2fd6616d2c11f4ffd8dbf4c803774)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__34737019c8c89fdd69d2b78cbd34f43461e86cc3c99784062f0fdab08bfa0726)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e419e99191fc3d4448916dfdea38b4664fd5e373e95834b7f846887152424283)
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
    "GatewayDomain",
    "GatewayDomainProps",
    "GatewayProps",
    "GatewayRoute",
    "GatewayRouteProps",
    "GatewayService",
    "GatewayServiceProps",
    "ICluster",
    "IEngineNamespace",
    "IGateway",
    "IGateway2",
    "IGatewayDomain",
    "IGatewayRoute",
    "IGatewayService",
    "INacosConfig",
    "INacosService",
    "IPluginConfig",
    "IServiceSource",
    "NacosConfig",
    "NacosConfigProps",
    "NacosService",
    "NacosServiceProps",
    "PluginConfig",
    "PluginConfigProps",
    "RosCluster",
    "RosClusterProps",
    "RosEngineNamespace",
    "RosEngineNamespaceProps",
    "RosGateway",
    "RosGateway2",
    "RosGateway2Props",
    "RosGatewayDomain",
    "RosGatewayDomainProps",
    "RosGatewayProps",
    "RosGatewayRoute",
    "RosGatewayRouteProps",
    "RosGatewayService",
    "RosGatewayServiceProps",
    "RosNacosConfig",
    "RosNacosConfigProps",
    "RosNacosService",
    "RosNacosServiceProps",
    "RosPluginConfig",
    "RosPluginConfigProps",
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
    acl_entry_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cluster_alias_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    connection_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    eip_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mse_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pub_network_flow: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    request_pars: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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

def _typecheckingstub__3dd7b0b573d20d44514e4311f050cb7025df6dd36c6310d88157ddac86e16261(
    *,
    gateway_unique_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cert_identifier: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    http2: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    must_https: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tls_cipher_suites_config_json: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGatewayDomain.TlsCipherSuitesConfigJSONProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    tls_max: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tls_min: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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

def _typecheckingstub__ec49c432ead2946f9ac2b1c2953ba34e0646be9ad4636e6f290440dc88dadbdf(
    *,
    domain_id_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    gateway_unique_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    destination_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    direct_response_json: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGatewayRoute.DirectResponseJSONProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    domain_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    fallback: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    fallback_services: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGatewayRoute.FallbackServicesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    gateway_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    policies: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    predicates: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGatewayRoute.PredicatesProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    redirect_json: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGatewayRoute.RedirectJSONProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    route_order: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    route_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    services: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGatewayRoute.ServicesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__81b4f0537bc2f47b3c03e50680929951954925425ace23e4011b52900577ac4d(
    *,
    gateway_unique_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    dns_server_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    fc_alias: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    fc_service_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    fc_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ips: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    namespace: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sae_app_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    service_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    service_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tls_setting: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
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

def _typecheckingstub__341ea3ed24ae84c9e84a66654313cffbdc976ea2acc5ba394bc49fc5cbff8124(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[PluginConfigProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cc5a86d5d3af310f46075ed426b2cc2acd5ab82a9ee151e7be4fa2cc9e343c7b(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__906b26bb618286c52afe68e147d4ac5cf9fe40165edf13d89e2526adab8d8b40(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aa8b609c75ee336cafdf68c52e3a3b85ba1eb4a16f78fe9b708dd9dffdacf5d4(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cc363c24d043ef54ba3db5f295dc41b1487fc52254dc66febbc034bbc0f4921c(
    *,
    config_level: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    enable: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    gateway_unique_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    plugin_id: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    config: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_id_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
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

def _typecheckingstub__a119002eff8e34757e1e81015e34135a393110c8d782da1caee5ae592e879fd8(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ff42d9f5df1d53188638498b956852a4eab92cbe73910228731d79d28d335aa6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
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

def _typecheckingstub__ccfe3f0199207e4434fbcb6da3b374c9bfefd79cefdb988b7de8b80dfaf639bf(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__401deaea625555fc3d8cf1390547e2451f6820f415a72b61627913f42483a301(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__919de38d1d220e3dbf96feede4f2da5f2266a99cfb3415615bbae2ce346d65a2(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
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

def _typecheckingstub__3e8ff84a4bd004e04be47ccd54c02095b79f2e2026ecef98d809e77aa5087427(
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
    acl_entry_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cluster_alias_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    connection_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    eip_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mse_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pub_network_flow: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    request_pars: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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

def _typecheckingstub__cec5ad7bc1af3262228ebd96dd29c2a68d4031e52471ec74a539eafe9fe8dc7f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosGatewayDomainProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b5063283ff2e01a22dea409c9fd574bafadc431ff62f1447d77ebc75f10fd01b(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__edc27461381be4dfbd79039be4b5d487afded621996f732aeb2d84a49586c3c3(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9d18308cad3cbfc521d2158c0b1bd3909644a944d925a94adf56b123c1d8cb39(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ea55696e415b083884d213183e71280d897601585600ac127c043c38de671299(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b3344a90234d2c295c2822213456d75de94154f08671ac11f4efac9cae77d0b3(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cb7bae5d172dea24a54252fbe783b3cd6140e437a496123f89101fd8d4fe78e7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8cc5e8d918499dd2f2db4f07680d1757c4dc12beea52eb3bca3050bc012b71a0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c0bb06cd835fba00822c3638995b6a50afeed9e4d9d29b76eb20ae0ab965a0da(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__da1b59a75e27f9e93c1dd962df00e67bf4062bda9b5364af3ca25b01de23a667(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosGatewayDomain.TlsCipherSuitesConfigJSONProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fbe01d953a6801c5b096bd43c80505fcb2a67a547006f7ec83781382323df1e3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7b522e2082d71f82c1c4e14744582b24b6d18784bb7a2b975d4913e5c365608d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5afc1016b63713ab7b822cfd0296995bdd82a19afe08d556c416049a3e59c8b1(
    *,
    config_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tls_cipher_suites: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__524a97f1a98c93d98f8b7f446185670e14d7b6fdca71059b37c59d135426248c(
    *,
    gateway_unique_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cert_identifier: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    http2: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    must_https: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tls_cipher_suites_config_json: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGatewayDomain.TlsCipherSuitesConfigJSONProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    tls_max: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tls_min: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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

def _typecheckingstub__c95abdc0d157104092c16c25740f99c98b23b69558dc2d250584af26a389e0ca(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosGatewayRouteProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bfd70d945a70f1923b3e07f7cf3f8fc04b9bd26bcad079b01fab5315f404de08(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2b8af284ab59c62c63504098c1e214db2fa8d99ac6eac10d537800db3130c34e(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__094efe53747e2e1635cc75f708744aa01b1981b4b73e74d64c4b235ec8098e3e(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8fffdabebc8b9743d9ee5ae7db5369ed1c4c46b0cdf2eac9bcf826ae8e2dbd04(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4df118b7324468738157e5e5d79df25a84fd244b0d14bc86f32a5f77863cfcd9(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__177a33b1479942a4b2eb06d05070f2fc4758dc9e0ba0d63155608fc136b754d9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__647889ff68e76aa17c9b89d5bfe261998c8f1007dbbdedfa5cdb80f720c88326(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4ba6baba2ced00cff7a1c1ffbfb1423bd3b619bb800359dcd2c33eb6ed622f06(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosGatewayRoute.DirectResponseJSONProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__05913e2e997931ff64397510f5e6a7050e62ac70f17a6b0df2dcfc05c5ffe285(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6afdb41fdcb0bd99449ab7c0b9e8b6bed7666822257b9f95bdfb53a03db782b5(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__38523764ec20519badef8b071eea66ac62360e253af182123785ab2c216dddb3(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosGatewayRoute.FallbackServicesProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__58aaf07a4f71baa401b075a2309d2a53a516171187fc99660d26017584cfdb9e(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c32121227293f580a6fe7e5917c30535bb736c5b3ff205e783fa7b2d2c8b741b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9a2941a8b625db5bdcddf8e9949bc03c0eb83369dcfff48efb22e27f8ce8d286(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosGatewayRoute.PredicatesProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__51b745989f7796bede67c225ab4a5ffaa610ed6afca9b6f54471c491519b7dde(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosGatewayRoute.RedirectJSONProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__41d08b1b7b59945f395d887d3e756e678ae4dd3dee3e1eba7447a0c2b6bda894(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__84a52ffed26b676718ea8fe330f7f516782827495408395cc597eb06d41cd20c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f00f9545b9f1c453d99e91d3bca7d828d3622634215bf5a549013a435271af20(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosGatewayRoute.ServicesProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bd145dac2537e3da68fb651e97adcb08881b7186ec0c8b2b1190b073639d861f(
    *,
    body: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    code: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9d5c95b5a91e5a9000f8b9bbef1c29c115aedede8013df11baf7045109d70e17(
    *,
    agreement_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    namespace: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    percent: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    service_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    service_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a91415deced0823ef6b82ee8e30f0e8faf0a67bb21aacdcd52bc7d45c81b2672(
    *,
    key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1cd42c862c5e076140ae0efa0d65d50eece94fa573cb436a5ce309a07ad6135b(
    *,
    dubbo_service_group: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dubbo_service_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dubbo_service_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mothed_map_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGatewayRoute.MothedMapListProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e48d20bac8b1007e4694855a841eac659610ba278fda61fc0f529765135fe8d4(
    *,
    dubbo_mothed_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    http_mothed: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mothedpath: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    param_maps_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGatewayRoute.ParamMapsListProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    pass_through_all_headers: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pass_through_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__717123bafa687595b08d8a32004758f5fe2009f3a7fa051c5b44fade3d3a936f(
    *,
    extract_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    extract_key_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mapping_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9483195264fde2c884c2e82779b552b12af95c04907b9b0ade3e66bdb86154e3(
    *,
    ignore_case: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0dfc272c92652e961ae7142f6b33c8f11bc4c4de0612da8bbeced947e4082ef8(
    *,
    header_predicates: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGatewayRoute.HeaderPredicatesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    method_predicates: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    path_predicates: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGatewayRoute.PathPredicatesProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    query_predicates: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGatewayRoute.QueryPredicatesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d3a257146a94380a1beadeeca7720fc4ce2ae4b0f6d9cb7d1901e1fcc28978bd(
    *,
    key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f84fe74fc1654b3292c59a7dd5a263d2e4ffb32210629f965a9d74379907fc9f(
    *,
    code: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    host: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__76b49324de818af9c87deec9c416f02c8becc85d56b16bcea84a9623665334b9(
    *,
    agreement_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    http_dubbo_transcoder: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGatewayRoute.HttpDubboTranscoderProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    namespace: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    percent: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    service_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    service_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4594428cc7e608ae1104d2460849d3f952e1fa3fc2c6f31aff4c02e340e395d5(
    *,
    domain_id_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    gateway_unique_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    destination_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    direct_response_json: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGatewayRoute.DirectResponseJSONProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    domain_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    fallback: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    fallback_services: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGatewayRoute.FallbackServicesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    gateway_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    policies: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    predicates: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGatewayRoute.PredicatesProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    redirect_json: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGatewayRoute.RedirectJSONProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    route_order: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    route_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    services: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGatewayRoute.ServicesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e3e76017bb4b6668986508581e0456cb09782d06a6c3865defdd08b2475606c9(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosGatewayServiceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__50a69206915cb01957c6ad2da181943de25e9b53fc34fb233c9fb5b953c868c8(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6b4258a1f4c07641d6f06eab9b5b919b491f5f6e71b05147ef643ebdb84f6e9c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__90ee7aa3f6a09390b57e9dfd639efbe7b260f20078ca7bcb4daebdad93efd223(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c2989472434c302759bda8768037b5f8fdb5e297ef2bf5164c7c4fd1c16fa3cb(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3179d6ed9408ae5860bfc64b626b292ab4f5fb640d613c7fb470a93810b2c177(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dae3f50d8d0bf36f01c30e5148e11fee4e2607a02313cd1fc9e2c445a74e753f(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a78e5dd9b627392927d5e1b29204d2a8a5678fb4fa88c5496b8f599064cd220a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c86677c33223ec94882a5c99ae5c62aec5bc358e795d0a7bd0c9442a8916b63f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2976edd1c73c588c38817dc5c65249b32338afef47e1db59417e9ec86ab8400f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__866a59ae04dc5d030ad08efa88bd002925ba232e8eb5598a560e6c17198ae19d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1bdc6fb81c320ebac0cf1760ba2995c08222936bb7c646891c0037d8547c88be(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__29315e8aaf5966b2166f41a252dc230b985e92ac03000d496675d76acb654f76(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__17d5a133cba2a401660b19382b6157905745ed819540668afd38a6b10e518da0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9fa0ca64d6d82541329bc5646ae31290bc397813ae7a4ee68108a53f3eb9da4c(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__069495745906ee919938442f1cd4351761cd5209404305a338f768c8d7f3d643(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4a3aad403b4281356ea55e5f652199f4224debe2bd01c9c29b9c1fba1cf79ed6(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fa0c967781b15ed74c9d429f334568289b4b4a86779333657ee99dc984633f4c(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__18391150c578b198d1bbeddd3d7ff5b4477a324a6a90e06e6817fd066de76a49(
    *,
    gateway_unique_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    dns_server_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    fc_alias: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    fc_service_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    fc_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ips: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    namespace: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sae_app_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    service_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    service_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tls_setting: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
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

def _typecheckingstub__310b134e20a1791153ca42b1d610cbe82d931f83ceb7dba9e13764b784a209a5(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosPluginConfigProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__48c76fd9bdcd428daade6b8c283fd2345c2534668cf2a81ff1125ba65d0dbdb2(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6be18b726712d904577f019cb5a51de70d6d70dcdd83a57b06922ce5327a3542(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eeb7e25d243741db979e7d4807e57541fbeb02972aadc4dcdc5bac8620ecacdf(
    value: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8115483d810609e342625e9082001065395b695484a8a68d4e7955b04378db39(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e979d306a381b1870b29d2cbbb284675c03eac5b78cb2676a03f9916c7748f08(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__77a597e26a838c854232d3c76527d004f10b6ab0e1f5a0a4508866b23cd7ab52(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6b544b2d1cf3cf2a5142215348979b070551ed2e92bcaf5ba9b0afa89a5b2c82(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f2e910dba1748a758b8ee516f619e718972687bea3d9f96c605653eec25ab53c(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a085ce6e03b1d3bfb538ca4db23641e4dee2c070975b2d9049342a554b1c6b74(
    *,
    config_level: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    enable: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    gateway_unique_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    plugin_id: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    config: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_id_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
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

def _typecheckingstub__a68c2f0e88036919e7755d3bfb1a7aa33733613fe9dfc08c0882764d62b04557(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[GatewayDomainProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6ccf53499835d8f6bcb91c79bf3852c45bd052df837f226b2934a5387773ea5c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2f75656e96188426288f010a15bab0c607020b02940b096435fd50aaee29264a(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ee3d8fee31a522df6736755c844651de26a2d3103e66c2fa4f87ce3d8e6e7b0d(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__be37ba2e316e5aa5ab655758ac65838ae9d70f4aff83807b6061d88fdcae10bb(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[GatewayRouteProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d7371f9d5a66927dc347f24190d8c0135c53b0abc6159005f437277d6e05d626(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__820b020d9e2cbed232772105225d86bceaf815c39b4d3cb1d788ed3a51afdb26(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__45b661cc87b6b962fdbddf6c1f168f47cd17581d9304d8eaa049ae0535992412(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6335da8bca9d45aa56bf437379c5a8312c646a27c161531aa300ca1cce164651(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[GatewayServiceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__af2ad8de861efe3db5dcc88316e0cc7451d2fd6616d2c11f4ffd8dbf4c803774(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__34737019c8c89fdd69d2b78cbd34f43461e86cc3c99784062f0fdab08bfa0726(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e419e99191fc3d4448916dfdea38b4664fd5e373e95834b7f846887152424283(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
