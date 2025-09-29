package com.aliyun.ros.cdk.fc;

/**
 * Properties for defining a <code>RosLayer</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-layer
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:31.253Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.RosLayerProps")
@software.amazon.jsii.Jsii.Proxy(RosLayerProps.Jsii$Proxy.class)
public interface RosLayerProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCode();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCompatibleRuntime();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLayerName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosLayerProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosLayerProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosLayerProps> {
        java.lang.Object code;
        java.lang.Object compatibleRuntime;
        java.lang.Object layerName;
        java.lang.Object description;

        /**
         * Sets the value of {@link RosLayerProps#getCode}
         * @param code the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder code(com.aliyun.ros.cdk.core.IResolvable code) {
            this.code = code;
            return this;
        }

        /**
         * Sets the value of {@link RosLayerProps#getCode}
         * @param code the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder code(com.aliyun.ros.cdk.fc.RosLayer.CodeProperty code) {
            this.code = code;
            return this;
        }

        /**
         * Sets the value of {@link RosLayerProps#getCompatibleRuntime}
         * @param compatibleRuntime the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder compatibleRuntime(com.aliyun.ros.cdk.core.IResolvable compatibleRuntime) {
            this.compatibleRuntime = compatibleRuntime;
            return this;
        }

        /**
         * Sets the value of {@link RosLayerProps#getCompatibleRuntime}
         * @param compatibleRuntime the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder compatibleRuntime(java.util.List<? extends java.lang.Object> compatibleRuntime) {
            this.compatibleRuntime = compatibleRuntime;
            return this;
        }

        /**
         * Sets the value of {@link RosLayerProps#getLayerName}
         * @param layerName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder layerName(java.lang.String layerName) {
            this.layerName = layerName;
            return this;
        }

        /**
         * Sets the value of {@link RosLayerProps#getLayerName}
         * @param layerName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder layerName(com.aliyun.ros.cdk.core.IResolvable layerName) {
            this.layerName = layerName;
            return this;
        }

        /**
         * Sets the value of {@link RosLayerProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosLayerProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosLayerProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosLayerProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosLayerProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosLayerProps {
        private final java.lang.Object code;
        private final java.lang.Object compatibleRuntime;
        private final java.lang.Object layerName;
        private final java.lang.Object description;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.code = software.amazon.jsii.Kernel.get(this, "code", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.compatibleRuntime = software.amazon.jsii.Kernel.get(this, "compatibleRuntime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.layerName = software.amazon.jsii.Kernel.get(this, "layerName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.code = java.util.Objects.requireNonNull(builder.code, "code is required");
            this.compatibleRuntime = java.util.Objects.requireNonNull(builder.compatibleRuntime, "compatibleRuntime is required");
            this.layerName = java.util.Objects.requireNonNull(builder.layerName, "layerName is required");
            this.description = builder.description;
        }

        @Override
        public final java.lang.Object getCode() {
            return this.code;
        }

        @Override
        public final java.lang.Object getCompatibleRuntime() {
            return this.compatibleRuntime;
        }

        @Override
        public final java.lang.Object getLayerName() {
            return this.layerName;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("code", om.valueToTree(this.getCode()));
            data.set("compatibleRuntime", om.valueToTree(this.getCompatibleRuntime()));
            data.set("layerName", om.valueToTree(this.getLayerName()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc.RosLayerProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosLayerProps.Jsii$Proxy that = (RosLayerProps.Jsii$Proxy) o;

            if (!code.equals(that.code)) return false;
            if (!compatibleRuntime.equals(that.compatibleRuntime)) return false;
            if (!layerName.equals(that.layerName)) return false;
            return this.description != null ? this.description.equals(that.description) : that.description == null;
        }

        @Override
        public final int hashCode() {
            int result = this.code.hashCode();
            result = 31 * result + (this.compatibleRuntime.hashCode());
            result = 31 * result + (this.layerName.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            return result;
        }
    }
}
