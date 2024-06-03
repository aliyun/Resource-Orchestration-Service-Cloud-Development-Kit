import abc
import builtins
import datetime
import enum
import typing

import jsii
import publication
import typing_extensions

from typeguard import check_type

from .._jsii import *

import ros_cdk_core as _ros_cdk_core_7adfd82f


class Apis(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apigateway.datasource.Apis",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::ApiGateway::Apis``, which is used to query APIs in API Gateway.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosApis``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-apis
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["ApisProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__75f7c6d2d7f1baa67ef1bf057aeb20d862e0dbe559e5eac248898466f17dcd3d)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrApiIds")
    def attr_api_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ApiIds: The list of The ApiGateway api ids.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrApiIds"))

    @builtins.property
    @jsii.member(jsii_name="attrApis")
    def attr_apis(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Apis: The information about ApiGateway apis.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrApis"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__313cf1eb130f0e167b3ba65829e0e2972548289cd2cb5b6fb623f14e4bac2067)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fa9a383272ea32e6209b38eb1e0296d4b34b298e2aebde8454feb595a6a0eced)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "ApisProps":
        return typing.cast("ApisProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "ApisProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f448d00a5e23a1ae36f5f31acfad2cc9429f42633179692fdb76bbabd3aecba9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__90dbdd2f33d25e46af397ed962d08537c016c0c6d9f6f35aadd76b81f60fe47a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apigateway.datasource.ApisProps",
    jsii_struct_bases=[],
    name_mapping={
        "api_id": "apiId",
        "api_name": "apiName",
        "catalog_id": "catalogId",
        "enable_tag_auth": "enableTagAuth",
        "group_id": "groupId",
        "visibility": "visibility",
    },
)
class ApisProps:
    def __init__(
        self,
        *,
        api_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        api_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        catalog_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_tag_auth: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        visibility: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Apis``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-apis

        :param api_id: Property apiId: ID of the specified API.
        :param api_name: Property apiName: API name (fuzzy matching).
        :param catalog_id: Property catalogId: Catalog number.
        :param enable_tag_auth: Property enableTagAuth: Enable label validation.
        :param group_id: Property groupId: ID of the specified group.
        :param visibility: Property visibility: Whether the API is public.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__54b0bf96cbf53062dc1eb1d9eb3438334e7258d8cf94b7407e50e6392d9c0667)
            check_type(argname="argument api_id", value=api_id, expected_type=type_hints["api_id"])
            check_type(argname="argument api_name", value=api_name, expected_type=type_hints["api_name"])
            check_type(argname="argument catalog_id", value=catalog_id, expected_type=type_hints["catalog_id"])
            check_type(argname="argument enable_tag_auth", value=enable_tag_auth, expected_type=type_hints["enable_tag_auth"])
            check_type(argname="argument group_id", value=group_id, expected_type=type_hints["group_id"])
            check_type(argname="argument visibility", value=visibility, expected_type=type_hints["visibility"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if api_id is not None:
            self._values["api_id"] = api_id
        if api_name is not None:
            self._values["api_name"] = api_name
        if catalog_id is not None:
            self._values["catalog_id"] = catalog_id
        if enable_tag_auth is not None:
            self._values["enable_tag_auth"] = enable_tag_auth
        if group_id is not None:
            self._values["group_id"] = group_id
        if visibility is not None:
            self._values["visibility"] = visibility

    @builtins.property
    def api_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property apiId: ID of the specified API.'''
        result = self._values.get("api_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def api_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property apiName: API name (fuzzy matching).'''
        result = self._values.get("api_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def catalog_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property catalogId: Catalog number.'''
        result = self._values.get("catalog_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_tag_auth(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enableTagAuth: Enable label validation.'''
        result = self._values.get("enable_tag_auth")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property groupId: ID of the specified group.'''
        result = self._values.get("group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def visibility(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property visibility: Whether the API is public.'''
        result = self._values.get("visibility")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ApisProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Apps(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apigateway.datasource.Apps",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::ApiGateway::Apps``, which is used to query applications.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosApps``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-apps
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["AppsProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d4dfb74b8bee8189bd10f5ce6356133cd98de6bd337fd3fb3ba7d78c627d3659)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAppIds")
    def attr_app_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AppIds: The list of The ApiGateway app ids.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAppIds"))

    @builtins.property
    @jsii.member(jsii_name="attrApps")
    def attr_apps(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Apps: The information about ApiGateway apps.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrApps"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fc470767570359c1a87fcac35de2b8b023d260e8229771feee61dd6a5b631940)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a4a0095a11f5f040a75f00f24f7cb641f0f8295833664e82aed2c48f03da7a0f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "AppsProps":
        return typing.cast("AppsProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "AppsProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d566b12f366f9959d44f70f89fea07b4946b259e55b0c82011bbcbce9b3020d1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__750e1c21b254f0bb9221dd6c6d03ac3e44c2cf01dc391630d8cd0b3345d0964c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apigateway.datasource.AppsProps",
    jsii_struct_bases=[],
    name_mapping={"app_id": "appId", "app_owner": "appOwner"},
)
class AppsProps:
    def __init__(
        self,
        *,
        app_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        app_owner: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Apps``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-apps

        :param app_id: Property appId: Unique ID of the app.
        :param app_owner: Property appOwner: Alibaba Cloud account ID of the app owner.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3943db5d718722304df85f606c71c4b482007f8511a913c134c6e977190c27ac)
            check_type(argname="argument app_id", value=app_id, expected_type=type_hints["app_id"])
            check_type(argname="argument app_owner", value=app_owner, expected_type=type_hints["app_owner"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if app_id is not None:
            self._values["app_id"] = app_id
        if app_owner is not None:
            self._values["app_owner"] = app_owner

    @builtins.property
    def app_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property appId: Unique ID of the app.'''
        result = self._values.get("app_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def app_owner(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property appOwner: Alibaba Cloud account ID of the app owner.'''
        result = self._values.get("app_owner")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AppsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Groups(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apigateway.datasource.Groups",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::ApiGateway::Groups``, which is used to query the details of existing API groups.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosGroups``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-groups
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["GroupsProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__39c3b2a6c406e3cb486800c3bbcefc80f6a3dbd33c4d873ef5e16a9ebedc0f33)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrApiGroupIds")
    def attr_api_group_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ApiGroupIds: The list of The ApiGateway group ids.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrApiGroupIds"))

    @builtins.property
    @jsii.member(jsii_name="attrApiGroups")
    def attr_api_groups(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ApiGroups: The information about ApiGateway groups.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrApiGroups"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8fb858ace5ebbbd576627f9e1c21adfd9be768088a46d3d958845977ce00c515)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f40c305a3f262db5da2cebe1ac4ac85ad9d68d02f92d8f41decaca68d5f429c3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "GroupsProps":
        return typing.cast("GroupsProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "GroupsProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__01a859618d25bea68a830025cf9d93f11d6c6d3018a483e5ea1afa46221ddb2b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__63db07488b482bdaf7d657908f6222a7ca8a7b75c653ee3dda319fa1263b34aa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apigateway.datasource.GroupsProps",
    jsii_struct_bases=[],
    name_mapping={
        "group_id": "groupId",
        "group_name": "groupName",
        "instance_id": "instanceId",
        "sort": "sort",
    },
)
class GroupsProps:
    def __init__(
        self,
        *,
        group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sort: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Groups``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-groups

        :param group_id: Property groupId: API group ID.
        :param group_name: Property groupName: Specified keyword of the API group name.
        :param instance_id: Property instanceId: API Gateway Instance ID.
        :param sort: Property sort: Sort.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1a4c18455871acd6c8b3563592670fcef377052e29e2be8a43e8bfe5e365fda9)
            check_type(argname="argument group_id", value=group_id, expected_type=type_hints["group_id"])
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument sort", value=sort, expected_type=type_hints["sort"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if group_id is not None:
            self._values["group_id"] = group_id
        if group_name is not None:
            self._values["group_name"] = group_name
        if instance_id is not None:
            self._values["instance_id"] = instance_id
        if sort is not None:
            self._values["sort"] = sort

    @builtins.property
    def group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property groupId: API group ID.'''
        result = self._values.get("group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property groupName: Specified keyword of the API group name.'''
        result = self._values.get("group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceId: API Gateway Instance ID.'''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sort(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sort: Sort.'''
        result = self._values.get("sort")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "GroupsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Instance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apigateway.datasource.Instance",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::ApiGateway::Instance``, which is used to query the information about an instance.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosInstance``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-instance
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["InstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c3de673b60e2fd5e7c0e0948877048579e88c36d6576ba6d3fc9b6d0b79b2d1a)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAclId")
    def attr_acl_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AclId: Access control ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAclId"))

    @builtins.property
    @jsii.member(jsii_name="attrAclName")
    def attr_acl_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AclName: Access control name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAclName"))

    @builtins.property
    @jsii.member(jsii_name="attrAclStatus")
    def attr_acl_status(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AclStatus: Access control type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAclStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrAclType")
    def attr_acl_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AclType: Access control type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAclType"))

    @builtins.property
    @jsii.member(jsii_name="attrClassicEgressAddress")
    def attr_classic_egress_address(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ClassicEgressAddress: Classic network exit address.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClassicEgressAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CreateTime: Creation time.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrEgressIpv6Enable")
    def attr_egress_ipv6_enable(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute EgressIpv6Enable: Does IPV6 Capability Support.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEgressIpv6Enable"))

    @builtins.property
    @jsii.member(jsii_name="attrExpiredTime")
    def attr_expired_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ExpiredTime: Instance expiration time.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExpiredTime"))

    @builtins.property
    @jsii.member(jsii_name="attrHttpsPolicy")
    def attr_https_policy(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute HttpsPolicy: Https policy.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHttpsPolicy"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceId: Instance id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceName")
    def attr_instance_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceName: Instance name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceName"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceRpsLimit")
    def attr_instance_rps_limit(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceRpsLimit: Instance rps limits.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceRpsLimit"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceSpec")
    def attr_instance_spec(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceSpec: Instance type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceSpec"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceSpecAttributes")
    def attr_instance_spec_attributes(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceSpecAttributes: Instance type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceSpecAttributes"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceType")
    def attr_instance_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceType: Instance type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceType"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetEgressAddress")
    def attr_internet_egress_address(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InternetEgressAddress: Public network exit address.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInternetEgressAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PaymentType: The payment type of the resource.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrSupportIpv6")
    def attr_support_ipv6(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SupportIpv6: Does ipv6 support.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSupportIpv6"))

    @builtins.property
    @jsii.member(jsii_name="attrUserVpcId")
    def attr_user_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute UserVpcId: User's VpcID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUserVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrUserVswitchId")
    def attr_user_vswitch_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute UserVswitchId: DescribeInstances.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUserVswitchId"))

    @builtins.property
    @jsii.member(jsii_name="attrVipTypeList")
    def attr_vip_type_list(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VipTypeList: Vip type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVipTypeList"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcEgressAddress")
    def attr_vpc_egress_address(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VpcEgressAddress: Intranet VPC exit network segment.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcEgressAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcIntranetEnable")
    def attr_vpc_intranet_enable(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VpcIntranetEnable: Whether Vpc allows authorization.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcIntranetEnable"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcOwnerId")
    def attr_vpc_owner_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VpcOwnerId: Vpc licensor ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcOwnerId"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcSlbIntranetEnable")
    def attr_vpc_slb_intranet_enable(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VpcSlbIntranetEnable: Whether the slb of the Vpc supports.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcSlbIntranetEnable"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ZoneId: Zone.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZoneId"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneLocalName")
    def attr_zone_local_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ZoneLocalName: Available area.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZoneLocalName"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__05c44caf385e7f2151412a42fde73033341e076ad850427afab510c98b543e75)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__25f48dbb4a48d59066a42c2f6dbf2aa0d53bcd0980f1d4b91a2adf8330084af8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "InstanceProps":
        return typing.cast("InstanceProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "InstanceProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5e260be58cf769db08165fe8eeb72d22f1d1b558785f61428cf343fc53067dd2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__df8b303a93618287fd119c35fcf97ec155afed49d904a0b97625f0f40a18d703)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apigateway.datasource.InstanceProps",
    jsii_struct_bases=[],
    name_mapping={"instance_id": "instanceId"},
)
class InstanceProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``Instance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-instance

        :param instance_id: Property instanceId: Instance id.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__27d1ab6c71cb5afe06e648d2d481a5d92e9c3a885ec13ffaa70e85736098549e)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
        }

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: Instance id.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Instances(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apigateway.datasource.Instances",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::ApiGateway::Instances``, which is used to query instances.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosInstances``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-instances
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["InstancesProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__98b4551fa3e2c90c6962e67d9e55a8c550a41125e599afac13d0fde3c8818739)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrApiGatewayInstanceIds")
    def attr_api_gateway_instance_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ApiGatewayInstanceIds: The list of The ApiGateway group ids.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrApiGatewayInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrApiGatewayInstances")
    def attr_api_gateway_instances(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ApiGatewayInstances: The information about ApiGateway groups.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrApiGatewayInstances"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__54cf7f2bb1e6475c832d863f5888c4808bd38be99eef95a40dd500032b53539a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8eb790b789169cf300fa0f0a24a3c743442060f4bf6f9f2263f4ddf7ecca984a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "InstancesProps":
        return typing.cast("InstancesProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "InstancesProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1fed452f526f0e8685e762a4430f843560fe78f052c89dabadc0d1aa344547a1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c3847bb4b0389e686efdc8bdab23ce2836b151fa8e2ccb20dd3dcb8139e679d7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apigateway.datasource.InstancesProps",
    jsii_struct_bases=[],
    name_mapping={"instance_id": "instanceId", "language": "language"},
)
class InstancesProps:
    def __init__(
        self,
        *,
        instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        language: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Instances``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-instances

        :param instance_id: Property instanceId: API Gateway Instance ID.
        :param language: Property language: Language Type.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__695868e6d8de21e39d1920ad3579a68fd88c6af229302ed7648dbc0dfcd66427)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument language", value=language, expected_type=type_hints["language"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if instance_id is not None:
            self._values["instance_id"] = instance_id
        if language is not None:
            self._values["language"] = language

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceId: API Gateway Instance ID.'''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def language(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property language: Language Type.'''
        result = self._values.get("language")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstancesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosApis(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apigateway.datasource.RosApis",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::ApiGateway::Apis``, which is used to query APIs in API Gateway.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Apis`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-apis
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosApisProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__93264959b44284e5ba3fa35aec073b82f47bdc4a207e3c35eb591e1ac531923c)
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
            type_hints = typing.get_type_hints(_typecheckingstub__09e5d117954878c0cf5712532d7875613634785857cf031ea883b80b3cc7fde5)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrApiIds")
    def attr_api_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ApiIds: The list of The ApiGateway api ids.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrApiIds"))

    @builtins.property
    @jsii.member(jsii_name="attrApis")
    def attr_apis(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Apis: The information about ApiGateway apis.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrApis"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__029aa2f22b6b5175fada1fe9e8cb927e6d116ce7c4c3371b2ec45a0284867b67)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="apiId")
    def api_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: apiId: ID of the specified API.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "apiId"))

    @api_id.setter
    def api_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__25335f142a21874a1efe1d3e5dec37522bf9c495c1de8404b541b896f2fde8f3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "apiId", value)

    @builtins.property
    @jsii.member(jsii_name="apiName")
    def api_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: apiName: API name (fuzzy matching).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "apiName"))

    @api_name.setter
    def api_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0aa5fb954ac3dfa1bac43cf6282fc5c6665857b5333cf8b4e921ea8553d4bf93)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "apiName", value)

    @builtins.property
    @jsii.member(jsii_name="catalogId")
    def catalog_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: catalogId: Catalog number.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "catalogId"))

    @catalog_id.setter
    def catalog_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__38613789b4e889fc71f20be65ceedea0d31a3c9028b0b610f0b7ad5341abc098)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "catalogId", value)

    @builtins.property
    @jsii.member(jsii_name="enableTagAuth")
    def enable_tag_auth(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enableTagAuth: Enable label validation.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enableTagAuth"))

    @enable_tag_auth.setter
    def enable_tag_auth(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f131ce4df9d12a71923111a1797447bb5df37a2fc5f647d098f0e7fc06276a56)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableTagAuth", value)

    @builtins.property
    @jsii.member(jsii_name="groupId")
    def group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groupId: ID of the specified group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "groupId"))

    @group_id.setter
    def group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__61390830de230e0fd5190982e9f615be58c2ff7793d41a08b22324095927930c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupId", value)

    @builtins.property
    @jsii.member(jsii_name="visibility")
    def visibility(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: visibility: Whether the API is public.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "visibility"))

    @visibility.setter
    def visibility(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e3c44c80f298f6328ad8ec35dbc7e845e6b9760ef0e5a8d21526388a867dd841)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "visibility", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apigateway.datasource.RosApisProps",
    jsii_struct_bases=[],
    name_mapping={
        "api_id": "apiId",
        "api_name": "apiName",
        "catalog_id": "catalogId",
        "enable_tag_auth": "enableTagAuth",
        "group_id": "groupId",
        "visibility": "visibility",
    },
)
class RosApisProps:
    def __init__(
        self,
        *,
        api_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        api_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        catalog_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_tag_auth: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        visibility: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosApis``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-apis

        :param api_id: 
        :param api_name: 
        :param catalog_id: 
        :param enable_tag_auth: 
        :param group_id: 
        :param visibility: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__acdab5bbb00ad7cde94458123eed70bbb97bb0795dae2a1a732ecf5970212906)
            check_type(argname="argument api_id", value=api_id, expected_type=type_hints["api_id"])
            check_type(argname="argument api_name", value=api_name, expected_type=type_hints["api_name"])
            check_type(argname="argument catalog_id", value=catalog_id, expected_type=type_hints["catalog_id"])
            check_type(argname="argument enable_tag_auth", value=enable_tag_auth, expected_type=type_hints["enable_tag_auth"])
            check_type(argname="argument group_id", value=group_id, expected_type=type_hints["group_id"])
            check_type(argname="argument visibility", value=visibility, expected_type=type_hints["visibility"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if api_id is not None:
            self._values["api_id"] = api_id
        if api_name is not None:
            self._values["api_name"] = api_name
        if catalog_id is not None:
            self._values["catalog_id"] = catalog_id
        if enable_tag_auth is not None:
            self._values["enable_tag_auth"] = enable_tag_auth
        if group_id is not None:
            self._values["group_id"] = group_id
        if visibility is not None:
            self._values["visibility"] = visibility

    @builtins.property
    def api_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: apiId: ID of the specified API.
        '''
        result = self._values.get("api_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def api_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: apiName: API name (fuzzy matching).
        '''
        result = self._values.get("api_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def catalog_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: catalogId: Catalog number.
        '''
        result = self._values.get("catalog_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_tag_auth(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enableTagAuth: Enable label validation.
        '''
        result = self._values.get("enable_tag_auth")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groupId: ID of the specified group.
        '''
        result = self._values.get("group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def visibility(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: visibility: Whether the API is public.
        '''
        result = self._values.get("visibility")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosApisProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosApps(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apigateway.datasource.RosApps",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::ApiGateway::Apps``, which is used to query applications.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Apps`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-apps
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAppsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7ec17926328936ae8d82a0a8ef965ef9ad2ad0fab09d139d1768fc1798199087)
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
            type_hints = typing.get_type_hints(_typecheckingstub__2718f94ca585dd891671c24ecddb3d1ebbe5615648cc6adcfd823506c808a5be)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAppIds")
    def attr_app_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AppIds: The list of The ApiGateway app ids.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAppIds"))

    @builtins.property
    @jsii.member(jsii_name="attrApps")
    def attr_apps(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Apps: The information about ApiGateway apps.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrApps"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__fa72c8ae69a74809894bbc3a8c7d9852611385091d65462454188a5547dd50c4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="appId")
    def app_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: appId: Unique ID of the app.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "appId"))

    @app_id.setter
    def app_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__577c4b0694ee735ee25c5aed0ef5ab2e9bc15791027497d688ac2671ecc65347)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "appId", value)

    @builtins.property
    @jsii.member(jsii_name="appOwner")
    def app_owner(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: appOwner: Alibaba Cloud account ID of the app owner.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "appOwner"))

    @app_owner.setter
    def app_owner(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3a45037dd13c52c3236744efa1efbc3c047032f2d5093972ce70600418b503fc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "appOwner", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apigateway.datasource.RosAppsProps",
    jsii_struct_bases=[],
    name_mapping={"app_id": "appId", "app_owner": "appOwner"},
)
class RosAppsProps:
    def __init__(
        self,
        *,
        app_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        app_owner: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosApps``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-apps

        :param app_id: 
        :param app_owner: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__08135308dfa5a81fa4b1cbac0758d0fb6ab386d3579797a0a310823467a374d8)
            check_type(argname="argument app_id", value=app_id, expected_type=type_hints["app_id"])
            check_type(argname="argument app_owner", value=app_owner, expected_type=type_hints["app_owner"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if app_id is not None:
            self._values["app_id"] = app_id
        if app_owner is not None:
            self._values["app_owner"] = app_owner

    @builtins.property
    def app_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: appId: Unique ID of the app.
        '''
        result = self._values.get("app_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def app_owner(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: appOwner: Alibaba Cloud account ID of the app owner.
        '''
        result = self._values.get("app_owner")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAppsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosGroups(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apigateway.datasource.RosGroups",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::ApiGateway::Groups``, which is used to query the details of existing API groups.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Groups`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-groups
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosGroupsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__069d727a309bd0c5ef80d3693bdd3780b81eec44626e2bf5693c6da22d430c39)
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
            type_hints = typing.get_type_hints(_typecheckingstub__ebe3962eb3a7d5cb32cbadeaa69fd3110f769217e8e57f7f16c2d190e6814f38)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrApiGroupIds")
    def attr_api_group_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ApiGroupIds: The list of The ApiGateway group ids.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrApiGroupIds"))

    @builtins.property
    @jsii.member(jsii_name="attrApiGroups")
    def attr_api_groups(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ApiGroups: The information about ApiGateway groups.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrApiGroups"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__91633f1929ad12bf61c96e13e8a6f11651cff14b10dd6a450e09ffa2be79dc84)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="groupId")
    def group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groupId: API group ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "groupId"))

    @group_id.setter
    def group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__af96d4d65241fc1ca254e01195a33e5c80370ecbe8c2d512b427501e6acbc9c2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupId", value)

    @builtins.property
    @jsii.member(jsii_name="groupName")
    def group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groupName: Specified keyword of the API group name.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "groupName"))

    @group_name.setter
    def group_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0344095bcc9119369b19536f079e1b039ab2e4039086ffcd6c78ee0d7c186788)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupName", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceId: API Gateway Instance ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4e3f788f99b8ba906228a6335c2f4c46b9739cd2f1d9c21d01ae0c743485ce57)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="sort")
    def sort(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sort: Sort.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sort"))

    @sort.setter
    def sort(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f2278ea5581543b5fb6f4277a71e6331e58ccfab33516c8bc509bd67fa3881cf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sort", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apigateway.datasource.RosGroupsProps",
    jsii_struct_bases=[],
    name_mapping={
        "group_id": "groupId",
        "group_name": "groupName",
        "instance_id": "instanceId",
        "sort": "sort",
    },
)
class RosGroupsProps:
    def __init__(
        self,
        *,
        group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sort: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosGroups``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-groups

        :param group_id: 
        :param group_name: 
        :param instance_id: 
        :param sort: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4c0b994bf4c49f6ddf85ebc417a7cc003876bde493f5e5b4342fddc2f2a0455b)
            check_type(argname="argument group_id", value=group_id, expected_type=type_hints["group_id"])
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument sort", value=sort, expected_type=type_hints["sort"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if group_id is not None:
            self._values["group_id"] = group_id
        if group_name is not None:
            self._values["group_name"] = group_name
        if instance_id is not None:
            self._values["instance_id"] = instance_id
        if sort is not None:
            self._values["sort"] = sort

    @builtins.property
    def group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groupId: API group ID.
        '''
        result = self._values.get("group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groupName: Specified keyword of the API group name.
        '''
        result = self._values.get("group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceId: API Gateway Instance ID.
        '''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sort(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sort: Sort.
        '''
        result = self._values.get("sort")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosGroupsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstance(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apigateway.datasource.RosInstance",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::ApiGateway::Instance``, which is used to query the information about an instance.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Instance`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-instance
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ce41fcc59f5e4c41fe0e6b673c3b58461637efb3453964683a1cd290e5e6e69a)
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
            type_hints = typing.get_type_hints(_typecheckingstub__3245edbf050702aed32bfa3c66838d5952dbf2c696276ca70c1aa47ebc75414e)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAclId")
    def attr_acl_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AclId: Access control ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAclId"))

    @builtins.property
    @jsii.member(jsii_name="attrAclName")
    def attr_acl_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AclName: Access control name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAclName"))

    @builtins.property
    @jsii.member(jsii_name="attrAclStatus")
    def attr_acl_status(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AclStatus: Access control type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAclStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrAclType")
    def attr_acl_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AclType: Access control type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAclType"))

    @builtins.property
    @jsii.member(jsii_name="attrClassicEgressAddress")
    def attr_classic_egress_address(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ClassicEgressAddress: Classic network exit address.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClassicEgressAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: Creation time.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrEgressIpv6Enable")
    def attr_egress_ipv6_enable(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EgressIpv6Enable: Does IPV6 Capability Support.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEgressIpv6Enable"))

    @builtins.property
    @jsii.member(jsii_name="attrExpiredTime")
    def attr_expired_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ExpiredTime: Instance expiration time.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExpiredTime"))

    @builtins.property
    @jsii.member(jsii_name="attrHttpsPolicy")
    def attr_https_policy(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HttpsPolicy: Https policy.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHttpsPolicy"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceId: Instance id.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceName")
    def attr_instance_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceName: Instance name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceName"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceRpsLimit")
    def attr_instance_rps_limit(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceRpsLimit: Instance rps limits.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceRpsLimit"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceSpec")
    def attr_instance_spec(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceSpec: Instance type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceSpec"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceSpecAttributes")
    def attr_instance_spec_attributes(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceSpecAttributes: Instance type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceSpecAttributes"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceType")
    def attr_instance_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceType: Instance type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceType"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetEgressAddress")
    def attr_internet_egress_address(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InternetEgressAddress: Public network exit address.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInternetEgressAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PaymentType: The payment type of the resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrSupportIpv6")
    def attr_support_ipv6(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SupportIpv6: Does ipv6 support.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSupportIpv6"))

    @builtins.property
    @jsii.member(jsii_name="attrUserVpcId")
    def attr_user_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UserVpcId: User's VpcID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUserVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrUserVswitchId")
    def attr_user_vswitch_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UserVswitchId: DescribeInstances.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUserVswitchId"))

    @builtins.property
    @jsii.member(jsii_name="attrVipTypeList")
    def attr_vip_type_list(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VipTypeList: Vip type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVipTypeList"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcEgressAddress")
    def attr_vpc_egress_address(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcEgressAddress: Intranet VPC exit network segment.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcEgressAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcIntranetEnable")
    def attr_vpc_intranet_enable(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcIntranetEnable: Whether Vpc allows authorization.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcIntranetEnable"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcOwnerId")
    def attr_vpc_owner_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcOwnerId: Vpc licensor ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcOwnerId"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcSlbIntranetEnable")
    def attr_vpc_slb_intranet_enable(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcSlbIntranetEnable: Whether the slb of the Vpc supports.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcSlbIntranetEnable"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ZoneId: Zone.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZoneId"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneLocalName")
    def attr_zone_local_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ZoneLocalName: Available area.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZoneLocalName"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__3c6add7122b49982517eabdd1028d8e8541ce05bb96aded4075e12b0268cb492)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: Instance id.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d1fbd51e605e7fc3991afe0793c05d310636f0243fc164a2a67fadd6bc11794c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apigateway.datasource.RosInstanceProps",
    jsii_struct_bases=[],
    name_mapping={"instance_id": "instanceId"},
)
class RosInstanceProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosInstance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-instance

        :param instance_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d1c4fef246abaa2085f747a3fd01829c0b04f1dd16474943f353fa4e48560ac1)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
        }

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: Instance id.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstances(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-apigateway.datasource.RosInstances",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::ApiGateway::Instances``, which is used to query instances.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Instances`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-instances
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosInstancesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__98195a24f229c92198f3f5928459aea2b20ccef3708c5a9783d645be3e129275)
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
            type_hints = typing.get_type_hints(_typecheckingstub__4f506bb48d6f830f53d126fde2eb3df853b67cdcf1f6baa4e36f08c174b4149a)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrApiGatewayInstanceIds")
    def attr_api_gateway_instance_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ApiGatewayInstanceIds: The list of The ApiGateway group ids.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrApiGatewayInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrApiGatewayInstances")
    def attr_api_gateway_instances(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ApiGatewayInstances: The information about ApiGateway groups.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrApiGatewayInstances"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__b969eec0f8ce9ef2033b056046cad252e1d9f177dd9084e18ab39882bc68ac47)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceId: API Gateway Instance ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__788ae852d0fcd00a1386d6979d6a399703b0c048eee69b5f2d7e8c490da3c1bd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="language")
    def language(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: language: Language Type.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "language"))

    @language.setter
    def language(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dbfbad24979fb53ede10b04a0fd6ae2c2841e6486f61447951a73f812f5549b0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "language", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-apigateway.datasource.RosInstancesProps",
    jsii_struct_bases=[],
    name_mapping={"instance_id": "instanceId", "language": "language"},
)
class RosInstancesProps:
    def __init__(
        self,
        *,
        instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        language: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosInstances``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-instances

        :param instance_id: 
        :param language: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d4a87303f079720f42dfe1e4afd2f7e8ad5f5cdad8477387de19aa606c6c37a8)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument language", value=language, expected_type=type_hints["language"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if instance_id is not None:
            self._values["instance_id"] = instance_id
        if language is not None:
            self._values["language"] = language

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceId: API Gateway Instance ID.
        '''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def language(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: language: Language Type.
        '''
        result = self._values.get("language")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstancesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Apis",
    "ApisProps",
    "Apps",
    "AppsProps",
    "Groups",
    "GroupsProps",
    "Instance",
    "InstanceProps",
    "Instances",
    "InstancesProps",
    "RosApis",
    "RosApisProps",
    "RosApps",
    "RosAppsProps",
    "RosGroups",
    "RosGroupsProps",
    "RosInstance",
    "RosInstanceProps",
    "RosInstances",
    "RosInstancesProps",
]

publication.publish()

def _typecheckingstub__75f7c6d2d7f1baa67ef1bf057aeb20d862e0dbe559e5eac248898466f17dcd3d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[ApisProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__313cf1eb130f0e167b3ba65829e0e2972548289cd2cb5b6fb623f14e4bac2067(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fa9a383272ea32e6209b38eb1e0296d4b34b298e2aebde8454feb595a6a0eced(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f448d00a5e23a1ae36f5f31acfad2cc9429f42633179692fdb76bbabd3aecba9(
    value: ApisProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__90dbdd2f33d25e46af397ed962d08537c016c0c6d9f6f35aadd76b81f60fe47a(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__54b0bf96cbf53062dc1eb1d9eb3438334e7258d8cf94b7407e50e6392d9c0667(
    *,
    api_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    api_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    catalog_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_tag_auth: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    visibility: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d4dfb74b8bee8189bd10f5ce6356133cd98de6bd337fd3fb3ba7d78c627d3659(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[AppsProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fc470767570359c1a87fcac35de2b8b023d260e8229771feee61dd6a5b631940(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a4a0095a11f5f040a75f00f24f7cb641f0f8295833664e82aed2c48f03da7a0f(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d566b12f366f9959d44f70f89fea07b4946b259e55b0c82011bbcbce9b3020d1(
    value: AppsProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__750e1c21b254f0bb9221dd6c6d03ac3e44c2cf01dc391630d8cd0b3345d0964c(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3943db5d718722304df85f606c71c4b482007f8511a913c134c6e977190c27ac(
    *,
    app_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    app_owner: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__39c3b2a6c406e3cb486800c3bbcefc80f6a3dbd33c4d873ef5e16a9ebedc0f33(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[GroupsProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8fb858ace5ebbbd576627f9e1c21adfd9be768088a46d3d958845977ce00c515(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f40c305a3f262db5da2cebe1ac4ac85ad9d68d02f92d8f41decaca68d5f429c3(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__01a859618d25bea68a830025cf9d93f11d6c6d3018a483e5ea1afa46221ddb2b(
    value: GroupsProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__63db07488b482bdaf7d657908f6222a7ca8a7b75c653ee3dda319fa1263b34aa(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1a4c18455871acd6c8b3563592670fcef377052e29e2be8a43e8bfe5e365fda9(
    *,
    group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sort: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c3de673b60e2fd5e7c0e0948877048579e88c36d6576ba6d3fc9b6d0b79b2d1a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[InstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__05c44caf385e7f2151412a42fde73033341e076ad850427afab510c98b543e75(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__25f48dbb4a48d59066a42c2f6dbf2aa0d53bcd0980f1d4b91a2adf8330084af8(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5e260be58cf769db08165fe8eeb72d22f1d1b558785f61428cf343fc53067dd2(
    value: InstanceProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__df8b303a93618287fd119c35fcf97ec155afed49d904a0b97625f0f40a18d703(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__27d1ab6c71cb5afe06e648d2d481a5d92e9c3a885ec13ffaa70e85736098549e(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__98b4551fa3e2c90c6962e67d9e55a8c550a41125e599afac13d0fde3c8818739(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[InstancesProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__54cf7f2bb1e6475c832d863f5888c4808bd38be99eef95a40dd500032b53539a(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8eb790b789169cf300fa0f0a24a3c743442060f4bf6f9f2263f4ddf7ecca984a(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1fed452f526f0e8685e762a4430f843560fe78f052c89dabadc0d1aa344547a1(
    value: InstancesProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c3847bb4b0389e686efdc8bdab23ce2836b151fa8e2ccb20dd3dcb8139e679d7(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__695868e6d8de21e39d1920ad3579a68fd88c6af229302ed7648dbc0dfcd66427(
    *,
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    language: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__93264959b44284e5ba3fa35aec073b82f47bdc4a207e3c35eb591e1ac531923c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosApisProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__09e5d117954878c0cf5712532d7875613634785857cf031ea883b80b3cc7fde5(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__029aa2f22b6b5175fada1fe9e8cb927e6d116ce7c4c3371b2ec45a0284867b67(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__25335f142a21874a1efe1d3e5dec37522bf9c495c1de8404b541b896f2fde8f3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0aa5fb954ac3dfa1bac43cf6282fc5c6665857b5333cf8b4e921ea8553d4bf93(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__38613789b4e889fc71f20be65ceedea0d31a3c9028b0b610f0b7ad5341abc098(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f131ce4df9d12a71923111a1797447bb5df37a2fc5f647d098f0e7fc06276a56(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__61390830de230e0fd5190982e9f615be58c2ff7793d41a08b22324095927930c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e3c44c80f298f6328ad8ec35dbc7e845e6b9760ef0e5a8d21526388a867dd841(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__acdab5bbb00ad7cde94458123eed70bbb97bb0795dae2a1a732ecf5970212906(
    *,
    api_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    api_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    catalog_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_tag_auth: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    visibility: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7ec17926328936ae8d82a0a8ef965ef9ad2ad0fab09d139d1768fc1798199087(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAppsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2718f94ca585dd891671c24ecddb3d1ebbe5615648cc6adcfd823506c808a5be(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fa72c8ae69a74809894bbc3a8c7d9852611385091d65462454188a5547dd50c4(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__577c4b0694ee735ee25c5aed0ef5ab2e9bc15791027497d688ac2671ecc65347(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3a45037dd13c52c3236744efa1efbc3c047032f2d5093972ce70600418b503fc(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__08135308dfa5a81fa4b1cbac0758d0fb6ab386d3579797a0a310823467a374d8(
    *,
    app_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    app_owner: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__069d727a309bd0c5ef80d3693bdd3780b81eec44626e2bf5693c6da22d430c39(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosGroupsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ebe3962eb3a7d5cb32cbadeaa69fd3110f769217e8e57f7f16c2d190e6814f38(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__91633f1929ad12bf61c96e13e8a6f11651cff14b10dd6a450e09ffa2be79dc84(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__af96d4d65241fc1ca254e01195a33e5c80370ecbe8c2d512b427501e6acbc9c2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0344095bcc9119369b19536f079e1b039ab2e4039086ffcd6c78ee0d7c186788(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4e3f788f99b8ba906228a6335c2f4c46b9739cd2f1d9c21d01ae0c743485ce57(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f2278ea5581543b5fb6f4277a71e6331e58ccfab33516c8bc509bd67fa3881cf(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4c0b994bf4c49f6ddf85ebc417a7cc003876bde493f5e5b4342fddc2f2a0455b(
    *,
    group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sort: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ce41fcc59f5e4c41fe0e6b673c3b58461637efb3453964683a1cd290e5e6e69a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3245edbf050702aed32bfa3c66838d5952dbf2c696276ca70c1aa47ebc75414e(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3c6add7122b49982517eabdd1028d8e8541ce05bb96aded4075e12b0268cb492(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d1fbd51e605e7fc3991afe0793c05d310636f0243fc164a2a67fadd6bc11794c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d1c4fef246abaa2085f747a3fd01829c0b04f1dd16474943f353fa4e48560ac1(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__98195a24f229c92198f3f5928459aea2b20ccef3708c5a9783d645be3e129275(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInstancesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4f506bb48d6f830f53d126fde2eb3df853b67cdcf1f6baa4e36f08c174b4149a(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b969eec0f8ce9ef2033b056046cad252e1d9f177dd9084e18ab39882bc68ac47(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__788ae852d0fcd00a1386d6979d6a399703b0c048eee69b5f2d7e8c490da3c1bd(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dbfbad24979fb53ede10b04a0fd6ae2c2841e6486f61447951a73f812f5549b0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d4a87303f079720f42dfe1e4afd2f7e8ad5f5cdad8477387de19aa606c6c37a8(
    *,
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    language: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
