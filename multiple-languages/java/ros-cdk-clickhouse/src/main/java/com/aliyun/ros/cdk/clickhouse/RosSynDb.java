package com.aliyun.ros.cdk.clickhouse;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ClickHouse::SynDb</code>, which is used to create a synchronization task for an ApsaraDB for ClickHouse Community-compatible Edition cluster.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-12-13T06:45:05.306Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.clickhouse.$Module.class, fqn = "@alicloud/ros-cdk-clickhouse.RosSynDb")
public class RosSynDb extends com.aliyun.ros.cdk.core.RosResource {

    protected RosSynDb(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosSynDb(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.clickhouse.RosSynDb.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosSynDb(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.clickhouse.RosSynDbProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrDbClusterId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRdsId() {
        return software.amazon.jsii.Kernel.get(this, "attrRdsId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSynDbs() {
        return software.amazon.jsii.Kernel.get(this, "attrSynDbs", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getCkPassword() {
        return software.amazon.jsii.Kernel.get(this, "ckPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCkPassword(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ckPassword", java.util.Objects.requireNonNull(value, "ckPassword is required"));
    }

    /**
     */
    public void setCkPassword(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ckPassword", java.util.Objects.requireNonNull(value, "ckPassword is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getCkUserName() {
        return software.amazon.jsii.Kernel.get(this, "ckUserName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCkUserName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ckUserName", java.util.Objects.requireNonNull(value, "ckUserName is required"));
    }

    /**
     */
    public void setCkUserName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ckUserName", java.util.Objects.requireNonNull(value, "ckUserName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDbClusterId() {
        return software.amazon.jsii.Kernel.get(this, "dbClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDbClusterId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dbClusterId", java.util.Objects.requireNonNull(value, "dbClusterId is required"));
    }

    /**
     */
    public void setDbClusterId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dbClusterId", java.util.Objects.requireNonNull(value, "dbClusterId is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getRdsId() {
        return software.amazon.jsii.Kernel.get(this, "rdsId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRdsId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "rdsId", java.util.Objects.requireNonNull(value, "rdsId is required"));
    }

    /**
     */
    public void setRdsId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "rdsId", java.util.Objects.requireNonNull(value, "rdsId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getRdsPassword() {
        return software.amazon.jsii.Kernel.get(this, "rdsPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRdsPassword(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "rdsPassword", java.util.Objects.requireNonNull(value, "rdsPassword is required"));
    }

    /**
     */
    public void setRdsPassword(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "rdsPassword", java.util.Objects.requireNonNull(value, "rdsPassword is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getRdsUserName() {
        return software.amazon.jsii.Kernel.get(this, "rdsUserName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRdsUserName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "rdsUserName", java.util.Objects.requireNonNull(value, "rdsUserName is required"));
    }

    /**
     */
    public void setRdsUserName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "rdsUserName", java.util.Objects.requireNonNull(value, "rdsUserName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSkipUnsupported() {
        return software.amazon.jsii.Kernel.get(this, "skipUnsupported", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSkipUnsupported(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "skipUnsupported", java.util.Objects.requireNonNull(value, "skipUnsupported is required"));
    }

    /**
     */
    public void setSkipUnsupported(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "skipUnsupported", java.util.Objects.requireNonNull(value, "skipUnsupported is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSynDbTables() {
        return software.amazon.jsii.Kernel.get(this, "synDbTables", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSynDbTables(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "synDbTables", java.util.Objects.requireNonNull(value, "synDbTables is required"));
    }

    /**
     */
    public void setSynDbTables(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.clickhouse.RosSynDb.SynDbTablesProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.clickhouse.RosSynDb.SynDbTablesProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "synDbTables", java.util.Objects.requireNonNull(value, "synDbTables is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getClickhousePort() {
        return software.amazon.jsii.Kernel.get(this, "clickhousePort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setClickhousePort(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "clickhousePort", value);
    }

    /**
     */
    public void setClickhousePort(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "clickhousePort", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLimitUpper() {
        return software.amazon.jsii.Kernel.get(this, "limitUpper", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLimitUpper(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "limitUpper", value);
    }

    /**
     */
    public void setLimitUpper(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "limitUpper", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRdsPort() {
        return software.amazon.jsii.Kernel.get(this, "rdsPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRdsPort(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "rdsPort", value);
    }

    /**
     */
    public void setRdsPort(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "rdsPort", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRdsVpcId() {
        return software.amazon.jsii.Kernel.get(this, "rdsVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRdsVpcId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "rdsVpcId", value);
    }

    /**
     */
    public void setRdsVpcId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "rdsVpcId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRdsVpcUrl() {
        return software.amazon.jsii.Kernel.get(this, "rdsVpcUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRdsVpcUrl(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "rdsVpcUrl", value);
    }

    /**
     */
    public void setRdsVpcUrl(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "rdsVpcUrl", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.clickhouse.$Module.class, fqn = "@alicloud/ros-cdk-clickhouse.RosSynDb.SynDbTablesProperty")
    @software.amazon.jsii.Jsii.Proxy(SynDbTablesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SynDbTablesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSchema();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getTables();

        /**
         * @return a {@link Builder} of {@link SynDbTablesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SynDbTablesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SynDbTablesProperty> {
            java.lang.Object schema;
            java.lang.Object tables;

            /**
             * Sets the value of {@link SynDbTablesProperty#getSchema}
             * @param schema the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder schema(java.lang.String schema) {
                this.schema = schema;
                return this;
            }

            /**
             * Sets the value of {@link SynDbTablesProperty#getSchema}
             * @param schema the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder schema(com.aliyun.ros.cdk.core.IResolvable schema) {
                this.schema = schema;
                return this;
            }

            /**
             * Sets the value of {@link SynDbTablesProperty#getTables}
             * @param tables the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tables(com.aliyun.ros.cdk.core.IResolvable tables) {
                this.tables = tables;
                return this;
            }

            /**
             * Sets the value of {@link SynDbTablesProperty#getTables}
             * @param tables the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tables(java.util.List<? extends java.lang.Object> tables) {
                this.tables = tables;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SynDbTablesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SynDbTablesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link SynDbTablesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SynDbTablesProperty {
            private final java.lang.Object schema;
            private final java.lang.Object tables;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.schema = software.amazon.jsii.Kernel.get(this, "schema", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.tables = software.amazon.jsii.Kernel.get(this, "tables", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.schema = java.util.Objects.requireNonNull(builder.schema, "schema is required");
                this.tables = java.util.Objects.requireNonNull(builder.tables, "tables is required");
            }

            @Override
            public final java.lang.Object getSchema() {
                return this.schema;
            }

            @Override
            public final java.lang.Object getTables() {
                return this.tables;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("schema", om.valueToTree(this.getSchema()));
                data.set("tables", om.valueToTree(this.getTables()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-clickhouse.RosSynDb.SynDbTablesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SynDbTablesProperty.Jsii$Proxy that = (SynDbTablesProperty.Jsii$Proxy) o;

                if (!schema.equals(that.schema)) return false;
                return this.tables.equals(that.tables);
            }

            @Override
            public final int hashCode() {
                int result = this.schema.hashCode();
                result = 31 * result + (this.tables.hashCode());
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.clickhouse.RosSynDb}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.clickhouse.RosSynDb> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.clickhouse.RosSynDbProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.clickhouse.RosSynDbProps.Builder();
        }

        /**
         * @return {@code this}
         * @param ckPassword This parameter is required.
         */
        public Builder ckPassword(final java.lang.String ckPassword) {
            this.props.ckPassword(ckPassword);
            return this;
        }
        /**
         * @return {@code this}
         * @param ckPassword This parameter is required.
         */
        public Builder ckPassword(final com.aliyun.ros.cdk.core.IResolvable ckPassword) {
            this.props.ckPassword(ckPassword);
            return this;
        }

        /**
         * @return {@code this}
         * @param ckUserName This parameter is required.
         */
        public Builder ckUserName(final java.lang.String ckUserName) {
            this.props.ckUserName(ckUserName);
            return this;
        }
        /**
         * @return {@code this}
         * @param ckUserName This parameter is required.
         */
        public Builder ckUserName(final com.aliyun.ros.cdk.core.IResolvable ckUserName) {
            this.props.ckUserName(ckUserName);
            return this;
        }

        /**
         * @return {@code this}
         * @param dbClusterId This parameter is required.
         */
        public Builder dbClusterId(final java.lang.String dbClusterId) {
            this.props.dbClusterId(dbClusterId);
            return this;
        }
        /**
         * @return {@code this}
         * @param dbClusterId This parameter is required.
         */
        public Builder dbClusterId(final com.aliyun.ros.cdk.core.IResolvable dbClusterId) {
            this.props.dbClusterId(dbClusterId);
            return this;
        }

        /**
         * @return {@code this}
         * @param rdsId This parameter is required.
         */
        public Builder rdsId(final java.lang.String rdsId) {
            this.props.rdsId(rdsId);
            return this;
        }
        /**
         * @return {@code this}
         * @param rdsId This parameter is required.
         */
        public Builder rdsId(final com.aliyun.ros.cdk.core.IResolvable rdsId) {
            this.props.rdsId(rdsId);
            return this;
        }

        /**
         * @return {@code this}
         * @param rdsPassword This parameter is required.
         */
        public Builder rdsPassword(final java.lang.String rdsPassword) {
            this.props.rdsPassword(rdsPassword);
            return this;
        }
        /**
         * @return {@code this}
         * @param rdsPassword This parameter is required.
         */
        public Builder rdsPassword(final com.aliyun.ros.cdk.core.IResolvable rdsPassword) {
            this.props.rdsPassword(rdsPassword);
            return this;
        }

        /**
         * @return {@code this}
         * @param rdsUserName This parameter is required.
         */
        public Builder rdsUserName(final java.lang.String rdsUserName) {
            this.props.rdsUserName(rdsUserName);
            return this;
        }
        /**
         * @return {@code this}
         * @param rdsUserName This parameter is required.
         */
        public Builder rdsUserName(final com.aliyun.ros.cdk.core.IResolvable rdsUserName) {
            this.props.rdsUserName(rdsUserName);
            return this;
        }

        /**
         * @return {@code this}
         * @param skipUnsupported This parameter is required.
         */
        public Builder skipUnsupported(final java.lang.Boolean skipUnsupported) {
            this.props.skipUnsupported(skipUnsupported);
            return this;
        }
        /**
         * @return {@code this}
         * @param skipUnsupported This parameter is required.
         */
        public Builder skipUnsupported(final com.aliyun.ros.cdk.core.IResolvable skipUnsupported) {
            this.props.skipUnsupported(skipUnsupported);
            return this;
        }

        /**
         * @return {@code this}
         * @param synDbTables This parameter is required.
         */
        public Builder synDbTables(final com.aliyun.ros.cdk.core.IResolvable synDbTables) {
            this.props.synDbTables(synDbTables);
            return this;
        }
        /**
         * @return {@code this}
         * @param synDbTables This parameter is required.
         */
        public Builder synDbTables(final java.util.List<? extends java.lang.Object> synDbTables) {
            this.props.synDbTables(synDbTables);
            return this;
        }

        /**
         * @return {@code this}
         * @param clickhousePort This parameter is required.
         */
        public Builder clickhousePort(final java.lang.Number clickhousePort) {
            this.props.clickhousePort(clickhousePort);
            return this;
        }
        /**
         * @return {@code this}
         * @param clickhousePort This parameter is required.
         */
        public Builder clickhousePort(final com.aliyun.ros.cdk.core.IResolvable clickhousePort) {
            this.props.clickhousePort(clickhousePort);
            return this;
        }

        /**
         * @return {@code this}
         * @param limitUpper This parameter is required.
         */
        public Builder limitUpper(final java.lang.Number limitUpper) {
            this.props.limitUpper(limitUpper);
            return this;
        }
        /**
         * @return {@code this}
         * @param limitUpper This parameter is required.
         */
        public Builder limitUpper(final com.aliyun.ros.cdk.core.IResolvable limitUpper) {
            this.props.limitUpper(limitUpper);
            return this;
        }

        /**
         * @return {@code this}
         * @param rdsPort This parameter is required.
         */
        public Builder rdsPort(final java.lang.Number rdsPort) {
            this.props.rdsPort(rdsPort);
            return this;
        }
        /**
         * @return {@code this}
         * @param rdsPort This parameter is required.
         */
        public Builder rdsPort(final com.aliyun.ros.cdk.core.IResolvable rdsPort) {
            this.props.rdsPort(rdsPort);
            return this;
        }

        /**
         * @return {@code this}
         * @param rdsVpcId This parameter is required.
         */
        public Builder rdsVpcId(final java.lang.String rdsVpcId) {
            this.props.rdsVpcId(rdsVpcId);
            return this;
        }
        /**
         * @return {@code this}
         * @param rdsVpcId This parameter is required.
         */
        public Builder rdsVpcId(final com.aliyun.ros.cdk.core.IResolvable rdsVpcId) {
            this.props.rdsVpcId(rdsVpcId);
            return this;
        }

        /**
         * @return {@code this}
         * @param rdsVpcUrl This parameter is required.
         */
        public Builder rdsVpcUrl(final java.lang.String rdsVpcUrl) {
            this.props.rdsVpcUrl(rdsVpcUrl);
            return this;
        }
        /**
         * @return {@code this}
         * @param rdsVpcUrl This parameter is required.
         */
        public Builder rdsVpcUrl(final com.aliyun.ros.cdk.core.IResolvable rdsVpcUrl) {
            this.props.rdsVpcUrl(rdsVpcUrl);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.clickhouse.RosSynDb}.
         */
        @Override
        public com.aliyun.ros.cdk.clickhouse.RosSynDb build() {
            return new com.aliyun.ros.cdk.clickhouse.RosSynDb(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
