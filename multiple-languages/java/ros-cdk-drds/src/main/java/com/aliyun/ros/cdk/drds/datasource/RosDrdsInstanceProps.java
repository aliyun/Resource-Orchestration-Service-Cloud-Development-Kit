package com.aliyun.ros.cdk.drds.datasource;

/**
 * Properties for defining a <code>RosDrdsInstance</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-drdsinstance
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:04.065Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.drds.$Module.class, fqn = "@alicloud/ros-cdk-drds.datasource.RosDrdsInstanceProps")
@software.amazon.jsii.Jsii.Proxy(RosDrdsInstanceProps.Jsii$Proxy.class)
public interface RosDrdsInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDrdsInstanceId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosDrdsInstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDrdsInstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDrdsInstanceProps> {
        java.lang.Object drdsInstanceId;
        java.lang.Object refreshOptions;

        /**
         * Sets the value of {@link RosDrdsInstanceProps#getDrdsInstanceId}
         * @param drdsInstanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder drdsInstanceId(java.lang.String drdsInstanceId) {
            this.drdsInstanceId = drdsInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosDrdsInstanceProps#getDrdsInstanceId}
         * @param drdsInstanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder drdsInstanceId(com.aliyun.ros.cdk.core.IResolvable drdsInstanceId) {
            this.drdsInstanceId = drdsInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosDrdsInstanceProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosDrdsInstanceProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDrdsInstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDrdsInstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDrdsInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDrdsInstanceProps {
        private final java.lang.Object drdsInstanceId;
        private final java.lang.Object refreshOptions;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.drdsInstanceId = software.amazon.jsii.Kernel.get(this, "drdsInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.drdsInstanceId = java.util.Objects.requireNonNull(builder.drdsInstanceId, "drdsInstanceId is required");
            this.refreshOptions = builder.refreshOptions;
        }

        @Override
        public final java.lang.Object getDrdsInstanceId() {
            return this.drdsInstanceId;
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

            data.set("drdsInstanceId", om.valueToTree(this.getDrdsInstanceId()));
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-drds.datasource.RosDrdsInstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDrdsInstanceProps.Jsii$Proxy that = (RosDrdsInstanceProps.Jsii$Proxy) o;

            if (!drdsInstanceId.equals(that.drdsInstanceId)) return false;
            return this.refreshOptions != null ? this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions == null;
        }

        @Override
        public final int hashCode() {
            int result = this.drdsInstanceId.hashCode();
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            return result;
        }
    }
}
