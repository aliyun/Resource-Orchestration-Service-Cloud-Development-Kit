package com.aliyun.ros.cdk.drds.datasource;

/**
 * Properties for defining a <code>RosDrdsDB</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-drdsdb
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-12-13T06:45:06.560Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.drds.$Module.class, fqn = "@alicloud/ros-cdk-drds.datasource.RosDrdsDBProps")
@software.amazon.jsii.Jsii.Proxy(RosDrdsDBProps.Jsii$Proxy.class)
public interface RosDrdsDBProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDrdsDatabaseName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosDrdsDBProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDrdsDBProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDrdsDBProps> {
        java.lang.Object drdsDatabaseName;
        java.lang.Object refreshOptions;

        /**
         * Sets the value of {@link RosDrdsDBProps#getDrdsDatabaseName}
         * @param drdsDatabaseName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder drdsDatabaseName(java.lang.String drdsDatabaseName) {
            this.drdsDatabaseName = drdsDatabaseName;
            return this;
        }

        /**
         * Sets the value of {@link RosDrdsDBProps#getDrdsDatabaseName}
         * @param drdsDatabaseName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder drdsDatabaseName(com.aliyun.ros.cdk.core.IResolvable drdsDatabaseName) {
            this.drdsDatabaseName = drdsDatabaseName;
            return this;
        }

        /**
         * Sets the value of {@link RosDrdsDBProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosDrdsDBProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDrdsDBProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDrdsDBProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDrdsDBProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDrdsDBProps {
        private final java.lang.Object drdsDatabaseName;
        private final java.lang.Object refreshOptions;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.drdsDatabaseName = software.amazon.jsii.Kernel.get(this, "drdsDatabaseName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.drdsDatabaseName = java.util.Objects.requireNonNull(builder.drdsDatabaseName, "drdsDatabaseName is required");
            this.refreshOptions = builder.refreshOptions;
        }

        @Override
        public final java.lang.Object getDrdsDatabaseName() {
            return this.drdsDatabaseName;
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

            data.set("drdsDatabaseName", om.valueToTree(this.getDrdsDatabaseName()));
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-drds.datasource.RosDrdsDBProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDrdsDBProps.Jsii$Proxy that = (RosDrdsDBProps.Jsii$Proxy) o;

            if (!drdsDatabaseName.equals(that.drdsDatabaseName)) return false;
            return this.refreshOptions != null ? this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions == null;
        }

        @Override
        public final int hashCode() {
            int result = this.drdsDatabaseName.hashCode();
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            return result;
        }
    }
}
