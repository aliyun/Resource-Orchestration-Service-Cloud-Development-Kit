package com.aliyun.ros.cdk.vpc;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::VPC::IpamScope</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-12-13T06:45:12.777Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.IpamScope")
public class IpamScope extends com.aliyun.ros.cdk.core.Resource {

    protected IpamScope(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected IpamScope(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public IpamScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.IpamScopeProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public IpamScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.IpamScopeProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CreateTime: The creation time of the IPAM scope.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute IpamId: The id of the Ipam instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIpamId() {
        return software.amazon.jsii.Kernel.get(this, "attrIpamId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute IpamScopeDescription: The description of the IPAM's scope of action.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIpamScopeDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrIpamScopeDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute IpamScopeId: The ID of the IPAM scope.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIpamScopeId() {
        return software.amazon.jsii.Kernel.get(this, "attrIpamScopeId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute IpamScopeName: The name of the IPAM scope.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIpamScopeName() {
        return software.amazon.jsii.Kernel.get(this, "attrIpamScopeName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute IpamScopeType: IPAM scope of action type.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIpamScopeType() {
        return software.amazon.jsii.Kernel.get(this, "attrIpamScopeType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Tags: The tag of the IPAM scope.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTags() {
        return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.IpamScopeProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.IpamScopeProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.IpamScopeProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.IpamScope}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.IpamScope> {
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
        private final com.aliyun.ros.cdk.vpc.IpamScopeProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.IpamScopeProps.Builder();
        }

        /**
         * Property ipamId: The id of the Ipam instance.
         * <p>
         * @return {@code this}
         * @param ipamId Property ipamId: The id of the Ipam instance. This parameter is required.
         */
        public Builder ipamId(final java.lang.String ipamId) {
            this.props.ipamId(ipamId);
            return this;
        }
        /**
         * Property ipamId: The id of the Ipam instance.
         * <p>
         * @return {@code this}
         * @param ipamId Property ipamId: The id of the Ipam instance. This parameter is required.
         */
        public Builder ipamId(final com.aliyun.ros.cdk.core.IResolvable ipamId) {
            this.props.ipamId(ipamId);
            return this;
        }

        /**
         * Property ipamScopeDescription: The description of the IPAM's scope of action.
         * <p>
         * It must be 2 to 256 characters in length and must start with a lowercase letter, but cannot start with 'http:// 'or 'https. If it is not filled in, it is empty. The default value is empty.
         * <p>
         * @return {@code this}
         * @param ipamScopeDescription Property ipamScopeDescription: The description of the IPAM's scope of action. This parameter is required.
         */
        public Builder ipamScopeDescription(final java.lang.String ipamScopeDescription) {
            this.props.ipamScopeDescription(ipamScopeDescription);
            return this;
        }
        /**
         * Property ipamScopeDescription: The description of the IPAM's scope of action.
         * <p>
         * It must be 2 to 256 characters in length and must start with a lowercase letter, but cannot start with 'http:// 'or 'https. If it is not filled in, it is empty. The default value is empty.
         * <p>
         * @return {@code this}
         * @param ipamScopeDescription Property ipamScopeDescription: The description of the IPAM's scope of action. This parameter is required.
         */
        public Builder ipamScopeDescription(final com.aliyun.ros.cdk.core.IResolvable ipamScopeDescription) {
            this.props.ipamScopeDescription(ipamScopeDescription);
            return this;
        }

        /**
         * Property ipamScopeName: The name of the IPAM scope.
         * <p>
         * @return {@code this}
         * @param ipamScopeName Property ipamScopeName: The name of the IPAM scope. This parameter is required.
         */
        public Builder ipamScopeName(final java.lang.String ipamScopeName) {
            this.props.ipamScopeName(ipamScopeName);
            return this;
        }
        /**
         * Property ipamScopeName: The name of the IPAM scope.
         * <p>
         * @return {@code this}
         * @param ipamScopeName Property ipamScopeName: The name of the IPAM scope. This parameter is required.
         */
        public Builder ipamScopeName(final com.aliyun.ros.cdk.core.IResolvable ipamScopeName) {
            this.props.ipamScopeName(ipamScopeName);
            return this;
        }

        /**
         * Property ipamScopeType: IPAM scope of action type: <strong>private</strong>.
         * <p>
         * <blockquote>
         * <p>
         * Currently, only the role scope of the private network is supported.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param ipamScopeType Property ipamScopeType: IPAM scope of action type: <strong>private</strong>. This parameter is required.
         */
        public Builder ipamScopeType(final java.lang.String ipamScopeType) {
            this.props.ipamScopeType(ipamScopeType);
            return this;
        }
        /**
         * Property ipamScopeType: IPAM scope of action type: <strong>private</strong>.
         * <p>
         * <blockquote>
         * <p>
         * Currently, only the role scope of the private network is supported.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param ipamScopeType Property ipamScopeType: IPAM scope of action type: <strong>private</strong>. This parameter is required.
         */
        public Builder ipamScopeType(final com.aliyun.ros.cdk.core.IResolvable ipamScopeType) {
            this.props.ipamScopeType(ipamScopeType);
            return this;
        }

        /**
         * Property tags: Tags of ipam scope.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags of ipam scope. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.vpc.RosIpamScope.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.IpamScope}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.IpamScope build() {
            return new com.aliyun.ros.cdk.vpc.IpamScope(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
