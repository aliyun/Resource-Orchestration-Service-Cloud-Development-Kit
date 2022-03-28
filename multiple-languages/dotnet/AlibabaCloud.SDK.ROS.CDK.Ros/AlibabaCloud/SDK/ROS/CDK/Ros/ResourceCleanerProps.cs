using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ros
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ROS::ResourceCleaner`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ros.ResourceCleanerProps")]
    public class ResourceCleanerProps : AlibabaCloud.SDK.ROS.CDK.Ros.IResourceCleanerProps
    {
        /// <summary>Property action: Resource cleaner actions: - Scan: Scanning phase.</summary>
        /// <remarks>
        /// Scan out the resources to be cleaned up.
        ///
        /// <list type="bullet">
        /// <description>CleanUp: Cleanup phase. Clean up the scanned resources. It it not allowed for resource creation.</description>
        /// <description>Scan+CleanUp: Scan first, then CleanUp.</description>
        /// <description>ScanWhenCreatingAndUpdating+CleanUpWhenDeleting: Scan when creating or updating resource, and CleanUp when deleting resource.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "action", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Action
        {
            get;
            set;
        }

        /// <summary>Property cleanUpRetryCount: The maximum number of executions of cleanup phase.</summary>
        /// <remarks>
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

        /// <summary>Property cleanUpTimeout: The timeout seconds of executions of cleanup phase.</summary>
        /// <remarks>
        /// Default to 1 hour.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "cleanUpTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? CleanUpTimeout
        {
            get;
            set;
        }

        /// <summary>Property excludedResources: Exclude parts from resources to be cleaned up.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "excludedResources", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ros.RosResourceCleaner.ExcludedResourcesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? ExcludedResources
        {
            get;
            set;
        }

        /// <summary>Property failureOption: The failure option of cleanup phase: - Normal: Resource failure does not affect the resources that depend on it.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>Fast: Resource failure causes all resources that depend on it to fail.
        /// Default to Normal.</description>
        /// </list>
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "failureOption", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? FailureOption
        {
            get;
            set;
        }

        /// <summary>Property resourceFilters: Resource filters that ResourceCleaner uses to filter out the resources to be cleaned up during scanning.</summary>
        /// <remarks>
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
