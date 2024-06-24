package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>RosBgpPeer</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-bgppeer
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-24T05:57:09.656Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosBgpPeerProps")
@software.amazon.jsii.Jsii.Proxy(RosBgpPeerProps.Jsii$Proxy.class)
public interface RosBgpPeerProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBgpGroupId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableBfd() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeerIpAddress() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosBgpPeerProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosBgpPeerProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosBgpPeerProps> {
        java.lang.Object bgpGroupId;
        java.lang.Object enableBfd;
        java.lang.Object peerIpAddress;

        /**
         * Sets the value of {@link RosBgpPeerProps#getBgpGroupId}
         * @param bgpGroupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bgpGroupId(java.lang.String bgpGroupId) {
            this.bgpGroupId = bgpGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosBgpPeerProps#getBgpGroupId}
         * @param bgpGroupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bgpGroupId(com.aliyun.ros.cdk.core.IResolvable bgpGroupId) {
            this.bgpGroupId = bgpGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosBgpPeerProps#getEnableBfd}
         * @param enableBfd the value to be set.
         * @return {@code this}
         */
        public Builder enableBfd(java.lang.Boolean enableBfd) {
            this.enableBfd = enableBfd;
            return this;
        }

        /**
         * Sets the value of {@link RosBgpPeerProps#getEnableBfd}
         * @param enableBfd the value to be set.
         * @return {@code this}
         */
        public Builder enableBfd(com.aliyun.ros.cdk.core.IResolvable enableBfd) {
            this.enableBfd = enableBfd;
            return this;
        }

        /**
         * Sets the value of {@link RosBgpPeerProps#getPeerIpAddress}
         * @param peerIpAddress the value to be set.
         * @return {@code this}
         */
        public Builder peerIpAddress(java.lang.String peerIpAddress) {
            this.peerIpAddress = peerIpAddress;
            return this;
        }

        /**
         * Sets the value of {@link RosBgpPeerProps#getPeerIpAddress}
         * @param peerIpAddress the value to be set.
         * @return {@code this}
         */
        public Builder peerIpAddress(com.aliyun.ros.cdk.core.IResolvable peerIpAddress) {
            this.peerIpAddress = peerIpAddress;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosBgpPeerProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosBgpPeerProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosBgpPeerProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosBgpPeerProps {
        private final java.lang.Object bgpGroupId;
        private final java.lang.Object enableBfd;
        private final java.lang.Object peerIpAddress;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.bgpGroupId = software.amazon.jsii.Kernel.get(this, "bgpGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableBfd = software.amazon.jsii.Kernel.get(this, "enableBfd", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.peerIpAddress = software.amazon.jsii.Kernel.get(this, "peerIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.bgpGroupId = java.util.Objects.requireNonNull(builder.bgpGroupId, "bgpGroupId is required");
            this.enableBfd = builder.enableBfd;
            this.peerIpAddress = builder.peerIpAddress;
        }

        @Override
        public final java.lang.Object getBgpGroupId() {
            return this.bgpGroupId;
        }

        @Override
        public final java.lang.Object getEnableBfd() {
            return this.enableBfd;
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
            if (this.getEnableBfd() != null) {
                data.set("enableBfd", om.valueToTree(this.getEnableBfd()));
            }
            if (this.getPeerIpAddress() != null) {
                data.set("peerIpAddress", om.valueToTree(this.getPeerIpAddress()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosBgpPeerProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosBgpPeerProps.Jsii$Proxy that = (RosBgpPeerProps.Jsii$Proxy) o;

            if (!bgpGroupId.equals(that.bgpGroupId)) return false;
            if (this.enableBfd != null ? !this.enableBfd.equals(that.enableBfd) : that.enableBfd != null) return false;
            return this.peerIpAddress != null ? this.peerIpAddress.equals(that.peerIpAddress) : that.peerIpAddress == null;
        }

        @Override
        public final int hashCode() {
            int result = this.bgpGroupId.hashCode();
            result = 31 * result + (this.enableBfd != null ? this.enableBfd.hashCode() : 0);
            result = 31 * result + (this.peerIpAddress != null ? this.peerIpAddress.hashCode() : 0);
            return result;
        }
    }
}
