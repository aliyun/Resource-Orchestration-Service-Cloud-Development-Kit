"""
## Aliyun ROS CR Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_cr as CR
```
"""
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
    """A ROS resource type:  ``ALIYUN::CR::InstanceEndpointAclPolicy``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "InstanceEndpointAclPolicyProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::CR::InstanceEndpointAclPolicy``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(InstanceEndpointAclPolicy, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrEntry")
    def attr_entry(self) -> typing.Any:
        """
        :Attribute: Entry: The IP address range that is allowed to access the instance.
        """
        return jsii.get(self, "attrEntry")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> typing.Any:
        """
        :Attribute: InstanceId: The ID of the instance.
        """
        return jsii.get(self, "attrInstanceId")


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
        entry: builtins.str,
        instance_id: builtins.str,
        comment: typing.Optional[builtins.str] = None,
        endpoint_type: typing.Optional[builtins.str] = None,
        module_name: typing.Optional[builtins.str] = None,
        region_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::CR::InstanceEndpointAclPolicy``.

        :param entry: 
        :param instance_id: 
        :param comment: 
        :param endpoint_type: 
        :param module_name: 
        :param region_id: 
        """
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
    def entry(self) -> builtins.str:
        """
        :Property: entry: The IP address range that is allowed to access the instance.
        """
        result = self._values.get("entry")
        assert result is not None, "Required property 'entry' is missing"
        return result

    @builtins.property
    def instance_id(self) -> builtins.str:
        """
        :Property: instanceId: The ID of the instance.
        """
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return result

    @builtins.property
    def comment(self) -> typing.Optional[builtins.str]:
        """
        :Property: comment: The description of the entry.
        """
        result = self._values.get("comment")
        return result

    @builtins.property
    def endpoint_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: endpointType: The type of the endpoint.
        """
        result = self._values.get("endpoint_type")
        return result

    @builtins.property
    def module_name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        moduleName: The name of the module in the instance for which a whitelist is configured. Valid
        values: Registry and Chart.
        """
        result = self._values.get("module_name")
        return result

    @builtins.property
    def region_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: regionId: Region ID of instance. Default is current region.
        """
        result = self._values.get("region_id")
        return result

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
    """A ROS resource type:  ``ALIYUN::CR::Namespace``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "NamespaceProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::CR::Namespace``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Namespace, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrNamespaceId")
    def attr_namespace_id(self) -> typing.Any:
        """
        :Attribute: NamespaceId: The namespace id
        """
        return jsii.get(self, "attrNamespaceId")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cr.NamespaceProps",
    jsii_struct_bases=[],
    name_mapping={
        "namespace": "namespace",
        "auto_create": "autoCreate",
        "default_visibility": "defaultVisibility",
    },
)
class NamespaceProps:
    def __init__(
        self,
        *,
        namespace: builtins.str,
        auto_create: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        default_visibility: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::CR::Namespace``.

        :param namespace: 
        :param auto_create: 
        :param default_visibility: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "namespace": namespace,
        }
        if auto_create is not None:
            self._values["auto_create"] = auto_create
        if default_visibility is not None:
            self._values["default_visibility"] = default_visibility

    @builtins.property
    def namespace(self) -> builtins.str:
        """
        :Property: namespace: domain name
        """
        result = self._values.get("namespace")
        assert result is not None, "Required property 'namespace' is missing"
        return result

    @builtins.property
    def auto_create(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: autoCreate: whether auto create repository
        """
        result = self._values.get("auto_create")
        return result

    @builtins.property
    def default_visibility(self) -> typing.Optional[builtins.str]:
        """
        :Property: defaultVisibility: repository default visibility, public or private
        """
        result = self._values.get("default_visibility")
        return result

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
    """A ROS resource type:  ``ALIYUN::CR::Repository``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RepositoryProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::CR::Repository``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Repository, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrRepoId")
    def attr_repo_id(self) -> typing.Any:
        """
        :Attribute: RepoId: The repo id
        """
        return jsii.get(self, "attrRepoId")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cr.RepositoryProps",
    jsii_struct_bases=[],
    name_mapping={
        "repo_name": "repoName",
        "repo_namespace": "repoNamespace",
        "repo_type": "repoType",
        "summary": "summary",
        "detail": "detail",
    },
)
class RepositoryProps:
    def __init__(
        self,
        *,
        repo_name: builtins.str,
        repo_namespace: builtins.str,
        repo_type: builtins.str,
        summary: builtins.str,
        detail: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::CR::Repository``.

        :param repo_name: 
        :param repo_namespace: 
        :param repo_type: 
        :param summary: 
        :param detail: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "repo_name": repo_name,
            "repo_namespace": repo_namespace,
            "repo_type": repo_type,
            "summary": summary,
        }
        if detail is not None:
            self._values["detail"] = detail

    @builtins.property
    def repo_name(self) -> builtins.str:
        """
        :Property: repoName: the name of the repo
        """
        result = self._values.get("repo_name")
        assert result is not None, "Required property 'repo_name' is missing"
        return result

    @builtins.property
    def repo_namespace(self) -> builtins.str:
        """
        :Property: repoNamespace: the namespace the repo belongs to
        """
        result = self._values.get("repo_namespace")
        assert result is not None, "Required property 'repo_namespace' is missing"
        return result

    @builtins.property
    def repo_type(self) -> builtins.str:
        """
        :Property: repoType: repository visibility, public or private
        """
        result = self._values.get("repo_type")
        assert result is not None, "Required property 'repo_type' is missing"
        return result

    @builtins.property
    def summary(self) -> builtins.str:
        """
        :Property: summary: description or something alike
        """
        result = self._values.get("summary")
        assert result is not None, "Required property 'summary' is missing"
        return result

    @builtins.property
    def detail(self) -> typing.Optional[builtins.str]:
        """
        :Property: detail: detailed configuration in markdown format
        """
        result = self._values.get("detail")
        return result

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
    """A ROS template type:  ``ALIYUN::CR::InstanceEndpointAclPolicy``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosInstanceEndpointAclPolicyProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::CR::InstanceEndpointAclPolicy``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosInstanceEndpointAclPolicy, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrEntry")
    def attr_entry(self) -> typing.Any:
        """
        :Attribute: Entry: The IP address range that is allowed to access the instance.
        """
        return jsii.get(self, "attrEntry")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> typing.Any:
        """
        :Attribute: InstanceId: The ID of the instance.
        """
        return jsii.get(self, "attrInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="entry")
    def entry(self) -> builtins.str:
        """
        :Property: entry: The IP address range that is allowed to access the instance.
        """
        return jsii.get(self, "entry")

    @entry.setter # type: ignore
    def entry(self, value: builtins.str) -> None:
        jsii.set(self, "entry", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instanceId")
    def instance_id(self) -> builtins.str:
        """
        :Property: instanceId: The ID of the instance.
        """
        return jsii.get(self, "instanceId")

    @instance_id.setter # type: ignore
    def instance_id(self, value: builtins.str) -> None:
        jsii.set(self, "instanceId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="comment")
    def comment(self) -> typing.Optional[builtins.str]:
        """
        :Property: comment: The description of the entry.
        """
        return jsii.get(self, "comment")

    @comment.setter # type: ignore
    def comment(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "comment", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="endpointType")
    def endpoint_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: endpointType: The type of the endpoint.
        """
        return jsii.get(self, "endpointType")

    @endpoint_type.setter # type: ignore
    def endpoint_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "endpointType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="moduleName")
    def module_name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        moduleName: The name of the module in the instance for which a whitelist is configured. Valid
        values: Registry and Chart.
        """
        return jsii.get(self, "moduleName")

    @module_name.setter # type: ignore
    def module_name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "moduleName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="regionId")
    def region_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: regionId: Region ID of instance. Default is current region.
        """
        return jsii.get(self, "regionId")

    @region_id.setter # type: ignore
    def region_id(self, value: typing.Optional[builtins.str]) -> None:
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
        entry: builtins.str,
        instance_id: builtins.str,
        comment: typing.Optional[builtins.str] = None,
        endpoint_type: typing.Optional[builtins.str] = None,
        module_name: typing.Optional[builtins.str] = None,
        region_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::CR::InstanceEndpointAclPolicy``.

        :param entry: 
        :param instance_id: 
        :param comment: 
        :param endpoint_type: 
        :param module_name: 
        :param region_id: 
        """
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
    def entry(self) -> builtins.str:
        """
        :Property: entry: The IP address range that is allowed to access the instance.
        """
        result = self._values.get("entry")
        assert result is not None, "Required property 'entry' is missing"
        return result

    @builtins.property
    def instance_id(self) -> builtins.str:
        """
        :Property: instanceId: The ID of the instance.
        """
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return result

    @builtins.property
    def comment(self) -> typing.Optional[builtins.str]:
        """
        :Property: comment: The description of the entry.
        """
        result = self._values.get("comment")
        return result

    @builtins.property
    def endpoint_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: endpointType: The type of the endpoint.
        """
        result = self._values.get("endpoint_type")
        return result

    @builtins.property
    def module_name(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        moduleName: The name of the module in the instance for which a whitelist is configured. Valid
        values: Registry and Chart.
        """
        result = self._values.get("module_name")
        return result

    @builtins.property
    def region_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: regionId: Region ID of instance. Default is current region.
        """
        result = self._values.get("region_id")
        return result

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
    """A ROS template type:  ``ALIYUN::CR::Namespace``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosNamespaceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::CR::Namespace``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosNamespace, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrNamespaceId")
    def attr_namespace_id(self) -> typing.Any:
        """
        :Attribute: NamespaceId: The namespace id
        """
        return jsii.get(self, "attrNamespaceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="namespace")
    def namespace(self) -> builtins.str:
        """
        :Property: namespace: domain name
        """
        return jsii.get(self, "namespace")

    @namespace.setter # type: ignore
    def namespace(self, value: builtins.str) -> None:
        jsii.set(self, "namespace", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="autoCreate")
    def auto_create(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: autoCreate: whether auto create repository
        """
        return jsii.get(self, "autoCreate")

    @auto_create.setter # type: ignore
    def auto_create(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoCreate", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="defaultVisibility")
    def default_visibility(self) -> typing.Optional[builtins.str]:
        """
        :Property: defaultVisibility: repository default visibility, public or private
        """
        return jsii.get(self, "defaultVisibility")

    @default_visibility.setter # type: ignore
    def default_visibility(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "defaultVisibility", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cr.RosNamespaceProps",
    jsii_struct_bases=[],
    name_mapping={
        "namespace": "namespace",
        "auto_create": "autoCreate",
        "default_visibility": "defaultVisibility",
    },
)
class RosNamespaceProps:
    def __init__(
        self,
        *,
        namespace: builtins.str,
        auto_create: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        default_visibility: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::CR::Namespace``.

        :param namespace: 
        :param auto_create: 
        :param default_visibility: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "namespace": namespace,
        }
        if auto_create is not None:
            self._values["auto_create"] = auto_create
        if default_visibility is not None:
            self._values["default_visibility"] = default_visibility

    @builtins.property
    def namespace(self) -> builtins.str:
        """
        :Property: namespace: domain name
        """
        result = self._values.get("namespace")
        assert result is not None, "Required property 'namespace' is missing"
        return result

    @builtins.property
    def auto_create(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: autoCreate: whether auto create repository
        """
        result = self._values.get("auto_create")
        return result

    @builtins.property
    def default_visibility(self) -> typing.Optional[builtins.str]:
        """
        :Property: defaultVisibility: repository default visibility, public or private
        """
        result = self._values.get("default_visibility")
        return result

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
    """A ROS template type:  ``ALIYUN::CR::Repository``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosRepositoryProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::CR::Repository``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosRepository, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrRepoId")
    def attr_repo_id(self) -> typing.Any:
        """
        :Attribute: RepoId: The repo id
        """
        return jsii.get(self, "attrRepoId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="repoName")
    def repo_name(self) -> builtins.str:
        """
        :Property: repoName: the name of the repo
        """
        return jsii.get(self, "repoName")

    @repo_name.setter # type: ignore
    def repo_name(self, value: builtins.str) -> None:
        jsii.set(self, "repoName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="repoNamespace")
    def repo_namespace(self) -> builtins.str:
        """
        :Property: repoNamespace: the namespace the repo belongs to
        """
        return jsii.get(self, "repoNamespace")

    @repo_namespace.setter # type: ignore
    def repo_namespace(self, value: builtins.str) -> None:
        jsii.set(self, "repoNamespace", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="repoType")
    def repo_type(self) -> builtins.str:
        """
        :Property: repoType: repository visibility, public or private
        """
        return jsii.get(self, "repoType")

    @repo_type.setter # type: ignore
    def repo_type(self, value: builtins.str) -> None:
        jsii.set(self, "repoType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="summary")
    def summary(self) -> builtins.str:
        """
        :Property: summary: description or something alike
        """
        return jsii.get(self, "summary")

    @summary.setter # type: ignore
    def summary(self, value: builtins.str) -> None:
        jsii.set(self, "summary", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="detail")
    def detail(self) -> typing.Optional[builtins.str]:
        """
        :Property: detail: detailed configuration in markdown format
        """
        return jsii.get(self, "detail")

    @detail.setter # type: ignore
    def detail(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "detail", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cr.RosRepositoryProps",
    jsii_struct_bases=[],
    name_mapping={
        "repo_name": "repoName",
        "repo_namespace": "repoNamespace",
        "repo_type": "repoType",
        "summary": "summary",
        "detail": "detail",
    },
)
class RosRepositoryProps:
    def __init__(
        self,
        *,
        repo_name: builtins.str,
        repo_namespace: builtins.str,
        repo_type: builtins.str,
        summary: builtins.str,
        detail: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::CR::Repository``.

        :param repo_name: 
        :param repo_namespace: 
        :param repo_type: 
        :param summary: 
        :param detail: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "repo_name": repo_name,
            "repo_namespace": repo_namespace,
            "repo_type": repo_type,
            "summary": summary,
        }
        if detail is not None:
            self._values["detail"] = detail

    @builtins.property
    def repo_name(self) -> builtins.str:
        """
        :Property: repoName: the name of the repo
        """
        result = self._values.get("repo_name")
        assert result is not None, "Required property 'repo_name' is missing"
        return result

    @builtins.property
    def repo_namespace(self) -> builtins.str:
        """
        :Property: repoNamespace: the namespace the repo belongs to
        """
        result = self._values.get("repo_namespace")
        assert result is not None, "Required property 'repo_namespace' is missing"
        return result

    @builtins.property
    def repo_type(self) -> builtins.str:
        """
        :Property: repoType: repository visibility, public or private
        """
        result = self._values.get("repo_type")
        assert result is not None, "Required property 'repo_type' is missing"
        return result

    @builtins.property
    def summary(self) -> builtins.str:
        """
        :Property: summary: description or something alike
        """
        result = self._values.get("summary")
        assert result is not None, "Required property 'summary' is missing"
        return result

    @builtins.property
    def detail(self) -> typing.Optional[builtins.str]:
        """
        :Property: detail: detailed configuration in markdown format
        """
        result = self._values.get("detail")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRepositoryProps(%s)" % ", ".join(
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
]

publication.publish()
