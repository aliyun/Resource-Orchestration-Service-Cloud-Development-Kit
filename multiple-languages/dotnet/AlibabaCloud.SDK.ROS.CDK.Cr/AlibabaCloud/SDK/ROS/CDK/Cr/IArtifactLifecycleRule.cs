using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cr
{
    /// <summary>Represents a `ArtifactLifecycleRule`.</summary>
    [JsiiInterface(nativeType: typeof(IArtifactLifecycleRule), fullyQualifiedName: "@alicloud/ros-cdk-cr.IArtifactLifecycleRule")]
    public interface IArtifactLifecycleRule : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute ArtifactLifecycleRuleId: The ID of the lifecycle management rule.</summary>
        [JsiiProperty(name: "attrArtifactLifecycleRuleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrArtifactLifecycleRuleId
        {
            get;
        }

        /// <summary>Attribute Auto: Specify whether to automatically execute the lifecycle management rule.</summary>
        [JsiiProperty(name: "attrAuto", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAuto
        {
            get;
        }

        /// <summary>Attribute CreateTime: Creation time of the lifecycle management rule.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute InstanceId: ACR Instance ID.</summary>
        [JsiiProperty(name: "attrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceId
        {
            get;
        }

        /// <summary>Attribute ModifiedTime: Change time of the lifecycle management rule.</summary>
        [JsiiProperty(name: "attrModifiedTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrModifiedTime
        {
            get;
        }

        /// <summary>Attribute NamespaceName: The name of the namespace.</summary>
        [JsiiProperty(name: "attrNamespaceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNamespaceName
        {
            get;
        }

        /// <summary>Attribute RepoName: The name of the image repository.</summary>
        [JsiiProperty(name: "attrRepoName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRepoName
        {
            get;
        }

        /// <summary>Attribute RetentionTagCount: The number of images that you want to retain.</summary>
        [JsiiProperty(name: "attrRetentionTagCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRetentionTagCount
        {
            get;
        }

        /// <summary>Attribute ScheduleTime: The execution cycle of the lifecycle management rule.</summary>
        [JsiiProperty(name: "attrScheduleTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrScheduleTime
        {
            get;
        }

        /// <summary>Attribute Scope: The deletion scope.</summary>
        [JsiiProperty(name: "attrScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrScope
        {
            get;
        }

        /// <summary>Attribute TagRegexp: The regular expression that is used to indicate which image tags are retained.</summary>
        [JsiiProperty(name: "attrTagRegexp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTagRegexp
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cr.ArtifactLifecycleRuleProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Cr.IArtifactLifecycleRuleProps Props
        {
            get;
        }

        /// <summary>Represents a `ArtifactLifecycleRule`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IArtifactLifecycleRule), fullyQualifiedName: "@alicloud/ros-cdk-cr.IArtifactLifecycleRule")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cr.IArtifactLifecycleRule
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute ArtifactLifecycleRuleId: The ID of the lifecycle management rule.</summary>
            [JsiiProperty(name: "attrArtifactLifecycleRuleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrArtifactLifecycleRuleId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Auto: Specify whether to automatically execute the lifecycle management rule.</summary>
            [JsiiProperty(name: "attrAuto", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAuto
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: Creation time of the lifecycle management rule.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceId: ACR Instance ID.</summary>
            [JsiiProperty(name: "attrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ModifiedTime: Change time of the lifecycle management rule.</summary>
            [JsiiProperty(name: "attrModifiedTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrModifiedTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NamespaceName: The name of the namespace.</summary>
            [JsiiProperty(name: "attrNamespaceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNamespaceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RepoName: The name of the image repository.</summary>
            [JsiiProperty(name: "attrRepoName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRepoName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RetentionTagCount: The number of images that you want to retain.</summary>
            [JsiiProperty(name: "attrRetentionTagCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRetentionTagCount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ScheduleTime: The execution cycle of the lifecycle management rule.</summary>
            [JsiiProperty(name: "attrScheduleTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrScheduleTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Scope: The deletion scope.</summary>
            [JsiiProperty(name: "attrScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrScope
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TagRegexp: The regular expression that is used to indicate which image tags are retained.</summary>
            [JsiiProperty(name: "attrTagRegexp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTagRegexp
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cr.ArtifactLifecycleRuleProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Cr.IArtifactLifecycleRuleProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cr.IArtifactLifecycleRuleProps>()!;
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
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResourceEnvironment\"}")]
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
