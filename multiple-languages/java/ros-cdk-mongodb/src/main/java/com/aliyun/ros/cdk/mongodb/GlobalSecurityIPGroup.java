package com.aliyun.ros.cdk.mongodb;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::MONGODB::GlobalSecurityIPGroup</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T14:10:27.833Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mongodb.$Module.class, fqn = "@alicloud/ros-cdk-mongodb.GlobalSecurityIPGroup")
public class GlobalSecurityIPGroup extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.mongodb.IGlobalSecurityIPGroup {

    protected GlobalSecurityIPGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected GlobalSecurityIPGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public GlobalSecurityIPGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mongodb.GlobalSecurityIPGroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public GlobalSecurityIPGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mongodb.GlobalSecurityIPGroupProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute GlobalIgName: The name of the IP whitelist template.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrGlobalIgName() {
        return software.amazon.jsii.Kernel.get(this, "attrGlobalIgName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute GlobalSecurityGroupId: The ID of the IP whitelist template.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrGlobalSecurityGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrGlobalSecurityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute GlobalSecurityIpList: The IP address in the whitelist template.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrGlobalSecurityIpList() {
        return software.amazon.jsii.Kernel.get(this, "attrGlobalSecurityIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mongodb.GlobalSecurityIPGroupProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.mongodb.GlobalSecurityIPGroupProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.mongodb.GlobalSecurityIPGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.mongodb.GlobalSecurityIPGroup> {
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
        private final com.aliyun.ros.cdk.mongodb.GlobalSecurityIPGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.mongodb.GlobalSecurityIPGroupProps.Builder();
        }

        /**
         * Property globalIgName: The name of the IP whitelist template.
         * <p>
         * @return {@code this}
         * @param globalIgName Property globalIgName: The name of the IP whitelist template. This parameter is required.
         */
        public Builder globalIgName(final java.lang.String globalIgName) {
            this.props.globalIgName(globalIgName);
            return this;
        }
        /**
         * Property globalIgName: The name of the IP whitelist template.
         * <p>
         * @return {@code this}
         * @param globalIgName Property globalIgName: The name of the IP whitelist template. This parameter is required.
         */
        public Builder globalIgName(final com.aliyun.ros.cdk.core.IResolvable globalIgName) {
            this.props.globalIgName(globalIgName);
            return this;
        }

        /**
         * Property globalSecurityIpList: The IP address in the whitelist template.
         * <p>
         * @return {@code this}
         * @param globalSecurityIpList Property globalSecurityIpList: The IP address in the whitelist template. This parameter is required.
         */
        public Builder globalSecurityIpList(final java.util.List<? extends java.lang.Object> globalSecurityIpList) {
            this.props.globalSecurityIpList(globalSecurityIpList);
            return this;
        }
        /**
         * Property globalSecurityIpList: The IP address in the whitelist template.
         * <p>
         * @return {@code this}
         * @param globalSecurityIpList Property globalSecurityIpList: The IP address in the whitelist template. This parameter is required.
         */
        public Builder globalSecurityIpList(final com.aliyun.ros.cdk.core.IResolvable globalSecurityIpList) {
            this.props.globalSecurityIpList(globalSecurityIpList);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.mongodb.GlobalSecurityIPGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.mongodb.GlobalSecurityIPGroup build() {
            return new com.aliyun.ros.cdk.mongodb.GlobalSecurityIPGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
