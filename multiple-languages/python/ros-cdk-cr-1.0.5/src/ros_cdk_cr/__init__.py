'''
## Aliyun ROS CR Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as CR from '@alicloud/ros-cdk-cr';
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


class InstanceEndpointAclPolicy(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cr.InstanceEndpointAclPolicy",
):
    '''A ROS resource type:  ``ALIYUN::CR::InstanceEndpointAclPolicy``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "InstanceEndpointAclPolicyProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CR::InstanceEndpointAclPolicy``.

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
    @jsii.member(jsii_name="attrEntry")
    def attr_entry(self) -> ros_cdk_core.IResolvable:
        '''Attribute Entry: The IP address range that is allowed to access the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEntry"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute InstanceId: The ID of the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cr.InstanceEndpointAclPolicyProps",
    jsii_struct_bases=[],
    name_mapping={
        "entry": "entry",
        "instance_id": "instanceId",
        "comment": "comment",
        "endpoint_type": "endpointType",
        "module_name": "moduleName",
        "region_id": "regionId",
    },
)
class InstanceEndpointAclPolicyProps:
    def __init__(
        self,
        *,
        entry: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        comment: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        endpoint_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        module_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        region_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CR::InstanceEndpointAclPolicy``.

        :param entry: Property entry: The IP address range that is allowed to access the instance.
        :param instance_id: Property instanceId: The ID of the instance.
        :param comment: Property comment: The description of the entry.
        :param endpoint_type: Property endpointType: The type of the endpoint.
        :param module_name: Property moduleName: The name of the module in the instance for which a whitelist is configured. Valid values: Registry and Chart.
        :param region_id: Property regionId: Region ID of instance. Default is current region.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "entry": entry,
            "instance_id": instance_id,
        }
        if comment is not None:
            self._values["comment"] = comment
        if endpoint_type is not None:
            self._values["endpoint_type"] = endpoint_type
        if module_name is not None:
            self._values["module_name"] = module_name
        if region_id is not None:
            self._values["region_id"] = region_id

    @builtins.property
    def entry(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property entry: The IP address range that is allowed to access the instance.'''
        result = self._values.get("entry")
        assert result is not None, "Required property 'entry' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property instanceId: The ID of the instance.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def comment(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property comment: The description of the entry.'''
        result = self._values.get("comment")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def endpoint_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property endpointType: The type of the endpoint.'''
        result = self._values.get("endpoint_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def module_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property moduleName: The name of the module in the instance for which a whitelist is configured.

        Valid
        values: Registry and Chart.
        '''
        result = self._values.get("module_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property regionId: Region ID of instance.

        Default is current region.
        '''
        result = self._values.get("region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstanceEndpointAclPolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Namespace(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cr.Namespace",
):
    '''A ROS resource type:  ``ALIYUN::CR::Namespace``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "NamespaceProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CR::Namespace``.

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
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute InstanceId: The ID of the enterprise edition instance which namespace belongs to.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNamespace")
    def attr_namespace(self) -> ros_cdk_core.IResolvable:
        '''Attribute Namespace: The namespace.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNamespace"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNamespaceId")
    def attr_namespace_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute NamespaceId: The namespace ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNamespaceId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cr.NamespaceProps",
    jsii_struct_bases=[],
    name_mapping={
        "namespace": "namespace",
        "auto_create": "autoCreate",
        "default_visibility": "defaultVisibility",
        "instance_id": "instanceId",
    },
)
class NamespaceProps:
    def __init__(
        self,
        *,
        namespace: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        auto_create: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        default_visibility: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        instance_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CR::Namespace``.

        :param namespace: Property namespace: The name of the namespace.
        :param auto_create: Property autoCreate: Specifies whether to automatically create an image repository.
        :param default_visibility: Property defaultVisibility: The default type of the repository that is automatically created. Valid values: PUBLIC, PRIVATE.
        :param instance_id: Property instanceId: The ID of the enterprise edition instance which namespace belongs to. If not provided, will use personal edition instance as default.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "namespace": namespace,
        }
        if auto_create is not None:
            self._values["auto_create"] = auto_create
        if default_visibility is not None:
            self._values["default_visibility"] = default_visibility
        if instance_id is not None:
            self._values["instance_id"] = instance_id

    @builtins.property
    def namespace(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property namespace: The name of the namespace.'''
        result = self._values.get("namespace")
        assert result is not None, "Required property 'namespace' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def auto_create(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property autoCreate: Specifies whether to automatically create an image repository.'''
        result = self._values.get("auto_create")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def default_visibility(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property defaultVisibility: The default type of the repository that is automatically created.

        Valid values: PUBLIC, PRIVATE.
        '''
        result = self._values.get("default_visibility")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property instanceId: The ID of the enterprise edition instance which namespace belongs to.

        If not provided, will use personal edition instance as default.
        '''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "NamespaceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Repository(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cr.Repository",
):
    '''A ROS resource type:  ``ALIYUN::CR::Repository``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RepositoryProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CR::Repository``.

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
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute InstanceId: The ID of the enterprise edition instance which repository belongs to.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRepoId")
    def attr_repo_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute RepoId: The repository ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRepoId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRepoName")
    def attr_repo_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute RepoName: The name of the repository.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRepoName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRepoNamespace")
    def attr_repo_namespace(self) -> ros_cdk_core.IResolvable:
        '''Attribute RepoNamespace: The name of the namespace to which the repository belongs.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRepoNamespace"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRepoType")
    def attr_repo_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute RepoType: The type of the repository.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRepoType"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cr.RepositoryProps",
    jsii_struct_bases=[],
    name_mapping={
        "repo_name": "repoName",
        "repo_namespace": "repoNamespace",
        "repo_type": "repoType",
        "summary": "summary",
        "detail": "detail",
        "instance_id": "instanceId",
        "repo_source": "repoSource",
        "tag_immutability": "tagImmutability",
    },
)
class RepositoryProps:
    def __init__(
        self,
        *,
        repo_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        repo_namespace: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        repo_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        summary: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        detail: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        instance_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        repo_source: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosRepository.RepoSourceProperty"]] = None,
        tag_immutability: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CR::Repository``.

        :param repo_name: Property repoName: The name of the repository.
        :param repo_namespace: Property repoNamespace: The name of the namespace to which the repository belongs.
        :param repo_type: Property repoType: The type of the repository. Valid values: PUBLIC, PRIVATE.
        :param summary: Property summary: The summary of the repository.
        :param detail: Property detail: The description of the repository.
        :param instance_id: Property instanceId: The ID of the enterprise edition instance which repository belongs to. If not provided, will use personal edition instance as default.
        :param repo_source: Property repoSource: Code Source message.
        :param tag_immutability: Property tagImmutability: Specifies whether the repository is immutable. Only takes effect when InstanceId is specified.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "repo_name": repo_name,
            "repo_namespace": repo_namespace,
            "repo_type": repo_type,
            "summary": summary,
        }
        if detail is not None:
            self._values["detail"] = detail
        if instance_id is not None:
            self._values["instance_id"] = instance_id
        if repo_source is not None:
            self._values["repo_source"] = repo_source
        if tag_immutability is not None:
            self._values["tag_immutability"] = tag_immutability

    @builtins.property
    def repo_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property repoName: The name of the repository.'''
        result = self._values.get("repo_name")
        assert result is not None, "Required property 'repo_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def repo_namespace(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property repoNamespace: The name of the namespace to which the repository belongs.'''
        result = self._values.get("repo_namespace")
        assert result is not None, "Required property 'repo_namespace' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def repo_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property repoType: The type of the repository.

        Valid values: PUBLIC, PRIVATE.
        '''
        result = self._values.get("repo_type")
        assert result is not None, "Required property 'repo_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def summary(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property summary: The summary of the repository.'''
        result = self._values.get("summary")
        assert result is not None, "Required property 'summary' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def detail(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property detail: The description of the repository.'''
        result = self._values.get("detail")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property instanceId: The ID of the enterprise edition instance which repository belongs to.

        If not provided, will use personal edition instance as default.
        '''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def repo_source(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosRepository.RepoSourceProperty"]]:
        '''Property repoSource: Code Source message.'''
        result = self._values.get("repo_source")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosRepository.RepoSourceProperty"]], result)

    @builtins.property
    def tag_immutability(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property tagImmutability: Specifies whether the repository is immutable.

        Only takes effect when InstanceId is specified.
        '''
        result = self._values.get("tag_immutability")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RepositoryProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstanceEndpointAclPolicy(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cr.RosInstanceEndpointAclPolicy",
):
    '''A ROS template type:  ``ALIYUN::CR::InstanceEndpointAclPolicy``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosInstanceEndpointAclPolicyProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CR::InstanceEndpointAclPolicy``.

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
    @jsii.member(jsii_name="attrEntry")
    def attr_entry(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Entry: The IP address range that is allowed to access the instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEntry"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InstanceId: The ID of the instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))

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
    @jsii.member(jsii_name="entry")
    def entry(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: entry: The IP address range that is allowed to access the instance.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "entry"))

    @entry.setter
    def entry(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "entry", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceId")
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceId: The ID of the instance.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "instanceId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="comment")
    def comment(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: comment: The description of the entry.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "comment"))

    @comment.setter
    def comment(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "comment", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="endpointType")
    def endpoint_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: endpointType: The type of the endpoint.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "endpointType"))

    @endpoint_type.setter
    def endpoint_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "endpointType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="moduleName")
    def module_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        moduleName: The name of the module in the instance for which a whitelist is configured. Valid
        values: Registry and Chart.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "moduleName"))

    @module_name.setter
    def module_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "moduleName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="regionId")
    def region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: regionId: Region ID of instance. Default is current region.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "regionId"))

    @region_id.setter
    def region_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "regionId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cr.RosInstanceEndpointAclPolicyProps",
    jsii_struct_bases=[],
    name_mapping={
        "entry": "entry",
        "instance_id": "instanceId",
        "comment": "comment",
        "endpoint_type": "endpointType",
        "module_name": "moduleName",
        "region_id": "regionId",
    },
)
class RosInstanceEndpointAclPolicyProps:
    def __init__(
        self,
        *,
        entry: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        comment: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        endpoint_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        module_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        region_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CR::InstanceEndpointAclPolicy``.

        :param entry: 
        :param instance_id: 
        :param comment: 
        :param endpoint_type: 
        :param module_name: 
        :param region_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "entry": entry,
            "instance_id": instance_id,
        }
        if comment is not None:
            self._values["comment"] = comment
        if endpoint_type is not None:
            self._values["endpoint_type"] = endpoint_type
        if module_name is not None:
            self._values["module_name"] = module_name
        if region_id is not None:
            self._values["region_id"] = region_id

    @builtins.property
    def entry(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: entry: The IP address range that is allowed to access the instance.
        '''
        result = self._values.get("entry")
        assert result is not None, "Required property 'entry' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceId: The ID of the instance.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def comment(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: comment: The description of the entry.
        '''
        result = self._values.get("comment")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def endpoint_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: endpointType: The type of the endpoint.
        '''
        result = self._values.get("endpoint_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def module_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        moduleName: The name of the module in the instance for which a whitelist is configured. Valid
        values: Registry and Chart.
        '''
        result = self._values.get("module_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: regionId: Region ID of instance. Default is current region.
        '''
        result = self._values.get("region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstanceEndpointAclPolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosNamespace(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cr.RosNamespace",
):
    '''A ROS template type:  ``ALIYUN::CR::Namespace``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosNamespaceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CR::Namespace``.

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
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InstanceId: The ID of the enterprise edition instance which namespace belongs to.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNamespace")
    def attr_namespace(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Namespace: The namespace.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNamespace"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNamespaceId")
    def attr_namespace_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: NamespaceId: The namespace ID.
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
    @jsii.member(jsii_name="namespace")
    def namespace(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: namespace: The name of the namespace.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "namespace"))

    @namespace.setter
    def namespace(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "namespace", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="autoCreate")
    def auto_create(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: autoCreate: Specifies whether to automatically create an image repository.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "autoCreate"))

    @auto_create.setter
    def auto_create(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoCreate", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="defaultVisibility")
    def default_visibility(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: defaultVisibility: The default type of the repository that is automatically created. Valid values: PUBLIC, PRIVATE.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "defaultVisibility"))

    @default_visibility.setter
    def default_visibility(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "defaultVisibility", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: instanceId: The ID of the enterprise edition instance which namespace belongs to. If not provided, will use personal edition instance as default.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "instanceId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cr.RosNamespaceProps",
    jsii_struct_bases=[],
    name_mapping={
        "namespace": "namespace",
        "auto_create": "autoCreate",
        "default_visibility": "defaultVisibility",
        "instance_id": "instanceId",
    },
)
class RosNamespaceProps:
    def __init__(
        self,
        *,
        namespace: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        auto_create: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        default_visibility: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        instance_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CR::Namespace``.

        :param namespace: 
        :param auto_create: 
        :param default_visibility: 
        :param instance_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "namespace": namespace,
        }
        if auto_create is not None:
            self._values["auto_create"] = auto_create
        if default_visibility is not None:
            self._values["default_visibility"] = default_visibility
        if instance_id is not None:
            self._values["instance_id"] = instance_id

    @builtins.property
    def namespace(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: namespace: The name of the namespace.
        '''
        result = self._values.get("namespace")
        assert result is not None, "Required property 'namespace' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def auto_create(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: autoCreate: Specifies whether to automatically create an image repository.
        '''
        result = self._values.get("auto_create")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def default_visibility(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: defaultVisibility: The default type of the repository that is automatically created. Valid values: PUBLIC, PRIVATE.
        '''
        result = self._values.get("default_visibility")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: instanceId: The ID of the enterprise edition instance which namespace belongs to. If not provided, will use personal edition instance as default.
        '''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosNamespaceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosRepository(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cr.RosRepository",
):
    '''A ROS template type:  ``ALIYUN::CR::Repository``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosRepositoryProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CR::Repository``.

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
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InstanceId: The ID of the enterprise edition instance which repository belongs to.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRepoId")
    def attr_repo_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: RepoId: The repository ID.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRepoId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRepoName")
    def attr_repo_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: RepoName: The name of the repository.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRepoName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRepoNamespace")
    def attr_repo_namespace(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: RepoNamespace: The name of the namespace to which the repository belongs.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRepoNamespace"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRepoType")
    def attr_repo_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: RepoType: The type of the repository.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRepoType"))

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
    @jsii.member(jsii_name="repoName")
    def repo_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: repoName: The name of the repository.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "repoName"))

    @repo_name.setter
    def repo_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "repoName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="repoNamespace")
    def repo_namespace(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: repoNamespace: The name of the namespace to which the repository belongs.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "repoNamespace"))

    @repo_namespace.setter
    def repo_namespace(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "repoNamespace", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="repoType")
    def repo_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: repoType: The type of the repository. Valid values: PUBLIC, PRIVATE.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "repoType"))

    @repo_type.setter
    def repo_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "repoType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="summary")
    def summary(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: summary: The summary of the repository.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "summary"))

    @summary.setter
    def summary(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "summary", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="detail")
    def detail(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: detail: The description of the repository.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "detail"))

    @detail.setter
    def detail(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "detail", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: instanceId: The ID of the enterprise edition instance which repository belongs to. If not provided, will use personal edition instance as default.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "instanceId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="repoSource")
    def repo_source(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosRepository.RepoSourceProperty"]]:
        '''
        :Property: repoSource: Code Source message.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosRepository.RepoSourceProperty"]], jsii.get(self, "repoSource"))

    @repo_source.setter
    def repo_source(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosRepository.RepoSourceProperty"]],
    ) -> None:
        jsii.set(self, "repoSource", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="tagImmutability")
    def tag_immutability(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: tagImmutability: Specifies whether the repository is immutable. Only takes effect when InstanceId is specified.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "tagImmutability"))

    @tag_immutability.setter
    def tag_immutability(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "tagImmutability", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cr.RosRepository.RepoSourceProperty",
        jsii_struct_bases=[],
        name_mapping={
            "is_auto_build": "isAutoBuild",
            "is_disable_cache": "isDisableCache",
            "is_oversea": "isOversea",
            "source_repo_name": "sourceRepoName",
            "source_repo_namespace": "sourceRepoNamespace",
            "source_repo_type": "sourceRepoType",
        },
    )
    class RepoSourceProperty:
        def __init__(
            self,
            *,
            is_auto_build: typing.Union[builtins.bool, ros_cdk_core.IResolvable],
            is_disable_cache: typing.Union[builtins.bool, ros_cdk_core.IResolvable],
            is_oversea: typing.Union[builtins.bool, ros_cdk_core.IResolvable],
            source_repo_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            source_repo_namespace: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            source_repo_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param is_auto_build: 
            :param is_disable_cache: 
            :param is_oversea: 
            :param source_repo_name: 
            :param source_repo_namespace: 
            :param source_repo_type: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "is_auto_build": is_auto_build,
                "is_disable_cache": is_disable_cache,
                "is_oversea": is_oversea,
                "source_repo_name": source_repo_name,
                "source_repo_namespace": source_repo_namespace,
                "source_repo_type": source_repo_type,
            }

        @builtins.property
        def is_auto_build(
            self,
        ) -> typing.Union[builtins.bool, ros_cdk_core.IResolvable]:
            '''
            :Property: isAutoBuild: Whether to enable automatic construction
            '''
            result = self._values.get("is_auto_build")
            assert result is not None, "Required property 'is_auto_build' is missing"
            return typing.cast(typing.Union[builtins.bool, ros_cdk_core.IResolvable], result)

        @builtins.property
        def is_disable_cache(
            self,
        ) -> typing.Union[builtins.bool, ros_cdk_core.IResolvable]:
            '''
            :Property: isDisableCache: Whether to disable Cache at build time
            '''
            result = self._values.get("is_disable_cache")
            assert result is not None, "Required property 'is_disable_cache' is missing"
            return typing.cast(typing.Union[builtins.bool, ros_cdk_core.IResolvable], result)

        @builtins.property
        def is_oversea(self) -> typing.Union[builtins.bool, ros_cdk_core.IResolvable]:
            '''
            :Property: isOversea: Whether to enable overseas construction
            '''
            result = self._values.get("is_oversea")
            assert result is not None, "Required property 'is_oversea' is missing"
            return typing.cast(typing.Union[builtins.bool, ros_cdk_core.IResolvable], result)

        @builtins.property
        def source_repo_name(
            self,
        ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: sourceRepoName: Source code warehouse name
            '''
            result = self._values.get("source_repo_name")
            assert result is not None, "Required property 'source_repo_name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def source_repo_namespace(
            self,
        ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: sourceRepoNamespace: Source code repository namespace
            '''
            result = self._values.get("source_repo_namespace")
            assert result is not None, "Required property 'source_repo_namespace' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def source_repo_type(
            self,
        ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property:

            sourceRepoType: code source type. Allow values:
            CODE, GITHUB, GITLAB, BITBUCKET. Enterprise Edition additional support CODEUP and GITEE
            '''
            result = self._values.get("source_repo_type")
            assert result is not None, "Required property 'source_repo_type' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "RepoSourceProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cr.RosRepositoryProps",
    jsii_struct_bases=[],
    name_mapping={
        "repo_name": "repoName",
        "repo_namespace": "repoNamespace",
        "repo_type": "repoType",
        "summary": "summary",
        "detail": "detail",
        "instance_id": "instanceId",
        "repo_source": "repoSource",
        "tag_immutability": "tagImmutability",
    },
)
class RosRepositoryProps:
    def __init__(
        self,
        *,
        repo_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        repo_namespace: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        repo_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        summary: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        detail: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        instance_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        repo_source: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosRepository.RepoSourceProperty]] = None,
        tag_immutability: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CR::Repository``.

        :param repo_name: 
        :param repo_namespace: 
        :param repo_type: 
        :param summary: 
        :param detail: 
        :param instance_id: 
        :param repo_source: 
        :param tag_immutability: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "repo_name": repo_name,
            "repo_namespace": repo_namespace,
            "repo_type": repo_type,
            "summary": summary,
        }
        if detail is not None:
            self._values["detail"] = detail
        if instance_id is not None:
            self._values["instance_id"] = instance_id
        if repo_source is not None:
            self._values["repo_source"] = repo_source
        if tag_immutability is not None:
            self._values["tag_immutability"] = tag_immutability

    @builtins.property
    def repo_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: repoName: The name of the repository.
        '''
        result = self._values.get("repo_name")
        assert result is not None, "Required property 'repo_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def repo_namespace(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: repoNamespace: The name of the namespace to which the repository belongs.
        '''
        result = self._values.get("repo_namespace")
        assert result is not None, "Required property 'repo_namespace' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def repo_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: repoType: The type of the repository. Valid values: PUBLIC, PRIVATE.
        '''
        result = self._values.get("repo_type")
        assert result is not None, "Required property 'repo_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def summary(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: summary: The summary of the repository.
        '''
        result = self._values.get("summary")
        assert result is not None, "Required property 'summary' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def detail(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: detail: The description of the repository.
        '''
        result = self._values.get("detail")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: instanceId: The ID of the enterprise edition instance which repository belongs to. If not provided, will use personal edition instance as default.
        '''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def repo_source(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosRepository.RepoSourceProperty]]:
        '''
        :Property: repoSource: Code Source message.
        '''
        result = self._values.get("repo_source")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosRepository.RepoSourceProperty]], result)

    @builtins.property
    def tag_immutability(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: tagImmutability: Specifies whether the repository is immutable. Only takes effect when InstanceId is specified.
        '''
        result = self._values.get("tag_immutability")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRepositoryProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosUserInfo(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cr.RosUserInfo",
):
    '''A ROS template type:  ``ALIYUN::CR::UserInfo``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosUserInfoProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CR::UserInfo``.

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
    @jsii.member(jsii_name="attrLoginName")
    def attr_login_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: LoginName: Login name.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLoginName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: UserId: User ID.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrUserId"))

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
    @jsii.member(jsii_name="user")
    def user(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, "RosUserInfo.UserProperty"]:
        '''
        :Property: user: User info. If user exists, will update user info.
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, "RosUserInfo.UserProperty"], jsii.get(self, "user"))

    @user.setter
    def user(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, "RosUserInfo.UserProperty"],
    ) -> None:
        jsii.set(self, "user", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cr.RosUserInfo.UserProperty",
        jsii_struct_bases=[],
        name_mapping={"password": "password"},
    )
    class UserProperty:
        def __init__(
            self,
            *,
            password: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param password: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "password": password,
            }

        @builtins.property
        def password(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: password: Password.
            '''
            result = self._values.get("password")
            assert result is not None, "Required property 'password' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "UserProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cr.RosUserInfoProps",
    jsii_struct_bases=[],
    name_mapping={"user": "user"},
)
class RosUserInfoProps:
    def __init__(
        self,
        *,
        user: typing.Union[ros_cdk_core.IResolvable, RosUserInfo.UserProperty],
    ) -> None:
        '''Properties for defining a ``ALIYUN::CR::UserInfo``.

        :param user: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "user": user,
        }

    @builtins.property
    def user(self) -> typing.Union[ros_cdk_core.IResolvable, RosUserInfo.UserProperty]:
        '''
        :Property: user: User info. If user exists, will update user info.
        '''
        result = self._values.get("user")
        assert result is not None, "Required property 'user' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, RosUserInfo.UserProperty], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosUserInfoProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class UserInfo(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cr.UserInfo",
):
    '''A ROS resource type:  ``ALIYUN::CR::UserInfo``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "UserInfoProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CR::UserInfo``.

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
    @jsii.member(jsii_name="attrLoginName")
    def attr_login_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute LoginName: Login name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLoginName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute UserId: User ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrUserId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cr.UserInfoProps",
    jsii_struct_bases=[],
    name_mapping={"user": "user"},
)
class UserInfoProps:
    def __init__(
        self,
        *,
        user: typing.Union[ros_cdk_core.IResolvable, RosUserInfo.UserProperty],
    ) -> None:
        '''Properties for defining a ``ALIYUN::CR::UserInfo``.

        :param user: Property user: User info. If user exists, will update user info.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "user": user,
        }

    @builtins.property
    def user(self) -> typing.Union[ros_cdk_core.IResolvable, RosUserInfo.UserProperty]:
        '''Property user: User info.

        If user exists, will update user info.
        '''
        result = self._values.get("user")
        assert result is not None, "Required property 'user' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, RosUserInfo.UserProperty], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "UserInfoProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "InstanceEndpointAclPolicy",
    "InstanceEndpointAclPolicyProps",
    "Namespace",
    "NamespaceProps",
    "Repository",
    "RepositoryProps",
    "RosInstanceEndpointAclPolicy",
    "RosInstanceEndpointAclPolicyProps",
    "RosNamespace",
    "RosNamespaceProps",
    "RosRepository",
    "RosRepositoryProps",
    "RosUserInfo",
    "RosUserInfoProps",
    "UserInfo",
    "UserInfoProps",
]

publication.publish()
