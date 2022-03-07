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

from ._jsii import *

import ros_cdk_core


class Instance(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-elasticsearch.Instance",
):
    '''A ROS resource type:  ``ALIYUN::ElasticSearch::Instance``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "InstanceProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDomain")
    def attr_domain(self) -> ros_cdk_core.IResolvable:
        '''Attribute Domain: Instance connection domain (only VPC network access supported).'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDomain"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceChargeType")
    def attr_instance_charge_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute InstanceChargeType: Instance charge type.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceChargeType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute InstanceId: The ID of the Elasticsearch instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrKibanaDomain")
    def attr_kibana_domain(self) -> ros_cdk_core.IResolvable:
        '''Attribute KibanaDomain: Kibana console domain (Internet access supported).'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrKibanaDomain"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrKibanaPort")
    def attr_kibana_port(self) -> ros_cdk_core.IResolvable:
        '''Attribute KibanaPort: Kibana console port.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrKibanaPort"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> ros_cdk_core.IResolvable:
        '''Attribute Port:  Instance connection port.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPort"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPublicDomain")
    def attr_public_domain(self) -> ros_cdk_core.IResolvable:
        '''Attribute PublicDomain: Instance public connection domain.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPublicDomain"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrStatus")
    def attr_status(self) -> ros_cdk_core.IResolvable:
        '''Attribute Status: The Elasticsearch instance status.

        Includes active, activating, inactive. Some operations are denied when status is not active.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrStatus"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVersion")
    def attr_version(self) -> ros_cdk_core.IResolvable:
        '''Attribute Version: Elasticsearch version.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVersion"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute VSwitchId: The ID of VSwitch.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVSwitchId"))


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
        "kibana_whitelist": "kibanaWhitelist",
        "master_node": "masterNode",
        "period": "period",
        "private_whitelist": "privateWhitelist",
        "public_whitelist": "publicWhitelist",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
        "yml_config": "ymlConfig",
        "zone_count": "zoneCount",
    },
)
class InstanceProps:
    def __init__(
        self,
        *,
        data_node: typing.Union["RosInstance.DataNodeProperty", ros_cdk_core.IResolvable],
        password: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        version: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        v_switch_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        enable_kibana_private: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        enable_kibana_public: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        enable_public: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        instance_charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        kibana_whitelist: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
        master_node: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.MasterNodeProperty"]] = None,
        period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        private_whitelist: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
        public_whitelist: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence["RosInstance.TagsProperty"]] = None,
        yml_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.YMLConfigProperty"]] = None,
        zone_count: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
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
        :param kibana_whitelist: Property kibanaWhitelist: Set the Kibana's IP whitelist in internet network.
        :param master_node: Property masterNode: The dedicated master node setting. If specified, dedicated master node will be created.
        :param period: Property period: The duration that you will buy Elasticsearch instance (in month). It is valid when instance_charge_type is PrePaid. Valid values: [1~9], 12, 24, 36. Default to 1.
        :param private_whitelist: Property privateWhitelist: Set the instance's IP whitelist in VPC network.
        :param public_whitelist: Property publicWhitelist: Set the instance's IP whitelist in Internet. The AllocatePublicAddress should be true.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        :param tags: Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        :param yml_config: Property ymlConfig: In the YML Configuration section of the Cluster Configuration page of your Alibaba Cloud Elasticsearch cluster, you can enable the Auto Indexing, Audit Log Indexing, or Watcher feature.
        :param zone_count: Property zoneCount: undefined.
        '''
        self._values: typing.Dict[str, typing.Any] = {
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
        if kibana_whitelist is not None:
            self._values["kibana_whitelist"] = kibana_whitelist
        if master_node is not None:
            self._values["master_node"] = master_node
        if period is not None:
            self._values["period"] = period
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

    @builtins.property
    def data_node(
        self,
    ) -> typing.Union["RosInstance.DataNodeProperty", ros_cdk_core.IResolvable]:
        '''Property dataNode: The Elasticsearch cluster's data node setting.'''
        result = self._values.get("data_node")
        assert result is not None, "Required property 'data_node' is missing"
        return typing.cast(typing.Union["RosInstance.DataNodeProperty", ros_cdk_core.IResolvable], result)

    @builtins.property
    def password(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property password: The password of the instance.

        The password can be 8 to 32 characters in length and must contain three of the following conditions: uppercase letters, lowercase letters, numbers, and special characters (!@#$%&*()_+-=).
        '''
        result = self._values.get("password")
        assert result is not None, "Required property 'password' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def version(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property version: Elasticsearch version.

        Supported values: 5.5.3_with_X-Pack, 6.3_with_X-Pack, 6.7_with_X-Pack, 7.4_with_X-Pack, 6.8, 7.4, 7.7 and so on.
        '''
        result = self._values.get("version")
        assert result is not None, "Required property 'version' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def v_switch_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property vSwitchId: The ID of VSwitch.'''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: The description of instance.

        It a string of 0 to 30 characters. It can contain numbers, letters, underscores, (_) and hyphens (-). It must start with a letter, a number or Chinese character.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def enable_kibana_private(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property enableKibanaPrivate: Enables or disables intranet access to Kibana.'''
        result = self._values.get("enable_kibana_private")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def enable_kibana_public(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property enableKibanaPublic: Enables or disables Internet access to Kibana.'''
        result = self._values.get("enable_kibana_public")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def enable_public(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property enablePublic: Whether enable public access.

        If properties is true, will allocate public address.Default: false.
        '''
        result = self._values.get("enable_public")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property instanceChargeType: Valid values are PrePaid, PostPaid, Default to PostPaid.'''
        result = self._values.get("instance_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def kibana_whitelist(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        '''Property kibanaWhitelist: Set the Kibana's IP whitelist in internet network.'''
        result = self._values.get("kibana_whitelist")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

    @builtins.property
    def master_node(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.MasterNodeProperty"]]:
        '''Property masterNode: The dedicated master node setting.

        If specified, dedicated master node will be created.
        '''
        result = self._values.get("master_node")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.MasterNodeProperty"]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property period: The duration that you will buy Elasticsearch instance (in month).

        It is valid when instance_charge_type is PrePaid. Valid values: [1~9], 12, 24, 36. Default to 1.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def private_whitelist(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        '''Property privateWhitelist: Set the instance's IP whitelist in VPC network.'''
        result = self._values.get("private_whitelist")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

    @builtins.property
    def public_whitelist(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        '''Property publicWhitelist: Set the instance's IP whitelist in Internet.

        The AllocatePublicAddress should be true.
        '''
        result = self._values.get("public_whitelist")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.YMLConfigProperty"]]:
        '''Property ymlConfig: In the YML Configuration section of the Cluster  Configuration page of your Alibaba Cloud Elasticsearch cluster,  you can enable the Auto Indexing, Audit Log Indexing, or Watcher feature.'''
        result = self._values.get("yml_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.YMLConfigProperty"]], result)

    @builtins.property
    def zone_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property zoneCount: undefined.'''
        result = self._values.get("zone_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstance(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-elasticsearch.RosInstance",
):
    '''A ROS template type:  ``ALIYUN::ElasticSearch::Instance``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosInstanceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ElasticSearch::Instance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDomain")
    def attr_domain(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Domain: Instance connection domain (only VPC network access supported).
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDomain"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceChargeType")
    def attr_instance_charge_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InstanceChargeType: Instance charge type.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceChargeType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InstanceId: The ID of the Elasticsearch instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrKibanaDomain")
    def attr_kibana_domain(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: KibanaDomain: Kibana console domain (Internet access supported).
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrKibanaDomain"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrKibanaPort")
    def attr_kibana_port(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: KibanaPort: Kibana console port.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrKibanaPort"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Port:  Instance connection port.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPort"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPublicDomain")
    def attr_public_domain(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PublicDomain: Instance public connection domain.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPublicDomain"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrStatus")
    def attr_status(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Status: The Elasticsearch instance status. Includes active, activating, inactive. Some operations are denied when status is not active.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrStatus"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVersion")
    def attr_version(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Version: Elasticsearch version.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVersion"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VSwitchId: The ID of VSwitch.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVSwitchId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dataNode")
    def data_node(
        self,
    ) -> typing.Union["RosInstance.DataNodeProperty", ros_cdk_core.IResolvable]:
        '''
        :Property: dataNode: The Elasticsearch cluster's data node setting.
        '''
        return typing.cast(typing.Union["RosInstance.DataNodeProperty", ros_cdk_core.IResolvable], jsii.get(self, "dataNode"))

    @data_node.setter
    def data_node(
        self,
        value: typing.Union["RosInstance.DataNodeProperty", ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "dataNode", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="password")
    def password(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :: #$%&*()_+-=).
        :Property: password: The password of the instance. The password can be 8 to 32 characters in length and must contain three of the following conditions: uppercase letters, lowercase letters, numbers, and special characters (!
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "password"))

    @password.setter
    def password(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "password", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="version")
    def version(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: version: Elasticsearch version. Supported values: 5.5.3_with_X-Pack, 6.3_with_X-Pack, 6.7_with_X-Pack, 7.4_with_X-Pack, 6.8, 7.4, 7.7 and so on.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "version"))

    @version.setter
    def version(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "version", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vSwitchId: The ID of VSwitch.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "vSwitchId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: The description of instance. It a string of 0 to 30 characters. It can contain numbers, letters, underscores, (_) and hyphens (-). It must start with a letter, a number or Chinese character.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableKibanaPrivate")
    def enable_kibana_private(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: enableKibanaPrivate: Enables or disables intranet access to Kibana.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "enableKibanaPrivate"))

    @enable_kibana_private.setter
    def enable_kibana_private(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "enableKibanaPrivate", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableKibanaPublic")
    def enable_kibana_public(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: enableKibanaPublic: Enables or disables Internet access to Kibana.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "enableKibanaPublic"))

    @enable_kibana_public.setter
    def enable_kibana_public(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "enableKibanaPublic", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enablePublic")
    def enable_public(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: enablePublic: Whether enable public access. If properties is true, will allocate public address.Default: false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "enablePublic"))

    @enable_public.setter
    def enable_public(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "enablePublic", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceChargeType")
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: instanceChargeType: Valid values are PrePaid, PostPaid, Default to PostPaid.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "instanceChargeType"))

    @instance_charge_type.setter
    def instance_charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "instanceChargeType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="kibanaWhitelist")
    def kibana_whitelist(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        '''
        :Property: kibanaWhitelist: Set the Kibana's IP whitelist in internet network.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], jsii.get(self, "kibanaWhitelist"))

    @kibana_whitelist.setter
    def kibana_whitelist(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "kibanaWhitelist", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="masterNode")
    def master_node(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.MasterNodeProperty"]]:
        '''
        :Property: masterNode: The dedicated master node setting. If specified, dedicated master node will be created.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.MasterNodeProperty"]], jsii.get(self, "masterNode"))

    @master_node.setter
    def master_node(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.MasterNodeProperty"]],
    ) -> None:
        jsii.set(self, "masterNode", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: period: The duration that you will buy Elasticsearch instance (in month). It is valid when instance_charge_type is PrePaid. Valid values: [1~9], 12, 24, 36. Default to 1.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "period", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="privateWhitelist")
    def private_whitelist(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        '''
        :Property: privateWhitelist: Set the instance's IP whitelist in VPC network.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], jsii.get(self, "privateWhitelist"))

    @private_whitelist.setter
    def private_whitelist(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "privateWhitelist", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="publicWhitelist")
    def public_whitelist(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        '''
        :Property: publicWhitelist: Set the instance's IP whitelist in Internet. The AllocatePublicAddress should be true.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], jsii.get(self, "publicWhitelist"))

    @public_whitelist.setter
    def public_whitelist(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "publicWhitelist", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "resourceGroupId", value)

    @builtins.property # type: ignore[misc]
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
        jsii.set(self, "tags", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="ymlConfig")
    def yml_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.YMLConfigProperty"]]:
        '''
        :Property:

        ymlConfig: In the YML Configuration section of the Cluster
        Configuration page of your Alibaba Cloud Elasticsearch cluster,
        you can enable the Auto Indexing, Audit Log Indexing, or Watcher feature.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.YMLConfigProperty"]], jsii.get(self, "ymlConfig"))

    @yml_config.setter
    def yml_config(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.YMLConfigProperty"]],
    ) -> None:
        jsii.set(self, "ymlConfig", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="zoneCount")
    def zone_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: zoneCount: undefined
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "zoneCount"))

    @zone_count.setter
    def zone_count(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "zoneCount", value)

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
            amount: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
            disk_size: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
            disk_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            spec: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            disk_encryption: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            performance_level: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param amount: 
            :param disk_size: 
            :param disk_type: 
            :param spec: 
            :param disk_encryption: 
            :param performance_level: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
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
        def amount(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
            '''
            :Property: amount: The Elasticsearch cluster's data node quantity, between 2 and 50.
            '''
            result = self._values.get("amount")
            assert result is not None, "Required property 'amount' is missing"
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

        @builtins.property
        def disk_size(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
            '''
            :Property:

            diskSize: The single data node storage space.
            cloud_ssd: An SSD disk, supports a maximum of 2048 GiB (2 TB).
            cloud_efficiency: An ultra disk, supports a maximum of 5120 GiB (5 TB). If the data to be stored is larger than 2048 GiB, an ultra disk can only support the following data sizes (GiB): [2560, 3072, 3584, 4096, 4608, 5120].
            '''
            result = self._values.get("disk_size")
            assert result is not None, "Required property 'disk_size' is missing"
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

        @builtins.property
        def disk_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: diskType: The data node disk type. Supported values: cloud_ssd, cloud_efficiency, cloud_essd
            '''
            result = self._values.get("disk_type")
            assert result is not None, "Required property 'disk_type' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def spec(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: spec: The data node specifications of the Elasticsearch instance.
            '''
            result = self._values.get("spec")
            assert result is not None, "Required property 'spec' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def disk_encryption(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: diskEncryption: Whether to enable cloud disk encryption.
            '''
            result = self._values.get("disk_encryption")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def performance_level(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            performanceLevel: The performance level of the ESSD. When the storage type is cloud_essd,
            this parameter is required and supports PL1, PL2, and PL3.
            '''
            result = self._values.get("performance_level")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DataNodeProperty(%s)" % ", ".join(
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
            spec: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            amount: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            disk_size: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            disk_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param spec: 
            :param amount: 
            :param disk_size: 
            :param disk_type: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "spec": spec,
            }
            if amount is not None:
                self._values["amount"] = amount
            if disk_size is not None:
                self._values["disk_size"] = disk_size
            if disk_type is not None:
                self._values["disk_type"] = disk_type

        @builtins.property
        def spec(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: spec: The dedicated master node spec.
            '''
            result = self._values.get("spec")
            assert result is not None, "Required property 'spec' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def amount(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: amount: The dedicated master node quantity. Default to 3.
            '''
            result = self._values.get("amount")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def disk_size(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: diskSize: The dedicated master node storage space. Default to 20.
            '''
            result = self._values.get("disk_size")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def disk_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: diskType: The dedicated master node disk type.
            '''
            result = self._values.get("disk_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
            key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "key": key,
            }
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
            audit_log: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            create_index: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            destructive_requires_name: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            other_configs: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            watcher: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param audit_log: 
            :param create_index: 
            :param destructive_requires_name: 
            :param other_configs: 
            :param watcher: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
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
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
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
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def create_index(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def destructive_requires_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
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
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def other_configs(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: otherConfigs: Other Configurations.
            '''
            result = self._values.get("other_configs")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def watcher(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            watcher: If you enable Watcher, you can use the X-Pack Watcher feature.
            You must clear the .watcher-history* index on a regular basis to free up disk space.
            This parameter corresponds to the xpack.watcher.enabled configuration item in the YML file.
            The default value of this configuration item is false.
            '''
            result = self._values.get("watcher")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

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
        "kibana_whitelist": "kibanaWhitelist",
        "master_node": "masterNode",
        "period": "period",
        "private_whitelist": "privateWhitelist",
        "public_whitelist": "publicWhitelist",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
        "yml_config": "ymlConfig",
        "zone_count": "zoneCount",
    },
)
class RosInstanceProps:
    def __init__(
        self,
        *,
        data_node: typing.Union[RosInstance.DataNodeProperty, ros_cdk_core.IResolvable],
        password: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        version: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        v_switch_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        enable_kibana_private: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        enable_kibana_public: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        enable_public: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        instance_charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        kibana_whitelist: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
        master_node: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosInstance.MasterNodeProperty]] = None,
        period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        private_whitelist: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
        public_whitelist: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[RosInstance.TagsProperty]] = None,
        yml_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosInstance.YMLConfigProperty]] = None,
        zone_count: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
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
        :param kibana_whitelist: 
        :param master_node: 
        :param period: 
        :param private_whitelist: 
        :param public_whitelist: 
        :param resource_group_id: 
        :param tags: 
        :param yml_config: 
        :param zone_count: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
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
        if kibana_whitelist is not None:
            self._values["kibana_whitelist"] = kibana_whitelist
        if master_node is not None:
            self._values["master_node"] = master_node
        if period is not None:
            self._values["period"] = period
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

    @builtins.property
    def data_node(
        self,
    ) -> typing.Union[RosInstance.DataNodeProperty, ros_cdk_core.IResolvable]:
        '''
        :Property: dataNode: The Elasticsearch cluster's data node setting.
        '''
        result = self._values.get("data_node")
        assert result is not None, "Required property 'data_node' is missing"
        return typing.cast(typing.Union[RosInstance.DataNodeProperty, ros_cdk_core.IResolvable], result)

    @builtins.property
    def password(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :: #$%&*()_+-=).
        :Property: password: The password of the instance. The password can be 8 to 32 characters in length and must contain three of the following conditions: uppercase letters, lowercase letters, numbers, and special characters (!
        '''
        result = self._values.get("password")
        assert result is not None, "Required property 'password' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def version(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: version: Elasticsearch version. Supported values: 5.5.3_with_X-Pack, 6.3_with_X-Pack, 6.7_with_X-Pack, 7.4_with_X-Pack, 6.8, 7.4, 7.7 and so on.
        '''
        result = self._values.get("version")
        assert result is not None, "Required property 'version' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def v_switch_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vSwitchId: The ID of VSwitch.
        '''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: The description of instance. It a string of 0 to 30 characters. It can contain numbers, letters, underscores, (_) and hyphens (-). It must start with a letter, a number or Chinese character.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def enable_kibana_private(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: enableKibanaPrivate: Enables or disables intranet access to Kibana.
        '''
        result = self._values.get("enable_kibana_private")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def enable_kibana_public(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: enableKibanaPublic: Enables or disables Internet access to Kibana.
        '''
        result = self._values.get("enable_kibana_public")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def enable_public(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: enablePublic: Whether enable public access. If properties is true, will allocate public address.Default: false.
        '''
        result = self._values.get("enable_public")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: instanceChargeType: Valid values are PrePaid, PostPaid, Default to PostPaid.
        '''
        result = self._values.get("instance_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def kibana_whitelist(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        '''
        :Property: kibanaWhitelist: Set the Kibana's IP whitelist in internet network.
        '''
        result = self._values.get("kibana_whitelist")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

    @builtins.property
    def master_node(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosInstance.MasterNodeProperty]]:
        '''
        :Property: masterNode: The dedicated master node setting. If specified, dedicated master node will be created.
        '''
        result = self._values.get("master_node")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosInstance.MasterNodeProperty]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: period: The duration that you will buy Elasticsearch instance (in month). It is valid when instance_charge_type is PrePaid. Valid values: [1~9], 12, 24, 36. Default to 1.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def private_whitelist(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        '''
        :Property: privateWhitelist: Set the instance's IP whitelist in VPC network.
        '''
        result = self._values.get("private_whitelist")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

    @builtins.property
    def public_whitelist(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        '''
        :Property: publicWhitelist: Set the instance's IP whitelist in Internet. The AllocatePublicAddress should be true.
        '''
        result = self._values.get("public_whitelist")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosInstance.YMLConfigProperty]]:
        '''
        :Property:

        ymlConfig: In the YML Configuration section of the Cluster
        Configuration page of your Alibaba Cloud Elasticsearch cluster,
        you can enable the Auto Indexing, Audit Log Indexing, or Watcher feature.
        '''
        result = self._values.get("yml_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosInstance.YMLConfigProperty]], result)

    @builtins.property
    def zone_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: zoneCount: undefined
        '''
        result = self._values.get("zone_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

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
