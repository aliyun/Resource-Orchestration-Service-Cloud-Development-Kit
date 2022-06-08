package com.aliyun.ros.cdk.ros;

/**
 * A ROS resource type:  `ALIYUN::ROS::ResourceCleaner`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.59.0 (build eb02c92)", date = "2022-06-08T09:23:36.214Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ros.$Module.class, fqn = "@alicloud/ros-cdk-ros.ResourceCleaner")
public class ResourceCleaner extends com.aliyun.ros.cdk.core.Resource {

    protected ResourceCleaner(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ResourceCleaner(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::ROS::ResourceCleaner`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public ResourceCleaner(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ros.ResourceCleanerProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::ROS::ResourceCleaner`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public ResourceCleaner(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ros.ResourceCleanerProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute NoCleanupResourceDetails: The details of the resources that are scanned but filtered.
     * <p>
     * Only resources with the resource types ResourceCleaner supports and the regions not filtered are scanned.
     * The format is the same as ResourceDetails.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNoCleanupResourceDetails() {
        return software.amazon.jsii.Kernel.get(this, "attrNoCleanupResourceDetails", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ResourceDetails: The details of resources to be cleaned up.
     * <p>
     * The value is a list of dict. The dict contains the fields below:
     * <p>
     * <ul>
     * <li>ResourceType: Resource type of the resource.</li>
     * <li>RegionId: Region ID of the resource.</li>
     * <li>ResourceId: ID of the resource.</li>
     * <li>ResourceName: Name of the resource.</li>
     * <li>CleanupType: Cleanup type of the resource. Valid values:</li>
     * <li>Normal: The resource can be deleted normally.</li>
     * <li>DeleteWithInstance: The resource will be deleted with the resource it belongs to. If the resource it belongs to is filtered or excluded, the deletion probably fails. CleanupTypeReasons give more information.</li>
     * <li>UnableToDelete: Unable to delete the resource. CleanupTypeReasons give more information.</li>
     * <li>CleanupTypeReasons: The information of the related CleanupType.</li>
     * <li>ResourceStatus: Status of the resource. Valid values:</li>
     * <li>Deleting: The resource is deleting.</li>
     * <li>Failure: The deletion of the resource failed.</li>
     * <li>Success: The resource is deleted.</li>
     * <li>Skipped: The deletion of the resource is skipped.</li>
     * <li>Pending: The deletion of the resource is not started.</li>
     * <li>ResourceStatusReason: The information of the related ResourceStatus.</li>
     * <li>Dependencies: The resources that need to be deleted before the deletion of the resource. The value is a list of dict. The dict contains the fields below:</li>
     * <li>ResourceType: Resource type of the dependency resource.</li>
     * <li>RegionId: Region ID of the dependency resource.</li>
     * <li>ResourceId: ID of the dependency resource.</li>
     * </ul>
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResourceDetails() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceDetails", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ResourceSummary: The details of resources to be cleaned up.
     * <p>
     * The value is a list of dict. The dict contains the fields below:
     * <p>
     * <ul>
     * <li>ResourceType: Resource type of the resources.</li>
     * <li>DeletingCount: Number of deleting resources of the resource type.</li>
     * <li>SuccessCount: Number of deleted resources of the resource type.</li>
     * <li>FailureCount: Number of resources that failed to delete of the resource type.</li>
     * <li>SkippedCount: Number of skipped resources of the resource type.</li>
     * <li>PendingCount: Number of resources that have not been deleted of the resource type.</li>
     * <li>OtherCount: Number of other resources of the resource type.</li>
     * <li>TotalCount: Number of total resources of the resource type.</li>
     * </ul>
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResourceSummary() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceSummary", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ros.ResourceCleaner}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ros.ResourceCleaner> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.ros.ResourceCleanerProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ros.ResourceCleanerProps.Builder();
        }

        /**
         * Property action: Resource cleaner actions: - Scan: Scanning phase.
         * <p>
         * Scan out the resources to be cleaned up.
         * <p>
         * <ul>
         * <li>CleanUp: Cleanup phase. Clean up the scanned resources. It it not allowed for resource creation.</li>
         * <li>Scan+CleanUp: Scan first, then CleanUp.</li>
         * <li>ScanWhenCreatingAndUpdating+CleanUpWhenDeleting: Scan when creating or updating resource, and CleanUp when deleting resource.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param action Property action: Resource cleaner actions: - Scan: Scanning phase. This parameter is required.
         */
        public Builder action(final java.lang.String action) {
            this.props.action(action);
            return this;
        }
        /**
         * Property action: Resource cleaner actions: - Scan: Scanning phase.
         * <p>
         * Scan out the resources to be cleaned up.
         * <p>
         * <ul>
         * <li>CleanUp: Cleanup phase. Clean up the scanned resources. It it not allowed for resource creation.</li>
         * <li>Scan+CleanUp: Scan first, then CleanUp.</li>
         * <li>ScanWhenCreatingAndUpdating+CleanUpWhenDeleting: Scan when creating or updating resource, and CleanUp when deleting resource.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param action Property action: Resource cleaner actions: - Scan: Scanning phase. This parameter is required.
         */
        public Builder action(final com.aliyun.ros.cdk.core.IResolvable action) {
            this.props.action(action);
            return this;
        }

        /**
         * Property cleanUpRetryCount: The maximum number of executions of cleanup phase.
         * <p>
         * Default to 1, which means no retry.
         * Conditions that trigger a retry: (the relationship is or)
         * 1.There are resources which fail to be cleaned up.
         * 2.The cleanup is timeout.
         * <p>
         * @return {@code this}
         * @param cleanUpRetryCount Property cleanUpRetryCount: The maximum number of executions of cleanup phase. This parameter is required.
         */
        public Builder cleanUpRetryCount(final java.lang.Number cleanUpRetryCount) {
            this.props.cleanUpRetryCount(cleanUpRetryCount);
            return this;
        }
        /**
         * Property cleanUpRetryCount: The maximum number of executions of cleanup phase.
         * <p>
         * Default to 1, which means no retry.
         * Conditions that trigger a retry: (the relationship is or)
         * 1.There are resources which fail to be cleaned up.
         * 2.The cleanup is timeout.
         * <p>
         * @return {@code this}
         * @param cleanUpRetryCount Property cleanUpRetryCount: The maximum number of executions of cleanup phase. This parameter is required.
         */
        public Builder cleanUpRetryCount(final com.aliyun.ros.cdk.core.IResolvable cleanUpRetryCount) {
            this.props.cleanUpRetryCount(cleanUpRetryCount);
            return this;
        }

        /**
         * Property cleanUpTimeout: The timeout seconds of executions of cleanup phase.
         * <p>
         * Default to 1 hour.
         * <p>
         * @return {@code this}
         * @param cleanUpTimeout Property cleanUpTimeout: The timeout seconds of executions of cleanup phase. This parameter is required.
         */
        public Builder cleanUpTimeout(final java.lang.Number cleanUpTimeout) {
            this.props.cleanUpTimeout(cleanUpTimeout);
            return this;
        }
        /**
         * Property cleanUpTimeout: The timeout seconds of executions of cleanup phase.
         * <p>
         * Default to 1 hour.
         * <p>
         * @return {@code this}
         * @param cleanUpTimeout Property cleanUpTimeout: The timeout seconds of executions of cleanup phase. This parameter is required.
         */
        public Builder cleanUpTimeout(final com.aliyun.ros.cdk.core.IResolvable cleanUpTimeout) {
            this.props.cleanUpTimeout(cleanUpTimeout);
            return this;
        }

        /**
         * Property excludedResources: Exclude parts from resources to be cleaned up.
         * <p>
         * @return {@code this}
         * @param excludedResources Property excludedResources: Exclude parts from resources to be cleaned up. This parameter is required.
         */
        public Builder excludedResources(final com.aliyun.ros.cdk.core.IResolvable excludedResources) {
            this.props.excludedResources(excludedResources);
            return this;
        }
        /**
         * Property excludedResources: Exclude parts from resources to be cleaned up.
         * <p>
         * @return {@code this}
         * @param excludedResources Property excludedResources: Exclude parts from resources to be cleaned up. This parameter is required.
         */
        public Builder excludedResources(final java.util.List<? extends java.lang.Object> excludedResources) {
            this.props.excludedResources(excludedResources);
            return this;
        }

        /**
         * Property failureOption: The failure option of cleanup phase: - Normal: Resource failure does not affect the resources that depend on it.
         * <p>
         * <ul>
         * <li>Fast: Resource failure causes all resources that depend on it to fail.
         * Default to Normal.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param failureOption Property failureOption: The failure option of cleanup phase: - Normal: Resource failure does not affect the resources that depend on it. This parameter is required.
         */
        public Builder failureOption(final java.lang.String failureOption) {
            this.props.failureOption(failureOption);
            return this;
        }
        /**
         * Property failureOption: The failure option of cleanup phase: - Normal: Resource failure does not affect the resources that depend on it.
         * <p>
         * <ul>
         * <li>Fast: Resource failure causes all resources that depend on it to fail.
         * Default to Normal.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param failureOption Property failureOption: The failure option of cleanup phase: - Normal: Resource failure does not affect the resources that depend on it. This parameter is required.
         */
        public Builder failureOption(final com.aliyun.ros.cdk.core.IResolvable failureOption) {
            this.props.failureOption(failureOption);
            return this;
        }

        /**
         * Property resourceFilters: Resource filters that ResourceCleaner uses to filter out the resources to be cleaned up during scanning.
         * <p>
         * There are two filtering behaviors(Effect): Allow and Deny. The filters work as below:
         * 1.Any resource denied by any Deny filter will not be cleaned up.
         * 2.If there is not any Allow filter, all resources not denied by any Deny filter will be cleaned up.
         * 3.If there are some Allow filters, only resources allowed by some Allow filter and not denied by any Deny filter will be cleaned up.
         * If filters are changed during resource update, ResourceCleaner requires to rescan. And if Action equals CleanUp, an error occurs.
         * <p>
         * @return {@code this}
         * @param resourceFilters Property resourceFilters: Resource filters that ResourceCleaner uses to filter out the resources to be cleaned up during scanning. This parameter is required.
         */
        public Builder resourceFilters(final com.aliyun.ros.cdk.core.IResolvable resourceFilters) {
            this.props.resourceFilters(resourceFilters);
            return this;
        }
        /**
         * Property resourceFilters: Resource filters that ResourceCleaner uses to filter out the resources to be cleaned up during scanning.
         * <p>
         * There are two filtering behaviors(Effect): Allow and Deny. The filters work as below:
         * 1.Any resource denied by any Deny filter will not be cleaned up.
         * 2.If there is not any Allow filter, all resources not denied by any Deny filter will be cleaned up.
         * 3.If there are some Allow filters, only resources allowed by some Allow filter and not denied by any Deny filter will be cleaned up.
         * If filters are changed during resource update, ResourceCleaner requires to rescan. And if Action equals CleanUp, an error occurs.
         * <p>
         * @return {@code this}
         * @param resourceFilters Property resourceFilters: Resource filters that ResourceCleaner uses to filter out the resources to be cleaned up during scanning. This parameter is required.
         */
        public Builder resourceFilters(final java.util.List<? extends java.lang.Object> resourceFilters) {
            this.props.resourceFilters(resourceFilters);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ros.ResourceCleaner}.
         */
        @Override
        public com.aliyun.ros.cdk.ros.ResourceCleaner build() {
            return new com.aliyun.ros.cdk.ros.ResourceCleaner(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
