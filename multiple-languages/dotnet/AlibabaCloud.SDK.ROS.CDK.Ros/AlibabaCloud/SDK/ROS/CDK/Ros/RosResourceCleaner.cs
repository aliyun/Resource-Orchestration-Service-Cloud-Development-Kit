using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ros
{
    /// <summary>A ROS template type:  `ALIYUN::ROS::ResourceCleaner`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Ros.RosResourceCleaner), fullyQualifiedName: "@alicloud/ros-cdk-ros.RosResourceCleaner", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ros.RosResourceCleanerProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosResourceCleaner : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::ROS::ResourceCleaner`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosResourceCleaner(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ros.IRosResourceCleanerProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosResourceCleaner(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosResourceCleaner(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]")]
        protected override System.Collections.Generic.IDictionary<string, object> RenderProperties(System.Collections.Generic.IDictionary<string, object> props)
        {
            return InvokeInstanceMethod<System.Collections.Generic.IDictionary<string, object>>(new System.Type[]{typeof(System.Collections.Generic.IDictionary<string, object>)}, new object[]{props})!;
        }

        /// <summary>The resource type name for this resource class.</summary>
        [JsiiProperty(name: "ROS_RESOURCE_TYPE_NAME", typeJson: "{\"primitive\":\"string\"}")]
        public static string ROS_RESOURCE_TYPE_NAME
        {
            get;
        }
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Ros.RosResourceCleaner))!;

        /// <remarks>
        /// <strong>Attribute</strong>: NoCleanupResourceDetails: The details of the resources that are scanned but filtered.
        /// Only resources with the resource types ResourceCleaner supports and the regions not filtered are scanned.
        /// The format is the same as ResourceDetails.
        /// </remarks>
        [JsiiProperty(name: "attrNoCleanupResourceDetails", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrNoCleanupResourceDetails
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: ResourceDetails: The details of resources to be cleaned up.
        /// The value is a list of dict. The dict contains the fields below:
        /// - ResourceType: Resource type of the resource.
        /// - RegionId: Region ID of the resource.
        /// - ResourceId: ID of the resource.
        /// - ResourceName: Name of the resource.
        /// - CleanupType: Cleanup type of the resource. Valid values:
        /// - Normal: The resource can be deleted normally.
        /// - DeleteWithInstance: The resource will be deleted with the resource it belongs to. If the resource it belongs to is filtered or excluded, the deletion probably fails. CleanupTypeReasons give more information.
        /// - UnableToDelete: Unable to delete the resource. CleanupTypeReasons give more information.
        /// - CleanupTypeReasons: The information of the related CleanupType.
        /// - ResourceStatus: Status of the resource. Valid values:
        /// - Deleting: The resource is deleting.
        /// - Failure: The deletion of the resource failed.
        /// - Success: The resource is deleted.
        /// - Skipped: The deletion of the resource is skipped.
        /// - Pending: The deletion of the resource is not started.
        /// - ResourceStatusReason: The information of the related ResourceStatus.
        /// - Dependencies: The resources that need to be deleted before the deletion of the resource. The value is a list of dict. The dict contains the fields below:
        /// - ResourceType: Resource type of the dependency resource.
        /// - RegionId: Region ID of the dependency resource.
        /// - ResourceId: ID of the dependency resource.
        /// </remarks>
        [JsiiProperty(name: "attrResourceDetails", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrResourceDetails
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: ResourceSummary: The details of resources to be cleaned up.
        /// The value is a list of dict. The dict contains the fields below:
        /// - ResourceType: Resource type of the resources.
        /// - DeletingCount: Number of deleting resources of the resource type.
        /// - SuccessCount: Number of deleted resources of the resource type.
        /// - FailureCount: Number of resources that failed to delete of the resource type.
        /// - SkippedCount: Number of skipped resources of the resource type.
        /// - PendingCount: Number of resources that have not been deleted of the resource type.
        /// - OtherCount: Number of other resources of the resource type.
        /// - TotalCount: Number of total resources of the resource type.
        /// </remarks>
        [JsiiProperty(name: "attrResourceSummary", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrResourceSummary
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: action: Resource cleaner actions:
        /// - Scan: Scanning phase. Scan out the resources to be cleaned up.
        /// - CleanUp: Cleanup phase. Clean up the scanned resources. It it not allowed for resource creation.
        /// - Scan+CleanUp: Scan first, then CleanUp.
        /// - ScanWhenCreatingAndUpdating+CleanUpWhenDeleting: Scan when creating or updating resource, and CleanUp when deleting resource.
        /// </remarks>
        [JsiiProperty(name: "action", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object Action
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
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
        public virtual object? CleanUpRetryCount
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: cleanUpTimeout: The timeout seconds of executions of cleanup phase.
        /// Default to 1 hour.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "cleanUpTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? CleanUpTimeout
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: excludedResources: Exclude parts from resources to be cleaned up.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "excludedResources", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ros.RosResourceCleaner.ExcludedResourcesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? ExcludedResources
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: failureOption: The failure option of cleanup phase:
        /// - Normal: Resource failure does not affect the resources that depend on it.
        /// - Fast: Resource failure causes all resources that depend on it to fail.
        /// Default to Normal.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "failureOption", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? FailureOption
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
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
        public virtual object? ResourceFilters
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IExcludedResourcesProperty), fullyQualifiedName: "@alicloud/ros-cdk-ros.RosResourceCleaner.ExcludedResourcesProperty")]
        public interface IExcludedResourcesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: resourceId: The ID of the resource to be excluded.
            /// </remarks>
            [JsiiProperty(name: "resourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object ResourceId
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: regionId: The region ID of the resource to be excluded.
            /// </remarks>
            [JsiiProperty(name: "regionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? RegionId
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceType: The resource type of the resource to be excluded.
            /// The allowed values are the resource types that ResourceCleaner supports to clean up.
            /// </remarks>
            [JsiiProperty(name: "resourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ResourceType
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IExcludedResourcesProperty), fullyQualifiedName: "@alicloud/ros-cdk-ros.RosResourceCleaner.ExcludedResourcesProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ros.RosResourceCleaner.IExcludedResourcesProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: resourceId: The ID of the resource to be excluded.
                /// </remarks>
                [JsiiProperty(name: "resourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object ResourceId
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: regionId: The region ID of the resource to be excluded.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "regionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? RegionId
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: resourceType: The resource type of the resource to be excluded.
                /// The allowed values are the resource types that ResourceCleaner supports to clean up.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "resourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? ResourceType
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-ros.RosResourceCleaner.ExcludedResourcesProperty")]
        public class ExcludedResourcesProperty : AlibabaCloud.SDK.ROS.CDK.Ros.RosResourceCleaner.IExcludedResourcesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: resourceId: The ID of the resource to be excluded.
            /// </remarks>
            [JsiiProperty(name: "resourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ResourceId
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: regionId: The region ID of the resource to be excluded.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "regionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RegionId
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceType: The resource type of the resource to be excluded.
            /// The allowed values are the resource types that ResourceCleaner supports to clean up.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceType
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IResourceFiltersProperty), fullyQualifiedName: "@alicloud/ros-cdk-ros.RosResourceCleaner.ResourceFiltersProperty")]
        public interface IResourceFiltersProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: effect: Filtering behavior:
            /// - Allow: Resource might be cleaned up if it passes the filter, will not be cleaned up if it does not pass the filter.
            /// - Deny: Resource will not be cleaned up if it passes the filter.See also ResourceFilters for more details.
            /// </remarks>
            [JsiiProperty(name: "effect", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Effect
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: includeDeletionProtection: Whether to include delete protected resources.
            /// Default to True.
            /// </remarks>
            [JsiiProperty(name: "includeDeletionProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? IncludeDeletionProtection
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: regionIds: Region filtering.
            /// The relationship of each item is or.
            /// </remarks>
            [JsiiProperty(name: "regionIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? RegionIds
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupIds: Resource group filtering.
            /// The relationship of each item is or.
            /// </remarks>
            [JsiiProperty(name: "resourceGroupIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ResourceGroupIds
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceIds: Resource ID filtering.
            /// The relationship of each item is or.
            /// </remarks>
            [JsiiProperty(name: "resourceIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ResourceIds
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceNamePatterns: Resource name fuzzy matching filtering.
            /// The relationship of each item is or.
            /// </remarks>
            [JsiiProperty(name: "resourceNamePatterns", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ResourceNamePatterns
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceTypePatterns: Resource type fuzzy matching filtering.
            /// The relationship of each item is or.
            /// </remarks>
            [JsiiProperty(name: "resourceTypePatterns", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ResourceTypePatterns
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: tags: Tag filtering, including custom tags and visible system tags.
            /// The relationship of items with different Keys is and. The relationship of items with same Key is or.
            /// </remarks>
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ros.RosResourceCleaner.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            AlibabaCloud.SDK.ROS.CDK.Ros.RosResourceCleaner.ITagsProperty[]? Tags
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IResourceFiltersProperty), fullyQualifiedName: "@alicloud/ros-cdk-ros.RosResourceCleaner.ResourceFiltersProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ros.RosResourceCleaner.IResourceFiltersProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: effect: Filtering behavior:
                /// - Allow: Resource might be cleaned up if it passes the filter, will not be cleaned up if it does not pass the filter.
                /// - Deny: Resource will not be cleaned up if it passes the filter.See also ResourceFilters for more details.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "effect", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Effect
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: includeDeletionProtection: Whether to include delete protected resources.
                /// Default to True.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "includeDeletionProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? IncludeDeletionProtection
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: regionIds: Region filtering.
                /// The relationship of each item is or.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "regionIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? RegionIds
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: resourceGroupIds: Resource group filtering.
                /// The relationship of each item is or.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "resourceGroupIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? ResourceGroupIds
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: resourceIds: Resource ID filtering.
                /// The relationship of each item is or.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "resourceIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? ResourceIds
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: resourceNamePatterns: Resource name fuzzy matching filtering.
                /// The relationship of each item is or.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "resourceNamePatterns", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? ResourceNamePatterns
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: resourceTypePatterns: Resource type fuzzy matching filtering.
                /// The relationship of each item is or.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "resourceTypePatterns", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? ResourceTypePatterns
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: tags: Tag filtering, including custom tags and visible system tags.
                /// The relationship of items with different Keys is and. The relationship of items with same Key is or.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ros.RosResourceCleaner.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
                public AlibabaCloud.SDK.ROS.CDK.Ros.RosResourceCleaner.ITagsProperty[]? Tags
                {
                    get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ros.RosResourceCleaner.ITagsProperty[]?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-ros.RosResourceCleaner.ResourceFiltersProperty")]
        public class ResourceFiltersProperty : AlibabaCloud.SDK.ROS.CDK.Ros.RosResourceCleaner.IResourceFiltersProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: effect: Filtering behavior:
            /// - Allow: Resource might be cleaned up if it passes the filter, will not be cleaned up if it does not pass the filter.
            /// - Deny: Resource will not be cleaned up if it passes the filter.See also ResourceFilters for more details.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "effect", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Effect
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: includeDeletionProtection: Whether to include delete protected resources.
            /// Default to True.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "includeDeletionProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IncludeDeletionProtection
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: regionIds: Region filtering.
            /// The relationship of each item is or.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "regionIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? RegionIds
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupIds: Resource group filtering.
            /// The relationship of each item is or.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ResourceGroupIds
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceIds: Resource ID filtering.
            /// The relationship of each item is or.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ResourceIds
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceNamePatterns: Resource name fuzzy matching filtering.
            /// The relationship of each item is or.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceNamePatterns", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ResourceNamePatterns
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceTypePatterns: Resource type fuzzy matching filtering.
            /// The relationship of each item is or.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceTypePatterns", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ResourceTypePatterns
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: tags: Tag filtering, including custom tags and visible system tags.
            /// The relationship of items with different Keys is and. The relationship of items with same Key is or.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ros.RosResourceCleaner.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Ros.RosResourceCleaner.ITagsProperty[]? Tags
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(ITagsProperty), fullyQualifiedName: "@alicloud/ros-cdk-ros.RosResourceCleaner.TagsProperty")]
        public interface ITagsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: key: Tag key.
            /// </remarks>
            [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Key
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: value: Tag value.
            /// If Value is not specified, as long as the tag key of the resource to be filtered exists, the resource passes the filtering of the tag key.
            /// If multiple different Values is specified for the same tag Key, as long as the resource to be filtered contains a pair of them, the resource passes the filtering of the tag key.
            /// </remarks>
            [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Value
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(ITagsProperty), fullyQualifiedName: "@alicloud/ros-cdk-ros.RosResourceCleaner.TagsProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ros.RosResourceCleaner.ITagsProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: key: Tag key.
                /// </remarks>
                [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Key
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: value: Tag value.
                /// If Value is not specified, as long as the tag key of the resource to be filtered exists, the resource passes the filtering of the tag key.
                /// If multiple different Values is specified for the same tag Key, as long as the resource to be filtered contains a pair of them, the resource passes the filtering of the tag key.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Value
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-ros.RosResourceCleaner.TagsProperty")]
        public class TagsProperty : AlibabaCloud.SDK.ROS.CDK.Ros.RosResourceCleaner.ITagsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: key: Tag key.
            /// </remarks>
            [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Key
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: value: Tag value.
            /// If Value is not specified, as long as the tag key of the resource to be filtered exists, the resource passes the filtering of the tag key.
            /// If multiple different Values is specified for the same tag Key, as long as the resource to be filtered contains a pair of them, the resource passes the filtering of the tag key.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Value
            {
                get;
                set;
            }
        }
    }
}
