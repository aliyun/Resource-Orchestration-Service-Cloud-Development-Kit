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


class RosCodeSource(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.RosCodeSource",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::PAI::CodeSource``.

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
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::PAI::DatasetVersion``.

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
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::PAI::Experiment``.

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


class RosRun(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.RosRun",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::PAI::Run``.

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


class RosWorkspace(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.RosWorkspace",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::PAI::Workspace``.

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


@jsii.implements(IRun)
class Run(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.Run",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::PAI::Run``.

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


@jsii.implements(IWorkspace)
class Workspace(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.Workspace",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::PAI::Workspace``.

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


@jsii.implements(IWorkspaceResourceDlc)
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


@jsii.implements(ICodeSource)
class CodeSource(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pai.CodeSource",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::PAI::CodeSource``.

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
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::PAI::DatasetVersion``.

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
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::PAI::Experiment``.

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
    "IRun",
    "IService",
    "IWorkspace",
    "IWorkspaceResourceDlc",
    "IWorkspaceResourceFlink",
    "IWorkspaceResourceMaxCompute",
    "RosCodeSource",
    "RosCodeSourceProps",
    "RosDataset",
    "RosDatasetProps",
    "RosDatasetVersion",
    "RosDatasetVersionProps",
    "RosExperiment",
    "RosExperimentProps",
    "RosRun",
    "RosRunProps",
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
    "Run",
    "RunProps",
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
