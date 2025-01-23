package com.aliyun.ros.cdk.ros;

/**
 * Represents a <code>ResourceCleaner</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:43.841Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ros.$Module.class, fqn = "@alicloud/ros-cdk-ros.IResourceCleaner")
@software.amazon.jsii.Jsii.Proxy(IResourceCleaner.Jsii$Proxy.class)
public interface IResourceCleaner extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

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
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCleanResult();

    /**
     * Attribute NoCleanupResourceDetails: The details of the resources that are scanned but filtered.
     * <p>
     * Only resources with the resource types ResourceCleaner supports and the regions not filtered are scanned.
     * The format is the same as ResourceDetails.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNoCleanupResourceDetails();

    /**
     * Attribute NoCleanupResourcePartialDetails: The partial details of the resources that are scanned but filtered.
     * <p>
     * Only resources with the resource types ResourceCleaner supports and the regions not filtered are scanned.
     * The format is the same as ResourcePartialDetails.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNoCleanupResourcePartialDetails();

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
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceDetails();

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
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourcePartialDetails();

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
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceSummary();

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
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrScanErrors();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ros.ResourceCleanerProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.ros.IResourceCleaner.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * The construct tree node for this construct.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
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
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCleanResult() {
            return software.amazon.jsii.Kernel.get(this, "attrCleanResult", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NoCleanupResourceDetails: The details of the resources that are scanned but filtered.
         * <p>
         * Only resources with the resource types ResourceCleaner supports and the regions not filtered are scanned.
         * The format is the same as ResourceDetails.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNoCleanupResourceDetails() {
            return software.amazon.jsii.Kernel.get(this, "attrNoCleanupResourceDetails", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NoCleanupResourcePartialDetails: The partial details of the resources that are scanned but filtered.
         * <p>
         * Only resources with the resource types ResourceCleaner supports and the regions not filtered are scanned.
         * The format is the same as ResourcePartialDetails.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNoCleanupResourcePartialDetails() {
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
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceDetails() {
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
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourcePartialDetails() {
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
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceSummary() {
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
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrScanErrors() {
            return software.amazon.jsii.Kernel.get(this, "attrScanErrors", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ros.ResourceCleanerProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ros.ResourceCleanerProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IResourceCleaner}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IResourceCleaner, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

        /**
         * The construct tree node for this construct.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
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
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCleanResult() {
            return software.amazon.jsii.Kernel.get(this, "attrCleanResult", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NoCleanupResourceDetails: The details of the resources that are scanned but filtered.
         * <p>
         * Only resources with the resource types ResourceCleaner supports and the regions not filtered are scanned.
         * The format is the same as ResourceDetails.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNoCleanupResourceDetails() {
            return software.amazon.jsii.Kernel.get(this, "attrNoCleanupResourceDetails", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NoCleanupResourcePartialDetails: The partial details of the resources that are scanned but filtered.
         * <p>
         * Only resources with the resource types ResourceCleaner supports and the regions not filtered are scanned.
         * The format is the same as ResourcePartialDetails.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNoCleanupResourcePartialDetails() {
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
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceDetails() {
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
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourcePartialDetails() {
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
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceSummary() {
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
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrScanErrors() {
            return software.amazon.jsii.Kernel.get(this, "attrScanErrors", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ros.ResourceCleanerProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ros.ResourceCleanerProps.class));
        }
    }
}
