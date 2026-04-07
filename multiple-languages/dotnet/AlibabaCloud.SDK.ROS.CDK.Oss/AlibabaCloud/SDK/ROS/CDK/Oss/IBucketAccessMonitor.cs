using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oss
{
    /// <summary>Represents a `BucketAccessMonitor`.</summary>
    [JsiiInterface(nativeType: typeof(IBucketAccessMonitor), fullyQualifiedName: "@alicloud/ros-cdk-oss.IBucketAccessMonitor")]
    public interface IBucketAccessMonitor : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-oss.BucketAccessMonitorProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Oss.IBucketAccessMonitorProps Props
        {
            get;
        }

        /// <summary>Represents a `BucketAccessMonitor`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IBucketAccessMonitor), fullyQualifiedName: "@alicloud/ros-cdk-oss.IBucketAccessMonitor")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.IBucketAccessMonitor
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-oss.BucketAccessMonitorProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Oss.IBucketAccessMonitorProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Oss.IBucketAccessMonitorProps>()!;
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
