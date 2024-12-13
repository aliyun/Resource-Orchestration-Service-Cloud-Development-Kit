package com.aliyun.ros.cdk.kafka;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::KAFKA::Acl</code>, which is used to create an access control list (ACL).
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-12-13T06:45:09.041Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.kafka.$Module.class, fqn = "@alicloud/ros-cdk-kafka.RosAcl")
public class RosAcl extends com.aliyun.ros.cdk.core.RosResource {

    protected RosAcl(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosAcl(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.kafka.RosAcl.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosAcl(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.kafka.RosAclProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAclResourceType() {
        return software.amazon.jsii.Kernel.get(this, "attrAclResourceType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrUsername() {
        return software.amazon.jsii.Kernel.get(this, "attrUsername", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAclOperationTypes() {
        return software.amazon.jsii.Kernel.get(this, "aclOperationTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAclOperationTypes(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "aclOperationTypes", java.util.Objects.requireNonNull(value, "aclOperationTypes is required"));
    }

    /**
     */
    public void setAclOperationTypes(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "aclOperationTypes", java.util.Objects.requireNonNull(value, "aclOperationTypes is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAclResourceName() {
        return software.amazon.jsii.Kernel.get(this, "aclResourceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAclResourceName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "aclResourceName", java.util.Objects.requireNonNull(value, "aclResourceName is required"));
    }

    /**
     */
    public void setAclResourceName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "aclResourceName", java.util.Objects.requireNonNull(value, "aclResourceName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAclResourcePatternType() {
        return software.amazon.jsii.Kernel.get(this, "aclResourcePatternType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAclResourcePatternType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "aclResourcePatternType", java.util.Objects.requireNonNull(value, "aclResourcePatternType is required"));
    }

    /**
     */
    public void setAclResourcePatternType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "aclResourcePatternType", java.util.Objects.requireNonNull(value, "aclResourcePatternType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAclResourceType() {
        return software.amazon.jsii.Kernel.get(this, "aclResourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAclResourceType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "aclResourceType", java.util.Objects.requireNonNull(value, "aclResourceType is required"));
    }

    /**
     */
    public void setAclResourceType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "aclResourceType", java.util.Objects.requireNonNull(value, "aclResourceType is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "instanceId", java.util.Objects.requireNonNull(value, "instanceId is required"));
    }

    /**
     */
    public void setInstanceId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceId", java.util.Objects.requireNonNull(value, "instanceId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getUsername() {
        return software.amazon.jsii.Kernel.get(this, "username", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setUsername(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "username", java.util.Objects.requireNonNull(value, "username is required"));
    }

    /**
     */
    public void setUsername(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "username", java.util.Objects.requireNonNull(value, "username is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAclPermissionType() {
        return software.amazon.jsii.Kernel.get(this, "aclPermissionType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAclPermissionType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "aclPermissionType", value);
    }

    /**
     */
    public void setAclPermissionType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "aclPermissionType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHost() {
        return software.amazon.jsii.Kernel.get(this, "host", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHost(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "host", value);
    }

    /**
     */
    public void setHost(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "host", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.kafka.RosAcl}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.kafka.RosAcl> {
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
        private final com.aliyun.ros.cdk.kafka.RosAclProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.kafka.RosAclProps.Builder();
        }

        /**
         * @return {@code this}
         * @param aclOperationTypes This parameter is required.
         */
        public Builder aclOperationTypes(final com.aliyun.ros.cdk.core.IResolvable aclOperationTypes) {
            this.props.aclOperationTypes(aclOperationTypes);
            return this;
        }
        /**
         * @return {@code this}
         * @param aclOperationTypes This parameter is required.
         */
        public Builder aclOperationTypes(final java.util.List<? extends java.lang.Object> aclOperationTypes) {
            this.props.aclOperationTypes(aclOperationTypes);
            return this;
        }

        /**
         * @return {@code this}
         * @param aclResourceName This parameter is required.
         */
        public Builder aclResourceName(final java.lang.String aclResourceName) {
            this.props.aclResourceName(aclResourceName);
            return this;
        }
        /**
         * @return {@code this}
         * @param aclResourceName This parameter is required.
         */
        public Builder aclResourceName(final com.aliyun.ros.cdk.core.IResolvable aclResourceName) {
            this.props.aclResourceName(aclResourceName);
            return this;
        }

        /**
         * @return {@code this}
         * @param aclResourcePatternType This parameter is required.
         */
        public Builder aclResourcePatternType(final java.lang.String aclResourcePatternType) {
            this.props.aclResourcePatternType(aclResourcePatternType);
            return this;
        }
        /**
         * @return {@code this}
         * @param aclResourcePatternType This parameter is required.
         */
        public Builder aclResourcePatternType(final com.aliyun.ros.cdk.core.IResolvable aclResourcePatternType) {
            this.props.aclResourcePatternType(aclResourcePatternType);
            return this;
        }

        /**
         * @return {@code this}
         * @param aclResourceType This parameter is required.
         */
        public Builder aclResourceType(final java.lang.String aclResourceType) {
            this.props.aclResourceType(aclResourceType);
            return this;
        }
        /**
         * @return {@code this}
         * @param aclResourceType This parameter is required.
         */
        public Builder aclResourceType(final com.aliyun.ros.cdk.core.IResolvable aclResourceType) {
            this.props.aclResourceType(aclResourceType);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceId This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceId This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param username This parameter is required.
         */
        public Builder username(final java.lang.String username) {
            this.props.username(username);
            return this;
        }
        /**
         * @return {@code this}
         * @param username This parameter is required.
         */
        public Builder username(final com.aliyun.ros.cdk.core.IResolvable username) {
            this.props.username(username);
            return this;
        }

        /**
         * @return {@code this}
         * @param aclPermissionType This parameter is required.
         */
        public Builder aclPermissionType(final java.lang.String aclPermissionType) {
            this.props.aclPermissionType(aclPermissionType);
            return this;
        }
        /**
         * @return {@code this}
         * @param aclPermissionType This parameter is required.
         */
        public Builder aclPermissionType(final com.aliyun.ros.cdk.core.IResolvable aclPermissionType) {
            this.props.aclPermissionType(aclPermissionType);
            return this;
        }

        /**
         * @return {@code this}
         * @param host This parameter is required.
         */
        public Builder host(final java.lang.String host) {
            this.props.host(host);
            return this;
        }
        /**
         * @return {@code this}
         * @param host This parameter is required.
         */
        public Builder host(final com.aliyun.ros.cdk.core.IResolvable host) {
            this.props.host(host);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.kafka.RosAcl}.
         */
        @Override
        public com.aliyun.ros.cdk.kafka.RosAcl build() {
            return new com.aliyun.ros.cdk.kafka.RosAcl(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
