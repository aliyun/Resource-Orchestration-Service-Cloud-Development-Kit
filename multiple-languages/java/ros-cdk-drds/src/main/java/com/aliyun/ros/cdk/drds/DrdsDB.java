package com.aliyun.ros.cdk.drds;

/**
 * A ROS resource type:  `ALIYUN::DRDS::DrdsDB`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-02-04T07:29:35.456Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.drds.$Module.class, fqn = "@alicloud/ros-cdk-drds.DrdsDB")
public class DrdsDB extends com.aliyun.ros.cdk.core.Resource {

    protected DrdsDB(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DrdsDB(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::DRDS::DrdsDB`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public DrdsDB(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.drds.DrdsDBProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::DRDS::DrdsDB`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     */
    public DrdsDB(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.drds.DrdsDBProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.drds.DrdsDB}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.drds.DrdsDB> {
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
        private final com.aliyun.ros.cdk.drds.DrdsDBProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.drds.DrdsDBProps.Builder();
        }

        /**
         * @return {@code this}
         * @param drdsInstanceId This parameter is required.
         */
        public Builder drdsInstanceId(final java.lang.String drdsInstanceId) {
            this.props.drdsInstanceId(drdsInstanceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param accountName This parameter is required.
         */
        public Builder accountName(final java.lang.String accountName) {
            this.props.accountName(accountName);
            return this;
        }

        /**
         * @return {@code this}
         * @param dbInstanceIsCreating This parameter is required.
         */
        public Builder dbInstanceIsCreating(final java.lang.Boolean dbInstanceIsCreating) {
            this.props.dbInstanceIsCreating(dbInstanceIsCreating);
            return this;
        }
        /**
         * @return {@code this}
         * @param dbInstanceIsCreating This parameter is required.
         */
        public Builder dbInstanceIsCreating(final com.aliyun.ros.cdk.core.IResolvable dbInstanceIsCreating) {
            this.props.dbInstanceIsCreating(dbInstanceIsCreating);
            return this;
        }

        /**
         * @return {@code this}
         * @param dbInstType This parameter is required.
         */
        public Builder dbInstType(final java.lang.String dbInstType) {
            this.props.dbInstType(dbInstType);
            return this;
        }

        /**
         * @return {@code this}
         * @param dbName This parameter is required.
         */
        public Builder dbName(final java.lang.String dbName) {
            this.props.dbName(dbName);
            return this;
        }

        /**
         * @return {@code this}
         * @param encode This parameter is required.
         */
        public Builder encode(final java.lang.String encode) {
            this.props.encode(encode);
            return this;
        }

        /**
         * @return {@code this}
         * @param instDbName This parameter is required.
         */
        public Builder instDbName(final com.aliyun.ros.cdk.core.IResolvable instDbName) {
            this.props.instDbName(instDbName);
            return this;
        }
        /**
         * @return {@code this}
         * @param instDbName This parameter is required.
         */
        public Builder instDbName(final java.util.List<? extends java.lang.Object> instDbName) {
            this.props.instDbName(instDbName);
            return this;
        }

        /**
         * @return {@code this}
         * @param password This parameter is required.
         */
        public Builder password(final java.lang.String password) {
            this.props.password(password);
            return this;
        }

        /**
         * @return {@code this}
         * @param rdsInstance This parameter is required.
         */
        public Builder rdsInstance(final java.util.List<java.lang.String> rdsInstance) {
            this.props.rdsInstance(rdsInstance);
            return this;
        }

        /**
         * @return {@code this}
         * @param type This parameter is required.
         */
        public Builder type(final java.lang.String type) {
            this.props.type(type);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.drds.DrdsDB}.
         */
        @Override
        public com.aliyun.ros.cdk.drds.DrdsDB build() {
            return new com.aliyun.ros.cdk.drds.DrdsDB(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
