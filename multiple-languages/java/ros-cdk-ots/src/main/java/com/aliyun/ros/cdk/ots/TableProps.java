package com.aliyun.ros.cdk.ots;

/**
 * Properties for defining a <code>ALIYUN::OTS::Table</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-18T08:28:02.852Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ots.$Module.class, fqn = "@alicloud/ros-cdk-ots.TableProps")
@software.amazon.jsii.Jsii.Proxy(TableProps.Jsii$Proxy.class)
public interface TableProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property instanceName: The name of the OTS instance in which table will locate.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceName();

    /**
     * Property primaryKey: It describes the attribute value of primary key.
     * <p>
     * The number of primary_key should not be less than one and not be more than four.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPrimaryKey();

    /**
     * Property tableName: The table name of the OTS instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTableName();

    /**
     * Property columns: Attribute column for table store.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getColumns() {
        return null;
    }

    /**
     * Property deviationCellVersionInSec: Maximum version deviation.
     * <p>
     * The purpose is mainly to prohibit writing and expected large data, such as setting the deviation_cell_version_in_sec to 1000, and if the current timestamp is 10000, the timestamp range allowed to be written is [10000 - 1000, 10000 + 1000]. The valid value is 1-9223372036854775807. Defaults to 86400.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeviationCellVersionInSec() {
        return null;
    }

    /**
     * Property maxVersions: The maximum number of versions stored in this table.
     * <p>
     * The valid value is 1-2147483647. Default to 1.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaxVersions() {
        return null;
    }

    /**
     * Property reservedThroughput: The initial reserved read/write throughput setting of the table to be created, the reserved read throughput and reserved write throughput of any table cannot exceed 5000.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getReservedThroughput() {
        return null;
    }

    /**
     * Property secondaryIndices: The secondary indices of the table.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecondaryIndices() {
        return null;
    }

    /**
     * Property timeToLive: The retention time of data stored in this table (unit: second).
     * <p>
     * The value maximum is 2147483647 and -1 means never expired. Default to -1.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTimeToLive() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link TableProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link TableProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<TableProps> {
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
         * Sets the value of {@link TableProps#getInstanceName}
         * @param instanceName Property instanceName: The name of the OTS instance in which table will locate. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceName(java.lang.String instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link TableProps#getInstanceName}
         * @param instanceName Property instanceName: The name of the OTS instance in which table will locate. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceName(com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link TableProps#getPrimaryKey}
         * @param primaryKey Property primaryKey: It describes the attribute value of primary key. This parameter is required.
         *                   The number of primary_key should not be less than one and not be more than four.
         * @return {@code this}
         */
        public Builder primaryKey(com.aliyun.ros.cdk.core.IResolvable primaryKey) {
            this.primaryKey = primaryKey;
            return this;
        }

        /**
         * Sets the value of {@link TableProps#getPrimaryKey}
         * @param primaryKey Property primaryKey: It describes the attribute value of primary key. This parameter is required.
         *                   The number of primary_key should not be less than one and not be more than four.
         * @return {@code this}
         */
        public Builder primaryKey(java.util.List<? extends java.lang.Object> primaryKey) {
            this.primaryKey = primaryKey;
            return this;
        }

        /**
         * Sets the value of {@link TableProps#getTableName}
         * @param tableName Property tableName: The table name of the OTS instance. This parameter is required.
         * @return {@code this}
         */
        public Builder tableName(java.lang.String tableName) {
            this.tableName = tableName;
            return this;
        }

        /**
         * Sets the value of {@link TableProps#getTableName}
         * @param tableName Property tableName: The table name of the OTS instance. This parameter is required.
         * @return {@code this}
         */
        public Builder tableName(com.aliyun.ros.cdk.core.IResolvable tableName) {
            this.tableName = tableName;
            return this;
        }

        /**
         * Sets the value of {@link TableProps#getColumns}
         * @param columns Property columns: Attribute column for table store.
         * @return {@code this}
         */
        public Builder columns(com.aliyun.ros.cdk.core.IResolvable columns) {
            this.columns = columns;
            return this;
        }

        /**
         * Sets the value of {@link TableProps#getColumns}
         * @param columns Property columns: Attribute column for table store.
         * @return {@code this}
         */
        public Builder columns(java.util.List<? extends java.lang.Object> columns) {
            this.columns = columns;
            return this;
        }

        /**
         * Sets the value of {@link TableProps#getDeviationCellVersionInSec}
         * @param deviationCellVersionInSec Property deviationCellVersionInSec: Maximum version deviation.
         *                                  The purpose is mainly to prohibit writing and expected large data, such as setting the deviation_cell_version_in_sec to 1000, and if the current timestamp is 10000, the timestamp range allowed to be written is [10000 - 1000, 10000 + 1000]. The valid value is 1-9223372036854775807. Defaults to 86400.
         * @return {@code this}
         */
        public Builder deviationCellVersionInSec(java.lang.Number deviationCellVersionInSec) {
            this.deviationCellVersionInSec = deviationCellVersionInSec;
            return this;
        }

        /**
         * Sets the value of {@link TableProps#getDeviationCellVersionInSec}
         * @param deviationCellVersionInSec Property deviationCellVersionInSec: Maximum version deviation.
         *                                  The purpose is mainly to prohibit writing and expected large data, such as setting the deviation_cell_version_in_sec to 1000, and if the current timestamp is 10000, the timestamp range allowed to be written is [10000 - 1000, 10000 + 1000]. The valid value is 1-9223372036854775807. Defaults to 86400.
         * @return {@code this}
         */
        public Builder deviationCellVersionInSec(com.aliyun.ros.cdk.core.IResolvable deviationCellVersionInSec) {
            this.deviationCellVersionInSec = deviationCellVersionInSec;
            return this;
        }

        /**
         * Sets the value of {@link TableProps#getMaxVersions}
         * @param maxVersions Property maxVersions: The maximum number of versions stored in this table.
         *                    The valid value is 1-2147483647. Default to 1.
         * @return {@code this}
         */
        public Builder maxVersions(java.lang.Number maxVersions) {
            this.maxVersions = maxVersions;
            return this;
        }

        /**
         * Sets the value of {@link TableProps#getMaxVersions}
         * @param maxVersions Property maxVersions: The maximum number of versions stored in this table.
         *                    The valid value is 1-2147483647. Default to 1.
         * @return {@code this}
         */
        public Builder maxVersions(com.aliyun.ros.cdk.core.IResolvable maxVersions) {
            this.maxVersions = maxVersions;
            return this;
        }

        /**
         * Sets the value of {@link TableProps#getReservedThroughput}
         * @param reservedThroughput Property reservedThroughput: The initial reserved read/write throughput setting of the table to be created, the reserved read throughput and reserved write throughput of any table cannot exceed 5000.
         * @return {@code this}
         */
        public Builder reservedThroughput(com.aliyun.ros.cdk.core.IResolvable reservedThroughput) {
            this.reservedThroughput = reservedThroughput;
            return this;
        }

        /**
         * Sets the value of {@link TableProps#getReservedThroughput}
         * @param reservedThroughput Property reservedThroughput: The initial reserved read/write throughput setting of the table to be created, the reserved read throughput and reserved write throughput of any table cannot exceed 5000.
         * @return {@code this}
         */
        public Builder reservedThroughput(com.aliyun.ros.cdk.ots.RosTable.ReservedThroughputProperty reservedThroughput) {
            this.reservedThroughput = reservedThroughput;
            return this;
        }

        /**
         * Sets the value of {@link TableProps#getSecondaryIndices}
         * @param secondaryIndices Property secondaryIndices: The secondary indices of the table.
         * @return {@code this}
         */
        public Builder secondaryIndices(com.aliyun.ros.cdk.core.IResolvable secondaryIndices) {
            this.secondaryIndices = secondaryIndices;
            return this;
        }

        /**
         * Sets the value of {@link TableProps#getSecondaryIndices}
         * @param secondaryIndices Property secondaryIndices: The secondary indices of the table.
         * @return {@code this}
         */
        public Builder secondaryIndices(java.util.List<? extends java.lang.Object> secondaryIndices) {
            this.secondaryIndices = secondaryIndices;
            return this;
        }

        /**
         * Sets the value of {@link TableProps#getTimeToLive}
         * @param timeToLive Property timeToLive: The retention time of data stored in this table (unit: second).
         *                   The value maximum is 2147483647 and -1 means never expired. Default to -1.
         * @return {@code this}
         */
        public Builder timeToLive(java.lang.Number timeToLive) {
            this.timeToLive = timeToLive;
            return this;
        }

        /**
         * Sets the value of {@link TableProps#getTimeToLive}
         * @param timeToLive Property timeToLive: The retention time of data stored in this table (unit: second).
         *                   The value maximum is 2147483647 and -1 means never expired. Default to -1.
         * @return {@code this}
         */
        public Builder timeToLive(com.aliyun.ros.cdk.core.IResolvable timeToLive) {
            this.timeToLive = timeToLive;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link TableProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public TableProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link TableProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TableProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ots.TableProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            TableProps.Jsii$Proxy that = (TableProps.Jsii$Proxy) o;

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
