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


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.datasource.DatasetProps",
    jsii_struct_bases=[],
    name_mapping={
        "dataset_id": "datasetId",
        "workspace_id": "workspaceId",
        "refresh_options": "refreshOptions",
    },
)
class DatasetProps:
    def __init__(
        self,
        *,
        dataset_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Dataset``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-dataset

        :param dataset_id: Property datasetId: The first ID of the resource.
        :param workspace_id: Property workspaceId: The ID of the workspace where the dataset is located. For details about how to obtain the workspace ID, see [ListWorkspaces]. If this parameter is not configured, the default workspace is used. If the default workspace does not exist, an error is reported.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__21b1255c6e92441f2171f122fc041ce04d70bb718708f7544f79b7adeb4179b6)
            check_type(argname="argument dataset_id", value=dataset_id, expected_type=type_hints["dataset_id"])
            check_type(argname="argument workspace_id", value=workspace_id, expected_type=type_hints["workspace_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "dataset_id": dataset_id,
            "workspace_id": workspace_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def dataset_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property datasetId: The first ID of the resource.'''
        result = self._values.get("dataset_id")
        assert result is not None, "Required property 'dataset_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property workspaceId: The ID of the workspace where the dataset is located.

        For details about how to obtain the workspace ID, see [ListWorkspaces].
        If this parameter is not configured, the default workspace is used. If the default workspace does not exist, an error is reported.
        '''
        result = self._values.get("workspace_id")
        assert result is not None, "Required property 'workspace_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DatasetProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.datasource.DatasetsProps",
    jsii_struct_bases=[],
    name_mapping={
        "workspace_id": "workspaceId",
        "refresh_options": "refreshOptions",
        "source_id": "sourceId",
    },
)
class DatasetsProps:
    def __init__(
        self,
        *,
        workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Datasets``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-datasets

        :param workspace_id: Property workspaceId: The ID of the workspace where the dataset is located. If this parameter is not configured, the default workspace is used. If the default workspace does not exist, an error is reported.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        :param source_id: Property sourceId: The data source ID. - When the SourceType is USER, SourceId can be customized. - When SourceType is ITAG, that is, when the iTAG module labels the data set generated by the result, SourceId is the task ID of ITAG. - When SourceType is PAI_PUBLIC_DATASET, that is, a dataset created using PAI public datasets, SourceId is empty by default.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d92a5f4e6bc20790fd88ecb4dd061e148610f1a8c9e77642d7626df309835526)
            check_type(argname="argument workspace_id", value=workspace_id, expected_type=type_hints["workspace_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument source_id", value=source_id, expected_type=type_hints["source_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "workspace_id": workspace_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if source_id is not None:
            self._values["source_id"] = source_id

    @builtins.property
    def workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property workspaceId: The ID of the workspace where the dataset is located.

        If this parameter is not configured, the default workspace is used. If the default workspace does not exist, an error is reported.
        '''
        result = self._values.get("workspace_id")
        assert result is not None, "Required property 'workspace_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
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

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DatasetsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-pai.datasource.IDataset")
class IDataset(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Dataset``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAccessibility")
    def attr_accessibility(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Accessibility: Workspace visibility.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the resource.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDatasetId")
    def attr_dataset_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DatasetId: The first ID of the resource.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDatasetName")
    def attr_dataset_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DatasetName: The name of the dataset.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDataSourceType")
    def attr_data_source_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DataSourceType: The data source type.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDataType")
    def attr_data_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DataType: The dataset type.

        The default value is COMMON.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: Custom descriptions of datasets to distinguish between different datasets.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrGmtModifiedTime")
    def attr_gmt_modified_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GmtModifiedTime: Update time.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrOptions")
    def attr_options(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Options: The extended field, which is of the JsonString type.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrOwnerId")
    def attr_owner_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OwnerId: The ID of the primary account.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrProperty")
    def attr_property(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Property: The properties of the dataset.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSourceId")
    def attr_source_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceId: The data source ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSourceType")
    def attr_source_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceType: The data source type.

        The default value is USER.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrUri")
    def attr_uri(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Uri: The Uri configuration sample is as follows:.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UserId: The ID of the user to which the dataset belongs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceId")
    def attr_workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkspaceId: The ID of the workspace where the dataset is located.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DatasetProps:
        ...


class _IDatasetProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Dataset``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-pai.datasource.IDataset"

    @builtins.property
    @jsii.member(jsii_name="attrAccessibility")
    def attr_accessibility(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Accessibility: Workspace visibility.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAccessibility"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDatasetId")
    def attr_dataset_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DatasetId: The first ID of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDatasetId"))

    @builtins.property
    @jsii.member(jsii_name="attrDatasetName")
    def attr_dataset_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DatasetName: The name of the dataset.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDatasetName"))

    @builtins.property
    @jsii.member(jsii_name="attrDataSourceType")
    def attr_data_source_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DataSourceType: The data source type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDataSourceType"))

    @builtins.property
    @jsii.member(jsii_name="attrDataType")
    def attr_data_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DataType: The dataset type.

        The default value is COMMON.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDataType"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: Custom descriptions of datasets to distinguish between different datasets.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrGmtModifiedTime")
    def attr_gmt_modified_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GmtModifiedTime: Update time.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGmtModifiedTime"))

    @builtins.property
    @jsii.member(jsii_name="attrOptions")
    def attr_options(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Options: The extended field, which is of the JsonString type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOptions"))

    @builtins.property
    @jsii.member(jsii_name="attrOwnerId")
    def attr_owner_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OwnerId: The ID of the primary account.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOwnerId"))

    @builtins.property
    @jsii.member(jsii_name="attrProperty")
    def attr_property(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Property: The properties of the dataset.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrProperty"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceId")
    def attr_source_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceId: The data source ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSourceId"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceType")
    def attr_source_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceType: The data source type.

        The default value is USER.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSourceType"))

    @builtins.property
    @jsii.member(jsii_name="attrUri")
    def attr_uri(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Uri: The Uri configuration sample is as follows:.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUri"))

    @builtins.property
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UserId: The ID of the user to which the dataset belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUserId"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceId")
    def attr_workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkspaceId: The ID of the workspace where the dataset is located.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWorkspaceId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DatasetProps:
        return typing.cast(DatasetProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IDataset).__jsii_proxy_class__ = lambda : _IDatasetProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-pai.datasource.IDatasets")
class IDatasets(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Datasets``.'''

    @builtins.property
    @jsii.member(jsii_name="attrDatasetIds")
    def attr_dataset_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DatasetIds: The list of dataset IDs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDatasets")
    def attr_datasets(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Datasets: The list of datasets.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DatasetsProps:
        ...


class _IDatasetsProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Datasets``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-pai.datasource.IDatasets"

    @builtins.property
    @jsii.member(jsii_name="attrDatasetIds")
    def attr_dataset_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DatasetIds: The list of dataset IDs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDatasetIds"))

    @builtins.property
    @jsii.member(jsii_name="attrDatasets")
    def attr_datasets(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Datasets: The list of datasets.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDatasets"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DatasetsProps:
        return typing.cast(DatasetsProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IDatasets).__jsii_proxy_class__ = lambda : _IDatasetsProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-pai.datasource.IService")
class IService(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Service``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAccessToken")
    def attr_access_token(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AccessToken: The request token of the service.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCallerUid")
    def attr_caller_uid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CallerUid: The user ID of the account that is used to create the service.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCpu")
    def attr_cpu(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Cpu: The CPU that you applied for each instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The time when the service was created.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCurrentVersion")
    def attr_current_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CurrentVersion: The current version of the model.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrExtraData")
    def attr_extra_data(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExtraData: The additional information about the service.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrGpu")
    def attr_gpu(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Gpu: The GPU that you applied for each instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrImage")
    def attr_image(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Image: The data image of the service.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrInternetEndpoint")
    def attr_internet_endpoint(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InternetEndpoint: The public endpoint of the service.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrIntranetEndpoint")
    def attr_intranet_endpoint(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IntranetEndpoint: The private endpoint of the service.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrLabels")
    def attr_labels(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Labels: The tags of the service.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrLatestVersion")
    def attr_latest_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LatestVersion: The latest version of the service.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMemory")
    def attr_memory(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Memory: The memory that you applied for each instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMessage")
    def attr_message(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Message: The summary of the service.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrNamespace")
    def attr_namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Namespace: The namespace of the service.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrParentUid")
    def attr_parent_uid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ParentUid: The user ID of the Alibaba Cloud account that is used to create the service.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPendingInstance")
    def attr_pending_instance(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PendingInstance: The number of instances for the suspended service.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrReason")
    def attr_reason(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Reason: The reason why the service is in the current state.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrResource")
    def attr_resource(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Resource: The resource group to which the service belongs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrResourceAlias")
    def attr_resource_alias(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceAlias: The alias of the resource group to which the service belongs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRole")
    def attr_role(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Role: The role of the service.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRoleAttrs")
    def attr_role_attrs(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RoleAttrs: The additional attributes of the service role.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRunningInstance")
    def attr_running_instance(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RunningInstance: The number of instances for the running service.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSafetyLock")
    def attr_safety_lock(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SafetyLock: The security lock of the service.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrServiceConfig")
    def attr_service_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServiceConfig: The configurations of the service.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrServiceGroup")
    def attr_service_group(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServiceGroup: The group to which the service belongs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServiceName: The name of the service.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrServiceUid")
    def attr_service_uid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServiceUid: The ID of the service.

        The value of this property is the same as the value of ServiceId.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTotalInstance")
    def attr_total_instance(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TotalInstance: The total number of instances of the service.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrUpdateTime")
    def attr_update_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UpdateTime: The time when the service was updated.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrWeight")
    def attr_weight(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Weight: The weight of the canary release for the service.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ServiceProps":
        ...


class _IServiceProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Service``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-pai.datasource.IService"

    @builtins.property
    @jsii.member(jsii_name="attrAccessToken")
    def attr_access_token(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AccessToken: The request token of the service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAccessToken"))

    @builtins.property
    @jsii.member(jsii_name="attrCallerUid")
    def attr_caller_uid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CallerUid: The user ID of the account that is used to create the service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCallerUid"))

    @builtins.property
    @jsii.member(jsii_name="attrCpu")
    def attr_cpu(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Cpu: The CPU that you applied for each instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCpu"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The time when the service was created.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrCurrentVersion")
    def attr_current_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CurrentVersion: The current version of the model.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCurrentVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrExtraData")
    def attr_extra_data(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExtraData: The additional information about the service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrExtraData"))

    @builtins.property
    @jsii.member(jsii_name="attrGpu")
    def attr_gpu(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Gpu: The GPU that you applied for each instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGpu"))

    @builtins.property
    @jsii.member(jsii_name="attrImage")
    def attr_image(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Image: The data image of the service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrImage"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetEndpoint")
    def attr_internet_endpoint(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InternetEndpoint: The public endpoint of the service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInternetEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrIntranetEndpoint")
    def attr_intranet_endpoint(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IntranetEndpoint: The private endpoint of the service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIntranetEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrLabels")
    def attr_labels(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Labels: The tags of the service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLabels"))

    @builtins.property
    @jsii.member(jsii_name="attrLatestVersion")
    def attr_latest_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LatestVersion: The latest version of the service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLatestVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrMemory")
    def attr_memory(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Memory: The memory that you applied for each instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMemory"))

    @builtins.property
    @jsii.member(jsii_name="attrMessage")
    def attr_message(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Message: The summary of the service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMessage"))

    @builtins.property
    @jsii.member(jsii_name="attrNamespace")
    def attr_namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Namespace: The namespace of the service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNamespace"))

    @builtins.property
    @jsii.member(jsii_name="attrParentUid")
    def attr_parent_uid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ParentUid: The user ID of the Alibaba Cloud account that is used to create the service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrParentUid"))

    @builtins.property
    @jsii.member(jsii_name="attrPendingInstance")
    def attr_pending_instance(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PendingInstance: The number of instances for the suspended service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPendingInstance"))

    @builtins.property
    @jsii.member(jsii_name="attrReason")
    def attr_reason(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Reason: The reason why the service is in the current state.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrReason"))

    @builtins.property
    @jsii.member(jsii_name="attrResource")
    def attr_resource(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Resource: The resource group to which the service belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResource"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceAlias")
    def attr_resource_alias(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceAlias: The alias of the resource group to which the service belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceAlias"))

    @builtins.property
    @jsii.member(jsii_name="attrRole")
    def attr_role(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Role: The role of the service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRole"))

    @builtins.property
    @jsii.member(jsii_name="attrRoleAttrs")
    def attr_role_attrs(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RoleAttrs: The additional attributes of the service role.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRoleAttrs"))

    @builtins.property
    @jsii.member(jsii_name="attrRunningInstance")
    def attr_running_instance(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RunningInstance: The number of instances for the running service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRunningInstance"))

    @builtins.property
    @jsii.member(jsii_name="attrSafetyLock")
    def attr_safety_lock(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SafetyLock: The security lock of the service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSafetyLock"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceConfig")
    def attr_service_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServiceConfig: The configurations of the service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrServiceConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceGroup")
    def attr_service_group(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServiceGroup: The group to which the service belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrServiceGroup"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServiceName: The name of the service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrServiceName"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceUid")
    def attr_service_uid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServiceUid: The ID of the service.

        The value of this property is the same as the value of ServiceId.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrServiceUid"))

    @builtins.property
    @jsii.member(jsii_name="attrTotalInstance")
    def attr_total_instance(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TotalInstance: The total number of instances of the service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTotalInstance"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdateTime")
    def attr_update_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UpdateTime: The time when the service was updated.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUpdateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrWeight")
    def attr_weight(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Weight: The weight of the canary release for the service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWeight"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ServiceProps":
        return typing.cast("ServiceProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IService).__jsii_proxy_class__ = lambda : _IServiceProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-pai.datasource.IServices")
class IServices(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Services``.'''

    @builtins.property
    @jsii.member(jsii_name="attrServiceNames")
    def attr_service_names(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServiceNames: The list of service names.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrServices")
    def attr_services(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Services: The list of services.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ServicesProps":
        ...


class _IServicesProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Services``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-pai.datasource.IServices"

    @builtins.property
    @jsii.member(jsii_name="attrServiceNames")
    def attr_service_names(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServiceNames: The list of service names.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrServiceNames"))

    @builtins.property
    @jsii.member(jsii_name="attrServices")
    def attr_services(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Services: The list of services.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrServices"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ServicesProps":
        return typing.cast("ServicesProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IServices).__jsii_proxy_class__ = lambda : _IServicesProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-pai.datasource.IWorkspace")
class IWorkspace(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Workspace``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAdminNames")
    def attr_admin_names(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AdminNames: List of administrator account names.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCreator")
    def attr_creator(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Creator: The user ID of the creator.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of the workspace.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DisplayName: The display name of the workspace.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEnvTypes")
    def attr_env_types(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvTypes: The environments of the workspace.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrExtraInfos")
    def attr_extra_infos(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExtraInfos: Additional information, currently including TenantId (tenant ID).'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrIsDefault")
    def attr_is_default(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IsDefault: Default Workspace.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrUsers")
    def attr_users(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Users: List of users.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceId")
    def attr_workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkspaceId: The first ID of the resource.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceName")
    def attr_workspace_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkspaceName: The name of the workspace.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "WorkspaceProps":
        ...


class _IWorkspaceProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Workspace``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-pai.datasource.IWorkspace"

    @builtins.property
    @jsii.member(jsii_name="attrAdminNames")
    def attr_admin_names(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AdminNames: List of administrator account names.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAdminNames"))

    @builtins.property
    @jsii.member(jsii_name="attrCreator")
    def attr_creator(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Creator: The user ID of the creator.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreator"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of the workspace.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DisplayName: The display name of the workspace.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDisplayName"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvTypes")
    def attr_env_types(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvTypes: The environments of the workspace.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnvTypes"))

    @builtins.property
    @jsii.member(jsii_name="attrExtraInfos")
    def attr_extra_infos(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExtraInfos: Additional information, currently including TenantId (tenant ID).'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrExtraInfos"))

    @builtins.property
    @jsii.member(jsii_name="attrIsDefault")
    def attr_is_default(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IsDefault: Default Workspace.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIsDefault"))

    @builtins.property
    @jsii.member(jsii_name="attrUsers")
    def attr_users(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Users: List of users.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUsers"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceId")
    def attr_workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkspaceId: The first ID of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWorkspaceId"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceName")
    def attr_workspace_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkspaceName: The name of the workspace.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWorkspaceName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "WorkspaceProps":
        return typing.cast("WorkspaceProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IWorkspace).__jsii_proxy_class__ = lambda : _IWorkspaceProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-pai.datasource.IWorkspaceResourceDlc")
class IWorkspaceResourceDlc(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``WorkspaceResourceDlc``.'''

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the resource.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupName: Resource group name.

        If you want to obtain a resource group name, see [ListResources].
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrIsDefault")
    def attr_is_default(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IsDefault: Indicates whether it is the default resource.

        Currently, this parameter only supports the input of true and does not support false.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrResources")
    def attr_resources(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Resources: Resource List.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "WorkspaceResourceDlcProps":
        ...


class _IWorkspaceResourceDlcProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``WorkspaceResourceDlc``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-pai.datasource.IWorkspaceResourceDlc"

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupName: Resource group name.

        If you want to obtain a resource group name, see [ListResources].
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrIsDefault")
    def attr_is_default(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IsDefault: Indicates whether it is the default resource.

        Currently, this parameter only supports the input of true and does not support false.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIsDefault"))

    @builtins.property
    @jsii.member(jsii_name="attrResources")
    def attr_resources(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Resources: Resource List.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResources"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "WorkspaceResourceDlcProps":
        return typing.cast("WorkspaceResourceDlcProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IWorkspaceResourceDlc).__jsii_proxy_class__ = lambda : _IWorkspaceResourceDlcProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-pai.datasource.IWorkspaceResourceDlcs")
class IWorkspaceResourceDlcs(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``WorkspaceResourceDlcs``.'''

    @builtins.property
    @jsii.member(jsii_name="attrGroupNames")
    def attr_group_names(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupNames: The list of group names.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceResourceDlcs")
    def attr_workspace_resource_dlcs(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkspaceResourceDlcs: The list of workspace resource dlcs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "WorkspaceResourceDlcsProps":
        ...


class _IWorkspaceResourceDlcsProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``WorkspaceResourceDlcs``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-pai.datasource.IWorkspaceResourceDlcs"

    @builtins.property
    @jsii.member(jsii_name="attrGroupNames")
    def attr_group_names(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupNames: The list of group names.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGroupNames"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceResourceDlcs")
    def attr_workspace_resource_dlcs(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkspaceResourceDlcs: The list of workspace resource dlcs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWorkspaceResourceDlcs"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "WorkspaceResourceDlcsProps":
        return typing.cast("WorkspaceResourceDlcsProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IWorkspaceResourceDlcs).__jsii_proxy_class__ = lambda : _IWorkspaceResourceDlcsProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-pai.datasource.IWorkspaceResourceFlink")
class IWorkspaceResourceFlink(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``WorkspaceResourceFlink``.'''

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the resource.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupName: Resource group name.

        If you want to obtain a resource group name.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrIsDefault")
    def attr_is_default(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IsDefault: Indicates whether it is the default resource.

        Currently, this parameter only supports the input of true and does not support false.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrResources")
    def attr_resources(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Resources: Resource List.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "WorkspaceResourceFlinkProps":
        ...


class _IWorkspaceResourceFlinkProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``WorkspaceResourceFlink``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-pai.datasource.IWorkspaceResourceFlink"

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupName: Resource group name.

        If you want to obtain a resource group name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrIsDefault")
    def attr_is_default(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IsDefault: Indicates whether it is the default resource.

        Currently, this parameter only supports the input of true and does not support false.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIsDefault"))

    @builtins.property
    @jsii.member(jsii_name="attrResources")
    def attr_resources(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Resources: Resource List.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResources"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "WorkspaceResourceFlinkProps":
        return typing.cast("WorkspaceResourceFlinkProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IWorkspaceResourceFlink).__jsii_proxy_class__ = lambda : _IWorkspaceResourceFlinkProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-pai.datasource.IWorkspaceResourceFlinks")
class IWorkspaceResourceFlinks(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``WorkspaceResourceFlinks``.'''

    @builtins.property
    @jsii.member(jsii_name="attrGroupNames")
    def attr_group_names(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupNames: The list of group names.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceResourceFlinks")
    def attr_workspace_resource_flinks(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkspaceResourceFlinks: The list of workspace resource flinks.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "WorkspaceResourceFlinksProps":
        ...


class _IWorkspaceResourceFlinksProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``WorkspaceResourceFlinks``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-pai.datasource.IWorkspaceResourceFlinks"

    @builtins.property
    @jsii.member(jsii_name="attrGroupNames")
    def attr_group_names(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupNames: The list of group names.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGroupNames"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceResourceFlinks")
    def attr_workspace_resource_flinks(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkspaceResourceFlinks: The list of workspace resource flinks.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWorkspaceResourceFlinks"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "WorkspaceResourceFlinksProps":
        return typing.cast("WorkspaceResourceFlinksProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IWorkspaceResourceFlinks).__jsii_proxy_class__ = lambda : _IWorkspaceResourceFlinksProxy


@jsii.interface(
    jsii_type="@alicloud/ros-cdk-pai.datasource.IWorkspaceResourceMaxCompute"
)
class IWorkspaceResourceMaxCompute(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``WorkspaceResourceMaxCompute``.'''

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the resource.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupName: Resource group name.

        If you want to obtain a resource group name.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrIsDefault")
    def attr_is_default(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IsDefault: Indicates whether it is the default resource.

        Currently, this parameter only supports the input of true and does not support false.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrResources")
    def attr_resources(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Resources: Resource List.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "WorkspaceResourceMaxComputeProps":
        ...


class _IWorkspaceResourceMaxComputeProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``WorkspaceResourceMaxCompute``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-pai.datasource.IWorkspaceResourceMaxCompute"

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupName: Resource group name.

        If you want to obtain a resource group name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrIsDefault")
    def attr_is_default(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IsDefault: Indicates whether it is the default resource.

        Currently, this parameter only supports the input of true and does not support false.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIsDefault"))

    @builtins.property
    @jsii.member(jsii_name="attrResources")
    def attr_resources(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Resources: Resource List.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResources"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "WorkspaceResourceMaxComputeProps":
        return typing.cast("WorkspaceResourceMaxComputeProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IWorkspaceResourceMaxCompute).__jsii_proxy_class__ = lambda : _IWorkspaceResourceMaxComputeProxy


@jsii.interface(
    jsii_type="@alicloud/ros-cdk-pai.datasource.IWorkspaceResourceMaxComputes"
)
class IWorkspaceResourceMaxComputes(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``WorkspaceResourceMaxComputes``.'''

    @builtins.property
    @jsii.member(jsii_name="attrGroupNames")
    def attr_group_names(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupNames: The list of group names.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceResourceMaxComputes")
    def attr_workspace_resource_max_computes(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkspaceResourceMaxComputes: The list of workspace resource max computes.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "WorkspaceResourceMaxComputesProps":
        ...


class _IWorkspaceResourceMaxComputesProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``WorkspaceResourceMaxComputes``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-pai.datasource.IWorkspaceResourceMaxComputes"

    @builtins.property
    @jsii.member(jsii_name="attrGroupNames")
    def attr_group_names(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupNames: The list of group names.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGroupNames"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceResourceMaxComputes")
    def attr_workspace_resource_max_computes(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkspaceResourceMaxComputes: The list of workspace resource max computes.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWorkspaceResourceMaxComputes"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "WorkspaceResourceMaxComputesProps":
        return typing.cast("WorkspaceResourceMaxComputesProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IWorkspaceResourceMaxComputes).__jsii_proxy_class__ = lambda : _IWorkspaceResourceMaxComputesProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-pai.datasource.IWorkspaces")
class IWorkspaces(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Workspaces``.'''

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceIds")
    def attr_workspace_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkspaceIds: The list of workspace IDs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaces")
    def attr_workspaces(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Workspaces: The list of workspaces.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "WorkspacesProps":
        ...


class _IWorkspacesProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Workspaces``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-pai.datasource.IWorkspaces"

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceIds")
    def attr_workspace_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkspaceIds: The list of workspace IDs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWorkspaceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaces")
    def attr_workspaces(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Workspaces: The list of workspaces.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWorkspaces"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "WorkspacesProps":
        return typing.cast("WorkspacesProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IWorkspaces).__jsii_proxy_class__ = lambda : _IWorkspacesProxy


class RosDataset(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.datasource.RosDataset",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::PAI::Dataset``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Dataset`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-dataset
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
            type_hints = typing.get_type_hints(_typecheckingstub__934848947ac78a4a946c71c4ddd1fe973d422412c3961d19f661b6b0e18a15dd)
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
            type_hints = typing.get_type_hints(_typecheckingstub__35c6fa81ab606b457324bb66a5d870ac18ae3edf8067f1ff47bd07b9693cdcb5)
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
        :Attribute: WorkspaceId: The ID of the workspace where the dataset is located.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrWorkspaceId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="datasetId")
    def dataset_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: datasetId: The first ID of the resource.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "datasetId"))

    @dataset_id.setter
    def dataset_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a15709286fb0001bb528bf82c5212531468fa2051ce5e0c12356cbc22d71a010)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "datasetId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a784bd1561a4adf96c803957b26d5d32b66511b4fbe8b5fee6e3744b956b4645)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="workspaceId")
    def workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        workspaceId: The ID of the workspace where the dataset is located. For details about how to obtain the workspace ID, see [ListWorkspaces].
        If this parameter is not configured, the default workspace is used. If the default workspace does not exist, an error is reported.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "workspaceId"))

    @workspace_id.setter
    def workspace_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e4eef5e3218060f3db3f4a982b6b4c566585c7be9ae4b47c890fce21abdd12b3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workspaceId", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7abdc1fbf9f6faf28a28e5ee6b98175831e26f66b11fe8cc1732d2b924966cb5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.datasource.RosDatasetProps",
    jsii_struct_bases=[],
    name_mapping={
        "dataset_id": "datasetId",
        "workspace_id": "workspaceId",
        "refresh_options": "refreshOptions",
    },
)
class RosDatasetProps:
    def __init__(
        self,
        *,
        dataset_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosDataset``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-dataset

        :param dataset_id: 
        :param workspace_id: 
        :param refresh_options: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__affabf7bf5ba057d03abdd929d9ce8fd5090ea2298cf1e9c0ab446f2490cda3c)
            check_type(argname="argument dataset_id", value=dataset_id, expected_type=type_hints["dataset_id"])
            check_type(argname="argument workspace_id", value=workspace_id, expected_type=type_hints["workspace_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "dataset_id": dataset_id,
            "workspace_id": workspace_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def dataset_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: datasetId: The first ID of the resource.
        '''
        result = self._values.get("dataset_id")
        assert result is not None, "Required property 'dataset_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        workspaceId: The ID of the workspace where the dataset is located. For details about how to obtain the workspace ID, see [ListWorkspaces].
        If this parameter is not configured, the default workspace is used. If the default workspace does not exist, an error is reported.
        '''
        result = self._values.get("workspace_id")
        assert result is not None, "Required property 'workspace_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDatasetProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDatasets(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.datasource.RosDatasets",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::PAI::Datasets``, which is used to query the basic information about datasets.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Datasets`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-datasets
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDatasetsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e041c29c7a8e48b52d63cc5d6daea7cef0b0ffcd1af89ca7fb0d3ae2c4cf220a)
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
            type_hints = typing.get_type_hints(_typecheckingstub__6768ee4501d1e23d09e2db18e3a97be62ed91ca16f2dfbc792e6bdbdc7b72abe)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDatasetIds")
    def attr_dataset_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DatasetIds: The list of dataset IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDatasetIds"))

    @builtins.property
    @jsii.member(jsii_name="attrDatasets")
    def attr_datasets(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Datasets: The list of datasets.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDatasets"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__8ea40bd11f80f33c53418c190a03a7aba5d0038f33124a0d361c8850f0274f3e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="workspaceId")
    def workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        workspaceId: The ID of the workspace where the dataset is located.
        If this parameter is not configured, the default workspace is used. If the default workspace does not exist, an error is reported.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "workspaceId"))

    @workspace_id.setter
    def workspace_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__541d419df250a871e8c25c98f11ef8cdbe15ae17775411a3778c91f48d3988cb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workspaceId", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8ee5285d6e8910d76893297ecdbd4dbf83417cf33da3ce79595161990ccce6db)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__41b0b618fbe2fe4b29e198220c81a9bc61feeea6aab2c64543f5c999c98f20a0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.datasource.RosDatasetsProps",
    jsii_struct_bases=[],
    name_mapping={
        "workspace_id": "workspaceId",
        "refresh_options": "refreshOptions",
        "source_id": "sourceId",
    },
)
class RosDatasetsProps:
    def __init__(
        self,
        *,
        workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosDatasets``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-datasets

        :param workspace_id: 
        :param refresh_options: 
        :param source_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__de7ba74d972983299e2f45c070da2882c2783c6b9ebefcf1db8ba3a3cf45a49b)
            check_type(argname="argument workspace_id", value=workspace_id, expected_type=type_hints["workspace_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument source_id", value=source_id, expected_type=type_hints["source_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "workspace_id": workspace_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if source_id is not None:
            self._values["source_id"] = source_id

    @builtins.property
    def workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        workspaceId: The ID of the workspace where the dataset is located.
        If this parameter is not configured, the default workspace is used. If the default workspace does not exist, an error is reported.
        '''
        result = self._values.get("workspace_id")
        assert result is not None, "Required property 'workspace_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
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

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDatasetsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosService(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.datasource.RosService",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::PAI::Service``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Service`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-service
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
            type_hints = typing.get_type_hints(_typecheckingstub__534b422a2a80bb20eed3777fe7f1dbc2d1641cb42583e5045f7b705c9e16c985)
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
            type_hints = typing.get_type_hints(_typecheckingstub__2be9a6f3604da0121cb2427cf0212cb004690bbf5f2a7a3d7685aff0a32a6d02)
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
        :Attribute: AccessToken: The request token of the service.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccessToken"))

    @builtins.property
    @jsii.member(jsii_name="attrCallerUid")
    def attr_caller_uid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CallerUid: The user ID of the account that is used to create the service.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCallerUid"))

    @builtins.property
    @jsii.member(jsii_name="attrCpu")
    def attr_cpu(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Cpu: The CPU that you applied for each instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCpu"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: The time when the service was created.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrCurrentVersion")
    def attr_current_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CurrentVersion: The current version of the model.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCurrentVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrExtraData")
    def attr_extra_data(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ExtraData: The additional information about the service.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExtraData"))

    @builtins.property
    @jsii.member(jsii_name="attrGpu")
    def attr_gpu(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Gpu: The GPU that you applied for each instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGpu"))

    @builtins.property
    @jsii.member(jsii_name="attrImage")
    def attr_image(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Image: The data image of the service.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImage"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetEndpoint")
    def attr_internet_endpoint(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InternetEndpoint: The public endpoint of the service.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInternetEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrIntranetEndpoint")
    def attr_intranet_endpoint(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IntranetEndpoint: The private endpoint of the service.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIntranetEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrLabels")
    def attr_labels(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Labels: The tags of the service.
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
        :Attribute: Memory: The memory that you applied for each instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMemory"))

    @builtins.property
    @jsii.member(jsii_name="attrMessage")
    def attr_message(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Message: The summary of the service.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMessage"))

    @builtins.property
    @jsii.member(jsii_name="attrNamespace")
    def attr_namespace(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Namespace: The namespace of the service.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNamespace"))

    @builtins.property
    @jsii.member(jsii_name="attrParentUid")
    def attr_parent_uid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ParentUid: The user ID of the Alibaba Cloud account that is used to create the service.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrParentUid"))

    @builtins.property
    @jsii.member(jsii_name="attrPendingInstance")
    def attr_pending_instance(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PendingInstance: The number of instances for the suspended service.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPendingInstance"))

    @builtins.property
    @jsii.member(jsii_name="attrReason")
    def attr_reason(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Reason: The reason why the service is in the current state.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReason"))

    @builtins.property
    @jsii.member(jsii_name="attrResource")
    def attr_resource(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Resource: The resource group to which the service belongs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResource"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceAlias")
    def attr_resource_alias(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceAlias: The alias of the resource group to which the service belongs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceAlias"))

    @builtins.property
    @jsii.member(jsii_name="attrRole")
    def attr_role(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Role: The role of the service.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRole"))

    @builtins.property
    @jsii.member(jsii_name="attrRoleAttrs")
    def attr_role_attrs(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RoleAttrs: The additional attributes of the service role.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRoleAttrs"))

    @builtins.property
    @jsii.member(jsii_name="attrRunningInstance")
    def attr_running_instance(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RunningInstance: The number of instances for the running service.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRunningInstance"))

    @builtins.property
    @jsii.member(jsii_name="attrSafetyLock")
    def attr_safety_lock(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SafetyLock: The security lock of the service.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSafetyLock"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceConfig")
    def attr_service_config(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ServiceConfig: The configurations of the service.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServiceConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceGroup")
    def attr_service_group(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ServiceGroup: The group to which the service belongs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServiceGroup"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ServiceName: The name of the service.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServiceName"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceUid")
    def attr_service_uid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ServiceUid: The ID of the service. The value of this property is the same as the value of ServiceId.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServiceUid"))

    @builtins.property
    @jsii.member(jsii_name="attrTotalInstance")
    def attr_total_instance(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TotalInstance: The total number of instances of the service.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTotalInstance"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdateTime")
    def attr_update_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UpdateTime: The time when the service was updated.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUpdateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrWeight")
    def attr_weight(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Weight: The weight of the canary release for the service.
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
            type_hints = typing.get_type_hints(_typecheckingstub__73496f3f863497af4e28577febb20d271e6c178310eacd528b3cffb2e9aba593)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="serviceName")
    def service_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: serviceName: The name of the service.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "serviceName"))

    @service_name.setter
    def service_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7ef9bd98e2234be38041da096488b149494939f8dd4638e837bfb2e3c3e74c5d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serviceName", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__602687837a157a37f59f326b5a337ec79ffd8928035a49e5e80eef0b2b815c8e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.datasource.RosServiceProps",
    jsii_struct_bases=[],
    name_mapping={"service_name": "serviceName", "refresh_options": "refreshOptions"},
)
class RosServiceProps:
    def __init__(
        self,
        *,
        service_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosService``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-service

        :param service_name: 
        :param refresh_options: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f82293b1613c13ea321e3bc39d26fa96dbaeb083705120ff927feaaab6282633)
            check_type(argname="argument service_name", value=service_name, expected_type=type_hints["service_name"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "service_name": service_name,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def service_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: serviceName: The name of the service.
        '''
        result = self._values.get("service_name")
        assert result is not None, "Required property 'service_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosServiceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosServices(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.datasource.RosServices",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::PAI::Services``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Services`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-services
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosServicesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8e2c1b1e14dbc8d731b7b7c212be91d56afce260c982e82a7063db232a254bfc)
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
            type_hints = typing.get_type_hints(_typecheckingstub__147b4352ad22b1ef600141d2b4703df154a6e78ee85b103d0d3baf872df69381)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceNames")
    def attr_service_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ServiceNames: The list of service names.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServiceNames"))

    @builtins.property
    @jsii.member(jsii_name="attrServices")
    def attr_services(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Services: The list of services.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServices"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__1031544b263fc82885ec4104e06284a7511a94005257f2f8b79adc8ffc6d5427)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__d7dcaada7d939d9a02d7c8c81f2a066bc479a9dcdfc5d744078b00e256f7c5dc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "labels", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__62942cc9ca3973d89b4fe711a8b8271dfe03945c64830738d7694ae5b76b58d1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)

    @builtins.property
    @jsii.member(jsii_name="serviceName")
    def service_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: serviceName: Service Name.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "serviceName"))

    @service_name.setter
    def service_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__13a08cad11de83b2267998102186707cc7fd23bc017c34d4f21b7f5731d5eb03)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serviceName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.datasource.RosServicesProps",
    jsii_struct_bases=[],
    name_mapping={
        "labels": "labels",
        "refresh_options": "refreshOptions",
        "service_name": "serviceName",
    },
)
class RosServicesProps:
    def __init__(
        self,
        *,
        labels: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        service_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosServices``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-services

        :param labels: 
        :param refresh_options: 
        :param service_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2609da1a6495816c6f7bca69ff9043cff4655dc07009e23cdb83540c9c4b5a7e)
            check_type(argname="argument labels", value=labels, expected_type=type_hints["labels"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument service_name", value=service_name, expected_type=type_hints["service_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if labels is not None:
            self._values["labels"] = labels
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if service_name is not None:
            self._values["service_name"] = service_name

    @builtins.property
    def labels(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: labels: Service Tag.
        '''
        result = self._values.get("labels")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def service_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: serviceName: Service Name.
        '''
        result = self._values.get("service_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosServicesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosWorkspace(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.datasource.RosWorkspace",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::PAI::Workspace``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Workspace`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspace
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
            type_hints = typing.get_type_hints(_typecheckingstub__744b924841ec2b0f1104c15cd1cecf8a474ea4951c53d7d59d7bbb056ec8311d)
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
            type_hints = typing.get_type_hints(_typecheckingstub__6191ced81d4feed8319307c975da5c8d4d096131fef370c2c4d1e1405bcbe0ee)
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
        :Attribute: Description: The description of the workspace.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DisplayName: The display name of the workspace.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDisplayName"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvTypes")
    def attr_env_types(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EnvTypes: The environments of the workspace.
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
    @jsii.member(jsii_name="attrIsDefault")
    def attr_is_default(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IsDefault: Default Workspace.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIsDefault"))

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
        :Attribute: WorkspaceId: The first ID of the resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrWorkspaceId"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceName")
    def attr_workspace_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: WorkspaceName: The name of the workspace.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrWorkspaceName"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__b59f6a556add8a993c52fa4a5b4abf9972894dfa1e24fdbbde4a8bc8029a5c77)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="workspaceId")
    def workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: workspaceId: The ID of the workspace.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "workspaceId"))

    @workspace_id.setter
    def workspace_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__837a7ca453b87dcb03d5f61e93fed93615c172cad7b06a0f78bc98b0d1d2c899)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workspaceId", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__13220b8724f62457c1d7a57093debdf3b359e2a1d5aaccfbc931596855bcd34d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.datasource.RosWorkspaceProps",
    jsii_struct_bases=[],
    name_mapping={"workspace_id": "workspaceId", "refresh_options": "refreshOptions"},
)
class RosWorkspaceProps:
    def __init__(
        self,
        *,
        workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosWorkspace``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspace

        :param workspace_id: 
        :param refresh_options: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9e38d79e90718c803384a4d0ab9b2981da88d22d2ea5b95ba71a2ba53ad6bbdc)
            check_type(argname="argument workspace_id", value=workspace_id, expected_type=type_hints["workspace_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "workspace_id": workspace_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: workspaceId: The ID of the workspace.
        '''
        result = self._values.get("workspace_id")
        assert result is not None, "Required property 'workspace_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
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
    jsii_type="@alicloud/ros-cdk-pai.datasource.RosWorkspaceResourceDlc",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::PAI::WorkspaceResourceDlc``, which is used to query the information about a Deep Learning Containers (DLC) resource that is associated with a Platform for AI (PAI) workspace.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``WorkspaceResourceDlc`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourcedlc
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
            type_hints = typing.get_type_hints(_typecheckingstub__7b2916eecd145daa8e364faae119c2040a978061b4d9a6c030d4f2f06251327d)
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
            type_hints = typing.get_type_hints(_typecheckingstub__b0c3a76918ef543869aada537883cc93dfc90d596a1e7d6df757130bfb4abb4d)
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
            type_hints = typing.get_type_hints(_typecheckingstub__64c938dd7c600bfc94a85b5c4c71ba38f6cac576cd82b52d4b8a365ee38561c1)
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
            type_hints = typing.get_type_hints(_typecheckingstub__e3bca6bc5e8100bbafa1e852f7803d7ed917a23974d68c90aae9c4fb17765bc3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupName", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__40ecb0bf20faaceca097f94ac1fde833785a5189d9f10947865a3731f8a485e7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workspaceId", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4c0ddd41c66527b9cf426616ddc021099fd2a1ef8c1e7939f677059905a862ce)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.datasource.RosWorkspaceResourceDlcProps",
    jsii_struct_bases=[],
    name_mapping={
        "group_name": "groupName",
        "workspace_id": "workspaceId",
        "refresh_options": "refreshOptions",
    },
)
class RosWorkspaceResourceDlcProps:
    def __init__(
        self,
        *,
        group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosWorkspaceResourceDlc``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourcedlc

        :param group_name: 
        :param workspace_id: 
        :param refresh_options: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__643364ff9be3f6ed2303efe1695a5106a783407a838a44a71e0b28fda5313361)
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument workspace_id", value=workspace_id, expected_type=type_hints["workspace_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "group_name": group_name,
            "workspace_id": workspace_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

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
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosWorkspaceResourceDlcProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosWorkspaceResourceDlcs(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.datasource.RosWorkspaceResourceDlcs",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::PAI::WorkspaceResourceDlcs``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``WorkspaceResourceDlcs`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourcedlcs
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosWorkspaceResourceDlcsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__412b6d3d923ccc06cfa415f4b528e77ba7a408fe27e9a9b008ef03d393b20762)
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
            type_hints = typing.get_type_hints(_typecheckingstub__7149108811dadefb48f967dc283106fbac05c8ea786d6766edc370fbad8d8943)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupNames")
    def attr_group_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GroupNames: The list of group names.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGroupNames"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceResourceDlcs")
    def attr_workspace_resource_dlcs(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: WorkspaceResourceDlcs: The list of workspace resource dlcs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrWorkspaceResourceDlcs"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__5393c2d50d278532e8fdeea170016c1a5c13854fdde51f12216ae9bf30136489)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__f416d0045aceb8747ac309224a6b14d00f7f34a2622b7934337399e52bf54379)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workspaceId", value)

    @builtins.property
    @jsii.member(jsii_name="groupName")
    def group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groupName: Resource group name. If you want to obtain a resource group name, see [ListResources].
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "groupName"))

    @group_name.setter
    def group_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f80d38f358b5d5ae803e6ce8b476a2d597935e751f3c0ff8ada7bae95777b2df)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupName", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__970d58b72a91f47252c930294474b870e55f6ed458e6b8125c3db9e39c35d386)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.datasource.RosWorkspaceResourceDlcsProps",
    jsii_struct_bases=[],
    name_mapping={
        "workspace_id": "workspaceId",
        "group_name": "groupName",
        "refresh_options": "refreshOptions",
    },
)
class RosWorkspaceResourceDlcsProps:
    def __init__(
        self,
        *,
        workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosWorkspaceResourceDlcs``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourcedlcs

        :param workspace_id: 
        :param group_name: 
        :param refresh_options: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b959faab1430a7c324b548cac67ca01e27c9389cd4ee4a6546d7fa8d85945dc0)
            check_type(argname="argument workspace_id", value=workspace_id, expected_type=type_hints["workspace_id"])
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "workspace_id": workspace_id,
        }
        if group_name is not None:
            self._values["group_name"] = group_name
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

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
    def group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groupName: Resource group name. If you want to obtain a resource group name, see [ListResources].
        '''
        result = self._values.get("group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosWorkspaceResourceDlcsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosWorkspaceResourceFlink(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.datasource.RosWorkspaceResourceFlink",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::PAI::WorkspaceResourceFlink``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``WorkspaceResourceFlink`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourceflink
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
            type_hints = typing.get_type_hints(_typecheckingstub__8c5a6c210f7b950f1d82ef38ce0c793c6c529c09ca87af16cf66ad1d5eb837b9)
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
            type_hints = typing.get_type_hints(_typecheckingstub__d7c7e659f8d46fb74364e7ad7140190081199b53f07cd436244c0028b5ec6d9f)
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
        :Attribute: GroupName: Resource group name. If you want to obtain a resource group name.
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
            type_hints = typing.get_type_hints(_typecheckingstub__246b604d08a9361f539aacbe310cac7f320a66934d51d78f005b19a58bbff050)
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
            type_hints = typing.get_type_hints(_typecheckingstub__ce5f93207a31d5d66c5a6d7c54f059011825f4b08ab53b312020965db2a2153e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupName", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__f23deb508e1e884395b06f038366121d3926c711e9d48d32a9a030800c19aa09)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workspaceId", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a1e3c5f78d82d3254b830a93c0ee31aee3a2c495442cda1facbaacaef6c4eb1f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.datasource.RosWorkspaceResourceFlinkProps",
    jsii_struct_bases=[],
    name_mapping={
        "group_name": "groupName",
        "workspace_id": "workspaceId",
        "refresh_options": "refreshOptions",
    },
)
class RosWorkspaceResourceFlinkProps:
    def __init__(
        self,
        *,
        group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosWorkspaceResourceFlink``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourceflink

        :param group_name: 
        :param workspace_id: 
        :param refresh_options: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e697d7dda293282e55671ac366f1923c5e19f7fca190ef3d444f7dc00822797a)
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument workspace_id", value=workspace_id, expected_type=type_hints["workspace_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "group_name": group_name,
            "workspace_id": workspace_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

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
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosWorkspaceResourceFlinkProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosWorkspaceResourceFlinks(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.datasource.RosWorkspaceResourceFlinks",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::PAI::WorkspaceResourceFlinks``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``WorkspaceResourceFlinks`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourceflinks
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosWorkspaceResourceFlinksProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4f7eeed3c96f4c8d6298d61ec2b99672cb54cc2bc5c988b684b554f54f7ecbdd)
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
            type_hints = typing.get_type_hints(_typecheckingstub__338a36546e009337af025f58bdd78a06d74a9b6e8fd26976578f096ebc36bd2c)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupNames")
    def attr_group_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GroupNames: The list of group names.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGroupNames"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceResourceFlinks")
    def attr_workspace_resource_flinks(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: WorkspaceResourceFlinks: The list of workspace resource flinks.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrWorkspaceResourceFlinks"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__385864b2d9d34c96532b5614ae606eba48ed73a1d1fc6edb944e256015681618)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__99944d43bb3d9427e59998d05a6855716e22cb8ae0484a77a683bba4d3184617)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workspaceId", value)

    @builtins.property
    @jsii.member(jsii_name="groupName")
    def group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groupName: Resource group name. If you want to obtain a resource group name.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "groupName"))

    @group_name.setter
    def group_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8d1ebb59af50e77e15db0d2fc7c46c596abaed2a1c27ea9a71a025ffa3ec2c77)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupName", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__708b5f1b86538197d409cc463150379f9b5e0a33d23ec8984f97a0f644495647)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.datasource.RosWorkspaceResourceFlinksProps",
    jsii_struct_bases=[],
    name_mapping={
        "workspace_id": "workspaceId",
        "group_name": "groupName",
        "refresh_options": "refreshOptions",
    },
)
class RosWorkspaceResourceFlinksProps:
    def __init__(
        self,
        *,
        workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosWorkspaceResourceFlinks``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourceflinks

        :param workspace_id: 
        :param group_name: 
        :param refresh_options: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__41e87fa64f16f18d8b70295fa139b836097cc95489c9d00ea8e0bdf581cf0b8e)
            check_type(argname="argument workspace_id", value=workspace_id, expected_type=type_hints["workspace_id"])
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "workspace_id": workspace_id,
        }
        if group_name is not None:
            self._values["group_name"] = group_name
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

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
    def group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groupName: Resource group name. If you want to obtain a resource group name.
        '''
        result = self._values.get("group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosWorkspaceResourceFlinksProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosWorkspaceResourceMaxCompute(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.datasource.RosWorkspaceResourceMaxCompute",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::PAI::WorkspaceResourceMaxCompute``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``WorkspaceResourceMaxCompute`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourcemaxcompute
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
            type_hints = typing.get_type_hints(_typecheckingstub__ad07b01ef78adf9a6f5f027f517a166c72b55364996b038b678c3283295e00f8)
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
            type_hints = typing.get_type_hints(_typecheckingstub__b6bd5a75e3497b738751c3f4fd93d247722ab8e0c01707d014f6d6ec94fb74b0)
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
        :Attribute: GroupName: Resource group name. If you want to obtain a resource group name.
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
            type_hints = typing.get_type_hints(_typecheckingstub__6c3b2a2c25dd6325d5ea36beb61dfcea867b7c21d02676fe1d5c09dd809bb0e5)
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
            type_hints = typing.get_type_hints(_typecheckingstub__56461db1298058ed09d79b8a68ae4e8becae2afdb0a736e5394438d81cc542f0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupName", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__2b756335cc7498db55bbc99a41de2b8ef3363a6ca5c301e958dc12d271846cb2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workspaceId", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0c9df1431d8e1159b158d96c5b7650e4e0c40d2b935c10edd1accaa65f40ed8c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.datasource.RosWorkspaceResourceMaxComputeProps",
    jsii_struct_bases=[],
    name_mapping={
        "group_name": "groupName",
        "workspace_id": "workspaceId",
        "refresh_options": "refreshOptions",
    },
)
class RosWorkspaceResourceMaxComputeProps:
    def __init__(
        self,
        *,
        group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosWorkspaceResourceMaxCompute``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourcemaxcompute

        :param group_name: 
        :param workspace_id: 
        :param refresh_options: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b72b71082d23db713a727f2173aa3ded599f6d062d3cc718c75e78f1e48a2ff6)
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument workspace_id", value=workspace_id, expected_type=type_hints["workspace_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "group_name": group_name,
            "workspace_id": workspace_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

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
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosWorkspaceResourceMaxComputeProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosWorkspaceResourceMaxComputes(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.datasource.RosWorkspaceResourceMaxComputes",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::PAI::WorkspaceResourceMaxComputes``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``WorkspaceResourceMaxComputes`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourcemaxcomputes
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosWorkspaceResourceMaxComputesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cb9ec40ecfe90a40133aa588a328c8f8e0dd2a04528ecf7eb5fd0a1aef2327da)
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
            type_hints = typing.get_type_hints(_typecheckingstub__c686c6d29615eb7ce24955382e30167fd40ccd2b77a74ee8e42ca8aa086797cb)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupNames")
    def attr_group_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GroupNames: The list of group names.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGroupNames"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceResourceMaxComputes")
    def attr_workspace_resource_max_computes(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: WorkspaceResourceMaxComputes: The list of workspace resource max computes.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrWorkspaceResourceMaxComputes"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__3879c28ac5f26cc10f7c17e61bc3d0a67b1e5a970d5e76ec165de2c004f01c71)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__625cf0cda37c21fadd256aafc9f9a1fd997ec280c0b159ac52b7d1bab7ca6288)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workspaceId", value)

    @builtins.property
    @jsii.member(jsii_name="groupName")
    def group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groupName: Resource group name. If you want to obtain a resource group name.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "groupName"))

    @group_name.setter
    def group_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__38b1373c090658cb63373a4fde1f7d09938bc4333ec52ba0e6f0d168d4dc2fad)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupName", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dbe108337b00aaedc703b99fec088790b0ea6b43f17e81d87b78b1a3518b1533)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.datasource.RosWorkspaceResourceMaxComputesProps",
    jsii_struct_bases=[],
    name_mapping={
        "workspace_id": "workspaceId",
        "group_name": "groupName",
        "refresh_options": "refreshOptions",
    },
)
class RosWorkspaceResourceMaxComputesProps:
    def __init__(
        self,
        *,
        workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosWorkspaceResourceMaxComputes``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourcemaxcomputes

        :param workspace_id: 
        :param group_name: 
        :param refresh_options: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__62de2b768c7c35fe87c99450a0ff8f8b351d40aebf94b0b28955e8d934a24d8d)
            check_type(argname="argument workspace_id", value=workspace_id, expected_type=type_hints["workspace_id"])
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "workspace_id": workspace_id,
        }
        if group_name is not None:
            self._values["group_name"] = group_name
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

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
    def group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groupName: Resource group name. If you want to obtain a resource group name.
        '''
        result = self._values.get("group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosWorkspaceResourceMaxComputesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosWorkspaces(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.datasource.RosWorkspaces",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::PAI::Workspaces``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Workspaces`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaces
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosWorkspacesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__93a8a755c2fb094427b9c642c27b73a9447c1616f1cbca3a5f07170e34faeff8)
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
            type_hints = typing.get_type_hints(_typecheckingstub__774ebd18e3b3fde7ed93f1f83ac324d332074d80ce1730845c4ea4dc54e3da1f)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceIds")
    def attr_workspace_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: WorkspaceIds: The list of workspace IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrWorkspaceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaces")
    def attr_workspaces(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Workspaces: The list of workspaces.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrWorkspaces"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__38b8022d62a3379ee28a290a17c35a67ff749bbca95891082d8311627827d78f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__314fb22c5c330bccc56ddcef6928bc81831dd6c0fb6e742db54c47699ab36c40)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)

    @builtins.property
    @jsii.member(jsii_name="workspaceId")
    def workspace_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: workspaceId: The ID of the workspace.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "workspaceId"))

    @workspace_id.setter
    def workspace_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__81af7cc3d3f24e0b15434743c279ec53b375b5d314f6b66ad6c9c8b20d33b5a1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workspaceId", value)

    @builtins.property
    @jsii.member(jsii_name="workspaceName")
    def workspace_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        workspaceName: The workspace name. The format is as follows:

        - 3 to 23 characters in length and can contain letters, underscores, or numbers.
        - Must start with a large or small letter.
        - Unique in the current region.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "workspaceName"))

    @workspace_name.setter
    def workspace_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2f27f88a51cf0b512d4f725202430583914c512660f89e697701daa11c7434f7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workspaceName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.datasource.RosWorkspacesProps",
    jsii_struct_bases=[],
    name_mapping={
        "refresh_options": "refreshOptions",
        "workspace_id": "workspaceId",
        "workspace_name": "workspaceName",
    },
)
class RosWorkspacesProps:
    def __init__(
        self,
        *,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        workspace_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        workspace_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosWorkspaces``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaces

        :param refresh_options: 
        :param workspace_id: 
        :param workspace_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0d760d97c9c602f9e62fe51dc6dbb2272f59e699c16fbe749e3425198c698c1a)
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument workspace_id", value=workspace_id, expected_type=type_hints["workspace_id"])
            check_type(argname="argument workspace_name", value=workspace_name, expected_type=type_hints["workspace_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if workspace_id is not None:
            self._values["workspace_id"] = workspace_id
        if workspace_name is not None:
            self._values["workspace_name"] = workspace_name

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def workspace_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: workspaceId: The ID of the workspace.
        '''
        result = self._values.get("workspace_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def workspace_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        workspaceName: The workspace name. The format is as follows:

        - 3 to 23 characters in length and can contain letters, underscores, or numbers.
        - Must start with a large or small letter.
        - Unique in the current region.
        '''
        result = self._values.get("workspace_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosWorkspacesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IService)
class Service(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.datasource.Service",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::PAI::Service``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosService``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-service
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
            type_hints = typing.get_type_hints(_typecheckingstub__46f2ea8427874c40188e85aedf61b2f0279344d44c775c04e197d660813ee6cb)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAccessToken")
    def attr_access_token(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AccessToken: The request token of the service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAccessToken"))

    @builtins.property
    @jsii.member(jsii_name="attrCallerUid")
    def attr_caller_uid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CallerUid: The user ID of the account that is used to create the service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCallerUid"))

    @builtins.property
    @jsii.member(jsii_name="attrCpu")
    def attr_cpu(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Cpu: The CPU that you applied for each instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCpu"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The time when the service was created.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrCurrentVersion")
    def attr_current_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CurrentVersion: The current version of the model.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCurrentVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrExtraData")
    def attr_extra_data(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExtraData: The additional information about the service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrExtraData"))

    @builtins.property
    @jsii.member(jsii_name="attrGpu")
    def attr_gpu(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Gpu: The GPU that you applied for each instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGpu"))

    @builtins.property
    @jsii.member(jsii_name="attrImage")
    def attr_image(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Image: The data image of the service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrImage"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetEndpoint")
    def attr_internet_endpoint(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InternetEndpoint: The public endpoint of the service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInternetEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrIntranetEndpoint")
    def attr_intranet_endpoint(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IntranetEndpoint: The private endpoint of the service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIntranetEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrLabels")
    def attr_labels(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Labels: The tags of the service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLabels"))

    @builtins.property
    @jsii.member(jsii_name="attrLatestVersion")
    def attr_latest_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LatestVersion: The latest version of the service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLatestVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrMemory")
    def attr_memory(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Memory: The memory that you applied for each instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMemory"))

    @builtins.property
    @jsii.member(jsii_name="attrMessage")
    def attr_message(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Message: The summary of the service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMessage"))

    @builtins.property
    @jsii.member(jsii_name="attrNamespace")
    def attr_namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Namespace: The namespace of the service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNamespace"))

    @builtins.property
    @jsii.member(jsii_name="attrParentUid")
    def attr_parent_uid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ParentUid: The user ID of the Alibaba Cloud account that is used to create the service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrParentUid"))

    @builtins.property
    @jsii.member(jsii_name="attrPendingInstance")
    def attr_pending_instance(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PendingInstance: The number of instances for the suspended service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPendingInstance"))

    @builtins.property
    @jsii.member(jsii_name="attrReason")
    def attr_reason(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Reason: The reason why the service is in the current state.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrReason"))

    @builtins.property
    @jsii.member(jsii_name="attrResource")
    def attr_resource(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Resource: The resource group to which the service belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResource"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceAlias")
    def attr_resource_alias(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceAlias: The alias of the resource group to which the service belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceAlias"))

    @builtins.property
    @jsii.member(jsii_name="attrRole")
    def attr_role(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Role: The role of the service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRole"))

    @builtins.property
    @jsii.member(jsii_name="attrRoleAttrs")
    def attr_role_attrs(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RoleAttrs: The additional attributes of the service role.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRoleAttrs"))

    @builtins.property
    @jsii.member(jsii_name="attrRunningInstance")
    def attr_running_instance(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RunningInstance: The number of instances for the running service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRunningInstance"))

    @builtins.property
    @jsii.member(jsii_name="attrSafetyLock")
    def attr_safety_lock(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SafetyLock: The security lock of the service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSafetyLock"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceConfig")
    def attr_service_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServiceConfig: The configurations of the service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrServiceConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceGroup")
    def attr_service_group(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServiceGroup: The group to which the service belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrServiceGroup"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServiceName: The name of the service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrServiceName"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceUid")
    def attr_service_uid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServiceUid: The ID of the service.

        The value of this property is the same as the value of ServiceId.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrServiceUid"))

    @builtins.property
    @jsii.member(jsii_name="attrTotalInstance")
    def attr_total_instance(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TotalInstance: The total number of instances of the service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTotalInstance"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdateTime")
    def attr_update_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UpdateTime: The time when the service was updated.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUpdateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrWeight")
    def attr_weight(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Weight: The weight of the canary release for the service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWeight"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ServiceProps":
        return typing.cast("ServiceProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a1b27f2ee4058bd9e7a6472e33834fe8eb863ecffd9a32be292c78363e59cab1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f4e42fa260938201a97c1afdf72ac637bcafefa079ea2acea5fab68cb5904ec2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__57d6bd6342021a687f768d91909c798229423f9915a2bd3402426b195500cb85)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.datasource.ServiceProps",
    jsii_struct_bases=[],
    name_mapping={"service_name": "serviceName", "refresh_options": "refreshOptions"},
)
class ServiceProps:
    def __init__(
        self,
        *,
        service_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Service``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-service

        :param service_name: Property serviceName: The name of the service.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__be9aa17b5b90c34de2f04aa8d59b08b00bb92d8d608aa0cc0c292e2fed418171)
            check_type(argname="argument service_name", value=service_name, expected_type=type_hints["service_name"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "service_name": service_name,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def service_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property serviceName: The name of the service.'''
        result = self._values.get("service_name")
        assert result is not None, "Required property 'service_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ServiceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IServices)
class Services(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.datasource.Services",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::PAI::Services``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosServices``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-services
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["ServicesProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7dfdc8bd7471ecd1c6af8f392089c76d36999259a20ee449fb4918f0518351a2)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrServiceNames")
    def attr_service_names(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServiceNames: The list of service names.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrServiceNames"))

    @builtins.property
    @jsii.member(jsii_name="attrServices")
    def attr_services(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Services: The list of services.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrServices"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ServicesProps":
        return typing.cast("ServicesProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1c174650ebec6a88379152db62451d376d7ac165fd3727f5f5a9b56f01d895e1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e49327fa9620cb69fda768f261b9796aafecc71bc57642f18750f96c56726e03)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__69daef4c5adfd5e9f04c585ed8287f54e0e4b63b5e449ee431e2a37de4be0b0e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.datasource.ServicesProps",
    jsii_struct_bases=[],
    name_mapping={
        "labels": "labels",
        "refresh_options": "refreshOptions",
        "service_name": "serviceName",
    },
)
class ServicesProps:
    def __init__(
        self,
        *,
        labels: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        service_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Services``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-services

        :param labels: Property labels: Service Tag.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        :param service_name: Property serviceName: Service Name.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__49237c3ccc446959a39aa651ee95898e86a68b3f16e79adee304064a2007d49d)
            check_type(argname="argument labels", value=labels, expected_type=type_hints["labels"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument service_name", value=service_name, expected_type=type_hints["service_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if labels is not None:
            self._values["labels"] = labels
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if service_name is not None:
            self._values["service_name"] = service_name

    @builtins.property
    def labels(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property labels: Service Tag.'''
        result = self._values.get("labels")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def service_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property serviceName: Service Name.'''
        result = self._values.get("service_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ServicesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IWorkspace)
class Workspace(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.datasource.Workspace",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::PAI::Workspace``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosWorkspace``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspace
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
            type_hints = typing.get_type_hints(_typecheckingstub__b10c11af1906b65b14969dd3a58c1f895a2a7456ea11512f74131f85284dee75)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAdminNames")
    def attr_admin_names(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AdminNames: List of administrator account names.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAdminNames"))

    @builtins.property
    @jsii.member(jsii_name="attrCreator")
    def attr_creator(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Creator: The user ID of the creator.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreator"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of the workspace.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DisplayName: The display name of the workspace.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDisplayName"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvTypes")
    def attr_env_types(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvTypes: The environments of the workspace.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnvTypes"))

    @builtins.property
    @jsii.member(jsii_name="attrExtraInfos")
    def attr_extra_infos(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExtraInfos: Additional information, currently including TenantId (tenant ID).'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrExtraInfos"))

    @builtins.property
    @jsii.member(jsii_name="attrIsDefault")
    def attr_is_default(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IsDefault: Default Workspace.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIsDefault"))

    @builtins.property
    @jsii.member(jsii_name="attrUsers")
    def attr_users(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Users: List of users.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUsers"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceId")
    def attr_workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkspaceId: The first ID of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWorkspaceId"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceName")
    def attr_workspace_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkspaceName: The name of the workspace.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWorkspaceName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "WorkspaceProps":
        return typing.cast("WorkspaceProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0862b56809e75ec0a61de4abc4c575866ac8b9754ad71e3b230da732c9986a27)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e88af3601d17f0027a90851ee0350a7c3fca5d5ce7b95d723323af1b73bd3069)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__49e9cf0a80d4b7b0cd982b457ecee7d0c842e65fbb813b0f5740508b5e97d324)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.datasource.WorkspaceProps",
    jsii_struct_bases=[],
    name_mapping={"workspace_id": "workspaceId", "refresh_options": "refreshOptions"},
)
class WorkspaceProps:
    def __init__(
        self,
        *,
        workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Workspace``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspace

        :param workspace_id: Property workspaceId: The ID of the workspace.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7c283b8466827833920617d303ca4857c81c53899500dd156763fd48475ebde2)
            check_type(argname="argument workspace_id", value=workspace_id, expected_type=type_hints["workspace_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "workspace_id": workspace_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property workspaceId: The ID of the workspace.'''
        result = self._values.get("workspace_id")
        assert result is not None, "Required property 'workspace_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "WorkspaceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IWorkspaceResourceDlc)
class WorkspaceResourceDlc(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.datasource.WorkspaceResourceDlc",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::PAI::WorkspaceResourceDlc``, which is used to query the information about a Deep Learning Containers (DLC) resource that is associated with a Platform for AI (PAI) workspace.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosWorkspaceResourceDlc``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourcedlc
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
            type_hints = typing.get_type_hints(_typecheckingstub__3af40da9d074ed9a4ec9037ce53d528d65b970c256d293caf02cace915d7150a)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupName: Resource group name.

        If you want to obtain a resource group name, see [ListResources].
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrIsDefault")
    def attr_is_default(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IsDefault: Indicates whether it is the default resource.

        Currently, this parameter only supports the input of true and does not support false.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIsDefault"))

    @builtins.property
    @jsii.member(jsii_name="attrResources")
    def attr_resources(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Resources: Resource List.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResources"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "WorkspaceResourceDlcProps":
        return typing.cast("WorkspaceResourceDlcProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b297616f9a2d15378cedd73b09e53bbad8f9f1eb5f09dd3d63774198d11a0abc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__799b71659fd8ab616a7650f16dfe8ef3de83b0b44a3ed058223f98973c0164db)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7944d15caaab16d639ef09bdaec979ffc452d38c754c9d75a94afe7d799d5c54)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.datasource.WorkspaceResourceDlcProps",
    jsii_struct_bases=[],
    name_mapping={
        "group_name": "groupName",
        "workspace_id": "workspaceId",
        "refresh_options": "refreshOptions",
    },
)
class WorkspaceResourceDlcProps:
    def __init__(
        self,
        *,
        group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``WorkspaceResourceDlc``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourcedlc

        :param group_name: Property groupName: Resource group name. If you want to obtain a resource group name, see [ListResources].
        :param workspace_id: Property workspaceId: The ID of the workspace to which the workspace belongs.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3a9edb63fd60ebf79163d99babf076e8875eb3f8657d9e392240d16a7799574e)
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument workspace_id", value=workspace_id, expected_type=type_hints["workspace_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "group_name": group_name,
            "workspace_id": workspace_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

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
    def workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property workspaceId: The ID of the workspace to which the workspace belongs.'''
        result = self._values.get("workspace_id")
        assert result is not None, "Required property 'workspace_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "WorkspaceResourceDlcProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IWorkspaceResourceDlcs)
class WorkspaceResourceDlcs(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.datasource.WorkspaceResourceDlcs",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::PAI::WorkspaceResourceDlcs``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosWorkspaceResourceDlcs``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourcedlcs
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["WorkspaceResourceDlcsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8cbed33ee82fefcbeee5be94a115cb450e84006e8e0044335dda068a37e7dd6c)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrGroupNames")
    def attr_group_names(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupNames: The list of group names.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGroupNames"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceResourceDlcs")
    def attr_workspace_resource_dlcs(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkspaceResourceDlcs: The list of workspace resource dlcs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWorkspaceResourceDlcs"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "WorkspaceResourceDlcsProps":
        return typing.cast("WorkspaceResourceDlcsProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__461500de0dbf522395c7ddfb822c607666f29c054cc68ad4bd27e8b88d101af4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7628666a1df74d9084b5576e207fbfc44819a3d1a14630ca1cf9d0afcd6977cc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__99edc194b1f6d0ed2086f42974de6b9d1ecd34e17569d3b2ae714422157c15dd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.datasource.WorkspaceResourceDlcsProps",
    jsii_struct_bases=[],
    name_mapping={
        "workspace_id": "workspaceId",
        "group_name": "groupName",
        "refresh_options": "refreshOptions",
    },
)
class WorkspaceResourceDlcsProps:
    def __init__(
        self,
        *,
        workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``WorkspaceResourceDlcs``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourcedlcs

        :param workspace_id: Property workspaceId: The ID of the workspace to which the workspace belongs.
        :param group_name: Property groupName: Resource group name. If you want to obtain a resource group name, see [ListResources].
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d00874441a1e4410c93be57128018f907efe69feeedf338a9161686e33cb8d32)
            check_type(argname="argument workspace_id", value=workspace_id, expected_type=type_hints["workspace_id"])
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "workspace_id": workspace_id,
        }
        if group_name is not None:
            self._values["group_name"] = group_name
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property workspaceId: The ID of the workspace to which the workspace belongs.'''
        result = self._values.get("workspace_id")
        assert result is not None, "Required property 'workspace_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property groupName: Resource group name.

        If you want to obtain a resource group name, see [ListResources].
        '''
        result = self._values.get("group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "WorkspaceResourceDlcsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IWorkspaceResourceFlink)
class WorkspaceResourceFlink(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.datasource.WorkspaceResourceFlink",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::PAI::WorkspaceResourceFlink``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosWorkspaceResourceFlink``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourceflink
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
            type_hints = typing.get_type_hints(_typecheckingstub__d1905f8bd8639414f82af95b6215fe38c68877951f914c2377c84b23bb085767)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupName: Resource group name.

        If you want to obtain a resource group name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrIsDefault")
    def attr_is_default(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IsDefault: Indicates whether it is the default resource.

        Currently, this parameter only supports the input of true and does not support false.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIsDefault"))

    @builtins.property
    @jsii.member(jsii_name="attrResources")
    def attr_resources(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Resources: Resource List.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResources"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "WorkspaceResourceFlinkProps":
        return typing.cast("WorkspaceResourceFlinkProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__015351f70d167bc8a89b7fb0edfde537ad299c0af8c64a3dba95113924bd8d0a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7c2a5c0c173a4b904411a5093b755d92a36393939bc5a2ede7076b750fff4e34)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__62c1df0fdca37d9e7060e700578d7e060f8d690f7d0e274e02df6cd96349a635)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.datasource.WorkspaceResourceFlinkProps",
    jsii_struct_bases=[],
    name_mapping={
        "group_name": "groupName",
        "workspace_id": "workspaceId",
        "refresh_options": "refreshOptions",
    },
)
class WorkspaceResourceFlinkProps:
    def __init__(
        self,
        *,
        group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``WorkspaceResourceFlink``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourceflink

        :param group_name: Property groupName: Resource group name. If you want to obtain a resource group name.
        :param workspace_id: Property workspaceId: The ID of the workspace to which the workspace belongs.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ede1c55fe8713e8a1f84810bef0162431c565915b0a70392d6f142e9dc221e94)
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument workspace_id", value=workspace_id, expected_type=type_hints["workspace_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "group_name": group_name,
            "workspace_id": workspace_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

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
    def workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property workspaceId: The ID of the workspace to which the workspace belongs.'''
        result = self._values.get("workspace_id")
        assert result is not None, "Required property 'workspace_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "WorkspaceResourceFlinkProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IWorkspaceResourceFlinks)
class WorkspaceResourceFlinks(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.datasource.WorkspaceResourceFlinks",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::PAI::WorkspaceResourceFlinks``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosWorkspaceResourceFlinks``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourceflinks
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["WorkspaceResourceFlinksProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4b60f6817522f459e307f23617cc003d01a67cd1b7daca7904eafcb9a1d42924)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrGroupNames")
    def attr_group_names(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupNames: The list of group names.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGroupNames"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceResourceFlinks")
    def attr_workspace_resource_flinks(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkspaceResourceFlinks: The list of workspace resource flinks.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWorkspaceResourceFlinks"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "WorkspaceResourceFlinksProps":
        return typing.cast("WorkspaceResourceFlinksProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__20252afdba1230389317712e5197a62eb8eeee56cc7c2b1f2fc3fa934ea4723f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8751260d9bb1be12d49ebfb79f6a88edb869b3638e423c3c0bbaad64d79da20b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4dd4b859f411af4583c8b72f69f3d22786add4279f51762f2a2b3c63246d02c6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.datasource.WorkspaceResourceFlinksProps",
    jsii_struct_bases=[],
    name_mapping={
        "workspace_id": "workspaceId",
        "group_name": "groupName",
        "refresh_options": "refreshOptions",
    },
)
class WorkspaceResourceFlinksProps:
    def __init__(
        self,
        *,
        workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``WorkspaceResourceFlinks``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourceflinks

        :param workspace_id: Property workspaceId: The ID of the workspace to which the workspace belongs.
        :param group_name: Property groupName: Resource group name. If you want to obtain a resource group name.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__91c6c83f944761551d88a80d44c4fd74b59468e6fb49f26b6369b4abefd0ba62)
            check_type(argname="argument workspace_id", value=workspace_id, expected_type=type_hints["workspace_id"])
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "workspace_id": workspace_id,
        }
        if group_name is not None:
            self._values["group_name"] = group_name
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property workspaceId: The ID of the workspace to which the workspace belongs.'''
        result = self._values.get("workspace_id")
        assert result is not None, "Required property 'workspace_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property groupName: Resource group name.

        If you want to obtain a resource group name.
        '''
        result = self._values.get("group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "WorkspaceResourceFlinksProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IWorkspaceResourceMaxCompute)
class WorkspaceResourceMaxCompute(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.datasource.WorkspaceResourceMaxCompute",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::PAI::WorkspaceResourceMaxCompute``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosWorkspaceResourceMaxCompute``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourcemaxcompute
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
            type_hints = typing.get_type_hints(_typecheckingstub__7e4f88a754fb81d523c60ed83cf2f715d0d312298f7fe1a107bf91a6c71f185c)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupName: Resource group name.

        If you want to obtain a resource group name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrIsDefault")
    def attr_is_default(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IsDefault: Indicates whether it is the default resource.

        Currently, this parameter only supports the input of true and does not support false.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIsDefault"))

    @builtins.property
    @jsii.member(jsii_name="attrResources")
    def attr_resources(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Resources: Resource List.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResources"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "WorkspaceResourceMaxComputeProps":
        return typing.cast("WorkspaceResourceMaxComputeProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1297fc476224a05886912ddf36962b40bd2fa00bd564af50b9b0908ba7ae9237)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__06626497430dc20c9ab54deafa9ba4d7f9bc3c330bb44dc70cacb5ff7dedc650)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__80eda71ffdf158913b2d9281bcabad5be9f6b774302c3d6a58b53c58b0dd764e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.datasource.WorkspaceResourceMaxComputeProps",
    jsii_struct_bases=[],
    name_mapping={
        "group_name": "groupName",
        "workspace_id": "workspaceId",
        "refresh_options": "refreshOptions",
    },
)
class WorkspaceResourceMaxComputeProps:
    def __init__(
        self,
        *,
        group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``WorkspaceResourceMaxCompute``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourcemaxcompute

        :param group_name: Property groupName: Resource group name. If you want to obtain a resource group name.
        :param workspace_id: Property workspaceId: The ID of the workspace to which the workspace belongs.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ad05410b097c4e69782f8e453e111ca87cd78845aba950211f2396fa77800faa)
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument workspace_id", value=workspace_id, expected_type=type_hints["workspace_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "group_name": group_name,
            "workspace_id": workspace_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

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
    def workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property workspaceId: The ID of the workspace to which the workspace belongs.'''
        result = self._values.get("workspace_id")
        assert result is not None, "Required property 'workspace_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "WorkspaceResourceMaxComputeProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IWorkspaceResourceMaxComputes)
class WorkspaceResourceMaxComputes(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.datasource.WorkspaceResourceMaxComputes",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::PAI::WorkspaceResourceMaxComputes``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosWorkspaceResourceMaxComputes``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourcemaxcomputes
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["WorkspaceResourceMaxComputesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d8c4b6c6eaa8e045f7b0ea52da1bfe58d54cc77105d1e6c8e5d6fe4bc85d3468)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrGroupNames")
    def attr_group_names(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupNames: The list of group names.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGroupNames"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceResourceMaxComputes")
    def attr_workspace_resource_max_computes(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkspaceResourceMaxComputes: The list of workspace resource max computes.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWorkspaceResourceMaxComputes"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "WorkspaceResourceMaxComputesProps":
        return typing.cast("WorkspaceResourceMaxComputesProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0e4544b3f2e2f3889254aafc16c3b48c104e068b4d1743ff1c0e7e9921ee6274)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__be5f9e4614f0f5112e2e63a0dae7cc64f33e79fc784e399a691adfcbbe97e6fe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ffa471d3c9623926a19d98f7fada931a2503280e8f1dd9c18f7ef9796077b2ec)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.datasource.WorkspaceResourceMaxComputesProps",
    jsii_struct_bases=[],
    name_mapping={
        "workspace_id": "workspaceId",
        "group_name": "groupName",
        "refresh_options": "refreshOptions",
    },
)
class WorkspaceResourceMaxComputesProps:
    def __init__(
        self,
        *,
        workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``WorkspaceResourceMaxComputes``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourcemaxcomputes

        :param workspace_id: Property workspaceId: The ID of the workspace to which the workspace belongs.
        :param group_name: Property groupName: Resource group name. If you want to obtain a resource group name.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7acc5c5f30a1f2ea68ddcd3bfc824c71d74e9de861b873b6c9431234cec0027a)
            check_type(argname="argument workspace_id", value=workspace_id, expected_type=type_hints["workspace_id"])
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "workspace_id": workspace_id,
        }
        if group_name is not None:
            self._values["group_name"] = group_name
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property workspaceId: The ID of the workspace to which the workspace belongs.'''
        result = self._values.get("workspace_id")
        assert result is not None, "Required property 'workspace_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property groupName: Resource group name.

        If you want to obtain a resource group name.
        '''
        result = self._values.get("group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "WorkspaceResourceMaxComputesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IWorkspaces)
class Workspaces(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.datasource.Workspaces",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::PAI::Workspaces``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosWorkspaces``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaces
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["WorkspacesProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ac3f7d621923c2d6e729f6ed707e8e2d725e62d59a5df3e896f57475a71b9bb9)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceIds")
    def attr_workspace_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkspaceIds: The list of workspace IDs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWorkspaceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaces")
    def attr_workspaces(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Workspaces: The list of workspaces.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWorkspaces"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "WorkspacesProps":
        return typing.cast("WorkspacesProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4fde8fe5a7d4d2a4a52302688145252e0a3dc8fbeca0e4d81489493b28fb4d36)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e0c7f33b219e8dd853516a108664459fa990c342bb304300359d935129bf8929)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__75f3ce67ebf1698092bf89c1ae3320cfb93a27c658b9a406c6c6411adce8ec3e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.datasource.WorkspacesProps",
    jsii_struct_bases=[],
    name_mapping={
        "refresh_options": "refreshOptions",
        "workspace_id": "workspaceId",
        "workspace_name": "workspaceName",
    },
)
class WorkspacesProps:
    def __init__(
        self,
        *,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        workspace_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        workspace_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Workspaces``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaces

        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        :param workspace_id: Property workspaceId: The ID of the workspace.
        :param workspace_name: Property workspaceName: The workspace name. The format is as follows: - 3 to 23 characters in length and can contain letters, underscores, or numbers. - Must start with a large or small letter. - Unique in the current region.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4cdc744a1f128053ab6f1a26fd22319350ff92eb9c95dff0f360a2df634fc123)
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument workspace_id", value=workspace_id, expected_type=type_hints["workspace_id"])
            check_type(argname="argument workspace_name", value=workspace_name, expected_type=type_hints["workspace_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if workspace_id is not None:
            self._values["workspace_id"] = workspace_id
        if workspace_name is not None:
            self._values["workspace_name"] = workspace_name

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def workspace_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property workspaceId: The ID of the workspace.'''
        result = self._values.get("workspace_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def workspace_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property workspaceName: The workspace name.

        The format is as follows:

        - 3 to 23 characters in length and can contain letters, underscores, or numbers.
        - Must start with a large or small letter.
        - Unique in the current region.
        '''
        result = self._values.get("workspace_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "WorkspacesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IDataset)
class Dataset(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.datasource.Dataset",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::PAI::Dataset``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDataset``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-dataset
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[DatasetProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f85809520c5d1c3ef4edbb9523e6d63e643372bea7f3a94c7927c89938208c42)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAccessibility")
    def attr_accessibility(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Accessibility: Workspace visibility.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAccessibility"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDatasetId")
    def attr_dataset_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DatasetId: The first ID of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDatasetId"))

    @builtins.property
    @jsii.member(jsii_name="attrDatasetName")
    def attr_dataset_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DatasetName: The name of the dataset.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDatasetName"))

    @builtins.property
    @jsii.member(jsii_name="attrDataSourceType")
    def attr_data_source_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DataSourceType: The data source type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDataSourceType"))

    @builtins.property
    @jsii.member(jsii_name="attrDataType")
    def attr_data_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DataType: The dataset type.

        The default value is COMMON.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDataType"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: Custom descriptions of datasets to distinguish between different datasets.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrGmtModifiedTime")
    def attr_gmt_modified_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GmtModifiedTime: Update time.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGmtModifiedTime"))

    @builtins.property
    @jsii.member(jsii_name="attrOptions")
    def attr_options(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Options: The extended field, which is of the JsonString type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOptions"))

    @builtins.property
    @jsii.member(jsii_name="attrOwnerId")
    def attr_owner_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OwnerId: The ID of the primary account.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOwnerId"))

    @builtins.property
    @jsii.member(jsii_name="attrProperty")
    def attr_property(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Property: The properties of the dataset.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrProperty"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceId")
    def attr_source_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceId: The data source ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSourceId"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceType")
    def attr_source_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceType: The data source type.

        The default value is USER.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSourceType"))

    @builtins.property
    @jsii.member(jsii_name="attrUri")
    def attr_uri(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Uri: The Uri configuration sample is as follows:.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUri"))

    @builtins.property
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UserId: The ID of the user to which the dataset belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUserId"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceId")
    def attr_workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkspaceId: The ID of the workspace where the dataset is located.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWorkspaceId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DatasetProps:
        return typing.cast(DatasetProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6455a098ea20c7bea54aa74c6a0f36155231db3f1069570760855ea8789cb67a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9c26ca6e57116f60eb3294ef76704041bfce59547e7942cc3ab94d9aab1ae09a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7c14e61fa8f341f193379a5784411291d4b99c3e39599f7830860dfd093bf021)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IDatasets)
class Datasets(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.datasource.Datasets",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::PAI::Datasets``, which is used to query the basic information about datasets.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDatasets``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-datasets
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[DatasetsProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d1df24f8a5b9d4a798dff17fc6a369509d696d69de8d49fca8d96ad8c383b8ef)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDatasetIds")
    def attr_dataset_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DatasetIds: The list of dataset IDs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDatasetIds"))

    @builtins.property
    @jsii.member(jsii_name="attrDatasets")
    def attr_datasets(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Datasets: The list of datasets.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDatasets"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DatasetsProps:
        return typing.cast(DatasetsProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a5b8a16436cdf2a9c6b82c8fb2e90112b9ede777d1b04c69a734f61b93814052)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e1063eec39c7d3d6ce3c90b7c9173c736f4211aff63727f1655731e3106ce45f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bf25037c9d2ca08d7a6332889ec5cf422da41a31c036b3aac199cce07a3a11f1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "Dataset",
    "DatasetProps",
    "Datasets",
    "DatasetsProps",
    "IDataset",
    "IDatasets",
    "IService",
    "IServices",
    "IWorkspace",
    "IWorkspaceResourceDlc",
    "IWorkspaceResourceDlcs",
    "IWorkspaceResourceFlink",
    "IWorkspaceResourceFlinks",
    "IWorkspaceResourceMaxCompute",
    "IWorkspaceResourceMaxComputes",
    "IWorkspaces",
    "RosDataset",
    "RosDatasetProps",
    "RosDatasets",
    "RosDatasetsProps",
    "RosService",
    "RosServiceProps",
    "RosServices",
    "RosServicesProps",
    "RosWorkspace",
    "RosWorkspaceProps",
    "RosWorkspaceResourceDlc",
    "RosWorkspaceResourceDlcProps",
    "RosWorkspaceResourceDlcs",
    "RosWorkspaceResourceDlcsProps",
    "RosWorkspaceResourceFlink",
    "RosWorkspaceResourceFlinkProps",
    "RosWorkspaceResourceFlinks",
    "RosWorkspaceResourceFlinksProps",
    "RosWorkspaceResourceMaxCompute",
    "RosWorkspaceResourceMaxComputeProps",
    "RosWorkspaceResourceMaxComputes",
    "RosWorkspaceResourceMaxComputesProps",
    "RosWorkspaces",
    "RosWorkspacesProps",
    "Service",
    "ServiceProps",
    "Services",
    "ServicesProps",
    "Workspace",
    "WorkspaceProps",
    "WorkspaceResourceDlc",
    "WorkspaceResourceDlcProps",
    "WorkspaceResourceDlcs",
    "WorkspaceResourceDlcsProps",
    "WorkspaceResourceFlink",
    "WorkspaceResourceFlinkProps",
    "WorkspaceResourceFlinks",
    "WorkspaceResourceFlinksProps",
    "WorkspaceResourceMaxCompute",
    "WorkspaceResourceMaxComputeProps",
    "WorkspaceResourceMaxComputes",
    "WorkspaceResourceMaxComputesProps",
    "Workspaces",
    "WorkspacesProps",
]

publication.publish()

def _typecheckingstub__21b1255c6e92441f2171f122fc041ce04d70bb718708f7544f79b7adeb4179b6(
    *,
    dataset_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d92a5f4e6bc20790fd88ecb4dd061e148610f1a8c9e77642d7626df309835526(
    *,
    workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__934848947ac78a4a946c71c4ddd1fe973d422412c3961d19f661b6b0e18a15dd(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDatasetProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__35c6fa81ab606b457324bb66a5d870ac18ae3edf8067f1ff47bd07b9693cdcb5(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a15709286fb0001bb528bf82c5212531468fa2051ce5e0c12356cbc22d71a010(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a784bd1561a4adf96c803957b26d5d32b66511b4fbe8b5fee6e3744b956b4645(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e4eef5e3218060f3db3f4a982b6b4c566585c7be9ae4b47c890fce21abdd12b3(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7abdc1fbf9f6faf28a28e5ee6b98175831e26f66b11fe8cc1732d2b924966cb5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__affabf7bf5ba057d03abdd929d9ce8fd5090ea2298cf1e9c0ab446f2490cda3c(
    *,
    dataset_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e041c29c7a8e48b52d63cc5d6daea7cef0b0ffcd1af89ca7fb0d3ae2c4cf220a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDatasetsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6768ee4501d1e23d09e2db18e3a97be62ed91ca16f2dfbc792e6bdbdc7b72abe(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8ea40bd11f80f33c53418c190a03a7aba5d0038f33124a0d361c8850f0274f3e(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__541d419df250a871e8c25c98f11ef8cdbe15ae17775411a3778c91f48d3988cb(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8ee5285d6e8910d76893297ecdbd4dbf83417cf33da3ce79595161990ccce6db(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__41b0b618fbe2fe4b29e198220c81a9bc61feeea6aab2c64543f5c999c98f20a0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__de7ba74d972983299e2f45c070da2882c2783c6b9ebefcf1db8ba3a3cf45a49b(
    *,
    workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__534b422a2a80bb20eed3777fe7f1dbc2d1641cb42583e5045f7b705c9e16c985(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosServiceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2be9a6f3604da0121cb2427cf0212cb004690bbf5f2a7a3d7685aff0a32a6d02(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__73496f3f863497af4e28577febb20d271e6c178310eacd528b3cffb2e9aba593(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7ef9bd98e2234be38041da096488b149494939f8dd4638e837bfb2e3c3e74c5d(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__602687837a157a37f59f326b5a337ec79ffd8928035a49e5e80eef0b2b815c8e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f82293b1613c13ea321e3bc39d26fa96dbaeb083705120ff927feaaab6282633(
    *,
    service_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8e2c1b1e14dbc8d731b7b7c212be91d56afce260c982e82a7063db232a254bfc(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosServicesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__147b4352ad22b1ef600141d2b4703df154a6e78ee85b103d0d3baf872df69381(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1031544b263fc82885ec4104e06284a7511a94005257f2f8b79adc8ffc6d5427(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d7dcaada7d939d9a02d7c8c81f2a066bc479a9dcdfc5d744078b00e256f7c5dc(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__62942cc9ca3973d89b4fe711a8b8271dfe03945c64830738d7694ae5b76b58d1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__13a08cad11de83b2267998102186707cc7fd23bc017c34d4f21b7f5731d5eb03(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2609da1a6495816c6f7bca69ff9043cff4655dc07009e23cdb83540c9c4b5a7e(
    *,
    labels: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    service_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__744b924841ec2b0f1104c15cd1cecf8a474ea4951c53d7d59d7bbb056ec8311d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosWorkspaceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6191ced81d4feed8319307c975da5c8d4d096131fef370c2c4d1e1405bcbe0ee(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b59f6a556add8a993c52fa4a5b4abf9972894dfa1e24fdbbde4a8bc8029a5c77(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__837a7ca453b87dcb03d5f61e93fed93615c172cad7b06a0f78bc98b0d1d2c899(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__13220b8724f62457c1d7a57093debdf3b359e2a1d5aaccfbc931596855bcd34d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9e38d79e90718c803384a4d0ab9b2981da88d22d2ea5b95ba71a2ba53ad6bbdc(
    *,
    workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7b2916eecd145daa8e364faae119c2040a978061b4d9a6c030d4f2f06251327d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosWorkspaceResourceDlcProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b0c3a76918ef543869aada537883cc93dfc90d596a1e7d6df757130bfb4abb4d(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__64c938dd7c600bfc94a85b5c4c71ba38f6cac576cd82b52d4b8a365ee38561c1(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e3bca6bc5e8100bbafa1e852f7803d7ed917a23974d68c90aae9c4fb17765bc3(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__40ecb0bf20faaceca097f94ac1fde833785a5189d9f10947865a3731f8a485e7(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4c0ddd41c66527b9cf426616ddc021099fd2a1ef8c1e7939f677059905a862ce(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__643364ff9be3f6ed2303efe1695a5106a783407a838a44a71e0b28fda5313361(
    *,
    group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__412b6d3d923ccc06cfa415f4b528e77ba7a408fe27e9a9b008ef03d393b20762(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosWorkspaceResourceDlcsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7149108811dadefb48f967dc283106fbac05c8ea786d6766edc370fbad8d8943(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5393c2d50d278532e8fdeea170016c1a5c13854fdde51f12216ae9bf30136489(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f416d0045aceb8747ac309224a6b14d00f7f34a2622b7934337399e52bf54379(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f80d38f358b5d5ae803e6ce8b476a2d597935e751f3c0ff8ada7bae95777b2df(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__970d58b72a91f47252c930294474b870e55f6ed458e6b8125c3db9e39c35d386(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b959faab1430a7c324b548cac67ca01e27c9389cd4ee4a6546d7fa8d85945dc0(
    *,
    workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8c5a6c210f7b950f1d82ef38ce0c793c6c529c09ca87af16cf66ad1d5eb837b9(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosWorkspaceResourceFlinkProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d7c7e659f8d46fb74364e7ad7140190081199b53f07cd436244c0028b5ec6d9f(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__246b604d08a9361f539aacbe310cac7f320a66934d51d78f005b19a58bbff050(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ce5f93207a31d5d66c5a6d7c54f059011825f4b08ab53b312020965db2a2153e(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f23deb508e1e884395b06f038366121d3926c711e9d48d32a9a030800c19aa09(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a1e3c5f78d82d3254b830a93c0ee31aee3a2c495442cda1facbaacaef6c4eb1f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e697d7dda293282e55671ac366f1923c5e19f7fca190ef3d444f7dc00822797a(
    *,
    group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4f7eeed3c96f4c8d6298d61ec2b99672cb54cc2bc5c988b684b554f54f7ecbdd(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosWorkspaceResourceFlinksProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__338a36546e009337af025f58bdd78a06d74a9b6e8fd26976578f096ebc36bd2c(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__385864b2d9d34c96532b5614ae606eba48ed73a1d1fc6edb944e256015681618(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__99944d43bb3d9427e59998d05a6855716e22cb8ae0484a77a683bba4d3184617(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8d1ebb59af50e77e15db0d2fc7c46c596abaed2a1c27ea9a71a025ffa3ec2c77(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__708b5f1b86538197d409cc463150379f9b5e0a33d23ec8984f97a0f644495647(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__41e87fa64f16f18d8b70295fa139b836097cc95489c9d00ea8e0bdf581cf0b8e(
    *,
    workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ad07b01ef78adf9a6f5f027f517a166c72b55364996b038b678c3283295e00f8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosWorkspaceResourceMaxComputeProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b6bd5a75e3497b738751c3f4fd93d247722ab8e0c01707d014f6d6ec94fb74b0(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6c3b2a2c25dd6325d5ea36beb61dfcea867b7c21d02676fe1d5c09dd809bb0e5(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__56461db1298058ed09d79b8a68ae4e8becae2afdb0a736e5394438d81cc542f0(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2b756335cc7498db55bbc99a41de2b8ef3363a6ca5c301e958dc12d271846cb2(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0c9df1431d8e1159b158d96c5b7650e4e0c40d2b935c10edd1accaa65f40ed8c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b72b71082d23db713a727f2173aa3ded599f6d062d3cc718c75e78f1e48a2ff6(
    *,
    group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cb9ec40ecfe90a40133aa588a328c8f8e0dd2a04528ecf7eb5fd0a1aef2327da(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosWorkspaceResourceMaxComputesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c686c6d29615eb7ce24955382e30167fd40ccd2b77a74ee8e42ca8aa086797cb(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3879c28ac5f26cc10f7c17e61bc3d0a67b1e5a970d5e76ec165de2c004f01c71(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__625cf0cda37c21fadd256aafc9f9a1fd997ec280c0b159ac52b7d1bab7ca6288(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__38b1373c090658cb63373a4fde1f7d09938bc4333ec52ba0e6f0d168d4dc2fad(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dbe108337b00aaedc703b99fec088790b0ea6b43f17e81d87b78b1a3518b1533(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__62de2b768c7c35fe87c99450a0ff8f8b351d40aebf94b0b28955e8d934a24d8d(
    *,
    workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__93a8a755c2fb094427b9c642c27b73a9447c1616f1cbca3a5f07170e34faeff8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosWorkspacesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__774ebd18e3b3fde7ed93f1f83ac324d332074d80ce1730845c4ea4dc54e3da1f(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__38b8022d62a3379ee28a290a17c35a67ff749bbca95891082d8311627827d78f(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__314fb22c5c330bccc56ddcef6928bc81831dd6c0fb6e742db54c47699ab36c40(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__81af7cc3d3f24e0b15434743c279ec53b375b5d314f6b66ad6c9c8b20d33b5a1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2f27f88a51cf0b512d4f725202430583914c512660f89e697701daa11c7434f7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0d760d97c9c602f9e62fe51dc6dbb2272f59e699c16fbe749e3425198c698c1a(
    *,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    workspace_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    workspace_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__46f2ea8427874c40188e85aedf61b2f0279344d44c775c04e197d660813ee6cb(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ServiceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a1b27f2ee4058bd9e7a6472e33834fe8eb863ecffd9a32be292c78363e59cab1(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f4e42fa260938201a97c1afdf72ac637bcafefa079ea2acea5fab68cb5904ec2(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__57d6bd6342021a687f768d91909c798229423f9915a2bd3402426b195500cb85(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__be9aa17b5b90c34de2f04aa8d59b08b00bb92d8d608aa0cc0c292e2fed418171(
    *,
    service_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7dfdc8bd7471ecd1c6af8f392089c76d36999259a20ee449fb4918f0518351a2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[ServicesProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1c174650ebec6a88379152db62451d376d7ac165fd3727f5f5a9b56f01d895e1(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e49327fa9620cb69fda768f261b9796aafecc71bc57642f18750f96c56726e03(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__69daef4c5adfd5e9f04c585ed8287f54e0e4b63b5e449ee431e2a37de4be0b0e(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__49237c3ccc446959a39aa651ee95898e86a68b3f16e79adee304064a2007d49d(
    *,
    labels: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    service_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b10c11af1906b65b14969dd3a58c1f895a2a7456ea11512f74131f85284dee75(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[WorkspaceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0862b56809e75ec0a61de4abc4c575866ac8b9754ad71e3b230da732c9986a27(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e88af3601d17f0027a90851ee0350a7c3fca5d5ce7b95d723323af1b73bd3069(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__49e9cf0a80d4b7b0cd982b457ecee7d0c842e65fbb813b0f5740508b5e97d324(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7c283b8466827833920617d303ca4857c81c53899500dd156763fd48475ebde2(
    *,
    workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3af40da9d074ed9a4ec9037ce53d528d65b970c256d293caf02cace915d7150a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[WorkspaceResourceDlcProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b297616f9a2d15378cedd73b09e53bbad8f9f1eb5f09dd3d63774198d11a0abc(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__799b71659fd8ab616a7650f16dfe8ef3de83b0b44a3ed058223f98973c0164db(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7944d15caaab16d639ef09bdaec979ffc452d38c754c9d75a94afe7d799d5c54(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3a9edb63fd60ebf79163d99babf076e8875eb3f8657d9e392240d16a7799574e(
    *,
    group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8cbed33ee82fefcbeee5be94a115cb450e84006e8e0044335dda068a37e7dd6c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[WorkspaceResourceDlcsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__461500de0dbf522395c7ddfb822c607666f29c054cc68ad4bd27e8b88d101af4(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7628666a1df74d9084b5576e207fbfc44819a3d1a14630ca1cf9d0afcd6977cc(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__99edc194b1f6d0ed2086f42974de6b9d1ecd34e17569d3b2ae714422157c15dd(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d00874441a1e4410c93be57128018f907efe69feeedf338a9161686e33cb8d32(
    *,
    workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d1905f8bd8639414f82af95b6215fe38c68877951f914c2377c84b23bb085767(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[WorkspaceResourceFlinkProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__015351f70d167bc8a89b7fb0edfde537ad299c0af8c64a3dba95113924bd8d0a(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7c2a5c0c173a4b904411a5093b755d92a36393939bc5a2ede7076b750fff4e34(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__62c1df0fdca37d9e7060e700578d7e060f8d690f7d0e274e02df6cd96349a635(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ede1c55fe8713e8a1f84810bef0162431c565915b0a70392d6f142e9dc221e94(
    *,
    group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4b60f6817522f459e307f23617cc003d01a67cd1b7daca7904eafcb9a1d42924(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[WorkspaceResourceFlinksProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__20252afdba1230389317712e5197a62eb8eeee56cc7c2b1f2fc3fa934ea4723f(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8751260d9bb1be12d49ebfb79f6a88edb869b3638e423c3c0bbaad64d79da20b(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4dd4b859f411af4583c8b72f69f3d22786add4279f51762f2a2b3c63246d02c6(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__91c6c83f944761551d88a80d44c4fd74b59468e6fb49f26b6369b4abefd0ba62(
    *,
    workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7e4f88a754fb81d523c60ed83cf2f715d0d312298f7fe1a107bf91a6c71f185c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[WorkspaceResourceMaxComputeProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1297fc476224a05886912ddf36962b40bd2fa00bd564af50b9b0908ba7ae9237(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__06626497430dc20c9ab54deafa9ba4d7f9bc3c330bb44dc70cacb5ff7dedc650(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__80eda71ffdf158913b2d9281bcabad5be9f6b774302c3d6a58b53c58b0dd764e(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ad05410b097c4e69782f8e453e111ca87cd78845aba950211f2396fa77800faa(
    *,
    group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d8c4b6c6eaa8e045f7b0ea52da1bfe58d54cc77105d1e6c8e5d6fe4bc85d3468(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[WorkspaceResourceMaxComputesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0e4544b3f2e2f3889254aafc16c3b48c104e068b4d1743ff1c0e7e9921ee6274(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__be5f9e4614f0f5112e2e63a0dae7cc64f33e79fc784e399a691adfcbbe97e6fe(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ffa471d3c9623926a19d98f7fada931a2503280e8f1dd9c18f7ef9796077b2ec(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7acc5c5f30a1f2ea68ddcd3bfc824c71d74e9de861b873b6c9431234cec0027a(
    *,
    workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ac3f7d621923c2d6e729f6ed707e8e2d725e62d59a5df3e896f57475a71b9bb9(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[WorkspacesProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4fde8fe5a7d4d2a4a52302688145252e0a3dc8fbeca0e4d81489493b28fb4d36(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e0c7f33b219e8dd853516a108664459fa990c342bb304300359d935129bf8929(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__75f3ce67ebf1698092bf89c1ae3320cfb93a27c658b9a406c6c6411adce8ec3e(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4cdc744a1f128053ab6f1a26fd22319350ff92eb9c95dff0f360a2df634fc123(
    *,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    workspace_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    workspace_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f85809520c5d1c3ef4edbb9523e6d63e643372bea7f3a94c7927c89938208c42(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DatasetProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6455a098ea20c7bea54aa74c6a0f36155231db3f1069570760855ea8789cb67a(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9c26ca6e57116f60eb3294ef76704041bfce59547e7942cc3ab94d9aab1ae09a(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7c14e61fa8f341f193379a5784411291d4b99c3e39599f7830860dfd093bf021(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d1df24f8a5b9d4a798dff17fc6a369509d696d69de8d49fca8d96ad8c383b8ef(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DatasetsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a5b8a16436cdf2a9c6b82c8fb2e90112b9ede777d1b04c69a734f61b93814052(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e1063eec39c7d3d6ce3c90b7c9173c736f4211aff63727f1655731e3106ce45f(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bf25037c9d2ca08d7a6332889ec5cf422da41a31c036b3aac199cce07a3a11f1(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
