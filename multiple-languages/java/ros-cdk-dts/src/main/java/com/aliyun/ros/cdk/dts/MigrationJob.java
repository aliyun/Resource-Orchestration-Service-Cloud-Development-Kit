package com.aliyun.ros.cdk.dts;

/**
 * A ROS resource type:  `ALIYUN::DTS::MigrationJob`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.70.0 (build 03c2f6f)", date = "2022-11-04T06:18:41.910Z")
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
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public MigrationJob(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dts.MigrationJobProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::DTS::MigrationJob`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public MigrationJob(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dts.MigrationJobProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute MigrationJobId: Migration tasks task ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMigrationJobId() {
        return software.amazon.jsii.Kernel.get(this, "attrMigrationJobId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.dts.MigrationJob}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dts.MigrationJob> {
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
        private final com.aliyun.ros.cdk.dts.MigrationJobProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dts.MigrationJobProps.Builder();
        }

        /**
         * Property migrationJobClass: Migrating instance specifications, which can be: small, medium, large and so on.
         * <p>
         * Various specifications of the reference data migration test performance specifications
         * <p>
         * @return {@code this}
         * @param migrationJobClass Property migrationJobClass: Migrating instance specifications, which can be: small, medium, large and so on. This parameter is required.
         */
        public Builder migrationJobClass(final java.lang.String migrationJobClass) {
            this.props.migrationJobClass(migrationJobClass);
            return this;
        }
        /**
         * Property migrationJobClass: Migrating instance specifications, which can be: small, medium, large and so on.
         * <p>
         * Various specifications of the reference data migration test performance specifications
         * <p>
         * @return {@code this}
         * @param migrationJobClass Property migrationJobClass: Migrating instance specifications, which can be: small, medium, large and so on. This parameter is required.
         */
        public Builder migrationJobClass(final com.aliyun.ros.cdk.core.IResolvable migrationJobClass) {
            this.props.migrationJobClass(migrationJobClass);
            return this;
        }

        /**
         * Property destinationEndpoint: Migration target configuration.
         * <p>
         * @return {@code this}
         * @param destinationEndpoint Property destinationEndpoint: Migration target configuration. This parameter is required.
         */
        public Builder destinationEndpoint(final com.aliyun.ros.cdk.core.IResolvable destinationEndpoint) {
            this.props.destinationEndpoint(destinationEndpoint);
            return this;
        }
        /**
         * Property destinationEndpoint: Migration target configuration.
         * <p>
         * @return {@code this}
         * @param destinationEndpoint Property destinationEndpoint: Migration target configuration. This parameter is required.
         */
        public Builder destinationEndpoint(final com.aliyun.ros.cdk.dts.RosMigrationJob.DestinationEndpointProperty destinationEndpoint) {
            this.props.destinationEndpoint(destinationEndpoint);
            return this;
        }

        /**
         * Property migrationJobName: Migrating job name.
         * <p>
         * @return {@code this}
         * @param migrationJobName Property migrationJobName: Migrating job name. This parameter is required.
         */
        public Builder migrationJobName(final java.lang.String migrationJobName) {
            this.props.migrationJobName(migrationJobName);
            return this;
        }
        /**
         * Property migrationJobName: Migrating job name.
         * <p>
         * @return {@code this}
         * @param migrationJobName Property migrationJobName: Migrating job name. This parameter is required.
         */
        public Builder migrationJobName(final com.aliyun.ros.cdk.core.IResolvable migrationJobName) {
            this.props.migrationJobName(migrationJobName);
            return this;
        }

        /**
         * Property migrationMode: Migration mode.
         * <p>
         * @return {@code this}
         * @param migrationMode Property migrationMode: Migration mode. This parameter is required.
         */
        public Builder migrationMode(final com.aliyun.ros.cdk.core.IResolvable migrationMode) {
            this.props.migrationMode(migrationMode);
            return this;
        }
        /**
         * Property migrationMode: Migration mode.
         * <p>
         * @return {@code this}
         * @param migrationMode Property migrationMode: Migration mode. This parameter is required.
         */
        public Builder migrationMode(final com.aliyun.ros.cdk.dts.RosMigrationJob.MigrationModeProperty migrationMode) {
            this.props.migrationMode(migrationMode);
            return this;
        }

        /**
         * Property migrationObject: Objects that need to be migrated.
         * <p>
         * @return {@code this}
         * @param migrationObject Property migrationObject: Objects that need to be migrated. This parameter is required.
         */
        public Builder migrationObject(final com.aliyun.ros.cdk.core.IResolvable migrationObject) {
            this.props.migrationObject(migrationObject);
            return this;
        }
        /**
         * Property migrationObject: Objects that need to be migrated.
         * <p>
         * @return {@code this}
         * @param migrationObject Property migrationObject: Objects that need to be migrated. This parameter is required.
         */
        public Builder migrationObject(final java.util.List<? extends java.lang.Object> migrationObject) {
            this.props.migrationObject(migrationObject);
            return this;
        }

        /**
         * Property sourceEndpoint: Migration source configuration.
         * <p>
         * @return {@code this}
         * @param sourceEndpoint Property sourceEndpoint: Migration source configuration. This parameter is required.
         */
        public Builder sourceEndpoint(final com.aliyun.ros.cdk.core.IResolvable sourceEndpoint) {
            this.props.sourceEndpoint(sourceEndpoint);
            return this;
        }
        /**
         * Property sourceEndpoint: Migration source configuration.
         * <p>
         * @return {@code this}
         * @param sourceEndpoint Property sourceEndpoint: Migration source configuration. This parameter is required.
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
