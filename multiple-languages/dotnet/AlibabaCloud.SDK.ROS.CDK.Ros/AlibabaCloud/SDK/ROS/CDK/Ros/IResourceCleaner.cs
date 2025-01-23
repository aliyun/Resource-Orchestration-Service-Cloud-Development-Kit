using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ros
{
    /// <summary>Represents a `ResourceCleaner`.</summary>
    [JsiiInterface(nativeType: typeof(IResourceCleaner), fullyQualifiedName: "@alicloud/ros-cdk-ros.IResourceCleaner")]
    public interface IResourceCleaner : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
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
        [JsiiProperty(name: "attrCleanResult", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCleanResult
        {
            get;
        }

        /// <summary>Attribute NoCleanupResourceDetails: The details of the resources that are scanned but filtered.</summary>
        /// <remarks>
        /// Only resources with the resource types ResourceCleaner supports and the regions not filtered are scanned.
        /// The format is the same as ResourceDetails.
        /// </remarks>
        [JsiiProperty(name: "attrNoCleanupResourceDetails", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNoCleanupResourceDetails
        {
            get;
        }

        /// <summary>Attribute NoCleanupResourcePartialDetails: The partial details of the resources that are scanned but filtered.</summary>
        /// <remarks>
        /// Only resources with the resource types ResourceCleaner supports and the regions not filtered are scanned.
        /// The format is the same as ResourcePartialDetails.
        /// </remarks>
        [JsiiProperty(name: "attrNoCleanupResourcePartialDetails", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNoCleanupResourcePartialDetails
        {
            get;
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
        [JsiiProperty(name: "attrResourceDetails", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceDetails
        {
            get;
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
        [JsiiProperty(name: "attrResourcePartialDetails", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourcePartialDetails
        {
            get;
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
        [JsiiProperty(name: "attrResourceSummary", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceSummary
        {
            get;
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
        [JsiiProperty(name: "attrScanErrors", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrScanErrors
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ros.ResourceCleanerProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ros.IResourceCleanerProps Props
        {
            get;
        }

        /// <summary>Represents a `ResourceCleaner`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IResourceCleaner), fullyQualifiedName: "@alicloud/ros-cdk-ros.IResourceCleaner")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ros.IResourceCleaner
        {
            private _Proxy(ByRefValue reference): base(reference)
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
            [JsiiProperty(name: "attrCleanResult", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCleanResult
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NoCleanupResourceDetails: The details of the resources that are scanned but filtered.</summary>
            /// <remarks>
            /// Only resources with the resource types ResourceCleaner supports and the regions not filtered are scanned.
            /// The format is the same as ResourceDetails.
            /// </remarks>
            [JsiiProperty(name: "attrNoCleanupResourceDetails", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNoCleanupResourceDetails
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NoCleanupResourcePartialDetails: The partial details of the resources that are scanned but filtered.</summary>
            /// <remarks>
            /// Only resources with the resource types ResourceCleaner supports and the regions not filtered are scanned.
            /// The format is the same as ResourcePartialDetails.
            /// </remarks>
            [JsiiProperty(name: "attrNoCleanupResourcePartialDetails", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNoCleanupResourcePartialDetails
            {
                get => GetInstanceProperty<object>()!;
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
            [JsiiProperty(name: "attrResourceDetails", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceDetails
            {
                get => GetInstanceProperty<object>()!;
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
            [JsiiProperty(name: "attrResourcePartialDetails", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourcePartialDetails
            {
                get => GetInstanceProperty<object>()!;
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
            [JsiiProperty(name: "attrResourceSummary", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceSummary
            {
                get => GetInstanceProperty<object>()!;
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
            [JsiiProperty(name: "attrScanErrors", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrScanErrors
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ros.ResourceCleanerProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ros.IResourceCleanerProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ros.IResourceCleanerProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}
