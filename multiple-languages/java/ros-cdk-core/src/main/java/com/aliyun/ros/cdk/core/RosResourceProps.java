package com.aliyun.ros.cdk.core;

@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-03-01T09:16:49.694Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.RosResourceProps")
@software.amazon.jsii.Jsii.Proxy(RosResourceProps.Jsii$Proxy.class)
public interface RosResourceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * ROS template resource type (e.g. <code>ALIYUN::ECS::Instance</code>).
     */
    @org.jetbrains.annotations.NotNull java.lang.String getType();

    /**
     * Resource properties.
     * <p>
     * Default: - No resource properties.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> getProperties() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosResourceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosResourceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosResourceProps> {
        java.lang.String type;
        java.util.Map<java.lang.String, java.lang.Object> properties;

        /**
         * Sets the value of {@link RosResourceProps#getType}
         * @param type ROS template resource type (e.g. <code>ALIYUN::ECS::Instance</code>). This parameter is required.
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceProps#getProperties}
         * @param properties Resource properties.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder properties(java.util.Map<java.lang.String, ? extends java.lang.Object> properties) {
            this.properties = (java.util.Map<java.lang.String, java.lang.Object>)properties;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosResourceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosResourceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosResourceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosResourceProps {
        private final java.lang.String type;
        private final java.util.Map<java.lang.String, java.lang.Object> properties;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.properties = software.amazon.jsii.Kernel.get(this, "properties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
            this.properties = (java.util.Map<java.lang.String, java.lang.Object>)builder.properties;
        }

        @Override
        public final java.lang.String getType() {
            return this.type;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.Object> getProperties() {
            return this.properties;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("type", om.valueToTree(this.getType()));
            if (this.getProperties() != null) {
                data.set("properties", om.valueToTree(this.getProperties()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-core.RosResourceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosResourceProps.Jsii$Proxy that = (RosResourceProps.Jsii$Proxy) o;

            if (!type.equals(that.type)) return false;
            return this.properties != null ? this.properties.equals(that.properties) : that.properties == null;
        }

        @Override
        public final int hashCode() {
            int result = this.type.hashCode();
            result = 31 * result + (this.properties != null ? this.properties.hashCode() : 0);
            return result;
        }
    }
}
