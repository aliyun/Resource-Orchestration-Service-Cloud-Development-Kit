package com.aliyun.ros.cdk.ots;

/**
 * A ROS resource type:  `ALIYUN::OTS::Table`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.192Z")
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
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Table(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ots.TableProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::OTS::Table`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     */
    public Table(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ots.TableProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTableName() {
        return software.amazon.jsii.Kernel.get(this, "attrTableName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ots.Table}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ots.Table> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
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
         * @return {@code this}
         * @param instanceName This parameter is required.
         */
        public Builder instanceName(final java.lang.String instanceName) {
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
         * @param maxVersions This parameter is required.
         */
        public Builder maxVersions(final java.lang.Number maxVersions) {
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
