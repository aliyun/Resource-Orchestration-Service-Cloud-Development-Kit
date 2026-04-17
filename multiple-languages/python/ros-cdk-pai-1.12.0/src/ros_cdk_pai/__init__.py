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


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.CodeSourceProps",
    jsii_struct_bases=[],
    name_mapping={
        "accessibility": "accessibility",
        "code_repo": "codeRepo",
        "display_name": "displayName",
        "mount_path": "mountPath",
        "workspace_id": "workspaceId",
        "code_branch": "codeBranch",
        "code_commit": "codeCommit",
        "code_repo_access_token": "codeRepoAccessToken",
        "code_repo_user_name": "codeRepoUserName",
        "description": "description",
    },
)
class CodeSourceProps:
    def __init__(
        self,
        *,
        accessibility: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        code_repo: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        display_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        mount_path: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        code_branch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        code_commit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        code_repo_access_token: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        code_repo_user_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``CodeSource``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-codesource

        :param accessibility: Property accessibility: Visibility of the code configuration, possible values: - PRIVATE: In this workspace, it is only visible to you and the administrator. - PUBLIC: In this workspace, it is visible to everyone.
        :param code_repo: Property codeRepo: Code repository address.
        :param display_name: Property displayName: Code source configuration name.
        :param mount_path: Property mountPath: The local Mount Directory of the code.
        :param workspace_id: Property workspaceId: The ID of the workspace.
        :param code_branch: Property codeBranch: Code repository branch.
        :param code_commit: Property codeCommit: The code CommitId.
        :param code_repo_access_token: Property codeRepoAccessToken: The Token used to access the code repository.
        :param code_repo_user_name: Property codeRepoUserName: The user name of the code repository.
        :param description: Property description: A detailed description of the code configuration.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1837c2fae799b931c17344e8e81cb927e3a673a54c33d0c5a406334f6f8fa78a)
            check_type(argname="argument accessibility", value=accessibility, expected_type=type_hints["accessibility"])
            check_type(argname="argument code_repo", value=code_repo, expected_type=type_hints["code_repo"])
            check_type(argname="argument display_name", value=display_name, expected_type=type_hints["display_name"])
            check_type(argname="argument mount_path", value=mount_path, expected_type=type_hints["mount_path"])
            check_type(argname="argument workspace_id", value=workspace_id, expected_type=type_hints["workspace_id"])
            check_type(argname="argument code_branch", value=code_branch, expected_type=type_hints["code_branch"])
            check_type(argname="argument code_commit", value=code_commit, expected_type=type_hints["code_commit"])
            check_type(argname="argument code_repo_access_token", value=code_repo_access_token, expected_type=type_hints["code_repo_access_token"])
            check_type(argname="argument code_repo_user_name", value=code_repo_user_name, expected_type=type_hints["code_repo_user_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "accessibility": accessibility,
            "code_repo": code_repo,
            "display_name": display_name,
            "mount_path": mount_path,
            "workspace_id": workspace_id,
        }
        if code_branch is not None:
            self._values["code_branch"] = code_branch
        if code_commit is not None:
            self._values["code_commit"] = code_commit
        if code_repo_access_token is not None:
            self._values["code_repo_access_token"] = code_repo_access_token
        if code_repo_user_name is not None:
            self._values["code_repo_user_name"] = code_repo_user_name
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def accessibility(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property accessibility: Visibility of the code configuration, possible values: - PRIVATE: In this workspace, it is only visible to you and the administrator.

        - PUBLIC: In this workspace, it is visible to everyone.
        '''
        result = self._values.get("accessibility")
        assert result is not None, "Required property 'accessibility' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def code_repo(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property codeRepo: Code repository address.'''
        result = self._values.get("code_repo")
        assert result is not None, "Required property 'code_repo' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property displayName: Code source configuration name.'''
        result = self._values.get("display_name")
        assert result is not None, "Required property 'display_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def mount_path(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property mountPath: The local Mount Directory of the code.'''
        result = self._values.get("mount_path")
        assert result is not None, "Required property 'mount_path' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property workspaceId: The ID of the workspace.'''
        result = self._values.get("workspace_id")
        assert result is not None, "Required property 'workspace_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def code_branch(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property codeBranch: Code repository branch.'''
        result = self._values.get("code_branch")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def code_commit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property codeCommit: The code CommitId.'''
        result = self._values.get("code_commit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def code_repo_access_token(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property codeRepoAccessToken: The Token used to access the code repository.'''
        result = self._values.get("code_repo_access_token")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def code_repo_user_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property codeRepoUserName: The user name of the code repository.'''
        result = self._values.get("code_repo_user_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: A detailed description of the code configuration.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "CodeSourceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


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
        :param workspace_id: Property workspaceId: The ID of the workspace where the dataset is located. If this parameter is not configured, the default workspace is used. If the default workspace does not exist, an error is reported.
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


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.DatasetVersionProps",
    jsii_struct_bases=[],
    name_mapping={
        "dataset_id": "datasetId",
        "data_source_type": "dataSourceType",
        "property": "property",
        "uri": "uri",
        "data_count": "dataCount",
        "data_size": "dataSize",
        "description": "description",
        "labels": "labels",
        "options": "options",
        "source_id": "sourceId",
        "source_type": "sourceType",
    },
)
class DatasetVersionProps:
    def __init__(
        self,
        *,
        dataset_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        data_source_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        property: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        uri: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        data_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        data_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        labels: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosDatasetVersion.LabelsProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DatasetVersion``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-datasetversion

        :param dataset_id: Property datasetId: The ID of the dataset.
        :param data_source_type: Property dataSourceType: The data source type. The following values are supported: - OSS: Alibaba Cloud Object Storage (OSS). - NAS: Alibaba cloud file storage (NAS). - CPFS
        :param property: Property property: The properties of the dataset. The following values are supported: - FILE: FILE. - DIRECTORY: folder.
        :param uri: Property uri: The Uri configuration sample is as follows: - The data source type is OSS:'oss://bucket.endpoint/object' - The data source type is NAS: The general NAS format is: 'nas://.region/subpath/to/dir/'; CPFS1.0:'nas://.region/subpath/to/dir /'; CPFS2.0:'nas://.region//'. CPFS1.0 and CPFS2.0 are distinguished by the format of fsid: CPFS1.0 is cpfs-<8-bit ascii characters>;CPFS2.0 is cpfs-<16 ascii characters>.
        :param data_count: Property dataCount: The number of dataset files, in units of pieces.
        :param data_size: Property dataSize: The size of the dataset file in bytes.
        :param description: Property description: To create a custom description for dataset versions in order to distinguish between different versions of the dataset.
        :param labels: Property labels: Dataset version tag list.
        :param options: Property options: The extended field, which is of the JsonString type. When DLC uses a dataset, you can specify the default Mount path for the dataset by configuring the mountPath field.
        :param source_id: Property sourceId: The data source ID. - When the SourceType is USER, SourceId can be customized. - When SourceType is ITAG, that is, when the iTAG module labels the data set generated by the result, SourceId is the task ID of ITAG. - When SourceType is PAI_PUBLIC_DATASET, that is, a dataset created using PAI public datasets, SourceId is empty by default.
        :param source_type: Property sourceType: The data source type. The default value is USER. The following values are supported: - PAI-PUBLIC-DATASET:PAI public dataset. - ITAG: The dataset generated by the iTAG module annotation result. - USER: The data set registered by the USER.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3db36f15b6679f87a0ff6415ca8c36b232db23e3ad77dcb0bae358b4e35d10e7)
            check_type(argname="argument dataset_id", value=dataset_id, expected_type=type_hints["dataset_id"])
            check_type(argname="argument data_source_type", value=data_source_type, expected_type=type_hints["data_source_type"])
            check_type(argname="argument property", value=property, expected_type=type_hints["property"])
            check_type(argname="argument uri", value=uri, expected_type=type_hints["uri"])
            check_type(argname="argument data_count", value=data_count, expected_type=type_hints["data_count"])
            check_type(argname="argument data_size", value=data_size, expected_type=type_hints["data_size"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument labels", value=labels, expected_type=type_hints["labels"])
            check_type(argname="argument options", value=options, expected_type=type_hints["options"])
            check_type(argname="argument source_id", value=source_id, expected_type=type_hints["source_id"])
            check_type(argname="argument source_type", value=source_type, expected_type=type_hints["source_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "dataset_id": dataset_id,
            "data_source_type": data_source_type,
            "property": property,
            "uri": uri,
        }
        if data_count is not None:
            self._values["data_count"] = data_count
        if data_size is not None:
            self._values["data_size"] = data_size
        if description is not None:
            self._values["description"] = description
        if labels is not None:
            self._values["labels"] = labels
        if options is not None:
            self._values["options"] = options
        if source_id is not None:
            self._values["source_id"] = source_id
        if source_type is not None:
            self._values["source_type"] = source_type

    @builtins.property
    def dataset_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property datasetId: The ID of the dataset.'''
        result = self._values.get("dataset_id")
        assert result is not None, "Required property 'dataset_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def data_source_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dataSourceType: The data source type.

        The following values are supported:

        - OSS: Alibaba Cloud Object Storage (OSS).
        - NAS: Alibaba cloud file storage (NAS).
        - CPFS
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
        '''Property uri: The Uri configuration sample is as follows: - The data source type is OSS:'oss://bucket.endpoint/object' - The data source type is NAS: The general NAS format is: 'nas://.region/subpath/to/dir/'; CPFS1.0:'nas://.region/subpath/to/dir /'; CPFS2.0:'nas://.region//'. CPFS1.0 and CPFS2.0 are distinguished by the format of fsid: CPFS1.0 is cpfs-<8-bit ascii characters>;CPFS2.0 is cpfs-<16 ascii characters>.'''
        result = self._values.get("uri")
        assert result is not None, "Required property 'uri' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def data_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dataCount: The number of dataset files, in units of pieces.'''
        result = self._values.get("data_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def data_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dataSize: The size of the dataset file in bytes.'''
        result = self._values.get("data_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: To create a custom description for dataset versions in order to distinguish between different versions of the dataset.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def labels(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDatasetVersion.LabelsProperty"]]]]:
        '''Property labels: Dataset version tag list.'''
        result = self._values.get("labels")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDatasetVersion.LabelsProperty"]]]], result)

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
        return "DatasetVersionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.ExperimentProps",
    jsii_struct_bases=[],
    name_mapping={
        "artifact_uri": "artifactUri",
        "experiment_name": "experimentName",
        "workspace_id": "workspaceId",
        "accessibility": "accessibility",
    },
)
class ExperimentProps:
    def __init__(
        self,
        *,
        artifact_uri: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        experiment_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        accessibility: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Experiment``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-experiment

        :param artifact_uri: Property artifactUri: ArtifactUri is default OSS storage path of the output of trials in the experiment.
        :param experiment_name: Property experimentName: Name is the name of the experiment, unique in a namespace.
        :param workspace_id: Property workspaceId: WorkspaceId is the workspace id which contains the experiment.
        :param accessibility: Property accessibility: Experimental Visibility.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1e2e6d6e556a22cf2a6cfdb1009582fe8dac11c069526f2b5d5d843cdfa98958)
            check_type(argname="argument artifact_uri", value=artifact_uri, expected_type=type_hints["artifact_uri"])
            check_type(argname="argument experiment_name", value=experiment_name, expected_type=type_hints["experiment_name"])
            check_type(argname="argument workspace_id", value=workspace_id, expected_type=type_hints["workspace_id"])
            check_type(argname="argument accessibility", value=accessibility, expected_type=type_hints["accessibility"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "artifact_uri": artifact_uri,
            "experiment_name": experiment_name,
            "workspace_id": workspace_id,
        }
        if accessibility is not None:
            self._values["accessibility"] = accessibility

    @builtins.property
    def artifact_uri(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property artifactUri: ArtifactUri is default OSS storage path of the output of trials in the experiment.'''
        result = self._values.get("artifact_uri")
        assert result is not None, "Required property 'artifact_uri' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def experiment_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property experimentName: Name is the name of the experiment, unique in a namespace.'''
        result = self._values.get("experiment_name")
        assert result is not None, "Required property 'experiment_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property workspaceId: WorkspaceId is the workspace id which contains the experiment.'''
        result = self._values.get("workspace_id")
        assert result is not None, "Required property 'workspace_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def accessibility(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property accessibility: Experimental Visibility.'''
        result = self._values.get("accessibility")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ExperimentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-pai.ICodeSource")
class ICodeSource(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``CodeSource``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAccessibility")
    def attr_accessibility(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Accessibility: Visibility of the code configuration.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCodeBranch")
    def attr_code_branch(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CodeBranch: Code repository branch.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCodeCommit")
    def attr_code_commit(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CodeCommit: The code CommitId.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCodeRepo")
    def attr_code_repo(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CodeRepo: Code repository address.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCodeRepoAccessToken")
    def attr_code_repo_access_token(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CodeRepoAccessToken: The Token used to access the code repository.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCodeRepoUserName")
    def attr_code_repo_user_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CodeRepoUserName: The user name of the code repository.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCodeSourcesId")
    def attr_code_sources_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CodeSourcesId: The ID of the created code configuration.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the code.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: A detailed description of the code configuration.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DisplayName: Code source configuration name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrGmtModifyTime")
    def attr_gmt_modify_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GmtModifyTime: Code configuration modification time.

        The time format is iso8601.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMountPath")
    def attr_mount_path(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MountPath: The local Mount Directory of the code.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UserId: The ID of the creator of the code configuration source.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceId")
    def attr_workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkspaceId: The ID of the workspace.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> CodeSourceProps:
        ...


class _ICodeSourceProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``CodeSource``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-pai.ICodeSource"

    @builtins.property
    @jsii.member(jsii_name="attrAccessibility")
    def attr_accessibility(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Accessibility: Visibility of the code configuration.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAccessibility"))

    @builtins.property
    @jsii.member(jsii_name="attrCodeBranch")
    def attr_code_branch(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CodeBranch: Code repository branch.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCodeBranch"))

    @builtins.property
    @jsii.member(jsii_name="attrCodeCommit")
    def attr_code_commit(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CodeCommit: The code CommitId.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCodeCommit"))

    @builtins.property
    @jsii.member(jsii_name="attrCodeRepo")
    def attr_code_repo(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CodeRepo: Code repository address.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCodeRepo"))

    @builtins.property
    @jsii.member(jsii_name="attrCodeRepoAccessToken")
    def attr_code_repo_access_token(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CodeRepoAccessToken: The Token used to access the code repository.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCodeRepoAccessToken"))

    @builtins.property
    @jsii.member(jsii_name="attrCodeRepoUserName")
    def attr_code_repo_user_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CodeRepoUserName: The user name of the code repository.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCodeRepoUserName"))

    @builtins.property
    @jsii.member(jsii_name="attrCodeSourcesId")
    def attr_code_sources_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CodeSourcesId: The ID of the created code configuration.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCodeSourcesId"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the code.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: A detailed description of the code configuration.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DisplayName: Code source configuration name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDisplayName"))

    @builtins.property
    @jsii.member(jsii_name="attrGmtModifyTime")
    def attr_gmt_modify_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GmtModifyTime: Code configuration modification time.

        The time format is iso8601.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGmtModifyTime"))

    @builtins.property
    @jsii.member(jsii_name="attrMountPath")
    def attr_mount_path(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MountPath: The local Mount Directory of the code.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMountPath"))

    @builtins.property
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UserId: The ID of the creator of the code configuration source.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUserId"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceId")
    def attr_workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkspaceId: The ID of the workspace.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWorkspaceId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> CodeSourceProps:
        return typing.cast(CodeSourceProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ICodeSource).__jsii_proxy_class__ = lambda : _ICodeSourceProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-pai.IDataset")
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

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-pai.IDataset"

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


@jsii.interface(jsii_type="@alicloud/ros-cdk-pai.IDatasetVersion")
class IDatasetVersion(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``DatasetVersion``.'''

    @builtins.property
    @jsii.member(jsii_name="attrVersionName")
    def attr_version_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VersionName: Dataset version name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DatasetVersionProps:
        ...


class _IDatasetVersionProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``DatasetVersion``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-pai.IDatasetVersion"

    @builtins.property
    @jsii.member(jsii_name="attrVersionName")
    def attr_version_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VersionName: Dataset version name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVersionName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DatasetVersionProps:
        return typing.cast(DatasetVersionProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IDatasetVersion).__jsii_proxy_class__ = lambda : _IDatasetVersionProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-pai.IExperiment")
class IExperiment(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Experiment``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAccessibility")
    def attr_accessibility(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Accessibility: Experimental Visibility.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrArtifactUri")
    def attr_artifact_uri(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ArtifactUri: ArtifactUri is default OSS storage path of the output of trials in the experiment.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: GmtCreateTime is time when this entity is created.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrExperimentId")
    def attr_experiment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExperimentId: ExperimentId is globally unique identifier of the experiment.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrExperimentName")
    def attr_experiment_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExperimentName: Name is the name of the experiment, unique in a namespace.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrGmtModifiedTime")
    def attr_gmt_modified_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GmtModifiedTime: GmtModifiedTime is time when this entity is modified.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrLabels")
    def attr_labels(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Labels: Labels are tags of the experiment.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrOwnerId")
    def attr_owner_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OwnerId: OwnerId is the user account id which this entity belongs to.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTensorboardLogUri")
    def attr_tensorboard_log_uri(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TensorboardLogUri: TensorboardLogUri is the default OSS storage path of tensorboard log of trials in the experiment.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UserId: UserId is the user account id which created this entity.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceId")
    def attr_workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkspaceId: WorkspaceId is the workspace id which contains the experiment.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ExperimentProps:
        ...


class _IExperimentProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Experiment``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-pai.IExperiment"

    @builtins.property
    @jsii.member(jsii_name="attrAccessibility")
    def attr_accessibility(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Accessibility: Experimental Visibility.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAccessibility"))

    @builtins.property
    @jsii.member(jsii_name="attrArtifactUri")
    def attr_artifact_uri(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ArtifactUri: ArtifactUri is default OSS storage path of the output of trials in the experiment.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrArtifactUri"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: GmtCreateTime is time when this entity is created.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrExperimentId")
    def attr_experiment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExperimentId: ExperimentId is globally unique identifier of the experiment.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrExperimentId"))

    @builtins.property
    @jsii.member(jsii_name="attrExperimentName")
    def attr_experiment_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExperimentName: Name is the name of the experiment, unique in a namespace.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrExperimentName"))

    @builtins.property
    @jsii.member(jsii_name="attrGmtModifiedTime")
    def attr_gmt_modified_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GmtModifiedTime: GmtModifiedTime is time when this entity is modified.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGmtModifiedTime"))

    @builtins.property
    @jsii.member(jsii_name="attrLabels")
    def attr_labels(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Labels: Labels are tags of the experiment.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLabels"))

    @builtins.property
    @jsii.member(jsii_name="attrOwnerId")
    def attr_owner_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OwnerId: OwnerId is the user account id which this entity belongs to.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOwnerId"))

    @builtins.property
    @jsii.member(jsii_name="attrTensorboardLogUri")
    def attr_tensorboard_log_uri(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TensorboardLogUri: TensorboardLogUri is the default OSS storage path of tensorboard log of trials in the experiment.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTensorboardLogUri"))

    @builtins.property
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UserId: UserId is the user account id which created this entity.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUserId"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceId")
    def attr_workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkspaceId: WorkspaceId is the workspace id which contains the experiment.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWorkspaceId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ExperimentProps:
        return typing.cast(ExperimentProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IExperiment).__jsii_proxy_class__ = lambda : _IExperimentProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-pai.IImage")
class IImage(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Image``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAccessibility")
    def attr_accessibility(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Accessibility: Visibility of the mirror.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrImageName")
    def attr_image_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ImageName: The image name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrImageUri")
    def attr_image_uri(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ImageUri: The Image address, which contains the version number.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrLabels")
    def attr_labels(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Labels: Labels.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceId")
    def attr_workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkspaceId: The ID of the workspace to which the image belongs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ImageProps":
        ...


class _IImageProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Image``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-pai.IImage"

    @builtins.property
    @jsii.member(jsii_name="attrAccessibility")
    def attr_accessibility(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Accessibility: Visibility of the mirror.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAccessibility"))

    @builtins.property
    @jsii.member(jsii_name="attrImageName")
    def attr_image_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ImageName: The image name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrImageName"))

    @builtins.property
    @jsii.member(jsii_name="attrImageUri")
    def attr_image_uri(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ImageUri: The Image address, which contains the version number.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrImageUri"))

    @builtins.property
    @jsii.member(jsii_name="attrLabels")
    def attr_labels(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Labels: Labels.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLabels"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceId")
    def attr_workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkspaceId: The ID of the workspace to which the image belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWorkspaceId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ImageProps":
        return typing.cast("ImageProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IImage).__jsii_proxy_class__ = lambda : _IImageProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-pai.IMember")
class IMember(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Member``.'''

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: Create UTC time in ISO8601 format.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DisplayName: Member display name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMemberId")
    def attr_member_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MemberId: The member ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMemberName")
    def attr_member_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MemberName: The name of user.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRoles")
    def attr_roles(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Roles: The list of roles.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UserId: The first ID of the resource.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "MemberProps":
        ...


class _IMemberProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Member``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-pai.IMember"

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: Create UTC time in ISO8601 format.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DisplayName: Member display name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDisplayName"))

    @builtins.property
    @jsii.member(jsii_name="attrMemberId")
    def attr_member_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MemberId: The member ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMemberId"))

    @builtins.property
    @jsii.member(jsii_name="attrMemberName")
    def attr_member_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MemberName: The name of user.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMemberName"))

    @builtins.property
    @jsii.member(jsii_name="attrRoles")
    def attr_roles(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Roles: The list of roles.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRoles"))

    @builtins.property
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UserId: The first ID of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUserId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "MemberProps":
        return typing.cast("MemberProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IMember).__jsii_proxy_class__ = lambda : _IMemberProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-pai.IModelVersion")
class IModelVersion(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``ModelVersion``.'''

    @builtins.property
    @jsii.member(jsii_name="attrApprovalStatus")
    def attr_approval_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ApprovalStatus: Admission status, with values as follows:.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrExtraInfo")
    def attr_extra_info(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExtraInfo: Other information.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrFormatType")
    def attr_format_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FormatType: Model format, possible values:.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrFrameworkType")
    def attr_framework_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FrameworkType: Model framework, possible values:.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrGmtCreateTime")
    def attr_gmt_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GmtCreateTime: Create a model UTC time in the format ISO8601.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrGmtModifiedTime")
    def attr_gmt_modified_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GmtModifiedTime: Finally, update the model UTC time in the format iso8601.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrInferenceSpec")
    def attr_inference_spec(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InferenceSpec: Describes how to apply to downstream inference services, such as processors and containers of EAS.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrLabels")
    def attr_labels(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Labels: List of model version labels.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMetrics")
    def attr_metrics(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Metrics: Model indicators.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrOptions")
    def attr_options(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Options: Extension field.

        The JsonString type.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrOwnerId")
    def attr_owner_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OwnerId: The Alibaba Cloud account ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSourceId")
    def attr_source_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceId: Source ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSourceType")
    def attr_source_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceType: Model source type, possible values:.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTrainingSpec")
    def attr_training_spec(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TrainingSpec: Training configuration.

        Configuration for fine-tuning, incremental training.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrUri")
    def attr_uri(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Uri: Model version URI, that is, the location where the model is stored.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UserId: The user ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVersionDescription")
    def attr_version_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VersionDescription: Model version description.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVersionName")
    def attr_version_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VersionName: Model version.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ModelVersionProps":
        ...


class _IModelVersionProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ModelVersion``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-pai.IModelVersion"

    @builtins.property
    @jsii.member(jsii_name="attrApprovalStatus")
    def attr_approval_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ApprovalStatus: Admission status, with values as follows:.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrApprovalStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrExtraInfo")
    def attr_extra_info(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExtraInfo: Other information.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrExtraInfo"))

    @builtins.property
    @jsii.member(jsii_name="attrFormatType")
    def attr_format_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FormatType: Model format, possible values:.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrFormatType"))

    @builtins.property
    @jsii.member(jsii_name="attrFrameworkType")
    def attr_framework_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FrameworkType: Model framework, possible values:.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrFrameworkType"))

    @builtins.property
    @jsii.member(jsii_name="attrGmtCreateTime")
    def attr_gmt_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GmtCreateTime: Create a model UTC time in the format ISO8601.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGmtCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrGmtModifiedTime")
    def attr_gmt_modified_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GmtModifiedTime: Finally, update the model UTC time in the format iso8601.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGmtModifiedTime"))

    @builtins.property
    @jsii.member(jsii_name="attrInferenceSpec")
    def attr_inference_spec(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InferenceSpec: Describes how to apply to downstream inference services, such as processors and containers of EAS.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInferenceSpec"))

    @builtins.property
    @jsii.member(jsii_name="attrLabels")
    def attr_labels(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Labels: List of model version labels.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLabels"))

    @builtins.property
    @jsii.member(jsii_name="attrMetrics")
    def attr_metrics(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Metrics: Model indicators.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMetrics"))

    @builtins.property
    @jsii.member(jsii_name="attrOptions")
    def attr_options(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Options: Extension field.

        The JsonString type.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOptions"))

    @builtins.property
    @jsii.member(jsii_name="attrOwnerId")
    def attr_owner_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OwnerId: The Alibaba Cloud account ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOwnerId"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceId")
    def attr_source_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceId: Source ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSourceId"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceType")
    def attr_source_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceType: Model source type, possible values:.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSourceType"))

    @builtins.property
    @jsii.member(jsii_name="attrTrainingSpec")
    def attr_training_spec(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TrainingSpec: Training configuration.

        Configuration for fine-tuning, incremental training.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTrainingSpec"))

    @builtins.property
    @jsii.member(jsii_name="attrUri")
    def attr_uri(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Uri: Model version URI, that is, the location where the model is stored.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUri"))

    @builtins.property
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UserId: The user ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUserId"))

    @builtins.property
    @jsii.member(jsii_name="attrVersionDescription")
    def attr_version_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VersionDescription: Model version description.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVersionDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrVersionName")
    def attr_version_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VersionName: Model version.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVersionName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ModelVersionProps":
        return typing.cast("ModelVersionProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IModelVersion).__jsii_proxy_class__ = lambda : _IModelVersionProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-pai.IRun")
class IRun(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Run``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAccessibility")
    def attr_accessibility(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Accessibility: Resource attribute fields representing visibility.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the Run.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrExperimentId")
    def attr_experiment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExperimentId: Resource attribute field of the experiment ID to which Run belongs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrGmtModifiedTime")
    def attr_gmt_modified_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GmtModifiedTime: Resource attribute fields representing edit time.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrLabels")
    def attr_labels(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Labels: Run attribute field representing the run tag.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMetrics")
    def attr_metrics(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Metrics: Resource attribute field representing the run metric.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrOwnerId")
    def attr_owner_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OwnerId: Resource attribute field representing owner.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrParams")
    def attr_params(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Params: Resource attribute field representing the run parameter.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRunId")
    def attr_run_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RunId: The ID of the Run.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRunName")
    def attr_run_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RunName: The name of the Run.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSourceId")
    def attr_source_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceId: Attribute Resource field representing the source task ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSourceType")
    def attr_source_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceType: Run attribute fields representing the source type.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UserId: Run attribute field representing creator ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceId")
    def attr_workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkspaceId: Resource attribute field of the workspace ID to which Run belongs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "RunProps":
        ...


class _IRunProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Run``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-pai.IRun"

    @builtins.property
    @jsii.member(jsii_name="attrAccessibility")
    def attr_accessibility(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Accessibility: Resource attribute fields representing visibility.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAccessibility"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the Run.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrExperimentId")
    def attr_experiment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExperimentId: Resource attribute field of the experiment ID to which Run belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrExperimentId"))

    @builtins.property
    @jsii.member(jsii_name="attrGmtModifiedTime")
    def attr_gmt_modified_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GmtModifiedTime: Resource attribute fields representing edit time.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGmtModifiedTime"))

    @builtins.property
    @jsii.member(jsii_name="attrLabels")
    def attr_labels(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Labels: Run attribute field representing the run tag.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLabels"))

    @builtins.property
    @jsii.member(jsii_name="attrMetrics")
    def attr_metrics(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Metrics: Resource attribute field representing the run metric.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMetrics"))

    @builtins.property
    @jsii.member(jsii_name="attrOwnerId")
    def attr_owner_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OwnerId: Resource attribute field representing owner.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOwnerId"))

    @builtins.property
    @jsii.member(jsii_name="attrParams")
    def attr_params(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Params: Resource attribute field representing the run parameter.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrParams"))

    @builtins.property
    @jsii.member(jsii_name="attrRunId")
    def attr_run_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RunId: The ID of the Run.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRunId"))

    @builtins.property
    @jsii.member(jsii_name="attrRunName")
    def attr_run_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RunName: The name of the Run.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRunName"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceId")
    def attr_source_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceId: Attribute Resource field representing the source task ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSourceId"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceType")
    def attr_source_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceType: Run attribute fields representing the source type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSourceType"))

    @builtins.property
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UserId: Run attribute field representing creator ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUserId"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceId")
    def attr_workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkspaceId: Resource attribute field of the workspace ID to which Run belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWorkspaceId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "RunProps":
        return typing.cast("RunProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IRun).__jsii_proxy_class__ = lambda : _IRunProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-pai.IService")
class IService(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Service``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAccessToken")
    def attr_access_token(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AccessToken: Service Request authentication token.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCallerUid")
    def attr_caller_uid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CallerUid: The ID of the service creator, which can be the ID of the RAM account.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCpu")
    def attr_cpu(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Cpu: Number of service CPU cores.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: Creation time of the service.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCurrentVersion")
    def attr_current_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CurrentVersion: Current running version of the service.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrExtraData")
    def attr_extra_data(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExtraData: Service Extra Information.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrGpu")
    def attr_gpu(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Gpu: Number of service GPU cards.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrImage")
    def attr_image(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Image: Service Deployment Mirroring.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrInternetEndpoint")
    def attr_internet_endpoint(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InternetEndpoint: Public network Endpoint of the service.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrIntranetEndpoint")
    def attr_intranet_endpoint(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IntranetEndpoint: The intranet Endpoint of the service.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrLabels")
    def attr_labels(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Labels: Service Tag.'''
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
        '''Attribute Memory: Memory of service (MB).'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMessage")
    def attr_message(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Message: Latest information on services.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrNamespace")
    def attr_namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Namespace: The namespace to which the service belongs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrParentUid")
    def attr_parent_uid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ParentUid: Primary account ID of the creator.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPendingInstance")
    def attr_pending_instance(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PendingInstance: Number of instances where the service is not currently ready.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrReason")
    def attr_reason(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Reason: Service deployment failure reason.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrResource")
    def attr_resource(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Resource: The ID of the resource group to which the service belongs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrResourceAlias")
    def attr_resource_alias(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceAlias: Name of the resource group where the service resides.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRole")
    def attr_role(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Role: Grouping Service Role.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRoleAttrs")
    def attr_role_attrs(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RoleAttrs: Grouping Service Role Properties.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRunningInstance")
    def attr_running_instance(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RunningInstance: Number of instances in service running.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSafetyLock")
    def attr_safety_lock(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SafetyLock: Service Security Lock Status.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrServiceConfig")
    def attr_service_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServiceConfig: Service configuration information.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrServiceGroup")
    def attr_service_group(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServiceGroup: Group to which the service belongs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServiceName: Service Name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrServiceUid")
    def attr_service_uid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServiceUid: Unique Service ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTotalInstance")
    def attr_total_instance(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TotalInstance: Total number of instances required by the service.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrUpdateTime")
    def attr_update_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UpdateTime: Service Last Updated.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrWeight")
    def attr_weight(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Weight: Packet Service Traffic Weight.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ServiceProps":
        ...


class _IServiceProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Service``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-pai.IService"

    @builtins.property
    @jsii.member(jsii_name="attrAccessToken")
    def attr_access_token(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AccessToken: Service Request authentication token.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAccessToken"))

    @builtins.property
    @jsii.member(jsii_name="attrCallerUid")
    def attr_caller_uid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CallerUid: The ID of the service creator, which can be the ID of the RAM account.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCallerUid"))

    @builtins.property
    @jsii.member(jsii_name="attrCpu")
    def attr_cpu(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Cpu: Number of service CPU cores.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCpu"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: Creation time of the service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrCurrentVersion")
    def attr_current_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CurrentVersion: Current running version of the service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCurrentVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrExtraData")
    def attr_extra_data(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExtraData: Service Extra Information.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrExtraData"))

    @builtins.property
    @jsii.member(jsii_name="attrGpu")
    def attr_gpu(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Gpu: Number of service GPU cards.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGpu"))

    @builtins.property
    @jsii.member(jsii_name="attrImage")
    def attr_image(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Image: Service Deployment Mirroring.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrImage"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetEndpoint")
    def attr_internet_endpoint(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InternetEndpoint: Public network Endpoint of the service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInternetEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrIntranetEndpoint")
    def attr_intranet_endpoint(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IntranetEndpoint: The intranet Endpoint of the service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIntranetEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrLabels")
    def attr_labels(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Labels: Service Tag.'''
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
        '''Attribute Memory: Memory of service (MB).'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMemory"))

    @builtins.property
    @jsii.member(jsii_name="attrMessage")
    def attr_message(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Message: Latest information on services.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMessage"))

    @builtins.property
    @jsii.member(jsii_name="attrNamespace")
    def attr_namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Namespace: The namespace to which the service belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNamespace"))

    @builtins.property
    @jsii.member(jsii_name="attrParentUid")
    def attr_parent_uid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ParentUid: Primary account ID of the creator.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrParentUid"))

    @builtins.property
    @jsii.member(jsii_name="attrPendingInstance")
    def attr_pending_instance(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PendingInstance: Number of instances where the service is not currently ready.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPendingInstance"))

    @builtins.property
    @jsii.member(jsii_name="attrReason")
    def attr_reason(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Reason: Service deployment failure reason.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrReason"))

    @builtins.property
    @jsii.member(jsii_name="attrResource")
    def attr_resource(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Resource: The ID of the resource group to which the service belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResource"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceAlias")
    def attr_resource_alias(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceAlias: Name of the resource group where the service resides.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceAlias"))

    @builtins.property
    @jsii.member(jsii_name="attrRole")
    def attr_role(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Role: Grouping Service Role.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRole"))

    @builtins.property
    @jsii.member(jsii_name="attrRoleAttrs")
    def attr_role_attrs(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RoleAttrs: Grouping Service Role Properties.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRoleAttrs"))

    @builtins.property
    @jsii.member(jsii_name="attrRunningInstance")
    def attr_running_instance(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RunningInstance: Number of instances in service running.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRunningInstance"))

    @builtins.property
    @jsii.member(jsii_name="attrSafetyLock")
    def attr_safety_lock(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SafetyLock: Service Security Lock Status.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSafetyLock"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceConfig")
    def attr_service_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServiceConfig: Service configuration information.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrServiceConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceGroup")
    def attr_service_group(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServiceGroup: Group to which the service belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrServiceGroup"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServiceName: Service Name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrServiceName"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceUid")
    def attr_service_uid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServiceUid: Unique Service ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrServiceUid"))

    @builtins.property
    @jsii.member(jsii_name="attrTotalInstance")
    def attr_total_instance(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TotalInstance: Total number of instances required by the service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTotalInstance"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdateTime")
    def attr_update_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UpdateTime: Service Last Updated.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUpdateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrWeight")
    def attr_weight(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Weight: Packet Service Traffic Weight.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWeight"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ServiceProps":
        return typing.cast("ServiceProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IService).__jsii_proxy_class__ = lambda : _IServiceProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-pai.IUserConfig")
class IUserConfig(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``UserConfig``.'''

    @builtins.property
    @jsii.member(jsii_name="attrCategoryName")
    def attr_category_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CategoryName: Represents a resource attribute for a configuration category.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrConfigKey")
    def attr_config_key(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConfigKey: Represents the resource attribute of the configuration Key.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrConfigs")
    def attr_configs(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Configs: Represents a resource property for the configuration list.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "UserConfigProps":
        ...


class _IUserConfigProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``UserConfig``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-pai.IUserConfig"

    @builtins.property
    @jsii.member(jsii_name="attrCategoryName")
    def attr_category_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CategoryName: Represents a resource attribute for a configuration category.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCategoryName"))

    @builtins.property
    @jsii.member(jsii_name="attrConfigKey")
    def attr_config_key(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConfigKey: Represents the resource attribute of the configuration Key.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConfigKey"))

    @builtins.property
    @jsii.member(jsii_name="attrConfigs")
    def attr_configs(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Configs: Represents a resource property for the configuration list.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConfigs"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "UserConfigProps":
        return typing.cast("UserConfigProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IUserConfig).__jsii_proxy_class__ = lambda : _IUserConfigProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-pai.IWorkspace")
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
        '''Attribute Description: Workspace description, no more than 80 characters.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DisplayName: It is recommended that you name the workspace based on the business attribute to identify the purpose of the workspace.

        If not configured, the default value is the workspace name.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEnvTypes")
    def attr_env_types(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvTypes: Environments contained in the workspace:.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrExtraInfos")
    def attr_extra_infos(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExtraInfos: Additional information, currently including TenantId (tenant ID).'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrOwner")
    def attr_owner(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Owner: Workspace owner ID, displayed when Verbose is true.'''
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
        '''Attribute WorkspaceId: The ID of the workspace.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceName")
    def attr_workspace_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkspaceName: The workspace name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "WorkspaceProps":
        ...


class _IWorkspaceProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Workspace``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-pai.IWorkspace"

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
        '''Attribute Description: Workspace description, no more than 80 characters.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DisplayName: It is recommended that you name the workspace based on the business attribute to identify the purpose of the workspace.

        If not configured, the default value is the workspace name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDisplayName"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvTypes")
    def attr_env_types(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvTypes: Environments contained in the workspace:.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnvTypes"))

    @builtins.property
    @jsii.member(jsii_name="attrExtraInfos")
    def attr_extra_infos(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExtraInfos: Additional information, currently including TenantId (tenant ID).'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrExtraInfos"))

    @builtins.property
    @jsii.member(jsii_name="attrOwner")
    def attr_owner(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Owner: Workspace owner ID, displayed when Verbose is true.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOwner"))

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
        '''Attribute WorkspaceId: The ID of the workspace.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWorkspaceId"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceName")
    def attr_workspace_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkspaceName: The workspace name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWorkspaceName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "WorkspaceProps":
        return typing.cast("WorkspaceProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IWorkspace).__jsii_proxy_class__ = lambda : _IWorkspaceProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-pai.IWorkspaceResource")
class IWorkspaceResource(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``WorkspaceResource``.'''

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: Create UTC time in ISO8601 format.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEnvType")
    def attr_env_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvType: Environment type, possible values:.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupName: Resource group name.

        If you want to obtain a resource group name, see [ListResources](~~ 449143 ~~).
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrIsDefault")
    def attr_is_default(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IsDefault: Whether it is the default resource, each resource type has a default resource.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrResourceId")
    def attr_resource_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceId: The resource ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrResourceType")
    def attr_resource_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceType: Resource type, possible values:.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSpec")
    def attr_spec(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Spec: Resource configuration, required for public resource groups of DLC, enter the content.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceId")
    def attr_workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkspaceId: The ID of the workspace to which the workspace belongs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceResourceName")
    def attr_workspace_resource_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkspaceResourceName: The resource name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "WorkspaceResourceProps":
        ...


class _IWorkspaceResourceProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``WorkspaceResource``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-pai.IWorkspaceResource"

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: Create UTC time in ISO8601 format.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvType")
    def attr_env_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvType: Environment type, possible values:.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnvType"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupName: Resource group name.

        If you want to obtain a resource group name, see [ListResources](~~ 449143 ~~).
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrIsDefault")
    def attr_is_default(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IsDefault: Whether it is the default resource, each resource type has a default resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIsDefault"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceId")
    def attr_resource_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceId: The resource ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceId"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceType")
    def attr_resource_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceType: Resource type, possible values:.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceType"))

    @builtins.property
    @jsii.member(jsii_name="attrSpec")
    def attr_spec(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Spec: Resource configuration, required for public resource groups of DLC, enter the content.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSpec"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceId")
    def attr_workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkspaceId: The ID of the workspace to which the workspace belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWorkspaceId"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceResourceName")
    def attr_workspace_resource_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkspaceResourceName: The resource name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWorkspaceResourceName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "WorkspaceResourceProps":
        return typing.cast("WorkspaceResourceProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IWorkspaceResource).__jsii_proxy_class__ = lambda : _IWorkspaceResourceProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-pai.IWorkspaceResourceDlc")
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

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-pai.IWorkspaceResourceDlc"

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


@jsii.interface(jsii_type="@alicloud/ros-cdk-pai.IWorkspaceResourceFlink")
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
    def props(self) -> "WorkspaceResourceFlinkProps":
        ...


class _IWorkspaceResourceFlinkProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``WorkspaceResourceFlink``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-pai.IWorkspaceResourceFlink"

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
    def props(self) -> "WorkspaceResourceFlinkProps":
        return typing.cast("WorkspaceResourceFlinkProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IWorkspaceResourceFlink).__jsii_proxy_class__ = lambda : _IWorkspaceResourceFlinkProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-pai.IWorkspaceResourceMaxCompute")
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
        '''Attribute GroupName: Resource group name.'''
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

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-pai.IWorkspaceResourceMaxCompute"

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
        '''Attribute GroupName: Resource group name.'''
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


@jsii.implements(IImage)
class Image(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.Image",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::PAI::Image``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosImage``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-image
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ImageProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__304fe3961cf5cbdb0c7d8a79d478d89a0cf41d860c52a8ab8fdb1924a6d0c5c3)
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
        '''Attribute Accessibility: Visibility of the mirror.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAccessibility"))

    @builtins.property
    @jsii.member(jsii_name="attrImageName")
    def attr_image_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ImageName: The image name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrImageName"))

    @builtins.property
    @jsii.member(jsii_name="attrImageUri")
    def attr_image_uri(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ImageUri: The Image address, which contains the version number.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrImageUri"))

    @builtins.property
    @jsii.member(jsii_name="attrLabels")
    def attr_labels(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Labels: Labels.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLabels"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceId")
    def attr_workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkspaceId: The ID of the workspace to which the image belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWorkspaceId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ImageProps":
        return typing.cast("ImageProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__48b1ae53c985a21a59eb34bdb20656f4c14e6ccffbf28b153270021d11608451)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5a3ebecc9d36a0a6c2c7cb4c964a694184039e345b77032d3a76d14937015d36)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__13c9ad4f5a45a4dc201ee696e3853f76d5981924eb862410f190e3fd811522de)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.ImageProps",
    jsii_struct_bases=[],
    name_mapping={
        "image_name": "imageName",
        "image_uri": "imageUri",
        "accessibility": "accessibility",
        "labels": "labels",
        "workspace_id": "workspaceId",
    },
)
class ImageProps:
    def __init__(
        self,
        *,
        image_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        image_uri: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        accessibility: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        labels: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosImage.LabelsProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        workspace_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Image``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-image

        :param image_name: Property imageName: The image name.
        :param image_uri: Property imageUri: The Image address, which contains the version number.
        :param accessibility: Property accessibility: Visibility of the mirror, possible values: - PUBLIC: all members of the current workspace can operate. - PRIVATE: Only the creator can operate.
        :param labels: Property labels: Labels.
        :param workspace_id: Property workspaceId: The ID of the workspace to which the image belongs.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fa23a847cd95ace8c4fcacacb086eb022c58c0a393e6215f19547e7afd5ebf43)
            check_type(argname="argument image_name", value=image_name, expected_type=type_hints["image_name"])
            check_type(argname="argument image_uri", value=image_uri, expected_type=type_hints["image_uri"])
            check_type(argname="argument accessibility", value=accessibility, expected_type=type_hints["accessibility"])
            check_type(argname="argument labels", value=labels, expected_type=type_hints["labels"])
            check_type(argname="argument workspace_id", value=workspace_id, expected_type=type_hints["workspace_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "image_name": image_name,
            "image_uri": image_uri,
        }
        if accessibility is not None:
            self._values["accessibility"] = accessibility
        if labels is not None:
            self._values["labels"] = labels
        if workspace_id is not None:
            self._values["workspace_id"] = workspace_id

    @builtins.property
    def image_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property imageName: The image name.'''
        result = self._values.get("image_name")
        assert result is not None, "Required property 'image_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def image_uri(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property imageUri: The Image address, which contains the version number.'''
        result = self._values.get("image_uri")
        assert result is not None, "Required property 'image_uri' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def accessibility(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property accessibility: Visibility of the mirror, possible values: - PUBLIC: all members of the current workspace can operate.

        - PRIVATE: Only the creator can operate.
        '''
        result = self._values.get("accessibility")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def labels(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosImage.LabelsProperty"]]]]:
        '''Property labels: Labels.'''
        result = self._values.get("labels")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosImage.LabelsProperty"]]]], result)

    @builtins.property
    def workspace_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property workspaceId: The ID of the workspace to which the image belongs.'''
        result = self._values.get("workspace_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ImageProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IMember)
class Member(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.Member",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::PAI::Member``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosMember``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-member
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["MemberProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__874596546e19b03a8bda7590a0bbd0f0952908fba8cd6feff086dbed259f3559)
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
        '''Attribute CreateTime: Create UTC time in ISO8601 format.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DisplayName: Member display name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDisplayName"))

    @builtins.property
    @jsii.member(jsii_name="attrMemberId")
    def attr_member_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MemberId: The member ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMemberId"))

    @builtins.property
    @jsii.member(jsii_name="attrMemberName")
    def attr_member_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MemberName: The name of user.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMemberName"))

    @builtins.property
    @jsii.member(jsii_name="attrRoles")
    def attr_roles(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Roles: The list of roles.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRoles"))

    @builtins.property
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UserId: The first ID of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUserId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "MemberProps":
        return typing.cast("MemberProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c560290285cad659f477c1ea455931c8366e9004f5a0176f39eed39047607f07)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3a5bce806f2e00f2a14c9d9c9827268ba430091c833596d36322d6698fcfcac4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b9a58fee7f9c56a9449b6e94eab696a4abfe39cd625b49a523e119ca62b33b28)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.MemberProps",
    jsii_struct_bases=[],
    name_mapping={
        "roles": "roles",
        "user_id": "userId",
        "workspace_id": "workspaceId",
    },
)
class MemberProps:
    def __init__(
        self,
        *,
        roles: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        user_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``Member``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-member

        :param roles: Property roles: The list of roles.
        :param user_id: Property userId: User ID.
        :param workspace_id: Property workspaceId: Workspace ID.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4ca3ffe46c66e4b443f166e2e791f5e88d6a47be96d3be9f8f0d6ed5e80dbea3)
            check_type(argname="argument roles", value=roles, expected_type=type_hints["roles"])
            check_type(argname="argument user_id", value=user_id, expected_type=type_hints["user_id"])
            check_type(argname="argument workspace_id", value=workspace_id, expected_type=type_hints["workspace_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "roles": roles,
            "user_id": user_id,
            "workspace_id": workspace_id,
        }

    @builtins.property
    def roles(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''Property roles: The list of roles.'''
        result = self._values.get("roles")
        assert result is not None, "Required property 'roles' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def user_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property userId: User ID.'''
        result = self._values.get("user_id")
        assert result is not None, "Required property 'user_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property workspaceId: Workspace ID.'''
        result = self._values.get("workspace_id")
        assert result is not None, "Required property 'workspace_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "MemberProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IModelVersion)
class ModelVersion(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.ModelVersion",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::PAI::ModelVersion``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosModelVersion``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-modelversion
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ModelVersionProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a25268e94af4669d5c34ad1152ff4c716b9cdbc6deaa178877acd8bc7cd9b83a)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrApprovalStatus")
    def attr_approval_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ApprovalStatus: Admission status, with values as follows:.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrApprovalStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrExtraInfo")
    def attr_extra_info(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExtraInfo: Other information.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrExtraInfo"))

    @builtins.property
    @jsii.member(jsii_name="attrFormatType")
    def attr_format_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FormatType: Model format, possible values:.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrFormatType"))

    @builtins.property
    @jsii.member(jsii_name="attrFrameworkType")
    def attr_framework_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FrameworkType: Model framework, possible values:.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrFrameworkType"))

    @builtins.property
    @jsii.member(jsii_name="attrGmtCreateTime")
    def attr_gmt_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GmtCreateTime: Create a model UTC time in the format ISO8601.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGmtCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrGmtModifiedTime")
    def attr_gmt_modified_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GmtModifiedTime: Finally, update the model UTC time in the format iso8601.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGmtModifiedTime"))

    @builtins.property
    @jsii.member(jsii_name="attrInferenceSpec")
    def attr_inference_spec(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InferenceSpec: Describes how to apply to downstream inference services, such as processors and containers of EAS.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInferenceSpec"))

    @builtins.property
    @jsii.member(jsii_name="attrLabels")
    def attr_labels(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Labels: List of model version labels.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLabels"))

    @builtins.property
    @jsii.member(jsii_name="attrMetrics")
    def attr_metrics(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Metrics: Model indicators.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMetrics"))

    @builtins.property
    @jsii.member(jsii_name="attrOptions")
    def attr_options(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Options: Extension field.

        The JsonString type.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOptions"))

    @builtins.property
    @jsii.member(jsii_name="attrOwnerId")
    def attr_owner_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OwnerId: The Alibaba Cloud account ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOwnerId"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceId")
    def attr_source_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceId: Source ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSourceId"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceType")
    def attr_source_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceType: Model source type, possible values:.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSourceType"))

    @builtins.property
    @jsii.member(jsii_name="attrTrainingSpec")
    def attr_training_spec(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TrainingSpec: Training configuration.

        Configuration for fine-tuning, incremental training.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTrainingSpec"))

    @builtins.property
    @jsii.member(jsii_name="attrUri")
    def attr_uri(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Uri: Model version URI, that is, the location where the model is stored.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUri"))

    @builtins.property
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UserId: The user ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUserId"))

    @builtins.property
    @jsii.member(jsii_name="attrVersionDescription")
    def attr_version_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VersionDescription: Model version description.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVersionDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrVersionName")
    def attr_version_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VersionName: Model version.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVersionName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ModelVersionProps":
        return typing.cast("ModelVersionProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__51dc33963eda8a499fcf2f80af41a4a8a191313e44a0ca57750bc926d029c9a3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a9ca6953c88e0f7ffbae0d99b595897194a39273aeec340795b8b4ab9abfe375)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1734c26d9028d443d50dda56c411437289274249ebd38633a55ecf2c77b9b7cc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.ModelVersionProps",
    jsii_struct_bases=[],
    name_mapping={
        "model_id": "modelId",
        "uri": "uri",
        "approval_status": "approvalStatus",
        "extra_info": "extraInfo",
        "format_type": "formatType",
        "framework_type": "frameworkType",
        "inference_spec": "inferenceSpec",
        "labels": "labels",
        "metrics": "metrics",
        "options": "options",
        "source_id": "sourceId",
        "source_type": "sourceType",
        "training_spec": "trainingSpec",
        "version_description": "versionDescription",
        "version_name": "versionName",
    },
)
class ModelVersionProps:
    def __init__(
        self,
        *,
        model_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        uri: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        approval_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        extra_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        format_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        framework_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        inference_spec: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        labels: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosModelVersion.LabelsProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        metrics: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        training_spec: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        version_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        version_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ModelVersion``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-modelversion

        :param model_id: Property modelId: Model ID. For details about how to obtain the model ID.
        :param uri: Property uri: Model version URI, that is, the location where the model is stored. Possible values are: - The HTTP(S) address of the model, for example: 'https://myweb.com/mymodel.tar.gz '. - If the model is stored in OSS, the format is 'oss://./object '. For the endpoint configuration, see [Access domain name and data center](~~ 31837 ~~). For example, see OSS:// mybucket/'.
        :param approval_status: Property approvalStatus: Admission status, with values as follows: - Pending: to be determined. - Approved: Allow to go online. - Rejected: Online is not allowed.
        :param extra_info: Property extraInfo: The additional information.
        :param format_type: Property formatType: Model format, possible values: - OfflineModel - SavedModel - Keras H5 - Frozen Pb - Caffe Prototxt - TorchScript - XGBoost - PMML - AlinkModel - ONNX.
        :param framework_type: Property frameworkType: Model framework, possible values: - Pytorch - XGBoost - Keras - Caffe - Alink - Xflow - TensorFlow.
        :param inference_spec: Property inferenceSpec: Describes how to apply to downstream inference services. For example, describe the processor and container of EAS. Example: { "processor": "tensorflow_gpu_1.12" }
        :param labels: Property labels: List of model version labels.
        :param metrics: Property metrics: The metrics for the model. The length after serialization is limited to 8,192. Example: { "Results": [{ "Dataset": { "DatasetId": "d-sdkjanksaklerhfd" }, "Metrics": { "cer": 0.175 } }, { "Dataset": { "Uri": "oss://xxxx/" }, "Metrics": { "cer": 0.172 } }] }
        :param options: Property options: The extended field. This is a JSON string.
        :param source_id: Property sourceId: Source ID. - When the source type is Custom, this field is not restricted. - When the source is PAIFlow or TrainingService, the format is: region=<region_id>,workspaceId=<workspace_id>,kind=,id= Among them: - region is the Alibaba Cloud region ID. - workspaceId indicates the workspace ID. - kind: is a type. Value: PipelineRun(PAIFlow workflow);ServiceJob (training service). - id: is a unique identifier.
        :param source_type: Property sourceType: Model source type, possible values: - Custom: Custom. - PAIFlow:PAI workflow. - TrainingService:PAI training service.
        :param training_spec: Property trainingSpec: Training configuration. Configuration for fine-tuning, incremental training.
        :param version_description: Property versionDescription: Model version description.
        :param version_name: Property versionName: The model version, which is unique for each model. If you leave this parameter empty, the first version is 0.1.0 by default. After that, the minor version number is increased by 1 in sequence. For example, the second version number is 0.2.0. A version number consists of a major version number, a minor version number, and a stage version number, separated by periods (.). The major version number and minor version number are numeric. The stage version number begins with a digit and can include numbers, underscores, and letters. For example, the version number is 1.1.0 or 2.3.4_beta.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__045dd900b35eff3eb58b9d65c1123a73d87c1f3ca1b3dc2cff0c592b214b8e6f)
            check_type(argname="argument model_id", value=model_id, expected_type=type_hints["model_id"])
            check_type(argname="argument uri", value=uri, expected_type=type_hints["uri"])
            check_type(argname="argument approval_status", value=approval_status, expected_type=type_hints["approval_status"])
            check_type(argname="argument extra_info", value=extra_info, expected_type=type_hints["extra_info"])
            check_type(argname="argument format_type", value=format_type, expected_type=type_hints["format_type"])
            check_type(argname="argument framework_type", value=framework_type, expected_type=type_hints["framework_type"])
            check_type(argname="argument inference_spec", value=inference_spec, expected_type=type_hints["inference_spec"])
            check_type(argname="argument labels", value=labels, expected_type=type_hints["labels"])
            check_type(argname="argument metrics", value=metrics, expected_type=type_hints["metrics"])
            check_type(argname="argument options", value=options, expected_type=type_hints["options"])
            check_type(argname="argument source_id", value=source_id, expected_type=type_hints["source_id"])
            check_type(argname="argument source_type", value=source_type, expected_type=type_hints["source_type"])
            check_type(argname="argument training_spec", value=training_spec, expected_type=type_hints["training_spec"])
            check_type(argname="argument version_description", value=version_description, expected_type=type_hints["version_description"])
            check_type(argname="argument version_name", value=version_name, expected_type=type_hints["version_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "model_id": model_id,
            "uri": uri,
        }
        if approval_status is not None:
            self._values["approval_status"] = approval_status
        if extra_info is not None:
            self._values["extra_info"] = extra_info
        if format_type is not None:
            self._values["format_type"] = format_type
        if framework_type is not None:
            self._values["framework_type"] = framework_type
        if inference_spec is not None:
            self._values["inference_spec"] = inference_spec
        if labels is not None:
            self._values["labels"] = labels
        if metrics is not None:
            self._values["metrics"] = metrics
        if options is not None:
            self._values["options"] = options
        if source_id is not None:
            self._values["source_id"] = source_id
        if source_type is not None:
            self._values["source_type"] = source_type
        if training_spec is not None:
            self._values["training_spec"] = training_spec
        if version_description is not None:
            self._values["version_description"] = version_description
        if version_name is not None:
            self._values["version_name"] = version_name

    @builtins.property
    def model_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property modelId: Model ID.

        For details about how to obtain the model ID.
        '''
        result = self._values.get("model_id")
        assert result is not None, "Required property 'model_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def uri(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property uri: Model version URI, that is, the location where the model is stored.

        Possible values are:

        - The HTTP(S) address of the model, for example: 'https://myweb.com/mymodel.tar.gz '.
        - If the model is stored in OSS, the format is 'oss://./object '. For the endpoint configuration, see [Access domain name and data center](~~ 31837 ~~). For example, see OSS:// mybucket/'.
        '''
        result = self._values.get("uri")
        assert result is not None, "Required property 'uri' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def approval_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property approvalStatus: Admission status, with values as follows: - Pending: to be determined.

        - Approved: Allow to go online.
        - Rejected: Online is not allowed.
        '''
        result = self._values.get("approval_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def extra_info(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property extraInfo: The additional information.'''
        result = self._values.get("extra_info")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def format_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property formatType: Model format, possible values: - OfflineModel - SavedModel - Keras H5 - Frozen Pb - Caffe Prototxt - TorchScript - XGBoost - PMML - AlinkModel - ONNX.'''
        result = self._values.get("format_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def framework_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property frameworkType: Model framework, possible values: - Pytorch - XGBoost - Keras - Caffe - Alink - Xflow - TensorFlow.'''
        result = self._values.get("framework_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def inference_spec(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property inferenceSpec: Describes how to apply to downstream inference services.

        For example, describe the processor and container of EAS. Example: { "processor": "tensorflow_gpu_1.12" }
        '''
        result = self._values.get("inference_spec")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def labels(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosModelVersion.LabelsProperty"]]]]:
        '''Property labels: List of model version labels.'''
        result = self._values.get("labels")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosModelVersion.LabelsProperty"]]]], result)

    @builtins.property
    def metrics(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property metrics: The metrics for the model.

        The length after serialization is limited to 8,192. Example:
        { "Results": [{ "Dataset": { "DatasetId": "d-sdkjanksaklerhfd" }, "Metrics": { "cer": 0.175 } }, { "Dataset": { "Uri": "oss://xxxx/" }, "Metrics": { "cer": 0.172 } }] }
        '''
        result = self._values.get("metrics")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property options: The extended field.

        This is a JSON string.
        '''
        result = self._values.get("options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sourceId: Source ID.

        - When the source type is Custom, this field is not restricted.
        - When the source is PAIFlow or TrainingService, the format is:
          region=<region_id>,workspaceId=<workspace_id>,kind=,id=
          Among them:
        - region is the Alibaba Cloud region ID.
        - workspaceId indicates the workspace ID.
        - kind: is a type. Value: PipelineRun(PAIFlow workflow);ServiceJob (training service).
        - id: is a unique identifier.
        '''
        result = self._values.get("source_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sourceType: Model source type, possible values: - Custom: Custom.

        - PAIFlow:PAI workflow.
        - TrainingService:PAI training service.
        '''
        result = self._values.get("source_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def training_spec(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property trainingSpec: Training configuration.

        Configuration for fine-tuning, incremental training.
        '''
        result = self._values.get("training_spec")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def version_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property versionDescription: Model version description.'''
        result = self._values.get("version_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def version_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property versionName: The model version, which is unique for each model.

        If you leave this parameter empty, the first version is 0.1.0 by default. After that, the minor version number is increased by 1 in sequence. For example, the second version number is 0.2.0. A version number consists of a major version number, a minor version number, and a stage version number, separated by periods (.). The major version number and minor version number are numeric. The stage version number begins with a digit and can include numbers, underscores, and letters. For example, the version number is 1.1.0 or 2.3.4_beta.
        '''
        result = self._values.get("version_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ModelVersionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCodeSource(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.RosCodeSource",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::PAI::CodeSource``, which is used to create a code build in Platform for AI (PAI).

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``CodeSource`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-codesource
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosCodeSourceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e4ee53c3157f83268c1e2cc25ba229f5d27b1ee0a242464eb5fa2d037970f52c)
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
            type_hints = typing.get_type_hints(_typecheckingstub__9e7a80f82c6f5b8e148b9d645a36d3d3a9a3052a823585e9bec0e3a4c5424fbe)
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
        :Attribute: Accessibility: Visibility of the code configuration.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccessibility"))

    @builtins.property
    @jsii.member(jsii_name="attrCodeBranch")
    def attr_code_branch(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CodeBranch: Code repository branch.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCodeBranch"))

    @builtins.property
    @jsii.member(jsii_name="attrCodeCommit")
    def attr_code_commit(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CodeCommit: The code CommitId.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCodeCommit"))

    @builtins.property
    @jsii.member(jsii_name="attrCodeRepo")
    def attr_code_repo(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CodeRepo: Code repository address.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCodeRepo"))

    @builtins.property
    @jsii.member(jsii_name="attrCodeRepoAccessToken")
    def attr_code_repo_access_token(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CodeRepoAccessToken: The Token used to access the code repository.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCodeRepoAccessToken"))

    @builtins.property
    @jsii.member(jsii_name="attrCodeRepoUserName")
    def attr_code_repo_user_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CodeRepoUserName: The user name of the code repository.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCodeRepoUserName"))

    @builtins.property
    @jsii.member(jsii_name="attrCodeSourcesId")
    def attr_code_sources_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CodeSourcesId: The ID of the created code configuration.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCodeSourcesId"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: The creation time of the code.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Description: A detailed description of the code configuration.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DisplayName: Code source configuration name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDisplayName"))

    @builtins.property
    @jsii.member(jsii_name="attrGmtModifyTime")
    def attr_gmt_modify_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GmtModifyTime: Code configuration modification time. The time format is iso8601.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGmtModifyTime"))

    @builtins.property
    @jsii.member(jsii_name="attrMountPath")
    def attr_mount_path(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MountPath: The local Mount Directory of the code.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMountPath"))

    @builtins.property
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UserId: The ID of the creator of the code configuration source.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUserId"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceId")
    def attr_workspace_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: WorkspaceId: The ID of the workspace.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrWorkspaceId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="accessibility")
    def accessibility(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        accessibility: Visibility of the code configuration, possible values:

        - PRIVATE: In this workspace, it is only visible to you and the administrator.
        - PUBLIC: In this workspace, it is visible to everyone.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "accessibility"))

    @accessibility.setter
    def accessibility(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__27a6191f9ef69cab0aaa4734b603d8c4f896efab5159c640b3713fb29042e78f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accessibility", value)

    @builtins.property
    @jsii.member(jsii_name="codeRepo")
    def code_repo(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: codeRepo: Code repository address.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "codeRepo"))

    @code_repo.setter
    def code_repo(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ac657bcc363f75e48c4e116faaa7b4e94e72655d641ebcd13c127d907f6a9d3a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "codeRepo", value)

    @builtins.property
    @jsii.member(jsii_name="displayName")
    def display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: displayName: Code source configuration name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "displayName"))

    @display_name.setter
    def display_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__41acd212326f91decaf9d16652ced925834ae86c58f20d0b14cbb83d1eb9fc42)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "displayName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7214720d49ae8befa20e333e522d4ce884db03aa2340b0384806769ca61f63ca)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="mountPath")
    def mount_path(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: mountPath: The local Mount Directory of the code.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "mountPath"))

    @mount_path.setter
    def mount_path(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5ab8fb793e747b1069d206acb3f1581ac4e3ef0aa8b3d46228033c07f1c3b051)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "mountPath", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__65b65ba9d216bd2670d4fbd2889e9c6d17b18371c00fd96ab19fc7ffe074819b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workspaceId", value)

    @builtins.property
    @jsii.member(jsii_name="codeBranch")
    def code_branch(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: codeBranch: Code repository branch.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "codeBranch"))

    @code_branch.setter
    def code_branch(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a4524604b27512cd3013b8a26192f29b62a3de3befce756cc079d2c1543450cb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "codeBranch", value)

    @builtins.property
    @jsii.member(jsii_name="codeCommit")
    def code_commit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: codeCommit: The code CommitId.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "codeCommit"))

    @code_commit.setter
    def code_commit(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__673dfd63f5ce11221656c1777e498f0c4f5c5dde917f87101632d8633e7d8381)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "codeCommit", value)

    @builtins.property
    @jsii.member(jsii_name="codeRepoAccessToken")
    def code_repo_access_token(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: codeRepoAccessToken: The Token used to access the code repository.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "codeRepoAccessToken"))

    @code_repo_access_token.setter
    def code_repo_access_token(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__20e0cd2aef326cbeaf5feef27ec78f9c5a9ade1c84452a7643b28b7c0839bf14)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "codeRepoAccessToken", value)

    @builtins.property
    @jsii.member(jsii_name="codeRepoUserName")
    def code_repo_user_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: codeRepoUserName: The user name of the code repository.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "codeRepoUserName"))

    @code_repo_user_name.setter
    def code_repo_user_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cd210d6852327016e3bf69fea5ce3a77180565168933d3a2108f79a5a4694af1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "codeRepoUserName", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: A detailed description of the code configuration.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cbde073ef361f725cd0ed4cc02a47a8166363b1ed5a504ed4b00a27b9ddd8527)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.RosCodeSourceProps",
    jsii_struct_bases=[],
    name_mapping={
        "accessibility": "accessibility",
        "code_repo": "codeRepo",
        "display_name": "displayName",
        "mount_path": "mountPath",
        "workspace_id": "workspaceId",
        "code_branch": "codeBranch",
        "code_commit": "codeCommit",
        "code_repo_access_token": "codeRepoAccessToken",
        "code_repo_user_name": "codeRepoUserName",
        "description": "description",
    },
)
class RosCodeSourceProps:
    def __init__(
        self,
        *,
        accessibility: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        code_repo: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        display_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        mount_path: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        code_branch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        code_commit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        code_repo_access_token: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        code_repo_user_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosCodeSource``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-codesource

        :param accessibility:
        :param code_repo:
        :param display_name:
        :param mount_path:
        :param workspace_id:
        :param code_branch:
        :param code_commit:
        :param code_repo_access_token:
        :param code_repo_user_name:
        :param description:
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3f0f59b53aa977cf83c047ae88363c5355326156f1cd88d115ff8377e463a13b)
            check_type(argname="argument accessibility", value=accessibility, expected_type=type_hints["accessibility"])
            check_type(argname="argument code_repo", value=code_repo, expected_type=type_hints["code_repo"])
            check_type(argname="argument display_name", value=display_name, expected_type=type_hints["display_name"])
            check_type(argname="argument mount_path", value=mount_path, expected_type=type_hints["mount_path"])
            check_type(argname="argument workspace_id", value=workspace_id, expected_type=type_hints["workspace_id"])
            check_type(argname="argument code_branch", value=code_branch, expected_type=type_hints["code_branch"])
            check_type(argname="argument code_commit", value=code_commit, expected_type=type_hints["code_commit"])
            check_type(argname="argument code_repo_access_token", value=code_repo_access_token, expected_type=type_hints["code_repo_access_token"])
            check_type(argname="argument code_repo_user_name", value=code_repo_user_name, expected_type=type_hints["code_repo_user_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "accessibility": accessibility,
            "code_repo": code_repo,
            "display_name": display_name,
            "mount_path": mount_path,
            "workspace_id": workspace_id,
        }
        if code_branch is not None:
            self._values["code_branch"] = code_branch
        if code_commit is not None:
            self._values["code_commit"] = code_commit
        if code_repo_access_token is not None:
            self._values["code_repo_access_token"] = code_repo_access_token
        if code_repo_user_name is not None:
            self._values["code_repo_user_name"] = code_repo_user_name
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def accessibility(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        accessibility: Visibility of the code configuration, possible values:

        - PRIVATE: In this workspace, it is only visible to you and the administrator.
        - PUBLIC: In this workspace, it is visible to everyone.
        '''
        result = self._values.get("accessibility")
        assert result is not None, "Required property 'accessibility' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def code_repo(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: codeRepo: Code repository address.
        '''
        result = self._values.get("code_repo")
        assert result is not None, "Required property 'code_repo' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: displayName: Code source configuration name.
        '''
        result = self._values.get("display_name")
        assert result is not None, "Required property 'display_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def mount_path(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: mountPath: The local Mount Directory of the code.
        '''
        result = self._values.get("mount_path")
        assert result is not None, "Required property 'mount_path' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

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
    def code_branch(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: codeBranch: Code repository branch.
        '''
        result = self._values.get("code_branch")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def code_commit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: codeCommit: The code CommitId.
        '''
        result = self._values.get("code_commit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def code_repo_access_token(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: codeRepoAccessToken: The Token used to access the code repository.
        '''
        result = self._values.get("code_repo_access_token")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def code_repo_user_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: codeRepoUserName: The user name of the code repository.
        '''
        result = self._values.get("code_repo_user_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: A detailed description of the code configuration.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosCodeSourceProps(%s)" % ", ".join(
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
        :Attribute: WorkspaceId: The ID of the workspace where the dataset is located.
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

        workspaceId: The ID of the workspace where the dataset is located.
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


class RosDatasetVersion(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.RosDatasetVersion",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::PAI::DatasetVersion``, which is used to create a dataset version.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``DatasetVersion`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-datasetversion
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDatasetVersionProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2d3b6b0f922efdaf2d6b9c7f2d5b926b4cd28db32e1aec6fd3a0dd67b3fc2f70)
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
            type_hints = typing.get_type_hints(_typecheckingstub__5200e465eaeeeb3ca7f564ff5e8008de456ca9466178033bd66249a4330b9333)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrVersionName")
    def attr_version_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VersionName: Dataset version name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVersionName"))

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
        :Property: datasetId: The ID of the dataset.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "datasetId"))

    @dataset_id.setter
    def dataset_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__851058e5ed165db60287a68832a7b1c5c1e7a3db90a56ed78fb613b88082e374)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "datasetId", value)

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
        - CPFS
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dataSourceType"))

    @data_source_type.setter
    def data_source_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7aec134d8845b0fbedd8180d9abd6efa02e40874293a073d04b7e98752b41193)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dataSourceType", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__03a8af798b4d5769383ef10202e3ade04fef3057a7b339ebf81d7fd026f87441)
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
            type_hints = typing.get_type_hints(_typecheckingstub__3d6bb94ef23cbd912af42de80ece8c0f4c49751f0935857a21ab529d15d8bf71)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "property", value)

    @builtins.property
    @jsii.member(jsii_name="uri")
    def uri(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        uri: The Uri configuration sample is as follows:

        - The data source type is OSS:'oss://bucket.endpoint/object'
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
            type_hints = typing.get_type_hints(_typecheckingstub__855a4fa8412210cc3182bd807a59e704ef029951aaf744e24167b2a08520f1ca)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "uri", value)

    @builtins.property
    @jsii.member(jsii_name="dataCount")
    def data_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dataCount: The number of dataset files, in units of pieces.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dataCount"))

    @data_count.setter
    def data_count(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__18758702eb9770575391d2105d6d03b14bc36348ec9b6d5950f701f444f89cb6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dataCount", value)

    @builtins.property
    @jsii.member(jsii_name="dataSize")
    def data_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dataSize: The size of the dataset file in bytes.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dataSize"))

    @data_size.setter
    def data_size(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b2c3a292bb5d1fd5364367df0960407c95738ebbb072693b7b9b741b0b4f94ce)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dataSize", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: To create a custom description for dataset versions in order to distinguish between different versions of the dataset.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6f31c48e1b533055e18b6a5f9b05393301305f656d2162db8bdfa2a181ffd7fc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="labels")
    def labels(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDatasetVersion.LabelsProperty"]]]]:
        '''
        :Property: labels: Dataset version tag list.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDatasetVersion.LabelsProperty"]]]], jsii.get(self, "labels"))

    @labels.setter
    def labels(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDatasetVersion.LabelsProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b14f62219d0124fef0a370b67e363b45c25368f78a07cd5d3c20615c5b08e57a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "labels", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__5d09420904d72a1c95118bea1e634cf6856be902f88602005458ca39e9847f56)
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
            type_hints = typing.get_type_hints(_typecheckingstub__b41fa19fb579edd77e623ecb029e48108aa6edac99c490b9cd5f265cb4f3ec99)
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
            type_hints = typing.get_type_hints(_typecheckingstub__d6b87cb555035bd4714bfc714e038aca2df901759dffd0fa0ff8b4605259294b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceType", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-pai.RosDatasetVersion.LabelsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class LabelsProperty:
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
                type_hints = typing.get_type_hints(_typecheckingstub__6028368af8ae00c1f561c515b2c926b57b021b3b47badca088d27b570e8c1fd1)
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
            :Property: key: The key of the tag. Maximum 128 bytes, does not support equal signs (=) and half-width commas (,).
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: The value of the tag. Maximum 128 bytes, does not support equal signs (=) and half-width commas (,).
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "LabelsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.RosDatasetVersionProps",
    jsii_struct_bases=[],
    name_mapping={
        "dataset_id": "datasetId",
        "data_source_type": "dataSourceType",
        "property": "property",
        "uri": "uri",
        "data_count": "dataCount",
        "data_size": "dataSize",
        "description": "description",
        "labels": "labels",
        "options": "options",
        "source_id": "sourceId",
        "source_type": "sourceType",
    },
)
class RosDatasetVersionProps:
    def __init__(
        self,
        *,
        dataset_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        data_source_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        property: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        uri: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        data_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        data_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        labels: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDatasetVersion.LabelsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosDatasetVersion``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-datasetversion

        :param dataset_id:
        :param data_source_type:
        :param property:
        :param uri:
        :param data_count:
        :param data_size:
        :param description:
        :param labels:
        :param options:
        :param source_id:
        :param source_type:
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__52d61e4be1962dd5557fbd3cf0931100e287801303c41cffc657687ed6cb5462)
            check_type(argname="argument dataset_id", value=dataset_id, expected_type=type_hints["dataset_id"])
            check_type(argname="argument data_source_type", value=data_source_type, expected_type=type_hints["data_source_type"])
            check_type(argname="argument property", value=property, expected_type=type_hints["property"])
            check_type(argname="argument uri", value=uri, expected_type=type_hints["uri"])
            check_type(argname="argument data_count", value=data_count, expected_type=type_hints["data_count"])
            check_type(argname="argument data_size", value=data_size, expected_type=type_hints["data_size"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument labels", value=labels, expected_type=type_hints["labels"])
            check_type(argname="argument options", value=options, expected_type=type_hints["options"])
            check_type(argname="argument source_id", value=source_id, expected_type=type_hints["source_id"])
            check_type(argname="argument source_type", value=source_type, expected_type=type_hints["source_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "dataset_id": dataset_id,
            "data_source_type": data_source_type,
            "property": property,
            "uri": uri,
        }
        if data_count is not None:
            self._values["data_count"] = data_count
        if data_size is not None:
            self._values["data_size"] = data_size
        if description is not None:
            self._values["description"] = description
        if labels is not None:
            self._values["labels"] = labels
        if options is not None:
            self._values["options"] = options
        if source_id is not None:
            self._values["source_id"] = source_id
        if source_type is not None:
            self._values["source_type"] = source_type

    @builtins.property
    def dataset_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: datasetId: The ID of the dataset.
        '''
        result = self._values.get("dataset_id")
        assert result is not None, "Required property 'dataset_id' is missing"
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
        - CPFS
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

        - The data source type is OSS:'oss://bucket.endpoint/object'
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
    def data_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dataCount: The number of dataset files, in units of pieces.
        '''
        result = self._values.get("data_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def data_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dataSize: The size of the dataset file in bytes.
        '''
        result = self._values.get("data_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: To create a custom description for dataset versions in order to distinguish between different versions of the dataset.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def labels(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDatasetVersion.LabelsProperty]]]]:
        '''
        :Property: labels: Dataset version tag list.
        '''
        result = self._values.get("labels")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDatasetVersion.LabelsProperty]]]], result)

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
        return "RosDatasetVersionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosExperiment(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.RosExperiment",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::PAI::Experiment``, which is used to create an experiment.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Experiment`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-experiment
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosExperimentProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7eb7f71e156db171837258625b4db946fc84a6900fd6e2fd3a3d204b2a2cf839)
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
            type_hints = typing.get_type_hints(_typecheckingstub__7bc4406de3384b91d2a3b3e6e554be316e19dba056bab823846911a44a10cc5d)
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
        :Attribute: Accessibility: Experimental Visibility.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccessibility"))

    @builtins.property
    @jsii.member(jsii_name="attrArtifactUri")
    def attr_artifact_uri(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ArtifactUri: ArtifactUri is default OSS storage path of the output of trials in the experiment.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrArtifactUri"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: GmtCreateTime is time when this entity is created.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrExperimentId")
    def attr_experiment_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ExperimentId: ExperimentId is globally unique identifier of the experiment.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExperimentId"))

    @builtins.property
    @jsii.member(jsii_name="attrExperimentName")
    def attr_experiment_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ExperimentName: Name is the name of the experiment, unique in a namespace.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExperimentName"))

    @builtins.property
    @jsii.member(jsii_name="attrGmtModifiedTime")
    def attr_gmt_modified_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GmtModifiedTime: GmtModifiedTime is time when this entity is modified.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGmtModifiedTime"))

    @builtins.property
    @jsii.member(jsii_name="attrLabels")
    def attr_labels(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Labels: Labels are tags of the experiment.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLabels"))

    @builtins.property
    @jsii.member(jsii_name="attrOwnerId")
    def attr_owner_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: OwnerId: OwnerId is the user account id which this entity belongs to.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOwnerId"))

    @builtins.property
    @jsii.member(jsii_name="attrTensorboardLogUri")
    def attr_tensorboard_log_uri(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TensorboardLogUri: TensorboardLogUri is the default OSS storage path of tensorboard log of trials in the experiment.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTensorboardLogUri"))

    @builtins.property
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UserId: UserId is the user account id which created this entity.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUserId"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceId")
    def attr_workspace_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: WorkspaceId: WorkspaceId is the workspace id which contains the experiment.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrWorkspaceId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="artifactUri")
    def artifact_uri(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: artifactUri: ArtifactUri is default OSS storage path of the output of trials in the experiment.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "artifactUri"))

    @artifact_uri.setter
    def artifact_uri(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__13b29c150d968bdcf09236b9307deb9d144ebfc829de37528158003647d2d218)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "artifactUri", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__969c906bd91711545abae2fc9bbfda49070343973c77696be6da47599b6a4c62)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="experimentName")
    def experiment_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: experimentName: Name is the name of the experiment, unique in a namespace.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "experimentName"))

    @experiment_name.setter
    def experiment_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fc4b3222d9fd344d860feaa051632659c81fedf9036e557b2d3c677f6a558dfb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "experimentName", value)

    @builtins.property
    @jsii.member(jsii_name="workspaceId")
    def workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: workspaceId: WorkspaceId is the workspace id which contains the experiment.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "workspaceId"))

    @workspace_id.setter
    def workspace_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d78ad12ecfff510165d76cf1c1ede477062fa3ea5b579c413f0bc64f76fd9813)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workspaceId", value)

    @builtins.property
    @jsii.member(jsii_name="accessibility")
    def accessibility(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: accessibility: Experimental Visibility.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "accessibility"))

    @accessibility.setter
    def accessibility(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__adbb50c40fb15d15e960c46fc90bc95064968537d5f8a67cc57fb065d89a882d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accessibility", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.RosExperimentProps",
    jsii_struct_bases=[],
    name_mapping={
        "artifact_uri": "artifactUri",
        "experiment_name": "experimentName",
        "workspace_id": "workspaceId",
        "accessibility": "accessibility",
    },
)
class RosExperimentProps:
    def __init__(
        self,
        *,
        artifact_uri: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        experiment_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        accessibility: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosExperiment``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-experiment

        :param artifact_uri:
        :param experiment_name:
        :param workspace_id:
        :param accessibility:
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4a00e9e8d9dcc763f031d400b3189a79b10327fea87966d07e1a5b17269de00d)
            check_type(argname="argument artifact_uri", value=artifact_uri, expected_type=type_hints["artifact_uri"])
            check_type(argname="argument experiment_name", value=experiment_name, expected_type=type_hints["experiment_name"])
            check_type(argname="argument workspace_id", value=workspace_id, expected_type=type_hints["workspace_id"])
            check_type(argname="argument accessibility", value=accessibility, expected_type=type_hints["accessibility"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "artifact_uri": artifact_uri,
            "experiment_name": experiment_name,
            "workspace_id": workspace_id,
        }
        if accessibility is not None:
            self._values["accessibility"] = accessibility

    @builtins.property
    def artifact_uri(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: artifactUri: ArtifactUri is default OSS storage path of the output of trials in the experiment.
        '''
        result = self._values.get("artifact_uri")
        assert result is not None, "Required property 'artifact_uri' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def experiment_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: experimentName: Name is the name of the experiment, unique in a namespace.
        '''
        result = self._values.get("experiment_name")
        assert result is not None, "Required property 'experiment_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: workspaceId: WorkspaceId is the workspace id which contains the experiment.
        '''
        result = self._values.get("workspace_id")
        assert result is not None, "Required property 'workspace_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def accessibility(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: accessibility: Experimental Visibility.
        '''
        result = self._values.get("accessibility")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosExperimentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosImage(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.RosImage",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::PAI::Image``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Image`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-image
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosImageProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2e224c735f5bf27bd8ca43cfb74cbfd4686e36de0c99d9158dcd9ced052aea11)
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
            type_hints = typing.get_type_hints(_typecheckingstub__0acdfd8ee1f04f35b80354d45c73c1466f736a4bafb23c3b2b5ed79c8c74498f)
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
        :Attribute: Accessibility: Visibility of the mirror.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccessibility"))

    @builtins.property
    @jsii.member(jsii_name="attrImageName")
    def attr_image_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ImageName: The image name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImageName"))

    @builtins.property
    @jsii.member(jsii_name="attrImageUri")
    def attr_image_uri(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ImageUri: The Image address, which contains the version number.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImageUri"))

    @builtins.property
    @jsii.member(jsii_name="attrLabels")
    def attr_labels(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Labels: Labels.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLabels"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceId")
    def attr_workspace_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: WorkspaceId: The ID of the workspace to which the image belongs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrWorkspaceId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__28577c7ae42cb845061640b6666705621777331a55fabf97124c17a81a4ed787)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="imageName")
    def image_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: imageName: The image name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "imageName"))

    @image_name.setter
    def image_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dd666a18ccff59637e3dd047cf1afd6eadd953a4540fc137f7f3dfee667b492f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "imageName", value)

    @builtins.property
    @jsii.member(jsii_name="imageUri")
    def image_uri(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: imageUri: The Image address, which contains the version number.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "imageUri"))

    @image_uri.setter
    def image_uri(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b4fc2dec8e57dbb47e2c1e74dd891a68470e98808577cd3135aec546626bee10)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "imageUri", value)

    @builtins.property
    @jsii.member(jsii_name="accessibility")
    def accessibility(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        accessibility: Visibility of the mirror, possible values:

        - PUBLIC: all members of the current workspace can operate.
        - PRIVATE: Only the creator can operate.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "accessibility"))

    @accessibility.setter
    def accessibility(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__621f682d684c34d491b652dbf1bb55e1e420bbd3ba093ad8d4d1ceeea8c43644)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accessibility", value)

    @builtins.property
    @jsii.member(jsii_name="labels")
    def labels(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosImage.LabelsProperty"]]]]:
        '''
        :Property: labels: Labels.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosImage.LabelsProperty"]]]], jsii.get(self, "labels"))

    @labels.setter
    def labels(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosImage.LabelsProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b2279d0f9e93bcb29cbfae4acd1d7e0a9e12b098b22768b17e0c23dafe9c1456)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "labels", value)

    @builtins.property
    @jsii.member(jsii_name="workspaceId")
    def workspace_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: workspaceId: The ID of the workspace to which the image belongs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "workspaceId"))

    @workspace_id.setter
    def workspace_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__622532c838b84f1ce3c939a502b85b53b1dbc74db62630e5623c2470cc48de1f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workspaceId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-pai.RosImage.LabelsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class LabelsProperty:
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
                type_hints = typing.get_type_hints(_typecheckingstub__f626cdca5e98f28787d92ef4b5607dfc7161b5936270ce6c6874b36e677c5e9d)
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
            :Property: key: Key.
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: value.
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "LabelsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.RosImageProps",
    jsii_struct_bases=[],
    name_mapping={
        "image_name": "imageName",
        "image_uri": "imageUri",
        "accessibility": "accessibility",
        "labels": "labels",
        "workspace_id": "workspaceId",
    },
)
class RosImageProps:
    def __init__(
        self,
        *,
        image_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        image_uri: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        accessibility: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        labels: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosImage.LabelsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        workspace_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosImage``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-image

        :param image_name:
        :param image_uri:
        :param accessibility:
        :param labels:
        :param workspace_id:
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__710e6323d6c5726a169098fa8ca56db1281d6d5ac80b549792098ea09a69e5d1)
            check_type(argname="argument image_name", value=image_name, expected_type=type_hints["image_name"])
            check_type(argname="argument image_uri", value=image_uri, expected_type=type_hints["image_uri"])
            check_type(argname="argument accessibility", value=accessibility, expected_type=type_hints["accessibility"])
            check_type(argname="argument labels", value=labels, expected_type=type_hints["labels"])
            check_type(argname="argument workspace_id", value=workspace_id, expected_type=type_hints["workspace_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "image_name": image_name,
            "image_uri": image_uri,
        }
        if accessibility is not None:
            self._values["accessibility"] = accessibility
        if labels is not None:
            self._values["labels"] = labels
        if workspace_id is not None:
            self._values["workspace_id"] = workspace_id

    @builtins.property
    def image_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: imageName: The image name.
        '''
        result = self._values.get("image_name")
        assert result is not None, "Required property 'image_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def image_uri(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: imageUri: The Image address, which contains the version number.
        '''
        result = self._values.get("image_uri")
        assert result is not None, "Required property 'image_uri' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def accessibility(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        accessibility: Visibility of the mirror, possible values:

        - PUBLIC: all members of the current workspace can operate.
        - PRIVATE: Only the creator can operate.
        '''
        result = self._values.get("accessibility")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def labels(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosImage.LabelsProperty]]]]:
        '''
        :Property: labels: Labels.
        '''
        result = self._values.get("labels")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosImage.LabelsProperty]]]], result)

    @builtins.property
    def workspace_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: workspaceId: The ID of the workspace to which the image belongs.
        '''
        result = self._values.get("workspace_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosImageProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosMember(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.RosMember",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::PAI::Member``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Member`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-member
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosMemberProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c9d63c4638766b9bf3ea40916cbf2b4d5ab26a5a7de4fc617cd63eada2630624)
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
            type_hints = typing.get_type_hints(_typecheckingstub__92f69a6cee148001c5624beea6fd72d5f1a6d7dfefea6e9964a139077e081b33)
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
        :Attribute: CreateTime: Create UTC time in ISO8601 format.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DisplayName: Member display name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDisplayName"))

    @builtins.property
    @jsii.member(jsii_name="attrMemberId")
    def attr_member_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MemberId: The member ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMemberId"))

    @builtins.property
    @jsii.member(jsii_name="attrMemberName")
    def attr_member_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MemberName: The name of user.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMemberName"))

    @builtins.property
    @jsii.member(jsii_name="attrRoles")
    def attr_roles(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Roles: The list of roles.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRoles"))

    @builtins.property
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UserId: The first ID of the resource.
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
            type_hints = typing.get_type_hints(_typecheckingstub__626385773fa060f21eed4f5127ffea4afd605fac84edd811379796bc2731de3a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="roles")
    def roles(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: roles: The list of roles.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], jsii.get(self, "roles"))

    @roles.setter
    def roles(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c6140672c91590dc72c4c3905ddef0082c27c8e7879ff78df23babcdc2a12980)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "roles", value)

    @builtins.property
    @jsii.member(jsii_name="userId")
    def user_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: userId: User ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "userId"))

    @user_id.setter
    def user_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dc7ee28553e51cca912ac2100289b71547a7ad811900321c0bf49c112d5635ab)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "userId", value)

    @builtins.property
    @jsii.member(jsii_name="workspaceId")
    def workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: workspaceId: Workspace ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "workspaceId"))

    @workspace_id.setter
    def workspace_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__65098c574cb7d6ce0570e7ad03a5a79a267f897db1ff3c1db64a76fec8357e7f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workspaceId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.RosMemberProps",
    jsii_struct_bases=[],
    name_mapping={
        "roles": "roles",
        "user_id": "userId",
        "workspace_id": "workspaceId",
    },
)
class RosMemberProps:
    def __init__(
        self,
        *,
        roles: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        user_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosMember``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-member

        :param roles:
        :param user_id:
        :param workspace_id:
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e9d4097fd1c1a9100568251dbe2b50eab1f591ff26a12ea61dfba93240005e49)
            check_type(argname="argument roles", value=roles, expected_type=type_hints["roles"])
            check_type(argname="argument user_id", value=user_id, expected_type=type_hints["user_id"])
            check_type(argname="argument workspace_id", value=workspace_id, expected_type=type_hints["workspace_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "roles": roles,
            "user_id": user_id,
            "workspace_id": workspace_id,
        }

    @builtins.property
    def roles(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: roles: The list of roles.
        '''
        result = self._values.get("roles")
        assert result is not None, "Required property 'roles' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def user_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: userId: User ID.
        '''
        result = self._values.get("user_id")
        assert result is not None, "Required property 'user_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: workspaceId: Workspace ID.
        '''
        result = self._values.get("workspace_id")
        assert result is not None, "Required property 'workspace_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosMemberProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosModelVersion(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.RosModelVersion",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::PAI::ModelVersion``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ModelVersion`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-modelversion
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosModelVersionProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b13f8023083cbbd98d5a8bf9152dbeb7e8b979b52e8669885bdfbae9472b4a08)
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
            type_hints = typing.get_type_hints(_typecheckingstub__9e5af160bd47b37b8b3f3bf1f4bd85ca987f94ebf851722305ae7fd49f8de71e)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrApprovalStatus")
    def attr_approval_status(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ApprovalStatus: Admission status, with values as follows:.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrApprovalStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrExtraInfo")
    def attr_extra_info(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ExtraInfo: Other information.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExtraInfo"))

    @builtins.property
    @jsii.member(jsii_name="attrFormatType")
    def attr_format_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: FormatType: Model format, possible values:.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFormatType"))

    @builtins.property
    @jsii.member(jsii_name="attrFrameworkType")
    def attr_framework_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: FrameworkType: Model framework, possible values:.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFrameworkType"))

    @builtins.property
    @jsii.member(jsii_name="attrGmtCreateTime")
    def attr_gmt_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GmtCreateTime: Create a model UTC time in the format ISO8601.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGmtCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrGmtModifiedTime")
    def attr_gmt_modified_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GmtModifiedTime: Finally, update the model UTC time in the format iso8601.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGmtModifiedTime"))

    @builtins.property
    @jsii.member(jsii_name="attrInferenceSpec")
    def attr_inference_spec(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InferenceSpec: Describes how to apply to downstream inference services, such as processors and containers of EAS.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInferenceSpec"))

    @builtins.property
    @jsii.member(jsii_name="attrLabels")
    def attr_labels(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Labels: List of model version labels.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLabels"))

    @builtins.property
    @jsii.member(jsii_name="attrMetrics")
    def attr_metrics(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Metrics: Model indicators.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMetrics"))

    @builtins.property
    @jsii.member(jsii_name="attrOptions")
    def attr_options(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Options: Extension field. The JsonString type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOptions"))

    @builtins.property
    @jsii.member(jsii_name="attrOwnerId")
    def attr_owner_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: OwnerId: The Alibaba Cloud account ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOwnerId"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceId")
    def attr_source_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SourceId: Source ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSourceId"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceType")
    def attr_source_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SourceType: Model source type, possible values:.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSourceType"))

    @builtins.property
    @jsii.member(jsii_name="attrTrainingSpec")
    def attr_training_spec(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TrainingSpec: Training configuration. Configuration for fine-tuning, incremental training.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTrainingSpec"))

    @builtins.property
    @jsii.member(jsii_name="attrUri")
    def attr_uri(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Uri: Model version URI, that is, the location where the model is stored.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUri"))

    @builtins.property
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UserId: The user ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUserId"))

    @builtins.property
    @jsii.member(jsii_name="attrVersionDescription")
    def attr_version_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VersionDescription: Model version description.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVersionDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrVersionName")
    def attr_version_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VersionName: Model version.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVersionName"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__2a0cfccb095db6fa0d7760abed649d7c2253d5763a7bbfaf680e6399095afc11)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="modelId")
    def model_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: modelId: Model ID. For details about how to obtain the model ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "modelId"))

    @model_id.setter
    def model_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__268ddc9ac63b63df458c2c265150c1da12c01d11cf85e82b64110b53b6cb125a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "modelId", value)

    @builtins.property
    @jsii.member(jsii_name="uri")
    def uri(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        uri: Model version URI, that is, the location where the model is stored. Possible values are:

        - The HTTP(S) address of the model, for example: 'https://myweb.com/mymodel.tar.gz '.
        - If the model is stored in OSS, the format is 'oss://./object '. For the endpoint configuration, see [Access domain name and data center](~~ 31837 ~~). For example, see OSS:// mybucket/'.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "uri"))

    @uri.setter
    def uri(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2f522db63af7b61498fd32be2edd3821d2ea3b964482fcf68b042f9e09a70131)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "uri", value)

    @builtins.property
    @jsii.member(jsii_name="approvalStatus")
    def approval_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        approvalStatus: Admission status, with values as follows:

        - Pending: to be determined.
        - Approved: Allow to go online.
        - Rejected: Online is not allowed.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "approvalStatus"))

    @approval_status.setter
    def approval_status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d5f70b32d4c9aeb31029f8057fa8044c3b08090c34f55ffeca1a3b32464e33c4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "approvalStatus", value)

    @builtins.property
    @jsii.member(jsii_name="extraInfo")
    def extra_info(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: extraInfo: The additional information.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "extraInfo"))

    @extra_info.setter
    def extra_info(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e6271603b08a2f63ac58af41f232a2301ffec0a66dfb8a7980fc467d4cc59952)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "extraInfo", value)

    @builtins.property
    @jsii.member(jsii_name="formatType")
    def format_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        formatType: Model format, possible values:

        - OfflineModel
        - SavedModel
        - Keras H5
        - Frozen Pb
        - Caffe Prototxt
        - TorchScript
        - XGBoost
        - PMML
        - AlinkModel
        - ONNX.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "formatType"))

    @format_type.setter
    def format_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9be74e4a8ee4eaa4184432437d2bdad8b6531da7d7f08c5083f7bc8cbee0614e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "formatType", value)

    @builtins.property
    @jsii.member(jsii_name="frameworkType")
    def framework_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        frameworkType: Model framework, possible values:

        - Pytorch
        - XGBoost
        - Keras
        - Caffe
        - Alink
        - Xflow
        - TensorFlow.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "frameworkType"))

    @framework_type.setter
    def framework_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__29ac5abec4618380882a6b6c4639c997e4890ed647898d0c74fc9e45630a9256)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "frameworkType", value)

    @builtins.property
    @jsii.member(jsii_name="inferenceSpec")
    def inference_spec(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: inferenceSpec: Describes how to apply to downstream inference services. For example, describe the processor and container of EAS. Example: { "processor": "tensorflow_gpu_1.12" }
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "inferenceSpec"))

    @inference_spec.setter
    def inference_spec(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__da32a1a207f6baec3e8cad5ff9c8fc84517d91e3834a1e2f66e895cc201020fb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "inferenceSpec", value)

    @builtins.property
    @jsii.member(jsii_name="labels")
    def labels(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosModelVersion.LabelsProperty"]]]]:
        '''
        :Property: labels: List of model version labels.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosModelVersion.LabelsProperty"]]]], jsii.get(self, "labels"))

    @labels.setter
    def labels(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosModelVersion.LabelsProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__740c86b80e31038ccbf4138dbce053d6a1a44d6b3c3cbee2a330e1caaf5bf0d4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "labels", value)

    @builtins.property
    @jsii.member(jsii_name="metrics")
    def metrics(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property:

        metrics: The metrics for the model. The length after serialization is limited to 8,192. Example:
        { "Results": [{ "Dataset": { "DatasetId": "d-sdkjanksaklerhfd" }, "Metrics": { "cer": 0.175 } }, { "Dataset": { "Uri": "oss://xxxx/" }, "Metrics": { "cer": 0.172 } }] }
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "metrics"))

    @metrics.setter
    def metrics(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__546ccee42f388b6b6f71e7808e185557269f74d362320acef3aa6a623d923da9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "metrics", value)

    @builtins.property
    @jsii.member(jsii_name="options")
    def options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: options: The extended field. This is a JSON string.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "options"))

    @options.setter
    def options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e17a7eca17bc43bfe9e1a4143ea7e5253441f3eb3ecd42f08f9597ffdbeedc23)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "options", value)

    @builtins.property
    @jsii.member(jsii_name="sourceId")
    def source_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sourceId: Source ID.

        - When the source type is Custom, this field is not restricted.
        - When the source is PAIFlow or TrainingService, the format is:
        region=<region_id>,workspaceId=<workspace_id>,kind=,id=
        Among them:

        - region is the Alibaba Cloud region ID.
        - workspaceId indicates the workspace ID.
        - kind: is a type. Value: PipelineRun(PAIFlow workflow);ServiceJob (training service).
        - id: is a unique identifier.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sourceId"))

    @source_id.setter
    def source_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b02222e09615987b09c2b7e1306ffed152e88a0193ea2c74eb5d5c8b2d09170f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceId", value)

    @builtins.property
    @jsii.member(jsii_name="sourceType")
    def source_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sourceType: Model source type, possible values:

        - Custom: Custom.
        - PAIFlow:PAI workflow.
        - TrainingService:PAI training service.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sourceType"))

    @source_type.setter
    def source_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__70cecfe0f1f157a8f7c55f69ed1b959a1c92803649420b8e324b0ba4669b6d17)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceType", value)

    @builtins.property
    @jsii.member(jsii_name="trainingSpec")
    def training_spec(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: trainingSpec: Training configuration. Configuration for fine-tuning, incremental training.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "trainingSpec"))

    @training_spec.setter
    def training_spec(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__443e3bfbb8da09af5d0bbdff9f6278b0bf247dfa6f66a91e3502de8babaeb7a7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "trainingSpec", value)

    @builtins.property
    @jsii.member(jsii_name="versionDescription")
    def version_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: versionDescription: Model version description.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "versionDescription"))

    @version_description.setter
    def version_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a3f2dbfb40a9da0055b9d2de8d1e9d8999241a183effe836f71e9bdc39babdd5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "versionDescription", value)

    @builtins.property
    @jsii.member(jsii_name="versionName")
    def version_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: versionName: The model version, which is unique for each model. If you leave this parameter empty, the first version is 0.1.0 by default. After that, the minor version number is increased by 1 in sequence. For example, the second version number is 0.2.0. A version number consists of a major version number, a minor version number, and a stage version number, separated by periods (.). The major version number and minor version number are numeric. The stage version number begins with a digit and can include numbers, underscores, and letters. For example, the version number is 1.1.0 or 2.3.4_beta.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "versionName"))

    @version_name.setter
    def version_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__97b7801875eebc330a3b0c3e8edcb90d762abbda82ae90cfd4848c3e0a31c86c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "versionName", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-pai.RosModelVersion.LabelsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class LabelsProperty:
        def __init__(
            self,
            *,
            key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key:
            :param value:
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__2349f1a39b655f1aedae752cfa9e6bce2cb42877061eb7c5e473c7e07d777dc4)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if key is not None:
                self._values["key"] = key
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: key: label key.
            '''
            result = self._values.get("key")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: label value.
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "LabelsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.RosModelVersionProps",
    jsii_struct_bases=[],
    name_mapping={
        "model_id": "modelId",
        "uri": "uri",
        "approval_status": "approvalStatus",
        "extra_info": "extraInfo",
        "format_type": "formatType",
        "framework_type": "frameworkType",
        "inference_spec": "inferenceSpec",
        "labels": "labels",
        "metrics": "metrics",
        "options": "options",
        "source_id": "sourceId",
        "source_type": "sourceType",
        "training_spec": "trainingSpec",
        "version_description": "versionDescription",
        "version_name": "versionName",
    },
)
class RosModelVersionProps:
    def __init__(
        self,
        *,
        model_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        uri: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        approval_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        extra_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        format_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        framework_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        inference_spec: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        labels: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosModelVersion.LabelsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        metrics: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        training_spec: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        version_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        version_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosModelVersion``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-modelversion

        :param model_id:
        :param uri:
        :param approval_status:
        :param extra_info:
        :param format_type:
        :param framework_type:
        :param inference_spec:
        :param labels:
        :param metrics:
        :param options:
        :param source_id:
        :param source_type:
        :param training_spec:
        :param version_description:
        :param version_name:
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d06650c9233fb168bd7de6f8b5065764981a602d51ded96bf281f6484808ec6a)
            check_type(argname="argument model_id", value=model_id, expected_type=type_hints["model_id"])
            check_type(argname="argument uri", value=uri, expected_type=type_hints["uri"])
            check_type(argname="argument approval_status", value=approval_status, expected_type=type_hints["approval_status"])
            check_type(argname="argument extra_info", value=extra_info, expected_type=type_hints["extra_info"])
            check_type(argname="argument format_type", value=format_type, expected_type=type_hints["format_type"])
            check_type(argname="argument framework_type", value=framework_type, expected_type=type_hints["framework_type"])
            check_type(argname="argument inference_spec", value=inference_spec, expected_type=type_hints["inference_spec"])
            check_type(argname="argument labels", value=labels, expected_type=type_hints["labels"])
            check_type(argname="argument metrics", value=metrics, expected_type=type_hints["metrics"])
            check_type(argname="argument options", value=options, expected_type=type_hints["options"])
            check_type(argname="argument source_id", value=source_id, expected_type=type_hints["source_id"])
            check_type(argname="argument source_type", value=source_type, expected_type=type_hints["source_type"])
            check_type(argname="argument training_spec", value=training_spec, expected_type=type_hints["training_spec"])
            check_type(argname="argument version_description", value=version_description, expected_type=type_hints["version_description"])
            check_type(argname="argument version_name", value=version_name, expected_type=type_hints["version_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "model_id": model_id,
            "uri": uri,
        }
        if approval_status is not None:
            self._values["approval_status"] = approval_status
        if extra_info is not None:
            self._values["extra_info"] = extra_info
        if format_type is not None:
            self._values["format_type"] = format_type
        if framework_type is not None:
            self._values["framework_type"] = framework_type
        if inference_spec is not None:
            self._values["inference_spec"] = inference_spec
        if labels is not None:
            self._values["labels"] = labels
        if metrics is not None:
            self._values["metrics"] = metrics
        if options is not None:
            self._values["options"] = options
        if source_id is not None:
            self._values["source_id"] = source_id
        if source_type is not None:
            self._values["source_type"] = source_type
        if training_spec is not None:
            self._values["training_spec"] = training_spec
        if version_description is not None:
            self._values["version_description"] = version_description
        if version_name is not None:
            self._values["version_name"] = version_name

    @builtins.property
    def model_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: modelId: Model ID. For details about how to obtain the model ID.
        '''
        result = self._values.get("model_id")
        assert result is not None, "Required property 'model_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def uri(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        uri: Model version URI, that is, the location where the model is stored. Possible values are:

        - The HTTP(S) address of the model, for example: 'https://myweb.com/mymodel.tar.gz '.
        - If the model is stored in OSS, the format is 'oss://./object '. For the endpoint configuration, see [Access domain name and data center](~~ 31837 ~~). For example, see OSS:// mybucket/'.
        '''
        result = self._values.get("uri")
        assert result is not None, "Required property 'uri' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def approval_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        approvalStatus: Admission status, with values as follows:

        - Pending: to be determined.
        - Approved: Allow to go online.
        - Rejected: Online is not allowed.
        '''
        result = self._values.get("approval_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def extra_info(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: extraInfo: The additional information.
        '''
        result = self._values.get("extra_info")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def format_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        formatType: Model format, possible values:

        - OfflineModel
        - SavedModel
        - Keras H5
        - Frozen Pb
        - Caffe Prototxt
        - TorchScript
        - XGBoost
        - PMML
        - AlinkModel
        - ONNX.
        '''
        result = self._values.get("format_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def framework_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        frameworkType: Model framework, possible values:

        - Pytorch
        - XGBoost
        - Keras
        - Caffe
        - Alink
        - Xflow
        - TensorFlow.
        '''
        result = self._values.get("framework_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def inference_spec(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: inferenceSpec: Describes how to apply to downstream inference services. For example, describe the processor and container of EAS. Example: { "processor": "tensorflow_gpu_1.12" }
        '''
        result = self._values.get("inference_spec")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def labels(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosModelVersion.LabelsProperty]]]]:
        '''
        :Property: labels: List of model version labels.
        '''
        result = self._values.get("labels")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosModelVersion.LabelsProperty]]]], result)

    @builtins.property
    def metrics(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property:

        metrics: The metrics for the model. The length after serialization is limited to 8,192. Example:
        { "Results": [{ "Dataset": { "DatasetId": "d-sdkjanksaklerhfd" }, "Metrics": { "cer": 0.175 } }, { "Dataset": { "Uri": "oss://xxxx/" }, "Metrics": { "cer": 0.172 } }] }
        '''
        result = self._values.get("metrics")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: options: The extended field. This is a JSON string.
        '''
        result = self._values.get("options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sourceId: Source ID.

        - When the source type is Custom, this field is not restricted.
        - When the source is PAIFlow or TrainingService, the format is:
        region=<region_id>,workspaceId=<workspace_id>,kind=,id=
        Among them:

        - region is the Alibaba Cloud region ID.
        - workspaceId indicates the workspace ID.
        - kind: is a type. Value: PipelineRun(PAIFlow workflow);ServiceJob (training service).
        - id: is a unique identifier.
        '''
        result = self._values.get("source_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sourceType: Model source type, possible values:

        - Custom: Custom.
        - PAIFlow:PAI workflow.
        - TrainingService:PAI training service.
        '''
        result = self._values.get("source_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def training_spec(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: trainingSpec: Training configuration. Configuration for fine-tuning, incremental training.
        '''
        result = self._values.get("training_spec")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def version_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: versionDescription: Model version description.
        '''
        result = self._values.get("version_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def version_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: versionName: The model version, which is unique for each model. If you leave this parameter empty, the first version is 0.1.0 by default. After that, the minor version number is increased by 1 in sequence. For example, the second version number is 0.2.0. A version number consists of a major version number, a minor version number, and a stage version number, separated by periods (.). The major version number and minor version number are numeric. The stage version number begins with a digit and can include numbers, underscores, and letters. For example, the version number is 1.1.0 or 2.3.4_beta.
        '''
        result = self._values.get("version_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosModelVersionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosRun(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.RosRun",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::PAI::Run``, which is used to create a run.

    A run belongs to an experiment and can be associated with a workload. A run can also represent a single code execution.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Run`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-run
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosRunProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__15454e9ea45e29d8afb20d5818669ab50d917313874cbc7b444a62aaa22f1a44)
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
            type_hints = typing.get_type_hints(_typecheckingstub__dff6b28daafe8f539ab6f677da6539c8b38d5edf468d633d3300c1042b9626b6)
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
        :Attribute: Accessibility: Resource attribute fields representing visibility.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccessibility"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: The creation time of the Run.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrExperimentId")
    def attr_experiment_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ExperimentId: Resource attribute field of the experiment ID to which Run belongs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExperimentId"))

    @builtins.property
    @jsii.member(jsii_name="attrGmtModifiedTime")
    def attr_gmt_modified_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GmtModifiedTime: Resource attribute fields representing edit time.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGmtModifiedTime"))

    @builtins.property
    @jsii.member(jsii_name="attrLabels")
    def attr_labels(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Labels: Run attribute field representing the run tag.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLabels"))

    @builtins.property
    @jsii.member(jsii_name="attrMetrics")
    def attr_metrics(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Metrics: Resource attribute field representing the run metric.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMetrics"))

    @builtins.property
    @jsii.member(jsii_name="attrOwnerId")
    def attr_owner_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: OwnerId: Resource attribute field representing owner.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOwnerId"))

    @builtins.property
    @jsii.member(jsii_name="attrParams")
    def attr_params(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Params: Resource attribute field representing the run parameter.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrParams"))

    @builtins.property
    @jsii.member(jsii_name="attrRunId")
    def attr_run_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RunId: The ID of the Run.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRunId"))

    @builtins.property
    @jsii.member(jsii_name="attrRunName")
    def attr_run_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RunName: The name of the Run.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRunName"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceId")
    def attr_source_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SourceId: Attribute Resource field representing the source task ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSourceId"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceType")
    def attr_source_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SourceType: Run attribute fields representing the source type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSourceType"))

    @builtins.property
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UserId: Run attribute field representing creator ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUserId"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceId")
    def attr_workspace_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: WorkspaceId: Resource attribute field of the workspace ID to which Run belongs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrWorkspaceId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__af756a83dcdd6e19d5d6438ff9660dac2899127be4c1ec2a6916cd4cd39c4727)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="experimentId")
    def experiment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: experimentId: Resource attribute field of the experiment ID to which Run belongs.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "experimentId"))

    @experiment_id.setter
    def experiment_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__02523e9b5d7ef54ac33fdf130a6e8cd93828eb5c205ba4a72c4c50ceb112e34c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "experimentId", value)

    @builtins.property
    @jsii.member(jsii_name="runName")
    def run_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: runName: The name of the Run.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "runName"))

    @run_name.setter
    def run_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e8ce4d9b7c6bcd231b6a3614069680a03c3145e417bc5d9b8e11cc1e4c8fee38)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "runName", value)

    @builtins.property
    @jsii.member(jsii_name="sourceId")
    def source_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sourceId: Attribute Resource field representing the source task ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sourceId"))

    @source_id.setter
    def source_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ed36789a91140bac13ad6a96fed5930052eec3af0d936c16aa8d873c2bf8b28d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceId", value)

    @builtins.property
    @jsii.member(jsii_name="sourceType")
    def source_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sourceType: Resource attribute fields representing the source type.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sourceType"))

    @source_type.setter
    def source_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c5530a61b68dc484a349ebaf0e9f72c7c6bb659677fe5b1de789f43ec9065273)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceType", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.RosRunProps",
    jsii_struct_bases=[],
    name_mapping={
        "experiment_id": "experimentId",
        "run_name": "runName",
        "source_id": "sourceId",
        "source_type": "sourceType",
    },
)
class RosRunProps:
    def __init__(
        self,
        *,
        experiment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        run_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosRun``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-run

        :param experiment_id:
        :param run_name:
        :param source_id:
        :param source_type:
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f95a83e0380bec6290bb2fcd4bd51f640cbb4574d33db952725e075768c2f09c)
            check_type(argname="argument experiment_id", value=experiment_id, expected_type=type_hints["experiment_id"])
            check_type(argname="argument run_name", value=run_name, expected_type=type_hints["run_name"])
            check_type(argname="argument source_id", value=source_id, expected_type=type_hints["source_id"])
            check_type(argname="argument source_type", value=source_type, expected_type=type_hints["source_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "experiment_id": experiment_id,
        }
        if run_name is not None:
            self._values["run_name"] = run_name
        if source_id is not None:
            self._values["source_id"] = source_id
        if source_type is not None:
            self._values["source_type"] = source_type

    @builtins.property
    def experiment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: experimentId: Resource attribute field of the experiment ID to which Run belongs.
        '''
        result = self._values.get("experiment_id")
        assert result is not None, "Required property 'experiment_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def run_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: runName: The name of the Run.
        '''
        result = self._values.get("run_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sourceId: Attribute Resource field representing the source task ID.
        '''
        result = self._values.get("source_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sourceType: Resource attribute fields representing the source type.
        '''
        result = self._values.get("source_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRunProps(%s)" % ", ".join(
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


class RosUserConfig(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.RosUserConfig",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::PAI::UserConfig``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``UserConfig`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-userconfig
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosUserConfigProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eb6936e63abb0f9eabfb9fc4476c5151bf39b0b390ada332dd2abcf669371918)
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
            type_hints = typing.get_type_hints(_typecheckingstub__120a0d1c23ada40c28548ff142f63655c04183b61e3722cd792c4c01207f9ddb)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCategoryName")
    def attr_category_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CategoryName: Represents a resource attribute for a configuration category.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCategoryName"))

    @builtins.property
    @jsii.member(jsii_name="attrConfigKey")
    def attr_config_key(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ConfigKey: Represents the resource attribute of the configuration Key.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConfigKey"))

    @builtins.property
    @jsii.member(jsii_name="attrConfigs")
    def attr_configs(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Configs: Represents a resource property for the configuration list.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConfigs"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="categoryName")
    def category_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: categoryName: Represents a resource attribute for a configuration category.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "categoryName"))

    @category_name.setter
    def category_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__622605864afe56959f71dfbd989a16fe74b7d6c189e7458388b9f9f70291f8a8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "categoryName", value)

    @builtins.property
    @jsii.member(jsii_name="configKey")
    def config_key(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: configKey: Represents the resource attribute of the configuration Key.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "configKey"))

    @config_key.setter
    def config_key(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__39eb821a1c5be757a77ce0fc4121ffc1173d6ae5d519d263fca818659a166703)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "configKey", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e22d967cec92037a40808965ad79cdeff10b2b4247b3fb1027af2e3b95655fb9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="configs")
    def configs(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosUserConfig.ConfigsProperty"]]]]:
        '''
        :Property: configs: Represents a resource property for the configuration list.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosUserConfig.ConfigsProperty"]]]], jsii.get(self, "configs"))

    @configs.setter
    def configs(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosUserConfig.ConfigsProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4bf709eb2653c576defe5eb0826907a4b97394ce20ba642fbf6cbfd0eaae43fc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "configs", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-pai.RosUserConfig.ConfigsProperty",
        jsii_struct_bases=[],
        name_mapping={"config_value": "configValue"},
    )
    class ConfigsProperty:
        def __init__(
            self,
            *,
            config_value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param config_value:
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__91eadb0aaf181478f29d3e4b92da511835afa63134d88a21460f41bcf338a7c8)
                check_type(argname="argument config_value", value=config_value, expected_type=type_hints["config_value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if config_value is not None:
                self._values["config_value"] = config_value

        @builtins.property
        def config_value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: configValue: Resource attributes that represent configuration values.
            '''
            result = self._values.get("config_value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ConfigsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.RosUserConfigProps",
    jsii_struct_bases=[],
    name_mapping={
        "category_name": "categoryName",
        "config_key": "configKey",
        "configs": "configs",
    },
)
class RosUserConfigProps:
    def __init__(
        self,
        *,
        category_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        config_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        configs: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosUserConfig.ConfigsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosUserConfig``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-userconfig

        :param category_name:
        :param config_key:
        :param configs:
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ceb9bfb962625231bee06de20d6a7460a62d53fa7a0cc48861ac01fb75672594)
            check_type(argname="argument category_name", value=category_name, expected_type=type_hints["category_name"])
            check_type(argname="argument config_key", value=config_key, expected_type=type_hints["config_key"])
            check_type(argname="argument configs", value=configs, expected_type=type_hints["configs"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "category_name": category_name,
            "config_key": config_key,
        }
        if configs is not None:
            self._values["configs"] = configs

    @builtins.property
    def category_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: categoryName: Represents a resource attribute for a configuration category.
        '''
        result = self._values.get("category_name")
        assert result is not None, "Required property 'category_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def config_key(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: configKey: Represents the resource attribute of the configuration Key.
        '''
        result = self._values.get("config_key")
        assert result is not None, "Required property 'config_key' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def configs(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosUserConfig.ConfigsProperty]]]]:
        '''
        :Property: configs: Represents a resource property for the configuration list.
        '''
        result = self._values.get("configs")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosUserConfig.ConfigsProperty]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosUserConfigProps(%s)" % ", ".join(
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


class RosWorkspaceResource(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.RosWorkspaceResource",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::PAI::WorkspaceResource``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``WorkspaceResource`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspaceresource
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosWorkspaceResourceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5ab16d597b09b7d4586ef5710c0ce5773c8d570e76b5cd963c166e1d4150c033)
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
            type_hints = typing.get_type_hints(_typecheckingstub__5f9c6987eb370f2848d43a772ae41733d03d9324e6da422fcb37bf9eb97d7462)
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
        :Attribute: CreateTime: Create UTC time in ISO8601 format.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvType")
    def attr_env_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EnvType: Environment type, possible values:.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnvType"))

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
        :Attribute: IsDefault: Whether it is the default resource, each resource type has a default resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIsDefault"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceId")
    def attr_resource_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceId: The resource ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceId"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceType")
    def attr_resource_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceType: Resource type, possible values:.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceType"))

    @builtins.property
    @jsii.member(jsii_name="attrSpec")
    def attr_spec(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Spec: Resource configuration, required for public resource groups of DLC, enter the content.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSpec"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceId")
    def attr_workspace_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: WorkspaceId: The ID of the workspace to which the workspace belongs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrWorkspaceId"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceResourceName")
    def attr_workspace_resource_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: WorkspaceResourceName: The resource name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrWorkspaceResourceName"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__0d9a0844473174b8045f22815c3caff5be0f6871c5ee3bd33e2cbcbd815db4fa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="envType")
    def env_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        envType: Environment type, possible values:

        - dev: Development environment.
        - prod: Production environment.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "envType"))

    @env_type.setter
    def env_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3cee1125e1e25eec0429d15cdc3930dd76406865648993af9b8a397300ebf577)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "envType", value)

    @builtins.property
    @jsii.member(jsii_name="resourceType")
    def resource_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        resourceType: The resource types. Valid values:
        MaxCompute
        ECS
        Lingjun
        ACS
        FLINK
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "resourceType"))

    @resource_type.setter
    def resource_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e9227af71b99f4ac5dbd8f5b3b54c800a1d2e2cb566bde31c41ea454fb0287e7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceType", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__5a1fef2f49db05ba53c8b2e4f7350552dd1d78381ec383290654f6ea6999d618)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workspaceId", value)

    @builtins.property
    @jsii.member(jsii_name="workspaceResourceName")
    def workspace_resource_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: workspaceResourceName: The resource name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "workspaceResourceName"))

    @workspace_resource_name.setter
    def workspace_resource_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4dd4c1fcb295803af4d83ce9e8bdb50e8a10e8f8b398472504da68cd52655e72)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workspaceResourceName", value)

    @builtins.property
    @jsii.member(jsii_name="groupName")
    def group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groupName: Resource group name. If you want to obtain a resource group name, see [ListResources](~~ 449143 ~~).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "groupName"))

    @group_name.setter
    def group_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ae0da871771dc5e3b03ff4b8ae083cb629de8715d3fc75628b544f39dcf36d15)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupName", value)

    @builtins.property
    @jsii.member(jsii_name="isDefault")
    def is_default(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        isDefault: Whether it is the default resource, each resource type has a default resource. Possible values:

        - true: is the default resource.
        - false: Not the default resource.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "isDefault"))

    @is_default.setter
    def is_default(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e594372ca2f3256a425e6b0747e7d9f68445fe85698255a3b4a281c4fd64f07b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "isDefault", value)

    @builtins.property
    @jsii.member(jsii_name="spec")
    def spec(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: spec: Resource configuration, required for public resource groups of DLC, enter the content: {"clusterType": "share"}.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "spec"))

    @spec.setter
    def spec(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aa8f1527d163a7f698355fd844761381ba048079f2aa5d75f462cba72e5c178a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "spec", value)


