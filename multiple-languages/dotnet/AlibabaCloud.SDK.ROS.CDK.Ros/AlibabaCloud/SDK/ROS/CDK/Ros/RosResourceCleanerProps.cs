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
        /// - ScanWhenCreatingAndUpdating+CleanUpWhenDeleting: Scan when creating or updating resource, and CleanUp when deleting stack.
        /// </remarks>
        [JsiiProperty(name: "action", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Action
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: cleanUpAlgorithm: The cleanup algorithm of cleanup phase:
        /// - ResourceDependency: Clean up by resource dependency tree.
        /// - ResourceTypeOrder: Clean up by resource type order. Property ResourceTypeOrder can be used to specify resource type order. If it is not specified, a default order will be used.
        /// Default to ResourceDependency.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "cleanUpAlgorithm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? CleanUpAlgorithm
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
        /// <strong>Property</strong>: disabledSideEffects: Side effects to be disabled.
        /// Cleaning up some resources will cause some side effects. If is not expected, use the property to disable them.
        /// The side effects can be found in response(ResourceCleaner) of API GetFeatureDetails.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "disabledSideEffects", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? DisabledSideEffects
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
        /// <strong>Property</strong>: mode: The result mode of resource cleaner:
        /// - Strict: Any scanning or cleanup failure leads to the failure of the cleaner.
        /// - Loose: Only a little scanning and cleanup failures lead to the failure of the cleaner. Most scanning failures will be ignored, failure messages can be found in ScanErrors or ResourceDetails. Most cleanup failures will be ignored, failure messages can be found in ResourceDetails.
        /// Default to Loose.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "mode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Mode
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceFilters: Resource filters that ResourceCleaner uses to filter out the resources to be cleaned up during scanning.
        /// Only one of ResourceFilters and Resources can be specified.
        /// There are two filtering behaviors(Effect): Allow and Deny. The filters work as below:
        /// 1.Any resource denied by any Deny filter will not be cleaned up.
        /// 2.Only resources allowed by some Allow filter and not denied by any Deny filter will be cleaned up.
        /// If filters are changed during resource update, ResourceCleaner requires to rescan. And if Action equals CleanUp, an error occurs.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "resourceFilters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ros.RosResourceCleaner.ResourceFiltersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? ResourceFilters
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: resources: Resources to be cleaned up.
        /// Only one of Resources and ResourceFilters can be specified.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "resources", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ros.RosResourceCleaner.ResourcesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? Resources
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceTypeOrder: This property takes effect only when property CleanUpAlgorithm is ResourceTypeOrder.
        /// If it takes effect:
        /// - Resources will be cleaned up in order from front to back.
        /// - Resource with resource type not specified in this property will not be cleaned up.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "resourceTypeOrder", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? ResourceTypeOrder
        {
            get;
            set;
        }
    }
}
