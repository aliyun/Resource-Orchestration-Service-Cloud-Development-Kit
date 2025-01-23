using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ice
{
    /// <summary>Represents a `InsertMediaToSearchLib`.</summary>
    [JsiiInterface(nativeType: typeof(IInsertMediaToSearchLib), fullyQualifiedName: "@alicloud/ros-cdk-ice.IInsertMediaToSearchLib")]
    public interface IInsertMediaToSearchLib : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute MediaId: The ID of the media asset.</summary>
        [JsiiProperty(name: "attrMediaId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMediaId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ice.InsertMediaToSearchLibProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ice.IInsertMediaToSearchLibProps Props
        {
            get;
        }

        /// <summary>Represents a `InsertMediaToSearchLib`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IInsertMediaToSearchLib), fullyQualifiedName: "@alicloud/ros-cdk-ice.IInsertMediaToSearchLib")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ice.IInsertMediaToSearchLib
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute MediaId: The ID of the media asset.</summary>
            [JsiiProperty(name: "attrMediaId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMediaId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ice.InsertMediaToSearchLibProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ice.IInsertMediaToSearchLibProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ice.IInsertMediaToSearchLibProps>()!;
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
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ResourceEnvironment\"}")]
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
