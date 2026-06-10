package com.aliyun.ros.cdk.oos;

/**
 * Properties for defining a <code>RosApplicationConnection</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-applicationconnection
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:12:59.942Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oos.$Module.class, fqn = "@alicloud/ros-cdk-oos.RosApplicationConnectionProps")
@software.amazon.jsii.Jsii.Proxy(RosApplicationConnectionProps.Jsii$Proxy.class)
public interface RosApplicationConnectionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getConnectionCategory();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getConnectionType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEnvVars();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     * @return a {@link Builder} of {@link RosApplicationConnectionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosApplicationConnectionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosApplicationConnectionProps> {
        java.lang.Object connectionCategory;
        java.lang.Object connectionType;
        java.lang.Object envVars;
        java.lang.Object name;

        /**
         * Sets the value of {@link RosApplicationConnectionProps#getConnectionCategory}
         * @param connectionCategory the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder connectionCategory(java.lang.String connectionCategory) {
            this.connectionCategory = connectionCategory;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationConnectionProps#getConnectionCategory}
         * @param connectionCategory the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder connectionCategory(com.aliyun.ros.cdk.core.IResolvable connectionCategory) {
            this.connectionCategory = connectionCategory;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationConnectionProps#getConnectionType}
         * @param connectionType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder connectionType(java.lang.String connectionType) {
            this.connectionType = connectionType;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationConnectionProps#getConnectionType}
         * @param connectionType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder connectionType(com.aliyun.ros.cdk.core.IResolvable connectionType) {
            this.connectionType = connectionType;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationConnectionProps#getEnvVars}
         * @param envVars the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder envVars(com.aliyun.ros.cdk.core.IResolvable envVars) {
            this.envVars = envVars;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationConnectionProps#getEnvVars}
         * @param envVars the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder envVars(java.util.List<? extends java.lang.Object> envVars) {
            this.envVars = envVars;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationConnectionProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationConnectionProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosApplicationConnectionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosApplicationConnectionProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosApplicationConnectionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosApplicationConnectionProps {
        private final java.lang.Object connectionCategory;
        private final java.lang.Object connectionType;
        private final java.lang.Object envVars;
        private final java.lang.Object name;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.connectionCategory = software.amazon.jsii.Kernel.get(this, "connectionCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.connectionType = software.amazon.jsii.Kernel.get(this, "connectionType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.envVars = software.amazon.jsii.Kernel.get(this, "envVars", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.connectionCategory = java.util.Objects.requireNonNull(builder.connectionCategory, "connectionCategory is required");
            this.connectionType = java.util.Objects.requireNonNull(builder.connectionType, "connectionType is required");
            this.envVars = java.util.Objects.requireNonNull(builder.envVars, "envVars is required");
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
        }

        @Override
        public final java.lang.Object getConnectionCategory() {
            return this.connectionCategory;
        }

        @Override
        public final java.lang.Object getConnectionType() {
            return this.connectionType;
        }

        @Override
        public final java.lang.Object getEnvVars() {
            return this.envVars;
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

            data.set("connectionCategory", om.valueToTree(this.getConnectionCategory()));
            data.set("connectionType", om.valueToTree(this.getConnectionType()));
            data.set("envVars", om.valueToTree(this.getEnvVars()));
            data.set("name", om.valueToTree(this.getName()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oos.RosApplicationConnectionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosApplicationConnectionProps.Jsii$Proxy that = (RosApplicationConnectionProps.Jsii$Proxy) o;

            if (!connectionCategory.equals(that.connectionCategory)) return false;
            if (!connectionType.equals(that.connectionType)) return false;
            if (!envVars.equals(that.envVars)) return false;
            return this.name.equals(that.name);
        }

        @Override
        public final int hashCode() {
            int result = this.connectionCategory.hashCode();
            result = 31 * result + (this.connectionType.hashCode());
            result = 31 * result + (this.envVars.hashCode());
            result = 31 * result + (this.name.hashCode());
            return result;
        }
    }
}
