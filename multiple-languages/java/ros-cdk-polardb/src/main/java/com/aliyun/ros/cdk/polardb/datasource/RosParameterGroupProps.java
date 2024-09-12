package com.aliyun.ros.cdk.polardb.datasource;

/**
 * Properties for defining a <code>RosParameterGroup</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-parametergroup
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:29.461Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.datasource.RosParameterGroupProps")
@software.amazon.jsii.Jsii.Proxy(RosParameterGroupProps.Jsii$Proxy.class)
public interface RosParameterGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getParameterGroupId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosParameterGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosParameterGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosParameterGroupProps> {
        java.lang.Object parameterGroupId;
        java.lang.Object refreshOptions;

        /**
         * Sets the value of {@link RosParameterGroupProps#getParameterGroupId}
         * @param parameterGroupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder parameterGroupId(java.lang.String parameterGroupId) {
            this.parameterGroupId = parameterGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosParameterGroupProps#getParameterGroupId}
         * @param parameterGroupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder parameterGroupId(com.aliyun.ros.cdk.core.IResolvable parameterGroupId) {
            this.parameterGroupId = parameterGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosParameterGroupProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosParameterGroupProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosParameterGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosParameterGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosParameterGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosParameterGroupProps {
        private final java.lang.Object parameterGroupId;
        private final java.lang.Object refreshOptions;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.parameterGroupId = software.amazon.jsii.Kernel.get(this, "parameterGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.parameterGroupId = java.util.Objects.requireNonNull(builder.parameterGroupId, "parameterGroupId is required");
            this.refreshOptions = builder.refreshOptions;
        }

        @Override
        public final java.lang.Object getParameterGroupId() {
            return this.parameterGroupId;
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

            data.set("parameterGroupId", om.valueToTree(this.getParameterGroupId()));
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-polardb.datasource.RosParameterGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosParameterGroupProps.Jsii$Proxy that = (RosParameterGroupProps.Jsii$Proxy) o;

            if (!parameterGroupId.equals(that.parameterGroupId)) return false;
            return this.refreshOptions != null ? this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions == null;
        }

        @Override
        public final int hashCode() {
            int result = this.parameterGroupId.hashCode();
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            return result;
        }
    }
}
