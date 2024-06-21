'''
## Aliyun ROS PAI Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as PAI from '@alicloud/ros-cdk-pai';
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


class Dataset(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.Dataset",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::PAI::Dataset``, which is used to create a dataset.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDataset``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-dataset
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DatasetProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5ed416abd8bb45af1e474e9a831ab10167cf6f2c464bd0659b914b494ea8366d)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAccessibility")
    def attr_accessibility(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Accessibility: Workspace visibility.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccessibility"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CreateTime: The creation time of the resource.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDatasetId")
    def attr_dataset_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DatasetId: The first ID of the resource.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDatasetId"))

    @builtins.property
    @jsii.member(jsii_name="attrDatasetName")
    def attr_dataset_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DatasetName: The name of the dataset.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDatasetName"))

    @builtins.property
    @jsii.member(jsii_name="attrDataSourceType")
    def attr_data_source_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DataSourceType: The data source type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDataSourceType"))

    @builtins.property
    @jsii.member(jsii_name="attrDataType")
    def attr_data_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DataType: The dataset type.

        The default value is COMMON.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDataType"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Description: Custom descriptions of datasets to distinguish between different datasets.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrGmtModifiedTime")
    def attr_gmt_modified_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute GmtModifiedTime: Update time.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGmtModifiedTime"))

    @builtins.property
    @jsii.member(jsii_name="attrOptions")
    def attr_options(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Options: The extended field, which is of the JsonString type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOptions"))

    @builtins.property
    @jsii.member(jsii_name="attrOwnerId")
    def attr_owner_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute OwnerId: The ID of the primary account.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOwnerId"))

    @builtins.property
    @jsii.member(jsii_name="attrProperty")
    def attr_property(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Property: The properties of the dataset.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProperty"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceId")
    def attr_source_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SourceId: The data source ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSourceId"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceType")
    def attr_source_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SourceType: The data source type.

        The default value is USER.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSourceType"))

    @builtins.property
    @jsii.member(jsii_name="attrUri")
    def attr_uri(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Uri: The Uri configuration sample is as follows:.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUri"))

    @builtins.property
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute UserId: The ID of the user to which the dataset belongs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUserId"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceId")
    def attr_workspace_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute WorkspaceId: The ID of the workspace where the dataset is located.

        For details about how to obtain the workspace ID, see [ListWorkspaces](~~ 449124 ~~).
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrWorkspaceId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f3d46cf46f74023ce14d2d56513cc949d592772dfca49df74b3060c1dc78041a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ac51d791c655712fcac7f13de8ae1bcfdbe626e929b97b2d780a1340d3bdc5df)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "DatasetProps":
        return typing.cast("DatasetProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "DatasetProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f7545bf7c1691242d43d368bff8b0fba33b704f4e630fc54927ae9be47585217)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6488206e08e582c61763185adb8755f8776bc7be164f699b0402291a9b855490)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.DatasetProps",
    jsii_struct_bases=[],
    name_mapping={
        "dataset_name": "datasetName",
        "data_source_type": "dataSourceType",
        "property": "property",
        "uri": "uri",
        "workspace_id": "workspaceId",
        "accessibility": "accessibility",
        "data_type": "dataType",
        "description": "description",
        "options": "options",
        "source_id": "sourceId",
        "source_type": "sourceType",
    },
)
class DatasetProps:
    def __init__(
        self,
        *,
        dataset_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        data_source_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        property: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        uri: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        accessibility: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        data_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Dataset``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-dataset

        :param dataset_name: Property datasetName: The name of the dataset. The naming rules are as follows: - Start with a lowercase letter, uppercase letter, number, or Chinese. - Can contain an underscore (_) or a dash (-). - 1~127 characters in length.
        :param data_source_type: Property dataSourceType: The data source type. The following values are supported: - OSS: Alibaba Cloud Object Storage (OSS). - NAS: Alibaba cloud file storage (NAS).
        :param property: Property property: The properties of the dataset. The following values are supported: - FILE: FILE. - DIRECTORY: folder.
        :param uri: Property uri: The Uri configuration sample is as follows: - The data source type is OSS:'oss:// bucket.endpoint/object' - The data source type is NAS: The general NAS format is: 'nas://.region/subpath/to/dir/'; CPFS1.0:'nas://.region/subpath/to/dir /'; CPFS2.0:'nas://.region//'. CPFS1.0 and CPFS2.0 are distinguished by the format of fsid: CPFS1.0 is cpfs-<8-bit ascii characters>;CPFS2.0 is cpfs-<16 ascii characters>.
        :param workspace_id: Property workspaceId: The ID of the workspace where the dataset is located. For details about how to obtain the workspace ID, see [ListWorkspaces](~~ 449124 ~~). If this parameter is not configured, the default workspace is used. If the default workspace does not exist, an error is reported.
        :param accessibility: Property accessibility: Workspace visibility. The following values are supported: - PRIVATE (default): indicates that the workspace is visible to itself and the administrator. - PUBLIC: The workspace is visible to all users.
        :param data_type: Property dataType: The dataset type. The default value is COMMON. The following values are supported: - COMMON: COMMON. - PIC: picture. - TEXT: TEXT. - VIDEO: VIDEO. - AUDIO: AUDIO.
        :param description: Property description: Custom descriptions of datasets to distinguish between different datasets.
        :param options: Property options: The extended field, which is of the JsonString type. When DLC uses a dataset, you can specify the default Mount path for the dataset by configuring the mountPath field.
        :param source_id: Property sourceId: The data source ID. - When the SourceType is USER, SourceId can be customized. - When SourceType is ITAG, that is, when the iTAG module labels the data set generated by the result, SourceId is the task ID of ITAG. - When SourceType is PAI_PUBLIC_DATASET, that is, a dataset created using PAI public datasets, SourceId is empty by default.
        :param source_type: Property sourceType: The data source type. The default value is USER. The following values are supported: - PAI-PUBLIC-DATASET:PAI public dataset. - ITAG: The dataset generated by the iTAG module annotation result. - USER: The data set registered by the USER.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f5e67aa0fac02b36b14ca2e250161e0f39b916642d96f61aa92c5f8f9b8649ff)
            check_type(argname="argument dataset_name", value=dataset_name, expected_type=type_hints["dataset_name"])
            check_type(argname="argument data_source_type", value=data_source_type, expected_type=type_hints["data_source_type"])
            check_type(argname="argument property", value=property, expected_type=type_hints["property"])
            check_type(argname="argument uri", value=uri, expected_type=type_hints["uri"])
            check_type(argname="argument workspace_id", value=workspace_id, expected_type=type_hints["workspace_id"])
            check_type(argname="argument accessibility", value=accessibility, expected_type=type_hints["accessibility"])
            check_type(argname="argument data_type", value=data_type, expected_type=type_hints["data_type"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument options", value=options, expected_type=type_hints["options"])
            check_type(argname="argument source_id", value=source_id, expected_type=type_hints["source_id"])
            check_type(argname="argument source_type", value=source_type, expected_type=type_hints["source_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "dataset_name": dataset_name,
            "data_source_type": data_source_type,
            "property": property,
            "uri": uri,
            "workspace_id": workspace_id,
        }
        if accessibility is not None:
            self._values["accessibility"] = accessibility
        if data_type is not None:
            self._values["data_type"] = data_type
        if description is not None:
            self._values["description"] = description
        if options is not None:
            self._values["options"] = options
        if source_id is not None:
            self._values["source_id"] = source_id
        if source_type is not None:
            self._values["source_type"] = source_type

    @builtins.property
    def dataset_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property datasetName: The name of the dataset.

        The naming rules are as follows:

        - Start with a lowercase letter, uppercase letter, number, or Chinese.
        - Can contain an underscore (_) or a dash (-).
        - 1~127 characters in length.
        '''
        result = self._values.get("dataset_name")
        assert result is not None, "Required property 'dataset_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def data_source_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dataSourceType: The data source type.

        The following values are supported:

        - OSS: Alibaba Cloud Object Storage (OSS).
        - NAS: Alibaba cloud file storage (NAS).
        '''
        result = self._values.get("data_source_type")
        assert result is not None, "Required property 'data_source_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def property(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property property: The properties of the dataset.

        The following values are supported:

        - FILE: FILE.
        - DIRECTORY: folder.
        '''
        result = self._values.get("property")
        assert result is not None, "Required property 'property' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def uri(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property uri: The Uri configuration sample is as follows: - The data source type is OSS:'oss:// bucket.endpoint/object' - The data source type is NAS: The general NAS format is: 'nas://.region/subpath/to/dir/'; CPFS1.0:'nas://.region/subpath/to/dir /'; CPFS2.0:'nas://.region//'. CPFS1.0 and CPFS2.0 are distinguished by the format of fsid: CPFS1.0 is cpfs-<8-bit ascii characters>;CPFS2.0 is cpfs-<16 ascii characters>.'''
        result = self._values.get("uri")
        assert result is not None, "Required property 'uri' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property workspaceId: The ID of the workspace where the dataset is located.

        For details about how to obtain the workspace ID, see [ListWorkspaces](~~ 449124 ~~).
        If this parameter is not configured, the default workspace is used. If the default workspace does not exist, an error is reported.
        '''
        result = self._values.get("workspace_id")
        assert result is not None, "Required property 'workspace_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def accessibility(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property accessibility: Workspace visibility.

        The following values are supported:

        - PRIVATE (default): indicates that the workspace is visible to itself and the administrator.
        - PUBLIC: The workspace is visible to all users.
        '''
        result = self._values.get("accessibility")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def data_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dataType: The dataset type.

        The default value is COMMON. The following values are supported:

        - COMMON: COMMON.
        - PIC: picture.
        - TEXT: TEXT.
        - VIDEO: VIDEO.
        - AUDIO: AUDIO.
        '''
        result = self._values.get("data_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: Custom descriptions of datasets to distinguish between different datasets.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property options: The extended field, which is of the JsonString type.

        When DLC uses a dataset, you can specify the default Mount path for the dataset by configuring the mountPath field.
        '''
        result = self._values.get("options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sourceId: The data source ID.

        - When the SourceType is USER, SourceId can be customized.
        - When SourceType is ITAG, that is, when the iTAG module labels the data set generated by the result, SourceId is the task ID of ITAG.
        - When SourceType is PAI_PUBLIC_DATASET, that is, a dataset created using PAI public datasets, SourceId is empty by default.
        '''
        result = self._values.get("source_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sourceType: The data source type.

        The default value is USER. The following values are supported:

        - PAI-PUBLIC-DATASET:PAI public dataset.
        - ITAG: The dataset generated by the iTAG module annotation result.
        - USER: The data set registered by the USER.
        '''
        result = self._values.get("source_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DatasetProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDataset(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.RosDataset",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::PAI::Dataset``, which is used to create a dataset.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Dataset`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-dataset
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDatasetProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3eda16bfd8d9016f8ed26c3a5ea93d53512861c6c32c7664e67f6c16003178d8)
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
            type_hints = typing.get_type_hints(_typecheckingstub__cf6f11413b60eb4e99317c25baf3c438cefb25ad57680eda8c793b50fbee12d3)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAccessibility")
    def attr_accessibility(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Accessibility: Workspace visibility.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccessibility"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: The creation time of the resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDatasetId")
    def attr_dataset_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DatasetId: The first ID of the resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDatasetId"))

    @builtins.property
    @jsii.member(jsii_name="attrDatasetName")
    def attr_dataset_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DatasetName: The name of the dataset.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDatasetName"))

    @builtins.property
    @jsii.member(jsii_name="attrDataSourceType")
    def attr_data_source_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DataSourceType: The data source type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDataSourceType"))

    @builtins.property
    @jsii.member(jsii_name="attrDataType")
    def attr_data_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DataType: The dataset type. The default value is COMMON.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDataType"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Description: Custom descriptions of datasets to distinguish between different datasets.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrGmtModifiedTime")
    def attr_gmt_modified_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GmtModifiedTime: Update time.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGmtModifiedTime"))

    @builtins.property
    @jsii.member(jsii_name="attrOptions")
    def attr_options(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Options: The extended field, which is of the JsonString type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOptions"))

    @builtins.property
    @jsii.member(jsii_name="attrOwnerId")
    def attr_owner_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: OwnerId: The ID of the primary account.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOwnerId"))

    @builtins.property
    @jsii.member(jsii_name="attrProperty")
    def attr_property(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Property: The properties of the dataset.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProperty"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceId")
    def attr_source_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SourceId: The data source ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSourceId"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceType")
    def attr_source_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SourceType: The data source type. The default value is USER.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSourceType"))

    @builtins.property
    @jsii.member(jsii_name="attrUri")
    def attr_uri(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Uri: The Uri configuration sample is as follows:.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUri"))

    @builtins.property
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UserId: The ID of the user to which the dataset belongs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUserId"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceId")
    def attr_workspace_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: WorkspaceId: The ID of the workspace where the dataset is located. For details about how to obtain the workspace ID, see [ListWorkspaces](~~ 449124 ~~).
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrWorkspaceId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="datasetName")
    def dataset_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        datasetName: The name of the dataset. The naming rules are as follows:

        - Start with a lowercase letter, uppercase letter, number, or Chinese.
        - Can contain an underscore (_) or a dash (-).
        - 1~127 characters in length.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "datasetName"))

    @dataset_name.setter
    def dataset_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__931927432133c85f4f68c89238f2ecbf1b3d9ad0ba44134c99bcb9e44f0266f3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "datasetName", value)

    @builtins.property
    @jsii.member(jsii_name="dataSourceType")
    def data_source_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        dataSourceType: The data source type. The following values are supported:

        - OSS: Alibaba Cloud Object Storage (OSS).
        - NAS: Alibaba cloud file storage (NAS).
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dataSourceType"))

    @data_source_type.setter
    def data_source_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__99b8d383d50463ed068863d7b24066b2203b030a9111ed21f96f49d99720737f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dataSourceType", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__10abeb6a378a3144d5d0234d264684f680ba74342c2cd850e56273178f38d44d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="property")
    def property(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        property: The properties of the dataset. The following values are supported:

        - FILE: FILE.
        - DIRECTORY: folder.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "property"))

    @property.setter
    def property(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ac095cf0c42cf5cd565665dbd539c9b070372eb2a3b5b799480fb940ea40ac8a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "property", value)

    @builtins.property
    @jsii.member(jsii_name="uri")
    def uri(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        uri: The Uri configuration sample is as follows:

        - The data source type is OSS:'oss:// bucket.endpoint/object'
        - The data source type is NAS:
        The general NAS format is: 'nas://.region/subpath/to/dir/';
        CPFS1.0:'nas://.region/subpath/to/dir /';
        CPFS2.0:'nas://.region//'.
        CPFS1.0 and CPFS2.0 are distinguished by the format of fsid: CPFS1.0 is cpfs-<8-bit ascii characters>;CPFS2.0 is cpfs-<16 ascii characters>.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "uri"))

    @uri.setter
    def uri(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__739e233fc5ee9315d61dfb9f95382e1f597a0fe7ac24ab8759d75d5c2b6636d2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "uri", value)

    @builtins.property
    @jsii.member(jsii_name="workspaceId")
    def workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        workspaceId: The ID of the workspace where the dataset is located. For details about how to obtain the workspace ID, see [ListWorkspaces](~~ 449124 ~~).
        If this parameter is not configured, the default workspace is used. If the default workspace does not exist, an error is reported.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "workspaceId"))

    @workspace_id.setter
    def workspace_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__73020c7f987cc4f70e49ac64fc712896b19e80d37b94c1bbddb9a1e1156f0f45)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workspaceId", value)

    @builtins.property
    @jsii.member(jsii_name="accessibility")
    def accessibility(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        accessibility: Workspace visibility. The following values are supported:

        - PRIVATE (default): indicates that the workspace is visible to itself and the administrator.
        - PUBLIC: The workspace is visible to all users.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "accessibility"))

    @accessibility.setter
    def accessibility(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__99f67acc865565b8c94990480a1e4f6112971a76f2756e22fd8e6cce355465ae)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accessibility", value)

    @builtins.property
    @jsii.member(jsii_name="dataType")
    def data_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dataType: The dataset type. The default value is COMMON. The following values are supported:

        - COMMON: COMMON.
        - PIC: picture.
        - TEXT: TEXT.
        - VIDEO: VIDEO.
        - AUDIO: AUDIO.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dataType"))

    @data_type.setter
    def data_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8f7b22fcbad64bd142e0806c7692b8e011ed56a4aa6c177affd934001e5d16ea)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dataType", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Custom descriptions of datasets to distinguish between different datasets.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__86c8b073da93bc42b4e85ca4ac5441bce106025c0b86ec9e8b55bae7544ca87d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="options")
    def options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        options: The extended field, which is of the JsonString type.
        When DLC uses a dataset, you can specify the default Mount path for the dataset by configuring the mountPath field.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "options"))

    @options.setter
    def options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ee233fb96c5389c7e9e5eb8b11c7e2750c66522b18d4b9ce52d96ff47378990b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "options", value)

    @builtins.property
    @jsii.member(jsii_name="sourceId")
    def source_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sourceId: The data source ID.

        - When the SourceType is USER, SourceId can be customized.
        - When SourceType is ITAG, that is, when the iTAG module labels the data set generated by the result, SourceId is the task ID of ITAG.
        - When SourceType is PAI_PUBLIC_DATASET, that is, a dataset created using PAI public datasets, SourceId is empty by default.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sourceId"))

    @source_id.setter
    def source_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d0b540169374670b8647df4badc2878c687b9d709ff4271e75ff0f7229b237ae)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceId", value)

    @builtins.property
    @jsii.member(jsii_name="sourceType")
    def source_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sourceType: The data source type. The default value is USER. The following values are supported:

        - PAI-PUBLIC-DATASET:PAI public dataset.
        - ITAG: The dataset generated by the iTAG module annotation result.
        - USER: The data set registered by the USER.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sourceType"))

    @source_type.setter
    def source_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e2bd9ab8295075c16cddb627542aa34d2d2f4ce678d795de2c0d1e2c9335d2e9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceType", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.RosDatasetProps",
    jsii_struct_bases=[],
    name_mapping={
        "dataset_name": "datasetName",
        "data_source_type": "dataSourceType",
        "property": "property",
        "uri": "uri",
        "workspace_id": "workspaceId",
        "accessibility": "accessibility",
        "data_type": "dataType",
        "description": "description",
        "options": "options",
        "source_id": "sourceId",
        "source_type": "sourceType",
    },
)
class RosDatasetProps:
    def __init__(
        self,
        *,
        dataset_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        data_source_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        property: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        uri: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        accessibility: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        data_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosDataset``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-dataset

        :param dataset_name: 
        :param data_source_type: 
        :param property: 
        :param uri: 
        :param workspace_id: 
        :param accessibility: 
        :param data_type: 
        :param description: 
        :param options: 
        :param source_id: 
        :param source_type: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__076d8dc761a75fae8e99c1dddcd8ddaab1c07c88c37496930b41fa8ba32b4a80)
            check_type(argname="argument dataset_name", value=dataset_name, expected_type=type_hints["dataset_name"])
            check_type(argname="argument data_source_type", value=data_source_type, expected_type=type_hints["data_source_type"])
            check_type(argname="argument property", value=property, expected_type=type_hints["property"])
            check_type(argname="argument uri", value=uri, expected_type=type_hints["uri"])
            check_type(argname="argument workspace_id", value=workspace_id, expected_type=type_hints["workspace_id"])
            check_type(argname="argument accessibility", value=accessibility, expected_type=type_hints["accessibility"])
            check_type(argname="argument data_type", value=data_type, expected_type=type_hints["data_type"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument options", value=options, expected_type=type_hints["options"])
            check_type(argname="argument source_id", value=source_id, expected_type=type_hints["source_id"])
            check_type(argname="argument source_type", value=source_type, expected_type=type_hints["source_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "dataset_name": dataset_name,
            "data_source_type": data_source_type,
            "property": property,
            "uri": uri,
            "workspace_id": workspace_id,
        }
        if accessibility is not None:
            self._values["accessibility"] = accessibility
        if data_type is not None:
            self._values["data_type"] = data_type
        if description is not None:
            self._values["description"] = description
        if options is not None:
            self._values["options"] = options
        if source_id is not None:
            self._values["source_id"] = source_id
        if source_type is not None:
            self._values["source_type"] = source_type

    @builtins.property
    def dataset_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        datasetName: The name of the dataset. The naming rules are as follows:

        - Start with a lowercase letter, uppercase letter, number, or Chinese.
        - Can contain an underscore (_) or a dash (-).
        - 1~127 characters in length.
        '''
        result = self._values.get("dataset_name")
        assert result is not None, "Required property 'dataset_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def data_source_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        dataSourceType: The data source type. The following values are supported:

        - OSS: Alibaba Cloud Object Storage (OSS).
        - NAS: Alibaba cloud file storage (NAS).
        '''
        result = self._values.get("data_source_type")
        assert result is not None, "Required property 'data_source_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def property(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        property: The properties of the dataset. The following values are supported:

        - FILE: FILE.
        - DIRECTORY: folder.
        '''
        result = self._values.get("property")
        assert result is not None, "Required property 'property' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def uri(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        uri: The Uri configuration sample is as follows:

        - The data source type is OSS:'oss:// bucket.endpoint/object'
        - The data source type is NAS:
        The general NAS format is: 'nas://.region/subpath/to/dir/';
        CPFS1.0:'nas://.region/subpath/to/dir /';
        CPFS2.0:'nas://.region//'.
        CPFS1.0 and CPFS2.0 are distinguished by the format of fsid: CPFS1.0 is cpfs-<8-bit ascii characters>;CPFS2.0 is cpfs-<16 ascii characters>.
        '''
        result = self._values.get("uri")
        assert result is not None, "Required property 'uri' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        workspaceId: The ID of the workspace where the dataset is located. For details about how to obtain the workspace ID, see [ListWorkspaces](~~ 449124 ~~).
        If this parameter is not configured, the default workspace is used. If the default workspace does not exist, an error is reported.
        '''
        result = self._values.get("workspace_id")
        assert result is not None, "Required property 'workspace_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def accessibility(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        accessibility: Workspace visibility. The following values are supported:

        - PRIVATE (default): indicates that the workspace is visible to itself and the administrator.
        - PUBLIC: The workspace is visible to all users.
        '''
        result = self._values.get("accessibility")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def data_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dataType: The dataset type. The default value is COMMON. The following values are supported:

        - COMMON: COMMON.
        - PIC: picture.
        - TEXT: TEXT.
        - VIDEO: VIDEO.
        - AUDIO: AUDIO.
        '''
        result = self._values.get("data_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Custom descriptions of datasets to distinguish between different datasets.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        options: The extended field, which is of the JsonString type.
        When DLC uses a dataset, you can specify the default Mount path for the dataset by configuring the mountPath field.
        '''
        result = self._values.get("options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sourceId: The data source ID.

        - When the SourceType is USER, SourceId can be customized.
        - When SourceType is ITAG, that is, when the iTAG module labels the data set generated by the result, SourceId is the task ID of ITAG.
        - When SourceType is PAI_PUBLIC_DATASET, that is, a dataset created using PAI public datasets, SourceId is empty by default.
        '''
        result = self._values.get("source_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sourceType: The data source type. The default value is USER. The following values are supported:

        - PAI-PUBLIC-DATASET:PAI public dataset.
        - ITAG: The dataset generated by the iTAG module annotation result.
        - USER: The data set registered by the USER.
        '''
        result = self._values.get("source_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDatasetProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosService(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.RosService",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::PAI::Service``, which is used to create an Elastic Algorithm Service (EAS) service in Machine Learning Platform for AI (PAI).

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Service`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-service
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosServiceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4d2337187ffd425a4b5c9fc4029cf5babc1e30f8834452fdf843563330a0a3bf)
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
            type_hints = typing.get_type_hints(_typecheckingstub__be831a692d2269ab80279c0451b778337441dbf6f3c6443f0ef3872dfb7341e8)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAccessToken")
    def attr_access_token(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AccessToken: Service Request authentication token.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccessToken"))

    @builtins.property
    @jsii.member(jsii_name="attrCallerUid")
    def attr_caller_uid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CallerUid: The ID of the service creator, which can be the ID of the RAM account.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCallerUid"))

    @builtins.property
    @jsii.member(jsii_name="attrCpu")
    def attr_cpu(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Cpu: Number of service CPU cores.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCpu"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: Creation time of the service.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrCurrentVersion")
    def attr_current_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CurrentVersion: Current running version of the service.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCurrentVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrExtraData")
    def attr_extra_data(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ExtraData: Service Extra Information.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExtraData"))

    @builtins.property
    @jsii.member(jsii_name="attrGpu")
    def attr_gpu(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Gpu: Number of service GPU cards.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGpu"))

    @builtins.property
    @jsii.member(jsii_name="attrImage")
    def attr_image(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Image: Service Deployment Mirroring.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImage"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetEndpoint")
    def attr_internet_endpoint(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InternetEndpoint: Public network Endpoint of the service.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInternetEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrIntranetEndpoint")
    def attr_intranet_endpoint(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IntranetEndpoint: The intranet Endpoint of the service.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIntranetEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrLabels")
    def attr_labels(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Labels: Service Tag.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLabels"))

    @builtins.property
    @jsii.member(jsii_name="attrLatestVersion")
    def attr_latest_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LatestVersion: The latest version of the service.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLatestVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrMemory")
    def attr_memory(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Memory: Memory of service (MB).
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMemory"))

    @builtins.property
    @jsii.member(jsii_name="attrMessage")
    def attr_message(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Message: Latest information on services.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMessage"))

    @builtins.property
    @jsii.member(jsii_name="attrNamespace")
    def attr_namespace(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Namespace: The namespace to which the service belongs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNamespace"))

    @builtins.property
    @jsii.member(jsii_name="attrParentUid")
    def attr_parent_uid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ParentUid: Primary account ID of the creator.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrParentUid"))

    @builtins.property
    @jsii.member(jsii_name="attrPendingInstance")
    def attr_pending_instance(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PendingInstance: Number of instances where the service is not currently ready.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPendingInstance"))

    @builtins.property
    @jsii.member(jsii_name="attrReason")
    def attr_reason(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Reason: Service deployment failure reason.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReason"))

    @builtins.property
    @jsii.member(jsii_name="attrResource")
    def attr_resource(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Resource: The ID of the resource group to which the service belongs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResource"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceAlias")
    def attr_resource_alias(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceAlias: Name of the resource group where the service resides.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceAlias"))

    @builtins.property
    @jsii.member(jsii_name="attrRole")
    def attr_role(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Role: Grouping Service Role.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRole"))

    @builtins.property
    @jsii.member(jsii_name="attrRoleAttrs")
    def attr_role_attrs(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RoleAttrs: Grouping Service Role Properties.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRoleAttrs"))

    @builtins.property
    @jsii.member(jsii_name="attrRunningInstance")
    def attr_running_instance(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RunningInstance: Number of instances in service running.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRunningInstance"))

    @builtins.property
    @jsii.member(jsii_name="attrSafetyLock")
    def attr_safety_lock(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SafetyLock: Service Security Lock Status.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSafetyLock"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceConfig")
    def attr_service_config(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ServiceConfig: Service configuration information.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServiceConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceGroup")
    def attr_service_group(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ServiceGroup: Group to which the service belongs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServiceGroup"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ServiceName: Service Name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServiceName"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceUid")
    def attr_service_uid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ServiceUid: Unique Service ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServiceUid"))

    @builtins.property
    @jsii.member(jsii_name="attrTotalInstance")
    def attr_total_instance(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TotalInstance: Total number of instances required by the service.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTotalInstance"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdateTime")
    def attr_update_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UpdateTime: Service Last Updated.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUpdateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrWeight")
    def attr_weight(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Weight: Packet Service Traffic Weight.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrWeight"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__fc9c86673a62f87abf2027bac56a1ec063a7b6dba4640f95f1d2fd8ffe302338)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="serviceConfig")
    def service_config(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: serviceConfig: Service configuration information.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], jsii.get(self, "serviceConfig"))

    @service_config.setter
    def service_config(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a1a04a26c8fc5e3786b5612f4b2d271fa3c2af470f6b2e7793e4436e6c2b196f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serviceConfig", value)

    @builtins.property
    @jsii.member(jsii_name="develop")
    def develop(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: develop: Whether to enter the development mode.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "develop"))

    @develop.setter
    def develop(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5ccab0bb633502441d8c5838146ce6d2a673c4a55cc3599e81179d3f83d0f12d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "develop", value)

    @builtins.property
    @jsii.member(jsii_name="labels")
    def labels(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: labels: Service Tag.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "labels"))

    @labels.setter
    def labels(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__573ce6147ce6904185a4add1641a53328c22ebda92702072a669c8ead5f43f97)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "labels", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.RosServiceProps",
    jsii_struct_bases=[],
    name_mapping={
        "service_config": "serviceConfig",
        "develop": "develop",
        "labels": "labels",
    },
)
class RosServiceProps:
    def __init__(
        self,
        *,
        service_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
        develop: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        labels: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    ) -> None:
        '''Properties for defining a ``RosService``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-service

        :param service_config: 
        :param develop: 
        :param labels: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d1680fcf6acd6bbc21c74de73de11722e3403f1fc35a71071a0ab876cddd0326)
            check_type(argname="argument service_config", value=service_config, expected_type=type_hints["service_config"])
            check_type(argname="argument develop", value=develop, expected_type=type_hints["develop"])
            check_type(argname="argument labels", value=labels, expected_type=type_hints["labels"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "service_config": service_config,
        }
        if develop is not None:
            self._values["develop"] = develop
        if labels is not None:
            self._values["labels"] = labels

    @builtins.property
    def service_config(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: serviceConfig: Service configuration information.
        '''
        result = self._values.get("service_config")
        assert result is not None, "Required property 'service_config' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def develop(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: develop: Whether to enter the development mode.
        '''
        result = self._values.get("develop")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def labels(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: labels: Service Tag.
        '''
        result = self._values.get("labels")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosServiceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosWorkspace(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.RosWorkspace",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::PAI::Workspace``, which is used to create a workspace.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Workspace`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspace
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosWorkspaceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2c4a318929a4e2ca5c05c7266f9ae4f1d98aedda8791eff7d002ca1fb1b0e3d8)
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
            type_hints = typing.get_type_hints(_typecheckingstub__4d572f57595b82ca7dc15048869bb637bd9fb0cd952f38a6dd09c5ad0a089c4b)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAdminNames")
    def attr_admin_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AdminNames: List of administrator account names.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAdminNames"))

    @builtins.property
    @jsii.member(jsii_name="attrCreator")
    def attr_creator(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Creator: The user ID of the creator.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreator"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Description: Workspace description, no more than 80 characters.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DisplayName: It is recommended that you name the workspace based on the business attribute to identify the purpose of the workspace. If not configured, the default value is the workspace name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDisplayName"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvTypes")
    def attr_env_types(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EnvTypes: Environments contained in the workspace:.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnvTypes"))

    @builtins.property
    @jsii.member(jsii_name="attrExtraInfos")
    def attr_extra_infos(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ExtraInfos: Additional information, currently including TenantId (tenant ID).
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExtraInfos"))

    @builtins.property
    @jsii.member(jsii_name="attrOwner")
    def attr_owner(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Owner: Workspace owner ID, displayed when Verbose is true.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOwner"))

    @builtins.property
    @jsii.member(jsii_name="attrUsers")
    def attr_users(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Users: List of users.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUsers"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceId")
    def attr_workspace_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: WorkspaceId: The ID of the workspace.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrWorkspaceId"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceName")
    def attr_workspace_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: WorkspaceName: The workspace name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrWorkspaceName"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: description: Workspace description, no more than 80 characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0a35ab4982612f44794862ef879170c549b84f31a7b2134dde8193760ee2dc44)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__57ea2085464333cb11c1a5277adb72a0b6b025cf82da67a1a492816039908eb0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="envTypes")
    def env_types(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property:

        envTypes: Environments contained in the workspace:

        - Simple mode only production environment (prod).
        - Standard mode includes development environment (dev) and production environment (prod).
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], jsii.get(self, "envTypes"))

    @env_types.setter
    def env_types(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fb74dc1c1e3437c4cdf5b2dd9a1cbe81442a695e308d3dee4833f9d4092818d6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "envTypes", value)

    @builtins.property
    @jsii.member(jsii_name="workspaceName")
    def workspace_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        workspaceName: The workspace name. The format is as follows:

        - 3 to 23 characters in length and can contain letters, underscores, or numbers.
        - Must start with a large or small letter.
        - Unique in the current region.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "workspaceName"))

    @workspace_name.setter
    def workspace_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5f51c68017a8b5dba10b3b74f7f444d296b206ebbbc88b0217d650c985ec17c3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workspaceName", value)

    @builtins.property
    @jsii.member(jsii_name="displayName")
    def display_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        displayName: It is recommended that you name the workspace based on the business attribute to identify the purpose of the workspace. If not configured, the default value is the workspace name. The format is as follows:

        - 3 to 23 characters in length and can contain letters, underscores, or numbers.
        - Must start with a large or small letter.
        - Unique in the current region.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "displayName"))

    @display_name.setter
    def display_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cae315c3ba8ccb5685c05ead7af0be12b3e99f0784a854b7a477eb7fe6900995)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "displayName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.RosWorkspaceProps",
    jsii_struct_bases=[],
    name_mapping={
        "description": "description",
        "env_types": "envTypes",
        "workspace_name": "workspaceName",
        "display_name": "displayName",
    },
)
class RosWorkspaceProps:
    def __init__(
        self,
        *,
        description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        env_types: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        workspace_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        display_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosWorkspace``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspace

        :param description: 
        :param env_types: 
        :param workspace_name: 
        :param display_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b76973ee1489193047d033ef3c509ef4548f4a0af708fb448aeb4391b6e0ec60)
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument env_types", value=env_types, expected_type=type_hints["env_types"])
            check_type(argname="argument workspace_name", value=workspace_name, expected_type=type_hints["workspace_name"])
            check_type(argname="argument display_name", value=display_name, expected_type=type_hints["display_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "description": description,
            "env_types": env_types,
            "workspace_name": workspace_name,
        }
        if display_name is not None:
            self._values["display_name"] = display_name

    @builtins.property
    def description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: description: Workspace description, no more than 80 characters.
        '''
        result = self._values.get("description")
        assert result is not None, "Required property 'description' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def env_types(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property:

        envTypes: Environments contained in the workspace:

        - Simple mode only production environment (prod).
        - Standard mode includes development environment (dev) and production environment (prod).
        '''
        result = self._values.get("env_types")
        assert result is not None, "Required property 'env_types' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def workspace_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        workspaceName: The workspace name. The format is as follows:

        - 3 to 23 characters in length and can contain letters, underscores, or numbers.
        - Must start with a large or small letter.
        - Unique in the current region.
        '''
        result = self._values.get("workspace_name")
        assert result is not None, "Required property 'workspace_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def display_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        displayName: It is recommended that you name the workspace based on the business attribute to identify the purpose of the workspace. If not configured, the default value is the workspace name. The format is as follows:

        - 3 to 23 characters in length and can contain letters, underscores, or numbers.
        - Must start with a large or small letter.
        - Unique in the current region.
        '''
        result = self._values.get("display_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosWorkspaceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosWorkspaceResourceDlc(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.RosWorkspaceResourceDlc",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::PAI::WorkspaceResourceDlc``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``WorkspaceResourceDlc`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspaceresourcedlc
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosWorkspaceResourceDlcProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ea471a7c5a468bef4fbe3da7e68f4dc188887b43f7aa5af028489e058c6bb75c)
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
            type_hints = typing.get_type_hints(_typecheckingstub__880f6f3ac266a1fb510823f94b53f269bb495e4fe76e18aaf23b873fb85cbc54)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: The creation time of the resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GroupName: Resource group name. If you want to obtain a resource group name, see [ListResources].
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrIsDefault")
    def attr_is_default(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IsDefault: Indicates whether it is the default resource. Currently, this parameter only supports the input of true and does not support false.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIsDefault"))

    @builtins.property
    @jsii.member(jsii_name="attrResources")
    def attr_resources(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Resources: Resource List.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResources"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__bd53872479e3c25b6c5bf40f49be3c3142ce169ab5c654cc83d020869026da40)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="groupName")
    def group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: groupName: Resource group name. If you want to obtain a resource group name, see [ListResources].
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "groupName"))

    @group_name.setter
    def group_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__62ffc6de5eef8f8c7deb4bd47fba77afaf8f75da950cb755ea9749786bce401a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupName", value)

    @builtins.property
    @jsii.member(jsii_name="resources")
    def resources(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosWorkspaceResourceDlc.ResourcesProperty"]]]:
        '''
        :Property: resources: Resource List.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosWorkspaceResourceDlc.ResourcesProperty"]]], jsii.get(self, "resources"))

    @resources.setter
    def resources(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosWorkspaceResourceDlc.ResourcesProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__851f8fec11054543e2700b9f4236d062bd022ebdabab1932c9f76df752b554b1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resources", value)

    @builtins.property
    @jsii.member(jsii_name="workspaceId")
    def workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: workspaceId: The ID of the workspace to which the workspace belongs.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "workspaceId"))

    @workspace_id.setter
    def workspace_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a02cb6e32cd7d71600381b6de6c52bbc9c54c46998d1cbdc7e053603a61b038a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workspaceId", value)

    @builtins.property
    @jsii.member(jsii_name="isDefault")
    def is_default(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: isDefault: Indicates whether it is the default resource. Currently, this parameter only supports the input of true and does not support false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "isDefault"))

    @is_default.setter
    def is_default(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3cd28cac9cfc4c04e9236d83f6baa1a2bc767cb752186ebc1640ea0573ff31a6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "isDefault", value)

    @builtins.property
    @jsii.member(jsii_name="option")
    def option(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        option: Create behavior that supports the following values:

        - CreateAndAttach: Create resource and bind to workspace
        - Attach: bind resource to workspace.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "option"))

    @option.setter
    def option(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c2278990b8b85d56ab86bac7c23b334be02aadfa5eaf74feaaa2c38216caae21)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "option", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-pai.RosWorkspaceResourceDlc.ResourcesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "env_type": "envType",
            "workspace_resource_name": "workspaceResourceName",
            "workspace_resource_workspace_id": "workspaceResourceWorkspaceId",
            "spec": "spec",
        },
    )
    class ResourcesProperty:
        def __init__(
            self,
            *,
            env_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            workspace_resource_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            workspace_resource_workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            spec: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        ) -> None:
            '''
            :param env_type: 
            :param workspace_resource_name: 
            :param workspace_resource_workspace_id: 
            :param spec: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__3b63c737a049056c6be56bdb83efec08ab424dc639b21a4ad5124e241f87be64)
                check_type(argname="argument env_type", value=env_type, expected_type=type_hints["env_type"])
                check_type(argname="argument workspace_resource_name", value=workspace_resource_name, expected_type=type_hints["workspace_resource_name"])
                check_type(argname="argument workspace_resource_workspace_id", value=workspace_resource_workspace_id, expected_type=type_hints["workspace_resource_workspace_id"])
                check_type(argname="argument spec", value=spec, expected_type=type_hints["spec"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "env_type": env_type,
                "workspace_resource_name": workspace_resource_name,
                "workspace_resource_workspace_id": workspace_resource_workspace_id,
            }
            if spec is not None:
                self._values["spec"] = spec

        @builtins.property
        def env_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            envType: Environment, Support:

            - dev: Development
            - prod: Production.
            '''
            result = self._values.get("env_type")
            assert result is not None, "Required property 'env_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def workspace_resource_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: workspaceResourceName: Resource name, 3 to 28 characters in length, unique within each locale. Starts with the required letter and can contain only letters, numbers, and underscores (_).
            '''
            result = self._values.get("workspace_resource_name")
            assert result is not None, "Required property 'workspace_resource_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def workspace_resource_workspace_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: workspaceResourceWorkspaceId: ID of the workspace to which the resource information belongs.
            '''
            result = self._values.get("workspace_resource_workspace_id")
            assert result is not None, "Required property 'workspace_resource_workspace_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def spec(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: spec: Resource Specifications.
            '''
            result = self._values.get("spec")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ResourcesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.RosWorkspaceResourceDlcProps",
    jsii_struct_bases=[],
    name_mapping={
        "group_name": "groupName",
        "resources": "resources",
        "workspace_id": "workspaceId",
        "is_default": "isDefault",
        "option": "option",
    },
)
class RosWorkspaceResourceDlcProps:
    def __init__(
        self,
        *,
        group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        resources: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosWorkspaceResourceDlc.ResourcesProperty, typing.Dict[builtins.str, typing.Any]]]]],
        workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        is_default: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        option: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosWorkspaceResourceDlc``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspaceresourcedlc

        :param group_name: 
        :param resources: 
        :param workspace_id: 
        :param is_default: 
        :param option: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ebe3af48413265457d30902f743d3ada3ff1f69c0081c3fe7bf7d63bc0a3ca88)
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument resources", value=resources, expected_type=type_hints["resources"])
            check_type(argname="argument workspace_id", value=workspace_id, expected_type=type_hints["workspace_id"])
            check_type(argname="argument is_default", value=is_default, expected_type=type_hints["is_default"])
            check_type(argname="argument option", value=option, expected_type=type_hints["option"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "group_name": group_name,
            "resources": resources,
            "workspace_id": workspace_id,
        }
        if is_default is not None:
            self._values["is_default"] = is_default
        if option is not None:
            self._values["option"] = option

    @builtins.property
    def group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: groupName: Resource group name. If you want to obtain a resource group name, see [ListResources].
        '''
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def resources(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosWorkspaceResourceDlc.ResourcesProperty]]]:
        '''
        :Property: resources: Resource List.
        '''
        result = self._values.get("resources")
        assert result is not None, "Required property 'resources' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosWorkspaceResourceDlc.ResourcesProperty]]], result)

    @builtins.property
    def workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: workspaceId: The ID of the workspace to which the workspace belongs.
        '''
        result = self._values.get("workspace_id")
        assert result is not None, "Required property 'workspace_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def is_default(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: isDefault: Indicates whether it is the default resource. Currently, this parameter only supports the input of true and does not support false.
        '''
        result = self._values.get("is_default")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def option(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        option: Create behavior that supports the following values:

        - CreateAndAttach: Create resource and bind to workspace
        - Attach: bind resource to workspace.
        '''
        result = self._values.get("option")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosWorkspaceResourceDlcProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosWorkspaceResourceFlink(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.RosWorkspaceResourceFlink",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::PAI::WorkspaceResourceFlink``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``WorkspaceResourceFlink`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspaceresourceflink
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosWorkspaceResourceFlinkProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__578e83686f72937307c5eaff49925ac4609f7af1a907878ecbfa0a2f841c738a)
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
            type_hints = typing.get_type_hints(_typecheckingstub__50e901a2952ba52b6a10bc49b7e5b3189d80075f43b1e615ae6e13998ef08ad7)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: The creation time of the resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GroupName: Resource group name. If you want to obtain a resource group name, see [ListResources](~~ 449143 ~~).
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrIsDefault")
    def attr_is_default(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IsDefault: Indicates whether it is the default resource. Currently, this parameter only supports the input of true and does not support false.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIsDefault"))

    @builtins.property
    @jsii.member(jsii_name="attrResources")
    def attr_resources(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Resources: Resource List.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResources"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__9d1c9fa6b40ab37ba09aef6151f1e66e229d437080ed99bb6cf8089e85fd86c1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="groupName")
    def group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: groupName: Resource group name. If you want to obtain a resource group name, see [ListResources].
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "groupName"))

    @group_name.setter
    def group_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ca323975d7fc5f1d16a657130dc599c4f908c298b936a0d169d12df4d844e558)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupName", value)

    @builtins.property
    @jsii.member(jsii_name="resources")
    def resources(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosWorkspaceResourceFlink.ResourcesProperty"]]]:
        '''
        :Property: resources: Resource List.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosWorkspaceResourceFlink.ResourcesProperty"]]], jsii.get(self, "resources"))

    @resources.setter
    def resources(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosWorkspaceResourceFlink.ResourcesProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__79dfa340d3c04d62dab1f2e4805ac4e24350f4232085e4080aead4afee0fefe4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resources", value)

    @builtins.property
    @jsii.member(jsii_name="workspaceId")
    def workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: workspaceId: The ID of the workspace to which the workspace belongs.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "workspaceId"))

    @workspace_id.setter
    def workspace_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d2fdbf156aa98caf320eedfe08a20588da72a316c3be60f39a2c78dcf88f9304)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workspaceId", value)

    @builtins.property
    @jsii.member(jsii_name="isDefault")
    def is_default(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: isDefault: Indicates whether it is the default resource. Currently, this parameter only supports the input of true and does not support false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "isDefault"))

    @is_default.setter
    def is_default(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d7df214b7927ddd30a219d7422b60c2669d86f9096b9ad198de745404e3a3e06)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "isDefault", value)

    @builtins.property
    @jsii.member(jsii_name="option")
    def option(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        option: Create behavior that supports the following values:

        - CreateAndAttach: Create resource and bind to workspace
        - Attach: bind resource to workspace.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "option"))

    @option.setter
    def option(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d6cfa95eb1a0fc9d5a6cf49da807d4d6154105dfd0ad6ebc8d1ec394a59961ac)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "option", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-pai.RosWorkspaceResourceFlink.ResourcesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "env_type": "envType",
            "workspace_resource_name": "workspaceResourceName",
            "workspace_resource_workspace_id": "workspaceResourceWorkspaceId",
            "spec": "spec",
        },
    )
    class ResourcesProperty:
        def __init__(
            self,
            *,
            env_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            workspace_resource_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            workspace_resource_workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            spec: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        ) -> None:
            '''
            :param env_type: 
            :param workspace_resource_name: 
            :param workspace_resource_workspace_id: 
            :param spec: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__89ca36c747cdfe0629d41004d514da825f4cecde19a50efd3dad85f13cc21e5d)
                check_type(argname="argument env_type", value=env_type, expected_type=type_hints["env_type"])
                check_type(argname="argument workspace_resource_name", value=workspace_resource_name, expected_type=type_hints["workspace_resource_name"])
                check_type(argname="argument workspace_resource_workspace_id", value=workspace_resource_workspace_id, expected_type=type_hints["workspace_resource_workspace_id"])
                check_type(argname="argument spec", value=spec, expected_type=type_hints["spec"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "env_type": env_type,
                "workspace_resource_name": workspace_resource_name,
                "workspace_resource_workspace_id": workspace_resource_workspace_id,
            }
            if spec is not None:
                self._values["spec"] = spec

        @builtins.property
        def env_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            envType: Environment, Support:

            - dev: Development
            - prod: Production.
            '''
            result = self._values.get("env_type")
            assert result is not None, "Required property 'env_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def workspace_resource_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: workspaceResourceName: Resource name, 3 to 28 characters in length, unique within each locale. Starts with the required letter and can contain only letters, numbers, and underscores (_).
            '''
            result = self._values.get("workspace_resource_name")
            assert result is not None, "Required property 'workspace_resource_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def workspace_resource_workspace_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: workspaceResourceWorkspaceId: ID of the workspace to which the resource information belongs.
            '''
            result = self._values.get("workspace_resource_workspace_id")
            assert result is not None, "Required property 'workspace_resource_workspace_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def spec(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: spec: Resource Specifications.
            '''
            result = self._values.get("spec")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ResourcesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.RosWorkspaceResourceFlinkProps",
    jsii_struct_bases=[],
    name_mapping={
        "group_name": "groupName",
        "resources": "resources",
        "workspace_id": "workspaceId",
        "is_default": "isDefault",
        "option": "option",
    },
)
class RosWorkspaceResourceFlinkProps:
    def __init__(
        self,
        *,
        group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        resources: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosWorkspaceResourceFlink.ResourcesProperty, typing.Dict[builtins.str, typing.Any]]]]],
        workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        is_default: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        option: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosWorkspaceResourceFlink``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspaceresourceflink

        :param group_name: 
        :param resources: 
        :param workspace_id: 
        :param is_default: 
        :param option: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__57bfe40c04abe5e6fe19e91814ee8956f205f1f3fa2b27ecfbe7b2f455a8f03e)
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument resources", value=resources, expected_type=type_hints["resources"])
            check_type(argname="argument workspace_id", value=workspace_id, expected_type=type_hints["workspace_id"])
            check_type(argname="argument is_default", value=is_default, expected_type=type_hints["is_default"])
            check_type(argname="argument option", value=option, expected_type=type_hints["option"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "group_name": group_name,
            "resources": resources,
            "workspace_id": workspace_id,
        }
        if is_default is not None:
            self._values["is_default"] = is_default
        if option is not None:
            self._values["option"] = option

    @builtins.property
    def group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: groupName: Resource group name. If you want to obtain a resource group name, see [ListResources].
        '''
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def resources(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosWorkspaceResourceFlink.ResourcesProperty]]]:
        '''
        :Property: resources: Resource List.
        '''
        result = self._values.get("resources")
        assert result is not None, "Required property 'resources' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosWorkspaceResourceFlink.ResourcesProperty]]], result)

    @builtins.property
    def workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: workspaceId: The ID of the workspace to which the workspace belongs.
        '''
        result = self._values.get("workspace_id")
        assert result is not None, "Required property 'workspace_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def is_default(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: isDefault: Indicates whether it is the default resource. Currently, this parameter only supports the input of true and does not support false.
        '''
        result = self._values.get("is_default")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def option(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        option: Create behavior that supports the following values:

        - CreateAndAttach: Create resource and bind to workspace
        - Attach: bind resource to workspace.
        '''
        result = self._values.get("option")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosWorkspaceResourceFlinkProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosWorkspaceResourceMaxCompute(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.RosWorkspaceResourceMaxCompute",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::PAI::WorkspaceResourceMaxCompute``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``WorkspaceResourceMaxCompute`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspaceresourcemaxcompute
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosWorkspaceResourceMaxComputeProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b2f66acdef9422d08230176a5b72b7f5ffcd09e7423e28e62bfae4e5ebb3d1e8)
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
            type_hints = typing.get_type_hints(_typecheckingstub__b0915637f1ed1f6490dc4cf208d921579edb493622a7a2aacf5c07188c363642)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: The creation time of the resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GroupName: Resource group name. If you want to obtain a resource group name, see [ListResources](~~ 449143 ~~).
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrIsDefault")
    def attr_is_default(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IsDefault: Indicates whether it is the default resource. Currently, this parameter only supports the input of true and does not support false.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIsDefault"))

    @builtins.property
    @jsii.member(jsii_name="attrResources")
    def attr_resources(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Resources: Resource List.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResources"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__3e020f1431efd6202810928f260ad1f7a6cc98c572186a0974c23d9be1f39231)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="groupName")
    def group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: groupName: Resource group name. If you want to obtain a resource group name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "groupName"))

    @group_name.setter
    def group_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9201de5fa777a55754433585aef86290a7eea5e417e3c4e366351d8324b5af9c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupName", value)

    @builtins.property
    @jsii.member(jsii_name="resources")
    def resources(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosWorkspaceResourceMaxCompute.ResourcesProperty"]]]:
        '''
        :Property: resources: Resource List.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosWorkspaceResourceMaxCompute.ResourcesProperty"]]], jsii.get(self, "resources"))

    @resources.setter
    def resources(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosWorkspaceResourceMaxCompute.ResourcesProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__04ea2d9563b588f5231d2d9c450110738c227aa293b3544800dcea6316ead8ce)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resources", value)

    @builtins.property
    @jsii.member(jsii_name="workspaceId")
    def workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: workspaceId: The ID of the workspace to which the workspace belongs.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "workspaceId"))

    @workspace_id.setter
    def workspace_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7395f30834464169f2d941232a6f6ab2de6666ef318e4b0ddda3ef3536bc45fe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workspaceId", value)

    @builtins.property
    @jsii.member(jsii_name="isDefault")
    def is_default(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: isDefault: Indicates whether it is the default resource. Currently, this parameter only supports the input of true and does not support false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "isDefault"))

    @is_default.setter
    def is_default(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ea06bb30d84c99805226cf5f24f9bb434100e07f7513660da1d08ca7cd5a0ce4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "isDefault", value)

    @builtins.property
    @jsii.member(jsii_name="option")
    def option(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        option: Create behavior that supports the following values:

        - CreateAndAttach: Create resource and bind to workspace
        - Attach: bind resource to workspace.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "option"))

    @option.setter
    def option(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__78300066522bbb82d6f5389c93bb95b7b0ddf71df2b55fdbc95b90ffa6677d28)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "option", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-pai.RosWorkspaceResourceMaxCompute.QuotasProperty",
        jsii_struct_bases=[],
        name_mapping={"quota_id": "quotaId"},
    )
    class QuotasProperty:
        def __init__(
            self,
            *,
            quota_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param quota_id: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__a70ae00332f2bfed57c993bdf06e7efc8435125887165aa32a8edcb286a675d1)
                check_type(argname="argument quota_id", value=quota_id, expected_type=type_hints["quota_id"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "quota_id": quota_id,
            }

        @builtins.property
        def quota_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            quotaId: The resource quota ID.
            Obtain the ID of the Quota through ListQuotas.
            '''
            result = self._values.get("quota_id")
            assert result is not None, "Required property 'quota_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "QuotasProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-pai.RosWorkspaceResourceMaxCompute.ResourcesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "env_type": "envType",
            "workspace_resource_name": "workspaceResourceName",
            "workspace_resource_workspace_id": "workspaceResourceWorkspaceId",
            "quotas": "quotas",
            "spec": "spec",
        },
    )
    class ResourcesProperty:
        def __init__(
            self,
            *,
            env_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            workspace_resource_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            workspace_resource_workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            quotas: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosWorkspaceResourceMaxCompute.QuotasProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            spec: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        ) -> None:
            '''
            :param env_type: 
            :param workspace_resource_name: 
            :param workspace_resource_workspace_id: 
            :param quotas: 
            :param spec: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__6957cb7eb7fe278e12e47aee5f6cd93edb8f6a9976848a38f6ab123bd66380b6)
                check_type(argname="argument env_type", value=env_type, expected_type=type_hints["env_type"])
                check_type(argname="argument workspace_resource_name", value=workspace_resource_name, expected_type=type_hints["workspace_resource_name"])
                check_type(argname="argument workspace_resource_workspace_id", value=workspace_resource_workspace_id, expected_type=type_hints["workspace_resource_workspace_id"])
                check_type(argname="argument quotas", value=quotas, expected_type=type_hints["quotas"])
                check_type(argname="argument spec", value=spec, expected_type=type_hints["spec"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "env_type": env_type,
                "workspace_resource_name": workspace_resource_name,
                "workspace_resource_workspace_id": workspace_resource_workspace_id,
            }
            if quotas is not None:
                self._values["quotas"] = quotas
            if spec is not None:
                self._values["spec"] = spec

        @builtins.property
        def env_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            envType: Environment, Support:

            - dev: Development
            - prod: Production.
            '''
            result = self._values.get("env_type")
            assert result is not None, "Required property 'env_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def workspace_resource_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: workspaceResourceName: Resource name, 3 to 28 characters in length, unique within each locale. Starts with the required letter and can contain only letters, numbers, and underscores (_).
            '''
            result = self._values.get("workspace_resource_name")
            assert result is not None, "Required property 'workspace_resource_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def workspace_resource_workspace_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: workspaceResourceWorkspaceId: ID of the workspace to which the resource information belongs.
            '''
            result = self._values.get("workspace_resource_workspace_id")
            assert result is not None, "Required property 'workspace_resource_workspace_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def quotas(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosWorkspaceResourceMaxCompute.QuotasProperty"]]]]:
            '''
            :Property: quotas: The list of resource quotas. Currently, only MaxCompute resources have resource quotas.
            '''
            result = self._values.get("quotas")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosWorkspaceResourceMaxCompute.QuotasProperty"]]]], result)

        @builtins.property
        def spec(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: spec: Resource Specifications.
            '''
            result = self._values.get("spec")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ResourcesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.RosWorkspaceResourceMaxComputeProps",
    jsii_struct_bases=[],
    name_mapping={
        "group_name": "groupName",
        "resources": "resources",
        "workspace_id": "workspaceId",
        "is_default": "isDefault",
        "option": "option",
    },
)
class RosWorkspaceResourceMaxComputeProps:
    def __init__(
        self,
        *,
        group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        resources: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosWorkspaceResourceMaxCompute.ResourcesProperty, typing.Dict[builtins.str, typing.Any]]]]],
        workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        is_default: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        option: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosWorkspaceResourceMaxCompute``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspaceresourcemaxcompute

        :param group_name: 
        :param resources: 
        :param workspace_id: 
        :param is_default: 
        :param option: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__79d876bae6e4a2d418971fcf603e4262414b3c2431be6929353adf44d387cdb3)
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument resources", value=resources, expected_type=type_hints["resources"])
            check_type(argname="argument workspace_id", value=workspace_id, expected_type=type_hints["workspace_id"])
            check_type(argname="argument is_default", value=is_default, expected_type=type_hints["is_default"])
            check_type(argname="argument option", value=option, expected_type=type_hints["option"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "group_name": group_name,
            "resources": resources,
            "workspace_id": workspace_id,
        }
        if is_default is not None:
            self._values["is_default"] = is_default
        if option is not None:
            self._values["option"] = option

    @builtins.property
    def group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: groupName: Resource group name. If you want to obtain a resource group name.
        '''
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def resources(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosWorkspaceResourceMaxCompute.ResourcesProperty]]]:
        '''
        :Property: resources: Resource List.
        '''
        result = self._values.get("resources")
        assert result is not None, "Required property 'resources' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosWorkspaceResourceMaxCompute.ResourcesProperty]]], result)

    @builtins.property
    def workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: workspaceId: The ID of the workspace to which the workspace belongs.
        '''
        result = self._values.get("workspace_id")
        assert result is not None, "Required property 'workspace_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def is_default(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: isDefault: Indicates whether it is the default resource. Currently, this parameter only supports the input of true and does not support false.
        '''
        result = self._values.get("is_default")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def option(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        option: Create behavior that supports the following values:

        - CreateAndAttach: Create resource and bind to workspace
        - Attach: bind resource to workspace.
        '''
        result = self._values.get("option")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosWorkspaceResourceMaxComputeProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Service(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.Service",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::PAI::Service``, which is used to create an Elastic Algorithm Service (EAS) service in Machine Learning Platform for AI (PAI).

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosService``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-service
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ServiceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8322efa66b3ef76d8c8ece2e6b2c98ce0b62c9d22deb3d2028b7ccb124bda821)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAccessToken")
    def attr_access_token(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AccessToken: Service Request authentication token.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccessToken"))

    @builtins.property
    @jsii.member(jsii_name="attrCallerUid")
    def attr_caller_uid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CallerUid: The ID of the service creator, which can be the ID of the RAM account.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCallerUid"))

    @builtins.property
    @jsii.member(jsii_name="attrCpu")
    def attr_cpu(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Cpu: Number of service CPU cores.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCpu"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CreateTime: Creation time of the service.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrCurrentVersion")
    def attr_current_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CurrentVersion: Current running version of the service.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCurrentVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrExtraData")
    def attr_extra_data(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ExtraData: Service Extra Information.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExtraData"))

    @builtins.property
    @jsii.member(jsii_name="attrGpu")
    def attr_gpu(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Gpu: Number of service GPU cards.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGpu"))

    @builtins.property
    @jsii.member(jsii_name="attrImage")
    def attr_image(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Image: Service Deployment Mirroring.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImage"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetEndpoint")
    def attr_internet_endpoint(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InternetEndpoint: Public network Endpoint of the service.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInternetEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrIntranetEndpoint")
    def attr_intranet_endpoint(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute IntranetEndpoint: The intranet Endpoint of the service.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIntranetEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrLabels")
    def attr_labels(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Labels: Service Tag.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLabels"))

    @builtins.property
    @jsii.member(jsii_name="attrLatestVersion")
    def attr_latest_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute LatestVersion: The latest version of the service.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLatestVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrMemory")
    def attr_memory(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Memory: Memory of service (MB).'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMemory"))

    @builtins.property
    @jsii.member(jsii_name="attrMessage")
    def attr_message(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Message: Latest information on services.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMessage"))

    @builtins.property
    @jsii.member(jsii_name="attrNamespace")
    def attr_namespace(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Namespace: The namespace to which the service belongs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNamespace"))

    @builtins.property
    @jsii.member(jsii_name="attrParentUid")
    def attr_parent_uid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ParentUid: Primary account ID of the creator.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrParentUid"))

    @builtins.property
    @jsii.member(jsii_name="attrPendingInstance")
    def attr_pending_instance(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PendingInstance: Number of instances where the service is not currently ready.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPendingInstance"))

    @builtins.property
    @jsii.member(jsii_name="attrReason")
    def attr_reason(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Reason: Service deployment failure reason.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReason"))

    @builtins.property
    @jsii.member(jsii_name="attrResource")
    def attr_resource(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Resource: The ID of the resource group to which the service belongs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResource"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceAlias")
    def attr_resource_alias(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ResourceAlias: Name of the resource group where the service resides.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceAlias"))

    @builtins.property
    @jsii.member(jsii_name="attrRole")
    def attr_role(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Role: Grouping Service Role.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRole"))

    @builtins.property
    @jsii.member(jsii_name="attrRoleAttrs")
    def attr_role_attrs(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RoleAttrs: Grouping Service Role Properties.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRoleAttrs"))

    @builtins.property
    @jsii.member(jsii_name="attrRunningInstance")
    def attr_running_instance(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RunningInstance: Number of instances in service running.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRunningInstance"))

    @builtins.property
    @jsii.member(jsii_name="attrSafetyLock")
    def attr_safety_lock(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SafetyLock: Service Security Lock Status.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSafetyLock"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceConfig")
    def attr_service_config(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ServiceConfig: Service configuration information.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServiceConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceGroup")
    def attr_service_group(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ServiceGroup: Group to which the service belongs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServiceGroup"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ServiceName: Service Name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServiceName"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceUid")
    def attr_service_uid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ServiceUid: Unique Service ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServiceUid"))

    @builtins.property
    @jsii.member(jsii_name="attrTotalInstance")
    def attr_total_instance(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TotalInstance: Total number of instances required by the service.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTotalInstance"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdateTime")
    def attr_update_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute UpdateTime: Service Last Updated.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUpdateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrWeight")
    def attr_weight(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Weight: Packet Service Traffic Weight.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrWeight"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4a32119345f6c956212cccdc43a5e5a3ffc9c847be8824c5fbf3cb9de88423e6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__90db0065997a2faf09f9c7a982c977b376510212d5802515269415aaac4f67d3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "ServiceProps":
        return typing.cast("ServiceProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "ServiceProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fffc9b62edfe87b9fa710c0d68221ac14f3c00d65f15c113a84ad428fa7cfd2e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d029b3ae6a16d4949786bbcd0dc19b85e79383745d8bb1a25423b7df01bee534)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.ServiceProps",
    jsii_struct_bases=[],
    name_mapping={
        "service_config": "serviceConfig",
        "develop": "develop",
        "labels": "labels",
    },
)
class ServiceProps:
    def __init__(
        self,
        *,
        service_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
        develop: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        labels: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    ) -> None:
        '''Properties for defining a ``Service``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-service

        :param service_config: Property serviceConfig: Service configuration information.
        :param develop: Property develop: Whether to enter the development mode.
        :param labels: Property labels: Service Tag.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ddcd5827b2fd7476ef46262fe3fb52a3ee4c45cb8474d5e01187836c4b3e9f5d)
            check_type(argname="argument service_config", value=service_config, expected_type=type_hints["service_config"])
            check_type(argname="argument develop", value=develop, expected_type=type_hints["develop"])
            check_type(argname="argument labels", value=labels, expected_type=type_hints["labels"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "service_config": service_config,
        }
        if develop is not None:
            self._values["develop"] = develop
        if labels is not None:
            self._values["labels"] = labels

    @builtins.property
    def service_config(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''Property serviceConfig: Service configuration information.'''
        result = self._values.get("service_config")
        assert result is not None, "Required property 'service_config' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def develop(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property develop: Whether to enter the development mode.'''
        result = self._values.get("develop")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def labels(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property labels: Service Tag.'''
        result = self._values.get("labels")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ServiceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Workspace(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.Workspace",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::PAI::Workspace``, which is used to create a workspace.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosWorkspace``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspace
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["WorkspaceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__02e3377bd01c0c44d53e694e2872cd572504e693ac996cc8a1479553b887aedc)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAdminNames")
    def attr_admin_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AdminNames: List of administrator account names.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAdminNames"))

    @builtins.property
    @jsii.member(jsii_name="attrCreator")
    def attr_creator(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Creator: The user ID of the creator.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreator"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Description: Workspace description, no more than 80 characters.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DisplayName: It is recommended that you name the workspace based on the business attribute to identify the purpose of the workspace.

        If not configured, the default value is the workspace name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDisplayName"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvTypes")
    def attr_env_types(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute EnvTypes: Environments contained in the workspace:.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnvTypes"))

    @builtins.property
    @jsii.member(jsii_name="attrExtraInfos")
    def attr_extra_infos(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ExtraInfos: Additional information, currently including TenantId (tenant ID).'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExtraInfos"))

    @builtins.property
    @jsii.member(jsii_name="attrOwner")
    def attr_owner(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Owner: Workspace owner ID, displayed when Verbose is true.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOwner"))

    @builtins.property
    @jsii.member(jsii_name="attrUsers")
    def attr_users(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Users: List of users.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUsers"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceId")
    def attr_workspace_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute WorkspaceId: The ID of the workspace.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrWorkspaceId"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceName")
    def attr_workspace_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute WorkspaceName: The workspace name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrWorkspaceName"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__504415d40890d75f362ed6a48e7d2c21317d996794ca54cf336be7d90e0348b2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0b4b865153d3de6d96f17af337d1c0490c09fc3fa44a3aad623b04e77ce86ca4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "WorkspaceProps":
        return typing.cast("WorkspaceProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "WorkspaceProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__76fbb22e95d04034ffea09d9b9da92b41a4f52efe06aa636cc8526b887894c35)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8daa388bec8d9a58aeccc923d1ac736ce9fbed2c9e8de9a405536749fceea22c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.WorkspaceProps",
    jsii_struct_bases=[],
    name_mapping={
        "description": "description",
        "env_types": "envTypes",
        "workspace_name": "workspaceName",
        "display_name": "displayName",
    },
)
class WorkspaceProps:
    def __init__(
        self,
        *,
        description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        env_types: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        workspace_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        display_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Workspace``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspace

        :param description: Property description: Workspace description, no more than 80 characters.
        :param env_types: Property envTypes: Environments contained in the workspace: - Simple mode only production environment (prod). - Standard mode includes development environment (dev) and production environment (prod).
        :param workspace_name: Property workspaceName: The workspace name. The format is as follows: - 3 to 23 characters in length and can contain letters, underscores, or numbers. - Must start with a large or small letter. - Unique in the current region.
        :param display_name: Property displayName: It is recommended that you name the workspace based on the business attribute to identify the purpose of the workspace. If not configured, the default value is the workspace name. The format is as follows: - 3 to 23 characters in length and can contain letters, underscores, or numbers. - Must start with a large or small letter. - Unique in the current region.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__af9d30e15d3c124e2d835ef8a18f49e2d1faed4803e3a3d2458fa52e98d9ee83)
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument env_types", value=env_types, expected_type=type_hints["env_types"])
            check_type(argname="argument workspace_name", value=workspace_name, expected_type=type_hints["workspace_name"])
            check_type(argname="argument display_name", value=display_name, expected_type=type_hints["display_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "description": description,
            "env_types": env_types,
            "workspace_name": workspace_name,
        }
        if display_name is not None:
            self._values["display_name"] = display_name

    @builtins.property
    def description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property description: Workspace description, no more than 80 characters.'''
        result = self._values.get("description")
        assert result is not None, "Required property 'description' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def env_types(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''Property envTypes: Environments contained in the workspace: - Simple mode only production environment (prod).

        - Standard mode includes development environment (dev) and production environment (prod).
        '''
        result = self._values.get("env_types")
        assert result is not None, "Required property 'env_types' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def workspace_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property workspaceName: The workspace name.

        The format is as follows:

        - 3 to 23 characters in length and can contain letters, underscores, or numbers.
        - Must start with a large or small letter.
        - Unique in the current region.
        '''
        result = self._values.get("workspace_name")
        assert result is not None, "Required property 'workspace_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def display_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property displayName: It is recommended that you name the workspace based on the business attribute to identify the purpose of the workspace.

        If not configured, the default value is the workspace name. The format is as follows:

        - 3 to 23 characters in length and can contain letters, underscores, or numbers.
        - Must start with a large or small letter.
        - Unique in the current region.
        '''
        result = self._values.get("display_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "WorkspaceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class WorkspaceResourceDlc(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.WorkspaceResourceDlc",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::PAI::WorkspaceResourceDlc``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosWorkspaceResourceDlc``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspaceresourcedlc
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["WorkspaceResourceDlcProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__63546df8d66955b67df555773ed9b3e606b14a29fa6965fa2268998acb0a4d2c)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CreateTime: The creation time of the resource.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute GroupName: Resource group name.

        If you want to obtain a resource group name, see [ListResources].
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrIsDefault")
    def attr_is_default(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute IsDefault: Indicates whether it is the default resource.

        Currently, this parameter only supports the input of true and does not support false.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIsDefault"))

    @builtins.property
    @jsii.member(jsii_name="attrResources")
    def attr_resources(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Resources: Resource List.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResources"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b2e77be23910d6eaa1d2612e1be0705e0ad7ca00854964d5b724361b18130f6e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b491f94a2c96872728f06d0ec790e0960b0a8d84b33ef042a6ad652f6bb91b65)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "WorkspaceResourceDlcProps":
        return typing.cast("WorkspaceResourceDlcProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "WorkspaceResourceDlcProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8909d882b3436ed61f4d9b4420fc4139e1f5f166bdd283c60e4f92fc2e86d51b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4311a55046d911a5c4a52e8cea970d74f74f2ede436c089fd9f6d2055695b3da)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.WorkspaceResourceDlcProps",
    jsii_struct_bases=[],
    name_mapping={
        "group_name": "groupName",
        "resources": "resources",
        "workspace_id": "workspaceId",
        "is_default": "isDefault",
        "option": "option",
    },
)
class WorkspaceResourceDlcProps:
    def __init__(
        self,
        *,
        group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        resources: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosWorkspaceResourceDlc.ResourcesProperty, typing.Dict[builtins.str, typing.Any]]]]],
        workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        is_default: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        option: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``WorkspaceResourceDlc``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspaceresourcedlc

        :param group_name: Property groupName: Resource group name. If you want to obtain a resource group name, see [ListResources].
        :param resources: Property resources: Resource List.
        :param workspace_id: Property workspaceId: The ID of the workspace to which the workspace belongs.
        :param is_default: Property isDefault: Indicates whether it is the default resource. Currently, this parameter only supports the input of true and does not support false.
        :param option: Property option: Create behavior that supports the following values: - CreateAndAttach: Create resource and bind to workspace - Attach: bind resource to workspace.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3917c991494a5fc0d57517a4ee0c19b1bce8a252f645321b2fd27c50a275619e)
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument resources", value=resources, expected_type=type_hints["resources"])
            check_type(argname="argument workspace_id", value=workspace_id, expected_type=type_hints["workspace_id"])
            check_type(argname="argument is_default", value=is_default, expected_type=type_hints["is_default"])
            check_type(argname="argument option", value=option, expected_type=type_hints["option"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "group_name": group_name,
            "resources": resources,
            "workspace_id": workspace_id,
        }
        if is_default is not None:
            self._values["is_default"] = is_default
        if option is not None:
            self._values["option"] = option

    @builtins.property
    def group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property groupName: Resource group name.

        If you want to obtain a resource group name, see [ListResources].
        '''
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def resources(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosWorkspaceResourceDlc.ResourcesProperty]]]:
        '''Property resources: Resource List.'''
        result = self._values.get("resources")
        assert result is not None, "Required property 'resources' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosWorkspaceResourceDlc.ResourcesProperty]]], result)

    @builtins.property
    def workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property workspaceId: The ID of the workspace to which the workspace belongs.'''
        result = self._values.get("workspace_id")
        assert result is not None, "Required property 'workspace_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def is_default(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property isDefault: Indicates whether it is the default resource.

        Currently, this parameter only supports the input of true and does not support false.
        '''
        result = self._values.get("is_default")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def option(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property option: Create behavior that supports the following values: - CreateAndAttach: Create resource and bind to workspace - Attach: bind resource to workspace.'''
        result = self._values.get("option")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "WorkspaceResourceDlcProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class WorkspaceResourceFlink(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.WorkspaceResourceFlink",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::PAI::WorkspaceResourceFlink``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosWorkspaceResourceFlink``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspaceresourceflink
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["WorkspaceResourceFlinkProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d5b9e69bed1379fdc4949798c4d44070a7080094d18830e1c579f33e6452ce7f)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CreateTime: The creation time of the resource.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute GroupName: Resource group name.

        If you want to obtain a resource group name, see [ListResources](~~ 449143 ~~).
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrIsDefault")
    def attr_is_default(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute IsDefault: Indicates whether it is the default resource.

        Currently, this parameter only supports the input of true and does not support false.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIsDefault"))

    @builtins.property
    @jsii.member(jsii_name="attrResources")
    def attr_resources(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Resources: Resource List.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResources"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2170fed5ac5e403e2feb921aea28a4405b3dd2643be8f3d7eb0a23e7275a7e73)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fc58b88436fb418853c8c9bc7279ac5ba4d358df14ea01b75c1231112a14572e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "WorkspaceResourceFlinkProps":
        return typing.cast("WorkspaceResourceFlinkProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "WorkspaceResourceFlinkProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a506dca17a95bac049ff03f35fa6a873d23e5e7935e22b1d56bb618abb26c2cb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__06d9b68da69ac1a9092cb958008d7fb8fef18a3aa9274105d7c6030e35dd330f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.WorkspaceResourceFlinkProps",
    jsii_struct_bases=[],
    name_mapping={
        "group_name": "groupName",
        "resources": "resources",
        "workspace_id": "workspaceId",
        "is_default": "isDefault",
        "option": "option",
    },
)
class WorkspaceResourceFlinkProps:
    def __init__(
        self,
        *,
        group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        resources: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosWorkspaceResourceFlink.ResourcesProperty, typing.Dict[builtins.str, typing.Any]]]]],
        workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        is_default: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        option: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``WorkspaceResourceFlink``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspaceresourceflink

        :param group_name: Property groupName: Resource group name. If you want to obtain a resource group name, see [ListResources].
        :param resources: Property resources: Resource List.
        :param workspace_id: Property workspaceId: The ID of the workspace to which the workspace belongs.
        :param is_default: Property isDefault: Indicates whether it is the default resource. Currently, this parameter only supports the input of true and does not support false.
        :param option: Property option: Create behavior that supports the following values: - CreateAndAttach: Create resource and bind to workspace - Attach: bind resource to workspace.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5924305a2db5d17a14e3fe49854a4bc6182d2bc1c2aed0825602d70b8f5524a5)
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument resources", value=resources, expected_type=type_hints["resources"])
            check_type(argname="argument workspace_id", value=workspace_id, expected_type=type_hints["workspace_id"])
            check_type(argname="argument is_default", value=is_default, expected_type=type_hints["is_default"])
            check_type(argname="argument option", value=option, expected_type=type_hints["option"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "group_name": group_name,
            "resources": resources,
            "workspace_id": workspace_id,
        }
        if is_default is not None:
            self._values["is_default"] = is_default
        if option is not None:
            self._values["option"] = option

    @builtins.property
    def group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property groupName: Resource group name.

        If you want to obtain a resource group name, see [ListResources].
        '''
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def resources(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosWorkspaceResourceFlink.ResourcesProperty]]]:
        '''Property resources: Resource List.'''
        result = self._values.get("resources")
        assert result is not None, "Required property 'resources' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosWorkspaceResourceFlink.ResourcesProperty]]], result)

    @builtins.property
    def workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property workspaceId: The ID of the workspace to which the workspace belongs.'''
        result = self._values.get("workspace_id")
        assert result is not None, "Required property 'workspace_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def is_default(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property isDefault: Indicates whether it is the default resource.

        Currently, this parameter only supports the input of true and does not support false.
        '''
        result = self._values.get("is_default")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def option(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property option: Create behavior that supports the following values: - CreateAndAttach: Create resource and bind to workspace - Attach: bind resource to workspace.'''
        result = self._values.get("option")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "WorkspaceResourceFlinkProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class WorkspaceResourceMaxCompute(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.WorkspaceResourceMaxCompute",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::PAI::WorkspaceResourceMaxCompute``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosWorkspaceResourceMaxCompute``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspaceresourcemaxcompute
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["WorkspaceResourceMaxComputeProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1530a477af8fa885fabd8e57e28b063f8ab481885c416331a825df2674e429ec)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CreateTime: The creation time of the resource.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute GroupName: Resource group name.

        If you want to obtain a resource group name, see [ListResources](~~ 449143 ~~).
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrIsDefault")
    def attr_is_default(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute IsDefault: Indicates whether it is the default resource.

        Currently, this parameter only supports the input of true and does not support false.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIsDefault"))

    @builtins.property
    @jsii.member(jsii_name="attrResources")
    def attr_resources(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Resources: Resource List.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResources"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__78010a4c30ec573aac3e19517d32d650b56daabf86c5d2877b17c0868667aa38)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__08a94bde773100209e54a8611607d738d92cfb1848dd41a0db36f1fe00b27dbe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "WorkspaceResourceMaxComputeProps":
        return typing.cast("WorkspaceResourceMaxComputeProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "WorkspaceResourceMaxComputeProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__218434528a74c7ee997833274c04c37e6484b84c5d56b41245176b2bf927fad5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3fc0acfb2105bbfcf22891f163c061fb8bb140372076f07d2b7ee5531409958d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.WorkspaceResourceMaxComputeProps",
    jsii_struct_bases=[],
    name_mapping={
        "group_name": "groupName",
        "resources": "resources",
        "workspace_id": "workspaceId",
        "is_default": "isDefault",
        "option": "option",
    },
)
class WorkspaceResourceMaxComputeProps:
    def __init__(
        self,
        *,
        group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        resources: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosWorkspaceResourceMaxCompute.ResourcesProperty, typing.Dict[builtins.str, typing.Any]]]]],
        workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        is_default: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        option: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``WorkspaceResourceMaxCompute``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspaceresourcemaxcompute

        :param group_name: Property groupName: Resource group name. If you want to obtain a resource group name.
        :param resources: Property resources: Resource List.
        :param workspace_id: Property workspaceId: The ID of the workspace to which the workspace belongs.
        :param is_default: Property isDefault: Indicates whether it is the default resource. Currently, this parameter only supports the input of true and does not support false.
        :param option: Property option: Create behavior that supports the following values: - CreateAndAttach: Create resource and bind to workspace - Attach: bind resource to workspace.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ff9cc3cfa518240282e1cbec3a481d8ea60e2139f3e61fedb6529c4bec25bca6)
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument resources", value=resources, expected_type=type_hints["resources"])
            check_type(argname="argument workspace_id", value=workspace_id, expected_type=type_hints["workspace_id"])
            check_type(argname="argument is_default", value=is_default, expected_type=type_hints["is_default"])
            check_type(argname="argument option", value=option, expected_type=type_hints["option"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "group_name": group_name,
            "resources": resources,
            "workspace_id": workspace_id,
        }
        if is_default is not None:
            self._values["is_default"] = is_default
        if option is not None:
            self._values["option"] = option

    @builtins.property
    def group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property groupName: Resource group name.

        If you want to obtain a resource group name.
        '''
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def resources(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosWorkspaceResourceMaxCompute.ResourcesProperty]]]:
        '''Property resources: Resource List.'''
        result = self._values.get("resources")
        assert result is not None, "Required property 'resources' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosWorkspaceResourceMaxCompute.ResourcesProperty]]], result)

    @builtins.property
    def workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property workspaceId: The ID of the workspace to which the workspace belongs.'''
        result = self._values.get("workspace_id")
        assert result is not None, "Required property 'workspace_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def is_default(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property isDefault: Indicates whether it is the default resource.

        Currently, this parameter only supports the input of true and does not support false.
        '''
        result = self._values.get("is_default")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def option(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property option: Create behavior that supports the following values: - CreateAndAttach: Create resource and bind to workspace - Attach: bind resource to workspace.'''
        result = self._values.get("option")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "WorkspaceResourceMaxComputeProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Dataset",
    "DatasetProps",
    "RosDataset",
    "RosDatasetProps",
    "RosService",
    "RosServiceProps",
    "RosWorkspace",
    "RosWorkspaceProps",
    "RosWorkspaceResourceDlc",
    "RosWorkspaceResourceDlcProps",
    "RosWorkspaceResourceFlink",
    "RosWorkspaceResourceFlinkProps",
    "RosWorkspaceResourceMaxCompute",
    "RosWorkspaceResourceMaxComputeProps",
    "Service",
    "ServiceProps",
    "Workspace",
    "WorkspaceProps",
    "WorkspaceResourceDlc",
    "WorkspaceResourceDlcProps",
    "WorkspaceResourceFlink",
    "WorkspaceResourceFlinkProps",
    "WorkspaceResourceMaxCompute",
    "WorkspaceResourceMaxComputeProps",
    "datasource",
]

publication.publish()

# Loading modules to ensure their types are registered with the jsii runtime library
from . import datasource

def _typecheckingstub__5ed416abd8bb45af1e474e9a831ab10167cf6f2c464bd0659b914b494ea8366d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DatasetProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f3d46cf46f74023ce14d2d56513cc949d592772dfca49df74b3060c1dc78041a(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ac51d791c655712fcac7f13de8ae1bcfdbe626e929b97b2d780a1340d3bdc5df(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f7545bf7c1691242d43d368bff8b0fba33b704f4e630fc54927ae9be47585217(
    value: DatasetProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6488206e08e582c61763185adb8755f8776bc7be164f699b0402291a9b855490(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f5e67aa0fac02b36b14ca2e250161e0f39b916642d96f61aa92c5f8f9b8649ff(
    *,
    dataset_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    data_source_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    property: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    uri: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    accessibility: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    data_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3eda16bfd8d9016f8ed26c3a5ea93d53512861c6c32c7664e67f6c16003178d8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDatasetProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cf6f11413b60eb4e99317c25baf3c438cefb25ad57680eda8c793b50fbee12d3(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__931927432133c85f4f68c89238f2ecbf1b3d9ad0ba44134c99bcb9e44f0266f3(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__99b8d383d50463ed068863d7b24066b2203b030a9111ed21f96f49d99720737f(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__10abeb6a378a3144d5d0234d264684f680ba74342c2cd850e56273178f38d44d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ac095cf0c42cf5cd565665dbd539c9b070372eb2a3b5b799480fb940ea40ac8a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__739e233fc5ee9315d61dfb9f95382e1f597a0fe7ac24ab8759d75d5c2b6636d2(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__73020c7f987cc4f70e49ac64fc712896b19e80d37b94c1bbddb9a1e1156f0f45(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__99f67acc865565b8c94990480a1e4f6112971a76f2756e22fd8e6cce355465ae(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8f7b22fcbad64bd142e0806c7692b8e011ed56a4aa6c177affd934001e5d16ea(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__86c8b073da93bc42b4e85ca4ac5441bce106025c0b86ec9e8b55bae7544ca87d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ee233fb96c5389c7e9e5eb8b11c7e2750c66522b18d4b9ce52d96ff47378990b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d0b540169374670b8647df4badc2878c687b9d709ff4271e75ff0f7229b237ae(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e2bd9ab8295075c16cddb627542aa34d2d2f4ce678d795de2c0d1e2c9335d2e9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__076d8dc761a75fae8e99c1dddcd8ddaab1c07c88c37496930b41fa8ba32b4a80(
    *,
    dataset_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    data_source_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    property: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    uri: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    accessibility: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    data_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4d2337187ffd425a4b5c9fc4029cf5babc1e30f8834452fdf843563330a0a3bf(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosServiceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__be831a692d2269ab80279c0451b778337441dbf6f3c6443f0ef3872dfb7341e8(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fc9c86673a62f87abf2027bac56a1ec063a7b6dba4640f95f1d2fd8ffe302338(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a1a04a26c8fc5e3786b5612f4b2d271fa3c2af470f6b2e7793e4436e6c2b196f(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5ccab0bb633502441d8c5838146ce6d2a673c4a55cc3599e81179d3f83d0f12d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__573ce6147ce6904185a4add1641a53328c22ebda92702072a669c8ead5f43f97(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d1680fcf6acd6bbc21c74de73de11722e3403f1fc35a71071a0ab876cddd0326(
    *,
    service_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    develop: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    labels: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2c4a318929a4e2ca5c05c7266f9ae4f1d98aedda8791eff7d002ca1fb1b0e3d8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosWorkspaceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4d572f57595b82ca7dc15048869bb637bd9fb0cd952f38a6dd09c5ad0a089c4b(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0a35ab4982612f44794862ef879170c549b84f31a7b2134dde8193760ee2dc44(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__57ea2085464333cb11c1a5277adb72a0b6b025cf82da67a1a492816039908eb0(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fb74dc1c1e3437c4cdf5b2dd9a1cbe81442a695e308d3dee4833f9d4092818d6(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5f51c68017a8b5dba10b3b74f7f444d296b206ebbbc88b0217d650c985ec17c3(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cae315c3ba8ccb5685c05ead7af0be12b3e99f0784a854b7a477eb7fe6900995(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b76973ee1489193047d033ef3c509ef4548f4a0af708fb448aeb4391b6e0ec60(
    *,
    description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    env_types: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    workspace_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    display_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ea471a7c5a468bef4fbe3da7e68f4dc188887b43f7aa5af028489e058c6bb75c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosWorkspaceResourceDlcProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__880f6f3ac266a1fb510823f94b53f269bb495e4fe76e18aaf23b873fb85cbc54(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bd53872479e3c25b6c5bf40f49be3c3142ce169ab5c654cc83d020869026da40(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__62ffc6de5eef8f8c7deb4bd47fba77afaf8f75da950cb755ea9749786bce401a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__851f8fec11054543e2700b9f4236d062bd022ebdabab1932c9f76df752b554b1(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosWorkspaceResourceDlc.ResourcesProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a02cb6e32cd7d71600381b6de6c52bbc9c54c46998d1cbdc7e053603a61b038a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3cd28cac9cfc4c04e9236d83f6baa1a2bc767cb752186ebc1640ea0573ff31a6(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c2278990b8b85d56ab86bac7c23b334be02aadfa5eaf74feaaa2c38216caae21(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3b63c737a049056c6be56bdb83efec08ab424dc639b21a4ad5124e241f87be64(
    *,
    env_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    workspace_resource_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    workspace_resource_workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    spec: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ebe3af48413265457d30902f743d3ada3ff1f69c0081c3fe7bf7d63bc0a3ca88(
    *,
    group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    resources: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosWorkspaceResourceDlc.ResourcesProperty, typing.Dict[builtins.str, typing.Any]]]]],
    workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    is_default: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    option: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__578e83686f72937307c5eaff49925ac4609f7af1a907878ecbfa0a2f841c738a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosWorkspaceResourceFlinkProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__50e901a2952ba52b6a10bc49b7e5b3189d80075f43b1e615ae6e13998ef08ad7(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9d1c9fa6b40ab37ba09aef6151f1e66e229d437080ed99bb6cf8089e85fd86c1(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ca323975d7fc5f1d16a657130dc599c4f908c298b936a0d169d12df4d844e558(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__79dfa340d3c04d62dab1f2e4805ac4e24350f4232085e4080aead4afee0fefe4(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosWorkspaceResourceFlink.ResourcesProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d2fdbf156aa98caf320eedfe08a20588da72a316c3be60f39a2c78dcf88f9304(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d7df214b7927ddd30a219d7422b60c2669d86f9096b9ad198de745404e3a3e06(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d6cfa95eb1a0fc9d5a6cf49da807d4d6154105dfd0ad6ebc8d1ec394a59961ac(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__89ca36c747cdfe0629d41004d514da825f4cecde19a50efd3dad85f13cc21e5d(
    *,
    env_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    workspace_resource_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    workspace_resource_workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    spec: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__57bfe40c04abe5e6fe19e91814ee8956f205f1f3fa2b27ecfbe7b2f455a8f03e(
    *,
    group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    resources: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosWorkspaceResourceFlink.ResourcesProperty, typing.Dict[builtins.str, typing.Any]]]]],
    workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    is_default: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    option: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b2f66acdef9422d08230176a5b72b7f5ffcd09e7423e28e62bfae4e5ebb3d1e8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosWorkspaceResourceMaxComputeProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b0915637f1ed1f6490dc4cf208d921579edb493622a7a2aacf5c07188c363642(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3e020f1431efd6202810928f260ad1f7a6cc98c572186a0974c23d9be1f39231(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9201de5fa777a55754433585aef86290a7eea5e417e3c4e366351d8324b5af9c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__04ea2d9563b588f5231d2d9c450110738c227aa293b3544800dcea6316ead8ce(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosWorkspaceResourceMaxCompute.ResourcesProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7395f30834464169f2d941232a6f6ab2de6666ef318e4b0ddda3ef3536bc45fe(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ea06bb30d84c99805226cf5f24f9bb434100e07f7513660da1d08ca7cd5a0ce4(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__78300066522bbb82d6f5389c93bb95b7b0ddf71df2b55fdbc95b90ffa6677d28(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a70ae00332f2bfed57c993bdf06e7efc8435125887165aa32a8edcb286a675d1(
    *,
    quota_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6957cb7eb7fe278e12e47aee5f6cd93edb8f6a9976848a38f6ab123bd66380b6(
    *,
    env_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    workspace_resource_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    workspace_resource_workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    quotas: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosWorkspaceResourceMaxCompute.QuotasProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    spec: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__79d876bae6e4a2d418971fcf603e4262414b3c2431be6929353adf44d387cdb3(
    *,
    group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    resources: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosWorkspaceResourceMaxCompute.ResourcesProperty, typing.Dict[builtins.str, typing.Any]]]]],
    workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    is_default: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    option: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8322efa66b3ef76d8c8ece2e6b2c98ce0b62c9d22deb3d2028b7ccb124bda821(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ServiceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4a32119345f6c956212cccdc43a5e5a3ffc9c847be8824c5fbf3cb9de88423e6(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__90db0065997a2faf09f9c7a982c977b376510212d5802515269415aaac4f67d3(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fffc9b62edfe87b9fa710c0d68221ac14f3c00d65f15c113a84ad428fa7cfd2e(
    value: ServiceProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d029b3ae6a16d4949786bbcd0dc19b85e79383745d8bb1a25423b7df01bee534(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ddcd5827b2fd7476ef46262fe3fb52a3ee4c45cb8474d5e01187836c4b3e9f5d(
    *,
    service_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    develop: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    labels: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__02e3377bd01c0c44d53e694e2872cd572504e693ac996cc8a1479553b887aedc(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[WorkspaceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__504415d40890d75f362ed6a48e7d2c21317d996794ca54cf336be7d90e0348b2(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0b4b865153d3de6d96f17af337d1c0490c09fc3fa44a3aad623b04e77ce86ca4(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__76fbb22e95d04034ffea09d9b9da92b41a4f52efe06aa636cc8526b887894c35(
    value: WorkspaceProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8daa388bec8d9a58aeccc923d1ac736ce9fbed2c9e8de9a405536749fceea22c(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__af9d30e15d3c124e2d835ef8a18f49e2d1faed4803e3a3d2458fa52e98d9ee83(
    *,
    description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    env_types: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    workspace_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    display_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__63546df8d66955b67df555773ed9b3e606b14a29fa6965fa2268998acb0a4d2c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[WorkspaceResourceDlcProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b2e77be23910d6eaa1d2612e1be0705e0ad7ca00854964d5b724361b18130f6e(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b491f94a2c96872728f06d0ec790e0960b0a8d84b33ef042a6ad652f6bb91b65(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8909d882b3436ed61f4d9b4420fc4139e1f5f166bdd283c60e4f92fc2e86d51b(
    value: WorkspaceResourceDlcProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4311a55046d911a5c4a52e8cea970d74f74f2ede436c089fd9f6d2055695b3da(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3917c991494a5fc0d57517a4ee0c19b1bce8a252f645321b2fd27c50a275619e(
    *,
    group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    resources: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosWorkspaceResourceDlc.ResourcesProperty, typing.Dict[builtins.str, typing.Any]]]]],
    workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    is_default: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    option: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d5b9e69bed1379fdc4949798c4d44070a7080094d18830e1c579f33e6452ce7f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[WorkspaceResourceFlinkProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2170fed5ac5e403e2feb921aea28a4405b3dd2643be8f3d7eb0a23e7275a7e73(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fc58b88436fb418853c8c9bc7279ac5ba4d358df14ea01b75c1231112a14572e(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a506dca17a95bac049ff03f35fa6a873d23e5e7935e22b1d56bb618abb26c2cb(
    value: WorkspaceResourceFlinkProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__06d9b68da69ac1a9092cb958008d7fb8fef18a3aa9274105d7c6030e35dd330f(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5924305a2db5d17a14e3fe49854a4bc6182d2bc1c2aed0825602d70b8f5524a5(
    *,
    group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    resources: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosWorkspaceResourceFlink.ResourcesProperty, typing.Dict[builtins.str, typing.Any]]]]],
    workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    is_default: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    option: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1530a477af8fa885fabd8e57e28b063f8ab481885c416331a825df2674e429ec(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[WorkspaceResourceMaxComputeProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__78010a4c30ec573aac3e19517d32d650b56daabf86c5d2877b17c0868667aa38(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__08a94bde773100209e54a8611607d738d92cfb1848dd41a0db36f1fe00b27dbe(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__218434528a74c7ee997833274c04c37e6484b84c5d56b41245176b2bf927fad5(
    value: WorkspaceResourceMaxComputeProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3fc0acfb2105bbfcf22891f163c061fb8bb140372076f07d2b7ee5531409958d(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ff9cc3cfa518240282e1cbec3a481d8ea60e2139f3e61fedb6529c4bec25bca6(
    *,
    group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    resources: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosWorkspaceResourceMaxCompute.ResourcesProperty, typing.Dict[builtins.str, typing.Any]]]]],
    workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    is_default: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    option: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
