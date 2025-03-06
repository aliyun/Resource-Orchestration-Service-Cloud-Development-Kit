using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Represents a `BgpPeer`.</summary>
    [JsiiInterface(nativeType: typeof(IBgpPeer), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.IBgpPeer")]
    public interface IBgpPeer : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AdvertisedRouteCount: The number of advertised routes.</summary>
        [JsiiProperty(name: "attrAdvertisedRouteCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAdvertisedRouteCount
        {
            get;
        }

        /// <summary>Attribute AuthKey: The authentication key of the BGP group.</summary>
        [JsiiProperty(name: "attrAuthKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAuthKey
        {
            get;
        }

        /// <summary>Attribute BfdMultiHop: The Bidirectional Forwarding Detection (BFD) hop count.</summary>
        [JsiiProperty(name: "attrBfdMultiHop", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBfdMultiHop
        {
            get;
        }

        /// <summary>Attribute BgpGroupId: The ID of the BGP group.</summary>
        [JsiiProperty(name: "attrBgpGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBgpGroupId
        {
            get;
        }

        /// <summary>Attribute BgpPeerId: The ID of the BGP peer.</summary>
        [JsiiProperty(name: "attrBgpPeerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBgpPeerId
        {
            get;
        }

        /// <summary>Attribute BgpStatus: The status of the BGP connection.</summary>
        /// <remarks>
        /// Valid values:
        /// Idle: The BGP connection is not used.
        /// Connect: The BGP connection is used.
        /// Active: The BGP connection is available.
        /// Established: The BGP connection is established.
        /// Down: The BGP connection is unavailable.
        /// </remarks>
        [JsiiProperty(name: "attrBgpStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBgpStatus
        {
            get;
        }

        /// <summary>Attribute Description: The description of the BGP group.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute EnableBfd: Indicates whether BFD is enabled.</summary>
        /// <remarks>
        /// Valid values:
        /// false
        /// true
        /// </remarks>
        [JsiiProperty(name: "attrEnableBfd", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEnableBfd
        {
            get;
        }

        /// <summary>Attribute GmtModified: The time when the BGP peer is modified.</summary>
        [JsiiProperty(name: "attrGmtModified", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrGmtModified
        {
            get;
        }

        /// <summary>Attribute Hold: The hold time.</summary>
        [JsiiProperty(name: "attrHold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHold
        {
            get;
        }

        /// <summary>Attribute IpVersion: The version of the IP address.</summary>
        [JsiiProperty(name: "attrIpVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIpVersion
        {
            get;
        }

        /// <summary>Attribute IsFake: Indicates whether a fake autonomous system number (ASN) is used.</summary>
        /// <remarks>
        /// Valid values:
        /// false
        /// true
        /// </remarks>
        [JsiiProperty(name: "attrIsFake", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIsFake
        {
            get;
        }

        /// <summary>Attribute Keepalive: The Keepalive interval.</summary>
        [JsiiProperty(name: "attrKeepalive", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrKeepalive
        {
            get;
        }

        /// <summary>Attribute LocalAsn: The ASN of the device on the Alibaba Cloud side.</summary>
        [JsiiProperty(name: "attrLocalAsn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLocalAsn
        {
            get;
        }

        /// <summary>Attribute Name: The name of the BGP peer.</summary>
        [JsiiProperty(name: "attrName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrName
        {
            get;
        }

        /// <summary>Attribute PeerAsn: The autonomous system number (ASN)of the BGP peer.</summary>
        [JsiiProperty(name: "attrPeerAsn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPeerAsn
        {
            get;
        }

        /// <summary>Attribute PeerIpAddress: The IP address of the BGP peer.</summary>
        [JsiiProperty(name: "attrPeerIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPeerIpAddress
        {
            get;
        }

        /// <summary>Attribute ReceivedRouteCount: The number of received routes.</summary>
        [JsiiProperty(name: "attrReceivedRouteCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrReceivedRouteCount
        {
            get;
        }

        /// <summary>Attribute RouteLimit: The maximum number of routes.</summary>
        [JsiiProperty(name: "attrRouteLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRouteLimit
        {
            get;
        }

        /// <summary>Attribute RouterId: The Router ID.</summary>
        [JsiiProperty(name: "attrRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRouterId
        {
            get;
        }

        /// <summary>Attribute Status: The status of the BGP peer.</summary>
        /// <remarks>
        /// Valid values:
        /// Pending
        /// Available
        /// Modifying
        /// Deleting
        /// Deleted
        /// </remarks>
        [JsiiProperty(name: "attrStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrStatus
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.datasource.BgpPeerProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IBgpPeerProps Props
        {
            get;
        }

        /// <summary>Represents a `BgpPeer`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IBgpPeer), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.IBgpPeer")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IBgpPeer
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AdvertisedRouteCount: The number of advertised routes.</summary>
            [JsiiProperty(name: "attrAdvertisedRouteCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAdvertisedRouteCount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AuthKey: The authentication key of the BGP group.</summary>
            [JsiiProperty(name: "attrAuthKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAuthKey
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute BfdMultiHop: The Bidirectional Forwarding Detection (BFD) hop count.</summary>
            [JsiiProperty(name: "attrBfdMultiHop", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBfdMultiHop
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute BgpGroupId: The ID of the BGP group.</summary>
            [JsiiProperty(name: "attrBgpGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBgpGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute BgpPeerId: The ID of the BGP peer.</summary>
            [JsiiProperty(name: "attrBgpPeerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBgpPeerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute BgpStatus: The status of the BGP connection.</summary>
            /// <remarks>
            /// Valid values:
            /// Idle: The BGP connection is not used.
            /// Connect: The BGP connection is used.
            /// Active: The BGP connection is available.
            /// Established: The BGP connection is established.
            /// Down: The BGP connection is unavailable.
            /// </remarks>
            [JsiiProperty(name: "attrBgpStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBgpStatus
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Description: The description of the BGP group.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EnableBfd: Indicates whether BFD is enabled.</summary>
            /// <remarks>
            /// Valid values:
            /// false
            /// true
            /// </remarks>
            [JsiiProperty(name: "attrEnableBfd", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEnableBfd
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute GmtModified: The time when the BGP peer is modified.</summary>
            [JsiiProperty(name: "attrGmtModified", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrGmtModified
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Hold: The hold time.</summary>
            [JsiiProperty(name: "attrHold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHold
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IpVersion: The version of the IP address.</summary>
            [JsiiProperty(name: "attrIpVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIpVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IsFake: Indicates whether a fake autonomous system number (ASN) is used.</summary>
            /// <remarks>
            /// Valid values:
            /// false
            /// true
            /// </remarks>
            [JsiiProperty(name: "attrIsFake", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIsFake
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Keepalive: The Keepalive interval.</summary>
            [JsiiProperty(name: "attrKeepalive", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrKeepalive
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LocalAsn: The ASN of the device on the Alibaba Cloud side.</summary>
            [JsiiProperty(name: "attrLocalAsn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLocalAsn
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Name: The name of the BGP peer.</summary>
            [JsiiProperty(name: "attrName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PeerAsn: The autonomous system number (ASN)of the BGP peer.</summary>
            [JsiiProperty(name: "attrPeerAsn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPeerAsn
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PeerIpAddress: The IP address of the BGP peer.</summary>
            [JsiiProperty(name: "attrPeerIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPeerIpAddress
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ReceivedRouteCount: The number of received routes.</summary>
            [JsiiProperty(name: "attrReceivedRouteCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrReceivedRouteCount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RouteLimit: The maximum number of routes.</summary>
            [JsiiProperty(name: "attrRouteLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRouteLimit
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RouterId: The Router ID.</summary>
            [JsiiProperty(name: "attrRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRouterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Status: The status of the BGP peer.</summary>
            /// <remarks>
            /// Valid values:
            /// Pending
            /// Available
            /// Modifying
            /// Deleting
            /// Deleted
            /// </remarks>
            [JsiiProperty(name: "attrStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrStatus
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.datasource.BgpPeerProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IBgpPeerProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IBgpPeerProps>()!;
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
