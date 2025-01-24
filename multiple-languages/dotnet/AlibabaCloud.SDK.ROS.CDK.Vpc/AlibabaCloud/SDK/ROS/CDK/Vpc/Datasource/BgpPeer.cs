using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::BgpPeer`, which is used to query the information about a Border Gateway Protocol (BGP) peer in a region.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBgpPeer`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-bgppeer
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.BgpPeer), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.BgpPeer", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"optional\":true,\"type\":{\"fqn\":\"@alicloud/ros-cdk-vpc.datasource.BgpPeerProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class BgpPeer : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IBgpPeer
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public BgpPeer(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IBgpPeerProps? props = null, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IBgpPeerProps? props = null, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected BgpPeer(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected BgpPeer(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute AdvertisedRouteCount: The number of advertised routes.</summary>
        [JsiiProperty(name: "attrAdvertisedRouteCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAdvertisedRouteCount
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute AuthKey: The authentication key of the BGP group.</summary>
        [JsiiProperty(name: "attrAuthKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAuthKey
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute BfdMultiHop: The Bidirectional Forwarding Detection (BFD) hop count.</summary>
        [JsiiProperty(name: "attrBfdMultiHop", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrBfdMultiHop
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute BgpGroupId: The ID of the BGP group.</summary>
        [JsiiProperty(name: "attrBgpGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrBgpGroupId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute BgpPeerId: The ID of the BGP peer.</summary>
        [JsiiProperty(name: "attrBgpPeerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrBgpPeerId
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
        public virtual object AttrBgpStatus
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Description: The description of the BGP group.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDescription
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
        public virtual object AttrEnableBfd
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute GmtModified: The time when the BGP peer is modified.</summary>
        [JsiiProperty(name: "attrGmtModified", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrGmtModified
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Hold: The hold time.</summary>
        [JsiiProperty(name: "attrHold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHold
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute IpVersion: The version of the IP address.</summary>
        [JsiiProperty(name: "attrIpVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrIpVersion
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
        public virtual object AttrIsFake
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Keepalive: The Keepalive interval.</summary>
        [JsiiProperty(name: "attrKeepalive", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrKeepalive
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute LocalAsn: The ASN of the device on the Alibaba Cloud side.</summary>
        [JsiiProperty(name: "attrLocalAsn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrLocalAsn
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Name: The name of the BGP peer.</summary>
        [JsiiProperty(name: "attrName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PeerAsn: The autonomous system number (ASN)of the BGP peer.</summary>
        [JsiiProperty(name: "attrPeerAsn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPeerAsn
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PeerIpAddress: The IP address of the BGP peer.</summary>
        [JsiiProperty(name: "attrPeerIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPeerIpAddress
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ReceivedRouteCount: The number of received routes.</summary>
        [JsiiProperty(name: "attrReceivedRouteCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrReceivedRouteCount
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute RouteLimit: The maximum number of routes.</summary>
        [JsiiProperty(name: "attrRouteLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrRouteLimit
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute RouterId: The Router ID.</summary>
        [JsiiProperty(name: "attrRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrRouterId
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
        public virtual object AttrStatus
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.datasource.BgpPeerProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IBgpPeerProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IBgpPeerProps>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        protected virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "id", typeJson: "{\"primitive\":\"string\"}")]
        protected virtual string Id
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "scope", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}")]
        protected virtual AlibabaCloud.SDK.ROS.CDK.Core.Construct Scope
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Construct>()!;
            set => SetInstanceProperty(value);
        }
    }
}
