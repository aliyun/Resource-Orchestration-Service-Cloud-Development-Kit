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

from typeguard import check_type

from ._jsii import *

import ros_cdk_core as _ros_cdk_core_7adfd82f


class InstanceEndpointAclPolicy(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cr.InstanceEndpointAclPolicy",
):
    '''A ROS resource type:  ``ALIYUN::CR::InstanceEndpointAclPolicy``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["InstanceEndpointAclPolicyProps", typing.Dict[builtins.str, typing.Any]],
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4bf9e011c87e46c86bbb8569203fa1eee0c29f002d841de3e890671c93d8721f)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrEntry")
    def attr_entry(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Entry: The IP address range that is allowed to access the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEntry"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceId: The ID of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))


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
        entry: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        comment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        endpoint_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        module_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CR::InstanceEndpointAclPolicy``.

        :param entry: Property entry: The IP address range that is allowed to access the instance.
        :param instance_id: Property instanceId: The ID of the instance.
        :param comment: Property comment: The description of the entry.
        :param endpoint_type: Property endpointType: The type of the endpoint.
        :param module_name: Property moduleName: The name of the module in the instance for which a whitelist is configured. Valid values: Registry and Chart.
        :param region_id: Property regionId: Region ID of instance. Default is current region.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d5300c733a5eec429c04f643005efc40f9270492c86bd4bc9ba9503beb6e4c16)
            check_type(argname="argument entry", value=entry, expected_type=type_hints["entry"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument comment", value=comment, expected_type=type_hints["comment"])
            check_type(argname="argument endpoint_type", value=endpoint_type, expected_type=type_hints["endpoint_type"])
            check_type(argname="argument module_name", value=module_name, expected_type=type_hints["module_name"])
            check_type(argname="argument region_id", value=region_id, expected_type=type_hints["region_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    def entry(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property entry: The IP address range that is allowed to access the instance.'''
        result = self._values.get("entry")
        assert result is not None, "Required property 'entry' is missing"
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
    def comment(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property comment: The description of the entry.'''
        result = self._values.get("comment")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def endpoint_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property endpointType: The type of the endpoint.'''
        result = self._values.get("endpoint_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def module_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property moduleName: The name of the module in the instance for which a whitelist is configured.

        Valid
        values: Registry and Chart.
        '''
        result = self._values.get("module_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property regionId: Region ID of instance.

        Default is current region.
        '''
        result = self._values.get("region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstanceEndpointAclPolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Namespace(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cr.Namespace",
):
    '''A ROS resource type:  ``ALIYUN::CR::Namespace``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["NamespaceProps", typing.Dict[builtins.str, typing.Any]],
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2077531d4e80f0006bc9d0544435c51e4e717d2397dad1cb4e4caa273654d9e1)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceId: The ID of the enterprise edition instance which namespace belongs to.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrNamespace")
    def attr_namespace(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Namespace: The namespace.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNamespace"))

    @builtins.property
    @jsii.member(jsii_name="attrNamespaceId")
    def attr_namespace_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute NamespaceId: The namespace ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNamespaceId"))


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
        namespace: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        auto_create: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        default_visibility: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CR::Namespace``.

        :param namespace: Property namespace: The name of the namespace.
        :param auto_create: Property autoCreate: Specifies whether to automatically create an image repository.
        :param default_visibility: Property defaultVisibility: The default type of the repository that is automatically created. Valid values: PUBLIC, PRIVATE.
        :param instance_id: Property instanceId: The ID of the enterprise edition instance which namespace belongs to. If not provided, will use personal edition instance as default.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9b84993afb12c0064265f87561d23aa1debeaaf76197b72d4b90cec1d64f0d3c)
            check_type(argname="argument namespace", value=namespace, expected_type=type_hints["namespace"])
            check_type(argname="argument auto_create", value=auto_create, expected_type=type_hints["auto_create"])
            check_type(argname="argument default_visibility", value=default_visibility, expected_type=type_hints["default_visibility"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "namespace": namespace,
        }
        if auto_create is not None:
            self._values["auto_create"] = auto_create
        if default_visibility is not None:
            self._values["default_visibility"] = default_visibility
        if instance_id is not None:
            self._values["instance_id"] = instance_id

    @builtins.property
    def namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property namespace: The name of the namespace.'''
        result = self._values.get("namespace")
        assert result is not None, "Required property 'namespace' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def auto_create(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoCreate: Specifies whether to automatically create an image repository.'''
        result = self._values.get("auto_create")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def default_visibility(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property defaultVisibility: The default type of the repository that is automatically created.

        Valid values: PUBLIC, PRIVATE.
        '''
        result = self._values.get("default_visibility")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceId: The ID of the enterprise edition instance which namespace belongs to.

        If not provided, will use personal edition instance as default.
        '''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "NamespaceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Repository(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cr.Repository",
):
    '''A ROS resource type:  ``ALIYUN::CR::Repository``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RepositoryProps", typing.Dict[builtins.str, typing.Any]],
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0e337b0af611e60f6ab3e1822b8baf5abf62c4e9d0781ee266725d722c21ba72)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceId: The ID of the enterprise edition instance which repository belongs to.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrRepoId")
    def attr_repo_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RepoId: The repository ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRepoId"))

    @builtins.property
    @jsii.member(jsii_name="attrRepoName")
    def attr_repo_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RepoName: The name of the repository.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRepoName"))

    @builtins.property
    @jsii.member(jsii_name="attrRepoNamespace")
    def attr_repo_namespace(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RepoNamespace: The name of the namespace to which the repository belongs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRepoNamespace"))

    @builtins.property
    @jsii.member(jsii_name="attrRepoType")
    def attr_repo_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RepoType: The type of the repository.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRepoType"))


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
        repo_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        repo_namespace: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        repo_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        summary: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        detail: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        repo_source: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosRepository.RepoSourceProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        tag_immutability: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__770794f31d73f05c8ca09c24fadf12c59f2ff3ca5019eb763587978cb7238d4f)
            check_type(argname="argument repo_name", value=repo_name, expected_type=type_hints["repo_name"])
            check_type(argname="argument repo_namespace", value=repo_namespace, expected_type=type_hints["repo_namespace"])
            check_type(argname="argument repo_type", value=repo_type, expected_type=type_hints["repo_type"])
            check_type(argname="argument summary", value=summary, expected_type=type_hints["summary"])
            check_type(argname="argument detail", value=detail, expected_type=type_hints["detail"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument repo_source", value=repo_source, expected_type=type_hints["repo_source"])
            check_type(argname="argument tag_immutability", value=tag_immutability, expected_type=type_hints["tag_immutability"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    def repo_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property repoName: The name of the repository.'''
        result = self._values.get("repo_name")
        assert result is not None, "Required property 'repo_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def repo_namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property repoNamespace: The name of the namespace to which the repository belongs.'''
        result = self._values.get("repo_namespace")
        assert result is not None, "Required property 'repo_namespace' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def repo_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property repoType: The type of the repository.

        Valid values: PUBLIC, PRIVATE.
        '''
        result = self._values.get("repo_type")
        assert result is not None, "Required property 'repo_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def summary(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property summary: The summary of the repository.'''
        result = self._values.get("summary")
        assert result is not None, "Required property 'summary' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def detail(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property detail: The description of the repository.'''
        result = self._values.get("detail")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceId: The ID of the enterprise edition instance which repository belongs to.

        If not provided, will use personal edition instance as default.
        '''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def repo_source(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRepository.RepoSourceProperty"]]:
        '''Property repoSource: Code Source message.'''
        result = self._values.get("repo_source")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRepository.RepoSourceProperty"]], result)

    @builtins.property
    def tag_immutability(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property tagImmutability: Specifies whether the repository is immutable.

        Only takes effect when InstanceId is specified.
        '''
        result = self._values.get("tag_immutability")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RepositoryProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstanceEndpointAclPolicy(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cr.RosInstanceEndpointAclPolicy",
):
    '''A ROS template type:  ``ALIYUN::CR::InstanceEndpointAclPolicy``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosInstanceEndpointAclPolicyProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CR::InstanceEndpointAclPolicy``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5ffbdfe8ae9d507d2bc136e9c65072d54bfbca0dd9ead03de39328fce07ff0d8)
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
            type_hints = typing.get_type_hints(_typecheckingstub__6d9e125d113c44390f6180355b8418d53f8736935061955ce15a081a863e12da)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrEntry")
    def attr_entry(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Entry: The IP address range that is allowed to access the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEntry"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceId: The ID of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__077f67e7b38f7945204f3a41d4dbaac4948238c9857f06384d00141f592b0ced)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="entry")
    def entry(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: entry: The IP address range that is allowed to access the instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "entry"))

    @entry.setter
    def entry(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a8046d0371cb38018af179c787f8bc1ff265f20647bde2318f4b198baaca4b9e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "entry", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__2618534673728e3ade535fe6362707f1e351e5c24301ac758bbf8c577e5955cc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="comment")
    def comment(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: comment: The description of the entry.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "comment"))

    @comment.setter
    def comment(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__856553f2204122467e5678458b6a222af2d0a268f19a8fd691d8901464109412)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "comment", value)

    @builtins.property
    @jsii.member(jsii_name="endpointType")
    def endpoint_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: endpointType: The type of the endpoint.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "endpointType"))

    @endpoint_type.setter
    def endpoint_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1c6f7f694227b53bc181ecf119cb90c037a0afe3af75faf5036fda7c9c2e77fc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "endpointType", value)

    @builtins.property
    @jsii.member(jsii_name="moduleName")
    def module_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        moduleName: The name of the module in the instance for which a whitelist is configured. Valid
        values: Registry and Chart.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "moduleName"))

    @module_name.setter
    def module_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5a6491ab9f57f3e381d0dd42929453430101a69f4c56eab12060952137e0ea9e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "moduleName", value)

    @builtins.property
    @jsii.member(jsii_name="regionId")
    def region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: regionId: Region ID of instance. Default is current region.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "regionId"))

    @region_id.setter
    def region_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4dcf475480f4857bacb6ef20fa4c0e3530faf4f3fab09069a941f348550e48ec)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
        entry: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        comment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        endpoint_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        module_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CR::InstanceEndpointAclPolicy``.

        :param entry: 
        :param instance_id: 
        :param comment: 
        :param endpoint_type: 
        :param module_name: 
        :param region_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__69d590f4f8bba22cda812dd489112b6e74bb79c21c2feb7d77bcc34d3ded6aa7)
            check_type(argname="argument entry", value=entry, expected_type=type_hints["entry"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument comment", value=comment, expected_type=type_hints["comment"])
            check_type(argname="argument endpoint_type", value=endpoint_type, expected_type=type_hints["endpoint_type"])
            check_type(argname="argument module_name", value=module_name, expected_type=type_hints["module_name"])
            check_type(argname="argument region_id", value=region_id, expected_type=type_hints["region_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    def entry(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: entry: The IP address range that is allowed to access the instance.
        '''
        result = self._values.get("entry")
        assert result is not None, "Required property 'entry' is missing"
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
    def comment(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: comment: The description of the entry.
        '''
        result = self._values.get("comment")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def endpoint_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: endpointType: The type of the endpoint.
        '''
        result = self._values.get("endpoint_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def module_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        moduleName: The name of the module in the instance for which a whitelist is configured. Valid
        values: Registry and Chart.
        '''
        result = self._values.get("module_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: regionId: Region ID of instance. Default is current region.
        '''
        result = self._values.get("region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstanceEndpointAclPolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosNamespace(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cr.RosNamespace",
):
    '''A ROS template type:  ``ALIYUN::CR::Namespace``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosNamespaceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CR::Namespace``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3fb2ebb41a7f810ef8b75d45521a62cbba0462dcf6434d222b5b0851ffad2828)
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
            type_hints = typing.get_type_hints(_typecheckingstub__d5da41c343a439fd3449ba2d9d95de314d569c4f8da972248135f7c441b3c7c7)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceId: The ID of the enterprise edition instance which namespace belongs to.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrNamespace")
    def attr_namespace(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Namespace: The namespace.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNamespace"))

    @builtins.property
    @jsii.member(jsii_name="attrNamespaceId")
    def attr_namespace_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: NamespaceId: The namespace ID.
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
            type_hints = typing.get_type_hints(_typecheckingstub__4aacf47621f65b56b3c94a4ec1b93af5163ab42783bd76aca9a78d671cc91836)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="namespace")
    def namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: namespace: The name of the namespace.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "namespace"))

    @namespace.setter
    def namespace(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__33fb8c7005ebe9a27f2694ccae3b20f502ad353a01069ba711e31808ed380893)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "namespace", value)

    @builtins.property
    @jsii.member(jsii_name="autoCreate")
    def auto_create(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoCreate: Specifies whether to automatically create an image repository.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoCreate"))

    @auto_create.setter
    def auto_create(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6b89539069d1f071feaaf93ebfc5df3566191fcf31194263fc90974d9037e0c7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoCreate", value)

    @builtins.property
    @jsii.member(jsii_name="defaultVisibility")
    def default_visibility(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: defaultVisibility: The default type of the repository that is automatically created. Valid values: PUBLIC, PRIVATE.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "defaultVisibility"))

    @default_visibility.setter
    def default_visibility(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8f396c8bbc3f2d758a989005199f18b9076f2419e7bd7b55ee396670a1517061)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "defaultVisibility", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceId: The ID of the enterprise edition instance which namespace belongs to. If not provided, will use personal edition instance as default.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4acac0ee7e2125b518631033b1878d8ee4e945511fc8ae9dbd31a2c513d3999c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
        namespace: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        auto_create: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        default_visibility: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CR::Namespace``.

        :param namespace: 
        :param auto_create: 
        :param default_visibility: 
        :param instance_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7c979e01666c4c69bf4fa9288f2c647d2f991d497cb411eff12dbbd632a55466)
            check_type(argname="argument namespace", value=namespace, expected_type=type_hints["namespace"])
            check_type(argname="argument auto_create", value=auto_create, expected_type=type_hints["auto_create"])
            check_type(argname="argument default_visibility", value=default_visibility, expected_type=type_hints["default_visibility"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "namespace": namespace,
        }
        if auto_create is not None:
            self._values["auto_create"] = auto_create
        if default_visibility is not None:
            self._values["default_visibility"] = default_visibility
        if instance_id is not None:
            self._values["instance_id"] = instance_id

    @builtins.property
    def namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: namespace: The name of the namespace.
        '''
        result = self._values.get("namespace")
        assert result is not None, "Required property 'namespace' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def auto_create(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoCreate: Specifies whether to automatically create an image repository.
        '''
        result = self._values.get("auto_create")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def default_visibility(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: defaultVisibility: The default type of the repository that is automatically created. Valid values: PUBLIC, PRIVATE.
        '''
        result = self._values.get("default_visibility")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceId: The ID of the enterprise edition instance which namespace belongs to. If not provided, will use personal edition instance as default.
        '''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosNamespaceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosRepository(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cr.RosRepository",
):
    '''A ROS template type:  ``ALIYUN::CR::Repository``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosRepositoryProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CR::Repository``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bd82279c4e3a8e3100710412c9a72574f1d951e844d897710849fa3e82c7a06d)
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
            type_hints = typing.get_type_hints(_typecheckingstub__8f26e3e1f5e949447b49bde1857492388c446c920362385d771c9febbdbad1e5)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceId: The ID of the enterprise edition instance which repository belongs to.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrRepoId")
    def attr_repo_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RepoId: The repository ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRepoId"))

    @builtins.property
    @jsii.member(jsii_name="attrRepoName")
    def attr_repo_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RepoName: The name of the repository.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRepoName"))

    @builtins.property
    @jsii.member(jsii_name="attrRepoNamespace")
    def attr_repo_namespace(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RepoNamespace: The name of the namespace to which the repository belongs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRepoNamespace"))

    @builtins.property
    @jsii.member(jsii_name="attrRepoType")
    def attr_repo_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RepoType: The type of the repository.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRepoType"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__df2001f5c4579d080595a6b192f38940c73bee3eb0d6d94456d9371e46266182)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="repoName")
    def repo_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: repoName: The name of the repository.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "repoName"))

    @repo_name.setter
    def repo_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7445a767f78c6818ef4e8b5135d91d8b83b9786a83365638e7895f3296cfaa14)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "repoName", value)

    @builtins.property
    @jsii.member(jsii_name="repoNamespace")
    def repo_namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: repoNamespace: The name of the namespace to which the repository belongs.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "repoNamespace"))

    @repo_namespace.setter
    def repo_namespace(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__246ee6f0547c88af5962562ed42b3595a17d8661fc67f00d496c8f8a66b52c66)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "repoNamespace", value)

    @builtins.property
    @jsii.member(jsii_name="repoType")
    def repo_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: repoType: The type of the repository. Valid values: PUBLIC, PRIVATE.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "repoType"))

    @repo_type.setter
    def repo_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e21d4e3904c66e21ed714b2d0d10aae11394048b0fb7f95f15497d5320e7ec0d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "repoType", value)

    @builtins.property
    @jsii.member(jsii_name="summary")
    def summary(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: summary: The summary of the repository.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "summary"))

    @summary.setter
    def summary(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__12fa7af66ce2447f3a13638184e4cf5c5f3a6ec0e69ba35a03984351de0f3130)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "summary", value)

    @builtins.property
    @jsii.member(jsii_name="detail")
    def detail(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: detail: The description of the repository.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "detail"))

    @detail.setter
    def detail(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8c944d362f95ac3df52c26cdef29e931ca30746c9881e60c1c96424b52973914)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "detail", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceId: The ID of the enterprise edition instance which repository belongs to. If not provided, will use personal edition instance as default.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0be695aab2ae753e3a07ebb125da6a5d8f728cd13fc601c50ca35d7a03b9c8ab)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="repoSource")
    def repo_source(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRepository.RepoSourceProperty"]]:
        '''
        :Property: repoSource: Code Source message.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRepository.RepoSourceProperty"]], jsii.get(self, "repoSource"))

    @repo_source.setter
    def repo_source(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRepository.RepoSourceProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__073ff630bdbb4e705a31e02cbd03c27c5ba458521ac21f7e4e1b18be343341bd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "repoSource", value)

    @builtins.property
    @jsii.member(jsii_name="tagImmutability")
    def tag_immutability(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: tagImmutability: Specifies whether the repository is immutable. Only takes effect when InstanceId is specified.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "tagImmutability"))

    @tag_immutability.setter
    def tag_immutability(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__711b4c559dda57082fab7d00f8789a24eb5a0576e709db701d6220185393dbe5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
            is_auto_build: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
            is_disable_cache: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
            is_oversea: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
            source_repo_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            source_repo_namespace: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            source_repo_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param is_auto_build: 
            :param is_disable_cache: 
            :param is_oversea: 
            :param source_repo_name: 
            :param source_repo_namespace: 
            :param source_repo_type: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__30fb15ad805762a2affd5c4242b1a367a07c81aede488666f446faf2cc5b839e)
                check_type(argname="argument is_auto_build", value=is_auto_build, expected_type=type_hints["is_auto_build"])
                check_type(argname="argument is_disable_cache", value=is_disable_cache, expected_type=type_hints["is_disable_cache"])
                check_type(argname="argument is_oversea", value=is_oversea, expected_type=type_hints["is_oversea"])
                check_type(argname="argument source_repo_name", value=source_repo_name, expected_type=type_hints["source_repo_name"])
                check_type(argname="argument source_repo_namespace", value=source_repo_namespace, expected_type=type_hints["source_repo_namespace"])
                check_type(argname="argument source_repo_type", value=source_repo_type, expected_type=type_hints["source_repo_type"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
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
        ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: isAutoBuild: Whether to enable automatic construction
            '''
            result = self._values.get("is_auto_build")
            assert result is not None, "Required property 'is_auto_build' is missing"
            return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def is_disable_cache(
            self,
        ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: isDisableCache: Whether to disable Cache at build time
            '''
            result = self._values.get("is_disable_cache")
            assert result is not None, "Required property 'is_disable_cache' is missing"
            return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def is_oversea(
            self,
        ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: isOversea: Whether to enable overseas construction
            '''
            result = self._values.get("is_oversea")
            assert result is not None, "Required property 'is_oversea' is missing"
            return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def source_repo_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: sourceRepoName: Source code warehouse name
            '''
            result = self._values.get("source_repo_name")
            assert result is not None, "Required property 'source_repo_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def source_repo_namespace(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: sourceRepoNamespace: Source code repository namespace
            '''
            result = self._values.get("source_repo_namespace")
            assert result is not None, "Required property 'source_repo_namespace' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def source_repo_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            sourceRepoType: code source type. Allow values:
            CODE, GITHUB, GITLAB, BITBUCKET. Enterprise Edition additional support CODEUP and GITEE
            '''
            result = self._values.get("source_repo_type")
            assert result is not None, "Required property 'source_repo_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

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
        repo_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        repo_namespace: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        repo_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        summary: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        detail: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        repo_source: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRepository.RepoSourceProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        tag_immutability: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__312fd6737af4d8ad566a8cb2b65271789e087dcd86fefae36f0cc1aa1bfac9ad)
            check_type(argname="argument repo_name", value=repo_name, expected_type=type_hints["repo_name"])
            check_type(argname="argument repo_namespace", value=repo_namespace, expected_type=type_hints["repo_namespace"])
            check_type(argname="argument repo_type", value=repo_type, expected_type=type_hints["repo_type"])
            check_type(argname="argument summary", value=summary, expected_type=type_hints["summary"])
            check_type(argname="argument detail", value=detail, expected_type=type_hints["detail"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument repo_source", value=repo_source, expected_type=type_hints["repo_source"])
            check_type(argname="argument tag_immutability", value=tag_immutability, expected_type=type_hints["tag_immutability"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    def repo_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: repoName: The name of the repository.
        '''
        result = self._values.get("repo_name")
        assert result is not None, "Required property 'repo_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def repo_namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: repoNamespace: The name of the namespace to which the repository belongs.
        '''
        result = self._values.get("repo_namespace")
        assert result is not None, "Required property 'repo_namespace' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def repo_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: repoType: The type of the repository. Valid values: PUBLIC, PRIVATE.
        '''
        result = self._values.get("repo_type")
        assert result is not None, "Required property 'repo_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def summary(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: summary: The summary of the repository.
        '''
        result = self._values.get("summary")
        assert result is not None, "Required property 'summary' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def detail(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: detail: The description of the repository.
        '''
        result = self._values.get("detail")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceId: The ID of the enterprise edition instance which repository belongs to. If not provided, will use personal edition instance as default.
        '''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def repo_source(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRepository.RepoSourceProperty]]:
        '''
        :Property: repoSource: Code Source message.
        '''
        result = self._values.get("repo_source")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRepository.RepoSourceProperty]], result)

    @builtins.property
    def tag_immutability(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: tagImmutability: Specifies whether the repository is immutable. Only takes effect when InstanceId is specified.
        '''
        result = self._values.get("tag_immutability")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRepositoryProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosUserInfo(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cr.RosUserInfo",
):
    '''A ROS template type:  ``ALIYUN::CR::UserInfo``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosUserInfoProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CR::UserInfo``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__43b817332fede769fec9e7c5375a532c037ece7f640b996a08691de2753606e5)
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
            type_hints = typing.get_type_hints(_typecheckingstub__458d186bcbb9a9eb85d7b1c946e821d7022a9adf5ddb4d08f6f06362b3cd31d9)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrLoginName")
    def attr_login_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LoginName: Login name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLoginName"))

    @builtins.property
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UserId: User ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUserId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__2f777632f9311d65eb2f8534ce3abb2ea14c42479cf366313f0d77531f849315)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="user")
    def user(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosUserInfo.UserProperty"]:
        '''
        :Property: user: User info. If user exists, will update user info.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosUserInfo.UserProperty"], jsii.get(self, "user"))

    @user.setter
    def user(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosUserInfo.UserProperty"],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__188646b9f28ba5e23adaafa4b202ab1376c74d2d2b250080985a2a462ec5b0ce)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
            password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param password: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__0990f820abb8f35191865c2868d0499ba2b4aaa28189777c6e6c0c55ce014524)
                check_type(argname="argument password", value=password, expected_type=type_hints["password"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "password": password,
            }

        @builtins.property
        def password(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: password: Password.
            '''
            result = self._values.get("password")
            assert result is not None, "Required property 'password' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

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
        user: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosUserInfo.UserProperty, typing.Dict[builtins.str, typing.Any]]],
    ) -> None:
        '''Properties for defining a ``ALIYUN::CR::UserInfo``.

        :param user: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8231d078f55c057bb9c00fd75f01a2237eda36a2c2ed3b7d8c842f744260dc6c)
            check_type(argname="argument user", value=user, expected_type=type_hints["user"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "user": user,
        }

    @builtins.property
    def user(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosUserInfo.UserProperty]:
        '''
        :Property: user: User info. If user exists, will update user info.
        '''
        result = self._values.get("user")
        assert result is not None, "Required property 'user' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosUserInfo.UserProperty], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosUserInfoProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class UserInfo(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cr.UserInfo",
):
    '''A ROS resource type:  ``ALIYUN::CR::UserInfo``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["UserInfoProps", typing.Dict[builtins.str, typing.Any]],
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d8a3de1be002cdbce52e5ac5ae2113e5f58cfcff4eb6df9fe8fea965ff428b2a)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrLoginName")
    def attr_login_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute LoginName: Login name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLoginName"))

    @builtins.property
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute UserId: User ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUserId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cr.UserInfoProps",
    jsii_struct_bases=[],
    name_mapping={"user": "user"},
)
class UserInfoProps:
    def __init__(
        self,
        *,
        user: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosUserInfo.UserProperty, typing.Dict[builtins.str, typing.Any]]],
    ) -> None:
        '''Properties for defining a ``ALIYUN::CR::UserInfo``.

        :param user: Property user: User info. If user exists, will update user info.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d6ba51e26c399d5e4a4c021251cd376fb40f7e7d68fa398c06c3f85dfe9ec8ae)
            check_type(argname="argument user", value=user, expected_type=type_hints["user"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "user": user,
        }

    @builtins.property
    def user(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosUserInfo.UserProperty]:
        '''Property user: User info.

        If user exists, will update user info.
        '''
        result = self._values.get("user")
        assert result is not None, "Required property 'user' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosUserInfo.UserProperty], result)

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

def _typecheckingstub__4bf9e011c87e46c86bbb8569203fa1eee0c29f002d841de3e890671c93d8721f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[InstanceEndpointAclPolicyProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d5300c733a5eec429c04f643005efc40f9270492c86bd4bc9ba9503beb6e4c16(
    *,
    entry: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    comment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    endpoint_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    module_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2077531d4e80f0006bc9d0544435c51e4e717d2397dad1cb4e4caa273654d9e1(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[NamespaceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9b84993afb12c0064265f87561d23aa1debeaaf76197b72d4b90cec1d64f0d3c(
    *,
    namespace: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    auto_create: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    default_visibility: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0e337b0af611e60f6ab3e1822b8baf5abf62c4e9d0781ee266725d722c21ba72(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RepositoryProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__770794f31d73f05c8ca09c24fadf12c59f2ff3ca5019eb763587978cb7238d4f(
    *,
    repo_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    repo_namespace: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    repo_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    summary: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    detail: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    repo_source: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRepository.RepoSourceProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    tag_immutability: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5ffbdfe8ae9d507d2bc136e9c65072d54bfbca0dd9ead03de39328fce07ff0d8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInstanceEndpointAclPolicyProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6d9e125d113c44390f6180355b8418d53f8736935061955ce15a081a863e12da(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__077f67e7b38f7945204f3a41d4dbaac4948238c9857f06384d00141f592b0ced(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a8046d0371cb38018af179c787f8bc1ff265f20647bde2318f4b198baaca4b9e(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2618534673728e3ade535fe6362707f1e351e5c24301ac758bbf8c577e5955cc(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__856553f2204122467e5678458b6a222af2d0a268f19a8fd691d8901464109412(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1c6f7f694227b53bc181ecf119cb90c037a0afe3af75faf5036fda7c9c2e77fc(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5a6491ab9f57f3e381d0dd42929453430101a69f4c56eab12060952137e0ea9e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4dcf475480f4857bacb6ef20fa4c0e3530faf4f3fab09069a941f348550e48ec(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__69d590f4f8bba22cda812dd489112b6e74bb79c21c2feb7d77bcc34d3ded6aa7(
    *,
    entry: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    comment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    endpoint_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    module_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3fb2ebb41a7f810ef8b75d45521a62cbba0462dcf6434d222b5b0851ffad2828(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosNamespaceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d5da41c343a439fd3449ba2d9d95de314d569c4f8da972248135f7c441b3c7c7(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4aacf47621f65b56b3c94a4ec1b93af5163ab42783bd76aca9a78d671cc91836(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__33fb8c7005ebe9a27f2694ccae3b20f502ad353a01069ba711e31808ed380893(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6b89539069d1f071feaaf93ebfc5df3566191fcf31194263fc90974d9037e0c7(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8f396c8bbc3f2d758a989005199f18b9076f2419e7bd7b55ee396670a1517061(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4acac0ee7e2125b518631033b1878d8ee4e945511fc8ae9dbd31a2c513d3999c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7c979e01666c4c69bf4fa9288f2c647d2f991d497cb411eff12dbbd632a55466(
    *,
    namespace: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    auto_create: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    default_visibility: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bd82279c4e3a8e3100710412c9a72574f1d951e844d897710849fa3e82c7a06d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosRepositoryProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8f26e3e1f5e949447b49bde1857492388c446c920362385d771c9febbdbad1e5(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__df2001f5c4579d080595a6b192f38940c73bee3eb0d6d94456d9371e46266182(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7445a767f78c6818ef4e8b5135d91d8b83b9786a83365638e7895f3296cfaa14(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__246ee6f0547c88af5962562ed42b3595a17d8661fc67f00d496c8f8a66b52c66(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e21d4e3904c66e21ed714b2d0d10aae11394048b0fb7f95f15497d5320e7ec0d(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__12fa7af66ce2447f3a13638184e4cf5c5f3a6ec0e69ba35a03984351de0f3130(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8c944d362f95ac3df52c26cdef29e931ca30746c9881e60c1c96424b52973914(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0be695aab2ae753e3a07ebb125da6a5d8f728cd13fc601c50ca35d7a03b9c8ab(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__073ff630bdbb4e705a31e02cbd03c27c5ba458521ac21f7e4e1b18be343341bd(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRepository.RepoSourceProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__711b4c559dda57082fab7d00f8789a24eb5a0576e709db701d6220185393dbe5(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__30fb15ad805762a2affd5c4242b1a367a07c81aede488666f446faf2cc5b839e(
    *,
    is_auto_build: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    is_disable_cache: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    is_oversea: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    source_repo_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_repo_namespace: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_repo_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__312fd6737af4d8ad566a8cb2b65271789e087dcd86fefae36f0cc1aa1bfac9ad(
    *,
    repo_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    repo_namespace: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    repo_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    summary: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    detail: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    repo_source: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRepository.RepoSourceProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    tag_immutability: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__43b817332fede769fec9e7c5375a532c037ece7f640b996a08691de2753606e5(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosUserInfoProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__458d186bcbb9a9eb85d7b1c946e821d7022a9adf5ddb4d08f6f06362b3cd31d9(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2f777632f9311d65eb2f8534ce3abb2ea14c42479cf366313f0d77531f849315(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__188646b9f28ba5e23adaafa4b202ab1376c74d2d2b250080985a2a462ec5b0ce(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosUserInfo.UserProperty],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0990f820abb8f35191865c2868d0499ba2b4aaa28189777c6e6c0c55ce014524(
    *,
    password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8231d078f55c057bb9c00fd75f01a2237eda36a2c2ed3b7d8c842f744260dc6c(
    *,
    user: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosUserInfo.UserProperty, typing.Dict[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d8a3de1be002cdbce52e5ac5ae2113e5f58cfcff4eb6df9fe8fea965ff428b2a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[UserInfoProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d6ba51e26c399d5e4a4c021251cd376fb40f7e7d68fa398c06c3f85dfe9ec8ae(
    *,
    user: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosUserInfo.UserProperty, typing.Dict[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass
