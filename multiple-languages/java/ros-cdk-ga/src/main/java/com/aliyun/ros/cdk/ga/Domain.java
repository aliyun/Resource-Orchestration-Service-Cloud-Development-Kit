package com.aliyun.ros.cdk.ga;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::GA::Domain</code>, which is used to create a domain name.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:07.097Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.Domain")
public class Domain extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ga.IDomain {

    protected Domain(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Domain(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Domain(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.DomainProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Domain(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.DomainProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AcceleratorIds: The IDs of GA instances.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAcceleratorIds() {
        return software.amazon.jsii.Kernel.get(this, "attrAcceleratorIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Domain: The accelerated domain name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomain() {
        return software.amazon.jsii.Kernel.get(this, "attrDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.DomainProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ga.DomainProps.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ga.Domain}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ga.Domain> {
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
        private final com.aliyun.ros.cdk.ga.DomainProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ga.DomainProps.Builder();
        }

        /**
         * Property acceleratorIds: The IDs of the GA instance to be disassociated.
         * <p>
         * You can specify up to 50 IDs.
         * <p>
         * @return {@code this}
         * @param acceleratorIds Property acceleratorIds: The IDs of the GA instance to be disassociated. This parameter is required.
         */
        public Builder acceleratorIds(final com.aliyun.ros.cdk.core.IResolvable acceleratorIds) {
            this.props.acceleratorIds(acceleratorIds);
            return this;
        }
        /**
         * Property acceleratorIds: The IDs of the GA instance to be disassociated.
         * <p>
         * You can specify up to 50 IDs.
         * <p>
         * @return {@code this}
         * @param acceleratorIds Property acceleratorIds: The IDs of the GA instance to be disassociated. This parameter is required.
         */
        public Builder acceleratorIds(final java.util.List<? extends java.lang.Object> acceleratorIds) {
            this.props.acceleratorIds(acceleratorIds);
            return this;
        }

        /**
         * Property domain: The accelerated domain name to be disassociated.
         * <p>
         * @return {@code this}
         * @param domain Property domain: The accelerated domain name to be disassociated. This parameter is required.
         */
        public Builder domain(final java.lang.String domain) {
            this.props.domain(domain);
            return this;
        }
        /**
         * Property domain: The accelerated domain name to be disassociated.
         * <p>
         * @return {@code this}
         * @param domain Property domain: The accelerated domain name to be disassociated. This parameter is required.
         */
        public Builder domain(final com.aliyun.ros.cdk.core.IResolvable domain) {
            this.props.domain(domain);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ga.Domain}.
         */
        @Override
        public com.aliyun.ros.cdk.ga.Domain build() {
            return new com.aliyun.ros.cdk.ga.Domain(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
