'''
## Aliyun ROS OSS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as OSS from '@alicloud/ros-cdk-oss';
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
    jsii_type="@alicloud/ros-cdk-oss.BucketAttributes",
    jsii_struct_bases=[],
    name_mapping={
        "bucket_domain_name": "bucketDomainName",
        "bucket_endpoint": "bucketEndpoint",
        "bucket_name": "bucketName",
        "bucket_website_url": "bucketWebsiteUrl",
        "is_website": "isWebsite",
        "region": "region",
    },
)
class BucketAttributes:
    def __init__(
        self,
        *,
        bucket_domain_name: typing.Optional[builtins.str] = None,
        bucket_endpoint: typing.Optional[builtins.str] = None,
        bucket_name: typing.Optional[builtins.str] = None,
        bucket_website_url: typing.Optional[builtins.str] = None,
        is_website: typing.Optional[builtins.bool] = None,
        region: typing.Optional[builtins.str] = None,
    ) -> None:
        '''A reference to a bucket outside this stack.

        :param bucket_domain_name: The domain name of the bucket. Default: - Inferred from bucket name and region
        :param bucket_endpoint: The endpoint of the bucket. Default: - Inferred from region
        :param bucket_name: The name of the bucket.
        :param bucket_website_url: The website URL of the bucket (if static web hosting is enabled). Default: - Inferred from bucket name and region
        :param is_website: If this bucket has been configured for static website hosting. Default: false
        :param region: The region this existing bucket is in. Features that require the region (e.g. ``bucketWebsiteUrl``) won't fully work if the region cannot be correctly inferred. Default: - it's assumed the bucket is in the same region as the scope it's being imported into
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9184223f55b99e95b82356408cffdebead93fea499d19cb4becb1c40e1520f16)
            check_type(argname="argument bucket_domain_name", value=bucket_domain_name, expected_type=type_hints["bucket_domain_name"])
            check_type(argname="argument bucket_endpoint", value=bucket_endpoint, expected_type=type_hints["bucket_endpoint"])
            check_type(argname="argument bucket_name", value=bucket_name, expected_type=type_hints["bucket_name"])
            check_type(argname="argument bucket_website_url", value=bucket_website_url, expected_type=type_hints["bucket_website_url"])
            check_type(argname="argument is_website", value=is_website, expected_type=type_hints["is_website"])
            check_type(argname="argument region", value=region, expected_type=type_hints["region"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if bucket_domain_name is not None:
            self._values["bucket_domain_name"] = bucket_domain_name
        if bucket_endpoint is not None:
            self._values["bucket_endpoint"] = bucket_endpoint
        if bucket_name is not None:
            self._values["bucket_name"] = bucket_name
        if bucket_website_url is not None:
            self._values["bucket_website_url"] = bucket_website_url
        if is_website is not None:
            self._values["is_website"] = is_website
        if region is not None:
            self._values["region"] = region

    @builtins.property
    def bucket_domain_name(self) -> typing.Optional[builtins.str]:
        '''The domain name of the bucket.

        :default: - Inferred from bucket name and region
        '''
        result = self._values.get("bucket_domain_name")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def bucket_endpoint(self) -> typing.Optional[builtins.str]:
        '''The endpoint of the bucket.

        :default: - Inferred from region
        '''
        result = self._values.get("bucket_endpoint")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def bucket_name(self) -> typing.Optional[builtins.str]:
        '''The name of the bucket.'''
        result = self._values.get("bucket_name")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def bucket_website_url(self) -> typing.Optional[builtins.str]:
        '''The website URL of the bucket (if static web hosting is enabled).

        :default: - Inferred from bucket name and region
        '''
        result = self._values.get("bucket_website_url")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def is_website(self) -> typing.Optional[builtins.bool]:
        '''If this bucket has been configured for static website hosting.

        :default: false
        '''
        result = self._values.get("is_website")
        return typing.cast(typing.Optional[builtins.bool], result)

    @builtins.property
    def region(self) -> typing.Optional[builtins.str]:
        '''The region this existing bucket is in.

        Features that require the region (e.g. ``bucketWebsiteUrl``) won't fully work
        if the region cannot be correctly inferred.

        :default: - it's assumed the bucket is in the same region as the scope it's being imported into
        '''
        result = self._values.get("region")
        return typing.cast(typing.Optional[builtins.str], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "BucketAttributes(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oss.BucketProps",
    jsii_struct_bases=[],
    name_mapping={
        "bucket_name": "bucketName",
        "access_control": "accessControl",
        "cors_configuration": "corsConfiguration",
        "deletion_force": "deletionForce",
        "enable_oss_hdfs_service": "enableOssHdfsService",
        "lifecycle_configuration": "lifecycleConfiguration",
        "logging_configuration": "loggingConfiguration",
        "policy": "policy",
        "redundancy_type": "redundancyType",
        "referer_configuration": "refererConfiguration",
        "resource_group_id": "resourceGroupId",
        "server_side_encryption_configuration": "serverSideEncryptionConfiguration",
        "storage_class": "storageClass",
        "tags": "tags",
        "versioning_configuration": "versioningConfiguration",
        "website_configuration_v2": "websiteConfigurationV2",
    },
)
class BucketProps:
    def __init__(
        self,
        *,
        bucket_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        access_control: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cors_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosBucket.CORSConfigurationProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_oss_hdfs_service: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        lifecycle_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosBucket.LifecycleConfigurationProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        logging_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosBucket.LoggingConfigurationProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        policy: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        redundancy_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        referer_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosBucket.RefererConfigurationProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        server_side_encryption_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosBucket.ServerSideEncryptionConfigurationProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        storage_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
        versioning_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosBucket.VersioningConfigurationProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        website_configuration_v2: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosBucket.WebsiteConfigurationV2Property", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``Bucket``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucket

        :param bucket_name: Property bucketName: bucket name.
        :param access_control: Property accessControl: The access control list.
        :param cors_configuration: Property corsConfiguration: Rules that define cross-origin resource sharing of objects in this bucket.
        :param deletion_force: Property deletionForce: Whether force delete the relative objects in the bucket. Default value is false.
        :param enable_oss_hdfs_service: Property enableOssHdfsService: Whether enable OSS-HDFS service. **Note**: Once it's enabled, it can't be disabled again.
        :param lifecycle_configuration: Property lifecycleConfiguration: Rules that define how oss bucket manages objects during their lifetime.
        :param logging_configuration: Property loggingConfiguration: Settings that defines where logs are stored.
        :param policy: Property policy: Bucket policy.
        :param redundancy_type: Property redundancyType: Specifies the data disaster recovery type of the storage space. The value range is as follows: LRS (default): Local redundant LRS stores your data redundantly on different storage devices in the same availability zone, and can support data loss and normal access even when two storage devices are damaged concurrently. ZRS: Intra-city redundant ZRS adopts a data redundancy storage mechanism in multiple availability zones (AZ), and stores user data redundantly in multiple availability zones in the same region. When an availability zone is unavailable, normal access to data can still be guaranteed.
        :param referer_configuration: Property refererConfiguration: undefined.
        :param resource_group_id: Property resourceGroupId: The resource group id.
        :param server_side_encryption_configuration: Property serverSideEncryptionConfiguration: Specifies the bucket used to store the server-side encryption rule.
        :param storage_class: Property storageClass: Specifies the storage class of the bucket. Default is "Standard".
        :param tags: Property tags: Bucket tags in k-v pairs format.
        :param versioning_configuration: Property versioningConfiguration: A state of versioning.
        :param website_configuration_v2: Property websiteConfigurationV2: Website configuration.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2374e407bda9e563bb7cc76f82731ee58531a6858dce69684dd641441bce9b00)
            check_type(argname="argument bucket_name", value=bucket_name, expected_type=type_hints["bucket_name"])
            check_type(argname="argument access_control", value=access_control, expected_type=type_hints["access_control"])
            check_type(argname="argument cors_configuration", value=cors_configuration, expected_type=type_hints["cors_configuration"])
            check_type(argname="argument deletion_force", value=deletion_force, expected_type=type_hints["deletion_force"])
            check_type(argname="argument enable_oss_hdfs_service", value=enable_oss_hdfs_service, expected_type=type_hints["enable_oss_hdfs_service"])
            check_type(argname="argument lifecycle_configuration", value=lifecycle_configuration, expected_type=type_hints["lifecycle_configuration"])
            check_type(argname="argument logging_configuration", value=logging_configuration, expected_type=type_hints["logging_configuration"])
            check_type(argname="argument policy", value=policy, expected_type=type_hints["policy"])
            check_type(argname="argument redundancy_type", value=redundancy_type, expected_type=type_hints["redundancy_type"])
            check_type(argname="argument referer_configuration", value=referer_configuration, expected_type=type_hints["referer_configuration"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument server_side_encryption_configuration", value=server_side_encryption_configuration, expected_type=type_hints["server_side_encryption_configuration"])
            check_type(argname="argument storage_class", value=storage_class, expected_type=type_hints["storage_class"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument versioning_configuration", value=versioning_configuration, expected_type=type_hints["versioning_configuration"])
            check_type(argname="argument website_configuration_v2", value=website_configuration_v2, expected_type=type_hints["website_configuration_v2"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "bucket_name": bucket_name,
        }
        if access_control is not None:
            self._values["access_control"] = access_control
        if cors_configuration is not None:
            self._values["cors_configuration"] = cors_configuration
        if deletion_force is not None:
            self._values["deletion_force"] = deletion_force
        if enable_oss_hdfs_service is not None:
            self._values["enable_oss_hdfs_service"] = enable_oss_hdfs_service
        if lifecycle_configuration is not None:
            self._values["lifecycle_configuration"] = lifecycle_configuration
        if logging_configuration is not None:
            self._values["logging_configuration"] = logging_configuration
        if policy is not None:
            self._values["policy"] = policy
        if redundancy_type is not None:
            self._values["redundancy_type"] = redundancy_type
        if referer_configuration is not None:
            self._values["referer_configuration"] = referer_configuration
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if server_side_encryption_configuration is not None:
            self._values["server_side_encryption_configuration"] = server_side_encryption_configuration
        if storage_class is not None:
            self._values["storage_class"] = storage_class
        if tags is not None:
            self._values["tags"] = tags
        if versioning_configuration is not None:
            self._values["versioning_configuration"] = versioning_configuration
        if website_configuration_v2 is not None:
            self._values["website_configuration_v2"] = website_configuration_v2

    @builtins.property
    def bucket_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property bucketName: bucket name.'''
        result = self._values.get("bucket_name")
        assert result is not None, "Required property 'bucket_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def access_control(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property accessControl: The access control list.'''
        result = self._values.get("access_control")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cors_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.CORSConfigurationProperty"]]:
        '''Property corsConfiguration: Rules that define cross-origin resource sharing of objects in this bucket.'''
        result = self._values.get("cors_configuration")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.CORSConfigurationProperty"]], result)

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property deletionForce: Whether force delete the relative objects in the bucket.

        Default value is false.
        '''
        result = self._values.get("deletion_force")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_oss_hdfs_service(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enableOssHdfsService: Whether enable OSS-HDFS service.

        **Note**: Once it's enabled, it can't be disabled again.
        '''
        result = self._values.get("enable_oss_hdfs_service")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def lifecycle_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.LifecycleConfigurationProperty"]]:
        '''Property lifecycleConfiguration: Rules that define how oss bucket manages objects during their lifetime.'''
        result = self._values.get("lifecycle_configuration")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.LifecycleConfigurationProperty"]], result)

    @builtins.property
    def logging_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.LoggingConfigurationProperty"]]:
        '''Property loggingConfiguration: Settings that defines where logs are stored.'''
        result = self._values.get("logging_configuration")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.LoggingConfigurationProperty"]], result)

    @builtins.property
    def policy(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property policy: Bucket policy.'''
        result = self._values.get("policy")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def redundancy_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property redundancyType: Specifies the data disaster recovery type of the storage space.

        The value range is as follows:
        LRS (default): Local redundant LRS stores your data redundantly on different storage devices in the same availability zone, and can support data loss and normal access even when two storage devices are damaged concurrently.
        ZRS: Intra-city redundant ZRS adopts a data redundancy storage mechanism in multiple availability zones (AZ), and stores user data redundantly in multiple availability zones in the same region. When an availability zone is unavailable, normal access to data can still be guaranteed.
        '''
        result = self._values.get("redundancy_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def referer_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.RefererConfigurationProperty"]]:
        '''Property refererConfiguration: undefined.'''
        result = self._values.get("referer_configuration")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.RefererConfigurationProperty"]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The resource group id.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def server_side_encryption_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.ServerSideEncryptionConfigurationProperty"]]:
        '''Property serverSideEncryptionConfiguration: Specifies the bucket used to store the server-side encryption rule.'''
        result = self._values.get("server_side_encryption_configuration")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.ServerSideEncryptionConfigurationProperty"]], result)

    @builtins.property
    def storage_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property storageClass: Specifies the storage class of the bucket.

        Default is "Standard".
        '''
        result = self._values.get("storage_class")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        '''Property tags: Bucket tags in k-v pairs format.'''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def versioning_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.VersioningConfigurationProperty"]]:
        '''Property versioningConfiguration: A state of versioning.'''
        result = self._values.get("versioning_configuration")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.VersioningConfigurationProperty"]], result)

    @builtins.property
    def website_configuration_v2(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.WebsiteConfigurationV2Property"]]:
        '''Property websiteConfigurationV2: Website configuration.'''
        result = self._values.get("website_configuration_v2")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.WebsiteConfigurationV2Property"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "BucketProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oss.DirectoryProps",
    jsii_struct_bases=[],
    name_mapping={
        "bucket_name": "bucketName",
        "directory_name": "directoryName",
        "deletion_force": "deletionForce",
    },
)
class DirectoryProps:
    def __init__(
        self,
        *,
        bucket_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        directory_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Directory``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-directory

        :param bucket_name: Property bucketName: bucket name.
        :param directory_name: Property directoryName: Directory name.
        :param deletion_force: Property deletionForce: Whether force delete the relative objects in the directory. Default value is false.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__df2cb970d623e337f370e0d103d5f60438c56810a3ec723aeafef623f143ae32)
            check_type(argname="argument bucket_name", value=bucket_name, expected_type=type_hints["bucket_name"])
            check_type(argname="argument directory_name", value=directory_name, expected_type=type_hints["directory_name"])
            check_type(argname="argument deletion_force", value=deletion_force, expected_type=type_hints["deletion_force"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "bucket_name": bucket_name,
            "directory_name": directory_name,
        }
        if deletion_force is not None:
            self._values["deletion_force"] = deletion_force

    @builtins.property
    def bucket_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property bucketName: bucket name.'''
        result = self._values.get("bucket_name")
        assert result is not None, "Required property 'bucket_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def directory_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property directoryName: Directory name.'''
        result = self._values.get("directory_name")
        assert result is not None, "Required property 'directory_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property deletionForce: Whether force delete the relative objects in the directory.

        Default value is false.
        '''
        result = self._values.get("deletion_force")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DirectoryProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oss.DomainProps",
    jsii_struct_bases=[],
    name_mapping={"bucket_name": "bucketName", "domain_name": "domainName"},
)
class DomainProps:
    def __init__(
        self,
        *,
        bucket_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``Domain``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-domain

        :param bucket_name: Property bucketName: bucket name.
        :param domain_name: Property domainName: Domain name.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6159db363f2f92413d166bdeb6f6f022d6d008f9ddfaaba90df63ddf6367c29a)
            check_type(argname="argument bucket_name", value=bucket_name, expected_type=type_hints["bucket_name"])
            check_type(argname="argument domain_name", value=domain_name, expected_type=type_hints["domain_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "bucket_name": bucket_name,
            "domain_name": domain_name,
        }

    @builtins.property
    def bucket_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property bucketName: bucket name.'''
        result = self._values.get("bucket_name")
        assert result is not None, "Required property 'bucket_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property domainName: Domain name.'''
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DomainProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-oss.IBucket")
class IBucket(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Bucket``.'''

    @builtins.property
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainName: The public DNS name of the specified bucket.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrInternalDomainName")
    def attr_internal_domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InternalDomainName: The internal DNS name of the specified bucket.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Name: The name of Bucket.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> BucketProps:
        ...


class _IBucketProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Bucket``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-oss.IBucket"

    @builtins.property
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainName: The public DNS name of the specified bucket.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDomainName"))

    @builtins.property
    @jsii.member(jsii_name="attrInternalDomainName")
    def attr_internal_domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InternalDomainName: The internal DNS name of the specified bucket.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInternalDomainName"))

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Name: The name of Bucket.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> BucketProps:
        return typing.cast(BucketProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IBucket).__jsii_proxy_class__ = lambda : _IBucketProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-oss.IDirectory")
class IDirectory(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Directory``.'''

    @builtins.property
    @jsii.member(jsii_name="attrBucketName")
    def attr_bucket_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BucketName: The name of Bucket.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDirectoryName")
    def attr_directory_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DirectoryName: The name of Directory.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DirectoryProps:
        ...


class _IDirectoryProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Directory``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-oss.IDirectory"

    @builtins.property
    @jsii.member(jsii_name="attrBucketName")
    def attr_bucket_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BucketName: The name of Bucket.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBucketName"))

    @builtins.property
    @jsii.member(jsii_name="attrDirectoryName")
    def attr_directory_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DirectoryName: The name of Directory.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDirectoryName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DirectoryProps:
        return typing.cast(DirectoryProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IDirectory).__jsii_proxy_class__ = lambda : _IDirectoryProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-oss.IDomain")
class IDomain(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Domain``.'''

    @builtins.property
    @jsii.member(jsii_name="attrBucketName")
    def attr_bucket_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BucketName: The name of Bucket.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainName: The custom domain name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DomainProps:
        ...


class _IDomainProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Domain``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-oss.IDomain"

    @builtins.property
    @jsii.member(jsii_name="attrBucketName")
    def attr_bucket_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BucketName: The name of Bucket.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBucketName"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainName: The custom domain name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDomainName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DomainProps:
        return typing.cast(DomainProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IDomain).__jsii_proxy_class__ = lambda : _IDomainProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-oss.IObjectAcl")
class IObjectAcl(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``ObjectAcl``.'''

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ObjectAclProps":
        ...


class _IObjectAclProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ObjectAcl``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-oss.IObjectAcl"

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ObjectAclProps":
        return typing.cast("ObjectAclProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IObjectAcl).__jsii_proxy_class__ = lambda : _IObjectAclProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-oss.IWebsite")
class IWebsite(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Website``.'''

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "WebsiteProps":
        ...


class _IWebsiteProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Website``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-oss.IWebsite"

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "WebsiteProps":
        return typing.cast("WebsiteProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IWebsite).__jsii_proxy_class__ = lambda : _IWebsiteProxy


@jsii.implements(IObjectAcl)
class ObjectAcl(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oss.ObjectAcl",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::OSS::ObjectAcl``, which is used to modify the access control list (ACL) of an Object Storage Service (OSS) object.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosObjectAcl``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-objectacl
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ObjectAclProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a88914b78a3654af71d7a958640e90202587322368de62c5c6376b7e87c69048)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ObjectAclProps":
        return typing.cast("ObjectAclProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0e792f1fb174116eddc5223a564f90ea8ed5dc5f242bfb41f0e277e8bd44ae7a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c30d0fd226c6b9c13882b0736098560078ead93d6d432ffb033995d37fa71f12)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__04d543decd4dee14963e4214f345c05402befc8a90920e96c846e335723079cf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oss.ObjectAclProps",
    jsii_struct_bases=[],
    name_mapping={
        "bucket": "bucket",
        "object_acl": "objectAcl",
        "object_key": "objectKey",
    },
)
class ObjectAclProps:
    def __init__(
        self,
        *,
        bucket: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        object_acl: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        object_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ObjectAcl``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-objectacl

        :param bucket: Property bucket: Bucket name.
        :param object_acl: Property objectAcl: Object acl.
        :param object_key: Property objectKey: Object key.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6ed4cfa392490e28309fc8acc620409be48856a8f74b8fc575ba3c73dae79e5e)
            check_type(argname="argument bucket", value=bucket, expected_type=type_hints["bucket"])
            check_type(argname="argument object_acl", value=object_acl, expected_type=type_hints["object_acl"])
            check_type(argname="argument object_key", value=object_key, expected_type=type_hints["object_key"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "bucket": bucket,
            "object_acl": object_acl,
            "object_key": object_key,
        }

    @builtins.property
    def bucket(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property bucket: Bucket name.'''
        result = self._values.get("bucket")
        assert result is not None, "Required property 'bucket' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def object_acl(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property objectAcl: Object acl.'''
        result = self._values.get("object_acl")
        assert result is not None, "Required property 'object_acl' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def object_key(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property objectKey: Object key.'''
        result = self._values.get("object_key")
        assert result is not None, "Required property 'object_key' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ObjectAclProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosBucket(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oss.RosBucket",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::OSS::Bucket``, which is used to create a bucket in Object Storage Service (OSS).

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Bucket`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucket
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosBucketProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4071028f1086ef2a8d1ef1506d63a579b2cf8d550e7156449b09a05fc4e3f7a5)
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
            type_hints = typing.get_type_hints(_typecheckingstub__187423387916f4bdc9b6d0414791fcefc13a698454c7ba1f1c671a0a67ec29a3)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DomainName: The public DNS name of the specified bucket.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomainName"))

    @builtins.property
    @jsii.member(jsii_name="attrInternalDomainName")
    def attr_internal_domain_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InternalDomainName: The internal DNS name of the specified bucket.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInternalDomainName"))

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Name: The name of Bucket
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="bucketName")
    def bucket_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: bucketName: bucket name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "bucketName"))

    @bucket_name.setter
    def bucket_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7b85d300bd141c569474b2e982197f0370cf6a90f5a084bf5da62914ff2e7f06)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bucketName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f0fe35927fa0b06db25165ca3f0f58e7a73b9445161186358061372e338a66eb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="accessControl")
    def access_control(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: accessControl: The access control list.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "accessControl"))

    @access_control.setter
    def access_control(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__61a7738ec80ab9f9bc3aae87799219cebf02e7e8a93bf79f51e7ac53cdb9338c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accessControl", value)

    @builtins.property
    @jsii.member(jsii_name="corsConfiguration")
    def cors_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.CORSConfigurationProperty"]]:
        '''
        :Property: corsConfiguration: Rules that define cross-origin resource sharing of objects in this bucket.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.CORSConfigurationProperty"]], jsii.get(self, "corsConfiguration"))

    @cors_configuration.setter
    def cors_configuration(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.CORSConfigurationProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8942b9978d920a7b0ecb0c7091bea6276db7f1072b4512318c407e1127f2bc06)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "corsConfiguration", value)

    @builtins.property
    @jsii.member(jsii_name="deletionForce")
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deletionForce: Whether force delete the relative objects in the bucket. Default value is false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "deletionForce"))

    @deletion_force.setter
    def deletion_force(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4bc0b450845bc1a61aa5d1f0fa500950865aa23e494b60bb9b94aa3586bb5677)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deletionForce", value)

    @builtins.property
    @jsii.member(jsii_name="enableOssHdfsService")
    def enable_oss_hdfs_service(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableOssHdfsService: Whether enable OSS-HDFS service.
        **Note**: Once it's enabled, it can't be disabled again.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enableOssHdfsService"))

    @enable_oss_hdfs_service.setter
    def enable_oss_hdfs_service(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ae097ab9f27a9db23f521656f49e73fd8adafb3f45e12f531aba97ded51cf1d6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableOssHdfsService", value)

    @builtins.property
    @jsii.member(jsii_name="lifecycleConfiguration")
    def lifecycle_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.LifecycleConfigurationProperty"]]:
        '''
        :Property: lifecycleConfiguration: Rules that define how oss bucket manages objects during their lifetime.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.LifecycleConfigurationProperty"]], jsii.get(self, "lifecycleConfiguration"))

    @lifecycle_configuration.setter
    def lifecycle_configuration(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.LifecycleConfigurationProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d1a708471b95cf193c959db5fd0267a672a39a713774eb73818f3ad8bb750587)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "lifecycleConfiguration", value)

    @builtins.property
    @jsii.member(jsii_name="loggingConfiguration")
    def logging_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.LoggingConfigurationProperty"]]:
        '''
        :Property: loggingConfiguration: Settings that defines where logs are stored.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.LoggingConfigurationProperty"]], jsii.get(self, "loggingConfiguration"))

    @logging_configuration.setter
    def logging_configuration(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.LoggingConfigurationProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8b14e50e9493b7ce387caf37c0f3d4c9159a6017d9c2cebc491dd259fd831acb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loggingConfiguration", value)

    @builtins.property
    @jsii.member(jsii_name="policy")
    def policy(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: policy: Bucket policy
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "policy"))

    @policy.setter
    def policy(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ca09f44d80ba7e55a5cdcd4f0df96878229f60761f37bf28965174af98d25c6d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "policy", value)

    @builtins.property
    @jsii.member(jsii_name="redundancyType")
    def redundancy_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        redundancyType: Specifies the data disaster recovery type of the storage space. The value range is as follows:
        LRS (default): Local redundant LRS stores your data redundantly on different storage devices in the same availability zone, and can support data loss and normal access even when two storage devices are damaged concurrently.
        ZRS: Intra-city redundant ZRS adopts a data redundancy storage mechanism in multiple availability zones (AZ), and stores user data redundantly in multiple availability zones in the same region. When an availability zone is unavailable, normal access to data can still be guaranteed.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "redundancyType"))

    @redundancy_type.setter
    def redundancy_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__23f4c6306b9f2a6f1bdcdd6776db4454358a7513bdc61ee2a87ac484a2399f40)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "redundancyType", value)

    @builtins.property
    @jsii.member(jsii_name="refererConfiguration")
    def referer_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.RefererConfigurationProperty"]]:
        '''
        :Property: refererConfiguration: undefined
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.RefererConfigurationProperty"]], jsii.get(self, "refererConfiguration"))

    @referer_configuration.setter
    def referer_configuration(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.RefererConfigurationProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f1d1e94ba56a06821763a7f70c6e11674075a382e6256a264d0b34f44d6cb50c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refererConfiguration", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The resource group id.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__82f278d2ab7e19b09646d15c71ba467b5ab79743cceae9e032615eaf8ee5e981)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="serverSideEncryptionConfiguration")
    def server_side_encryption_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.ServerSideEncryptionConfigurationProperty"]]:
        '''
        :Property: serverSideEncryptionConfiguration: Specifies the bucket used to store the server-side encryption rule.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.ServerSideEncryptionConfigurationProperty"]], jsii.get(self, "serverSideEncryptionConfiguration"))

    @server_side_encryption_configuration.setter
    def server_side_encryption_configuration(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.ServerSideEncryptionConfigurationProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9b3c5cf45dc33ed6dd434b0e13ed0c172336a9445c58baea170379ca213e86ba)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serverSideEncryptionConfiguration", value)

    @builtins.property
    @jsii.member(jsii_name="storageClass")
    def storage_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: storageClass: Specifies the storage class of the bucket. Default is "Standard".
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "storageClass"))

    @storage_class.setter
    def storage_class(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0de248f2d8dbc2439f6ef8822746b2a449c41e402d0ab7e47cb9ec8fbd0dd9e7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "storageClass", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: tags: Bucket tags in k-v pairs format.
        '''
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.Any]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__450811e87d75543a2070edc450f3db40357478ade5f5f8af9c1244b6c4b61365)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="versioningConfiguration")
    def versioning_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.VersioningConfigurationProperty"]]:
        '''
        :Property: versioningConfiguration: A state of versioning
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.VersioningConfigurationProperty"]], jsii.get(self, "versioningConfiguration"))

    @versioning_configuration.setter
    def versioning_configuration(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.VersioningConfigurationProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6397ea1c5ea28e6509c6541ecd6007cc68a550434ac40c6843f32a2e06b82997)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "versioningConfiguration", value)

    @builtins.property
    @jsii.member(jsii_name="websiteConfigurationV2")
    def website_configuration_v2(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.WebsiteConfigurationV2Property"]]:
        '''
        :Property: websiteConfigurationV2: Website configuration.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.WebsiteConfigurationV2Property"]], jsii.get(self, "websiteConfigurationV2"))

    @website_configuration_v2.setter
    def website_configuration_v2(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.WebsiteConfigurationV2Property"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fb5d4db4eb9fdac8c59056b1f2b07c7bfbb71df0fda5c57ae1aa1ead634c7679)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "websiteConfigurationV2", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-oss.RosBucket.AbortMultipartUploadProperty",
        jsii_struct_bases=[],
        name_mapping={"created_before_date": "createdBeforeDate", "days": "days"},
    )
    class AbortMultipartUploadProperty:
        def __init__(
            self,
            *,
            created_before_date: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            days: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param created_before_date: 
            :param days: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__3934ba2fbf015b5413e35819d015a9118560764281258dd4da8bb5c7869b6da9)
                check_type(argname="argument created_before_date", value=created_before_date, expected_type=type_hints["created_before_date"])
                check_type(argname="argument days", value=days, expected_type=type_hints["days"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if created_before_date is not None:
                self._values["created_before_date"] = created_before_date
            if days is not None:
                self._values["days"] = days

        @builtins.property
        def created_before_date(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: createdBeforeDate: undefined
            '''
            result = self._values.get("created_before_date")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def days(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: days: undefined
            '''
            result = self._values.get("days")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "AbortMultipartUploadProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-oss.RosBucket.CORSConfigurationProperty",
        jsii_struct_bases=[],
        name_mapping={"cors_rule": "corsRule", "response_vary": "responseVary"},
    )
    class CORSConfigurationProperty:
        def __init__(
            self,
            *,
            cors_rule: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosBucket.CORSRuleProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            response_vary: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param cors_rule: 
            :param response_vary: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__4563a0ce00cecd34040601f3d76b7122d55e01316e2b98bd18f8cf1561085b6c)
                check_type(argname="argument cors_rule", value=cors_rule, expected_type=type_hints["cors_rule"])
                check_type(argname="argument response_vary", value=response_vary, expected_type=type_hints["response_vary"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if cors_rule is not None:
                self._values["cors_rule"] = cors_rule
            if response_vary is not None:
                self._values["response_vary"] = response_vary

        @builtins.property
        def cors_rule(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.CORSRuleProperty"]]]]:
            '''
            :Property: corsRule: A set of origins and methods that you allow.
            '''
            result = self._values.get("cors_rule")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.CORSRuleProperty"]]]], result)

        @builtins.property
        def response_vary(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            responseVary: Whether to return the Vary: Origin header. The range is as follows:

            - true: The Vary: Origin header is returned regardless of whether a cross-origin request was sent or whether the cross-origin request was successful.
            - false (default) : Do not return the Vary: Origin header under any circumstances
            Note: This field cannot be configured separately; at least one cross-domain rule must be configured to take effect.
            '''
            result = self._values.get("response_vary")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "CORSConfigurationProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-oss.RosBucket.CORSRuleProperty",
        jsii_struct_bases=[],
        name_mapping={
            "allowed_header": "allowedHeader",
            "allowed_method": "allowedMethod",
            "allowed_origin": "allowedOrigin",
            "expose_header": "exposeHeader",
            "max_age_seconds": "maxAgeSeconds",
        },
    )
    class CORSRuleProperty:
        def __init__(
            self,
            *,
            allowed_header: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            allowed_method: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            allowed_origin: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            expose_header: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            max_age_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param allowed_header: 
            :param allowed_method: 
            :param allowed_origin: 
            :param expose_header: 
            :param max_age_seconds: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__2f111f5c92540f1df4650c4eec6fdc4c40f1e7b7e009c96d02a6934d4944cebe)
                check_type(argname="argument allowed_header", value=allowed_header, expected_type=type_hints["allowed_header"])
                check_type(argname="argument allowed_method", value=allowed_method, expected_type=type_hints["allowed_method"])
                check_type(argname="argument allowed_origin", value=allowed_origin, expected_type=type_hints["allowed_origin"])
                check_type(argname="argument expose_header", value=expose_header, expected_type=type_hints["expose_header"])
                check_type(argname="argument max_age_seconds", value=max_age_seconds, expected_type=type_hints["max_age_seconds"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if allowed_header is not None:
                self._values["allowed_header"] = allowed_header
            if allowed_method is not None:
                self._values["allowed_method"] = allowed_method
            if allowed_origin is not None:
                self._values["allowed_origin"] = allowed_origin
            if expose_header is not None:
                self._values["expose_header"] = expose_header
            if max_age_seconds is not None:
                self._values["max_age_seconds"] = max_age_seconds

        @builtins.property
        def allowed_header(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: allowedHeader: undefined
            '''
            result = self._values.get("allowed_header")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def allowed_method(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: allowedMethod: undefined
            '''
            result = self._values.get("allowed_method")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def allowed_origin(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: allowedOrigin: undefined
            '''
            result = self._values.get("allowed_origin")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def expose_header(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: exposeHeader: undefined
            '''
            result = self._values.get("expose_header")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def max_age_seconds(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: maxAgeSeconds: undefined
            '''
            result = self._values.get("max_age_seconds")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "CORSRuleProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-oss.RosBucket.ConditionProperty",
        jsii_struct_bases=[],
        name_mapping={
            "http_error_code_returned_equals": "httpErrorCodeReturnedEquals",
            "include_headers": "includeHeaders",
            "key_prefix_equals": "keyPrefixEquals",
            "key_suffix_equals": "keySuffixEquals",
        },
    )
    class ConditionProperty:
        def __init__(
            self,
            *,
            http_error_code_returned_equals: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            include_headers: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosBucket.IncludeHeadersProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            key_prefix_equals: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            key_suffix_equals: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param http_error_code_returned_equals: 
            :param include_headers: 
            :param key_prefix_equals: 
            :param key_suffix_equals: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__10d8239fcab7e593cf0bae6cdd04f3ab63d5ca0a5beea8548b7de11fdb2926fe)
                check_type(argname="argument http_error_code_returned_equals", value=http_error_code_returned_equals, expected_type=type_hints["http_error_code_returned_equals"])
                check_type(argname="argument include_headers", value=include_headers, expected_type=type_hints["include_headers"])
                check_type(argname="argument key_prefix_equals", value=key_prefix_equals, expected_type=type_hints["key_prefix_equals"])
                check_type(argname="argument key_suffix_equals", value=key_suffix_equals, expected_type=type_hints["key_suffix_equals"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if http_error_code_returned_equals is not None:
                self._values["http_error_code_returned_equals"] = http_error_code_returned_equals
            if include_headers is not None:
                self._values["include_headers"] = include_headers
            if key_prefix_equals is not None:
                self._values["key_prefix_equals"] = key_prefix_equals
            if key_suffix_equals is not None:
                self._values["key_suffix_equals"] = key_suffix_equals

        @builtins.property
        def http_error_code_returned_equals(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: httpErrorCodeReturnedEquals: When accessing the specified Object, this status must be returned to match this rule. This field must be 404 when the jump rule is mirror-back to the source type.
            '''
            result = self._values.get("http_error_code_returned_equals")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def include_headers(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.IncludeHeadersProperty"]]]]:
            '''
            :Property: includeHeaders: This rule will only match if the request contains the specified Header and the value is the specified value. Up to 10.
            '''
            result = self._values.get("include_headers")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.IncludeHeadersProperty"]]]], result)

        @builtins.property
        def key_prefix_equals(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: keyPrefixEquals: The prefix of the Object name to be matched.
            '''
            result = self._values.get("key_prefix_equals")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def key_suffix_equals(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: keySuffixEquals: The suffix of the Object name to be matched.
            '''
            result = self._values.get("key_suffix_equals")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ConditionProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-oss.RosBucket.ErrorDocumentProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "http_status": "httpStatus"},
    )
    class ErrorDocumentProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            http_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param http_status: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__c6d456a951a2a497a3ee7ee0e6809b0d10556ac29074248facb5f71547682c58)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument http_status", value=http_status, expected_type=type_hints["http_status"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "key": key,
            }
            if http_status is not None:
                self._values["http_status"] = http_status

        @builtins.property
        def key(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            key: The default error page.
            When an error page is specified, if the accessed Object does not exist, this error page is returned.
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def http_status(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: httpStatus: The HTTP status code of the error page. Valid values: 200, 404 (default).
            '''
            result = self._values.get("http_status")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ErrorDocumentProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-oss.RosBucket.ExpirationProperty",
        jsii_struct_bases=[],
        name_mapping={
            "created_before_date": "createdBeforeDate",
            "days": "days",
            "expired_object_delete_marker": "expiredObjectDeleteMarker",
        },
    )
    class ExpirationProperty:
        def __init__(
            self,
            *,
            created_before_date: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            days: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            expired_object_delete_marker: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param created_before_date: 
            :param days: 
            :param expired_object_delete_marker: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__8812eb0ed0e79f296e3e6473d1c2d52261a297caaee23a7eb38b4549f579b4fa)
                check_type(argname="argument created_before_date", value=created_before_date, expected_type=type_hints["created_before_date"])
                check_type(argname="argument days", value=days, expected_type=type_hints["days"])
                check_type(argname="argument expired_object_delete_marker", value=expired_object_delete_marker, expected_type=type_hints["expired_object_delete_marker"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if created_before_date is not None:
                self._values["created_before_date"] = created_before_date
            if days is not None:
                self._values["days"] = days
            if expired_object_delete_marker is not None:
                self._values["expired_object_delete_marker"] = expired_object_delete_marker

        @builtins.property
        def created_before_date(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: createdBeforeDate: undefined
            '''
            result = self._values.get("created_before_date")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def days(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: days: undefined
            '''
            result = self._values.get("days")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def expired_object_delete_marker(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            expiredObjectDeleteMarker: Specifies whether expired delete tags should be removed automatically. The values are as follows:

            - true: This means that the expiration delete flag is automatically removed. When set to true, specifying Days or CreatedBeforeDate is not supported.
            - false: This indicates that the expiration delete marker will not be automatically removed. When false, either Days or CreatedBeforeDate must be specified.
            '''
            result = self._values.get("expired_object_delete_marker")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ExpirationProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-oss.RosBucket.FilterProperty",
        jsii_struct_bases=[],
        name_mapping={"not_": "not"},
    )
    class FilterProperty:
        def __init__(
            self,
            *,
            not_: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosBucket.NotProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        ) -> None:
            '''
            :param not_: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__664e9b0f9e403b654e1a22bcd07e884dad3f5a2bd13ed4312094ee671bcd7efa)
                check_type(argname="argument not_", value=not_, expected_type=type_hints["not_"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if not_ is not None:
                self._values["not_"] = not_

        @builtins.property
        def not_(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.NotProperty"]]:
            '''
            :Property: not: undefined
            '''
            result = self._values.get("not_")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.NotProperty"]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "FilterProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-oss.RosBucket.IncludeHeadersProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "equals_to": "equalsTo"},
    )
    class IncludeHeadersProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            equals_to: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param equals_to: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__8255ff462f3353cef66711d89f93d5e320503d1d44848b37215bb526bc32030e)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument equals_to", value=equals_to, expected_type=type_hints["equals_to"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "key": key,
            }
            if equals_to is not None:
                self._values["equals_to"] = equals_to

        @builtins.property
        def key(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: key: The name of the header.
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def equals_to(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: equalsTo: The value of the header.
            '''
            result = self._values.get("equals_to")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "IncludeHeadersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-oss.RosBucket.IndexDocumentProperty",
        jsii_struct_bases=[],
        name_mapping={
            "suffix": "suffix",
            "support_sub_dir": "supportSubDir",
            "type": "type",
        },
    )
    class IndexDocumentProperty:
        def __init__(
            self,
            *,
            suffix: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            support_sub_dir: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param suffix: 
            :param support_sub_dir: 
            :param type: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__790c9d8d0234ae7d87a72c684286b1dd71eb8748646082c928e03cffd8bd94ce)
                check_type(argname="argument suffix", value=suffix, expected_type=type_hints["suffix"])
                check_type(argname="argument support_sub_dir", value=support_sub_dir, expected_type=type_hints["support_sub_dir"])
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "suffix": suffix,
            }
            if support_sub_dir is not None:
                self._values["support_sub_dir"] = support_sub_dir
            if type is not None:
                self._values["type"] = type

        @builtins.property
        def suffix(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            suffix: Default home page.
            After setting the default home page, if you visit an Object ending with a forward slash (/), OSS will return to this default home page.
            '''
            result = self._values.get("suffix")
            assert result is not None, "Required property 'suffix' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def support_sub_dir(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            supportSubDir: Whether to jump to the default home page of a subdirectory when accessing it. The range is as follows:

            - true: Go to the default home page in a subdirectory.
            - false (default) : Instead of going to the default home page in a subdirectory, go to the default home page in the root directory.
            Assume that the default home page for the index. The HTML, to access bucket.oss-cn-hangzhou.aliyuncs.com/subdir/, if set SupportSubDir to false, Then go to bucket.oss-cn-hangzhou.aliyuncs.com/index.html; If set SupportSubDir is true, then transferred to the bucket.oss-cn-hangzhou.aliyuncs.com/subdir/index.html.
            '''
            result = self._values.get("support_sub_dir")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            type: Behavior when an Object that ends with a non-forward slash (/) and does not exist is accessed after setting the default home page. It only takes effect when SupportSubDir is set to true, and it takes effect after RoutingRule and before ErrorFile.
            Assume that the default home page for the index. The HTML, to access the file path for bucket.oss-cn-hangzhou.aliyuncs.com/abc, and ABC this Object does not exist, at this moment, in different values corresponding to the Type of behavior is as follows:

            - 0 (default) : Check if abc/index.html exists (Object + forward slash (/) + home page) and return 302 with the URL code of /abc/ as Location header (forward slash (/) + Object + forward slash (/)). If it doesn't, it will return 404 and keep checking ErrorFile.
            - 1: Directly return 404, error NoSuchKey, continue to check ErrorFile.
            - 2: Check if abc/index.html exists and return the contents of the Object if it does. If it doesn't, it will return 404 and keep checking ErrorFile.
            '''
            result = self._values.get("type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "IndexDocumentProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-oss.RosBucket.LifecycleConfigurationProperty",
        jsii_struct_bases=[],
        name_mapping={"rule": "rule"},
    )
    class LifecycleConfigurationProperty:
        def __init__(
            self,
            *,
            rule: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosBucket.RuleProperty", typing.Dict[builtins.str, typing.Any]]]]],
        ) -> None:
            '''
            :param rule: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__9370c463a7de461a01f3a5f48f0eea9a1dbe46b234a420cb896bae80830dadfe)
                check_type(argname="argument rule", value=rule, expected_type=type_hints["rule"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "rule": rule,
            }

        @builtins.property
        def rule(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.RuleProperty"]]]:
            '''
            :Property: rule: Describes lifecycle rules for the oss bucket Lifecycle Configuration property.
            '''
            result = self._values.get("rule")
            assert result is not None, "Required property 'rule' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.RuleProperty"]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "LifecycleConfigurationProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-oss.RosBucket.LoggingConfigurationProperty",
        jsii_struct_bases=[],
        name_mapping={
            "target_bucket": "targetBucket",
            "target_prefix": "targetPrefix",
        },
    )
    class LoggingConfigurationProperty:
        def __init__(
            self,
            *,
            target_bucket: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            target_prefix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param target_bucket: 
            :param target_prefix: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__d35ba80257bb3428431cf432fb831f56c919d5e5242194bf3231c95ff601786a)
                check_type(argname="argument target_bucket", value=target_bucket, expected_type=type_hints["target_bucket"])
                check_type(argname="argument target_prefix", value=target_prefix, expected_type=type_hints["target_prefix"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if target_bucket is not None:
                self._values["target_bucket"] = target_bucket
            if target_prefix is not None:
                self._values["target_prefix"] = target_prefix

        @builtins.property
        def target_bucket(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: targetBucket: Specifies the bucket where you want Aliyun OSS to store server access logs.
            '''
            result = self._values.get("target_bucket")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def target_prefix(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: targetPrefix: This element lets you specify a prefix for the objects that the log files will be stored.
            '''
            result = self._values.get("target_prefix")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "LoggingConfigurationProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-oss.RosBucket.MirrorHeadersProperty",
        jsii_struct_bases=[],
        name_mapping={
            "pass_": "pass",
            "pass_all": "passAll",
            "remove": "remove",
            "sets": "sets",
        },
    )
    class MirrorHeadersProperty:
        def __init__(
            self,
            *,
            pass_: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            pass_all: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            remove: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            sets: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosBucket.SetsProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        ) -> None:
            '''
            :param pass_: 
            :param pass_all: 
            :param remove: 
            :param sets: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__22b4366918354f734f27581dd58eb37a41d87e25a251db61ccba301652214051)
                check_type(argname="argument pass_", value=pass_, expected_type=type_hints["pass_"])
                check_type(argname="argument pass_all", value=pass_all, expected_type=type_hints["pass_all"])
                check_type(argname="argument remove", value=remove, expected_type=type_hints["remove"])
                check_type(argname="argument sets", value=sets, expected_type=type_hints["sets"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if pass_ is not None:
                self._values["pass_"] = pass_
            if pass_all is not None:
                self._values["pass_all"] = pass_all
            if remove is not None:
                self._values["remove"] = remove
            if sets is not None:
                self._values["sets"] = sets

        @builtins.property
        def pass_(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property:

            pass: Pass through the specified Header to the source. This only works if RedirectType is set to Mirror.
            Each Header is at most 1,024 bytes long and has the character sets 0-9, a-z, A-Z, and dash (-).
            A maximum of 10 can be specified for this field.
            '''
            result = self._values.get("pass_")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def pass_all(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            passAll: Whether to pass through other headers to the source except the following headers. This only works if RedirectType is set to Mirror.

            - content-length, authorization2, authorization, range, date and other headers
            - Headers starting with oss-/x-oss-/x-drs-
            Default value: false
            '''
            result = self._values.get("pass_all")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def remove(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property:

            remove: Disables pass-through of the specified Header to the source. This only works if RedirectType is set to Mirror.
            Each Header is at most 1,024 bytes long and has the character sets 0-9, a-z, A-Z, and dash (-).
            A maximum of 10 can be specified for this field.
            '''
            result = self._values.get("remove")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def sets(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.SetsProperty"]]]]:
            '''
            :Property:

            sets: Set a Header to the origin, and it will be set when the request is sent back to the origin, regardless of whether the specified headers are included in the request. This only works if RedirectType is set to Mirror.
            Up to 10 groups can be specified for this container.
            '''
            result = self._values.get("sets")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.SetsProperty"]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "MirrorHeadersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-oss.RosBucket.NotProperty",
        jsii_struct_bases=[],
        name_mapping={"prefix": "prefix", "tag": "tag"},
    )
    class NotProperty:
        def __init__(
            self,
            *,
            prefix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            tag: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        ) -> None:
            '''
            :param prefix: 
            :param tag: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__506b32571fc947635f35eacad52a0b8380226f702d986ad56910a7c36be35d62)
                check_type(argname="argument prefix", value=prefix, expected_type=type_hints["prefix"])
                check_type(argname="argument tag", value=tag, expected_type=type_hints["tag"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if prefix is not None:
                self._values["prefix"] = prefix
            if tag is not None:
                self._values["tag"] = tag

        @builtins.property
        def prefix(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            prefix: The Object prefix to which this exclusion rule applies.

            - If Prefix is configured under Rule node, the Prefix under Not node must be prefixed by the Prefix under Rule node. For example, if the Prefix configured under the Rule node is dir, the Prefix under the Not node must begin with dir, such as dir1, dir2, and so on.
            - If the Tag is Not configured under the Not node, the Prefix configured under the NOT node cannot be the same as the Prefix configured under the Rule node.
            '''
            result = self._values.get("prefix")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def tag(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: tag: At most one Object tag to which this exclusion rule applies.
            '''
            result = self._values.get("tag")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "NotProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-oss.RosBucket.RedirectProperty",
        jsii_struct_bases=[],
        name_mapping={
            "redirect_type": "redirectType",
            "enable_replace_prefix": "enableReplacePrefix",
            "host_name": "hostName",
            "http_redirect_code": "httpRedirectCode",
            "mirror_check_md5": "mirrorCheckMd5",
            "mirror_follow_redirect": "mirrorFollowRedirect",
            "mirror_headers": "mirrorHeaders",
            "mirror_pass_query_string": "mirrorPassQueryString",
            "mirror_url": "mirrorUrl",
            "pass_query_string": "passQueryString",
            "protocol": "protocol",
            "replace_key_prefix_with": "replaceKeyPrefixWith",
            "replace_key_with": "replaceKeyWith",
        },
    )
    class RedirectProperty:
        def __init__(
            self,
            *,
            redirect_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            enable_replace_prefix: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            host_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            http_redirect_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            mirror_check_md5: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            mirror_follow_redirect: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            mirror_headers: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosBucket.MirrorHeadersProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            mirror_pass_query_string: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            mirror_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            pass_query_string: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            replace_key_prefix_with: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            replace_key_with: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param redirect_type: 
            :param enable_replace_prefix: 
            :param host_name: 
            :param http_redirect_code: 
            :param mirror_check_md5: 
            :param mirror_follow_redirect: 
            :param mirror_headers: 
            :param mirror_pass_query_string: 
            :param mirror_url: 
            :param pass_query_string: 
            :param protocol: 
            :param replace_key_prefix_with: 
            :param replace_key_with: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__e2ce27ebc06677339d9fa58055732c59d8bbe2fe382c8c4ad2f77c496220bac7)
                check_type(argname="argument redirect_type", value=redirect_type, expected_type=type_hints["redirect_type"])
                check_type(argname="argument enable_replace_prefix", value=enable_replace_prefix, expected_type=type_hints["enable_replace_prefix"])
                check_type(argname="argument host_name", value=host_name, expected_type=type_hints["host_name"])
                check_type(argname="argument http_redirect_code", value=http_redirect_code, expected_type=type_hints["http_redirect_code"])
                check_type(argname="argument mirror_check_md5", value=mirror_check_md5, expected_type=type_hints["mirror_check_md5"])
                check_type(argname="argument mirror_follow_redirect", value=mirror_follow_redirect, expected_type=type_hints["mirror_follow_redirect"])
                check_type(argname="argument mirror_headers", value=mirror_headers, expected_type=type_hints["mirror_headers"])
                check_type(argname="argument mirror_pass_query_string", value=mirror_pass_query_string, expected_type=type_hints["mirror_pass_query_string"])
                check_type(argname="argument mirror_url", value=mirror_url, expected_type=type_hints["mirror_url"])
                check_type(argname="argument pass_query_string", value=pass_query_string, expected_type=type_hints["pass_query_string"])
                check_type(argname="argument protocol", value=protocol, expected_type=type_hints["protocol"])
                check_type(argname="argument replace_key_prefix_with", value=replace_key_prefix_with, expected_type=type_hints["replace_key_prefix_with"])
                check_type(argname="argument replace_key_with", value=replace_key_with, expected_type=type_hints["replace_key_with"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "redirect_type": redirect_type,
            }
            if enable_replace_prefix is not None:
                self._values["enable_replace_prefix"] = enable_replace_prefix
            if host_name is not None:
                self._values["host_name"] = host_name
            if http_redirect_code is not None:
                self._values["http_redirect_code"] = http_redirect_code
            if mirror_check_md5 is not None:
                self._values["mirror_check_md5"] = mirror_check_md5
            if mirror_follow_redirect is not None:
                self._values["mirror_follow_redirect"] = mirror_follow_redirect
            if mirror_headers is not None:
                self._values["mirror_headers"] = mirror_headers
            if mirror_pass_query_string is not None:
                self._values["mirror_pass_query_string"] = mirror_pass_query_string
            if mirror_url is not None:
                self._values["mirror_url"] = mirror_url
            if pass_query_string is not None:
                self._values["pass_query_string"] = pass_query_string
            if protocol is not None:
                self._values["protocol"] = protocol
            if replace_key_prefix_with is not None:
                self._values["replace_key_prefix_with"] = replace_key_prefix_with
            if replace_key_with is not None:
                self._values["replace_key_with"] = replace_key_with

        @builtins.property
        def redirect_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            redirectType: Specifies the type of jump. The range is as follows:

            - Mirror: Mirror back to the source.
            - External: External branch, i.e. OSS will return a 3xx request specifying the branch to another address.
            - AliCDN: Aliyun CDN jump, mainly used for the CDN of Aliyun. Unlike External, OSS adds an additional Header. After identifying this Header, Aliyun CDN will actively jump to the specified address and return the obtained data to the user instead of returning the 3xx jump request to the user.
            '''
            result = self._values.get("redirect_type")
            assert result is not None, "Required property 'redirect_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def enable_replace_prefix(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            enableReplacePrefix: If you set this field to true, the prefix of Object is replaced with the value specified by ReplaceKeyPrefixWith. If this field is not specified or is empty, it means that the Object prefix is truncated.
            Notes: This field cannot be set to true when the ReplaceKeyWith field is not null.
            Default value: false
            '''
            result = self._values.get("enable_replace_prefix")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def host_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            hostName: The domain name of the jump, the domain name should conform to the domain name specification.
            If the file you want to access is test, the Protocol is set to https, and the Hostname is set to example.com, the Location header is https://example.com/test.
            '''
            result = self._values.get("host_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def http_redirect_code(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            httpRedirectCode: Status code returned when jumping. Only if RedirectType is set to External or AliCDN.The default value is 302.
            Value: 301, 302, 307
            '''
            result = self._values.get("http_redirect_code")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def mirror_check_md5(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            mirrorCheckMd5: Whether to check MD5 back to the source body. This only works if RedirectType is set to Mirror.
            When MirrorCheckMd5 is set to true, and the response returned by the source contains the Content-Md5 Header, OSS checks whether the pulled data MD5 matches this header, if not, it is not saved on OSS.
            Default value: false
            '''
            result = self._values.get("mirror_check_md5")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def mirror_follow_redirect(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            mirrorFollowRedirect: If the result obtained by mirriling back to the source is 3xx, whether to continue to jump to the specified Location to obtain data. This only works if RedirectType is set to Mirror.
            For example, when we mirror back to the source, the source returns a 302 with Location specified.

            - If set to true, OSS will continue to request the Location.
            It can jump up to 10 times, and if it jumps more than 10 times, it fails to return the mirror back to the source.
            - If set to false, OSS will return 302 and pass through the Location.
            Default value: true
            '''
            result = self._values.get("mirror_follow_redirect")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def mirror_headers(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.MirrorHeadersProperty"]]:
            '''
            :Property: mirrorHeaders: Specifies the Header that is mirrored back to the source. This only works if RedirectType is set to Mirror.
            '''
            result = self._values.get("mirror_headers")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.MirrorHeadersProperty"]], result)

        @builtins.property
        def mirror_pass_query_string(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            mirrorPassQueryString: Same as PassQueryString, but takes precedence over PassQueryString. This only works if RedirectType is set to Mirror.
            Default value: false
            '''
            result = self._values.get("mirror_pass_query_string")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def mirror_url(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            mirrorUrl: Mirror back to the source station address of the source. This only works if RedirectType is set to Mirror.
            The origin URL must begin with http:// or https:// and end with a forward slash (/), which OSS will follow with the Object name to form the return URL.
            Name to access the Object myobject, for example, if you specify this to http://example.com/, then back to the source URL for http://example.com/myobject, if you specify this to http://example.com/dir1/, Back to the source URL as http://example.com/dir1/myobject.
            '''
            result = self._values.get("mirror_url")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def pass_query_string(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            passQueryString: Whether to carry request parameters when performing a jump or mirroring back to the source rule.
            Does the user request OSS with the request parameters? a=b&c=d, and set PassQueryString to true, if the rule is a 302 jump, then this request parameter is added in the Location header of the jump. For example, Location:example.com?a=b&c=d, the jump type is mirror back to the source, then this request parameter will also be carried in the initiated back to the source request.
            Valid values: true, false (default)
            '''
            result = self._values.get("pass_query_string")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def protocol(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            protocol: Protocol when jumping. Only if RedirectType is set to External or AliCDN.
            If the file you want to access is test, set to go to example.com, and set Protocol to https, the Location header is https://example.com/test.
            Value: http, https
            '''
            result = self._values.get("protocol")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def replace_key_prefix_with(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            replaceKeyPrefixWith: This value will be substituted for the prefix of the Object name in Redirect. If the prefix is empty, the string is inserted before the Object name.
            Notes: Only ReplaceKeyWith or ReplaceKeyPrefixWith nodes are allowed.
            Hypothesis to access the Object for ABC/test. TXT, if set KeyPrefixEquals for ABC /, ReplaceKeyPrefixWith for def /, then the Location head to http://example.com/def/test.txt.
            '''
            result = self._values.get("replace_key_prefix_with")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def replace_key_with(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            replaceKeyWith: With Redirect, the Object name is replaced with the value specified by ReplaceKeyWith, which allows you to set variables. The currently supported variable is ${key}, which represents the name of the Object in the request.
            Suppose to access the Object for the test, if set ReplaceKeyWith to prefix/${key}. The suffix, is the Location head to http://example.com/prefix/test.suffix.
            '''
            result = self._values.get("replace_key_with")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "RedirectProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-oss.RosBucket.RefererConfigurationProperty",
        jsii_struct_bases=[],
        name_mapping={
            "allow_empty_referer": "allowEmptyReferer",
            "referer_list": "refererList",
        },
    )
    class RefererConfigurationProperty:
        def __init__(
            self,
            *,
            allow_empty_referer: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            referer_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param allow_empty_referer: 
            :param referer_list: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__c5e6da584a1336e0b1bf4ae0c58c9c1400b896f6857c6145dff0dc1dee043462)
                check_type(argname="argument allow_empty_referer", value=allow_empty_referer, expected_type=type_hints["allow_empty_referer"])
                check_type(argname="argument referer_list", value=referer_list, expected_type=type_hints["referer_list"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if allow_empty_referer is not None:
                self._values["allow_empty_referer"] = allow_empty_referer
            if referer_list is not None:
                self._values["referer_list"] = referer_list

        @builtins.property
        def allow_empty_referer(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: allowEmptyReferer: undefined
            '''
            result = self._values.get("allow_empty_referer")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def referer_list(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: refererList: undefined
            '''
            result = self._values.get("referer_list")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "RefererConfigurationProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-oss.RosBucket.RoutingRulesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "condition": "condition",
            "redirect": "redirect",
            "rule_number": "ruleNumber",
        },
    )
    class RoutingRulesProperty:
        def __init__(
            self,
            *,
            condition: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosBucket.ConditionProperty", typing.Dict[builtins.str, typing.Any]]],
            redirect: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosBucket.RedirectProperty", typing.Dict[builtins.str, typing.Any]]],
            rule_number: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param condition: 
            :param redirect: 
            :param rule_number: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__64cf4ad188246dc60dac29bd8952129d641c0b0a5f71d452c376f55bff6767a2)
                check_type(argname="argument condition", value=condition, expected_type=type_hints["condition"])
                check_type(argname="argument redirect", value=redirect, expected_type=type_hints["redirect"])
                check_type(argname="argument rule_number", value=rule_number, expected_type=type_hints["rule_number"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "condition": condition,
                "redirect": redirect,
                "rule_number": rule_number,
            }

        @builtins.property
        def condition(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.ConditionProperty"]:
            '''
            :Property:

            condition: Conditions for matching.
            This rule is executed if the specified items are all satisfied. A match is only considered if all conditions for each node under this container are met.
            '''
            result = self._values.get("condition")
            assert result is not None, "Required property 'condition' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.ConditionProperty"], result)

        @builtins.property
        def redirect(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.RedirectProperty"]:
            '''
            :Property: redirect: Specifies the action to be performed when this rule is matched.
            '''
            result = self._values.get("redirect")
            assert result is not None, "Required property 'redirect' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.RedirectProperty"], result)

        @builtins.property
        def rule_number(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: ruleNumber: Match and execute the sequence number of the RoutingRule, OSS will match the rules in turn according to this sequence number. If the match is successful, this rule is executed and no subsequent rules are executed.
            '''
            result = self._values.get("rule_number")
            assert result is not None, "Required property 'rule_number' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "RoutingRulesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-oss.RosBucket.RuleProperty",
        jsii_struct_bases=[],
        name_mapping={
            "prefix": "prefix",
            "abort_multipart_upload": "abortMultipartUpload",
            "expiration": "expiration",
            "filter": "filter",
            "id": "id",
            "status": "status",
        },
    )
    class RuleProperty:
        def __init__(
            self,
            *,
            prefix: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            abort_multipart_upload: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosBucket.AbortMultipartUploadProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            expiration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosBucket.ExpirationProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            filter: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosBucket.FilterProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param prefix: 
            :param abort_multipart_upload: 
            :param expiration: 
            :param filter: 
            :param id: 
            :param status: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__ca14119ad442382fb4fa579a442a8423bfd5f221e6719325d0e6ad26cacead71)
                check_type(argname="argument prefix", value=prefix, expected_type=type_hints["prefix"])
                check_type(argname="argument abort_multipart_upload", value=abort_multipart_upload, expected_type=type_hints["abort_multipart_upload"])
                check_type(argname="argument expiration", value=expiration, expected_type=type_hints["expiration"])
                check_type(argname="argument filter", value=filter, expected_type=type_hints["filter"])
                check_type(argname="argument id", value=id, expected_type=type_hints["id"])
                check_type(argname="argument status", value=status, expected_type=type_hints["status"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "prefix": prefix,
            }
            if abort_multipart_upload is not None:
                self._values["abort_multipart_upload"] = abort_multipart_upload
            if expiration is not None:
                self._values["expiration"] = expiration
            if filter is not None:
                self._values["filter"] = filter
            if id is not None:
                self._values["id"] = id
            if status is not None:
                self._values["status"] = status

        @builtins.property
        def prefix(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: prefix: undefined
            '''
            result = self._values.get("prefix")
            assert result is not None, "Required property 'prefix' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def abort_multipart_upload(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.AbortMultipartUploadProperty"]]:
            '''
            :Property: abortMultipartUpload: undefined
            '''
            result = self._values.get("abort_multipart_upload")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.AbortMultipartUploadProperty"]], result)

        @builtins.property
        def expiration(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.ExpirationProperty"]]:
            '''
            :Property: expiration: undefined
            '''
            result = self._values.get("expiration")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.ExpirationProperty"]], result)

        @builtins.property
        def filter(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.FilterProperty"]]:
            '''
            :Property: filter: This exclusion rule has at most one conditional argument container.
            '''
            result = self._values.get("filter")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.FilterProperty"]], result)

        @builtins.property
        def id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: id: undefined
            '''
            result = self._values.get("id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def status(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: status: undefined
            '''
            result = self._values.get("status")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "RuleProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-oss.RosBucket.ServerSideEncryptionConfigurationProperty",
        jsii_struct_bases=[],
        name_mapping={
            "sse_algorithm": "sseAlgorithm",
            "kms_master_key_id": "kmsMasterKeyId",
        },
    )
    class ServerSideEncryptionConfigurationProperty:
        def __init__(
            self,
            *,
            sse_algorithm: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            kms_master_key_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param sse_algorithm: 
            :param kms_master_key_id: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__21b99abd5f200ae480d6590dc1cce050cb159c64fb0fcee949e87176b5a80612)
                check_type(argname="argument sse_algorithm", value=sse_algorithm, expected_type=type_hints["sse_algorithm"])
                check_type(argname="argument kms_master_key_id", value=kms_master_key_id, expected_type=type_hints["kms_master_key_id"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "sse_algorithm": sse_algorithm,
            }
            if kms_master_key_id is not None:
                self._values["kms_master_key_id"] = kms_master_key_id

        @builtins.property
        def sse_algorithm(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: sseAlgorithm: Specifies the default server-side encryption method.
            '''
            result = self._values.get("sse_algorithm")
            assert result is not None, "Required property 'sse_algorithm' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def kms_master_key_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: kmsMasterKeyId: Specifies the CMK ID when the value of SSEAlgorithm is KMS and a specified CMK is used for encryption. If the value of SSEAlgorithm is not KMS, this element must be null.
            '''
            result = self._values.get("kms_master_key_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ServerSideEncryptionConfigurationProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-oss.RosBucket.SetsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class SetsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__877ae2ccc0d997df4a2e2eb10119705c53e97a8ccc1ad7bd41a6f80fd55383b0)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "key": key,
                "value": value,
            }

        @builtins.property
        def key(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: key: Sets the Header key to a maximum of 1024 bytes in the same character set as Pass. This only works if RedirectType is set to Mirror.
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: value: Set the value of the Header to a maximum of 1024 bytes without \\r\\n. This only works if RedirectType is set to Mirror.
            '''
            result = self._values.get("value")
            assert result is not None, "Required property 'value' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SetsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-oss.RosBucket.VersioningConfigurationProperty",
        jsii_struct_bases=[],
        name_mapping={"status": "status"},
    )
    class VersioningConfigurationProperty:
        def __init__(
            self,
            *,
            status: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param status: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__b8f66b3d0c710d8e5bf5c7477590933a5128c030dfb04aa0e2fcd9cd7ba851d5)
                check_type(argname="argument status", value=status, expected_type=type_hints["status"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "status": status,
            }

        @builtins.property
        def status(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: status: Specifies the versioning state of a bucket. Valid values: Enabled and Suspended.
            '''
            result = self._values.get("status")
            assert result is not None, "Required property 'status' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "VersioningConfigurationProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-oss.RosBucket.WebsiteConfigurationV2Property",
        jsii_struct_bases=[],
        name_mapping={
            "error_document": "errorDocument",
            "index_document": "indexDocument",
            "routing_rules": "routingRules",
        },
    )
    class WebsiteConfigurationV2Property:
        def __init__(
            self,
            *,
            error_document: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosBucket.ErrorDocumentProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            index_document: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosBucket.IndexDocumentProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            routing_rules: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosBucket.RoutingRulesProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        ) -> None:
            '''
            :param error_document: 
            :param index_document: 
            :param routing_rules: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__8c4f0936585f796a1de7068eb9f2201b8e29f7c9cae31ad7a5d6f9fa4e23e2bc)
                check_type(argname="argument error_document", value=error_document, expected_type=type_hints["error_document"])
                check_type(argname="argument index_document", value=index_document, expected_type=type_hints["index_document"])
                check_type(argname="argument routing_rules", value=routing_rules, expected_type=type_hints["routing_rules"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if error_document is not None:
                self._values["error_document"] = error_document
            if index_document is not None:
                self._values["index_document"] = index_document
            if routing_rules is not None:
                self._values["routing_rules"] = routing_rules

        @builtins.property
        def error_document(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.ErrorDocumentProperty"]]:
            '''
            :Property: errorDocument: The properties of default error page.
            '''
            result = self._values.get("error_document")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.ErrorDocumentProperty"]], result)

        @builtins.property
        def index_document(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.IndexDocumentProperty"]]:
            '''
            :Property: indexDocument: The properties of default home page.
            '''
            result = self._values.get("index_document")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.IndexDocumentProperty"]], result)

        @builtins.property
        def routing_rules(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.RoutingRulesProperty"]]]]:
            '''
            :Property: routingRules: The list of routing rules, up to 20.
            '''
            result = self._values.get("routing_rules")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBucket.RoutingRulesProperty"]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "WebsiteConfigurationV2Property(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oss.RosBucketProps",
    jsii_struct_bases=[],
    name_mapping={
        "bucket_name": "bucketName",
        "access_control": "accessControl",
        "cors_configuration": "corsConfiguration",
        "deletion_force": "deletionForce",
        "enable_oss_hdfs_service": "enableOssHdfsService",
        "lifecycle_configuration": "lifecycleConfiguration",
        "logging_configuration": "loggingConfiguration",
        "policy": "policy",
        "redundancy_type": "redundancyType",
        "referer_configuration": "refererConfiguration",
        "resource_group_id": "resourceGroupId",
        "server_side_encryption_configuration": "serverSideEncryptionConfiguration",
        "storage_class": "storageClass",
        "tags": "tags",
        "versioning_configuration": "versioningConfiguration",
        "website_configuration_v2": "websiteConfigurationV2",
    },
)
class RosBucketProps:
    def __init__(
        self,
        *,
        bucket_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        access_control: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cors_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.CORSConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_oss_hdfs_service: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        lifecycle_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.LifecycleConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        logging_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.LoggingConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        policy: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        redundancy_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        referer_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.RefererConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        server_side_encryption_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.ServerSideEncryptionConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        storage_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
        versioning_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.VersioningConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        website_configuration_v2: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.WebsiteConfigurationV2Property, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosBucket``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucket

        :param bucket_name: 
        :param access_control: 
        :param cors_configuration: 
        :param deletion_force: 
        :param enable_oss_hdfs_service: 
        :param lifecycle_configuration: 
        :param logging_configuration: 
        :param policy: 
        :param redundancy_type: 
        :param referer_configuration: 
        :param resource_group_id: 
        :param server_side_encryption_configuration: 
        :param storage_class: 
        :param tags: 
        :param versioning_configuration: 
        :param website_configuration_v2: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__59b8e759d9a1804f51f8db67701032e1a1d434bbb8080006c3aef57ac85282b9)
            check_type(argname="argument bucket_name", value=bucket_name, expected_type=type_hints["bucket_name"])
            check_type(argname="argument access_control", value=access_control, expected_type=type_hints["access_control"])
            check_type(argname="argument cors_configuration", value=cors_configuration, expected_type=type_hints["cors_configuration"])
            check_type(argname="argument deletion_force", value=deletion_force, expected_type=type_hints["deletion_force"])
            check_type(argname="argument enable_oss_hdfs_service", value=enable_oss_hdfs_service, expected_type=type_hints["enable_oss_hdfs_service"])
            check_type(argname="argument lifecycle_configuration", value=lifecycle_configuration, expected_type=type_hints["lifecycle_configuration"])
            check_type(argname="argument logging_configuration", value=logging_configuration, expected_type=type_hints["logging_configuration"])
            check_type(argname="argument policy", value=policy, expected_type=type_hints["policy"])
            check_type(argname="argument redundancy_type", value=redundancy_type, expected_type=type_hints["redundancy_type"])
            check_type(argname="argument referer_configuration", value=referer_configuration, expected_type=type_hints["referer_configuration"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument server_side_encryption_configuration", value=server_side_encryption_configuration, expected_type=type_hints["server_side_encryption_configuration"])
            check_type(argname="argument storage_class", value=storage_class, expected_type=type_hints["storage_class"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument versioning_configuration", value=versioning_configuration, expected_type=type_hints["versioning_configuration"])
            check_type(argname="argument website_configuration_v2", value=website_configuration_v2, expected_type=type_hints["website_configuration_v2"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "bucket_name": bucket_name,
        }
        if access_control is not None:
            self._values["access_control"] = access_control
        if cors_configuration is not None:
            self._values["cors_configuration"] = cors_configuration
        if deletion_force is not None:
            self._values["deletion_force"] = deletion_force
        if enable_oss_hdfs_service is not None:
            self._values["enable_oss_hdfs_service"] = enable_oss_hdfs_service
        if lifecycle_configuration is not None:
            self._values["lifecycle_configuration"] = lifecycle_configuration
        if logging_configuration is not None:
            self._values["logging_configuration"] = logging_configuration
        if policy is not None:
            self._values["policy"] = policy
        if redundancy_type is not None:
            self._values["redundancy_type"] = redundancy_type
        if referer_configuration is not None:
            self._values["referer_configuration"] = referer_configuration
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if server_side_encryption_configuration is not None:
            self._values["server_side_encryption_configuration"] = server_side_encryption_configuration
        if storage_class is not None:
            self._values["storage_class"] = storage_class
        if tags is not None:
            self._values["tags"] = tags
        if versioning_configuration is not None:
            self._values["versioning_configuration"] = versioning_configuration
        if website_configuration_v2 is not None:
            self._values["website_configuration_v2"] = website_configuration_v2

    @builtins.property
    def bucket_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: bucketName: bucket name.
        '''
        result = self._values.get("bucket_name")
        assert result is not None, "Required property 'bucket_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def access_control(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: accessControl: The access control list.
        '''
        result = self._values.get("access_control")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cors_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBucket.CORSConfigurationProperty]]:
        '''
        :Property: corsConfiguration: Rules that define cross-origin resource sharing of objects in this bucket.
        '''
        result = self._values.get("cors_configuration")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBucket.CORSConfigurationProperty]], result)

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deletionForce: Whether force delete the relative objects in the bucket. Default value is false.
        '''
        result = self._values.get("deletion_force")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_oss_hdfs_service(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableOssHdfsService: Whether enable OSS-HDFS service.
        **Note**: Once it's enabled, it can't be disabled again.
        '''
        result = self._values.get("enable_oss_hdfs_service")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def lifecycle_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBucket.LifecycleConfigurationProperty]]:
        '''
        :Property: lifecycleConfiguration: Rules that define how oss bucket manages objects during their lifetime.
        '''
        result = self._values.get("lifecycle_configuration")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBucket.LifecycleConfigurationProperty]], result)

    @builtins.property
    def logging_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBucket.LoggingConfigurationProperty]]:
        '''
        :Property: loggingConfiguration: Settings that defines where logs are stored.
        '''
        result = self._values.get("logging_configuration")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBucket.LoggingConfigurationProperty]], result)

    @builtins.property
    def policy(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: policy: Bucket policy
        '''
        result = self._values.get("policy")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def redundancy_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        redundancyType: Specifies the data disaster recovery type of the storage space. The value range is as follows:
        LRS (default): Local redundant LRS stores your data redundantly on different storage devices in the same availability zone, and can support data loss and normal access even when two storage devices are damaged concurrently.
        ZRS: Intra-city redundant ZRS adopts a data redundancy storage mechanism in multiple availability zones (AZ), and stores user data redundantly in multiple availability zones in the same region. When an availability zone is unavailable, normal access to data can still be guaranteed.
        '''
        result = self._values.get("redundancy_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def referer_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBucket.RefererConfigurationProperty]]:
        '''
        :Property: refererConfiguration: undefined
        '''
        result = self._values.get("referer_configuration")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBucket.RefererConfigurationProperty]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The resource group id.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def server_side_encryption_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBucket.ServerSideEncryptionConfigurationProperty]]:
        '''
        :Property: serverSideEncryptionConfiguration: Specifies the bucket used to store the server-side encryption rule.
        '''
        result = self._values.get("server_side_encryption_configuration")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBucket.ServerSideEncryptionConfigurationProperty]], result)

    @builtins.property
    def storage_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: storageClass: Specifies the storage class of the bucket. Default is "Standard".
        '''
        result = self._values.get("storage_class")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: tags: Bucket tags in k-v pairs format.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def versioning_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBucket.VersioningConfigurationProperty]]:
        '''
        :Property: versioningConfiguration: A state of versioning
        '''
        result = self._values.get("versioning_configuration")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBucket.VersioningConfigurationProperty]], result)

    @builtins.property
    def website_configuration_v2(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBucket.WebsiteConfigurationV2Property]]:
        '''
        :Property: websiteConfigurationV2: Website configuration.
        '''
        result = self._values.get("website_configuration_v2")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBucket.WebsiteConfigurationV2Property]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosBucketProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDirectory(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oss.RosDirectory",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::OSS::Directory``, which is used to create a directory for a specified bucket.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Directory`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-directory
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDirectoryProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d9120c9e4ae48c332de0f0d5c7e64d12ce0b680fe06cccd6edd551882d6d84a3)
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
            type_hints = typing.get_type_hints(_typecheckingstub__3f3c66bb9e7962a2837b7e713cf48b8172d52576d6fc4bdeb0643901a5c96cf0)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrBucketName")
    def attr_bucket_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BucketName: The name of Bucket
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBucketName"))

    @builtins.property
    @jsii.member(jsii_name="attrDirectoryName")
    def attr_directory_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DirectoryName: The name of Directory
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDirectoryName"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="bucketName")
    def bucket_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: bucketName: bucket name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "bucketName"))

    @bucket_name.setter
    def bucket_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__094b93b571c4fee2408fd6d4435fbe19aad5738b05b52d2a3ece89d1a81b3751)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bucketName", value)

    @builtins.property
    @jsii.member(jsii_name="directoryName")
    def directory_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: directoryName: Directory name
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "directoryName"))

    @directory_name.setter
    def directory_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cb5844ea4373044ae1fffcaf95f7993c7f6c19adbaf41b7b233703e8d60351f9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "directoryName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bb939ab5aa6986433f52a3f0c9ae830f8a146d4a625e735f03a181c6d6866526)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="deletionForce")
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deletionForce: Whether force delete the relative objects in the directory. Default value is false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "deletionForce"))

    @deletion_force.setter
    def deletion_force(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c0f8556b8eff48addd8855753113aad9c6a294840940974db9a7c78e314648a1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deletionForce", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oss.RosDirectoryProps",
    jsii_struct_bases=[],
    name_mapping={
        "bucket_name": "bucketName",
        "directory_name": "directoryName",
        "deletion_force": "deletionForce",
    },
)
class RosDirectoryProps:
    def __init__(
        self,
        *,
        bucket_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        directory_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosDirectory``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-directory

        :param bucket_name: 
        :param directory_name: 
        :param deletion_force: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__850be1f972b25386682ff2233242a3681ea732ca5e68445c34d7dd16e0a6151e)
            check_type(argname="argument bucket_name", value=bucket_name, expected_type=type_hints["bucket_name"])
            check_type(argname="argument directory_name", value=directory_name, expected_type=type_hints["directory_name"])
            check_type(argname="argument deletion_force", value=deletion_force, expected_type=type_hints["deletion_force"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "bucket_name": bucket_name,
            "directory_name": directory_name,
        }
        if deletion_force is not None:
            self._values["deletion_force"] = deletion_force

    @builtins.property
    def bucket_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: bucketName: bucket name.
        '''
        result = self._values.get("bucket_name")
        assert result is not None, "Required property 'bucket_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def directory_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: directoryName: Directory name
        '''
        result = self._values.get("directory_name")
        assert result is not None, "Required property 'directory_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deletionForce: Whether force delete the relative objects in the directory. Default value is false.
        '''
        result = self._values.get("deletion_force")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDirectoryProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDomain(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oss.RosDomain",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::OSS::Domain``, which is used to bind a custom domain name.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Domain`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-domain
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
            type_hints = typing.get_type_hints(_typecheckingstub__b5f092cad0d6a0a777305c359f4ebf6ee37871b961c3f80ea31ce881d6223644)
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
            type_hints = typing.get_type_hints(_typecheckingstub__b50547bb8875dbb25f224523624d75fcec3b2709f5d7dee53b700524d8521ea4)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrBucketName")
    def attr_bucket_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BucketName: The name of Bucket
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBucketName"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DomainName: The custom domain name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomainName"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="bucketName")
    def bucket_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: bucketName: bucket name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "bucketName"))

    @bucket_name.setter
    def bucket_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d40c2ccb7fa9acbbe891068ca8b87a965fded1f87f3428299438d0ce8afa6aa8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bucketName", value)

    @builtins.property
    @jsii.member(jsii_name="domainName")
    def domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: domainName: Domain name
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "domainName"))

    @domain_name.setter
    def domain_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5cc953f8996caf9c1193b9511198d98efb9ac9857d092f5c61d10673374666eb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "domainName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__adbc441337559cb44b30e2dcd17f607bb2f59196a53192cb66f265d5d1eb63aa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oss.RosDomainProps",
    jsii_struct_bases=[],
    name_mapping={"bucket_name": "bucketName", "domain_name": "domainName"},
)
class RosDomainProps:
    def __init__(
        self,
        *,
        bucket_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosDomain``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-domain

        :param bucket_name: 
        :param domain_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d153c1ee543a64c26da9ae81a2a61748f9ce2a429ecc474e513b9932e3938aec)
            check_type(argname="argument bucket_name", value=bucket_name, expected_type=type_hints["bucket_name"])
            check_type(argname="argument domain_name", value=domain_name, expected_type=type_hints["domain_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "bucket_name": bucket_name,
            "domain_name": domain_name,
        }

    @builtins.property
    def bucket_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: bucketName: bucket name.
        '''
        result = self._values.get("bucket_name")
        assert result is not None, "Required property 'bucket_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: domainName: Domain name
        '''
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDomainProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosObjectAcl(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oss.RosObjectAcl",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::OSS::ObjectAcl``, which is used to modify the access control list (ACL) of an Object Storage Service (OSS) object.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ObjectAcl`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-objectacl
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosObjectAclProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dc109fa8c24f6dc389764378d612836e4275e7f549d972b097a6a1d592e4ba63)
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
            type_hints = typing.get_type_hints(_typecheckingstub__33f01656b8b2f44ab41f30be5093470e0ec02d942d7ee4fa26e2c59ab66b7bf7)
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
    @jsii.member(jsii_name="bucket")
    def bucket(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: bucket: Bucket name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "bucket"))

    @bucket.setter
    def bucket(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c6f3bfa1bc56147e7b83b3c833462c96aca23c53cf033cb66d6ca427d77b8721)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bucket", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6d8fc85fbbdf17b7d543a3f79cc3150541e360aa5734bd97c64d1af29ba5f08d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="objectAcl")
    def object_acl(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: objectAcl: Object acl.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "objectAcl"))

    @object_acl.setter
    def object_acl(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__30d4542d3377413a29c6e0c227a0e083e75efb70019eb43f6bb0170b42ff6706)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "objectAcl", value)

    @builtins.property
    @jsii.member(jsii_name="objectKey")
    def object_key(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: objectKey: Object key.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "objectKey"))

    @object_key.setter
    def object_key(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2f10b2b3fcaa3f78283f44b29c06d3cb157f3cfc87fa2e38bf7cf5f533850ede)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "objectKey", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oss.RosObjectAclProps",
    jsii_struct_bases=[],
    name_mapping={
        "bucket": "bucket",
        "object_acl": "objectAcl",
        "object_key": "objectKey",
    },
)
class RosObjectAclProps:
    def __init__(
        self,
        *,
        bucket: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        object_acl: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        object_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosObjectAcl``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-objectacl

        :param bucket: 
        :param object_acl: 
        :param object_key: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e691ba75458f52783139e7ec0e3adbb5f1c4f528ee4117b9b0ce9e27bf3289e8)
            check_type(argname="argument bucket", value=bucket, expected_type=type_hints["bucket"])
            check_type(argname="argument object_acl", value=object_acl, expected_type=type_hints["object_acl"])
            check_type(argname="argument object_key", value=object_key, expected_type=type_hints["object_key"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "bucket": bucket,
            "object_acl": object_acl,
            "object_key": object_key,
        }

    @builtins.property
    def bucket(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: bucket: Bucket name.
        '''
        result = self._values.get("bucket")
        assert result is not None, "Required property 'bucket' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def object_acl(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: objectAcl: Object acl.
        '''
        result = self._values.get("object_acl")
        assert result is not None, "Required property 'object_acl' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def object_key(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: objectKey: Object key.
        '''
        result = self._values.get("object_key")
        assert result is not None, "Required property 'object_key' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosObjectAclProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosWebsite(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oss.RosWebsite",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::OSS::Website``, which is used to configure static website hosting and redirection rules for an Object Storage Service (OSS) bucket.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Website`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-website
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosWebsiteProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__864b8f1438804010986c50714a2f3a53186c56fb1489639572dfa08e0c56e425)
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
            type_hints = typing.get_type_hints(_typecheckingstub__6e46af552559e2dd30bd4f2a00dd8c0a9e1fa7f9d004cc1a8c31c4e530397115)
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
    @jsii.member(jsii_name="bucketName")
    def bucket_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: bucketName: Bucket name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "bucketName"))

    @bucket_name.setter
    def bucket_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1a3c6379525eaf895c3d179cadd47e3f63ad77dd1273bd65ce62f9f3880d7d89)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bucketName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d7dcac16f20124d6a1bb2c1ce4aacab4a46cd5260055f79cafb682a3389a3a5a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="websiteConfiguration")
    def website_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosWebsite.WebsiteConfigurationProperty"]]:
        '''
        :Property: websiteConfiguration: Website configuration.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosWebsite.WebsiteConfigurationProperty"]], jsii.get(self, "websiteConfiguration"))

    @website_configuration.setter
    def website_configuration(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosWebsite.WebsiteConfigurationProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__41dccf22f02e657832f348ac50e84c7443b58479387ccfd4ae2f248dcfab3869)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "websiteConfiguration", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-oss.RosWebsite.ConditionProperty",
        jsii_struct_bases=[],
        name_mapping={
            "http_error_code_returned_equals": "httpErrorCodeReturnedEquals",
            "include_headers": "includeHeaders",
            "key_prefix_equals": "keyPrefixEquals",
            "key_suffix_equals": "keySuffixEquals",
        },
    )
    class ConditionProperty:
        def __init__(
            self,
            *,
            http_error_code_returned_equals: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            include_headers: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosWebsite.IncludeHeadersProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            key_prefix_equals: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            key_suffix_equals: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param http_error_code_returned_equals: 
            :param include_headers: 
            :param key_prefix_equals: 
            :param key_suffix_equals: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__886a61ecd352f282c303a1619b327dc07d9a560d6c0bbdcdafab52e5cdbe444f)
                check_type(argname="argument http_error_code_returned_equals", value=http_error_code_returned_equals, expected_type=type_hints["http_error_code_returned_equals"])
                check_type(argname="argument include_headers", value=include_headers, expected_type=type_hints["include_headers"])
                check_type(argname="argument key_prefix_equals", value=key_prefix_equals, expected_type=type_hints["key_prefix_equals"])
                check_type(argname="argument key_suffix_equals", value=key_suffix_equals, expected_type=type_hints["key_suffix_equals"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if http_error_code_returned_equals is not None:
                self._values["http_error_code_returned_equals"] = http_error_code_returned_equals
            if include_headers is not None:
                self._values["include_headers"] = include_headers
            if key_prefix_equals is not None:
                self._values["key_prefix_equals"] = key_prefix_equals
            if key_suffix_equals is not None:
                self._values["key_suffix_equals"] = key_suffix_equals

        @builtins.property
        def http_error_code_returned_equals(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: httpErrorCodeReturnedEquals: When accessing the specified Object, this status must be returned to match this rule. This field must be 404 when the jump rule is mirror-back to the source type.
            '''
            result = self._values.get("http_error_code_returned_equals")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def include_headers(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosWebsite.IncludeHeadersProperty"]]]]:
            '''
            :Property: includeHeaders: This rule will only match if the request contains the specified Header and the value is the specified value. Up to 10.
            '''
            result = self._values.get("include_headers")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosWebsite.IncludeHeadersProperty"]]]], result)

        @builtins.property
        def key_prefix_equals(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: keyPrefixEquals: The prefix of the Object name to be matched.
            '''
            result = self._values.get("key_prefix_equals")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def key_suffix_equals(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: keySuffixEquals: The suffix of the Object name to be matched.
            '''
            result = self._values.get("key_suffix_equals")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ConditionProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-oss.RosWebsite.ErrorDocumentProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "http_status": "httpStatus"},
    )
    class ErrorDocumentProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            http_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param http_status: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__349e7463c751403c3e8f225ad251f71b2d63b33731d5b481793c13bb11def736)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument http_status", value=http_status, expected_type=type_hints["http_status"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "key": key,
            }
            if http_status is not None:
                self._values["http_status"] = http_status

        @builtins.property
        def key(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            key: The default error page.
            When an error page is specified, if the accessed Object does not exist, this error page is returned.
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def http_status(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: httpStatus: The HTTP status code of the error page. Valid values: 200, 404 (default).
            '''
            result = self._values.get("http_status")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ErrorDocumentProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-oss.RosWebsite.IncludeHeadersProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "equals_to": "equalsTo"},
    )
    class IncludeHeadersProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            equals_to: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param equals_to: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__850cd71b1a65dcf37577a433c8d5e1914819aa6fa30d10c84f128f999941d467)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument equals_to", value=equals_to, expected_type=type_hints["equals_to"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "key": key,
            }
            if equals_to is not None:
                self._values["equals_to"] = equals_to

        @builtins.property
        def key(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: key: The name of the header.
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def equals_to(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: equalsTo: The value of the header.
            '''
            result = self._values.get("equals_to")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "IncludeHeadersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-oss.RosWebsite.IndexDocumentProperty",
        jsii_struct_bases=[],
        name_mapping={
            "suffix": "suffix",
            "support_sub_dir": "supportSubDir",
            "type": "type",
        },
    )
    class IndexDocumentProperty:
        def __init__(
            self,
            *,
            suffix: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            support_sub_dir: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param suffix: 
            :param support_sub_dir: 
            :param type: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__536b062d448d3fabd2c02db258eed887f431e71853e4b845c0fc57243f5293d3)
                check_type(argname="argument suffix", value=suffix, expected_type=type_hints["suffix"])
                check_type(argname="argument support_sub_dir", value=support_sub_dir, expected_type=type_hints["support_sub_dir"])
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "suffix": suffix,
            }
            if support_sub_dir is not None:
                self._values["support_sub_dir"] = support_sub_dir
            if type is not None:
                self._values["type"] = type

        @builtins.property
        def suffix(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            suffix: Default home page.
            After setting the default home page, if you visit an Object ending with a forward slash (/), OSS will return to this default home page.
            '''
            result = self._values.get("suffix")
            assert result is not None, "Required property 'suffix' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def support_sub_dir(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            supportSubDir: Whether to jump to the default home page of a subdirectory when accessing it. The range is as follows:

            - true: Go to the default home page in a subdirectory.
            - false (default) : Instead of going to the default home page in a subdirectory, go to the default home page in the root directory.
            Assume that the default home page for the index. The HTML, to access bucket.oss-cn-hangzhou.aliyuncs.com/subdir/, if set SupportSubDir to false, Then go to bucket.oss-cn-hangzhou.aliyuncs.com/index.html; If set SupportSubDir is true, then transferred to the bucket.oss-cn-hangzhou.aliyuncs.com/subdir/index.html.
            '''
            result = self._values.get("support_sub_dir")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            type: Behavior when an Object that ends with a non-forward slash (/) and does not exist is accessed after setting the default home page. It only takes effect when SupportSubDir is set to true, and it takes effect after RoutingRule and before ErrorFile.
            Assume that the default home page for the index. The HTML, to access the file path for bucket.oss-cn-hangzhou.aliyuncs.com/abc, and ABC this Object does not exist, at this moment, in different values corresponding to the Type of behavior is as follows:

            - 0 (default) : Check if abc/index.html exists (Object + forward slash (/) + home page) and return 302 with the URL code of /abc/ as Location header (forward slash (/) + Object + forward slash (/)). If it doesn't, it will return 404 and keep checking ErrorFile.
            - 1: Directly return 404, error NoSuchKey, continue to check ErrorFile.
            - 2: Check if abc/index.html exists and return the contents of the Object if it does. If it doesn't, it will return 404 and keep checking ErrorFile.
            '''
            result = self._values.get("type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "IndexDocumentProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-oss.RosWebsite.MirrorHeadersProperty",
        jsii_struct_bases=[],
        name_mapping={
            "pass_": "pass",
            "pass_all": "passAll",
            "remove": "remove",
            "sets": "sets",
        },
    )
    class MirrorHeadersProperty:
        def __init__(
            self,
            *,
            pass_: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            pass_all: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            remove: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            sets: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosWebsite.SetsProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        ) -> None:
            '''
            :param pass_: 
            :param pass_all: 
            :param remove: 
            :param sets: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__73903244d5f43c99b9e5ec04775da22fccac21838d10aca4640f3adf4fe3a5ab)
                check_type(argname="argument pass_", value=pass_, expected_type=type_hints["pass_"])
                check_type(argname="argument pass_all", value=pass_all, expected_type=type_hints["pass_all"])
                check_type(argname="argument remove", value=remove, expected_type=type_hints["remove"])
                check_type(argname="argument sets", value=sets, expected_type=type_hints["sets"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if pass_ is not None:
                self._values["pass_"] = pass_
            if pass_all is not None:
                self._values["pass_all"] = pass_all
            if remove is not None:
                self._values["remove"] = remove
            if sets is not None:
                self._values["sets"] = sets

        @builtins.property
        def pass_(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property:

            pass: Pass through the specified Header to the source. This only works if RedirectType is set to Mirror.
            Each Header is at most 1,024 bytes long and has the character sets 0-9, a-z, A-Z, and dash (-).
            A maximum of 10 can be specified for this field.
            '''
            result = self._values.get("pass_")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def pass_all(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            passAll: Whether to pass through other headers to the source except the following headers. This only works if RedirectType is set to Mirror.

            - content-length, authorization2, authorization, range, date and other headers
            - Headers starting with oss-/x-oss-/x-drs-
            Default value: false
            '''
            result = self._values.get("pass_all")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def remove(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property:

            remove: Disables pass-through of the specified Header to the source. This only works if RedirectType is set to Mirror.
            Each Header is at most 1,024 bytes long and has the character sets 0-9, a-z, A-Z, and dash (-).
            A maximum of 10 can be specified for this field.
            '''
            result = self._values.get("remove")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def sets(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosWebsite.SetsProperty"]]]]:
            '''
            :Property:

            sets: Set a Header to the origin, and it will be set when the request is sent back to the origin, regardless of whether the specified headers are included in the request. This only works if RedirectType is set to Mirror.
            Up to 10 groups can be specified for this container.
            '''
            result = self._values.get("sets")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosWebsite.SetsProperty"]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "MirrorHeadersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-oss.RosWebsite.RedirectProperty",
        jsii_struct_bases=[],
        name_mapping={
            "redirect_type": "redirectType",
            "enable_replace_prefix": "enableReplacePrefix",
            "host_name": "hostName",
            "http_redirect_code": "httpRedirectCode",
            "mirror_check_md5": "mirrorCheckMd5",
            "mirror_follow_redirect": "mirrorFollowRedirect",
            "mirror_headers": "mirrorHeaders",
            "mirror_pass_query_string": "mirrorPassQueryString",
            "mirror_url": "mirrorUrl",
            "pass_query_string": "passQueryString",
            "protocol": "protocol",
            "replace_key_prefix_with": "replaceKeyPrefixWith",
            "replace_key_with": "replaceKeyWith",
        },
    )
    class RedirectProperty:
        def __init__(
            self,
            *,
            redirect_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            enable_replace_prefix: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            host_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            http_redirect_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            mirror_check_md5: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            mirror_follow_redirect: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            mirror_headers: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosWebsite.MirrorHeadersProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            mirror_pass_query_string: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            mirror_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            pass_query_string: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            replace_key_prefix_with: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            replace_key_with: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param redirect_type: 
            :param enable_replace_prefix: 
            :param host_name: 
            :param http_redirect_code: 
            :param mirror_check_md5: 
            :param mirror_follow_redirect: 
            :param mirror_headers: 
            :param mirror_pass_query_string: 
            :param mirror_url: 
            :param pass_query_string: 
            :param protocol: 
            :param replace_key_prefix_with: 
            :param replace_key_with: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__d27e25c2cbdcca0be61d828b431f9b73acb5c4e537390ea15077faceea90d573)
                check_type(argname="argument redirect_type", value=redirect_type, expected_type=type_hints["redirect_type"])
                check_type(argname="argument enable_replace_prefix", value=enable_replace_prefix, expected_type=type_hints["enable_replace_prefix"])
                check_type(argname="argument host_name", value=host_name, expected_type=type_hints["host_name"])
                check_type(argname="argument http_redirect_code", value=http_redirect_code, expected_type=type_hints["http_redirect_code"])
                check_type(argname="argument mirror_check_md5", value=mirror_check_md5, expected_type=type_hints["mirror_check_md5"])
                check_type(argname="argument mirror_follow_redirect", value=mirror_follow_redirect, expected_type=type_hints["mirror_follow_redirect"])
                check_type(argname="argument mirror_headers", value=mirror_headers, expected_type=type_hints["mirror_headers"])
                check_type(argname="argument mirror_pass_query_string", value=mirror_pass_query_string, expected_type=type_hints["mirror_pass_query_string"])
                check_type(argname="argument mirror_url", value=mirror_url, expected_type=type_hints["mirror_url"])
                check_type(argname="argument pass_query_string", value=pass_query_string, expected_type=type_hints["pass_query_string"])
                check_type(argname="argument protocol", value=protocol, expected_type=type_hints["protocol"])
                check_type(argname="argument replace_key_prefix_with", value=replace_key_prefix_with, expected_type=type_hints["replace_key_prefix_with"])
                check_type(argname="argument replace_key_with", value=replace_key_with, expected_type=type_hints["replace_key_with"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "redirect_type": redirect_type,
            }
            if enable_replace_prefix is not None:
                self._values["enable_replace_prefix"] = enable_replace_prefix
            if host_name is not None:
                self._values["host_name"] = host_name
            if http_redirect_code is not None:
                self._values["http_redirect_code"] = http_redirect_code
            if mirror_check_md5 is not None:
                self._values["mirror_check_md5"] = mirror_check_md5
            if mirror_follow_redirect is not None:
                self._values["mirror_follow_redirect"] = mirror_follow_redirect
            if mirror_headers is not None:
                self._values["mirror_headers"] = mirror_headers
            if mirror_pass_query_string is not None:
                self._values["mirror_pass_query_string"] = mirror_pass_query_string
            if mirror_url is not None:
                self._values["mirror_url"] = mirror_url
            if pass_query_string is not None:
                self._values["pass_query_string"] = pass_query_string
            if protocol is not None:
                self._values["protocol"] = protocol
            if replace_key_prefix_with is not None:
                self._values["replace_key_prefix_with"] = replace_key_prefix_with
            if replace_key_with is not None:
                self._values["replace_key_with"] = replace_key_with

        @builtins.property
        def redirect_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            redirectType: Specifies the type of jump. The range is as follows:

            - Mirror: Mirror back to the source.
            - External: External branch, i.e. OSS will return a 3xx request specifying the branch to another address.
            - AliCDN: Aliyun CDN jump, mainly used for the CDN of Aliyun. Unlike External, OSS adds an additional Header. After identifying this Header, Aliyun CDN will actively jump to the specified address and return the obtained data to the user instead of returning the 3xx jump request to the user.
            '''
            result = self._values.get("redirect_type")
            assert result is not None, "Required property 'redirect_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def enable_replace_prefix(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            enableReplacePrefix: If you set this field to true, the prefix of Object is replaced with the value specified by ReplaceKeyPrefixWith. If this field is not specified or is empty, it means that the Object prefix is truncated.
            Notes: This field cannot be set to true when the ReplaceKeyWith field is not null.
            Default value: false
            '''
            result = self._values.get("enable_replace_prefix")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def host_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            hostName: The domain name of the jump, the domain name should conform to the domain name specification.
            If the file you want to access is test, the Protocol is set to https, and the Hostname is set to example.com, the Location header is https://example.com/test.
            '''
            result = self._values.get("host_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def http_redirect_code(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            httpRedirectCode: Status code returned when jumping. Only if RedirectType is set to External or AliCDN.The default value is 302.
            Value: 301, 302, 307
            '''
            result = self._values.get("http_redirect_code")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def mirror_check_md5(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            mirrorCheckMd5: Whether to check MD5 back to the source body. This only works if RedirectType is set to Mirror.
            When MirrorCheckMd5 is set to true, and the response returned by the source contains the Content-Md5 Header, OSS checks whether the pulled data MD5 matches this header, if not, it is not saved on OSS.
            Default value: false
            '''
            result = self._values.get("mirror_check_md5")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def mirror_follow_redirect(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            mirrorFollowRedirect: If the result obtained by mirriling back to the source is 3xx, whether to continue to jump to the specified Location to obtain data. This only works if RedirectType is set to Mirror.
            For example, when we mirror back to the source, the source returns a 302 with Location specified.

            - If set to true, OSS will continue to request the Location.
            It can jump up to 10 times, and if it jumps more than 10 times, it fails to return the mirror back to the source.
            - If set to false, OSS will return 302 and pass through the Location.
            Default value: true
            '''
            result = self._values.get("mirror_follow_redirect")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def mirror_headers(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosWebsite.MirrorHeadersProperty"]]:
            '''
            :Property: mirrorHeaders: Specifies the Header that is mirrored back to the source. This only works if RedirectType is set to Mirror.
            '''
            result = self._values.get("mirror_headers")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosWebsite.MirrorHeadersProperty"]], result)

        @builtins.property
        def mirror_pass_query_string(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            mirrorPassQueryString: Same as PassQueryString, but takes precedence over PassQueryString. This only works if RedirectType is set to Mirror.
            Default value: false
            '''
            result = self._values.get("mirror_pass_query_string")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def mirror_url(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            mirrorUrl: Mirror back to the source station address of the source. This only works if RedirectType is set to Mirror.
            The origin URL must begin with http:// or https:// and end with a forward slash (/), which OSS will follow with the Object name to form the return URL.
            Name to access the Object myobject, for example, if you specify this to http://example.com/, then back to the source URL for http://example.com/myobject, if you specify this to http://example.com/dir1/, Back to the source URL as http://example.com/dir1/myobject.
            '''
            result = self._values.get("mirror_url")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def pass_query_string(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            passQueryString: Whether to carry request parameters when performing a jump or mirroring back to the source rule.
            Does the user request OSS with the request parameters? a=b&c=d, and set PassQueryString to true, if the rule is a 302 jump, then this request parameter is added in the Location header of the jump. For example, Location:example.com?a=b&c=d, the jump type is mirror back to the source, then this request parameter will also be carried in the initiated back to the source request.
            Valid values: true, false (default)
            '''
            result = self._values.get("pass_query_string")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def protocol(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            protocol: Protocol when jumping. Only if RedirectType is set to External or AliCDN.
            If the file you want to access is test, set to go to example.com, and set Protocol to https, the Location header is https://example.com/test.
            Value: http, https
            '''
            result = self._values.get("protocol")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def replace_key_prefix_with(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            replaceKeyPrefixWith: This value will be substituted for the prefix of the Object name in Redirect. If the prefix is empty, the string is inserted before the Object name.
            Notes: Only ReplaceKeyWith or ReplaceKeyPrefixWith nodes are allowed.
            Hypothesis to access the Object for ABC/test. TXT, if set KeyPrefixEquals for ABC /, ReplaceKeyPrefixWith for def /, then the Location head to http://example.com/def/test.txt.
            '''
            result = self._values.get("replace_key_prefix_with")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def replace_key_with(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            replaceKeyWith: With Redirect, the Object name is replaced with the value specified by ReplaceKeyWith, which allows you to set variables. The currently supported variable is ${key}, which represents the name of the Object in the request.
            Suppose to access the Object for the test, if set ReplaceKeyWith to prefix/${key}. The suffix, is the Location head to http://example.com/prefix/test.suffix.
            '''
            result = self._values.get("replace_key_with")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "RedirectProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-oss.RosWebsite.RoutingRulesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "condition": "condition",
            "redirect": "redirect",
            "rule_number": "ruleNumber",
        },
    )
    class RoutingRulesProperty:
        def __init__(
            self,
            *,
            condition: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosWebsite.ConditionProperty", typing.Dict[builtins.str, typing.Any]]],
            redirect: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosWebsite.RedirectProperty", typing.Dict[builtins.str, typing.Any]]],
            rule_number: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param condition: 
            :param redirect: 
            :param rule_number: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__d0d09ce2cbc2262b7e8f1d8bcae5675f48c06cff556cc97b5d9d83c71a1e628e)
                check_type(argname="argument condition", value=condition, expected_type=type_hints["condition"])
                check_type(argname="argument redirect", value=redirect, expected_type=type_hints["redirect"])
                check_type(argname="argument rule_number", value=rule_number, expected_type=type_hints["rule_number"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "condition": condition,
                "redirect": redirect,
                "rule_number": rule_number,
            }

        @builtins.property
        def condition(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosWebsite.ConditionProperty"]:
            '''
            :Property:

            condition: Conditions for matching.
            This rule is executed if the specified items are all satisfied. A match is only considered if all conditions for each node under this container are met.
            '''
            result = self._values.get("condition")
            assert result is not None, "Required property 'condition' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosWebsite.ConditionProperty"], result)

        @builtins.property
        def redirect(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosWebsite.RedirectProperty"]:
            '''
            :Property: redirect: Specifies the action to be performed when this rule is matched.
            '''
            result = self._values.get("redirect")
            assert result is not None, "Required property 'redirect' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosWebsite.RedirectProperty"], result)

        @builtins.property
        def rule_number(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: ruleNumber: Match and execute the sequence number of the RoutingRule, OSS will match the rules in turn according to this sequence number. If the match is successful, this rule is executed and no subsequent rules are executed.
            '''
            result = self._values.get("rule_number")
            assert result is not None, "Required property 'rule_number' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "RoutingRulesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-oss.RosWebsite.SetsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class SetsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__d561b87c92b5a020313b13d1d5ca46957dcc5d1f81c61c1a4d6ed850822f45ef)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "key": key,
                "value": value,
            }

        @builtins.property
        def key(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: key: Sets the Header key to a maximum of 1024 bytes in the same character set as Pass. This only works if RedirectType is set to Mirror.
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: value: Set the value of the Header to a maximum of 1024 bytes without \\r\\n. This only works if RedirectType is set to Mirror.
            '''
            result = self._values.get("value")
            assert result is not None, "Required property 'value' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SetsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-oss.RosWebsite.WebsiteConfigurationProperty",
        jsii_struct_bases=[],
        name_mapping={
            "error_document": "errorDocument",
            "index_document": "indexDocument",
            "routing_rules": "routingRules",
        },
    )
    class WebsiteConfigurationProperty:
        def __init__(
            self,
            *,
            error_document: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosWebsite.ErrorDocumentProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            index_document: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosWebsite.IndexDocumentProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            routing_rules: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosWebsite.RoutingRulesProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        ) -> None:
            '''
            :param error_document: 
            :param index_document: 
            :param routing_rules: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__5c9256bc2b17189e8a62c19890cfe11d43f76f6db74277ea5076bcb4c9f3c819)
                check_type(argname="argument error_document", value=error_document, expected_type=type_hints["error_document"])
                check_type(argname="argument index_document", value=index_document, expected_type=type_hints["index_document"])
                check_type(argname="argument routing_rules", value=routing_rules, expected_type=type_hints["routing_rules"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if error_document is not None:
                self._values["error_document"] = error_document
            if index_document is not None:
                self._values["index_document"] = index_document
            if routing_rules is not None:
                self._values["routing_rules"] = routing_rules

        @builtins.property
        def error_document(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosWebsite.ErrorDocumentProperty"]]:
            '''
            :Property: errorDocument: The properties of default error page.
            '''
            result = self._values.get("error_document")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosWebsite.ErrorDocumentProperty"]], result)

        @builtins.property
        def index_document(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosWebsite.IndexDocumentProperty"]]:
            '''
            :Property: indexDocument: The properties of default home page.
            '''
            result = self._values.get("index_document")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosWebsite.IndexDocumentProperty"]], result)

        @builtins.property
        def routing_rules(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosWebsite.RoutingRulesProperty"]]]]:
            '''
            :Property: routingRules: The list of routing rules, up to 20.
            '''
            result = self._values.get("routing_rules")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosWebsite.RoutingRulesProperty"]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "WebsiteConfigurationProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oss.RosWebsiteProps",
    jsii_struct_bases=[],
    name_mapping={
        "bucket_name": "bucketName",
        "website_configuration": "websiteConfiguration",
    },
)
class RosWebsiteProps:
    def __init__(
        self,
        *,
        bucket_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        website_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosWebsite.WebsiteConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosWebsite``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-website

        :param bucket_name: 
        :param website_configuration: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__46ebe31ff40b3ca30b9166c4266b70ce1837aad894f005813dc616ec98151b46)
            check_type(argname="argument bucket_name", value=bucket_name, expected_type=type_hints["bucket_name"])
            check_type(argname="argument website_configuration", value=website_configuration, expected_type=type_hints["website_configuration"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "bucket_name": bucket_name,
        }
        if website_configuration is not None:
            self._values["website_configuration"] = website_configuration

    @builtins.property
    def bucket_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: bucketName: Bucket name.
        '''
        result = self._values.get("bucket_name")
        assert result is not None, "Required property 'bucket_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def website_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosWebsite.WebsiteConfigurationProperty]]:
        '''
        :Property: websiteConfiguration: Website configuration.
        '''
        result = self._values.get("website_configuration")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosWebsite.WebsiteConfigurationProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosWebsiteProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IWebsite)
class Website(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oss.Website",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::OSS::Website``, which is used to configure static website hosting and redirection rules for an Object Storage Service (OSS) bucket.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosWebsite``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-website
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["WebsiteProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__caf98e7d5d61f136d353ef32caaca4e581618b63c6ea776a37a6f69dc1862bfe)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "WebsiteProps":
        return typing.cast("WebsiteProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5fbf102220d7337f82070460cf078dd5e85460b774fc480e44b78f4e4c52af3f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__692a59bbbdd74cd8dfde86f248f5ada2eb991dd611c8c07808f5a21f2437153c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8d6b04daf596a0ef4d480381c48c3e494160d6d317586dbdf7c677dd16d875b6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-oss.WebsiteProps",
    jsii_struct_bases=[],
    name_mapping={
        "bucket_name": "bucketName",
        "website_configuration": "websiteConfiguration",
    },
)
class WebsiteProps:
    def __init__(
        self,
        *,
        bucket_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        website_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosWebsite.WebsiteConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``Website``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-website

        :param bucket_name: Property bucketName: Bucket name.
        :param website_configuration: Property websiteConfiguration: Website configuration.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1eb3861a15cb3202cc058004e789e3480d8f092aece762ae3771f65120f60149)
            check_type(argname="argument bucket_name", value=bucket_name, expected_type=type_hints["bucket_name"])
            check_type(argname="argument website_configuration", value=website_configuration, expected_type=type_hints["website_configuration"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "bucket_name": bucket_name,
        }
        if website_configuration is not None:
            self._values["website_configuration"] = website_configuration

    @builtins.property
    def bucket_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property bucketName: Bucket name.'''
        result = self._values.get("bucket_name")
        assert result is not None, "Required property 'bucket_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def website_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosWebsite.WebsiteConfigurationProperty]]:
        '''Property websiteConfiguration: Website configuration.'''
        result = self._values.get("website_configuration")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosWebsite.WebsiteConfigurationProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "WebsiteProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IBucket)
class Bucket(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oss.Bucket",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::OSS::Bucket``, which is used to create a bucket in Object Storage Service (OSS).

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosBucket``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucket
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[BucketProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__730c62484cd5b2f1b487ca1905e107626562b75756b2887a5cdd195f617b4529)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="validateBucketName")
    @builtins.classmethod
    def validate_bucket_name(cls, physical_name: builtins.str) -> None:
        '''Thrown an exception if the given bucket name is not valid.

        :param physical_name: name of the bucket.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2b1464ce9f3374036a96752dc41d4d29b9e28f0fa299122282936bf27c08da3c)
            check_type(argname="argument physical_name", value=physical_name, expected_type=type_hints["physical_name"])
        return typing.cast(None, jsii.sinvoke(cls, "validateBucketName", [physical_name]))

    @builtins.property
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainName: The public DNS name of the specified bucket.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDomainName"))

    @builtins.property
    @jsii.member(jsii_name="attrInternalDomainName")
    def attr_internal_domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InternalDomainName: The internal DNS name of the specified bucket.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInternalDomainName"))

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Name: The name of Bucket.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> BucketProps:
        return typing.cast(BucketProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7756fc53d73a69497adac3b3eef813ed97a80f8a4ab2ea8329b00bc52ee2b8f4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1c54e7b952c59e9482b53523b6463eccb970c2b6933b06f7951e3580e0e363c5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4070c676c2db8e03e891930c33b92cee65a18ff152d144ce83613a30bf35b248)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IDirectory)
class Directory(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oss.Directory",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::OSS::Directory``, which is used to create a directory for a specified bucket.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDirectory``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-directory
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[DirectoryProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c56b96bc948df5bafd30ccda11e91f12480860a8bf184df3b63d4a85b4b603d8)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrBucketName")
    def attr_bucket_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BucketName: The name of Bucket.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBucketName"))

    @builtins.property
    @jsii.member(jsii_name="attrDirectoryName")
    def attr_directory_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DirectoryName: The name of Directory.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDirectoryName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DirectoryProps:
        return typing.cast(DirectoryProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2eac822e31f0b14f0d445fcda5edcd9fb35550a0a54886dfaf08136f102fcc01)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__51e3e791fb2d0bdf654569dd7ce8a93ee24d8579014569f016d6566c6c629333)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__298c85fb6fd909790774361a86ea13d1df94e101a4660380ac15b037f121662a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IDomain)
class Domain(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-oss.Domain",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::OSS::Domain``, which is used to bind a custom domain name.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDomain``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-domain
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[DomainProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__146aa14b61658a030a56558c92a249b414a7e999717b613c98ec1b00cb1e3c98)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrBucketName")
    def attr_bucket_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BucketName: The name of Bucket.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBucketName"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainName: The custom domain name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDomainName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DomainProps:
        return typing.cast(DomainProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c2d7e8692b736cc8dbf7dee0a6ed4e275320d2ea0c9ae86afb9e11fe4bda0d43)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0e38311073c8b58de75347086e3a426e8b627724ed3e80d2b897e9cf83d39abb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__742ad1e383e99aac79692ae4615b4b3604c5b48599e3657cdb22867d54cd4421)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "Bucket",
    "BucketAttributes",
    "BucketProps",
    "Directory",
    "DirectoryProps",
    "Domain",
    "DomainProps",
    "IBucket",
    "IDirectory",
    "IDomain",
    "IObjectAcl",
    "IWebsite",
    "ObjectAcl",
    "ObjectAclProps",
    "RosBucket",
    "RosBucketProps",
    "RosDirectory",
    "RosDirectoryProps",
    "RosDomain",
    "RosDomainProps",
    "RosObjectAcl",
    "RosObjectAclProps",
    "RosWebsite",
    "RosWebsiteProps",
    "Website",
    "WebsiteProps",
    "datasource",
]

publication.publish()

# Loading modules to ensure their types are registered with the jsii runtime library
from . import datasource

def _typecheckingstub__9184223f55b99e95b82356408cffdebead93fea499d19cb4becb1c40e1520f16(
    *,
    bucket_domain_name: typing.Optional[builtins.str] = None,
    bucket_endpoint: typing.Optional[builtins.str] = None,
    bucket_name: typing.Optional[builtins.str] = None,
    bucket_website_url: typing.Optional[builtins.str] = None,
    is_website: typing.Optional[builtins.bool] = None,
    region: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2374e407bda9e563bb7cc76f82731ee58531a6858dce69684dd641441bce9b00(
    *,
    bucket_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    access_control: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cors_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.CORSConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_oss_hdfs_service: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    lifecycle_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.LifecycleConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    logging_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.LoggingConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    policy: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    redundancy_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    referer_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.RefererConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    server_side_encryption_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.ServerSideEncryptionConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    storage_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
    versioning_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.VersioningConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    website_configuration_v2: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.WebsiteConfigurationV2Property, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__df2cb970d623e337f370e0d103d5f60438c56810a3ec723aeafef623f143ae32(
    *,
    bucket_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    directory_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6159db363f2f92413d166bdeb6f6f022d6d008f9ddfaaba90df63ddf6367c29a(
    *,
    bucket_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a88914b78a3654af71d7a958640e90202587322368de62c5c6376b7e87c69048(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ObjectAclProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0e792f1fb174116eddc5223a564f90ea8ed5dc5f242bfb41f0e277e8bd44ae7a(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c30d0fd226c6b9c13882b0736098560078ead93d6d432ffb033995d37fa71f12(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__04d543decd4dee14963e4214f345c05402befc8a90920e96c846e335723079cf(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6ed4cfa392490e28309fc8acc620409be48856a8f74b8fc575ba3c73dae79e5e(
    *,
    bucket: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    object_acl: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    object_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4071028f1086ef2a8d1ef1506d63a579b2cf8d550e7156449b09a05fc4e3f7a5(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosBucketProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__187423387916f4bdc9b6d0414791fcefc13a698454c7ba1f1c671a0a67ec29a3(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7b85d300bd141c569474b2e982197f0370cf6a90f5a084bf5da62914ff2e7f06(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f0fe35927fa0b06db25165ca3f0f58e7a73b9445161186358061372e338a66eb(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__61a7738ec80ab9f9bc3aae87799219cebf02e7e8a93bf79f51e7ac53cdb9338c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8942b9978d920a7b0ecb0c7091bea6276db7f1072b4512318c407e1127f2bc06(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBucket.CORSConfigurationProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4bc0b450845bc1a61aa5d1f0fa500950865aa23e494b60bb9b94aa3586bb5677(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ae097ab9f27a9db23f521656f49e73fd8adafb3f45e12f531aba97ded51cf1d6(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d1a708471b95cf193c959db5fd0267a672a39a713774eb73818f3ad8bb750587(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBucket.LifecycleConfigurationProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8b14e50e9493b7ce387caf37c0f3d4c9159a6017d9c2cebc491dd259fd831acb(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBucket.LoggingConfigurationProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ca09f44d80ba7e55a5cdcd4f0df96878229f60761f37bf28965174af98d25c6d(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__23f4c6306b9f2a6f1bdcdd6776db4454358a7513bdc61ee2a87ac484a2399f40(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f1d1e94ba56a06821763a7f70c6e11674075a382e6256a264d0b34f44d6cb50c(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBucket.RefererConfigurationProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__82f278d2ab7e19b09646d15c71ba467b5ab79743cceae9e032615eaf8ee5e981(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9b3c5cf45dc33ed6dd434b0e13ed0c172336a9445c58baea170379ca213e86ba(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBucket.ServerSideEncryptionConfigurationProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0de248f2d8dbc2439f6ef8822746b2a449c41e402d0ab7e47cb9ec8fbd0dd9e7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__450811e87d75543a2070edc450f3db40357478ade5f5f8af9c1244b6c4b61365(
    value: typing.Optional[typing.Mapping[builtins.str, typing.Any]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6397ea1c5ea28e6509c6541ecd6007cc68a550434ac40c6843f32a2e06b82997(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBucket.VersioningConfigurationProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fb5d4db4eb9fdac8c59056b1f2b07c7bfbb71df0fda5c57ae1aa1ead634c7679(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBucket.WebsiteConfigurationV2Property]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3934ba2fbf015b5413e35819d015a9118560764281258dd4da8bb5c7869b6da9(
    *,
    created_before_date: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    days: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4563a0ce00cecd34040601f3d76b7122d55e01316e2b98bd18f8cf1561085b6c(
    *,
    cors_rule: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.CORSRuleProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    response_vary: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2f111f5c92540f1df4650c4eec6fdc4c40f1e7b7e009c96d02a6934d4944cebe(
    *,
    allowed_header: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    allowed_method: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    allowed_origin: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    expose_header: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    max_age_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__10d8239fcab7e593cf0bae6cdd04f3ab63d5ca0a5beea8548b7de11fdb2926fe(
    *,
    http_error_code_returned_equals: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    include_headers: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.IncludeHeadersProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    key_prefix_equals: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    key_suffix_equals: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c6d456a951a2a497a3ee7ee0e6809b0d10556ac29074248facb5f71547682c58(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    http_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8812eb0ed0e79f296e3e6473d1c2d52261a297caaee23a7eb38b4549f579b4fa(
    *,
    created_before_date: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    days: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    expired_object_delete_marker: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__664e9b0f9e403b654e1a22bcd07e884dad3f5a2bd13ed4312094ee671bcd7efa(
    *,
    not_: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.NotProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8255ff462f3353cef66711d89f93d5e320503d1d44848b37215bb526bc32030e(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    equals_to: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__790c9d8d0234ae7d87a72c684286b1dd71eb8748646082c928e03cffd8bd94ce(
    *,
    suffix: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    support_sub_dir: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9370c463a7de461a01f3a5f48f0eea9a1dbe46b234a420cb896bae80830dadfe(
    *,
    rule: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.RuleProperty, typing.Dict[builtins.str, typing.Any]]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d35ba80257bb3428431cf432fb831f56c919d5e5242194bf3231c95ff601786a(
    *,
    target_bucket: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    target_prefix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__22b4366918354f734f27581dd58eb37a41d87e25a251db61ccba301652214051(
    *,
    pass_: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    pass_all: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    remove: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    sets: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.SetsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__506b32571fc947635f35eacad52a0b8380226f702d986ad56910a7c36be35d62(
    *,
    prefix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tag: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e2ce27ebc06677339d9fa58055732c59d8bbe2fe382c8c4ad2f77c496220bac7(
    *,
    redirect_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    enable_replace_prefix: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    host_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    http_redirect_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mirror_check_md5: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mirror_follow_redirect: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mirror_headers: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.MirrorHeadersProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    mirror_pass_query_string: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mirror_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pass_query_string: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    replace_key_prefix_with: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    replace_key_with: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c5e6da584a1336e0b1bf4ae0c58c9c1400b896f6857c6145dff0dc1dee043462(
    *,
    allow_empty_referer: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    referer_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__64cf4ad188246dc60dac29bd8952129d641c0b0a5f71d452c376f55bff6767a2(
    *,
    condition: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.ConditionProperty, typing.Dict[builtins.str, typing.Any]]],
    redirect: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.RedirectProperty, typing.Dict[builtins.str, typing.Any]]],
    rule_number: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ca14119ad442382fb4fa579a442a8423bfd5f221e6719325d0e6ad26cacead71(
    *,
    prefix: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    abort_multipart_upload: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.AbortMultipartUploadProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    expiration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.ExpirationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    filter: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.FilterProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__21b99abd5f200ae480d6590dc1cce050cb159c64fb0fcee949e87176b5a80612(
    *,
    sse_algorithm: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    kms_master_key_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__877ae2ccc0d997df4a2e2eb10119705c53e97a8ccc1ad7bd41a6f80fd55383b0(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b8f66b3d0c710d8e5bf5c7477590933a5128c030dfb04aa0e2fcd9cd7ba851d5(
    *,
    status: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8c4f0936585f796a1de7068eb9f2201b8e29f7c9cae31ad7a5d6f9fa4e23e2bc(
    *,
    error_document: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.ErrorDocumentProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    index_document: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.IndexDocumentProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    routing_rules: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.RoutingRulesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__59b8e759d9a1804f51f8db67701032e1a1d434bbb8080006c3aef57ac85282b9(
    *,
    bucket_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    access_control: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cors_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.CORSConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_oss_hdfs_service: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    lifecycle_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.LifecycleConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    logging_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.LoggingConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    policy: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    redundancy_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    referer_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.RefererConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    server_side_encryption_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.ServerSideEncryptionConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    storage_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
    versioning_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.VersioningConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    website_configuration_v2: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBucket.WebsiteConfigurationV2Property, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d9120c9e4ae48c332de0f0d5c7e64d12ce0b680fe06cccd6edd551882d6d84a3(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDirectoryProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3f3c66bb9e7962a2837b7e713cf48b8172d52576d6fc4bdeb0643901a5c96cf0(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__094b93b571c4fee2408fd6d4435fbe19aad5738b05b52d2a3ece89d1a81b3751(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cb5844ea4373044ae1fffcaf95f7993c7f6c19adbaf41b7b233703e8d60351f9(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bb939ab5aa6986433f52a3f0c9ae830f8a146d4a625e735f03a181c6d6866526(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c0f8556b8eff48addd8855753113aad9c6a294840940974db9a7c78e314648a1(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__850be1f972b25386682ff2233242a3681ea732ca5e68445c34d7dd16e0a6151e(
    *,
    bucket_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    directory_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b5f092cad0d6a0a777305c359f4ebf6ee37871b961c3f80ea31ce881d6223644(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDomainProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b50547bb8875dbb25f224523624d75fcec3b2709f5d7dee53b700524d8521ea4(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d40c2ccb7fa9acbbe891068ca8b87a965fded1f87f3428299438d0ce8afa6aa8(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5cc953f8996caf9c1193b9511198d98efb9ac9857d092f5c61d10673374666eb(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__adbc441337559cb44b30e2dcd17f607bb2f59196a53192cb66f265d5d1eb63aa(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d153c1ee543a64c26da9ae81a2a61748f9ce2a429ecc474e513b9932e3938aec(
    *,
    bucket_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dc109fa8c24f6dc389764378d612836e4275e7f549d972b097a6a1d592e4ba63(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosObjectAclProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__33f01656b8b2f44ab41f30be5093470e0ec02d942d7ee4fa26e2c59ab66b7bf7(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c6f3bfa1bc56147e7b83b3c833462c96aca23c53cf033cb66d6ca427d77b8721(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6d8fc85fbbdf17b7d543a3f79cc3150541e360aa5734bd97c64d1af29ba5f08d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__30d4542d3377413a29c6e0c227a0e083e75efb70019eb43f6bb0170b42ff6706(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2f10b2b3fcaa3f78283f44b29c06d3cb157f3cfc87fa2e38bf7cf5f533850ede(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e691ba75458f52783139e7ec0e3adbb5f1c4f528ee4117b9b0ce9e27bf3289e8(
    *,
    bucket: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    object_acl: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    object_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__864b8f1438804010986c50714a2f3a53186c56fb1489639572dfa08e0c56e425(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosWebsiteProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6e46af552559e2dd30bd4f2a00dd8c0a9e1fa7f9d004cc1a8c31c4e530397115(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1a3c6379525eaf895c3d179cadd47e3f63ad77dd1273bd65ce62f9f3880d7d89(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d7dcac16f20124d6a1bb2c1ce4aacab4a46cd5260055f79cafb682a3389a3a5a(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__41dccf22f02e657832f348ac50e84c7443b58479387ccfd4ae2f248dcfab3869(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosWebsite.WebsiteConfigurationProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__886a61ecd352f282c303a1619b327dc07d9a560d6c0bbdcdafab52e5cdbe444f(
    *,
    http_error_code_returned_equals: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    include_headers: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosWebsite.IncludeHeadersProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    key_prefix_equals: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    key_suffix_equals: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__349e7463c751403c3e8f225ad251f71b2d63b33731d5b481793c13bb11def736(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    http_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__850cd71b1a65dcf37577a433c8d5e1914819aa6fa30d10c84f128f999941d467(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    equals_to: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__536b062d448d3fabd2c02db258eed887f431e71853e4b845c0fc57243f5293d3(
    *,
    suffix: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    support_sub_dir: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__73903244d5f43c99b9e5ec04775da22fccac21838d10aca4640f3adf4fe3a5ab(
    *,
    pass_: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    pass_all: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    remove: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    sets: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosWebsite.SetsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d27e25c2cbdcca0be61d828b431f9b73acb5c4e537390ea15077faceea90d573(
    *,
    redirect_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    enable_replace_prefix: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    host_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    http_redirect_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mirror_check_md5: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mirror_follow_redirect: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mirror_headers: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosWebsite.MirrorHeadersProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    mirror_pass_query_string: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mirror_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pass_query_string: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    replace_key_prefix_with: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    replace_key_with: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d0d09ce2cbc2262b7e8f1d8bcae5675f48c06cff556cc97b5d9d83c71a1e628e(
    *,
    condition: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosWebsite.ConditionProperty, typing.Dict[builtins.str, typing.Any]]],
    redirect: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosWebsite.RedirectProperty, typing.Dict[builtins.str, typing.Any]]],
    rule_number: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d561b87c92b5a020313b13d1d5ca46957dcc5d1f81c61c1a4d6ed850822f45ef(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5c9256bc2b17189e8a62c19890cfe11d43f76f6db74277ea5076bcb4c9f3c819(
    *,
    error_document: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosWebsite.ErrorDocumentProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    index_document: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosWebsite.IndexDocumentProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    routing_rules: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosWebsite.RoutingRulesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__46ebe31ff40b3ca30b9166c4266b70ce1837aad894f005813dc616ec98151b46(
    *,
    bucket_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    website_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosWebsite.WebsiteConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__caf98e7d5d61f136d353ef32caaca4e581618b63c6ea776a37a6f69dc1862bfe(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[WebsiteProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5fbf102220d7337f82070460cf078dd5e85460b774fc480e44b78f4e4c52af3f(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__692a59bbbdd74cd8dfde86f248f5ada2eb991dd611c8c07808f5a21f2437153c(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8d6b04daf596a0ef4d480381c48c3e494160d6d317586dbdf7c677dd16d875b6(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1eb3861a15cb3202cc058004e789e3480d8f092aece762ae3771f65120f60149(
    *,
    bucket_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    website_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosWebsite.WebsiteConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__730c62484cd5b2f1b487ca1905e107626562b75756b2887a5cdd195f617b4529(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[BucketProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2b1464ce9f3374036a96752dc41d4d29b9e28f0fa299122282936bf27c08da3c(
    physical_name: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7756fc53d73a69497adac3b3eef813ed97a80f8a4ab2ea8329b00bc52ee2b8f4(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1c54e7b952c59e9482b53523b6463eccb970c2b6933b06f7951e3580e0e363c5(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4070c676c2db8e03e891930c33b92cee65a18ff152d144ce83613a30bf35b248(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c56b96bc948df5bafd30ccda11e91f12480860a8bf184df3b63d4a85b4b603d8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DirectoryProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2eac822e31f0b14f0d445fcda5edcd9fb35550a0a54886dfaf08136f102fcc01(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__51e3e791fb2d0bdf654569dd7ce8a93ee24d8579014569f016d6566c6c629333(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__298c85fb6fd909790774361a86ea13d1df94e101a4660380ac15b037f121662a(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__146aa14b61658a030a56558c92a249b414a7e999717b613c98ec1b00cb1e3c98(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DomainProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c2d7e8692b736cc8dbf7dee0a6ed4e275320d2ea0c9ae86afb9e11fe4bda0d43(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0e38311073c8b58de75347086e3a426e8b627724ed3e80d2b897e9cf83d39abb(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__742ad1e383e99aac79692ae4615b4b3604c5b48599e3657cdb22867d54cd4421(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
