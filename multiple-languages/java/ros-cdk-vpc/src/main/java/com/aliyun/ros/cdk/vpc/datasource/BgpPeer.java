package com.aliyun.ros.cdk.vpc.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::VPC::BgpPeer</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:51.507Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.BgpPeer")
public class BgpPeer extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.vpc.datasource.IBgpPeer {

    protected BgpPeer(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected BgpPeer(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public BgpPeer(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.vpc.datasource.BgpPeerProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public BgpPeer(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.vpc.datasource.BgpPeerProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public BgpPeer(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute AdvertisedRouteCount: The number of advertised routes.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAdvertisedRouteCount() {
        return software.amazon.jsii.Kernel.get(this, "attrAdvertisedRouteCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute AuthKey: The authentication key of the BGP group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAuthKey() {
        return software.amazon.jsii.Kernel.get(this, "attrAuthKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute BfdMultiHop: The Bidirectional Forwarding Detection (BFD) hop count.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBfdMultiHop() {
        return software.amazon.jsii.Kernel.get(this, "attrBfdMultiHop", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute BgpGroupId: The ID of the BGP group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBgpGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrBgpGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute BgpPeerId: The ID of the BGP peer.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBgpPeerId() {
        return software.amazon.jsii.Kernel.get(this, "attrBgpPeerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute BgpStatus: The status of the BGP connection.
     * <p>
     * Valid values:
     * Idle: The BGP connection is not used.
     * Connect: The BGP connection is used.
     * Active: The BGP connection is available.
     * Established: The BGP connection is established.
     * Down: The BGP connection is unavailable.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBgpStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrBgpStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Description: The description of the BGP group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EnableBfd: Indicates whether BFD is enabled.
     * <p>
     * Valid values:
     * false
     * true
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableBfd() {
        return software.amazon.jsii.Kernel.get(this, "attrEnableBfd", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute GmtModified: The time when the BGP peer is modified.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrGmtModified() {
        return software.amazon.jsii.Kernel.get(this, "attrGmtModified", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Hold: The hold time.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHold() {
        return software.amazon.jsii.Kernel.get(this, "attrHold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute IpVersion: The version of the IP address.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrIpVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute IsFake: Indicates whether a fake autonomous system number (ASN) is used.
     * <p>
     * Valid values:
     * false
     * true
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsFake() {
        return software.amazon.jsii.Kernel.get(this, "attrIsFake", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Keepalive: The Keepalive interval.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrKeepalive() {
        return software.amazon.jsii.Kernel.get(this, "attrKeepalive", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute LocalAsn: The ASN of the device on the Alibaba Cloud side.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLocalAsn() {
        return software.amazon.jsii.Kernel.get(this, "attrLocalAsn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Name: The name of the BGP peer.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrName() {
        return software.amazon.jsii.Kernel.get(this, "attrName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PeerAsn: The autonomous system number (ASN)of the BGP peer.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPeerAsn() {
        return software.amazon.jsii.Kernel.get(this, "attrPeerAsn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PeerIpAddress: The IP address of the BGP peer.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPeerIpAddress() {
        return software.amazon.jsii.Kernel.get(this, "attrPeerIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ReceivedRouteCount: The number of received routes.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrReceivedRouteCount() {
        return software.amazon.jsii.Kernel.get(this, "attrReceivedRouteCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RouteLimit: The maximum number of routes.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRouteLimit() {
        return software.amazon.jsii.Kernel.get(this, "attrRouteLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RouterId: The Router ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRouterId() {
        return software.amazon.jsii.Kernel.get(this, "attrRouterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Status: The status of the BGP peer.
     * <p>
     * Valid values:
     * Pending
     * Available
     * Modifying
     * Deleting
     * Deleted
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.BgpPeerProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.datasource.BgpPeerProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.datasource.BgpPeer}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.datasource.BgpPeer> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private com.aliyun.ros.cdk.vpc.datasource.BgpPeerProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property bgpPeerId: The ID of the BGP peer.
         * <p>
         * @return {@code this}
         * @param bgpPeerId Property bgpPeerId: The ID of the BGP peer. This parameter is required.
         */
        public Builder bgpPeerId(final java.lang.String bgpPeerId) {
            this.props().bgpPeerId(bgpPeerId);
            return this;
        }
        /**
         * Property bgpPeerId: The ID of the BGP peer.
         * <p>
         * @return {@code this}
         * @param bgpPeerId Property bgpPeerId: The ID of the BGP peer. This parameter is required.
         */
        public Builder bgpPeerId(final com.aliyun.ros.cdk.core.IResolvable bgpPeerId) {
            this.props().bgpPeerId(bgpPeerId);
            return this;
        }

        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final java.lang.String refreshOptions) {
            this.props().refreshOptions(refreshOptions);
            return this;
        }
        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.props().refreshOptions(refreshOptions);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.datasource.BgpPeer}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.datasource.BgpPeer build() {
            return new com.aliyun.ros.cdk.vpc.datasource.BgpPeer(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.vpc.datasource.BgpPeerProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.vpc.datasource.BgpPeerProps.Builder();
            }
            return this.props;
        }
    }
}
