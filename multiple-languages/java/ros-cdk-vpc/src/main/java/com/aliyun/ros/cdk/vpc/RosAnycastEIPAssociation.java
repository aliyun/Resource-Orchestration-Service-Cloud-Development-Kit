package com.aliyun.ros.cdk.vpc;

/**
 * A ROS template type:  <code>ALIYUN::VPC::AnycastEIPAssociation</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T10:01:48.221Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosAnycastEIPAssociation")
public class RosAnycastEIPAssociation extends com.aliyun.ros.cdk.core.RosResource {

    protected RosAnycastEIPAssociation(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosAnycastEIPAssociation(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.vpc.RosAnycastEIPAssociation.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new <code>ALIYUN::VPC::AnycastEIPAssociation</code>.
     * <p>
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosAnycastEIPAssociation(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.RosAnycastEIPAssociationProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAnycastId() {
        return software.amazon.jsii.Kernel.get(this, "attrAnycastId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBindInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrBindInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBindInstanceRegionId() {
        return software.amazon.jsii.Kernel.get(this, "attrBindInstanceRegionId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBindInstanceType() {
        return software.amazon.jsii.Kernel.get(this, "attrBindInstanceType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAnycastId() {
        return software.amazon.jsii.Kernel.get(this, "anycastId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAnycastId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "anycastId", java.util.Objects.requireNonNull(value, "anycastId is required"));
    }

    /**
     */
    public void setAnycastId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "anycastId", java.util.Objects.requireNonNull(value, "anycastId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getBindInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "bindInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBindInstanceId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "bindInstanceId", java.util.Objects.requireNonNull(value, "bindInstanceId is required"));
    }

    /**
     */
    public void setBindInstanceId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "bindInstanceId", java.util.Objects.requireNonNull(value, "bindInstanceId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getBindInstanceRegionId() {
        return software.amazon.jsii.Kernel.get(this, "bindInstanceRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBindInstanceRegionId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "bindInstanceRegionId", java.util.Objects.requireNonNull(value, "bindInstanceRegionId is required"));
    }

    /**
     */
    public void setBindInstanceRegionId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "bindInstanceRegionId", java.util.Objects.requireNonNull(value, "bindInstanceRegionId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getBindInstanceType() {
        return software.amazon.jsii.Kernel.get(this, "bindInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBindInstanceType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "bindInstanceType", java.util.Objects.requireNonNull(value, "bindInstanceType is required"));
    }

    /**
     */
    public void setBindInstanceType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "bindInstanceType", java.util.Objects.requireNonNull(value, "bindInstanceType is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.RosAnycastEIPAssociation}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.RosAnycastEIPAssociation> {
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
        private final com.aliyun.ros.cdk.vpc.RosAnycastEIPAssociationProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.RosAnycastEIPAssociationProps.Builder();
        }

        /**
         * @return {@code this}
         * @param anycastId This parameter is required.
         */
        public Builder anycastId(final java.lang.String anycastId) {
            this.props.anycastId(anycastId);
            return this;
        }
        /**
         * @return {@code this}
         * @param anycastId This parameter is required.
         */
        public Builder anycastId(final com.aliyun.ros.cdk.core.IResolvable anycastId) {
            this.props.anycastId(anycastId);
            return this;
        }

        /**
         * @return {@code this}
         * @param bindInstanceId This parameter is required.
         */
        public Builder bindInstanceId(final java.lang.String bindInstanceId) {
            this.props.bindInstanceId(bindInstanceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param bindInstanceId This parameter is required.
         */
        public Builder bindInstanceId(final com.aliyun.ros.cdk.core.IResolvable bindInstanceId) {
            this.props.bindInstanceId(bindInstanceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param bindInstanceRegionId This parameter is required.
         */
        public Builder bindInstanceRegionId(final java.lang.String bindInstanceRegionId) {
            this.props.bindInstanceRegionId(bindInstanceRegionId);
            return this;
        }
        /**
         * @return {@code this}
         * @param bindInstanceRegionId This parameter is required.
         */
        public Builder bindInstanceRegionId(final com.aliyun.ros.cdk.core.IResolvable bindInstanceRegionId) {
            this.props.bindInstanceRegionId(bindInstanceRegionId);
            return this;
        }

        /**
         * @return {@code this}
         * @param bindInstanceType This parameter is required.
         */
        public Builder bindInstanceType(final java.lang.String bindInstanceType) {
            this.props.bindInstanceType(bindInstanceType);
            return this;
        }
        /**
         * @return {@code this}
         * @param bindInstanceType This parameter is required.
         */
        public Builder bindInstanceType(final com.aliyun.ros.cdk.core.IResolvable bindInstanceType) {
            this.props.bindInstanceType(bindInstanceType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.RosAnycastEIPAssociation}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.RosAnycastEIPAssociation build() {
            return new com.aliyun.ros.cdk.vpc.RosAnycastEIPAssociation(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
