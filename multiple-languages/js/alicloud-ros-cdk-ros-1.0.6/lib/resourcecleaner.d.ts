import * as ros from '@alicloud/ros-cdk-core';
import { RosResourceCleaner } from './ros.generated';
export { RosResourceCleaner as ResourceCleanerProperty };
/**
 * Properties for defining a `ALIYUN::ROS::ResourceCleaner`
 */
export interface ResourceCleanerProps {
    /**
     * Property action: Resource cleaner actions:
     * - Scan: Scanning phase. Scan out the resources to be cleaned up.
     * - CleanUp: Cleanup phase. Clean up the scanned resources. It it not allowed for resource creation.
     * - Scan+CleanUp: Scan first, then CleanUp.
     * - ScanWhenCreatingAndUpdating+CleanUpWhenDeleting: Scan when creating or updating resource, and CleanUp when deleting resource.
     */
    readonly action: string | ros.IResolvable;
    /**
     * Property cleanUpRetryCount: The maximum number of executions of cleanup phase.
     * Default to 1, which means no retry.
     * Conditions that trigger a retry: (the relationship is or)
     * 1.There are resources which fail to be cleaned up.
     * 2.The cleanup is timeout.
     */
    readonly cleanUpRetryCount?: number | ros.IResolvable;
    /**
     * Property cleanUpTimeout: The timeout seconds of executions of cleanup phase.
     * Default to 1 hour.
     */
    readonly cleanUpTimeout?: number | ros.IResolvable;
    /**
     * Property excludedResources: Exclude parts from resources to be cleaned up.
     */
    readonly excludedResources?: Array<RosResourceCleaner.ExcludedResourcesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property failureOption: The failure option of cleanup phase:
     * - Normal: Resource failure does not affect the resources that depend on it.
     * - Fast: Resource failure causes all resources that depend on it to fail.
     * Default to Normal.
     */
    readonly failureOption?: string | ros.IResolvable;
    /**
     * Property resourceFilters: Resource filters that ResourceCleaner uses to filter out the resources to be cleaned up during scanning.
     * There are two filtering behaviors(Effect): Allow and Deny. The filters work as below:
     * 1.Any resource denied by any Deny filter will not be cleaned up.
     * 2.If there is not any Allow filter, all resources not denied by any Deny filter will be cleaned up.
     * 3.If there are some Allow filters, only resources allowed by some Allow filter and not denied by any Deny filter will be cleaned up.
     * If filters are changed during resource update, ResourceCleaner requires to rescan. And if Action equals CleanUp, an error occurs.
     */
    readonly resourceFilters?: Array<RosResourceCleaner.ResourceFiltersProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::ROS::ResourceCleaner`
 */
export declare class ResourceCleaner extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute NoCleanupResourceDetails: The details of the resources that are scanned but filtered.
Only resources with the resource types ResourceCleaner supports and the regions not filtered are scanned.
The format is the same as ResourceDetails.
     */
    readonly attrNoCleanupResourceDetails: ros.IResolvable;
    /**
     * Attribute ResourceDetails: The details of resources to be cleaned up.
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
     * Attribute ResourceSummary: The details of resources to be cleaned up.
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
     * Create a new `ALIYUN::ROS::ResourceCleaner`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ResourceCleanerProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=resourcecleaner.d.ts.map