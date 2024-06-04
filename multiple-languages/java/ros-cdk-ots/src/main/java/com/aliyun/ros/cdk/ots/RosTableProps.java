package com.aliyun.ros.cdk.ots;

/**
 * Properties for defining a <code>RosTable</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-table
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-04T02:47:56.489Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ots.$Module.class, fqn = "@alicloud/ros-cdk-ots.RosTableProps")
@software.amazon.jsii.Jsii.Proxy(RosTableProps.Jsii$Proxy.class)
public interface RosTableProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPrimaryKey();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTableName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getColumns() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeviationCellVersionInSec() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaxVersions() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getReservedThroughput() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecondaryIndices() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTimeToLive() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosTableProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosTableProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosTableProps> {
        java.lang.Object instanceName;
        java.lang.Object primaryKey;
        java.lang.Object tableName;
        java.lang.Object columns;
        java.lang.Object deviationCellVersionInSec;
        java.lang.Object maxVersions;
        java.lang.Object reservedThroughput;
        java.lang.Object secondaryIndices;
        java.lang.Object timeToLive;

        /**
         * Sets the value of {@link RosTableProps#getInstanceName}
         * @param instanceName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceName(java.lang.String instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link RosTableProps#getInstanceName}
         * @param instanceName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceName(com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link RosTableProps#getPrimaryKey}
         * @param primaryKey the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder primaryKey(com.aliyun.ros.cdk.core.IResolvable primaryKey) {
            this.primaryKey = primaryKey;
            return this;
        }

        /**
         * Sets the value of {@link RosTableProps#getPrimaryKey}
         * @param primaryKey the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder primaryKey(java.util.List<? extends java.lang.Object> primaryKey) {
            this.primaryKey = primaryKey;
            return this;
        }

        /**
         * Sets the value of {@link RosTableProps#getTableName}
         * @param tableName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder tableName(java.lang.String tableName) {
            this.tableName = tableName;
            return this;
        }

        /**
         * Sets the value of {@link RosTableProps#getTableName}
         * @param tableName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder tableName(com.aliyun.ros.cdk.core.IResolvable tableName) {
            this.tableName = tableName;
            return this;
        }

        /**
         * Sets the value of {@link RosTableProps#getColumns}
         * @param columns the value to be set.
         * @return {@code this}
         */
        public Builder columns(com.aliyun.ros.cdk.core.IResolvable columns) {
            this.columns = columns;
            return this;
        }

        /**
         * Sets the value of {@link RosTableProps#getColumns}
         * @param columns the value to be set.
         * @return {@code this}
         */
        public Builder columns(java.util.List<? extends java.lang.Object> columns) {
            this.columns = columns;
            return this;
        }

        /**
         * Sets the value of {@link RosTableProps#getDeviationCellVersionInSec}
         * @param deviationCellVersionInSec the value to be set.
         * @return {@code this}
         */
        public Builder deviationCellVersionInSec(java.lang.Number deviationCellVersionInSec) {
            this.deviationCellVersionInSec = deviationCellVersionInSec;
            return this;
        }

        /**
         * Sets the value of {@link RosTableProps#getDeviationCellVersionInSec}
         * @param deviationCellVersionInSec the value to be set.
         * @return {@code this}
         */
        public Builder deviationCellVersionInSec(com.aliyun.ros.cdk.core.IResolvable deviationCellVersionInSec) {
            this.deviationCellVersionInSec = deviationCellVersionInSec;
            return this;
        }

        /**
         * Sets the value of {@link RosTableProps#getMaxVersions}
         * @param maxVersions the value to be set.
         * @return {@code this}
         */
        public Builder maxVersions(java.lang.Number maxVersions) {
            this.maxVersions = maxVersions;
            return this;
        }

        /**
         * Sets the value of {@link RosTableProps#getMaxVersions}
         * @param maxVersions the value to be set.
         * @return {@code this}
         */
        public Builder maxVersions(com.aliyun.ros.cdk.core.IResolvable maxVersions) {
            this.maxVersions = maxVersions;
            return this;
        }

        /**
         * Sets the value of {@link RosTableProps#getReservedThroughput}
         * @param reservedThroughput the value to be set.
         * @return {@code this}
         */
        public Builder reservedThroughput(com.aliyun.ros.cdk.core.IResolvable reservedThroughput) {
            this.reservedThroughput = reservedThroughput;
            return this;
        }

        /**
         * Sets the value of {@link RosTableProps#getReservedThroughput}
         * @param reservedThroughput the value to be set.
         * @return {@code this}
         */
        public Builder reservedThroughput(com.aliyun.ros.cdk.ots.RosTable.ReservedThroughputProperty reservedThroughput) {
            this.reservedThroughput = reservedThroughput;
            return this;
        }

        /**
         * Sets the value of {@link RosTableProps#getSecondaryIndices}
         * @param secondaryIndices the value to be set.
         * @return {@code this}
         */
        public Builder secondaryIndices(com.aliyun.ros.cdk.core.IResolvable secondaryIndices) {
            this.secondaryIndices = secondaryIndices;
            return this;
        }

        /**
         * Sets the value of {@link RosTableProps#getSecondaryIndices}
         * @param secondaryIndices the value to be set.
         * @return {@code this}
         */
        public Builder secondaryIndices(java.util.List<? extends java.lang.Object> secondaryIndices) {
            this.secondaryIndices = secondaryIndices;
            return this;
        }

        /**
         * Sets the value of {@link RosTableProps#getTimeToLive}
         * @param timeToLive the value to be set.
         * @return {@code this}
         */
        public Builder timeToLive(java.lang.Number timeToLive) {
            this.timeToLive = timeToLive;
            return this;
        }

        /**
         * Sets the value of {@link RosTableProps#getTimeToLive}
         * @param timeToLive the value to be set.
         * @return {@code this}
         */
        public Builder timeToLive(com.aliyun.ros.cdk.core.IResolvable timeToLive) {
            this.timeToLive = timeToLive;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosTableProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosTableProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosTableProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosTableProps {
        private final java.lang.Object instanceName;
        private final java.lang.Object primaryKey;
        private final java.lang.Object tableName;
        private final java.lang.Object columns;
        private final java.lang.Object deviationCellVersionInSec;
        private final java.lang.Object maxVersions;
        private final java.lang.Object reservedThroughput;
        private final java.lang.Object secondaryIndices;
        private final java.lang.Object timeToLive;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceName = software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.primaryKey = software.amazon.jsii.Kernel.get(this, "primaryKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tableName = software.amazon.jsii.Kernel.get(this, "tableName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.columns = software.amazon.jsii.Kernel.get(this, "columns", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deviationCellVersionInSec = software.amazon.jsii.Kernel.get(this, "deviationCellVersionInSec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.maxVersions = software.amazon.jsii.Kernel.get(this, "maxVersions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.reservedThroughput = software.amazon.jsii.Kernel.get(this, "reservedThroughput", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.secondaryIndices = software.amazon.jsii.Kernel.get(this, "secondaryIndices", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.timeToLive = software.amazon.jsii.Kernel.get(this, "timeToLive", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceName = java.util.Objects.requireNonNull(builder.instanceName, "instanceName is required");
            this.primaryKey = java.util.Objects.requireNonNull(builder.primaryKey, "primaryKey is required");
            this.tableName = java.util.Objects.requireNonNull(builder.tableName, "tableName is required");
            this.columns = builder.columns;
            this.deviationCellVersionInSec = builder.deviationCellVersionInSec;
            this.maxVersions = builder.maxVersions;
            this.reservedThroughput = builder.reservedThroughput;
            this.secondaryIndices = builder.secondaryIndices;
            this.timeToLive = builder.timeToLive;
        }

        @Override
        public final java.lang.Object getInstanceName() {
            return this.instanceName;
        }

        @Override
        public final java.lang.Object getPrimaryKey() {
            return this.primaryKey;
        }

        @Override
        public final java.lang.Object getTableName() {
            return this.tableName;
        }

        @Override
        public final java.lang.Object getColumns() {
            return this.columns;
        }

        @Override
        public final java.lang.Object getDeviationCellVersionInSec() {
            return this.deviationCellVersionInSec;
        }

        @Override
        public final java.lang.Object getMaxVersions() {
            return this.maxVersions;
        }

        @Override
        public final java.lang.Object getReservedThroughput() {
            return this.reservedThroughput;
        }

        @Override
        public final java.lang.Object getSecondaryIndices() {
            return this.secondaryIndices;
        }

        @Override
        public final java.lang.Object getTimeToLive() {
            return this.timeToLive;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("instanceName", om.valueToTree(this.getInstanceName()));
            data.set("primaryKey", om.valueToTree(this.getPrimaryKey()));
            data.set("tableName", om.valueToTree(this.getTableName()));
            if (this.getColumns() != null) {
                data.set("columns", om.valueToTree(this.getColumns()));
            }
            if (this.getDeviationCellVersionInSec() != null) {
                data.set("deviationCellVersionInSec", om.valueToTree(this.getDeviationCellVersionInSec()));
            }
            if (this.getMaxVersions() != null) {
                data.set("maxVersions", om.valueToTree(this.getMaxVersions()));
            }
            if (this.getReservedThroughput() != null) {
                data.set("reservedThroughput", om.valueToTree(this.getReservedThroughput()));
            }
            if (this.getSecondaryIndices() != null) {
                data.set("secondaryIndices", om.valueToTree(this.getSecondaryIndices()));
            }
            if (this.getTimeToLive() != null) {
                data.set("timeToLive", om.valueToTree(this.getTimeToLive()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ots.RosTableProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosTableProps.Jsii$Proxy that = (RosTableProps.Jsii$Proxy) o;

            if (!instanceName.equals(that.instanceName)) return false;
            if (!primaryKey.equals(that.primaryKey)) return false;
            if (!tableName.equals(that.tableName)) return false;
            if (this.columns != null ? !this.columns.equals(that.columns) : that.columns != null) return false;
            if (this.deviationCellVersionInSec != null ? !this.deviationCellVersionInSec.equals(that.deviationCellVersionInSec) : that.deviationCellVersionInSec != null) return false;
            if (this.maxVersions != null ? !this.maxVersions.equals(that.maxVersions) : that.maxVersions != null) return false;
            if (this.reservedThroughput != null ? !this.reservedThroughput.equals(that.reservedThroughput) : that.reservedThroughput != null) return false;
            if (this.secondaryIndices != null ? !this.secondaryIndices.equals(that.secondaryIndices) : that.secondaryIndices != null) return false;
            return this.timeToLive != null ? this.timeToLive.equals(that.timeToLive) : that.timeToLive == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceName.hashCode();
            result = 31 * result + (this.primaryKey.hashCode());
            result = 31 * result + (this.tableName.hashCode());
            result = 31 * result + (this.columns != null ? this.columns.hashCode() : 0);
            result = 31 * result + (this.deviationCellVersionInSec != null ? this.deviationCellVersionInSec.hashCode() : 0);
            result = 31 * result + (this.maxVersions != null ? this.maxVersions.hashCode() : 0);
            result = 31 * result + (this.reservedThroughput != null ? this.reservedThroughput.hashCode() : 0);
            result = 31 * result + (this.secondaryIndices != null ? this.secondaryIndices.hashCode() : 0);
            result = 31 * result + (this.timeToLive != null ? this.timeToLive.hashCode() : 0);
            return result;
        }
    }
}
