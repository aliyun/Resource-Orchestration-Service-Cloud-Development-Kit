using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    /// <summary>Represents a `VulWhitelist`.</summary>
    [JsiiInterface(nativeType: typeof(IVulWhitelist), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.IVulWhitelist")]
    public interface IVulWhitelist : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Reason: The reason why you add the vulnerability to the whitelist.</summary>
        [JsiiProperty(name: "attrReason", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrReason
        {
            get;
        }

        /// <summary>Attribute TargetInfo: The applicable scope of the whitelist.</summary>
        [JsiiProperty(name: "attrTargetInfo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTargetInfo
        {
            get;
        }

        /// <summary>Attribute VulWhitelistId: The ID of the whitelist.</summary>
        [JsiiProperty(name: "attrVulWhitelistId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVulWhitelistId
        {
            get;
        }

        /// <summary>Attribute Whitelist: The information about the vulnerability that you want to add to the whitelist.</summary>
        [JsiiProperty(name: "attrWhitelist", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrWhitelist
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-threatdetection.VulWhitelistProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Threatdetection.IVulWhitelistProps Props
        {
            get;
        }

        /// <summary>Represents a `VulWhitelist`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IVulWhitelist), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.IVulWhitelist")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IVulWhitelist
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Reason: The reason why you add the vulnerability to the whitelist.</summary>
            [JsiiProperty(name: "attrReason", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrReason
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TargetInfo: The applicable scope of the whitelist.</summary>
            [JsiiProperty(name: "attrTargetInfo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTargetInfo
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VulWhitelistId: The ID of the whitelist.</summary>
            [JsiiProperty(name: "attrVulWhitelistId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVulWhitelistId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Whitelist: The information about the vulnerability that you want to add to the whitelist.</summary>
            [JsiiProperty(name: "attrWhitelist", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrWhitelist
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-threatdetection.VulWhitelistProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Threatdetection.IVulWhitelistProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Threatdetection.IVulWhitelistProps>()!;
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
