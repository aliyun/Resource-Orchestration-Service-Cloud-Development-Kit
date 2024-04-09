package com.aliyun.ros.cdk.cloudsso;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::CloudSSO::AccessAssignment</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-04-09T06:05:31.003Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudsso.$Module.class, fqn = "@alicloud/ros-cdk-cloudsso.RosAccessAssignment")
public class RosAccessAssignment extends com.aliyun.ros.cdk.core.RosResource {

    protected RosAccessAssignment(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosAccessAssignment(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cloudsso.RosAccessAssignment.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosAccessAssignment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudsso.RosAccessAssignmentProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getPrincipalId() {
        return software.amazon.jsii.Kernel.get(this, "principalId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPrincipalId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "principalId", java.util.Objects.requireNonNull(value, "principalId is required"));
    }

    /**
     */
    public void setPrincipalId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "principalId", java.util.Objects.requireNonNull(value, "principalId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPrincipalType() {
        return software.amazon.jsii.Kernel.get(this, "principalType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPrincipalType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "principalType", java.util.Objects.requireNonNull(value, "principalType is required"));
    }

    /**
     */
    public void setPrincipalType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "principalType", java.util.Objects.requireNonNull(value, "principalType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTargetId() {
        return software.amazon.jsii.Kernel.get(this, "targetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTargetId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "targetId", java.util.Objects.requireNonNull(value, "targetId is required"));
    }

    /**
     */
    public void setTargetId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "targetId", java.util.Objects.requireNonNull(value, "targetId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTargetType() {
        return software.amazon.jsii.Kernel.get(this, "targetType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTargetType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "targetType", java.util.Objects.requireNonNull(value, "targetType is required"));
    }

    /**
     */
    public void setTargetType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "targetType", java.util.Objects.requireNonNull(value, "targetType is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cloudsso.RosAccessAssignment}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cloudsso.RosAccessAssignment> {
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
        private final com.aliyun.ros.cdk.cloudsso.RosAccessAssignmentProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cloudsso.RosAccessAssignmentProps.Builder();
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
         * @param principalId This parameter is required.
         */
        public Builder principalId(final java.lang.String principalId) {
            this.props.principalId(principalId);
            return this;
        }
        /**
         * @return {@code this}
         * @param principalId This parameter is required.
         */
        public Builder principalId(final com.aliyun.ros.cdk.core.IResolvable principalId) {
            this.props.principalId(principalId);
            return this;
        }

        /**
         * @return {@code this}
         * @param principalType This parameter is required.
         */
        public Builder principalType(final java.lang.String principalType) {
            this.props.principalType(principalType);
            return this;
        }
        /**
         * @return {@code this}
         * @param principalType This parameter is required.
         */
        public Builder principalType(final com.aliyun.ros.cdk.core.IResolvable principalType) {
            this.props.principalType(principalType);
            return this;
        }

        /**
         * @return {@code this}
         * @param targetId This parameter is required.
         */
        public Builder targetId(final java.lang.String targetId) {
            this.props.targetId(targetId);
            return this;
        }
        /**
         * @return {@code this}
         * @param targetId This parameter is required.
         */
        public Builder targetId(final com.aliyun.ros.cdk.core.IResolvable targetId) {
            this.props.targetId(targetId);
            return this;
        }

        /**
         * @return {@code this}
         * @param targetType This parameter is required.
         */
        public Builder targetType(final java.lang.String targetType) {
            this.props.targetType(targetType);
            return this;
        }
        /**
         * @return {@code this}
         * @param targetType This parameter is required.
         */
        public Builder targetType(final com.aliyun.ros.cdk.core.IResolvable targetType) {
            this.props.targetType(targetType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cloudsso.RosAccessAssignment}.
         */
        @Override
        public com.aliyun.ros.cdk.cloudsso.RosAccessAssignment build() {
            return new com.aliyun.ros.cdk.cloudsso.RosAccessAssignment(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