class RosWorkspaceResourceDlc(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.RosWorkspaceResourceDlc",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::PAI::WorkspaceResourceDlc``, which is used to associate Deep Learning Containers (DLC) resources with a workspace.

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
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::PAI::WorkspaceResourceFlink``, which is used to associate Realtime Compute for Apache Flink resources with a workspace.

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
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::PAI::WorkspaceResourceMaxCompute``, which is used to associate MaxCompute resources with a workspace.

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
        :Attribute: GroupName: Resource group name.
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


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.RosWorkspaceResourceProps",
    jsii_struct_bases=[],
    name_mapping={
        "env_type": "envType",
        "resource_type": "resourceType",
        "workspace_id": "workspaceId",
        "workspace_resource_name": "workspaceResourceName",
        "group_name": "groupName",
        "is_default": "isDefault",
        "spec": "spec",
    },
)
class RosWorkspaceResourceProps:
    def __init__(
        self,
        *,
        env_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        resource_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        workspace_resource_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        is_default: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        spec: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    ) -> None:
        '''Properties for defining a ``RosWorkspaceResource``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspaceresource

        :param env_type:
        :param resource_type:
        :param workspace_id:
        :param workspace_resource_name:
        :param group_name:
        :param is_default:
        :param spec:
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fe31769a070ebc84838752e4eb193b66eae28b1c6e2dbd1252f343b17cfa9c2d)
            check_type(argname="argument env_type", value=env_type, expected_type=type_hints["env_type"])
            check_type(argname="argument resource_type", value=resource_type, expected_type=type_hints["resource_type"])
            check_type(argname="argument workspace_id", value=workspace_id, expected_type=type_hints["workspace_id"])
            check_type(argname="argument workspace_resource_name", value=workspace_resource_name, expected_type=type_hints["workspace_resource_name"])
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument is_default", value=is_default, expected_type=type_hints["is_default"])
            check_type(argname="argument spec", value=spec, expected_type=type_hints["spec"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "env_type": env_type,
            "resource_type": resource_type,
            "workspace_id": workspace_id,
            "workspace_resource_name": workspace_resource_name,
        }
        if group_name is not None:
            self._values["group_name"] = group_name
        if is_default is not None:
            self._values["is_default"] = is_default
        if spec is not None:
            self._values["spec"] = spec

    @builtins.property
    def env_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        envType: Environment type, possible values:

        - dev: Development environment.
        - prod: Production environment.
        '''
        result = self._values.get("env_type")
        assert result is not None, "Required property 'env_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def resource_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        resourceType: The resource types. Valid values:
        MaxCompute
        ECS
        Lingjun
        ACS
        FLINK
        '''
        result = self._values.get("resource_type")
        assert result is not None, "Required property 'resource_type' is missing"
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
    def workspace_resource_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: workspaceResourceName: The resource name.
        '''
        result = self._values.get("workspace_resource_name")
        assert result is not None, "Required property 'workspace_resource_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groupName: Resource group name. If you want to obtain a resource group name, see [ListResources](~~ 449143 ~~).
        '''
        result = self._values.get("group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def is_default(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        isDefault: Whether it is the default resource, each resource type has a default resource. Possible values:

        - true: is the default resource.
        - false: Not the default resource.
        '''
        result = self._values.get("is_default")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def spec(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: spec: Resource configuration, required for public resource groups of DLC, enter the content: {"clusterType": "share"}.
        '''
        result = self._values.get("spec")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosWorkspaceResourceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IRun)
class Run(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.Run",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::PAI::Run``, which is used to create a run.

    A run belongs to an experiment and can be associated with a workload. A run can also represent a single code execution.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosRun``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-run
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RunProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e96e87ae2d4a8f2478f2cd9d4c2368db38fed9df03a866bc31c16d517b6fd443)
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
        '''Attribute Accessibility: Resource attribute fields representing visibility.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAccessibility"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the Run.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrExperimentId")
    def attr_experiment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExperimentId: Resource attribute field of the experiment ID to which Run belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrExperimentId"))

    @builtins.property
    @jsii.member(jsii_name="attrGmtModifiedTime")
    def attr_gmt_modified_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GmtModifiedTime: Resource attribute fields representing edit time.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGmtModifiedTime"))

    @builtins.property
    @jsii.member(jsii_name="attrLabels")
    def attr_labels(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Labels: Run attribute field representing the run tag.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLabels"))

    @builtins.property
    @jsii.member(jsii_name="attrMetrics")
    def attr_metrics(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Metrics: Resource attribute field representing the run metric.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMetrics"))

    @builtins.property
    @jsii.member(jsii_name="attrOwnerId")
    def attr_owner_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OwnerId: Resource attribute field representing owner.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOwnerId"))

    @builtins.property
    @jsii.member(jsii_name="attrParams")
    def attr_params(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Params: Resource attribute field representing the run parameter.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrParams"))

    @builtins.property
    @jsii.member(jsii_name="attrRunId")
    def attr_run_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RunId: The ID of the Run.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRunId"))

    @builtins.property
    @jsii.member(jsii_name="attrRunName")
    def attr_run_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RunName: The name of the Run.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRunName"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceId")
    def attr_source_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceId: Attribute Resource field representing the source task ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSourceId"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceType")
    def attr_source_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceType: Run attribute fields representing the source type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSourceType"))

    @builtins.property
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UserId: Run attribute field representing creator ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUserId"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceId")
    def attr_workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkspaceId: Resource attribute field of the workspace ID to which Run belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWorkspaceId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "RunProps":
        return typing.cast("RunProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6c8450274152830d3fecf0fe44a7b3fdfee692eed2ad524f39770f6d45a837fd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b7e01b15ab093bfece536fd45d02fb87f682b1aacc920b58878096493add02c0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0e6cc4a211537643df74a2fed409bbc8e5dc9fbe23f89c3618092d3301b81235)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.RunProps",
    jsii_struct_bases=[],
    name_mapping={
        "experiment_id": "experimentId",
        "run_name": "runName",
        "source_id": "sourceId",
        "source_type": "sourceType",
    },
)
class RunProps:
    def __init__(
        self,
        *,
        experiment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        run_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Run``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-run

        :param experiment_id: Property experimentId: Resource attribute field of the experiment ID to which Run belongs.
        :param run_name: Property runName: The name of the Run.
        :param source_id: Property sourceId: Attribute Resource field representing the source task ID.
        :param source_type: Property sourceType: Resource attribute fields representing the source type.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f6b443131306b518c2b49cf0fd06b4dd33fb271606727a9e4da28dc45a2af0e1)
            check_type(argname="argument experiment_id", value=experiment_id, expected_type=type_hints["experiment_id"])
            check_type(argname="argument run_name", value=run_name, expected_type=type_hints["run_name"])
            check_type(argname="argument source_id", value=source_id, expected_type=type_hints["source_id"])
            check_type(argname="argument source_type", value=source_type, expected_type=type_hints["source_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "experiment_id": experiment_id,
        }
        if run_name is not None:
            self._values["run_name"] = run_name
        if source_id is not None:
            self._values["source_id"] = source_id
        if source_type is not None:
            self._values["source_type"] = source_type

    @builtins.property
    def experiment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property experimentId: Resource attribute field of the experiment ID to which Run belongs.'''
        result = self._values.get("experiment_id")
        assert result is not None, "Required property 'experiment_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def run_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property runName: The name of the Run.'''
        result = self._values.get("run_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sourceId: Attribute Resource field representing the source task ID.'''
        result = self._values.get("source_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sourceType: Resource attribute fields representing the source type.'''
        result = self._values.get("source_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RunProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IService)
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
    def attr_access_token(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AccessToken: Service Request authentication token.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAccessToken"))

    @builtins.property
    @jsii.member(jsii_name="attrCallerUid")
    def attr_caller_uid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CallerUid: The ID of the service creator, which can be the ID of the RAM account.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCallerUid"))

    @builtins.property
    @jsii.member(jsii_name="attrCpu")
    def attr_cpu(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Cpu: Number of service CPU cores.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCpu"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: Creation time of the service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrCurrentVersion")
    def attr_current_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CurrentVersion: Current running version of the service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCurrentVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrExtraData")
    def attr_extra_data(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExtraData: Service Extra Information.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrExtraData"))

    @builtins.property
    @jsii.member(jsii_name="attrGpu")
    def attr_gpu(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Gpu: Number of service GPU cards.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGpu"))

    @builtins.property
    @jsii.member(jsii_name="attrImage")
    def attr_image(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Image: Service Deployment Mirroring.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrImage"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetEndpoint")
    def attr_internet_endpoint(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InternetEndpoint: Public network Endpoint of the service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInternetEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrIntranetEndpoint")
    def attr_intranet_endpoint(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IntranetEndpoint: The intranet Endpoint of the service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIntranetEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrLabels")
    def attr_labels(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Labels: Service Tag.'''
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
        '''Attribute Memory: Memory of service (MB).'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMemory"))

    @builtins.property
    @jsii.member(jsii_name="attrMessage")
    def attr_message(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Message: Latest information on services.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMessage"))

    @builtins.property
    @jsii.member(jsii_name="attrNamespace")
    def attr_namespace(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Namespace: The namespace to which the service belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNamespace"))

    @builtins.property
    @jsii.member(jsii_name="attrParentUid")
    def attr_parent_uid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ParentUid: Primary account ID of the creator.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrParentUid"))

    @builtins.property
    @jsii.member(jsii_name="attrPendingInstance")
    def attr_pending_instance(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PendingInstance: Number of instances where the service is not currently ready.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPendingInstance"))

    @builtins.property
    @jsii.member(jsii_name="attrReason")
    def attr_reason(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Reason: Service deployment failure reason.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrReason"))

    @builtins.property
    @jsii.member(jsii_name="attrResource")
    def attr_resource(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Resource: The ID of the resource group to which the service belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResource"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceAlias")
    def attr_resource_alias(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceAlias: Name of the resource group where the service resides.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceAlias"))

    @builtins.property
    @jsii.member(jsii_name="attrRole")
    def attr_role(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Role: Grouping Service Role.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRole"))

    @builtins.property
    @jsii.member(jsii_name="attrRoleAttrs")
    def attr_role_attrs(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RoleAttrs: Grouping Service Role Properties.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRoleAttrs"))

    @builtins.property
    @jsii.member(jsii_name="attrRunningInstance")
    def attr_running_instance(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RunningInstance: Number of instances in service running.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRunningInstance"))

    @builtins.property
    @jsii.member(jsii_name="attrSafetyLock")
    def attr_safety_lock(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SafetyLock: Service Security Lock Status.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSafetyLock"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceConfig")
    def attr_service_config(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServiceConfig: Service configuration information.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrServiceConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceGroup")
    def attr_service_group(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServiceGroup: Group to which the service belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrServiceGroup"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServiceName: Service Name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrServiceName"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceUid")
    def attr_service_uid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServiceUid: Unique Service ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrServiceUid"))

    @builtins.property
    @jsii.member(jsii_name="attrTotalInstance")
    def attr_total_instance(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TotalInstance: Total number of instances required by the service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTotalInstance"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdateTime")
    def attr_update_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UpdateTime: Service Last Updated.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUpdateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrWeight")
    def attr_weight(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Weight: Packet Service Traffic Weight.'''
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


@jsii.implements(IUserConfig)
class UserConfig(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.UserConfig",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::PAI::UserConfig``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosUserConfig``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-userconfig
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["UserConfigProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b1fc0effc33f4bd778996795197f5dce43c9842a5826efbf7d54cec555644e17)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCategoryName")
    def attr_category_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CategoryName: Represents a resource attribute for a configuration category.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCategoryName"))

    @builtins.property
    @jsii.member(jsii_name="attrConfigKey")
    def attr_config_key(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConfigKey: Represents the resource attribute of the configuration Key.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConfigKey"))

    @builtins.property
    @jsii.member(jsii_name="attrConfigs")
    def attr_configs(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Configs: Represents a resource property for the configuration list.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConfigs"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "UserConfigProps":
        return typing.cast("UserConfigProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__42ae0e64a6388276a1e7dc2fadc4c671247d03de16b4fe9cd2b115b01a145e96)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d9d97ea5ff67ac3182da7d8ee33365b4414d97f689103d6d8f899b9f1585038c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0f31843fbac2bfb2c803cc6a85d1dc734d284669cd7ac5ba65340d140ee0c2cd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.UserConfigProps",
    jsii_struct_bases=[],
    name_mapping={
        "category_name": "categoryName",
        "config_key": "configKey",
        "configs": "configs",
    },
)
class UserConfigProps:
    def __init__(
        self,
        *,
        category_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        config_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        configs: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosUserConfig.ConfigsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    ) -> None:
        '''Properties for defining a ``UserConfig``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-userconfig

        :param category_name: Property categoryName: Represents a resource attribute for a configuration category.
        :param config_key: Property configKey: Represents the resource attribute of the configuration Key.
        :param configs: Property configs: Represents a resource property for the configuration list.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ccb0d2082c87aff7b579669c6b494c936e2e45b134d9bb544ac3d5d966ad2f60)
            check_type(argname="argument category_name", value=category_name, expected_type=type_hints["category_name"])
            check_type(argname="argument config_key", value=config_key, expected_type=type_hints["config_key"])
            check_type(argname="argument configs", value=configs, expected_type=type_hints["configs"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "category_name": category_name,
            "config_key": config_key,
        }
        if configs is not None:
            self._values["configs"] = configs

    @builtins.property
    def category_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property categoryName: Represents a resource attribute for a configuration category.'''
        result = self._values.get("category_name")
        assert result is not None, "Required property 'category_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def config_key(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property configKey: Represents the resource attribute of the configuration Key.'''
        result = self._values.get("config_key")
        assert result is not None, "Required property 'config_key' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def configs(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosUserConfig.ConfigsProperty]]]]:
        '''Property configs: Represents a resource property for the configuration list.'''
        result = self._values.get("configs")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosUserConfig.ConfigsProperty]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "UserConfigProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IWorkspace)
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
        '''Attribute Description: Workspace description, no more than 80 characters.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DisplayName: It is recommended that you name the workspace based on the business attribute to identify the purpose of the workspace.

        If not configured, the default value is the workspace name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDisplayName"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvTypes")
    def attr_env_types(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvTypes: Environments contained in the workspace:.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnvTypes"))

    @builtins.property
    @jsii.member(jsii_name="attrExtraInfos")
    def attr_extra_infos(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExtraInfos: Additional information, currently including TenantId (tenant ID).'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrExtraInfos"))

    @builtins.property
    @jsii.member(jsii_name="attrOwner")
    def attr_owner(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Owner: Workspace owner ID, displayed when Verbose is true.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOwner"))

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
        '''Attribute WorkspaceId: The ID of the workspace.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWorkspaceId"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceName")
    def attr_workspace_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkspaceName: The workspace name.'''
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


@jsii.implements(IWorkspaceResource)
class WorkspaceResource(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.WorkspaceResource",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::PAI::WorkspaceResource``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosWorkspaceResource``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspaceresource
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["WorkspaceResourceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4151f31a0ea089260b1a9ceab37315af604ad03ca3d087e5cb94cd46b45f3f4f)
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
        '''Attribute CreateTime: Create UTC time in ISO8601 format.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvType")
    def attr_env_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnvType: Environment type, possible values:.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnvType"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupName: Resource group name.

        If you want to obtain a resource group name, see [ListResources](~~ 449143 ~~).
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrIsDefault")
    def attr_is_default(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IsDefault: Whether it is the default resource, each resource type has a default resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIsDefault"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceId")
    def attr_resource_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceId: The resource ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceId"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceType")
    def attr_resource_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceType: Resource type, possible values:.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceType"))

    @builtins.property
    @jsii.member(jsii_name="attrSpec")
    def attr_spec(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Spec: Resource configuration, required for public resource groups of DLC, enter the content.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSpec"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceId")
    def attr_workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkspaceId: The ID of the workspace to which the workspace belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWorkspaceId"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceResourceName")
    def attr_workspace_resource_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkspaceResourceName: The resource name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWorkspaceResourceName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "WorkspaceResourceProps":
        return typing.cast("WorkspaceResourceProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ac730402f0c4423947c42ebcc4c57dbf29f476939f0c27b80735c0c7c0fca5d8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3af1f204c5c7e24cb18930174deba810b6869fb7489ed60770e6160fb5095eb1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__319855af1c046a82c657ea75c1633a782cba056e88cd8000af0645bfc74df27b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IWorkspaceResourceDlc)
class WorkspaceResourceDlc(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.WorkspaceResourceDlc",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::PAI::WorkspaceResourceDlc``, which is used to associate Deep Learning Containers (DLC) resources with a workspace.

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


@jsii.implements(IWorkspaceResourceFlink)
class WorkspaceResourceFlink(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.WorkspaceResourceFlink",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::PAI::WorkspaceResourceFlink``, which is used to associate Realtime Compute for Apache Flink resources with a workspace.

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
    def props(self) -> "WorkspaceResourceFlinkProps":
        return typing.cast("WorkspaceResourceFlinkProps", jsii.get(self, "props"))

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


@jsii.implements(IWorkspaceResourceMaxCompute)
class WorkspaceResourceMaxCompute(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.WorkspaceResourceMaxCompute",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::PAI::WorkspaceResourceMaxCompute``, which is used to associate MaxCompute resources with a workspace.

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
        '''Attribute GroupName: Resource group name.'''
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


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pai.WorkspaceResourceProps",
    jsii_struct_bases=[],
    name_mapping={
        "env_type": "envType",
        "resource_type": "resourceType",
        "workspace_id": "workspaceId",
        "workspace_resource_name": "workspaceResourceName",
        "group_name": "groupName",
        "is_default": "isDefault",
        "spec": "spec",
    },
)
class WorkspaceResourceProps:
    def __init__(
        self,
        *,
        env_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        resource_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        workspace_resource_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        is_default: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        spec: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    ) -> None:
        '''Properties for defining a ``WorkspaceResource``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspaceresource

        :param env_type: Property envType: Environment type, possible values: - dev: Development environment. - prod: Production environment.
        :param resource_type: Property resourceType: The resource types. Valid values: MaxCompute ECS Lingjun ACS FLINK
        :param workspace_id: Property workspaceId: The ID of the workspace to which the workspace belongs.
        :param workspace_resource_name: Property workspaceResourceName: The resource name.
        :param group_name: Property groupName: Resource group name. If you want to obtain a resource group name, see [ListResources](~~ 449143 ~~).
        :param is_default: Property isDefault: Whether it is the default resource, each resource type has a default resource. Possible values: - true: is the default resource. - false: Not the default resource.
        :param spec: Property spec: Resource configuration, required for public resource groups of DLC, enter the content: {"clusterType": "share"}.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__46229b7d675166144cdefd6522253907a7a75cc181b6f20af8b5847cf9b651dc)
            check_type(argname="argument env_type", value=env_type, expected_type=type_hints["env_type"])
            check_type(argname="argument resource_type", value=resource_type, expected_type=type_hints["resource_type"])
            check_type(argname="argument workspace_id", value=workspace_id, expected_type=type_hints["workspace_id"])
            check_type(argname="argument workspace_resource_name", value=workspace_resource_name, expected_type=type_hints["workspace_resource_name"])
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument is_default", value=is_default, expected_type=type_hints["is_default"])
            check_type(argname="argument spec", value=spec, expected_type=type_hints["spec"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "env_type": env_type,
            "resource_type": resource_type,
            "workspace_id": workspace_id,
            "workspace_resource_name": workspace_resource_name,
        }
        if group_name is not None:
            self._values["group_name"] = group_name
        if is_default is not None:
            self._values["is_default"] = is_default
        if spec is not None:
            self._values["spec"] = spec

    @builtins.property
    def env_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property envType: Environment type, possible values: - dev: Development environment.

        - prod: Production environment.
        '''
        result = self._values.get("env_type")
        assert result is not None, "Required property 'env_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def resource_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property resourceType: The resource types.

        Valid values:
        MaxCompute
        ECS
        Lingjun
        ACS
        FLINK
        '''
        result = self._values.get("resource_type")
        assert result is not None, "Required property 'resource_type' is missing"
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
    def workspace_resource_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property workspaceResourceName: The resource name.'''
        result = self._values.get("workspace_resource_name")
        assert result is not None, "Required property 'workspace_resource_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property groupName: Resource group name.

        If you want to obtain a resource group name, see [ListResources](~~ 449143 ~~).
        '''
        result = self._values.get("group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def is_default(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property isDefault: Whether it is the default resource, each resource type has a default resource.

        Possible values:

        - true: is the default resource.
        - false: Not the default resource.
        '''
        result = self._values.get("is_default")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def spec(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property spec: Resource configuration, required for public resource groups of DLC, enter the content: {"clusterType": "share"}.'''
        result = self._values.get("spec")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "WorkspaceResourceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(ICodeSource)
class CodeSource(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.CodeSource",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::PAI::CodeSource``, which is used to create a code build in Platform for AI (PAI).

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosCodeSource``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-codesource
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[CodeSourceProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__18f5061ab39c84f576e3fa0853b77c84d5e167577288fad5686608e5d6e96fa0)
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
        '''Attribute Accessibility: Visibility of the code configuration.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAccessibility"))

    @builtins.property
    @jsii.member(jsii_name="attrCodeBranch")
    def attr_code_branch(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CodeBranch: Code repository branch.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCodeBranch"))

    @builtins.property
    @jsii.member(jsii_name="attrCodeCommit")
    def attr_code_commit(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CodeCommit: The code CommitId.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCodeCommit"))

    @builtins.property
    @jsii.member(jsii_name="attrCodeRepo")
    def attr_code_repo(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CodeRepo: Code repository address.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCodeRepo"))

    @builtins.property
    @jsii.member(jsii_name="attrCodeRepoAccessToken")
    def attr_code_repo_access_token(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CodeRepoAccessToken: The Token used to access the code repository.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCodeRepoAccessToken"))

    @builtins.property
    @jsii.member(jsii_name="attrCodeRepoUserName")
    def attr_code_repo_user_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CodeRepoUserName: The user name of the code repository.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCodeRepoUserName"))

    @builtins.property
    @jsii.member(jsii_name="attrCodeSourcesId")
    def attr_code_sources_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CodeSourcesId: The ID of the created code configuration.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCodeSourcesId"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the code.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: A detailed description of the code configuration.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DisplayName: Code source configuration name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDisplayName"))

    @builtins.property
    @jsii.member(jsii_name="attrGmtModifyTime")
    def attr_gmt_modify_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GmtModifyTime: Code configuration modification time.

        The time format is iso8601.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGmtModifyTime"))

    @builtins.property
    @jsii.member(jsii_name="attrMountPath")
    def attr_mount_path(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MountPath: The local Mount Directory of the code.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMountPath"))

    @builtins.property
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UserId: The ID of the creator of the code configuration source.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUserId"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceId")
    def attr_workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkspaceId: The ID of the workspace.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWorkspaceId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> CodeSourceProps:
        return typing.cast(CodeSourceProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__25f151db4cdc262a2c06819b4421cf78ea566003a0d0f6108d552a3bb01b3562)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__62c3bad9f1f63fb49d0c3c71dcd94811f14d36f98eed47f2c4562cbed7fa2aed)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c1360f0e752b77f8e9c82c26f97dd2194dc49862d3f7cb76e4d545958846dc18)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IDataset)
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
            type_hints = typing.get_type_hints(_typecheckingstub__5ed416abd8bb45af1e474e9a831ab10167cf6f2c464bd0659b914b494ea8366d)
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
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6488206e08e582c61763185adb8755f8776bc7be164f699b0402291a9b855490)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IDatasetVersion)
class DatasetVersion(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.DatasetVersion",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::PAI::DatasetVersion``, which is used to create a dataset version.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDatasetVersion``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-datasetversion
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[DatasetVersionProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aee7b33f1518834ecdd08bb532657e34d4b62e05f0ea2c71da397ee3306663af)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrVersionName")
    def attr_version_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VersionName: Dataset version name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVersionName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DatasetVersionProps:
        return typing.cast(DatasetVersionProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a9f9126f211fb5a037076ae9c453c80779186efdfcbae572ea01df645c784deb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0b259be638bdb29b34b6d9bbe99354ce1f0dd39e00624877b1da3c9eca341a20)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1d234af0a8c4d9a65c07fda0c68ecb45447d473969bccfa0b520ae6c867ea179)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IExperiment)
class Experiment(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.Experiment",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::PAI::Experiment``, which is used to create an experiment.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosExperiment``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-experiment
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[ExperimentProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eee3cc3b0bcc320d1404f5b627173c7cd253afbd24ec6da7269891954e85ef88)
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
        '''Attribute Accessibility: Experimental Visibility.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAccessibility"))

    @builtins.property
    @jsii.member(jsii_name="attrArtifactUri")
    def attr_artifact_uri(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ArtifactUri: ArtifactUri is default OSS storage path of the output of trials in the experiment.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrArtifactUri"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: GmtCreateTime is time when this entity is created.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrExperimentId")
    def attr_experiment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExperimentId: ExperimentId is globally unique identifier of the experiment.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrExperimentId"))

    @builtins.property
    @jsii.member(jsii_name="attrExperimentName")
    def attr_experiment_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExperimentName: Name is the name of the experiment, unique in a namespace.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrExperimentName"))

    @builtins.property
    @jsii.member(jsii_name="attrGmtModifiedTime")
    def attr_gmt_modified_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GmtModifiedTime: GmtModifiedTime is time when this entity is modified.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGmtModifiedTime"))

    @builtins.property
    @jsii.member(jsii_name="attrLabels")
    def attr_labels(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Labels: Labels are tags of the experiment.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLabels"))

    @builtins.property
    @jsii.member(jsii_name="attrOwnerId")
    def attr_owner_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OwnerId: OwnerId is the user account id which this entity belongs to.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOwnerId"))

    @builtins.property
    @jsii.member(jsii_name="attrTensorboardLogUri")
    def attr_tensorboard_log_uri(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TensorboardLogUri: TensorboardLogUri is the default OSS storage path of tensorboard log of trials in the experiment.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTensorboardLogUri"))

    @builtins.property
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UserId: UserId is the user account id which created this entity.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUserId"))

    @builtins.property
    @jsii.member(jsii_name="attrWorkspaceId")
    def attr_workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute WorkspaceId: WorkspaceId is the workspace id which contains the experiment.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrWorkspaceId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ExperimentProps:
        return typing.cast(ExperimentProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__284fb3490b696bfb78fd2611dd39645f6a72754d3d2fdfa7cd03c34ebfd14cbf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__78d97b49b4565bf6e9a026e36e76c0952f818f1d9df1a84f3d50e3eaeb6f392f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__04164b98cfb7cf07fd35bae02344b4f4ae87c6649246494907de470b8838eda1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "CodeSource",
    "CodeSourceProps",
    "Dataset",
    "DatasetProps",
    "DatasetVersion",
    "DatasetVersionProps",
    "Experiment",
    "ExperimentProps",
    "ICodeSource",
    "IDataset",
    "IDatasetVersion",
    "IExperiment",
    "IImage",
    "IMember",
    "IModelVersion",
    "IRun",
    "IService",
    "IUserConfig",
    "IWorkspace",
    "IWorkspaceResource",
    "IWorkspaceResourceDlc",
    "IWorkspaceResourceFlink",
    "IWorkspaceResourceMaxCompute",
    "Image",
    "ImageProps",
    "Member",
    "MemberProps",
    "ModelVersion",
    "ModelVersionProps",
    "RosCodeSource",
    "RosCodeSourceProps",
    "RosDataset",
    "RosDatasetProps",
    "RosDatasetVersion",
    "RosDatasetVersionProps",
    "RosExperiment",
    "RosExperimentProps",
    "RosImage",
    "RosImageProps",
    "RosMember",
    "RosMemberProps",
    "RosModelVersion",
    "RosModelVersionProps",
    "RosRun",
    "RosRunProps",
    "RosService",
    "RosServiceProps",
    "RosUserConfig",
    "RosUserConfigProps",
    "RosWorkspace",
    "RosWorkspaceProps",
    "RosWorkspaceResource",
    "RosWorkspaceResourceDlc",
    "RosWorkspaceResourceDlcProps",
    "RosWorkspaceResourceFlink",
    "RosWorkspaceResourceFlinkProps",
    "RosWorkspaceResourceMaxCompute",
    "RosWorkspaceResourceMaxComputeProps",
    "RosWorkspaceResourceProps",
    "Run",
    "RunProps",
    "Service",
    "ServiceProps",
    "UserConfig",
    "UserConfigProps",
    "Workspace",
    "WorkspaceProps",
    "WorkspaceResource",
    "WorkspaceResourceDlc",
    "WorkspaceResourceDlcProps",
    "WorkspaceResourceFlink",
    "WorkspaceResourceFlinkProps",
    "WorkspaceResourceMaxCompute",
    "WorkspaceResourceMaxComputeProps",
    "WorkspaceResourceProps",
    "datasource",
]

publication.publish()

# Loading modules to ensure their types are registered with the jsii runtime library
from . import datasource

def _typecheckingstub__1837c2fae799b931c17344e8e81cb927e3a673a54c33d0c5a406334f6f8fa78a(
    *,
    accessibility: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    code_repo: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    display_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    mount_path: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    code_branch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    code_commit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    code_repo_access_token: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    code_repo_user_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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

def _typecheckingstub__3db36f15b6679f87a0ff6415ca8c36b232db23e3ad77dcb0bae358b4e35d10e7(
    *,
    dataset_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    data_source_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    property: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    uri: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    data_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    data_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    labels: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDatasetVersion.LabelsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1e2e6d6e556a22cf2a6cfdb1009582fe8dac11c069526f2b5d5d843cdfa98958(
    *,
    artifact_uri: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    experiment_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    accessibility: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__304fe3961cf5cbdb0c7d8a79d478d89a0cf41d860c52a8ab8fdb1924a6d0c5c3(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ImageProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__48b1ae53c985a21a59eb34bdb20656f4c14e6ccffbf28b153270021d11608451(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5a3ebecc9d36a0a6c2c7cb4c964a694184039e345b77032d3a76d14937015d36(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__13c9ad4f5a45a4dc201ee696e3853f76d5981924eb862410f190e3fd811522de(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fa23a847cd95ace8c4fcacacb086eb022c58c0a393e6215f19547e7afd5ebf43(
    *,
    image_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    image_uri: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    accessibility: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    labels: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosImage.LabelsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    workspace_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__874596546e19b03a8bda7590a0bbd0f0952908fba8cd6feff086dbed259f3559(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[MemberProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c560290285cad659f477c1ea455931c8366e9004f5a0176f39eed39047607f07(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3a5bce806f2e00f2a14c9d9c9827268ba430091c833596d36322d6698fcfcac4(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b9a58fee7f9c56a9449b6e94eab696a4abfe39cd625b49a523e119ca62b33b28(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4ca3ffe46c66e4b443f166e2e791f5e88d6a47be96d3be9f8f0d6ed5e80dbea3(
    *,
    roles: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    user_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a25268e94af4669d5c34ad1152ff4c716b9cdbc6deaa178877acd8bc7cd9b83a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ModelVersionProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__51dc33963eda8a499fcf2f80af41a4a8a191313e44a0ca57750bc926d029c9a3(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a9ca6953c88e0f7ffbae0d99b595897194a39273aeec340795b8b4ab9abfe375(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1734c26d9028d443d50dda56c411437289274249ebd38633a55ecf2c77b9b7cc(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__045dd900b35eff3eb58b9d65c1123a73d87c1f3ca1b3dc2cff0c592b214b8e6f(
    *,
    model_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    uri: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    approval_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    extra_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    format_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    framework_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    inference_spec: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    labels: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosModelVersion.LabelsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    metrics: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    training_spec: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    version_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    version_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e4ee53c3157f83268c1e2cc25ba229f5d27b1ee0a242464eb5fa2d037970f52c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosCodeSourceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9e7a80f82c6f5b8e148b9d645a36d3d3a9a3052a823585e9bec0e3a4c5424fbe(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__27a6191f9ef69cab0aaa4734b603d8c4f896efab5159c640b3713fb29042e78f(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ac657bcc363f75e48c4e116faaa7b4e94e72655d641ebcd13c127d907f6a9d3a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__41acd212326f91decaf9d16652ced925834ae86c58f20d0b14cbb83d1eb9fc42(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7214720d49ae8befa20e333e522d4ce884db03aa2340b0384806769ca61f63ca(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5ab8fb793e747b1069d206acb3f1581ac4e3ef0aa8b3d46228033c07f1c3b051(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__65b65ba9d216bd2670d4fbd2889e9c6d17b18371c00fd96ab19fc7ffe074819b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a4524604b27512cd3013b8a26192f29b62a3de3befce756cc079d2c1543450cb(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__673dfd63f5ce11221656c1777e498f0c4f5c5dde917f87101632d8633e7d8381(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__20e0cd2aef326cbeaf5feef27ec78f9c5a9ade1c84452a7643b28b7c0839bf14(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cd210d6852327016e3bf69fea5ce3a77180565168933d3a2108f79a5a4694af1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cbde073ef361f725cd0ed4cc02a47a8166363b1ed5a504ed4b00a27b9ddd8527(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3f0f59b53aa977cf83c047ae88363c5355326156f1cd88d115ff8377e463a13b(
    *,
    accessibility: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    code_repo: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    display_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    mount_path: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    code_branch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    code_commit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    code_repo_access_token: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    code_repo_user_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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

def _typecheckingstub__2d3b6b0f922efdaf2d6b9c7f2d5b926b4cd28db32e1aec6fd3a0dd67b3fc2f70(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDatasetVersionProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5200e465eaeeeb3ca7f564ff5e8008de456ca9466178033bd66249a4330b9333(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__851058e5ed165db60287a68832a7b1c5c1e7a3db90a56ed78fb613b88082e374(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7aec134d8845b0fbedd8180d9abd6efa02e40874293a073d04b7e98752b41193(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__03a8af798b4d5769383ef10202e3ade04fef3057a7b339ebf81d7fd026f87441(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3d6bb94ef23cbd912af42de80ece8c0f4c49751f0935857a21ab529d15d8bf71(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__855a4fa8412210cc3182bd807a59e704ef029951aaf744e24167b2a08520f1ca(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__18758702eb9770575391d2105d6d03b14bc36348ec9b6d5950f701f444f89cb6(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b2c3a292bb5d1fd5364367df0960407c95738ebbb072693b7b9b741b0b4f94ce(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6f31c48e1b533055e18b6a5f9b05393301305f656d2162db8bdfa2a181ffd7fc(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b14f62219d0124fef0a370b67e363b45c25368f78a07cd5d3c20615c5b08e57a(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDatasetVersion.LabelsProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5d09420904d72a1c95118bea1e634cf6856be902f88602005458ca39e9847f56(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b41fa19fb579edd77e623ecb029e48108aa6edac99c490b9cd5f265cb4f3ec99(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d6b87cb555035bd4714bfc714e038aca2df901759dffd0fa0ff8b4605259294b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6028368af8ae00c1f561c515b2c926b57b021b3b47badca088d27b570e8c1fd1(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__52d61e4be1962dd5557fbd3cf0931100e287801303c41cffc657687ed6cb5462(
    *,
    dataset_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    data_source_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    property: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    uri: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    data_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    data_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    labels: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDatasetVersion.LabelsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7eb7f71e156db171837258625b4db946fc84a6900fd6e2fd3a3d204b2a2cf839(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosExperimentProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7bc4406de3384b91d2a3b3e6e554be316e19dba056bab823846911a44a10cc5d(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__13b29c150d968bdcf09236b9307deb9d144ebfc829de37528158003647d2d218(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__969c906bd91711545abae2fc9bbfda49070343973c77696be6da47599b6a4c62(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fc4b3222d9fd344d860feaa051632659c81fedf9036e557b2d3c677f6a558dfb(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d78ad12ecfff510165d76cf1c1ede477062fa3ea5b579c413f0bc64f76fd9813(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__adbb50c40fb15d15e960c46fc90bc95064968537d5f8a67cc57fb065d89a882d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4a00e9e8d9dcc763f031d400b3189a79b10327fea87966d07e1a5b17269de00d(
    *,
    artifact_uri: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    experiment_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    accessibility: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2e224c735f5bf27bd8ca43cfb74cbfd4686e36de0c99d9158dcd9ced052aea11(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosImageProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0acdfd8ee1f04f35b80354d45c73c1466f736a4bafb23c3b2b5ed79c8c74498f(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__28577c7ae42cb845061640b6666705621777331a55fabf97124c17a81a4ed787(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dd666a18ccff59637e3dd047cf1afd6eadd953a4540fc137f7f3dfee667b492f(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b4fc2dec8e57dbb47e2c1e74dd891a68470e98808577cd3135aec546626bee10(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__621f682d684c34d491b652dbf1bb55e1e420bbd3ba093ad8d4d1ceeea8c43644(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b2279d0f9e93bcb29cbfae4acd1d7e0a9e12b098b22768b17e0c23dafe9c1456(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosImage.LabelsProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__622532c838b84f1ce3c939a502b85b53b1dbc74db62630e5623c2470cc48de1f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f626cdca5e98f28787d92ef4b5607dfc7161b5936270ce6c6874b36e677c5e9d(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__710e6323d6c5726a169098fa8ca56db1281d6d5ac80b549792098ea09a69e5d1(
    *,
    image_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    image_uri: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    accessibility: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    labels: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosImage.LabelsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    workspace_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c9d63c4638766b9bf3ea40916cbf2b4d5ab26a5a7de4fc617cd63eada2630624(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosMemberProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__92f69a6cee148001c5624beea6fd72d5f1a6d7dfefea6e9964a139077e081b33(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__626385773fa060f21eed4f5127ffea4afd605fac84edd811379796bc2731de3a(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c6140672c91590dc72c4c3905ddef0082c27c8e7879ff78df23babcdc2a12980(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dc7ee28553e51cca912ac2100289b71547a7ad811900321c0bf49c112d5635ab(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__65098c574cb7d6ce0570e7ad03a5a79a267f897db1ff3c1db64a76fec8357e7f(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e9d4097fd1c1a9100568251dbe2b50eab1f591ff26a12ea61dfba93240005e49(
    *,
    roles: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    user_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b13f8023083cbbd98d5a8bf9152dbeb7e8b979b52e8669885bdfbae9472b4a08(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosModelVersionProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9e5af160bd47b37b8b3f3bf1f4bd85ca987f94ebf851722305ae7fd49f8de71e(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2a0cfccb095db6fa0d7760abed649d7c2253d5763a7bbfaf680e6399095afc11(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__268ddc9ac63b63df458c2c265150c1da12c01d11cf85e82b64110b53b6cb125a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2f522db63af7b61498fd32be2edd3821d2ea3b964482fcf68b042f9e09a70131(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d5f70b32d4c9aeb31029f8057fa8044c3b08090c34f55ffeca1a3b32464e33c4(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e6271603b08a2f63ac58af41f232a2301ffec0a66dfb8a7980fc467d4cc59952(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9be74e4a8ee4eaa4184432437d2bdad8b6531da7d7f08c5083f7bc8cbee0614e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__29ac5abec4618380882a6b6c4639c997e4890ed647898d0c74fc9e45630a9256(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__da32a1a207f6baec3e8cad5ff9c8fc84517d91e3834a1e2f66e895cc201020fb(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__740c86b80e31038ccbf4138dbce053d6a1a44d6b3c3cbee2a330e1caaf5bf0d4(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosModelVersion.LabelsProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__546ccee42f388b6b6f71e7808e185557269f74d362320acef3aa6a623d923da9(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e17a7eca17bc43bfe9e1a4143ea7e5253441f3eb3ecd42f08f9597ffdbeedc23(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b02222e09615987b09c2b7e1306ffed152e88a0193ea2c74eb5d5c8b2d09170f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__70cecfe0f1f157a8f7c55f69ed1b959a1c92803649420b8e324b0ba4669b6d17(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__443e3bfbb8da09af5d0bbdff9f6278b0bf247dfa6f66a91e3502de8babaeb7a7(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a3f2dbfb40a9da0055b9d2de8d1e9d8999241a183effe836f71e9bdc39babdd5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__97b7801875eebc330a3b0c3e8edcb90d762abbda82ae90cfd4848c3e0a31c86c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2349f1a39b655f1aedae752cfa9e6bce2cb42877061eb7c5e473c7e07d777dc4(
    *,
    key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d06650c9233fb168bd7de6f8b5065764981a602d51ded96bf281f6484808ec6a(
    *,
    model_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    uri: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    approval_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    extra_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    format_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    framework_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    inference_spec: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    labels: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosModelVersion.LabelsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    metrics: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    training_spec: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    version_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    version_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__15454e9ea45e29d8afb20d5818669ab50d917313874cbc7b444a62aaa22f1a44(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosRunProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dff6b28daafe8f539ab6f677da6539c8b38d5edf468d633d3300c1042b9626b6(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__af756a83dcdd6e19d5d6438ff9660dac2899127be4c1ec2a6916cd4cd39c4727(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__02523e9b5d7ef54ac33fdf130a6e8cd93828eb5c205ba4a72c4c50ceb112e34c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e8ce4d9b7c6bcd231b6a3614069680a03c3145e417bc5d9b8e11cc1e4c8fee38(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ed36789a91140bac13ad6a96fed5930052eec3af0d936c16aa8d873c2bf8b28d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c5530a61b68dc484a349ebaf0e9f72c7c6bb659677fe5b1de789f43ec9065273(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f95a83e0380bec6290bb2fcd4bd51f640cbb4574d33db952725e075768c2f09c(
    *,
    experiment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    run_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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

def _typecheckingstub__eb6936e63abb0f9eabfb9fc4476c5151bf39b0b390ada332dd2abcf669371918(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosUserConfigProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__120a0d1c23ada40c28548ff142f63655c04183b61e3722cd792c4c01207f9ddb(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__622605864afe56959f71dfbd989a16fe74b7d6c189e7458388b9f9f70291f8a8(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__39eb821a1c5be757a77ce0fc4121ffc1173d6ae5d519d263fca818659a166703(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e22d967cec92037a40808965ad79cdeff10b2b4247b3fb1027af2e3b95655fb9(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4bf709eb2653c576defe5eb0826907a4b97394ce20ba642fbf6cbfd0eaae43fc(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosUserConfig.ConfigsProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__91eadb0aaf181478f29d3e4b92da511835afa63134d88a21460f41bcf338a7c8(
    *,
    config_value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ceb9bfb962625231bee06de20d6a7460a62d53fa7a0cc48861ac01fb75672594(
    *,
    category_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    config_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    configs: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosUserConfig.ConfigsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
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

def _typecheckingstub__5ab16d597b09b7d4586ef5710c0ce5773c8d570e76b5cd963c166e1d4150c033(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosWorkspaceResourceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5f9c6987eb370f2848d43a772ae41733d03d9324e6da422fcb37bf9eb97d7462(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0d9a0844473174b8045f22815c3caff5be0f6871c5ee3bd33e2cbcbd815db4fa(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3cee1125e1e25eec0429d15cdc3930dd76406865648993af9b8a397300ebf577(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e9227af71b99f4ac5dbd8f5b3b54c800a1d2e2cb566bde31c41ea454fb0287e7(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5a1fef2f49db05ba53c8b2e4f7350552dd1d78381ec383290654f6ea6999d618(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4dd4c1fcb295803af4d83ce9e8bdb50e8a10e8f8b398472504da68cd52655e72(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ae0da871771dc5e3b03ff4b8ae083cb629de8715d3fc75628b544f39dcf36d15(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e594372ca2f3256a425e6b0747e7d9f68445fe85698255a3b4a281c4fd64f07b(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aa8f1527d163a7f698355fd844761381ba048079f2aa5d75f462cba72e5c178a(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
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

def _typecheckingstub__fe31769a070ebc84838752e4eb193b66eae28b1c6e2dbd1252f343b17cfa9c2d(
    *,
    env_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    resource_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    workspace_resource_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    is_default: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    spec: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e96e87ae2d4a8f2478f2cd9d4c2368db38fed9df03a866bc31c16d517b6fd443(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RunProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6c8450274152830d3fecf0fe44a7b3fdfee692eed2ad524f39770f6d45a837fd(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b7e01b15ab093bfece536fd45d02fb87f682b1aacc920b58878096493add02c0(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0e6cc4a211537643df74a2fed409bbc8e5dc9fbe23f89c3618092d3301b81235(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f6b443131306b518c2b49cf0fd06b4dd33fb271606727a9e4da28dc45a2af0e1(
    *,
    experiment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    run_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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

def _typecheckingstub__b1fc0effc33f4bd778996795197f5dce43c9842a5826efbf7d54cec555644e17(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[UserConfigProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__42ae0e64a6388276a1e7dc2fadc4c671247d03de16b4fe9cd2b115b01a145e96(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d9d97ea5ff67ac3182da7d8ee33365b4414d97f689103d6d8f899b9f1585038c(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0f31843fbac2bfb2c803cc6a85d1dc734d284669cd7ac5ba65340d140ee0c2cd(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ccb0d2082c87aff7b579669c6b494c936e2e45b134d9bb544ac3d5d966ad2f60(
    *,
    category_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    config_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    configs: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosUserConfig.ConfigsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
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

def _typecheckingstub__4151f31a0ea089260b1a9ceab37315af604ad03ca3d087e5cb94cd46b45f3f4f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[WorkspaceResourceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ac730402f0c4423947c42ebcc4c57dbf29f476939f0c27b80735c0c7c0fca5d8(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3af1f204c5c7e24cb18930174deba810b6869fb7489ed60770e6160fb5095eb1(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__319855af1c046a82c657ea75c1633a782cba056e88cd8000af0645bfc74df27b(
    value: _ros_cdk_core_7adfd82f.Construct,
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

def _typecheckingstub__46229b7d675166144cdefd6522253907a7a75cc181b6f20af8b5847cf9b651dc(
    *,
    env_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    resource_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    workspace_resource_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    is_default: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    spec: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__18f5061ab39c84f576e3fa0853b77c84d5e167577288fad5686608e5d6e96fa0(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[CodeSourceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__25f151db4cdc262a2c06819b4421cf78ea566003a0d0f6108d552a3bb01b3562(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__62c3bad9f1f63fb49d0c3c71dcd94811f14d36f98eed47f2c4562cbed7fa2aed(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c1360f0e752b77f8e9c82c26f97dd2194dc49862d3f7cb76e4d545958846dc18(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

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

def _typecheckingstub__6488206e08e582c61763185adb8755f8776bc7be164f699b0402291a9b855490(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aee7b33f1518834ecdd08bb532657e34d4b62e05f0ea2c71da397ee3306663af(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DatasetVersionProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a9f9126f211fb5a037076ae9c453c80779186efdfcbae572ea01df645c784deb(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0b259be638bdb29b34b6d9bbe99354ce1f0dd39e00624877b1da3c9eca341a20(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1d234af0a8c4d9a65c07fda0c68ecb45447d473969bccfa0b520ae6c867ea179(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eee3cc3b0bcc320d1404f5b627173c7cd253afbd24ec6da7269891954e85ef88(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ExperimentProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__284fb3490b696bfb78fd2611dd39645f6a72754d3d2fdfa7cd03c34ebfd14cbf(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__78d97b49b4565bf6e9a026e36e76c0952f818f1d9df1a84f3d50e3eaeb6f392f(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__04164b98cfb7cf07fd35bae02344b4f4ae87c6649246494907de470b8838eda1(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
