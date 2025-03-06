using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudphone
{
    /// <summary>Represents a `InstanceGroup`.</summary>
    [JsiiInterface(nativeType: typeof(IInstanceGroup), fullyQualifiedName: "@alicloud/ros-cdk-cloudphone.IInstanceGroup")]
    public interface IInstanceGroup : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute InstanceIds: instance ids.</summary>
        [JsiiProperty(name: "attrInstanceIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceIds
        {
            get;
        }

        /// <summary>Attribute OrderId: oder id.</summary>
        [JsiiProperty(name: "attrOrderId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOrderId
        {
            get;
        }

        /// <summary>Attribute PrivateIps: Private IP address list of created cloud phone instances.</summary>
        /// <remarks>
        /// Only for VPC instance.
        /// </remarks>
        [JsiiProperty(name: "attrPrivateIps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPrivateIps
        {
            get;
        }

        /// <summary>Attribute TradePrice: price.</summary>
        [JsiiProperty(name: "attrTradePrice", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTradePrice
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cloudphone.InstanceGroupProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Cloudphone.IInstanceGroupProps Props
        {
            get;
        }

        /// <summary>Represents a `InstanceGroup`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IInstanceGroup), fullyQualifiedName: "@alicloud/ros-cdk-cloudphone.IInstanceGroup")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudphone.IInstanceGroup
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute InstanceIds: instance ids.</summary>
            [JsiiProperty(name: "attrInstanceIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute OrderId: oder id.</summary>
            [JsiiProperty(name: "attrOrderId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOrderId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PrivateIps: Private IP address list of created cloud phone instances.</summary>
            /// <remarks>
            /// Only for VPC instance.
            /// </remarks>
            [JsiiProperty(name: "attrPrivateIps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPrivateIps
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TradePrice: price.</summary>
            [JsiiProperty(name: "attrTradePrice", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTradePrice
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cloudphone.InstanceGroupProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Cloudphone.IInstanceGroupProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cloudphone.IInstanceGroupProps>()!;
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
