'''
## Aliyun ROS ELASTICSEARCH Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as ELASTICSEARCH from '@alicloud/ros-cdk-elasticsearch';
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


class Instance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-elasticsearch.Instance",
):
    '''A ROS resource type:  ``ALIYUN::ElasticSearch::Instance``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["InstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ElasticSearch::Instance``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__095936297e43692b2c55c24f89eef17ac3e23c5f74d027ae19a70bdc48ef9410)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDomain")
    def attr_domain(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Domain: Instance connection domain (only VPC network access supported).'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceChargeType")
    def attr_instance_charge_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceChargeType: Instance charge type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceChargeType"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceId: The ID of the Elasticsearch instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrKibanaDomain")
    def attr_kibana_domain(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute KibanaDomain: Kibana console domain (Internet access supported).'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrKibanaDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrKibanaPort")
    def attr_kibana_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute KibanaPort: Kibana console port.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrKibanaPort"))

    @builtins.property
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Port:  Instance connection port.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPort"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicDomain")
    def attr_public_domain(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PublicDomain: Instance public connection domain.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrStatus")
    def attr_status(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Status: The Elasticsearch instance status.

        Includes active, activating, inactive. Some operations are denied when status is not active.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrVersion")
    def attr_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Version: Elasticsearch version.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VSwitchId: The ID of VSwitch.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVSwitchId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-elasticsearch.InstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "data_node": "dataNode",
        "password": "password",
        "version": "version",
        "v_switch_id": "vSwitchId",
        "description": "description",
        "enable_kibana_private": "enableKibanaPrivate",
        "enable_kibana_public": "enableKibanaPublic",
        "enable_public": "enablePublic",
        "instance_charge_type": "instanceChargeType",
        "kibana_node": "kibanaNode",
        "kibana_whitelist": "kibanaWhitelist",
        "master_node": "masterNode",
        "period": "period",
        "period_unit": "periodUnit",
        "private_whitelist": "privateWhitelist",
        "public_whitelist": "publicWhitelist",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
        "yml_config": "ymlConfig",
        "zone_count": "zoneCount",
        "zone_id": "zoneId",
    },
)
class InstanceProps:
    def __init__(
        self,
        *,
        data_node: typing.Union[typing.Union["RosInstance.DataNodeProperty", typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable],
        password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_kibana_private: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_kibana_public: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_public: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        kibana_node: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosInstance.KibanaNodeProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        kibana_whitelist: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        master_node: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosInstance.MasterNodeProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        private_whitelist: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        public_whitelist: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosInstance.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        yml_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosInstance.YMLConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        zone_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ElasticSearch::Instance``.

        :param data_node: Property dataNode: The Elasticsearch cluster's data node setting.
        :param password: Property password: The password of the instance. The password can be 8 to 32 characters in length and must contain three of the following conditions: uppercase letters, lowercase letters, numbers, and special characters (!@#$%&*()_+-=).
        :param version: Property version: Elasticsearch version. Supported values: 5.5.3_with_X-Pack, 6.3_with_X-Pack, 6.7_with_X-Pack, 7.4_with_X-Pack, 6.8, 7.4, 7.7 and so on.
        :param v_switch_id: Property vSwitchId: The ID of VSwitch.
        :param description: Property description: The description of instance. It a string of 0 to 30 characters. It can contain numbers, letters, underscores, (_) and hyphens (-). It must start with a letter, a number or Chinese character.
        :param enable_kibana_private: Property enableKibanaPrivate: Enables or disables intranet access to Kibana.
        :param enable_kibana_public: Property enableKibanaPublic: Enables or disables Internet access to Kibana.
        :param enable_public: Property enablePublic: Whether enable public access. If properties is true, will allocate public address.Default: false.
        :param instance_charge_type: Property instanceChargeType: Valid values are PrePaid, PostPaid, Default to PostPaid.
        :param kibana_node: Property kibanaNode: The dedicated kibana node setting.
        :param kibana_whitelist: Property kibanaWhitelist: Set the Kibana's IP whitelist in internet network.
        :param master_node: Property masterNode: The dedicated master node setting. If specified, dedicated master node will be created.
        :param period: Property period: The duration that you will buy Elasticsearch instance. It is valid when instance_charge_type is PrePaid. Unit is Month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Unit is Year, it could be from 1 to 3. Default value is 1.
        :param period_unit: Property periodUnit: Unit of prepaid time period, it could be Month/Year. Default value is Month.
        :param private_whitelist: Property privateWhitelist: Set the instance's IP whitelist in VPC network.
        :param public_whitelist: Property publicWhitelist: Set the instance's IP whitelist in Internet. The AllocatePublicAddress should be true.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        :param tags: Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        :param yml_config: Property ymlConfig: In the YML Configuration section of the Cluster Configuration page of your Alibaba Cloud Elasticsearch cluster, you can enable the Auto Indexing, Audit Log Indexing, or Watcher feature.
        :param zone_count: Property zoneCount: undefined.
        :param zone_id: Property zoneId: The zone id of elasticsearch.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e47ce5c52fa6db02ad49d7d8b750dc417fe3c861c61b62e2fa1834c19d45db39)
            check_type(argname="argument data_node", value=data_node, expected_type=type_hints["data_node"])
            check_type(argname="argument password", value=password, expected_type=type_hints["password"])
            check_type(argname="argument version", value=version, expected_type=type_hints["version"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument enable_kibana_private", value=enable_kibana_private, expected_type=type_hints["enable_kibana_private"])
            check_type(argname="argument enable_kibana_public", value=enable_kibana_public, expected_type=type_hints["enable_kibana_public"])
            check_type(argname="argument enable_public", value=enable_public, expected_type=type_hints["enable_public"])
            check_type(argname="argument instance_charge_type", value=instance_charge_type, expected_type=type_hints["instance_charge_type"])
            check_type(argname="argument kibana_node", value=kibana_node, expected_type=type_hints["kibana_node"])
            check_type(argname="argument kibana_whitelist", value=kibana_whitelist, expected_type=type_hints["kibana_whitelist"])
            check_type(argname="argument master_node", value=master_node, expected_type=type_hints["master_node"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument private_whitelist", value=private_whitelist, expected_type=type_hints["private_whitelist"])
            check_type(argname="argument public_whitelist", value=public_whitelist, expected_type=type_hints["public_whitelist"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument yml_config", value=yml_config, expected_type=type_hints["yml_config"])
            check_type(argname="argument zone_count", value=zone_count, expected_type=type_hints["zone_count"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "data_node": data_node,
            "password": password,
            "version": version,
            "v_switch_id": v_switch_id,
        }
        if description is not None:
            self._values["description"] = description
        if enable_kibana_private is not None:
            self._values["enable_kibana_private"] = enable_kibana_private
        if enable_kibana_public is not None:
            self._values["enable_kibana_public"] = enable_kibana_public
        if enable_public is not None:
            self._values["enable_public"] = enable_public
        if instance_charge_type is not None:
            self._values["instance_charge_type"] = instance_charge_type
        if kibana_node is not None:
            self._values["kibana_node"] = kibana_node
        if kibana_whitelist is not None:
            self._values["kibana_whitelist"] = kibana_whitelist
        if master_node is not None:
            self._values["master_node"] = master_node
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if private_whitelist is not None:
            self._values["private_whitelist"] = private_whitelist
        if public_whitelist is not None:
            self._values["public_whitelist"] = public_whitelist
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags
        if yml_config is not None:
            self._values["yml_config"] = yml_config
        if zone_count is not None:
            self._values["zone_count"] = zone_count
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def data_node(
        self,
    ) -> typing.Union["RosInstance.DataNodeProperty", _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dataNode: The Elasticsearch cluster's data node setting.'''
        result = self._values.get("data_node")
        assert result is not None, "Required property 'data_node' is missing"
        return typing.cast(typing.Union["RosInstance.DataNodeProperty", _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property password: The password of the instance.

        The password can be 8 to 32 characters in length and must contain three of the following conditions: uppercase letters, lowercase letters, numbers, and special characters (!@#$%&*()_+-=).
        '''
        result = self._values.get("password")
        assert result is not None, "Required property 'password' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def version(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property version: Elasticsearch version.

        Supported values: 5.5.3_with_X-Pack, 6.3_with_X-Pack, 6.7_with_X-Pack, 7.4_with_X-Pack, 6.8, 7.4, 7.7 and so on.
        '''
        result = self._values.get("version")
        assert result is not None, "Required property 'version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vSwitchId: The ID of VSwitch.'''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of instance.

        It a string of 0 to 30 characters. It can contain numbers, letters, underscores, (_) and hyphens (-). It must start with a letter, a number or Chinese character.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_kibana_private(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enableKibanaPrivate: Enables or disables intranet access to Kibana.'''
        result = self._values.get("enable_kibana_private")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_kibana_public(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enableKibanaPublic: Enables or disables Internet access to Kibana.'''
        result = self._values.get("enable_kibana_public")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_public(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enablePublic: Whether enable public access.

        If properties is true, will allocate public address.Default: false.
        '''
        result = self._values.get("enable_public")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceChargeType: Valid values are PrePaid, PostPaid, Default to PostPaid.'''
        result = self._values.get("instance_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def kibana_node(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.KibanaNodeProperty"]]:
        '''Property kibanaNode: The dedicated kibana node setting.'''
        result = self._values.get("kibana_node")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.KibanaNodeProperty"]], result)

    @builtins.property
    def kibana_whitelist(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property kibanaWhitelist: Set the Kibana's IP whitelist in internet network.'''
        result = self._values.get("kibana_whitelist")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def master_node(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.MasterNodeProperty"]]:
        '''Property masterNode: The dedicated master node setting.

        If specified, dedicated master node will be created.
        '''
        result = self._values.get("master_node")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.MasterNodeProperty"]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period: The duration that you will buy Elasticsearch instance.

        It is valid when instance_charge_type is PrePaid. Unit is Month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Unit is Year, it could be from 1 to 3. Default value is 1.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property periodUnit: Unit of prepaid time period, it could be Month/Year.

        Default value is Month.
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def private_whitelist(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property privateWhitelist: Set the instance's IP whitelist in VPC network.'''
        result = self._values.get("private_whitelist")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def public_whitelist(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property publicWhitelist: Set the instance's IP whitelist in Internet.

        The AllocatePublicAddress should be true.
        '''
        result = self._values.get("public_whitelist")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosInstance.TagsProperty"]]:
        '''Property tags: Tags to attach to instance.

        Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosInstance.TagsProperty"]], result)

    @builtins.property
    def yml_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.YMLConfigProperty"]]:
        '''Property ymlConfig: In the YML Configuration section of the Cluster  Configuration page of your Alibaba Cloud Elasticsearch cluster,  you can enable the Auto Indexing, Audit Log Indexing, or Watcher feature.'''
        result = self._values.get("yml_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.YMLConfigProperty"]], result)

    @builtins.property
    def zone_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property zoneCount: undefined.'''
        result = self._values.get("zone_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property zoneId: The zone id of elasticsearch.'''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstance(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-elasticsearch.RosInstance",
):
    '''A ROS template type:  ``ALIYUN::ElasticSearch::Instance``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ElasticSearch::Instance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__30d14220c524cf78889bfa28fb6fa50f0814701e8cfa8dfd76c9544f015d17c6)
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
            type_hints = typing.get_type_hints(_typecheckingstub__afa8be1fdfd1958e57146c3e97ce70789a12f286f8de09ae696d2fd4c8364a61)
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
        :Attribute: Domain: Instance connection domain (only VPC network access supported).
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceChargeType")
    def attr_instance_charge_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceChargeType: Instance charge type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceChargeType"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceId: The ID of the Elasticsearch instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrKibanaDomain")
    def attr_kibana_domain(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: KibanaDomain: Kibana console domain (Internet access supported).
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrKibanaDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrKibanaPort")
    def attr_kibana_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: KibanaPort: Kibana console port.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrKibanaPort"))

    @builtins.property
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Port:  Instance connection port.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPort"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicDomain")
    def attr_public_domain(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PublicDomain: Instance public connection domain.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrStatus")
    def attr_status(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Status: The Elasticsearch instance status. Includes active, activating, inactive. Some operations are denied when status is not active.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrVersion")
    def attr_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Version: Elasticsearch version.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VSwitchId: The ID of VSwitch.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="dataNode")
    def data_node(
        self,
    ) -> typing.Union["RosInstance.DataNodeProperty", _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dataNode: The Elasticsearch cluster's data node setting.
        '''
        return typing.cast(typing.Union["RosInstance.DataNodeProperty", _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dataNode"))

    @data_node.setter
    def data_node(
        self,
        value: typing.Union["RosInstance.DataNodeProperty", _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d852db7e9ed84c893f1eadfc1a3c13fee58d1a3bba8aeb546854ef809ed5c882)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dataNode", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f248d8d78b536027e0decf087c47095602240c186642912be79f1c952f82a9e4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="password")
    def password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :: #$%&*()_+-=).
        :Property: password: The password of the instance. The password can be 8 to 32 characters in length and must contain three of the following conditions: uppercase letters, lowercase letters, numbers, and special characters (!
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "password"))

    @password.setter
    def password(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1f8c61183c461b0d14ae2b3caf32a9fb5c9b6a4cc8456d762919e06bc14fa620)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "password", value)

    @builtins.property
    @jsii.member(jsii_name="version")
    def version(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: version: Elasticsearch version. Supported values: 5.5.3_with_X-Pack, 6.3_with_X-Pack, 6.7_with_X-Pack, 7.4_with_X-Pack, 6.8, 7.4, 7.7 and so on.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "version"))

    @version.setter
    def version(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__27e373f36c9e0be2e4c2c8dbe7517b9f7e8df3cfeb6b03f92bdf399b85000420)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "version", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vSwitchId: The ID of VSwitch.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f1beb79091ef26ec474b4f070213fa9ce1622871c15fbe7398d84a5c3e044a89)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of instance. It a string of 0 to 30 characters. It can contain numbers, letters, underscores, (_) and hyphens (-). It must start with a letter, a number or Chinese character.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4cba20ba1449a0690f1e22ddb415cc83a37458c57b195ee0b10669554b7b3df0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="enableKibanaPrivate")
    def enable_kibana_private(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enableKibanaPrivate: Enables or disables intranet access to Kibana.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enableKibanaPrivate"))

    @enable_kibana_private.setter
    def enable_kibana_private(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b836197ca57e1659a4f921dde57e5207ddc978d4231a20963e8307d37cb1d66b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableKibanaPrivate", value)

    @builtins.property
    @jsii.member(jsii_name="enableKibanaPublic")
    def enable_kibana_public(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enableKibanaPublic: Enables or disables Internet access to Kibana.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enableKibanaPublic"))

    @enable_kibana_public.setter
    def enable_kibana_public(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__607ffee62e54a8f39dc29c751f7684aed2da849b8d6cff9f1ab6915773c1fb50)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableKibanaPublic", value)

    @builtins.property
    @jsii.member(jsii_name="enablePublic")
    def enable_public(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enablePublic: Whether enable public access. If properties is true, will allocate public address.Default: false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enablePublic"))

    @enable_public.setter
    def enable_public(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__897dbee4e4f2c7b4b4648aeef1a2ad65fb7a3e413871f00d6367c1e8673e716b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enablePublic", value)

    @builtins.property
    @jsii.member(jsii_name="instanceChargeType")
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceChargeType: Valid values are PrePaid, PostPaid, Default to PostPaid.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceChargeType"))

    @instance_charge_type.setter
    def instance_charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9c61d01fc267491f370cbee5ffc989c6542ef622fc5638f6df8d09d349131155)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceChargeType", value)

    @builtins.property
    @jsii.member(jsii_name="kibanaNode")
    def kibana_node(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.KibanaNodeProperty"]]:
        '''
        :Property: kibanaNode: The dedicated kibana node setting.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.KibanaNodeProperty"]], jsii.get(self, "kibanaNode"))

    @kibana_node.setter
    def kibana_node(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.KibanaNodeProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6a2af63db76230991a6e6659f951180e211070d8bf3e9177b1e54c6867867fa4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "kibanaNode", value)

    @builtins.property
    @jsii.member(jsii_name="kibanaWhitelist")
    def kibana_whitelist(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: kibanaWhitelist: Set the Kibana's IP whitelist in internet network.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "kibanaWhitelist"))

    @kibana_whitelist.setter
    def kibana_whitelist(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4377f9150a11c180f159adb3266d5787a2b12b53ec24aced2c9c38b42ba48a0e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "kibanaWhitelist", value)

    @builtins.property
    @jsii.member(jsii_name="masterNode")
    def master_node(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.MasterNodeProperty"]]:
        '''
        :Property: masterNode: The dedicated master node setting. If specified, dedicated master node will be created.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.MasterNodeProperty"]], jsii.get(self, "masterNode"))

    @master_node.setter
    def master_node(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.MasterNodeProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__01b49338079f60dc36aa6dc55e001c94e3fbb3be4b066f56c57d34bed3432a08)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "masterNode", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: period: The duration that you will buy Elasticsearch instance. It is valid when instance_charge_type is PrePaid. Unit is Month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Unit is Year, it could be from 1 to 3. Default value is 1.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__77c8c2e447afb098116d91ec29bdfb9b0a137536d85b041447faa308060b05b7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="periodUnit")
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: periodUnit: Unit of prepaid time period, it could be Month/Year. Default value is Month.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "periodUnit"))

    @period_unit.setter
    def period_unit(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fd9a427b5a69182b1621df791a8044c66a7814bab29d3e1d9c49f8cc2f4c05e6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "periodUnit", value)

    @builtins.property
    @jsii.member(jsii_name="privateWhitelist")
    def private_whitelist(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: privateWhitelist: Set the instance's IP whitelist in VPC network.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "privateWhitelist"))

    @private_whitelist.setter
    def private_whitelist(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__24e38d9542f4481b2573e7cf80bb978cb982c2306559f2823adbe51d7dfb54ae)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "privateWhitelist", value)

    @builtins.property
    @jsii.member(jsii_name="publicWhitelist")
    def public_whitelist(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: publicWhitelist: Set the instance's IP whitelist in Internet. The AllocatePublicAddress should be true.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "publicWhitelist"))

    @public_whitelist.setter
    def public_whitelist(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7b0605419b7b530b328b90e01a8d8f0b1a706aad37744e6e552425b75b6bc728)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "publicWhitelist", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4d4ab0888922a18fcaa8d9fce856f785438eac5d537bace42af863c7f93f3e5e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosInstance.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosInstance.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosInstance.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__df3be6773b55712544536cad816cd511c4e50602589c585577a9e094c39c0eb5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="ymlConfig")
    def yml_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.YMLConfigProperty"]]:
        '''
        :Property:

        ymlConfig: In the YML Configuration section of the Cluster
        Configuration page of your Alibaba Cloud Elasticsearch cluster,
        you can enable the Auto Indexing, Audit Log Indexing, or Watcher feature.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.YMLConfigProperty"]], jsii.get(self, "ymlConfig"))

    @yml_config.setter
    def yml_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.YMLConfigProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c5babd088a8f8239922c55fdd239511e827c78a2141fee99e1ee1b9dbaadff2f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ymlConfig", value)

    @builtins.property
    @jsii.member(jsii_name="zoneCount")
    def zone_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneCount: undefined
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "zoneCount"))

    @zone_count.setter
    def zone_count(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2be7821c8f7494e5a49cd0092f9f8d3c316c3ab00f183f2ec3151b9576b41eea)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneCount", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: The zone id of elasticsearch.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1ff41ddb98d4f036ec6c0c183175272fe5022933043fd970b735957c1bbfc226)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-elasticsearch.RosInstance.DataNodeProperty",
        jsii_struct_bases=[],
        name_mapping={
            "amount": "amount",
            "disk_size": "diskSize",
            "disk_type": "diskType",
            "spec": "spec",
            "disk_encryption": "diskEncryption",
            "performance_level": "performanceLevel",
        },
    )
    class DataNodeProperty:
        def __init__(
            self,
            *,
            amount: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            disk_size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            disk_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            spec: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            disk_encryption: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            performance_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param amount: 
            :param disk_size: 
            :param disk_type: 
            :param spec: 
            :param disk_encryption: 
            :param performance_level: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__28d026f28e792323e10610d599c1920a03db7fed3408323e5b1fd65074efbad7)
                check_type(argname="argument amount", value=amount, expected_type=type_hints["amount"])
                check_type(argname="argument disk_size", value=disk_size, expected_type=type_hints["disk_size"])
                check_type(argname="argument disk_type", value=disk_type, expected_type=type_hints["disk_type"])
                check_type(argname="argument spec", value=spec, expected_type=type_hints["spec"])
                check_type(argname="argument disk_encryption", value=disk_encryption, expected_type=type_hints["disk_encryption"])
                check_type(argname="argument performance_level", value=performance_level, expected_type=type_hints["performance_level"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "amount": amount,
                "disk_size": disk_size,
                "disk_type": disk_type,
                "spec": spec,
            }
            if disk_encryption is not None:
                self._values["disk_encryption"] = disk_encryption
            if performance_level is not None:
                self._values["performance_level"] = performance_level

        @builtins.property
        def amount(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: amount: The Elasticsearch cluster's data node quantity, between 2 and 50.
            '''
            result = self._values.get("amount")
            assert result is not None, "Required property 'amount' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def disk_size(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            diskSize: The single data node storage space.
            cloud_ssd: An SSD disk, supports a maximum of 2048 GiB (2 TB).
            cloud_efficiency: An ultra disk, supports a maximum of 5120 GiB (5 TB). If the data to be stored is larger than 2048 GiB, an ultra disk can only support the following data sizes (GiB): [2560, 3072, 3584, 4096, 4608, 5120].
            '''
            result = self._values.get("disk_size")
            assert result is not None, "Required property 'disk_size' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def disk_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: diskType: The data node disk type. Supported values: cloud_ssd, cloud_efficiency, cloud_essd
            '''
            result = self._values.get("disk_type")
            assert result is not None, "Required property 'disk_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def spec(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: spec: The data node specifications of the Elasticsearch instance.
            '''
            result = self._values.get("spec")
            assert result is not None, "Required property 'spec' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def disk_encryption(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: diskEncryption: Whether to enable cloud disk encryption.
            '''
            result = self._values.get("disk_encryption")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def performance_level(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            performanceLevel: The performance level of the ESSD. When the storage type is cloud_essd,
            this parameter is required and supports PL1, PL2, and PL3.
            '''
            result = self._values.get("performance_level")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DataNodeProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-elasticsearch.RosInstance.KibanaNodeProperty",
        jsii_struct_bases=[],
        name_mapping={"spec": "spec"},
    )
    class KibanaNodeProperty:
        def __init__(
            self,
            *,
            spec: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param spec: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__a19d841ea2438dbc15ba08276caaac3a85ff63356114e6c7a9aa13206600a356)
                check_type(argname="argument spec", value=spec, expected_type=type_hints["spec"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "spec": spec,
            }

        @builtins.property
        def spec(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: spec: The dedicated kibana node spec.
            '''
            result = self._values.get("spec")
            assert result is not None, "Required property 'spec' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "KibanaNodeProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-elasticsearch.RosInstance.MasterNodeProperty",
        jsii_struct_bases=[],
        name_mapping={
            "spec": "spec",
            "amount": "amount",
            "disk_size": "diskSize",
            "disk_type": "diskType",
        },
    )
    class MasterNodeProperty:
        def __init__(
            self,
            *,
            spec: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            amount: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            disk_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param spec: 
            :param amount: 
            :param disk_size: 
            :param disk_type: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__f01baca31a34fc66e6981d002e87d75111636339a7ef2488c5c7cb336d2b3ab9)
                check_type(argname="argument spec", value=spec, expected_type=type_hints["spec"])
                check_type(argname="argument amount", value=amount, expected_type=type_hints["amount"])
                check_type(argname="argument disk_size", value=disk_size, expected_type=type_hints["disk_size"])
                check_type(argname="argument disk_type", value=disk_type, expected_type=type_hints["disk_type"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "spec": spec,
            }
            if amount is not None:
                self._values["amount"] = amount
            if disk_size is not None:
                self._values["disk_size"] = disk_size
            if disk_type is not None:
                self._values["disk_type"] = disk_type

        @builtins.property
        def spec(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: spec: The dedicated master node spec.
            '''
            result = self._values.get("spec")
            assert result is not None, "Required property 'spec' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def amount(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: amount: The dedicated master node quantity. Default to 3.
            '''
            result = self._values.get("amount")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def disk_size(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: diskSize: The dedicated master node storage space. Default to 20.
            '''
            result = self._values.get("disk_size")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def disk_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: diskType: The dedicated master node disk type.
            '''
            result = self._values.get("disk_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "MasterNodeProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-elasticsearch.RosInstance.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__975e9ae9c14aa46541f7e71595adcb203bfd8f5a8dab16e8315fb7fe9e2e5929)
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
        jsii_type="@alicloud/ros-cdk-elasticsearch.RosInstance.YMLConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "audit_log": "auditLog",
            "create_index": "createIndex",
            "destructive_requires_name": "destructiveRequiresName",
            "other_configs": "otherConfigs",
            "watcher": "watcher",
        },
    )
    class YMLConfigProperty:
        def __init__(
            self,
            *,
            audit_log: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            create_index: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            destructive_requires_name: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            other_configs: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            watcher: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param audit_log: 
            :param create_index: 
            :param destructive_requires_name: 
            :param other_configs: 
            :param watcher: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__13f8c86c3248ed2db8df7aa4d0e5314233e194e5d44a48af04e07326951f6350)
                check_type(argname="argument audit_log", value=audit_log, expected_type=type_hints["audit_log"])
                check_type(argname="argument create_index", value=create_index, expected_type=type_hints["create_index"])
                check_type(argname="argument destructive_requires_name", value=destructive_requires_name, expected_type=type_hints["destructive_requires_name"])
                check_type(argname="argument other_configs", value=other_configs, expected_type=type_hints["other_configs"])
                check_type(argname="argument watcher", value=watcher, expected_type=type_hints["watcher"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if audit_log is not None:
                self._values["audit_log"] = audit_log
            if create_index is not None:
                self._values["create_index"] = create_index
            if destructive_requires_name is not None:
                self._values["destructive_requires_name"] = destructive_requires_name
            if other_configs is not None:
                self._values["other_configs"] = other_configs
            if watcher is not None:
                self._values["watcher"] = watcher

        @builtins.property
        def audit_log(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            auditLog: If you enable Audit Log Indexing, the system generates audit logs
            for the create, delete, modify, and search operations that are performed
            in the Elasticsearch cluster. These logs consume disk space and affect
            cluster performance. Therefore, we recommend that you disable Audit Log
            Indexing and exercise caution when you configure this parameter.
            This parameter is unavailable for Elasticsearch clusters of V7.0 or later.
            '''
            result = self._values.get("audit_log")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def create_index(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            createIndex: Specifies whether to automatically create an index when a new document
            is uploaded to your Elasticsearch cluster but no index exists.
            We recommend that you disable Auto Indexing because indexes created
            by this feature may not meet your business requirements.
            This parameter corresponds to the action.auto_create_index configuration
            item in the YML file. The default value of this configuration item is false.
            '''
            result = self._values.get("create_index")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def destructive_requires_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            destructiveRequiresName: Specifies whether to specify the index name when you delete an index.
            If you set this parameter to Allow Wildcards, you can use wildcards to
            delete multiple indexes at a time. Deleted indexes cannot be recovered.
            Exercise caution when you configure this parameter.
            This parameter corresponds to the action.destructive_requires_name configuration
            item in the YML file. The default value of this configuration item is true.
            '''
            result = self._values.get("destructive_requires_name")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def other_configs(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: otherConfigs: Other Configurations.
            '''
            result = self._values.get("other_configs")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def watcher(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            watcher: If you enable Watcher, you can use the X-Pack Watcher feature.
            You must clear the .watcher-history* index on a regular basis to free up disk space.
            This parameter corresponds to the xpack.watcher.enabled configuration item in the YML file.
            The default value of this configuration item is false.
            '''
            result = self._values.get("watcher")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "YMLConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-elasticsearch.RosInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "data_node": "dataNode",
        "password": "password",
        "version": "version",
        "v_switch_id": "vSwitchId",
        "description": "description",
        "enable_kibana_private": "enableKibanaPrivate",
        "enable_kibana_public": "enableKibanaPublic",
        "enable_public": "enablePublic",
        "instance_charge_type": "instanceChargeType",
        "kibana_node": "kibanaNode",
        "kibana_whitelist": "kibanaWhitelist",
        "master_node": "masterNode",
        "period": "period",
        "period_unit": "periodUnit",
        "private_whitelist": "privateWhitelist",
        "public_whitelist": "publicWhitelist",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
        "yml_config": "ymlConfig",
        "zone_count": "zoneCount",
        "zone_id": "zoneId",
    },
)
class RosInstanceProps:
    def __init__(
        self,
        *,
        data_node: typing.Union[typing.Union[RosInstance.DataNodeProperty, typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable],
        password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_kibana_private: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_kibana_public: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_public: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        kibana_node: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.KibanaNodeProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        kibana_whitelist: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        master_node: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.MasterNodeProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        private_whitelist: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        public_whitelist: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        yml_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.YMLConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        zone_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ElasticSearch::Instance``.

        :param data_node: 
        :param password: 
        :param version: 
        :param v_switch_id: 
        :param description: 
        :param enable_kibana_private: 
        :param enable_kibana_public: 
        :param enable_public: 
        :param instance_charge_type: 
        :param kibana_node: 
        :param kibana_whitelist: 
        :param master_node: 
        :param period: 
        :param period_unit: 
        :param private_whitelist: 
        :param public_whitelist: 
        :param resource_group_id: 
        :param tags: 
        :param yml_config: 
        :param zone_count: 
        :param zone_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d001f27b3b9fb5e51138e922d01f68d39c258c4179de05bc9c24cd621997891f)
            check_type(argname="argument data_node", value=data_node, expected_type=type_hints["data_node"])
            check_type(argname="argument password", value=password, expected_type=type_hints["password"])
            check_type(argname="argument version", value=version, expected_type=type_hints["version"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument enable_kibana_private", value=enable_kibana_private, expected_type=type_hints["enable_kibana_private"])
            check_type(argname="argument enable_kibana_public", value=enable_kibana_public, expected_type=type_hints["enable_kibana_public"])
            check_type(argname="argument enable_public", value=enable_public, expected_type=type_hints["enable_public"])
            check_type(argname="argument instance_charge_type", value=instance_charge_type, expected_type=type_hints["instance_charge_type"])
            check_type(argname="argument kibana_node", value=kibana_node, expected_type=type_hints["kibana_node"])
            check_type(argname="argument kibana_whitelist", value=kibana_whitelist, expected_type=type_hints["kibana_whitelist"])
            check_type(argname="argument master_node", value=master_node, expected_type=type_hints["master_node"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument private_whitelist", value=private_whitelist, expected_type=type_hints["private_whitelist"])
            check_type(argname="argument public_whitelist", value=public_whitelist, expected_type=type_hints["public_whitelist"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument yml_config", value=yml_config, expected_type=type_hints["yml_config"])
            check_type(argname="argument zone_count", value=zone_count, expected_type=type_hints["zone_count"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "data_node": data_node,
            "password": password,
            "version": version,
            "v_switch_id": v_switch_id,
        }
        if description is not None:
            self._values["description"] = description
        if enable_kibana_private is not None:
            self._values["enable_kibana_private"] = enable_kibana_private
        if enable_kibana_public is not None:
            self._values["enable_kibana_public"] = enable_kibana_public
        if enable_public is not None:
            self._values["enable_public"] = enable_public
        if instance_charge_type is not None:
            self._values["instance_charge_type"] = instance_charge_type
        if kibana_node is not None:
            self._values["kibana_node"] = kibana_node
        if kibana_whitelist is not None:
            self._values["kibana_whitelist"] = kibana_whitelist
        if master_node is not None:
            self._values["master_node"] = master_node
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if private_whitelist is not None:
            self._values["private_whitelist"] = private_whitelist
        if public_whitelist is not None:
            self._values["public_whitelist"] = public_whitelist
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags
        if yml_config is not None:
            self._values["yml_config"] = yml_config
        if zone_count is not None:
            self._values["zone_count"] = zone_count
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def data_node(
        self,
    ) -> typing.Union[RosInstance.DataNodeProperty, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dataNode: The Elasticsearch cluster's data node setting.
        '''
        result = self._values.get("data_node")
        assert result is not None, "Required property 'data_node' is missing"
        return typing.cast(typing.Union[RosInstance.DataNodeProperty, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :: #$%&*()_+-=).
        :Property: password: The password of the instance. The password can be 8 to 32 characters in length and must contain three of the following conditions: uppercase letters, lowercase letters, numbers, and special characters (!
        '''
        result = self._values.get("password")
        assert result is not None, "Required property 'password' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def version(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: version: Elasticsearch version. Supported values: 5.5.3_with_X-Pack, 6.3_with_X-Pack, 6.7_with_X-Pack, 7.4_with_X-Pack, 6.8, 7.4, 7.7 and so on.
        '''
        result = self._values.get("version")
        assert result is not None, "Required property 'version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vSwitchId: The ID of VSwitch.
        '''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of instance. It a string of 0 to 30 characters. It can contain numbers, letters, underscores, (_) and hyphens (-). It must start with a letter, a number or Chinese character.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_kibana_private(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enableKibanaPrivate: Enables or disables intranet access to Kibana.
        '''
        result = self._values.get("enable_kibana_private")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_kibana_public(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enableKibanaPublic: Enables or disables Internet access to Kibana.
        '''
        result = self._values.get("enable_kibana_public")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_public(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enablePublic: Whether enable public access. If properties is true, will allocate public address.Default: false.
        '''
        result = self._values.get("enable_public")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceChargeType: Valid values are PrePaid, PostPaid, Default to PostPaid.
        '''
        result = self._values.get("instance_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def kibana_node(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.KibanaNodeProperty]]:
        '''
        :Property: kibanaNode: The dedicated kibana node setting.
        '''
        result = self._values.get("kibana_node")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.KibanaNodeProperty]], result)

    @builtins.property
    def kibana_whitelist(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: kibanaWhitelist: Set the Kibana's IP whitelist in internet network.
        '''
        result = self._values.get("kibana_whitelist")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def master_node(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.MasterNodeProperty]]:
        '''
        :Property: masterNode: The dedicated master node setting. If specified, dedicated master node will be created.
        '''
        result = self._values.get("master_node")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.MasterNodeProperty]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: period: The duration that you will buy Elasticsearch instance. It is valid when instance_charge_type is PrePaid. Unit is Month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Unit is Year, it could be from 1 to 3. Default value is 1.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: periodUnit: Unit of prepaid time period, it could be Month/Year. Default value is Month.
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def private_whitelist(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: privateWhitelist: Set the instance's IP whitelist in VPC network.
        '''
        result = self._values.get("private_whitelist")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def public_whitelist(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: publicWhitelist: Set the instance's IP whitelist in Internet. The AllocatePublicAddress should be true.
        '''
        result = self._values.get("public_whitelist")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosInstance.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosInstance.TagsProperty]], result)

    @builtins.property
    def yml_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.YMLConfigProperty]]:
        '''
        :Property:

        ymlConfig: In the YML Configuration section of the Cluster
        Configuration page of your Alibaba Cloud Elasticsearch cluster,
        you can enable the Auto Indexing, Audit Log Indexing, or Watcher feature.
        '''
        result = self._values.get("yml_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.YMLConfigProperty]], result)

    @builtins.property
    def zone_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneCount: undefined
        '''
        result = self._values.get("zone_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: The zone id of elasticsearch.
        '''
        result = self._values.get("zone_id")
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
    "Instance",
    "InstanceProps",
    "RosInstance",
    "RosInstanceProps",
]

publication.publish()

def _typecheckingstub__095936297e43692b2c55c24f89eef17ac3e23c5f74d027ae19a70bdc48ef9410(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[InstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e47ce5c52fa6db02ad49d7d8b750dc417fe3c861c61b62e2fa1834c19d45db39(
    *,
    data_node: typing.Union[typing.Union[RosInstance.DataNodeProperty, typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable],
    password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_kibana_private: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_kibana_public: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_public: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    kibana_node: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.KibanaNodeProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    kibana_whitelist: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    master_node: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.MasterNodeProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    private_whitelist: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    public_whitelist: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    yml_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.YMLConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    zone_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__30d14220c524cf78889bfa28fb6fa50f0814701e8cfa8dfd76c9544f015d17c6(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__afa8be1fdfd1958e57146c3e97ce70789a12f286f8de09ae696d2fd4c8364a61(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d852db7e9ed84c893f1eadfc1a3c13fee58d1a3bba8aeb546854ef809ed5c882(
    value: typing.Union[RosInstance.DataNodeProperty, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f248d8d78b536027e0decf087c47095602240c186642912be79f1c952f82a9e4(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1f8c61183c461b0d14ae2b3caf32a9fb5c9b6a4cc8456d762919e06bc14fa620(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__27e373f36c9e0be2e4c2c8dbe7517b9f7e8df3cfeb6b03f92bdf399b85000420(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f1beb79091ef26ec474b4f070213fa9ce1622871c15fbe7398d84a5c3e044a89(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4cba20ba1449a0690f1e22ddb415cc83a37458c57b195ee0b10669554b7b3df0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b836197ca57e1659a4f921dde57e5207ddc978d4231a20963e8307d37cb1d66b(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__607ffee62e54a8f39dc29c751f7684aed2da849b8d6cff9f1ab6915773c1fb50(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__897dbee4e4f2c7b4b4648aeef1a2ad65fb7a3e413871f00d6367c1e8673e716b(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9c61d01fc267491f370cbee5ffc989c6542ef622fc5638f6df8d09d349131155(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6a2af63db76230991a6e6659f951180e211070d8bf3e9177b1e54c6867867fa4(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.KibanaNodeProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4377f9150a11c180f159adb3266d5787a2b12b53ec24aced2c9c38b42ba48a0e(
    value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__01b49338079f60dc36aa6dc55e001c94e3fbb3be4b066f56c57d34bed3432a08(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.MasterNodeProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__77c8c2e447afb098116d91ec29bdfb9b0a137536d85b041447faa308060b05b7(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fd9a427b5a69182b1621df791a8044c66a7814bab29d3e1d9c49f8cc2f4c05e6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__24e38d9542f4481b2573e7cf80bb978cb982c2306559f2823adbe51d7dfb54ae(
    value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7b0605419b7b530b328b90e01a8d8f0b1a706aad37744e6e552425b75b6bc728(
    value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4d4ab0888922a18fcaa8d9fce856f785438eac5d537bace42af863c7f93f3e5e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__df3be6773b55712544536cad816cd511c4e50602589c585577a9e094c39c0eb5(
    value: typing.Optional[typing.List[RosInstance.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c5babd088a8f8239922c55fdd239511e827c78a2141fee99e1ee1b9dbaadff2f(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.YMLConfigProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2be7821c8f7494e5a49cd0092f9f8d3c316c3ab00f183f2ec3151b9576b41eea(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1ff41ddb98d4f036ec6c0c183175272fe5022933043fd970b735957c1bbfc226(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__28d026f28e792323e10610d599c1920a03db7fed3408323e5b1fd65074efbad7(
    *,
    amount: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    disk_size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    disk_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    spec: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    disk_encryption: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    performance_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a19d841ea2438dbc15ba08276caaac3a85ff63356114e6c7a9aa13206600a356(
    *,
    spec: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f01baca31a34fc66e6981d002e87d75111636339a7ef2488c5c7cb336d2b3ab9(
    *,
    spec: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    amount: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disk_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__975e9ae9c14aa46541f7e71595adcb203bfd8f5a8dab16e8315fb7fe9e2e5929(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__13f8c86c3248ed2db8df7aa4d0e5314233e194e5d44a48af04e07326951f6350(
    *,
    audit_log: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    create_index: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    destructive_requires_name: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    other_configs: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    watcher: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d001f27b3b9fb5e51138e922d01f68d39c258c4179de05bc9c24cd621997891f(
    *,
    data_node: typing.Union[typing.Union[RosInstance.DataNodeProperty, typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable],
    password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_kibana_private: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_kibana_public: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_public: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    kibana_node: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.KibanaNodeProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    kibana_whitelist: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    master_node: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.MasterNodeProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    private_whitelist: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    public_whitelist: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    yml_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.YMLConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    zone_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
