using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Hdr
{
    /// <summary>Represents a `SitePair`.</summary>
    [JsiiInterface(nativeType: typeof(ISitePair), fullyQualifiedName: "@alicloud/ros-cdk-hdr.ISitePair")]
    public interface ISitePair : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute PrimarySiteId: The ID of the primary site.</summary>
        [JsiiProperty(name: "attrPrimarySiteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPrimarySiteId
        {
            get;
        }

        /// <summary>Attribute SecondarySiteId: The ID of the secondary site.</summary>
        [JsiiProperty(name: "attrSecondarySiteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSecondarySiteId
        {
            get;
        }

        /// <summary>Attribute SitePairId: The ID of the site pair.</summary>
        [JsiiProperty(name: "attrSitePairId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSitePairId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-hdr.SitePairProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Hdr.ISitePairProps Props
        {
            get;
        }

        /// <summary>Represents a `SitePair`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ISitePair), fullyQualifiedName: "@alicloud/ros-cdk-hdr.ISitePair")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Hdr.ISitePair
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute PrimarySiteId: The ID of the primary site.</summary>
            [JsiiProperty(name: "attrPrimarySiteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPrimarySiteId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SecondarySiteId: The ID of the secondary site.</summary>
            [JsiiProperty(name: "attrSecondarySiteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSecondarySiteId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SitePairId: The ID of the site pair.</summary>
            [JsiiProperty(name: "attrSitePairId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSitePairId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-hdr.SitePairProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Hdr.ISitePairProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Hdr.ISitePairProps>()!;
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
