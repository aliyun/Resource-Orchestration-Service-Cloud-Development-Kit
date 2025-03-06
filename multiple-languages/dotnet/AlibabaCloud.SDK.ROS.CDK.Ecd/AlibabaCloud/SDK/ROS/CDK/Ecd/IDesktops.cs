using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecd
{
    /// <summary>Represents a `Desktops`.</summary>
    [JsiiInterface(nativeType: typeof(IDesktops), fullyQualifiedName: "@alicloud/ros-cdk-ecd.IDesktops")]
    public interface IDesktops : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute DesktopId: The ID of the cloud desktop.</summary>
        /// <remarks>
        /// If multiple cloud desktops are created in a call, the
        /// IDs of the cloud desktops are returned.
        /// </remarks>
        [JsiiProperty(name: "attrDesktopId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDesktopId
        {
            get;
        }

        /// <summary>Attribute OrderId: The ID of the order.</summary>
        /// <remarks>
        /// Note This parameter is returned only when the ChargeType parameter is set to PrePaid.
        /// </remarks>
        [JsiiProperty(name: "attrOrderId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOrderId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecd.DesktopsProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ecd.IDesktopsProps Props
        {
            get;
        }

        /// <summary>Represents a `Desktops`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDesktops), fullyQualifiedName: "@alicloud/ros-cdk-ecd.IDesktops")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecd.IDesktops
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute DesktopId: The ID of the cloud desktop.</summary>
            /// <remarks>
            /// If multiple cloud desktops are created in a call, the
            /// IDs of the cloud desktops are returned.
            /// </remarks>
            [JsiiProperty(name: "attrDesktopId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDesktopId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute OrderId: The ID of the order.</summary>
            /// <remarks>
            /// Note This parameter is returned only when the ChargeType parameter is set to PrePaid.
            /// </remarks>
            [JsiiProperty(name: "attrOrderId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOrderId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecd.DesktopsProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ecd.IDesktopsProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecd.IDesktopsProps>()!;
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
