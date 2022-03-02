'''
## Aliyun ROS OTS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as OTS from '@alicloud/ros-cdk-ots';
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
    jsii_type="@alicloud/ros-cdk-ots.Instance",
):
    '''A ROS resource type:  ``ALIYUN::OTS::Instance``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "InstanceProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::OTS::Instance``.

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
    @jsii.member(jsii_name="attrInstanceName")
    def attr_instance_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute InstanceName: Instance name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPrivateEndpoint")
    def attr_private_endpoint(self) -> ros_cdk_core.IResolvable:
        '''Attribute PrivateEndpoint: Private endpoint.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPrivateEndpoint"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPublicEndpoint")
    def attr_public_endpoint(self) -> ros_cdk_core.IResolvable:
        '''Attribute PublicEndpoint: Public endpoint.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPublicEndpoint"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpcEndpoint")
    def attr_vpc_endpoint(self) -> ros_cdk_core.IResolvable:
        '''Attribute VpcEndpoint: Vpc endpoint.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcEndpoint"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ots.InstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_name": "instanceName",
        "cluster_type": "clusterType",
        "description": "description",
        "network": "network",
        "tags": "tags",
    },
)
class InstanceProps:
    def __init__(
        self,
        *,
        instance_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        cluster_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        network: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence["RosInstance.TagsProperty"]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::OTS::Instance``.

        :param instance_name: Property instanceName: The name of the instance.
        :param cluster_type: Property clusterType: Cluster type, the default is SSD.
        :param description: Property description: Instance description.
        :param network: Property network: Instance network type, default is NORMAL.
        :param tags: Property tags: Tags to attach to instance. Max support 5 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "instance_name": instance_name,
        }
        if cluster_type is not None:
            self._values["cluster_type"] = cluster_type
        if description is not None:
            self._values["description"] = description
        if network is not None:
            self._values["network"] = network
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def instance_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property instanceName: The name of the instance.'''
        result = self._values.get("instance_name")
        assert result is not None, "Required property 'instance_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def cluster_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property clusterType: Cluster type, the default is SSD.'''
        result = self._values.get("cluster_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: Instance description.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def network(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property network: Instance network type, default is NORMAL.'''
        result = self._values.get("network")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosInstance.TagsProperty"]]:
        '''Property tags: Tags to attach to instance.

        Max support 5 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosInstance.TagsProperty"]], result)

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
    jsii_type="@alicloud/ros-cdk-ots.RosInstance",
):
    '''A ROS template type:  ``ALIYUN::OTS::Instance``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosInstanceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::OTS::Instance``.

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
    @jsii.member(jsii_name="attrInstanceName")
    def attr_instance_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InstanceName: Instance name
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPrivateEndpoint")
    def attr_private_endpoint(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PrivateEndpoint: Private endpoint
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPrivateEndpoint"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPublicEndpoint")
    def attr_public_endpoint(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PublicEndpoint: Public endpoint
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPublicEndpoint"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpcEndpoint")
    def attr_vpc_endpoint(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VpcEndpoint: Vpc endpoint
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcEndpoint"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceName")
    def instance_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceName: The name of the instance.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "instanceName"))

    @instance_name.setter
    def instance_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "instanceName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="clusterType")
    def cluster_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: clusterType: Cluster type, the default is SSD.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "clusterType"))

    @cluster_type.setter
    def cluster_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "clusterType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Instance description.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="network")
    def network(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: network: Instance network type, default is NORMAL.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "network"))

    @network.setter
    def network(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "network", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosInstance.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 5 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosInstance.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosInstance.TagsProperty"]],
    ) -> None:
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ots.RosInstance.TagsProperty",
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
    jsii_type="@alicloud/ros-cdk-ots.RosInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_name": "instanceName",
        "cluster_type": "clusterType",
        "description": "description",
        "network": "network",
        "tags": "tags",
    },
)
class RosInstanceProps:
    def __init__(
        self,
        *,
        instance_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        cluster_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        network: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[RosInstance.TagsProperty]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::OTS::Instance``.

        :param instance_name: 
        :param cluster_type: 
        :param description: 
        :param network: 
        :param tags: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "instance_name": instance_name,
        }
        if cluster_type is not None:
            self._values["cluster_type"] = cluster_type
        if description is not None:
            self._values["description"] = description
        if network is not None:
            self._values["network"] = network
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def instance_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceName: The name of the instance.
        '''
        result = self._values.get("instance_name")
        assert result is not None, "Required property 'instance_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def cluster_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: clusterType: Cluster type, the default is SSD.
        '''
        result = self._values.get("cluster_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Instance description.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def network(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: network: Instance network type, default is NORMAL.
        '''
        result = self._values.get("network")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosInstance.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 5 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosInstance.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSearchIndex(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ots.RosSearchIndex",
):
    '''A ROS template type:  ``ALIYUN::OTS::SearchIndex``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosSearchIndexProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::OTS::SearchIndex``.

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
    @jsii.member(jsii_name="attrIndexName")
    def attr_index_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: IndexName: Index name.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIndexName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="fieldSchemas")
    def field_schemas(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosSearchIndex.FieldSchemasProperty"]]]:
        '''
        :Property: fieldSchemas: list of field_schema.
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosSearchIndex.FieldSchemasProperty"]]], jsii.get(self, "fieldSchemas"))

    @field_schemas.setter
    def field_schemas(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosSearchIndex.FieldSchemasProperty"]]],
    ) -> None:
        jsii.set(self, "fieldSchemas", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="indexName")
    def index_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: indexName: The index name.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "indexName"))

    @index_name.setter
    def index_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "indexName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceName")
    def instance_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceName: The name of the OTS instance in which table will locate.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "instanceName"))

    @instance_name.setter
    def instance_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "instanceName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="tableName")
    def table_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: tableName: The table name of the OTS instance.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "tableName"))

    @table_name.setter
    def table_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "tableName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="indexSetting")
    def index_setting(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosSearchIndex.IndexSettingProperty"]]:
        '''
        :Property: indexSetting: Index settings
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosSearchIndex.IndexSettingProperty"]], jsii.get(self, "indexSetting"))

    @index_setting.setter
    def index_setting(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosSearchIndex.IndexSettingProperty"]],
    ) -> None:
        jsii.set(self, "indexSetting", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="indexSort")
    def index_sort(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosSearchIndex.IndexSortProperty"]]:
        '''
        :Property:

        indexSort: This parameter specifies how data is sorted.
        By default, the data is sorted in the same way as the primary key of the table.
        If the search index contains NESTED fields, data is not sorted by default.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosSearchIndex.IndexSortProperty"]], jsii.get(self, "indexSort"))

    @index_sort.setter
    def index_sort(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosSearchIndex.IndexSortProperty"]],
    ) -> None:
        jsii.set(self, "indexSort", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ots.RosSearchIndex.FieldSchemasProperty",
        jsii_struct_bases=[],
        name_mapping={
            "field_name": "fieldName",
            "field_type": "fieldType",
            "analyzer": "analyzer",
            "enable_sort_and_agg": "enableSortAndAgg",
            "index": "index",
            "is_array": "isArray",
            "store": "store",
            "sub_field_schemas": "subFieldSchemas",
        },
    )
    class FieldSchemasProperty:
        def __init__(
            self,
            *,
            field_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            field_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            analyzer: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            enable_sort_and_agg: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            index: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            is_array: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            store: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            sub_field_schemas: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosSearchIndex.SubFieldSchemasProperty"]]]] = None,
        ) -> None:
            '''
            :param field_name: 
            :param field_type: 
            :param analyzer: 
            :param enable_sort_and_agg: 
            :param index: 
            :param is_array: 
            :param store: 
            :param sub_field_schemas: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "field_name": field_name,
                "field_type": field_type,
            }
            if analyzer is not None:
                self._values["analyzer"] = analyzer
            if enable_sort_and_agg is not None:
                self._values["enable_sort_and_agg"] = enable_sort_and_agg
            if index is not None:
                self._values["index"] = index
            if is_array is not None:
                self._values["is_array"] = is_array
            if store is not None:
                self._values["store"] = store
            if sub_field_schemas is not None:
                self._values["sub_field_schemas"] = sub_field_schemas

        @builtins.property
        def field_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property:

            fieldName: This parameter specifies the name of the field (column) to index.
            The field can be a primary key column or an attribute column.
            '''
            result = self._values.get("field_name")
            assert result is not None, "Required property 'field_name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def field_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property:

            fieldType: This parameter specifies the type of the field. Type: FieldType.
            For more information, see the description of field types for a search index.
            '''
            result = self._values.get("field_type")
            assert result is not None, "Required property 'field_type' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def analyzer(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            analyzer: This parameter specifies the tokenizer.
            You can specify this parameter if the column is a TEXT column. Type: AnalyzerType.
            '''
            result = self._values.get("analyzer")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def enable_sort_and_agg(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: enableSortAndAgg: This parameter specifies whether to enable sorting and aggregation for the column.
            '''
            result = self._values.get("enable_sort_and_agg")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def index(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            index: This parameter specifies whether to index the column.
            The default is true, which means to build an inverted index or a spatial index for the column; if it is set to false, the column will not be indexed.
            '''
            result = self._values.get("index")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def is_array(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            isArray: This parameter specifies whether the column is an array.
            A value of true indicates that the column is an array. Data written to the column must be a JSON array.
            Example: ["a","b","c"]. You do not need to explicitly specify this parameter for NESTED columns because they are arrays.
            '''
            result = self._values.get("is_array")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def store(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            store: This parameter specifies whether to store the values of the field in the search index.
            A value of true indicates that you can read the values of the field directly from the search index without the need to query the table.
            This configuration optimizes query performance.
            '''
            result = self._values.get("store")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def sub_field_schemas(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosSearchIndex.SubFieldSchemasProperty"]]]]:
            '''
            :Property:

            subFieldSchemas: This parameter specifies the list of field schemas for subfields.
            If the column is a NESTED column, you must specify this parameter to configure the index types of subcolumns in the NESTED column.
            '''
            result = self._values.get("sub_field_schemas")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosSearchIndex.SubFieldSchemasProperty"]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "FieldSchemasProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ots.RosSearchIndex.FieldSortProperty",
        jsii_struct_bases=[],
        name_mapping={
            "field_name": "fieldName",
            "sort_mode": "sortMode",
            "sort_order": "sortOrder",
        },
    )
    class FieldSortProperty:
        def __init__(
            self,
            *,
            field_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            sort_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            sort_order: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param field_name: 
            :param sort_mode: 
            :param sort_order: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "field_name": field_name,
            }
            if sort_mode is not None:
                self._values["sort_mode"] = sort_mode
            if sort_order is not None:
                self._values["sort_order"] = sort_order

        @builtins.property
        def field_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: fieldName: Sorted field name.
            '''
            result = self._values.get("field_name")
            assert result is not None, "Required property 'field_name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def sort_mode(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: sortMode: Sorting method when there are multiple values in the field.
            '''
            result = self._values.get("sort_mode")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def sort_order(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: sortOrder: The sort order can be sorted in ascending or descending order, the default is ascending(SortOrder.ASC).
            '''
            result = self._values.get("sort_order")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "FieldSortProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ots.RosSearchIndex.GeoDistanceSortProperty",
        jsii_struct_bases=[],
        name_mapping={
            "field_name": "fieldName",
            "points": "points",
            "sort_mode": "sortMode",
            "sort_order": "sortOrder",
        },
    )
    class GeoDistanceSortProperty:
        def __init__(
            self,
            *,
            field_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            points: typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable],
            sort_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            sort_order: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param field_name: 
            :param points: 
            :param sort_mode: 
            :param sort_order: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "field_name": field_name,
                "points": points,
            }
            if sort_mode is not None:
                self._values["sort_mode"] = sort_mode
            if sort_order is not None:
                self._values["sort_order"] = sort_order

        @builtins.property
        def field_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: fieldName: Sorted field name.
            '''
            result = self._values.get("field_name")
            assert result is not None, "Required property 'field_name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def points(
            self,
        ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
            '''
            :Property: points: The parameter of GeoDistanceSort
            '''
            result = self._values.get("points")
            assert result is not None, "Required property 'points' is missing"
            return typing.cast(typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable], result)

        @builtins.property
        def sort_mode(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: sortMode: Sorting method when there are multiple values in the field.
            '''
            result = self._values.get("sort_mode")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def sort_order(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: sortOrder: The sort order can be sorted in ascending or descending order
            '''
            result = self._values.get("sort_order")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "GeoDistanceSortProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ots.RosSearchIndex.IndexSettingProperty",
        jsii_struct_bases=[],
        name_mapping={"routing_fields": "routingFields"},
    )
    class IndexSettingProperty:
        def __init__(
            self,
            *,
            routing_fields: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param routing_fields: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if routing_fields is not None:
                self._values["routing_fields"] = routing_fields

        @builtins.property
        def routing_fields(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            '''
            :Property:

            routingFields: You can use this advanced feature to customize routing fields.
            You can specify some primary key columns as routing fields.
            Tablestore distributes data that is written to a search index to different partitions based on the specified routing fields.
            The data with the same routing field values is distributed to the same data partition.
            '''
            result = self._values.get("routing_fields")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "IndexSettingProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ots.RosSearchIndex.IndexSortProperty",
        jsii_struct_bases=[],
        name_mapping={"sorters": "sorters"},
    )
    class IndexSortProperty:
        def __init__(
            self,
            *,
            sorters: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosSearchIndex.SortersProperty"]]],
        ) -> None:
            '''
            :param sorters: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "sorters": sorters,
            }

        @builtins.property
        def sorters(
            self,
        ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosSearchIndex.SortersProperty"]]]:
            '''
            :Property:

            sorters: This parameter specifies the sorting methods.  Valid values:

            - PrimaryKeySort: The index is sorted by primary key in ascending or descending order.
            - FieldSort: The index is sorted by a specified column in ascending or descending order.
            '''
            result = self._values.get("sorters")
            assert result is not None, "Required property 'sorters' is missing"
            return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosSearchIndex.SortersProperty"]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "IndexSortProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ots.RosSearchIndex.PrimaryKeySortProperty",
        jsii_struct_bases=[],
        name_mapping={"sort_order": "sortOrder"},
    )
    class PrimaryKeySortProperty:
        def __init__(
            self,
            *,
            sort_order: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param sort_order: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if sort_order is not None:
                self._values["sort_order"] = sort_order

        @builtins.property
        def sort_order(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: sortOrder: The sort order can be sorted in ascending or descending order, the default is ascending(SortOrder.ASC).
            '''
            result = self._values.get("sort_order")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PrimaryKeySortProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ots.RosSearchIndex.ScoreSortProperty",
        jsii_struct_bases=[],
        name_mapping={"sort_order": "sortOrder"},
    )
    class ScoreSortProperty:
        def __init__(
            self,
            *,
            sort_order: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param sort_order: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if sort_order is not None:
                self._values["sort_order"] = sort_order

        @builtins.property
        def sort_order(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: sortOrder: The sort order can be sorted in ascending or descending order
            '''
            result = self._values.get("sort_order")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ScoreSortProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ots.RosSearchIndex.SortersProperty",
        jsii_struct_bases=[],
        name_mapping={
            "field_sort": "fieldSort",
            "geo_distance_sort": "geoDistanceSort",
            "primary_key_sort": "primaryKeySort",
            "score_sort": "scoreSort",
        },
    )
    class SortersProperty:
        def __init__(
            self,
            *,
            field_sort: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosSearchIndex.FieldSortProperty"]] = None,
            geo_distance_sort: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosSearchIndex.GeoDistanceSortProperty"]] = None,
            primary_key_sort: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosSearchIndex.PrimaryKeySortProperty"]] = None,
            score_sort: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosSearchIndex.ScoreSortProperty"]] = None,
        ) -> None:
            '''
            :param field_sort: 
            :param geo_distance_sort: 
            :param primary_key_sort: 
            :param score_sort: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if field_sort is not None:
                self._values["field_sort"] = field_sort
            if geo_distance_sort is not None:
                self._values["geo_distance_sort"] = geo_distance_sort
            if primary_key_sort is not None:
                self._values["primary_key_sort"] = primary_key_sort
            if score_sort is not None:
                self._values["score_sort"] = score_sort

        @builtins.property
        def field_sort(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosSearchIndex.FieldSortProperty"]]:
            '''
            :Property:

            fieldSort: Sort by field value.
            Only fields that are indexed and have sorting and statistical aggregation functions enabled can be pre-sorted
            '''
            result = self._values.get("field_sort")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosSearchIndex.FieldSortProperty"]], result)

        @builtins.property
        def geo_distance_sort(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosSearchIndex.GeoDistanceSortProperty"]]:
            '''
            :Property: geoDistanceSort: You can use GeoDistanceSort to sort the query result based on distances of geographical locations.
            '''
            result = self._values.get("geo_distance_sort")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosSearchIndex.GeoDistanceSortProperty"]], result)

        @builtins.property
        def primary_key_sort(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosSearchIndex.PrimaryKeySortProperty"]]:
            '''
            :Property: primaryKeySort: You can use PrimaryKeySort to sort the query result based on the order of primary key columns.
            '''
            result = self._values.get("primary_key_sort")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosSearchIndex.PrimaryKeySortProperty"]], result)

        @builtins.property
        def score_sort(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosSearchIndex.ScoreSortProperty"]]:
            '''
            :Property:

            scoreSort: You can use ScoreSort to sort the query result by keyword relevance score.
            ScoreSort is applicable to scenarios such as full-text indexing.
            Note Note that you must set ScoreSort to sort the query result by keyword relevance score. Otherwise, the query result is sorted based on the value of the IndexSort field.
            '''
            result = self._values.get("score_sort")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosSearchIndex.ScoreSortProperty"]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SortersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ots.RosSearchIndex.SubFieldSchemasProperty",
        jsii_struct_bases=[],
        name_mapping={
            "field_name": "fieldName",
            "field_type": "fieldType",
            "analyzer": "analyzer",
            "enable_sort_and_agg": "enableSortAndAgg",
            "index": "index",
            "is_array": "isArray",
            "store": "store",
        },
    )
    class SubFieldSchemasProperty:
        def __init__(
            self,
            *,
            field_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            field_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            analyzer: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            enable_sort_and_agg: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            index: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            is_array: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            store: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param field_name: 
            :param field_type: 
            :param analyzer: 
            :param enable_sort_and_agg: 
            :param index: 
            :param is_array: 
            :param store: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "field_name": field_name,
                "field_type": field_type,
            }
            if analyzer is not None:
                self._values["analyzer"] = analyzer
            if enable_sort_and_agg is not None:
                self._values["enable_sort_and_agg"] = enable_sort_and_agg
            if index is not None:
                self._values["index"] = index
            if is_array is not None:
                self._values["is_array"] = is_array
            if store is not None:
                self._values["store"] = store

        @builtins.property
        def field_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property:

            fieldName: This parameter specifies the name of the field (column) to index.
            The field can be a primary key column or an attribute column.
            '''
            result = self._values.get("field_name")
            assert result is not None, "Required property 'field_name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def field_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property:

            fieldType: This parameter specifies the type of the field. Type: FieldType.
            For more information, see the description of field types for a search index.
            '''
            result = self._values.get("field_type")
            assert result is not None, "Required property 'field_type' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def analyzer(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            analyzer: This parameter specifies the tokenizer.
            You can specify this parameter if the column is a TEXT column. Type: AnalyzerType.
            '''
            result = self._values.get("analyzer")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def enable_sort_and_agg(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: enableSortAndAgg: This parameter specifies whether to enable sorting and aggregation for the column.
            '''
            result = self._values.get("enable_sort_and_agg")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def index(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            index: This parameter specifies whether to index the column.
            The default is true, which means to build an inverted index or a spatial index for the column; if it is set to false, the column will not be indexed.
            '''
            result = self._values.get("index")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def is_array(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            isArray: This parameter specifies whether the column is an array.
            A value of true indicates that the column is an array. Data written to the column must be a JSON array.
            Example: ["a","b","c"]. You do not need to explicitly specify this parameter for NESTED columns because they are arrays.
            '''
            result = self._values.get("is_array")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def store(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            store: This parameter specifies whether to store the values of the field in the search index.
            A value of true indicates that you can read the values of the field directly from the search index without the need to query the table.
            This configuration optimizes query performance.
            '''
            result = self._values.get("store")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SubFieldSchemasProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ots.RosSearchIndexProps",
    jsii_struct_bases=[],
    name_mapping={
        "field_schemas": "fieldSchemas",
        "index_name": "indexName",
        "instance_name": "instanceName",
        "table_name": "tableName",
        "index_setting": "indexSetting",
        "index_sort": "indexSort",
    },
)
class RosSearchIndexProps:
    def __init__(
        self,
        *,
        field_schemas: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosSearchIndex.FieldSchemasProperty]]],
        index_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        table_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        index_setting: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosSearchIndex.IndexSettingProperty]] = None,
        index_sort: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosSearchIndex.IndexSortProperty]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::OTS::SearchIndex``.

        :param field_schemas: 
        :param index_name: 
        :param instance_name: 
        :param table_name: 
        :param index_setting: 
        :param index_sort: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "field_schemas": field_schemas,
            "index_name": index_name,
            "instance_name": instance_name,
            "table_name": table_name,
        }
        if index_setting is not None:
            self._values["index_setting"] = index_setting
        if index_sort is not None:
            self._values["index_sort"] = index_sort

    @builtins.property
    def field_schemas(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosSearchIndex.FieldSchemasProperty]]]:
        '''
        :Property: fieldSchemas: list of field_schema.
        '''
        result = self._values.get("field_schemas")
        assert result is not None, "Required property 'field_schemas' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosSearchIndex.FieldSchemasProperty]]], result)

    @builtins.property
    def index_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: indexName: The index name.
        '''
        result = self._values.get("index_name")
        assert result is not None, "Required property 'index_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceName: The name of the OTS instance in which table will locate.
        '''
        result = self._values.get("instance_name")
        assert result is not None, "Required property 'instance_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def table_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: tableName: The table name of the OTS instance.
        '''
        result = self._values.get("table_name")
        assert result is not None, "Required property 'table_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def index_setting(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosSearchIndex.IndexSettingProperty]]:
        '''
        :Property: indexSetting: Index settings
        '''
        result = self._values.get("index_setting")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosSearchIndex.IndexSettingProperty]], result)

    @builtins.property
    def index_sort(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosSearchIndex.IndexSortProperty]]:
        '''
        :Property:

        indexSort: This parameter specifies how data is sorted.
        By default, the data is sorted in the same way as the primary key of the table.
        If the search index contains NESTED fields, data is not sorted by default.
        '''
        result = self._values.get("index_sort")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosSearchIndex.IndexSortProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSearchIndexProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosTable(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ots.RosTable",
):
    '''A ROS template type:  ``ALIYUN::OTS::Table``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosTableProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::OTS::Table``.

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
    @jsii.member(jsii_name="attrTableName")
    def attr_table_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TableName: Table name
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTableName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceName")
    def instance_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceName: The name of the OTS instance in which table will locate.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "instanceName"))

    @instance_name.setter
    def instance_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "instanceName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="primaryKey")
    def primary_key(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosTable.PrimaryKeyProperty"]]]:
        '''
        :Property: primaryKey: It describes the attribute value of primary key. The number of primary_key should not be less than one and not be more than four.
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosTable.PrimaryKeyProperty"]]], jsii.get(self, "primaryKey"))

    @primary_key.setter
    def primary_key(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosTable.PrimaryKeyProperty"]]],
    ) -> None:
        jsii.set(self, "primaryKey", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="tableName")
    def table_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: tableName: The table name of the OTS instance.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "tableName"))

    @table_name.setter
    def table_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "tableName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="columns")
    def columns(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosTable.ColumnsProperty"]]]]:
        '''
        :Property: columns: Attribute column for table store.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosTable.ColumnsProperty"]]]], jsii.get(self, "columns"))

    @columns.setter
    def columns(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosTable.ColumnsProperty"]]]],
    ) -> None:
        jsii.set(self, "columns", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="deviationCellVersionInSec")
    def deviation_cell_version_in_sec(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: deviationCellVersionInSec: Maximum version deviation. The purpose is mainly to prohibit writing and expected large data, such as setting the deviation_cell_version_in_sec to 1000, and if the current timestamp is 10000, the timestamp range allowed to be written is [10000 - 1000, 10000 + 1000]. The valid value is 1-9223372036854775807. Defaults to 86400.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "deviationCellVersionInSec"))

    @deviation_cell_version_in_sec.setter
    def deviation_cell_version_in_sec(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "deviationCellVersionInSec", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="maxVersions")
    def max_versions(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: maxVersions: The maximum number of versions stored in this table. The valid value is 1-2147483647. Default to 1.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "maxVersions"))

    @max_versions.setter
    def max_versions(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "maxVersions", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="reservedThroughput")
    def reserved_throughput(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosTable.ReservedThroughputProperty"]]:
        '''
        :Property: reservedThroughput: The initial reserved read/write throughput setting of the table to be created, the reserved read throughput and reserved write throughput of any table cannot exceed 5000.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosTable.ReservedThroughputProperty"]], jsii.get(self, "reservedThroughput"))

    @reserved_throughput.setter
    def reserved_throughput(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosTable.ReservedThroughputProperty"]],
    ) -> None:
        jsii.set(self, "reservedThroughput", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="secondaryIndices")
    def secondary_indices(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosTable.SecondaryIndicesProperty"]]]]:
        '''
        :Property: secondaryIndices: The secondary indices of the table.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosTable.SecondaryIndicesProperty"]]]], jsii.get(self, "secondaryIndices"))

    @secondary_indices.setter
    def secondary_indices(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosTable.SecondaryIndicesProperty"]]]],
    ) -> None:
        jsii.set(self, "secondaryIndices", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="timeToLive")
    def time_to_live(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: timeToLive: The retention time of data stored in this table (unit: second). The value maximum is 2147483647 and -1 means never expired. Default to -1.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "timeToLive"))

    @time_to_live.setter
    def time_to_live(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "timeToLive", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ots.RosTable.ColumnsProperty",
        jsii_struct_bases=[],
        name_mapping={"name": "name", "type": "type"},
    )
    class ColumnsProperty:
        def __init__(
            self,
            *,
            name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param name: 
            :param type: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "name": name,
                "type": type,
            }

        @builtins.property
        def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: name: The column name of the column.
            '''
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: type: The type of the column.
            '''
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ColumnsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ots.RosTable.PrimaryKeyProperty",
        jsii_struct_bases=[],
        name_mapping={"name": "name", "type": "type"},
    )
    class PrimaryKeyProperty:
        def __init__(
            self,
            *,
            name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param name: 
            :param type: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "name": name,
                "type": type,
            }

        @builtins.property
        def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: name: Name for primary key.
            '''
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: type: Type for primary key. Only INTEGER, STRING or BINARY is allowed.
            '''
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PrimaryKeyProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ots.RosTable.ReservedThroughputProperty",
        jsii_struct_bases=[],
        name_mapping={"read": "read", "write": "write"},
    )
    class ReservedThroughputProperty:
        def __init__(
            self,
            *,
            read: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
            write: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param read: 
            :param write: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "read": read,
                "write": write,
            }

        @builtins.property
        def read(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
            '''
            :Property: read: The read service capability unit consumed by this operation or the reserved read throughput of the table. Default to 0.
            '''
            result = self._values.get("read")
            assert result is not None, "Required property 'read' is missing"
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

        @builtins.property
        def write(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
            '''
            :Property: write: The write service capability unit consumed by this operation or the reserved write throughput of the table. Default to 0.
            '''
            result = self._values.get("write")
            assert result is not None, "Required property 'write' is missing"
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ReservedThroughputProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ots.RosTable.SecondaryIndicesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "columns": "columns",
            "index_name": "indexName",
            "primary_keys": "primaryKeys",
            "index_type": "indexType",
        },
    )
    class SecondaryIndicesProperty:
        def __init__(
            self,
            *,
            columns: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
            index_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            primary_keys: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
            index_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param columns: 
            :param index_name: 
            :param primary_keys: 
            :param index_type: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "columns": columns,
                "index_name": index_name,
                "primary_keys": primary_keys,
            }
            if index_type is not None:
                self._values["index_type"] = index_type

        @builtins.property
        def columns(
            self,
        ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]:
            '''
            :Property: columns: The columns of the index.
            '''
            result = self._values.get("columns")
            assert result is not None, "Required property 'columns' is missing"
            return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]], result)

        @builtins.property
        def index_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: indexName: The index name.
            '''
            result = self._values.get("index_name")
            assert result is not None, "Required property 'index_name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def primary_keys(
            self,
        ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]:
            '''
            :Property: primaryKeys: The primary keys of the index.
            '''
            result = self._values.get("primary_keys")
            assert result is not None, "Required property 'primary_keys' is missing"
            return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]], result)

        @builtins.property
        def index_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: indexType: The index type
            '''
            result = self._values.get("index_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SecondaryIndicesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ots.RosTableProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_name": "instanceName",
        "primary_key": "primaryKey",
        "table_name": "tableName",
        "columns": "columns",
        "deviation_cell_version_in_sec": "deviationCellVersionInSec",
        "max_versions": "maxVersions",
        "reserved_throughput": "reservedThroughput",
        "secondary_indices": "secondaryIndices",
        "time_to_live": "timeToLive",
    },
)
class RosTableProps:
    def __init__(
        self,
        *,
        instance_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        primary_key: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosTable.PrimaryKeyProperty]]],
        table_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        columns: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosTable.ColumnsProperty]]]] = None,
        deviation_cell_version_in_sec: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        max_versions: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        reserved_throughput: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosTable.ReservedThroughputProperty]] = None,
        secondary_indices: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosTable.SecondaryIndicesProperty]]]] = None,
        time_to_live: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::OTS::Table``.

        :param instance_name: 
        :param primary_key: 
        :param table_name: 
        :param columns: 
        :param deviation_cell_version_in_sec: 
        :param max_versions: 
        :param reserved_throughput: 
        :param secondary_indices: 
        :param time_to_live: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "instance_name": instance_name,
            "primary_key": primary_key,
            "table_name": table_name,
        }
        if columns is not None:
            self._values["columns"] = columns
        if deviation_cell_version_in_sec is not None:
            self._values["deviation_cell_version_in_sec"] = deviation_cell_version_in_sec
        if max_versions is not None:
            self._values["max_versions"] = max_versions
        if reserved_throughput is not None:
            self._values["reserved_throughput"] = reserved_throughput
        if secondary_indices is not None:
            self._values["secondary_indices"] = secondary_indices
        if time_to_live is not None:
            self._values["time_to_live"] = time_to_live

    @builtins.property
    def instance_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceName: The name of the OTS instance in which table will locate.
        '''
        result = self._values.get("instance_name")
        assert result is not None, "Required property 'instance_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def primary_key(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosTable.PrimaryKeyProperty]]]:
        '''
        :Property: primaryKey: It describes the attribute value of primary key. The number of primary_key should not be less than one and not be more than four.
        '''
        result = self._values.get("primary_key")
        assert result is not None, "Required property 'primary_key' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosTable.PrimaryKeyProperty]]], result)

    @builtins.property
    def table_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: tableName: The table name of the OTS instance.
        '''
        result = self._values.get("table_name")
        assert result is not None, "Required property 'table_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def columns(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosTable.ColumnsProperty]]]]:
        '''
        :Property: columns: Attribute column for table store.
        '''
        result = self._values.get("columns")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosTable.ColumnsProperty]]]], result)

    @builtins.property
    def deviation_cell_version_in_sec(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: deviationCellVersionInSec: Maximum version deviation. The purpose is mainly to prohibit writing and expected large data, such as setting the deviation_cell_version_in_sec to 1000, and if the current timestamp is 10000, the timestamp range allowed to be written is [10000 - 1000, 10000 + 1000]. The valid value is 1-9223372036854775807. Defaults to 86400.
        '''
        result = self._values.get("deviation_cell_version_in_sec")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def max_versions(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: maxVersions: The maximum number of versions stored in this table. The valid value is 1-2147483647. Default to 1.
        '''
        result = self._values.get("max_versions")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def reserved_throughput(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosTable.ReservedThroughputProperty]]:
        '''
        :Property: reservedThroughput: The initial reserved read/write throughput setting of the table to be created, the reserved read throughput and reserved write throughput of any table cannot exceed 5000.
        '''
        result = self._values.get("reserved_throughput")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosTable.ReservedThroughputProperty]], result)

    @builtins.property
    def secondary_indices(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosTable.SecondaryIndicesProperty]]]]:
        '''
        :Property: secondaryIndices: The secondary indices of the table.
        '''
        result = self._values.get("secondary_indices")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosTable.SecondaryIndicesProperty]]]], result)

    @builtins.property
    def time_to_live(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: timeToLive: The retention time of data stored in this table (unit: second). The value maximum is 2147483647 and -1 means never expired. Default to -1.
        '''
        result = self._values.get("time_to_live")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTableProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosVpcBinder(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ots.RosVpcBinder",
):
    '''A ROS template type:  ``ALIYUN::OTS::VpcBinder``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosVpcBinderProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::OTS::VpcBinder``.

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
    @jsii.member(jsii_name="attrDomains")
    def attr_domains(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Domains: The domain names used to access the OTS instance in the VPC.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDomains"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrEndpoints")
    def attr_endpoints(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Endpoints: Private network addresses used to access the OTS instance in the VPC.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEndpoints"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceName")
    def instance_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceName: Instance name
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "instanceName"))

    @instance_name.setter
    def instance_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "instanceName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vpcs")
    def vpcs(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosVpcBinder.VpcsProperty"]]]:
        '''
        :Property: vpcs: Vpc binding configuration.
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosVpcBinder.VpcsProperty"]]], jsii.get(self, "vpcs"))

    @vpcs.setter
    def vpcs(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosVpcBinder.VpcsProperty"]]],
    ) -> None:
        jsii.set(self, "vpcs", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ots.RosVpcBinder.VpcsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "instance_vpc_name": "instanceVpcName",
            "network": "network",
            "virtual_switch_id": "virtualSwitchId",
            "vpc_id": "vpcId",
        },
    )
    class VpcsProperty:
        def __init__(
            self,
            *,
            instance_vpc_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            network: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            virtual_switch_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param instance_vpc_name: 
            :param network: 
            :param virtual_switch_id: 
            :param vpc_id: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "instance_vpc_name": instance_vpc_name,
                "network": network,
                "virtual_switch_id": virtual_switch_id,
                "vpc_id": vpc_id,
            }

        @builtins.property
        def instance_vpc_name(
            self,
        ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: instanceVpcName: Custom name, need to be unique under the OTS instance.
            '''
            result = self._values.get("instance_vpc_name")
            assert result is not None, "Required property 'instance_vpc_name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def network(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property:

            network: Instance network type. The values are as follows:
            1, the NORMAL instance does not limit the source of the request. (Defaults)
            2. A VPC instance only allows requests from all VPCs it is bound to.
            3, VPC_CONSOLE instance only allows requests from the console and all VPCs it is bound to
            '''
            result = self._values.get("network")
            assert result is not None, "Required property 'network' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def virtual_switch_id(
            self,
        ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: virtualSwitchId: vSwitch Id.
            '''
            result = self._values.get("virtual_switch_id")
            assert result is not None, "Required property 'virtual_switch_id' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: vpcId: Vpc Id.
            '''
            result = self._values.get("vpc_id")
            assert result is not None, "Required property 'vpc_id' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "VpcsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ots.RosVpcBinderProps",
    jsii_struct_bases=[],
    name_mapping={"instance_name": "instanceName", "vpcs": "vpcs"},
)
class RosVpcBinderProps:
    def __init__(
        self,
        *,
        instance_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vpcs: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosVpcBinder.VpcsProperty]]],
    ) -> None:
        '''Properties for defining a ``ALIYUN::OTS::VpcBinder``.

        :param instance_name: 
        :param vpcs: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "instance_name": instance_name,
            "vpcs": vpcs,
        }

    @builtins.property
    def instance_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceName: Instance name
        '''
        result = self._values.get("instance_name")
        assert result is not None, "Required property 'instance_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vpcs(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosVpcBinder.VpcsProperty]]]:
        '''
        :Property: vpcs: Vpc binding configuration.
        '''
        result = self._values.get("vpcs")
        assert result is not None, "Required property 'vpcs' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosVpcBinder.VpcsProperty]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosVpcBinderProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class SearchIndex(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ots.SearchIndex",
):
    '''A ROS resource type:  ``ALIYUN::OTS::SearchIndex``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "SearchIndexProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::OTS::SearchIndex``.

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
    @jsii.member(jsii_name="attrIndexName")
    def attr_index_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute IndexName: Index name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIndexName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ots.SearchIndexProps",
    jsii_struct_bases=[],
    name_mapping={
        "field_schemas": "fieldSchemas",
        "index_name": "indexName",
        "instance_name": "instanceName",
        "table_name": "tableName",
        "index_setting": "indexSetting",
        "index_sort": "indexSort",
    },
)
class SearchIndexProps:
    def __init__(
        self,
        *,
        field_schemas: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosSearchIndex.FieldSchemasProperty]]],
        index_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        table_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        index_setting: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosSearchIndex.IndexSettingProperty]] = None,
        index_sort: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosSearchIndex.IndexSortProperty]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::OTS::SearchIndex``.

        :param field_schemas: Property fieldSchemas: list of field_schema.
        :param index_name: Property indexName: The index name.
        :param instance_name: Property instanceName: The name of the OTS instance in which table will locate.
        :param table_name: Property tableName: The table name of the OTS instance.
        :param index_setting: Property indexSetting: Index settings.
        :param index_sort: Property indexSort: This parameter specifies how data is sorted. By default, the data is sorted in the same way as the primary key of the table. If the search index contains NESTED fields, data is not sorted by default.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "field_schemas": field_schemas,
            "index_name": index_name,
            "instance_name": instance_name,
            "table_name": table_name,
        }
        if index_setting is not None:
            self._values["index_setting"] = index_setting
        if index_sort is not None:
            self._values["index_sort"] = index_sort

    @builtins.property
    def field_schemas(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosSearchIndex.FieldSchemasProperty]]]:
        '''Property fieldSchemas: list of field_schema.'''
        result = self._values.get("field_schemas")
        assert result is not None, "Required property 'field_schemas' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosSearchIndex.FieldSchemasProperty]]], result)

    @builtins.property
    def index_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property indexName: The index name.'''
        result = self._values.get("index_name")
        assert result is not None, "Required property 'index_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property instanceName: The name of the OTS instance in which table will locate.'''
        result = self._values.get("instance_name")
        assert result is not None, "Required property 'instance_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def table_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property tableName: The table name of the OTS instance.'''
        result = self._values.get("table_name")
        assert result is not None, "Required property 'table_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def index_setting(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosSearchIndex.IndexSettingProperty]]:
        '''Property indexSetting: Index settings.'''
        result = self._values.get("index_setting")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosSearchIndex.IndexSettingProperty]], result)

    @builtins.property
    def index_sort(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosSearchIndex.IndexSortProperty]]:
        '''Property indexSort: This parameter specifies how data is sorted.

        By default, the data is sorted in the same way as the primary key of the table.
        If the search index contains NESTED fields, data is not sorted by default.
        '''
        result = self._values.get("index_sort")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosSearchIndex.IndexSortProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SearchIndexProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Table(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ots.Table",
):
    '''A ROS resource type:  ``ALIYUN::OTS::Table``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "TableProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::OTS::Table``.

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
    @jsii.member(jsii_name="attrTableName")
    def attr_table_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute TableName: Table name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTableName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ots.TableProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_name": "instanceName",
        "primary_key": "primaryKey",
        "table_name": "tableName",
        "columns": "columns",
        "deviation_cell_version_in_sec": "deviationCellVersionInSec",
        "max_versions": "maxVersions",
        "reserved_throughput": "reservedThroughput",
        "secondary_indices": "secondaryIndices",
        "time_to_live": "timeToLive",
    },
)
class TableProps:
    def __init__(
        self,
        *,
        instance_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        primary_key: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosTable.PrimaryKeyProperty]]],
        table_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        columns: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosTable.ColumnsProperty]]]] = None,
        deviation_cell_version_in_sec: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        max_versions: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        reserved_throughput: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosTable.ReservedThroughputProperty]] = None,
        secondary_indices: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosTable.SecondaryIndicesProperty]]]] = None,
        time_to_live: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::OTS::Table``.

        :param instance_name: Property instanceName: The name of the OTS instance in which table will locate.
        :param primary_key: Property primaryKey: It describes the attribute value of primary key. The number of primary_key should not be less than one and not be more than four.
        :param table_name: Property tableName: The table name of the OTS instance.
        :param columns: Property columns: Attribute column for table store.
        :param deviation_cell_version_in_sec: Property deviationCellVersionInSec: Maximum version deviation. The purpose is mainly to prohibit writing and expected large data, such as setting the deviation_cell_version_in_sec to 1000, and if the current timestamp is 10000, the timestamp range allowed to be written is [10000 - 1000, 10000 + 1000]. The valid value is 1-9223372036854775807. Defaults to 86400.
        :param max_versions: Property maxVersions: The maximum number of versions stored in this table. The valid value is 1-2147483647. Default to 1.
        :param reserved_throughput: Property reservedThroughput: The initial reserved read/write throughput setting of the table to be created, the reserved read throughput and reserved write throughput of any table cannot exceed 5000.
        :param secondary_indices: Property secondaryIndices: The secondary indices of the table.
        :param time_to_live: Property timeToLive: The retention time of data stored in this table (unit: second). The value maximum is 2147483647 and -1 means never expired. Default to -1.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "instance_name": instance_name,
            "primary_key": primary_key,
            "table_name": table_name,
        }
        if columns is not None:
            self._values["columns"] = columns
        if deviation_cell_version_in_sec is not None:
            self._values["deviation_cell_version_in_sec"] = deviation_cell_version_in_sec
        if max_versions is not None:
            self._values["max_versions"] = max_versions
        if reserved_throughput is not None:
            self._values["reserved_throughput"] = reserved_throughput
        if secondary_indices is not None:
            self._values["secondary_indices"] = secondary_indices
        if time_to_live is not None:
            self._values["time_to_live"] = time_to_live

    @builtins.property
    def instance_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property instanceName: The name of the OTS instance in which table will locate.'''
        result = self._values.get("instance_name")
        assert result is not None, "Required property 'instance_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def primary_key(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosTable.PrimaryKeyProperty]]]:
        '''Property primaryKey: It describes the attribute value of primary key.

        The number of primary_key should not be less than one and not be more than four.
        '''
        result = self._values.get("primary_key")
        assert result is not None, "Required property 'primary_key' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosTable.PrimaryKeyProperty]]], result)

    @builtins.property
    def table_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property tableName: The table name of the OTS instance.'''
        result = self._values.get("table_name")
        assert result is not None, "Required property 'table_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def columns(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosTable.ColumnsProperty]]]]:
        '''Property columns: Attribute column for table store.'''
        result = self._values.get("columns")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosTable.ColumnsProperty]]]], result)

    @builtins.property
    def deviation_cell_version_in_sec(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property deviationCellVersionInSec: Maximum version deviation.

        The purpose is mainly to prohibit writing and expected large data, such as setting the deviation_cell_version_in_sec to 1000, and if the current timestamp is 10000, the timestamp range allowed to be written is [10000 - 1000, 10000 + 1000]. The valid value is 1-9223372036854775807. Defaults to 86400.
        '''
        result = self._values.get("deviation_cell_version_in_sec")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def max_versions(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property maxVersions: The maximum number of versions stored in this table.

        The valid value is 1-2147483647. Default to 1.
        '''
        result = self._values.get("max_versions")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def reserved_throughput(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosTable.ReservedThroughputProperty]]:
        '''Property reservedThroughput: The initial reserved read/write throughput setting of the table to be created, the reserved read throughput and reserved write throughput of any table cannot exceed 5000.'''
        result = self._values.get("reserved_throughput")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosTable.ReservedThroughputProperty]], result)

    @builtins.property
    def secondary_indices(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosTable.SecondaryIndicesProperty]]]]:
        '''Property secondaryIndices: The secondary indices of the table.'''
        result = self._values.get("secondary_indices")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosTable.SecondaryIndicesProperty]]]], result)

    @builtins.property
    def time_to_live(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property timeToLive: The retention time of data stored in this table (unit: second).

        The value maximum is 2147483647 and -1 means never expired. Default to -1.
        '''
        result = self._values.get("time_to_live")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TableProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class VpcBinder(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ots.VpcBinder",
):
    '''A ROS resource type:  ``ALIYUN::OTS::VpcBinder``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "VpcBinderProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::OTS::VpcBinder``.

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
    @jsii.member(jsii_name="attrDomains")
    def attr_domains(self) -> ros_cdk_core.IResolvable:
        '''Attribute Domains: The domain names used to access the OTS instance in the VPC.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDomains"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrEndpoints")
    def attr_endpoints(self) -> ros_cdk_core.IResolvable:
        '''Attribute Endpoints: Private network addresses used to access the OTS instance in the VPC.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEndpoints"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ots.VpcBinderProps",
    jsii_struct_bases=[],
    name_mapping={"instance_name": "instanceName", "vpcs": "vpcs"},
)
class VpcBinderProps:
    def __init__(
        self,
        *,
        instance_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vpcs: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosVpcBinder.VpcsProperty]]],
    ) -> None:
        '''Properties for defining a ``ALIYUN::OTS::VpcBinder``.

        :param instance_name: Property instanceName: Instance name.
        :param vpcs: Property vpcs: Vpc binding configuration.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "instance_name": instance_name,
            "vpcs": vpcs,
        }

    @builtins.property
    def instance_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property instanceName: Instance name.'''
        result = self._values.get("instance_name")
        assert result is not None, "Required property 'instance_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vpcs(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosVpcBinder.VpcsProperty]]]:
        '''Property vpcs: Vpc binding configuration.'''
        result = self._values.get("vpcs")
        assert result is not None, "Required property 'vpcs' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosVpcBinder.VpcsProperty]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "VpcBinderProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Instance",
    "InstanceProps",
    "RosInstance",
    "RosInstanceProps",
    "RosSearchIndex",
    "RosSearchIndexProps",
    "RosTable",
    "RosTableProps",
    "RosVpcBinder",
    "RosVpcBinderProps",
    "SearchIndex",
    "SearchIndexProps",
    "Table",
    "TableProps",
    "VpcBinder",
    "VpcBinderProps",
]

publication.publish()
