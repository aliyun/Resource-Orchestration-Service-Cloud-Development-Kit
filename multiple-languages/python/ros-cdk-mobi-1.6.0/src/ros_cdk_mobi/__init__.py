'''
## Aliyun ROS MOBI Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as MOBI from '@alicloud/ros-cdk-mobi';
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
    jsii_type="@alicloud/ros-cdk-mobi.AppProps",
    jsii_struct_bases=[],
    name_mapping={
        "app_icon": "appIcon",
        "app_name": "appName",
        "app_workspace_id": "appWorkspaceId",
        "template": "template",
        "app_description": "appDescription",
        "app_type": "appType",
    },
)
class AppProps:
    def __init__(
        self,
        *,
        app_icon: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        app_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        app_workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        template: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosApp.TemplateProperty", typing.Dict[builtins.str, typing.Any]]],
        app_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        app_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``App``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mobi-app

        :param app_icon: Property appIcon: Application icon label, The system provides an icon by default, which is given in the form of a label. The default value is -1.
        :param app_name: Property appName: The application name.
        :param app_workspace_id: Property appWorkspaceId: Workspace ID of application, The application belongs to the workspace.
        :param template: Property template: Application Template.
        :param app_description: Property appDescription: Description of application.
        :param app_type: Property appType: The application type. Web applications and Copilot applications are supported. - **Web**:Web application. - **Copilot**:Copilot application.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c9ad8a6cc693afde6d811b0455c0d927b41da952ab9ae29dcb5824858c48ac8c)
            check_type(argname="argument app_icon", value=app_icon, expected_type=type_hints["app_icon"])
            check_type(argname="argument app_name", value=app_name, expected_type=type_hints["app_name"])
            check_type(argname="argument app_workspace_id", value=app_workspace_id, expected_type=type_hints["app_workspace_id"])
            check_type(argname="argument template", value=template, expected_type=type_hints["template"])
            check_type(argname="argument app_description", value=app_description, expected_type=type_hints["app_description"])
            check_type(argname="argument app_type", value=app_type, expected_type=type_hints["app_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "app_icon": app_icon,
            "app_name": app_name,
            "app_workspace_id": app_workspace_id,
            "template": template,
        }
        if app_description is not None:
            self._values["app_description"] = app_description
        if app_type is not None:
            self._values["app_type"] = app_type

    @builtins.property
    def app_icon(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property appIcon: Application icon label, The system provides an icon by default, which is given in the form of a label.

        The default value is -1.
        '''
        result = self._values.get("app_icon")
        assert result is not None, "Required property 'app_icon' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def app_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property appName: The application name.'''
        result = self._values.get("app_name")
        assert result is not None, "Required property 'app_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def app_workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property appWorkspaceId: Workspace ID of application, The application belongs to the workspace.'''
        result = self._values.get("app_workspace_id")
        assert result is not None, "Required property 'app_workspace_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def template(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosApp.TemplateProperty"]:
        '''Property template: Application Template.'''
        result = self._values.get("template")
        assert result is not None, "Required property 'template' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosApp.TemplateProperty"], result)

    @builtins.property
    def app_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property appDescription: Description of application.'''
        result = self._values.get("app_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def app_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property appType: The application type.

        Web applications and Copilot applications are supported.

        - **Web**:Web application.
        - **Copilot**:Copilot application.
        '''
        result = self._values.get("app_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AppProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-mobi.IApp")
