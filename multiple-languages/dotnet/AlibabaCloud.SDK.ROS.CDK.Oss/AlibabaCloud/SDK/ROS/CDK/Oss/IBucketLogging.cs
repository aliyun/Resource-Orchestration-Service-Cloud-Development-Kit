using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oss
{
    /// <summary>Represents a `BucketLogging`.</summary>
    [JsiiInterface(nativeType: typeof(IBucketLogging), fullyQualifiedName: "@alicloud/ros-cdk-oss.IBucketLogging")]
    public interface IBucketLogging : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute LoggingRole: Authorization role used for bucket logging.</summary>
        [JsiiProperty(name: "attrLoggingRole", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLoggingRole
        {
            get;
        }

        /// <summary>Attribute TargetBucket: The bucket that stores access logs.</summary>
        [JsiiProperty(name: "attrTargetBucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTargetBucket
        {
            get;
        }

        /// <summary>Attribute TargetPrefix: The prefix of the saved log objects.</summary>
        /// <remarks>
        /// This element can be left empty.
        /// </remarks>
        [JsiiProperty(name: "attrTargetPrefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTargetPrefix
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-oss.BucketLoggingProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Oss.IBucketLoggingProps Props
        {
            get;
        }

        /// <summary>Represents a `BucketLogging`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IBucketLogging), fullyQualifiedName: "@alicloud/ros-cdk-oss.IBucketLogging")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.IBucketLogging
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute LoggingRole: Authorization role used for bucket logging.</summary>
            [JsiiProperty(name: "attrLoggingRole", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLoggingRole
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TargetBucket: The bucket that stores access logs.</summary>
            [JsiiProperty(name: "attrTargetBucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTargetBucket
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TargetPrefix: The prefix of the saved log objects.</summary>
            /// <remarks>
            /// This element can be left empty.
            /// </remarks>
            [JsiiProperty(name: "attrTargetPrefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTargetPrefix
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-oss.BucketLoggingProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Oss.IBucketLoggingProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Oss.IBucketLoggingProps>()!;
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
