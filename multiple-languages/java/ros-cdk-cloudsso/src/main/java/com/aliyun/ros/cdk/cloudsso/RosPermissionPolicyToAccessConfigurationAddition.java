package com.aliyun.ros.cdk.cloudsso;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::CloudSSO::PermissionPolicyToAccessConfigurationAddition</code>, which is used to add a policy to an access configuration.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:37.005Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudsso.$Module.class, fqn = "@alicloud/ros-cdk-cloudsso.RosPermissionPolicyToAccessConfigurationAddition")
public class RosPermissionPolicyToAccessConfigurationAddition extends com.aliyun.ros.cdk.core.RosResource {

    protected RosPermissionPolicyToAccessConfigurationAddition(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosPermissionPolicyToAccessConfigurationAddition(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cloudsso.RosPermissionPolicyToAccessConfigurationAddition.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosPermissionPolicyToAccessConfigurationAddition(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudsso.RosPermissionPolicyToAccessConfigurationAdditionProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAccessConfigurationId() {
        return software.amazon.jsii.Kernel.get(this, "accessConfigurationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAccessConfigurationId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "accessConfigurationId", java.util.Objects.requireNonNull(value, "accessConfigurationId is required"));
    }

    /**
     */
    public void setAccessConfigurationId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "accessConfigurationId", java.util.Objects.requireNonNull(value, "accessConfigurationId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDirectoryId() {
        return software.amazon.jsii.Kernel.get(this, "directoryId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDirectoryId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "directoryId", java.util.Objects.requireNonNull(value, "directoryId is required"));
    }

    /**
     */
    public void setDirectoryId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "directoryId", java.util.Objects.requireNonNull(value, "directoryId is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPermissionPolicyName() {
        return software.amazon.jsii.Kernel.get(this, "permissionPolicyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPermissionPolicyName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "permissionPolicyName", java.util.Objects.requireNonNull(value, "permissionPolicyName is required"));
    }

    /**
     */
    public void setPermissionPolicyName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "permissionPolicyName", java.util.Objects.requireNonNull(value, "permissionPolicyName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPermissionPolicyType() {
        return software.amazon.jsii.Kernel.get(this, "permissionPolicyType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPermissionPolicyType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "permissionPolicyType", java.util.Objects.requireNonNull(value, "permissionPolicyType is required"));
    }

    /**
     */
    public void setPermissionPolicyType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "permissionPolicyType", java.util.Objects.requireNonNull(value, "permissionPolicyType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInlinePolicyDocument() {
        return software.amazon.jsii.Kernel.get(this, "inlinePolicyDocument", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInlinePolicyDocument(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "inlinePolicyDocument", value);
    }

    /**
     */
    public void setInlinePolicyDocument(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (!(value.keySet().toArray()[0] instanceof String)) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("value").append(".keySet()")
                        .append(" to contain class String; received ")
                        .append(value.keySet().toArray()[0].getClass()).toString());
            }
            for (final java.util.Map.Entry<String, java.lang.Object> __item_ac66f0: value.entrySet()) {
                final java.lang.Object __val_ac66f0 = __item_ac66f0.getValue();
            }
        }
        software.amazon.jsii.Kernel.set(this, "inlinePolicyDocument", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cloudsso.RosPermissionPolicyToAccessConfigurationAddition}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cloudsso.RosPermissionPolicyToAccessConfigurationAddition> {
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
        private final com.aliyun.ros.cdk.cloudsso.RosPermissionPolicyToAccessConfigurationAdditionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cloudsso.RosPermissionPolicyToAccessConfigurationAdditionProps.Builder();
        }

        /**
         * @return {@code this}
         * @param accessConfigurationId This parameter is required.
         */
        public Builder accessConfigurationId(final java.lang.String accessConfigurationId) {
            this.props.accessConfigurationId(accessConfigurationId);
            return this;
        }
        /**
         * @return {@code this}
         * @param accessConfigurationId This parameter is required.
         */
        public Builder accessConfigurationId(final com.aliyun.ros.cdk.core.IResolvable accessConfigurationId) {
            this.props.accessConfigurationId(accessConfigurationId);
            return this;
        }

        /**
         * @return {@code this}
         * @param directoryId This parameter is required.
         */
        public Builder directoryId(final java.lang.String directoryId) {
            this.props.directoryId(directoryId);
            return this;
        }
        /**
         * @return {@code this}
         * @param directoryId This parameter is required.
         */
        public Builder directoryId(final com.aliyun.ros.cdk.core.IResolvable directoryId) {
            this.props.directoryId(directoryId);
            return this;
        }

        /**
         * @return {@code this}
         * @param permissionPolicyName This parameter is required.
         */
        public Builder permissionPolicyName(final java.lang.String permissionPolicyName) {
            this.props.permissionPolicyName(permissionPolicyName);
            return this;
        }
        /**
         * @return {@code this}
         * @param permissionPolicyName This parameter is required.
         */
        public Builder permissionPolicyName(final com.aliyun.ros.cdk.core.IResolvable permissionPolicyName) {
            this.props.permissionPolicyName(permissionPolicyName);
            return this;
        }

        /**
         * @return {@code this}
         * @param permissionPolicyType This parameter is required.
         */
        public Builder permissionPolicyType(final java.lang.String permissionPolicyType) {
            this.props.permissionPolicyType(permissionPolicyType);
            return this;
        }
        /**
         * @return {@code this}
         * @param permissionPolicyType This parameter is required.
         */
        public Builder permissionPolicyType(final com.aliyun.ros.cdk.core.IResolvable permissionPolicyType) {
            this.props.permissionPolicyType(permissionPolicyType);
            return this;
        }

        /**
         * @return {@code this}
         * @param inlinePolicyDocument This parameter is required.
         */
        public Builder inlinePolicyDocument(final com.aliyun.ros.cdk.core.IResolvable inlinePolicyDocument) {
            this.props.inlinePolicyDocument(inlinePolicyDocument);
            return this;
        }
        /**
         * @return {@code this}
         * @param inlinePolicyDocument This parameter is required.
         */
        public Builder inlinePolicyDocument(final java.util.Map<java.lang.String, ? extends java.lang.Object> inlinePolicyDocument) {
            this.props.inlinePolicyDocument(inlinePolicyDocument);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cloudsso.RosPermissionPolicyToAccessConfigurationAddition}.
         */
        @Override
        public com.aliyun.ros.cdk.cloudsso.RosPermissionPolicyToAccessConfigurationAddition build() {
            return new com.aliyun.ros.cdk.cloudsso.RosPermissionPolicyToAccessConfigurationAddition(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
