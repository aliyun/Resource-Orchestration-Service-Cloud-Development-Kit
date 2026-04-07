using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    /// <summary>Represents a `HoneyPot`.</summary>
    [JsiiInterface(nativeType: typeof(IHoneyPot), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.IHoneyPot")]
    public interface IHoneyPot : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute HoneypotId: The ID of the honeypot.</summary>
        [JsiiProperty(name: "attrHoneypotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHoneypotId
        {
            get;
        }

        /// <summary>Attribute HoneypotImageId: The ID of the honeypot image.</summary>
        [JsiiProperty(name: "attrHoneypotImageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHoneypotImageId
        {
            get;
        }

        /// <summary>Attribute HoneypotImageName: The name of the honeypot image.</summary>
        [JsiiProperty(name: "attrHoneypotImageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHoneypotImageName
        {
            get;
        }

        /// <summary>Attribute HoneypotName: The custom name of the honeypot.</summary>
        [JsiiProperty(name: "attrHoneypotName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHoneypotName
        {
            get;
        }

        /// <summary>Attribute NodeId: The ID of the management node.</summary>
        [JsiiProperty(name: "attrNodeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNodeId
        {
            get;
        }

        /// <summary>Attribute State: Honeypot status.</summary>
        [JsiiProperty(name: "attrState", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrState
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-threatdetection.HoneyPotProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Threatdetection.IHoneyPotProps Props
        {
            get;
        }

        /// <summary>Represents a `HoneyPot`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IHoneyPot), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.IHoneyPot")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IHoneyPot
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute HoneypotId: The ID of the honeypot.</summary>
            [JsiiProperty(name: "attrHoneypotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHoneypotId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HoneypotImageId: The ID of the honeypot image.</summary>
            [JsiiProperty(name: "attrHoneypotImageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHoneypotImageId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HoneypotImageName: The name of the honeypot image.</summary>
            [JsiiProperty(name: "attrHoneypotImageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHoneypotImageName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HoneypotName: The custom name of the honeypot.</summary>
            [JsiiProperty(name: "attrHoneypotName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHoneypotName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NodeId: The ID of the management node.</summary>
            [JsiiProperty(name: "attrNodeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNodeId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute State: Honeypot status.</summary>
            [JsiiProperty(name: "attrState", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrState
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-threatdetection.HoneyPotProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Threatdetection.IHoneyPotProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Threatdetection.IHoneyPotProps>()!;
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
