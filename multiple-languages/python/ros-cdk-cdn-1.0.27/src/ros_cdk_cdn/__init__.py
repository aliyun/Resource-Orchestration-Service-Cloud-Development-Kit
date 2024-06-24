'''
## Aliyun ROS CDN Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as CDN from '@alicloud/ros-cdk-cdn';
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


class Domain(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cdn.Domain",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CDN::Domain``, which is used to add a domain name to Alibaba Cloud CDN (CDN).

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDomain``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-domain
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DomainProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0a504257e802fc47414fd60396440a38b3d8189c7c8a055e12b18472b4c55304)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCname")
    def attr_cname(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Cname: The CNAME generated for the CDN domain.You must add a CNAME record with your DNS provider to map the CDN domain name to the CNAME.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCname"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DomainName: The CDN domain name.

        Wildcard domain names that start with periods (.) are supported. For example, .a.com.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomainName"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__009287325a98059ecc21409ca8c64a76369e1ed0a2c7488dbfd22772a0f3e4f5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2782494c90adbc1d8cfc0a9e10976febcd2cfc35305212c5ddaf24efd149db93)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "DomainProps":
        return typing.cast("DomainProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "DomainProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3999592609982c533a72b112516e26e36fe4873105984d8f278ee63055efc396)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b3dca9fef1e1113b2ec8445c8c8532e5ca109d77e5095cad058ebbc3ad020978)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


class DomainConfig(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cdn.DomainConfig",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CDN::DomainConfig``, which is used to configure multiple domain names at a time.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDomainConfig``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-domainconfig
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DomainConfigProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9d139905fcc664b63d2cff155fa704af5f61d6ebcc4806131782109feb8baef5)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a6fb7e2edcdd65104868264738e27d1bba15d24e3070a2a1206baba7136a3787)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__de51f9564e216479f62136a1257e636a9f74299de2052dc85e84a8dcf51e8f50)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "DomainConfigProps":
        return typing.cast("DomainConfigProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "DomainConfigProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0fbf4279a3f90346de71de514f89f4bb06f006f65d51927985874b0e7d626ced)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dbc94f5a11a9d5121e51951e3613307c515142a59e0e020a75310ec2cfe45984)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cdn.DomainConfigProps",
    jsii_struct_bases=[],
    name_mapping={"domain_names": "domainNames", "function_list": "functionList"},
)
class DomainConfigProps:
    def __init__(
        self,
        *,
        domain_names: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        function_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosDomainConfig.FunctionListProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
    ) -> None:
        '''Properties for defining a ``DomainConfig``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-domainconfig

        :param domain_names: Property domainNames: Your accelerated domain name, separated by commas in English.
        :param function_list: Property functionList: Function list. This property is required.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8b24d05b17dce3dd66e25492982b9174726df2150f56400c0ff3f98b1647d6e2)
            check_type(argname="argument domain_names", value=domain_names, expected_type=type_hints["domain_names"])
            check_type(argname="argument function_list", value=function_list, expected_type=type_hints["function_list"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "domain_names": domain_names,
        }
        if function_list is not None:
            self._values["function_list"] = function_list

    @builtins.property
    def domain_names(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property domainNames: Your accelerated domain name, separated by commas in English.'''
        result = self._values.get("domain_names")
        assert result is not None, "Required property 'domain_names' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def function_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDomainConfig.FunctionListProperty"]]]]:
        '''Property functionList: Function list.

        This property is required.
        '''
        result = self._values.get("function_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDomainConfig.FunctionListProperty"]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DomainConfigProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cdn.DomainProps",
    jsii_struct_bases=[],
    name_mapping={
        "cdn_type": "cdnType",
        "domain_name": "domainName",
        "check_url": "checkUrl",
        "origin_servers": "originServers",
        "resource_group_id": "resourceGroupId",
        "scope": "scope",
        "sources": "sources",
        "tags": "tags",
        "top_level_domain": "topLevelDomain",
    },
)
class DomainProps:
    def __init__(
        self,
        *,
        cdn_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        check_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        origin_servers: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosDomain.OriginServersProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scope: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sources: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosDomain.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        top_level_domain: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Domain``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-domain

        :param cdn_type: Property cdnType: The business type. Valid values: web, download, video, livestream, and httpsdelivery. web: acceleration of images and small files download. download: acceleration of large file downloads. video: live streaming acceleration. httpsdelivery: SSL acceleration for HTTPS.
        :param domain_name: Property domainName: The CDN domain name. Wildcard domain names that start with periods (.) are supported. For example, .a.com.
        :param check_url: Property checkUrl: The validation of the origin.
        :param origin_servers: Property originServers: The list of origin URLs. It has the same function as Sources, but has a higher priority than it.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group. If this is left blank, the system automatically fills in the ID of the default resource group.
        :param scope: Property scope: Valid values: domestic, overseas, and global. Default value: domestic. The setting is supported for users outside mainland China, users in mainland China of level 3 or above.
        :param sources: Property sources: The list of origin URLs.
        :param tags: Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        :param top_level_domain: Property topLevelDomain: The top-level domain, which can only be configured by users on the whitelist.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fbe00986bb9c4069fc1841fb168ef8d26854ded68bdfa55db3b8b5ef48e19d2e)
            check_type(argname="argument cdn_type", value=cdn_type, expected_type=type_hints["cdn_type"])
            check_type(argname="argument domain_name", value=domain_name, expected_type=type_hints["domain_name"])
            check_type(argname="argument check_url", value=check_url, expected_type=type_hints["check_url"])
            check_type(argname="argument origin_servers", value=origin_servers, expected_type=type_hints["origin_servers"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument sources", value=sources, expected_type=type_hints["sources"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument top_level_domain", value=top_level_domain, expected_type=type_hints["top_level_domain"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cdn_type": cdn_type,
            "domain_name": domain_name,
        }
        if check_url is not None:
            self._values["check_url"] = check_url
        if origin_servers is not None:
            self._values["origin_servers"] = origin_servers
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if scope is not None:
            self._values["scope"] = scope
        if sources is not None:
            self._values["sources"] = sources
        if tags is not None:
            self._values["tags"] = tags
        if top_level_domain is not None:
            self._values["top_level_domain"] = top_level_domain

    @builtins.property
    def cdn_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property cdnType: The business type.

        Valid values: web, download, video, livestream, and httpsdelivery. web: acceleration of images and small files download. download: acceleration of large file downloads. video: live streaming acceleration. httpsdelivery: SSL acceleration for HTTPS.
        '''
        result = self._values.get("cdn_type")
        assert result is not None, "Required property 'cdn_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property domainName: The CDN domain name.

        Wildcard domain names that start with periods (.) are supported. For example, .a.com.
        '''
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def check_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property checkUrl: The validation of the origin.'''
        result = self._values.get("check_url")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def origin_servers(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDomain.OriginServersProperty"]]]]:
        '''Property originServers: The list of origin URLs.

        It has the same function as Sources, but has a higher priority than it.
        '''
        result = self._values.get("origin_servers")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDomain.OriginServersProperty"]]]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.

        If this is left blank, the system automatically fills in the ID of the default resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scope(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property scope: Valid values: domestic, overseas, and global.

        Default value: domestic. The setting is supported for users outside mainland China, users in mainland China of level 3 or above.
        '''
        result = self._values.get("scope")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sources(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sources: The list of origin URLs.'''
        result = self._values.get("sources")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosDomain.TagsProperty"]]:
        '''Property tags: Tags to attach to instance.

        Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosDomain.TagsProperty"]], result)

    @builtins.property
    def top_level_domain(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property topLevelDomain: The top-level domain, which can only be configured by users on the whitelist.'''
        result = self._values.get("top_level_domain")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DomainProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDomain(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cdn.RosDomain",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CDN::Domain``, which is used to add a domain name to Alibaba Cloud CDN (CDN).

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Domain`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-domain
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDomainProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__64a983aed56f99ff7184768286362700ca2ec8836351eb971116e15f739cd78f)
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
            type_hints = typing.get_type_hints(_typecheckingstub__c8aa8e3eff16160f532d687c7303c9a472f625ef59e947e10d3682bc21920ad0)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCname")
    def attr_cname(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Cname: The CNAME generated for the CDN domain.You must add a CNAME record with your DNS provider to map the CDN domain name to the CNAME.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCname"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DomainName: The CDN domain name. Wildcard domain names that start with periods (.) are supported. For example, .a.com.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomainName"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="cdnType")
    def cdn_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: cdnType: The business type. Valid values: web, download, video, livestream, and httpsdelivery. web: acceleration of images and small files download. download: acceleration of large file downloads. video: live streaming acceleration. httpsdelivery: SSL acceleration for HTTPS.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "cdnType"))

    @cdn_type.setter
    def cdn_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__06620cf9cc373c426846ba39b8e58e2b004446afb32779a67c9888c55da60f67)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cdnType", value)

    @builtins.property
    @jsii.member(jsii_name="domainName")
    def domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: domainName: The CDN domain name. Wildcard domain names that start with periods (.) are supported. For example, .a.com.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "domainName"))

    @domain_name.setter
    def domain_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__04969fdd87836ba787c7988f9ee20f26e0e59715de2ad398c1e97deab7ba5d19)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "domainName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__160cebb2a53cf04f8fcc462408cb094940a07e5974b183a51c26d125762d41c3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="checkUrl")
    def check_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: checkUrl: The validation of the origin.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "checkUrl"))

    @check_url.setter
    def check_url(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__46784489843ff1158efd93105af1005b11ea700f6f40fc623f6b69c2145a197e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "checkUrl", value)

    @builtins.property
    @jsii.member(jsii_name="originServers")
    def origin_servers(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDomain.OriginServersProperty"]]]]:
        '''
        :Property: originServers: The list of origin URLs. It has the same function as Sources, but has a higher priority than it.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDomain.OriginServersProperty"]]]], jsii.get(self, "originServers"))

    @origin_servers.setter
    def origin_servers(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDomain.OriginServersProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__af60bee524d56de01850d4dacdce223a137c950e5bf270c5a35b962495a44ee2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "originServers", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group. If this is left blank, the system automatically fills in the ID of the default resource group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1f10d662a42e88c5494b8733ae6565da8080f4331d20d0674ee2da0da17b8666)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def scope(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: scope: Valid values: domestic, overseas, and global. Default value: domestic. The setting is supported for users outside mainland China, users in mainland China of level 3 or above.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "scope"))

    @scope.setter
    def scope(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f83a0fad5e24d4c49a47919442dd1f3157a27b90a4f6d5aab9a0fe00bf4698c7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)

    @builtins.property
    @jsii.member(jsii_name="sources")
    def sources(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sources: The list of origin URLs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sources"))

    @sources.setter
    def sources(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d61985ac359cf3a8422ffd82ff980ee2b6ad232a2ac8390ecfbf57339b78b9e6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sources", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosDomain.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosDomain.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosDomain.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c6cec6c881f3455145348958a9cbe1f1275cb3097dfbd4ec48da07348eec433a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="topLevelDomain")
    def top_level_domain(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: topLevelDomain: The top-level domain, which can only be configured by users on the whitelist.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "topLevelDomain"))

    @top_level_domain.setter
    def top_level_domain(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4551e451792ef0538ec772fbcec48ce4f05a31c5371c0fdc5c5aaf7a6f013d40)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "topLevelDomain", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cdn.RosDomain.OriginServersProperty",
        jsii_struct_bases=[],
        name_mapping={
            "content": "content",
            "type": "type",
            "port": "port",
            "priority": "priority",
            "weight": "weight",
        },
    )
    class OriginServersProperty:
        def __init__(
            self,
            *,
            content: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            priority: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            weight: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param content: 
            :param type: 
            :param port: 
            :param priority: 
            :param weight: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__5c99d77dae2d55c5364a9852dca67bd8e9c13dc51c74f4e4ad79db3428cc3a97)
                check_type(argname="argument content", value=content, expected_type=type_hints["content"])
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
                check_type(argname="argument port", value=port, expected_type=type_hints["port"])
                check_type(argname="argument priority", value=priority, expected_type=type_hints["priority"])
                check_type(argname="argument weight", value=weight, expected_type=type_hints["weight"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "content": content,
                "type": type,
            }
            if port is not None:
                self._values["port"] = port
            if priority is not None:
                self._values["priority"] = priority
            if weight is not None:
                self._values["weight"] = weight

        @builtins.property
        def content(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: content: The address of the origin server. You can specify an IP address or a domain name.
            '''
            result = self._values.get("content")
            assert result is not None, "Required property 'content' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            type: The type of the origin server. Valid values:
            ipaddr: the IP address
            domain: the domain name
            oss: the endpoint of an Object Storage Service (OSS) bucket
            fc_domain: the domain name of Function Compute
            '''
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def port(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            port: The port. Valid values:
            80: the default port
            443: the HTTPS port
            A custom port
            '''
            result = self._values.get("port")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def priority(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            priority: The priority of the origin server if multiple origin servers are specified. Default value: 20. Valid values:
            20: the primary origin server
            30: the secondary origin server
            '''
            result = self._values.get("priority")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def weight(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: weight: The weight of the origin server if multiple origin servers are specified. Valid values: 0 to 100. Default value: 10.
            '''
            result = self._values.get("weight")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "OriginServersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cdn.RosDomain.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__c8fd4ed24fd9eeb4770011fa333d9ca09bbd784b0bc7ef3357d91e51ae181295)
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


class RosDomainConfig(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cdn.RosDomainConfig",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CDN::DomainConfig``, which is used to configure multiple domain names at a time.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``DomainConfig`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-domainconfig
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDomainConfigProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5d36017d1828a02fa0d24beb84457a3c4f98c22698aa99eab6f118ed9415df04)
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
            type_hints = typing.get_type_hints(_typecheckingstub__f847c9c6c42b0e3da501b48f0ea4bb771b083eb683a86bcbd2fc4dc0ac3a84bd)
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
    @jsii.member(jsii_name="domainNames")
    def domain_names(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: domainNames: Your accelerated domain name, separated by commas in English.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "domainNames"))

    @domain_names.setter
    def domain_names(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__08e235c5fdee02d5f363670f4a096d774bb780c0cd653428d55b9155769dd3ce)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "domainNames", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5b8681407c76018b824d3dceb565a38d49c0253cc4920b8b00b3573c0f785bb1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="functionList")
    def function_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDomainConfig.FunctionListProperty"]]]]:
        '''
        :Property: functionList: Function list. This property is required.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDomainConfig.FunctionListProperty"]]]], jsii.get(self, "functionList"))

    @function_list.setter
    def function_list(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDomainConfig.FunctionListProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ff35ee920a5657f8b695d9f9903497a76fa7804d7633ec10dc243d03881bd6d8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "functionList", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cdn.RosDomainConfig.FunctionArgsProperty",
        jsii_struct_bases=[],
        name_mapping={"arg_name": "argName", "arg_value": "argValue"},
    )
    class FunctionArgsProperty:
        def __init__(
            self,
            *,
            arg_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            arg_value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param arg_name: 
            :param arg_value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__0456e8b1708994fffcc0fd6760cec9a4893c1d27fdac268294d8bcbbdf7b0b17)
                check_type(argname="argument arg_name", value=arg_name, expected_type=type_hints["arg_name"])
                check_type(argname="argument arg_value", value=arg_value, expected_type=type_hints["arg_value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "arg_name": arg_name,
                "arg_value": arg_value,
            }

        @builtins.property
        def arg_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: argName: Arg name.
            '''
            result = self._values.get("arg_name")
            assert result is not None, "Required property 'arg_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def arg_value(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: argValue: Arg value.
            '''
            result = self._values.get("arg_value")
            assert result is not None, "Required property 'arg_value' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "FunctionArgsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cdn.RosDomainConfig.FunctionListProperty",
        jsii_struct_bases=[],
        name_mapping={
            "function_args": "functionArgs",
            "function_name": "functionName",
            "parent_id": "parentId",
        },
    )
    class FunctionListProperty:
        def __init__(
            self,
            *,
            function_args: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosDomainConfig.FunctionArgsProperty", typing.Dict[builtins.str, typing.Any]]]]],
            function_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            parent_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param function_args: 
            :param function_name: 
            :param parent_id: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__3dc7aab5676d15be81272bf87d82b7bd0b0c10b8b59d3b3f85a702597356451e)
                check_type(argname="argument function_args", value=function_args, expected_type=type_hints["function_args"])
                check_type(argname="argument function_name", value=function_name, expected_type=type_hints["function_name"])
                check_type(argname="argument parent_id", value=parent_id, expected_type=type_hints["parent_id"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "function_args": function_args,
                "function_name": function_name,
            }
            if parent_id is not None:
                self._values["parent_id"] = parent_id

        @builtins.property
        def function_args(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDomainConfig.FunctionArgsProperty"]]]:
            '''
            :Property: functionArgs: Function args.
            '''
            result = self._values.get("function_args")
            assert result is not None, "Required property 'function_args' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDomainConfig.FunctionArgsProperty"]]], result)

        @builtins.property
        def function_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: functionName: Function name.
            '''
            result = self._values.get("function_name")
            assert result is not None, "Required property 'function_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def parent_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: parentId: Rule condition ID.
            '''
            result = self._values.get("parent_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "FunctionListProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cdn.RosDomainConfigProps",
    jsii_struct_bases=[],
    name_mapping={"domain_names": "domainNames", "function_list": "functionList"},
)
class RosDomainConfigProps:
    def __init__(
        self,
        *,
        domain_names: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        function_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDomainConfig.FunctionListProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosDomainConfig``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-domainconfig

        :param domain_names: 
        :param function_list: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__143f541f3167b7fa780e251790b39fb7fd53eda6ae3d49b8c638a5c7fb428a0d)
            check_type(argname="argument domain_names", value=domain_names, expected_type=type_hints["domain_names"])
            check_type(argname="argument function_list", value=function_list, expected_type=type_hints["function_list"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "domain_names": domain_names,
        }
        if function_list is not None:
            self._values["function_list"] = function_list

    @builtins.property
    def domain_names(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: domainNames: Your accelerated domain name, separated by commas in English.
        '''
        result = self._values.get("domain_names")
        assert result is not None, "Required property 'domain_names' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def function_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDomainConfig.FunctionListProperty]]]]:
        '''
        :Property: functionList: Function list. This property is required.
        '''
        result = self._values.get("function_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDomainConfig.FunctionListProperty]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDomainConfigProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cdn.RosDomainProps",
    jsii_struct_bases=[],
    name_mapping={
        "cdn_type": "cdnType",
        "domain_name": "domainName",
        "check_url": "checkUrl",
        "origin_servers": "originServers",
        "resource_group_id": "resourceGroupId",
        "scope": "scope",
        "sources": "sources",
        "tags": "tags",
        "top_level_domain": "topLevelDomain",
    },
)
class RosDomainProps:
    def __init__(
        self,
        *,
        cdn_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        check_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        origin_servers: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDomain.OriginServersProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scope: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sources: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosDomain.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        top_level_domain: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosDomain``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-domain

        :param cdn_type: 
        :param domain_name: 
        :param check_url: 
        :param origin_servers: 
        :param resource_group_id: 
        :param scope: 
        :param sources: 
        :param tags: 
        :param top_level_domain: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__848d18b862effe65d493698c0fe2b469cc234db0026deca93854c279147f4dfd)
            check_type(argname="argument cdn_type", value=cdn_type, expected_type=type_hints["cdn_type"])
            check_type(argname="argument domain_name", value=domain_name, expected_type=type_hints["domain_name"])
            check_type(argname="argument check_url", value=check_url, expected_type=type_hints["check_url"])
            check_type(argname="argument origin_servers", value=origin_servers, expected_type=type_hints["origin_servers"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument sources", value=sources, expected_type=type_hints["sources"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument top_level_domain", value=top_level_domain, expected_type=type_hints["top_level_domain"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cdn_type": cdn_type,
            "domain_name": domain_name,
        }
        if check_url is not None:
            self._values["check_url"] = check_url
        if origin_servers is not None:
            self._values["origin_servers"] = origin_servers
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if scope is not None:
            self._values["scope"] = scope
        if sources is not None:
            self._values["sources"] = sources
        if tags is not None:
            self._values["tags"] = tags
        if top_level_domain is not None:
            self._values["top_level_domain"] = top_level_domain

    @builtins.property
    def cdn_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: cdnType: The business type. Valid values: web, download, video, livestream, and httpsdelivery. web: acceleration of images and small files download. download: acceleration of large file downloads. video: live streaming acceleration. httpsdelivery: SSL acceleration for HTTPS.
        '''
        result = self._values.get("cdn_type")
        assert result is not None, "Required property 'cdn_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: domainName: The CDN domain name. Wildcard domain names that start with periods (.) are supported. For example, .a.com.
        '''
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def check_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: checkUrl: The validation of the origin.
        '''
        result = self._values.get("check_url")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def origin_servers(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDomain.OriginServersProperty]]]]:
        '''
        :Property: originServers: The list of origin URLs. It has the same function as Sources, but has a higher priority than it.
        '''
        result = self._values.get("origin_servers")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDomain.OriginServersProperty]]]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group. If this is left blank, the system automatically fills in the ID of the default resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scope(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: scope: Valid values: domestic, overseas, and global. Default value: domestic. The setting is supported for users outside mainland China, users in mainland China of level 3 or above.
        '''
        result = self._values.get("scope")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sources(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sources: The list of origin URLs.
        '''
        result = self._values.get("sources")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosDomain.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosDomain.TagsProperty]], result)

    @builtins.property
    def top_level_domain(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: topLevelDomain: The top-level domain, which can only be configured by users on the whitelist.
        '''
        result = self._values.get("top_level_domain")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDomainProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Domain",
    "DomainConfig",
    "DomainConfigProps",
    "DomainProps",
    "RosDomain",
    "RosDomainConfig",
    "RosDomainConfigProps",
    "RosDomainProps",
    "datasource",
]

publication.publish()

# Loading modules to ensure their types are registered with the jsii runtime library
from . import datasource

def _typecheckingstub__0a504257e802fc47414fd60396440a38b3d8189c7c8a055e12b18472b4c55304(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DomainProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__009287325a98059ecc21409ca8c64a76369e1ed0a2c7488dbfd22772a0f3e4f5(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2782494c90adbc1d8cfc0a9e10976febcd2cfc35305212c5ddaf24efd149db93(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3999592609982c533a72b112516e26e36fe4873105984d8f278ee63055efc396(
    value: DomainProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b3dca9fef1e1113b2ec8445c8c8532e5ca109d77e5095cad058ebbc3ad020978(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9d139905fcc664b63d2cff155fa704af5f61d6ebcc4806131782109feb8baef5(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DomainConfigProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a6fb7e2edcdd65104868264738e27d1bba15d24e3070a2a1206baba7136a3787(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__de51f9564e216479f62136a1257e636a9f74299de2052dc85e84a8dcf51e8f50(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0fbf4279a3f90346de71de514f89f4bb06f006f65d51927985874b0e7d626ced(
    value: DomainConfigProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dbc94f5a11a9d5121e51951e3613307c515142a59e0e020a75310ec2cfe45984(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8b24d05b17dce3dd66e25492982b9174726df2150f56400c0ff3f98b1647d6e2(
    *,
    domain_names: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    function_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDomainConfig.FunctionListProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fbe00986bb9c4069fc1841fb168ef8d26854ded68bdfa55db3b8b5ef48e19d2e(
    *,
    cdn_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    check_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    origin_servers: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDomain.OriginServersProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scope: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sources: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosDomain.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    top_level_domain: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__64a983aed56f99ff7184768286362700ca2ec8836351eb971116e15f739cd78f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDomainProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c8aa8e3eff16160f532d687c7303c9a472f625ef59e947e10d3682bc21920ad0(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__06620cf9cc373c426846ba39b8e58e2b004446afb32779a67c9888c55da60f67(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__04969fdd87836ba787c7988f9ee20f26e0e59715de2ad398c1e97deab7ba5d19(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__160cebb2a53cf04f8fcc462408cb094940a07e5974b183a51c26d125762d41c3(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__46784489843ff1158efd93105af1005b11ea700f6f40fc623f6b69c2145a197e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__af60bee524d56de01850d4dacdce223a137c950e5bf270c5a35b962495a44ee2(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDomain.OriginServersProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1f10d662a42e88c5494b8733ae6565da8080f4331d20d0674ee2da0da17b8666(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f83a0fad5e24d4c49a47919442dd1f3157a27b90a4f6d5aab9a0fe00bf4698c7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d61985ac359cf3a8422ffd82ff980ee2b6ad232a2ac8390ecfbf57339b78b9e6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c6cec6c881f3455145348958a9cbe1f1275cb3097dfbd4ec48da07348eec433a(
    value: typing.Optional[typing.List[RosDomain.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4551e451792ef0538ec772fbcec48ce4f05a31c5371c0fdc5c5aaf7a6f013d40(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5c99d77dae2d55c5364a9852dca67bd8e9c13dc51c74f4e4ad79db3428cc3a97(
    *,
    content: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    priority: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    weight: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c8fd4ed24fd9eeb4770011fa333d9ca09bbd784b0bc7ef3357d91e51ae181295(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5d36017d1828a02fa0d24beb84457a3c4f98c22698aa99eab6f118ed9415df04(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDomainConfigProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f847c9c6c42b0e3da501b48f0ea4bb771b083eb683a86bcbd2fc4dc0ac3a84bd(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__08e235c5fdee02d5f363670f4a096d774bb780c0cd653428d55b9155769dd3ce(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5b8681407c76018b824d3dceb565a38d49c0253cc4920b8b00b3573c0f785bb1(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ff35ee920a5657f8b695d9f9903497a76fa7804d7633ec10dc243d03881bd6d8(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDomainConfig.FunctionListProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0456e8b1708994fffcc0fd6760cec9a4893c1d27fdac268294d8bcbbdf7b0b17(
    *,
    arg_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    arg_value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3dc7aab5676d15be81272bf87d82b7bd0b0c10b8b59d3b3f85a702597356451e(
    *,
    function_args: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDomainConfig.FunctionArgsProperty, typing.Dict[builtins.str, typing.Any]]]]],
    function_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    parent_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__143f541f3167b7fa780e251790b39fb7fd53eda6ae3d49b8c638a5c7fb428a0d(
    *,
    domain_names: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    function_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDomainConfig.FunctionListProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__848d18b862effe65d493698c0fe2b469cc234db0026deca93854c279147f4dfd(
    *,
    cdn_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    check_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    origin_servers: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDomain.OriginServersProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scope: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sources: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosDomain.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    top_level_domain: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
