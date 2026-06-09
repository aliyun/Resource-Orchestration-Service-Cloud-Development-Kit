using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Eventbridge
{
    /// <summary>Represents a `Connection`.</summary>
    [JsiiInterface(nativeType: typeof(IConnection), fullyQualifiedName: "@alicloud/ros-cdk-eventbridge.IConnection")]
    public interface IConnection : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AuthParameters: Authentication Data Structure.</summary>
        [JsiiProperty(name: "attrAuthParameters", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAuthParameters
        {
            get;
        }

        /// <summary>Attribute ConnectionName: The connection configuration name.</summary>
        /// <remarks>
        /// The maximum length is 127 characters. Minimum length 2 characters.
        /// </remarks>
        [JsiiProperty(name: "attrConnectionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrConnectionName
        {
            get;
        }

        /// <summary>Attribute CreateTime: The creation time of the resource.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute Description: The connection configuration description.</summary>
        /// <remarks>
        /// The maximum length is 255 characters.
        /// </remarks>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute NetworkParameters: Network Configuration Data Structure.</summary>
        [JsiiProperty(name: "attrNetworkParameters", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNetworkParameters
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-eventbridge.ConnectionProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Eventbridge.IConnectionProps Props
        {
            get;
        }

        /// <summary>Represents a `Connection`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IConnection), fullyQualifiedName: "@alicloud/ros-cdk-eventbridge.IConnection")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Eventbridge.IConnection
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AuthParameters: Authentication Data Structure.</summary>
            [JsiiProperty(name: "attrAuthParameters", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAuthParameters
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ConnectionName: The connection configuration name.</summary>
            /// <remarks>
            /// The maximum length is 127 characters. Minimum length 2 characters.
            /// </remarks>
            [JsiiProperty(name: "attrConnectionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrConnectionName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: The creation time of the resource.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Description: The connection configuration description.</summary>
            /// <remarks>
            /// The maximum length is 255 characters.
            /// </remarks>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NetworkParameters: Network Configuration Data Structure.</summary>
            [JsiiProperty(name: "attrNetworkParameters", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNetworkParameters
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-eventbridge.ConnectionProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Eventbridge.IConnectionProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Eventbridge.IConnectionProps>()!;
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