class IApp(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``App``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAppDescription")
    def attr_app_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AppDescription: Description of application.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAppIcon")
    def attr_app_icon(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AppIcon: Application icon label, The system provides an icon by default, which is given in the form of a label.

        The default value is -1.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAppId")
    def attr_app_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AppId: Application ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAppName")
    def attr_app_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AppName: The application name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAppType")
    def attr_app_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AppType: The application type.

        Web applications and Copilot applications are supported.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAppWorkspaceId")
    def attr_app_workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AppWorkspaceId: Workspace ID of application, The application belongs to the workspace.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: Create time of application.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrModifiedTime")
    def attr_modified_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ModifiedTime: Modified time of application.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AppProps:
        ...


class _IAppProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``App``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-mobi.IApp"

    @builtins.property
    @jsii.member(jsii_name="attrAppDescription")
    def attr_app_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AppDescription: Description of application.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAppDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrAppIcon")
    def attr_app_icon(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AppIcon: Application icon label, The system provides an icon by default, which is given in the form of a label.

        The default value is -1.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAppIcon"))

    @builtins.property
    @jsii.member(jsii_name="attrAppId")
    def attr_app_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AppId: Application ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAppId"))

    @builtins.property
    @jsii.member(jsii_name="attrAppName")
    def attr_app_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AppName: The application name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAppName"))

    @builtins.property
    @jsii.member(jsii_name="attrAppType")
    def attr_app_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AppType: The application type.

        Web applications and Copilot applications are supported.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAppType"))

    @builtins.property
    @jsii.member(jsii_name="attrAppWorkspaceId")
    def attr_app_workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AppWorkspaceId: Workspace ID of application, The application belongs to the workspace.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAppWorkspaceId"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: Create time of application.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrModifiedTime")
    def attr_modified_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ModifiedTime: Modified time of application.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrModifiedTime"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AppProps:
        return typing.cast(AppProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IApp).__jsii_proxy_class__ = lambda : _IAppProxy


class RosApp(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mobi.RosApp",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::MOBI::App``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``App`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mobi-app
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAppProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__11ae5d13f503727997fd397f5f889d290a28b3d832a60588ff1118c9fbc869e1)
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
            type_hints = typing.get_type_hints(_typecheckingstub__ee52c9ee5063cef43d90445727d744ad197cc7137b1b265f314cadd38ad073cc)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAppDescription")
    def attr_app_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AppDescription: Description of application.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAppDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrAppIcon")
    def attr_app_icon(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AppIcon: Application icon label, The system provides an icon by default, which is given in the form of a label. The default value is -1.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAppIcon"))

    @builtins.property
    @jsii.member(jsii_name="attrAppId")
    def attr_app_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AppId: Application ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAppId"))

    @builtins.property
    @jsii.member(jsii_name="attrAppName")
    def attr_app_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AppName: The application name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAppName"))

    @builtins.property
    @jsii.member(jsii_name="attrAppType")
    def attr_app_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AppType: The application type. Web applications and Copilot applications are supported.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAppType"))

    @builtins.property
    @jsii.member(jsii_name="attrAppWorkspaceId")
    def attr_app_workspace_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AppWorkspaceId: Workspace ID of application, The application belongs to the workspace.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAppWorkspaceId"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: Create time of application.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrModifiedTime")
    def attr_modified_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ModifiedTime: Modified time of application.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrModifiedTime"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="appIcon")
    def app_icon(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: appIcon: Application icon label, The system provides an icon by default, which is given in the form of a label. The default value is -1.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "appIcon"))

    @app_icon.setter
    def app_icon(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8e51aba705a89681cb856458263721cbd5d98071bd5c2feb6d8f853fbf66add0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "appIcon", value)

    @builtins.property
    @jsii.member(jsii_name="appName")
    def app_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: appName: The application name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "appName"))

    @app_name.setter
    def app_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d3334645a17ba87aebebec49c22930d606100dadc0aba29d8ec709e344828102)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "appName", value)

    @builtins.property
    @jsii.member(jsii_name="appWorkspaceId")
    def app_workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: appWorkspaceId: Workspace ID of application, The application belongs to the workspace.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "appWorkspaceId"))

    @app_workspace_id.setter
    def app_workspace_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__febd4d4055dcfafe9f04a5f99be7e0b95873aabaae932ef55b4ddf5a47eab476)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "appWorkspaceId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__53b27a7875136a2400ef6360b8bf82ce2a8c3a820afe3288683176d56736d85d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="template")
    def template(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosApp.TemplateProperty"]:
        '''
        :Property: template: Application Template.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosApp.TemplateProperty"], jsii.get(self, "template"))

    @template.setter
    def template(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosApp.TemplateProperty"],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3fec386c5f6c140cb1237b047b3427b90a10101ea77b2da7bc6dc35ff3b6a5aa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "template", value)

    @builtins.property
    @jsii.member(jsii_name="appDescription")
    def app_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: appDescription: Description of application.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "appDescription"))

    @app_description.setter
    def app_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2d4ea744c2c4065ae08c0a210db2339463302a0ada91b5956097768f0ef86af7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "appDescription", value)

    @builtins.property
    @jsii.member(jsii_name="appType")
    def app_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        appType: The application type. Web applications and Copilot applications are supported.

        - **Web**:Web application.
        - **Copilot**:Copilot application.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "appType"))

    @app_type.setter
    def app_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a4e60671511445f0a22689d5da2876e081ff33cbbb4227e93b8d4560c0bb498f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "appType", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-mobi.RosApp.TemplateProperty",
        jsii_struct_bases=[],
        name_mapping={
            "connections_content": "connectionsContent",
            "template_id": "templateId",
            "actual_parameters": "actualParameters",
        },
    )
    class TemplateProperty:
        def __init__(
            self,
            *,
            connections_content: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            template_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            actual_parameters: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param connections_content: 
            :param template_id: 
            :param actual_parameters: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__29295a515839aa695269a32983ce4f09bf181187c7b0fdf7dacbbb12ee19ec36)
                check_type(argname="argument connections_content", value=connections_content, expected_type=type_hints["connections_content"])
                check_type(argname="argument template_id", value=template_id, expected_type=type_hints["template_id"])
                check_type(argname="argument actual_parameters", value=actual_parameters, expected_type=type_hints["actual_parameters"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "connections_content": connections_content,
                "template_id": template_id,
            }
            if actual_parameters is not None:
                self._values["actual_parameters"] = actual_parameters

        @builtins.property
        def connections_content(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            connectionsContent: Connector configuration. When creating an application, you need to rely on connectors to integrate external systems and services.
            The connector magic pen platform provides a wealth of connectors, such as MySQL connectors, HTTP connectors, and hundreds of application connectors.
            Take the Enterprise official website template as an example, the MySQL Connector depends on, so you need to replace the MySQL connection information in the following string.
            '''
            result = self._values.get("connections_content")
            assert result is not None, "Required property 'connections_content' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def template_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: templateId: The application Template number. For specific templates, you can view all templates in the template market on the product console. The product console address is https://mobinext.console.aliyun.com.
            '''
            result = self._values.get("template_id")
            assert result is not None, "Required property 'template_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def actual_parameters(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: actualParameters: Actual Parameters. Take the Enterprise official website template as an example, you do not need to fill in this parameter.
            '''
            result = self._values.get("actual_parameters")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TemplateProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mobi.RosAppProps",
    jsii_struct_bases=[],
    name_mapping={
        "app_icon": "appIcon",
        "app_name": "appName",
        "app_workspace_id": "appWorkspaceId",
        "template": "template",
        "app_description": "appDescription",
        "app_type": "appType",
    },
)
class RosAppProps:
    def __init__(
        self,
        *,
        app_icon: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        app_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        app_workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        template: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosApp.TemplateProperty, typing.Dict[builtins.str, typing.Any]]],
        app_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        app_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosApp``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mobi-app

        :param app_icon: 
        :param app_name: 
        :param app_workspace_id: 
        :param template: 
        :param app_description: 
        :param app_type: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f75599181f74f6d99f5a683c6965d73ac8ff09228c220e952400a3c25cd27bc2)
            check_type(argname="argument app_icon", value=app_icon, expected_type=type_hints["app_icon"])
            check_type(argname="argument app_name", value=app_name, expected_type=type_hints["app_name"])
            check_type(argname="argument app_workspace_id", value=app_workspace_id, expected_type=type_hints["app_workspace_id"])
            check_type(argname="argument template", value=template, expected_type=type_hints["template"])
            check_type(argname="argument app_description", value=app_description, expected_type=type_hints["app_description"])
            check_type(argname="argument app_type", value=app_type, expected_type=type_hints["app_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "app_icon": app_icon,
            "app_name": app_name,
            "app_workspace_id": app_workspace_id,
            "template": template,
        }
        if app_description is not None:
            self._values["app_description"] = app_description
        if app_type is not None:
            self._values["app_type"] = app_type

    @builtins.property
    def app_icon(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: appIcon: Application icon label, The system provides an icon by default, which is given in the form of a label. The default value is -1.
        '''
        result = self._values.get("app_icon")
        assert result is not None, "Required property 'app_icon' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def app_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: appName: The application name.
        '''
        result = self._values.get("app_name")
        assert result is not None, "Required property 'app_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def app_workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: appWorkspaceId: Workspace ID of application, The application belongs to the workspace.
        '''
        result = self._values.get("app_workspace_id")
        assert result is not None, "Required property 'app_workspace_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def template(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosApp.TemplateProperty]:
        '''
        :Property: template: Application Template.
        '''
        result = self._values.get("template")
        assert result is not None, "Required property 'template' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosApp.TemplateProperty], result)

    @builtins.property
    def app_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: appDescription: Description of application.
        '''
        result = self._values.get("app_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def app_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        appType: The application type. Web applications and Copilot applications are supported.

        - **Web**:Web application.
        - **Copilot**:Copilot application.
        '''
        result = self._values.get("app_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAppProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IApp)
class App(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mobi.App",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::MOBI::App``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosApp``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mobi-app
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[AppProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b3e491ffea7a48ea17718ec5c20b5dce3b80da20eb35169490c820faa0ac7bf6)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAppDescription")
    def attr_app_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AppDescription: Description of application.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAppDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrAppIcon")
    def attr_app_icon(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AppIcon: Application icon label, The system provides an icon by default, which is given in the form of a label.

        The default value is -1.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAppIcon"))

    @builtins.property
    @jsii.member(jsii_name="attrAppId")
    def attr_app_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AppId: Application ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAppId"))

    @builtins.property
    @jsii.member(jsii_name="attrAppName")
    def attr_app_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AppName: The application name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAppName"))

    @builtins.property
    @jsii.member(jsii_name="attrAppType")
    def attr_app_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AppType: The application type.

        Web applications and Copilot applications are supported.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAppType"))

    @builtins.property
    @jsii.member(jsii_name="attrAppWorkspaceId")
    def attr_app_workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AppWorkspaceId: Workspace ID of application, The application belongs to the workspace.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAppWorkspaceId"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: Create time of application.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrModifiedTime")
    def attr_modified_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ModifiedTime: Modified time of application.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrModifiedTime"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AppProps:
        return typing.cast(AppProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6e917b3ed2e072993749b4ec1d95a186838166b2650cc692eaa294f0bb0da76b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2550d3dd88a05d5756e8ef285960c5e3f04467b3fe7da69a4e131bc62bc441da)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c0a4e71699323256af12545c286a0044f196204a06d2514f99ee6d5980bf6f29)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "App",
    "AppProps",
    "IApp",
    "RosApp",
    "RosAppProps",
    "datasource",
]

publication.publish()

# Loading modules to ensure their types are registered with the jsii runtime library
from . import datasource

def _typecheckingstub__c9ad8a6cc693afde6d811b0455c0d927b41da952ab9ae29dcb5824858c48ac8c(
    *,
    app_icon: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    app_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    app_workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    template: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosApp.TemplateProperty, typing.Dict[builtins.str, typing.Any]]],
    app_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    app_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__11ae5d13f503727997fd397f5f889d290a28b3d832a60588ff1118c9fbc869e1(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAppProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ee52c9ee5063cef43d90445727d744ad197cc7137b1b265f314cadd38ad073cc(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8e51aba705a89681cb856458263721cbd5d98071bd5c2feb6d8f853fbf66add0(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d3334645a17ba87aebebec49c22930d606100dadc0aba29d8ec709e344828102(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__febd4d4055dcfafe9f04a5f99be7e0b95873aabaae932ef55b4ddf5a47eab476(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__53b27a7875136a2400ef6360b8bf82ce2a8c3a820afe3288683176d56736d85d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3fec386c5f6c140cb1237b047b3427b90a10101ea77b2da7bc6dc35ff3b6a5aa(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosApp.TemplateProperty],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2d4ea744c2c4065ae08c0a210db2339463302a0ada91b5956097768f0ef86af7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a4e60671511445f0a22689d5da2876e081ff33cbbb4227e93b8d4560c0bb498f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__29295a515839aa695269a32983ce4f09bf181187c7b0fdf7dacbbb12ee19ec36(
    *,
    connections_content: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    template_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    actual_parameters: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f75599181f74f6d99f5a683c6965d73ac8ff09228c220e952400a3c25cd27bc2(
    *,
    app_icon: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    app_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    app_workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    template: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosApp.TemplateProperty, typing.Dict[builtins.str, typing.Any]]],
    app_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    app_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b3e491ffea7a48ea17718ec5c20b5dce3b80da20eb35169490c820faa0ac7bf6(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AppProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6e917b3ed2e072993749b4ec1d95a186838166b2650cc692eaa294f0bb0da76b(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2550d3dd88a05d5756e8ef285960c5e3f04467b3fe7da69a4e131bc62bc441da(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c0a4e71699323256af12545c286a0044f196204a06d2514f99ee6d5980bf6f29(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
