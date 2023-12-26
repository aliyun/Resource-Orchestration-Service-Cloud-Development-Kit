using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ros
{
    /// <summary>This class encapsulates and extends the ROS resource type `ALIYUN::ROS::ResourceCleaner`.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosResourceCleaner`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-resourcecleaner
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Ros.ResourceCleaner), fullyQualifiedName: "@alicloud/ros-cdk-ros.ResourceCleaner", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ros.ResourceCleanerProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class ResourceCleaner : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public ResourceCleaner(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ros.IResourceCleanerProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ros.IResourceCleanerProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected ResourceCleaner(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected ResourceCleaner(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute CleanResult: The cleanup result.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>Success: All resources are cleaned up successfully.</description>
        /// <description>ResourceFailure: Partial resources fail to clean up.</description>
        /// <description>Timeout: Timeout to clean up.</description>
        /// <description>CheckFailure: Pre check of cleanup fails.</description>
        /// <description>UnknownFailure: Unexpected failure.</description>
        /// <description>UserCancelled: Cleanup is cancelled by user.</description>
        /// <description>None: Cleanup is not triggered.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "attrCleanResult", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrCleanResult
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute NoCleanupResourceDetails: The details of the resources that are scanned but filtered.</summary>
        /// <remarks>
        /// Only resources with the resource types ResourceCleaner supports and the regions not filtered are scanned.
        /// The format is the same as ResourceDetails.
        /// </remarks>
        [JsiiProperty(name: "attrNoCleanupResourceDetails", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrNoCleanupResourceDetails
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute NoCleanupResourcePartialDetails: The partial details of the resources that are scanned but filtered.</summary>
        /// <remarks>
        /// Only resources with the resource types ResourceCleaner supports and the regions not filtered are scanned.
        /// The format is the same as ResourcePartialDetails.
        /// </remarks>
        [JsiiProperty(name: "attrNoCleanupResourcePartialDetails", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrNoCleanupResourcePartialDetails
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute ResourceDetails: The details of resources to be cleaned up.</summary>
        /// <remarks>
        /// The value is a list of dict. The dict contains the fields below:
        ///
        /// <list type="bullet">
        /// <description>ResourceType: Resource type of the resource.</description>
        /// <description>RegionId: Region ID of the resource.</description>
        /// <description>ResourceId: ID of the resource.</description>
        /// <description>ResourceName: Name of the resource.</description>
        /// <description>CleanupType: Cleanup type of the resource. Valid values:</description>
        /// <description>Normal: The resource can be deleted normally.</description>
        /// <description>DeleteWithInstance: The resource will be deleted with the resource it belongs to. If the resource it belongs to is filtered or excluded, the deletion probably fails. CleanupTypeReasons give more information.</description>
        /// <description>UnableToDelete: Unable to delete the resource. CleanupTypeReasons give more information.</description>
        /// <description>CleanupTypeReasons: The information of the related CleanupType.</description>
        /// <description>ResourceStatus: Status of the resource. Valid values:</description>
        /// <description>Deleting: The resource is deleting.</description>
        /// <description>Failure: The deletion of the resource failed.</description>
        /// <description>Success: The resource is deleted.</description>
        /// <description>Skipped: The deletion of the resource is skipped.</description>
        /// <description>Pending: The deletion of the resource is not started.</description>
        /// <description>ResourceStatusReason: The information of the related ResourceStatus.</description>
        /// <description>Dependencies: The resources that need to be deleted before the deletion of the resource. The value is a list of dict. The dict contains the fields below:</description>
        /// <description>ResourceType: Resource type of the dependency resource.</description>
        /// <description>RegionId: Region ID of the dependency resource.</description>
        /// <description>ResourceId: ID of the dependency resource.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "attrResourceDetails", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrResourceDetails
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute ResourcePartialDetails: The partial details of resources to be cleaned up.</summary>
        /// <remarks>
        /// The value is a list of dict. The dict contains the fields below:
        ///
        /// <list type="bullet">
        /// <description>ResourceType: Resource type of the resource.</description>
        /// <description>RegionId: Region ID of the resource.</description>
        /// <description>ResourceId: ID of the resource.</description>
        /// <description>ResourceName: Name of the resource.</description>
        /// <description>ResourceStatus: Status of the resource. Valid values:</description>
        /// <description>Deleting: The resource is deleting.</description>
        /// <description>Failure: The deletion of the resource failed.</description>
        /// <description>Success: The resource is deleted.</description>
        /// <description>Skipped: The deletion of the resource is skipped.</description>
        /// <description>Pending: The deletion of the resource is not started.</description>
        /// <description>ResourceStatusReason: The information of the related ResourceStatus.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "attrResourcePartialDetails", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrResourcePartialDetails
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute ResourceSummary: The details of resources to be cleaned up.</summary>
        /// <remarks>
        /// The value is a list of dict. The dict contains the fields below:
        ///
        /// <list type="bullet">
        /// <description>ResourceType: Resource type of the resources.</description>
        /// <description>DeletingCount: Number of deleting resources of the resource type.</description>
        /// <description>SuccessCount: Number of deleted resources of the resource type.</description>
        /// <description>FailureCount: Number of resources that failed to delete of the resource type.</description>
        /// <description>SkippedCount: Number of skipped resources of the resource type.</description>
        /// <description>PendingCount: Number of resources that have not been deleted of the resource type.</description>
        /// <description>OtherCount: Number of other resources of the resource type.</description>
        /// <description>TotalCount: Number of total resources of the resource type.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "attrResourceSummary", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrResourceSummary
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute ScanErrors: The scan errors.</summary>
        /// <remarks>
        /// It takes effect only when property Mode is Loose.
        /// The value is a list of dict. The dict contains the fields below:
        ///
        /// <list type="bullet">
        /// <description>ResourceType: Resource type for scanning.</description>
        /// <description>RegionId: Region ID for scanning.</description>
        /// <description>ErrorMessage: Error message of scanning with specified resource type and region ID.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "attrScanErrors", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrScanErrors
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }
    }
}
