package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>BgpPeer</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-bgppeer
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:30.781Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.BgpPeerProps")
@software.amazon.jsii.Jsii.Proxy(BgpPeerProps.Jsii$Proxy.class)
public interface BgpPeerProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property bgpGroupId: The ID of the BGP group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBgpGroupId();

    /**
     * Property bfdMultiHop: The BFD hop count.
     * <p>
     * Valid values: <strong>1</strong> to <strong>255</strong>.
     * When enabling BFD, this parameter must be configured.
     * It specifies the maximum number of hops that a packet can traverse from source to destination. You can set different hop counts based on actual physical link conditions.
     * When using BFD in a multi-cloud environment or direct fiber connection without intermediate bridging devices, change the default BFD hop count from <strong>255</strong> to <strong>1</strong>.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBfdMultiHop() {
        return null;
    }

    /**
     * Property enableBfd: Specifies whether to enable the Bidirectional Forwarding Detection (BFD) feature.
     * <p>
     * Valid values:
     * true: enables BFD.
     * false: disables BFD.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableBfd() {
        return null;
    }

    /**
     * Property ipVersion: The IP version.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li><strong>IPv4</strong> (default): IPv4 version.</li>
     * <li><strong>IPv6</strong>: IPv6 version. IPv6 is supported only when the VBR associated with the BGP group has IPv6 enabled.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpVersion() {
        return null;
    }

    /**
     * Property peerIpAddress: The IP address of the BGP peer.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeerIpAddress() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link BgpPeerProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link BgpPeerProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<BgpPeerProps> {
        java.lang.Object bgpGroupId;
        java.lang.Object bfdMultiHop;
        java.lang.Object enableBfd;
        java.lang.Object ipVersion;
        java.lang.Object peerIpAddress;

        /**
         * Sets the value of {@link BgpPeerProps#getBgpGroupId}
         * @param bgpGroupId Property bgpGroupId: The ID of the BGP group. This parameter is required.
         * @return {@code this}
         */
        public Builder bgpGroupId(java.lang.String bgpGroupId) {
            this.bgpGroupId = bgpGroupId;
            return this;
        }

        /**
         * Sets the value of {@link BgpPeerProps#getBgpGroupId}
         * @param bgpGroupId Property bgpGroupId: The ID of the BGP group. This parameter is required.
         * @return {@code this}
         */
        public Builder bgpGroupId(com.aliyun.ros.cdk.core.IResolvable bgpGroupId) {
            this.bgpGroupId = bgpGroupId;
            return this;
        }

        /**
         * Sets the value of {@link BgpPeerProps#getBfdMultiHop}
         * @param bfdMultiHop Property bfdMultiHop: The BFD hop count.
         *                    Valid values: <strong>1</strong> to <strong>255</strong>.
         *                    When enabling BFD, this parameter must be configured.
         *                    It specifies the maximum number of hops that a packet can traverse from source to destination. You can set different hop counts based on actual physical link conditions.
         *                    When using BFD in a multi-cloud environment or direct fiber connection without intermediate bridging devices, change the default BFD hop count from <strong>255</strong> to <strong>1</strong>.
         * @return {@code this}
         */
        public Builder bfdMultiHop(java.lang.Number bfdMultiHop) {
            this.bfdMultiHop = bfdMultiHop;
            return this;
        }

        /**
         * Sets the value of {@link BgpPeerProps#getBfdMultiHop}
         * @param bfdMultiHop Property bfdMultiHop: The BFD hop count.
         *                    Valid values: <strong>1</strong> to <strong>255</strong>.
         *                    When enabling BFD, this parameter must be configured.
         *                    It specifies the maximum number of hops that a packet can traverse from source to destination. You can set different hop counts based on actual physical link conditions.
         *                    When using BFD in a multi-cloud environment or direct fiber connection without intermediate bridging devices, change the default BFD hop count from <strong>255</strong> to <strong>1</strong>.
         * @return {@code this}
         */
        public Builder bfdMultiHop(com.aliyun.ros.cdk.core.IResolvable bfdMultiHop) {
            this.bfdMultiHop = bfdMultiHop;
            return this;
        }

        /**
         * Sets the value of {@link BgpPeerProps#getEnableBfd}
         * @param enableBfd Property enableBfd: Specifies whether to enable the Bidirectional Forwarding Detection (BFD) feature.
         *                  Valid values:
         *                  true: enables BFD.
         *                  false: disables BFD.
         * @return {@code this}
         */
        public Builder enableBfd(java.lang.Boolean enableBfd) {
            this.enableBfd = enableBfd;
            return this;
        }

        /**
         * Sets the value of {@link BgpPeerProps#getEnableBfd}
         * @param enableBfd Property enableBfd: Specifies whether to enable the Bidirectional Forwarding Detection (BFD) feature.
         *                  Valid values:
         *                  true: enables BFD.
         *                  false: disables BFD.
         * @return {@code this}
         */
        public Builder enableBfd(com.aliyun.ros.cdk.core.IResolvable enableBfd) {
            this.enableBfd = enableBfd;
            return this;
        }

        /**
         * Sets the value of {@link BgpPeerProps#getIpVersion}
         * @param ipVersion Property ipVersion: The IP version.
         *                  Valid values:
         *                  <p>
         *                  <ul>
         *                  <li><strong>IPv4</strong> (default): IPv4 version.</li>
         *                  <li><strong>IPv6</strong>: IPv6 version. IPv6 is supported only when the VBR associated with the BGP group has IPv6 enabled.</li>
         *                  </ul>
         * @return {@code this}
         */
        public Builder ipVersion(java.lang.String ipVersion) {
            this.ipVersion = ipVersion;
            return this;
        }

        /**
         * Sets the value of {@link BgpPeerProps#getIpVersion}
         * @param ipVersion Property ipVersion: The IP version.
         *                  Valid values:
         *                  <p>
         *                  <ul>
         *                  <li><strong>IPv4</strong> (default): IPv4 version.</li>
         *                  <li><strong>IPv6</strong>: IPv6 version. IPv6 is supported only when the VBR associated with the BGP group has IPv6 enabled.</li>
         *                  </ul>
         * @return {@code this}
         */
        public Builder ipVersion(com.aliyun.ros.cdk.core.IResolvable ipVersion) {
            this.ipVersion = ipVersion;
            return this;
        }

        /**
         * Sets the value of {@link BgpPeerProps#getPeerIpAddress}
         * @param peerIpAddress Property peerIpAddress: The IP address of the BGP peer.
         * @return {@code this}
         */
        public Builder peerIpAddress(java.lang.String peerIpAddress) {
            this.peerIpAddress = peerIpAddress;
            return this;
        }

        /**
         * Sets the value of {@link BgpPeerProps#getPeerIpAddress}
         * @param peerIpAddress Property peerIpAddress: The IP address of the BGP peer.
         * @return {@code this}
         */
        public Builder peerIpAddress(com.aliyun.ros.cdk.core.IResolvable peerIpAddress) {
            this.peerIpAddress = peerIpAddress;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link BgpPeerProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public BgpPeerProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link BgpPeerProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements BgpPeerProps {
        private final java.lang.Object bgpGroupId;
        private final java.lang.Object bfdMultiHop;
        private final java.lang.Object enableBfd;
        private final java.lang.Object ipVersion;
        private final java.lang.Object peerIpAddress;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.bgpGroupId = software.amazon.jsii.Kernel.get(this, "bgpGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.bfdMultiHop = software.amazon.jsii.Kernel.get(this, "bfdMultiHop", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableBfd = software.amazon.jsii.Kernel.get(this, "enableBfd", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipVersion = software.amazon.jsii.Kernel.get(this, "ipVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.peerIpAddress = software.amazon.jsii.Kernel.get(this, "peerIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.bgpGroupId = java.util.Objects.requireNonNull(builder.bgpGroupId, "bgpGroupId is required");
            this.bfdMultiHop = builder.bfdMultiHop;
            this.enableBfd = builder.enableBfd;
            this.ipVersion = builder.ipVersion;
            this.peerIpAddress = builder.peerIpAddress;
        }

        @Override
        public final java.lang.Object getBgpGroupId() {
            return this.bgpGroupId;
        }

        @Override
        public final java.lang.Object getBfdMultiHop() {
            return this.bfdMultiHop;
        }

        @Override
        public final java.lang.Object getEnableBfd() {
            return this.enableBfd;
        }

        @Override
        public final java.lang.Object getIpVersion() {
            return this.ipVersion;
        }

        @Override
        public final java.lang.Object getPeerIpAddress() {
            return this.peerIpAddress;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("bgpGroupId", om.valueToTree(this.getBgpGroupId()));
            if (this.getBfdMultiHop() != null) {
                data.set("bfdMultiHop", om.valueToTree(this.getBfdMultiHop()));
            }
            if (this.getEnableBfd() != null) {
                data.set("enableBfd", om.valueToTree(this.getEnableBfd()));
            }
            if (this.getIpVersion() != null) {
                data.set("ipVersion", om.valueToTree(this.getIpVersion()));
            }
            if (this.getPeerIpAddress() != null) {
                data.set("peerIpAddress", om.valueToTree(this.getPeerIpAddress()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.BgpPeerProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            BgpPeerProps.Jsii$Proxy that = (BgpPeerProps.Jsii$Proxy) o;

            if (!bgpGroupId.equals(that.bgpGroupId)) return false;
            if (this.bfdMultiHop != null ? !this.bfdMultiHop.equals(that.bfdMultiHop) : that.bfdMultiHop != null) return false;
            if (this.enableBfd != null ? !this.enableBfd.equals(that.enableBfd) : that.enableBfd != null) return false;
            if (this.ipVersion != null ? !this.ipVersion.equals(that.ipVersion) : that.ipVersion != null) return false;
            return this.peerIpAddress != null ? this.peerIpAddress.equals(that.peerIpAddress) : that.peerIpAddress == null;
        }

        @Override
        public final int hashCode() {
            int result = this.bgpGroupId.hashCode();
            result = 31 * result + (this.bfdMultiHop != null ? this.bfdMultiHop.hashCode() : 0);
            result = 31 * result + (this.enableBfd != null ? this.enableBfd.hashCode() : 0);
            result = 31 * result + (this.ipVersion != null ? this.ipVersion.hashCode() : 0);
            result = 31 * result + (this.peerIpAddress != null ? this.peerIpAddress.hashCode() : 0);
            return result;
        }
    }
}
