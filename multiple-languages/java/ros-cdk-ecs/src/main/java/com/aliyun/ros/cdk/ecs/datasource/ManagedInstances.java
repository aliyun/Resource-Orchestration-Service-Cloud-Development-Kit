package com.aliyun.ros.cdk.ecs.datasource;

/**
 * A ROS resource type:  <code>DATASOURCE::ECS::ManagedInstances</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T05:23:25.031Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.ManagedInstances")
public class ManagedInstances extends com.aliyun.ros.cdk.core.Resource {

    protected ManagedInstances(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ManagedInstances(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>DATASOURCE::ECS::ManagedInstances</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public ManagedInstances(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ecs.datasource.ManagedInstancesProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>DATASOURCE::ECS::ManagedInstances</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public ManagedInstances(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ecs.datasource.ManagedInstancesProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Create a new <code>DATASOURCE::ECS::ManagedInstances</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public ManagedInstances(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute InstanceIds: The list of managed instance ids.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceIds() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Instances: The list of managed instances.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstances() {
        return software.amazon.jsii.Kernel.get(this, "attrInstances", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.datasource.ManagedInstances}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.datasource.ManagedInstances> {
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
        private com.aliyun.ros.cdk.ecs.datasource.ManagedInstancesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property activationId: The ID of the activation code.
         * <p>
         * @return {@code this}
         * @param activationId Property activationId: The ID of the activation code. This parameter is required.
         */
        public Builder activationId(final java.lang.String activationId) {
            this.props().activationId(activationId);
            return this;
        }
        /**
         * Property activationId: The ID of the activation code.
         * <p>
         * @return {@code this}
         * @param activationId Property activationId: The ID of the activation code. This parameter is required.
         */
        public Builder activationId(final com.aliyun.ros.cdk.core.IResolvable activationId) {
            this.props().activationId(activationId);
            return this;
        }

        /**
         * Property instanceId: The ID of managed instance.
         * <p>
         * Valid values of N: 1 to 50.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of managed instance. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props().instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: The ID of managed instance.
         * <p>
         * Valid values of N: 1 to 50.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of managed instance. This parameter is required.
         */
        public Builder instanceId(final java.util.List<? extends java.lang.Object> instanceId) {
            this.props().instanceId(instanceId);
            return this;
        }

        /**
         * Property instanceIp: The internal or public IP address of the managed instance.
         * <p>
         * @return {@code this}
         * @param instanceIp Property instanceIp: The internal or public IP address of the managed instance. This parameter is required.
         */
        public Builder instanceIp(final java.lang.String instanceIp) {
            this.props().instanceIp(instanceIp);
            return this;
        }
        /**
         * Property instanceIp: The internal or public IP address of the managed instance.
         * <p>
         * @return {@code this}
         * @param instanceIp Property instanceIp: The internal or public IP address of the managed instance. This parameter is required.
         */
        public Builder instanceIp(final com.aliyun.ros.cdk.core.IResolvable instanceIp) {
            this.props().instanceIp(instanceIp);
            return this;
        }

        /**
         * Property instanceName: The name of the managed instance.
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: The name of the managed instance. This parameter is required.
         */
        public Builder instanceName(final java.lang.String instanceName) {
            this.props().instanceName(instanceName);
            return this;
        }
        /**
         * Property instanceName: The name of the managed instance.
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: The name of the managed instance. This parameter is required.
         */
        public Builder instanceName(final com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.props().instanceName(instanceName);
            return this;
        }

        /**
         * Property osType: The operating system type of the managed instance.
         * <p>
         * Valid values:
         * windows
         * linux
         * <p>
         * @return {@code this}
         * @param osType Property osType: The operating system type of the managed instance. This parameter is required.
         */
        public Builder osType(final java.lang.String osType) {
            this.props().osType(osType);
            return this;
        }
        /**
         * Property osType: The operating system type of the managed instance.
         * <p>
         * Valid values:
         * windows
         * linux
         * <p>
         * @return {@code this}
         * @param osType Property osType: The operating system type of the managed instance. This parameter is required.
         */
        public Builder osType(final com.aliyun.ros.cdk.core.IResolvable osType) {
            this.props().osType(osType);
            return this;
        }

        /**
         * Property tags: Tags of managedinstance.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags of managedinstance. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.ecs.datasource.RosManagedInstances.TagsProperty> tags) {
            this.props().tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.datasource.ManagedInstances}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.datasource.ManagedInstances build() {
            return new com.aliyun.ros.cdk.ecs.datasource.ManagedInstances(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.ecs.datasource.ManagedInstancesProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.ecs.datasource.ManagedInstancesProps.Builder();
            }
            return this.props;
        }
    }
}
