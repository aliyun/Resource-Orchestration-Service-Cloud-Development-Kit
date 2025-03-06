using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vs
{
    /// <summary>Represents a `Group`.</summary>
    [JsiiInterface(nativeType: typeof(IGroup), fullyQualifiedName: "@alicloud/ros-cdk-vs.IGroup")]
    public interface IGroup : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute GbId: GB ID space provided.</summary>
        /// <remarks>
        /// (Applies only to access the space marked States)
        /// </remarks>
        [JsiiProperty(name: "attrGbId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrGbId
        {
            get;
        }

        /// <summary>Attribute GbIp: GB signaling server address space provided.</summary>
        /// <remarks>
        /// (Applies only to access the space marked States)
        /// </remarks>
        [JsiiProperty(name: "attrGbIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrGbIp
        {
            get;
        }

        /// <summary>Attribute GbPort: GB Port space provided.</summary>
        /// <remarks>
        /// (Applies only to access the space marked States)
        /// </remarks>
        [JsiiProperty(name: "attrGbPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrGbPort
        {
            get;
        }

        /// <summary>Attribute Id: Space ID.</summary>
        [JsiiProperty(name: "attrId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vs.GroupProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Vs.IGroupProps Props
        {
            get;
        }

        /// <summary>Represents a `Group`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IGroup), fullyQualifiedName: "@alicloud/ros-cdk-vs.IGroup")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vs.IGroup
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute GbId: GB ID space provided.</summary>
            /// <remarks>
            /// (Applies only to access the space marked States)
            /// </remarks>
            [JsiiProperty(name: "attrGbId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrGbId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute GbIp: GB signaling server address space provided.</summary>
            /// <remarks>
            /// (Applies only to access the space marked States)
            /// </remarks>
            [JsiiProperty(name: "attrGbIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrGbIp
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute GbPort: GB Port space provided.</summary>
            /// <remarks>
            /// (Applies only to access the space marked States)
            /// </remarks>
            [JsiiProperty(name: "attrGbPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrGbPort
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Id: Space ID.</summary>
            [JsiiProperty(name: "attrId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vs.GroupProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Vs.IGroupProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vs.IGroupProps>()!;
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
