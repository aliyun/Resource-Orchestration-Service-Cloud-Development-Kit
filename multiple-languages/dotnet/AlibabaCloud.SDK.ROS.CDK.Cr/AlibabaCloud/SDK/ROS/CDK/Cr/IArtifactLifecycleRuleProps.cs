using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cr
{
    /// <summary>Properties for defining a `ArtifactLifecycleRule`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-artifactlifecyclerule
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IArtifactLifecycleRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-cr.ArtifactLifecycleRuleProps")]
    public interface IArtifactLifecycleRuleProps
    {
        /// <summary>Property auto: Specify whether to automatically execute the lifecycle management rule.</summary>
        [JsiiProperty(name: "auto", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Auto
        {
            get;
        }

        /// <summary>Property instanceId: ACR Instance ID.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Property namespaceName: The name of the namespace.</summary>
        [JsiiProperty(name: "namespaceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NamespaceName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property repoName: The name of the image repository.</summary>
        [JsiiProperty(name: "repoName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RepoName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property retentionTagCount: The number of images that you want to retain.</summary>
        [JsiiProperty(name: "retentionTagCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RetentionTagCount
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property scheduleTime: The execution cycle of the lifecycle management rule.</summary>
        [JsiiProperty(name: "scheduleTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ScheduleTime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property scope: The deletion scope.</summary>
        [JsiiProperty(name: "scope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Scope
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tagRegexp: The regular expression that is used to indicate which image tags are retained.</summary>
        [JsiiProperty(name: "tagRegexp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TagRegexp
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ArtifactLifecycleRule`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-artifactlifecyclerule
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IArtifactLifecycleRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-cr.ArtifactLifecycleRuleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cr.IArtifactLifecycleRuleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property auto: Specify whether to automatically execute the lifecycle management rule.</summary>
            [JsiiProperty(name: "auto", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Auto
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceId: ACR Instance ID.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property namespaceName: The name of the namespace.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "namespaceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NamespaceName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property repoName: The name of the image repository.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "repoName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RepoName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property retentionTagCount: The number of images that you want to retain.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "retentionTagCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RetentionTagCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property scheduleTime: The execution cycle of the lifecycle management rule.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "scheduleTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ScheduleTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property scope: The deletion scope.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "scope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Scope
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tagRegexp: The regular expression that is used to indicate which image tags are retained.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tagRegexp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TagRegexp
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
