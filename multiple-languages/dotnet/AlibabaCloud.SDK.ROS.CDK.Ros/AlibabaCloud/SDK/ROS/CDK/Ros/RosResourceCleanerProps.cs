using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ros
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ROS::ResourceCleaner`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ros.RosResourceCleanerProps")]
    public class RosResourceCleanerProps : AlibabaCloud.SDK.ROS.CDK.Ros.IRosResourceCleanerProps
    {
        /// <remarks>
        /// <strong>Property</strong>: action: Resource cleaner actions:
        /// - Scan: Scanning phase. Scan out the resources to be cleaned up.
        /// - CleanUp: Cleanup phase. Clean up the scanned resources. It it not allowed for resource creation.
        /// - Scan+CleanUp: Scan first, then CleanUp.
        /// - ScanWhenCreatingAndUpdating+CleanUpWhenDeleting: Scan when creating or updating resource, and CleanUp when deleting resource.
        /// </remarks>
        [JsiiProperty(name: "action", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Action
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: cleanUpRetryCount: The maximum number of executions of cleanup phase.
        /// Default to 1, which means no retry.
        /// Conditions that trigger a retry: (the relationship is or)
        /// 1.There are resources which fail to be cleaned up.
        /// 2.The cleanup is timeout.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "cleanUpRetryCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? CleanUpRetryCount
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: cleanUpTimeout: The timeout seconds of executions of cleanup phase.
        /// Default to 1 hour.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "cleanUpTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? CleanUpTimeout
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: excludedResources: Exclude parts from resources to be cleaned up.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "excludedResources", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ros.RosResourceCleaner.ExcludedResourcesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? ExcludedResources
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: failureOption: The failure option of cleanup phase:
        /// - Normal: Resource failure does not affect the resources that depend on it.
        /// - Fast: Resource failure causes all resources that depend on it to fail.
        /// Default to Normal.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "failureOption", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? FailureOption
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceFilters: Resource filters that ResourceCleaner uses to filter out the resources to be cleaned up during scanning.
        /// There are two filtering behaviors(Effect): Allow and Deny. The filters work as below:
        /// 1.Any resource denied by any Deny filter will not be cleaned up.
        /// 2.If there is not any Allow filter, all resources not denied by any Deny filter will be cleaned up.
        /// 3.If there are some Allow filters, only resources allowed by some Allow filter and not denied by any Deny filter will be cleaned up.
        /// If filters are changed during resource update, ResourceCleaner requires to rescan. And if Action equals CleanUp, an error occurs.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "resourceFilters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ros.RosResourceCleaner.ResourceFiltersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? ResourceFilters
        {
            get;
            set;
        }
    }
}
