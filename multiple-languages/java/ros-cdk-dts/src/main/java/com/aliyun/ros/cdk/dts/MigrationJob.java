package com.aliyun.ros.cdk.dts;

/**
 * A ROS resource type:  `ALIYUN::DTS::MigrationJob`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.555Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.MigrationJob")
public class MigrationJob extends com.aliyun.ros.cdk.core.Resource {

    protected MigrationJob(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected MigrationJob(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::DTS::MigrationJob`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public MigrationJob(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dts.MigrationJobProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::DTS::MigrationJob`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     */
    public MigrationJob(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dts.MigrationJobProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMigrationJobId() {
        return software.amazon.jsii.Kernel.get(this, "attrMigrationJobId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.dts.MigrationJob}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dts.MigrationJob> {
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
        private final com.aliyun.ros.cdk.dts.MigrationJobProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dts.MigrationJobProps.Builder();
        }

        /**
         * @return {@code this}
         * @param migrationJobClass This parameter is required.
         */
        public Builder migrationJobClass(final java.lang.String migrationJobClass) {
            this.props.migrationJobClass(migrationJobClass);
            return this;
        }

        /**
         * @return {@code this}
         * @param destinationEndpoint This parameter is required.
         */
        public Builder destinationEndpoint(final com.aliyun.ros.cdk.core.IResolvable destinationEndpoint) {
            this.props.destinationEndpoint(destinationEndpoint);
            return this;
        }
        /**
         * @return {@code this}
         * @param destinationEndpoint This parameter is required.
         */
        public Builder destinationEndpoint(final com.aliyun.ros.cdk.dts.RosMigrationJob.DestinationEndpointProperty destinationEndpoint) {
            this.props.destinationEndpoint(destinationEndpoint);
            return this;
        }

        /**
         * @return {@code this}
         * @param migrationJobName This parameter is required.
         */
        public Builder migrationJobName(final java.lang.String migrationJobName) {
            this.props.migrationJobName(migrationJobName);
            return this;
        }

        /**
         * @return {@code this}
         * @param migrationMode This parameter is required.
         */
        public Builder migrationMode(final com.aliyun.ros.cdk.core.IResolvable migrationMode) {
            this.props.migrationMode(migrationMode);
            return this;
        }
        /**
         * @return {@code this}
         * @param migrationMode This parameter is required.
         */
        public Builder migrationMode(final com.aliyun.ros.cdk.dts.RosMigrationJob.MigrationModeProperty migrationMode) {
            this.props.migrationMode(migrationMode);
            return this;
        }

        /**
         * @return {@code this}
         * @param migrationObject This parameter is required.
         */
        public Builder migrationObject(final com.aliyun.ros.cdk.core.IResolvable migrationObject) {
            this.props.migrationObject(migrationObject);
            return this;
        }
        /**
         * @return {@code this}
         * @param migrationObject This parameter is required.
         */
        public Builder migrationObject(final java.util.List<? extends java.lang.Object> migrationObject) {
            this.props.migrationObject(migrationObject);
            return this;
        }

        /**
         * @return {@code this}
         * @param sourceEndpoint This parameter is required.
         */
        public Builder sourceEndpoint(final com.aliyun.ros.cdk.core.IResolvable sourceEndpoint) {
            this.props.sourceEndpoint(sourceEndpoint);
            return this;
        }
        /**
         * @return {@code this}
         * @param sourceEndpoint This parameter is required.
         */
        public Builder sourceEndpoint(final com.aliyun.ros.cdk.dts.RosMigrationJob.SourceEndpointProperty sourceEndpoint) {
            this.props.sourceEndpoint(sourceEndpoint);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.dts.MigrationJob}.
         */
        @Override
        public com.aliyun.ros.cdk.dts.MigrationJob build() {
            return new com.aliyun.ros.cdk.dts.MigrationJob(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
