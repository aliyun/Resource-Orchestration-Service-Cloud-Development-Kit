package com.aliyun.ros.cdk.vpc.datasource;

/**
 * Properties for defining a <code>RosBgpPeers</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-bgppeers
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-12-13T06:45:13.259Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.RosBgpPeersProps")
@software.amazon.jsii.Jsii.Proxy(RosBgpPeersProps.Jsii$Proxy.class)
public interface RosBgpPeersProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBgpGroupId() {
        return null;
    }

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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRouterId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosBgpPeersProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosBgpPeersProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosBgpPeersProps> {
        java.lang.Object bgpGroupId;
        java.lang.Object bgpPeerId;
        java.lang.Object refreshOptions;
        java.lang.Object routerId;

        /**
         * Sets the value of {@link RosBgpPeersProps#getBgpGroupId}
         * @param bgpGroupId the value to be set.
         * @return {@code this}
         */
        public Builder bgpGroupId(java.lang.String bgpGroupId) {
            this.bgpGroupId = bgpGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosBgpPeersProps#getBgpGroupId}
         * @param bgpGroupId the value to be set.
         * @return {@code this}
         */
        public Builder bgpGroupId(com.aliyun.ros.cdk.core.IResolvable bgpGroupId) {
            this.bgpGroupId = bgpGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosBgpPeersProps#getBgpPeerId}
         * @param bgpPeerId the value to be set.
         * @return {@code this}
         */
        public Builder bgpPeerId(java.lang.String bgpPeerId) {
            this.bgpPeerId = bgpPeerId;
            return this;
        }

        /**
         * Sets the value of {@link RosBgpPeersProps#getBgpPeerId}
         * @param bgpPeerId the value to be set.
         * @return {@code this}
         */
        public Builder bgpPeerId(com.aliyun.ros.cdk.core.IResolvable bgpPeerId) {
            this.bgpPeerId = bgpPeerId;
            return this;
        }

        /**
         * Sets the value of {@link RosBgpPeersProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosBgpPeersProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosBgpPeersProps#getRouterId}
         * @param routerId the value to be set.
         * @return {@code this}
         */
        public Builder routerId(java.lang.String routerId) {
            this.routerId = routerId;
            return this;
        }

        /**
         * Sets the value of {@link RosBgpPeersProps#getRouterId}
         * @param routerId the value to be set.
         * @return {@code this}
         */
        public Builder routerId(com.aliyun.ros.cdk.core.IResolvable routerId) {
            this.routerId = routerId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosBgpPeersProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosBgpPeersProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosBgpPeersProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosBgpPeersProps {
        private final java.lang.Object bgpGroupId;
        private final java.lang.Object bgpPeerId;
        private final java.lang.Object refreshOptions;
        private final java.lang.Object routerId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.bgpGroupId = software.amazon.jsii.Kernel.get(this, "bgpGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.bgpPeerId = software.amazon.jsii.Kernel.get(this, "bgpPeerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.routerId = software.amazon.jsii.Kernel.get(this, "routerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.bgpGroupId = builder.bgpGroupId;
            this.bgpPeerId = builder.bgpPeerId;
            this.refreshOptions = builder.refreshOptions;
            this.routerId = builder.routerId;
        }

        @Override
        public final java.lang.Object getBgpGroupId() {
            return this.bgpGroupId;
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
        public final java.lang.Object getRouterId() {
            return this.routerId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getBgpGroupId() != null) {
                data.set("bgpGroupId", om.valueToTree(this.getBgpGroupId()));
            }
            if (this.getBgpPeerId() != null) {
                data.set("bgpPeerId", om.valueToTree(this.getBgpPeerId()));
            }
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }
            if (this.getRouterId() != null) {
                data.set("routerId", om.valueToTree(this.getRouterId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.datasource.RosBgpPeersProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosBgpPeersProps.Jsii$Proxy that = (RosBgpPeersProps.Jsii$Proxy) o;

            if (this.bgpGroupId != null ? !this.bgpGroupId.equals(that.bgpGroupId) : that.bgpGroupId != null) return false;
            if (this.bgpPeerId != null ? !this.bgpPeerId.equals(that.bgpPeerId) : that.bgpPeerId != null) return false;
            if (this.refreshOptions != null ? !this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions != null) return false;
            return this.routerId != null ? this.routerId.equals(that.routerId) : that.routerId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.bgpGroupId != null ? this.bgpGroupId.hashCode() : 0;
            result = 31 * result + (this.bgpPeerId != null ? this.bgpPeerId.hashCode() : 0);
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            result = 31 * result + (this.routerId != null ? this.routerId.hashCode() : 0);
            return result;
        }
    }
}
