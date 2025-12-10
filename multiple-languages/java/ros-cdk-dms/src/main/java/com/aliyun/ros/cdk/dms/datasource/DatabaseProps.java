package com.aliyun.ros.cdk.dms.datasource;

/**
 * Properties for defining a <code>Database</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dms-database
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:54.570Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dms.$Module.class, fqn = "@alicloud/ros-cdk-dms.datasource.DatabaseProps")
@software.amazon.jsii.Jsii.Proxy(DatabaseProps.Jsii$Proxy.class)
public interface DatabaseProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property host: Database connection address.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getHost();

    /**
     * Property port: Database connection port.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPort();

    /**
     * Property schemaName: Database schema name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSchemaName();

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
     * <li>Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     * Property sid: Database SID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSid() {
        return null;
    }

    /**
     * Property tid: The tenant ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTid() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DatabaseProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DatabaseProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DatabaseProps> {
        java.lang.Object host;
        java.lang.Object port;
        java.lang.Object schemaName;
        java.lang.Object refreshOptions;
        java.lang.Object sid;
        java.lang.Object tid;

        /**
         * Sets the value of {@link DatabaseProps#getHost}
         * @param host Property host: Database connection address. This parameter is required.
         * @return {@code this}
         */
        public Builder host(java.lang.String host) {
            this.host = host;
            return this;
        }

        /**
         * Sets the value of {@link DatabaseProps#getHost}
         * @param host Property host: Database connection address. This parameter is required.
         * @return {@code this}
         */
        public Builder host(com.aliyun.ros.cdk.core.IResolvable host) {
            this.host = host;
            return this;
        }

        /**
         * Sets the value of {@link DatabaseProps#getPort}
         * @param port Property port: Database connection port. This parameter is required.
         * @return {@code this}
         */
        public Builder port(java.lang.Number port) {
            this.port = port;
            return this;
        }

        /**
         * Sets the value of {@link DatabaseProps#getPort}
         * @param port Property port: Database connection port. This parameter is required.
         * @return {@code this}
         */
        public Builder port(com.aliyun.ros.cdk.core.IResolvable port) {
            this.port = port;
            return this;
        }

        /**
         * Sets the value of {@link DatabaseProps#getSchemaName}
         * @param schemaName Property schemaName: Database schema name. This parameter is required.
         * @return {@code this}
         */
        public Builder schemaName(java.lang.String schemaName) {
            this.schemaName = schemaName;
            return this;
        }

        /**
         * Sets the value of {@link DatabaseProps#getSchemaName}
         * @param schemaName Property schemaName: Database schema name. This parameter is required.
         * @return {@code this}
         */
        public Builder schemaName(com.aliyun.ros.cdk.core.IResolvable schemaName) {
            this.schemaName = schemaName;
            return this;
        }

        /**
         * Sets the value of {@link DatabaseProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link DatabaseProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link DatabaseProps#getSid}
         * @param sid Property sid: Database SID.
         * @return {@code this}
         */
        public Builder sid(java.lang.String sid) {
            this.sid = sid;
            return this;
        }

        /**
         * Sets the value of {@link DatabaseProps#getSid}
         * @param sid Property sid: Database SID.
         * @return {@code this}
         */
        public Builder sid(com.aliyun.ros.cdk.core.IResolvable sid) {
            this.sid = sid;
            return this;
        }

        /**
         * Sets the value of {@link DatabaseProps#getTid}
         * @param tid Property tid: The tenant ID.
         * @return {@code this}
         */
        public Builder tid(java.lang.Number tid) {
            this.tid = tid;
            return this;
        }

        /**
         * Sets the value of {@link DatabaseProps#getTid}
         * @param tid Property tid: The tenant ID.
         * @return {@code this}
         */
        public Builder tid(com.aliyun.ros.cdk.core.IResolvable tid) {
            this.tid = tid;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DatabaseProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DatabaseProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DatabaseProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DatabaseProps {
        private final java.lang.Object host;
        private final java.lang.Object port;
        private final java.lang.Object schemaName;
        private final java.lang.Object refreshOptions;
        private final java.lang.Object sid;
        private final java.lang.Object tid;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.host = software.amazon.jsii.Kernel.get(this, "host", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.port = software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.schemaName = software.amazon.jsii.Kernel.get(this, "schemaName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sid = software.amazon.jsii.Kernel.get(this, "sid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tid = software.amazon.jsii.Kernel.get(this, "tid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.host = java.util.Objects.requireNonNull(builder.host, "host is required");
            this.port = java.util.Objects.requireNonNull(builder.port, "port is required");
            this.schemaName = java.util.Objects.requireNonNull(builder.schemaName, "schemaName is required");
            this.refreshOptions = builder.refreshOptions;
            this.sid = builder.sid;
            this.tid = builder.tid;
        }

        @Override
        public final java.lang.Object getHost() {
            return this.host;
        }

        @Override
        public final java.lang.Object getPort() {
            return this.port;
        }

        @Override
        public final java.lang.Object getSchemaName() {
            return this.schemaName;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        public final java.lang.Object getSid() {
            return this.sid;
        }

        @Override
        public final java.lang.Object getTid() {
            return this.tid;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("host", om.valueToTree(this.getHost()));
            data.set("port", om.valueToTree(this.getPort()));
            data.set("schemaName", om.valueToTree(this.getSchemaName()));
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }
            if (this.getSid() != null) {
                data.set("sid", om.valueToTree(this.getSid()));
            }
            if (this.getTid() != null) {
                data.set("tid", om.valueToTree(this.getTid()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dms.datasource.DatabaseProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DatabaseProps.Jsii$Proxy that = (DatabaseProps.Jsii$Proxy) o;

            if (!host.equals(that.host)) return false;
            if (!port.equals(that.port)) return false;
            if (!schemaName.equals(that.schemaName)) return false;
            if (this.refreshOptions != null ? !this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions != null) return false;
            if (this.sid != null ? !this.sid.equals(that.sid) : that.sid != null) return false;
            return this.tid != null ? this.tid.equals(that.tid) : that.tid == null;
        }

        @Override
        public final int hashCode() {
            int result = this.host.hashCode();
            result = 31 * result + (this.port.hashCode());
            result = 31 * result + (this.schemaName.hashCode());
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            result = 31 * result + (this.sid != null ? this.sid.hashCode() : 0);
            result = 31 * result + (this.tid != null ? this.tid.hashCode() : 0);
            return result;
        }
    }
}
