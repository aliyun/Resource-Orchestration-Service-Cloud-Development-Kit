import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::ROS::AutoEnableService`
 */
export interface RosAutoEnableServiceProps {
    /**
     * @Property serviceName: Which service to enable. Valid values:
     * AHAS: Application High Availability Service
     * ARMS: Realtime Monitoring Service
     * ApiGateway: API Gateway
     * BatchCompute: Batch Compute
     * BrainIndustrial: Brain Industrial
     * CloudStorageGateway: Cloud Storage Gateway
     * CMS: Cloud Monitor Service
     * CR: Container Registry
     * CS: Container Service
     * DataHub: Data Hub
     * DataWorks: DataWorks
     * DCDN: Dynamic Route for CDN
     * EDAS: Enterprise Distributed Application Service
     * EMAS: Enterprise Mobile Application Studio
     * FC: Function Compute
     * FNF: Serverless Workflow
     * MaxCompute: MaxCompute
     * NAS: Network Attached Storage
     * MNS: Message Service (MNS)
     * HBR: Hybrid Backup Recovery
     * IMM: Intelligent Media Management
     * IOT: IoT Platform
     * KMS: Key Management Service
     * NLP: Natural Language Processing
     * OSS: Object Storage Service
     * OTS: Table Store
     * PrivateLink: Private Link
     * PrivateZone: Private Zone
     * RocketMQ: RocketMQ
     * SAE: Serverless App Engine
     * SLS: Log Service
     * TrafficMirror: VPC Traffic Mirroring
     * VS: Video Surveillance
     * Xtrace: Tracing Anlaysis
     *
     */
    readonly serviceName: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::ROS::AutoEnableService`
 */
export declare class RosAutoEnableService extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROS::AutoEnableService";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property serviceName: Which service to enable. Valid values:
     * AHAS: Application High Availability Service
     * ARMS: Realtime Monitoring Service
     * ApiGateway: API Gateway
     * BatchCompute: Batch Compute
     * BrainIndustrial: Brain Industrial
     * CloudStorageGateway: Cloud Storage Gateway
     * CMS: Cloud Monitor Service
     * CR: Container Registry
     * CS: Container Service
     * DataHub: Data Hub
     * DataWorks: DataWorks
     * DCDN: Dynamic Route for CDN
     * EDAS: Enterprise Distributed Application Service
     * EMAS: Enterprise Mobile Application Studio
     * FC: Function Compute
     * FNF: Serverless Workflow
     * MaxCompute: MaxCompute
     * NAS: Network Attached Storage
     * MNS: Message Service (MNS)
     * HBR: Hybrid Backup Recovery
     * IMM: Intelligent Media Management
     * IOT: IoT Platform
     * KMS: Key Management Service
     * NLP: Natural Language Processing
     * OSS: Object Storage Service
     * OTS: Table Store
     * PrivateLink: Private Link
     * PrivateZone: Private Zone
     * RocketMQ: RocketMQ
     * SAE: Serverless App Engine
     * SLS: Log Service
     * TrafficMirror: VPC Traffic Mirroring
     * VS: Video Surveillance
     * Xtrace: Tracing Anlaysis
     *
     */
    serviceName: string | ros.IResolvable;
    /**
     * Create a new `ALIYUN::ROS::AutoEnableService`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAutoEnableServiceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `ALIYUN::ROS::CustomResource`
 */
