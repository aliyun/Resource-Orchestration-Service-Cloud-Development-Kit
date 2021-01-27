package com.aliyun.ros.cdk.uis;

/**
 * Properties for defining a `ALIYUN::UIS::UisNode`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.628Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.uis.$Module.class, fqn = "@alicloud/ros-cdk-uis.RosUisNodeProps")
@software.amazon.jsii.Jsii.Proxy(RosUisNodeProps.Jsii$Proxy.class)
public interface RosUisNodeProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Number getIpAddrsNum();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getUisId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getUisNodeAreaId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Number getUisNodeBandwidth();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosUisNodeProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosUisNodeProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosUisNodeProps> {
        private java.lang.Number ipAddrsNum;
        private java.lang.String uisId;
        private java.lang.String uisNodeAreaId;
        private java.lang.Number uisNodeBandwidth;
        private java.lang.String description;
        private java.lang.String name;

        /**
         * Sets the value of {@link RosUisNodeProps#getIpAddrsNum}
         * @param ipAddrsNum the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ipAddrsNum(java.lang.Number ipAddrsNum) {
            this.ipAddrsNum = ipAddrsNum;
            return this;
        }

        /**
         * Sets the value of {@link RosUisNodeProps#getUisId}
         * @param uisId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder uisId(java.lang.String uisId) {
            this.uisId = uisId;
            return this;
        }

        /**
         * Sets the value of {@link RosUisNodeProps#getUisNodeAreaId}
         * @param uisNodeAreaId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder uisNodeAreaId(java.lang.String uisNodeAreaId) {
            this.uisNodeAreaId = uisNodeAreaId;
            return this;
        }

        /**
         * Sets the value of {@link RosUisNodeProps#getUisNodeBandwidth}
         * @param uisNodeBandwidth the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder uisNodeBandwidth(java.lang.Number uisNodeBandwidth) {
            this.uisNodeBandwidth = uisNodeBandwidth;
            return this;
        }

        /**
         * Sets the value of {@link RosUisNodeProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosUisNodeProps#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosUisNodeProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosUisNodeProps build() {
            return new Jsii$Proxy(ipAddrsNum, uisId, uisNodeAreaId, uisNodeBandwidth, description, name);
        }
    }

    /**
     * An implementation for {@link RosUisNodeProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosUisNodeProps {
        private final java.lang.Number ipAddrsNum;
        private final java.lang.String uisId;
        private final java.lang.String uisNodeAreaId;
        private final java.lang.Number uisNodeBandwidth;
        private final java.lang.String description;
        private final java.lang.String name;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.ipAddrsNum = software.amazon.jsii.Kernel.get(this, "ipAddrsNum", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.uisId = software.amazon.jsii.Kernel.get(this, "uisId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.uisNodeAreaId = software.amazon.jsii.Kernel.get(this, "uisNodeAreaId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.uisNodeBandwidth = software.amazon.jsii.Kernel.get(this, "uisNodeBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.Number ipAddrsNum, final java.lang.String uisId, final java.lang.String uisNodeAreaId, final java.lang.Number uisNodeBandwidth, final java.lang.String description, final java.lang.String name) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.ipAddrsNum = java.util.Objects.requireNonNull(ipAddrsNum, "ipAddrsNum is required");
            this.uisId = java.util.Objects.requireNonNull(uisId, "uisId is required");
            this.uisNodeAreaId = java.util.Objects.requireNonNull(uisNodeAreaId, "uisNodeAreaId is required");
            this.uisNodeBandwidth = java.util.Objects.requireNonNull(uisNodeBandwidth, "uisNodeBandwidth is required");
            this.description = description;
            this.name = name;
        }

        @Override
        public final java.lang.Number getIpAddrsNum() {
            return this.ipAddrsNum;
        }

        @Override
        public final java.lang.String getUisId() {
            return this.uisId;
        }

        @Override
        public final java.lang.String getUisNodeAreaId() {
            return this.uisNodeAreaId;
        }

        @Override
        public final java.lang.Number getUisNodeBandwidth() {
            return this.uisNodeBandwidth;
        }

        @Override
        public final java.lang.String getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.String getName() {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-uis.RosUisNodeProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosUisNodeProps.Jsii$Proxy that = (RosUisNodeProps.Jsii$Proxy) o;

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
