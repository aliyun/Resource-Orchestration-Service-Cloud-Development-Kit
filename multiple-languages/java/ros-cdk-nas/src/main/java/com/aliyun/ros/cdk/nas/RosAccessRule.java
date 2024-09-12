package com.aliyun.ros.cdk.nas;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::NAS::AccessRule</code>, which is used to create a rule for a permission group.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:28.710Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nas.$Module.class, fqn = "@alicloud/ros-cdk-nas.RosAccessRule")
public class RosAccessRule extends com.aliyun.ros.cdk.core.RosResource {

    protected RosAccessRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosAccessRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.nas.RosAccessRule.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosAccessRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nas.RosAccessRuleProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAccessRuleId() {
        return software.amazon.jsii.Kernel.get(this, "attrAccessRuleId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAccessGroupName() {
        return software.amazon.jsii.Kernel.get(this, "accessGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAccessGroupName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "accessGroupName", java.util.Objects.requireNonNull(value, "accessGroupName is required"));
    }

    /**
     */
    public void setAccessGroupName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "accessGroupName", java.util.Objects.requireNonNull(value, "accessGroupName is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFileSystemType() {
        return software.amazon.jsii.Kernel.get(this, "fileSystemType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFileSystemType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "fileSystemType", value);
    }

    /**
     */
    public void setFileSystemType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "fileSystemType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIpv6SourceCidrIp() {
        return software.amazon.jsii.Kernel.get(this, "ipv6SourceCidrIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIpv6SourceCidrIp(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ipv6SourceCidrIp", value);
    }

    /**
     */
    public void setIpv6SourceCidrIp(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ipv6SourceCidrIp", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPriority() {
        return software.amazon.jsii.Kernel.get(this, "priority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPriority(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "priority", value);
    }

    /**
     */
    public void setPriority(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "priority", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRwAccessType() {
        return software.amazon.jsii.Kernel.get(this, "rwAccessType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRwAccessType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "rwAccessType", value);
    }

    /**
     */
    public void setRwAccessType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "rwAccessType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSourceCidrIp() {
        return software.amazon.jsii.Kernel.get(this, "sourceCidrIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSourceCidrIp(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sourceCidrIp", value);
    }

    /**
     */
    public void setSourceCidrIp(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sourceCidrIp", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getUserAccessType() {
        return software.amazon.jsii.Kernel.get(this, "userAccessType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setUserAccessType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "userAccessType", value);
    }

    /**
     */
    public void setUserAccessType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "userAccessType", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.nas.RosAccessRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.nas.RosAccessRule> {
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
        private final com.aliyun.ros.cdk.nas.RosAccessRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.nas.RosAccessRuleProps.Builder();
        }

        /**
         * @return {@code this}
         * @param accessGroupName This parameter is required.
         */
        public Builder accessGroupName(final java.lang.String accessGroupName) {
            this.props.accessGroupName(accessGroupName);
            return this;
        }
        /**
         * @return {@code this}
         * @param accessGroupName This parameter is required.
         */
        public Builder accessGroupName(final com.aliyun.ros.cdk.core.IResolvable accessGroupName) {
            this.props.accessGroupName(accessGroupName);
            return this;
        }

        /**
         * @return {@code this}
         * @param fileSystemType This parameter is required.
         */
        public Builder fileSystemType(final java.lang.String fileSystemType) {
            this.props.fileSystemType(fileSystemType);
            return this;
        }
        /**
         * @return {@code this}
         * @param fileSystemType This parameter is required.
         */
        public Builder fileSystemType(final com.aliyun.ros.cdk.core.IResolvable fileSystemType) {
            this.props.fileSystemType(fileSystemType);
            return this;
        }

        /**
         * @return {@code this}
         * @param ipv6SourceCidrIp This parameter is required.
         */
        public Builder ipv6SourceCidrIp(final java.lang.String ipv6SourceCidrIp) {
            this.props.ipv6SourceCidrIp(ipv6SourceCidrIp);
            return this;
        }
        /**
         * @return {@code this}
         * @param ipv6SourceCidrIp This parameter is required.
         */
        public Builder ipv6SourceCidrIp(final com.aliyun.ros.cdk.core.IResolvable ipv6SourceCidrIp) {
            this.props.ipv6SourceCidrIp(ipv6SourceCidrIp);
            return this;
        }

        /**
         * @return {@code this}
         * @param priority This parameter is required.
         */
        public Builder priority(final java.lang.Number priority) {
            this.props.priority(priority);
            return this;
        }
        /**
         * @return {@code this}
         * @param priority This parameter is required.
         */
        public Builder priority(final com.aliyun.ros.cdk.core.IResolvable priority) {
            this.props.priority(priority);
            return this;
        }

        /**
         * @return {@code this}
         * @param rwAccessType This parameter is required.
         */
        public Builder rwAccessType(final java.lang.String rwAccessType) {
            this.props.rwAccessType(rwAccessType);
            return this;
        }
        /**
         * @return {@code this}
         * @param rwAccessType This parameter is required.
         */
        public Builder rwAccessType(final com.aliyun.ros.cdk.core.IResolvable rwAccessType) {
            this.props.rwAccessType(rwAccessType);
            return this;
        }

        /**
         * @return {@code this}
         * @param sourceCidrIp This parameter is required.
         */
        public Builder sourceCidrIp(final java.lang.String sourceCidrIp) {
            this.props.sourceCidrIp(sourceCidrIp);
            return this;
        }
        /**
         * @return {@code this}
         * @param sourceCidrIp This parameter is required.
         */
        public Builder sourceCidrIp(final com.aliyun.ros.cdk.core.IResolvable sourceCidrIp) {
            this.props.sourceCidrIp(sourceCidrIp);
            return this;
        }

        /**
         * @return {@code this}
         * @param userAccessType This parameter is required.
         */
        public Builder userAccessType(final java.lang.String userAccessType) {
            this.props.userAccessType(userAccessType);
            return this;
        }
        /**
         * @return {@code this}
         * @param userAccessType This parameter is required.
         */
        public Builder userAccessType(final com.aliyun.ros.cdk.core.IResolvable userAccessType) {
            this.props.userAccessType(userAccessType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.nas.RosAccessRule}.
         */
        @Override
        public com.aliyun.ros.cdk.nas.RosAccessRule build() {
            return new com.aliyun.ros.cdk.nas.RosAccessRule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
