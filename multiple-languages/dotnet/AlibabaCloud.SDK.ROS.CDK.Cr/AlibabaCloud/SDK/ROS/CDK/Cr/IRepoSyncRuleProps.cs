using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cr
{
    /// <summary>Properties for defining a `RepoSyncRule`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-reposyncrule
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRepoSyncRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-cr.RepoSyncRuleProps")]
    public interface IRepoSyncRuleProps
    {
        /// <summary>Property instanceId: The ID of the CR instance.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Property namespaceName: The name of the CR namespace.</summary>
        [JsiiProperty(name: "namespaceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NamespaceName
        {
            get;
        }

        /// <summary>Property syncRuleName: The name of the image sync rule.</summary>
        [JsiiProperty(name: "syncRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SyncRuleName
        {
            get;
        }

        /// <summary>Property syncScope: The synchronization scope.</summary>
        /// <remarks>
        /// Valid values: REPO, NAMESPACE
        /// </remarks>
        [JsiiProperty(name: "syncScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SyncScope
        {
            get;
        }

        /// <summary>Property syncTrigger: The mode of triggering the synchronization rule.</summary>
        /// <remarks>
        /// Valid values: INITIATIVE, PASSIVE
        /// </remarks>
        [JsiiProperty(name: "syncTrigger", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SyncTrigger
        {
            get;
        }

        /// <summary>Property targetInstanceId: The ID of the destination instance.</summary>
        [JsiiProperty(name: "targetInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TargetInstanceId
        {
            get;
        }

        /// <summary>Property targetNamespaceName: The name of the destination namespace.</summary>
        [JsiiProperty(name: "targetNamespaceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TargetNamespaceName
        {
            get;
        }

        /// <summary>Property targetRegionId: The ID of the destination region.</summary>
        [JsiiProperty(name: "targetRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TargetRegionId
        {
            get;
        }

        /// <summary>Property repoName: The name of the repository.</summary>
        /// <remarks>
        /// This parameter is required when SyncScope is REPO.
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

        /// <summary>Property repoNameFilter: The regular expression that is used to filter repositories.</summary>
        [JsiiProperty(name: "repoNameFilter", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RepoNameFilter
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tagFilter: The tag filter.</summary>
        /// <remarks>
        /// Default value: .*
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

        /// <summary>Property targetRepoName: The name of the destination image repository.</summary>
        /// <remarks>
        /// This parameter is optional.
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

        /// <summary>Property targetUserId: The user ID (UID) of the account to which the destination instance belongs.</summary>
        [JsiiProperty(name: "targetUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TargetUserId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RepoSyncRule`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-reposyncrule
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRepoSyncRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-cr.RepoSyncRuleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cr.IRepoSyncRuleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property instanceId: The ID of the CR instance.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property namespaceName: The name of the CR namespace.</summary>
            [JsiiProperty(name: "namespaceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NamespaceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property syncRuleName: The name of the image sync rule.</summary>
            [JsiiProperty(name: "syncRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SyncRuleName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property syncScope: The synchronization scope.</summary>
            /// <remarks>
            /// Valid values: REPO, NAMESPACE
            /// </remarks>
            [JsiiProperty(name: "syncScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SyncScope
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property syncTrigger: The mode of triggering the synchronization rule.</summary>
            /// <remarks>
            /// Valid values: INITIATIVE, PASSIVE
            /// </remarks>
            [JsiiProperty(name: "syncTrigger", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SyncTrigger
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property targetInstanceId: The ID of the destination instance.</summary>
            [JsiiProperty(name: "targetInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TargetInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property targetNamespaceName: The name of the destination namespace.</summary>
            [JsiiProperty(name: "targetNamespaceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TargetNamespaceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property targetRegionId: The ID of the destination region.</summary>
            [JsiiProperty(name: "targetRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TargetRegionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property repoName: The name of the repository.</summary>
            /// <remarks>
            /// This parameter is required when SyncScope is REPO.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "repoName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RepoName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property repoNameFilter: The regular expression that is used to filter repositories.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "repoNameFilter", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RepoNameFilter
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tagFilter: The tag filter.</summary>
            /// <remarks>
            /// Default value: .*
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tagFilter", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TagFilter
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property targetRepoName: The name of the destination image repository.</summary>
            /// <remarks>
            /// This parameter is optional.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "targetRepoName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TargetRepoName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property targetUserId: The user ID (UID) of the account to which the destination instance belongs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "targetUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TargetUserId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
