'''
## Aliyun ROS ROS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as ROS from '@alicloud/ros-cdk-ros';
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

from ._jsii import *

import ros_cdk_core


class AutoEnableService(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ros.AutoEnableService",
):
    '''A ROS resource type:  ``ALIYUN::ROS::AutoEnableService``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "AutoEnableServiceProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ROS::AutoEnableService``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ros.AutoEnableServiceProps",
    jsii_struct_bases=[],
    name_mapping={"service_name": "serviceName"},
)
class AutoEnableServiceProps:
    def __init__(
        self,
        *,
        service_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::ROS::AutoEnableService``.

        :param service_name: Property serviceName: Which service to enable. Valid values: AHAS: Application High Availability Service ARMS: Realtime Monitoring Service ApiGateway: API Gateway BatchCompute: Batch Compute BrainIndustrial: Brain Industrial CloudStorageGateway: Cloud Storage Gateway CMS: Cloud Monitor Service CR: Container Registry CS: Container Service DataHub: Data Hub DataWorks: DataWorks DCDN: Dynamic Route for CDN EDAS: Enterprise Distributed Application Service EMAS: Enterprise Mobile Application Studio FC: Function Compute FNF: Serverless Workflow MaxCompute: MaxCompute NAS: Network Attached Storage MNS: Message Service (MNS) HBR: Hybrid Backup Recovery IMM: Intelligent Media Management IOT: IoT Platform KMS: Key Management Service NLP: Natural Language Processing OSS: Object Storage Service OTS: Table Store PrivateLink: Private Link PrivateZone: Private Zone RocketMQ: RocketMQ SAE: Serverless App Engine SLS: Log Service TrafficMirror: VPC Traffic Mirroring VS: Video Surveillance Xtrace: Tracing Anlaysis
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "service_name": service_name,
        }

    @builtins.property
    def service_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property serviceName: Which service to enable.

        Valid values:
        AHAS: Application High Availability Service
        ARMS: Realtime Monitoring Service
        ApiGateway: API Gateway
        BatchCompute: Batch Compute
        BrainIndustrial: Brain Industrial
        CloudStorageGateway: Cloud Storage Gateway
        CMS: Cloud Monitor Service
        CR: Container Registry
        CS: Container Service
        DataHub: Data Hub
        DataWorks: DataWorks
        DCDN: Dynamic Route for CDN
        EDAS: Enterprise Distributed Application Service
        EMAS: Enterprise Mobile Application Studio
        FC: Function Compute
        FNF: Serverless Workflow
        MaxCompute: MaxCompute
        NAS: Network Attached Storage
        MNS: Message Service (MNS)
        HBR: Hybrid Backup Recovery
        IMM: Intelligent Media Management
        IOT: IoT Platform
        KMS: Key Management Service
        NLP: Natural Language Processing
        OSS: Object Storage Service
        OTS: Table Store
        PrivateLink: Private Link
        PrivateZone: Private Zone
        RocketMQ: RocketMQ
        SAE: Serverless App Engine
        SLS: Log Service
        TrafficMirror: VPC Traffic Mirroring
        VS: Video Surveillance
        Xtrace: Tracing Anlaysis
        '''
        result = self._values.get("service_name")
        assert result is not None, "Required property 'service_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AutoEnableServiceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class CustomResource(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ros.CustomResource",
):
    '''A ROS resource type:  ``ALIYUN::ROS::CustomResource``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "CustomResourceProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ROS::CustomResource``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrOutputs")
    def attr_outputs(self) -> ros_cdk_core.IResolvable:
        '''Attribute Outputs: Output data received from service provider.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOutputs"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ros.CustomResourceProps",
    jsii_struct_bases=[],
    name_mapping={
        "service_token": "serviceToken",
        "timeout": "timeout",
        "http_config": "httpConfig",
        "parameters": "parameters",
    },
)
class CustomResourceProps:
    def __init__(
        self,
        *,
        service_token: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        timeout: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        http_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosCustomResource.HttpConfigProperty"]] = None,
        parameters: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ROS::CustomResource``.

        :param service_token: Property serviceToken: The service token that was given to the template developer by the service provider to access the service. Allowed values: - Function Compute: acs:fc:<region_id>:<account_id>:services/<service_name>/functions/<function_name> - MNS Queue: acs:mns:<region_id>:<account_id>:queues/<queue_name> or acs:mns:<region_id>:<account_id>:/queues/<queue_name> - MNS Topic: acs:mns:<region_id>:<account_id>:topics/<topic_name> or acs:mns:<region_id>:<account_id>:/topics/<topic_name> - HTTP&HTTPS: web[options]: Two options are supported: - sync: sync HTTP&HTTPS request. - idempotent: indicates that the Create request is idempotent. Update and Delete requests should be always idempotent. Examples: - acs:fc:cn-hangzhou:123456789:services/test-service/functions/test-function - acs:mns:cn-hangzhou:123456789:queues/test-queue - acs:mns:cn-hangzhou:123456789:/queues/test-queue - acs:mns:cn-hangzhou:123456789:topics/test-topic - acs:mns:cn-hangzhou:123456789:/topics/test-topic - web:https://abc.com - web[sync]:http://abc.com - web[sync,idempotent]:https://abc.com
        :param timeout: Property timeout: Timeout seconds before service provider responses. It takes effects only if the type of ServiceToken is Function Compute, MNS Queue, MNS Topic or async HTTP&HTTPS request. Timeout seconds are always 10 for sync HTTP&HTTPS request.
        :param http_config: Property httpConfig: Config for HTTP&HTTPS service provider.
        :param parameters: Property parameters: Parameters to be passed to service provider.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "service_token": service_token,
            "timeout": timeout,
        }
        if http_config is not None:
            self._values["http_config"] = http_config
        if parameters is not None:
            self._values["parameters"] = parameters

    @builtins.property
    def service_token(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property serviceToken: The service token that was given to the template developer by the service provider to access the service.

        Allowed values:

        - Function Compute: acs:fc:<region_id>:<account_id>:services/<service_name>/functions/<function_name>
        - MNS Queue: acs:mns:<region_id>:<account_id>:queues/<queue_name> or acs:mns:<region_id>:<account_id>:/queues/<queue_name>
        - MNS Topic: acs:mns:<region_id>:<account_id>:topics/<topic_name> or acs:mns:<region_id>:<account_id>:/topics/<topic_name>
        - HTTP&HTTPS: web[options]:
          Two options are supported:

          - sync: sync HTTP&HTTPS request.
          - idempotent: indicates that the Create request is idempotent. Update and Delete requests should be always idempotent.
            Examples:
          - acs:fc:cn-hangzhou:123456789:services/test-service/functions/test-function
          - acs:mns:cn-hangzhou:123456789:queues/test-queue
          - acs:mns:cn-hangzhou:123456789:/queues/test-queue
          - acs:mns:cn-hangzhou:123456789:topics/test-topic
          - acs:mns:cn-hangzhou:123456789:/topics/test-topic
          - web:https://abc.com
          - web[sync]:http://abc.com
          - web[sync,idempotent]:https://abc.com
        '''
        result = self._values.get("service_token")
        assert result is not None, "Required property 'service_token' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def timeout(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property timeout: Timeout seconds before service provider responses.

        It takes effects only if the type of ServiceToken is Function Compute, MNS Queue, MNS Topic or async HTTP&HTTPS request.
        Timeout seconds are always 10 for sync HTTP&HTTPS request.
        '''
        result = self._values.get("timeout")
        assert result is not None, "Required property 'timeout' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def http_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosCustomResource.HttpConfigProperty"]]:
        '''Property httpConfig: Config for HTTP&HTTPS service provider.'''
        result = self._values.get("http_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosCustomResource.HttpConfigProperty"]], result)

    @builtins.property
    def parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property parameters: Parameters to be passed to service provider.'''
        result = self._values.get("parameters")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "CustomResourceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ResourceCleaner(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ros.ResourceCleaner",
):
    '''A ROS resource type:  ``ALIYUN::ROS::ResourceCleaner``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ResourceCleanerProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ROS::ResourceCleaner``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNoCleanupResourceDetails")
    def attr_no_cleanup_resource_details(self) -> ros_cdk_core.IResolvable:
        '''Attribute NoCleanupResourceDetails: The details of the resources that are scanned but filtered.

        Only resources with the resource types ResourceCleaner supports and the regions not filtered are scanned.
        The format is the same as ResourceDetails.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNoCleanupResourceDetails"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResourceDetails")
    def attr_resource_details(self) -> ros_cdk_core.IResolvable:
        '''Attribute ResourceDetails: The details of resources to be cleaned up.

        The value is a list of dict. The dict contains the fields below:

        - ResourceType: Resource type of the resource.
        - RegionId: Region ID of the resource.
        - ResourceId: ID of the resource.
        - ResourceName: Name of the resource.
        - CleanupType: Cleanup type of the resource. Valid values:
        - Normal: The resource can be deleted normally.
        - DeleteWithInstance: The resource will be deleted with the resource it belongs to. If the resource it belongs to is filtered or excluded, the deletion probably fails. CleanupTypeReasons give more information.
        - UnableToDelete: Unable to delete the resource. CleanupTypeReasons give more information.
        - CleanupTypeReasons: The information of the related CleanupType.
        - ResourceStatus: Status of the resource. Valid values:
        - Deleting: The resource is deleting.
        - Failure: The deletion of the resource failed.
        - Success: The resource is deleted.
        - Skipped: The deletion of the resource is skipped.
        - Pending: The deletion of the resource is not started.
        - ResourceStatusReason: The information of the related ResourceStatus.
        - Dependencies: The resources that need to be deleted before the deletion of the resource. The value is a list of dict. The dict contains the fields below:
        - ResourceType: Resource type of the dependency resource.
        - RegionId: Region ID of the dependency resource.
        - ResourceId: ID of the dependency resource.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceDetails"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResourceSummary")
    def attr_resource_summary(self) -> ros_cdk_core.IResolvable:
        '''Attribute ResourceSummary: The details of resources to be cleaned up.

        The value is a list of dict. The dict contains the fields below:

        - ResourceType: Resource type of the resources.
        - DeletingCount: Number of deleting resources of the resource type.
        - SuccessCount: Number of deleted resources of the resource type.
        - FailureCount: Number of resources that failed to delete of the resource type.
        - SkippedCount: Number of skipped resources of the resource type.
        - PendingCount: Number of resources that have not been deleted of the resource type.
        - OtherCount: Number of other resources of the resource type.
        - TotalCount: Number of total resources of the resource type.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceSummary"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ros.ResourceCleanerProps",
    jsii_struct_bases=[],
    name_mapping={
        "action": "action",
        "clean_up_retry_count": "cleanUpRetryCount",
        "clean_up_timeout": "cleanUpTimeout",
        "excluded_resources": "excludedResources",
        "failure_option": "failureOption",
        "resource_filters": "resourceFilters",
    },
)
class ResourceCleanerProps:
    def __init__(
        self,
        *,
        action: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        clean_up_retry_count: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        clean_up_timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        excluded_resources: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosResourceCleaner.ExcludedResourcesProperty"]]]] = None,
        failure_option: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource_filters: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosResourceCleaner.ResourceFiltersProperty"]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ROS::ResourceCleaner``.

        :param action: Property action: Resource cleaner actions: - Scan: Scanning phase. Scan out the resources to be cleaned up. - CleanUp: Cleanup phase. Clean up the scanned resources. It it not allowed for resource creation. - Scan+CleanUp: Scan first, then CleanUp. - ScanWhenCreatingAndUpdating+CleanUpWhenDeleting: Scan when creating or updating resource, and CleanUp when deleting resource.
        :param clean_up_retry_count: Property cleanUpRetryCount: The maximum number of executions of cleanup phase. Default to 1, which means no retry. Conditions that trigger a retry: (the relationship is or) 1.There are resources which fail to be cleaned up. 2.The cleanup is timeout.
        :param clean_up_timeout: Property cleanUpTimeout: The timeout seconds of executions of cleanup phase. Default to 1 hour.
        :param excluded_resources: Property excludedResources: Exclude parts from resources to be cleaned up.
        :param failure_option: Property failureOption: The failure option of cleanup phase: - Normal: Resource failure does not affect the resources that depend on it. - Fast: Resource failure causes all resources that depend on it to fail. Default to Normal.
        :param resource_filters: Property resourceFilters: Resource filters that ResourceCleaner uses to filter out the resources to be cleaned up during scanning. There are two filtering behaviors(Effect): Allow and Deny. The filters work as below: 1.Any resource denied by any Deny filter will not be cleaned up. 2.If there is not any Allow filter, all resources not denied by any Deny filter will be cleaned up. 3.If there are some Allow filters, only resources allowed by some Allow filter and not denied by any Deny filter will be cleaned up. If filters are changed during resource update, ResourceCleaner requires to rescan. And if Action equals CleanUp, an error occurs.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "action": action,
        }
        if clean_up_retry_count is not None:
            self._values["clean_up_retry_count"] = clean_up_retry_count
        if clean_up_timeout is not None:
            self._values["clean_up_timeout"] = clean_up_timeout
        if excluded_resources is not None:
            self._values["excluded_resources"] = excluded_resources
        if failure_option is not None:
            self._values["failure_option"] = failure_option
        if resource_filters is not None:
            self._values["resource_filters"] = resource_filters

    @builtins.property
    def action(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property action: Resource cleaner actions: - Scan: Scanning phase.

        Scan out the resources to be cleaned up.

        - CleanUp: Cleanup phase. Clean up the scanned resources. It it not allowed for resource creation.
        - Scan+CleanUp: Scan first, then CleanUp.
        - ScanWhenCreatingAndUpdating+CleanUpWhenDeleting: Scan when creating or updating resource, and CleanUp when deleting resource.
        '''
        result = self._values.get("action")
        assert result is not None, "Required property 'action' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def clean_up_retry_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property cleanUpRetryCount: The maximum number of executions of cleanup phase.

        Default to 1, which means no retry.
        Conditions that trigger a retry: (the relationship is or)
        1.There are resources which fail to be cleaned up.
        2.The cleanup is timeout.
        '''
        result = self._values.get("clean_up_retry_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def clean_up_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property cleanUpTimeout: The timeout seconds of executions of cleanup phase.

        Default to 1 hour.
        '''
        result = self._values.get("clean_up_timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def excluded_resources(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosResourceCleaner.ExcludedResourcesProperty"]]]]:
        '''Property excludedResources: Exclude parts from resources to be cleaned up.'''
        result = self._values.get("excluded_resources")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosResourceCleaner.ExcludedResourcesProperty"]]]], result)

    @builtins.property
    def failure_option(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property failureOption: The failure option of cleanup phase: - Normal: Resource failure does not affect the resources that depend on it.

        - Fast: Resource failure causes all resources that depend on it to fail.
          Default to Normal.
        '''
        result = self._values.get("failure_option")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_filters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosResourceCleaner.ResourceFiltersProperty"]]]]:
        '''Property resourceFilters: Resource filters that ResourceCleaner uses to filter out the resources to be cleaned up during scanning.

        There are two filtering behaviors(Effect): Allow and Deny. The filters work as below:
        1.Any resource denied by any Deny filter will not be cleaned up.
        2.If there is not any Allow filter, all resources not denied by any Deny filter will be cleaned up.
        3.If there are some Allow filters, only resources allowed by some Allow filter and not denied by any Deny filter will be cleaned up.
        If filters are changed during resource update, ResourceCleaner requires to rescan. And if Action equals CleanUp, an error occurs.
        '''
        result = self._values.get("resource_filters")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosResourceCleaner.ResourceFiltersProperty"]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ResourceCleanerProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAutoEnableService(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ros.RosAutoEnableService",
):
    '''A ROS template type:  ``ALIYUN::ROS::AutoEnableService``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosAutoEnableServiceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ROS::AutoEnableService``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        '''A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.'''
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="serviceName")
    def service_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        serviceName: Which service to enable. Valid values:
        AHAS: Application High Availability Service
        ARMS: Realtime Monitoring Service
        ApiGateway: API Gateway
        BatchCompute: Batch Compute
        BrainIndustrial: Brain Industrial
        CloudStorageGateway: Cloud Storage Gateway
        CMS: Cloud Monitor Service
        CR: Container Registry
        CS: Container Service
        DataHub: Data Hub
        DataWorks: DataWorks
        DCDN: Dynamic Route for CDN
        EDAS: Enterprise Distributed Application Service
        EMAS: Enterprise Mobile Application Studio
        FC: Function Compute
        FNF: Serverless Workflow
        MaxCompute: MaxCompute
        NAS: Network Attached Storage
        MNS: Message Service (MNS)
        HBR: Hybrid Backup Recovery
        IMM: Intelligent Media Management
        IOT: IoT Platform
        KMS: Key Management Service
        NLP: Natural Language Processing
        OSS: Object Storage Service
        OTS: Table Store
        PrivateLink: Private Link
        PrivateZone: Private Zone
        RocketMQ: RocketMQ
        SAE: Serverless App Engine
        SLS: Log Service
        TrafficMirror: VPC Traffic Mirroring
        VS: Video Surveillance
        Xtrace: Tracing Anlaysis
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "serviceName"))

    @service_name.setter
    def service_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "serviceName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ros.RosAutoEnableServiceProps",
    jsii_struct_bases=[],
    name_mapping={"service_name": "serviceName"},
)
class RosAutoEnableServiceProps:
    def __init__(
        self,
        *,
        service_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::ROS::AutoEnableService``.

        :param service_name: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "service_name": service_name,
        }

    @builtins.property
    def service_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        serviceName: Which service to enable. Valid values:
        AHAS: Application High Availability Service
        ARMS: Realtime Monitoring Service
        ApiGateway: API Gateway
        BatchCompute: Batch Compute
        BrainIndustrial: Brain Industrial
        CloudStorageGateway: Cloud Storage Gateway
        CMS: Cloud Monitor Service
        CR: Container Registry
        CS: Container Service
        DataHub: Data Hub
        DataWorks: DataWorks
        DCDN: Dynamic Route for CDN
        EDAS: Enterprise Distributed Application Service
        EMAS: Enterprise Mobile Application Studio
        FC: Function Compute
        FNF: Serverless Workflow
        MaxCompute: MaxCompute
        NAS: Network Attached Storage
        MNS: Message Service (MNS)
        HBR: Hybrid Backup Recovery
        IMM: Intelligent Media Management
        IOT: IoT Platform
        KMS: Key Management Service
        NLP: Natural Language Processing
        OSS: Object Storage Service
        OTS: Table Store
        PrivateLink: Private Link
        PrivateZone: Private Zone
        RocketMQ: RocketMQ
        SAE: Serverless App Engine
        SLS: Log Service
        TrafficMirror: VPC Traffic Mirroring
        VS: Video Surveillance
        Xtrace: Tracing Anlaysis
        '''
        result = self._values.get("service_name")
        assert result is not None, "Required property 'service_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAutoEnableServiceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCustomResource(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ros.RosCustomResource",
):
    '''A ROS template type:  ``ALIYUN::ROS::CustomResource``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosCustomResourceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ROS::CustomResource``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrOutputs")
    def attr_outputs(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Outputs: Output data received from service provider.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOutputs"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="serviceToken")
    def service_token(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        serviceToken: The service token that was given to the template developer by the service provider to access the service.
        Allowed values:

        - Function Compute: acs:fc:<region_id>:<account_id>:services/<service_name>/functions/<function_name>
        - MNS Queue: acs:mns:<region_id>:<account_id>:queues/<queue_name> or acs:mns:<region_id>:<account_id>:/queues/<queue_name>
        - MNS Topic: acs:mns:<region_id>:<account_id>:topics/<topic_name> or acs:mns:<region_id>:<account_id>:/topics/<topic_name>
        - HTTP&HTTPS: web[options]:
        Two options are supported:
        - sync: sync HTTP&HTTPS request.
        - idempotent: indicates that the Create request is idempotent. Update and Delete requests should be always idempotent.
        Examples:
        - acs:fc:cn-hangzhou:123456789:services/test-service/functions/test-function
        - acs:mns:cn-hangzhou:123456789:queues/test-queue
        - acs:mns:cn-hangzhou:123456789:/queues/test-queue
        - acs:mns:cn-hangzhou:123456789:topics/test-topic
        - acs:mns:cn-hangzhou:123456789:/topics/test-topic
        - web:https://abc.com
        - web[sync]:http://abc.com
        - web[sync,idempotent]:https://abc.com
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "serviceToken"))

    @service_token.setter
    def service_token(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "serviceToken", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="timeout")
    def timeout(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property:

        timeout: Timeout seconds before service provider responses.
        It takes effects only if the type of ServiceToken is Function Compute, MNS Queue, MNS Topic or async HTTP&HTTPS request.
        Timeout seconds are always 10 for sync HTTP&HTTPS request.
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "timeout"))

    @timeout.setter
    def timeout(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "timeout", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="httpConfig")
    def http_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosCustomResource.HttpConfigProperty"]]:
        '''
        :Property: httpConfig: Config for HTTP&HTTPS service provider.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosCustomResource.HttpConfigProperty"]], jsii.get(self, "httpConfig"))

    @http_config.setter
    def http_config(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosCustomResource.HttpConfigProperty"]],
    ) -> None:
        jsii.set(self, "httpConfig", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="parameters")
    def parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: parameters: Parameters to be passed to service provider.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "parameters"))

    @parameters.setter
    def parameters(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        jsii.set(self, "parameters", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ros.RosCustomResource.HttpConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "content_type": "contentType",
            "headers": "headers",
            "sign_key": "signKey",
        },
    )
    class HttpConfigProperty:
        def __init__(
            self,
            *,
            content_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            headers: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            sign_key: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param content_type: 
            :param headers: 
            :param sign_key: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if content_type is not None:
                self._values["content_type"] = content_type
            if headers is not None:
                self._values["headers"] = headers
            if sign_key is not None:
                self._values["sign_key"] = sign_key

        @builtins.property
        def content_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: contentType: Content type of request body.
            '''
            result = self._values.get("content_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def headers(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: headers: Headers to be passed.
            '''
            result = self._values.get("headers")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def sign_key(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            signKey: If SignKey is specified, Signature will be added to request data.
            "Signature": {
            "Date": "2021-03-11T13:32:02Z",
            "Value": "10841498499ba1c4b07547a542c3a8718235f983"
            }
            Date: the UTC time to send request, which follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
            Value: the signature value calculated from the algorithm below.

            The signature algorithm:
            1.Concatenating signature string:POST
            \\n
            <content type: if ContentType is specified, use it, else use application/json.>
            \\n
            <md5 of request data: without Signature, json format, utf-8 encoded, sort keys, ensure ascii.>
            \\n

            \\n
            '''
            result = self._values.get("sign_key")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "HttpConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ros.RosCustomResourceProps",
    jsii_struct_bases=[],
    name_mapping={
        "service_token": "serviceToken",
        "timeout": "timeout",
        "http_config": "httpConfig",
        "parameters": "parameters",
    },
)
class RosCustomResourceProps:
    def __init__(
        self,
        *,
        service_token: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        timeout: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        http_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosCustomResource.HttpConfigProperty]] = None,
        parameters: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ROS::CustomResource``.

        :param service_token: 
        :param timeout: 
        :param http_config: 
        :param parameters: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "service_token": service_token,
            "timeout": timeout,
        }
        if http_config is not None:
            self._values["http_config"] = http_config
        if parameters is not None:
            self._values["parameters"] = parameters

    @builtins.property
    def service_token(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        serviceToken: The service token that was given to the template developer by the service provider to access the service.
        Allowed values:

        - Function Compute: acs:fc:<region_id>:<account_id>:services/<service_name>/functions/<function_name>
        - MNS Queue: acs:mns:<region_id>:<account_id>:queues/<queue_name> or acs:mns:<region_id>:<account_id>:/queues/<queue_name>
        - MNS Topic: acs:mns:<region_id>:<account_id>:topics/<topic_name> or acs:mns:<region_id>:<account_id>:/topics/<topic_name>
        - HTTP&HTTPS: web[options]:
        Two options are supported:
        - sync: sync HTTP&HTTPS request.
        - idempotent: indicates that the Create request is idempotent. Update and Delete requests should be always idempotent.
        Examples:
        - acs:fc:cn-hangzhou:123456789:services/test-service/functions/test-function
        - acs:mns:cn-hangzhou:123456789:queues/test-queue
        - acs:mns:cn-hangzhou:123456789:/queues/test-queue
        - acs:mns:cn-hangzhou:123456789:topics/test-topic
        - acs:mns:cn-hangzhou:123456789:/topics/test-topic
        - web:https://abc.com
        - web[sync]:http://abc.com
        - web[sync,idempotent]:https://abc.com
        '''
        result = self._values.get("service_token")
        assert result is not None, "Required property 'service_token' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def timeout(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property:

        timeout: Timeout seconds before service provider responses.
        It takes effects only if the type of ServiceToken is Function Compute, MNS Queue, MNS Topic or async HTTP&HTTPS request.
        Timeout seconds are always 10 for sync HTTP&HTTPS request.
        '''
        result = self._values.get("timeout")
        assert result is not None, "Required property 'timeout' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def http_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosCustomResource.HttpConfigProperty]]:
        '''
        :Property: httpConfig: Config for HTTP&HTTPS service provider.
        '''
        result = self._values.get("http_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosCustomResource.HttpConfigProperty]], result)

    @builtins.property
    def parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: parameters: Parameters to be passed to service provider.
        '''
        result = self._values.get("parameters")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosCustomResourceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosResourceCleaner(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ros.RosResourceCleaner",
):
    '''A ROS template type:  ``ALIYUN::ROS::ResourceCleaner``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosResourceCleanerProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ROS::ResourceCleaner``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNoCleanupResourceDetails")
    def attr_no_cleanup_resource_details(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute:

        NoCleanupResourceDetails: The details of the resources that are scanned but filtered.
        Only resources with the resource types ResourceCleaner supports and the regions not filtered are scanned.
        The format is the same as ResourceDetails.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNoCleanupResourceDetails"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResourceDetails")
    def attr_resource_details(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute:

        ResourceDetails: The details of resources to be cleaned up.
        The value is a list of dict. The dict contains the fields below:

        - ResourceType: Resource type of the resource.
        - RegionId: Region ID of the resource.
        - ResourceId: ID of the resource.
        - ResourceName: Name of the resource.
        - CleanupType: Cleanup type of the resource. Valid values:
        - Normal: The resource can be deleted normally.
        - DeleteWithInstance: The resource will be deleted with the resource it belongs to. If the resource it belongs to is filtered or excluded, the deletion probably fails. CleanupTypeReasons give more information.
        - UnableToDelete: Unable to delete the resource. CleanupTypeReasons give more information.
        - CleanupTypeReasons: The information of the related CleanupType.
        - ResourceStatus: Status of the resource. Valid values:
        - Deleting: The resource is deleting.
        - Failure: The deletion of the resource failed.
        - Success: The resource is deleted.
        - Skipped: The deletion of the resource is skipped.
        - Pending: The deletion of the resource is not started.
        - ResourceStatusReason: The information of the related ResourceStatus.
        - Dependencies: The resources that need to be deleted before the deletion of the resource. The value is a list of dict. The dict contains the fields below:
        - ResourceType: Resource type of the dependency resource.
        - RegionId: Region ID of the dependency resource.
        - ResourceId: ID of the dependency resource.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceDetails"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResourceSummary")
    def attr_resource_summary(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute:

        ResourceSummary: The details of resources to be cleaned up.
        The value is a list of dict. The dict contains the fields below:

        - ResourceType: Resource type of the resources.
        - DeletingCount: Number of deleting resources of the resource type.
        - SuccessCount: Number of deleted resources of the resource type.
        - FailureCount: Number of resources that failed to delete of the resource type.
        - SkippedCount: Number of skipped resources of the resource type.
        - PendingCount: Number of resources that have not been deleted of the resource type.
        - OtherCount: Number of other resources of the resource type.
        - TotalCount: Number of total resources of the resource type.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceSummary"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="action")
    def action(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        action: Resource cleaner actions:

        - Scan: Scanning phase. Scan out the resources to be cleaned up.
        - CleanUp: Cleanup phase. Clean up the scanned resources. It it not allowed for resource creation.
        - Scan+CleanUp: Scan first, then CleanUp.
        - ScanWhenCreatingAndUpdating+CleanUpWhenDeleting: Scan when creating or updating resource, and CleanUp when deleting resource.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "action"))

    @action.setter
    def action(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "action", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="cleanUpRetryCount")
    def clean_up_retry_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        cleanUpRetryCount: The maximum number of executions of cleanup phase.
        Default to 1, which means no retry.
        Conditions that trigger a retry: (the relationship is or)
        1.There are resources which fail to be cleaned up.
        2.The cleanup is timeout.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "cleanUpRetryCount"))

    @clean_up_retry_count.setter
    def clean_up_retry_count(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "cleanUpRetryCount", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="cleanUpTimeout")
    def clean_up_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        cleanUpTimeout: The timeout seconds of executions of cleanup phase.
        Default to 1 hour.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "cleanUpTimeout"))

    @clean_up_timeout.setter
    def clean_up_timeout(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "cleanUpTimeout", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="excludedResources")
    def excluded_resources(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosResourceCleaner.ExcludedResourcesProperty"]]]]:
        '''
        :Property: excludedResources: Exclude parts from resources to be cleaned up.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosResourceCleaner.ExcludedResourcesProperty"]]]], jsii.get(self, "excludedResources"))

    @excluded_resources.setter
    def excluded_resources(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosResourceCleaner.ExcludedResourcesProperty"]]]],
    ) -> None:
        jsii.set(self, "excludedResources", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="failureOption")
    def failure_option(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        failureOption: The failure option of cleanup phase:

        - Normal: Resource failure does not affect the resources that depend on it.
        - Fast: Resource failure causes all resources that depend on it to fail.
        Default to Normal.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "failureOption"))

    @failure_option.setter
    def failure_option(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "failureOption", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="resourceFilters")
    def resource_filters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosResourceCleaner.ResourceFiltersProperty"]]]]:
        '''
        :Property:

        resourceFilters: Resource filters that ResourceCleaner uses to filter out the resources to be cleaned up during scanning.
        There are two filtering behaviors(Effect): Allow and Deny. The filters work as below:
        1.Any resource denied by any Deny filter will not be cleaned up.
        2.If there is not any Allow filter, all resources not denied by any Deny filter will be cleaned up.
        3.If there are some Allow filters, only resources allowed by some Allow filter and not denied by any Deny filter will be cleaned up.
        If filters are changed during resource update, ResourceCleaner requires to rescan. And if Action equals CleanUp, an error occurs.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosResourceCleaner.ResourceFiltersProperty"]]]], jsii.get(self, "resourceFilters"))

    @resource_filters.setter
    def resource_filters(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosResourceCleaner.ResourceFiltersProperty"]]]],
    ) -> None:
        jsii.set(self, "resourceFilters", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ros.RosResourceCleaner.ExcludedResourcesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "resource_id": "resourceId",
            "region_id": "regionId",
            "resource_type": "resourceType",
        },
    )
    class ExcludedResourcesProperty:
        def __init__(
            self,
            *,
            resource_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            region_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            resource_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param resource_id: 
            :param region_id: 
            :param resource_type: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "resource_id": resource_id,
            }
            if region_id is not None:
                self._values["region_id"] = region_id
            if resource_type is not None:
                self._values["resource_type"] = resource_type

        @builtins.property
        def resource_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: resourceId: The ID of the resource to be excluded.
            '''
            result = self._values.get("resource_id")
            assert result is not None, "Required property 'resource_id' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def region_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: regionId: The region ID of the resource to be excluded.
            '''
            result = self._values.get("region_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def resource_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            resourceType: The resource type of the resource to be excluded.
            The allowed values are the resource types that ResourceCleaner supports to clean up.
            '''
            result = self._values.get("resource_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ExcludedResourcesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ros.RosResourceCleaner.ResourceFiltersProperty",
        jsii_struct_bases=[],
        name_mapping={
            "effect": "effect",
            "include_deletion_protection": "includeDeletionProtection",
            "region_ids": "regionIds",
            "resource_group_ids": "resourceGroupIds",
            "resource_ids": "resourceIds",
            "resource_name_patterns": "resourceNamePatterns",
            "resource_type_patterns": "resourceTypePatterns",
            "tags": "tags",
        },
    )
    class ResourceFiltersProperty:
        def __init__(
            self,
            *,
            effect: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            include_deletion_protection: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            region_ids: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
            resource_group_ids: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
            resource_ids: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
            resource_name_patterns: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
            resource_type_patterns: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
            tags: typing.Optional[typing.Sequence["RosResourceCleaner.TagsProperty"]] = None,
        ) -> None:
            '''
            :param effect: 
            :param include_deletion_protection: 
            :param region_ids: 
            :param resource_group_ids: 
            :param resource_ids: 
            :param resource_name_patterns: 
            :param resource_type_patterns: 
            :param tags: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if effect is not None:
                self._values["effect"] = effect
            if include_deletion_protection is not None:
                self._values["include_deletion_protection"] = include_deletion_protection
            if region_ids is not None:
                self._values["region_ids"] = region_ids
            if resource_group_ids is not None:
                self._values["resource_group_ids"] = resource_group_ids
            if resource_ids is not None:
                self._values["resource_ids"] = resource_ids
            if resource_name_patterns is not None:
                self._values["resource_name_patterns"] = resource_name_patterns
            if resource_type_patterns is not None:
                self._values["resource_type_patterns"] = resource_type_patterns
            if tags is not None:
                self._values["tags"] = tags

        @builtins.property
        def effect(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            effect: Filtering behavior:

            - Allow: Resource might be cleaned up if it passes the filter, will not be cleaned up if it does not pass the filter.
            - Deny: Resource will not be cleaned up if it passes the filter.See also ResourceFilters for more details.
            '''
            result = self._values.get("effect")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def include_deletion_protection(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            includeDeletionProtection: Whether to include delete protected resources.
            Default to True.
            '''
            result = self._values.get("include_deletion_protection")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def region_ids(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
            '''
            :Property:

            regionIds: Region filtering.
            The relationship of each item is or.
            '''
            result = self._values.get("region_ids")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

        @builtins.property
        def resource_group_ids(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
            '''
            :Property:

            resourceGroupIds: Resource group filtering.
            The relationship of each item is or.
            '''
            result = self._values.get("resource_group_ids")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

        @builtins.property
        def resource_ids(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
            '''
            :Property:

            resourceIds: Resource ID filtering.
            The relationship of each item is or.
            '''
            result = self._values.get("resource_ids")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

        @builtins.property
        def resource_name_patterns(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
            '''
            :Property:

            resourceNamePatterns: Resource name fuzzy matching filtering.
            The relationship of each item is or.
            '''
            result = self._values.get("resource_name_patterns")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

        @builtins.property
        def resource_type_patterns(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
            '''
            :Property:

            resourceTypePatterns: Resource type fuzzy matching filtering.
            The relationship of each item is or.
            '''
            result = self._values.get("resource_type_patterns")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

        @builtins.property
        def tags(
            self,
        ) -> typing.Optional[typing.List["RosResourceCleaner.TagsProperty"]]:
            '''
            :Property:

            tags: Tag filtering, including custom tags and visible system tags.
            The relationship of items with different Keys is and. The relationship of items with same Key is or.
            '''
            result = self._values.get("tags")
            return typing.cast(typing.Optional[typing.List["RosResourceCleaner.TagsProperty"]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ResourceFiltersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ros.RosResourceCleaner.TagsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class TagsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "key": key,
            }
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: key: Tag key.
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            value: Tag value.
            If Value is not specified, as long as the tag key of the resource to be filtered exists, the resource passes the filtering of the tag key.
            If multiple different Values is specified for the same tag Key, as long as the resource to be filtered contains a pair of them, the resource passes the filtering of the tag key.
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TagsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ros.RosResourceCleanerProps",
    jsii_struct_bases=[],
    name_mapping={
        "action": "action",
        "clean_up_retry_count": "cleanUpRetryCount",
        "clean_up_timeout": "cleanUpTimeout",
        "excluded_resources": "excludedResources",
        "failure_option": "failureOption",
        "resource_filters": "resourceFilters",
    },
)
class RosResourceCleanerProps:
    def __init__(
        self,
        *,
        action: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        clean_up_retry_count: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        clean_up_timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        excluded_resources: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosResourceCleaner.ExcludedResourcesProperty]]]] = None,
        failure_option: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource_filters: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosResourceCleaner.ResourceFiltersProperty]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ROS::ResourceCleaner``.

        :param action: 
        :param clean_up_retry_count: 
        :param clean_up_timeout: 
        :param excluded_resources: 
        :param failure_option: 
        :param resource_filters: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "action": action,
        }
        if clean_up_retry_count is not None:
            self._values["clean_up_retry_count"] = clean_up_retry_count
        if clean_up_timeout is not None:
            self._values["clean_up_timeout"] = clean_up_timeout
        if excluded_resources is not None:
            self._values["excluded_resources"] = excluded_resources
        if failure_option is not None:
            self._values["failure_option"] = failure_option
        if resource_filters is not None:
            self._values["resource_filters"] = resource_filters

    @builtins.property
    def action(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        action: Resource cleaner actions:

        - Scan: Scanning phase. Scan out the resources to be cleaned up.
        - CleanUp: Cleanup phase. Clean up the scanned resources. It it not allowed for resource creation.
        - Scan+CleanUp: Scan first, then CleanUp.
        - ScanWhenCreatingAndUpdating+CleanUpWhenDeleting: Scan when creating or updating resource, and CleanUp when deleting resource.
        '''
        result = self._values.get("action")
        assert result is not None, "Required property 'action' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def clean_up_retry_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        cleanUpRetryCount: The maximum number of executions of cleanup phase.
        Default to 1, which means no retry.
        Conditions that trigger a retry: (the relationship is or)
        1.There are resources which fail to be cleaned up.
        2.The cleanup is timeout.
        '''
        result = self._values.get("clean_up_retry_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def clean_up_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        cleanUpTimeout: The timeout seconds of executions of cleanup phase.
        Default to 1 hour.
        '''
        result = self._values.get("clean_up_timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def excluded_resources(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosResourceCleaner.ExcludedResourcesProperty]]]]:
        '''
        :Property: excludedResources: Exclude parts from resources to be cleaned up.
        '''
        result = self._values.get("excluded_resources")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosResourceCleaner.ExcludedResourcesProperty]]]], result)

    @builtins.property
    def failure_option(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        failureOption: The failure option of cleanup phase:

        - Normal: Resource failure does not affect the resources that depend on it.
        - Fast: Resource failure causes all resources that depend on it to fail.
        Default to Normal.
        '''
        result = self._values.get("failure_option")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_filters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosResourceCleaner.ResourceFiltersProperty]]]]:
        '''
        :Property:

        resourceFilters: Resource filters that ResourceCleaner uses to filter out the resources to be cleaned up during scanning.
        There are two filtering behaviors(Effect): Allow and Deny. The filters work as below:
        1.Any resource denied by any Deny filter will not be cleaned up.
        2.If there is not any Allow filter, all resources not denied by any Deny filter will be cleaned up.
        3.If there are some Allow filters, only resources allowed by some Allow filter and not denied by any Deny filter will be cleaned up.
        If filters are changed during resource update, ResourceCleaner requires to rescan. And if Action equals CleanUp, an error occurs.
        '''
        result = self._values.get("resource_filters")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosResourceCleaner.ResourceFiltersProperty]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosResourceCleanerProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSleep(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ros.RosSleep",
):
    '''A ROS template type:  ``ALIYUN::ROS::Sleep``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosSleepProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ROS::Sleep``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        '''A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.'''
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="createDuration")
    def create_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: createDuration: The number of seconds to wait before resource creation.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "createDuration"))

    @create_duration.setter
    def create_duration(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "createDuration", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="deleteDuration")
    def delete_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: deleteDuration: The number of seconds to wait before resource deletion.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "deleteDuration"))

    @delete_duration.setter
    def delete_duration(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "deleteDuration", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="triggers")
    def triggers(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: triggers: Arbitrary map of values that, when changed, will run update or update rollback delays again.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "triggers"))

    @triggers.setter
    def triggers(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        jsii.set(self, "triggers", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="updateDuration")
    def update_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: updateDuration: The number of seconds to wait before resource update. It only triggers when the property Triggers change and the status of stack is UPDATE_IN_PROGRESS.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "updateDuration"))

    @update_duration.setter
    def update_duration(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "updateDuration", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="updateRollbackDuration")
    def update_rollback_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: updateRollbackDuration: The number of seconds to wait before resource update rollback. It only triggers when stack update failed and resource was updated.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "updateRollbackDuration"))

    @update_rollback_duration.setter
    def update_rollback_duration(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "updateRollbackDuration", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ros.RosSleepProps",
    jsii_struct_bases=[],
    name_mapping={
        "create_duration": "createDuration",
        "delete_duration": "deleteDuration",
        "triggers": "triggers",
        "update_duration": "updateDuration",
        "update_rollback_duration": "updateRollbackDuration",
    },
)
class RosSleepProps:
    def __init__(
        self,
        *,
        create_duration: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        delete_duration: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        triggers: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        update_duration: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        update_rollback_duration: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ROS::Sleep``.

        :param create_duration: 
        :param delete_duration: 
        :param triggers: 
        :param update_duration: 
        :param update_rollback_duration: 
        '''
        self._values: typing.Dict[str, typing.Any] = {}
        if create_duration is not None:
            self._values["create_duration"] = create_duration
        if delete_duration is not None:
            self._values["delete_duration"] = delete_duration
        if triggers is not None:
            self._values["triggers"] = triggers
        if update_duration is not None:
            self._values["update_duration"] = update_duration
        if update_rollback_duration is not None:
            self._values["update_rollback_duration"] = update_rollback_duration

    @builtins.property
    def create_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: createDuration: The number of seconds to wait before resource creation.
        '''
        result = self._values.get("create_duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def delete_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: deleteDuration: The number of seconds to wait before resource deletion.
        '''
        result = self._values.get("delete_duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def triggers(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: triggers: Arbitrary map of values that, when changed, will run update or update rollback delays again.
        '''
        result = self._values.get("triggers")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def update_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: updateDuration: The number of seconds to wait before resource update. It only triggers when the property Triggers change and the status of stack is UPDATE_IN_PROGRESS.
        '''
        result = self._values.get("update_duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def update_rollback_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: updateRollbackDuration: The number of seconds to wait before resource update rollback. It only triggers when stack update failed and resource was updated.
        '''
        result = self._values.get("update_rollback_duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSleepProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosStack(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ros.RosStack",
):
    '''A ROS template type:  ``ALIYUN::ROS::Stack``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosStackProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ROS::Stack``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        '''A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.'''
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="parameters")
    def parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: parameters: The set of parameters passed to this nested stack.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "parameters"))

    @parameters.setter
    def parameters(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        jsii.set(self, "parameters", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "resourceGroupId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="templateBody")
    def template_body(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property:

        templateBody: Structure containing the template body.
        It is just to facilitate the passing of template. It is raw content.Functions in TemplateBody will not be resolved in parent stack.
        You must specify either the TemplateBody or the TemplateURL property. If both are specified, TemplateBody will be used.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "templateBody"))

    @template_body.setter
    def template_body(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        jsii.set(self, "templateBody", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="templateId")
    def template_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: templateId: Template ID of template containing the template body.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "templateId"))

    @template_id.setter
    def template_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "templateId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="templateUrl")
    def template_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        templateUrl: Location of file containing the template body. The URL must point to a template (max size: 524288 bytes) that is located in a http web server(http, https), or an Aliyun OSS bucket(Such as oss://ros-template/demo?RegionId=cn-hangzhou, oss://ros-template/demo. RegionId is default to the value of RegionId Parameter of the request.).
        You must specify either the TemplateBody or the TemplateURL property. If both are specified, TemplateBody will be used.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "templateUrl"))

    @template_url.setter
    def template_url(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "templateUrl", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="templateVersion")
    def template_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: templateVersion: Template version of template containing the template body.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "templateVersion"))

    @template_version.setter
    def template_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "templateVersion", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="timeoutMins")
    def timeout_mins(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: timeoutMins: The length of time, in minutes, to wait for the nested stack creation or update. Default to 60 minutes.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "timeoutMins"))

    @timeout_mins.setter
    def timeout_mins(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "timeoutMins", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ros.RosStackProps",
    jsii_struct_bases=[],
    name_mapping={
        "parameters": "parameters",
        "resource_group_id": "resourceGroupId",
        "template_body": "templateBody",
        "template_id": "templateId",
        "template_url": "templateUrl",
        "template_version": "templateVersion",
        "timeout_mins": "timeoutMins",
    },
)
class RosStackProps:
    def __init__(
        self,
        *,
        parameters: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        template_body: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        template_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        template_url: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        template_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        timeout_mins: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ROS::Stack``.

        :param parameters: 
        :param resource_group_id: 
        :param template_body: 
        :param template_id: 
        :param template_url: 
        :param template_version: 
        :param timeout_mins: 
        '''
        self._values: typing.Dict[str, typing.Any] = {}
        if parameters is not None:
            self._values["parameters"] = parameters
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if template_body is not None:
            self._values["template_body"] = template_body
        if template_id is not None:
            self._values["template_id"] = template_id
        if template_url is not None:
            self._values["template_url"] = template_url
        if template_version is not None:
            self._values["template_version"] = template_version
        if timeout_mins is not None:
            self._values["timeout_mins"] = timeout_mins

    @builtins.property
    def parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: parameters: The set of parameters passed to this nested stack.
        '''
        result = self._values.get("parameters")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def template_body(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property:

        templateBody: Structure containing the template body.
        It is just to facilitate the passing of template. It is raw content.Functions in TemplateBody will not be resolved in parent stack.
        You must specify either the TemplateBody or the TemplateURL property. If both are specified, TemplateBody will be used.
        '''
        result = self._values.get("template_body")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def template_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: templateId: Template ID of template containing the template body.
        '''
        result = self._values.get("template_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def template_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        templateUrl: Location of file containing the template body. The URL must point to a template (max size: 524288 bytes) that is located in a http web server(http, https), or an Aliyun OSS bucket(Such as oss://ros-template/demo?RegionId=cn-hangzhou, oss://ros-template/demo. RegionId is default to the value of RegionId Parameter of the request.).
        You must specify either the TemplateBody or the TemplateURL property. If both are specified, TemplateBody will be used.
        '''
        result = self._values.get("template_url")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def template_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: templateVersion: Template version of template containing the template body.
        '''
        result = self._values.get("template_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def timeout_mins(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: timeoutMins: The length of time, in minutes, to wait for the nested stack creation or update. Default to 60 minutes.
        '''
        result = self._values.get("timeout_mins")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosStackProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosWaitCondition(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ros.RosWaitCondition",
):
    '''A ROS template type:  ``ALIYUN::ROS::WaitCondition``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosWaitConditionProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ROS::WaitCondition``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrData")
    def attr_data(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Data: JSON serialized dict containing data associated with wait condition signals sent to the handle.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrData"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrErrorData")
    def attr_error_data(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ErrorData: JSON serialized dict containing data associated with wait condition error signals sent to the handle.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrErrorData"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrJoinedErrorData")
    def attr_joined_error_data(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: JoinedErrorData: String containing data associated with wait condition error signals sent to the handle.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrJoinedErrorData"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="handle")
    def handle(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: handle: A reference to the wait condition handle used to signal this wait condition.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "handle"))

    @handle.setter
    def handle(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "handle", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="timeout")
    def timeout(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: timeout: The number of seconds to wait for the correct number of signals to arrive.
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "timeout"))

    @timeout.setter
    def timeout(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "timeout", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="count")
    def count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: count: The number of success signals that must be received before the stack creation process continues.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "count"))

    @count.setter
    def count(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "count", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="showProgressEvent")
    def show_progress_event(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: showProgressEvent: Whether to generate progress changed event. Default to Disabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "showProgressEvent"))

    @show_progress_event.setter
    def show_progress_event(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "showProgressEvent", value)


class RosWaitConditionHandle(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ros.RosWaitConditionHandle",
):
    '''A ROS template type:  ``ALIYUN::ROS::WaitConditionHandle``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosWaitConditionHandleProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ROS::WaitConditionHandle``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCurlCli")
    def attr_curl_cli(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: CurlCli: Convenience attribute, provides curl CLI command prefix, which can be used for signalling handle completion or failure.  You can signal success by adding --data-binary '{"status": "SUCCESS"}' , or signal failure by adding --data-binary '{"status": "FAILURE"}'
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCurlCli"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrHeaders")
    def attr_headers(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Headers: HTTP POST Headers used for signalling handle completion or failure.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHeaders"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPowerShellCurlCli")
    def attr_power_shell_curl_cli(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PowerShellCurlCli: Convenience attribute, provides curl CLI command prefix for PowerShell, which can be used for signalling handle completion or failure. As this cmdlet was introduced in PowerShell 3.0, ensure the version of PowerShell satisfies the constraint. (Show the version via $PSVersionTable.PSVersion.) You can signal success by adding -Body '{"status": "SUCCESS"}' , or signal failure by adding -Body '{"status": "FAILURE"}'
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPowerShellCurlCli"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrUrl")
    def attr_url(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: URL: HTTP POST URL used for signalling handle completion or failure.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrUrl"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrWindowsCurlCli")
    def attr_windows_curl_cli(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: WindowsCurlCli: Convenience attribute, provides curl CLI command prefix for Windows, which can be used for signalling handle completion or failure. As Windows does not support curl command, you need to install curl.exe and add it to PATH first. You can signal success by adding --data-binary "{"status": "SUCCESS"}" , or signal failure by adding --data-binary "{"status": "FAILURE"}"
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrWindowsCurlCli"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="count")
    def count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        count: There are 3 preconditions that make Count taking effect:
        1.Mode is set to Full.
        2.Count >= 0.
        3.The id of signal is not specified. If so, it will be a self-increasing integer started from 1. For example, the id of the first signal is 1, the id of the second signal is 2, and so on.

        If Count takes effect, signals with id > Count will be deleted before update.
        The default value is -1, which means no effect.
        It is recommended to quote the same value with WaitCondition.Count.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "count"))

    @count.setter
    def count(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "count", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="mode")
    def mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        mode: If set to Increment, all old signals will be deleted before update. In this mode, WaitCondition.Count should reference an incremental value instead of a full value, such as ScalingGroupEnable.ScalingRuleArisExecuteResultNumberOfAddedInstances.

        If set to Full, no old signal will be deleted unless Count is set. In this mode, WaitCondition.Count should reference a full value, such as the same value with InstanceGroup.MaxAmount. It is recommended to use this mode with Count.

        Default to Full.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "mode"))

    @mode.setter
    def mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "mode", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ros.RosWaitConditionHandleProps",
    jsii_struct_bases=[],
    name_mapping={"count": "count", "mode": "mode"},
)
class RosWaitConditionHandleProps:
    def __init__(
        self,
        *,
        count: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ROS::WaitConditionHandle``.

        :param count: 
        :param mode: 
        '''
        self._values: typing.Dict[str, typing.Any] = {}
        if count is not None:
            self._values["count"] = count
        if mode is not None:
            self._values["mode"] = mode

    @builtins.property
    def count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        count: There are 3 preconditions that make Count taking effect:
        1.Mode is set to Full.
        2.Count >= 0.
        3.The id of signal is not specified. If so, it will be a self-increasing integer started from 1. For example, the id of the first signal is 1, the id of the second signal is 2, and so on.

        If Count takes effect, signals with id > Count will be deleted before update.
        The default value is -1, which means no effect.
        It is recommended to quote the same value with WaitCondition.Count.
        '''
        result = self._values.get("count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        mode: If set to Increment, all old signals will be deleted before update. In this mode, WaitCondition.Count should reference an incremental value instead of a full value, such as ScalingGroupEnable.ScalingRuleArisExecuteResultNumberOfAddedInstances.

        If set to Full, no old signal will be deleted unless Count is set. In this mode, WaitCondition.Count should reference a full value, such as the same value with InstanceGroup.MaxAmount. It is recommended to use this mode with Count.

        Default to Full.
        '''
        result = self._values.get("mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosWaitConditionHandleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ros.RosWaitConditionProps",
    jsii_struct_bases=[],
    name_mapping={
        "handle": "handle",
        "timeout": "timeout",
        "count": "count",
        "show_progress_event": "showProgressEvent",
    },
)
class RosWaitConditionProps:
    def __init__(
        self,
        *,
        handle: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        timeout: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        count: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        show_progress_event: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ROS::WaitCondition``.

        :param handle: 
        :param timeout: 
        :param count: 
        :param show_progress_event: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "handle": handle,
            "timeout": timeout,
        }
        if count is not None:
            self._values["count"] = count
        if show_progress_event is not None:
            self._values["show_progress_event"] = show_progress_event

    @builtins.property
    def handle(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: handle: A reference to the wait condition handle used to signal this wait condition.
        '''
        result = self._values.get("handle")
        assert result is not None, "Required property 'handle' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def timeout(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: timeout: The number of seconds to wait for the correct number of signals to arrive.
        '''
        result = self._values.get("timeout")
        assert result is not None, "Required property 'timeout' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: count: The number of success signals that must be received before the stack creation process continues.
        '''
        result = self._values.get("count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def show_progress_event(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: showProgressEvent: Whether to generate progress changed event. Default to Disabled.
        '''
        result = self._values.get("show_progress_event")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosWaitConditionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Sleep(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ros.Sleep",
):
    '''A ROS resource type:  ``ALIYUN::ROS::Sleep``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Optional["SleepProps"] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ROS::Sleep``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ros.SleepProps",
    jsii_struct_bases=[],
    name_mapping={
        "create_duration": "createDuration",
        "delete_duration": "deleteDuration",
        "triggers": "triggers",
        "update_duration": "updateDuration",
        "update_rollback_duration": "updateRollbackDuration",
    },
)
class SleepProps:
    def __init__(
        self,
        *,
        create_duration: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        delete_duration: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        triggers: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        update_duration: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        update_rollback_duration: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ROS::Sleep``.

        :param create_duration: Property createDuration: The number of seconds to wait before resource creation.
        :param delete_duration: Property deleteDuration: The number of seconds to wait before resource deletion.
        :param triggers: Property triggers: Arbitrary map of values that, when changed, will run update or update rollback delays again.
        :param update_duration: Property updateDuration: The number of seconds to wait before resource update. It only triggers when the property Triggers change and the status of stack is UPDATE_IN_PROGRESS.
        :param update_rollback_duration: Property updateRollbackDuration: The number of seconds to wait before resource update rollback. It only triggers when stack update failed and resource was updated.
        '''
        self._values: typing.Dict[str, typing.Any] = {}
        if create_duration is not None:
            self._values["create_duration"] = create_duration
        if delete_duration is not None:
            self._values["delete_duration"] = delete_duration
        if triggers is not None:
            self._values["triggers"] = triggers
        if update_duration is not None:
            self._values["update_duration"] = update_duration
        if update_rollback_duration is not None:
            self._values["update_rollback_duration"] = update_rollback_duration

    @builtins.property
    def create_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property createDuration: The number of seconds to wait before resource creation.'''
        result = self._values.get("create_duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def delete_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property deleteDuration: The number of seconds to wait before resource deletion.'''
        result = self._values.get("delete_duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def triggers(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property triggers: Arbitrary map of values that, when changed, will run update or update rollback delays again.'''
        result = self._values.get("triggers")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def update_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property updateDuration: The number of seconds to wait before resource update.

        It only triggers when the property Triggers change and the status of stack is UPDATE_IN_PROGRESS.
        '''
        result = self._values.get("update_duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def update_rollback_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property updateRollbackDuration: The number of seconds to wait before resource update rollback.

        It only triggers when stack update failed and resource was updated.
        '''
        result = self._values.get("update_rollback_duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SleepProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Stack(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ros.Stack",
):
    '''A ROS resource type:  ``ALIYUN::ROS::Stack``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Optional["StackProps"] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ROS::Stack``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ros.StackProps",
    jsii_struct_bases=[],
    name_mapping={
        "parameters": "parameters",
        "resource_group_id": "resourceGroupId",
        "template_body": "templateBody",
        "template_id": "templateId",
        "template_url": "templateUrl",
        "template_version": "templateVersion",
        "timeout_mins": "timeoutMins",
    },
)
class StackProps:
    def __init__(
        self,
        *,
        parameters: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        template_body: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        template_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        template_url: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        template_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        timeout_mins: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ROS::Stack``.

        :param parameters: Property parameters: The set of parameters passed to this nested stack.
        :param resource_group_id: Property resourceGroupId: Resource group.
        :param template_body: Property templateBody: Structure containing the template body. It is just to facilitate the passing of template. It is raw content.Functions in TemplateBody will not be resolved in parent stack. You must specify either the TemplateBody or the TemplateURL property. If both are specified, TemplateBody will be used.
        :param template_id: Property templateId: Template ID of template containing the template body.
        :param template_url: Property templateUrl: Location of file containing the template body. The URL must point to a template (max size: 524288 bytes) that is located in a http web server(http, https), or an Aliyun OSS bucket(Such as oss://ros-template/demo?RegionId=cn-hangzhou, oss://ros-template/demo. RegionId is default to the value of RegionId Parameter of the request.). You must specify either the TemplateBody or the TemplateURL property. If both are specified, TemplateBody will be used.
        :param template_version: Property templateVersion: Template version of template containing the template body.
        :param timeout_mins: Property timeoutMins: The length of time, in minutes, to wait for the nested stack creation or update. Default to 60 minutes.
        '''
        self._values: typing.Dict[str, typing.Any] = {}
        if parameters is not None:
            self._values["parameters"] = parameters
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if template_body is not None:
            self._values["template_body"] = template_body
        if template_id is not None:
            self._values["template_id"] = template_id
        if template_url is not None:
            self._values["template_url"] = template_url
        if template_version is not None:
            self._values["template_version"] = template_version
        if timeout_mins is not None:
            self._values["timeout_mins"] = timeout_mins

    @builtins.property
    def parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property parameters: The set of parameters passed to this nested stack.'''
        result = self._values.get("parameters")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property resourceGroupId: Resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def template_body(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property templateBody: Structure containing the template body.

        It is just to facilitate the passing of template. It is raw content.Functions in TemplateBody will not be resolved in parent stack.
        You must specify either the TemplateBody or the TemplateURL property. If both are specified, TemplateBody will be used.
        '''
        result = self._values.get("template_body")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def template_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property templateId: Template ID of template containing the template body.'''
        result = self._values.get("template_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def template_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property templateUrl: Location of file containing the template body.

        The URL must point to a template (max size: 524288 bytes) that is located in a http web server(http, https), or an Aliyun OSS bucket(Such as oss://ros-template/demo?RegionId=cn-hangzhou, oss://ros-template/demo. RegionId is default to the value of RegionId Parameter of the request.).
        You must specify either the TemplateBody or the TemplateURL property. If both are specified, TemplateBody will be used.
        '''
        result = self._values.get("template_url")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def template_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property templateVersion: Template version of template containing the template body.'''
        result = self._values.get("template_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def timeout_mins(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property timeoutMins: The length of time, in minutes, to wait for the nested stack creation or update.

        Default to 60 minutes.
        '''
        result = self._values.get("timeout_mins")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "StackProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class WaitCondition(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ros.WaitCondition",
):
    '''A ROS resource type:  ``ALIYUN::ROS::WaitCondition``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "WaitConditionProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ROS::WaitCondition``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrData")
    def attr_data(self) -> ros_cdk_core.IResolvable:
        '''Attribute Data: JSON serialized dict containing data associated with wait condition signals sent to the handle.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrData"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrErrorData")
    def attr_error_data(self) -> ros_cdk_core.IResolvable:
        '''Attribute ErrorData: JSON serialized dict containing data associated with wait condition error signals sent to the handle.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrErrorData"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrJoinedErrorData")
    def attr_joined_error_data(self) -> ros_cdk_core.IResolvable:
        '''Attribute JoinedErrorData: String containing data associated with wait condition error signals sent to the handle.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrJoinedErrorData"))


class WaitConditionHandle(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ros.WaitConditionHandle",
):
    '''A ROS resource type:  ``ALIYUN::ROS::WaitConditionHandle``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Optional["WaitConditionHandleProps"] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ROS::WaitConditionHandle``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCurlCli")
    def attr_curl_cli(self) -> ros_cdk_core.IResolvable:
        '''Attribute CurlCli: Convenience attribute, provides curl CLI command prefix, which can be used for signalling handle completion or failure.

        You can signal success by adding --data-binary '{"status": "SUCCESS"}' , or signal failure by adding --data-binary '{"status": "FAILURE"}'
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCurlCli"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrHeaders")
    def attr_headers(self) -> ros_cdk_core.IResolvable:
        '''Attribute Headers: HTTP POST Headers used for signalling handle completion or failure.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHeaders"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPowerShellCurlCli")
    def attr_power_shell_curl_cli(self) -> ros_cdk_core.IResolvable:
        '''Attribute PowerShellCurlCli: Convenience attribute, provides curl CLI command prefix for PowerShell, which can be used for signalling handle completion or failure.

        As this cmdlet was introduced in PowerShell 3.0, ensure the version of PowerShell satisfies the constraint. (Show the version via $PSVersionTable.PSVersion.) You can signal success by adding -Body '{"status": "SUCCESS"}' , or signal failure by adding -Body '{"status": "FAILURE"}'
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPowerShellCurlCli"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrUrl")
    def attr_url(self) -> ros_cdk_core.IResolvable:
        '''Attribute URL: HTTP POST URL used for signalling handle completion or failure.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrUrl"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrWindowsCurlCli")
    def attr_windows_curl_cli(self) -> ros_cdk_core.IResolvable:
        '''Attribute WindowsCurlCli: Convenience attribute, provides curl CLI command prefix for Windows, which can be used for signalling handle completion or failure.

        As Windows does not support curl command, you need to install curl.exe and add it to PATH first. You can signal success by adding --data-binary "{"status": "SUCCESS"}" , or signal failure by adding --data-binary "{"status": "FAILURE"}"
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrWindowsCurlCli"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ros.WaitConditionHandleProps",
    jsii_struct_bases=[],
    name_mapping={"count": "count", "mode": "mode"},
)
class WaitConditionHandleProps:
    def __init__(
        self,
        *,
        count: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ROS::WaitConditionHandle``.

        :param count: Property count: There are 3 preconditions that make Count taking effect: 1.Mode is set to Full. 2.Count >= 0. 3.The id of signal is not specified. If so, it will be a self-increasing integer started from 1. For example, the id of the first signal is 1, the id of the second signal is 2, and so on. If Count takes effect, signals with id > Count will be deleted before update. The default value is -1, which means no effect. It is recommended to quote the same value with WaitCondition.Count.
        :param mode: Property mode: If set to Increment, all old signals will be deleted before update. In this mode, WaitCondition.Count should reference an incremental value instead of a full value, such as ScalingGroupEnable.ScalingRuleArisExecuteResultNumberOfAddedInstances. If set to Full, no old signal will be deleted unless Count is set. In this mode, WaitCondition.Count should reference a full value, such as the same value with InstanceGroup.MaxAmount. It is recommended to use this mode with Count. Default to Full.
        '''
        self._values: typing.Dict[str, typing.Any] = {}
        if count is not None:
            self._values["count"] = count
        if mode is not None:
            self._values["mode"] = mode

    @builtins.property
    def count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property count: There are 3 preconditions that make Count taking effect: 1.Mode is set to Full. 2.Count >= 0. 3.The id of signal is not specified. If so, it will be a self-increasing integer started from 1. For example, the id of the first signal is 1, the id of the second signal is 2, and so on.

        If Count takes effect, signals with id > Count will be deleted before update.
        The default value is -1, which means no effect.
        It is recommended to quote the same value with WaitCondition.Count.
        '''
        result = self._values.get("count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property mode: If set to Increment, all old signals will be deleted before update.

        In this mode, WaitCondition.Count should reference an incremental value instead of a full value, such as ScalingGroupEnable.ScalingRuleArisExecuteResultNumberOfAddedInstances.

        If set to Full, no old signal will be deleted unless Count is set. In this mode, WaitCondition.Count should reference a full value, such as the same value with InstanceGroup.MaxAmount. It is recommended to use this mode with Count.

        Default to Full.
        '''
        result = self._values.get("mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "WaitConditionHandleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ros.WaitConditionProps",
    jsii_struct_bases=[],
    name_mapping={
        "handle": "handle",
        "timeout": "timeout",
        "count": "count",
        "show_progress_event": "showProgressEvent",
    },
)
class WaitConditionProps:
    def __init__(
        self,
        *,
        handle: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        timeout: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        count: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        show_progress_event: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ROS::WaitCondition``.

        :param handle: Property handle: A reference to the wait condition handle used to signal this wait condition.
        :param timeout: Property timeout: The number of seconds to wait for the correct number of signals to arrive.
        :param count: Property count: The number of success signals that must be received before the stack creation process continues.
        :param show_progress_event: Property showProgressEvent: Whether to generate progress changed event. Default to Disabled.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "handle": handle,
            "timeout": timeout,
        }
        if count is not None:
            self._values["count"] = count
        if show_progress_event is not None:
            self._values["show_progress_event"] = show_progress_event

    @builtins.property
    def handle(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property handle: A reference to the wait condition handle used to signal this wait condition.'''
        result = self._values.get("handle")
        assert result is not None, "Required property 'handle' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def timeout(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property timeout: The number of seconds to wait for the correct number of signals to arrive.'''
        result = self._values.get("timeout")
        assert result is not None, "Required property 'timeout' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property count: The number of success signals that must be received before the stack creation process continues.'''
        result = self._values.get("count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def show_progress_event(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property showProgressEvent: Whether to generate progress changed event.

        Default to Disabled.
        '''
        result = self._values.get("show_progress_event")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "WaitConditionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "AutoEnableService",
    "AutoEnableServiceProps",
    "CustomResource",
    "CustomResourceProps",
    "ResourceCleaner",
    "ResourceCleanerProps",
    "RosAutoEnableService",
    "RosAutoEnableServiceProps",
    "RosCustomResource",
    "RosCustomResourceProps",
    "RosResourceCleaner",
    "RosResourceCleanerProps",
    "RosSleep",
    "RosSleepProps",
    "RosStack",
    "RosStackProps",
    "RosWaitCondition",
    "RosWaitConditionHandle",
    "RosWaitConditionHandleProps",
    "RosWaitConditionProps",
    "Sleep",
    "SleepProps",
    "Stack",
    "StackProps",
    "WaitCondition",
    "WaitConditionHandle",
    "WaitConditionHandleProps",
    "WaitConditionProps",
]

publication.publish()
