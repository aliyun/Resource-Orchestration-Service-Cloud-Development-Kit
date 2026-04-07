using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Represents a `OriginProtection`.</summary>
    [JsiiInterface(nativeType: typeof(IOriginProtection), fullyQualifiedName: "@alicloud/ros-cdk-esa.IOriginProtection")]
    public interface IOriginProtection : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute CurrentIpWhitelist: The IP whitelist for origin protection used by the website.</summary>
        [JsiiProperty(name: "attrCurrentIpWhitelist", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCurrentIpWhitelist
        {
            get;
        }

        /// <summary>Attribute DiffIpWhitelist: The IP whitelist for origin protection that has been updated.</summary>
        [JsiiProperty(name: "attrDiffIpWhitelist", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDiffIpWhitelist
        {
            get;
        }

        /// <summary>Attribute LatestIpWhitelist: The latest IP whitelist for origin protection.</summary>
        [JsiiProperty(name: "attrLatestIpWhitelist", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLatestIpWhitelist
        {
            get;
        }

        /// <summary>Attribute OriginConverge: The IP convergence status.</summary>
        [JsiiProperty(name: "attrOriginConverge", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOriginConverge
        {
            get;
        }

        /// <summary>Attribute OriginProtection: Indicates whether origin protection is enabled.</summary>
        [JsiiProperty(name: "attrOriginProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOriginProtection
        {
            get;
        }

        /// <summary>Attribute SiteId: The website ID.</summary>
        [JsiiProperty(name: "attrSiteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSiteId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.OriginProtectionProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Esa.IOriginProtectionProps Props
        {
            get;
        }

        /// <summary>Represents a `OriginProtection`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IOriginProtection), fullyQualifiedName: "@alicloud/ros-cdk-esa.IOriginProtection")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IOriginProtection
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute CurrentIpWhitelist: The IP whitelist for origin protection used by the website.</summary>
            [JsiiProperty(name: "attrCurrentIpWhitelist", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCurrentIpWhitelist
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DiffIpWhitelist: The IP whitelist for origin protection that has been updated.</summary>
            [JsiiProperty(name: "attrDiffIpWhitelist", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDiffIpWhitelist
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LatestIpWhitelist: The latest IP whitelist for origin protection.</summary>
            [JsiiProperty(name: "attrLatestIpWhitelist", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLatestIpWhitelist
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute OriginConverge: The IP convergence status.</summary>
            [JsiiProperty(name: "attrOriginConverge", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOriginConverge
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute OriginProtection: Indicates whether origin protection is enabled.</summary>
            [JsiiProperty(name: "attrOriginProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOriginProtection
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SiteId: The website ID.</summary>
            [JsiiProperty(name: "attrSiteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSiteId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.OriginProtectionProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Esa.IOriginProtectionProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Esa.IOriginProtectionProps>()!;
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
