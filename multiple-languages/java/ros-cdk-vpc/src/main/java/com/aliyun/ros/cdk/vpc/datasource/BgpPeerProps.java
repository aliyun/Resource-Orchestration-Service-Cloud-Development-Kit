package com.aliyun.ros.cdk.vpc.datasource;

/**
 * Properties for defining a <code>BgpPeer</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-bgppeer
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:31.652Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.BgpPeerProps")
@software.amazon.jsii.Jsii.Proxy(BgpPeerProps.Jsii$Proxy.class)
public interface BgpPeerProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property bgpPeerId: The ID of the BGP peer.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBgpPeerId() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
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
        java.lang.Object bgpPeerId;
        java.lang.Object refreshOptions;

        /**
         * Sets the value of {@link BgpPeerProps#getBgpPeerId}
         * @param bgpPeerId Property bgpPeerId: The ID of the BGP peer.
         * @return {@code this}
         */
        public Builder bgpPeerId(java.lang.String bgpPeerId) {
            this.bgpPeerId = bgpPeerId;
            return this;
        }

        /**
         * Sets the value of {@link BgpPeerProps#getBgpPeerId}
         * @param bgpPeerId Property bgpPeerId: The ID of the BGP peer.
         * @return {@code this}
         */
        public Builder bgpPeerId(com.aliyun.ros.cdk.core.IResolvable bgpPeerId) {
            this.bgpPeerId = bgpPeerId;
            return this;
        }

        /**
         * Sets the value of {@link BgpPeerProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link BgpPeerProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.datasource.BgpPeerProps"));
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
