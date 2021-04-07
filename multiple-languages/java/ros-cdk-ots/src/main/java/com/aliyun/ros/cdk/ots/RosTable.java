package com.aliyun.ros.cdk.ots;

/**
 * A ROS template type:  `ALIYUN::OTS::Table`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.27.0 (build 07d848a)", date = "2021-04-07T04:01:42.778Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ots.$Module.class, fqn = "@alicloud/ros-cdk-ots.RosTable")
public class RosTable extends com.aliyun.ros.cdk.core.RosResource {

    protected RosTable(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosTable(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ots.RosTable.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::OTS::Table`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosTable(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ots.RosTableProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTableName() {
        return software.amazon.jsii.Kernel.get(this, "attrTableName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getInstanceName() {
        return software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "instanceName", java.util.Objects.requireNonNull(value, "instanceName is required"));
    }

    /**
     */
    public void setInstanceName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceName", java.util.Objects.requireNonNull(value, "instanceName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPrimaryKey() {
        return software.amazon.jsii.Kernel.get(this, "primaryKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPrimaryKey(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "primaryKey", java.util.Objects.requireNonNull(value, "primaryKey is required"));
    }

    /**
     */
    public void setPrimaryKey(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "primaryKey", java.util.Objects.requireNonNull(value, "primaryKey is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTableName() {
        return software.amazon.jsii.Kernel.get(this, "tableName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTableName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "tableName", java.util.Objects.requireNonNull(value, "tableName is required"));
    }

    /**
     */
    public void setTableName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "tableName", java.util.Objects.requireNonNull(value, "tableName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getColumns() {
        return software.amazon.jsii.Kernel.get(this, "columns", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setColumns(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "columns", value);
    }

    /**
     */
    public void setColumns(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "columns", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDeviationCellVersionInSec() {
        return software.amazon.jsii.Kernel.get(this, "deviationCellVersionInSec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeviationCellVersionInSec(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "deviationCellVersionInSec", value);
    }

    /**
     */
    public void setDeviationCellVersionInSec(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deviationCellVersionInSec", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMaxVersions() {
        return software.amazon.jsii.Kernel.get(this, "maxVersions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMaxVersions(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "maxVersions", value);
    }

    /**
     */
    public void setMaxVersions(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "maxVersions", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getReservedThroughput() {
        return software.amazon.jsii.Kernel.get(this, "reservedThroughput", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setReservedThroughput(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "reservedThroughput", value);
    }

    /**
     */
    public void setReservedThroughput(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ots.RosTable.ReservedThroughputProperty value) {
        software.amazon.jsii.Kernel.set(this, "reservedThroughput", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSecondaryIndices() {
        return software.amazon.jsii.Kernel.get(this, "secondaryIndices", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecondaryIndices(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "secondaryIndices", value);
    }

    /**
     */
    public void setSecondaryIndices(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "secondaryIndices", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTimeToLive() {
        return software.amazon.jsii.Kernel.get(this, "timeToLive", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTimeToLive(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "timeToLive", value);
    }

    /**
     */
    public void setTimeToLive(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "timeToLive", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ots.$Module.class, fqn = "@alicloud/ros-cdk-ots.RosTable.ColumnsProperty")
    @software.amazon.jsii.Jsii.Proxy(ColumnsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ColumnsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getType();

        /**
         * @return a {@link Builder} of {@link ColumnsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ColumnsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ColumnsProperty> {
            private java.lang.Object name;
            private java.lang.Object type;

            /**
             * Sets the value of {@link ColumnsProperty#getName}
             * @param name the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link ColumnsProperty#getName}
             * @param name the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link ColumnsProperty#getType}
             * @param type the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link ColumnsProperty#getType}
             * @param type the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
                this.type = type;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ColumnsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ColumnsProperty build() {
                return new Jsii$Proxy(name, type);
            }
        }

        /**
         * An implementation for {@link ColumnsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ColumnsProperty {
            private final java.lang.Object name;
            private final java.lang.Object type;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.Object name, final java.lang.Object type) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.name = java.util.Objects.requireNonNull(name, "name is required");
                this.type = java.util.Objects.requireNonNull(type, "type is required");
            }

            @Override
            public final java.lang.Object getName() {
                return this.name;
            }

            @Override
            public final java.lang.Object getType() {
                return this.type;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("name", om.valueToTree(this.getName()));
                data.set("type", om.valueToTree(this.getType()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ots.RosTable.ColumnsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ColumnsProperty.Jsii$Proxy that = (ColumnsProperty.Jsii$Proxy) o;

                if (!name.equals(that.name)) return false;
                return this.type.equals(that.type);
            }

            @Override
            public final int hashCode() {
                int result = this.name.hashCode();
                result = 31 * result + (this.type.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ots.$Module.class, fqn = "@alicloud/ros-cdk-ots.RosTable.PrimaryKeyProperty")
    @software.amazon.jsii.Jsii.Proxy(PrimaryKeyProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PrimaryKeyProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getType();

        /**
         * @return a {@link Builder} of {@link PrimaryKeyProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PrimaryKeyProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PrimaryKeyProperty> {
            private java.lang.Object name;
            private java.lang.Object type;

            /**
             * Sets the value of {@link PrimaryKeyProperty#getName}
             * @param name the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link PrimaryKeyProperty#getName}
             * @param name the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link PrimaryKeyProperty#getType}
             * @param type the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link PrimaryKeyProperty#getType}
             * @param type the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
                this.type = type;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link PrimaryKeyProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PrimaryKeyProperty build() {
                return new Jsii$Proxy(name, type);
            }
        }

        /**
         * An implementation for {@link PrimaryKeyProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PrimaryKeyProperty {
            private final java.lang.Object name;
            private final java.lang.Object type;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.Object name, final java.lang.Object type) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.name = java.util.Objects.requireNonNull(name, "name is required");
                this.type = java.util.Objects.requireNonNull(type, "type is required");
            }

            @Override
            public final java.lang.Object getName() {
                return this.name;
            }

            @Override
            public final java.lang.Object getType() {
                return this.type;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("name", om.valueToTree(this.getName()));
                data.set("type", om.valueToTree(this.getType()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ots.RosTable.PrimaryKeyProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PrimaryKeyProperty.Jsii$Proxy that = (PrimaryKeyProperty.Jsii$Proxy) o;

                if (!name.equals(that.name)) return false;
                return this.type.equals(that.type);
            }

            @Override
            public final int hashCode() {
                int result = this.name.hashCode();
                result = 31 * result + (this.type.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ots.$Module.class, fqn = "@alicloud/ros-cdk-ots.RosTable.ReservedThroughputProperty")
    @software.amazon.jsii.Jsii.Proxy(ReservedThroughputProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ReservedThroughputProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getRead();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getWrite();

        /**
         * @return a {@link Builder} of {@link ReservedThroughputProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ReservedThroughputProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ReservedThroughputProperty> {
            private java.lang.Object read;
            private java.lang.Object write;

            /**
             * Sets the value of {@link ReservedThroughputProperty#getRead}
             * @param read the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder read(java.lang.Number read) {
                this.read = read;
                return this;
            }

            /**
             * Sets the value of {@link ReservedThroughputProperty#getRead}
             * @param read the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder read(com.aliyun.ros.cdk.core.IResolvable read) {
                this.read = read;
                return this;
            }

            /**
             * Sets the value of {@link ReservedThroughputProperty#getWrite}
             * @param write the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder write(java.lang.Number write) {
                this.write = write;
                return this;
            }

            /**
             * Sets the value of {@link ReservedThroughputProperty#getWrite}
             * @param write the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder write(com.aliyun.ros.cdk.core.IResolvable write) {
                this.write = write;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ReservedThroughputProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ReservedThroughputProperty build() {
                return new Jsii$Proxy(read, write);
            }
        }

        /**
         * An implementation for {@link ReservedThroughputProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ReservedThroughputProperty {
            private final java.lang.Object read;
            private final java.lang.Object write;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.read = software.amazon.jsii.Kernel.get(this, "read", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.write = software.amazon.jsii.Kernel.get(this, "write", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.Object read, final java.lang.Object write) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.read = java.util.Objects.requireNonNull(read, "read is required");
                this.write = java.util.Objects.requireNonNull(write, "write is required");
            }

            @Override
            public final java.lang.Object getRead() {
                return this.read;
            }

            @Override
            public final java.lang.Object getWrite() {
                return this.write;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("read", om.valueToTree(this.getRead()));
                data.set("write", om.valueToTree(this.getWrite()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ots.RosTable.ReservedThroughputProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ReservedThroughputProperty.Jsii$Proxy that = (ReservedThroughputProperty.Jsii$Proxy) o;

                if (!read.equals(that.read)) return false;
                return this.write.equals(that.write);
            }

            @Override
            public final int hashCode() {
                int result = this.read.hashCode();
                result = 31 * result + (this.write.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ots.$Module.class, fqn = "@alicloud/ros-cdk-ots.RosTable.SecondaryIndicesProperty")
    @software.amazon.jsii.Jsii.Proxy(SecondaryIndicesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SecondaryIndicesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getColumns();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getIndexName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getPrimaryKeys();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIndexType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link SecondaryIndicesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SecondaryIndicesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SecondaryIndicesProperty> {
            private java.lang.Object columns;
            private java.lang.Object indexName;
            private java.lang.Object primaryKeys;
            private java.lang.Object indexType;

            /**
             * Sets the value of {@link SecondaryIndicesProperty#getColumns}
             * @param columns the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder columns(com.aliyun.ros.cdk.core.IResolvable columns) {
                this.columns = columns;
                return this;
            }

            /**
             * Sets the value of {@link SecondaryIndicesProperty#getColumns}
             * @param columns the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder columns(java.util.List<? extends java.lang.Object> columns) {
                this.columns = columns;
                return this;
            }

            /**
             * Sets the value of {@link SecondaryIndicesProperty#getIndexName}
             * @param indexName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder indexName(java.lang.String indexName) {
                this.indexName = indexName;
                return this;
            }

            /**
             * Sets the value of {@link SecondaryIndicesProperty#getIndexName}
             * @param indexName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder indexName(com.aliyun.ros.cdk.core.IResolvable indexName) {
                this.indexName = indexName;
                return this;
            }

            /**
             * Sets the value of {@link SecondaryIndicesProperty#getPrimaryKeys}
             * @param primaryKeys the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder primaryKeys(com.aliyun.ros.cdk.core.IResolvable primaryKeys) {
                this.primaryKeys = primaryKeys;
                return this;
            }

            /**
             * Sets the value of {@link SecondaryIndicesProperty#getPrimaryKeys}
             * @param primaryKeys the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder primaryKeys(java.util.List<? extends java.lang.Object> primaryKeys) {
                this.primaryKeys = primaryKeys;
                return this;
            }

            /**
             * Sets the value of {@link SecondaryIndicesProperty#getIndexType}
             * @param indexType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder indexType(java.lang.String indexType) {
                this.indexType = indexType;
                return this;
            }

            /**
             * Sets the value of {@link SecondaryIndicesProperty#getIndexType}
             * @param indexType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder indexType(com.aliyun.ros.cdk.core.IResolvable indexType) {
                this.indexType = indexType;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SecondaryIndicesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SecondaryIndicesProperty build() {
                return new Jsii$Proxy(columns, indexName, primaryKeys, indexType);
            }
        }

        /**
         * An implementation for {@link SecondaryIndicesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SecondaryIndicesProperty {
            private final java.lang.Object columns;
            private final java.lang.Object indexName;
            private final java.lang.Object primaryKeys;
            private final java.lang.Object indexType;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.columns = software.amazon.jsii.Kernel.get(this, "columns", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.indexName = software.amazon.jsii.Kernel.get(this, "indexName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.primaryKeys = software.amazon.jsii.Kernel.get(this, "primaryKeys", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.indexType = software.amazon.jsii.Kernel.get(this, "indexType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.Object columns, final java.lang.Object indexName, final java.lang.Object primaryKeys, final java.lang.Object indexType) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.columns = java.util.Objects.requireNonNull(columns, "columns is required");
                this.indexName = java.util.Objects.requireNonNull(indexName, "indexName is required");
                this.primaryKeys = java.util.Objects.requireNonNull(primaryKeys, "primaryKeys is required");
                this.indexType = indexType;
            }

            @Override
            public final java.lang.Object getColumns() {
                return this.columns;
            }

            @Override
            public final java.lang.Object getIndexName() {
                return this.indexName;
            }

            @Override
            public final java.lang.Object getPrimaryKeys() {
                return this.primaryKeys;
            }

            @Override
            public final java.lang.Object getIndexType() {
                return this.indexType;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("columns", om.valueToTree(this.getColumns()));
                data.set("indexName", om.valueToTree(this.getIndexName()));
                data.set("primaryKeys", om.valueToTree(this.getPrimaryKeys()));
                if (this.getIndexType() != null) {
                    data.set("indexType", om.valueToTree(this.getIndexType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ots.RosTable.SecondaryIndicesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SecondaryIndicesProperty.Jsii$Proxy that = (SecondaryIndicesProperty.Jsii$Proxy) o;

                if (!columns.equals(that.columns)) return false;
                if (!indexName.equals(that.indexName)) return false;
                if (!primaryKeys.equals(that.primaryKeys)) return false;
                return this.indexType != null ? this.indexType.equals(that.indexType) : that.indexType == null;
            }

            @Override
            public final int hashCode() {
                int result = this.columns.hashCode();
                result = 31 * result + (this.indexName.hashCode());
                result = 31 * result + (this.primaryKeys.hashCode());
                result = 31 * result + (this.indexType != null ? this.indexType.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ots.RosTable}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ots.RosTable> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.ots.RosTableProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ots.RosTableProps.Builder();
        }

        /**
         * @return {@code this}
         * @param instanceName This parameter is required.
         */
        public Builder instanceName(final java.lang.String instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceName This parameter is required.
         */
        public Builder instanceName(final com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }

        /**
         * @return {@code this}
         * @param primaryKey This parameter is required.
         */
        public Builder primaryKey(final com.aliyun.ros.cdk.core.IResolvable primaryKey) {
            this.props.primaryKey(primaryKey);
            return this;
        }
        /**
         * @return {@code this}
         * @param primaryKey This parameter is required.
         */
        public Builder primaryKey(final java.util.List<? extends java.lang.Object> primaryKey) {
            this.props.primaryKey(primaryKey);
            return this;
        }

        /**
         * @return {@code this}
         * @param tableName This parameter is required.
         */
        public Builder tableName(final java.lang.String tableName) {
            this.props.tableName(tableName);
            return this;
        }
        /**
         * @return {@code this}
         * @param tableName This parameter is required.
         */
        public Builder tableName(final com.aliyun.ros.cdk.core.IResolvable tableName) {
            this.props.tableName(tableName);
            return this;
        }

        /**
         * @return {@code this}
         * @param columns This parameter is required.
         */
        public Builder columns(final com.aliyun.ros.cdk.core.IResolvable columns) {
            this.props.columns(columns);
            return this;
        }
        /**
         * @return {@code this}
         * @param columns This parameter is required.
         */
        public Builder columns(final java.util.List<? extends java.lang.Object> columns) {
            this.props.columns(columns);
            return this;
        }

        /**
         * @return {@code this}
         * @param deviationCellVersionInSec This parameter is required.
         */
        public Builder deviationCellVersionInSec(final java.lang.Number deviationCellVersionInSec) {
            this.props.deviationCellVersionInSec(deviationCellVersionInSec);
            return this;
        }
        /**
         * @return {@code this}
         * @param deviationCellVersionInSec This parameter is required.
         */
        public Builder deviationCellVersionInSec(final com.aliyun.ros.cdk.core.IResolvable deviationCellVersionInSec) {
            this.props.deviationCellVersionInSec(deviationCellVersionInSec);
            return this;
        }

        /**
         * @return {@code this}
         * @param maxVersions This parameter is required.
         */
        public Builder maxVersions(final java.lang.Number maxVersions) {
            this.props.maxVersions(maxVersions);
            return this;
        }
        /**
         * @return {@code this}
         * @param maxVersions This parameter is required.
         */
        public Builder maxVersions(final com.aliyun.ros.cdk.core.IResolvable maxVersions) {
            this.props.maxVersions(maxVersions);
            return this;
        }

        /**
         * @return {@code this}
         * @param reservedThroughput This parameter is required.
         */
        public Builder reservedThroughput(final com.aliyun.ros.cdk.core.IResolvable reservedThroughput) {
            this.props.reservedThroughput(reservedThroughput);
            return this;
        }
        /**
         * @return {@code this}
         * @param reservedThroughput This parameter is required.
         */
        public Builder reservedThroughput(final com.aliyun.ros.cdk.ots.RosTable.ReservedThroughputProperty reservedThroughput) {
            this.props.reservedThroughput(reservedThroughput);
            return this;
        }

        /**
         * @return {@code this}
         * @param secondaryIndices This parameter is required.
         */
        public Builder secondaryIndices(final com.aliyun.ros.cdk.core.IResolvable secondaryIndices) {
            this.props.secondaryIndices(secondaryIndices);
            return this;
        }
        /**
         * @return {@code this}
         * @param secondaryIndices This parameter is required.
         */
        public Builder secondaryIndices(final java.util.List<? extends java.lang.Object> secondaryIndices) {
            this.props.secondaryIndices(secondaryIndices);
            return this;
        }

        /**
         * @return {@code this}
         * @param timeToLive This parameter is required.
         */
        public Builder timeToLive(final java.lang.Number timeToLive) {
            this.props.timeToLive(timeToLive);
            return this;
        }
        /**
         * @return {@code this}
         * @param timeToLive This parameter is required.
         */
        public Builder timeToLive(final com.aliyun.ros.cdk.core.IResolvable timeToLive) {
            this.props.timeToLive(timeToLive);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ots.RosTable}.
         */
        @Override
        public com.aliyun.ros.cdk.ots.RosTable build() {
            return new com.aliyun.ros.cdk.ots.RosTable(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
