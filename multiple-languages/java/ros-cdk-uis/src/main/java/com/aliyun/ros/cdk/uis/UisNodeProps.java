package com.aliyun.ros.cdk.uis;

/**
 * Properties for defining a `ALIYUN::UIS::UisNode`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.30.0 (build adae23f)", date = "2021-06-21T09:47:44.152Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.uis.$Module.class, fqn = "@alicloud/ros-cdk-uis.UisNodeProps")
@software.amazon.jsii.Jsii.Proxy(UisNodeProps.Jsii$Proxy.class)
public interface UisNodeProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property ipAddrsNum: The number of IPs available at the boarding point.
     * <p>
     * The default is 2, the maximum is 10, if you need more quota, please submit the work order.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getIpAddrsNum();

    /**
     * Property uisId: The instance ID to which the boarding point belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUisId();

    /**
     * Property uisNodeAreaId: Specifies the territory ID of the node.
     * <p>
     * You can query the supported territories through the DescribeRegions interface.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUisNodeAreaId();

    /**
     * Property uisNodeBandwidth: Specify the bandwidth bandwidth value for this pick-up point, even if the Internet bandwidth.
     * <p>
     * If you do not specify a bandwidth, the default value is 20Mbps.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUisNodeBandwidth();

    /**
     * Property description: Description of the instance of the boarding point.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property name: The name of the instance of the boarding point.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link UisNodeProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link UisNodeProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<UisNodeProps> {
        private java.lang.Object ipAddrsNum;
        private java.lang.Object uisId;
        private java.lang.Object uisNodeAreaId;
        private java.lang.Object uisNodeBandwidth;
        private java.lang.Object description;
        private java.lang.Object name;

        /**
         * Sets the value of {@link UisNodeProps#getIpAddrsNum}
         * @param ipAddrsNum Property ipAddrsNum: The number of IPs available at the boarding point. This parameter is required.
         *                   The default is 2, the maximum is 10, if you need more quota, please submit the work order.
         * @return {@code this}
         */
        public Builder ipAddrsNum(java.lang.Number ipAddrsNum) {
            this.ipAddrsNum = ipAddrsNum;
            return this;
        }

        /**
         * Sets the value of {@link UisNodeProps#getIpAddrsNum}
         * @param ipAddrsNum Property ipAddrsNum: The number of IPs available at the boarding point. This parameter is required.
         *                   The default is 2, the maximum is 10, if you need more quota, please submit the work order.
         * @return {@code this}
         */
        public Builder ipAddrsNum(com.aliyun.ros.cdk.core.IResolvable ipAddrsNum) {
            this.ipAddrsNum = ipAddrsNum;
            return this;
        }

        /**
         * Sets the value of {@link UisNodeProps#getUisId}
         * @param uisId Property uisId: The instance ID to which the boarding point belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder uisId(java.lang.String uisId) {
            this.uisId = uisId;
            return this;
        }

        /**
         * Sets the value of {@link UisNodeProps#getUisId}
         * @param uisId Property uisId: The instance ID to which the boarding point belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder uisId(com.aliyun.ros.cdk.core.IResolvable uisId) {
            this.uisId = uisId;
            return this;
        }

        /**
         * Sets the value of {@link UisNodeProps#getUisNodeAreaId}
         * @param uisNodeAreaId Property uisNodeAreaId: Specifies the territory ID of the node. This parameter is required.
         *                      You can query the supported territories through the DescribeRegions interface.
         * @return {@code this}
         */
        public Builder uisNodeAreaId(java.lang.String uisNodeAreaId) {
            this.uisNodeAreaId = uisNodeAreaId;
            return this;
        }

        /**
         * Sets the value of {@link UisNodeProps#getUisNodeAreaId}
         * @param uisNodeAreaId Property uisNodeAreaId: Specifies the territory ID of the node. This parameter is required.
         *                      You can query the supported territories through the DescribeRegions interface.
         * @return {@code this}
         */
        public Builder uisNodeAreaId(com.aliyun.ros.cdk.core.IResolvable uisNodeAreaId) {
            this.uisNodeAreaId = uisNodeAreaId;
            return this;
        }

        /**
         * Sets the value of {@link UisNodeProps#getUisNodeBandwidth}
         * @param uisNodeBandwidth Property uisNodeBandwidth: Specify the bandwidth bandwidth value for this pick-up point, even if the Internet bandwidth. This parameter is required.
         *                         If you do not specify a bandwidth, the default value is 20Mbps.
         * @return {@code this}
         */
        public Builder uisNodeBandwidth(java.lang.Number uisNodeBandwidth) {
            this.uisNodeBandwidth = uisNodeBandwidth;
            return this;
        }

        /**
         * Sets the value of {@link UisNodeProps#getUisNodeBandwidth}
         * @param uisNodeBandwidth Property uisNodeBandwidth: Specify the bandwidth bandwidth value for this pick-up point, even if the Internet bandwidth. This parameter is required.
         *                         If you do not specify a bandwidth, the default value is 20Mbps.
         * @return {@code this}
         */
        public Builder uisNodeBandwidth(com.aliyun.ros.cdk.core.IResolvable uisNodeBandwidth) {
            this.uisNodeBandwidth = uisNodeBandwidth;
            return this;
        }

        /**
         * Sets the value of {@link UisNodeProps#getDescription}
         * @param description Property description: Description of the instance of the boarding point.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link UisNodeProps#getDescription}
         * @param description Property description: Description of the instance of the boarding point.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link UisNodeProps#getName}
         * @param name Property name: The name of the instance of the boarding point.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link UisNodeProps#getName}
         * @param name Property name: The name of the instance of the boarding point.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link UisNodeProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public UisNodeProps build() {
            return new Jsii$Proxy(ipAddrsNum, uisId, uisNodeAreaId, uisNodeBandwidth, description, name);
        }
    }

    /**
     * An implementation for {@link UisNodeProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements UisNodeProps {
        private final java.lang.Object ipAddrsNum;
        private final java.lang.Object uisId;
        private final java.lang.Object uisNodeAreaId;
        private final java.lang.Object uisNodeBandwidth;
        private final java.lang.Object description;
        private final java.lang.Object name;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.ipAddrsNum = software.amazon.jsii.Kernel.get(this, "ipAddrsNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.uisId = software.amazon.jsii.Kernel.get(this, "uisId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.uisNodeAreaId = software.amazon.jsii.Kernel.get(this, "uisNodeAreaId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.uisNodeBandwidth = software.amazon.jsii.Kernel.get(this, "uisNodeBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.Object ipAddrsNum, final java.lang.Object uisId, final java.lang.Object uisNodeAreaId, final java.lang.Object uisNodeBandwidth, final java.lang.Object description, final java.lang.Object name) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.ipAddrsNum = java.util.Objects.requireNonNull(ipAddrsNum, "ipAddrsNum is required");
            this.uisId = java.util.Objects.requireNonNull(uisId, "uisId is required");
            this.uisNodeAreaId = java.util.Objects.requireNonNull(uisNodeAreaId, "uisNodeAreaId is required");
            this.uisNodeBandwidth = java.util.Objects.requireNonNull(uisNodeBandwidth, "uisNodeBandwidth is required");
            this.description = description;
            this.name = name;
        }

        @Override
        public final java.lang.Object getIpAddrsNum() {
            return this.ipAddrsNum;
        }

        @Override
        public final java.lang.Object getUisId() {
            return this.uisId;
        }

        @Override
        public final java.lang.Object getUisNodeAreaId() {
            return this.uisNodeAreaId;
        }

        @Override
        public final java.lang.Object getUisNodeBandwidth() {
            return this.uisNodeBandwidth;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("ipAddrsNum", om.valueToTree(this.getIpAddrsNum()));
            data.set("uisId", om.valueToTree(this.getUisId()));
            data.set("uisNodeAreaId", om.valueToTree(this.getUisNodeAreaId()));
            data.set("uisNodeBandwidth", om.valueToTree(this.getUisNodeBandwidth()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-uis.UisNodeProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            UisNodeProps.Jsii$Proxy that = (UisNodeProps.Jsii$Proxy) o;

            if (!ipAddrsNum.equals(that.ipAddrsNum)) return false;
            if (!uisId.equals(that.uisId)) return false;
            if (!uisNodeAreaId.equals(that.uisNodeAreaId)) return false;
            if (!uisNodeBandwidth.equals(that.uisNodeBandwidth)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            return this.name != null ? this.name.equals(that.name) : that.name == null;
        }

        @Override
        public final int hashCode() {
            int result = this.ipAddrsNum.hashCode();
            result = 31 * result + (this.uisId.hashCode());
            result = 31 * result + (this.uisNodeAreaId.hashCode());
            result = 31 * result + (this.uisNodeBandwidth.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            return result;
        }
    }
}
