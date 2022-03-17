package com.aliyun.ros.cdk.rds;

/**
 * A ROS template type:  `ALIYUN::RDS::ADInfo`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-17T08:21:16.232Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rds.$Module.class, fqn = "@alicloud/ros-cdk-rds.RosADInfo")
public class RosADInfo extends com.aliyun.ros.cdk.core.RosResource {

    protected RosADInfo(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosADInfo(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.rds.RosADInfo.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::RDS::ADInfo`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosADInfo(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rds.RosADInfoProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAddns() {
        return software.amazon.jsii.Kernel.get(this, "attrAddns", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAdAccountName() {
        return software.amazon.jsii.Kernel.get(this, "adAccountName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAdAccountName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "adAccountName", java.util.Objects.requireNonNull(value, "adAccountName is required"));
    }

    /**
     */
    public void setAdAccountName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "adAccountName", java.util.Objects.requireNonNull(value, "adAccountName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAddns() {
        return software.amazon.jsii.Kernel.get(this, "addns", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAddns(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "addns", java.util.Objects.requireNonNull(value, "addns is required"));
    }

    /**
     */
    public void setAddns(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "addns", java.util.Objects.requireNonNull(value, "addns is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAdPassword() {
        return software.amazon.jsii.Kernel.get(this, "adPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAdPassword(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "adPassword", java.util.Objects.requireNonNull(value, "adPassword is required"));
    }

    /**
     */
    public void setAdPassword(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "adPassword", java.util.Objects.requireNonNull(value, "adPassword is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAdServerIpAddress() {
        return software.amazon.jsii.Kernel.get(this, "adServerIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAdServerIpAddress(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "adServerIpAddress", java.util.Objects.requireNonNull(value, "adServerIpAddress is required"));
    }

    /**
     */
    public void setAdServerIpAddress(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "adServerIpAddress", java.util.Objects.requireNonNull(value, "adServerIpAddress is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "dbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDbInstanceId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceId", java.util.Objects.requireNonNull(value, "dbInstanceId is required"));
    }

    /**
     */
    public void setDbInstanceId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceId", java.util.Objects.requireNonNull(value, "dbInstanceId is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.rds.RosADInfo}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.rds.RosADInfo> {
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
        private final com.aliyun.ros.cdk.rds.RosADInfoProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.rds.RosADInfoProps.Builder();
        }

        /**
         * @return {@code this}
         * @param adAccountName This parameter is required.
         */
        public Builder adAccountName(final java.lang.String adAccountName) {
            this.props.adAccountName(adAccountName);
            return this;
        }
        /**
         * @return {@code this}
         * @param adAccountName This parameter is required.
         */
        public Builder adAccountName(final com.aliyun.ros.cdk.core.IResolvable adAccountName) {
            this.props.adAccountName(adAccountName);
            return this;
        }

        /**
         * @return {@code this}
         * @param addns This parameter is required.
         */
        public Builder addns(final java.lang.String addns) {
            this.props.addns(addns);
            return this;
        }
        /**
         * @return {@code this}
         * @param addns This parameter is required.
         */
        public Builder addns(final com.aliyun.ros.cdk.core.IResolvable addns) {
            this.props.addns(addns);
            return this;
        }

        /**
         * @return {@code this}
         * @param adPassword This parameter is required.
         */
        public Builder adPassword(final java.lang.String adPassword) {
            this.props.adPassword(adPassword);
            return this;
        }
        /**
         * @return {@code this}
         * @param adPassword This parameter is required.
         */
        public Builder adPassword(final com.aliyun.ros.cdk.core.IResolvable adPassword) {
            this.props.adPassword(adPassword);
            return this;
        }

        /**
         * @return {@code this}
         * @param adServerIpAddress This parameter is required.
         */
        public Builder adServerIpAddress(final java.lang.String adServerIpAddress) {
            this.props.adServerIpAddress(adServerIpAddress);
            return this;
        }
        /**
         * @return {@code this}
         * @param adServerIpAddress This parameter is required.
         */
        public Builder adServerIpAddress(final com.aliyun.ros.cdk.core.IResolvable adServerIpAddress) {
            this.props.adServerIpAddress(adServerIpAddress);
            return this;
        }

        /**
         * @return {@code this}
         * @param dbInstanceId This parameter is required.
         */
        public Builder dbInstanceId(final java.lang.String dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param dbInstanceId This parameter is required.
         */
        public Builder dbInstanceId(final com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.rds.RosADInfo}.
         */
        @Override
        public com.aliyun.ros.cdk.rds.RosADInfo build() {
            return new com.aliyun.ros.cdk.rds.RosADInfo(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
