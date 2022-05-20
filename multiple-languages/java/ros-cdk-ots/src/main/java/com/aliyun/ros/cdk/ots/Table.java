package com.aliyun.ros.cdk.ots;

/**
 * A ROS resource type:  `ALIYUN::OTS::Table`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.59.0 (build eb02c92)", date = "2022-05-20T02:42:02.966Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ots.$Module.class, fqn = "@alicloud/ros-cdk-ots.Table")
public class Table extends com.aliyun.ros.cdk.core.Resource {

    protected Table(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Table(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::OTS::Table`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Table(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ots.TableProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::OTS::Table`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Table(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ots.TableProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute TableName: Table name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTableName() {
        return software.amazon.jsii.Kernel.get(this, "attrTableName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ots.Table}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ots.Table> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.ots.TableProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ots.TableProps.Builder();
        }

        /**
         * Property instanceName: The name of the OTS instance in which table will locate.
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: The name of the OTS instance in which table will locate. This parameter is required.
         */
        public Builder instanceName(final java.lang.String instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }
        /**
         * Property instanceName: The name of the OTS instance in which table will locate.
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: The name of the OTS instance in which table will locate. This parameter is required.
         */
        public Builder instanceName(final com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }

        /**
         * Property primaryKey: It describes the attribute value of primary key.
         * <p>
         * The number of primary_key should not be less than one and not be more than four.
         * <p>
         * @return {@code this}
         * @param primaryKey Property primaryKey: It describes the attribute value of primary key. This parameter is required.
         */
        public Builder primaryKey(final com.aliyun.ros.cdk.core.IResolvable primaryKey) {
            this.props.primaryKey(primaryKey);
            return this;
        }
        /**
         * Property primaryKey: It describes the attribute value of primary key.
         * <p>
         * The number of primary_key should not be less than one and not be more than four.
         * <p>
         * @return {@code this}
         * @param primaryKey Property primaryKey: It describes the attribute value of primary key. This parameter is required.
         */
        public Builder primaryKey(final java.util.List<? extends java.lang.Object> primaryKey) {
            this.props.primaryKey(primaryKey);
            return this;
        }

        /**
         * Property tableName: The table name of the OTS instance.
         * <p>
         * @return {@code this}
         * @param tableName Property tableName: The table name of the OTS instance. This parameter is required.
         */
        public Builder tableName(final java.lang.String tableName) {
            this.props.tableName(tableName);
            return this;
        }
        /**
         * Property tableName: The table name of the OTS instance.
         * <p>
         * @return {@code this}
         * @param tableName Property tableName: The table name of the OTS instance. This parameter is required.
         */
        public Builder tableName(final com.aliyun.ros.cdk.core.IResolvable tableName) {
            this.props.tableName(tableName);
            return this;
        }

        /**
         * Property columns: Attribute column for table store.
         * <p>
         * @return {@code this}
         * @param columns Property columns: Attribute column for table store. This parameter is required.
         */
        public Builder columns(final com.aliyun.ros.cdk.core.IResolvable columns) {
            this.props.columns(columns);
            return this;
        }
        /**
         * Property columns: Attribute column for table store.
         * <p>
         * @return {@code this}
         * @param columns Property columns: Attribute column for table store. This parameter is required.
         */
        public Builder columns(final java.util.List<? extends java.lang.Object> columns) {
            this.props.columns(columns);
            return this;
        }

        /**
         * Property deviationCellVersionInSec: Maximum version deviation.
         * <p>
         * The purpose is mainly to prohibit writing and expected large data, such as setting the deviation_cell_version_in_sec to 1000, and if the current timestamp is 10000, the timestamp range allowed to be written is [10000 - 1000, 10000 + 1000]. The valid value is 1-9223372036854775807. Defaults to 86400.
         * <p>
         * @return {@code this}
         * @param deviationCellVersionInSec Property deviationCellVersionInSec: Maximum version deviation. This parameter is required.
         */
        public Builder deviationCellVersionInSec(final java.lang.Number deviationCellVersionInSec) {
            this.props.deviationCellVersionInSec(deviationCellVersionInSec);
            return this;
        }
        /**
         * Property deviationCellVersionInSec: Maximum version deviation.
         * <p>
         * The purpose is mainly to prohibit writing and expected large data, such as setting the deviation_cell_version_in_sec to 1000, and if the current timestamp is 10000, the timestamp range allowed to be written is [10000 - 1000, 10000 + 1000]. The valid value is 1-9223372036854775807. Defaults to 86400.
         * <p>
         * @return {@code this}
         * @param deviationCellVersionInSec Property deviationCellVersionInSec: Maximum version deviation. This parameter is required.
         */
        public Builder deviationCellVersionInSec(final com.aliyun.ros.cdk.core.IResolvable deviationCellVersionInSec) {
            this.props.deviationCellVersionInSec(deviationCellVersionInSec);
            return this;
        }

        /**
         * Property maxVersions: The maximum number of versions stored in this table.
         * <p>
         * The valid value is 1-2147483647. Default to 1.
         * <p>
         * @return {@code this}
         * @param maxVersions Property maxVersions: The maximum number of versions stored in this table. This parameter is required.
         */
        public Builder maxVersions(final java.lang.Number maxVersions) {
            this.props.maxVersions(maxVersions);
            return this;
        }
        /**
         * Property maxVersions: The maximum number of versions stored in this table.
         * <p>
         * The valid value is 1-2147483647. Default to 1.
         * <p>
         * @return {@code this}
         * @param maxVersions Property maxVersions: The maximum number of versions stored in this table. This parameter is required.
         */
        public Builder maxVersions(final com.aliyun.ros.cdk.core.IResolvable maxVersions) {
            this.props.maxVersions(maxVersions);
            return this;
        }

        /**
         * Property reservedThroughput: The initial reserved read/write throughput setting of the table to be created, the reserved read throughput and reserved write throughput of any table cannot exceed 5000.
         * <p>
         * @return {@code this}
         * @param reservedThroughput Property reservedThroughput: The initial reserved read/write throughput setting of the table to be created, the reserved read throughput and reserved write throughput of any table cannot exceed 5000. This parameter is required.
         */
        public Builder reservedThroughput(final com.aliyun.ros.cdk.core.IResolvable reservedThroughput) {
            this.props.reservedThroughput(reservedThroughput);
            return this;
        }
        /**
         * Property reservedThroughput: The initial reserved read/write throughput setting of the table to be created, the reserved read throughput and reserved write throughput of any table cannot exceed 5000.
         * <p>
         * @return {@code this}
         * @param reservedThroughput Property reservedThroughput: The initial reserved read/write throughput setting of the table to be created, the reserved read throughput and reserved write throughput of any table cannot exceed 5000. This parameter is required.
         */
        public Builder reservedThroughput(final com.aliyun.ros.cdk.ots.RosTable.ReservedThroughputProperty reservedThroughput) {
            this.props.reservedThroughput(reservedThroughput);
            return this;
        }

        /**
         * Property secondaryIndices: The secondary indices of the table.
         * <p>
         * @return {@code this}
         * @param secondaryIndices Property secondaryIndices: The secondary indices of the table. This parameter is required.
         */
        public Builder secondaryIndices(final com.aliyun.ros.cdk.core.IResolvable secondaryIndices) {
            this.props.secondaryIndices(secondaryIndices);
            return this;
        }
        /**
         * Property secondaryIndices: The secondary indices of the table.
         * <p>
         * @return {@code this}
         * @param secondaryIndices Property secondaryIndices: The secondary indices of the table. This parameter is required.
         */
        public Builder secondaryIndices(final java.util.List<? extends java.lang.Object> secondaryIndices) {
            this.props.secondaryIndices(secondaryIndices);
            return this;
        }

        /**
         * Property timeToLive: The retention time of data stored in this table (unit: second).
         * <p>
         * The value maximum is 2147483647 and -1 means never expired. Default to -1.
         * <p>
         * @return {@code this}
         * @param timeToLive Property timeToLive: The retention time of data stored in this table (unit: second). This parameter is required.
         */
        public Builder timeToLive(final java.lang.Number timeToLive) {
            this.props.timeToLive(timeToLive);
            return this;
        }
        /**
         * Property timeToLive: The retention time of data stored in this table (unit: second).
         * <p>
         * The value maximum is 2147483647 and -1 means never expired. Default to -1.
         * <p>
         * @return {@code this}
         * @param timeToLive Property timeToLive: The retention time of data stored in this table (unit: second). This parameter is required.
         */
        public Builder timeToLive(final com.aliyun.ros.cdk.core.IResolvable timeToLive) {
            this.props.timeToLive(timeToLive);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ots.Table}.
         */
        @Override
        public com.aliyun.ros.cdk.ots.Table build() {
            return new com.aliyun.ros.cdk.ots.Table(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
