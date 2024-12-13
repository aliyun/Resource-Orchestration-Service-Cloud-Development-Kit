package com.aliyun.ros.cdk.vpc;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::VPC::AnycastEIPAssociation</code>, which is used to associate an Anycast elastic IP address (Anycast EIP) with a cloud resource in a specific region.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-12-13T06:45:12.682Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.AnycastEIPAssociation")
public class AnycastEIPAssociation extends com.aliyun.ros.cdk.core.Resource {

    protected AnycastEIPAssociation(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected AnycastEIPAssociation(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public AnycastEIPAssociation(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.AnycastEIPAssociationProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public AnycastEIPAssociation(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.AnycastEIPAssociationProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AnycastId: Anycast EIP instance ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAnycastId() {
        return software.amazon.jsii.Kernel.get(this, "attrAnycastId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute BindInstanceId: The ID of the cloud resource instance to be bound.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBindInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrBindInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute BindInstanceRegionId: The region ID of the cloud resource instance to be bound.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBindInstanceRegionId() {
        return software.amazon.jsii.Kernel.get(this, "attrBindInstanceRegionId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute BindInstanceType: The cloud resource instance type to be bound.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBindInstanceType() {
        return software.amazon.jsii.Kernel.get(this, "attrBindInstanceType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.AnycastEIPAssociationProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.AnycastEIPAssociationProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.AnycastEIPAssociationProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.AnycastEIPAssociation}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.AnycastEIPAssociation> {
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
        private final com.aliyun.ros.cdk.vpc.AnycastEIPAssociationProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.AnycastEIPAssociationProps.Builder();
        }

        /**
         * Property anycastId: Anycast EIP instance ID.
         * <p>
         * @return {@code this}
         * @param anycastId Property anycastId: Anycast EIP instance ID. This parameter is required.
         */
        public Builder anycastId(final java.lang.String anycastId) {
            this.props.anycastId(anycastId);
            return this;
        }
        /**
         * Property anycastId: Anycast EIP instance ID.
         * <p>
         * @return {@code this}
         * @param anycastId Property anycastId: Anycast EIP instance ID. This parameter is required.
         */
        public Builder anycastId(final com.aliyun.ros.cdk.core.IResolvable anycastId) {
            this.props.anycastId(anycastId);
            return this;
        }

        /**
         * Property bindInstanceId: The ID of the cloud resource instance to be bound.
         * <p>
         * @return {@code this}
         * @param bindInstanceId Property bindInstanceId: The ID of the cloud resource instance to be bound. This parameter is required.
         */
        public Builder bindInstanceId(final java.lang.String bindInstanceId) {
            this.props.bindInstanceId(bindInstanceId);
            return this;
        }
        /**
         * Property bindInstanceId: The ID of the cloud resource instance to be bound.
         * <p>
         * @return {@code this}
         * @param bindInstanceId Property bindInstanceId: The ID of the cloud resource instance to be bound. This parameter is required.
         */
        public Builder bindInstanceId(final com.aliyun.ros.cdk.core.IResolvable bindInstanceId) {
            this.props.bindInstanceId(bindInstanceId);
            return this;
        }

        /**
         * Property bindInstanceRegionId: The region ID of the cloud resource instance to be bound.
         * <p>
         * @return {@code this}
         * @param bindInstanceRegionId Property bindInstanceRegionId: The region ID of the cloud resource instance to be bound. This parameter is required.
         */
        public Builder bindInstanceRegionId(final java.lang.String bindInstanceRegionId) {
            this.props.bindInstanceRegionId(bindInstanceRegionId);
            return this;
        }
        /**
         * Property bindInstanceRegionId: The region ID of the cloud resource instance to be bound.
         * <p>
         * @return {@code this}
         * @param bindInstanceRegionId Property bindInstanceRegionId: The region ID of the cloud resource instance to be bound. This parameter is required.
         */
        public Builder bindInstanceRegionId(final com.aliyun.ros.cdk.core.IResolvable bindInstanceRegionId) {
            this.props.bindInstanceRegionId(bindInstanceRegionId);
            return this;
        }

        /**
         * Property bindInstanceType: The cloud resource instance type to be bound.
         * <p>
         * Valid value: SlbInstance, SLB instance of private network type.
         * <p>
         * @return {@code this}
         * @param bindInstanceType Property bindInstanceType: The cloud resource instance type to be bound. This parameter is required.
         */
        public Builder bindInstanceType(final java.lang.String bindInstanceType) {
            this.props.bindInstanceType(bindInstanceType);
            return this;
        }
        /**
         * Property bindInstanceType: The cloud resource instance type to be bound.
         * <p>
         * Valid value: SlbInstance, SLB instance of private network type.
         * <p>
         * @return {@code this}
         * @param bindInstanceType Property bindInstanceType: The cloud resource instance type to be bound. This parameter is required.
         */
        public Builder bindInstanceType(final com.aliyun.ros.cdk.core.IResolvable bindInstanceType) {
            this.props.bindInstanceType(bindInstanceType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.AnycastEIPAssociation}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.AnycastEIPAssociation build() {
            return new com.aliyun.ros.cdk.vpc.AnycastEIPAssociation(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
