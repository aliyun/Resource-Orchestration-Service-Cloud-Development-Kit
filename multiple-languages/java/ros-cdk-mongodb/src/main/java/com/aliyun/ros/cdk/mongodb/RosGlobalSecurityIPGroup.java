package com.aliyun.ros.cdk.mongodb;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::MONGODB::GlobalSecurityIPGroup</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:55.726Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mongodb.$Module.class, fqn = "@alicloud/ros-cdk-mongodb.RosGlobalSecurityIPGroup")
public class RosGlobalSecurityIPGroup extends com.aliyun.ros.cdk.core.RosResource {

    protected RosGlobalSecurityIPGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosGlobalSecurityIPGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.mongodb.RosGlobalSecurityIPGroup.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosGlobalSecurityIPGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mongodb.RosGlobalSecurityIPGroupProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrGlobalIgName() {
        return software.amazon.jsii.Kernel.get(this, "attrGlobalIgName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrGlobalSecurityGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrGlobalSecurityGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrGlobalSecurityIpList() {
        return software.amazon.jsii.Kernel.get(this, "attrGlobalSecurityIpList", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getGlobalIgName() {
        return software.amazon.jsii.Kernel.get(this, "globalIgName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setGlobalIgName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "globalIgName", java.util.Objects.requireNonNull(value, "globalIgName is required"));
    }

    /**
     */
    public void setGlobalIgName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "globalIgName", java.util.Objects.requireNonNull(value, "globalIgName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getGlobalSecurityIpList() {
        return software.amazon.jsii.Kernel.get(this, "globalSecurityIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setGlobalSecurityIpList(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
            }
        }
        software.amazon.jsii.Kernel.set(this, "globalSecurityIpList", java.util.Objects.requireNonNull(value, "globalSecurityIpList is required"));
    }

    /**
     */
    public void setGlobalSecurityIpList(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "globalSecurityIpList", java.util.Objects.requireNonNull(value, "globalSecurityIpList is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.mongodb.RosGlobalSecurityIPGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.mongodb.RosGlobalSecurityIPGroup> {
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
        private final com.aliyun.ros.cdk.mongodb.RosGlobalSecurityIPGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.mongodb.RosGlobalSecurityIPGroupProps.Builder();
        }

        /**
         * @return {@code this}
         * @param globalIgName This parameter is required.
         */
        public Builder globalIgName(final java.lang.String globalIgName) {
            this.props.globalIgName(globalIgName);
            return this;
        }
        /**
         * @return {@code this}
         * @param globalIgName This parameter is required.
         */
        public Builder globalIgName(final com.aliyun.ros.cdk.core.IResolvable globalIgName) {
            this.props.globalIgName(globalIgName);
            return this;
        }

        /**
         * @return {@code this}
         * @param globalSecurityIpList This parameter is required.
         */
        public Builder globalSecurityIpList(final java.util.List<? extends java.lang.Object> globalSecurityIpList) {
            this.props.globalSecurityIpList(globalSecurityIpList);
            return this;
        }
        /**
         * @return {@code this}
         * @param globalSecurityIpList This parameter is required.
         */
        public Builder globalSecurityIpList(final com.aliyun.ros.cdk.core.IResolvable globalSecurityIpList) {
            this.props.globalSecurityIpList(globalSecurityIpList);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.mongodb.RosGlobalSecurityIPGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.mongodb.RosGlobalSecurityIPGroup build() {
            return new com.aliyun.ros.cdk.mongodb.RosGlobalSecurityIPGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
