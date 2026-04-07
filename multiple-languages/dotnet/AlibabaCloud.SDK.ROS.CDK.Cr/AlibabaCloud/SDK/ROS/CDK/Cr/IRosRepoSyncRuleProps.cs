using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cr
{
    /// <summary>Properties for defining a `RosRepoSyncRule`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-reposyncrule
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosRepoSyncRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-cr.RosRepoSyncRuleProps")]
    public interface IRosRepoSyncRuleProps
    {
        /// <remarks>
        /// <strong>Property</strong>: instanceId: The ID of the CR instance.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: namespaceName: The name of the CR namespace.
        /// </remarks>
        [JsiiProperty(name: "namespaceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NamespaceName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: syncRuleName: The name of the image sync rule.
        /// </remarks>
        [JsiiProperty(name: "syncRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SyncRuleName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: syncScope: The synchronization scope. Valid values: REPO, NAMESPACE
        /// </remarks>
        [JsiiProperty(name: "syncScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SyncScope
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: syncTrigger: The mode of triggering the synchronization rule. Valid values: INITIATIVE, PASSIVE
        /// </remarks>
        [JsiiProperty(name: "syncTrigger", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SyncTrigger
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: targetInstanceId: The ID of the destination instance.
        /// </remarks>
        [JsiiProperty(name: "targetInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TargetInstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: targetNamespaceName: The name of the destination namespace.
        /// </remarks>
        [JsiiProperty(name: "targetNamespaceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TargetNamespaceName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: targetRegionId: The ID of the destination region.
        /// </remarks>
        [JsiiProperty(name: "targetRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TargetRegionId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: repoName: The name of the repository. This parameter is required when SyncScope is REPO.
        /// </remarks>
        [JsiiProperty(name: "repoName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RepoName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: repoNameFilter: The regular expression that is used to filter repositories.
        /// </remarks>
        [JsiiProperty(name: "repoNameFilter", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RepoNameFilter
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: tagFilter: The tag filter. Default value: .*
        /// </remarks>
        [JsiiProperty(name: "tagFilter", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TagFilter
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: targetRepoName: The name of the destination image repository. This parameter is optional.
        /// </remarks>
        [JsiiProperty(name: "targetRepoName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TargetRepoName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: targetUserId: The user ID (UID) of the account to which the destination instance belongs.
        /// </remarks>
        [JsiiProperty(name: "targetUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TargetUserId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosRepoSyncRule`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-reposyncrule
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosRepoSyncRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-cr.RosRepoSyncRuleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cr.IRosRepoSyncRuleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: The ID of the CR instance.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: namespaceName: The name of the CR namespace.
            /// </remarks>
            [JsiiProperty(name: "namespaceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NamespaceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: syncRuleName: The name of the image sync rule.
            /// </remarks>
            [JsiiProperty(name: "syncRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SyncRuleName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: syncScope: The synchronization scope. Valid values: REPO, NAMESPACE
            /// </remarks>
            [JsiiProperty(name: "syncScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SyncScope
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: syncTrigger: The mode of triggering the synchronization rule. Valid values: INITIATIVE, PASSIVE
            /// </remarks>
            [JsiiProperty(name: "syncTrigger", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SyncTrigger
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: targetInstanceId: The ID of the destination instance.
            /// </remarks>
            [JsiiProperty(name: "targetInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TargetInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: targetNamespaceName: The name of the destination namespace.
            /// </remarks>
            [JsiiProperty(name: "targetNamespaceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TargetNamespaceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: targetRegionId: The ID of the destination region.
            /// </remarks>
            [JsiiProperty(name: "targetRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TargetRegionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: repoName: The name of the repository. This parameter is required when SyncScope is REPO.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "repoName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RepoName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: repoNameFilter: The regular expression that is used to filter repositories.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "repoNameFilter", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RepoNameFilter
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tagFilter: The tag filter. Default value: .*
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tagFilter", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TagFilter
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: targetRepoName: The name of the destination image repository. This parameter is optional.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "targetRepoName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TargetRepoName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: targetUserId: The user ID (UID) of the account to which the destination instance belongs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "targetUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TargetUserId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
