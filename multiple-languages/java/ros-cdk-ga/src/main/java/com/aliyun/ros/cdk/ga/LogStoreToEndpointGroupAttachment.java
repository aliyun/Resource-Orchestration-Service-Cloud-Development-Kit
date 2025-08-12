package com.aliyun.ros.cdk.ga;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::GA::LogStoreToEndpointGroupAttachment</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:47.847Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.LogStoreToEndpointGroupAttachment")
public class LogStoreToEndpointGroupAttachment extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ga.ILogStoreToEndpointGroupAttachment {

    protected LogStoreToEndpointGroupAttachment(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected LogStoreToEndpointGroupAttachment(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public LogStoreToEndpointGroupAttachment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.LogStoreToEndpointGroupAttachmentProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public LogStoreToEndpointGroupAttachment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.LogStoreToEndpointGroupAttachmentProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.LogStoreToEndpointGroupAttachmentProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ga.LogStoreToEndpointGroupAttachmentProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ga.LogStoreToEndpointGroupAttachment}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ga.LogStoreToEndpointGroupAttachment> {
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
        private final com.aliyun.ros.cdk.ga.LogStoreToEndpointGroupAttachmentProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ga.LogStoreToEndpointGroupAttachmentProps.Builder();
        }

        /**
         * Property acceleratorId: Global Acceleration Instance ID.
         * <p>
         * @return {@code this}
         * @param acceleratorId Property acceleratorId: Global Acceleration Instance ID. This parameter is required.
         */
        public Builder acceleratorId(final java.lang.String acceleratorId) {
            this.props.acceleratorId(acceleratorId);
            return this;
        }
        /**
         * Property acceleratorId: Global Acceleration Instance ID.
         * <p>
         * @return {@code this}
         * @param acceleratorId Property acceleratorId: Global Acceleration Instance ID. This parameter is required.
         */
        public Builder acceleratorId(final com.aliyun.ros.cdk.core.IResolvable acceleratorId) {
            this.props.acceleratorId(acceleratorId);
            return this;
        }

        /**
         * Property endpointGroupIds: Endpoint Group ID List.
         * <p>
         * @return {@code this}
         * @param endpointGroupIds Property endpointGroupIds: Endpoint Group ID List. This parameter is required.
         */
        public Builder endpointGroupIds(final com.aliyun.ros.cdk.core.IResolvable endpointGroupIds) {
            this.props.endpointGroupIds(endpointGroupIds);
            return this;
        }
        /**
         * Property endpointGroupIds: Endpoint Group ID List.
         * <p>
         * @return {@code this}
         * @param endpointGroupIds Property endpointGroupIds: Endpoint Group ID List. This parameter is required.
         */
        public Builder endpointGroupIds(final java.util.List<? extends java.lang.Object> endpointGroupIds) {
            this.props.endpointGroupIds(endpointGroupIds);
            return this;
        }

        /**
         * Property listenerId: Listener ID.
         * <p>
         * @return {@code this}
         * @param listenerId Property listenerId: Listener ID. This parameter is required.
         */
        public Builder listenerId(final java.lang.String listenerId) {
            this.props.listenerId(listenerId);
            return this;
        }
        /**
         * Property listenerId: Listener ID.
         * <p>
         * @return {@code this}
         * @param listenerId Property listenerId: Listener ID. This parameter is required.
         */
        public Builder listenerId(final com.aliyun.ros.cdk.core.IResolvable listenerId) {
            this.props.listenerId(listenerId);
            return this;
        }

        /**
         * Property slsLogStoreName: SLS log library name.
         * <p>
         * @return {@code this}
         * @param slsLogStoreName Property slsLogStoreName: SLS log library name. This parameter is required.
         */
        public Builder slsLogStoreName(final java.lang.String slsLogStoreName) {
            this.props.slsLogStoreName(slsLogStoreName);
            return this;
        }
        /**
         * Property slsLogStoreName: SLS log library name.
         * <p>
         * @return {@code this}
         * @param slsLogStoreName Property slsLogStoreName: SLS log library name. This parameter is required.
         */
        public Builder slsLogStoreName(final com.aliyun.ros.cdk.core.IResolvable slsLogStoreName) {
            this.props.slsLogStoreName(slsLogStoreName);
            return this;
        }

        /**
         * Property slsProjectName: SLS project name.
         * <p>
         * @return {@code this}
         * @param slsProjectName Property slsProjectName: SLS project name. This parameter is required.
         */
        public Builder slsProjectName(final java.lang.String slsProjectName) {
            this.props.slsProjectName(slsProjectName);
            return this;
        }
        /**
         * Property slsProjectName: SLS project name.
         * <p>
         * @return {@code this}
         * @param slsProjectName Property slsProjectName: SLS project name. This parameter is required.
         */
        public Builder slsProjectName(final com.aliyun.ros.cdk.core.IResolvable slsProjectName) {
            this.props.slsProjectName(slsProjectName);
            return this;
        }

        /**
         * Property slsRegionId: SLS Region ID.
         * <p>
         * @return {@code this}
         * @param slsRegionId Property slsRegionId: SLS Region ID. This parameter is required.
         */
        public Builder slsRegionId(final java.lang.String slsRegionId) {
            this.props.slsRegionId(slsRegionId);
            return this;
        }
        /**
         * Property slsRegionId: SLS Region ID.
         * <p>
         * @return {@code this}
         * @param slsRegionId Property slsRegionId: SLS Region ID. This parameter is required.
         */
        public Builder slsRegionId(final com.aliyun.ros.cdk.core.IResolvable slsRegionId) {
            this.props.slsRegionId(slsRegionId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ga.LogStoreToEndpointGroupAttachment}.
         */
        @Override
        public com.aliyun.ros.cdk.ga.LogStoreToEndpointGroupAttachment build() {
            return new com.aliyun.ros.cdk.ga.LogStoreToEndpointGroupAttachment(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
