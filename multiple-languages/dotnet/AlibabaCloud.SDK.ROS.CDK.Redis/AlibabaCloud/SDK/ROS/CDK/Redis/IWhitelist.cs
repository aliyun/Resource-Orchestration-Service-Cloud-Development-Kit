using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Redis
{
    /// <summary>Represents a `Whitelist`.</summary>
    [JsiiInterface(nativeType: typeof(IWhitelist), fullyQualifiedName: "@alicloud/ros-cdk-redis.IWhitelist")]
    public interface IWhitelist : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute SecurityIpGroupAttribute: The default is empty.</summary>
        /// <remarks>
        /// For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
        /// </remarks>
        [JsiiProperty(name: "attrSecurityIpGroupAttribute", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSecurityIpGroupAttribute
        {
            get;
        }

        /// <summary>Attribute SecurityIpGroupName: Whitelist group.</summary>
        [JsiiProperty(name: "attrSecurityIpGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSecurityIpGroupName
        {
            get;
        }

        /// <summary>Attribute SecurityIps: IP address whitelist to be modified.</summary>
        [JsiiProperty(name: "attrSecurityIps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSecurityIps
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-redis.WhitelistProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Redis.IWhitelistProps Props
        {
            get;
        }

        /// <summary>Represents a `Whitelist`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IWhitelist), fullyQualifiedName: "@alicloud/ros-cdk-redis.IWhitelist")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Redis.IWhitelist
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute SecurityIpGroupAttribute: The default is empty.</summary>
            /// <remarks>
            /// For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
            /// </remarks>
            [JsiiProperty(name: "attrSecurityIpGroupAttribute", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSecurityIpGroupAttribute
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SecurityIpGroupName: Whitelist group.</summary>
            [JsiiProperty(name: "attrSecurityIpGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSecurityIpGroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SecurityIps: IP address whitelist to be modified.</summary>
            [JsiiProperty(name: "attrSecurityIps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSecurityIps
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-redis.WhitelistProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Redis.IWhitelistProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Redis.IWhitelistProps>()!;
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
