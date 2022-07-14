using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ros
{
    /// <summary>Properties for defining a `ALIYUN::ROS::ResourceCleaner`.</summary>
    [JsiiInterface(nativeType: typeof(IResourceCleanerProps), fullyQualifiedName: "@alicloud/ros-cdk-ros.ResourceCleanerProps")]
    public interface IResourceCleanerProps
    {
        /// <summary>Property action: Resource cleaner actions: - Scan: Scanning phase.</summary>
        /// <remarks>
        /// Scan out the resources to be cleaned up.
        ///
        /// <list type="bullet">
        /// <description>CleanUp: Cleanup phase. Clean up the scanned resources. It it not allowed for resource creation.</description>
        /// <description>Scan+CleanUp: Scan first, then CleanUp.</description>
        /// <description>ScanWhenCreatingAndUpdating+CleanUpWhenDeleting: Scan when creating or updating resource, and CleanUp when deleting stack.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "action", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Action
        {
            get;
        }

        /// <summary>Property cleanUpAlgorithm: The cleanup algorithm of cleanup phase: - ResourceDependency: Clean up by resource dependency tree.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>ResourceTypeOrder: Clean up by resource type order. Property ResourceTypeOrder can be used to specify resource type order. If it is not specified, a default order will be used.
        /// Default to ResourceDependency.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "cleanUpAlgorithm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CleanUpAlgorithm
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property cleanUpRetryCount: The maximum number of executions of cleanup phase.</summary>
        /// <remarks>
        /// Default to 1, which means no retry.
        /// Conditions that trigger a retry: (the relationship is or)
        /// 1.There are resources which fail to be cleaned up.
        /// 2.The cleanup is timeout.
        /// </remarks>
        [JsiiProperty(name: "cleanUpRetryCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CleanUpRetryCount
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property cleanUpTimeout: The timeout seconds of executions of cleanup phase.</summary>
        /// <remarks>
        /// Default to 1 hour.
        /// </remarks>
        [JsiiProperty(name: "cleanUpTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CleanUpTimeout
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property disabledSideEffects: Side effects to be disabled.</summary>
        /// <remarks>
        /// Cleaning up some resources will cause some side effects. If is not expected, use the property to disable them.
        /// The side effects can be found in response(ResourceCleaner) of API GetFeatureDetails.
        /// </remarks>
        [JsiiProperty(name: "disabledSideEffects", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DisabledSideEffects
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property excludedResources: Exclude parts from resources to be cleaned up.</summary>
        [JsiiProperty(name: "excludedResources", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ros.RosResourceCleaner.ExcludedResourcesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ExcludedResources
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property failureOption: The failure option of cleanup phase: - Normal: Resource failure does not affect the resources that depend on it.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>Fast: Resource failure causes all resources that depend on it to fail.
        /// Default to Normal.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "failureOption", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FailureOption
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property mode: The result mode of resource cleaner: - Strict: Any scanning or cleanup failure leads to the failure of the cleaner.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>Loose: Only a little scanning and cleanup failures lead to the failure of the cleaner. Most scanning failures will be ignored, failure messages can be found in ScanErrors or ResourceDetails. Most cleanup failures will be ignored, failure messages can be found in ResourceDetails.
        /// Default to Loose.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "mode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Mode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceFilters: Resource filters that ResourceCleaner uses to filter out the resources to be cleaned up during scanning.</summary>
        /// <remarks>
        /// Only one of ResourceFilters and Resources can be specified.
        /// There are two filtering behaviors(Effect): Allow and Deny. The filters work as below:
        /// 1.Any resource denied by any Deny filter will not be cleaned up.
        /// 2.Only resources allowed by some Allow filter and not denied by any Deny filter will be cleaned up.
        /// If filters are changed during resource update, ResourceCleaner requires to rescan. And if Action equals CleanUp, an error occurs.
        /// </remarks>
        [JsiiProperty(name: "resourceFilters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ros.RosResourceCleaner.ResourceFiltersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceFilters
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resources: Resources to be cleaned up.</summary>
        /// <remarks>
        /// Only one of Resources and ResourceFilters can be specified.
        /// </remarks>
        [JsiiProperty(name: "resources", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ros.RosResourceCleaner.ResourcesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Resources
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceTypeOrder: This property takes effect only when property CleanUpAlgorithm is ResourceTypeOrder.</summary>
        /// <remarks>
        /// If it takes effect:
        ///
        /// <list type="bullet">
        /// <description>Resources will be cleaned up in order from front to back.</description>
        /// <description>Resource with resource type not specified in this property will not be cleaned up.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "resourceTypeOrder", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceTypeOrder
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ROS::ResourceCleaner`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IResourceCleanerProps), fullyQualifiedName: "@alicloud/ros-cdk-ros.ResourceCleanerProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ros.IResourceCleanerProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property action: Resource cleaner actions: - Scan: Scanning phase.</summary>
            /// <remarks>
            /// Scan out the resources to be cleaned up.
            ///
            /// <list type="bullet">
            /// <description>CleanUp: Cleanup phase. Clean up the scanned resources. It it not allowed for resource creation.</description>
            /// <description>Scan+CleanUp: Scan first, then CleanUp.</description>
            /// <description>ScanWhenCreatingAndUpdating+CleanUpWhenDeleting: Scan when creating or updating resource, and CleanUp when deleting stack.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "action", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Action
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property cleanUpAlgorithm: The cleanup algorithm of cleanup phase: - ResourceDependency: Clean up by resource dependency tree.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>ResourceTypeOrder: Clean up by resource type order. Property ResourceTypeOrder can be used to specify resource type order. If it is not specified, a default order will be used.
            /// Default to ResourceDependency.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cleanUpAlgorithm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CleanUpAlgorithm
            {
                get => GetInstanceProperty<object?>();
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
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property cleanUpTimeout: The timeout seconds of executions of cleanup phase.</summary>
            /// <remarks>
            /// Default to 1 hour.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cleanUpTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CleanUpTimeout
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property disabledSideEffects: Side effects to be disabled.</summary>
            /// <remarks>
            /// Cleaning up some resources will cause some side effects. If is not expected, use the property to disable them.
            /// The side effects can be found in response(ResourceCleaner) of API GetFeatureDetails.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "disabledSideEffects", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? DisabledSideEffects
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property excludedResources: Exclude parts from resources to be cleaned up.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "excludedResources", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ros.RosResourceCleaner.ExcludedResourcesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ExcludedResources
            {
                get => GetInstanceProperty<object?>();
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
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property mode: The result mode of resource cleaner: - Strict: Any scanning or cleanup failure leads to the failure of the cleaner.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>Loose: Only a little scanning and cleanup failures lead to the failure of the cleaner. Most scanning failures will be ignored, failure messages can be found in ScanErrors or ResourceDetails. Most cleanup failures will be ignored, failure messages can be found in ResourceDetails.
            /// Default to Loose.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "mode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Mode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceFilters: Resource filters that ResourceCleaner uses to filter out the resources to be cleaned up during scanning.</summary>
            /// <remarks>
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
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resources: Resources to be cleaned up.</summary>
            /// <remarks>
            /// Only one of Resources and ResourceFilters can be specified.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resources", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ros.RosResourceCleaner.ResourcesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Resources
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceTypeOrder: This property takes effect only when property CleanUpAlgorithm is ResourceTypeOrder.</summary>
            /// <remarks>
            /// If it takes effect:
            ///
            /// <list type="bullet">
            /// <description>Resources will be cleaned up in order from front to back.</description>
            /// <description>Resource with resource type not specified in this property will not be cleaned up.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceTypeOrder", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ResourceTypeOrder
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
