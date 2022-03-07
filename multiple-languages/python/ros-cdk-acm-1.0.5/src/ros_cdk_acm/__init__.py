'''
## Aliyun ROS ACM Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as ACM from '@alicloud/ros-cdk-acm';
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


class Configuration(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-acm.Configuration",
):
    '''A ROS resource type:  ``ALIYUN::ACM::Configuration``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ConfigurationProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ACM::Configuration``.

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
    @jsii.member(jsii_name="attrDataId")
    def attr_data_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute DataId: The ID of the configuration.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDataId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrGroup")
    def attr_group(self) -> ros_cdk_core.IResolvable:
        '''Attribute Group: Group.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrGroup"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNamespaceId")
    def attr_namespace_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute NamespaceId: ID of namespace.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNamespaceId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-acm.ConfigurationProps",
    jsii_struct_bases=[],
    name_mapping={
        "content": "content",
        "data_id": "dataId",
        "namespace_id": "namespaceId",
        "app_name": "appName",
        "desc": "desc",
        "group": "group",
        "tags": "tags",
        "type": "type",
    },
)
class ConfigurationProps:
    def __init__(
        self,
        *,
        content: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        data_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        namespace_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        app_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        desc: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        group: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[builtins.str] = None,
        type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ACM::Configuration``.

        :param content: Property content: The contents of the configuration.
        :param data_id: Property dataId: The ID of the configuration. Allowed characters are upper and lower case letters, numbers, decimal points (.), Colons (:), asterisks (*), underscores (_), and underscores (-). When the ID prefix is the following value, ACM will automatically use KMS service to encrypt this configuration: The prefix is cipher-: the KMS service is called to encrypt and decrypt the configuration. The size of the encrypted data does not exceed 4 KB, and the maximum does not exceed 6 KB. Special symbols such as and (&) will decrypt errors and are not recommended. The prefix is cipher-kms-aes-128-: using KMS's envelope encryption and decryption method, the configuration content can exceed 6 KB, up to 100 KB. The plain text data of the configuration content will not be transmitted to the KMS system, which is more secure and recommended.
        :param namespace_id: Property namespaceId: ID of namespace.
        :param app_name: Property appName: Configuration application name.
        :param desc: Property desc: Configuration description explains.
        :param group: Property group: Group.
        :param tags: Property tags: Label configurations, such as the presence of a plurality of tags, separated by commas.
        :param type: Property type: Provisioning content format, optional values as follows: text, json, xml, yaml, text/html, properties.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "content": content,
            "data_id": data_id,
            "namespace_id": namespace_id,
        }
        if app_name is not None:
            self._values["app_name"] = app_name
        if desc is not None:
            self._values["desc"] = desc
        if group is not None:
            self._values["group"] = group
        if tags is not None:
            self._values["tags"] = tags
        if type is not None:
            self._values["type"] = type

    @builtins.property
    def content(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property content: The contents of the configuration.'''
        result = self._values.get("content")
        assert result is not None, "Required property 'content' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def data_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property dataId: The ID of the configuration.

        Allowed characters are upper and lower case letters, numbers, decimal points (.), Colons (:), asterisks (*), underscores (_), and underscores (-). When the ID prefix is the following value, ACM will automatically use KMS service to encrypt this configuration:
        The prefix is cipher-: the KMS service is called to encrypt and decrypt the configuration. The size of the encrypted data does not exceed 4 KB, and the maximum does not exceed 6 KB. Special symbols such as and (&) will decrypt errors and are not recommended.
        The prefix is cipher-kms-aes-128-: using KMS's envelope encryption and decryption method, the configuration content can exceed  6 KB, up to 100 KB. The plain text data of the configuration content will not be transmitted to the KMS system, which is more secure and recommended.
        '''
        result = self._values.get("data_id")
        assert result is not None, "Required property 'data_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def namespace_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property namespaceId: ID of namespace.'''
        result = self._values.get("namespace_id")
        assert result is not None, "Required property 'namespace_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def app_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property appName: Configuration application name.'''
        result = self._values.get("app_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property desc: Configuration description explains.'''
        result = self._values.get("desc")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def group(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property group: Group.'''
        result = self._values.get("group")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[builtins.str]:
        '''Property tags: Label configurations, such as the presence of a plurality of tags, separated by commas.'''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property type: Provisioning content format, optional values as follows: text, json, xml, yaml, text/html, properties.'''
        result = self._values.get("type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ConfigurationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Namespace(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-acm.Namespace",
):
    '''A ROS resource type:  ``ALIYUN::ACM::Namespace``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "NamespaceProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ACM::Namespace``.

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
    @jsii.member(jsii_name="attrEndpoint")
    def attr_endpoint(self) -> ros_cdk_core.IResolvable:
        '''Attribute Endpoint: Endpoint.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEndpoint"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNamespaceId")
    def attr_namespace_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute NamespaceId: ID namespace.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNamespaceId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-acm.NamespaceProps",
    jsii_struct_bases=[],
    name_mapping={"name": "name"},
)
class NamespaceProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::ACM::Namespace``.

        :param name: Property name: Namespace name.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "name": name,
        }

    @builtins.property
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property name: Namespace name.'''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "NamespaceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosConfiguration(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-acm.RosConfiguration",
):
    '''A ROS template type:  ``ALIYUN::ACM::Configuration``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosConfigurationProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ACM::Configuration``.

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
    @jsii.member(jsii_name="attrDataId")
    def attr_data_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DataId: The ID of the configuration
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDataId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrGroup")
    def attr_group(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Group: Group
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrGroup"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNamespaceId")
    def attr_namespace_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: NamespaceId: ID of namespace
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNamespaceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="content")
    def content(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: content: The contents of the configuration
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "content"))

    @content.setter
    def content(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "content", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dataId")
    def data_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        dataId: The ID of the configuration. Allowed characters are upper and lower case letters, numbers, decimal points (.), Colons (:), asterisks (*), underscores (_), and underscores (-). When the ID prefix is the following value, ACM will automatically use KMS service to encrypt this configuration:
        The prefix is cipher-: the KMS service is called to encrypt and decrypt the configuration. The size of the encrypted data does not exceed 4 KB, and the maximum does not exceed 6 KB. Special symbols such as and (&) will decrypt errors and are not recommended.
        The prefix is cipher-kms-aes-128-: using KMS's envelope encryption and decryption method, the configuration content can exceed  6 KB, up to 100 KB. The plain text data of the configuration content will not be transmitted to the KMS system, which is more secure and recommended.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "dataId"))

    @data_id.setter
    def data_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "dataId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="namespaceId")
    def namespace_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: namespaceId: ID of namespace
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "namespaceId"))

    @namespace_id.setter
    def namespace_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "namespaceId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="appName")
    def app_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: appName: Configuration application name
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "appName"))

    @app_name.setter
    def app_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "appName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="desc")
    def desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: desc: Configuration description explains
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "desc"))

    @desc.setter
    def desc(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "desc", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="group")
    def group(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: group: Group
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "group"))

    @group.setter
    def group(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "group", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[builtins.str]:
        '''
        :Property: tags: Label configurations, such as the presence of a plurality of tags, separated by commas
        '''
        return typing.cast(typing.Optional[builtins.str], jsii.get(self, "tags"))

    @tags.setter
    def tags(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "tags", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="type")
    def type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        type: Provisioning content format, optional values as follows:
        text, json, xml, yaml, text/html, properties
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "type"))

    @type.setter
    def type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "type", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-acm.RosConfigurationProps",
    jsii_struct_bases=[],
    name_mapping={
        "content": "content",
        "data_id": "dataId",
        "namespace_id": "namespaceId",
        "app_name": "appName",
        "desc": "desc",
        "group": "group",
        "tags": "tags",
        "type": "type",
    },
)
class RosConfigurationProps:
    def __init__(
        self,
        *,
        content: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        data_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        namespace_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        app_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        desc: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        group: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[builtins.str] = None,
        type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ACM::Configuration``.

        :param content: 
        :param data_id: 
        :param namespace_id: 
        :param app_name: 
        :param desc: 
        :param group: 
        :param tags: 
        :param type: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "content": content,
            "data_id": data_id,
            "namespace_id": namespace_id,
        }
        if app_name is not None:
            self._values["app_name"] = app_name
        if desc is not None:
            self._values["desc"] = desc
        if group is not None:
            self._values["group"] = group
        if tags is not None:
            self._values["tags"] = tags
        if type is not None:
            self._values["type"] = type

    @builtins.property
    def content(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: content: The contents of the configuration
        '''
        result = self._values.get("content")
        assert result is not None, "Required property 'content' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def data_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        dataId: The ID of the configuration. Allowed characters are upper and lower case letters, numbers, decimal points (.), Colons (:), asterisks (*), underscores (_), and underscores (-). When the ID prefix is the following value, ACM will automatically use KMS service to encrypt this configuration:
        The prefix is cipher-: the KMS service is called to encrypt and decrypt the configuration. The size of the encrypted data does not exceed 4 KB, and the maximum does not exceed 6 KB. Special symbols such as and (&) will decrypt errors and are not recommended.
        The prefix is cipher-kms-aes-128-: using KMS's envelope encryption and decryption method, the configuration content can exceed  6 KB, up to 100 KB. The plain text data of the configuration content will not be transmitted to the KMS system, which is more secure and recommended.
        '''
        result = self._values.get("data_id")
        assert result is not None, "Required property 'data_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def namespace_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: namespaceId: ID of namespace
        '''
        result = self._values.get("namespace_id")
        assert result is not None, "Required property 'namespace_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def app_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: appName: Configuration application name
        '''
        result = self._values.get("app_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: desc: Configuration description explains
        '''
        result = self._values.get("desc")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def group(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: group: Group
        '''
        result = self._values.get("group")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[builtins.str]:
        '''
        :Property: tags: Label configurations, such as the presence of a plurality of tags, separated by commas
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        type: Provisioning content format, optional values as follows:
        text, json, xml, yaml, text/html, properties
        '''
        result = self._values.get("type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosConfigurationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosNamespace(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-acm.RosNamespace",
):
    '''A ROS template type:  ``ALIYUN::ACM::Namespace``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosNamespaceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ACM::Namespace``.

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
    @jsii.member(jsii_name="attrEndpoint")
    def attr_endpoint(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Endpoint: Endpoint
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEndpoint"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNamespaceId")
    def attr_namespace_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: NamespaceId: ID namespace
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNamespaceId"))

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
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: name: Namespace name
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(self, value: typing.Union[builtins.str, ros_cdk_core.IResolvable]) -> None:
        jsii.set(self, "name", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-acm.RosNamespaceProps",
    jsii_struct_bases=[],
    name_mapping={"name": "name"},
)
class RosNamespaceProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::ACM::Namespace``.

        :param name: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "name": name,
        }

    @builtins.property
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: name: Namespace name
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosNamespaceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Configuration",
    "ConfigurationProps",
    "Namespace",
    "NamespaceProps",
    "RosConfiguration",
    "RosConfigurationProps",
    "RosNamespace",
    "RosNamespaceProps",
]

publication.publish()
