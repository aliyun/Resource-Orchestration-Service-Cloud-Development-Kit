using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Represents a `TransitRouterPeerAttachment`.</summary>
    [JsiiInterface(nativeType: typeof(ITransitRouterPeerAttachment), fullyQualifiedName: "@alicloud/ros-cdk-cen.ITransitRouterPeerAttachment")]
    public interface ITransitRouterPeerAttachment : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AutoPublishRouteEnabled: AutoPublishRouteEnabled.</summary>
        [JsiiProperty(name: "attrAutoPublishRouteEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAutoPublishRouteEnabled
        {
            get;
        }

        /// <summary>Attribute Bandwidth: Bandwidth.</summary>
        [JsiiProperty(name: "attrBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBandwidth
        {
            get;
        }

        /// <summary>Attribute CenBandwidthPackageId: BandwidthPackageId.</summary>
        [JsiiProperty(name: "attrCenBandwidthPackageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCenBandwidthPackageId
        {
            get;
        }

        /// <summary>Attribute CenId: CenId.</summary>
        [JsiiProperty(name: "attrCenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCenId
        {
            get;
        }

        /// <summary>Attribute ClientToken: ClientToken.</summary>
        [JsiiProperty(name: "attrClientToken", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrClientToken
        {
            get;
        }

        /// <summary>Attribute GeographicSpanId: GeographicSpanId.</summary>
        [JsiiProperty(name: "attrGeographicSpanId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrGeographicSpanId
        {
            get;
        }

        /// <summary>Attribute PeerTransitRouterId: PeerTransitRouterId.</summary>
        [JsiiProperty(name: "attrPeerTransitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPeerTransitRouterId
        {
            get;
        }

        /// <summary>Attribute PeerTransitRouterOwnerId: PeerTransitRouterOwnerId.</summary>
        [JsiiProperty(name: "attrPeerTransitRouterOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPeerTransitRouterOwnerId
        {
            get;
        }

        /// <summary>Attribute PeerTransitRouterRegionId: PeerTransitRouterRegionId.</summary>
        [JsiiProperty(name: "attrPeerTransitRouterRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPeerTransitRouterRegionId
        {
            get;
        }

        /// <summary>Attribute ResourceType: ResourceType.</summary>
        [JsiiProperty(name: "attrResourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceType
        {
            get;
        }

        /// <summary>Attribute TransitRouterAttachmentDescription: TransitRouterAttachmentDescription.</summary>
        [JsiiProperty(name: "attrTransitRouterAttachmentDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTransitRouterAttachmentDescription
        {
            get;
        }

        /// <summary>Attribute TransitRouterAttachmentId: The first ID of the resource.</summary>
        [JsiiProperty(name: "attrTransitRouterAttachmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTransitRouterAttachmentId
        {
            get;
        }

        /// <summary>Attribute TransitRouterAttachmentName: TransitRouterAttachmentName.</summary>
        [JsiiProperty(name: "attrTransitRouterAttachmentName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTransitRouterAttachmentName
        {
            get;
        }

        /// <summary>Attribute TransitRouterId: TransitRouterId.</summary>
        [JsiiProperty(name: "attrTransitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTransitRouterId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cen.TransitRouterPeerAttachmentProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Cen.ITransitRouterPeerAttachmentProps Props
        {
            get;
        }

        /// <summary>Represents a `TransitRouterPeerAttachment`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ITransitRouterPeerAttachment), fullyQualifiedName: "@alicloud/ros-cdk-cen.ITransitRouterPeerAttachment")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.ITransitRouterPeerAttachment
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AutoPublishRouteEnabled: AutoPublishRouteEnabled.</summary>
            [JsiiProperty(name: "attrAutoPublishRouteEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAutoPublishRouteEnabled
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Bandwidth: Bandwidth.</summary>
            [JsiiProperty(name: "attrBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBandwidth
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CenBandwidthPackageId: BandwidthPackageId.</summary>
            [JsiiProperty(name: "attrCenBandwidthPackageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCenBandwidthPackageId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CenId: CenId.</summary>
            [JsiiProperty(name: "attrCenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCenId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ClientToken: ClientToken.</summary>
            [JsiiProperty(name: "attrClientToken", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrClientToken
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute GeographicSpanId: GeographicSpanId.</summary>
            [JsiiProperty(name: "attrGeographicSpanId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrGeographicSpanId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PeerTransitRouterId: PeerTransitRouterId.</summary>
            [JsiiProperty(name: "attrPeerTransitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPeerTransitRouterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PeerTransitRouterOwnerId: PeerTransitRouterOwnerId.</summary>
            [JsiiProperty(name: "attrPeerTransitRouterOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPeerTransitRouterOwnerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PeerTransitRouterRegionId: PeerTransitRouterRegionId.</summary>
            [JsiiProperty(name: "attrPeerTransitRouterRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPeerTransitRouterRegionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceType: ResourceType.</summary>
            [JsiiProperty(name: "attrResourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TransitRouterAttachmentDescription: TransitRouterAttachmentDescription.</summary>
            [JsiiProperty(name: "attrTransitRouterAttachmentDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTransitRouterAttachmentDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TransitRouterAttachmentId: The first ID of the resource.</summary>
            [JsiiProperty(name: "attrTransitRouterAttachmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTransitRouterAttachmentId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TransitRouterAttachmentName: TransitRouterAttachmentName.</summary>
            [JsiiProperty(name: "attrTransitRouterAttachmentName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTransitRouterAttachmentName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TransitRouterId: TransitRouterId.</summary>
            [JsiiProperty(name: "attrTransitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTransitRouterId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cen.TransitRouterPeerAttachmentProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Cen.ITransitRouterPeerAttachmentProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cen.ITransitRouterPeerAttachmentProps>()!;
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
