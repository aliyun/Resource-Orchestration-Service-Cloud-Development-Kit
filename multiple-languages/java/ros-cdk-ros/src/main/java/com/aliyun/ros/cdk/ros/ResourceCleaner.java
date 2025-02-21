package com.aliyun.ros.cdk.ros;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ROS::ResourceCleaner</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:20.143Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ros.$Module.class, fqn = "@alicloud/ros-cdk-ros.ResourceCleaner")
public class ResourceCleaner extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ros.IResourceCleaner {

    protected ResourceCleaner(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ResourceCleaner(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
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
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
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
     * Attribute CleanResult: The cleanup result.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>Success: All resources are cleaned up successfully.</li>
     * <li>ResourceFailure: Partial resources fail to clean up.</li>
     * <li>Timeout: Timeout to clean up.</li>
     * <li>CheckFailure: Pre check of cleanup fails.</li>
     * <li>UnknownFailure: Unexpected failure.</li>
     * <li>UserCancelled: Cleanup is cancelled by user.</li>
     * <li>None: Cleanup is not triggered.</li>
     * </ul>
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCleanResult() {
        return software.amazon.jsii.Kernel.get(this, "attrCleanResult", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute NoCleanupResourceDetails: The details of the resources that are scanned but filtered.
     * <p>
     * Only resources with the resource types ResourceCleaner supports and the regions not filtered are scanned.
     * The format is the same as ResourceDetails.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNoCleanupResourceDetails() {
        return software.amazon.jsii.Kernel.get(this, "attrNoCleanupResourceDetails", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute NoCleanupResourcePartialDetails: The partial details of the resources that are scanned but filtered.
     * <p>
     * Only resources with the resource types ResourceCleaner supports and the regions not filtered are scanned.
     * The format is the same as ResourcePartialDetails.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNoCleanupResourcePartialDetails() {
        return software.amazon.jsii.Kernel.get(this, "attrNoCleanupResourcePartialDetails", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceDetails() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceDetails", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourcePartialDetails: The partial details of resources to be cleaned up.
     * <p>
     * The value is a list of dict. The dict contains the fields below:
     * <p>
     * <ul>
     * <li>ResourceType: Resource type of the resource.</li>
     * <li>RegionId: Region ID of the resource.</li>
     * <li>ResourceId: ID of the resource.</li>
     * <li>ResourceName: Name of the resource.</li>
     * <li>ResourceStatus: Status of the resource. Valid values:</li>
     * <li>Deleting: The resource is deleting.</li>
     * <li>Failure: The deletion of the resource failed.</li>
     * <li>Success: The resource is deleted.</li>
     * <li>Skipped: The deletion of the resource is skipped.</li>
     * <li>Pending: The deletion of the resource is not started.</li>
     * <li>ResourceStatusReason: The information of the related ResourceStatus.</li>
     * </ul>
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourcePartialDetails() {
        return software.amazon.jsii.Kernel.get(this, "attrResourcePartialDetails", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceSummary() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceSummary", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ScanErrors: The scan errors.
     * <p>
     * It takes effect only when property Mode is Loose.
     * The value is a list of dict. The dict contains the fields below:
     * <p>
     * <ul>
     * <li>ResourceType: Resource type for scanning.</li>
     * <li>RegionId: Region ID for scanning.</li>
     * <li>ErrorMessage: Error message of scanning with specified resource type and region ID.</li>
     * </ul>
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrScanErrors() {
        return software.amazon.jsii.Kernel.get(this, "attrScanErrors", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ros.ResourceCleanerProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ros.ResourceCleanerProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
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
         * <li>ScanWhenCreatingAndUpdating+CleanUpWhenDeleting: Scan when creating or updating resource, and CleanUp when deleting stack.</li>
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
         * <li>ScanWhenCreatingAndUpdating+CleanUpWhenDeleting: Scan when creating or updating resource, and CleanUp when deleting stack.</li>
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
         * Property cleanUpAlgorithm: The cleanup algorithm of cleanup phase: - ResourceDependency: Clean up by resource dependency tree.
         * <p>
         * <ul>
         * <li>ResourceTypeOrder: Clean up by resource type order. Property ResourceTypeOrder can be used to specify resource type order. If it is not specified, a default order will be used.
         * Default to ResourceDependency.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param cleanUpAlgorithm Property cleanUpAlgorithm: The cleanup algorithm of cleanup phase: - ResourceDependency: Clean up by resource dependency tree. This parameter is required.
         */
        public Builder cleanUpAlgorithm(final java.lang.String cleanUpAlgorithm) {
            this.props.cleanUpAlgorithm(cleanUpAlgorithm);
            return this;
        }
        /**
         * Property cleanUpAlgorithm: The cleanup algorithm of cleanup phase: - ResourceDependency: Clean up by resource dependency tree.
         * <p>
         * <ul>
         * <li>ResourceTypeOrder: Clean up by resource type order. Property ResourceTypeOrder can be used to specify resource type order. If it is not specified, a default order will be used.
         * Default to ResourceDependency.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param cleanUpAlgorithm Property cleanUpAlgorithm: The cleanup algorithm of cleanup phase: - ResourceDependency: Clean up by resource dependency tree. This parameter is required.
         */
        public Builder cleanUpAlgorithm(final com.aliyun.ros.cdk.core.IResolvable cleanUpAlgorithm) {
            this.props.cleanUpAlgorithm(cleanUpAlgorithm);
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
         * Property disabledSideEffects: Side effects to be disabled.
         * <p>
         * Cleaning up some resources will cause some side effects. If is not expected, use the property to disable them.
         * The side effects can be found in response(ResourceCleaner) of API GetFeatureDetails.
         * <p>
         * @return {@code this}
         * @param disabledSideEffects Property disabledSideEffects: Side effects to be disabled. This parameter is required.
         */
        public Builder disabledSideEffects(final com.aliyun.ros.cdk.core.IResolvable disabledSideEffects) {
            this.props.disabledSideEffects(disabledSideEffects);
            return this;
        }
        /**
         * Property disabledSideEffects: Side effects to be disabled.
         * <p>
         * Cleaning up some resources will cause some side effects. If is not expected, use the property to disable them.
         * The side effects can be found in response(ResourceCleaner) of API GetFeatureDetails.
         * <p>
         * @return {@code this}
         * @param disabledSideEffects Property disabledSideEffects: Side effects to be disabled. This parameter is required.
         */
        public Builder disabledSideEffects(final java.util.List<? extends java.lang.Object> disabledSideEffects) {
            this.props.disabledSideEffects(disabledSideEffects);
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
         * Property mode: The result mode of resource cleaner: - Strict: Any scanning or cleanup failure leads to the failure of the cleaner.
         * <p>
         * <ul>
         * <li>Loose: Only a little scanning and cleanup failures lead to the failure of the cleaner. Most scanning failures will be ignored, failure messages can be found in ScanErrors or ResourceDetails. Most cleanup failures will be ignored, failure messages can be found in ResourceDetails.
         * Default to Loose.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param mode Property mode: The result mode of resource cleaner: - Strict: Any scanning or cleanup failure leads to the failure of the cleaner. This parameter is required.
         */
        public Builder mode(final java.lang.String mode) {
            this.props.mode(mode);
            return this;
        }
        /**
         * Property mode: The result mode of resource cleaner: - Strict: Any scanning or cleanup failure leads to the failure of the cleaner.
         * <p>
         * <ul>
         * <li>Loose: Only a little scanning and cleanup failures lead to the failure of the cleaner. Most scanning failures will be ignored, failure messages can be found in ScanErrors or ResourceDetails. Most cleanup failures will be ignored, failure messages can be found in ResourceDetails.
         * Default to Loose.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param mode Property mode: The result mode of resource cleaner: - Strict: Any scanning or cleanup failure leads to the failure of the cleaner. This parameter is required.
         */
        public Builder mode(final com.aliyun.ros.cdk.core.IResolvable mode) {
            this.props.mode(mode);
            return this;
        }

        /**
         * Property resourceFilters: Resource filters that ResourceCleaner uses to filter out the resources to be cleaned up during scanning.
         * <p>
         * Only one of ResourceFilters and Resources can be specified.
         * There are two filtering behaviors(Effect): Allow and Deny. The filters work as below:
         * 1.Any resource denied by any Deny filter will not be cleaned up.
         * 2.Only resources allowed by some Allow filter and not denied by any Deny filter will be cleaned up.
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
         * Only one of ResourceFilters and Resources can be specified.
         * There are two filtering behaviors(Effect): Allow and Deny. The filters work as below:
         * 1.Any resource denied by any Deny filter will not be cleaned up.
         * 2.Only resources allowed by some Allow filter and not denied by any Deny filter will be cleaned up.
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
         * Property resources: Resources to be cleaned up.
         * <p>
         * Only one of Resources and ResourceFilters can be specified.
         * <p>
         * @return {@code this}
         * @param resources Property resources: Resources to be cleaned up. This parameter is required.
         */
        public Builder resources(final com.aliyun.ros.cdk.core.IResolvable resources) {
            this.props.resources(resources);
            return this;
        }
        /**
         * Property resources: Resources to be cleaned up.
         * <p>
         * Only one of Resources and ResourceFilters can be specified.
         * <p>
         * @return {@code this}
         * @param resources Property resources: Resources to be cleaned up. This parameter is required.
         */
        public Builder resources(final java.util.List<? extends java.lang.Object> resources) {
            this.props.resources(resources);
            return this;
        }

        /**
         * Property resourceTypeOrder: This property takes effect only when property CleanUpAlgorithm is ResourceTypeOrder.
         * <p>
         * If it takes effect:
         * <p>
         * <ul>
         * <li>Resources will be cleaned up in order from front to back.</li>
         * <li>Resource with resource type not specified in this property will not be cleaned up.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param resourceTypeOrder Property resourceTypeOrder: This property takes effect only when property CleanUpAlgorithm is ResourceTypeOrder. This parameter is required.
         */
        public Builder resourceTypeOrder(final com.aliyun.ros.cdk.core.IResolvable resourceTypeOrder) {
            this.props.resourceTypeOrder(resourceTypeOrder);
            return this;
        }
        /**
         * Property resourceTypeOrder: This property takes effect only when property CleanUpAlgorithm is ResourceTypeOrder.
         * <p>
         * If it takes effect:
         * <p>
         * <ul>
         * <li>Resources will be cleaned up in order from front to back.</li>
         * <li>Resource with resource type not specified in this property will not be cleaned up.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param resourceTypeOrder Property resourceTypeOrder: This property takes effect only when property CleanUpAlgorithm is ResourceTypeOrder. This parameter is required.
         */
        public Builder resourceTypeOrder(final java.util.List<? extends java.lang.Object> resourceTypeOrder) {
            this.props.resourceTypeOrder(resourceTypeOrder);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ros.ResourceCleaner}.
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
