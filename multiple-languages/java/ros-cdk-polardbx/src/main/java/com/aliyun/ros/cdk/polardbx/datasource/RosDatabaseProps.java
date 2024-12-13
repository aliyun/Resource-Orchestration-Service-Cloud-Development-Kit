package com.aliyun.ros.cdk.polardbx.datasource;

/**
 * Properties for defining a <code>RosDatabase</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardbx-database
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-12-13T06:45:10.709Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardbx.$Module.class, fqn = "@alicloud/ros-cdk-polardbx.datasource.RosDatabaseProps")
@software.amazon.jsii.Jsii.Proxy(RosDatabaseProps.Jsii$Proxy.class)
public interface RosDatabaseProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPolarDbxDatabaseName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosDatabaseProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDatabaseProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDatabaseProps> {
        java.lang.Object dbInstanceId;
        java.lang.Object polarDbxDatabaseName;
        java.lang.Object refreshOptions;

        /**
         * Sets the value of {@link RosDatabaseProps#getDbInstanceId}
         * @param dbInstanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(java.lang.String dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosDatabaseProps#getDbInstanceId}
         * @param dbInstanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosDatabaseProps#getPolarDbxDatabaseName}
         * @param polarDbxDatabaseName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder polarDbxDatabaseName(java.lang.String polarDbxDatabaseName) {
            this.polarDbxDatabaseName = polarDbxDatabaseName;
            return this;
        }

        /**
         * Sets the value of {@link RosDatabaseProps#getPolarDbxDatabaseName}
         * @param polarDbxDatabaseName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder polarDbxDatabaseName(com.aliyun.ros.cdk.core.IResolvable polarDbxDatabaseName) {
            this.polarDbxDatabaseName = polarDbxDatabaseName;
            return this;
        }

        /**
         * Sets the value of {@link RosDatabaseProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosDatabaseProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDatabaseProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDatabaseProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDatabaseProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDatabaseProps {
        private final java.lang.Object dbInstanceId;
        private final java.lang.Object polarDbxDatabaseName;
        private final java.lang.Object refreshOptions;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dbInstanceId = software.amazon.jsii.Kernel.get(this, "dbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.polarDbxDatabaseName = software.amazon.jsii.Kernel.get(this, "polarDbxDatabaseName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dbInstanceId = java.util.Objects.requireNonNull(builder.dbInstanceId, "dbInstanceId is required");
            this.polarDbxDatabaseName = java.util.Objects.requireNonNull(builder.polarDbxDatabaseName, "polarDbxDatabaseName is required");
            this.refreshOptions = builder.refreshOptions;
        }

        @Override
        public final java.lang.Object getDbInstanceId() {
            return this.dbInstanceId;
        }

        @Override
        public final java.lang.Object getPolarDbxDatabaseName() {
            return this.polarDbxDatabaseName;
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

            data.set("dbInstanceId", om.valueToTree(this.getDbInstanceId()));
            data.set("polarDbxDatabaseName", om.valueToTree(this.getPolarDbxDatabaseName()));
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-polardbx.datasource.RosDatabaseProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDatabaseProps.Jsii$Proxy that = (RosDatabaseProps.Jsii$Proxy) o;

            if (!dbInstanceId.equals(that.dbInstanceId)) return false;
            if (!polarDbxDatabaseName.equals(that.polarDbxDatabaseName)) return false;
            return this.refreshOptions != null ? this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dbInstanceId.hashCode();
            result = 31 * result + (this.polarDbxDatabaseName.hashCode());
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            return result;
        }
    }
}