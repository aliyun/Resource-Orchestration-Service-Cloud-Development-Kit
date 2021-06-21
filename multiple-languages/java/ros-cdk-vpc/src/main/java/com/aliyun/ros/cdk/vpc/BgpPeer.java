package com.aliyun.ros.cdk.vpc;

/**
 * A ROS resource type:  `ALIYUN::VPC::BgpPeer`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.30.0 (build adae23f)", date = "2021-06-21T09:47:44.157Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.BgpPeer")
public class BgpPeer extends com.aliyun.ros.cdk.core.Resource {

    protected BgpPeer(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected BgpPeer(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::VPC::BgpPeer`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public BgpPeer(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.BgpPeerProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::VPC::BgpPeer`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public BgpPeer(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.BgpPeerProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute BgpPeerId: The ID of the BGP peer.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBgpPeerId() {
        return software.amazon.jsii.Kernel.get(this, "attrBgpPeerId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.BgpPeer}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.BgpPeer> {
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
        private final com.aliyun.ros.cdk.vpc.BgpPeerProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.BgpPeerProps.Builder();
        }

        /**
         * Property bgpGroupId: The ID of the BGP group.
         * <p>
         * @return {@code this}
         * @param bgpGroupId Property bgpGroupId: The ID of the BGP group. This parameter is required.
         */
        public Builder bgpGroupId(final java.lang.String bgpGroupId) {
            this.props.bgpGroupId(bgpGroupId);
            return this;
        }
        /**
         * Property bgpGroupId: The ID of the BGP group.
         * <p>
         * @return {@code this}
         * @param bgpGroupId Property bgpGroupId: The ID of the BGP group. This parameter is required.
         */
        public Builder bgpGroupId(final com.aliyun.ros.cdk.core.IResolvable bgpGroupId) {
            this.props.bgpGroupId(bgpGroupId);
            return this;
        }

        /**
         * Property enableBfd: Specifies whether to enable the Bidirectional Forwarding Detection (BFD) feature.
         * <p>
         * Valid values:
         * true: enables BFD.
         * false: disables BFD.
         * <p>
         * @return {@code this}
         * @param enableBfd Property enableBfd: Specifies whether to enable the Bidirectional Forwarding Detection (BFD) feature. This parameter is required.
         */
        public Builder enableBfd(final java.lang.Boolean enableBfd) {
            this.props.enableBfd(enableBfd);
            return this;
        }
        /**
         * Property enableBfd: Specifies whether to enable the Bidirectional Forwarding Detection (BFD) feature.
         * <p>
         * Valid values:
         * true: enables BFD.
         * false: disables BFD.
         * <p>
         * @return {@code this}
         * @param enableBfd Property enableBfd: Specifies whether to enable the Bidirectional Forwarding Detection (BFD) feature. This parameter is required.
         */
        public Builder enableBfd(final com.aliyun.ros.cdk.core.IResolvable enableBfd) {
            this.props.enableBfd(enableBfd);
            return this;
        }

        /**
         * Property peerIpAddress: The IP address of the BGP peer.
         * <p>
         * @return {@code this}
         * @param peerIpAddress Property peerIpAddress: The IP address of the BGP peer. This parameter is required.
         */
        public Builder peerIpAddress(final java.lang.String peerIpAddress) {
            this.props.peerIpAddress(peerIpAddress);
            return this;
        }
        /**
         * Property peerIpAddress: The IP address of the BGP peer.
         * <p>
         * @return {@code this}
         * @param peerIpAddress Property peerIpAddress: The IP address of the BGP peer. This parameter is required.
         */
        public Builder peerIpAddress(final com.aliyun.ros.cdk.core.IResolvable peerIpAddress) {
            this.props.peerIpAddress(peerIpAddress);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.vpc.BgpPeer}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.BgpPeer build() {
            return new com.aliyun.ros.cdk.vpc.BgpPeer(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