export interface RosCustomResourceProps {
    /**
     * @Property serviceToken: The service token that was given to the template developer by the service provider to access the service.
     * Allowed values:
     * - Function Compute: acs:fc:<region_id>:<account_id>:services/<service_name>/functions/<function_name>
     * - MNS Queue: acs:mns:<region_id>:<account_id>:queues/<queue_name> or acs:mns:<region_id>:<account_id>:/queues/<queue_name>
     * - MNS Topic: acs:mns:<region_id>:<account_id>:topics/<topic_name> or acs:mns:<region_id>:<account_id>:/topics/<topic_name>
     * - HTTP&HTTPS: web[options]:<url>
     *   Two options are supported:
     *   - sync: sync HTTP&HTTPS request.
     *   - idempotent: indicates that the Create request is idempotent. Update and Delete requests should be always idempotent.
     * Examples:
     *   - acs:fc:cn-hangzhou:123456789:services/test-service/functions/test-function
     *   - acs:mns:cn-hangzhou:123456789:queues/test-queue
     *   - acs:mns:cn-hangzhou:123456789:/queues/test-queue
     *   - acs:mns:cn-hangzhou:123456789:topics/test-topic
     *   - acs:mns:cn-hangzhou:123456789:/topics/test-topic
     *   - web:https://abc.com
     *   - web[sync]:http://abc.com
     *   - web[sync,idempotent]:https://abc.com
     */
    readonly serviceToken: string | ros.IResolvable;
    /**
     * @Property timeout: Timeout seconds before service provider responses.
     * It takes effects only if the type of ServiceToken is Function Compute, MNS Queue, MNS Topic or async HTTP&HTTPS request.
     * Timeout seconds are always 10 for sync HTTP&HTTPS request.
     */
    readonly timeout: number | ros.IResolvable;
    /**
     * @Property httpConfig: Config for HTTP&HTTPS service provider.
     */
    readonly httpConfig?: RosCustomResource.HttpConfigProperty | ros.IResolvable;
    /**
     * @Property parameters: Parameters to be passed to service provider.
     */
    readonly parameters?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::ROS::CustomResource`
 */
export declare class RosCustomResource extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROS::CustomResource";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute Outputs: Output data received from service provider.
     */
    readonly attrOutputs: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property serviceToken: The service token that was given to the template developer by the service provider to access the service.
     * Allowed values:
     * - Function Compute: acs:fc:<region_id>:<account_id>:services/<service_name>/functions/<function_name>
     * - MNS Queue: acs:mns:<region_id>:<account_id>:queues/<queue_name> or acs:mns:<region_id>:<account_id>:/queues/<queue_name>
     * - MNS Topic: acs:mns:<region_id>:<account_id>:topics/<topic_name> or acs:mns:<region_id>:<account_id>:/topics/<topic_name>
     * - HTTP&HTTPS: web[options]:<url>
     *   Two options are supported:
     *   - sync: sync HTTP&HTTPS request.
     *   - idempotent: indicates that the Create request is idempotent. Update and Delete requests should be always idempotent.
     * Examples:
     *   - acs:fc:cn-hangzhou:123456789:services/test-service/functions/test-function
     *   - acs:mns:cn-hangzhou:123456789:queues/test-queue
     *   - acs:mns:cn-hangzhou:123456789:/queues/test-queue
     *   - acs:mns:cn-hangzhou:123456789:topics/test-topic
     *   - acs:mns:cn-hangzhou:123456789:/topics/test-topic
     *   - web:https://abc.com
     *   - web[sync]:http://abc.com
     *   - web[sync,idempotent]:https://abc.com
     */
    serviceToken: string | ros.IResolvable;
    /**
     * @Property timeout: Timeout seconds before service provider responses.
     * It takes effects only if the type of ServiceToken is Function Compute, MNS Queue, MNS Topic or async HTTP&HTTPS request.
     * Timeout seconds are always 10 for sync HTTP&HTTPS request.
     */
    timeout: number | ros.IResolvable;
    /**
     * @Property httpConfig: Config for HTTP&HTTPS service provider.
     */
    httpConfig: RosCustomResource.HttpConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property parameters: Parameters to be passed to service provider.
     */
    parameters: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::ROS::CustomResource`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCustomResourceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosCustomResource {
    /**
     * @stability external
     */
    interface HttpConfigProperty {
        /**
         * @Property signKey: If SignKey is specified, Signature will be added to request data.
     *   "Signature": {
     *      "Date": "2021-03-11T13:32:02Z",
     *      "Value": "10841498499ba1c4b07547a542c3a8718235f983"
     *   }
     * Date: the UTC time to send request, which follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
     * Value: the signature value calculated from the algorithm below.
     *
     * The signature algorithm:
     * 1.Concatenating signature string:POST
     * \n
     * <content type: if ContentType is specified, use it, else use application/json.>
     * \n
     * <md5 of request data: without Signature, json format, utf-8 encoded, sort keys, ensure ascii.>
     * \n
     * <Date in Signature>
     * \n
     * <header 1 key: sort in alphabetical order>:<header 1 value>
     * \n
     * ...<header N key>:<header 2 value>
     * \n
     * <url in ServiceToken: such as https://abc.com>
     * 2.calculate signature with sha1.
         */
        readonly signKey?: string | ros.IResolvable;
        /**
         * @Property contentType: Content type of request body.
         */
        readonly contentType?: string | ros.IResolvable;
        /**
         * @Property headers: Headers to be passed.
         */
        readonly headers?: {
            [key: string]: (any | ros.IResolvable);
        } | ros.IResolvable;
    }
}
/**
 * Properties for defining a `ALIYUN::ROS::ResourceCleaner`
 */
export interface RosResourceCleanerProps {
    /**
     * @Property action: Resource cleaner actions:
     * - Scan: Scanning phase. Scan out the resources to be cleaned up.
     * - CleanUp: Cleanup phase. Clean up the scanned resources. It it not allowed for resource creation.
     * - Scan+CleanUp: Scan first, then CleanUp.
     * - ScanWhenCreatingAndUpdating+CleanUpWhenDeleting: Scan when creating or updating resource, and CleanUp when deleting stack.
     */
    readonly action: string | ros.IResolvable;
    /**
     * @Property cleanUpAlgorithm: The cleanup algorithm of cleanup phase:
     * - ResourceDependency: Clean up by resource dependency tree.
     * - ResourceTypeOrder: Clean up by resource type order. Property ResourceTypeOrder can be used to specify resource type order. If it is not specified, a default order will be used.
     * Default to ResourceDependency.
     */
    readonly cleanUpAlgorithm?: string | ros.IResolvable;
    /**
     * @Property cleanUpRetryCount: The maximum number of executions of cleanup phase.
     * Default to 1, which means no retry.
     * Conditions that trigger a retry: (the relationship is or)
     * 1.There are resources which fail to be cleaned up.
     * 2.The cleanup is timeout.
     */
    readonly cleanUpRetryCount?: number | ros.IResolvable;
    /**
     * @Property cleanUpTimeout: The timeout seconds of executions of cleanup phase.
     * Default to 1 hour.
     */
    readonly cleanUpTimeout?: number | ros.IResolvable;
    /**
     * @Property disabledSideEffects: Side effects to be disabled.
     * Cleaning up some resources will cause some side effects. If is not expected, use the property to disable them.
     * The side effects can be found in response(ResourceCleaner) of API GetFeatureDetails.
     */
    readonly disabledSideEffects?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property excludedResources: Exclude parts from resources to be cleaned up.
     */
    readonly excludedResources?: Array<RosResourceCleaner.ExcludedResourcesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property failureOption: The failure option of cleanup phase:
     * - Normal: Resource failure does not affect the resources that depend on it.
     * - Fast: Resource failure causes all resources that depend on it to fail.
     * Default to Normal.
     */
    readonly failureOption?: string | ros.IResolvable;
    /**
     * @Property mode: The result mode of resource cleaner:
     * - Strict: Any scanning or cleanup failure leads to the failure of the cleaner.
     * - Loose: Only a little scanning and cleanup failures lead to the failure of the cleaner. Most scanning failures will be ignored, failure messages can be found in ScanErrors or ResourceDetails. Most cleanup failures will be ignored, failure messages can be found in ResourceDetails.
     * Default to Loose.
     */
    readonly mode?: string | ros.IResolvable;
    /**
     * @Property resourceFilters: Resource filters that ResourceCleaner uses to filter out the resources to be cleaned up during scanning.
     * Only one of ResourceFilters and Resources can be specified.
     * There are two filtering behaviors(Effect): Allow and Deny. The filters work as below:
     * 1.Any resource denied by any Deny filter will not be cleaned up.
     * 2.Only resources allowed by some Allow filter and not denied by any Deny filter will be cleaned up.
     * If filters are changed during resource update, ResourceCleaner requires to rescan. And if Action equals CleanUp, an error occurs.
     */
    readonly resourceFilters?: Array<RosResourceCleaner.ResourceFiltersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property resources: Resources to be cleaned up.
     * Only one of Resources and ResourceFilters can be specified.
     */
    readonly resources?: Array<RosResourceCleaner.ResourcesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property resourceTypeOrder: This property takes effect only when property CleanUpAlgorithm is ResourceTypeOrder.
     * If it takes effect:
     * - Resources will be cleaned up in order from front to back.
     * - Resource with resource type not specified in this property will not be cleaned up.
     */
    readonly resourceTypeOrder?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::ROS::ResourceCleaner`
 */
export declare class RosResourceCleaner extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROS::ResourceCleaner";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute CleanResult: The cleanup result. Valid values:
- Success: All resources are cleaned up successfully.
- ResourceFailure: Partial resources fail to clean up.
- Timeout: Timeout to clean up.
- CheckFailure: Pre check of cleanup fails.
- UnknownFailure: Unexpected failure.
- UserCancelled: Cleanup is cancelled by user.
- None: Cleanup is not triggered.
     */
    readonly attrCleanResult: ros.IResolvable;
    /**
     * @Attribute NoCleanupResourceDetails: The details of the resources that are scanned but filtered.
Only resources with the resource types ResourceCleaner supports and the regions not filtered are scanned.
The format is the same as ResourceDetails.
     */
    readonly attrNoCleanupResourceDetails: ros.IResolvable;
    /**
     * @Attribute NoCleanupResourcePartialDetails: The partial details of the resources that are scanned but filtered.
Only resources with the resource types ResourceCleaner supports and the regions not filtered are scanned.
The format is the same as ResourcePartialDetails.
     */
    readonly attrNoCleanupResourcePartialDetails: ros.IResolvable;
    /**
     * @Attribute ResourceDetails: The details of resources to be cleaned up.
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
     */
    readonly attrResourceDetails: ros.IResolvable;
    /**
     * @Attribute ResourcePartialDetails: The partial details of resources to be cleaned up.
The value is a list of dict. The dict contains the fields below:
- ResourceType: Resource type of the resource.
- RegionId: Region ID of the resource.
- ResourceId: ID of the resource.
- ResourceName: Name of the resource.
- ResourceStatus: Status of the resource. Valid values:
  - Deleting: The resource is deleting.
  - Failure: The deletion of the resource failed.
  - Success: The resource is deleted.
  - Skipped: The deletion of the resource is skipped.
  - Pending: The deletion of the resource is not started.
- ResourceStatusReason: The information of the related ResourceStatus.
     */
    readonly attrResourcePartialDetails: ros.IResolvable;
    /**
     * @Attribute ResourceSummary: The details of resources to be cleaned up.
The value is a list of dict. The dict contains the fields below:
- ResourceType: Resource type of the resources.
- DeletingCount: Number of deleting resources of the resource type.
- SuccessCount: Number of deleted resources of the resource type.
- FailureCount: Number of resources that failed to delete of the resource type.
- SkippedCount: Number of skipped resources of the resource type.
- PendingCount: Number of resources that have not been deleted of the resource type.
- OtherCount: Number of other resources of the resource type.
- TotalCount: Number of total resources of the resource type.
     */
    readonly attrResourceSummary: ros.IResolvable;
    /**
     * @Attribute ScanErrors: The scan errors. It takes effect only when property Mode is Loose.
The value is a list of dict. The dict contains the fields below:
- ResourceType: Resource type for scanning.
- RegionId: Region ID for scanning.
- ErrorMessage: Error message of scanning with specified resource type and region ID.
     */
    readonly attrScanErrors: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property action: Resource cleaner actions:
     * - Scan: Scanning phase. Scan out the resources to be cleaned up.
     * - CleanUp: Cleanup phase. Clean up the scanned resources. It it not allowed for resource creation.
     * - Scan+CleanUp: Scan first, then CleanUp.
     * - ScanWhenCreatingAndUpdating+CleanUpWhenDeleting: Scan when creating or updating resource, and CleanUp when deleting stack.
     */
    action: string | ros.IResolvable;
    /**
     * @Property cleanUpAlgorithm: The cleanup algorithm of cleanup phase:
     * - ResourceDependency: Clean up by resource dependency tree.
     * - ResourceTypeOrder: Clean up by resource type order. Property ResourceTypeOrder can be used to specify resource type order. If it is not specified, a default order will be used.
     * Default to ResourceDependency.
     */
    cleanUpAlgorithm: string | ros.IResolvable | undefined;
    /**
     * @Property cleanUpRetryCount: The maximum number of executions of cleanup phase.
     * Default to 1, which means no retry.
     * Conditions that trigger a retry: (the relationship is or)
     * 1.There are resources which fail to be cleaned up.
     * 2.The cleanup is timeout.
     */
    cleanUpRetryCount: number | ros.IResolvable | undefined;
    /**
     * @Property cleanUpTimeout: The timeout seconds of executions of cleanup phase.
     * Default to 1 hour.
     */
    cleanUpTimeout: number | ros.IResolvable | undefined;
    /**
     * @Property disabledSideEffects: Side effects to be disabled.
     * Cleaning up some resources will cause some side effects. If is not expected, use the property to disable them.
     * The side effects can be found in response(ResourceCleaner) of API GetFeatureDetails.
     */
    disabledSideEffects: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property excludedResources: Exclude parts from resources to be cleaned up.
     */
    excludedResources: Array<RosResourceCleaner.ExcludedResourcesProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property failureOption: The failure option of cleanup phase:
     * - Normal: Resource failure does not affect the resources that depend on it.
     * - Fast: Resource failure causes all resources that depend on it to fail.
     * Default to Normal.
     */
    failureOption: string | ros.IResolvable | undefined;
    /**
     * @Property mode: The result mode of resource cleaner:
     * - Strict: Any scanning or cleanup failure leads to the failure of the cleaner.
     * - Loose: Only a little scanning and cleanup failures lead to the failure of the cleaner. Most scanning failures will be ignored, failure messages can be found in ScanErrors or ResourceDetails. Most cleanup failures will be ignored, failure messages can be found in ResourceDetails.
     * Default to Loose.
     */
    mode: string | ros.IResolvable | undefined;
    /**
     * @Property resourceFilters: Resource filters that ResourceCleaner uses to filter out the resources to be cleaned up during scanning.
     * Only one of ResourceFilters and Resources can be specified.
     * There are two filtering behaviors(Effect): Allow and Deny. The filters work as below:
     * 1.Any resource denied by any Deny filter will not be cleaned up.
     * 2.Only resources allowed by some Allow filter and not denied by any Deny filter will be cleaned up.
     * If filters are changed during resource update, ResourceCleaner requires to rescan. And if Action equals CleanUp, an error occurs.
     */
    resourceFilters: Array<RosResourceCleaner.ResourceFiltersProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property resources: Resources to be cleaned up.
     * Only one of Resources and ResourceFilters can be specified.
     */
    resources: Array<RosResourceCleaner.ResourcesProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property resourceTypeOrder: This property takes effect only when property CleanUpAlgorithm is ResourceTypeOrder.
     * If it takes effect:
     * - Resources will be cleaned up in order from front to back.
     * - Resource with resource type not specified in this property will not be cleaned up.
     */
    resourceTypeOrder: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::ROS::ResourceCleaner`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosResourceCleanerProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosResourceCleaner {
    /**
     * @stability external
     */
    interface ExcludedResourcesProperty {
        /**
         * @Property resourceId: The ID of the resource to be excluded.
         */
        readonly resourceId: string | ros.IResolvable;
        /**
         * @Property resourceType: The resource type of the resource to be excluded.
     * The allowed values are the resource types that ResourceCleaner supports to clean up.
         */
        readonly resourceType?: string | ros.IResolvable;
        /**
         * @Property regionId: The region ID of the resource to be excluded.
         */
        readonly regionId?: string | ros.IResolvable;
    }
}
export declare namespace RosResourceCleaner {
    /**
     * @stability external
     */
    interface ResourceFiltersProperty {
        /**
         * @Property includeDeletionProtection: Whether to include delete protected resources.
     * Default to True.
         */
        readonly includeDeletionProtection?: boolean | ros.IResolvable;
        /**
         * @Property resourceTypePatterns: Resource type fuzzy matching filtering.
     * The relationship of each item is or.
         */
        readonly resourceTypePatterns?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property resourceIds: Resource ID filtering.
     * The relationship of each item is or.
         */
        readonly resourceIds?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property regionIds: Region filtering.
     * The relationship of each item is or.
         */
        readonly regionIds?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property resourceGroupIds: Resource group filtering.
     * The relationship of each item is or.
         */
        readonly resourceGroupIds?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property effect: Filtering behavior:
     * - Allow: Resource might be cleaned up if it passes the filter, will not be cleaned up if it does not pass the filter.
     * - Deny: Resource will not be cleaned up if it passes the filter.See also ResourceFilters for more details.
         */
        readonly effect?: string | ros.IResolvable;
        /**
         * @Property resourceNamePatterns: Resource name fuzzy matching filtering.
     * The relationship of each item is or.
         */
        readonly resourceNamePatterns?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property tags: Tag filtering, including custom tags and visible system tags.
     * The relationship of items with different Keys is and. The relationship of items with same Key is or.
         */
        readonly tags?: RosResourceCleaner.TagsProperty[];
    }
}
export declare namespace RosResourceCleaner {
    /**
     * @stability external
     */
    interface ResourcesProperty {
        /**
         * @Property resourceId: The ID of the resource to be cleaned up.
         */
        readonly resourceId: string | ros.IResolvable;
        /**
         * @Property resourceType: The resource type of the resource to be cleaned up.
     * The allowed values are the resource types that ResourceCleaner supports to clean up.
         */
        readonly resourceType: string | ros.IResolvable;
        /**
         * @Property regionId: The region ID of the resource to be cleaned up.
         */
        readonly regionId: string | ros.IResolvable;
    }
}
export declare namespace RosResourceCleaner {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: Tag value.
     * If Value is not specified, as long as the tag key of the resource to be filtered exists, the resource passes the filtering of the tag key.
     * If multiple different Values is specified for the same tag Key, as long as the resource to be filtered contains a pair of them, the resource passes the filtering of the tag key.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: Tag key.
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `ALIYUN::ROS::Sleep`
 */
export interface RosSleepProps {
    /**
     * @Property createDuration: The number of seconds to wait before resource creation.
     */
    readonly createDuration?: number | ros.IResolvable;
    /**
     * @Property deleteDuration: The number of seconds to wait before resource deletion.
     */
    readonly deleteDuration?: number | ros.IResolvable;
    /**
     * @Property triggers: Arbitrary map of values that, when changed, will run update or update rollback delays again.
     */
    readonly triggers?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property updateDuration: The number of seconds to wait before resource update. It only triggers when the property Triggers change and the status of stack is UPDATE_IN_PROGRESS.
     */
    readonly updateDuration?: number | ros.IResolvable;
    /**
     * @Property updateRollbackDuration: The number of seconds to wait before resource update rollback. It only triggers when stack update failed and resource was updated.
     */
    readonly updateRollbackDuration?: number | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::ROS::Sleep`
 */
export declare class RosSleep extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROS::Sleep";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property createDuration: The number of seconds to wait before resource creation.
     */
    createDuration: number | ros.IResolvable | undefined;
    /**
     * @Property deleteDuration: The number of seconds to wait before resource deletion.
     */
    deleteDuration: number | ros.IResolvable | undefined;
    /**
     * @Property triggers: Arbitrary map of values that, when changed, will run update or update rollback delays again.
     */
    triggers: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property updateDuration: The number of seconds to wait before resource update. It only triggers when the property Triggers change and the status of stack is UPDATE_IN_PROGRESS.
     */
    updateDuration: number | ros.IResolvable | undefined;
    /**
     * @Property updateRollbackDuration: The number of seconds to wait before resource update rollback. It only triggers when stack update failed and resource was updated.
     */
    updateRollbackDuration: number | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::ROS::Sleep`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSleepProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `ALIYUN::ROS::Stack`
 */
export interface RosStackProps {
    /**
     * @Property parameters: The set of parameters passed to this nested stack.
     */
    readonly parameters?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property resourceGroupId: Resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property templateBody: Structure containing the template body.
     * It is just to facilitate the passing of template. It is raw content.Functions in TemplateBody will not be resolved in parent stack.
     * You must specify either the TemplateBody or the TemplateURL property. If both are specified, TemplateBody will be used.
     */
    readonly templateBody?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property templateId: Template ID of template containing the template body.
     */
    readonly templateId?: string | ros.IResolvable;
    /**
     * @Property templateUrl: Location of file containing the template body. The URL must point to a template (max size: 524288 bytes) that is located in a http web server(http, https), or an Aliyun OSS bucket(Such as oss://ros-template/demo?RegionId=cn-hangzhou, oss://ros-template/demo. RegionId is default to the value of RegionId Parameter of the request.).
     * You must specify either the TemplateBody or the TemplateURL property. If both are specified, TemplateBody will be used.
     */
    readonly templateUrl?: string | ros.IResolvable;
    /**
     * @Property templateVersion: Template version of template containing the template body.
     */
    readonly templateVersion?: string | ros.IResolvable;
    /**
     * @Property timeoutMins: The length of time, in minutes, to wait for the nested stack creation or update. Default to 60 minutes.
     */
    readonly timeoutMins?: number | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::ROS::Stack`
 */
export declare class RosStack extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROS::Stack";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property parameters: The set of parameters passed to this nested stack.
     */
    parameters: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property templateBody: Structure containing the template body.
     * It is just to facilitate the passing of template. It is raw content.Functions in TemplateBody will not be resolved in parent stack.
     * You must specify either the TemplateBody or the TemplateURL property. If both are specified, TemplateBody will be used.
     */
    templateBody: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property templateId: Template ID of template containing the template body.
     */
    templateId: string | ros.IResolvable | undefined;
    /**
     * @Property templateUrl: Location of file containing the template body. The URL must point to a template (max size: 524288 bytes) that is located in a http web server(http, https), or an Aliyun OSS bucket(Such as oss://ros-template/demo?RegionId=cn-hangzhou, oss://ros-template/demo. RegionId is default to the value of RegionId Parameter of the request.).
     * You must specify either the TemplateBody or the TemplateURL property. If both are specified, TemplateBody will be used.
     */
    templateUrl: string | ros.IResolvable | undefined;
    /**
     * @Property templateVersion: Template version of template containing the template body.
     */
    templateVersion: string | ros.IResolvable | undefined;
    /**
     * @Property timeoutMins: The length of time, in minutes, to wait for the nested stack creation or update. Default to 60 minutes.
     */
    timeoutMins: number | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::ROS::Stack`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosStackProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `ALIYUN::ROS::StackGroup`
 */
export interface RosStackGroupProps {
    /**
     * @Property stackGroupName: undefined
     */
    readonly stackGroupName: string | ros.IResolvable;
    /**
     * @Property administrationRoleName: undefined
     */
    readonly administrationRoleName?: string | ros.IResolvable;
    /**
     * @Property autoDeployment: undefined
     */
    readonly autoDeployment?: RosStackGroup.AutoDeploymentProperty | ros.IResolvable;
    /**
     * @Property description: undefined
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property dynamicTemplateBody: undefined
     */
    readonly dynamicTemplateBody?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property executionRoleName: undefined
     */
    readonly executionRoleName?: string | ros.IResolvable;
    /**
     * @Property parameters: undefined
     */
    readonly parameters?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property permissionModel: undefined
     */
    readonly permissionModel?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: undefined
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property templateBody: undefined
     */
    readonly templateBody?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property templateId: undefined
     */
    readonly templateId?: string | ros.IResolvable;
    /**
     * @Property templateUrl: undefined
     */
    readonly templateUrl?: string | ros.IResolvable;
    /**
     * @Property templateVersion: undefined
     */
    readonly templateVersion?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::ROS::StackGroup`
 */
export declare class RosStackGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROS::StackGroup";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute StackGroupId: undefined
     */
    readonly attrStackGroupId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property stackGroupName: undefined
     */
    stackGroupName: string | ros.IResolvable;
    /**
     * @Property administrationRoleName: undefined
     */
    administrationRoleName: string | ros.IResolvable | undefined;
    /**
     * @Property autoDeployment: undefined
     */
    autoDeployment: RosStackGroup.AutoDeploymentProperty | ros.IResolvable | undefined;
    /**
     * @Property description: undefined
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property dynamicTemplateBody: undefined
     */
    dynamicTemplateBody: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property executionRoleName: undefined
     */
    executionRoleName: string | ros.IResolvable | undefined;
    /**
     * @Property parameters: undefined
     */
    parameters: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property permissionModel: undefined
     */
    permissionModel: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: undefined
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property templateBody: undefined
     */
    templateBody: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property templateId: undefined
     */
    templateId: string | ros.IResolvable | undefined;
    /**
     * @Property templateUrl: undefined
     */
    templateUrl: string | ros.IResolvable | undefined;
    /**
     * @Property templateVersion: undefined
     */
    templateVersion: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::ROS::StackGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosStackGroupProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosStackGroup {
    /**
     * @stability external
     */
    interface AutoDeploymentProperty {
        /**
         * @Property enabled: undefined
         */
        readonly enabled: boolean | ros.IResolvable;
        /**
         * @Property retainStacksOnAccountRemoval: undefined
         */
        readonly retainStacksOnAccountRemoval?: boolean | ros.IResolvable;
    }
}
/**
 * Properties for defining a `ALIYUN::ROS::StackInstances`
 */
export interface RosStackInstancesProps {
    /**
     * @Property regionIds: undefined
     */
    readonly regionIds: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property stackGroupName: undefined
     */
    readonly stackGroupName: string | ros.IResolvable;
    /**
     * @Property accountIds: undefined
     */
    readonly accountIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property deploymentTargets: undefined
     */
    readonly deploymentTargets?: RosStackInstances.DeploymentTargetsProperty | ros.IResolvable;
    /**
     * @Property disableRollback: undefined
     */
    readonly disableRollback?: boolean | ros.IResolvable;
    /**
     * @Property operationDescription: undefined
     */
    readonly operationDescription?: string | ros.IResolvable;
    /**
     * @Property operationPreferences: undefined
     */
    readonly operationPreferences?: RosStackInstances.OperationPreferencesProperty | ros.IResolvable;
    /**
     * @Property parameterOverrides: undefined
     */
    readonly parameterOverrides?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property retainStacks: undefined
     */
    readonly retainStacks?: boolean | ros.IResolvable;
    /**
     * @Property timeoutInMinutes: undefined
     */
    readonly timeoutInMinutes?: number | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::ROS::StackInstances`
 */
export declare class RosStackInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROS::StackInstances";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute LastOperationId: undefined
     */
    readonly attrLastOperationId: ros.IResolvable;
    /**
     * @Attribute Stacks: undefined
     */
    readonly attrStacks: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property regionIds: undefined
     */
    regionIds: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property stackGroupName: undefined
     */
    stackGroupName: string | ros.IResolvable;
    /**
     * @Property accountIds: undefined
     */
    accountIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property deploymentTargets: undefined
     */
    deploymentTargets: RosStackInstances.DeploymentTargetsProperty | ros.IResolvable | undefined;
    /**
     * @Property disableRollback: undefined
     */
    disableRollback: boolean | ros.IResolvable | undefined;
    /**
     * @Property operationDescription: undefined
     */
    operationDescription: string | ros.IResolvable | undefined;
    /**
     * @Property operationPreferences: undefined
     */
    operationPreferences: RosStackInstances.OperationPreferencesProperty | ros.IResolvable | undefined;
    /**
     * @Property parameterOverrides: undefined
     */
    parameterOverrides: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property retainStacks: undefined
     */
    retainStacks: boolean | ros.IResolvable | undefined;
    /**
     * @Property timeoutInMinutes: undefined
     */
    timeoutInMinutes: number | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::ROS::StackInstances`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosStackInstancesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosStackInstances {
    /**
     * @stability external
     */
    interface DeploymentTargetsProperty {
        /**
         * @Property rdFolderIds: undefined
         */
        readonly rdFolderIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosStackInstances {
    /**
     * @stability external
     */
    interface OperationPreferencesProperty {
        /**
         * @Property maxConcurrentPercentage: undefined
         */
        readonly maxConcurrentPercentage?: number | ros.IResolvable;
        /**
         * @Property maxConcurrentCount: undefined
         */
        readonly maxConcurrentCount?: number | ros.IResolvable;
        /**
         * @Property failureTolerancePercentage: undefined
         */
        readonly failureTolerancePercentage?: number | ros.IResolvable;
        /**
         * @Property failureToleranceCount: undefined
         */
        readonly failureToleranceCount?: number | ros.IResolvable;
    }
}
/**
 * Properties for defining a `ALIYUN::ROS::WaitCondition`
 */
export interface RosWaitConditionProps {
    /**
     * @Property handle: A reference to the wait condition handle used to signal this wait condition.
     */
    readonly handle: string | ros.IResolvable;
    /**
     * @Property timeout: The number of seconds to wait for the correct number of signals to arrive.
     */
    readonly timeout: number | ros.IResolvable;
    /**
     * @Property count: The number of success signals that must be received before the stack creation process continues.
     */
    readonly count?: number | ros.IResolvable;
    /**
     * @Property showProgressEvent: Whether to generate progress changed event. Default to Disabled.
     */
    readonly showProgressEvent?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::ROS::WaitCondition`
 */
export declare class RosWaitCondition extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROS::WaitCondition";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute Data: JSON serialized dict containing data associated with wait condition signals sent to the handle.
     */
    readonly attrData: ros.IResolvable;
    /**
     * @Attribute ErrorData: JSON serialized dict containing data associated with wait condition error signals sent to the handle.
     */
    readonly attrErrorData: ros.IResolvable;
    /**
     * @Attribute JoinedErrorData: String containing data associated with wait condition error signals sent to the handle.
     */
    readonly attrJoinedErrorData: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property handle: A reference to the wait condition handle used to signal this wait condition.
     */
    handle: string | ros.IResolvable;
    /**
     * @Property timeout: The number of seconds to wait for the correct number of signals to arrive.
     */
    timeout: number | ros.IResolvable;
    /**
     * @Property count: The number of success signals that must be received before the stack creation process continues.
     */
    count: number | ros.IResolvable | undefined;
    /**
     * @Property showProgressEvent: Whether to generate progress changed event. Default to Disabled.
     */
    showProgressEvent: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::ROS::WaitCondition`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosWaitConditionProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `ALIYUN::ROS::WaitConditionHandle`
 */
export interface RosWaitConditionHandleProps {
    /**
     * @Property count: There are 3 preconditions that make Count taking effect:
     * 1.Mode is set to Full.
     * 2.Count >= 0.
     * 3.The id of signal is not specified. If so, it will be a self-increasing integer started from 1. For example, the id of the first signal is 1, the id of the second signal is 2, and so on.
     *
     * If Count takes effect, signals with id > Count will be deleted before update.
     * The default value is -1, which means no effect.
     * It is recommended to quote the same value with WaitCondition.Count.
     */
    readonly count?: number | ros.IResolvable;
    /**
     * @Property mode: If set to Increment, all old signals will be deleted before update. In this mode, WaitCondition.Count should reference an incremental value instead of a full value, such as ScalingGroupEnable.ScalingRuleArisExecuteResultNumberOfAddedInstances.
     *
     * If set to Full, no old signal will be deleted unless Count is set. In this mode, WaitCondition.Count should reference a full value, such as the same value with InstanceGroup.MaxAmount. It is recommended to use this mode with Count.
     *
     * Default to Full.
     */
    readonly mode?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::ROS::WaitConditionHandle`
 */
export declare class RosWaitConditionHandle extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROS::WaitConditionHandle";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute CurlCli: Convenience attribute, provides curl CLI command prefix, which can be used for signalling handle completion or failure.  You can signal success by adding --data-binary '{"status": "SUCCESS"}' , or signal failure by adding --data-binary '{"status": "FAILURE"}'
     */
    readonly attrCurlCli: ros.IResolvable;
    /**
     * @Attribute Headers: HTTP POST Headers used for signalling handle completion or failure.
     */
    readonly attrHeaders: ros.IResolvable;
    /**
     * @Attribute PowerShellCurlCli: Convenience attribute, provides curl CLI command prefix for PowerShell, which can be used for signalling handle completion or failure. As this cmdlet was introduced in PowerShell 3.0, ensure the version of PowerShell satisfies the constraint. (Show the version via $PSVersionTable.PSVersion.) You can signal success by adding -Body '{"status": "SUCCESS"}' , or signal failure by adding -Body '{"status": "FAILURE"}'
     */
    readonly attrPowerShellCurlCli: ros.IResolvable;
    /**
     * @Attribute URL: HTTP POST URL used for signalling handle completion or failure.
     */
    readonly attrUrl: ros.IResolvable;
    /**
     * @Attribute WindowsCurlCli: Convenience attribute, provides curl CLI command prefix for Windows, which can be used for signalling handle completion or failure. As Windows does not support curl command, you need to install curl.exe and add it to PATH first. You can signal success by adding --data-binary "{\"status\": \"SUCCESS\"}" , or signal failure by adding --data-binary "{\"status\": \"FAILURE\"}"
     */
    readonly attrWindowsCurlCli: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property count: There are 3 preconditions that make Count taking effect:
     * 1.Mode is set to Full.
     * 2.Count >= 0.
     * 3.The id of signal is not specified. If so, it will be a self-increasing integer started from 1. For example, the id of the first signal is 1, the id of the second signal is 2, and so on.
     *
     * If Count takes effect, signals with id > Count will be deleted before update.
     * The default value is -1, which means no effect.
     * It is recommended to quote the same value with WaitCondition.Count.
     */
    count: number | ros.IResolvable | undefined;
    /**
     * @Property mode: If set to Increment, all old signals will be deleted before update. In this mode, WaitCondition.Count should reference an incremental value instead of a full value, such as ScalingGroupEnable.ScalingRuleArisExecuteResultNumberOfAddedInstances.
     *
     * If set to Full, no old signal will be deleted unless Count is set. In this mode, WaitCondition.Count should reference a full value, such as the same value with InstanceGroup.MaxAmount. It is recommended to use this mode with Count.
     *
     * Default to Full.
     */
    mode: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::ROS::WaitConditionHandle`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosWaitConditionHandleProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
