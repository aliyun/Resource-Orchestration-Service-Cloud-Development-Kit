package com.aliyun.ros.cdk.vpc.datasource;

/**
 * Properties for defining a <code>RosBgpPeer</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-bgppeer
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:22.400Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.RosBgpPeerProps")
@software.amazon.jsii.Jsii.Proxy(RosBgpPeerProps.Jsii$Proxy.class)
public interface RosBgpPeerProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBgpPeerId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
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
        java.lang.Object bgpPeerId;
        java.lang.Object refreshOptions;

        /**
         * Sets the value of {@link RosBgpPeerProps#getBgpPeerId}
         * @param bgpPeerId the value to be set.
         * @return {@code this}
         */
        public Builder bgpPeerId(java.lang.String bgpPeerId) {
            this.bgpPeerId = bgpPeerId;
            return this;
        }

        /**
         * Sets the value of {@link RosBgpPeerProps#getBgpPeerId}
         * @param bgpPeerId the value to be set.
         * @return {@code this}
         */
        public Builder bgpPeerId(com.aliyun.ros.cdk.core.IResolvable bgpPeerId) {
            this.bgpPeerId = bgpPeerId;
            return this;
        }

        /**
         * Sets the value of {@link RosBgpPeerProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosBgpPeerProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
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
        private final java.lang.Object bgpPeerId;
        private final java.lang.Object refreshOptions;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.bgpPeerId = software.amazon.jsii.Kernel.get(this, "bgpPeerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.bgpPeerId = builder.bgpPeerId;
            this.refreshOptions = builder.refreshOptions;
        }

        @Override
        public final java.lang.Object getBgpPeerId() {
            return this.bgpPeerId;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getBgpPeerId() != null) {
                data.set("bgpPeerId", om.valueToTree(this.getBgpPeerId()));
            }
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.datasource.RosBgpPeerProps"));
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

            if (this.bgpPeerId != null ? !this.bgpPeerId.equals(that.bgpPeerId) : that.bgpPeerId != null) return false;
            return this.refreshOptions != null ? this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions == null;
        }

        @Override
        public final int hashCode() {
            int result = this.bgpPeerId != null ? this.bgpPeerId.hashCode() : 0;
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            return result;
        }
    }
}
